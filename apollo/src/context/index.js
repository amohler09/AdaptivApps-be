// @ts-check

// Apollo dependencies
const { AuthenticationError } = require('apollo-server')

const jwt = require('jsonwebtoken')

// We'll need this to convert from callback based functions
const { promisify } = require('util')

// Used to retrieve the public key for JWT validation
const JwksClient = require('jwks-rsa')

// The generated Prisma client
const { prisma } = require('../generated/prisma-client')

// A Winston logger, which will be added to the context
const winston = require('winston')
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()]
})
// console.log('Logging level: %s', logger.level);

// A simple user constructor
function User (id, name, email, groups) {
  this.id = id
  this.name = name
  this.email = email
  this.groups = groups
}

// Options used for verifying the JWT
const jwtVerifyOptions = {
  // Check the issuer to validate the source of the JWT
  issuer: process.env.JWT_ISSUER,
  algorithms: ['RS256']
}

// Creates a JWKS Client
const jwksClient = JwksClient({
  // URL of the JSON Web Key Set JWKS used to verifying the JWT
  jwksUri: `${process.env.JWKS_URI}`
})

// Creating the context object
exports.context = async ({ req, connection }) => {
  if (connection) {
    logger.debug("Generating context for subscription connection")

    return connection.context
  }

  // Grab the 'Authorization' token from the header
  const authorizationHeader = req.header('Authorization')
  if (typeof authorizationHeader !== 'string' || authorizationHeader == 'null' || authorizationHeader == '') {
    logger.error(
      'Authorization header missing from request: %O',
      req.headers
    )
    throw new AuthenticationError('Not authorized')
  }

  // Strip off the 'Bearer ' part from the header
  const encodedJWT = authorizationHeader.replace(/^Bearer\s/, '')

  const user = validateJWT(encodedJWT)

  // Don't let anyone past this point if they aren't authenticated
  if (typeof user === 'undefined' || user == null) {
    logger.error('Unable to validate JWT: %O', encodedJWT)
    throw new AuthenticationError('Not authorized')
  }

  logger.debug('Current user: %O', user)

  // Pack the user, Prisma client and Winston logger into the context
  return { user, prisma, logger }
}

exports.onConnect = (connectionParams, _webSocket) => {
  // logger.debug('Subscription onConnect: %O', connectionParams)

  if (connectionParams.authorization) {
    return validateJWT(connectionParams.authorization)
      .then(user => {
        return { user, prisma, logger }
      })
  }

  throw new Error('Missing auth token!')
}

// Decode the JWT so we can get the header
const validateJWT = async encodedJWT => {
  // logger.debug('Decoding token: %s', token);
  let jwtHeader
  try {
    jwtHeader = jwt.decode(encodedJWT, { complete: true }).header
  } catch (err) {
    logger.error('Error while decoding JWT: %O', encodedJWT)
    throw new AuthenticationError('Not authorized')
  }

  // Promisify the callback based function: https://github.com/auth0/node-jsonwebtoken/issues/111
  const getSigningKey = promisify(jwksClient.getSigningKey)

  // Get the signing key
  const key = await getSigningKey(jwtHeader.kid)
  const publicKey = key.getPublicKey()

  // Verify the JWT
  // logger.debug('Verifying and decoding JWT');
  const decodedJWT = jwt.verify(encodedJWT, publicKey, jwtVerifyOptions)

  // Create the User using the information from the JWT
  // logger.debug('Creating User using decoded JWT: %O', decodedJWT);
  const user = new User(
    (id = decodedJWT.sub),
    (name = decodedJWT.name),
    (email = decodedJWT.email),
    (groups = decodedJWT['http://adaptivapps.com/roles'])
  )

  return user
}

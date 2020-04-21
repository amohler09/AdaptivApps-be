// @ts-check

// Apollo dependencies
const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');

// We'll need this to convert from callback based functions
const { promisify } = require('util');

// Used to retrieve the public key for JWT validation
const JwksClient = require('jwks-rsa');

// The generated Prisma client
const { prisma } = require('../generated/prisma-client');

// A Winston logger, which will be added to the context
const winston = require('winston');
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});
console.log('Logging level: %s', logger.level);

// A simple user constructor
function User(id, name, email, groups) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.groups = groups;
}

// Options used for verifying the JWT
const jwtVerifyOptions = {
  // Check the issuer to validate the source of the JWT
  issuer: process.env.JWT_ISSUER,
  algorithms: ['RS256'],
};

// Creates a JWKS Client
const jwksClient = JwksClient({
  // URL of the JSON Web Key Set JWKS used to verifying the JWT
  jwksUri: `${process.env.JWKS_URI}`,
});

// Creating the context object
const context = async ({ req, connection }) => {
  if (connection) {
    return connection.context
  } else {
  // Grab the 'Authorization' token from the header
  const token = req.header('Authorization');
  if (typeof token != 'string' || token == 'null' || token == '') {
    logger.error(
      'Authorization token missing from request headers: %O',
      req.headers
    );
    throw new AuthenticationError('Not authorized');
  }

    // Decode the JWT so we can get the header
    logger.debug('Decoding token: %s', token);
    let tokenHeader;
    try {
      tokenHeader = jwt.decode(token, { complete: true }).header;
    } catch (err) {
      logger.error('Error while decoding token: %O', token);
      throw new AuthenticationError('Not authorized');
    }

    // Get the public key from the OAuth endpoint
    logger.debug('Retrieving public key used for JWT validation');
    const pubKey = await getKey(tokenHeader);

    // Verify the JWT
    logger.debug('Verifying and decoding JWT');
    const decodedJWT = jwt.verify(token, pubKey, jwtVerifyOptions);

    // Create the User using the information from the JWT
    logger.debug('Creating User using decoded JWT: %O', decodedJWT);
    const authenticatedUser = new User(
      (id = decodedJWT['sub']),
      (name = decodedJWT['name']),
      (email = decodedJWT['email']),
      (groups = decodedJWT['http://adaptivapps.com/roles'])
    );

    // Don't let anyone past this point if they aren't authenticated
    if (typeof authenticatedUser === 'undefined' || authenticatedUser == null) {
      logger.error('Unable to authenticate user: %O', req.header);
      throw new AuthenticationError('Not authorized');
    }

    logger.debug('Current user: %O', authenticatedUser);

    // Pack the user, Prisma client and Winston logger into the context
    return { user: authenticatedUser, prisma, logger: logger };
  }
};

// This function is called by the JWT verifier, which sends the JWT header and a
// callback to return the public key used for verifying the JWT signature
const getKey = async header => {
  // Promisify the callback based function: https://github.com/auth0/node-jsonwebtoken/issues/111
  const getSigningKey = promisify(jwksClient.getSigningKey);

  // Get the signing key
  const key = await getSigningKey(header.kid);
  const publicKey = key.getPublicKey();

  return publicKey;
};

module.exports = context;

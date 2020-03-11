// External dependencies
const { AuthenticationError, PubSub } = require('apollo-server');
const jwt = require('jsonwebtoken');

const { promisify } = require("util");
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
  transports: [new winston.transports.Console()]
});
console.log("Logging level: %s", logger.level)

function User(id, name, email, groups) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.groups = groups
}

// Options used for verifying the JWT
const jwtVerifyOptions = {
  issuer: process.env.AUTH0_DOMAIN,
  algorithms: ['RS256'],
};

// Creates a JWKS Client
const jwksClient = JwksClient({
  // URL of the JSON Web Key Set JWKS used to verifying the JWT
  jwksUri: `${process.env.JWKS_URI}`,
});

/**
 * This file creates a context object to pass request, user, and prisma client
 * into all resolvers. Throws an error if requests are not authenticated, meaning
 * no token/authorization is attached.
 */

// Creating the context object
const context = async ({ req, connection }) => {
  if (connection) {
    // check connection for metadata
    return connection.context;
  } else {
    const token = req.header("Authorization");
    if(typeof token != 'string' || token == 'null' || token == '') {
      logger.error("Authorization token missing from request headers: %O", req.headers)
      throw new AuthenticationError("Not authorized")
    }

    // Decode the JWT so we can get the header
    logger.debug("Decoding token: %s", token)
    let tokenHeader;
    try {
      tokenHeader = jwt.decode(token, {complete: true}).header;
    } catch(err) {
      logger.error("Error while decoding token: %O", token)
      throw new AuthenticationError("Not authorized")
    }

    logger.debug("Retrieving public key used for JWT validation")
    const pubKey = await getKey(tokenHeader);

    logger.debug("Verifying and decoding JWT")
    const decodedJWT = jwt.verify(token, pubKey, jwtVerifyOptions);

    logger.debug("Creating User using decoded JWT: %O", decodedJWT)
    const authenticatedUser = new User(id=decodedJWT['sub'],
                                       name=decodedJWT['name'],
                                       email=decodedJWT['email'],
                                       groups=decodedJWT['http://adaptivapps.com/roles'])

    if(typeof authenticatedUser === 'undefined' || authenticatedUser == null) {
      logger.error("Unable to authenticate user: %O", req.header)
      throw new AuthenticationError("Not authorized")
    }

    logger.debug("Current user: %O", authenticatedUser)
    return {user: authenticatedUser, prisma, logger: logger};
  }
};

// This function is called by the JWT verifier, which sends the JWT header and a
// callback to return the public key used for verifying the JWT signature
const getKey = async (header) => {
  const getSigningKey = promisify(jwksClient.getSigningKey);
  const key = await getSigningKey(header.kid);
  const publicKey = key.getPublicKey();

  return publicKey;
}

module.exports = context;

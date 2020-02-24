const { prisma } = require('../generated/prisma-client');
const { ApolloServer, gql, AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

// const decodeToken = require('../auth');

// Create context object to pass request, user and prisma client
// into all resolvers. Throws error if requests are not authenticated.

const client = jwksClient({
  jwksUri: `https://dev-sxhevmag.auth0.com/.well-known/jwks.json`,
});

function getKey(header, cb) {
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const options = {
  audience: 'https://dev-sxhevmag.auth0.com/api/v2/',
  issuer: `https://dev-sxhevmag.auth0.com/`,
  algorithms: ['RS256'],
};

const context = async ({ req }) => {
  const token = req.headers.authorization;
  if (token) {
    const user = new Promise((resolve, reject) => {
      jwt.verify(token, getKey, options, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(
          decoded.sub,
          decoded.iss,
          decoded.email,
          decoded.name,
          decoded.profile
        );
      });
    });
    return { ...req, user, prisma };
  } else if (!token) throw new AuthenticationError('you must be logged in');
  // For development only, remove before deployment
  // Or if you're testing authentication flow
  return { req, prisma };
};

module.exports = context;

// @ts-check

const { importSchema } = require('graphql-import');
const { ApolloServer, gql, AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const resolvers = require('./resolvers');
const context = require('./context');

const PORT = process.env.PORT || 8000;

const client = jwksClient({
  jwksUri: `https://${process.env.OAUTH_TOKEN_ENDPOINT}/.well-known/jwks.json`
});
function getKey(header, cb){
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}
const options = {
  audience: `${process.env.OAUTH_CLIENT_ID}`,
  issuer: `${process.env.OAUTH_TOKEN_ENDPOINT}`,
  algorithms: ['RS256']
};

async function main() {
  console.log('Importing schema');

  const typeDefs = await importSchema('schema/schema.graphql');

  console.log(typeDefs);

  console.log('Imported schema');

  const server = new ApolloServer({
    resolvers,
    typeDefs: gql(typeDefs),
    context,
    cors: true,
    dataSources: () => ({}),
  });

  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();

// @ts-check

const { importSchema } = require('graphql-import');
const { ApolloServer, gql } = require('apollo-server');
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

const resolvers = require('./resolvers');
const context = require('./context');

const PORT = process.env.PORT || 8000;

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

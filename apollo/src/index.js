// Apollo dependencies
const { importSchema } = require('graphql-import');
const { ApolloServer, gql } = require('apollo-server');

// Import resolvers and context
const resolvers = require('./resolvers');
const context = require('./context');

// Declare port
const PORT = process.env.PORT || 8000;

async function main() {
  const typeDefs = await importSchema('schema/schema.graphql');

  const server = new ApolloServer({
    resolvers,
    typeDefs: gql(typeDefs),
    context,
    cors: {
      origin: '*', // <- allow request from all domains
      credentials: true,
    },
    dataSources: () => ({}),
  });

  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

main();

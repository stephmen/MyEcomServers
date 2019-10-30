const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');
const db = require("./db");

const typeDefs = importSchema('schema.graphql');
 const server = new ApolloServer({
      typeDefs,
      resolvers,
      resolverValidationOptions: {
        requireResolversForResolveType: false
      },
      context: req => ({ ...req, db})

    })


    server
    .listen({
      port: 4444
    })
    .then(info => console.log(`Server started on http://localhost:${info.port}`));
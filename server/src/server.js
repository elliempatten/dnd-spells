const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const PORT = 4000;

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

const server = new ApolloServer({ typeDefs, resolvers, playground: true });
server.applyMiddleware({ app, cors: corsOptions });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

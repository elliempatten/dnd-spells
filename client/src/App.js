import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Spells from './example';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> Spells </h1>
        <Spells />
      </div>
    </ApolloProvider>
  );
};

export default hot(module)(App);

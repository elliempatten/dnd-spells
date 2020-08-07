import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import SpellList from './SpellList';
import Banner from './Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import AddSpellsModal from './AddSpellsModal';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const Home = () => {
  return (
    <div className="App">
      <Banner />
      <SpellList />
    </div>
  )
}

const ModalSwitch = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route path="/" component={Home}/>
        <Route path="/add-spells/:level" to={AddSpellsModal}/>
      </Switch>
      {background && <Route path="/add-spells/:level" children={<AddSpellsModal />} />}
    </div>
  )
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ModalSwitch/>
      </Router>
    </ApolloProvider>
  );
};

export default hot(module)(App);

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Planets from './components/planets/Planets';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/planets" exact component={Planets} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

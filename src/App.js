import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Planets from './components/planets/Planets';
import People from './components/people/People';
import Species from './components/species/Species';
import Vehicles from './components/vehicles/Vehicles';
import Films from './components/films/Films';
import Starships from './components/starships/Starships';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/planets" exact component={Planets} />
          <Route path="/people" exact component={People} />
          <Route path="/species" exact component={Species} />
          <Route path="/vehicles" exact component={Vehicles} />
          <Route path="/films" exact component={Films} />
          <Route path="/starships" exact component={Starships} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

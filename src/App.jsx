import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/beers/:beerId" component={BeerDetails} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  );
}

export default App;

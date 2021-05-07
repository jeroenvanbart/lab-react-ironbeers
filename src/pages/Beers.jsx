import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header/Header';
import BeerList from '../components/AllBeers/BeerList';

class Beers extends Component {
  state = {
    beersList: [],
  };

  componentDidMount() {
    /* A call to the backend api */
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beersList: response.data });
      })
      .catch((err) => console.error(`Error occurred ${err}`));
  }

  render() {
    return (
      <div>
        <Header />
        <BeerList beersList={this.state.beersList} />
      </div>
    );
  }
}

export default Beers;

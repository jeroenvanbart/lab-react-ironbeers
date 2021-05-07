import React from 'react';
import BeerCard from './BeerCard';

const BeerList = ({ beersList }) => {
  return beersList.map((beerItem) => <BeerCard key={beerItem._id} {...beerItem} />);
};

export default BeerList;

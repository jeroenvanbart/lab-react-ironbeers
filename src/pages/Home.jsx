import React from 'react';

import Hero from '../components/Hero/Hero';
import PageLinkCard from '../components/PageLinkCard/PageLinkCard';

import beerPic from '../assets/beers.png';
import newBeerPic from '../assets/new-beer.png';
import randomBeerPic from '../assets/random-beer.png';

const Home = () => {
  return (
    <>
      <Hero />
      <PageLinkCard image={beerPic} title={'All Beers'} pageLink={'/beers'}>
        Check out all the beers!
      </PageLinkCard>
      <PageLinkCard
        image={newBeerPic}
        title={'New Beer'}
        pageLink={'/new-beer'}
      >
        Add a new beer.
      </PageLinkCard>
      <PageLinkCard
        image={randomBeerPic}
        title={'Random Beer'}
        pageLink={'/random-beer'}
      >
        Find a random beer
      </PageLinkCard>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header/Header';

const BeerDetails = ({ match }) => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    /* A call to the backend api */
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${match.params.beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((err) => console.error(`Error occurred ${err}`));
  }, [match.params.beerId]);

  return (
    <div>
      <Header />

      <div>
        <img
          src={beer.image_url}
          alt="beer"
          style={{ width: '10%', height: '10%' }}
        />
        <div className="flex-row">
          <div className="flex-double-column">
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
          </div>

          <div className="flex-column">
            <p>{beer.attenuation_level}</p>
            <p>
              <strong>{beer.first_brewed}</strong>
            </p>
          </div>
        </div>

        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default BeerDetails;

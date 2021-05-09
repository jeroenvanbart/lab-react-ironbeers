import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import axios from 'axios';
import './RandomBeer.css'


const RandomBeer = (props) => {
const [beer, setBeer] = useState({});
  useEffect(() => {
    /* A call to the backend api */
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/`)
      .then((response) => {
        let randomIndex = Math.floor(Math.random() * response.data.length)
        setBeer(response.data[randomIndex])
      })
      .catch((err) => console.error(`Error occurred ${err}`));
  }, []);


  return (
    <div>
      <Header />
    <div className="flex-column flex-center">
    <div>
      <img className="randomimage" src={beer.image_url} alt="" />
    </div>
      
    
    <div className="beertag">
      <h3>{beer.name}</h3>
      <h3>{beer.attenuation_level}</h3>
    </div>
    <div>
      <h5>{beer.tagline}</h5>
      <p><strong>{beer.first_brewed}</strong></p>
    </div>
    <p>{beer.description}</p>
    <p>{beer.contributed_by}</p>
            
</div>
    </div>
  );
};

export default RandomBeer;

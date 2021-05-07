import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = ({ image_url, _id, name, tagline, contributed_by }) => {
  return (
    <div className="flex-row">
      <figure className="flex-column">
        <img
          src={image_url}
          alt="beer"
          style={{ width: '50%', height: '70%' }}
        />
      </figure>
      <div className="flex-double-column flex-center">
        <Link to={`/beers/${_id}`}>Name: {name}</Link>
        <p>{tagline}</p>
        <p>Contributed by: {contributed_by}</p>
      </div>
    </div>
  );
};

export default BeerCard;

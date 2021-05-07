import React from 'react';
import './PageLinkCard.css';
import { Link } from 'react-router-dom';

const PageLinkCard = ({ image, title, pageLink, children }) => {
  return (
    <Link
      to={pageLink}
      style={{ textDecoration: 'none' }}
      className="flex-row card-link-container"
    >
      <div className="flex-column flex-center">
        <img src={image} alt="beer" />
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </Link>
  );
};

export default PageLinkCard;

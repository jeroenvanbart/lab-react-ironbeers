import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="flex-row header-container">
      <div className="flex-column flex-center">
        <h1>Iron Beers</h1>
        <p>The React.js Edition</p>
      </div>
    </section>
  );
};

export default Header;

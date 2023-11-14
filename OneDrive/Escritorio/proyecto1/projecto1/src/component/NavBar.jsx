import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">E-Commerce</a>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/map">Map</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/timeline">Timeline</Link>
      <Link to="/tags">Tags</Link>
    </nav>
  );
};

export default Navbar;

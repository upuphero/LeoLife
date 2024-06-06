import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ width: '200px', background: '#ddd', padding: '10px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/timeline">Timeline</Link></li>
        <li><Link to="/tags">Tags</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

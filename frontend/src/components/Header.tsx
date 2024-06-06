import React from 'react';
import { IconButton } from '@mui/material';
import { Language, Search, Palette } from '@mui/icons-material';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div>Header</div>
      <div>
        <IconButton><Palette /></IconButton>
        <IconButton><Language /></IconButton>
        <IconButton><Search /></IconButton>
      </div>
    </header>
  );
};

export default Header;

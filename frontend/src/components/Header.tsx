import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN'); // Default language English

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Additional theme logic here
  };

  const changeLanguage = () => {
    setLanguage(language === 'EN' ? 'ZH' : 'EN');
    // Additional language change logic here
  };

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '10px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#fff', // You can adjust the background color as needed
      zIndex: 1000, // Ensures header is above other content
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Adds shadow for better visibility
    }}>
      {/* Search Icon */}
      <Tooltip title="Search">
        <IconButton onClick={() => { /* Implement search logic here */ }}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
      {/* Theme Toggle Icon */}
      <Tooltip title="Toggle theme">
        <IconButton onClick={toggleTheme}>
          {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
      {/* Language Icon */}
      <Tooltip title="Change language">
        <IconButton onClick={changeLanguage}>
          <LanguageIcon />
        </IconButton>
      </Tooltip>
    </header>
  );
}

export default Header;

import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const NavItem = () => {
  return (
    <Toolbar sx={{display: 'flex', justifyContent: 'space-evenly' }}>
    <Button component={RouterLink} to="/" color="inherit">Home</Button>
    <Button component={RouterLink} to="/quiz" color="inherit">Quiz</Button>
    <Button component={RouterLink} to="/results" color="inherit">Results</Button>
    <Button component={RouterLink} to="/news" color="inherit">News</Button>
  </Toolbar>
);
};

export default NavItem;

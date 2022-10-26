import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from '../components';

const MainLayout = () => (
  <Box sx={(theme) => ({
    minHeight: `calc(100vh - ${theme.mixins.navbar.height})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })}
  >
    <Navbar />
    <Outlet />
  </Box>
);

export default MainLayout;

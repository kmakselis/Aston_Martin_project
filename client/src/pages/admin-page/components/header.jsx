import React from 'react';
import {
  Paper,
  Button,
} from '@mui/material';

const Header = ({ openModal }) => (
  <Paper
    sx={{ p: 2 }}
  >
    <Button variant="contained" color="success" onClick={openModal}>Sukurti naują pasiūlymą</Button>
  </Paper>
);

export default Header;

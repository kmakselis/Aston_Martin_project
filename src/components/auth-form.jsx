import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

const AuthForm = ({
  title,
  btnText,
  disabled = false,
  onSubmit,
  children,
}) => (
  <Paper
    elevation={3}
    sx={{
      p: 4,
      width: 400,
      my: 4,
    }}
  >
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
      onSubmit={onSubmit}
    >
      <SecurityIcon sx={{ fontSize: 50, color: 'primary.main' }} />
      <Typography component="h1" variant="h4">{title}</Typography>
      {children}
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={disabled}
      >
        {btnText}
      </Button>
    </Box>
  </Paper>
);

export default AuthForm;

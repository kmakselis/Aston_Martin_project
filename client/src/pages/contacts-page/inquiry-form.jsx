import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';

const InquiryForm = ({
  title,
  btnText,
  disabled = false,
  onSubmit,
  children,
}) => (
  <Paper
    elevation={10}
    sx={{
      width: '100%',
      height: 450,
      color: '#222',
      zIndex: 5,
      mt: 5,
      backgroundColor: 'rgba(255, 255, 255, 0)',
    }}
  >
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      onSubmit={onSubmit}
    >
      <Typography component="h1" variant="h4">{title}</Typography>
      {children}
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="error"
        disabled={disabled}
      >
        {btnText}
      </Button>
    </Box>
  </Paper>
);

export default InquiryForm;

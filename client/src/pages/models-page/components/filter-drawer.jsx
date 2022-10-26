import React from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const drawerWidth = 280;

const FilterDrawer = ({ children }) => {
  const isExtraLarge = useMediaQuery((theme) => theme.breakpoints.up('xl'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 25,
          right: 25,
          zIndex: 5,
          height: 64,
          width: 64,
          borderRadius: '10%',
          display: { xl: 'none', xxl: 'none' },
        }}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <TuneIcon sx={{ color: 'common.white', fontSize: '2rem' }} />
      </Button>

      <Drawer
        anchor="left"
        variant={isExtraLarge ? 'persistent' : 'temporary'}
        open={isExtraLarge || drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={(theme) => ({ width: drawerWidth, p: 2, mt: theme.mixins.navbar.height })}>
          <Typography variant="h4">Filtrai</Typography>
          <Divider sx={{ my: 2 }} />
          {children}
        </Box>
      </Drawer>
    </>
  );
};

export default FilterDrawer;

import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  Divider,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import * as Nav from './components';

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Modeliai', to: '/models' },
  { text: 'Kontaktai', to: '/contacts' },
  { text: 'Admin', to: '/admin' },
];

const expandBr = 'md';

const Navbar = () => {
  const isContracted = useMediaQuery((theme) => theme.breakpoints.down(expandBr));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isContracted && open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isContracted]);

  return (
    <AppBar position="fixed">
      <Box sx={(theme) => theme.mixins.navbar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { [expandBr]: 'none' }, alignSelf: 'center' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Box sx={{ display: { xs: 'none', [expandBr]: 'flex' }, alignSelf: 'stretch' }}>
          {pages.map(({ text, to }) => <Nav.Link key={to} to={to}>{text}</Nav.Link>)}
        </Box>

        {isContracted && (
          <Drawer anchor="top" open={open}>
            <Box sx={(theme) => ({
              paddingTop: `calc(${theme.spacing(4)} + ${theme.mixins.navbar.height})`,
              paddingBottom: theme.spacing(4),
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100vh',
            })}
            >
              <Box>
                {pages.map(({ text, to }) => (
                  <Nav.Link
                    key={to}
                    to={to}
                    contracted
                    onClick={() => setOpen(false)}
                  >
                    {text}
                  </Nav.Link>
                ))}
              </Box>
            </Box>
          </Drawer>
        )}

        <Box sx={{ display: { xs: 'none', [expandBr]: 'flex' }, alignSelf: 'stretch' }}>
          <Nav.Link to="/auth/login" onClick={() => setOpen(false)}>Prisijungimas</Nav.Link>
          <Divider orientation="vertical" flexItem sx={{ my: 2, bgcolor: 'white' }} />
          <Nav.Link to="/auth/register" onClick={() => setOpen(false)}>Registracija</Nav.Link>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;

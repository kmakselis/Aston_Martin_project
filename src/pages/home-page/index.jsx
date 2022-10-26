import * as React from 'react';
import {
  Box,
  Button,
  LinearProgress,
  styled,
  Typography,
} from '@mui/material';
import Countup from 'react-countup';
// import CartContext from '../contexts/cart-context';

const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  order: 1,
  objectFit: 'cover',
});

const ContentContainer = styled(Box)({
  position: 'absolute',
  top: 180,
  left: '5%',
  height: '500px',
  width: '80%',
  order: 2,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'start',
});

const ParamsContainer = styled(Box)({
  position: 'absolute',
  left: '66%',
  height: '300px',
  width: '300px',
  order: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
});

const ModelNames = styled(Box)(({ theme }) => ({
  height: '80%',
  width: 650,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(6),
}));

const MAX_SPEED = 400;
const speedRatio = 100 / MAX_SPEED;
const MAX_POWER = 700;
const powerRatio = 100 / MAX_POWER;
const MAX_ACCELERATION = 5;
const accelerationRatio = 100 / MAX_ACCELERATION;

const myObjects = [
  { id: 1, name: 'DB11' },
  { id: 2, name: 'VANTAGE' },
  { id: 3, name: 'DBX' },
  { id: 4, name: 'DBS' },
];

const HomePage = () => {
  const [speed, setSpeed] = React.useState(367);
  const [power, setPower] = React.useState(510);
  const [acceleration, setAcceleration] = React.useState(2.8);
  const [bgImage, setbgImage] = React.useState('/db11.jpg');
  const [activeButtonState, setActiveButtonState] = React.useState(0);

  const DB11Progress = () => {
    setSpeed(367);
    setPower(510);
    setAcceleration(2.8);
    setbgImage('/db11.jpg');
  };

  const DBXProgress = () => {
    setSpeed(317);
    setPower(442);
    setAcceleration(4.8);
    setbgImage('/dbx.jpg');
  };

  const VantageProgress = () => {
    setSpeed(354);
    setPower(503);
    setAcceleration(3);
    setbgImage('/vantage.jpg');
  };

  const DBSProgress = () => {
    setSpeed(317);
    setPower(402);
    setAcceleration(3.5);
    setbgImage('/dbs.jpg');
  };

  const toggleActiveStyles = (index) => {
    if (index === 0) {
      DB11Progress();
    } else if (index === 1) {
      VantageProgress();
    } else if (index === 2) {
      DBXProgress();
    } else if (index === 3) {
      DBSProgress();
    }

    setActiveButtonState(index);
  };

  return (
    <Box>
      <Background component="img" src={bgImage} />
      <ContentContainer>

        <ModelNames component="main">

          {myObjects.map((el, index) => (
            <Button
              variant="text"
              key={el.id}
              sx={{
                typography: activeButtonState === index ? 'h1' : 'h2',
                opacity: activeButtonState === index ? '1' : '0.5',
                lineHeight: '2rem',
                color: '#fff',
              }}
              onClick={() => { toggleActiveStyles(index); }}
            >
              {el.name}
            </Button>
          ))}
        </ModelNames>

        <ParamsContainer>
          <Typography
            variant="h6"
            component="h1"
            sx={{ color: '#fff', lineHeight: '1rem' }}
          >
            Maksimalus greitis
          </Typography>
          <Box sx={{ color: '#fff', lineHeight: '2rem' }}>
            <Countup start={0} end={speed} duration={0.4} suffix=" km/h" preserveValue />
          </Box>
          <Box sx={{ width: '100%', marginBottom: [3] }}>
            <LinearProgress
              variant="determinate"
              value={speed * speedRatio}
              color="secondary"
            />
          </Box>

          <Typography
            variant="h6"
            component="h1"
            sx={{ color: '#fff', lineHeight: '1rem' }}
          >
            Galia
          </Typography>
          <Box sx={{ color: '#fff', lineHeight: '2em' }}>
            <Countup start={0} end={power} duration={0.4} suffix=" AG" />
          </Box>
          <Box sx={{ width: '100%', marginBottom: [3] }}>
            <LinearProgress
              variant="determinate"
              value={power * powerRatio}
              color="secondary"
            />
          </Box>
          <Typography
            variant="h6"
            component="h1"
            sx={{ color: '#fff', lineHeight: '1rem' }}
          >
            0-100km
          </Typography>
          <Box sx={{ color: '#fff', lineHeight: '2em' }}>
            <Countup start={0} end={acceleration} duration={0.4} suffix=" s" decimals={1} />
          </Box>
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              value={acceleration * accelerationRatio}
              color="secondary"
            />
          </Box>
        </ParamsContainer>
      </ContentContainer>
    </Box>
  );
};

export default HomePage;

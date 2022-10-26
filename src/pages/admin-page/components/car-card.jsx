import * as React from 'react';
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import Image from './image';

const CarCard = ({
  model,
  engine,
  color,
  gearbox,
  maxSpeed,
  power,
  zeroToHundred,
  price,
  img,
  onDelete,
  onEdit,
}) => (
  <Card sx={{
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }}
  >
    <Box sx={{ position: 'relative', width: '100%', pt: '65%' }}>
      <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
    </Box>

    <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
      <Typography variant="h6" component="div">{model}</Typography>
    </Box>
    <CardContent sx={{
      display: 'flex', justifyContent: 'center', height: '100%', flexGrow: 1,
    }}
    >

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        m: 1,
        width: '50%',
      }}
      >
        <Box sx={{ m: 1 }}>
          <Typography variant="subtitle" component="div">Variklis:</Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          <Typography variant="subtitle" component="div">Spalva:</Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          <Typography variant="subtitle" component="div">Pavarų dėžė:</Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          <Typography variant="subtitle" component="div">Maksimalus greitis:</Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          <Typography variant="subtitle" component="div">Galia:</Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          <Typography variant="subtitle" component="div">0-100 km/h:</Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          <Typography variant="subtitle" component="div">Kaina:</Typography>
        </Box>

      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        m: 1,
        width: '50%',
      }}
      >
        <Box sx={{ fontWeight: 'bold', m: 1 }}>
          <Typography variant="subtitle" component="div">{engine}</Typography>
        </Box>
        <Box sx={{ fontWeight: 'bold', m: 1 }}>
          <Typography variant="subtitle" component="div">{color}</Typography>
        </Box>
        <Box sx={{ fontWeight: 'bold', m: 1 }}>
          <Typography variant="subtitle" component="div">{gearbox}</Typography>
        </Box>
        <Box sx={{ fontWeight: 'bold', m: 1 }}>
          <Typography variant="subtitle" component="div">{maxSpeed}</Typography>
        </Box>
        <Box sx={{ fontWeight: 'bold', m: 1 }}>
          <Typography variant="subtitle" component="div">{power}</Typography>
        </Box>
        <Box sx={{ fontWeight: 'bold', m: 1 }}>
          <Typography variant="subtitle" component="div">{zeroToHundred}</Typography>
        </Box>
        <Box sx={{ fontWeight: 'bold', m: 1 }}>
          <Typography variant="subtitle" component="div">{price}</Typography>
        </Box>
      </Box>
    </CardContent>
    <CardActions sx={{ p: 2, alignSelf: 'center' }}>
      <Button
        size="large"
        variant="contained"
        color="info"
        onClick={onEdit}
      >
        Atnaujinti
      </Button>
      <Button
        size="large"
        variant="contained"
        color="error"
        onClick={onDelete}
      >
        Ištrinti
      </Button>
    </CardActions>
  </Card>
);

export default CarCard;

import * as React from 'react';
import {
  Box, Fade, Grid, Typography,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import CarService from '../../services/car-service';
import { Image } from '../../components';
import wait from '../../helpers/wait';
import { CarCard, Filters } from './components';

const drawerWidth = 280;

const ModelsPage = () => {
  const [cars, setCars] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchParams] = useSearchParams();

  const handleFetchCars = React.useCallback(async () => {
    setLoading(true);
    const [fetchedCars] = await Promise.all([
      CarService.fetchAll(searchParams.toString()),
      wait(100),
    ]);
    setLoading(false);
    setCars(fetchedCars);
  }, [searchParams]);

  React.useEffect(() => {
    handleFetchCars();
  }, [handleFetchCars]);

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 8,
      }}
      >
        <Typography
          variant="h3"
          sx={{ lineHeight: '2em' }}
        >
          Specialūs pasiūlymai
        </Typography>
      </Box>

      <Filters drawerWidth={drawerWidth} />

      <Box sx={{ width: '100%' }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Fade in>
              <Image src="/loading.gif" sx={{ width: 200, pt: 6 }} />
            </Fade>
          </Box>
        ) : (
          <Fade in>
            {cars.length > 0 ? (
              <Grid container spacing={2} sx={{ py: 10, px: 2, pl: { xl: `${drawerWidth}px` } }}>
                {cars.map(({
                  id,
                  model,
                  engine,
                  color,
                  gearbox,
                  maxSpeed,
                  power,
                  zeroToHundred,
                  price,
                  img,
                }) => (
                  <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <CarCard
                      id={id}
                      model={model}
                      engine={engine}
                      color={color}
                      gearbox={gearbox}
                      maxSpeed={maxSpeed}
                      power={power}
                      zeroToHundred={zeroToHundred}
                      price={price}
                      img={img}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography
                variant="h3"
                sx={{
                  color: 'error.main',
                  width: '100%',
                  textAlign: 'center',
                  mt: 6,
                }}
              >
                Nerasta prekių
              </Typography>
            )}
          </Fade>
        )}
      </Box>
    </Box>
  );
};

export default ModelsPage;

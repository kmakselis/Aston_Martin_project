import * as React from 'react';
import {
  Box,
  Grid,
  Modal,
} from '@mui/material';
import CarService from '../../services/car-service';
import { CarCard, Header, CarForm } from './components';

const AdminPage = () => {
  const [cars, setCars] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [carEditing, setCarEditing] = React.useState(null);

  const closeModal = () => {
    setModalOpen(false);
    setCarEditing(null);
  };

  const fetchAllCars = async () => {
    const fetchedCars = await CarService.fetchAll();
    setCars(fetchedCars);
  };

  const createCar = async (carProps) => {
    await CarService.create(carProps);
    await fetchAllCars();
    setModalOpen(false);
  };

  const deleteCar = async (id) => {
    await CarService.remove(id);
    fetchAllCars();
  };

  const editCar = (id) => {
    const foundCar = cars.find((c) => c.id === id);
    setCarEditing(foundCar);
    setModalOpen(true);
  };

  const updateCar = async (carProps) => {
    await CarService.update(carEditing.id, carProps);
    await fetchAllCars();
    closeModal();
  };

  React.useEffect(() => {
    fetchAllCars();
  }, []);

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 8,
      }}
      >
        <Header openModal={() => setModalOpen(true)} />
        <Modal open={modalOpen} onClose={closeModal}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          >
            <CarForm
              onSubmit={carEditing ? updateCar : createCar}
              formTitle={carEditing ? 'Atnaujinti pasiūlymą' : 'Sukurti naują pasiūlymą'}
              submitText={carEditing ? 'Atnaujinti' : 'Sukurti'}
              initValues={carEditing}
            />
          </Box>
        </Modal>
      </Box>
      <Grid container spacing={2} sx={{ py: 10, px: 2 }}>
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
          <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
            <CarCard
              model={model}
              engine={engine}
              color={color}
              gearbox={gearbox}
              maxSpeed={maxSpeed}
              power={power}
              zeroToHundred={zeroToHundred}
              price={price}
              img={img}
              onDelete={() => deleteCar(id)}
              onEdit={() => editCar(id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminPage;

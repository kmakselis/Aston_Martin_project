import React from 'react';
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
} from '@mui/material';
import CategoryService from '../../../services/category-service';

const CarForm = ({
  onSubmit,
  formTitle,
  submitText,
  initValues,
}) => {
  const [categories, setCategories] = React.useState([]);
  const [model, setModel] = React.useState(initValues?.model ?? '');
  const [engine, setEngine] = React.useState(initValues?.engine ?? '');
  const [categoryId, setCategoryId] = React.useState(initValues?.categoryId ?? '');
  const [color, setColor] = React.useState(initValues?.color ?? '');
  const [gearbox, setGearbox] = React.useState(initValues?.gearbox ?? '');
  const [maxSpeed, setMaxSpeed] = React.useState(initValues?.maxSpeed ?? '');
  const [power, setPower] = React.useState(initValues?.power ?? '');
  const [zeroToHundred, setZeroToHundred] = React.useState(initValues?.zeroToHundred ?? '');
  const [price, setPrice] = React.useState(initValues?.price ?? '');
  const [img, setImg] = React.useState(initValues?.img ?? '');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      model,
      engine,
      categoryId,
      color,
      gearbox,
      maxSpeed,
      power,
      zeroToHundred,
      price,
      img,
    });
  };

  React.useEffect(() => {
    (async () => {
      const fethedCategories = await CategoryService.fetchAll();
      setCategories(fethedCategories);
    })();
  }, []);

  return (
    <Paper component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ textAlign: 'center', pb: 2 }}>{formTitle}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Modelis"
          fullWidth
          variant="filled"
          value={model}
          onChange={(event) => setModel(event.target.value)}
        />
        <TextField
          label="Variklis"
          fullWidth
          variant="filled"
          value={engine}
          onChange={(event) => setEngine(event.target.value)}
        />
        <TextField
          label="Kategorija"
          fullWidth
          select
          variant="filled"
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          {categories.map(({ id, title }) => (
            <MenuItem key={id} value={id}>{title}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Spalva"
          fullWidth
          variant="filled"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
        <TextField
          label="Pavarų dėžė"
          fullWidth
          select
          variant="filled"
          value={gearbox}
          onChange={(event) => setGearbox(event.target.value)}
        >
          <MenuItem value="Automatinė">Automatinė</MenuItem>
        </TextField>
        <TextField
          label="Maksimalus greitis"
          fullWidth
          variant="filled"
          value={maxSpeed}
          onChange={(event) => setMaxSpeed(event.target.value)}
        />
        <TextField
          label="Galia (AG)"
          fullWidth
          variant="filled"
          value={power}
          onChange={(event) => setPower(event.target.value)}
        />
        <TextField
          label="0-100 km/h"
          fullWidth
          variant="filled"
          value={zeroToHundred}
          onChange={(event) => setZeroToHundred(event.target.value)}
        />
        <TextField
          label="Kaina"
          fullWidth
          variant="filled"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          label="Nuotrauka"
          fullWidth
          variant="filled"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
          >
            {submitText}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CarForm;

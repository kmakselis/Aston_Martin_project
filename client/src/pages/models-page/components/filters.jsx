import React from 'react';
import { Button, Divider } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { AutoSelectField, RangeField, CheckboxGroupField } from '../../../components';
import FilterDrawer from './filter-drawer';
import ModelService from '../../../services/model-service';
import ColorService from '../../../services/color-service';
import EngineService from '../../../services/engine-service';

const MIN = 154750;
const MAX = 267948;

const Filters = ({ drawerWidth }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialSetupDone, setIntialSetupDone] = React.useState(false);

  const [models, setModels] = React.useState([]);
  const [engines, setEngines] = React.useState([]);
  const [colors, setColors] = React.useState([]);

  const [priceRange, setPriceRange] = React.useState([MIN, MAX]);
  const [selectedModel, setSelectedModels] = React.useState([]);
  const [selectedEngine, setSelectedEngine] = React.useState([]);
  const [color, setColor] = React.useState(null);

  const handlePriceRangeChange = (_, [min, max]) => {
    if (min === MIN) {
      searchParams.delete('price_gte');
    } else {
      searchParams.set('price_gte', min);
    }
    if (max === MAX) {
      searchParams.delete('price_lte');
    } else {
      searchParams.set('price_lte', max);
    }

    setSearchParams(searchParams);
  };

  const handleModelChange = (_, newModels) => {
    const ids = newModels.map((model) => model.id);
    searchParams.delete('modelId');
    ids.forEach((id) => searchParams.append('modelId', id));

    setSearchParams(searchParams);
    setSelectedModels(newModels);
  };

  const handleEngineChange = (_, newEngines) => {
    const ids = newEngines.map((engine) => engine.id);
    searchParams.delete('engineId');
    ids.forEach((id) => searchParams.append('engineId', id));

    setSearchParams(searchParams);
    setSelectedEngine(newEngines);
  };

  const handleColorChange = (_, newColors) => {
    if (newColors) {
      searchParams.set('colorId', newColors.id);
    } else {
      searchParams.delete('colorId');
    }
    setSearchParams(searchParams);
    setColor(newColors);
  };

  const deleteFilters = () => {
    searchParams.delete('price_gte');
    searchParams.delete('price_lte');
    searchParams.delete('modelId');
    searchParams.delete('engineId');
    searchParams.delete('colorId');

    setSearchParams(searchParams);
  };

  React.useEffect(() => {
    (async () => {
      const [fetchedModels, fetchedEngines, fetchedColors] = await Promise.all([
        ModelService.fetchAll(),
        EngineService.fetchAll(),
        ColorService.fetchAll(),
      ]);
      const priceMinInit = searchParams.get('price_gte') ?? MIN;
      const priceMaxInit = searchParams.get('price_lte') ?? MAX;
      setPriceRange([priceMinInit, priceMaxInit]);

      const colorId = searchParams.get('colorId');
      if (colorId) {
        const colorInit = fetchedColors.find((col) => col.id === colorId) ?? null;
        setColor(colorInit);
      }

      const selectedModelsInit = searchParams
        .getAll('modelId')
        .map((id) => fetchedModels.find((model) => model.id === id))
        .filter((model) => model !== undefined);
      setSelectedModels(selectedModelsInit);

      const selectedEnginesInit = searchParams
        .getAll('engineId')
        .map((id) => fetchedEngines.find((engine) => engine.id === id))
        .filter((engine) => engine !== undefined);
      setSelectedEngine(selectedEnginesInit);

      setModels(fetchedModels);
      setEngines(fetchedEngines);
      setColors(fetchedColors);

      setIntialSetupDone(true);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FilterDrawer drawerWidth={drawerWidth}>
      {initialSetupDone && (
      <>
        <RangeField
          label="Kaina"
          value={priceRange}
          onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
          onChangeCommitted={handlePriceRangeChange}
          min={MIN}
          max={MAX}
        />

        <Divider sx={{ my: 2 }} />

        <CheckboxGroupField
          label="Modeliai"
          options={models}
          value={selectedModel}
          onChange={handleModelChange}
        />

        <Divider sx={{ my: 2 }} />

        <CheckboxGroupField
          label="Variklis"
          options={engines}
          value={selectedEngine}
          onChange={handleEngineChange}
        />

        <Divider sx={{ my: 2 }} />

        <AutoSelectField
          options={colors}
          value={color}
          onChange={handleColorChange}
        />
        <Divider sx={{ my: 2 }} />

        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={deleteFilters}
        >
          Pašalinti filtrus
        </Button>
      </>
      )}
    </FilterDrawer>
  );
};

export default Filters;

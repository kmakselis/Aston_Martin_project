import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import PageRoutes from './routes/page-routes';
// import { CarProvider } from './contexts/car-context';

const App = () => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <BrowserRouter>
      {/* <CarProvider> */}
      <PageRoutes />
      {/* </CarProvider> */}
    </BrowserRouter>
  </LocalizationProvider>
);

export default App;

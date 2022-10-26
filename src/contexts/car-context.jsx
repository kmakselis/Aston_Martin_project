import * as React from 'react';

const CarContext = React.createContext();

export const CarProvider = () => {
  // const [selectedCar, setSelectedCar] = React.useState([]);

  const carContextValue = React.useMemo(() => ({

  }), []);

  return (
    <CarContext.Provider value={carContextValue} />
  );
};

// TODO: useCart custom hook

export default CarContext;

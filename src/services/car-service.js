const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'cars';
// const relationsParams = '_expand=category&_expand=color&_expand=model&_expand=engine';
const relationsParams = '_expand=category';


const fetchAllCars = async (paramsString = null) => {
  const urlParamsString = paramsString ? `&${paramsString}` : '';

  const response = await fetch(`${domain}/${collectionName}?${relationsParams}${urlParamsString}`);
  const cars = await response.json();

  return cars;
};

const fetchByCarId = async (id) => {
  const response = await fetch(`${domain}/${collectionName}/${id}?${relationsParams}`);
  const car = await response.json();

  return car;
};

const fetchByIdArr = async (idArr) => {
  const idsParamsString = idArr.map((id) => `id=${id}`).join('&');
  const items = await fetchAllCars(idsParamsString);

  return items;
};

const createCarOffer = async (carProps) => {
  const response = await fetch(`${domain}/${collectionName}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carProps),
  });

  const car = await response.json();

  return car;
};

const updateCarOffer = async ({ id, ...updateProps }) => {
  const response = await fetch(`${domain}/${collectionName}/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateProps),
  });

  const cup = await response.json();

  return cup;
};

const removeCarOffer = async (id) => {
  await fetch(`${domain}/${collectionName}/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const CarService = {
  fetchAll: fetchAllCars,
  create: createCarOffer,
  update: updateCarOffer,
  remove: removeCarOffer,
  fetchByCarId,
  fetchByIdArr,
};

export default CarService;

const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/models`);
  const models = await response.json();

  return models;
};

const ModelService = {
  fetchAll,
};

export default ModelService;

const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/engines`);
  const engines = await response.json();

  return engines;
};

const EngineService = {
  fetchAll,
};

export default EngineService;

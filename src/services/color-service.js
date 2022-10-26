const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/colors`);
  const colors = await response.json();

  return colors;
};

const ColorService = {
  fetchAll,
};

export default ColorService;

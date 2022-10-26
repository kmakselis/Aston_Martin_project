const createCategoryViewModel = require('./create-category-view-model');

const createCarPopulatedViewModel = (carPopulatedDoc) => ({
  id: carPopulatedDoc._id.toString(),
  model: carPopulatedDoc.model,
  category: createCategoryViewModel(carPopulatedDoc.categoryId),
  engine: carPopulatedDoc.engine,
  color: carPopulatedDoc.color,
  gearbox: carPopulatedDoc.gearbox,
  maxSpeed: carPopulatedDoc.maxSpeed,
  power: carPopulatedDoc.power,
  zeroToHundred: carPopulatedDoc.zeroToHundred,
  price: carPopulatedDoc.price,
  img: carPopulatedDoc.img,
});

module.exports = createCarPopulatedViewModel;

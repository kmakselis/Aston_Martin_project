const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');
const CarModel = require('../models/car-model');
const createCarPopulatedViewModel = require('../view-models/create-car-populated-view-model');
const createCarViewModel = require('../view-models/create-car-view-model');

const createCarNotFoundError = (carId) => createNotFoundError(`Car with id '${carId}' was not found`);

const fetchAll = async (req, res) => {
  const { joinBy } = req.query;
  const joinedDocuments = joinBy === 'categoryId';

  try {
    const carDocs = joinedDocuments
      ? await CarModel.find().populate('categoryId')
      : await CarModel.find();

    res.status(200).json(joinedDocuments
      ? carDocs.map(createCarPopulatedViewModel)
      : carDocs.map(createCarViewModel));
  } catch (err) { sendErrorResponse(err, res); }
};

const fetch = async (req, res) => {
  const carId = req.params.id;
  const { joinBy } = req.query;
  const joinedDocuments = joinBy === 'categoryId';

  try {
    const foundCar = joinBy === 'categoryId'
      ? await CarModel.findById(carId).populate('categoryId')
      : await CarModel.findById(carId);
    if (foundCar === null) throw createCarNotFoundError(carId);

    res.status(200).json(joinedDocuments
      ? foundCar.map(createCarPopulatedViewModel)
      : foundCar.map(createCarViewModel)
    );
  } catch (err) { sendErrorResponse(err, res); }
};

const create = async (req, res) => {
  const newCarData = req.body;

  try {
    await CarModel.validateData(newCarData);

    const newCar = await CarModel.create(newCarData);

    res.status(201).json(createCarViewModel(newCar));

  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const carId = req.params.id;
  const {
    title, description, categoryId, images, price,
  } = req.body;
  const newCarData = {
    title, description, categoryId, images, price,
  };

  try {
    await CarModel.validateData(newCarData);

    const updatedCarDoc = await CarModel.findByIdAndUpdate(
      carId,
      newCarData,
      { new: true, runValidators: true },
    );

    if (updatedCarDoc === null) throw createCarNotFoundError(carId);

    res.status(200).json(createCarViewModel(updatedCarDoc));
  } catch (err) { sendErrorResponse(err, res); }
};

const update = async (req, res) => {
  const carId = req.params.id;
  const requestData = req.body;

  try {
    await CarModel.validateUpdateData(requestData);
    const {
      model,
      engine,
      categoryId,
      color,
      gearbox,
      maxSpeed,
      power,
      zeroToHundred,
      price,
      img
    } = requestData;

    const updatedCarDoc = await CarModel.findByIdAndUpdate(
      carId,
      {
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
      },
      { new: true },
    );

    if (updatedCarDoc === null) throw createCarNotFoundError(carId);

    res.status(200).json(createCarViewModel(updatedCarDoc));

  } catch (err) { sendErrorResponse(err, res); }
};

const remove = async (req, res) => {
  const carId = req.params.id;

  try {
    const deletedCarDoc = await CarModel.findByIdAndDelete(carId);
    if (deletedCarDoc === null) throw createCarNotFoundError(carId);

    res.status(200).json(createCarViewModel(deletedCarDoc));

  } catch (err) { sendErrorResponse(err, res); }
};

module.exports = {
  fetchAll,
  fetch,
  create,
  replace,
  update,
  remove,
};

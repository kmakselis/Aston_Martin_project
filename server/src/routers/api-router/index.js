const { Router } = require('express');
const carsRouter = require('./cars-router');
const categoriesRouter = require('./categories-router')
const usersRouter = require('./users-router')

const apiRouter = Router();

apiRouter.use('/cars', carsRouter);
apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;

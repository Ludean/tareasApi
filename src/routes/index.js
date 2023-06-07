const express = require('express'); 

const tasksRouter = require('./task.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/alpha', router); 
  router.use('/tasks', tasksRouter);
}

module.exports = routerApi;
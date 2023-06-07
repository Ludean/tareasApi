const express = require('express');
const router = express.Router(); 
const tasksController = require('../controllers/tasks.controller');

router
    .get('/', tasksController.get )
    .get('/:id', tasksController.getById )
    .post('/', tasksController.create )
    .put('/:id', tasksController.update )
    .delete('/:id', tasksController._delete );

module.exports = router;
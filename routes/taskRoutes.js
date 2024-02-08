const express = require('express')
const router = express.Router()
const taskController = require('../controller/taskController')

// CRUD Routes

// Create Task
router.post('/users/:userID/tasks', taskController.create)

// Read Tasks
router.get('/users/:userID/tasks/:_id', taskController.find) // get task single task from specific user
router.get('/users/:userID/tasks', taskController.findAll) // get all users tasks

// Update Task
router.put('/users/:userID/tasks/:_id', taskController.update)

// Delete Task
router.delete('/users/:userID/tasks/:_id', taskController.delete)

module.exports = router
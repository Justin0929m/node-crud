const express = require('express')
const router = express.Router()
const taskController = require('../controller/taskController')

// CRUD Routes

// Create Task - http://hostname/api/users/{user_id}/tasks

router.post('/users/:userID/tasks', taskController.create)

// Read Tasks - http://hostname/api/users/{user_id}/tasks/{task_id} / http://hostname/api/users/{user_id}/tasks

router.get('/users/:userID/tasks/:_id', taskController.find) // get task single task from specific user
router.get('/users/:userID/tasks', taskController.findAll) // get all users tasks

// Update Task - http://hostname/api/users/{user_id}/tasks/{task_id}

router.put('/users/:userID/tasks/:_id', taskController.update)

// Delete Task - http://hostname/api/users/{user_id}/tasks/{task_id}

router.delete('/users/:userID/tasks/:_id', taskController.delete)

module.exports = router
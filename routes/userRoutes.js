const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

// CRUD Routes

// Create Users - http://hostname/api/users

router.post('/users', userController.create)

// Read Users - http://hostname/api/users / http://hostname/api/users/{id}

router.get('/users', userController.find) // Get all users
router.get('/users/:_id', userController.findSingle) // Get single user by ID

// Update Users - http://hostname/api/users/{id}

router.put('/users/:_id', userController.update)

// Delete Users - http://hostname/api/users/{id}

router.delete('/users/:_id', userController.delete)

module.exports = router
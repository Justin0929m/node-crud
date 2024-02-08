const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

// CRUD Routes

// Create Users
router.post('/users', userController.create)

// Read Users
router.get('/users', userController.find)
router.get('/users/:_id', userController.findSingle)

// Update Users
router.put('/users/:_id', userController.update)

// Delete Users
router.delete('/users/:_id', userController.delete)

module.exports = router
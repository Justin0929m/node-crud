const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    dateTime: String,
    userID: String,
    status: {
        type: String,
        default: 'Pending'
    }
})

const Task = mongoose.model('taskdata', taskSchema)

module.exports = Task
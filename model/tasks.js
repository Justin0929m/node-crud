const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    dateTime: Date,
    userID: String,
    status: {
        type: String,
        default: 'Pending'
    }
})

const Task = mongoose.model('taskdata', taskSchema)

module.exports = Task
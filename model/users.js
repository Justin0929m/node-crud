const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String
})

const User = mongoose.model('userdata', userSchema)

module.exports = User
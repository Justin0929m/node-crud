const User = require('../model/users')

// Create User

exports.create = async (req, res) =>{
    try {
        const { username, firstName, lastName } = req.body

        const existingUser = await User.findOne({ username: username })

        if(existingUser){
            return res.status(400).json({
                message: 'Username already exists'
            })
        }

        const newUser = new User({
            username: username,
            firstName: firstName,
            lastName: lastName
        })

        newUser.save()

        res.status(201).json({
            message: 'User successfully created',
            newUser
        })

    } catch (error) {
        console.error(error);
    }
}

// Fetch User

exports.find = async (req, res) =>{
    try {
        const users = await User.find()

        res.status(200).json({
            message: 'Users succesfully fetched',
            users
        })
    } catch (error) {
        
    }
}

// Fetch Single User

exports.findSingle = async (req, res) =>{
    try {
        const userID = req.params

        const user = await User.findOne({ _id: userID})

        res.status(200).json({
            user
        })
    } catch (error) {
        console.error(error);
    }
}

// Update User

exports.update = async (req, res) =>{
    try {
        const userID = req.params
        const { username, firstName, lastName } = req.body

        const userDetails = {
            $set:{
                username: username,
                firstName: firstName,
                lastName: lastName
            }
        }

        const updateUser = await User.updateOne({ _id: userID }, userDetails)

        res.status(200).json({
            message: 'User successfully updated',
            updateUser
        })
    } catch (error) {
        console.error(error);
    }
}

// Delete User

exports.delete = async (req, res) =>{
    try {
        const userID = req.params

        const deletedUser = await User.deleteOne({ _id: userID })

        res.status(200).json({
            message: 'User successfully deleted',
            deletedUser
        })
    } catch (error) {
        console.error(error);   
    }
}

/* 

User Routes

<==================== Create user ======================>


POST 
{
    "username":"jsmith",
    "first_name" : "John",
    "last_name" : "Smith"
}

http://hostname/api/users ✅


<==================== Update user ======================>

PUT 
{
    "first_name" : "John",
     "last_name" : "Doe"
}

http://hostname/api/users/{id} ✅


<==================== List all users ======================>

GET http://hostname/api/users ✅


<==================== Get User info ======================>

GET http://hostname/api/users/{id} ✅

*/
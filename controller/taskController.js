const Task = require('../model/tasks')

// Create Task 

exports.create = async (req, res) =>{
    try {
        const {userID} = req.params

        const { name, description, dateTime, status } = req.body

        console.log('Date Time From req.body: ', new Date(dateTime));

        const newTask = new Task({
            name: name,
            description: description,
            dateTime: new Date(dateTime),
            userID: userID,
            status: status
        })

        await newTask.save()

        res.status(201).json({
            message: 'New task has been created',
            newTask
        })
        
    } catch (error) {
        console.error(error);
    }
}

// Read Tasks

exports.find = async (req, res) =>{
    try {
        const { userID, _id } = req.params

        const task = await Task.find({ userID: userID, _id: _id })

        res.status(200).json({
            task
        })

    } catch (error) {
        console.error(error);
    }
}

exports.findAll = async (req, res) =>{
    try {
        const { userID } = req.params

        const tasks = await Task.find({ userID: userID })

        res.status(200).json({
            tasks
        })
    } catch (error) {
        console.error(error);
    }
}

// Update Task - '/users/:userID/tasks/:_id'

exports.update = async (req, res) =>{
    try {
        const { userID, _id } = req.params

        const { name, description, dateTime, status } = req.body

        const taskDetails = {
            $set:{
                name: name,
                description: description,
                dateTime: dateTime,
                status: status
            }
        }

        const task = await Task.updateOne({ userID: userID, _id: _id }, taskDetails)

        res.status(200).json({
            message: 'Task successfully updated',
            task
        })
    } catch (error) {
        console.error(error);
    }
}

// Delete Task

exports.delete = async (req, res) =>{
    try {
        const { userID, _id } = req.params

        const task = await Task.deleteOne({ userID: userID, _id: _id })

        res.status(200).json({
            message: 'Task has been deleted',
            task
        })
    } catch (error) {
        console.error(error);
    }
}


/*

Task Routes

<==================== Create Task ======================>

POST 
{
    "name":"My task",
    "description" : "Description of task",
    "date_time" : "2016-05-25 14:25:00"
}

http://hostname/api/users/{user_id}/tasks ✅

<==================== Update Task ======================>

PUT 
{
    "name":"My updated task"
}

http://hostname/api/users/{user_id}/tasks/{task_id} ✅


<==================== Delete Task ======================>

DELETE http://hostname/api/users/{user_id}/tasks/{task_id} ✅


<==================== Get Task Info ======================>

GET http://hostname/api/users/{user_id}/tasks/{task_id} ✅


<==================== List all tasks for a user ======================>

GET http://hostname/api/users/{user_id}/tasks ✅

*/
const mongoose = require('mongoose')
const Tasks = require('../model/tasks')
const cron = require('node-cron')

/* 

Tasks

<==================== Schedule Service Task  ======================> 

Setup a scheduled job to check all tasks in the Database - those that have a status of "pending" and next_execute_date_time has passed - print it to the console.
and update the task to "done". ✅

*/

const connectDB = async () => {
    try {
        const dbUrl = 'mongodb://localhost:27017/users'
        const connection = await mongoose.connect(dbUrl)

        cron.schedule('* * * * *', async () =>{
            console.log('Cron is running');
            try {
                const completedTasks = await Tasks.find({ dateTime: { $lt: new Date() } })

                if(completedTasks.length > 0){
                    
                    await Tasks.updateMany({ _id: { $in: completedTasks.map(task => task._id) }}, { $set: {status: 'done'}})
                    
                    console.log('Completed Tasks Found:');
                    console.log(completedTasks);
                    console.log("Status has been changed to done");
                } else{
                    console.log('No task has been completed yet');
                    console.log(completedTasks);
                }
            } catch (error) {
                console.error(error);
            }
        })

        console.log('connected!');
        return connection
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB
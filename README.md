# node-crud

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">CRUD App</h3>

  <p align="center">
    This project was about creating a simple node crud application
    <br />
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

In this project we needed to create a crud app using node, the application needed to be able to do the following tasks:

CRUD for users:
- Create a user
- Fetch a users (Read)
- Update the users
- Delete a user

CRUD for tasks:
- Create a task for a user
- Fetch a single task for each user (Read)
- Update a task
- Delete a task

Below are the following routes for each operation:

Routes for users
- Create a user - POST http://hostname/api/users
- Fetch a user - GET http://hostname/api/users/{id}
- Update a user - PUT http://hostname/api/users
- Delete a user - DELETE http://hostname/api/users/{id}

Routes for tasks
- Create a task for a user - POST http://hostname/api/users/{user_id}/tasks
- Fetch a single task for each user (Read) - GET http://hostname/api/users/{user_id}/tasks/{task_id}
- Fetch all tasks for a specific user - GET http://hostname/api/users/{user_id}/tasks/
- Update a task - PUT http://hostname/api/users/{user_id}/tasks/{task_id}
- Delete a task - DELETE http://hostname/api/users/{user_id}/tasks/{task_id}


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## CRON Scheduler 

```sh
  cron.schedule('* * * * *', async () =>{
             console.log('Cron is running');
             try {
                 const completedTasks = await Tasks.find({ dateTime: { $lt: new Date() } })

                 if(completedTasks.length > 0){
                     console.log('Completed Tasks Found:');
                    
                     await Tasks.updateMany({ _id: { $in: completedTasks.map(task => task._id) }}, { $set: {status: 'done'}})
                    
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
```

The above code is a cron job that will run at certain intervals, what the cron job does is it looks through the database collection called taskdatas which holds all the tasks and looks at the date field to see if the date less than the current date meaning its overdue (completed) and then log the task that meets the criteria and update the status field from pending to done.

```sh
const completedTasks = await Tasks.find({ dateTime: { $lt: new Date() } })
```
The above code looks for dates that are less than the current date and if it passes the check it will then be placed in a const called completedTasks. It uses mongoDB's find function to look through the database.

```sh
                  if(completedTasks.length > 0){
                     console.log('Completed Tasks Found:');
                    
                     await Tasks.updateMany({ _id: { $in: completedTasks.map(task => task._id) }}, { $set: {status: 'done'}})
                    
                     console.log(completedTasks);
                     console.log("Status has been changed to done");
                 } else{
                     console.log('No task has been completed yet');
                     console.log(completedTasks);
                 }
```
The if statement above will run if it finds tasks that meets the needs of the completedTasks criteria. Suppose the if statement is true then the following will run:
```sh
await Tasks.updateMany({ _id: { $in: completedTasks.map(task => task._id) }}, { $set: {status: 'done'}})
```
- The above code snippet will update each task's status to done that is stored in completedTasks it does so by using the $in method which selects each document in the mongoDB database and then runs a map function to set each task's status to done.








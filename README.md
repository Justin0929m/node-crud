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

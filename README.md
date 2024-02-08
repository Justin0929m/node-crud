# node-crud

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">CRUD App</h3>

  <p align="center">
    This project was about creating a simple node crud application
    <br />
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



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



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Node][Node.js]][Node-url]
* [![JavaScript][JavaScript.js]][JavaScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

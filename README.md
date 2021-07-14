# Get Social

## Table of Contents
* [Languages](#languages)
* [Installation](#installation)
* [Routes](#routes)
* [Walkthrough](#walkthrough)
* [Questions](#questions)
* [Credits](#credits)

## Languages
This application was built using:
* JavaScript
* MongoDB
* Express.js
* Mongoose

## Installation
This project is a simple back-end social network API structured with MongoDB that can be run from Insomnia Core.

After cloning code from GitHub, run "npm install" to get access to all dependencies.

To start the server, open integrated terminal and enter the command "npm start".

Navigate to Insomnia Core and access the project using the base address ```http://localhost:3001``` in addition to the routes outlined in the next section.

You will be able to access the following features:
* Add, update, and delete users
* Get all users or a single user by their ID
* Add and remove friends
* Add, update, and delete thoughts
* Get all thoughts or a single thought by its ID
* Add and remove reactions to thoughts

## Routes
### Users
* Get all users: 
  * Address: ```/api/users```
  * Route: ```GET```
* Get user by id:
  * Address: ```/api/users/:id```
  * Route: ```GET```
* Create new user:
  * Address: ```/api/users```
  * Route: ```POST```
  * JSON body:
  ```
  {
    "username": "YOUR TEXT HERE",
    "email": "YOUR TEXT HERE"
  }
  ```
* Update user:
  * Address: ```/api/users/:id```
  * Route: ```PUT```
  * JSON body:
  ```
  {
    "username": "YOUR TEXT HERE",
    "email": "YOUR TEXT HERE"
  }
  ```
* Delete user:
  * Address: ```/api/users/:id```
  * Route: ```DELETE```

### Friends
* Add friend:
  * Address: ```/api/:userid/friends/:friendId```
  * Route: ```POST```
* Delete friend:
  * Address: ```/api/:userid/friends/:friendId```
  * Route: ```DELETE```

### Thoughts
* Get all thoughts: 
  * Address: ```/api/thoughts```
  * Route: ```GET```
* Get thought by id:
  * Address: ```/api/thoughts/:id```
  * Route: ```GET```
* Create new thought:
  * Address: ```/api/thoughts```
  * Route: ```POST```
  * JSON body:
  ```
  {
    "thoughtText": "YOUR TEXT HERE",
    "username": "YOUR TEXT HERE",
    "userId": "YOUR TEXT HERE"
  }
  ```
* Update thought:
  * Address: ```/api/thoughts/:id```
  * Route: ```PUT```
  * JSON body:
  ```
  {
    "thoughtText": "YOUR TEXT HERE",
    "username": "YOUR TEXT HERE",
    "userId": "YOUR TEXT HERE"
  }
  ```
* Delete thought:
  * Address: ```/api/thoughts/:userId/:thoughtId```
  * Route: ```DELETE```

### Reactions
* Add reaction to thought:
  * Address: ```/api/:thoughtId/reactions```
  * Route: ```POST```
* Delete reaction from thought:
  * Address: ```/api/:thoughtid/reactions/:reactionId```
  * Route: ```DELETE```

## Walkthrough
Want to see Get Social in action?  
Watch the video demonstration [here](https://youtu.be/pMD9HiWCsm8).

## Questions
Have questions about this project?  
GitHub: https://github.com/sarawrmas  
Email: sara.m.adamski@gmail.com

## Credits
Sara Adamski
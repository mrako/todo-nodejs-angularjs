# Todo App

This is a simple app built using MongoDB, NodeJS and AngularJS.

* NodeJS provives an API to the DB.
* AngularJS provides the frontend using the API.

## Prerequisites

* [MongoDB](http://www.mongodb.org/)
* [NPM](https://github.com/npm/npm)
* [NodeJS](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)
* [Bower](http://bower.io/)


## Installation

1. Clone the repository: `git clone git@github.com:mrako/todo-nodejs-angularjs`
2. Install dependencies: `npm install`
3. Install components: `bower install`
4. (skip if you have mongo running as a service) Start db: `mongod --dbpath db/data`
5. Start server: `grunt server`

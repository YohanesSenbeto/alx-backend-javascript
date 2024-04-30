# NodeJS Basics

## Overview

https://docs.google.com/document/d/1l4XvIrAvG3BzCm1rx1DLrsFiA_P03kPu7JntR81j278/edit?usp=sharing

This project focuses on gaining proficiency in Node.js, a runtime environment for executing JavaScript code outside of a web browser. You will learn how to create servers, interact with the file system, manage processes, and more using Node.js. Additionally, you will become familiar with Express.js, a web application framework for Node.js, and various tools such as Mocha, Nodemon, and Babel-node.

## Learning Objectives

By the end of this project, you should be able to:

-   Run JavaScript code using Node.js
-   Utilize Node.js modules effectively
-   Read files using specific Node.js modules
-   Access command line arguments and environment variables using the Process API
-   Create HTTP servers using both Node.js and Express.js
-   Implement advanced routes with Express.js
-   Use ES6 features with Node.js using Babel-node
-   Enhance development workflow with Nodemon

## Requirements

-   Allowed editors: vi, vim, emacs, Visual Studio Code
-   All files should be interpreted/compiled on Ubuntu 18.04 LTS using Node.js (version 12.x.x)
-   Each file should end with a new line
-   Include a `README.md` file at the root of the project folder
-   Code files should have the `.js` extension
-   Code will be tested using Jest, and you should run `npm run test` to test your code
-   Code will be verified against lint using ESLint, and you should ensure your code passes linting by running `npm run full-test`
-   Export functions/classes using the format: `module.exports = myFunction;`
-   Run `npm install` when you have the `package.json` file

## Resources

Before starting the project, it's recommended to read/watch the following resources:

-   [Node.js Getting Started](https://nodejs.dev/learn)
-   [Process API Documentation](https://nodejs.org/docs/latest-v12.x/api/process.html)
-   [Child Process](https://nodejs.org/docs/latest-v12.x/api/child_process.html)
-   [Express.js Getting Started](https://expressjs.com/en/starter/hello-world.html)
-   [Mocha Documentation](https://mochajs.org/)
-   [Nodemon Documentation](https://nodemon.io/)

## Tasks

### 1. Run JavaScript using Node.js

Create a JavaScript file and execute it using Node.js. Experiment with basic syntax and console.log to ensure Node.js is set up correctly.

### 2. Use Node.js Modules

Explore built-in Node.js modules such as `fs` (file system) and `process`. Read files, access command line arguments, and environment variables using these modules.

### 3. Create a Small HTTP Server with Node.js

Implement a simple HTTP server using Node.js. Handle basic requests and responses to understand the core concepts of server-side development.

### 4. Create a Small HTTP Server with Express.js

Build upon the previous task by creating a more sophisticated HTTP server using Express.js. Define advanced routes and handle various HTTP methods (GET, POST, etc.).

### 5. Use ES6 with Node.js using Babel-node

Upgrade your codebase to utilize ES6 features such as arrow functions, template literals, and destructuring. Use Babel-node to transpile ES6 code for compatibility with Node.js.

### 6. Enhance Development Workflow with Nodemon

Install and configure Nodemon to automatically restart the server whenever changes are made to your code. This will streamline your development process and increase productivity.

## Repository Information

-   GitHub repository: alx-interview
-   Directory: 0x05-nodejs_basics
-   Files:
    -   1-run_js_with_node.js
    -   2-use_nodejs_modules.js
    -   3-create_http_server_node.js
    -   4-create_http_server_express.js
    -   5-use_es6_with_node.js
    -   6-enhance_dev_workflow_nodemon.js

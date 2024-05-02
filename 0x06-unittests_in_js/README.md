# Unittests in JavaScript

This project aims to provide practical examples and exercises for understanding and implementing unit tests in JavaScript using Mocha, Chai, and Sinon libraries.

## Table of Contents

- [Resources](#resources)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Tasks](#tasks)
  - [0. Basic test with Mocha and Node assertion library](#0-basic-test-with-mocha-and-node-assertion-library)
  - [1. Combining descriptions](#1-combining-descriptions)
  - [2. Basic test using Chai assertion library](#2-basic-test-using-chai-assertion-library)
  - [3. Spies](#3-spies)
  - [4. Stubs](#4-stubs)
  - [5. Hooks](#5-hooks)
  - [6. Async tests with done](#6-async-tests-with-done)
  - [7. Skip](#7-skip)
  - [8. Basic Integration testing](#8-basic-integration-testing)
  - [9. Regex integration testing](#9-regex-integration-testing)
  - [10. Deep equality & Post integration testing](#10-deep-equality--post-integration-testing)
- [Repository Information](#repository-information)

## Resources

Before starting this project, it's recommended to read or watch the following resources:
- [Mocha documentation](https://mochajs.org/)
- [Chai documentation](https://www.chaijs.com/)
- [Sinon documentation](https://sinonjs.org/)
- [Express documentation](https://expressjs.com/)
- [Request library documentation](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://medium.com/swlh/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs-d105f13b07da)

## Learning Objectives

By completing this project, you are expected to gain proficiency in the following areas:
- Using Mocha to write a test suite
- Utilizing different assertion libraries (Node or Chai)
- Presenting long test suites effectively
- Understanding and using spies
- Understanding and using stubs
- Working with hooks and knowing when to use them
- Unit testing with Async functions
- Writing integration tests with a small node server

## Requirements

- All code should be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file, at the root of the project folder, is mandatory
- Code should use the `.js` extension
- When running tests with `npm run test *.test.js`, everything should pass correctly without any warnings or errors

## Tasks

### 0. Basic test with Mocha and Node assertion library

Install Mocha using npm, set up scripts in `package.json` for running tests, and create a simple test case with assertions using Node's assert library.

### 1. Combining descriptions

Expand the existing function with new arguments and functionalities, and update test cases accordingly. Organize tests using `describe` blocks for better readability.

### 2. Basic test using Chai assertion library

Rewrite existing tests using Chai's `expect` syntax for behavior-driven development style assertions. Enhance readability and maintainability of tests.

### 3. Spies

Use Sinon's spies to ensure the correct interaction between functions. Verify function calls and arguments passed to them within the tests.

### 4. Stubs

Utilize Sinon's stubs to replace expensive or external function calls with simplified versions for testing. Test interactions with stubbed functions and ensure correct behavior.

### 5. Hooks

Use Mocha's hooks (`beforeEach` and `afterEach`) to set up and clean up test environments. Organize and manage test suites effectively.

### 6. Async tests with done

Explore asynchronous testing scenarios using Mocha's `done` callback. Ensure proper handling of asynchronous operations in tests to avoid false positives.

### 7. Skip

Skip tests temporarily instead of commenting them out or removing them. Utilize Mocha's `skip` function to maintain test integrity and readability.

### 8. Basic Integration testing

Set up basic integration tests for an Express server using Mocha. Test endpoints and server behavior to ensure proper functionality.

### 9. Regex integration testing

Enhance integration tests with route validation using regular expressions. Test various cases including valid and invalid inputs to ensure robustness.

### 10. Deep equality & Post integration testing

Introduce deep equality comparison and test POST requests in integration tests. Verify responses and behavior of endpoints for completeness.

## Repository Information

- GitHub Repository: [alx-backend-javascript](https://github.com/yohanesSenbeto/alx-backend-javascript)
- Directory: 0x06-unittests_in_js
- Files: `package.json`, `README.md`, `0-calcul.js`, `0-calcul.test.js`, `1-calcul.js`, `1-calcul.test.js`, `2-calcul_chai.js`, `2-calcul_chai.test.js`, `3-payment.js`, `3-payment.test.js`, `utils.js`, `4-payment.js`, `4-payment.test.js`, `5-payment.js`, `5-payment.test.js`, `6-payment_token.js`, `6-payment_token.test.js`, `7-skip.test.js`, `8-api/package.json`, `8-api/api.js`, `8-api/api.test.js`, `9-api/api.js`, `9-api/api.test.js`, `10-api/api.js`, `10-api/api.test.js`

# Basic SPA

For steps on how to work with this repository [please see here](https://docs.labs.lambdaschool.com/labs-spa-starter/)


# CoderHeroes

You can find the deployed project at [CoderHeroes](https://a.coderheroes.dev/login).

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/78114013?v=4" width = "200" />](https://github.com/chelseaceballos)|[<img src="https://avatars.githubusercontent.com/u/84593843?v=4" width = "200" />](https://github.com/Jie-chelchel)|[<img src="https://avatars.githubusercontent.com/u/42555076?v=4" width = "200" />](https://github.com/WillisLi)|[<img src="https://avatars.githubusercontent.com/u/83714912?v=4" width = "200" />](https://github.com/bradlylewis)|   
|---|---|---|---|
|[Chelsea Ceballos](https://github.com/chelseaceballos) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/chelseaceballos)|[Jie Zhang](https://github.com/Jie-chelchel) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Jie-chelchel)|[Willis Li](https://github.com/WillisLi) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/WillisLi)|[Bradly Lewis](https://github.com/bradlylewis) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bradlylewis)|
|[<img src="https://avatars.githubusercontent.com/u/80992248?v=4" width = "200" />](https://github.com/fernando817mm)|[<img src="https://avatars.githubusercontent.com/u/47357270?v=4" width = "200" />](https://github.com/muhannadbm)|[<img src="https://avatars.githubusercontent.com/u/82040208?v=4" width = "200" />](https://github.com/vasqueza91)|[<img src="https://avatars.githubusercontent.com/u/32268444?v=4" width = "200" />](https://github.com/MikeLikesCode)|
|[Fernando Martinez](https://github.com/fernando817mm) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/fernando817mm)|[Muhannad Bani Almarje](https://github.com/muhannadbm) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/muhannadbm)|[Alejandro Vasquez](https://github.com/vasqueza91) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/vasqueza91)|[Michael Guerrero](https://github.com/MikeLikesCode) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/MikeLikesCode)|
|[<img src="https://avatars.githubusercontent.com/u/81542563?v=4" width = "200" />](https://github.com/andrewskr90)|[<img src="https://avatars.githubusercontent.com/u/39386788?v=4" width = "200" />](https://github.com/Rodgers31)|[<img src="https://avatars.githubusercontent.com/u/85185709?v=4" width = "200" />](https://github.com/cn8817)|[<img src="https://avatars.githubusercontent.com/u/65091914?v=4" width = "200" />](https://github.com/CptHappyHands)|
|[Kyle Andrews](https://github.com/andrewskr90) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/andrewskr90)|[Rodgers Otieno](https://github.com/Rodgers31) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Rodgers31)|[Christine Nguyen](https://github.com/cn8817) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/cn8817)|[Andrew Cummings](https://github.com/CptHappyHands) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/CptHappyHands)|
|[<img src="https://avatars.githubusercontent.com/u/14983694?v=4" width = "200" />](https://github.com/JoeyMBrown)||||
|[Joseph Brown](https://github.com/JoeyMBrown) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/JoeyMBrown)||||

<br>
<br>

## Tech stack

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.13.1--alpha.2-blue.svg)
![react-router-dom](https://img.shields.io/badge/react--router--dom-v^5.2.0-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
![Less](https://img.shields.io/badge/Less-v^1.17.0-ff69b4.svg)
![antd](https://img.shields.io/badge/antd-v^4.4.3-green.svg)
![redux](https://img.shields.io/badge/redux-v^4.1.2-yellow.svg)
![redux-thunk](https://img.shields.io/badge/redux--thunk-v^2.4.0-yellow.svg)
![Axios](https://img.shields.io/badge/Axios-v^0.21.1-yellow.svg)
![Okta](https://img.shields.io/badge/Okta-v^3.0.2-red.svg)

- Fork and clone the repo to install it as your own remote.
  - **note** please [be sure to set your remote](https://help.github.jp/enterprise/2.11/user/articles/changing-a-remote-s-url/) for this repo to point to your Labs Team Front End Repository.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

> When using Okta for authentication, the app will need to run locally on port 3000.

### Key Features

- Antdesign for component base
- File scaffolding to organize pages and components
- File scaffolding to organize styles
- React router to handle project routing
- Okta to handle user authentication
- Less for global and component base styles
- Redux for global state management

#### Front end deployed to `heroku` at [coderheroes](a.coderheroes.dev).

#### [Back end](https://github.com/BloomTech-Labs/coder-heroes-be) built using:


- Docker
- Node.js
- Express
- Okta interaction

# APIs

## Authentication API here

For authentication we're hitting Okta.  The Okta flow can be found here: [OktaFlow](https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/#grant-type-flow).  We're very early stages in using Okta.  Right now users cannot self-register accounts need to be created on Okta by an administrator (from Lambda).  Logging in does work with pre-defined accounts.

## Payment API here

We we're planning on implementing Stripe for payments - however this is a future feature that we have not started implementing yet.

## Misc API here
No misc API's currently being used.

# Installation Instructions

- git clone
- npm install
- npm start

## Other Scripts

    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend Documentation](https://github.com/BloomTech-Labs/coder-heroes-be#readme) for details on the backend of our project.
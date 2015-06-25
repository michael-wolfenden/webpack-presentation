# webpack-presentation

Sample of using webpack to build a sample angular / bootstrap application

## Features
* less compilation
* automatic angular dependency injection annotation
* linting using [ESlint](http://eslint.org/)
* builds seperate app / vendor bundles for production
* live reload in development
* No gulp / grunt / bower required

### Getting started

    > npm install

### Development build

This will run a live reload server at http://localhost:8080/index.html

    > npm run development

### Production build

This will package the application and output to `/build`

    > npm run production

In either case, click on the Dashboard link in the navigation header

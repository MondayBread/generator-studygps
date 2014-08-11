# AngularJS Full-Stack generator [![Build Status](https://travis-ci.org/StudyGPS-Company/generator-studygps.svg?branch=master)](http://travis-ci.org/StudyGPS-Company/generator-studygps)

> Yeoman generator for creating MEAN stack applications, using MongoDB, Express, AngularJS, and Node - lets you quickly set up a project following best practices.

## Usage

Install `generator-studygps`:
```
npm install -g generator-studygps
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo studygps`, optionally passing an app name:
```
yo studygps [app-name]
```

Run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.

## Prerequisites

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed and have the `mongod` process running.


## Generators

Available generators:

* App
    - [studygps](#app) (aka [studygps:app](#app))
* Server Side
    - [studygps:endpoint](#endpoint)
* Client Side
    - [studygps:route](#route)
    - [studygps:controller](#controller)
    - [studygps:filter](#filter)
    - [studygps:directive](#directive)
    - [studygps:service](#service)
    - [studygps:provider](#service)
    - [studygps:factory](#service)
    - [studygps:decorator](#decorator)
* Deployment
    - [studygps:openshift](#openshift)
    - [studygps:heroku](#heroku)

### App
Sets up a new AngularJS + Express app, generating all the boilerplate you need to get started.

Example:
```bash
yo studygps
```

### Endpoint
Generates a new API endpoint.


Example:
```bash
yo studygps:endpoint message
[?] What will the url of your endpoint to be? /api/messages
```

Produces:

    server/api/message/index.js
    server/api/message/message.spec.js
    server/api/message/message.controller.js
    server/api/message/message.model.js  (optional)
    server/api/message/message.socket.js (optional)

### Route
Generates a new route.

Example:
```bash
yo studygps:route myroute
[?] Where would you like to create this route? client/app/
[?] What will the url of your route be? /myroute
```

Produces:

    client/app/myroute/myroute.js
    client/app/myroute/myroute.controller.js
    client/app/myroute/myroute.controller.spec.js
    client/app/myroute/myroute.html
    client/app/myroute/myroute.scss


### Controller
Generates a controller.

Example:
```bash
yo studygps:controller user
[?] Where would you like to create this controller? client/app/
```

Produces:

    client/app/user/user.controller.js
    client/app/user/user.controller.spec.js

### Directive
Generates a directive.

Example:
```bash
yo studygps:directive myDirective
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? Yes
```

Produces:

    client/app/myDirective/myDirective.directive.js
    client/app/myDirective/myDirective.directive.spec.js
    client/app/myDirective/myDirective.html
    client/app/myDirective/myDirective.scss

**Simple directive without an html file**

Example:
```bash
yo studygps:directive simple
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? No
```

Produces:

    client/app/simple/simple.directive.js
    client/app/simple/simple.directive.spec.js

### Filter
Generates a filter.

Example:
```bash
yo studygps:filter myFilter
[?] Where would you like to create this filter? client/app/
```

Produces:

    client/app/myFilter/myFilter.filter.js
    client/app/myFilter/myFilter.filter.spec.js

### Service
Generates an AngularJS service.

Example:
```bash
yo studygps:service myService
[?] Where would you like to create this service? client/app/
```

Produces:

    client/app/myService/myService.service.js
    client/app/myService/myService.service.spec.js


You can also do `yo angular:factory` and `yo angular:provider` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo studygps:decorator serviceName
[?] Where would you like to create this decorator? client/app/
```

Produces

    client/app/serviceName/serviceName.decorator.js

###Openshift

Deploying to OpenShift can be done in just a few steps:

    yo studygps:openshift

A live application URL will be available in the output.

> **Enabling web sockets**
>
> If you're using socket.io, you will need to update the client to connect to the correct port for sockets to work.
>
> In `/client/components/socket/socket.service` update the socket to connect to port 8000. (with `my-openshift-app` being the deployed name of your app):
>
>     var ioSocket = io.connect('my-openshift-app.com:8000');
>
> **oAuth**
>
> If you're using any oAuth strategies, you must set environment variables for your selected oAuth. For example, if we're using Facebook oAuth we would do this :
>
>     rhc set-env FACEBOOK_ID=id -a my-openshift-app
>     rhc set-env FACEBOOK_SECRET=secret -a my-openshift-app
>
> You will also need to set `DOMAIN` environment variable:
>
>     rhc config:set DOMAIN=<your-openshift-app-name>.rhcloud.com
>
>     # or (if you're using it):
>
>     rhc config:set DOMAIN=<your-custom-domain>
>
> After you've set the required environment variables, restart the server:
>
>     rhc app-restart -a my-openshift-app

To make your deployment process easier consider using [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control).

**Pushing Updates**

    grunt

Commit and push the resulting build, located in your dist folder:

    cd dist && git add -A && git commit -m "describe your changes here"
    git push -f my-openshift-app master

### Heroku

Deploying to heroku only takes a few steps.

    yo studygps:heroku

To work with your new heroku app using the command line, you will need to run any `heroku` commands from the `dist` folder.


If you're using mongoDB you will need to add a database to your app:

    heroku addons:add mongohq

Your app should now be live. To view it run `heroku open`.

>
> If you're using any oAuth strategies, you must set environment variables for your selected oAuth. For example, if we're using **Facebook** oAuth we would do this :
>
>     heroku config:set FACEBOOK_ID=id
>     heroku config:set FACEBOOK_SECRET=secret
>
> You will also need to set `DOMAIN` environment variable:
>
>     heroku config:set DOMAIN=<your-heroku-app-name>.herokuapp.com
>
>     # or (if you're using it):
>
>     heroku config:set DOMAIN=<your-custom-domain>
>

To make your deployment process easier consider using [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control).

#### Pushing Updates

    grunt

Commit and push the resulting build, located in your dist folder:

    cd dist && git add -A && git commit -m "describe your changes here"
    git push -f heroku master


## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-cookies
* angular-mocks
* angular-resource
* angular-sanitize
* angular-scenario
* es5-shim
* font-awesome
* json3
* jquery
* lodash

These packages are installed optionally depending on your configuration:

* angular-route
* angular-ui-router
* angular-socket-io
* angular-bootstrap
* bootstrap

All of these can be updated with `bower update` as new versions are released.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

A `.yo-rc` file is generated for helping you copy configuration across projects, and to allow you to keep track of your settings. You can change this as you see fit.

## Testing

Running `grunt test` will run the client and server unit tests with karma and mocha.

Use `grunt test:server` to only run server tests.

Use `grunt test:client` to only run client tests.

**Protractor tests**

To setup protractor e2e tests, you must first run

`npm run update-webdriver`

Use `grunt test:e2e` to have protractor go through tests located in the `e2e` folder.

## Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have grunt launch your app with specific environment variables, add them to the git ignored environment config file: `server/config/local.env.js`.

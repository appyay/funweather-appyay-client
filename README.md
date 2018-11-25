# Funweather Appyay Client

A lightweight Appyay client template for a mobile app landing page. Template design by Elina Chanieva.

## Technologies used
* HTML
* CSS
* jQuery
* Bootstrap
* Handlebars

## Overview
This app demonstrates how to retrieve entries from the Appyay Content Delivery API. To use it, you should:
* Have an Appyay account.
* Create an Appyay Project using the "Fun Weather" template. 

The "Fun Weather" Appyay Project Template generates a "Feature" Content Type and entries that can be retrieved by this client app.

### Installation

```
npm install
```

### Environment Variables
Create a .env file in the root of the project and add the following (replacing the values with the ones in your Appyay dashboard):
````
APPYAY_SANDBOX_ENV=your_appyay_sandbox_environment_id
APPYAY_PROD_ENV=your_appyay_production_environment_id
APPYAY_API_KEY=your_appyay_api_key
````

### Start Dev Server
Run the webpack-dev-server in development mode.
```
npm start
```

### Start Prod Server
Run the webpack-dev-server in production mode.
```
npm run start:prod
```

### Build Prod Version

```
npm run build
```



### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.

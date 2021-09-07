# My minimal weather app

### Live Demo: https://longg99.github.io/weather-app/

### Introduction

This is my simple, minimal weather app based on the OpenWeatherMap's free API. This project really helped me to learn ReactJS and improve my programming skill.
It is built with JS and ReactJS, with some libraries such as moment, lodash, react-router, react-bootstrap and so on. It has the ability to show the current weather report as well as the forecast every 3 hours and the next five days.

### Getting and using a free API Key

If you want to change the API key, you can change the const API_KEY in the index.js file at src/Components/apis with your API key. Visit https://openweathermap.org/appid for more
details on how to get an API key. Note that it will take some time for the new registered API key to work.

The default API key in the app is my personal API key. It is a free key so it has several limitations (60 calls/minute,
1,000,000 calls/month). One weather, forecast query, refresh or unit change count as one API call. The default key should ONLY be used for demonstration purposes. To avoid reaching the limit, please use your own API key.

### Upcoming feature

I am trying to implement the ability to read user location and display the weather data accordingly.

### Thank you for using the app!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

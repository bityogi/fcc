# Flexion Coding Challenge (v3.1)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the `typescript` template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run deploy`

First builds the app with `npm run build` aand then deploys the assets from the `build folder to firebase.<br>


## Github

Direct pushes to the `master` branch for this repository are restricted. <br>
And code contributions can be made by submitting a PR to the master branch

## CI

A continuous integration runs on each Pull Request to the master branch which does two things
* `npm run test` to ensure all tests pass
* `npm run build` to ensure that a build can be created successfully

## CD

All code that is merged into the `master` branch gets deployed to a [firebase site](https://bityogi-3094e.firebaseapp.com/)<br>

The website provides a simple UI that allows you to enter four inputs:
* Input Numerical Value
* Input Unit of Measure
* Target Unit of Measure
* Student response
And provides a button which then validates this to `check the answer`.



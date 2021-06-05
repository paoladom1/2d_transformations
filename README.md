# 2D Transformations

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

All transformations (translation, scalation and rotation) controls affect both axis equally, 
which means increasing the translation by one, increases the value of `x` and `y` by one.

Also, this canvas has its origin at the top left, which means, increasing `y` would move the square lower visually and increasing `x` would move the square to the right.

## Transformations

As stated before, this project contains translation, scalation and rotation, each will be described more detailed below.

The original points are `P{(75, 25), (75, 50), (100, 50), (100, 25)}`, this creates a square of size `25` inside the canvas.

### Translation 

This transformation moves the object to a different position on the canvas. Each point translates by adding the translation vector to the original coordinates `X, Y` to get the new coordinates `X', Y'`. When the square is at the original position, the level according to the transformation controls is 0. You can increase level up to 5, and each level adds 30 to each point's coord.

### Scalation

This transformation is used to change the size of an object. It can be achieved by multiplying the original coordinates with the scaling factor to get the new result. The starting level of this transformation is 1, which is the original size of the square (25) and it can be increased up to 5, meaning that the square gets to grow 5 times its original size. The method used to scale the square is based on changing the coordinates of the points that generate the square, which means that with a level 2 of scale, the coordinates for each point will be two times what they were initially.

### Rotation

This transformation rotates an object with respect to an angle in a two dimensional plane. When the square is at the original position, the level is 0. You can increase level up to 5 and each level rotates the square in 10° clockwise based on the origin (top left corner).

## Requirements

- nodejs 12+
- npm 6+ (or equivalent yarn)

## Usage

To run the development server locally run the following commands:
```bash
npm install
npm start
``` 
For more information on how to run this for a production build, you can read the information below:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

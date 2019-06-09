# Dev Together's Appreciation Station 2019

The goal of this project is to serve as a public token of appreciation for everyone's involvement in our community over the last year as well
as a learning tool at our 1-year anniversary celebration.

It is a simple one page website built with React. We tried to limit the dependencies as much as possible.

We will be using this project to facilitate a unit testing and Heroku deployment workshop.

## Built with

- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [Enzyme](https://airbnb.io/enzyme/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Contentful](https://www.contentful.com/developers/docs/javascript/) (CMS used for hosting assets)
- [Node SASS](https://github.com/sass/node-sass) (so we can use SASS instead of vanilla CSS for styling)

## Setup

We use yarn as our package manager. Feel free to use npm if that is your preference. See [WorkshopEnvironmentSetup.md](/docs/WorkshopEnvironmentSetup.md) if you don't have Yarn but would instructions to install it.

To set up project, **fork [the appreciation station project]( https://github.com/mercedesb/appreciation-station-2019) into your own Github profile.**

Then clone your repo locally.

```
git clone https://github.com/[YOUR_USERNAME]/appreciation-station-2019.git

cd appreciation-station-2019

yarn
```

## Workshop Details

Documentation for the workshop can be found in the [`docs` directory of this repo](/docs).

- [Environment setup for the workshop](/docs/WorkshopEnvironmentSetup.md)

### Branches

We know that following along during live coding can be challenging. If you fall behind, don't worry. We have created branches for each transition in the workshop. They follow the naming convention `STEP_NUMBER-description`. 

To checkout a branch to get caught up, run the following command
```
git checkout BRANCH_NAME
```

<hr/><hr/>

## Default documenation from Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

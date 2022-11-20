# Weather App


## About the project

* Time to code the app :
    * UI : 3 Hours
    * Functionalities : 5 Hours

The app is code using the framework React and is structured as follows :
 * assets/css : contains all the stylesheets
 * components : the components of the app
 * services : for api calls
 
### Dynamic background problem -> leaflet / Google place api
The dynamic background had to change for every city. Unfortunately I did not found a free api to get the background.

### Improvements
* some api calls are made in the components to get the icons to display. Those api calls should be in the services' 
folder with the other api calls.
* All the css is located in one single file. It makes the maintenance of the code more difficult.
* Use of a global file to handle the constants.
* No proper error handling.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

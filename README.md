This was just a fun learning project in an attempt to build someting practical using react/redux.
If you would like to add your own music (mp3, m4a), you add them to the public directory in this format:
./my-jukebox/public/source/{artist}/[*.mp3]

I didn't commit my own mp3 music because of licensing/sharing issues.
The "artist" will be used display the artist name in the UI and a cleaned up mp3 filename will be the song name.
You can then run the musicGenerator.js to produce the songs.json that will be used in my-jukebox/src/testData/rockSongs.js
i.e. In  the my-jukebox/scripts directory, run ">node musicGeneraor.js" will produce a songs.json file whose data can be copied to my-jukebox/src/testData/rockSongs.js

The plan is that the the mp3 and song metadata will eventually be served from the backend server.
But for now we just stub everything out and read the music from our local directory.

my-jukebox project was created using create-react-app template.
i.e. npx create-react-app my-jukebox


First step was to design jukebox song listing layout in a static fashion without and redux at all.
Great general design thoughts from this react documentation: https://reactjs.org/docs/thinking-in-react.html


Second step was to add some interactivity and think about how state will be maintained in the local components,
what state should be "lifted" to a higher level component, and what state should be stored in the redux store.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

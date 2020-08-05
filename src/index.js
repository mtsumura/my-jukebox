import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { fetchSongs, fetchSongLists, errorSongsRequest } from './actions'

const loggerMiddleware = createLogger()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
		))
	)

/*const unsubscribe = */ store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

store.dispatch(fetchSongLists())
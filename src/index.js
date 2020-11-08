import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBufMLId0XOqudR-CLyl7UpDUAfArEJwJk",
	authDomain: "student-id-card-identification.firebaseio.com",
	databaseURL: "https://student-id-card-identification.firebaseio.com",
	storageBucket: "student-id-card-identification.appspot.com"
}
firebase.initializeApp(config);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


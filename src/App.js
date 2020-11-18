import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './components/history/history';
import ROUTES from './routes';
import HeaderApp from './components/Header/Header';
import FooterApp from './components/footer/footer';
import * as firebase from 'firebase';

function App() {


	useEffect(() => {
		fetchInfo();
	}, [])

	const fetchInfo = () => new Promise((a,b)=> {
			var dbRef = firebase.database().ref().child('info');
			dbRef.on('value', snap => localStorage.setItem('info', JSON.stringify(snap.val())));
		})

	return (
		<Router history={history}>
			<div className="font-sans">
				<div className="DoAn">
					<HeaderApp />
					<div className="w-full">
						{showContenMenus(ROUTES)}
					</div>
					<FooterApp />
				</div>
			</div>
		</Router>
	);
}

const showContenMenus = (routes) => {
	var result = null;	
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (
				<Route
					key={index}
					path={route.path}
					exact={route.exact}
					render={props => <route.main {...props} />}
				/>
			)
		})
	}
	return <Switch>{result}</Switch>
}

export default App;

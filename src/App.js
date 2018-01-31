import React from 'react';
import HomePage from './_components/HomePage';
import LoginPage from './_components/LoginPage';
import RegisterPage from './_components/RegisterPage';
import MovieVideo from './_components/MovieVideo';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const App = () =>
<div className="App">
<header className="App-header">
  <h1 className="App-title">MovieBase</h1>
  <nav>
  	<ul>
  		<li><Link to="/home" className="btn btn-link">Home</Link></li>
  		<li><Link to="/register" className="btn btn-link">Register</Link></li>
  		<li><Link to="/movievideo" className="btn btn-link">Movie Video</Link></li>
  	</ul>
  </nav>
</header>
    <div>
		<Switch>
			<Route exact path="/" component={LoginPage} />
			<Route path="/home" component={HomePage} />
			<Route path="/register" component={RegisterPage} />
			<Route path="/movievideo" component={MovieVideo} />
		</Switch>
    </div>
</div>;


export default App;
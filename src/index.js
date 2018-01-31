import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './_store';
import registerServiceWorker from './registerServiceWorker';
import { getMovies } from './_redux/movies/actions';

store.dispatch(getMovies());

ReactDOM.render(
<Provider store={store}>		
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();

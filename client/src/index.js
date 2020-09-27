import React from 'react';
import ReactDOM from 'react-dom';
// Redux Layer : 
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reducers from './reducers';
// Middlewares : 
import reduxThunk from 'redux-thunk';
// Styling :
import 'materialize-css/dist/css/materialize.min.css';


import App from './components/App';
// Creating our redux Store instance : 
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';
// Redux Layer : 
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reducers from './reducers';
// Styling :
import materializeCss from 'materialize-css/dist/css/materialize.min.css';


import App from './components/App';
// Creating our redux Store instance : 
const store = createStore( reducers , {} , applyMiddleware() )



ReactDOM.render(
  <Provider store={store}><App /></Provider> ,
   document.querySelector('#root') 
);
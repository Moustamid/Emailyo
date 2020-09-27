import {combineReducers} from 'redux';
import authReducer from './authReducer';


export default combineReducers({

  auth : authReducer

});



/*

* combineReducers : is the peices of the Global Redux State .

* the Redux State is now awaire of every peice the states Updates 'from the reducers'

* 


*/ 
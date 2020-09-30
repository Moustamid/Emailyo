import axios from 'axios';
import {FETCH_USER} from './types';

// Fetch user Model from the Database :

export const fetchUser = () => async dispatch => {

    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER , payload: res.data}) ;

};

// Send Strip Token to the BackEnd Api  :

/* # Token : is the object we got back from the Strip API */  
export const handToke = (Token) => async dispatch => {

   const res = await axios.post('/api/stripe' , Token );
   dispatch({ type: FETCH_USER , payload: res.data}) ;
   
} ;












/*
 Note : Async Actions 

 # axios : help us fetch data in React
 
 # reduxThunk Middleware : 
  checck if we return a function or a {type , payload } object .
  if we return a function , reduxThunk will call the function 
  and pass in "dispatch function" as an argument .

  "dipatch function" ==> dispatch data to the Redusers

  !! we want to dispatch the action AFTER the async action is completed
  !! Redux dispatch data under the hood with the "dipatch function" 
     immidiately.

  !! Flow of Data : Dispatch actions to => reducers : # ! all redusers will resice the action"

*/ 
import axios from 'axios';
import {FETCH_USER} from './types';


export const fetchUser = () => async dispatch => {

    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER , payload: res}) ;

};



/*
 Note : Async Actions 

 # axios : help usfetch data in React
 
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
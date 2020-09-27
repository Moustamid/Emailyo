// Action Types :
import {FETCH_USER} from '../actions/types';

export default function( state = null , action ) {
    
   // reducer is reciving the acttion : 
   //  console.log('Action called:', action);

   switch(action.type) {

     case FETCH_USER:
       return  action.payload || false ;
    
     default:
      return state;
   }
   
}


/*
 Note : 

 1* Every reducer resives automaticaly every action :
    ## via the dispatch function ##

 2* Every reducer check the action objects to update the state .
 
 3* the store is awaire of the new states : 
       # store = createStore(reducers) : <= reducers Object .
       # reducers : "reducers/index.js" ;

 */
export default function( state = {} , action ) {
    
    console.log('Action called:', action);

   switch(action.type) {
    
     default:
      return state;
   }
   
}


/*
 Note : 
 !! every reducer check the actions he recives automaticaly and updates

*/ 
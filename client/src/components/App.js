// React Layer :
import React, { Component } from 'react';
// Router Layer :
import {BrowserRouter , Route} from 'react-router-dom';
// Redux Layer:
import  {connect} from 'react-redux';
import * as actions from '../actions';


// Components :
import Header from './Header';
const Landing = () => <h2>Landing</h2>
const Dashbord = () => <h2>Dashbord</h2>
const surveyNew = () => <h2>surveyNew</h2>


class App extends Component {
   componentDidMount() {
    //  Calling the Action Creater :
     this.props.fetchUser();
   }
 
   render() {
     return (
       <div className="container">
         <BrowserRouter>
           <div>
             <Header />
             <Route exact path="/" component={Landing} />
             <Route exact path="/surveys" component={Dashbord} />
             <Route path="/surveys/new" component={surveyNew} />
           </div>
         </BrowserRouter>
       </div>
     );
   }
 }
 
 export default connect(null, actions)(App);



/*
Note : 
* connect : conecting the component to the action ctearters .
     # the App components get the actions as props
  
  !! Flow of Data : to => Actions creators "actions/index.js" 
*/ 
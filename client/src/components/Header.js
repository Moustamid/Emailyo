import React , {Component} from 'react';
// Redux : 
import  {connect} from 'react-redux';
// Route : 
import {Link} from 'react-router-dom';

class Header extends Component {

    renderContent(){
      
       switch(this.props.auth){

          case null :
            return '';

          case false :
            return  <li><a href="/auth/google">Login With Google</a></li>;

          default:
            return  <li><a href="/api/logout">Login out</a></li>;
            // Note : 
           // Update the logout flow to using : Ajax request & Redux , 
          //  not Http link logout to our Express server. 
       }

    }

   render() {
      console.log(this.props);
     return (
        <div>
          <nav>
            <div className="nav-wrapper">
              <Link 
              to={this.props.auth ? '/surveys' : '/'} 
              className="left brand-logo"
              >
              Emailyo
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">{this.renderContent()}</a></li>
              </ul>
            </div>
          </nav>
        </div>
     );
   }

}

// Redux :

function mapStateToProps({auth}) {
  return  { auth };
}

export default connect(mapStateToProps)(Header); 








/*

*  Note :
    # state is the entires state from the Redux store
    # the state peices are updeted in the combined reducer "reducers/index.js"
    # mapStateToProps(state) : return  { auth : state.auth };
      map the global Redux State  ,
      and pass the peice of state neccecery
      to the component as props object {} .
    
      Note ES6 : 
      - { auth : state.aute}
      - { auth : aute}  : destructuting the state obj
      - { auth }        : ES6 
      - Note : auth = action.payload

*/ 
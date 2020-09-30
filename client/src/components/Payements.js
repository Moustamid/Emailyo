import React , {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
// Redux : 
import  {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {

    render(){

      return(
        // Stripe Btn Component :
        <StripeCheckout
           name="Emailyo"
           description="5$ for 5 email credits"
           amount={500} // amount in Us dollars cents - 5$
           token={ token => this.props.handToke(token) } //  authorisation token => call back 
           stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn">Add Credits</button>
        </StripeCheckout>
      );
    }
}


export default connect(null , actions)(Payments);
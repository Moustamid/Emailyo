import React , {Component} from 'react';

class Header extends Component {

   render() {
     return (
        <div>
          <nav>
            <div class="nav-wrapper">
              <a href="#" class="left brand-logo">Emailyo</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Login With Google</a></li>
              </ul>
            </div>
          </nav>
        </div>
     );
   }
}


export default Header; 
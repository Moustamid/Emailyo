// React Layer -  Router Layer
import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
// Components :
import Header from './Header';

const Landing = () => <h2>Landing</h2>
const Dashbord = () => <h2>Dashbord</h2>
const surveyNew = () => <h2>surveyNew</h2>

const App = () => {
   return (
      <div>
        <BrowserRouter>
           <div>
             <Header/>
             <Route exact path="/" component={Landing} />
             <Route exact path="/surveys" component={Dashbord} />
             <Route path="/surveys/new" component={surveyNew} />
           </div>
        </BrowserRouter>
      </div>   
   );
}


export default App;

import React, { Component } from 'react';
import LandingPage from "../landing/LandingPage";
import SignIn from "../signin/signinPage/SignInPage";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
// import PrivateRoutDashboard from "../privateRoutDashboard/PrivateRoutDashboard";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "../notFound/NotFound";
import EmailConfirm from "../emailConfirm/EmailConfirm";
import "../../assets/fonts/fonts.css";
 
class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/forgot" component={SignIn}/>
            <Route path="/signup" component={SignIn}/>
            <Route path="/confirmation_email" component={EmailConfirm}/>
            {/* <Route path="/dashboard" component={PrivateRoutDashboard}/> */}
            <Route path="/dashboard" component={Dashboard}/>
            <Route component={NotFound}/>
          </Switch>
          



        </div>
    </Router>
      
    )
  }
}


export default App;
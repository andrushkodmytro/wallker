import React, { Component } from 'react';
import LandingPage from "../landing";
import SignIn from "../signin/signinPage/SignInPage";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Dashboard from "../dashboard/Dashboard";
 
class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/forgot" component={SignIn}/>
          <Route path="/signup" component={SignIn}/>
          <Route path="/dashboard" component={Dashboard}/>



        </div>
    </Router>
      
    )
  }
}


export default App;

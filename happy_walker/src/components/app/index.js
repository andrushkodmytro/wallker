import React, { Component } from 'react';
import LandingPage from "../landing";
import SignIn from "../signin/signin_page";
import {connect} from "react-redux";
import {appChangeView} from "../../action";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Dashboard from "../../dashboard/Dashboard"
 
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
const mapStateToProps = state => {
  return {
    reducer: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    appChangeView: view => {
      dispatch(appChangeView(view));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

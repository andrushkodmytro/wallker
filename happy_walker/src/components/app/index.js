import React, { Component } from 'react';
import LandingPage from "../landing";
import SignIn from "../signin/signin_page";
import {connect} from "react-redux";
import {appChangeView} from "../../action";
import ForgotPassword from "../forgot_password/forgotPasswordMain/ForgotPassFirstSection";
import {BrowserRouter as Router, Route} from "react-router-dom"
import signUpForm from '../signin/signUpForm';
import Dashboard from "../../src/Dashboard"
 
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


          {/* <Route path="/forgot" component={ForgotPassword}/> */}

        </div>
      
    </Router>
      
    //   <div className="app">
    //  { currentPage(this.props.reducer.reducer.appView)}
    //   </div>
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

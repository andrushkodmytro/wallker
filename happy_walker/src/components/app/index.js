import React, { Component } from 'react';
import LandingPage from "../landing/landing_page";
import SignIn from "../signin/signin_page";
import {connect} from "react-redux";
import {appChangeView} from "../../action";
// import store from '../../store/index.js';
 
class App extends Component {
  render() {
    let currentPage=val=>{
        switch(val){
          case "Landing":
           return <LandingPage handler={this.props.appChangeView}/>;
          case "SignIn":
         return <SignIn handler={this.props.appChangeView}/>
        default: 
        return <LandingPage handler={this.props.appChangeView}/>
        }
      }
  

    return (
      <div className="app">
     { currentPage(this.props.reducer.appView)}
      </div>
    );
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

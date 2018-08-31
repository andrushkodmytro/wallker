import React, { Component } from 'react';
import {connect} from "react-redux";
import Dashboard from "../dashboard/Dashboard";
import {Redirect} from "react-router-dom"

 class PrivateRoutDashboard extends Component {

  render() {
    return (
      <div>
      {this.props.state? <Dashboard/>:<Redirect to="/signin" />} 
      </div>
    )
  }
}
const mapStateToProps=state=>{
    return {
        state:state.reducer.logIn
    }
}
export default connect(mapStateToProps)(PrivateRoutDashboard)

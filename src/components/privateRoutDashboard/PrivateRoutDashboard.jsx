import React, { Component } from 'react';
import {connect} from "react-redux";
import Dashboard from "../dashboard/Dashboard";
import {Route} from "react-router-dom";
import {isFetching,getUser} from "../../action/actions"
import Download from "../../assets/img/download.gif";
import "./PrivateRoutDashboard.css"


 class PrivateRoutDashboard extends Component {
  componentWillMount(){
    this.props.getUser()
   }
  render() {
    // console.log(this.props)
    return (
      <div className="private_rout">
      {/* {this.props.state? <Dashboard/>:<Redirect to="/signin" />}  */}
      {this.props.state.dashboard.isFetching?
         <div><img src={Download} alt="download"/></div>
      :
      <Route path="/dashboard" component={Dashboard}/>
      }

      </div>
    )
  }
}
const mapStateToProps=state=>{
    return {
        state:state.reducer
    }
}
const mapDispatchToProps=dispatch=>{
  return{
    isFetching:()=>{
      dispatch(isFetching())
    },
    getUser:()=>{
      dispatch(getUser())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoutDashboard)

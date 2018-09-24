import React, { Component } from 'react';
import {connect} from "react-redux";
import Dashboard from "../dashboard/Dashboard";
import {Route} from "react-router-dom";
import {isFetching,getUser,signInStatus} from "../../action/actions"
import Download from "../../assets/img/download.gif";
import "./PrivateRoutDashboard.css"


 class PrivateRoutDashboard extends Component {
  componentWillMount(){
    if(this.props.state.signIn.status===200){
      this.props.isFetching(false)
      
    }
    else if(this.props.state.signIn.status===404){
      alert("Hello")
      this.props.history.push("/signin")
    }

    else{
      this.props.getUser()
    }
    
   }
   componentWillReceiveProps({state}){
    if(state.signIn.status===200){
      this.props.signInStatus("")
    }
    else if(state.signIn.status===404){
      // alert("Hello")
      this.props.history.push("/signin")
    }
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
    },
    signInStatus:(status)=>{
      dispatch(signInStatus(status))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoutDashboard)

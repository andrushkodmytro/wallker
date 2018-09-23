import React, { Component } from 'react';
import {confirmEmail,getUser } from "../../action/actions";
import {changeEmailStatus,changeEmail} from "../..//action/settingsActions"
import { connect} from "react-redux";

 class emailConfirm extends Component {
   componentDidMount(){
     var href=document.location.href
     if((/uid=/).test(href)&&(/token=/).test(href)&&(/new_email=/).test(href)){
      let regexp = /uid=([\d]+).token=(.+).new_email=(.+)$/;
      const url=href.match(regexp)
      const confirm={
        uid: +url[1],
        token: url[2],
        new_email: url[3]
      }
      console.log(confirm)
      this.props.changeEmail(confirm)
     }
    else if((/uid=/).test(href)&&(/token=/).test(href)){
      let regexp = /uid=([\d]+).token=(.+)/;
      const url=href.match(regexp)
      
      const confirm={
        uid: +url[1],
        token: url[2]
      }
      console.log(confirm)
       this.props.confirmEmail(confirm)
     }

   
   }
   componentWillReceiveProps(NewProps){
    if(NewProps.state.user)
   console.log(NewProps)
    this.props.history.push("/dashboard")
    if(NewProps.state.changeEmailStatus===201){
      alert("Changed sucess")
    }
  }
  render() {
   console.log(this.props)
    return (
      <div>
        
      </div>
    )
  }
}
const mapStateToProps=state=>{
  return {
    state:{ user : state.reducer.user, changePassStatus: state.settingsReducer.settings.changePassStatus}
    
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    confirmEmail:(confirm)=>{
      dispatch(confirmEmail(confirm))
    },
    getUser:(userId)=>{
      dispatch(getUser(userId))
    },
    changeEmailStatus:(status)=>{
      dispatch(  changeEmailStatus(status))
    },
    changeEmail:(confirm)=>{
      dispatch(changeEmail(confirm))
    }

  }
}
export default  connect (mapStateToProps,mapDispatchToProps)(emailConfirm)

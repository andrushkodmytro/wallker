import React, { Component } from 'react';
import {confirmEmail,getUser} from "../../action/actions";
import { connect} from "react-redux";

 class emailConfirm extends Component {
   componentDidMount(){
    var regexp = /uid=([\d]+).token=(.+)/;
    const url=this.props.location.search.match(regexp)
    const confirm={
      uid: url[1],
      token: url[2]
    }
     this.props.confirmEmail(confirm)
   }
   componentWillReceiveProps(NewProps){
    if(NewProps.user)
    this.props.getUser(NewProps.user.id)
    // this.props.history.push("/dashboard")
  }
  render() {
    console.log(document.cookie)
    return (
      <div>
        
      </div>
    )
  }
}
const mapStateToProps=state=>{
  return {
    user:state.reducer.user
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    confirmEmail:(confirm)=>{
      dispatch(confirmEmail(confirm))
    },
    getUser:(userId)=>{
      dispatch(getUser(userId))
    }

  }
}
export default  connect (mapStateToProps,mapDispatchToProps)(emailConfirm)

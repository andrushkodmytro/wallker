import React, { Component } from 'react';
import { Link ,withRouter} from "react-router-dom";
import '../Header.css';
import '../../../../assets/fonts/fonts.css';
import {connect}  from "react-redux"
import {loginUser, logOutAction} from "../../../../action/actions"
import header__photo from '../../../../assets/img/avatar.png';
import header__settings from '../../../../assets/img/settings.png';
import header__signout from '../../../../assets/img/signout.png';
// import { userInfo } from 'os';

 class HeaderRight extends Component {
     constructor(props){
        super(props)
        this.logOut=this.logOut.bind(this)

     }
     logOut(){
        this.props.logOutAction()
        // this.props.history.push("/signin")
        this.props.loginUser("")
        
     }
    render() {
        const { user } = this.props;
    return (
        <div className="header__right">
            <div>
                <Link to="/dashboard">  
                <img className="header__photo" src={ header__photo } alt="header img"/>
                </Link>
            </div>
            <div>
                <p className="header__hello">Hi, { user.first_name }!</p>
            </div>
            <div>
                <Link to="/dashboard/settings"><img className="header__settings" src={ header__settings } alt="settings"/></Link>
            </div>
            <div>
                <Link to="/signin" onClick={this.logOut}>
                <img className="header__sign-out" src={ header__signout } onClick={this.logOut} alt="signout" />
                </Link>
            </div>
        </div>
      );
    }
  }
  const mapStateToProps=state=>{
    return {
      user: state.reducer.user
    }
  }
  const mapDispatchToProps=dispatch=>{
    return {
        loginUser:(user)=>{
            dispatch(loginUser(user))
        },
        logOutAction:()=>{
            dispatch(logOutAction())
        }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps) (withRouter(HeaderRight))
import React, { Component } from 'react';
import '../../assets/css/App.css';
import {connect} from "react-redux";

import Header from './header/Header';
import Summary from './summary/Summary';
// import SettingsProfile from './settings/settingsProfile/SettingsProfile';
import Settings from './settings/Settings';
import Today from './today/Today';
import TopHW from './topHappyWalkers/TopHW';
import Footer from './footer/Footer';
// import SettingsPassword from './settings/settingsPassword/SettingsPassword';
import {Route} from "react-router-dom";
import {signInStatus} from "../../action/actions"
// import axios from "axios"

 class Dashboard extends Component {  
   componentDidMount(){
     this.props.signInStatus("")
   } 
  render() {
    // console.log(this.props.state)
    const summary = "summary";
    const settings = "settings";
    
    const userData = { 
      // username : "",
      // first_name : "Effie",
      // last_name : "Robbins",
      // email : "effie.robbins@gmail.com",
      steps : 9.593,
      distance : 7.42 + " KM",
      kcal : 482
     }

    //  console.log(this.props.user);
    
    return (
      <div className="container">
        <Header user={ this.props.user }/>
        <Route exact path="/dashboard" render= {()=><Summary text={ summary }/>}/>
        <Route exact path="/dashboard/settings" render= {()=><Summary text={ settings }/>}/>
        <Route exact path="/dashboard" render= {()=><Today data={ userData } user={ this.props.user }/>}/>
        <Route exact path="/dashboard" render= {()=><TopHW/>}/>
        {/* <Route exact path="/dashboard/settings" render= {()=><SettingsProfile user={ this.props.user }/>}/>
        <Route exact path="/dashboard/settings" render= {()=><SettingsPassword/>}/> */}

        <Route exact path="/dashboard/settings" render= {()=><Settings/>}/>
        
        <Footer />
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return {
    user: state.reducer.user
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    signInStatus:(status)=>{
      dispatch(signInStatus(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( Dashboard )

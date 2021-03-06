import React, { Component } from 'react';
import '../../assets/css/App.css';
import Header from './header/Header';
import Summary from './summary/Summary';
import SettingsProfile from './settings/settingsProfile/SettingsProfile';
import Today from './today/Today';
import TopHW from './topHappyWalkers/TopHW';
import Footer from './footer/Footer';
import SettingsPassword from './settings/settingsPassword/SettingsPassword';
import {Route} from "react-router-dom";
import {connect} from "react-redux";

 class Dashboard extends Component {
  render() {
    const summary = "summary";
    const settings = "settings";
    
    const userData = { 
      username : "",
      first_name : "Effie",
      last_name : "Robbins",
      email : "effie.robbins@gmail.com",
      steps : 9.593,
      distance : 7.42 + " KM",
      kcal : 482
     }

    return (
      <div className="container">
        <Header user={ userData }/>
        <Route exact path="/dashboard" render= {()=><Summary text={ summary }/>}/>
        <Route exact path="/dashboard/settings" render= {()=><Summary text={ settings }/>}/>
        <Route exact path="/dashboard" render= {()=><Today user={ userData }/>}/>
        <Route exact path="/dashboard" render= {()=><TopHW/>}/>
        <Route exact path="/dashboard/settings" render= {()=><SettingsProfile user={ userData }/>}/>
        <Route exact path="/dashboard/settings" render= {()=><SettingsPassword/>}/>
        
        <Footer />
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return {
    user:state.reducer.user
  }
}
export default connect(mapStateToProps)(Dashboard)

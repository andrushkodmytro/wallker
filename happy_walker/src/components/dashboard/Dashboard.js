import React, { Component } from 'react';
import '../../assets/css/App.css';
import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import SettingsProfile from './components/settings/settingsProfile/SettingsProfile';
import Today from './components/today/Today';
import TopHW from './components/topHappyWalkers/TopHW';
import Footer from './components/footer/Footer';
import SettingsPassword from './components/settings/settingsPassword/SettingsPassword';
import {Route} from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    const summary = "summary";
    const settings = "settings";
    const d = "dd";
    
    return (
      <div className="container">
        <Header />
        <Route exact path="/dashboard" render= {()=><Summary text={ summary }/>}/>
        <Route exact path="/dashboard/settings" render= {()=><Summary text={ settings }/>}/>
        <Route exact path="/dashboard" render= {()=><Today/>}/>
        <Route exact path="/dashboard" render= {()=><TopHW/>}/>
        <Route exact path="/dashboard/settings" render= {()=><SettingsProfile/>}/>
        <Route exact path="/dashboard/settings" render= {()=><SettingsPassword/>}/>
        <Footer />
      </div>
    );
  }
}

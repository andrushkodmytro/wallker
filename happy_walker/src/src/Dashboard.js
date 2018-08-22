import React, { Component } from 'react';
import './assets/App.css';
import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import SettingsProfile from './components/settings/settingsProfile/SettingsProfile';
import Today from './components/today/Today';
import TopHW from './components/topHappyWalkers/TopHW';
import Footer from './components/footer/Footer';
import SettingsPassword from './components/settings/settingsPassword/SettingsPassword';

export default class Dashboard extends Component {
  render() {
    const summary = "Summary";
    const settings = "Settings";
    return (
      <div className="container">
        <Header />
        <Summary text={ settings }/>
        {/* <SettingsProfile />
        <SettingsPassword /> */}
        <Today />
        <TopHW />
        <Footer />
      </div>
    );
  }
}

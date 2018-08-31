import React, { Component } from 'react';
import LandingHeader from "./landingHeader";
import Community from "./community";
import BeHealthy from "./beHealthy";
import LandingExpirience from "./landingExpirience";
import LandingFooter from "./landingFooter";
import "./style.css";

class LandingPage extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="container__landing">
        <LandingHeader handler={this.props.handler}/>








        
        <Community/>
        <BeHealthy/>
        <LandingExpirience/>
        <LandingFooter handler={this.props.handler}/>
      </div>
    );
  }
}

export default LandingPage;

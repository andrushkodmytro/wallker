import React, { Component } from 'react';
import LandingHeader from "../landing_header";
import Community from "../community";
import BeHealthy from "../be_healthy";
import LandingExpirience from "../landing_expirience";
import LandingFooter from "../landing_footer";
import "./style.css";

class LandingPage extends Component {
  render() {

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

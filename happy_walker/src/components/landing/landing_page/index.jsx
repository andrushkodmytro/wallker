import React, { Component } from 'react';
import Section1 from "../section1";
import Section2 from "../section2";
import Section3 from "../section3";
import Section4 from "../section4";
import Section5 from "../section5";
import "./style.css";

class LandingPage extends Component {
  render() {
    console.log(this.props.handler)

    return (
      <div className="container__landing">
        <Section1 handler={this.props.handler}/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5 handler={this.props.handler}/>
      </div>
    );
  }
}

export default LandingPage;

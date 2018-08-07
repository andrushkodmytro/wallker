import React, { Component } from 'react';
import "./style.css";

export default class Section5 extends Component {
  render() {
    return (
    <div className="section5">
         <div className="section5__board">
                <h3>
                    Ready to start?  Sign up for free!
                </h3>
                <button className="boardbtn">
                        Get Started for Free
                </button>
            </div>
            <div className="section5__logo">
                <img src={require("../../img/logo.png")} alt="logo hapy walker"/>
                <p>
                    Coryright © 2018 Happy Walkers
                </p>
                <img src={require("../../img/logo-lasoft.png")} alt="logo lasoft"/>
            </div>
    </div>
    )
  }
}

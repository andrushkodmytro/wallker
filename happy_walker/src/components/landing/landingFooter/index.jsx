import React, { Component } from 'react';
import Button from "../../../sharedComponents/button";
import {Link} from "react-router-dom";
import "./style.css";
import logo from '../../../assets/img/logo.png';
import logoLasoft from '../../../assets/img/logo-lasoft.png'

export default class Section5 extends Component {
  render() {
    return (
    <div className="section5">
         <div className="section5__board">
                <h3>
                    Ready to start?  Sign up for free!
                </h3>
                <Link to="signin">
                <Button title="Get Started for Free" handler={this.props.handler} val="SignIn"/>

                </Link>

            </div>
            <div className="section5__logo">
                <img src={logo} alt="logo hapy walker"/>
                <p>
                    Coryright © 2018 Happy Walkers
                </p>
                <img src={logoLasoft} alt="logo lasoft"/>
            </div>
    </div>
    )
  }
}

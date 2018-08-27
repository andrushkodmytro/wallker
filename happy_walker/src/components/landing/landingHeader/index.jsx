import React, { Component } from 'react';
import Button from "../../../sharedComponents/button";
import Logo from '../../../assets/img/logo-light.png';
import LogoLasoft from '../../../assets/img/logo-lasoft2.png';
import {Link} from "react-router-dom";

import "./style.css";

export default class LandingHeader extends Component {
  render() {

    return (
        <div className="section1">
            <div className="logo-header">
                <img src={Logo} alt="logo"/>
                <img src={LogoLasoft} alt="lasoft powered"/>
            </div>

            <div className="section1__header">
                <h1>
                    Track your walking and
                </h1>
                <h1>
                    activities online
                </h1>
            </div>

            <div className="section1__text">
                <p>
                    Powerful tool for tracking personal activities and activities of your friends
                </p>
            </div>

            <div className="section1__button">
            <Link to="/signin">
            <Button title="GET STARTED FOR FREE" val="SignIn" handler={this.props.handler}/>

            </Link>

            </div>
        </div>
    )
  }
}

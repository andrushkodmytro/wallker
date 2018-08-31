import React, { Component } from 'react';
import LandingExpirience from "./landingExpirience";
import Button from "../../sharedComponents/button/Button";
import Logo from '../../assets/img/logo-light.png';
import LogoLasoft from '../../assets/img/logo-lasoft2.png';
import Screenshot from '../../assets/img/browser.png';
import Walkboy from '../../assets/img/rectangle-2.png';
import Trainers from "../../assets/img/ico/001-trainers.png";
import Burn from "../../assets/img/ico/002-burn.png";
import Wristwatch from "../../assets/img/ico/003-wristwatch.png";
import Relationship from "../../assets/img/ico/004-relationship.png";
import Crown from "../../assets/img/ico/005-crown.png";
import logo from '../../assets/img/logo.png';
import logoLasoft from '../../assets/img/logo-lasoft.png'
import {Link} from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends Component {

  render() {
    return (
        <div className="container__landing">
            <div className="section1">
                <div className="logo-header">
                    <img src={Logo} alt="logo"/>
                    <img src={LogoLasoft} alt="lasoft powered"/>
                </div>
                <div className="section1__header">
                    <h1>Track your walking and</h1>
                    <h1>activities online</h1>
                </div>

                <div className="section1__text">
                    <p>Powerful tool for tracking personal activities and activities of your friends</p>
                </div>

                <div className="section1__button">
                    <Link to="/signin">
                        <Button title="GET STARTED FOR FREE" val="SignIn" handler={this.props.handler}/>
                    </Link>
                </div>
            </div>
            <div className="section2">
                <div className="section2__screenshot">
                    <img src={Screenshot} alt="screenshot"/>
                </div>
                <div className="section2__inform">
                    <div className="section2__header">
                        <h3>Track online.</h3>
                        <h3>simplify your life.</h3>
                        <h3>save time.</h3>
                    </div>
                    <div className="section2__text section2__p">
                        <p>
                            Community app developed for people who likes walking around alone or with friends. 
                            The app makes your walking much more fun. 
                            Unlike similar apps Happy Walker is a community application,
                            where you can compare your progress with progress of your friends.
                        </p>
                    </div>
                        
                </div>
                <div className="section2__walkboy">
                    <img src={Walkboy} alt="walkboy"/>
                </div>
            </div>
            <div className="section3">
                <div className="section3__header">
                    <h3>
                        Be healthy than even before
                    </h3>
                </div>
                <div className="section3__function">
                    <div className="section3__function__item">
                        <div>
                            <img src={Trainers} alt="Trainers"/>
                        </div>
                    <p>Track how much you walked during a day, week, year</p>
                    </div>
                    <div className="section3__function__item">
                        <div>
                            <img src={Burn} alt="Burn"/>
                        </div>
                        <p>Review how much calories you burned during the day </p>
                        </div>
                    <div className="section3__function__item">
                        <div>
                            <img src={Wristwatch} alt="Wristwatch"/>
                        </div>
                        <p>Set and achieve walking and running goals</p>
                    </div>
                    <div className="section3__function__item">
                        <div>
                            <img src={Relationship} alt="relationchip"/>
                        </div>
                        <p>Be a part of your local walking community</p>

                    </div>
                    <div className="section3__function__item">
                        <div>
                            <img src={Crown} alt="Crown"/>
                        </div>
                        <p>See your local ratings, country, global rating</p>
                    </div>
                </div>    
            </div>

            <LandingExpirience/>

            <div className="section5">
                <div className="section5__board">
                    <h3>Ready to start?  Sign up for free!</h3>
                    <Link to="signin">
                    <Button title="Get Started for Free" handler={this.props.handler} val="SignIn"/>
                    </Link>
                </div>
                <div className="section5__logo">
                    <img src={logo} alt="logo hapy walker"/>
                    <p>Coryright © 2018 Happy Walkers</p>
                    <img src={logoLasoft} alt="logo lasoft"/>
                </div>
            </div>
        </div>);
    }
}

export default LandingPage;

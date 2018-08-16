import React, { Component } from 'react';
import Button from "../../button";
import "./style.css";

export default class LandingHeader extends Component {
  render() {
    console.log(this.props.handler)

    return (
        <div className="section1">
            <div className="logo">
                <img src="/assets/img/logo.png" alt="logo"/>
                <img src="/assets/img/logo-lasoft2.png" alt="lasoft powered"/>
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
                <Button title="GET STARTED FOR FREE" val="SignIn" handler={this.props.handler}/>
            </div>
        </div>
    )
  }
}

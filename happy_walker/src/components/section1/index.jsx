import React, { Component } from 'react';
import "./style.css";

export default class Section1 extends Component {
  render() {
    return (
        <div className="section1">
            <div className="logo">
                <img src={require("../../img/logo.png")} alt="logo"/>
                <img src={require("../../img/logo-lasoft2.png")} alt="lasoft powered"/>
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
                <button>
                    GET STARTED FOR FREE
                </button>
            </div>
        </div>
    )
  }
}

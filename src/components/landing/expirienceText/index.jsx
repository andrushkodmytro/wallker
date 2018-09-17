import React, { Component } from 'react';
import Oval from "../../../assets/img/oval.png"

export default class ExpirienceText extends Component {
  render() {
    return (
        <div className="section4__text__main">
            <p>
            {this.props.user.text}
            </p>
            <div className="section4__text__user">
                <img src={Oval} alt="user_foto"/>
                <div>
                    <p>{this.props.user.name}</p>
                    <p>Runned {this.props.user.distance} km</p>
                </div>
            </div>
           
        </div>
    )
  }
}

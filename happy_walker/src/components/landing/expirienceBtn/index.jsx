import React, { Component } from 'react'

export default class ExpirienceBtn extends Component {
    
  render() {
    return (
        <div className="section4__text__button">
            <img src={this.props.src} alt="arrow" onClick={this.props.handler}/>
        </div>
    )
  }
}

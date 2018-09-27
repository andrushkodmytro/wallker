import React, { Component } from 'react';
import "./Button.css"

export default class Button extends Component {
   
  render() {
  //  let handler=()=>{
  //    this.props.handler(this.props.val)
  //  }
    return (
     <button className="buttonComponent">
        {this.props.title}
     </button>
    )
  }
}

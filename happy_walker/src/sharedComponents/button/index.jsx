import React, { Component } from 'react';
import "./style.css"

export default class Button extends Component {
   
  render() {
   let handler=()=>{
     this.props.handler(this.props.val)
   }
    return (
     <button >
        {this.props.title}
     </button>
    )
  }
}

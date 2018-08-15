import React, { Component } from 'react';
import "./style.css"

export default class Button extends Component {
   
  render() {
    console.log(this.props.handler)
   let handler=()=>{
     this.props.handler(this.props.val)
   }
    return (
     <button onClick={handler}>
        {this.props.title}
     </button>
    )
  }
}

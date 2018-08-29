import React, { Component } from 'react';
import "./style.css";
import Expirience from "../expirienceUser";
import DotChange from "../dotChange";

export default class LandingExpirience extends Component {
  constructor(props){
    super(props);
    this.state={
      currentDot:0,
      length:5
    }
    this.handler=(pos,length)=>{
      this.setState({currentDot:pos,
        length:length
      })
    }
  }
  render() {
    return (
    <div className="section4">
        <div className="section4__header">
                <h3>Hundreds of happy walkers</h3>
            </div>
            <Expirience handler={this.handler}/>
            <DotChange position={this.state.currentDot+1} length={this.state.length}/>
    </div>
    )
  }
}

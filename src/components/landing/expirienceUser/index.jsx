import React, { Component } from 'react';
import ExpirienceText from "../expirienceText";
import ExpirienceBtn from "../expirienceBtn";
import Data from "../expirienceData";
import GroupLeft from "../../../assets/img/group-7-copy.png";
import Groupright from "../../../assets/img/group-7.png";

import "./style.css";

export default class ExpirienceUser extends Component {
    constructor(props){
        super(props);
            this.state={
                textPos:0,
        }
        this.btnHandler=function(){
            let current=this.state.textPos;
            if(current===Data.length-1) current=0;
            else current++;
            this.setState({textPos:current});
            this.props.handler(current,Data.length-1);

        }.bind(this)
    

        
    }
  render() {
    return (
        <div className="section4__text">
        
       <ExpirienceBtn src={GroupLeft}/>
       <ExpirienceText user={Data[this.state.textPos]}/>
       <ExpirienceBtn src={Groupright} handler={this.btnHandler}/>
    </div>

    )
  }
}

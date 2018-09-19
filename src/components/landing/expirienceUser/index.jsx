import React, { Component } from 'react';
import ExpirienceText from "../expirienceText";
import ExpirienceBtn from "../expirienceBtn";
import Data from "../expirienceData";

import left_arrow from '../../../assets/img/group-7-copy.png';
import right_arrow from '../../../assets/img/group-7.png';

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
        
       <ExpirienceBtn src={ left_arrow } handler={this.btnHandler}/>
       <ExpirienceText user={Data[this.state.textPos]}/>
       <ExpirienceBtn src={ right_arrow } handler={this.btnHandler}/>
    </div>

    )
  }
}

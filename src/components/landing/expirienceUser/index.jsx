import React, { Component } from 'react';
import ExpirienceText from "../expirienceText";
import ExpirienceBtn from "../expirienceBtn";
import Data from "../expirienceData";
import "./slider.css"

import left_arrow from '../../../assets/img/group-7-copy.png';
import right_arrow from '../../../assets/img/group-7.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
        <div 
        // className="section4__text"
        >
        
       {/* <ExpirienceBtn src={ left_arrow } handler={this.btnHandler}/> */}
       <CarouselProvider  naturalSlideWidth={20}  naturalSlideHeight={3} totalSlides={5} >
       <ButtonBack>Back</ButtonBack>      
        <Slider className="sliderList">
          <Slide index={0} className="slideItem"><ExpirienceText user={Data[0]}/></Slide>
          <Slide index={1} className="slideItem"><ExpirienceText user={Data[1]}/></Slide>
          <Slide index={2} className="slideItem"><ExpirienceText user={Data[2]}/></Slide>
          <Slide index={2} className="slideItem"><ExpirienceText user={Data[3]}/></Slide>
          <Slide index={2} className="slideItem"><ExpirienceText user={Data[4]}/></Slide>
        </Slider>
        
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>

       {/* <ExpirienceText user={Data[this.state.textPos]}/> */}
       {/* <ExpirienceBtn src={ right_arrow } handler={this.btnHandler}/> */}

       

    </div>

    )
  }
}

import React, { Component } from 'react';
import './TopHW.css';
import '../../../../assets/fonts1/fonts.css';

export default class TopFirst extends Component {
    render() {
      const { handleBtnClick } = this.props;
      
      return (
        <div className="top__first">
            <div className="top__text">
                <p className="top__text_hw">Top happy walkers</p>
            </div>
            <button className="button__all" onClick={ () => handleBtnClick('ALL') }>All</button>
        </div>   
      );
    }
  }
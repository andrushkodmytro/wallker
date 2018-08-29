import React, { Component } from 'react';
import './TopHW.css';
import '../../../../assets/fonts/fonts.css';

export default class TopArticles extends Component {
    render() {
      return (
        <div className="articles">
            <div className="article1">Name</div>
            <div className="article2">Steps</div>
            <div className="article3">Distance</div>
            <div className="article4">Kcal</div>
        </div>
      );
    }
  }
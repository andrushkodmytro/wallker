import React, { Component } from 'react';

export default class Iframe extends Component {
    render() {
      return (
        <div className="map">
            <iframe  
              title={ this.props.title } 
              src={ this.props.src } 
              width={ this.props.width } 
              height={ this.props.height } 
              allowFullScreen={ this.props.allowFullScreen } 
              
              frameBorder={ this.props.frameBorder }>
            </iframe>
      </div>
      );
    }
  }
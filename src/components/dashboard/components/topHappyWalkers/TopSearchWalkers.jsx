import React, { Component } from 'react';
import './TopHW.css';
import '../../../../assets/fonts/fonts.css';

import search_loupe from '../../../../assets/img/search.png';

export default class TopSearchWalkers extends Component {
    render() {
      const { onUserInput } = this.props;

      return (
        <div className="search">
            <input value={ this.props.inputText }  
              onChange={ onUserInput } 
              style={{ backgroundImage: 'url('+ search_loupe +')'  }} 
              type="search" placeholder="Search Happy Walkers"
            />
        </div>
      );
    }
  }
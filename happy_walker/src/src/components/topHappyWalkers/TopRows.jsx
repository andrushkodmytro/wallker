import React, { Component } from 'react';
import './TopHW.css';
import '../../assets/fonts/fonts.css';

import photo from '../../assets/img/oval.png';

export default class TopRows extends Component {

  handleStarChange = () => {
    var { onStartClick, id } = this.props;
    
    onStartClick(id);
  }

    render() {
      const {
        className,
        count,
        star,
        name,
        steps,
        distance,
        kcal
      } = this.props;

      return (
        <div className="rows">
          <div className="table_row-item1">
            <div className={`${ className } ${ className }-${ count }`}>{ count }</div>
            <div className="star">
              <img 
                onClick={ this.handleStarChange }
                src={ star ? require('../../assets/img/yellow-star.png') : require('../../assets/img/grey-star.png')}
                alt="star"/>
          </div>
            <div className="photo"><img src={ photo } alt="profile_photo"/></div>
                <p className="name_hw">{ name }</p>
            </div>
            <div className="table_row-item2">{ steps }</div>
            <div className="table_row-item3">{ distance }</div>
            <div className="table_row-item4">{ kcal }</div>
        </div>
      );
    }
  }

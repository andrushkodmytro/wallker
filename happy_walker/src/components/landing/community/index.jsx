import React, { Component } from 'react';
import Screenshot from '../../../assets/img/browser.png';
import Walkboy from '../../../assets/img/rectangle-2.png';

import "./style.css";

export default class Section2 extends Component {
  render() {
    return (
      <div>
          <div className="section2__screenshot">
                <img src={Screenshot} alt="screenshot"/>
            </div>
            <div className="section2__inform">
                <div className="section2__header">
                        <h3>
                                Track online.   
                            </h3>
                            <h3>
                                simplify your life.
                            </h3>
                            <h3>
                                save time.
                            </h3>
                </div>
                <div className="section2__text section2__p">
                        <p>
                            Community app developed for people who likes walking around alone or with friends. 
                            The app makes your walking much more fun. 
                            Unlike similar apps Happy Walker is a community application,
                            where you can compare your progress with progress of your friends.
                        </p>
                </div>
                    
            </div>
            <div className="section2__walkboy">
                <img src={Walkboy} alt="walkboy"/>
            </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import "./style.css";

export default class Section2 extends Component {
  render() {
    return (
      <div>
          <div className="section2__screenshot">
                <img src={require("../../img/browser.png")} alt="screenshot"/>
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
                <img src={require("../../img/rectangle-2.png")} alt="walkboy"/>
            </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import "./style.css";

export default class Section4 extends Component {
  render() {
    return (
    <div className="section4">
        <div className="section4__header">
                <h3>Hundreds of happy walkers</h3>
            </div>
            <div className="section4__text">
                <div className="section4__text__button">
                    <img src={require("../../img/group-7-copy.png")} alt="arrow"/>

                </div>
                <div className="section4__text__main">
                    <p>
                        It does a great job of keeping track of mileage and average pace and the number 
                        of walks or other exercise activities you've completed.
                            Using the average pace is better than having it notify you of current pace at intervals, 
                            which seems more inconsistent and unreliable as it gave me wild variations throughout my runs. 
                        I like the challenges too. 
                        I walk anywhere from 3-9 miles on a given day, about 5-7 times a week.
                    </p>
                    <div className="section4__text__user">
                        <img src={require("../../img/oval.png")} alt="user_foto"/>
                        <div>
                            <p>Oscar Davis</p>
                            <p>Runned 1,324.73 km</p>
                        </div>
                    </div>
                       
                </div>
                <div className="section4__text__button">
                    <img src={require("../../img/group-7.png")} alt="arrow"/>
                </div>
            </div>
            <div className="section4__dot dot">
                <div></div>
                <div></div>
                <div className="active"></div>
                <div></div>
                <div></div>
            </div>
    </div>
    )
  }
}

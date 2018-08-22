import React, { Component } from 'react';
import Trainers from "../../../assets/img/ico/001-trainers.png";
import Burn from "../../../assets/img/ico/002-burn.png";
import Wristwatch from "../../../assets/img/ico/003-wristwatch.png";
import Relationship from "../../../assets/img/ico/004-relationship.png";
import Crown from "../../../assets/img/ico/005-crown.png";





import "./style.css";

export default class Section3 extends Component {
  render() {
    return (
        <div className="section3">
             <div className="section3__header">
                <h3>
                    Be healthy than even before
                </h3>
            </div>
            <div className="section3__function">
                <div className="section3__function__item">
                    <div>
                        <img src={Trainers} alt="Trainers"/>
                    </div>
                   <p>Track how much you walked during a day, week, year</p>
                </div>
                <div className="section3__function__item">
                    <div>
                        <img src={Burn} alt="Burn"/>
                    </div>
                    <p>Review how much calories you burned during the day </p>
                    </div>
                <div className="section3__function__item">
                    <div>
                         <img src={Wristwatch} alt="Wristwatch"/>
                    </div>
                    <p>Set and achieve walking and running goals</p>
                </div>
                <div className="section3__function__item">
                    <div>
                        <img src={Relationship} alt="relationchip"/>
                    </div>
                    <p>Be a part of your local walking community</p>

                </div>
                <div className="section3__function__item">
                    <div>
                        <img src={Crown} alt="Crown"/>
                    </div>
                    <p>See your local ratings, country, global rating</p>
                </div>
            </div>    
        </div>
    )
  }
}

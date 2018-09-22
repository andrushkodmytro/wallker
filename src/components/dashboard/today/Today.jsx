import React, { Component } from 'react';
// import Iframe from './Iframe.jsx';
import Map from "../map/Map";
import TodayProfile from './TodayProfile.jsx';
import TodayResults from './TodayResults.jsx';
import './Today.css';


export default class Today extends Component {
    render() {
      const { user, data } = this.props;

      return (
        <div className="today">
            <TodayProfile user={ user }/> 
            <TodayResults data={ data }/>
            
              <Map/>
        </div>
      );
    }
  }
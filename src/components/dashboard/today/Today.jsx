import React, { Component } from 'react';
import Iframe from './Iframe.jsx';
import TodayProfile from './TodayProfile.jsx';
import TodayResults from './TodayResults.jsx';
import './Today.css';
import '../../../assets/fonts/fonts.css';

export default class Today extends Component {
    render() {
      const { user } = this.props;

      return (
        <div className="today">
            <TodayProfile user={ user }/> 
            <TodayResults user={ user }/>
            <Iframe 
              title="GoogleMaps" 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10295.141676931713!2d24.053729794851343!3d49.82769810840492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sus!4v1533239889011"
              width="100%" 
              height="248" 
              allowFullScreen="allowfullscreen" 
              frameBorder="0"/>
              {/* <div id="map"></div> */}
        </div>
      );
    }
  }
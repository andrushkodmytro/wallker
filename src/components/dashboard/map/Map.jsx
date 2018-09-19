import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Maps extends Component {
  render() {
    return (
        <div className="map" >
            <GoogleMapReact
                bootstrapURLKeys={{ key:"AIzaSyAh2SOwHip_GdTYSXobteCr81b6Ad5QZnU" }}
                defaultCenter= {{lat: 49.84,lng: 24}  }
                 defaultZoom={11}>
                <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
                />
            </GoogleMapReact>
        </div>
    )
  }
}

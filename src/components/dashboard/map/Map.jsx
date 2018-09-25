import React from "react";
import { withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
let coordinates = [
    {lat:49.835583, lng:24.060218},
    {lat:49.835476, lng:24.060473},
    {lat:49.835528, lng:24.060607},
    {lat:49.835666, lng:24.060717},
    {lat:49.835849, lng:24.060886},
    {lat:49.835916, lng:24.060966},
    {lat:49.835977, lng:24.061103},
    {lat:49.835982, lng:24.061218},
    {lat:49.835980, lng:24.061395},
    {lat:49.835971, lng:24.061706},
    {lat:49.835976, lng:24.061942},
    {lat:49.835964, lng:24.062174},
    {lat:49.835990, lng:24.062343},
    {lat:49.836230, lng:24.062389},
    {lat:49.836453, lng:24.062394},
    {lat:49.836813, lng:24.062432},
    {lat:49.837040, lng:24.061616},
    {lat:49.837241, lng:24.060554},
    {lat:49.837518, lng:24.060801},
    {lat:49.838044, lng:24.061155},
    {lat:49.838044, lng:24.060999}            
]
const MapWithAMarker = withGoogleMap(props => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 49.84, lng: 24.05 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
    <Polyline path={coordinates} />
  </GoogleMap>
));

export default class Map extends React.Component {
  render() {
    return (
      <MapWithAMarker
        containerElement={<div style={{ height: `248px`, width:"50%", paddingTop:"72px", marginRight:"24px" }} />}
        mapElement={<div style={{ height: `100%`  }} />}
      />
    );
  }
}

import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) =>  {
  return(
    <div className="map-wrapper">
      <Map
        google={props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 53.251618, lng: -6.130808}}
      >
      { props.data.length > 0 ?
        props.data.map((item, index) => <Marker 
                                          key={index}
                                          position={{ lat: item.lat, lng: item.lon}}
                                          onClick={() => props.markerClickHandler(item)}
                                        />)
      : '' }
      </Map>
    </div>
  )
}

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);

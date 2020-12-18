import React from 'react';
import Detail from './Detail';
import ReactStreetview from 'react-streetview';

const PropertyDetail = (props) => {
  const streetViewPanoramaOptions = {
    position: {
      lat: props.propertyDetail.lat,
      lng: props.propertyDetail.lon
    },
    pov: {heading: 100, pitch: 0},
    zoom: 1
  };

  return(
    <div className="property-detail-wrapper">
      <h4>Property Details</h4>
      { Object.keys(props.propertyDetail).length > 0 ? 
        <div className="details">
          <div className="detail">
            <label>Street View</label>
            <div className="street-view" style={streetViewStyles}>
              {<ReactStreetview
                apiKey=""
                streetViewPanoramaOptions={streetViewPanoramaOptions} />}
            </div>
          </div>

          <Detail label="Beds" detail={props.propertyDetail.beds} isColumnDouble={true} />
          <Detail label="Baths" detail={props.propertyDetail.baths} isColumnDouble={true} />
          <Detail label="Property Type" detail={props.propertyDetail.property_type} />
          <Detail label="Address" detail={props.propertyDetail.address} />
          <Detail label="Sqm" detail={props.propertyDetail.sqm} isColumnDouble={true} />
          <Detail label="Price" detail={props.propertyDetail.price} isColumnDouble={true} />
        </div>
      : '' }
    </div>
  )
}

const streetViewStyles = {
  width: '100%',
  height: '300px',
}

export default PropertyDetail;
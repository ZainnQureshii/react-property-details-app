import React, { useState } from 'react';
import PropertyDetail from './PropertyDetail';
import './DetailsArea.css';
import MapContainer from './MapContainer';

const DetailsArea = (props) => {
  const [propertyDetail, setPropertyDetail] = useState({});
  const [showPropertyDetail, setShowPropertyDetail] = useState(false);
  
  const markerClickHandler = (item) => {
    setShowPropertyDetail(false)
    setPropertyDetail(item)
    setShowPropertyDetail(true)
  }

  return(
    <div className="details-area-wrapper">
      <div className="row">
        <div className="col-md-4">
          {showPropertyDetail ?
            <PropertyDetail propertyDetail={propertyDetail} /> :
            <div className="empty-detail">Click on the marker to show property details</div>}
        </div>
        <div className="col-md-8">
          <MapContainer data={props.data} markerClickHandler={markerClickHandler} />
        </div>
      </div>
    </div>
  )
}

export default DetailsArea;
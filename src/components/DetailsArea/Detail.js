import React from 'react';

const Detail = (props) => {
  return(
    <div className={'detail ' + (props.isColumnDouble ? 'double' : '')}>
      <label>{ props.label }: </label>
      <div className="value">
        { 
          props.label !== 'Price' ?
          (props.detail || 'Not mentioned') :
          (props.detail ? (`€${props.detail.toLocaleString('en-US')}`) : 'Not mentioned')
        }
      </div>
    </div>
  )
}

export default Detail;
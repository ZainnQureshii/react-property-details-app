import React from 'react';
import './FilterArea.css';

const FilterArea = (props) => {

  const applyFilter = (event, type) => {
    const value = event.target.value
    const filterValue = type === 'property_type' ? value : parseInt(value);
    const filteredData =  filterValue ? 
                            props.data.filter(item => item[type] === filterValue) :
                            props.data
    props.setDuplicateData(filteredData)
  }

  const selectBoxes = React.createRef();
  const clearFilter = () => {
    Array.from(selectBoxes.current.children).forEach(item => item.children[1][0].selected = true);
    props.setDuplicateData(props.data)
  }

  const findUnique = (value, index, array) => array.indexOf(value) === index && value

  const propertyTypeValues = props.data.map(item => item.property_type).filter(findUnique)
  const bedsValues = props.data.map(item => item.beds).filter(findUnique)
  const bathsValues = props.data.map(item => item.baths).filter(findUnique)

  return(
    <div className="col-md-6">
      <div className="filter-wrapper">
        <h3>Filters</h3>
        <div className="filters" ref={selectBoxes}>
          <div className="filter-box">
            <label>Property Type</label>  
            <select onChange={(e) => applyFilter(e, 'property_type')} className="form-control">
              <option value="">All</option>
              { propertyTypeValues.map((item, index) => <option value={item} key={index}>{item}</option>) }
            </select>
          </div>
          <div className="filter-box">
            <label>Beds</label>  
            <select onChange={(e) => applyFilter(e, 'beds')} className="form-control">
              <option value="">All</option>
              { bedsValues.map((item, index) => <option value={item} key={index}>{item} bed</option>) }
            </select>
          </div>
          <div className="filter-box">
            <label>Baths</label>  
            <select onChange={(e) => applyFilter(e, 'baths')} className="form-control">
              <option value="">All</option>
              { bathsValues.map((item, index) => <option value={item} key={index}>{item} bath</option>) }
            </select>
          </div>
        </div>
        <div className="clear-filter"><button onClick={clearFilter}>Clear Filters</button></div>
      </div>
    </div>
  )
}

export default FilterArea
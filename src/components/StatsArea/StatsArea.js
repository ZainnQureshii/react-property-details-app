import React from 'react'
import Chart from 'react-apexcharts';
import './StatsArea.css';

const StatsArea = (props) => {
  const findUnique = (value, index, array) => array.indexOf(value) === index && value
  const propertyTypeValues = props.data.map(item => item.property_type).filter(findUnique)

  const series = [];
  propertyTypeValues.forEach((item) => {
    let count = 0;
    props.data.forEach((item2) => {
      if(item === item2.property_type) count++
    })
    series.push(count)
  })
  const options = {
    labels: [...propertyTypeValues],
  }

  return(
    <div className="col-md-6">
      <div className="stats-wrapper">
        <h3>Stats</h3>
        <Chart options={options} series={series} type="pie" width="400" />
      </div>
    </div>
  )
}

export default StatsArea
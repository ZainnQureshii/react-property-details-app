import React, { useState, useEffect } from 'react';
import propertyData from './data.json';
import './App.css';
import FilterArea from './components/FilterArea/FilterArea';
import DetailsArea from './components/DetailsArea/DetailsArea';
import StatsArea from './components/StatsArea/StatsArea';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [data, setData] = useState([])
  const [duplicateData, setDuplicateData] = useState([])
  useEffect(() => {
    setData(propertyData)
    setDuplicateData(propertyData)
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="top-section row">
          <FilterArea duplicateData={duplicateData} data={data} setDuplicateData={setDuplicateData} />
          <StatsArea data={data} />
        </div>
        <hr />
        <DetailsArea data={duplicateData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

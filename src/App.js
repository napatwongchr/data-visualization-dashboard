import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/common/NavigationBar'
import ScatterplotChart from './components/Scatterplot'
import BarChart from './components/BarChart'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className='container mt-5'>
          <div className='row'>
            <div className='col border border-default mr-3 widget-box'>
              <BarChart width={500} height={250} />
            </div>
            <div className='col border border-default widget-box'>
              <ScatterplotChart width={500} height={250} />
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col border border-default widget-box'>
              <h4>Map</h4>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col border border-default widget-box'>
              <h4>Customchart</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

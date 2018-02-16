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
            <div className='col border corder-default m-2 pl-4 pt-3 mb-4'>
              <BarChart width={500} height={300} />
            </div>
            <div className='col border corder-default m-2 pl-4 pt-3 mb-4'>
              <h4>Scatterplot</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col border corder-default m-2 pl-4 pt-3 mb-4'>
              <h4>Customchart</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

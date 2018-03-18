import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/common/NavigationBar'
import ScatterplotChart from './components/Scatterplot'
import CustomChartExample1 from './components/CustomChartExample1'
import BarChart from './components/BarChart'

import readCsvFile from './helpers/readCsvFile'
import TechCrunchData from './data/TechCrunchcontinentalUSA.csv'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      barChartData: [],
      scatterPlotChartData: [],
      customChartExample1Data: []
    }
  }

  componentDidMount() {
    readCsvFile(TechCrunchData, (data) => {
      this.setState({
        barChartData: data
      })
    })
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className='container mt-5'>
          <div className='row'>
            <div className='col border border-default mr-3 widget-box'>
              <BarChart data={this.state.barChartData} width={500} height={250} />
            </div>
            <div className='col border border-default widget-box'>
              <ScatterplotChart width={500} height={250} />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col border border-default widget-box'>
              <CustomChartExample1 width={1000} height={500} />
            </div>
          </div>
          <div className='row py-3'>
            <div className='col border border-default widget-box pt-3'>
              <h4>Map</h4>
              <h5>Soon...</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

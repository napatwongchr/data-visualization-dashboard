import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/common/NavigationBar'
import ScatterplotChart from './components/Scatterplot'
import CustomChart1 from './components/CustomChart1'
import BarChart from './components/BarChart'

import readCsvFile from './helpers/readCsvFile'
import TechCrunchData from './data/TechCrunchcontinentalUSA.csv'
import { nodes, links } from './data/NodeData'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      barChartData: [],
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
    const { barChartData } = this.state
    const CustomChartExample1Data = { nodes, links }

    return (
      <div>
        <NavigationBar />

        {/* Content */}
        <div className='container mt-5'>
          <div className='row'>
            <div className='col border border-default mr-3 widget-box'>
              <h4 className='pt-3'>Facebook fund raising data</h4>
              <BarChart data={barChartData} width={500} height={250} />
            </div>
            <div className='col border border-default widget-box'>
              <h4 className='pt-3'>Events data</h4>
              <ScatterplotChart data={nodes}/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col border border-default widget-box'>
              <CustomChart1 data={CustomChartExample1Data} width={1000} height={500} />
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

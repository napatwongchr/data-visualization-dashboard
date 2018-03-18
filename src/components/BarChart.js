import React, { Component } from 'react'
import PropTypes from 'prop-types';
import createBarChart from '../helpers/createBarChart'

class BarChart extends Component {
  render() {
    const { height, width } = this.props
    const { data } = this.props
    createBarChart(this.node, data, width, height)
    return (
      <div>
        <h4 className='pt-3'>Facebook fund raising data</h4>
        <svg
          viewBox="0 0 500 250"
          style={{paddingLeft: '2.5em'}}
          ref={ node => this.node = node}
          width={width}
          height={height}>
        </svg>
      </div>
    )
  }
}

BarChart.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number
}

BarChart.defaultProps = {
  width: 500,
  height: 250
}

export default BarChart

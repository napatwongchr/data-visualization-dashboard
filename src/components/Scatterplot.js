import React from 'react'
import PropTypes from 'prop-types'
import createScatterPlotChart from '../helpers/createScatterPlotChart'

const ScatterPlotChart = ({ width, height, data }) => {
  createScatterPlotChart(this.node, width, height, data)
  return (
    <div>
      <svg
        viewBox="0 0 500 250"
        style={{paddingBottom: '1em'}}
        ref={node => this.node = node}
        width={width}
        height={height}>
      </svg>
    </div>
  )
}

ScatterPlotChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

ScatterPlotChart.defaultProps = {
  width: 500,
  height: 250
}

export default ScatterPlotChart

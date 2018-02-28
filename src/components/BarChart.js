import React, { Component } from 'react'
import { extent } from 'd3-array'
import { csv } from 'd3-request'
import { select } from 'd3-selection'
import { scaleLinear, scaleTime } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { formatPrefix } from 'd3-format'
import TechCrunchData from '../data/TechCrunchcontinentalUSA.csv'

class BarChart extends Component {

  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
    this.createBarChart = this.createBarChart.bind(this)
  }

  componentWillMount () {
    this.readCsvFile(this.createBarChart)
  }

  readCsvFile (callback) {
    // Read CSV and filter some data
    let facebookRaisedData = []
    csv(TechCrunchData, (error, data) => {
      if (error) throw error
      facebookRaisedData = data.filter(record => {
        return record.company === 'Facebook'
      })
      this.setState({
        data: facebookRaisedData
      })
      callback()
    })
  }

  transformDateFormat (data) {
    console.log(data.split('-'))
    console.log(new Date(data))
    return new Date(data)
  }

  createBarChart () {
    const node = this.node
    const { data } = this.state
    const { width, height } = this.props
    const barPadding = 10
    const barWidth = width / data.length - barPadding
    const svgPadding = 5
    console.log(data)
    // Initiate x,y scale
    // yScale is on raisedAmt
    const yScale = scaleLinear()
                    .domain(extent(data, datum => +datum.raisedAmt))
                    .range([height - svgPadding, svgPadding]).nice()

    // Initiate yAxis
    const yAxis = axisLeft(yScale)
                  .tickFormat(formatPrefix('.0', 1e6))

    // Update pattern
    select(node)
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')

    select(node)
          .selectAll('rect')
          .data(data)
          .exit()
          .remove()

    select(node)
          .selectAll('rect')
          .data(data)
          .style('fill', '#343A40')
          .attr('x', (datum, index) => (barWidth + barPadding) * index)
          .attr('y', datum => yScale(datum.raisedAmt))
          .attr('height', datum => height - yScale(datum.raisedAmt))
          .attr('width', barWidth)

    select(node)
          .append('g')
          .attr('transform', 'translate(-5, 4)')
          .call(yAxis)

  }


  render() {
    const { height, width } = this.props
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

export default BarChart

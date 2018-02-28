import React, { Component } from 'react'
import { select } from 'd3-selection'
import { scaleLinear, scaleTime } from 'd3-scale'
import { extent } from 'd3-array'
import { axisBottom } from 'd3-axis'
import { nodes, links } from '../data/NodeData'

class ScatterPlotChart extends Component {

  componentDidMount() {
    this.createScatterPlotChart()
  }

  createScatterPlotChart() {
    const { width, height } = this.props
    const node = this.node
    const svgPadding = 20

    const xScale = scaleTime()
                    .domain(extent(nodes, node => node.createdAt))
                    .range([svgPadding, width - svgPadding]).nice()
    const yScale = scaleLinear()
                    .domain(extent(nodes, node => node.order))
                    .range([height - svgPadding, svgPadding])

    const xAxis = axisBottom(xScale)

    select(node)
          .selectAll('circle')
          .data(nodes)
          .enter()
          .append('circle')
          .attr('cx', node => xScale(node.createdAt))
          .attr('cy', node => yScale(node.order))
          .attr('r', 10)
          .attr('fill', '#343A40')

    select(node)
          .append('g')
          .attr('transform', 'translate(0, 245)')
          .call(xAxis)
  }

  render() {
    const { width, height } = this.props
    return (
      <div>
        <h4 className='pt-3'>Events data</h4>
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
}

export default ScatterPlotChart

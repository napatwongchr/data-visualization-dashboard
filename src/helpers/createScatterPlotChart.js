import { select } from 'd3-selection'
import { scaleLinear, scaleTime } from 'd3-scale'
import { extent } from 'd3-array'
import { axisBottom } from 'd3-axis'

export default (node, width, height, data) => {
  const svgPadding = 20

  const xScale = scaleTime()
                  .domain(extent(data, node => node.createdAt))
                  .range([svgPadding, width - svgPadding]).nice()
  const yScale = scaleLinear()
                  .domain(extent(data, node => node.order))
                  .range([height - svgPadding, svgPadding])

  const xAxis = axisBottom(xScale)

  select(node)
        .selectAll('circle')
        .data(data)
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

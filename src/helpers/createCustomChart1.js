import { select } from 'd3-selection'
import { scaleLinear, scaleTime } from 'd3-scale'
import { extent } from 'd3-array'
import { axisBottom } from 'd3-axis'

export default (node, width, height, { nodes, links }) => {
  const svgPadding = 20

  const xScale = scaleTime()
                  .domain(extent(nodes, node => node.createdAt))
                  .range([svgPadding, width - svgPadding]).nice()
  const yScale = scaleLinear()
                  .domain(extent(nodes, node => node.order))
                  .range([height - svgPadding, svgPadding])

  const xAxis = axisBottom(xScale)

  select(node)
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('x1', link => {
          const sourceNode = nodes.filter(node => {
            return node.nodeId === link.source
          })
          return xScale(sourceNode[0].createdAt)
        })
        .attr('y1', link => {
          const sourceNode = nodes.filter(node => {
            return node.nodeId === link.source
          })
          return yScale(sourceNode[0].order)
        })
        .attr('x2', link => {
          const targetNode = nodes.filter(node => {
            return node.nodeId === link.target
          })
          return xScale(targetNode[0].createdAt)
        })
        .attr('y2', link => {
          const targetNode = nodes.filter(node => {
            return node.nodeId === link.target
          })
          return yScale(targetNode[0].order)
        })
        .attr('fill', 'none')
        .attr('stroke', 'grey')
        .attr('stroke-width', '1px')

  select(node)
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('cx', node => xScale(node.createdAt))
        .attr('cy', node => yScale(node.order))
        .attr('r', 15)
        .attr('fill', '#343A40')

  select(node)
        .append('g')
        .attr('transform', 'translate(0, 498)')
        .call(xAxis)


}

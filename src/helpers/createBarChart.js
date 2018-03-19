import { extent } from 'd3-array'
import { select } from 'd3-selection'
import { scaleLinear } from 'd3-scale'
import { axisLeft } from 'd3-axis'
import { formatPrefix } from 'd3-format'

export default (node, data, width, height) => {
    const barPadding = 10
    const barWidth = width / data.length - barPadding
    const svgPadding = 5

    // Initiate x,y scale
    // yScale is on raisedAmt
    const yScale = scaleLinear()
                    .domain(extent(data, datum => +datum.raisedAmt))
                    .range([height - svgPadding, svgPadding]).nice()

    // Initiate yAxis
    const yAxis = axisLeft(yScale)
                  .tickFormat(formatPrefix('.0', 1e6))

    // Select texts and add all texts in svg
    const text = select(node)
          .selectAll('text')
          .data(data)
          .enter()
          .append('text')

    // Customize each text label
    text
      .attr('x', (datum, index) => (barWidth + barPadding) * index + 10 )
      .attr('y', datum => yScale(datum.raisedAmt) - 5)
      .text(datum => datum.fundedDate)
      .attr('font-family', '"Open Sans", sans-serif')
      .attr('font-size', '10px')
      .attr('fill', '#000')

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

    // Add y-axis
    select(node)
          .append('g')
          .attr('transform', 'translate(-5, 4)')
          .call(yAxis)

}

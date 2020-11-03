import React, { Fragment, useEffect, useRef } from "react"
import * as d3 from "d3"
import ReactToPdf from "react-to-pdf"
import { DatePicker } from "./../date-picker/date-picker"

export const ReactToPDF = () => {

  const d3Ref = useRef()

  const data = [
    { id: "d1", value: 10, region: "USA" },
    { id: "d2", value: 14, region: "India" },
    { id: "d3", value: 19, region: "China" },
    { id: "d4", value: 6, region: "Germany" },
  ]

  useEffect(() => {

    const svgElement = d3.select(d3Ref.current)

    const xScale = d3.scaleBand() // gives an ordinal scale
      // .domain(d3.extent(data, data => data.id))
      // .range([0, 300])
      .domain(data.map(d => d.region))
      .rangeRound([0, 500]).padding(0.1)
    const yScale = d3.scaleLinear()
      .domain([0, 25])
      .range([400, 0])

    // console.log(xScale)

    svgElement
      .attr("width", 500)
      .attr("height", 400)
      .style("border", "1px solid red")
      // .style("transform", `rotate(90deg)`)
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.region))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => 400 - yScale(d.value))
      .attr("fill", "purple")

  }, [])

  const ref1 = useRef()

  return (
    <div>
      <ReactToPdf targetRef={ref1} filename="div-test.pdf" scale={0.7}>
        {({ toPdf }) => (
          <button onClick={toPdf}>Generate pdf</button>
        )}
      </ReactToPdf>
      <div ref={ref1}>
        <svg ref={d3Ref} />
        <div ><DatePicker /></div>
      </div>
    </div>
  )
}
import React from "react"
import { ResponsiveRadar } from "@nivo/radar"
import PropTypes from "prop-types"

/**
 * Renders a radar chart from JSON data
 */
const DataRadarChart = ({ data }) => (
  <ResponsiveRadar
    data={data}
    keys={["value"]}
    curve="linearClosed"
    indexBy="name"
    margin={{ top: 70, right: 70, bottom: 70, left: 70 }}
    maxValue={100}
    gridLevels={6}
    enableDotLabel={true}
    colors={"#D5A890"}
    dotLabelYOffset={-3}
    gridLabelOffset={9}
  />
)

DataRadarChart.propTypes = {
  /** The JSON data for the chart */
  data: PropTypes.array
}

export default DataRadarChart

import React from "react"
import { ResponsiveRadar } from "@nivo/radar"
import PropTypes from "prop-types"
import { withTheme } from "styled-components"

/**
 * Renders a radar chart from JSON data
 */
const DataRadarChart = ({ data, theme }) => {
  const {
    color: { special },
  } = theme
  return (
    <ResponsiveRadar
      data={data}
      keys={["value"]}
      curve="linearClosed"
      indexBy="name"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      maxValue={100}
      gridLevels={6}
      enableDotLabel={true}
      colors={special}
      dotLabelYOffset={-3}
      gridLabelOffset={9}
    />
  )
}

DataRadarChart.propTypes = {
  /** The JSON data for the chart */
  data: PropTypes.array,
}

export default withTheme(DataRadarChart)

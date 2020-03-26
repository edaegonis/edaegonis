import React from "react"
import ParticleField from "react-particles-webgl"
import { withTheme } from "styled-components"

const ParticlesField = ({ theme }) => {
  const {
    color: { special }
  } = theme

  const config = {
    showCube: false,
    dimension: "2D",
    velocity: 1,
    boundaryType: "bounce",
    antialias: true,
    direction: {
      xMin: -1,
      xMax: 1,
      yMin: -1,
      yMax: 1,
      zMin: -1,
      zMax: 1
    },
    lines: {
      colorMode: "solid",
      color: special,
      transparency: 0.9,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 120,
      visible: true
    },
    particles: {
      colorMode: "solid",
      color: special,
      transparency: 0.7,
      shape: "circle",
      boundingBox: "canvas",
      count: 48,
      minSize: 4,
      maxSize: 32,
      visible: true
    },
    cameraControls: {
      enabled: false,
      enableDamping: true,
      dampingFactor: 0.2,
      enableZoom: true,
      autoRotate: false,
      autoRotateSpeed: 0.3,
      resetCameraFlag: true
    }
  }

  return <ParticleField config={config} />
}

export default withTheme(ParticlesField)

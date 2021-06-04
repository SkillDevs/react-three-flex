import React, { Component } from 'react'
import { Stage, Layer, Circle, Text } from 'react-konva'
import Konva from 'konva'

function ColoredCircle() {
  return <Circle fill="red" radius={10} x={100} y={100} />
}
export default class App extends Component {
  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <ColoredCircle />
        </Layer>
      </Stage>
    )
  }
}

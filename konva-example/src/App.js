import React, { useMemo, useRef, useLayoutEffect } from 'react'
import { Stage, Layer, Circle, Text, Group, Rect } from 'react-konva'
import Konva from 'konva'
import { Flex, Box } from 'react-konva-flex'

export default function App() {
  // Stage is a div container
  // Layer is actual canvas element (so you may have several canvases in the stage)
  // And then we have canvas shapes inside the Layer
  // const dos = useMemo(() => 2, [])
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Group x={400} y={200}>
          <Layout />
          {/* <Circle fill="blue" radius={5} /> */}
          {/* <Rect fill="purple" width={5} height={5} /> */}
        </Group>
      </Layer>
    </Stage>
  )
}

function Layout() {
  // size={[300, 200, 0]}
  const konvaRef = useRef()
  const rectRef = useRef()
  const reflow = () => {
    if (!konvaRef.current) return
    const rect = konvaRef.current.getClientRect()
    console.log(rect)

    rectRef.current.width(rect.width)
    rectRef.current.height(rect.height)
    rectRef.current.y(rect.y - 200)
    rectRef.current.x(rect.x - 200)
    // console.log('Reflowing')
    rectRef.current.getLayer().batchDraw()
  }

  useLayoutEffect(() => {
    // setInterval(() => {
    // reflow()
    // }, 1000)
    // reflow()
    // rectRef.current.x(rect.x)
    // rectRef.current.y(rect.y)
  }, [])
  const size = [600, 800, 0]
  return (
    <Group>
      {/* <Rect ref={rectRef} stroke="black" /> */}
      {/* <Rect stroke="grey" width={size[0]} height={size[1]} /> */}
      <Group ref={konvaRef}>
        <Flex flexDirection="column" size={size}>
          <Block size={size} color1="red" color2="green" />
          <Block size={size} color1="yellow" color2="purple" />
          {/* <Rect width={40} height={20} fill="red" opacity={0.5} /> */}
        </Flex>
      </Group>
    </Group>
  )
}
function Block({ size, color1, color2 }) {
  return (
    <Box alignItems="flex-start" flexDirection="row">
      {/* <Box centerAnchor marginTop={0} padding={0}>
        {(width, height) => {
          console.log('size', width, height)
          return <Circle fill="yellow" radius={25} />
        }}
      </Box> */}
      <Box flexDirection="column">
        <Box flexDirection="row">
          <Box>
            <Rect fill={color1} height={50} width={70} />
          </Box>
          <Box>
            <Rect fill={color2} height={50} width={70} />
          </Box>
        </Box>
        <Box flexDirection="row">
          <Box>
            <Rect fill={'pink'} height={50} width={70} />
          </Box>
          <Box>
            <Rect fill={color1} height={50} width={70} />
          </Box>
        </Box>
      </Box>
      <Box marginLeft={0}>
        <Rect fill={color2} height={100} width={60} />
      </Box>
    </Box>
  )
}

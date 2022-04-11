import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { Stage, Layer, Circle, Text, Group, Rect } from 'react-konva'
import Konva from 'konva'
import { Flex, Box, initKonvaFlex } from '@skilldevs/react-konva-flex'
import ReflowLayout from './Reflow'
//@ts-ignore
// eslint-disable-next-line import/no-unresolved
import yogaWasm from 'yoga-layout-wasm/dist/yoga.wasm?.url'

// import wasmData from 'my-wasm-package/my-wasm-package.wasm';

export default function App() {
  // Stage is a div container
  // Layer is actual canvas element (so you may have several canvases in the stage)
  // And then we have canvas shapes inside the Layer
  // const dos = useMemo(() => 2, [])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initKonvaFlex(yogaWasm).then(() => {
      setReady(true)
    })
  }, [])

  if (!ready) {
    return <div>NOT WORKING WASM</div>
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <ReflowLayout />
        {/* <Layout /> */}
        {/* <Circle fill="blue" radius={5} /> */}
        {/* <Rect fill="purple" width={5} height={5} /> */}
      </Layer>
    </Stage>
  )
}

function Layout() {
  // size={[300, 200, 0]}
  const konvaRef = useRef<Konva.Group>(null)
  const rectRef = useRef<Konva.Rect>()

  const reflow = () => {
    if (!konvaRef.current) return
    const rect = konvaRef.current.getClientRect()
    console.log(rect)

    rectRef.current?.width(rect.width)
    rectRef.current?.height(rect.height)
    rectRef.current?.y(rect.y - 200)
    rectRef.current?.x(rect.x - 200)
    // console.log('Reflowing')
    rectRef.current?.getLayer()?.batchDraw()
  }

  useLayoutEffect(() => {
    // setInterval(() => {
    // reflow()
    // }, 1000)
    // reflow()
    // rectRef.current.x(rect.x)
    // rectRef.current.y(rect.y)
  }, [])

  const size: [number, number, number] = [600, 800, 0]
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
function Block({ size, color1, color2 }: { size: number[]; color1: string; color2: string }) {
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

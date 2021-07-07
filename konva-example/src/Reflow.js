import React, { useState, useMemo, useRef, useLayoutEffect } from 'react'
import { Stage, Layer, Circle, Text, Group, Rect } from 'react-konva'
import Konva from 'konva'
import { Flex, Box } from '@skilldevs/react-konva-flex'

export default function ReflowLayout() {
  // Stage is a div container
  // Layer is actual canvas element (so you may have several canvases in the stage)
  // And then we have canvas shapes inside the Layer
  // const dos = useMemo(() => 2, [])
  const [num, setNum] = useState(0)

  const boxes = Array(num)
    .fill(undefined)
    .map((i, index) => {
      return (
        <Box key={'box' + index + Date.now()} marginLeft={10}>
          <Rect fill="black" width={50} height={50} />
          {/* <Text text={index} /> */}
        </Box>
      )
    })

  const arrow = useMemo(() => {
    return (
      <Box key="button">
        {/* <Circle fill="red" radius={50} /> */}
        <Rect fill="black" width={100} height={20} />
      </Box>
    )
  }, [])

  return (
    <Group x={400} y={200}>
      {/* <Circle fill="blue" radius={5} /> */}
      <Flex flexDirection="row" alignItems="center">
        <Box key="???????????">
          {/* <Circle fill="red" radius={50} /> */}
          <Rect fill="yellow" width={100} height={20} />
        </Box>
        {/* {boxes} */}
        {/* {boxes.length > 0 ? <Box flexDirection="row">{boxes}</Box> : undefined} */}
        <Box flexDirection="row">{boxes}</Box>
        {arrow}
        <Box centerAnchor key="button">
          <Circle
            fill="purple"
            radius={50}
            //     width={100}
            //     height={100}
            onClick={() => {
              setNum(num + 1)
            }}
          />
        </Box>
      </Flex>
    </Group>
  )
}

import { useState, useMemo } from 'react'
import { Circle, Group, Rect } from 'react-konva'
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
        <Box key={'box' + index} marginLeft={10}>
          <Rect fill="red" width={50} height={50} />
          {/* <Text text={index} /> */}
        </Box>
      )
    })

  const arrow = useMemo(() => {
    return (
      <Box key="arrow-black">
        {/* <Circle fill="red" radius={50} /> */}
        <Rect fill="black" width={100} height={20} />
      </Box>
    )
  }, [])

  return (
    <Group x={400} y={200}>
      {/* <Circle fill="blue" radius={5} /> */}
      <Flex
        flexDirection="row"
        alignItems="center"
        onReflow={(w, h) => {
          console.log('ON REFLOW', w, h)
        }}
      >
        <Box key="yellow">
          <Rect fill="yellow" width={100} height={20} />
        </Box>
        {/* {boxes} */}
        {/* {boxes.length > 0 ? <Box flexDirection="row">{boxes}</Box> : undefined} */}
        <Box key="boxesrow" flexDirection="row">
          {boxes}
        </Box>
        {arrow}
        <Box key="button">
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

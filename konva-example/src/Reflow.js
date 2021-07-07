import React, { useState, useMemo, useRef, useLayoutEffect } from "react";
import { Stage, Layer, Circle, Text, Group, Rect } from "react-konva";
import Konva from "konva";
import { Flex, Box } from "@skilldevs/react-konva-flex";

export default function ReflowLayout() {
  // Stage is a div container
  // Layer is actual canvas element (so you may have several canvases in the stage)
  // And then we have canvas shapes inside the Layer
  // const dos = useMemo(() => 2, [])
  const [num, setNum] = useState(2);

  const boxes = Array(num)
    .fill(undefined)
    .map((i, index) => {
      return (
        <Box key={"box" + index}>
          {/* <Rect fill="black" width={100} height={100} /> */}
          <Text text={index} />
        </Box>
      );
    })
    .reverse();

  return (
    <Group x={400} y={200}>
      {/* <Circle fill="blue" radius={5} /> */}
      <Flex flexDirection="row">
        <Box flexDirection="row">
          {boxes}
          <Box key="Button" centerAnchor>
            <Circle fill="red" radius={50} />
          </Box>
        </Box>
        {boxes}
        <Box key="Button" centerAnchor>
          <Circle
            fill="purple"
            radius={50}
            //     width={100}
            //     height={100}
            onClick={() => {
              setNum(num + 1);
            }}
          />
        </Box>
      </Flex>
    </Group>
  );
}

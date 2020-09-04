import { createContext, Context, useContext } from 'react'
import { YogaNode } from 'yoga-layout-prebuilt'
import { Vector3, Group } from 'three'
import { Axis } from './util'
import { FlexYogaDirection, R3FlexProps } from './props'

export const flexContext = createContext<{
  rootNode: YogaNode
  mainAxis: Axis
  crossAxis: Axis
  depthAxis: Axis
  sizeVec3: Vector3
  flexWidth: number
  flexHeight: number
  scaleFactor: number
  rootStart: Vector3
  yogaDirection: FlexYogaDirection
  requestReflow(): void
  registerBox(group: Group, node: YogaNode, flexProps: R3FlexProps, centerAnchor?: boolean): void
  unregisterBox(group: Group, node: YogaNode): void
}>({} as any)

export const boxContext = createContext<YogaNode>({} as any)

import { yogaGlobal } from './yoga'
import { YogaNode } from 'yoga-layout-wasm'
import { R3FlexProps, FlexPlane } from './props'

export const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1)

export const jsxPropToYogaProp = (s: string) => s.toUpperCase().replace('-', '_')

export const setYogaProperties = (node: YogaNode, props: R3FlexProps, scaleFactor: number) => {
  return Object.keys(props).forEach((name) => {
    const value = props[name as keyof R3FlexProps]

    if (typeof value === 'string') {
      switch (name) {
        case 'flexDir':
        case 'dir':
        case 'flexDirection':
          return node.setFlexDirection((yogaGlobal as any)[`FLEX_DIRECTION_${jsxPropToYogaProp(value)}`])
        case 'align':
        case 'alignItems':
          return node.setAlignItems((yogaGlobal as any)[`ALIGN_${jsxPropToYogaProp(value)}`])
        case 'justify':
        case 'justifyContent':
          return node.setJustifyContent((yogaGlobal as any)[`JUSTIFY_${jsxPropToYogaProp(value)}`])
        case 'wrap':
        case 'flexWrap':
          return node.setFlexWrap((yogaGlobal as any)[`WRAP_${jsxPropToYogaProp(value)}`])
        case 'basis':
        case 'flexBasis':
          return node.setFlexBasis(value)

        default:
          return (node[`set${capitalize(name)}` as keyof YogaNode] as any)(value)
      }
    } else if (typeof value === 'number') {
      const scaledValue = value * scaleFactor
      switch (name) {
        case 'basis':
        case 'flexBasis':
          return node.setFlexBasis(scaledValue)
        case 'grow':
        case 'flexGrow':
          return node.setFlexGrow(scaledValue)
        case 'shrink':
        case 'flexShrink':
          return node.setFlexShrink(scaledValue)
        case 'align':
          return node.setAlignItems(value as any)
        case 'justify':
          return node.setJustifyContent(value as any)
        case 'flexDir':
        case 'dir':
          return node.setFlexDirection(value as any)
        case 'wrap':
          return node.setFlexWrap(value as any)
        case 'padding':
        case 'p':
          return node.setPadding(yogaGlobal.EDGE_ALL, scaledValue)
        case 'paddingLeft':
        case 'pl':
          return node.setPadding(yogaGlobal.EDGE_LEFT, scaledValue)
        case 'paddingRight':
        case 'pr':
          return node.setPadding(yogaGlobal.EDGE_RIGHT, scaledValue)
        case 'paddingTop':
        case 'pt':
          return node.setPadding(yogaGlobal.EDGE_TOP, scaledValue)
        case 'paddingBottom':
        case 'pb':
          return node.setPadding(yogaGlobal.EDGE_BOTTOM, scaledValue)

        case 'margin':
        case 'm':
          return node.setMargin(yogaGlobal.EDGE_ALL, scaledValue)
        case 'marginLeft':
        case 'ml':
          return node.setMargin(yogaGlobal.EDGE_LEFT, scaledValue)
        case 'marginRight':
        case 'mr':
          return node.setMargin(yogaGlobal.EDGE_RIGHT, scaledValue)
        case 'marginTop':
        case 'mt':
          return node.setMargin(yogaGlobal.EDGE_TOP, scaledValue)
        case 'marginBottom':
        case 'mb':
          return node.setMargin(yogaGlobal.EDGE_BOTTOM, scaledValue)

        default:
          return (node[`set${capitalize(name)}` as keyof YogaNode] as any)(scaledValue)
      }
    }
  })
}

export type Axis = 'x' | 'y' | 'z'
export const axes: Axis[] = ['x', 'y', 'z']

export function getDepthAxis(plane: FlexPlane) {
  switch (plane) {
    case 'xy':
      return 'z'
    case 'yz':
      return 'x'
    case 'xz':
      return 'y'
  }
}

export function getFlex2DSize(sizes: [number, number, number], plane: FlexPlane) {
  switch (plane) {
    case 'xy':
      return [sizes[0], sizes[1]]
    case 'yz':
      return [sizes[1], sizes[2]]
    case 'xz':
      return [sizes[0], sizes[2]]
  }
}

export const rmUndefFromObj = (obj: Record<string, any>) =>
  Object.keys(obj).forEach((key) => (obj[key] === undefined ? delete obj[key] : {}))

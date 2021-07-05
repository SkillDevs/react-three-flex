import { PropsWithChildren } from 'react';
import type { R3FlexProps, FlexYogaDirection, FlexPlane } from './props';
declare type FlexProps = PropsWithChildren<Partial<{
    /**
     * Root container position
     */
    size: [number, number, number];
    yogaDirection: FlexYogaDirection;
    plane: FlexPlane;
    scaleFactor?: number;
    onReflow?: (totalWidth: number, totalHeight: number) => void;
}> & R3FlexProps>;
export interface IRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
/**
 * Flex container. Can contain Boxes
 */
export declare function Flex({ size, yogaDirection, plane, children, scaleFactor, onReflow, flexDirection, flexDir, dir, alignContent, alignItems, alignSelf, align, justifyContent, justify, flexBasis, basis, flexGrow, grow, flexShrink, shrink, flexWrap, wrap, margin, m, marginBottom, marginLeft, marginRight, marginTop, mb, ml, mr, mt, padding, p, paddingBottom, paddingLeft, paddingRight, paddingTop, pb, pl, pr, pt, height, width, maxHeight, maxWidth, minHeight, minWidth, ...props }: FlexProps): JSX.Element;
export {};

import React from 'react';
import { R3FlexProps } from './props';
/**
 * Box container for 3D Objects.
 * For containing Boxes use `<Flex />`.
 */
export declare function Box({ children, centerAnchor, flexDirection, flexDir, dir, alignContent, alignItems, alignSelf, align, justifyContent, justify, flexBasis, basis, flexGrow, grow, flexShrink, shrink, flexWrap, wrap, margin, m, marginBottom, marginLeft, marginRight, marginTop, mb, ml, mr, mt, padding, p, paddingBottom, paddingLeft, paddingRight, paddingTop, pb, pl, pr, pt, height, width, maxHeight, maxWidth, minHeight, minWidth, ...props }: {
    centerAnchor?: boolean;
    children: React.ReactNode | ((width: number, height: number) => React.ReactNode);
} & R3FlexProps): JSX.Element;

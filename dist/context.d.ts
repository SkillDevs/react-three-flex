/// <reference types="yoga-layout" />
/// <reference types="react" />
import { YogaNode } from 'yoga-layout-prebuilt';
import { R3FlexProps } from './props';
import Konva from 'konva';
export interface SharedFlexContext {
    scaleFactor: number;
    requestReflow(): void;
    registerBox(node: YogaNode, group: Konva.Group, flexProps: R3FlexProps, centerAnchor?: boolean): void;
    unregisterBox(node: YogaNode): void;
}
export declare const flexContext: import("react").Context<SharedFlexContext>;
export interface SharedBoxContext {
    node: YogaNode | null;
    size: [number, number];
    rebuildFlag: number;
}
export declare const boxContext: import("react").Context<SharedBoxContext>;

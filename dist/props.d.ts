/// <reference types="yoga-layout" />
import { YogaFlexDirection, YogaAlign, YogaJustifyContent, YogaFlexWrap, YogaDirection } from 'yoga-layout-wasm';
export declare type FlexYogaDirection = YogaDirection | 'ltr' | 'rtl';
export declare type FlexPlane = 'xy' | 'yz' | 'xz';
export declare type Value = string | number;
export declare type FlexDirection = YogaFlexDirection | 'row' | 'column' | 'row-reverse' | 'column-reverse';
export declare type JustifyContent = YogaJustifyContent | 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'space-evenly' | 'space-around';
export declare type Align = YogaAlign | 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'stretch';
export declare type FlexWrap = YogaFlexWrap | 'no-wrap' | 'wrap' | 'wrap-reverse';
export declare type R3FlexProps = Partial<{
    alignContent: Align;
    alignItems: Align;
    alignSelf: Align;
    align: Align;
    justifyContent: JustifyContent;
    justify: JustifyContent;
    flexDirection: FlexDirection;
    flexDir: FlexDirection;
    dir: FlexDirection;
    flexWrap: FlexWrap;
    wrap: FlexWrap;
    flexBasis: number;
    basis: number;
    flexGrow: number;
    grow: number;
    flexShrink: number;
    shrink: number;
    height: Value;
    width: Value;
    maxHeight: Value;
    maxWidth: Value;
    minHeight: Value;
    minWidth: Value;
    padding: Value;
    p: Value;
    paddingTop: Value;
    pt: Value;
    paddingBottom: Value;
    pb: Value;
    paddingLeft: Value;
    pl: Value;
    paddingRight: Value;
    pr: Value;
    margin: Value;
    m: Value;
    marginTop: Value;
    mt: Value;
    marginLeft: Value;
    ml: Value;
    marginRight: Value;
    mr: Value;
    marginBottom: Value;
    mb: Value;
}>;

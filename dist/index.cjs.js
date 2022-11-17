"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),t=require("@babel/runtime/helpers/objectWithoutPropertiesLoose"),n=require("react"),r=require("@babel/runtime/helpers/asyncToGenerator"),i=require("yoga-layout-wasm"),a=require("react-konva");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s,u=o(e),l=o(t),f=o(n),c=o(r),g=o(i);function d(){return(d=c.default(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.default.init(t);case 2:s=e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e){return e[0].toUpperCase()+e.slice(1)},m=function(e){return e.toUpperCase().replace("-","_")},h=function(e,t,n){return Object.keys(t).forEach((function(r){var i=t[r];if("string"==typeof i)switch(r){case"flexDir":case"dir":case"flexDirection":return e.setFlexDirection(s["FLEX_DIRECTION_"+m(i)]);case"align":case"alignItems":return e.setAlignItems(s["ALIGN_"+m(i)]);case"justify":case"justifyContent":return e.setJustifyContent(s["JUSTIFY_"+m(i)]);case"wrap":case"flexWrap":return e.setFlexWrap(s["WRAP_"+m(i)]);case"basis":case"flexBasis":return e.setFlexBasis(i);default:return e["set"+p(r)](i)}else if("number"==typeof i){var a=i*n;switch(r){case"basis":case"flexBasis":return e.setFlexBasis(a);case"grow":case"flexGrow":return e.setFlexGrow(a);case"shrink":case"flexShrink":return e.setFlexShrink(a);case"align":return e.setAlignItems(i);case"justify":return e.setJustifyContent(i);case"flexDir":case"dir":return e.setFlexDirection(i);case"wrap":return e.setFlexWrap(i);case"padding":case"p":return e.setPadding(s.EDGE_ALL,a);case"paddingLeft":case"pl":return e.setPadding(s.EDGE_LEFT,a);case"paddingRight":case"pr":return e.setPadding(s.EDGE_RIGHT,a);case"paddingTop":case"pt":return e.setPadding(s.EDGE_TOP,a);case"paddingBottom":case"pb":return e.setPadding(s.EDGE_BOTTOM,a);case"margin":case"m":return e.setMargin(s.EDGE_ALL,a);case"marginLeft":case"ml":return e.setMargin(s.EDGE_LEFT,a);case"marginRight":case"mr":return e.setMargin(s.EDGE_RIGHT,a);case"marginTop":case"mt":return e.setMargin(s.EDGE_TOP,a);case"marginBottom":case"mb":return e.setMargin(s.EDGE_BOTTOM,a);default:return e["set"+p(r)](a)}}}))};var x=function(e){return Object.keys(e).forEach((function(t){return void 0===e[t]?delete e[t]:{}}))},w={scaleFactor:100,requestReflow:function(){console.warn("Flex not initialized! Please report")},registerBox:function(){console.warn("Flex not initialized! Please report")},unregisterBox:function(){console.warn("Flex not initialized! Please report")}},y=n.createContext(w),v={node:null,size:[0,0]},b=n.createContext(v);function E(e){var t=n.useContext(e);return t||console.warn("You must place this hook/component under a <Flex/> component!"),t}function C(){return E(y).requestReflow}var L=["children","centerAnchor","flexDirection","flexDir","dir","alignContent","alignItems","alignSelf","align","justifyContent","justify","flexBasis","basis","flexGrow","grow","flexShrink","shrink","flexWrap","wrap","margin","m","marginBottom","marginLeft","marginRight","marginTop","mb","ml","mr","mt","padding","p","paddingBottom","paddingLeft","paddingRight","paddingTop","pb","pl","pr","pt","height","width","maxHeight","maxWidth","minHeight","minWidth"];var R=["size","yogaDirection","plane","children","scaleFactor","onReflow","flexDirection","flexDir","dir","alignContent","alignItems","alignSelf","align","justifyContent","justify","flexBasis","basis","flexGrow","grow","flexShrink","shrink","flexWrap","wrap","margin","m","marginBottom","marginLeft","marginRight","marginTop","mb","ml","mr","mt","padding","p","paddingBottom","paddingLeft","paddingRight","paddingTop","pb","pl","pr","pt","height","width","maxHeight","maxWidth","minHeight","minWidth"];exports.Box=function(e){var t=e.children,r=e.centerAnchor,i=e.flexDirection,o=e.flexDir,c=e.dir,g=e.alignContent,d=e.alignItems,p=e.alignSelf,m=e.align,w=e.justifyContent,v=e.justify,R=e.flexBasis,B=e.basis,D=e.flexGrow,T=e.grow,W=e.flexShrink,k=e.shrink,F=e.flexWrap,G=e.wrap,I=e.margin,M=e.m,j=e.marginBottom,_=e.marginLeft,H=e.marginRight,P=e.marginTop,S=e.mb,O=e.ml,z=e.mr,A=e.mt,N=e.padding,q=e.p,J=e.paddingBottom,U=e.paddingLeft,Y=e.paddingRight,K=e.paddingTop,X=e.pb,Q=e.pl,V=e.pr,Z=e.pt,$=e.height,ee=e.width,te=e.maxHeight,ne=e.maxWidth,re=e.minHeight,ie=e.minWidth,ae=l.default(e,L),oe=n.useMemo((function(){var e={flexDirection:i,flexDir:o,dir:c,alignContent:g,alignItems:d,alignSelf:p,align:m,justifyContent:w,justify:v,flexBasis:R,basis:B,flexGrow:D,grow:T,flexShrink:W,shrink:k,flexWrap:F,wrap:G,margin:I,m:M,marginBottom:j,marginLeft:_,marginRight:H,marginTop:P,mb:S,ml:O,mr:z,mt:A,padding:N,p:q,paddingBottom:J,paddingLeft:U,paddingRight:Y,paddingTop:K,pb:X,pl:Q,pr:V,pt:Z,height:$,width:ee,maxHeight:te,maxWidth:ne,minHeight:re,minWidth:ie};return x(e),e}),[m,g,d,p,c,R,B,o,i,D,T,W,k,F,$,v,w,M,I,j,_,H,P,te,ne,S,re,ie,O,z,A,q,N,J,U,Y,K,X,Q,V,Z,ee,G]),se=E(y),ue=se.registerBox,le=se.unregisterBox,fe=se.scaleFactor,ce=E(b).node,ge=n.useRef(null),de=n.useMemo((function(){return s.Node.create()}),[]),pe=C();n.useLayoutEffect((function(){h(de,oe,fe)}),[oe,de,fe]),n.useLayoutEffect((function(){if(ge.current&&ce)return ce.insertChild(de,ce.getChildCount()),ue(de,ge.current,oe,r),function(){ce.removeChild(de),le(de)}}),[de,ce,oe,r,ue,le]),n.useLayoutEffect((function(){pe()}),[t,oe,pe]);var me=n.useState([0,0]),he=me[0],xe=me[1],we=1/fe;n.useLayoutEffect((function(){var e=("number"==typeof oe.width?oe.width:null)||de.getComputedWidth().valueOf()/fe,t=("number"==typeof oe.height?oe.height:null)||de.getComputedHeight().valueOf()/fe;(Math.abs(e-he[0])>we||Math.abs(t-he[1])>we)&&xe([e,t])}),[we,oe.height,oe.width,de,fe,he]);var ye=n.useMemo((function(){return{node:de,size:he}}),[de,he]);return f.default.createElement(a.Group,u.default({ref:ge},ae),f.default.createElement(b.Provider,{value:ye},"function"==typeof t?t(he[0],he[1]):t))},exports.Flex=function(e){var t=e.size,r=void 0===t?[1,1,1]:t,i=e.yogaDirection,o=void 0===i?"ltr":i,u=e.plane,c=void 0===u?"xy":u,g=e.children,d=e.scaleFactor,p=void 0===d?100:d,m=e.onReflow,w=e.flexDirection,v=e.flexDir,E=e.dir,C=e.alignContent,L=e.alignItems,B=e.alignSelf,D=e.align,T=e.justifyContent,W=e.justify,k=e.flexBasis,F=e.basis,G=e.flexGrow,I=e.grow,M=e.flexShrink,j=e.shrink,_=e.flexWrap,H=e.wrap,P=e.margin,S=e.m,O=e.marginBottom,z=e.marginLeft,A=e.marginRight,N=e.marginTop,q=e.mb,J=e.ml,U=e.mr,Y=e.mt,K=e.padding,X=e.p,Q=e.paddingBottom,V=e.paddingLeft,Z=e.paddingRight,$=e.paddingTop,ee=e.pb,te=e.pl,ne=e.pr,re=e.pt,ie=e.height,ae=e.width,oe=e.maxHeight,se=e.maxWidth,ue=e.minHeight,le=e.minWidth,fe=l.default(e,R),ce=n.useMemo((function(){var e={flexDirection:w,flexDir:v,dir:E,alignContent:C,alignItems:L,alignSelf:B,align:D,justifyContent:T,justify:W,flexBasis:k,basis:F,flexGrow:G,grow:I,flexShrink:M,shrink:j,flexWrap:_,wrap:H,margin:P,m:S,marginBottom:O,marginLeft:z,marginRight:A,marginTop:N,mb:q,ml:J,mr:U,mt:Y,padding:K,p:X,paddingBottom:Q,paddingLeft:V,paddingRight:Z,paddingTop:$,pb:ee,pl:te,pr:ne,pt:re,height:ie,width:ae,maxHeight:oe,maxWidth:se,minHeight:ue,minWidth:le};return x(e),e}),[D,C,L,B,E,k,F,v,w,G,I,M,j,_,ie,W,T,S,P,O,z,A,N,oe,se,q,ue,le,J,U,Y,X,K,Q,V,Z,$,ee,te,ne,re,ae,H]),ge=n.useRef([]),de=n.useCallback((function(e,t,n,r){void 0===r&&(r=!1);var i=ge.current.findIndex((function(t){return t.node===e}));-1!==i&&ge.current.splice(i,1),ge.current.push({group:t,node:e,flexProps:n,centerAnchor:r})}),[]),pe=n.useCallback((function(e){var t=ge.current.findIndex((function(t){return t.node===e}));-1!==t&&ge.current.splice(t,1)}),[]),me=n.useMemo((function(){return s.Node.create()}),[]);n.useLayoutEffect((function(){h(me,ce,p)}),[me,ce,p]);var he=n.useState(0),xe=he[0],we=he[1],ye=n.useCallback((function(){}),[]),ve=n.useRef(0),be=n.useRef(!1);n.useLayoutEffect((function(){be.current=!1,ve.current+=1}));var Ee=n.useCallback((function(){be.current||(be.current=!0,we((function(e){return e+1})),ye())}),[ye]);n.useLayoutEffect((function(){Ee()}),[g,ce,Ee]);var Ce=function(e,t){switch(t){case"xy":return[e[0],e[1]];case"yz":return[e[1],e[2]];case"xz":return[e[0],e[2]]}}(r,c),Le=Ce[0],Re=Ce[1],Be="ltr"===o?s.DIRECTION_LTR:"rtl"===o?s.DIRECTION_RTL:o,De=n.useMemo((function(){return{requestReflow:Ee,registerBox:de,unregisterBox:pe,scaleFactor:p}}),[Ee,de,pe,p]),Te=n.useMemo((function(){return{node:me,size:[Le,Re]}}),[me,Le,Re]);return n.useLayoutEffect((function(){!function(){var e=Array(ge.current.length);ge.current.forEach((function(t,n){var r=t.group,i=t.node,a=t.flexProps,o="number"==typeof a.width?a.width*p:a.width,s="number"==typeof a.height?a.height*p:a.height;if(void 0!==o&&void 0!==s)i.setWidth(o),i.setHeight(s);else if(0===i.getChildCount()){var u=r.getClientRect({skipTransform:!0});e[n]=u,i.setWidth(o||u.width*p),i.setHeight(s||u.height*p)}else i.setWidth(NaN),i.setHeight(NaN)})),me.calculateLayout(Le*p,Re*p,Be);var t=0,n=0,r=0,i=0;ge.current.forEach((function(a,o){var s=a.group,u=a.node,l=a.centerAnchor,f=u.getComputedLayout(),c=f.left,g=f.top,d=f.width,m=f.height,h=0,x=0,w=e[o];w&&(h=w.x,x=w.y);var y={x:(c+(l?d/2:0))/p,y:(g+(l?m/2:0))/p};y.x-=h,y.y-=x,t=Math.min(t,c),r=Math.min(r,g),n=Math.max(n,c+d),i=Math.max(i,g+m),s.position(y)})),m&&m((n-t)/p,(i-r)/p)}()}),[xe]),f.default.createElement(a.Group,fe,f.default.createElement(y.Provider,{value:De},f.default.createElement(b.Provider,{value:Te},g)))},exports.initKonvaFlex=function(e){return d.apply(this,arguments)},exports.useContext=E,exports.useFlexSize=function(){return E(b).size},exports.useReflow=C;

(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[47017],{399534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(461365),o=r(569334);const i=(0,n.Z)(o.h_)},145869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(675263),l=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function d(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,r,n,i,l=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(i){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function a(){return c(this,a),l.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);d(y,"propTypes",{disabled:l().bool,className:l().string,checked:l().bool,onChange:l().func,onClick:l().func}),d(y,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const v=y},857037:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(124852),o=r.n(n),i=r(675263),l=r.n(i),a=r(24198),c=r(717621),u=r.n(c),s=r(290702);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){var t,r,i=e.value,l=e.format,c=e.onChangeColor,d=e.text,b=e.line,y=e.disabled,v=e.pickerProps,m=e.containerNode,h=e.onOpen,g=e.placement,w=(t=(0,n.useState)(),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),O=w[0],j=w[1],k=u()(i).toString();(0,n.useEffect)((function(){var e=O&&u()(O).toString();e&&k&&k!==e&&j(i)}),[k]);var C=(0,n.useRef)();C.current=function(e){h(e),e||y||!O||c(l?u()(O).toString(l):O)};var S,E,P=y?" ms-disabled":"";return o().createElement(s.Z,{disabled:y,onOpen:function(e){return C.current(e)},placement:g,containerNode:m,content:o().createElement(a.xS,f({},v,{className:"ms-sketch-picker",styles:{picker:{width:200,padding:"10px 10px 0",boxSizing:"initial"}},color:u()(O||i).toRgb(),onChange:function(e){return j(e.rgb)}}))},o().createElement("div",{className:"ms-color-picker".concat(P)},o().createElement("div",{className:"ms-color-picker-swatch",style:(S=O||i||"transparent",E=u()(S).toRgbString(),b?{boxSizing:"border-box",border:"4px solid ".concat(E),backgroundColor:"transparent"}:{color:"transparent"===S?"#000000":u().mostReadable(E,["#000000"],{includeFallbackColors:!0}).toHexString(),backgroundColor:E})},d)))}d.propTypes={value:l().oneOfType([l().string,l().shape({r:l().number,g:l().number,b:l().number,a:l().number})]),format:l().string,onChangeColor:l().func,text:l().string,line:l().bool,disabled:l().bool,pickerProps:l().object,containerNode:l().oneOfType([l().node,l().func]),onOpen:l().function,placement:l().string},d.defaultProps={disabled:!1,line:!1,onChangeColor:function(){},pickerProps:{},onOpen:function(){}};const b=d},212961:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(675263),l=r.n(i),a=r(757588),c=r(857037);function u(e){var t=e.color,r=e.format,n=e.line,i=e.onChangeColor,l=e.disableAlpha,u=e.containerNode,s=e.onOpen,f=e.disabled,p=e.presetColors,d=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(c.Z,{text:o().createElement(a.Glyphicon,{glyph:"dropper"}),format:r,line:n,value:t,onChangeColor:i,pickerProps:{disableAlpha:l,presetColors:p},containerNode:u,disabled:f,onOpen:s,placement:d}))}u.propTypes={color:l().oneOfType([l().string,l().shape({r:l().number,g:l().number,b:l().number,a:l().number})]),format:l().string,line:l().bool,onChangeColor:l().func,disableAlpha:l().bool,containerNode:l().node,disabled:l().bool,onOpen:l().func,presetColors:l().array,placement:l().string},u.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const s=u},290702:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(124852),o=r.n(n),i=r(180307),l=r(974691),a=r.n(l),c=r(737275),u=r(623560),s=r.n(u);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var p=["open","onOpen"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e){var t=e.containerNode,r=void 0===t?function(){return document.querySelector("."+((0,c.u8)("themePrefix")||"ms2")+" > div")||document.body}:t,l=e.placement,u=e.content,f=e.children,p=e.open,d=e.onOpen,b=void 0===d?function(){}:d,v=e.disabled,h=10,g=s()(r)?r():r,w=(0,n.useRef)({picker:{opacity:0},arrow:{opacity:0},overlay:{}}),O=m((0,n.useState)(w.current),2),j=O[0],k=O[1],C=(0,n.useRef)(),S=(0,n.useRef)(),E=(0,n.useRef)(),P=(0,n.useCallback)((function(){var e,t,r,n,o,i;if(!p)return w.current;var c={picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}};if("center"===l)return c;var u=null==C||null===(e=C.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e),s=null==S||null===(r=S.current)||void 0===r||null===(n=r.getBoundingClientRect)||void 0===n?void 0:n.call(r),f=null==E||null===(o=E.current)||void 0===o||null===(i=o.getBoundingClientRect)||void 0===i?void 0:i.call(o);if(u&&s&&f){var d,b,y,v,m=f.width,g=f.height,O=s.top,j=s.left,k=s.width,P=s.height,x=u.top,R=u.left,N=u.width,A=u.height,T=m+20<k,_=g+20<P,Z={top:{filter:function(){return T&&x-O>g+h},styles:function(){var e=R+N/2-m/2-j;return{picker:{position:"absolute",top:x-g-h-O,left:a()(e,j+h,j+k-m-h)},overlay:{},arrow:{top:x+2,left:R+N/2,transform:"translate(-50%, -50%) rotateZ(270deg) translateX(50%)"}}}},right:{filter:function(){return _&&j+k-(R+N)>m+h},styles:function(){var e=x-g/2-O+A/2,t=R+N+h-j;return{picker:{position:"absolute",top:a()(e,O+h,O+P-g-h),left:t},overlay:{},arrow:{top:x+A/2,left:R+N-2,transform:"translate(-50%, -50%) rotateZ(0deg) translateX(50%)"}}}},bottom:{filter:function(){return T&&O+P-(x+A)>g+h},styles:function(){var e=R+N/2-m/2-j;return{picker:{position:"absolute",top:x+A+h-O,left:a()(e,j+h,j+k-m-h)},overlay:{},arrow:{top:x+A-2,left:R+N/2,transform:"translate(-50%, -50%) rotateZ(90deg) translateX(50%)"}}}},left:{filter:function(){return _&&R-j>m+h},styles:function(){var e=x-g/2-O+A/2,t=R-m-h-j;return{picker:{position:"absolute",top:a()(e,O+h,O+P-g-h),left:t},overlay:{},arrow:{top:x+A/2,left:R+2,transform:"translate(-50%, -50%) rotateZ(180deg) translateX(50%)"}}}}};if(null!=Z&&null!==(d=Z[l])&&void 0!==d&&null!==(b=d.filter)&&void 0!==b&&b.call(d))return null==Z||null===(y=Z[l])||void 0===y||null===(v=y.styles)||void 0===v?void 0:v.call(y);if("top"!==l&&Z.top.filter())return Z.top.styles();if("right"!==l&&Z.right.filter())return Z.right.styles();if("bottom"!==l&&Z.bottom.filter())return Z.bottom.styles();if("left"!==l&&Z.left.filter())return Z.left.styles()}return c}),[l,p]);(0,n.useEffect)((function(){k(P());var e=function(){return k(P())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[P]);var x=(0,n.useRef)();return x.current={open:p},(0,n.useEffect)((function(){function e(e){var t=E.current,r=C.current,n=e.target&&(t&&t.contains(e.target)||r&&r.contains(e.target));if(x.current.open&&!n){var o,i,l=e.clientX,a=e.clientY,c=(null==E||null===(o=E.current)||void 0===o||null===(i=o.getBoundingClientRect)||void 0===i?void 0:i.call(o))||{},u=c.left,s=c.top,f=c.width,p=c.height;void 0!==l&&void 0!==a&&!(l>=u&&l<=u+f&&a>=s&&a<=s+p)&&b(!1)}}return window.addEventListener("click",e,!0),window.addEventListener("wheel",e,!0),window.addEventListener("scroll",e,!0),function(){window.removeEventListener("click",e,!0),window.removeEventListener("wheel",e,!0),window.removeEventListener("scroll",e,!0)}}),[]),o().createElement(o().Fragment,null,o().createElement("div",{className:"ms-popover",ref:C},(0,n.cloneElement)(f,{onClick:function(e){v||(e.stopPropagation(),b(!p))}})),g&&p?(0,i.createPortal)(o().createElement("div",{className:"ms-popover-overlay",ref:S,style:y({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0,pointerEvents:"none"},null==j?void 0:j.overlay)},o().createElement("div",{style:{position:"absolute",width:"100%",height:"100%",top:0,left:0}}),o().createElement("div",{ref:E,style:y({pointerEvents:"auto"},null==j?void 0:j.picker)},u),o().createElement("div",{className:"ms-popover-arrow",style:y({position:"absolute",borderTop:"".concat(12,"px solid transparent"),borderBottom:"".concat(12,"px solid transparent"),borderRight:"".concat(12,"px solid #ffffff"),filter:"drop-shadow(-4px 2px 4px rgba(0, 0, 0, 0.2))"},null==j?void 0:j.arrow)})),g):null)}const w=function(e){var t=e.open,r=e.onOpen,i=void 0===r?function(){}:r,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,p),a=m((0,n.useState)(t),2),c=a[0],u=a[1];return o().createElement(g,d({},l,{open:c,onOpen:function(e){u(e),i(e)}}))}}}]);
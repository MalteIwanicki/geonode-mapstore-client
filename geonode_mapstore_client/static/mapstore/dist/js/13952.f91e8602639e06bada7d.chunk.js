(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[13952],{243120:(e,t,r)=>{var n={"./cesium.js":[61133,84094,69692,48764,45206,36882,55521,79216,89437],"./leaflet.js":[48507,96259,10240,23596,41263,36882,55378,93991,35701,8041,65066,37161],"./openlayers.js":[434637,96259,18672,58493,10240,52043,40353,47202,74738,29139,69141,94793,21280,38920,61332,76932,11704,72445,78471,14155,65604,85986,24548,36882,55378,13581,93546,6909,49005,3498,8041,16037],"./sink.js":[871405,5442]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=243120,e.exports=o},461928:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(124852),o=r.n(n),i=r(675263),a=r.n(i),c=r(747037),s=r.n(c);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var u=["impl","name"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function v(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,r,n,i,a=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(n);if(i){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return v(this,e)});function c(){var e;m(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return j(O(e=a.call.apply(a,[this].concat(r))),"getTool",(function(t){var r=e.props.plugins;return s()(t)?{name:t,impl:r.tools[t]}:b({name:t.name,impl:r.tools[t.name]},t)})),j(O(e),"renderLayers",(function(){var t=e.props.map&&e.props.map.projection||"EPSG:3857",r=e.props.plugins.Layer;return e.props.layers.map((function(n,i){return o().createElement(r,{type:n.type,srs:t,position:i,key:n.id||n.name,options:n,env:n.localizedLayerStyles?e.props.env:[]},e.renderLayerContent(n,t))}))})),j(O(e),"renderLayerContent",(function(t,r){if(t.features&&"vector"===t.type){var n=e.props.plugins.Feature;return t.features.map((function(e){return o().createElement(n,{key:e.id,msId:e.id,type:e.type,crs:r,geometry:e.geometry,features:e.features,featuresCrs:t.featuresCrs||"EPSG:4326",layerStyle:t.style,style:e.style||t.style||null,properties:e.properties})}))}return null})),j(O(e),"renderTools",(function(){return e.props.tools.map((function(t){var r=e.getTool(t),n=r.impl,i=r.name,a=f(r,u);return o().createElement(n,l({key:i},a))}))})),e}return t=c,(r=[{key:"render",value:function(){var e=this.props.plugins.Map,t=this.props.map&&this.props.map.projection||"EPSG:3857";return this.props.map&&e?o().createElement(e,l({projectionDefs:this.props.projectionDefs,style:this.props.styleMap,id:this.props.id,zoomControl:!1,center:{x:0,y:0},zoom:1,hookRegister:this.props.hookRegister,mapStateSource:this.props.mapStateSource||this.props.id},this.props.options,this.props.map,{projection:t},this.props.eventHandlers),this.renderLayers(),this.renderTools(),this.props.children):null}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);j(w,"propTypes",{id:a().string,options:a().object,map:a().object,mapStateSource:a().string,eventHandlers:a().object,styleMap:a().object,layers:a().array,hookRegister:a().object,projectionDefs:a().array,plugins:a().any,tools:a().array,getLayerProps:a().func,env:a().array}),j(w,"defaultProps",{id:"__base_map__",options:{},map:{},styleMap:{},tools:[],projectionDefs:[],eventHandlers:{onMapViewChanges:function(){},onClick:function(){},onMouseMove:function(){},onLayerLoading:function(){},onLayerError:function(){}},env:[]});const P=w},319180:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(124852),o=r.n(n),i=r(675263),a=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(h,t);var n,i,a,c,d=(a=h,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(a);if(c){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function h(){var e;p(this,h);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(y(e=d.call.apply(d,[this].concat(r))),"state",{plugins:{}}),e}return n=h,(i=[{key:"componentDidMount",value:function(){this.setPlugins(this.props),this._isMounted=!0}},{key:"componentWillUpdate",value:function(e){e.mapType!==this.props.mapType&&this.setPlugins(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=this.state.plugins;return o().createElement(e,s({},this.props,{plugins:t}))}},{key:"setPlugins",value:function(e){var t=this;e.mapType&&r(243120)("./"+e.mapType+".js").then((function(e){t._isMounted&&(t.setState({plugins:e.default()}),t.props.onMapTypeLoaded())}))}}])&&u(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),h}(o().Component);return m(t,"propTypes",{mapType:a().string,onMapTypeLoaded:a().func}),m(t,"defaultProps",{onMapTypeLoaded:function(){}}),t.displayName="".concat(e.displayName,"WithMapType"),t}},100824:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(124852),o=r.n(n);const i=(0,n.forwardRef)((function(e,t){var r=e.enabled,n=e.className,i=e.children;return r?o().createElement("div",{ref:t,className:n||"gn-overlay-container",style:{position:"relative",height:"100%"}},i):null}))},228261:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n),i=r(675263),a=r.n(i),c=["id","className","style","children"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e){var t=e.id,r=e.className,n=e.style,i=e.children,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c),p=r?" "+r:"";return o().createElement(o().Fragment,null,o().createElement("div",s({},a,{id:t,className:"gn-spinner".concat(p),style:n}),o().createElement("div",null)),i)}p.propTypes={id:a().string,className:a().string,style:a().object},p.defaultProps={};const u=p},51605:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(228261)}}]);
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7877],{17106:(n,t,r)=>{"use strict";r.d(t,{SV:()=>m,IO:()=>b});var e=r(22222),o=r(2510),u=r(27361),i=r.n(u),a=r(30998),c=r.n(a),f=r(63202),l=r(22843);function s(n){return function(n){if(Array.isArray(n))return p(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return p(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var d=function(n){return n.context&&n.context.currentContext},m=function(n){return n.context&&n.context.resource},g=(0,e.P1)((function(){return i()(f.ZP.getConfigProp("plugins"),"desktop")}),(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{desktop:[].concat(s(n),["Context"])}})),v=(0,e.P1)((function(n){return i()(d(n),"plugins")}),(function(n){return i()(d(n),"userPlugins")}),(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n&&{desktop:[].concat(s(i()(n,"desktop",[])),s(t.filter((function(n){return n.active}))))}})),y=((0,e.P1)(d,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.templates})),function(n){return function(n){return i()(n,"context.loading")}(n)?function(n){return g(n)}(n):v(n)||g(n)}),b=function(n){return(0,e.P1)(d,y,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!t||c()(i()(r,"desktop",[]),(function(t){return t.name===n}))>-1}))};(0,e.P1)((function(n){return(0,l.bh)(n,(0,o.Hy)(n))}),(function(n){return JSON.stringify(n)}))},7147:(n,t,r)=>{"use strict";r.d(t,{Yq:()=>u,Iz:()=>i,QF:()=>a,_d:()=>c,lI:()=>f,PJ:()=>l,dH:()=>s,Gd:()=>p,tL:()=>d,R4:()=>m,BP:()=>g,ro:()=>v});var e=r(27361),o=r.n(e),u=function(n){return function(n,t){return function(t){return o()(t,"controls[".concat(n,"][").concat("enabled","]"))}}(n)},i=function(n){return o()(n,"controls.measure.showCoordinateEditor")},a=function(n){return o()(n,"controls.measure.enabled")},c=function(n){return o()(n,"controls.queryPanel.enabled")},f=function(n){return!!o()(n,"controls.layerdownload.enabled")},l=function(n){return o()(n,"controls.widgetBuilder.available",!1)},s=function(n){return o()(n,"controls.widgetBuilder.enabled")},p=function(n){return o()(n,"controls.layersettings.initialSettings")||{}},d=function(n){return o()(n,"controls.layersettings.originalSettings")||{}},m=function(n){return o()(n,"controls.layersettings.activeTab")||"general"},g=function(n){return o()(n,"controls.drawer.enabled",!1)},v=function(n){return o()(n,"controls.info.available")}},2510:(n,t,r)=>{"use strict";r.d(t,{Hy:()=>i,nR:()=>a});var e=r(27361),o=r.n(e),u=function(n){return n.localConfig},i=function(n){return(u(n)||{}).monitorState},a=function(n){return o()(u(n),"defaultMapOptions.floatingIdentifyDelay",500)}},8316:(n,t,r)=>{"use strict";r.d(t,{Pz:()=>i,Ps:()=>a,KV:()=>c});var e=r(22222),o=r(91175),u=r.n(o),i=function(n){return n.locale&&n.locale.current||"en-US"},a=function(n){return n.locale&&n.locale.messages||{}},c=(0,e.P1)([i],(function(n){return u()(n.split("-"))}))},7877:(n,t,r)=>{"use strict";r.d(t,{xt:()=>I,Qp:()=>h,us:()=>P,x0:()=>O,bI:()=>w,Bz:()=>j,H_:()=>S,A4:()=>k,Ap:()=>x,ij:()=>A,yg:()=>C,lN:()=>M,oq:()=>E,hs:()=>q,Qf:()=>D,q7:()=>_,OK:()=>z,vR:()=>B,o9:()=>F,IA:()=>K,Kc:()=>L,Dg:()=>N,AO:()=>T,EI:()=>V,qK:()=>G});var e=r(27361),o=r.n(e),u=r(57557),i=r.n(u),a=r(1469),c=r.n(a),f=r(22222),l=r(827),s=r(17106),p=r(8316),d=r(88798),m=r(93152),g=r(7147);function v(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function y(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){b(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function b(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var I=(0,f.P1)(m.c0,(function(n){var t;return!(null==n||null===(t=n.mapInfo)||void 0===t||!t.showInMapPopup)}),(function(n,t){return!n&&t})),h=(0,f.P1)((function(n){return o()(n,"mapInfo.requests")||[]}),(0,s.IO)("Identify"),I,(function(n,t,r){return!r&&!!n&&n.length>0&&t})),P=function(n){return o()(n,"mapInfo.configuration.infoFormat","text/plain")},O=function(n){return o()(n,"mapInfo.configuration.showEmptyMessageGFI",!0)},w=function(n){return o()(n,"mapInfo.configuration",{})},j=function(n){return n&&n.mapInfo&&n.mapInfo.clickPoint},S=function(n){return n&&n.mapInfo&&n.mapInfo.clickLayer},k=function(n){return o()(n,"mapInfo.itemId",null)},x=function(n){return o()(n,"mapInfo.overrideParams",{})},A=function(n){return o()(n,"mapInfo.filterNameList",[])},C=function(n){return o()(n,"mapInfo.enabled",!1)},M=(0,f.P1)((function(n){return!C(n)}),(function(n){return o()(n,"controls.measure.enabled")&&(o()(n,"measurement.lineMeasureEnabled")||o()(n,"measurement.areaMeasureEnabled")||o()(n,"measurement.bearingMeasureEnabled"))}),(function(n){var t=o()(n,"draw.drawStatus",!1);return t&&"clean"!==t&&"stop"!==t}),(function(n){return o()(n,"annotations.editing")}),g.ro,(function(n,t,r,e,o){return n||!!t||r||!!e||!o})),E=(0,f.zB)({format:P,map:l.Od,point:j,currentLocale:p.Pz,maxItems:function(n){return o()(n,"mapInfo.configuration.maxItems")}}),q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.mapInfo&&n.mapInfo.highlight},D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n&&n.mapInfo&&n.mapInfo.index},_=function(n){return n.mapInfo&&n.mapInfo.responses||[]},z=function(n){var t;return(null==n||null===(t=n.mapInfo)||void 0===t?void 0:t.requests)||[]},B=function(n){var t;return null==n||null===(t=n.mapInfo)||void 0===t?void 0:t.loaded},F=(0,f.P1)(z,_,P,(function(n,t,r){var e=(0,d.Te)(r);return n.length===t.length&&e.getValidResponses(t)})),H=(0,f.P1)(_,D,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n[t]})),K=function(n){var t=H(n)||{};return o()(t,"layerMetadata.features")},L=function(n){var t=H(n)||{};return o()(t,"layerMetadata.featuresCrs")},Q=function(n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.style||t.geometry&&("Point"===t.geometry.type||"MultiPoint"===t.geometry.type)?n:i()(n,"radius")}},R=function(n){return function(t){return y(y({},t),{},{style:Q(n)(t)})}},N=(0,f.P1)(j,q,K,L,(function(n){return n&&n.mapInfo&&n.mapInfo.showMarker}),(function(n){return o()(n,"mapInfo.highlightStyle",{color:"#3388ff",weight:4,radius:4,dashArray:"",fillColor:"#3388ff",fillOpacity:.2})}),(function(n,t,r,e,o,u){return o&&n?t?y(y({},n),{},{featuresCrs:e,features:r&&c()(r)&&r.map(R(u))}):n:void 0})),T=function(n){var t;return null===(t=n.mapInfo)||void 0===t?void 0:t.currentEditFeatureQuery},V=function(n){return o()(n,"mapInfo.configuration.trigger","click")},G=function(n){return!(0,m.c0)(n)}}}]);
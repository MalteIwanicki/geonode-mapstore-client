(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3385],{81808:(e,r,t)=>{"use strict";t.d(r,{eD:()=>n,AM:()=>o,ok:()=>u,Gg:()=>a,nT:()=>i,TL:()=>s,KS:()=>c,EB:()=>l,DZ:()=>f,Aw:()=>p,V_:()=>E,H0:()=>y,jW:()=>d,JZ:()=>A,fQ:()=>g,HK:()=>_,YO:()=>O,I6:()=>R});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",u="MAP_CONFIG_LOADED",a="MAP_CONFIG_LOAD_ERROR",i="MAP_LOAD_INFO",s="MAP_INFO_LOAD_START",c="MAP_INFO_LOADED",l="MAP_INFO_LOAD_ERROR",f="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",E="MAP:RESET_MAP_SAVE_ERROR";function y(e,r,t){return{type:u,config:e,legacy:!!r,mapId:r,zoomToExtent:t}}function d(e,r){return{type:a,error:e,mapId:r}}function A(e,r,t,n,u){return{type:o,configName:e,mapId:r,config:t,mapInfo:n,overrideConfig:u}}function g(e,r){return{type:c,mapId:r,info:e}}function _(e,r){return{type:l,mapId:e,error:r}}function O(e){return{type:s,mapId:e}}function R(e){return{type:i,mapId:e}}},80416:(e,r,t)=>{"use strict";t.d(r,{yS:()=>n,Zz:()=>o,ms:()=>u,ih:()=>a,OX:()=>i,sb:()=>s,K$:()=>c,k7:()=>l,cX:()=>f,x9:()=>p,vs:()=>E,oE:()=>y,Po:()=>d,qv:()=>A,cI:()=>g,g6:()=>_,I4:()=>O,l$:()=>R,Xv:()=>v,k3:()=>m,CQ:()=>S,R8:()=>T,HN:()=>b,sH:()=>h,c7:()=>P,_7:()=>D,eF:()=>I,O6:()=>L,ED:()=>C,RP:()=>w,sF:()=>M,VP:()=>N,He:()=>H,vO:()=>G,WO:()=>j,bh:()=>q,pV:()=>F,MK:()=>k,ZF:()=>Y,tV:()=>X,Dv:()=>x,Yz:()=>U,kI:()=>V,XG:()=>Z,A4:()=>W,Rp:()=>K,$o:()=>Q,ct:()=>$,oh:()=>z,$h:()=>J,ud:()=>B,Qr:()=>ee,LR:()=>re,nN:()=>te,UG:()=>ne,F5:()=>oe,c9:()=>ue,Jh:()=>ae,Xy:()=>ie});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",u="CHANGE_GROUP_PROPERTIES",a="TOGGLE_NODE",i="SORT_NODE",s="REMOVE_NODE",c="UPDATE_NODE",l="MOVE_NODE",f="LAYER_LOADING",p="LAYER_LOAD",E="LAYER_ERROR",y="ADD_LAYER",d="ADD_GROUP",A="REMOVE_LAYER",g="SHOW_SETTINGS",_="HIDE_SETTINGS",O="UPDATE_SETTINGS",R="REFRESH_LAYERS",v="LAYERS:UPDATE_LAYERS_DIMENSION",m="LAYERS_REFRESHED",S="LAYERS_REFRESH_ERROR",T="LAYERS:BROWSE_DATA",b="LAYERS:DOWNLOAD",h="LAYERS:CLEAR_LAYERS",P="LAYERS:SELECT_NODE",D="LAYERS:FILTER_LAYERS",I="LAYERS:SHOW_LAYER_METADATA",L="LAYERS:HIDE_LAYER_METADATA",C="LAYERS:UPDATE_SETTINGS_PARAMS";function w(e,r,t){return{type:g,node:e,nodeType:r,options:t}}function M(){return{type:_}}function N(e){return{type:O,options:e}}function H(e,r){return{type:n,newProperties:r,layer:e}}function G(e,r){return{type:o,layer:e,params:r}}function j(e,r){return{type:u,newProperties:r,group:e}}function q(e,r,t){return{type:a,node:e,nodeType:r,status:!t}}function F(e){return{type:"CONTEXT_NODE",node:e}}function k(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:i,node:e,order:r,sortLayers:t}}function Y(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:s,node:e,nodeType:r,removeEmpty:t}}function X(e,r,t){return{type:c,node:e,nodeType:r,options:t}}function x(e,r,t){return{type:l,node:e,groupId:r,index:t}}function U(e){return{type:f,layerId:e}}function V(e,r){return{type:p,layerId:e,error:r}}function Z(e,r,t){return{type:E,layerId:e,tilesCount:r,tilesErrorCount:t}}function W(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:y,layer:e,foreground:r}}function K(e,r,t){return{type:d,group:e,parent:r,options:t}}function Q(e){return{type:A,layerId:e}}function $(e,r){return{type:n,layer:e,newProperties:{_v_:r||(new Date).getTime()}}}function z(e){return{type:m,layers:e}}function J(e,r){return{type:S,layers:e,error:r}}function B(e,r,t,n){return{type:v,dimension:e,value:r,options:t,layers:n}}function ee(e){return{type:T,layer:e}}function re(e){return{type:b,layer:e}}function te(){return{type:h}}function ne(e,r,t){return{type:P,id:e,nodeType:r,ctrlKey:t}}function oe(e){return{type:D,text:e}}function ue(e,r){return{type:I,metadataRecord:e,maskLoading:r}}function ae(){return{type:L}}function ie(e,r){return{type:C,newParams:e,update:r}}},97222:(e,r,t)=>{"use strict";t.d(r,{Vc:()=>o,bj:()=>u,p7:()=>a,Av:()=>i,M8:()=>s,wn:()=>c,gs:()=>l,NN:()=>f,C2:()=>p,O7:()=>E,oQ:()=>y,dX:()=>d,al:()=>A,Gh:()=>g,x2:()=>_,Y7:()=>O,b4:()=>R,GI:()=>v,KP:()=>m,dS:()=>S,Zw:()=>T,Z:()=>b,a:()=>h,WN:()=>P,k9:()=>D,yo:()=>I,kE:()=>L,kV:()=>C,v2:()=>w,_q:()=>M,tt:()=>N,Jc:()=>H,w4:()=>G,QJ:()=>j,KG:()=>q,o$:()=>F,TS:()=>k,Tw:()=>Y,I3:()=>X});var n=t(97395),o="SEARCH:SEARCH_WITH_FILTER",u="TEXT_SEARCH_STARTED",a="TEXT_SEARCH_RESULTS_LOADED",i="TEXT_SEARCH_RESULTS_PURGE",s="TEXT_SEARCH_RESET",c="TEXT_SEARCH_ADD_MARKER",l="TEXT_SEARCH_TEXT_CHANGE",f="TEXT_SEARCH_LOADING",p="TEXT_SEARCH_NESTED_SERVICE_SELECTED",E="TEXT_SEARCH_ERROR",y="TEXT_SEARCH_CANCEL_ITEM",d="TEXT_SEARCH_ITEM_SELECTED",A="TEXT_SEARCH_SHOW_GFI",g="TEXT_SEARCH_SET_HIGHLIGHTED_FEATURE",_="UPDATE_RESULTS_STYLE",O="CHANGE_SEARCH_TOOL",R="SEARCH:ZOOM_ADD_POINT",v="SEARCH:CHANGE_FORMAT",m="SEARCH:CHANGE_COORD",S="SEARCH:HIDE_MARKER";function T(e){return{type:v,format:e}}function b(e,r,t){return{type:R,pos:e,zoom:r,crs:t}}function h(e){return{type:O,activeSearchTool:e}}function P(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0;return{type:a,results:e,append:r,services:t}}function D(e){return{type:l,searchText:e}}function I(e){return{type:f,loading:e}}function L(e){return{type:E,error:e}}function C(){return{type:i}}function w(){return{type:s}}function M(e,r){return{type:c,markerPosition:e,markerLabel:r}}function N(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.services,n=void 0===t?null:t,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return{type:u,searchText:e,services:n,maxResults:o}}function H(e,r,t){return{type:d,item:e,mapConfig:r,resultsStyle:t}}var G=function(e){return{type:A,item:e}};function j(e,r,t){return{type:p,searchText:t,services:e,items:r}}function q(e){return{type:y,item:e}}function F(e){return{type:_,style:e}}function k(e,r){return{type:m,coord:e,val:r}}function Y(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.nonQueriableLayers",autoDismiss:10})}function X(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.serverError",autoDismiss:10})}},93451:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var n=t(86638),o=t(45697),u=t.n(o),a=t(84596),i=t.n(a),s=t(1469),c=t.n(s),l=t(14293),f=t.n(l),p=t(47037),E=t.n(p),y=t(18093),d=["messages"];function A(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){O(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var R=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(c()(r))return r.map((function(o){var u=(0,n.S$)(e,o[t]||E()(o)&&o||"");return _(_({},o),{},O({},t,f()(u)?r:u))}));var o=(0,n.S$)(e,r);return f()(o)?r:o},v=function(e,r,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return _(_({},n),{},O({},o,e[o]&&R(r,e[o],t)))}};const m=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,y.compose)((0,y.getContext)({messages:u().object}),(0,y.mapProps)((function(t){var n=t.messages,o=A(t,d);return _(_({},o),i()(e).reduce(v(o,n,r),{}))})))}},26125:(e,r,t)=>{"use strict";t.d(r,{Z:()=>b});var n=t(21914),o=t(81808),u=t(82904),a=t(27418),i=t.n(a),s=t(30998),c=t.n(s),l=t(52353),f=t.n(l),p=t(41609),E=t.n(p),y=t(13652),d=t(88798),A=["index","loaded"];function g(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function _(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return O(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function S(e,r,t){var n="vector"===t,o=n?r.reqId:c()(e.requests||[],(function(e){return e.reqId===r.reqId}));if(-1!==o){var u;if(["exceptions","error"].includes(t)){var a=e.requests.filter((function(e,r){return r!==o})),s=e.responses.filter((function(e,r){return r!==o}));return v(v({},e),{},{responses:s,requests:a})}var l,p=e.configuration,y=e.requests,A=e.responses||[],g="hover"===(null==p?void 0:p.trigger)||(null==e?void 0:e.showInMapPopup);if(!n){var O={response:r[t],queryParams:r.requestParams,layerMetadata:r.layerMetadata,layer:r.layer};g?A=[].concat(_(A),[O]):A[o]=O}return g?l={loaded:!0,index:0}:!g&&function(e,r,t,n){var o,u,a=e.configuration,i=e.requests,s=e.queryableLayers,c=void 0===s?[]:s,l=e.index,p=(a||{}).infoFormat,y=null===(o=(0,d.Te)(p))||void 0===o?void 0:o.getValidResponses([r[t]]),A=null===(u=(0,d.Te)(p))||void 0===u?void 0:u.getNoValidResponses(r),g=f()(l)&&!!y.length,_=!n&&i.length===A.filter((function(e){return e})).length,O=f()(l)&&n&&i.filter((function(e){return E()(e)})).length===c.length;return g||_||O}(e,A,o,n)?l={loaded:!0,index:o}:A.length!==y.length||null!==(u=l)&&void 0!==u&&u.loaded||(l={loaded:!0}),i()({},e,v(v(v({},n&&{requests:y}),!f()(l)&&l),{},{responses:_(A)}))}return e}var T={enabled:!0,configuration:{}};const b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case n.Re:return i()({},e,{warning:"NO_QUERYABLE_LAYERS"});case n.ih:return i()({},e,{warning:null});case n.Xw:return i()({},e,{enabled:r.enabled});case n.ph:return i()({},e,{enabled:!e.enabled});case n.gG:return i()({},e,{index:r.index});case n.oz:return i()({},e,{highlight:r.enabled});case n.Pn:var a=r.reqId,s=r.request,c=e.requests||[];return i()({},e,{requests:[].concat(_(c),[{request:s,reqId:a}])});case n.DZ:e.index,e.loaded;var l=g(e,A);return v(v({},l),{},{queryableLayers:[],responses:[],requests:[]});case n.XL:return S(e,r,"data");case n.Ih:return S(e,r,"exceptions");case n.km:return S(e,r,"error");case n.xy:return i()({},e,{clickPoint:r.point,clickLayer:r.layer||null,itemId:r.itemId||null,overrideParams:r.overrideParams||null,filterNameList:r.filterNameList||null});case n.e8:return v(v({},e),{},{configuration:v(v({},e.configuration),{},{infoFormat:r.infoFormat})});case n.E0:return i()({},e,{showMarker:!0});case n.F9:return i()({},e,{showMarker:!1});case n.X_:return i()({},e,{showModalReverse:!0,reverseGeocodeData:r.reverseGeocodeData});case n.pb:return i()({},e,{showModalReverse:!1,reverseGeocodeData:void 0});case u.l:return i()({},e,{showMarker:!1,responses:[],requests:[],configuration:v(v({},e.configuration),{},{trigger:"click"})});case n.qb:var f,p=t(55745),E=t(65442),d={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[r.request.lng,r.request.lat]}},O=r.metadata&&r.metadata.units;switch(O){default:O="meters";break;case"deg":O="degrees";break;case"mi":O="miles"}var R,m=r.metadata&&r.metadata.resolution||1,b=p(d,(r.metadata.buffer||1)*m,O),h=(r.layer.features||[]).filter((function(e){try{return"FeatureCollection"===e.type&&e.features&&e.features.length?e.features.reduce((function(e,t){var n=t.properties.useGeodesicLines&&t.properties.geometryGeodesic?v(v({},t),{},{geometry:t.properties.geometryGeodesic}):t;return e||E(b,m&&r.metadata.buffer&&O?p(n,1,"meters"):n)}),!1):E(b,m&&r.metadata.buffer&&O?p(e,1,"meters"):e)}catch(e){return!1}})),P=e.responses||[],D="hover"===(null==e||null===(f=e.configuration)||void 0===f?void 0:f.trigger)||(null==e?void 0:e.showInMapPopup),I={response:{crs:null,features:h,totalFeatures:"unknown",type:"FeatureCollection"},queryParams:r.request,layerMetadata:r.metadata,format:"JSON"};D?(P=[].concat(_(P),[I]),R={reqId:0}):(P[e.requests.length]=I,R={reqId:e.requests.length});var L=[].concat(_(e.requests),[{}]);return S(i()({},e,{requests:L,queryableLayers:r.queryableLayers,responses:_(P)}),R,"vector");case n.lF:return i()({},e,{centerToMarker:r.status});case n.ZF:return v(v({},e),{},{configuration:v(v({},e.configuration),{},{showEmptyMessageGFI:!e.configuration.showEmptyMessageGFI})});case o.ok:return v(v({},e),{},{configuration:r.config.mapInfoConfiguration||e.configuration||{}});case n.GI:return v(v({},e),{},{formatCoord:r.format});case n.B1:return v(v({},e),{},{showCoordinateEditor:!r.showCoordinateEditor});case n.gc:return v(v({},e),{},{currentEditFeatureQuery:r.query});case n.zX:return v(v({},e),{},{configuration:v(v({},e.configuration),{},{trigger:r.trigger})});case n.Zb:return v(v({},e),{},{showInMapPopup:r.value});case y.Wz:return"cesium"===r.mapType?v(v({},e),{},{configuration:v(v({},e.configuration),{},{trigger:"click"})}):e;default:return e}}}}]);
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[35701],{761444:(t,e,r)=>{"use strict";r.r(e);var n=r(556307),i=r.n(n),o=r(244712),a=r.n(o),l=(r(371851),r(727418)),s=r.n(l);i().BingLayer.prototype.loadMetadata=function(){if(!this.metaRequested){this.metaRequested=!0;var t=this,e="_bing_metadata_"+i().Util.stamp(this);window[e]=function(r){t.meta=r,window[e]=void 0;var n=document.getElementById(e);return n.parentNode.removeChild(n),r.errorDetails?(t.fire("load",{layer:t}),t.onError(r)):(t.initMetadata(r),null)};var r="file:"===document.location.protocol?"https":document.location.protocol.slice(0,-1),n=r+"://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.options.type+"?include=ImageryProviders&jsonp="+e+"&key="+this._key+"&UriScheme="+r,o=document.createElement("script");o.type="text/javascript",o.src=n,o.id=e,document.getElementsByTagName("head")[0].appendChild(o)}},i().BingLayer.prototype.onError=function(t){return this.options.onError?this.options.onError(t):null},a().registerType("bing",{create:function(t){var e=t.apiKey,r={subdomains:[0,1,2,3],type:t.name,attribution:"Bing",culture:"",onError:t.onError,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23};return t.zoomOffset&&(r=s()({},r,{zoomOffset:t.zoomOffset})),new(i().BingLayer)(e,r)},isValid:function(t){return!t.meta||!t.meta.statusCode||200===t.meta.statusCode}})},951735:(t,e,r)=>{var n=r(556307);t.exports=n.TileLayer.extend({initialize:function(t){n.TileLayer.prototype.initialize.call(this,this.url,t)}})},826696:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(556307),a=r.n(o);r(514767),i().registerType("google",(function(t){return(null===(e=window)||void 0===e||null===(r=e.google)||void 0===r?void 0:r.maps)?a().gridLayer.googleMutant({type:t.name.toLowerCase(),maxNativeZoom:t.maxNativeZoom||18,maxZoom:t.maxZoom||20}):null;var e,r}))},790671:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(471305),a=r.n(o),l=r(727418),s=r.n(l);r(522729),i().registerType("graticule",{create:function(t){var e=s()({interval:20,showOriginLabel:!0,redraw:"move"},t);return a()?new(a())(e):null},isValid:function(){return!!a()}})},352031:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(357167),a=r.n(o);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}i().registerType("mapquest",{create:function(t){return a()?a().mapLayer(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({maxZoom:23},t)):(t&&t.onError&&t.onError(),!1)},isValid:function(){return!!a()}})},151254:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(556307),a=r.n(o);i().registerType("osm",(function(t){return a().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoomOffset:t.zoomOffset||0,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23})}))},135659:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(556307),a=r.n(o);i().registerType("tms",(function(t){return a().tileLayer("".concat(t.tileMapUrl,"/{z}/{x}/{y}.").concat(t.extension),{hideErrors:t.hideErrors||!0,tms:!0})}))},70826:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(556307),a=r.n(o),l=r(45992);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}i().registerType("tileprovider",(function(t){var e,r,n=l.Z.getLayerConfig(t.provider,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({maxZoom:23},t)),i=(r=2,function(t){if(Array.isArray(t))return t}(e=n)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,l=[],s=!0,u=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(t){u=!0,i=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],s=i[1];return a().tileLayer(o,s)}))},510733:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(414293),a=r.n(o),l=r(556307),s=r.n(l),u=function t(e,r){e.eachLayer&&e.eachLayer((function(e){e.setOpacity&&e.setOpacity(r),t(e,r)}))};i().registerType("vector",{create:function(t){var e=function(t){var e=t.hideLoading,r=s().geoJson([],{pointToLayer:"marker"!==t.styleName?function(e,r){return s().circleMarker(r,e.style||t.style)}:null,hideLoading:e});return r.setOpacity=function(t){u(r,t)},r.on("layeradd",(function(e){var n=e.layer;r.setOpacity(a()(r.opacity)?t.opacity:r.opacity,n)})),r}(t);return e.opacity=a()(t.opacity)?1:t.opacity,e},update:function(t,e,r){e.opacity!==r.opacity&&(t.opacity=e.opacity)},render:function(){return null}})},622946:(t,e,r)=>{"use strict";var n=r(414293),i=r.n(n),o=r(618446),a=r.n(o),l=r(556307),s=r.n(l),u=r(443143),c=r(986267),f=r(244712),m=r.n(f),y=r(143378),p=r(432420),d=r(838848),v=["color","fillColor"];function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){S(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===h(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var x=function(t,e){t.fireEvent("loading");var r=(0,y.v)(e),n=function(){t.fireEvent("loadError")};return(0,p.Bm)(e.url,e.name,b({outputFormat:"application/json",maxFeatures:1e3,srsname:(0,c.normalizeSRS)("EPSG:4326")},r)).then((function(e){return 200===e.status?(t.clearLayers(),t.addData(e.data),t.fireEvent("load")):(console.error(e),n(new Error("status code of response:"+e.status))),t})).catch((function(t){n()}))},w=function(t){var e=t||{},r=e.color,n=e.fillColor;return b(b({},function(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}(e,v)),{},{color:(0,u.qq)(r,1),fillColor:(0,u.qq)(n,1)})},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style&&t.style[0]||t.style;return w(e)},P=function(t,e){var r=O(e);t.setStyle(r),t.options.style=r,t.styleName=e.styleName},T=function t(e,r){e.eachLayer&&e.eachLayer((function(e){e.setOpacity&&e.setOpacity(r),t(e,r)}))},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=O(t),n=function(e,n){return"marker"===t.styleName?s().marker(n,r):s().circleMarker(n,r)},o=new(s().GeoJSON)(e,{pointToLayer:n,style:r});return o.setOpacity=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=b({},o.options.style||{}),r=e.fillOpacity,n=void 0===r?1:r,i=e.opacity,a=void 0===i?1:i,l=b(b({},e),{},{opacity:a*t,fillOpacity:n*t});o.setStyle(w(l)),T(o,t)},o.on("layeradd",(function(){P(o,t),o.setOpacity(i()(o.opacity)?t.opacity:o.opacity)})),o};m().registerType("wfs",{create:function(t){var e=j(t);return x(e,t),e.opacity=i()(t.opacity)?1:t.opacity,e},update:function(t,e,r){if(e.opacity!==r.opacity&&(t.opacity=e.opacity),(0,d.Es)(r,e)&&x(t,e),a()(e.style,r.style)||P(t,e),e.styleName!==r.styleName){var n=t.toGeoJSON().features;return j(e,n)}return null},render:function(){return null}})},136366:(t,e,r)=>{"use strict";r.r(e);var n=r(124852),i=r.n(n),o=r(805346),a=r(244712),l=r.n(a),s=r(143378),u=r(73785),c=r.n(u),f=r(556307),m=r.n(f),y=r(727418),p=r.n(y),d=r(701469),v=r.n(d),h=r(414293),g=r.n(h),b=r(233044),S=r(503901),x=r(624262),w=r(333358);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(312787),m().NonTiledLayer.WMSCustom=m().NonTiledLayer.WMS.extend({initialize:function(t,e){this._wmsUrl=t;var r=m().extend({},this.defaultWmsParams);for(var n in e)this.options.hasOwnProperty(n)||"CRS"===n.toUpperCase()||"maxNativeZoom"===n||(r[n]=e[n]);this.wmsParams=r,m().setOptions(this,e)},removeParams:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return e.forEach((function(e){return delete t.wmsParams[e]})),r||this.redraw(),this}}),m().nonTiledLayer.wmsCustom=function(t,e){return new(m().NonTiledLayer.WMSCustom)(t,e)},m().TileLayer.MultipleUrlWMS=m().TileLayer.WMS.extend({initialize:function(t,e){this._url=t[0],this._urls=t,this._urlsIndex=0;var r=m().extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;for(var i in e.detectRetina&&m().Browser.retina?r.width=r.height=2*n:r.width=r.height=n,e)this.options.hasOwnProperty(i)||"CRS"===i.toUpperCase()||"maxNativeZoom"===i||(r[i]=e[i]);this.wmsParams=r,m().setOptions(this,e)},getTileUrl:function(t){var e=this._map,r=this.options.tileSize,n=t.multiplyBy(r),i=n.add([r,r]),o=this._crs.project(e.unproject(n,t.z)),a=this._crs.project(e.unproject(i,t.z)),l=this._wmsVersion>=1.3&&this._crs===m().CRS.EPSG4326?[a.y,o.x,o.y,a.x].join(","):[o.x,a.y,a.x,o.y].join(",");this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);var s=m().Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t)});return s+m().Util.getParamString(this.wmsParams,s,!0)+"&BBOX="+l},removeParams:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return e.forEach((function(e){return delete t.wmsParams[e]})),r||this.redraw(),this}}),m().tileLayer.multipleUrlWMS=function(t,e){return new(m().TileLayer.MultipleUrlWMS)(t,e)},m().TileLayer.ElevationWMS=m().TileLayer.MultipleUrlWMS.extend({initialize:function(t,e,r,n){this._tiles={},this._nodata=r,this._littleendian=n,m().TileLayer.MultipleUrlWMS.prototype.initialize.apply(this,arguments)},_addTile:function(t){var e=this.getTileUrl(t);(0,S.qR)(e,t,this._tileCoordsToKey(t))},getElevation:function(t,e){try{var r=this._getTileFromCoords(t),n=(0,S.yQ)(this._tileCoordsToKey(r),this._getTileRelativePixel(r,e),this.getTileSize().x,this._nodata,this._littleendian);return n.available?n.value:i().createElement(o.Z,{msgId:n.message})}catch(t){return i().createElement(o.Z,{msgId:"elevationLoadingError"})}},_getTileFromCoords:function(t){var e=this._map.project(t).divideBy(256).floor();return p()(e,{z:this._tileZoom})},_getTileRelativePixel:function(t,e){var r=Math.floor(e.x-this._getTilePos(t).x-this._map._getMapPanePos().x),n=Math.min(this.getTileSize().x-1,Math.floor(e.y-this._getTilePos(t).y-this._map._getMapPanePos().y));return new(m().Point)(r,n)},_removeTile:function(){},_abortLoading:function(){}}),m().tileLayer.elevationWMS=function(t,e,r,n){return new(m().TileLayer.ElevationWMS)(t,e,r,n)};var T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).reduce((function(e,r){return g()(t[r])?e:p()(e,P({},r,t[r]))}),{})};function j(t){var e=void 0!==t.opacity?t.opacity:1,r=(0,s.v)(t),n=p()({},t.baseParams,{attribution:t.credits&&(0,x.go)(t.credits),layers:t.name,styles:t.style||"",format:((0,w.z)(t.format)?"image/png":t.format)||"image/png",transparent:void 0===t.transparent||t.transparent,tiled:void 0===t.tiled||t.tiled,opacity:e,zIndex:t.zIndex,version:t.version||"1.3.0",tileSize:t.tileSize||256,maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},p()(t._v_?{_v_:t._v_}:{},r||{}));return(0,b.addAuthenticationToSLD)(n,t)}function L(t){return t.map((function(t){return t.split("?")[0]}))}l().registerType("wms",{create:function(t){var e=L(v()(t.url)?t.url:[t.url]),r=T(j(t)||{});return e.forEach((function(e){return(0,b.addAuthenticationParameter)(e,r,t.securityToken)})),t.useForElevation?m().tileLayer.elevationWMS(e,r,t.nodata||-9999,t.littleendian||!1):t.singleTile?m().nonTiledLayer.wmsCustom(e[0],r):m().tileLayer.multipleUrlWMS(e,r)},update:function(t,e,r){if(r.singleTile!==e.singleTile||r.tileSize!==e.tileSize||r.securityToken!==e.securityToken&&e.visibility){var n=L(v()(e.url)?e.url:[e.url]),i=j(e)||{};return n.forEach((function(t){return(0,b.addAuthenticationParameter)(t,i,e.securityToken)})),e.singleTile?m().nonTiledLayer.wmsCustom(n[0],i):m().tileLayer.multipleUrlWMS(n,i)}var o=p()({},c().filterWMSParamOptions(j(r)),(0,b.addAuthenticationToSLD)(r.params||{},r)),a=p()({},c().filterWMSParamOptions(j(e)),(0,b.addAuthenticationToSLD)(e.params||{},e)),l=Object.keys(a).filter((function(t){return a[t]!==o[t]})),s=Object.keys(o).filter((function(t){return o[t]!==a[t]})),u={};return s.length>0&&t.removeParams(s,l.length>0),l.length>0&&(u=l.reduce((function(t,e){return p()({},t,P({},e,a[e]))}),u),t.setParams(T(p()(u,u.params,(0,b.addAuthenticationToSLD)(e.params||{},e))))),null}})},485365:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(986267),a=r(556307),l=r.n(a),s=r(727418),u=r.n(s),c=r(233044),f=r(624262),m=r(707294),y=r(552259),p=r(91175),d=r.n(p),v=r(281763),h=r.n(v);function g(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const S=l().TileLayer.extend({defaultWmtsParams:{service:"WMTS",request:"GetTile",version:"1.3.0",layer:"",style:"",tileMatrixSet:"",format:"image/jpeg"},initialize:function(t,e,r){this._url=t[0],this._urls=t,this._urlsIndex=0;var n=l().extend({},this.defaultWmtsParams),i=e.tileSize||this.options.tileSize;for(var o in e.detectRetina&&l().Browser.retina?n.width=n.height=2*i:n.width=n.height=i,e)this.options.hasOwnProperty(o)||"crs"===o||"attribution"===o||(n[o]=e[o]);this.wmtsParams=n,this.matrixIds=r.matrixIds&&this.getMatrix(r.matrixIds,r)||this.getDefaultMatrix(r),this.matrixSet=r.matrixSet&&r.matrixSet.TileMatrix||[],this.ignoreErrors=r.ignoreErrors||!1,l().setOptions(this,e)},getWMTSParams:function(t,e,r,n,i){var a=(0,y.getScales)()[r],l=d()(t.map((function(e,r){if(r===t.length-1)return null;var n=parseFloat(e.ScaleDenominator),i=parseFloat(t[r+1].ScaleDenominator);return n>=a&&i<a?a-i>(n-i)/2?{id:r,data:e}:{id:r+1,data:t[r+1]}:null})).filter((function(t){return t}))),s=l&&h()(l.id)&&l.id+""||0===t.length&&r||null;if(!e[s])return null;var u=e[s].identifier,c=l.data&&l.data.TopLeftCorner&&(0,o.parseString)(l.data.TopLeftCorner)||e[s].topLeftCorner,f=c.lng||c.x,m=c.lat||c.y,p=Math.round((n.x-f)/i),v=-Math.round((n.y-m)/i),g=l.data&&l.data.MatrixWidth&&l.data.MatrixHeight&&{cols:{min:0,max:l.data.MatrixWidth-1},rows:{min:0,max:l.data.MatrixHeight-1}},b=e[s].ranges||g;return b&&!function(t,e,r){return!(t<r.cols.min||t>r.cols.max||e<r.rows.min||e>r.rows.max)}(p,v,b)?null:{ident:u,tilecol:p,tilerow:v}},getTileUrl:function(t){var e=this._map,r=e.options.crs,n=this.options.tileSize,i=t.multiplyBy(n);i.x+=1,i.y-=1;var o=i.add([n,n]),a=r.project(e.unproject(i,t.z)),s=r.project(e.unproject(o,t.z)).x-a.x,u=this.getWMTSParams(g(this.matrixSet),g(this.matrixIds),t.z,a,s);if(!u)return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);var c=l().Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t),TileRow:u.tilerow,TileCol:u.tilecol,TileMatrixSet:this.options.tileMatrixSet,TileMatrix:u.ident,Style:this.options.style});return"RESTful"===this.options.requestEncoding?c:c+l().Util.getParamString(this.wmtsParams,c,!0)+"&tilematrix="+u.ident+"&tilerow="+u.tilerow+"&tilecol="+u.tilecol},getMatrix:function(t,e){return t.map((function(t){return{identifier:t.identifier,topLeftCorner:new(l().LatLng)(e.originY,e.originX),ranges:t.ranges||null}}))},getDefaultMatrix:function(t){for(var e=new Array(22),r=0;r<22;r++)e[r]={identifier:t.tileMatrixPrefix+r,topLeftCorner:new(l().LatLng)(t.originY,t.originX)};return e},onError:function(){return!this.ignoreErrors}});var x=r(701469),w=r.n(x),O=r(333358);l().tileLayer.wmts=function(t,e,r){return new S(t,e,r)};var P=function(t){var e=function(t){return t.map((function(t){return t.split("?")[0]}))}(w()(t.url)?t.url:[t.url]),r=function(t){var e=(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),r=t.credits&&(0,f.go)(t.credits)||"",n=m.C2(t.tileMatrixSet,e,t.allowedSRS,t.matrixIds);return u()({requestEncoding:t.requestEncoding,layer:t.name,style:t.style||"",attribution:r,format:((0,O.z)(t.format)?"image/png":t.format)||"image/png",tileMatrixSet:n,version:t.version||"1.0.0",tileSize:t.tileSize||256,CRS:(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},t.params||{})}(t)||{};e.forEach((function(e){return(0,c.addAuthenticationParameter)(e,r,t.securityToken)}));var n=(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),i=m.h7(t,n),a=i.tileMatrixSet,s=i.matrixIds;return l().tileLayer.wmts(e,r,{tileMatrixPrefix:t.tileMatrixPrefix||r.tileMatrixSet+":"||n+":",originY:t.originY||20037508.3428,originX:t.originX||-20037508.3428,ignoreErrors:t.ignoreErrors||!1,matrixIds:s,matrixSet:a})};i().registerType("wmts",{create:P,update:function(t,e,r){return r.securityToken!==e.securityToken||r.format!==e.format||r.credits!==e.credits?P(e):null}})},935701:(t,e,r)=>{t.exports={BingLayer:r(761444),Commons:r(951735),GraticuleLayer:r(790671),GoogleLayer:r(826696),MapQuest:r(352031),OSMLayer:r(151254),TMSLayer:r(135659),TileProviderLayer:r(70826),WFSLayer:r(622946).default,WMSLayer:r(136366),WMTSLayer:r(485365),VectorLayer:r(510733)}},357167:t=>{t.exports=window.MQ},503901:(t,e,r)=>{"use strict";r.d(e,{qR:()=>c,yQ:()=>f});var n=r(375875),i=r.n(n),o=r(581399),a=r.n(o),l=r(882702),s=new(a())(100),u=function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-9999,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n*t+r;try{var l=e.dataView.getInt16(2*a,o);if(l!==i&&32767!==l&&-32768!==l)return l}catch(t){}return null},c=function(t,e,r){return s.has(r)?null:new l.Promise((function(n,o){i().get(t,{responseType:"arraybuffer"}).then((function(t){!function(t,e,r){s.set(r,{data:t,dataView:new DataView(t),coords:e,current:!0,status:"success"})}(t.data,e,r),n()})).catch((function(t){!function(t,e,r){s.set(r,{coords:e,current:!0,status:"error: "+t})}(t.message,e,r),o(t)}))}))},f=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-9999,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=s.get(t);return o&&"success"===o.status?{available:!0,value:u(r,o,e.x,e.y,n,i)}:o&&"loading"===o.status?{available:!1,message:"elevationLoading"}:o&&"error"===o.status?{available:!1,message:"elevationLoadingError"}:{available:!1,message:"elevationNotAvailable"}}},333358:(t,e,r)=>{"use strict";r.d(e,{z:()=>i});var n=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],i=function(t){return-1!==n.indexOf(t)}},73785:(t,e,r)=>{var n=r(727418),i={PARAM_OPTIONS:["layers","styles","format","transparent","version","tiled","zindex","_v_","cql_filter","sld"],wmsToLeafletOptions:function(t){var e=void 0!==t.opacity?t.opacity:1;return n({layers:t.name,styles:t.style||"",format:t.format||"image/png",transparent:void 0===t.transparent||t.transparent,tiled:void 0===t.tiled||t.tiled,opacity:e},t.params||{})},getWMSURL:function(t){return t.split("?")[0]},filterWMSParamOptions:function(t){var e={};return Object.keys(t).forEach((function(r){r&&r.toLowerCase&&i.PARAM_OPTIONS.indexOf(r.toLowerCase())>=0&&(e[r]=t[r])})),e}};t.exports=i}}]);
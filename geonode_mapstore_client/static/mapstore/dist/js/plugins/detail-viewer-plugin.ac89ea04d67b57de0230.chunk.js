(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[95121,4133],{217549:(e,r,n)=>{"use strict";n.d(r,{Z:()=>c});var t=n(124852),o=n.n(t),i=n(675263),a=n.n(i),u=["href","readOnly","children"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function s(e){var r=e.href,n=e.readOnly,t=e.children,i=function(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u);return n?t:o().createElement("a",l({href:r},i),t)}s.propTypes={href:a().string,readOnly:a().bool.isRequired,children:a().any},s.defaultProps={href:"",readOnly:!1};const c=s},834065:(e,r,n)=>{"use strict";n.d(r,{Z:()=>d});var t=n(124852),o=n.n(t),i=n(675263),a=n.n(i),u=n(877593),l=n(217549),s=["resource","readOnly","formatHref","pathname"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},c.apply(this,arguments)}function f(e){var r,n,t,i=e.resource,a=e.readOnly,f=e.formatHref,d=e.pathname,p=function(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s);return p.detailsPanel?o().createElement(l.Z,{readOnly:a,href:f({pathname:d,query:{"filter{owner.username.in}":null===(t=i.owner)||void 0===t?void 0:t.username}})},i.owner&&(0,u.vW)(i.owner)):o().createElement("p",c({className:"card-text gn-card-user"},p),(null===(r=i.owner)||void 0===r?void 0:r.avatar)&&o().createElement("img",{src:i.owner.avatar,alt:(0,u.vW)(i.owner),className:"gn-card-author-image"}),o().createElement(l.Z,{readOnly:a,href:f({pathname:d,query:{"filter{owner.username.in}":null===(n=i.owner)||void 0===n?void 0:n.username}})},i.owner&&(0,u.vW)(i.owner)))}f.propTypes={resource:a().object,readOnly:a().bool,formatHref:a().func,props:a().any},f.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const d=f},71268:(e,r,n)=>{"use strict";n.d(r,{Z:()=>v});var t=n(124852),o=n.n(t),i=n(805346),a=n(675263),u=n.n(a),l=n(507412),s=n(815135),c=n(441609),f=n.n(c),d=n(535721),p=n(303744),m=(0,s.Z)(p.Z),b=function(e){var r,n,t,a=e.resource,u=void 0===a?{}:a,s=(0,d.fu)(u),c=s.isApproved,p=s.isPublished,b=s.isProcessing,v=s.isCopying,y=s.isDeleting,g=s.isDeleted;return f()(u)?null:o().createElement("p",{className:"gn-resource-status-text"},!b&&(!c||!p)&&o().createElement(m,{variant:"default",className:"gn-resource-status gn-status-button",tooltip:(r={isApproved:c,isPublished:p},n=r.isApproved,t=r.isPublished,!n&&t?o().createElement(i.Z,{msgId:"gnhome.pendingApproval"}):n||t?t||n?"":o().createElement(i.Z,{msgId:"gnhome.unpublished"}):o().createElement(i.Z,{msgId:"gnhome.unApprovedunPublished"})),style:{marginRight:(y||g||v)&&"0.4rem"},tooltipPosition:"top"},o().createElement(l.Z,{name:"info-circle",className:"gn-resource-status-pending"})),y&&o().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},o().createElement(i.Z,{msgId:"gnviewer.deleting"})),g&&o().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},o().createElement(i.Z,{msgId:"gnviewer.deleted"})),v&&o().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},o().createElement(i.Z,{msgId:"gnviewer.cloning"})))};b.propTypes={isApproved:u().bool,isPublished:u().bool},b.defaultProps={isApproved:!0,isPublished:!0};const v=b},94228:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>D});var t=n(124852),o=n.n(t),i=n(322843),a=n(171703),u=n(22222),l=n(737275),s=n(899004),c=n(274621),f=n(643892),d=n(452992),p=n(17594),m=n(925108),b=n(782904),v=n(572036),y=n(76907),g=n(303744);var h=n(100824),O=n(625635),w=n(877593),P=n(805346),j=n(675110),E=n(800827),S=n(535721),C=n(770058);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function A(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function T(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==Z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!==Z(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Z(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var k=(0,a.connect)((0,u.P1)([function(e){var r;return(null==e||null===(r=e.gnresource)||void 0===r?void 0:r.data)||null},function(e){var r;return(null==e||null===(r=e.gnresource)||void 0===r?void 0:r.loading)||!1},function(e){var r,n;return(null==e||null===(r=e.gnresource)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.favorite)||!1},function(e){var r;return(null==e||null===(r=e.gnsave)||void 0===r?void 0:r.savingThumbnailMap)||!1},j.l2,y.km,y.Bs,E.Od,function(e){var r;return(null==e||null===(r=e.gnresource)||void 0===r?void 0:r.showMapThumbnail)||!1},d.WB],(function(e,r,n,t,o,i,a,u,l,s){return{layers:o,resource:e,loading:r,savingThumbnailMap:t,favorite:n,isThumbnailChanged:i,resourceThumbnailUpdating:a,initialBbox:null==u?void 0:u.bbox,enableMapViewer:l,downloading:s,canDownload:(0,S.sH)(e,"download_resourcebase"),resourceId:e.pk}})),{closePanel:b.Xg.bind(null,"rightOverlay","enabled",!1),onFavorite:f.gw,onMapThumbnail:f.CB,onResourceThumbnail:f.e5,onClose:f.qs,onAction:f.Rk})(s.Z),x=(0,a.connect)((0,u.P1)([y.V$,y.fg],(function(e,r){return{hide:e||!r}})),{onClick:b.Xg.bind(null,"rightOverlay","enabled","DetailViewer")})((function(e){var r=e.onClick,n=e.hide,t=e.variant,i=e.size,a=e.showMessage;return n?null:o().createElement(g.Z,{variant:t,size:i,onClick:function(){r()}},a?o().createElement(P.Z,{msgId:"gnviewer.editInfo"}):o().createElement(p.Z,{name:"info-circle"}))})),I=(0,a.connect)((0,u.P1)([function(e){var r,n;return"DetailViewer"===(null==e||null===(r=e.controls)||void 0===r||null===(n=r.rightOverlay)||void 0===n?void 0:n.enabled)},y.il,y.V$,y.fg,c.np,function(e){return(0,i.bh)(e,(0,l.u8)("monitorState"))}],(function(e,r,n,t,o,i){return{enabled:e,canEdit:r,hide:n||!t,user:o,monitoredState:i}})),{onEditResource:f.Br,onEditAbstractResource:f.bI,onEditThumbnail:f.U5,onClose:b.Xg.bind(null,"rightOverlay","enabled",!1)})((0,O.EN)((function(e){var r=e.location,n=e.enabled,i=e.onEditResource,a=e.onEditAbstractResource,u=e.onEditThumbnail,l=e.canEdit,s=e.hide,c=e.user,f=e.onClose,d=e.monitoredState,p=e.queryPathname,m=void 0===p?"/":p,b=e.tabs,v=void 0===b?[]:b,y=(0,C._y)(d,{tabs:v}),g=function(e){var r=e.disabled,n=e.onClickOut,o=(0,t.useRef)();return(0,t.useEffect)((function(){function e(e){var t;!r&&(null==o||null===(t=o.current)||void 0===t?void 0:t.contains)&&!o.current.contains(e.target)&&n()}return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}),[r,o,n]),o}({disabled:!n,onClickOut:function(){f()}});return s?null:o().createElement(h.Z,{enabled:n,ref:g,className:"gn-overlay-wrapper"},o().createElement(k,{editTitle:function(e){i(e)},editAbstract:function(e){a(e)},editThumbnail:function(e){u(e,!0)},activeEditMode:n&&l,enableFavorite:!!c,formatHref:function(e){return(0,w.nz)(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?A(Object(n),!0).forEach((function(r){T(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({location:r},e))},tabs:y.tabs,pathname:m}))})));const D=(0,i.rx)("DetailViewer",{component:I,containers:{ActionNavbar:{name:"DetailViewerButton",Component:x}},epics:{},reducers:{gnresource:v.Z,controls:m.Z}})},572036:(e,r,n)=>{"use strict";n.d(r,{Z:()=>y});var t=n(618446),o=n.n(t),i=n(643892),a=n(535721),u=["data"],l=["features"],s=["features"],c=["features"];function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){b(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function b(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!==f(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var v={selectedLayerPermissions:[],data:{},permissions:[]};const y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case i.$X:return v;case i.ql:return m(m({},e),{},{configError:void 0,loadingResourceConfig:r.loading});case i.nS:return m(m({},e),{},{loading:!1,configError:r.message});case i.W:return m(m({},e),{},{loading:!0});case i.Zf:var n=r.data||{},t=(n.data,d(n,u));return m(m({},e),{},{error:null,initialResource:m({},r.data),data:t,loading:!1,isNew:!1});case i.Eu:return m(m({},e),{},{initialResource:null,data:null,error:r.error,loading:!1});case i.Vy:return m(m({},e),{},{data:m(m({},e.data),r.properties)});case i.YB:return m(m({},e),{},{type:r.resourceType});case i.xm:return m(m({},v),{},{isNew:!0});case i._f:return m(m({},e),{},{id:r.id});case i.ek:return m(m({},e),{},{permissions:r.permissions});case i.cd:return m(m({},e),{},{data:m(m({},null==e?void 0:e.data),{},{title:null==r?void 0:r.title,name:null==r?void 0:r.title})});case i.pt:return m(m({},e),{},{data:m(m({},null==e?void 0:e.data),{},{abstract:null==r?void 0:r.abstract})});case i.ww:return m(m({},e),{},{data:m(m({},null==e?void 0:e.data),{},{thumbnail_url:null==r?void 0:r.thumbnailUrl,thumbnailChanged:null==r?void 0:r.thumbnailChanged})});case i._Z:return m(m({},e),{},{data:m(m({},null==e?void 0:e.data),{},{updatingThumbnail:!0})});case i.dh:return m(m({},e),{},{showMapThumbnail:r.enabled});case i.p2:return m(m({},e),{},{selectedLayerPermissions:r.permissions});case i.ih:return m(m({},e),{},{initialCompactPermissions:r.compactPermissions,compactPermissions:r.compactPermissions,isCompactPermissionsChanged:!1,geoLimits:[]});case i.J5:return m(m({},e),{},{compactPermissions:r.compactPermissions,isCompactPermissionsChanged:!o()((0,a.go)(e.initialCompactPermissions),(0,a.go)(r.compactPermissions)),geoLimits:(0,a.vB)(r.compactPermissions)});case i.uA:if(e.compactPermissions){var f=e.compactPermissions,p=f.users,b=f.organizations,y=f.groups;return m(m({},e),{},{compactPermissions:{users:p.map((function(e){return e.features,d(e,l)})),organizations:b.map((function(e){return e.features,d(e,s)})),groups:y.map((function(e){return e.features,d(e,c)}))},geoLimits:[]})}return e;default:return e}}},770058:(e,r,n)=>{"use strict";n.d(r,{gj:()=>d,QH:()=>m,mk:()=>b,BK:()=>v,bH:()=>y,_y:()=>g});var t=n(227361),o=n.n(t),i=n(414293),a=n.n(i),u=n(322843),l=n(368523);function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i,a,u=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;l=!1}else for(;!(l=(t=i.call(n)).done)&&(u.push(t.value),u.length!==r);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,r)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,r,n){var t=r?r.filter((function(e){return e.type===n})):void 0;return void 0===t||t&&0===t.length||t&&t.some((function(r){return e&&e.includes(null==r?void 0:r.value)}))}function p(e,r){return 0===(null==r?void 0:r.indexOf("${"))?o()(e,r.replace(/^\$\{(.*)\}$/,"$1")):r}function m(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",t=r.split(n),o=t.map((function(r){return p(e,r)}));return o.join(n)}var b=function(e){return!(""===e||a()(e))},v=function(e){return function r(n){return n&&"object"===f(n)?Array.isArray(n)?n.map(r):Object.fromEntries(Object.entries(n).map((function(e){var n=s(e,2),t=n[0],o=n[1];return[t,r(o)]}))):e(n)}},y=function e(r,n){return r&&r.reduce((function(r,t){var o=t;return Object.entries(t).forEach((function(r){var i=s(r,2),a=i[0],u=i[1];Array.isArray(u)&&(o[a]=e(t[a],n))})),n(o)&&r.push(o),r}),[])},g=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=n.filterFunc,i=void 0===t?function(e){return!e.disableIf}:t,a=y([v((function(r){return(0,u.CU)((function(r){return o()(e,r)}),(0,l.z)(),r)}))(r)],i),c=s(a,1),f=c[0];return f}},580760:(e,r,n)=>{var t=n(989881);e.exports=function(e,r){var n=[];return t(e,(function(e,t,o){r(e,t,o)&&n.push(e)})),n}},389179:(e,r,n)=>{var t=n(555639),o=n(640554),i=n(14841),a=n(479833),u=t.isFinite,l=Math.min;e.exports=function(e){var r=Math[e];return function(e,n){if(e=i(e),(n=null==n?0:l(o(n),292))&&u(e)){var t=(a(e)+"e").split("e"),s=r(t[0]+"e"+(+t[1]+n));return+((t=(a(s)+"e").split("e"))[0]+"e"+(+t[1]-n))}return r(e)}}},763105:(e,r,n)=>{var t=n(234963),o=n(580760),i=n(267206),a=n(701469);e.exports=function(e,r){return(a(e)?t:o)(e,i(r,3))}},313880:(e,r,n)=>{var t=n(479833);e.exports=function(){var e=arguments,r=t(e[0]);return e.length<3?r:r.replace(e[1],e[2])}},59854:(e,r,n)=>{var t=n(389179)("round");e.exports=t}}]);
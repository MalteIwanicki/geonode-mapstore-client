(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1601],{48384:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var o=n(67294),r=n.n(o),a=n(45697),s=n.n(a);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function p(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d,m,g,j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(i,e);var t,n,o,a,s=(o=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(o);if(a){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function i(){return c(this,i),s.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props.item;return e.pagination?r().createElement("span",null,e[this.props.textField]," ",e.pagination," "):r().createElement("span",null,e[this.props.textField])}}])&&l(t.prototype,n),i}(r().Component);d=j,m="propTypes",g={item:s().object,textField:s().string,valueField:s().string},m in d?Object.defineProperty(d,m,{value:g,enumerable:!0,configurable:!0,writable:!0}):d[m]=g;const b=j},49902:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var o=n(45697),r=n.n(o),a=n(67294),s=n.n(a),i=n(20),c=n(80681),l=n(86638),u=n(50966),p=n(48384);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d.apply(this,arguments)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function b(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(p,e);var t,n,o,r,a=(o=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(r){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function p(){var e;m(this,p);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return h(v(e=a.call.apply(a,[this].concat(n))),"renderWithTooltip",(function(t){if(e.props.tooltip.customizedTooltip){var n=e.props.tooltip.customizedTooltip;return s().createElement(n,null,t)}var o=s().createElement(c.Tooltip,{id:e.props.tooltip.id},e.props.tooltip.message);return s().createElement(u.Z,{key:e.props.tooltip.overlayTriggerKey,placement:e.props.tooltip.placement,overlay:o},t)})),h(v(e),"renderPagination",(function(){var t=e.props.pagination.firstPage,n=e.props.pagination.lastPage;return s().createElement("div",{className:"autocomplete-toolbar"},!t&&s().createElement(c.Glyphicon,{className:e.props.prevPageIcon,glyph:e.props.prevPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadPrevPage()}}),!n&&s().createElement(c.Glyphicon,{className:e.props.nextPageIcon,glyph:e.props.nextPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadNextPage()}}))})),h(v(e),"renderField",(function(){var t,n={emptyList:(0,l.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyList"),open:(0,l.S$)(e.context.messages,"queryform.attributefilter.autocomplete.open"),emptyFilter:(0,l.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyFilter")},o=[];e.props.data&&e.props.data.length>0&&(o=e.props.data.map((function(e){return e}))),e.props.pagination&&e.props.pagination.paginated&&o.length>0&&o.push((h(t={},e.props.textField,""),h(t,e.props.valueField,""),h(t,"disabled",!0),h(t,"pagination",e.renderPagination()),t));var r=e.props.loading?[]:o,a=e.props.itemComponent,c=s().createElement(i.Combobox,{placeholder:e.props.placeholder,dropUp:e.props.dropUp,busy:e.props.busy,data:r,disabled:e.props.disabled,itemComponent:function(t){return s().createElement(a,d({textField:e.props.textField,valueField:e.props.valueField},t))},messages:e.props.messages||n,open:e.props.open,filter:e.props.filter,onChange:function(t){return e.props.onChange(t)},onFocus:function(){return e.props.onFocus(e.props.data)},onSelect:function(t){return e.props.onSelect(t)},onToggle:function(t){return e.props.onToggle(t)},textField:e.props.textField,valueField:e.props.valueField,value:e.props.selectedValue});return e.props.tooltip&&e.props.tooltip.enabled?e.renderWithTooltip(c):c})),e}return t=p,(n=[{key:"render",value:function(){var e=this.props,t=e.selectedValue,n=e.disabled,o=e.onReset,r=e.label,a=e.clearable,i=r?s().createElement("label",null,r):s().createElement("span",null);return s().createElement("div",{className:"autocompleteField"},i,a?s().createElement("div",{className:"rw-combo-clearable ".concat(n?"disabled":"")},this.renderField(),s().createElement("span",{className:"rw-combo-clear ".concat(t?"":"hidden"),onClick:o},"x")):this.renderField())}}])&&g(t.prototype,n),p}(s().Component);h(w,"propTypes",{busy:r().bool,data:r().array,disabled:r().bool,dropUp:r().bool,itemComponent:r().oneOfType([r().object,r().func]),label:r().string,loading:r().bool,filter:r().oneOfType([r().string,r().bool]),messages:r().object,onChange:r().func,onFocus:r().func,onSelect:r().func,onToggle:r().func,open:r().bool,pagination:r().object,nextPageIcon:r().string,prevPageIcon:r().string,selectedValue:r().string,textField:r().string,tooltip:r().object,valueField:r().string,placeholder:r().string,stopPropagation:r().bool,clearable:r().bool,onReset:r().func}),h(w,"contextTypes",{messages:r().object}),h(w,"defaultProps",{stopPropagation:!1,dropUp:!1,itemComponent:p.Z,loading:!1,label:null,filter:"",pagination:{paginated:!0,firstPage:!1,lastPage:!1,loadPrevPage:function(){},loadNextPage:function(){}},nextPageIcon:"chevron-right",prevPageIcon:"chevron-left",onFocus:function(){},onToggle:function(){},onChange:function(){},onSelect:function(){},onReset:function(){},textField:"label",tooltip:{customizedTooltip:void 0,enabled:!1,id:"",message:void 0,overlayTriggerKey:"",placement:"top"},valueField:"value",clearable:!1});const T=w},43146:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(18093),r=n(47037),a=n.n(r),s=n(47960),i=n.n(s),c=n(5582),l=n.n(c),u=n(55237);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dateTypeProp,n=void 0===t?"type":t,r=e.dateProp,s=void 0===r?"date":r,c=e.setDateProp,f=void 0===c?"onSetDate":c;return(0,o.compose)((0,o.withPropsOnChange)([s],(function(e){var t,o=e[s],r=e[n],c=e.useUTCOffset,f=void 0===c||c,d=o,m="1970-01-01",g="00:00:00";!i()(o)&&a()(o)&&("time"===r&&(d=new Date("".concat(m,"T").concat(o))),"date"===r&&(-1!==o.indexOf("Z")&&(d=o.substr(0,o.length-1)),d=new Date("".concat(d,"T").concat(g,"Z"))),"date-time"===r&&(d=new Date(o)));var j=d;if(d){switch(r){case"time":g=(0,u.kN)(d);break;case"date":m=(0,u.oD)(d);break;default:g=(0,u.kN)(d),m=(0,u.oD)(d)}(j=new Date("".concat(m,"T").concat(g,"Z"))).setUTCMilliseconds(d.getUTCMilliseconds());var b=f?(0,u.$4)(j):0;j=new Date(j.getTime()+b)}return p(t={},s,j),p(t,"defaultCurrentDate","date-time"===r?l()().startOf("day").toDate():void 0),t})),(0,o.withHandlers)(p({},f,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e[f],o=e[n],r=e.useUTCOffset,a=void 0===r||r;return function(e,n){if(e){var r=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())),s=a?(0,u.$4)(e):0,i=new Date(r.getTime()-s);switch(o){case"time":i="".concat((0,u.kN)(i),"Z");break;case"date":i="".concat((0,u.oD)(i),"Z")}t(i,n)}else t(null)}}))))}},55237:(e,t,n)=>{"use strict";n.d(t,{tr:()=>v,jb:()=>y,Xu:()=>h,un:()=>T,Qn:()=>D,_q:()=>P,og:()=>k,$4:()=>O,kN:()=>C,oD:()=>x,V$:()=>F,uH:()=>S});var o=n(47037),r=n.n(o),a=n(47960),s=n.n(a),i=n(27361),c=n.n(i),l=n(84596),u=n.n(l),p=n(5582),f=n.n(p),d=n(86638),m=/PT?[\d\.]+[YMWDHMS]/,g=function(e){return e?r()(e)?new Date(e).getTime():(s()(e)&&e.getTime(),e):null},j=function(e,t){var n=g(t),o=1/0,r=-1;return e.forEach((function(e,t){var a=g(e),s=Math.abs(a-n);s<o&&(o=s,r=t)})),r},b=function(e){var t=e.start,n=e.end,o=e.duration,r=f().duration(o).asMilliseconds();return(new Date(n).getTime()-new Date(t).getTime())/r},v=function(e){for(var t=e.start,n=e.end,o=e.duration,r=f().duration(o).asMilliseconds(),a=[],s=new Date(t),i=new Date(n);s<=i;)a.push(new Date(s).toISOString()),s.setTime(s.getTime()+r);return a},y=function(e){var t=e.start,n=e.end,o=e.duration;return v({start:t,end:n,duration:o}).map((function(e){return{start:new Date(e),end:new Date(new Date(e).getTime()+f().duration(o).asMilliseconds())}}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,n=e.end,o=e.duration,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.start,s=r.end;if(!a||!s)return{count:b({start:t,end:n,duration:o}),start:t,end:n};var i=f().duration(o).asMilliseconds(),c=new Date(t).getTime(),l=new Date(n).getTime(),u=new Date(a).getTime(),p=new Date(s).getTime(),d=Math.ceil((u-c)/i),m=Math.floor((p-c)/i),g=Math.floor((l-c)/i);if(d>=0&&m<=g){var j=m-d;return{start:new Date(c+Math.max(0,d)*i),end:new Date(c+Math.min(g,m)*i),count:j}}return{count:b({start:t,end:n,duration:o}),start:t,end:n}},w=function(e){return e.match(m)[0]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,n=e.end,o=arguments.length>1?arguments[1]:void 0,r=new Date(t),a=new Date(n),s=Math.floor(a.getTime()-r.getTime())/o,i=f().duration(s).toISOString(),c=w(i);return{range:{start:t,end:n},resolution:c}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e[j(e,t)]},P=function(e){return e&&e.indexOf&&e.indexOf("--")>0},k=function(e,t){var n=f()(e).diff(t);return{start:n>=0?t:e,end:n>=0?e:t}},O=function(e){return 6e4*e.getTimezoneOffset()},C=function(e){var t=e;!s()(e)&r()(e)&&(t=new Date(e));var n=t.getUTCHours();n=n<10?"0"+n:n;var o=t.getUTCMinutes();o=o<10?"0"+o:o;var a=t.getUTCSeconds();return a=a<10?"0"+a:a,"".concat(n,":").concat(o,":").concat(a)},x=function(e){var t=e;!s()(e)&r()(e)&&(t=new Date(e));var n=t.getUTCMonth()+1,o=t.getUTCDate();return n=n<10?"0"+n:n,o=o<10?"0"+o:o,"".concat(t.getUTCFullYear(),"-").concat(n,"-").concat(o)},F=function(e,t){var n=(0,d.mh)(e),o="HH:mm:SS";switch(t){case"time":return o;case"date":return n;default:return n+" "+o}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.Domains,n=void 0===t?{}:t,o=arguments.length>1?arguments[1]:void 0,r=u()(n.DimensionDomain||[]).concat(),a=n["@version"]||n.version,s=c()(n,"SpaceDomain.BoundingBox");return s&&r.push({Identifier:"space",Domain:s}),r.map((function(e){var t=e.Identifier,n=e.Domain;return{source:{type:"multidim-extension",version:a,url:o},name:t,domain:n}}))}},46700:(e,t,n)=>{var o={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-nz":76319,"./en-nz.js":76319,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=46700}}]);
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-lupus-paragraph-image",[],t):"object"==typeof exports?exports["vue-lupus-paragraph-image"]=t():e["vue-lupus-paragraph-image"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(5).default)("d3e230d8",r,!1,{})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"PgImage"}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t.default=o.a},function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"paragraph paragraph--image"},[t("div",{staticClass:"image"},[this._t(this.$slots.image?"image":"default"),this._v(" "),t("div",{staticClass:"caption"},[this._t("caption")],2)],2),this._v(" "),t("div",{staticClass:"copyright"},[this._t("copyright")],2)])},o=[];r._withStripped=!0,n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(e,t){return u.call(t),f(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,f=function(){},d=null,l="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,o){c=n,d=o||{};var a=r(e,t);return h(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o];(u=i[s.id]).refs--,n.push(u)}t?h(a=r(e,t)):a=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+l+'~="'+e.id+'"]');if(r){if(c)return f;r.parentNode.removeChild(r)}if(p){var o=u++;r=s||(s=g()),t=_.bind(null,r,o,!1),n=_.bind(null,r,o,!0)}else r=g(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);d.ssrId&&e.setAttribute(l,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"\n.image[data-v-28913744] {\n  position: relative;\n}\n.copyright[data-v-28913744] {\n  color: grey;\n  font-size: 0.8em;\n  font-style: italic;\n  text-align: right;\n}\n.caption[data-v-28913744] {\n  position: absolute;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  width: 100%;\n  padding: 0.5em 1em;\n  font-size: 0.9em;\n}\n",""])},function(e,t,n){"use strict";var r=n(0);n.n(r).a},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(2);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n(8);var a=n(4),s=Object(a.a)(o.default,r.a,r.b,!1,null,"28913744",null);s.options.__file="src/pg-image.vue",t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PgImage=void 0;var r,o=n(9),i=(r=o)&&r.__esModule?r:{default:r};t.PgImage=i.default,t.default=i.default}])});
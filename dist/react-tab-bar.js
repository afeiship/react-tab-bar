!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactTabBar=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactTabBar=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),a=r(o);t.default=a.default},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(11);var p=n(5),d=r(p),h=n(4),b=r(h),m=n(1),v=r(m),y=n(2),g=r(y),E=n(3),_=(r(E),n(9)),x=(c=u=function(e){function t(){var e,n,r,o;a(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r._onChange=function(e){var t=r.props.onChange;t(e)},o=n,i(r,o)}return s(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=(e.template,e.value),r=(e.onChange,o(e,["className","template","value","onChange"]));return d.default.createElement(_.ReactSelectedItems,l({type:"radio"},r,{onChange:this._onChange,className:(0,v.default)("react-tab-bar",t)}),n.map(function(e,t){var n=e.selected,r=e.disabled;return d.default.createElement(_.ReactSelectedItem,{"data-layout":e.type,selected:n,disabled:r,data:e,key:t,className:"react-tab-bar-item"},d.default.createElement("span",{className:"item-icon"},!!e.badge&&d.default.createElement("cite",{className:"item-badge"},e.badge),d.default.createElement("i",{className:e.icon,"data-selected":!!n})),!!e.text&&d.default.createElement("span",{className:"item-text","data-selected":!!n},e.text))}))}}]),t}(p.PureComponent),u.propTypes={className:b.default.string,value:b.default.array,onChange:b.default.func},u.defaultProps={value:[],onChange:g.default},c);t.default=x},function(e,t,n){t=e.exports=n(8)(),t.push([e.id,".react-tab-bar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;text-align:center;border-top:1px solid #eee;border-bottom:1px solid #eee;font-size:10px;height:5em}.react-tab-bar-item[data-layout=inline]{-webkit-box-flex:1;-ms-flex:1;flex:1}.react-tab-bar-item[data-layout=float]{position:relative;top:-2em;padding:1em}.react-tab-bar-item[data-layout=absolute]{position:absolute}.react-tab-bar-item .item-icon{position:relative}.react-tab-bar-item .item-icon .item-badge{position:absolute;top:-1em;right:-1em;height:1.4em;min-width:1.4em;line-height:1.4em;text-align:center;background:red;border-radius:100px;color:#fff;font-size:1em}.react-tab-bar-item .item-text{display:block;font-size:1em}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){!function(t,r){e.exports=r(n(5),n(1),n(3),n(4),n(2))}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(7),a=r(o),i=n(6),s=r(i),u=n(2);e.exports={ReactSelectedItems:a.default,ReactSelectedItem:s.default,SELECTED_KEY:u.SELECTED_KEY}},function(t,n){t.exports=e},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SELECTED_KEY="selected"},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(5),p=r(f),d=n(3),h=r(d),b=n(1),m=n(4),v=r(m),y=(c=u=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"render",value:function(){return this.children}},{key:"children",get:function(){var e=this.props,t=e.nodeName,n=e.className,r=e.selected,a=(e.data,o(e,["nodeName","className","selected","data"])),i=(0,h.default)("react-selected-item",n),s=(0,v.default)({className:i,"data-selected":r},a);return(0,b.createElement)(t,s)}}]),t}(e.PureComponent),u.propTypes={nodeName:p.default.string,selected:p.default.bool},u.defaultProps={nodeName:"div",selected:!1},c);t.default=y}).call(t,n(1))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,l,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),h=r(d),b=n(5),m=r(b),v=n(2),y=n(3),g=r(y),E=n(8),_=r(E),x=n(4),O=r(x),j=(l=c=function(e){function t(e){i(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={items:n.getItems(e)},n}return u(t,e),p(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&this.setState({items:this.getItems(e)})}},{key:"radio",value:function(e){var t=this.state.items;t.forEach(function(t){e===t?e[v.SELECTED_KEY]=!0:t[v.SELECTED_KEY]=!1}),this.__updateItems(t)}},{key:"checkbox",value:function(e){var t=this.state.items;e[v.SELECTED_KEY]=!e[v.SELECTED_KEY],this.__updateItems(t)}},{key:"toggle",value:function(e){var t=this.state.items;t.forEach(function(t){t===e?t[v.SELECTED_KEY]=!t[v.SELECTED_KEY]:t[v.SELECTED_KEY]=!1}),this.__updateItems(t)}},{key:"getItems",value:function(e){return d.Children.map(e.children,function(e){return f({},e.props)})}},{key:"_onClick",value:function(e){this[this.props.type](e)}},{key:"__getData",value:function(e){return e.map(function(e){return(0,O.default)(e.data,a({},v.SELECTED_KEY,e[v.SELECTED_KEY]))})}},{key:"__updateItems",value:function(e){var t=this,n=this.props.onChange,r=e.slice(0);this.setState({items:r},function(){n({target:{value:t.__getData(r)}})})}},{key:"render",value:function(){var e=this.props,t=e.className,n=o(e,["className"]);return h.default.createElement("div",f({},n,{className:(0,g.default)("react-active-items",t)}),this.children)}},{key:"children",get:function(){var e=this,t=this.state.items;return t.map(function(t,n){return t.onClick=e._onClick.bind(e,t),(0,d.cloneElement)(e.props.children[n],t)})}}]),t}(d.PureComponent),c.propTypes={className:m.default.string,onChange:m.default.func,type:m.default.oneOf(["toggle","radio","checkbox"])},c.defaultProps={value:[],onChange:_.default,type:"toggle"},l);t.default=j},function(e,t){e.exports=o}])})},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(c(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(c(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],s=o[2],u=o[3],c={css:i,media:s,sourceMap:u};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=m(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var a=y++;n=v||(v=s(t)),r=l.bind(null,n,a,!1),o=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],u=d[s.id];u.refs--,a.push(u)}if(e){var c=o(e);r(c,t)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete d[u.id]}}}};var E=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.id,r,""]]);n(10)(r,{});r.locals&&(e.exports=r.locals)}])});
//# sourceMappingURL=react-tab-bar.js.map
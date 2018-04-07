webpackJsonp([35783957827783],{127:function(e,t,n){var o,r;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var i in o)a.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()},96:function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=g.hasOwnProperty(t)?g[t]:null;N.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(u)&&v.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==u){var s=n[i],c=o.hasOwnProperty(i);if(r(c,i),v.hasOwnProperty(i))v[i](e,s);else{var p=g.hasOwnProperty(i),h="function"==typeof s,m=h&&!p&&!c&&n.autobind!==!1;if(m)a.push(i,s),o[i]=s;else if(c){var y=g[i];l(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?o[i]=f(o[i],s):"DEFINE_MANY"===y&&(o[i]=d(o[i],s))}else o[i]=s}}}else;}function c(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in v;l(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var i=b.hasOwnProperty(n)?b[n]:null;return l("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],o))}e[n]=o}}}function p(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function h(e,t){var n=t.bind(e);return n}function m(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=h(e,r)}}function y(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&m(this),this.props=e,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;l("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new D,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],E.forEach(a.bind(null,t)),a(t,w),a(t,e),a(t,_),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in g)t.prototype[r]||(t.prototype[r]=null);return t}var E=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},w={componentDidMount:function(){this.__isMounted=!0}},_={componentWillUnmount:function(){this.__isMounted=!1}},N={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},D=function(){};return i(D.prototype,e.prototype,N),y}var a,i=n(5),s=n(34),l=n(1),u="mixins";a={},e.exports=r},159:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,o=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,s=i&&i(Object);return function l(u,c,p){if("string"!=typeof c){if(s){var f=i(c);f&&f!==s&&l(u,f,p)}var d=o(c);r&&(d=d.concat(r(c)));for(var h=0;h<d.length;++h){var m=d[h];if(!(e[m]||t[m]||p&&p[m])){var y=a(c,m);try{n(u,m,y)}catch(e){}}}return u}return u}})},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,s,l=n(e),u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var c in o)a.call(o,c)&&(l[c]=o[c]);if(r){s=r(o);for(var p=0;p<s.length;p++)i.call(o,s[p])&&(l[s[p]]=o[s[p]])}}return l}},200:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),l=o(s),u=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.openForm=function(){o.setState({open:!0})},o.state={open:n.open||!1},o}return i(t,e),t.prototype.render=function(){return this.state.open?l.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfK0YhISrvLDa2tNgewMw4wQEfzynVQSNQHa7hfxU2sz2uAew/viewform?embedded=true",width:"760",height:"1400",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading..."):this.props.renderClosed({onOpen:this.openForm})},t}(l.Component);t.default=u,e.exports=t.default},295:function(e,t){},201:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(2),s=o(i),l=n(127),u=o(l);n(295),t.default=function(e){var t=e.children,n=e.onClick,o=e.border,i=r(e,["children","onClick","border"]);return s.default.createElement("span",a({className:(0,u.default)("button",o&&"border"),onClick:n},i),t)},e.exports=t.default},296:function(e,t){},202:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),a=o(r),i=n(127),s=o(i);n(296);var l=function(e){var t=e.bg,n=e.fill,o=e.transparent,r=e.footer,i=e.children,l=e.masthead,u=(0,s.default)("content-row","alt"===t&&"content-row--altbg","alt2"===t&&"content-row--altbg2",n&&"content-row--fill",r&&"content-row--footer",o&&"content-row--transparent",l&&"content-row--masthead");return a.default.createElement("div",{className:u},i)};t.default=l,e.exports=t.default},204:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),a=o(r);n(297),t.default=function(){return a.default.createElement("div",{className:"scroll-icon"})},e.exports=t.default},297:function(e,t){},207:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),a=o(r),i=n(155),s=(o(i),n(201)),l=(o(s),n(202)),u=o(l),c=n(200),p=(o(c),n(204)),f=o(p),d=function(){return a.default.createElement("div",null,a.default.createElement(u.default,{masthead:!0},a.default.createElement("h1",null,"LUXFACTOR 2018"),a.default.createElement("h2",null,"13.04.2018"),a.default.createElement("h2",null,"19:00-21:30"),a.default.createElement(f.default,null)),a.default.createElement("div",{className:"main-content"},a.default.createElement(u.default,{bg:"alt"},"For the sixth year in a row, the yearly talent show LUXFACTOR will take place in the European School Luxembourg 1 Kirchberg! Students are welcome to participate either as performers, showing the school their talents, or spectators, voting on the best talent. At the end of the show, the performer with the most votes will win a prize."),a.default.createElement(u.default,{fill:!0},a.default.createElement("p",null,"Any student can participate with any act! (As long as it doesn't involve fire.) You can sing, dance, play an instrument, do magic, solve a Rubik's Cube, make bird noises while dressed as a pineapple... (Yes, people have done all that in previous years.)"),a.default.createElement("p",null,a.default.createElement("small",null,"(and we promise Marks Polakovs won't be there to judge you)")),a.default.createElement("a",{className:"button border",href:"https://docs.google.com/forms/d/e/1FAIpQLSfK0YhISrvLDa2tNgewMw4wQEfzynVQSNQHa7hfxU2sz2uAew/viewform?usp=sf_link",onClick:function(){window.fbq&&window.fbq("track","CompleteRegistration"),window.ga&&window.ga("send","event","signup","click")}},"Apply to participate")),a.default.createElement(u.default,null,a.default.createElement("strong",null,"Prizes:")," €150, €100, €50"),a.default.createElement(u.default,{fill:!0},a.default.createElement("strong",null,"Hosts:")," To be announced :)",a.default.createElement("br",null),a.default.createElement("strong",null,"Jury:")," To be announced :)"),a.default.createElement(u.default,{bg:"alt"},"We'll announce details of ticket sales soon. Keep watching this website for details!"),a.default.createElement(u.default,{footer:!0},a.default.createElement("small",null,"Copyright 2018 © Pupils' Committee ESL 1. All rights reserved. Photos by Frederic Payet."))))};t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-7cfda4e9bdc975062e39.js.map
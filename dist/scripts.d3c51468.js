parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vjt7":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.navTabs=void 0;var a=document.querySelector("body"),c=document.querySelectorAll(".article"),s=a.querySelectorAll("[name]"),u=document.querySelector(".navigation__menu__burger"),l=document.querySelectorAll(".navigation__menu__burger--item"),d=document.querySelector(".navigation__menu--input"),f=function(){console.log(d.checked),window.innerWidth<768&&(d.checked?(l[0].classList.remove("burger__open__item--one"),l[2].classList.remove("burger__open__item--two")):(l[0].classList.add("burger__open__item--one"),l[2].classList.add("burger__open__item--two")))},m=function(){window.innerWidth<768&&(f(),d.checked=!1)};u.addEventListener("click",f),s.forEach(function(e){return e.addEventListener("click",m)});var _=e(c),v=function(e){var t=e+window.innerHeight,n="".concat(s.length-1),r=_.filter(function(t){var n=t.offsetTop-t.offsetHeight/2,r=t.offsetTop+t.offsetHeight/2;return e>=n&&e<=r});t>a.offsetHeight-50?(s.forEach(function(e){return e.classList.remove("navigation--tabs")}),s[n].classList.add("navigation--tabs")):s.forEach(function(e){return r.length&&r[0].id===e.name?e.classList.add("navigation--tabs"):e.classList.remove("navigation--tabs")})};exports.navTabs=v;
},{}],"SSB3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.slideArticleTitles=exports.scrollDisplayCard=void 0;var e=document.querySelectorAll(".education__content__card"),t=document.querySelectorAll(".article"),i=function(t){e.forEach(function(e){t+window.innerHeight-e.clientHeight>e.offsetTop?e.classList.add("active"):e.classList.remove("active")})};exports.scrollDisplayCard=i;var s=function(e){t.forEach(function(t){var i=t.offsetTop-t.clientHeight/1.2;t.offsetTop,t.clientHeight;e>i?t.childNodes[1].classList.add("active--slide"):t.childNodes[1].classList.remove("active--slide")})};exports.slideArticleTitles=s;
},{}],"g2Hq":[function(require,module,exports) {
"use strict";var i=require("./navigation"),n=require("./contentAnimation");function t(i){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var r=this,l=arguments,a=e&&!n;clearTimeout(n),n=setTimeout(function(){n=null,e||i.apply(r,l)},t),a&&i.apply(r,l)}}var e=function(){var t=window.scrollY;(0,i.navTabs)(t),(0,n.scrollDisplayCard)(t),(0,n.slideArticleTitles)(t)};window.addEventListener("scroll",t(e));
},{"./navigation":"vjt7","./contentAnimation":"SSB3"}]},{},["g2Hq"], null)
//# sourceMappingURL=/scripts.d3c51468.js.map
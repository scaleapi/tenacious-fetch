!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.tenaciousFetch=e()}(this,function(){var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(e,n){var r,o,i,a,u;r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},a=function(t){function e(){r(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.aborted=!1,t.onabort=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(t){"abort"===t.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,t)),function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"dispatchEvent",this).call(this,t)}}]),e}(function(){function t(){r(this,t),this.listeners={}}return o(t,[{key:"addEventListener",value:function(t,e){t in this.listeners||(this.listeners[t]=[]),this.listeners[t].push(e)}},{key:"removeEventListener",value:function(t,e){if(t in this.listeners)for(var n=this.listeners[t],r=0,o=n.length;r<o;r++)if(n[r]===e)return void n.splice(r,1)}},{key:"dispatchEvent",value:function(t){var e=this;if(t.type in this.listeners){for(var n=function(n){setTimeout(function(){return n.call(e,t)})},r=this.listeners[t.type],o=0,i=r.length;o<i;o++)n(r[o]);return!t.defaultPrevented}}}]),t}()),u=function(){function t(){r(this,t),this.signal=new a}return o(t,[{key:"abort",value:function(){var t=void 0;try{t=new Event("abort")}catch(e){"undefined"!=typeof document?(t=document.createEvent("Event")).initEvent("abort",!1,!1):t={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(t)}},{key:"toString",value:function(){return"[object AbortController]"}}]),t}(),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(u.prototype[Symbol.toStringTag]="AbortController",a.prototype[Symbol.toStringTag]="AbortSignal"),function(t){t.AbortController&&!function(t){return t.navigator&&t.navigator.userAgent&&(!!(e=t.navigator.userAgent).match(/ (crios|gsa|fxios)\//i)||!(!e.match(/ Safari\//i)||!e.match(/ Version\/(12.0|12.1|11)/i)));var e}(t)||(t.AbortController=u,t.AbortSignal=a)}("undefined"!=typeof self?self:t)})(e={exports:{}},e.exports);var e,n=require("p-retry");function r(t,e,r,i){return void 0===i&&(i=0),n(function(t){return r.abortTimeout||r.totalTimeLimit?function(t,e,r){var i,a;return Promise.race([new Promise(function(t,o){a=new AbortController,e.signal=a.signal,e.totalTimeLimit&&performance.now()-r>e.totalTimeLimit&&(i&&clearTimer(i),o(new n.AbortError(new n.AbortError("Total Time Limit Exceeded")))),t()}).then(function(n){return o(t,e)}),new Promise(function(t,n){return i=setTimeout(function(){a.abort()},e.abortTimeout||e.totalTimeLimit)})])}(e,r,i):o(e,r)},{onFailedAttempt:r.onFailedAttempt,retries:r.retries,factor:r.factor,minTimeout:r.retryMinDelay,maxTimeout:r.retryMaxDelay})}function o(t,e){return new Promise(function(n,r){e.fetcher(t,e).then(function(t){if(e.retryStatus.includes(t.status)){var o=new Error(t.statusText);r(o)}n(t)}).catch(function(t){return r(t)})})}if(window&&window.fetch&&"signal"in new window.Request(""))window;else if(window)require("whatwg-fetch");else require("node-fetch");return function(t,e){return void 0===t&&(t=""),void 0===e&&(e={}),new Promise(function(n,o){if(!(e=Object.assign({factor:1,retries:0,retryDelay:void 0,retryMinDelay:1e3,retryMaxDelay:Infinity,retryStatus:[],fetcher:browserFetch,abortTimeout:void 0,totalTimeLimit:void 0},e)).fetcher||"function"!=typeof e.fetcher)return o(new Error("tenacious-fetch: No fetch implementation found. Provide a valid fetch implementation via the fetcher configuration property."));"function"!=typeof e.onFailedAttempt&&(e.onFailedAttempt=function(){}),"string"!=typeof e.retryStatus&&"number"!=typeof e.retryStatus||(e.retryStatus=[Number.parseInt(e.retryStatus)]),e.retryDelay&&(e.retryMinDelay=e.retryDelay,delete e.retryDelay);var i=performance.now();return n(r(0,t,e,i))})}});
//# sourceMappingURL=tenacious-fetch.umd.js.map

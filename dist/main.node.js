!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tenaciousFetch=t():e.tenaciousFetch=t()}(global,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=require("stream")},function(e,t){e.exports=require("zlib")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=r(6),i=(o=r(8))&&o.__esModule?o:{default:o};let s=!1;"undefined"!=typeof window&&window.fetch&&"signal"in new window.Request("")?(console.log("use window.fetch"),s=fetch.bind(window)):(console.log("use cross-fetch"),s=n.fetch);var u=async function(e="",t={}){if(console.log("url: "+e),t=Object.assign({factor:1,retries:0,retryDelay:void 0,retryMinDelay:1e3,retryMaxDelay:1/0,retryStatus:[],fetcher:s,abortTimeout:void 0,totalTimeLimit:void 0},t),console.log(t),!t.fetcher||"function"!=typeof t.fetcher)throw new Error("tenacious-fetch: No fetch implementation found. Provide a valid fetch implementation via the fetcher configuration property.");return"function"!=typeof t.onFailedAttempt&&(t.onFailedAttempt=(()=>{})),"string"!=typeof t.retryStatus&&"number"!=typeof t.retryStatus||(t.retryStatus=[Number.parseInt(t.retryStatus)]),t.retryDelay&&(t.retryMinDelay=t.retryDelay,delete t.retryDelay),(0,i.default)(t.retries,e,t)};t.default=u,e.exports=t.default},function(e,t,r){var o=r(7),n=o.default||o,i=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),n.call(this,e,t)};e.exports=t=i,t.fetch=i,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,t.default=i},function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",function(){return E}),r.d(t,"Request",function(){return F}),r.d(t,"Response",function(){return k}),r.d(t,"FetchError",function(){return f});var o=r(0),n=r(3),i=r(2),s=r(4),u=r(1);const a=Symbol("buffer"),l=Symbol("type");class c{constructor(){this[l]="";const e=arguments[0],t=arguments[1],r=[];if(e){const t=e,o=Number(t.length);for(let e=0;e<o;e++){const o=t[e];let n;n=o instanceof Buffer?o:ArrayBuffer.isView(o)?Buffer.from(o.buffer,o.byteOffset,o.byteLength):o instanceof ArrayBuffer?Buffer.from(o):o instanceof c?o[a]:Buffer.from("string"==typeof o?o:String(o)),r.push(n)}}this[a]=Buffer.concat(r);let o=t&&void 0!==t.type&&String(t.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[l]=o)}get size(){return this[a].length}get type(){return this[l]}slice(){const e=this.size,t=arguments[0],r=arguments[1];let o,n;o=void 0===t?0:t<0?Math.max(e+t,0):Math.min(t,e),n=void 0===r?e:r<0?Math.max(e+r,0):Math.min(r,e);const i=Math.max(n-o,0),s=this[a].slice(o,o+i),u=new c([],{type:arguments[2]});return u[a]=s,u}}function f(e,t,r){Error.call(this,e),this.message=e,this.type=t,r&&(this.code=this.errno=r.code),Error.captureStackTrace(this,this.constructor)}let p;Object.defineProperties(c.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(c.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),f.prototype=Object.create(Error.prototype),f.prototype.constructor=f,f.prototype.name="FetchError";try{p=require("encoding").convert}catch(e){}const h=Symbol("Body internals"),d=o.PassThrough;function y(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.size;let i=void 0===n?0:n;var s=r.timeout;let u=void 0===s?0:s;null==e?e=null:"string"==typeof e||b(e)||e instanceof c||Buffer.isBuffer(e)||"[object ArrayBuffer]"===Object.prototype.toString.call(e)||ArrayBuffer.isView(e)||e instanceof o||(e=String(e)),this[h]={body:e,disturbed:!1,error:null},this.size=i,this.timeout=u,e instanceof o&&e.on("error",function(e){const r="AbortError"===e.name?e:new f(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e);t[h].error=r})}function m(){var e=this;if(this[h].disturbed)return y.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[h].disturbed=!0,this[h].error)return y.Promise.reject(this[h].error);if(null===this.body)return y.Promise.resolve(Buffer.alloc(0));if("string"==typeof this.body)return y.Promise.resolve(Buffer.from(this.body));if(this.body instanceof c)return y.Promise.resolve(this.body[a]);if(Buffer.isBuffer(this.body))return y.Promise.resolve(this.body);if("[object ArrayBuffer]"===Object.prototype.toString.call(this.body))return y.Promise.resolve(Buffer.from(this.body));if(ArrayBuffer.isView(this.body))return y.Promise.resolve(Buffer.from(this.body.buffer,this.body.byteOffset,this.body.byteLength));if(!(this.body instanceof o))return y.Promise.resolve(Buffer.alloc(0));let t=[],r=0,n=!1;return new y.Promise(function(o,i){let s;e.timeout&&(s=setTimeout(function(){n=!0,i(new f(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),e.body.on("error",function(t){"AbortError"===t.name?(n=!0,i(t)):i(new f(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))}),e.body.on("data",function(o){if(!n&&null!==o){if(e.size&&r+o.length>e.size)return n=!0,void i(new f(`content size at ${e.url} over limit: ${e.size}`,"max-size"));r+=o.length,t.push(o)}}),e.body.on("end",function(){if(!n){clearTimeout(s);try{o(Buffer.concat(t))}catch(t){i(new f(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}})})}function b(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function g(e){let t,r,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof o&&"function"!=typeof n.getBoundary&&(t=new d,r=new d,n.pipe(t),n.pipe(r),e[h].body=t,n=r),n}function v(e){const t=e.body;return null===t?0:"string"==typeof t?Buffer.byteLength(t):b(t)?Buffer.byteLength(String(t)):t instanceof c?t.size:Buffer.isBuffer(t)?t.length:"[object ArrayBuffer]"===Object.prototype.toString.call(t)?t.byteLength:ArrayBuffer.isView(t)?t.byteLength:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}y.prototype={get body(){return this[h].body},get bodyUsed(){return this[h].disturbed},arrayBuffer(){return m.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return m.call(this).then(function(t){return Object.assign(new c([],{type:e.toLowerCase()}),{[a]:t})})},json(){var e=this;return m.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(t){return y.Promise.reject(new f(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}})},text(){return m.call(this).then(function(e){return e.toString()})},buffer(){return m.call(this)},textConverted(){var e=this;return m.call(this).then(function(t){return function(e,t){if("function"!=typeof p)throw new Error("The package `encoding` must be installed to use the textConverted() function");const r=t.get("content-type");let o,n,i="utf-8";r&&(o=/charset=([^;]*)/i.exec(r));n=e.slice(0,1024).toString(),!o&&n&&(o=/<meta.+?charset=(['"])(.+?)\1/i.exec(n));!o&&n&&(o=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(n))&&(o=/charset=(.*)/i.exec(o.pop()));!o&&n&&(o=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(n));o&&("gb2312"!==(i=o.pop())&&"gbk"!==i||(i="gb18030"));return p(e,"UTF-8",i).toString()}(t,e.headers)})}},Object.defineProperties(y.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),y.mixIn=function(e){for(const t of Object.getOwnPropertyNames(y.prototype))if(!(t in e)){const r=Object.getOwnPropertyDescriptor(y.prototype,t);Object.defineProperty(e,t,r)}},y.Promise=global.Promise;const w=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,T=/[^\t\x20-\x7e\x80-\xff]/;function _(e){if(e=`${e}`,w.test(e))throw new TypeError(`${e} is not a legal HTTP header name`)}function S(e){if(e=`${e}`,T.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function O(e,t){t=t.toLowerCase();for(const r in e)if(r.toLowerCase()===t)return r}const j=Symbol("map");class E{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(this[j]=Object.create(null),e instanceof E){const t=e.raw(),r=Object.keys(t);for(const e of r)for(const r of t[e])this.append(e,r)}else if(null==e);else{if("object"!=typeof e)throw new TypeError("Provided initializer must be an object");{const t=e[Symbol.iterator];if(null!=t){if("function"!=typeof t)throw new TypeError("Header pairs must be iterable");const r=[];for(const t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw new TypeError("Each header pair must be iterable");r.push(Array.from(t))}for(const e of r){if(2!==e.length)throw new TypeError("Each header pair must be a name/value tuple");this.append(e[0],e[1])}}else for(const t of Object.keys(e)){const r=e[t];this.append(t,r)}}}}get(e){_(e=`${e}`);const t=O(this[j],e);return void 0===t?null:this[j][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=x(this),o=0;for(;o<r.length;){var n=r[o];const i=n[0],s=n[1];e.call(t,s,i,this),r=x(this),o++}}set(e,t){t=`${t}`,_(e=`${e}`),S(t);const r=O(this[j],e);this[j][void 0!==r?r:e]=[t]}append(e,t){t=`${t}`,_(e=`${e}`),S(t);const r=O(this[j],e);void 0!==r?this[j][r].push(t):this[j][e]=[t]}has(e){return _(e=`${e}`),void 0!==O(this[j],e)}delete(e){_(e=`${e}`);const t=O(this[j],e);void 0!==t&&delete this[j][t]}raw(){return this[j]}keys(){return A(this,"key")}values(){return A(this,"value")}[Symbol.iterator](){return A(this,"key+value")}}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value";return Object.keys(e[j]).sort().map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[j][t].join(", ")}:function(t){return[t.toLowerCase(),e[j][t].join(", ")]})}E.prototype.entries=E.prototype[Symbol.iterator],Object.defineProperty(E.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(E.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});const P=Symbol("internal");function A(e,t){const r=Object.create(B);return r[P]={target:e,kind:t,index:0},r}const B=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==B)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[P];const t=e.target,r=e.kind,o=e.index,n=x(t,r);return o>=n.length?{value:void 0,done:!0}:(this[P].index=o+1,{value:n[o],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));function C(e){const t=Object.assign({__proto__:null},e[j]),r=O(e[j],"Host");return void 0!==r&&(t[r]=t[r][0]),t}Object.defineProperty(B,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});const L=Symbol("Response internals"),R=n.STATUS_CODES;class k{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.call(this,e,t);const r=t.status||200;this[L]={url:t.url,status:r,statusText:t.statusText||R[r],headers:new E(t.headers)}}get url(){return this[L].url}get status(){return this[L].status}get ok(){return this[L].status>=200&&this[L].status<300}get statusText(){return this[L].statusText}get headers(){return this[L].headers}clone(){return new k(g(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok})}}y.mixIn(k.prototype),Object.defineProperties(k.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty(k.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});const $=Symbol("Request internals"),z=i.parse,q=i.format,M="destroy"in o.Readable.prototype;function U(e){return"object"==typeof e&&"object"==typeof e[$]}class F{constructor(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};U(e)?t=z(e.url):(t=e&&e.href?z(e.href):z(`${e}`),e={});let o=r.method||e.method||"GET";if(o=o.toUpperCase(),(null!=r.body||U(e)&&null!==e.body)&&("GET"===o||"HEAD"===o))throw new TypeError("Request with GET/HEAD method cannot have body");let n=null!=r.body?r.body:U(e)&&null!==e.body?g(e):null;y.call(this,n,{timeout:r.timeout||e.timeout||0,size:r.size||e.size||0});const i=new E(r.headers||e.headers||{});if(null!=r.body){const e=function(e){const t=e.body;return null===t?null:"string"==typeof t?"text/plain;charset=UTF-8":b(t)?"application/x-www-form-urlencoded;charset=UTF-8":t instanceof c?t.type||null:Buffer.isBuffer(t)?null:"[object ArrayBuffer]"===Object.prototype.toString.call(t)?null:ArrayBuffer.isView(t)?null:"function"==typeof t.getBoundary?`multipart/form-data;boundary=${t.getBoundary()}`:null}(this);null===e||i.has("Content-Type")||i.append("Content-Type",e)}let s=U(e)?e.signal:null;if("signal"in r&&(s=r.signal),null!=s&&!function(e){const t=e&&"object"==typeof e&&Object.getPrototypeOf(e);return!(!t||"AbortSignal"!==t.constructor.name)}(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[$]={method:o,redirect:r.redirect||e.redirect||"follow",headers:i,parsedURL:t,signal:s},this.follow=void 0!==r.follow?r.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==r.compress?r.compress:void 0===e.compress||e.compress,this.counter=r.counter||e.counter||0,this.agent=r.agent||e.agent}get method(){return this[$].method}get url(){return q(this[$].parsedURL)}get headers(){return this[$].headers}get redirect(){return this[$].redirect}get signal(){return this[$].signal}clone(){return new F(this)}}function D(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}y.mixIn(F.prototype),Object.defineProperty(F.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(F.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),D.prototype=Object.create(Error.prototype),D.prototype.constructor=D,D.prototype.name="AbortError";const H=o.PassThrough,I=i.resolve;function N(e,t){if(!N.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return y.Promise=N.Promise,new N.Promise(function(r,i){const l=new F(e,t),p=function(e){const t=e[$].parsedURL,r=new E(e[$].headers);if(r.has("Accept")||r.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof o.Readable&&!M)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),null!=e.body){const t=v(e);"number"==typeof t&&(n=String(t))}return n&&r.set("Content-Length",n),r.has("User-Agent")||r.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!r.has("Accept-Encoding")&&r.set("Accept-Encoding","gzip,deflate"),r.has("Connection")||e.agent||r.set("Connection","close"),Object.assign({},t,{method:e.method,headers:C(r),agent:e.agent})}(l),h=("https:"===p.protocol?s:n).request,d=l.signal;let y=null;const m=function(){let e=new D("The user aborted a request.");i(e),l.body&&l.body instanceof o.Readable&&l.body.destroy(e),y&&y.body&&y.body.emit("error",e)};if(d&&d.aborted)return void m();const g=function(){m(),O()},_=h(p);let S;function O(){_.abort(),d&&d.removeEventListener("abort",g),clearTimeout(S)}d&&d.addEventListener("abort",g),l.timeout&&_.once("socket",function(e){S=setTimeout(function(){i(new f(`network timeout at: ${l.url}`,"request-timeout")),O()},l.timeout)}),_.on("error",function(e){i(new f(`request to ${l.url} failed, reason: ${e.message}`,"system",e)),O()}),_.on("response",function(e){clearTimeout(S);const t=function(e){const t=new E;for(const r of Object.keys(e))if(!w.test(r))if(Array.isArray(e[r]))for(const o of e[r])T.test(o)||(void 0===t[j][r]?t[j][r]=[o]:t[j][r].push(o));else T.test(e[r])||(t[j][r]=[e[r]]);return t}(e.headers);if(N.isRedirect(e.statusCode)){const o=t.get("Location"),n=null===o?null:I(l.url,o);switch(l.redirect){case"error":return i(new f(`redirect mode is set to error: ${l.url}`,"no-redirect")),void O();case"manual":if(null!==n)try{t.set("Location",n)}catch(e){i(e)}break;case"follow":if(null===n)break;if(l.counter>=l.follow)return i(new f(`maximum redirect reached at: ${l.url}`,"max-redirect")),void O();const o={headers:new E(l.headers),follow:l.follow,counter:l.counter+1,agent:l.agent,compress:l.compress,method:l.method,body:l.body,signal:l.signal};return 303!==e.statusCode&&l.body&&null===v(l)?(i(new f("Cannot follow redirect with body being a readable stream","unsupported-redirect")),void O()):(303!==e.statusCode&&(301!==e.statusCode&&302!==e.statusCode||"POST"!==l.method)||(o.method="GET",o.body=void 0,o.headers.delete("content-length")),r(N(new F(n,o))),void O())}}e.once("end",function(){d&&d.removeEventListener("abort",g)});let o=e.pipe(new H);const n={url:l.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:l.size,timeout:l.timeout},s=t.get("Content-Encoding");if(!l.compress||"HEAD"===l.method||null===s||204===e.statusCode||304===e.statusCode)return y=new k(o,n),void r(y);const a={flush:u.Z_SYNC_FLUSH,finishFlush:u.Z_SYNC_FLUSH};if("gzip"==s||"x-gzip"==s)return o=o.pipe(u.createGunzip(a)),y=new k(o,n),void r(y);if("deflate"!=s&&"x-deflate"!=s)y=new k(o,n),r(y);else{e.pipe(new H).once("data",function(e){o=8==(15&e[0])?o.pipe(u.createInflate()):o.pipe(u.createInflateRaw()),y=new k(o,n),r(y)})}}),function(e,t){const r=t.body;null===r?e.end():"string"==typeof r?(e.write(r),e.end()):b(r)?(e.write(Buffer.from(String(r))),e.end()):r instanceof c?(e.write(r[a]),e.end()):Buffer.isBuffer(r)?(e.write(r),e.end()):"[object ArrayBuffer]"===Object.prototype.toString.call(r)?(e.write(Buffer.from(r)),e.end()):ArrayBuffer.isView(r)?(e.write(Buffer.from(r.buffer,r.byteOffset,r.byteLength)),e.end()):r.pipe(e)}(_,l)})}N.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},N.Promise=global.Promise,t.default=N},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(9);var o=r(10);const n=r(11);if("undefined"==typeof window&&o.performance)var i=o.performance;else i=window.performance;function s(e,t){return new Promise((r,o)=>{t.fetcher(e,t).then(e=>{if(t.retryStatus.includes(e.status)){let t=new Error(e.statusText);o(t)}r(e)}).catch(e=>{console.log(t),o(e)})})}var u=function(e,t,r){const o=i.now();return n(e=>r.abortTimeout||r.totalTimeLimit?function(e,t,r){var o,u;return Promise.race([new Promise((e,s)=>{u=new AbortController,t.signal=u.signal,t.totalTimeLimit&&i.now()-r>t.totalTimeLimit&&(o&&clearTimer(o),s(new n.AbortError(new n.AbortError("Total Time Limit Exceeded")))),e()}).then(r=>s(e,t)),new Promise((e,r)=>o=setTimeout(()=>{u.abort()},t.abortTimeout||t.totalTimeLimit))])}(t,r,o):s(t,r),{onFailedAttempt:r.onFailedAttempt,retries:r.retries,factor:r.factor,minTimeout:r.retryMinDelay,maxTimeout:r.retryMaxDelay})};t.default=u,e.exports=t.default},function(e,t,r){(function(){"use strict";var e=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function(){function r(){e(this,r),this.listeners={}}return t(r,[{key:"addEventListener",value:function(e,t){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"removeEventListener",value:function(e,t){if(e in this.listeners)for(var r=this.listeners[e],o=0,n=r.length;o<n;o++)if(r[o]===t)return void r.splice(o,1)}},{key:"dispatchEvent",value:function(e){var t=this;if(e.type in this.listeners){for(var r=function(r){setTimeout(function(){return r.call(t,e)})},o=this.listeners[e.type],n=0,i=o.length;n<i;n++)r(o[n]);return!e.defaultPrevented}}}]),r}(),n=function(n){function i(){e(this,i);var t=r(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return t.aborted=!1,t.onabort=null,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,o),t(i,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(e){"abort"===e.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,e)),function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var s=n.get;return void 0!==s?s.call(o):void 0}(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"dispatchEvent",this).call(this,e)}}]),i}(),i=function(){function r(){e(this,r),this.signal=new n}return t(r,[{key:"abort",value:function(){var e=void 0;try{e=new Event("abort")}catch(t){"undefined"!=typeof document?(e=document.createEvent("Event")).initEvent("abort",!1,!1):e={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(e)}},{key:"toString",value:function(){return"[object AbortController]"}}]),r}();"undefined"!=typeof Symbol&&Symbol.toStringTag&&(i.prototype[Symbol.toStringTag]="AbortController",n.prototype[Symbol.toStringTag]="AbortSignal"),function(e){(function(e){return"function"==typeof e.Request&&!e.Request.prototype.hasOwnProperty("signal")||!e.AbortController})(e)&&(e.AbortController=i,e.AbortSignal=n)}("undefined"!=typeof self?self:global)})()},function(e,t){e.exports=require("perf_hooks")},function(e,t,r){"use strict";const o=r(12);class n extends Error{constructor(e){super(),e instanceof Error?(this.originalError=e,({message:e}=e)):(this.originalError=new Error(e),this.originalError.stack=this.stack),this.name="AbortError",this.message=e}}function i(e,t,r){const o=r.retries-(t-1);return e.attemptNumber=t,e.retriesLeft=o,e}e.exports=((e,t)=>new Promise((r,s)=>{t=Object.assign({onFailedAttempt:()=>{},retries:10},t);const u=o.operation(t);u.attempt(o=>Promise.resolve(o).then(e).then(r,e=>{e instanceof n?(u.stop(),s(e.originalError)):e instanceof TypeError?(u.stop(),s(e)):u.retry(e)?(i(e,o,t),t.onFailedAttempt(e)):(i(e,o,t),t.onFailedAttempt(e),s(u.mainError()))}))})),e.exports.AbortError=n},function(e,t,r){e.exports=r(13)},function(e,t,r){var o=r(14);t.operation=function(e){var r=t.timeouts(e);return new o(r,{forever:e&&e.forever,unref:e&&e.unref,maxRetryTime:e&&e.maxRetryTime})},t.timeouts=function(e){if(e instanceof Array)return[].concat(e);var t={retries:10,factor:2,minTimeout:1e3,maxTimeout:1/0,randomize:!1};for(var r in e)t[r]=e[r];if(t.minTimeout>t.maxTimeout)throw new Error("minTimeout is greater than maxTimeout");for(var o=[],n=0;n<t.retries;n++)o.push(this.createTimeout(n,t));return e&&e.forever&&!o.length&&o.push(this.createTimeout(n,t)),o.sort(function(e,t){return e-t}),o},t.createTimeout=function(e,t){var r=t.randomize?Math.random()+1:1,o=Math.round(r*t.minTimeout*Math.pow(t.factor,e));return o=Math.min(o,t.maxTimeout)},t.wrap=function(e,r,o){if(r instanceof Array&&(o=r,r=null),!o)for(var n in o=[],e)"function"==typeof e[n]&&o.push(n);for(var i=0;i<o.length;i++){var s=o[i],u=e[s];e[s]=function(o){var n=t.operation(r),i=Array.prototype.slice.call(arguments,1),s=i.pop();i.push(function(e){n.retry(e)||(e&&(arguments[0]=n.mainError()),s.apply(this,arguments))}),n.attempt(function(){o.apply(e,i)})}.bind(e,u),e[s].options=r}}},function(e,t){function r(e,t){"boolean"==typeof t&&(t={forever:t}),this._originalTimeouts=JSON.parse(JSON.stringify(e)),this._timeouts=e,this._options=t||{},this._maxRetryTime=t&&t.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}e.exports=r,r.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts},r.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timeouts=[],this._cachedTimeouts=null},r.prototype.retry=function(e){if(this._timeout&&clearTimeout(this._timeout),!e)return!1;var t=(new Date).getTime();if(e&&t-this._operationStart>=this._maxRetryTime)return this._errors.unshift(new Error("RetryOperation timeout occurred")),!1;this._errors.push(e);var r=this._timeouts.shift();if(void 0===r){if(!this._cachedTimeouts)return!1;this._errors.splice(this._errors.length-1,this._errors.length),this._timeouts=this._cachedTimeouts.slice(0),r=this._timeouts.shift()}var o=this,n=setTimeout(function(){o._attempts++,o._operationTimeoutCb&&(o._timeout=setTimeout(function(){o._operationTimeoutCb(o._attempts)},o._operationTimeout),o._options.unref&&o._timeout.unref()),o._fn(o._attempts)},r);return this._options.unref&&n.unref(),!0},r.prototype.attempt=function(e,t){this._fn=e,t&&(t.timeout&&(this._operationTimeout=t.timeout),t.cb&&(this._operationTimeoutCb=t.cb));var r=this;this._operationTimeoutCb&&(this._timeout=setTimeout(function(){r._operationTimeoutCb()},r._operationTimeout)),this._operationStart=(new Date).getTime(),this._fn(this._attempts)},r.prototype.try=function(e){console.log("Using RetryOperation.try() is deprecated"),this.attempt(e)},r.prototype.start=function(e){console.log("Using RetryOperation.start() is deprecated"),this.attempt(e)},r.prototype.start=r.prototype.try,r.prototype.errors=function(){return this._errors},r.prototype.attempts=function(){return this._attempts},r.prototype.mainError=function(){if(0===this._errors.length)return null;for(var e={},t=null,r=0,o=0;o<this._errors.length;o++){var n=this._errors[o],i=n.message,s=(e[i]||0)+1;e[i]=s,s>=r&&(t=n,r=s)}return t}}])});
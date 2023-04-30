var e,t,n,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=e={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};const g=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++s)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=r>>2,l=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),s.push(n[u],n[l],n[h],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(g(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[s++]=String.fromCharCode(55296+(i>>10)),t[s++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==i||null==o||null==a)throw new v;const c=r<<2|i>>4;if(s.push(c),64!==o){const e=i<<4&240|o>>2;if(s.push(e),64!==a){const e=o<<6&192|a;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w=function(e){return function(e){const t=g(e);return y.encodeByteArray(t,!0)}(e).replace(/\./g,"")},I=function(e){try{return y.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,T=()=>{try{return E()||(()=>{if(void 0===e||void 0===e.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&I(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=T())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},_=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),s]:[t.substring(0,n),s]},S=()=>{var e;return null===(e=T())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=T())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[w(JSON.stringify({alg:"none",type:"JWT"})),w(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function D(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function R(){const e=N();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){try{return"object"==typeof indexedDB}catch(e){return!1}}class L extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(M,((e,n)=>{const s=t[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new L(s,o,n)}}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const n=e[r],i=t[r];if(F(n)&&F(i)){if(!U(n,i))return!1}else if(n!==i)return!1}for(const e of s)if(!n.includes(e))return!1;return!0}function F(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function B(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,s]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(s)}})),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new $(e,t);return n.subscribe.bind(n)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let s;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===s.next&&(s.next=z),void 0===s.error&&(s.error=z),void 0===s.complete&&(s.complete=z);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}})),this.observers.push(s),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}class G{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new k;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),s=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(s)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:H})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=H){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=H){return this.instances.has(e)}getOptions(e=H){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,s===H?void 0:s),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var s;return n||null}normalizeInstanceIdentifier(e=H){return this.component?this.component.multipleInstances?e:H:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Q{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new W(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=[];var X,Y;(Y=X||(X={}))[Y.DEBUG=0]="DEBUG",Y[Y.VERBOSE=1]="VERBOSE",Y[Y.INFO=2]="INFO",Y[Y.WARN=3]="WARN",Y[Y.ERROR=4]="ERROR",Y[Y.SILENT=5]="SILENT";const Z={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ee=X.INFO,te={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},ne=(e,t,...n)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),r=te[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${s}]  ${e.name}:`,...n)};class se{constructor(e){this.name=e,this._logLevel=ee,this._logHandler=ne,this._userLogHandler=null,J.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Z[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const re=(e,t)=>t.some((t=>e instanceof t));let ie,oe;const ae=new WeakMap,ce=new WeakMap,ue=new WeakMap,le=new WeakMap,he=new WeakMap;let de={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ce.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ue.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return me(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function fe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(oe||(oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ge(this),t),me(ae.get(this))}:function(...t){return me(e.apply(ge(this),t))}:function(t,...n){const s=e.call(ge(this),t,...n);return ue.set(s,t.sort?t.sort():[t]),me(s)}}function pe(e){return"function"==typeof e?fe(e):(e instanceof IDBTransaction&&function(e){if(ce.has(e))return;const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),s()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));ce.set(e,t)}(e),re(e,ie||(ie=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,de):e)}function me(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(me(e.result)),s()},i=()=>{n(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&ae.set(t,e)})).catch((()=>{})),he.set(t,e),t}(e);if(le.has(e))return le.get(e);const t=pe(e);return t!==e&&(le.set(e,t),he.set(t,e)),t}const ge=e=>he.get(e);function ye(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=me(o);return s&&o.addEventListener("upgradeneeded",(e=>{s(me(o.result),e.oldVersion,e.newVersion,me(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const ve=["get","getKey","getAll","getAllKeys","count"],we=["put","add","delete","clear"],Ie=new Map;function Ee(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ie.get(t))return Ie.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=we.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!ve.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return Ie.set(t,i),i}de=(e=>({...e,get:(t,n,s)=>Ee(t,n)||e.get(t,n,s),has:(t,n)=>!!Ee(t,n)||e.has(t,n)}))(de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const be="@firebase/app",_e="0.9.7",Se=new se("@firebase/app"),Ce="[DEFAULT]",ke={[be]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ae=new Map,Ne=new Map;function De(e,t){try{e.container.addComponent(t)}catch(n){Se.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Re(e){const t=e.name;if(Ne.has(t))return Se.debug(`There were multiple attempts to register component ${t}.`),!1;Ne.set(t,e);for(const t of Ae.values())De(t,e);return!0}function Oe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Le=new P("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new G("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="9.19.1";function xe(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:Ce,automaticDataCollectionEnabled:!1},t),r=s.name;if("string"!=typeof r||!r)throw Le.create("bad-app-name",{appName:String(r)});if(n||(n=S()),!n)throw Le.create("no-options");const i=Ae.get(r);if(i){if(U(n,i.options)&&U(s,i.config))return i;throw Le.create("duplicate-app",{appName:r})}const o=new Q(r);for(const e of Ne.values())o.addComponent(e);const a=new Pe(n,s,o);return Ae.set(r,a),a}function Ue(e=Ce){const t=Ae.get(e);if(!t&&e===Ce)return xe();if(!t)throw Le.create("no-app",{appName:e});return t}function Fe(e,t,n){var s;let r=null!==(s=ke[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Se.warn(e.join(" "))}Re(new G(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve="firebase-heartbeat-database",Be=1,qe="firebase-heartbeat-store";let je=null;function $e(){return je||(je=ye(Ve,Be,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(qe)}}).catch((e=>{throw Le.create("idb-open",{originalErrorMessage:e.message})}))),je}async function ze(e,t){try{const n=(await $e()).transaction(qe,"readwrite"),s=n.objectStore(qe);return await s.put(t,Ke(e)),n.done}catch(e){if(e instanceof L)Se.warn(e.message);else{const t=Le.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Se.warn(t.message)}}}function Ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new We(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=He();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=He(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let s=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Qe(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qe(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=w(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function He(){return(new Date).toISOString().substring(0,10)}class We{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!O()&&new Promise(((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await $e()).transaction(qe).objectStore(qe).get(Ke(e))}catch(e){if(e instanceof L)Se.warn(e.message);else{const t=Le.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Se.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ze(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ze(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Qe(e){return w(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;Je="",Re(new G("platform-logger",(e=>new Te(e)),"PRIVATE")),Re(new G("heartbeat",(e=>new Ge(e)),"PRIVATE")),Fe(be,_e,Je),Fe(be,_e,"esm2017"),Fe("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Fe("firebase","9.19.1","app");var Xe,Ye="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==s?s:"undefined"!=typeof self?self:{},Ze={},et=et||{},tt=Ye||self;function nt(){}function st(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function rt(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var it="closure_uid_"+(1e9*Math.random()>>>0),ot=0;function at(e,t,n){return e.call.apply(e.bind,arguments)}function ct(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ut(e,t,n){return(ut=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?at:ct).apply(null,arguments)}function lt(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ht(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[n].apply(e,r)}}function dt(){this.s=this.s,this.o=this.o}dt.prototype.s=!1,dt.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,it)&&e[it]||(e[it]=++ot))},dt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ft=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function pt(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function mt(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(st(n)){const t=e.length||0,s=n.length||0;e.length=t+s;for(let r=0;r<s;r++)e[t+r]=n[r]}else e.push(n)}}function gt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var yt=function(){if(!tt.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{tt.addEventListener("test",nt,t),tt.removeEventListener("test",nt,t)}catch(e){}return e}();function vt(e){return/^[\s\xa0]*$/.test(e)}var wt=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function It(e,t){return e<t?-1:e>t?1:0}function Et(){var e=tt.navigator;return e&&(e=e.userAgent)?e:""}function Tt(e){return-1!=Et().indexOf(e)}function bt(e){return bt[" "](e),e}bt[" "]=nt;var _t,St,Ct=Tt("Opera"),kt=Tt("Trident")||Tt("MSIE"),At=Tt("Edge"),Nt=At||kt,Dt=Tt("Gecko")&&!(-1!=Et().toLowerCase().indexOf("webkit")&&!Tt("Edge"))&&!(Tt("Trident")||Tt("MSIE"))&&!Tt("Edge"),Rt=-1!=Et().toLowerCase().indexOf("webkit")&&!Tt("Edge");function Ot(){var e=tt.document;return e?e.documentMode:void 0}e:{var Lt="",Pt=(St=Et(),Dt?/rv:([^\);]+)(\)|;)/.exec(St):At?/Edge\/([\d\.]+)/.exec(St):kt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(St):Rt?/WebKit\/(\S+)/.exec(St):Ct?/(?:Version)[ \/]?(\S+)/.exec(St):void 0);if(Pt&&(Lt=Pt?Pt[1]:""),kt){var Mt=Ot();if(null!=Mt&&Mt>parseFloat(Lt)){_t=String(Mt);break e}}_t=Lt}var xt,Ut={};function Ft(){return function(e){var t=Ut;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=wt(String(_t)).split("."),n=wt("9").split("."),s=Math.max(t.length,n.length);for(let o=0;0==e&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;e=It(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||It(0==r[2].length,0==i[2].length)||It(r[2],i[2]),r=r[3],i=i[3]}while(0==e)}return 0<=e}))}if(tt.document&&kt){var Vt=Ot();xt=Vt||(parseInt(_t,10)||void 0)}else xt=void 0;var Bt=xt;function qt(e,t){if(gt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Dt){e:{try{bt(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:jt[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&qt.X.h.call(this)}}ht(qt,gt);var jt={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),zt=0;function Kt(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++zt,this.ba=this.ea=!1}function Gt(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ht(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Wt(e){const t={};for(const n in e)t[n]=e[n];return t}const Qt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jt(e,t){let n,s;for(let t=1;t<arguments.length;t++){for(n in s=arguments[t],s)e[n]=s[n];for(let t=0;t<Qt.length;t++)n=Qt[t],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Xt(e){this.src=e,this.g={},this.h=0}function Yt(e,t){var n=t.type;if(n in e.g){var s,r=e.g[n],i=ft(r,t);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gt(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Zt(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}Xt.prototype.add=function(e,t,n,s,r){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=Zt(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new Kt(t,this.src,i,!!s,r)).ea=n,e.push(t)),t};var en="closure_lm_"+(1e6*Math.random()|0),tn={};function nn(e,t,n,s,r){if(s&&s.once)return rn(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)nn(e,t[i],n,s,r);return null}return n=dn(n),e&&e[$t]?e.N(t,n,rt(s)?!!s.capture:!!s,r):sn(e,t,n,!1,s,r)}function sn(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=rt(r)?!!r.capture:!!r,a=ln(e);if(a||(e[en]=a=new Xt(e)),(n=a.add(t,n,s,o,i)).proxy)return n;if(s=function(){function e(n){return t.call(e.src,e.listener,n)}const t=un;return e}(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)yt||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(cn(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return n}function rn(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)rn(e,t[i],n,s,r);return null}return n=dn(n),e&&e[$t]?e.O(t,n,rt(s)?!!s.capture:!!s,r):sn(e,t,n,!0,s,r)}function on(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)on(e,t[i],n,s,r);else s=rt(s)?!!s.capture:!!s,n=dn(n),e&&e[$t]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Zt(i=e.g[t],n,s,r))&&(Gt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=ln(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Zt(t,n,s,r)),(n=-1<e?t[e]:null)&&an(n))}function an(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[$t])Yt(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(cn(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ln(t))?(Yt(n,e),0==n.h&&(n.src=null,t[en]=null)):Gt(e)}}}function cn(e){return e in tn?tn[e]:tn[e]="on"+e}function un(e,t){if(e.ba)e=!0;else{t=new qt(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&an(e),e=n.call(s,t)}return e}function ln(e){return(e=e[en])instanceof Xt?e:null}var hn="__closure_events_fn_"+(1e9*Math.random()>>>0);function dn(e){return"function"==typeof e?e:(e[hn]||(e[hn]=function(t){return e.handleEvent(t)}),e[hn])}function fn(){dt.call(this),this.i=new Xt(this),this.P=this,this.I=null}function pn(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,"string"==typeof t)t=new gt(t,e);else if(t instanceof gt)t.target=t.target||e;else{var r=t;Jt(t=new gt(s,e),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=mn(o,s,!0,t)&&r}if(r=mn(o=t.g=e,s,!0,t)&&r,r=mn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)r=mn(o=t.g=n[i],s,!1,t)&&r}function mn(e,t,n,s){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Yt(e.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}ht(fn,dt),fn.prototype[$t]=!0,fn.prototype.removeEventListener=function(e,t,n,s){on(this,e,t,n,s)},fn.prototype.M=function(){if(fn.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Gt(n[s]);delete t.g[e],t.h--}}this.I=null},fn.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)},fn.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};var gn=tt.JSON.stringify;function yn(){var e=_n;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var vn,wn=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new In),(e=>e.reset()));class In{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function En(e){tt.setTimeout((()=>{throw e}),0)}function Tn(e,t){vn||function(){var e=tt.Promise.resolve(void 0);vn=function(){e.then(Sn)}}(),bn||(vn(),bn=!0),_n.add(e,t)}var bn=!1,_n=new class{constructor(){this.h=this.g=null}add(e,t){const n=wn.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Sn(){for(var e;e=yn();){try{e.h.call(e.g)}catch(e){En(e)}var t=wn;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}bn=!1}function Cn(e,t){fn.call(this),this.h=e||1,this.g=t||tt,this.j=ut(this.lb,this),this.l=Date.now()}function kn(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function An(e,t,n){if("function"==typeof e)n&&(e=ut(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ut(e.handleEvent,e)}return 2147483647<Number(t)?-1:tt.setTimeout(e,t||0)}function Nn(e){e.g=An((()=>{e.g=null,e.i&&(e.i=!1,Nn(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}ht(Cn,fn),(Xe=Cn.prototype).ca=!1,Xe.R=null,Xe.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),pn(this,"tick"),this.ca&&(kn(this),this.start()))}},Xe.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Xe.M=function(){Cn.X.M.call(this),kn(this),delete this.g};class Dn extends dt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Nn(this)}M(){super.M(),this.g&&(tt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rn(e){dt.call(this),this.h=e,this.g={}}ht(Rn,dt);var On=[];function Ln(e,t,n,s){Array.isArray(n)||(n&&(On[0]=n.toString()),n=On);for(var r=0;r<n.length;r++){var i=nn(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Pn(e){Ht(e.g,(function(e,t){this.g.hasOwnProperty(t)&&an(e)}),e),e.g={}}function Mn(){this.g=!0}function xn(e,t,n,s){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return gn(n)}catch(e){return t}}(e,n)+(s?" "+s:"")}))}Rn.prototype.M=function(){Rn.X.M.call(this),Pn(this)},Rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Mn.prototype.Aa=function(){this.g=!1},Mn.prototype.info=function(){};var Un={},Fn=null;function Vn(){return Fn=Fn||new fn}function Bn(e){gt.call(this,Un.Pa,e)}function qn(e){const t=Vn();pn(t,new Bn(t))}function jn(e,t){gt.call(this,Un.STAT_EVENT,e),this.stat=t}function $n(e){const t=Vn();pn(t,new jn(t,e))}function zn(e,t){gt.call(this,Un.Qa,e),this.size=t}function Kn(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return tt.setTimeout((function(){e()}),t)}Un.Pa="serverreachability",ht(Bn,gt),Un.STAT_EVENT="statevent",ht(jn,gt),Un.Qa="timingevent",ht(zn,gt);var Gn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Hn={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Wn(){}function Qn(e){return e.h||(e.h=e.i())}function Jn(){}Wn.prototype.h=null;var Xn,Yn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zn(){gt.call(this,"d")}function es(){gt.call(this,"c")}function ts(){}function ns(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Rn(this),this.O=rs,e=Nt?125:void 0,this.T=new Cn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ss}function ss(){this.i=null,this.g="",this.h=!1}ht(Zn,gt),ht(es,gt),ht(ts,Wn),ts.prototype.g=function(){return new XMLHttpRequest},ts.prototype.i=function(){return{}},Xn=new ts;var rs=45e3,is={},os={};function as(e,t,n){e.K=1,e.v=Cs(Es(t)),e.s=n,e.P=!0,cs(e,null)}function cs(e,t){e.F=Date.now(),ds(e),e.A=Es(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Vs(n.i,"t",s),e.C=0,n=e.l.H,e.h=new ss,e.g=Fr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Dn(ut(e.La,e,e.g),e.N)),Ln(e.S,e.g,"readystatechange",e.ib),t=e.H?Wt(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),qn(),function(e,t,n,s,r,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function us(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function ls(e,t,n){let s,r=!0;for(;!e.I&&e.C<n.length;){if(s=hs(e,n),s==os){4==t&&(e.o=4,$n(14),r=!1),xn(e.j,e.m,null,"[Incomplete Response]");break}if(s==is){e.o=4,$n(15),xn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}xn(e.j,e.m,s,null),ys(e,s)}us(e)&&s!=os&&s!=is&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,$n(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dr(t),t.K=!0,$n(11))):(xn(e.j,e.m,n,"[Invalid Chunked Response]"),gs(e),ms(e))}function hs(e,t){var n=e.C,s=t.indexOf("\n",n);return-1==s?os:(n=Number(t.substring(n,s)),isNaN(n)?is:(s+=1)+n>t.length?os:(t=t.substr(s,n),e.C=s+n,t))}function ds(e){e.V=Date.now()+e.O,fs(e,e.O)}function fs(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Kn(ut(e.gb,e),t)}function ps(e){e.B&&(tt.clearTimeout(e.B),e.B=null)}function ms(e){0==e.l.G||e.I||Lr(e.l,e)}function gs(e){ps(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,kn(e.T),Pn(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ys(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Ks(n.h,e)))if(!e.J&&Ks(n.h,e)&&3==n.G){try{var s=n.Fa.g.parse(t)}catch(e){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Or(n),Tr(n)}Nr(n),$n(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=Kn(ut(n.cb,n),6e3));if(1>=zs(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Mr(n,11)}else if((e.J||n.g==e)&&Or(n),!vt(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const r=u[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(s=1.5*l,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=s.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Gs(i,i.h),i.h=null))}if(s.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.za=e,Ss(s.F,s.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((s=n).sa=Ur(s,s.H?s.ka:null,s.V),o.J){Hs(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ps(a),ds(a)),s.g=o}else Ar(s);0<n.i.length&&_r(n)}else"stop"!=u[0]&&"close"!=u[0]||Mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Mr(n,7):Er(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}qn()}catch(e){}}function vs(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(st(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(st(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}(e),s=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(st(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}for(s in t=[],n=0,e)t[n++]=e[s];return t}(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}(Xe=ns.prototype).setTimeout=function(e){this.O=e},Xe.ib=function(e){e=e.target;const t=this.L;t&&3==mr(e)?t.l():this.La(e)},Xe.La=function(e){try{if(e==this.g)e:{const l=mr(this.g);var t=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||Nt||this.g&&(this.h.h||this.g.fa()||gr(this.g)))){this.I||4!=l||7==t||qn(),ps(this);var n=this.g.aa();this.Y=n;t:if(us(this)){var s=gr(this.g);e="";var r=s.length,i=4==mr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){gs(this),ms(this);var o="";break t}this.h.i=new tt.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,s,r,i,o){e.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vt(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,$n(12),gs(this),ms(this);break e}xn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ys(this,n)}this.P?(ls(this,l,o),Nt&&this.i&&3==l&&(Ln(this.S,this.T,"tick",this.hb),this.T.start())):(xn(this.j,this.m,o,null),ys(this,o)),4==l&&gs(this),this.i&&!this.I&&(4==l?Lr(this.l,this):(this.i=!1,ds(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,$n(12)):(this.o=0,$n(13)),gs(this),ms(this)}}}catch(e){}},Xe.hb=function(){if(this.g){var e=mr(this.g),t=this.g.fa();this.C<t.length&&(ps(this),ls(this,e,t),this.i&&4!=e&&ds(this))}},Xe.cancel=function(){this.I=!0,gs(this)},Xe.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(qn(),$n(17)),gs(this),this.o=2,ms(this)):fs(this,this.V-e)};var ws=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Is(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Is){this.h=void 0!==t?t:e.h,Ts(this,e.j),this.s=e.s,this.g=e.g,bs(this,e.m),this.l=e.l,t=e.i;var n=new Ms;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),_s(this,n),this.o=e.o}else e&&(n=String(e).match(ws))?(this.h=!!t,Ts(this,n[1]||"",!0),this.s=ks(n[2]||""),this.g=ks(n[3]||"",!0),bs(this,n[4]),this.l=ks(n[5]||"",!0),_s(this,n[6]||"",!0),this.o=ks(n[7]||"")):(this.h=!!t,this.i=new Ms(null,this.h))}function Es(e){return new Is(e)}function Ts(e,t,n){e.j=n?ks(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function bs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function _s(e,t,n){t instanceof Ms?(e.i=t,function(e,t){t&&!e.j&&(xs(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Us(this,t),Vs(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=As(t,Ls)),e.i=new Ms(t,e.h))}function Ss(e,t,n){e.i.set(t,n)}function Cs(e){return Ss(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ks(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function As(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ns),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ns(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Is.prototype.toString=function(){var e=[],t=this.j;t&&e.push(As(t,Ds,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(As(t,Ds,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(As(n,"/"==n.charAt(0)?Os:Rs,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",As(n,Ps)),e.join("")};var Ds=/[#\/\?@]/g,Rs=/[#\?:]/g,Os=/[#\?]/g,Ls=/[#\?@]/g,Ps=/#/g;function Ms(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function xs(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Us(e,t){xs(e),t=Bs(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Fs(e,t){return xs(e),t=Bs(e,t),e.g.has(t)}function Vs(e,t,n){Us(e,t),0<n.length&&(e.i=null,e.g.set(Bs(e,t),pt(n)),e.h+=n.length)}function Bs(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Xe=Ms.prototype).add=function(e,t){xs(this),this.i=null,e=Bs(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Xe.forEach=function(e,t){xs(this),this.g.forEach((function(n,s){n.forEach((function(n){e.call(t,n,s,this)}),this)}),this)},Xe.oa=function(){xs(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let e=0;e<r.length;e++)n.push(t[s])}return n},Xe.W=function(e){xs(this);let t=[];if("string"==typeof e)Fs(this,e)&&(t=t.concat(this.g.get(Bs(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Xe.set=function(e,t){return xs(this),this.i=null,Fs(this,e=Bs(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Xe.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},Xe.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function qs(e){this.l=e||js,tt.PerformanceNavigationTiming?e=0<(e=tt.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(tt.g&&tt.g.Ga&&tt.g.Ga()&&tt.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var js=10;function $s(e){return!!e.h||!!e.g&&e.g.size>=e.j}function zs(e){return e.h?1:e.g?e.g.size:0}function Ks(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Gs(e,t){e.g?e.g.add(t):e.h=t}function Hs(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ws(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return pt(e.i)}function Qs(){}function Js(){this.g=new Qs}function Xs(e,t,n){const s=n||"";try{vs(e,(function(e,n){let r=e;rt(e)&&(r=gn(e)),t.push(s+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(s+"type="+encodeURIComponent("_badmap")),e}}function Ys(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch(e){}}function Zs(e){this.l=e.ac||null,this.j=e.jb||!1}function er(e,t){fn.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=tr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qs.prototype.cancel=function(){if(this.i=Ws(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Qs.prototype.stringify=function(e){return tt.JSON.stringify(e,void 0)},Qs.prototype.parse=function(e){return tt.JSON.parse(e,void 0)},ht(Zs,Wn),Zs.prototype.g=function(){return new er(this.l,this.j)},Zs.prototype.i=function(e){return function(){return e}}({}),ht(er,fn);var tr=0;function nr(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function sr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,rr(e)}function rr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Xe=er.prototype).open=function(e,t){if(this.readyState!=tr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,rr(this)},Xe.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||tt).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},Xe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,sr(this)),this.readyState=tr},Xe.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==tt.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nr(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},Xe.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sr(this):rr(this),3==this.readyState&&nr(this)}},Xe.Va=function(e){this.g&&(this.response=this.responseText=e,sr(this))},Xe.Ua=function(e){this.g&&(this.response=e,sr(this))},Xe.ga=function(){this.g&&sr(this)},Xe.setRequestHeader=function(e,t){this.v.append(e,t)},Xe.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Xe.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(er.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ir=tt.JSON.parse;function or(e){fn.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ar,this.K=this.L=!1}ht(or,fn);var ar="",cr=/^https?$/i,ur=["POST","PUT"];function lr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,hr(e),fr(e)}function hr(e){e.D||(e.D=!0,pn(e,"complete"),pn(e,"error"))}function dr(e){if(e.h&&void 0!==et&&(!e.C[1]||4!=mr(e)||2!=e.aa()))if(e.v&&4==mr(e))An(e.Ha,0,e);else if(pn(e,"readystatechange"),4==mr(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===a){var r=String(e.H).match(ws)[1]||null;if(!r&&tt.self&&tt.self.location){var i=tt.self.location.protocol;r=i.substr(0,i.length-1)}s=!cr.test(r?r.toLowerCase():"")}n=s}if(n)pn(e,"complete"),pn(e,"success");else{e.m=6;try{var o=2<mr(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",hr(e)}}finally{fr(e)}}}function fr(e,t){if(e.g){pr(e);const n=e.g,s=e.C[0]?nt:null;e.g=null,e.C=null,t||pn(e,"ready");try{n.onreadystatechange=s}catch(e){}}}function pr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(tt.clearTimeout(e.A),e.A=null)}function mr(e){return e.g?e.g.readyState:0}function gr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ar:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function yr(e){let t="";return Ht(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function vr(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=yr(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ss(e,t,n))}function wr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ir(e){this.Ca=0,this.i=[],this.j=new Mn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=wr("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=wr("baseRetryDelayMs",5e3,e),this.bb=wr("retryDelaySeedMs",1e4,e),this.$a=wr("forwardChannelMaxRetries",2,e),this.ta=wr("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new qs(e&&e.concurrentRequestLimit),this.Fa=new Js,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Er(e){if(br(e),3==e.G){var t=e.U++,n=Es(e.F);Ss(n,"SID",e.I),Ss(n,"RID",t),Ss(n,"TYPE","terminate"),Cr(e,n),(t=new ns(e,e.j,t,void 0)).K=2,t.v=Cs(Es(n)),n=!1,tt.navigator&&tt.navigator.sendBeacon&&(n=tt.navigator.sendBeacon(t.v.toString(),"")),!n&&tt.Image&&((new Image).src=t.v,n=!0),n||(t.g=Fr(t.l,null),t.g.da(t.v)),t.F=Date.now(),ds(t)}xr(e)}function Tr(e){e.g&&(Dr(e),e.g.cancel(),e.g=null)}function br(e){Tr(e),e.u&&(tt.clearTimeout(e.u),e.u=null),Or(e),e.h.cancel(),e.m&&("number"==typeof e.m&&tt.clearTimeout(e.m),e.m=null)}function _r(e){$s(e.h)||e.m||(e.m=!0,Tn(e.Ja,e),e.C=0)}function Sr(e,t){var n;n=t?t.m:e.U++;const s=Es(e.F);Ss(s,"SID",e.I),Ss(s,"RID",n),Ss(s,"AID",e.T),Cr(e,s),e.o&&e.s&&vr(s,e.o,e.s),n=new ns(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=kr(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Gs(e.h,n),as(n,s,t)}function Cr(e,t){e.ia&&Ht(e.ia,(function(e,n){Ss(t,n,e)})),e.l&&vs({},(function(e,n){Ss(t,n,e)}))}function kr(e,t,n){n=Math.min(e.i.length,n);var s=e.l?ut(e.l.Ra,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),i=!1;else try{Xs(a,e,"req"+n+"_")}catch(e){s&&s(a)}}if(i){s=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,s}function Ar(e){e.g||e.u||(e.Z=1,Tn(e.Ia,e),e.A=0)}function Nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Kn(ut(e.Ia,e),Pr(e,e.A)),e.A++,!0)}function Dr(e){null!=e.B&&(tt.clearTimeout(e.B),e.B=null)}function Rr(e){e.g=new ns(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Es(e.sa);Ss(t,"RID","rpc"),Ss(t,"SID",e.I),Ss(t,"CI",e.L?"0":"1"),Ss(t,"AID",e.T),Ss(t,"TYPE","xmlhttp"),Cr(e,t),e.o&&e.s&&vr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Cs(Es(t)),n.s=null,n.P=!0,cs(n,e)}function Or(e){null!=e.v&&(tt.clearTimeout(e.v),e.v=null)}function Lr(e,t){var n=null;if(e.g==t){Or(e),Dr(e),e.g=null;var s=2}else{if(!Ks(e.h,t))return;n=t.D,Hs(e.h,t),s=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==s){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;pn(s=Vn(),new zn(s,n)),_r(e)}else Ar(e);else if(3==(r=t.o)||0==r&&0<e.pa||!(1==s&&function(e,t){return!(zs(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Kn(ut(e.Ja,e,t),Pr(e,e.C)),e.C++,0)))}(e,t)||2==s&&Nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Mr(e,5);break;case 4:Mr(e,10);break;case 3:Mr(e,6);break;default:Mr(e,2)}}function Pr(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Mr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var s=ut(e.kb,e);n||(n=new Is("//www.google.com/images/cleardot.gif"),tt.location&&"http"==tt.location.protocol||Ts(n,"https"),Cs(n)),function(e,t){const n=new Mn;if(tt.Image){const s=new Image;s.onload=lt(Ys,n,s,"TestLoadImage: loaded",!0,t),s.onerror=lt(Ys,n,s,"TestLoadImage: error",!1,t),s.onabort=lt(Ys,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=lt(Ys,n,s,"TestLoadImage: timeout",!1,t),tt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=e}else t(!1)}(n.toString(),s)}else $n(2);e.G=0,e.l&&e.l.va(t),xr(e),br(e)}function xr(e){if(e.G=0,e.la=[],e.l){const t=Ws(e.h);0==t.length&&0==e.i.length||(mt(e.la,t),mt(e.la,e.i),e.h.i.length=0,pt(e.i),e.i.length=0),e.l.ua()}}function Ur(e,t,n){var s=n instanceof Is?Es(n):new Is(n,void 0);if(""!=s.g)t&&(s.g=t+"."+s.g),bs(s,s.m);else{var r=tt.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Is(null,void 0);s&&Ts(i,s),t&&(i.g=t),r&&bs(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&Ss(s,n,t),Ss(s,"VER",e.ma),Cr(e,s),s}function Fr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new or(new Zs({jb:!0})):new or(e.ra)).Ka(e.H),t}function Vr(){}function Br(){if(kt&&!(10<=Number(Bt)))throw Error("Environmental error: no available transport.")}function qr(e,t){fn.call(this),this.g=new Ir(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!vt(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!vt(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new zr(this)}function jr(e){Zn.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function $r(){es.call(this),this.status=1}function zr(e){this.g=e}(Xe=or.prototype).Ka=function(e){this.L=e},Xe.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xn.g(),this.C=this.u?Qn(this.u):Qn(Xn),this.g.onreadystatechange=ut(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void lr(this,e)}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const e of s.keys())n.set(e,s.get(e))}s=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=tt.FormData&&e instanceof tt.FormData,!(0<=ft(ur,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pr(this),0<this.B&&((this.K=function(e){return kt&&Ft()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.qa,this)):this.A=An(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){lr(this,e)}},Xe.qa=function(){void 0!==et&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pn(this,"timeout"),this.abort(8))},Xe.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,pn(this,"complete"),pn(this,"abort"),fr(this))},Xe.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fr(this,!0)),or.X.M.call(this)},Xe.Ha=function(){this.s||(this.F||this.v||this.l?dr(this):this.fb())},Xe.fb=function(){dr(this)},Xe.aa=function(){try{return 2<mr(this)?this.g.status:-1}catch(e){return-1}},Xe.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Xe.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ir(t)}},Xe.Ea=function(){return this.m},Xe.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Xe=Ir.prototype).ma=8,Xe.G=1,Xe.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new ns(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Wt(i),Jt(i,this.S)):i=this.S),null!==this.o||this.N||(r.H=i,i=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(t+=s)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=kr(this,r,t),Ss(n=Es(this.F),"RID",e),Ss(n,"CVER",22),this.D&&Ss(n,"X-HTTP-Session-Id",this.D),Cr(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(yr(i)))+"&"+t:this.o&&vr(n,this.o,i)),Gs(this.h,r),this.Ya&&Ss(n,"TYPE","init"),this.O?(Ss(n,"$req",t),Ss(n,"SID","null"),r.Z=!0,as(r,n,null)):as(r,n,t),this.G=2}}else 3==this.G&&(e?Sr(this,e):0==this.i.length||$s(this.h)||Sr(this))},Xe.Ia=function(){if(this.u=null,Rr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Kn(ut(this.eb,this),e)}},Xe.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,$n(10),Tr(this),Rr(this))},Xe.cb=function(){null!=this.v&&(this.v=null,Tr(this),Nr(this),$n(19))},Xe.kb=function(e){e?(this.j.info("Successfully pinged google.com"),$n(2)):(this.j.info("Failed to ping google.com"),$n(1))},(Xe=Vr.prototype).xa=function(){},Xe.wa=function(){},Xe.va=function(){},Xe.ua=function(){},Xe.Ra=function(){},Br.prototype.g=function(e,t){return new qr(e,t)},ht(qr,fn),qr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;$n(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Ur(e,null,e.V),_r(e)},qr.prototype.close=function(){Er(this.g)},qr.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=gn(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&_r(t)},qr.prototype.M=function(){this.g.l=null,delete this.j,Er(this.g),delete this.g,qr.X.M.call(this)},ht(jr,Zn),ht($r,es),ht(zr,Vr),zr.prototype.xa=function(){pn(this.g,"a")},zr.prototype.wa=function(e){pn(this.g,new jr(e))},zr.prototype.va=function(e){pn(this.g,new $r)},zr.prototype.ua=function(){pn(this.g,"b")},Br.prototype.createWebChannel=Br.prototype.g,qr.prototype.send=qr.prototype.u,qr.prototype.open=qr.prototype.m,qr.prototype.close=qr.prototype.close,Gn.NO_ERROR=0,Gn.TIMEOUT=8,Gn.HTTP_ERROR=6,Hn.COMPLETE="complete",Jn.EventType=Yn,Yn.OPEN="a",Yn.CLOSE="b",Yn.ERROR="c",Yn.MESSAGE="d",fn.prototype.listen=fn.prototype.N,or.prototype.listenOnce=or.prototype.O,or.prototype.getLastError=or.prototype.Oa,or.prototype.getLastErrorCode=or.prototype.Ea,or.prototype.getStatus=or.prototype.aa,or.prototype.getResponseJson=or.prototype.Sa,or.prototype.getResponseText=or.prototype.fa,or.prototype.send=or.prototype.da,or.prototype.setWithCredentials=or.prototype.Ka;var Kr=Ze.createWebChannelTransport=function(){return new Br},Gr=Ze.getStatEventTarget=function(){return Vn()},Hr=Ze.ErrorCode=Gn,Wr=Ze.EventType=Hn,Qr=Ze.Event=Un,Jr=Ze.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Xr=Ze.FetchXmlHttpFactory=Zs,Yr=Ze.WebChannel=Jn,Zr=Ze.XhrIo=or;const ei="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ti.UNAUTHENTICATED=new ti(null),ti.GOOGLE_CREDENTIALS=new ti("google-credentials-uid"),ti.FIRST_PARTY=new ti("first-party-uid"),ti.MOCK_USER=new ti("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ni="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new se("@firebase/firestore");function ri(){return si.logLevel}function ii(e,...t){if(si.logLevel<=X.DEBUG){const n=t.map(ci);si.debug(`Firestore (${ni}): ${e}`,...n)}}function oi(e,...t){if(si.logLevel<=X.ERROR){const n=t.map(ci);si.error(`Firestore (${ni}): ${e}`,...n)}}function ai(e,...t){if(si.logLevel<=X.WARN){const n=t.map(ci);si.warn(`Firestore (${ni}): ${e}`,...n)}}function ci(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e="Unexpected state"){const t=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+e;throw oi(t),new Error(t)}function li(e,t){e||ui()}function hi(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fi extends L{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ti.UNAUTHENTICATED)))}shutdown(){}}class yi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class vi{constructor(e){this.t=e,this.currentUser=ti.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const s=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new pi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new pi,e.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await s(this.currentUser)}))},o=e=>{ii("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ii("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new pi)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ii("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(li("string"==typeof t.accessToken),new mi(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return li(null===e||"string"==typeof e),new ti(e)}}class wi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=ti.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ii{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new wi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ti.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ei{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ti{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&ii("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,ii("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const s=e=>{ii("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>s(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?s(e):ii("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(li("string"==typeof e.token),this.T=e.token,new Ei(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=bi(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<t&&(n+=e.charAt(s[r]%e.length))}return n}}function Si(e,t){return e<t?-1:e>t?1:0}function Ci(e,t,n){return e.length===t.length&&e.every(((e,s)=>n(e,t[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fi(di.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fi(di.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new fi(di.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fi(di.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ki.fromMillis(Date.now())}static fromDate(e){return ki.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ki(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Si(this.nanoseconds,e.nanoseconds):Si(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ai(e)}static min(){return new Ai(new ki(0,0))}static max(){return new Ai(new ki(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,n){void 0===t?t=0:t>e.length&&ui(),void 0===n?n=e.length-t:n>e.length-t&&ui(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ni.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const n=e.get(s),r=t.get(s);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Di extends Ni{construct(e,t,n){return new Di(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new fi(di.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Di(t)}static emptyPath(){return new Di([])}}const Ri=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oi extends Ni{construct(e,t,n){return new Oi(e,t,n)}static isValidIdentifier(e){return Ri.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oi.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Oi(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const r=()=>{if(0===n.length)throw new fi(di.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;s<e.length;){const t=e[s];if("\\"===t){if(s+1===e.length)throw new fi(di.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new fi(di.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,s+=2}else"`"===t?(i=!i,s++):"."!==t||i?(n+=t,s++):(r(),s++)}if(r(),i)throw new fi(di.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oi(t)}static emptyPath(){return new Oi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.path=e}static fromPath(e){return new Li(Di.fromString(e))}static fromName(e){return new Li(Di.fromString(e).popFirst(5))}static empty(){return new Li(Di.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Di.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Di.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Li(new Di(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}Pi.UNKNOWN_ID=-1;function Mi(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=Ai.fromTimestamp(1e9===s?new ki(n+1,0):new ki(n,s));return new Ui(r,Li.empty(),t)}function xi(e){return new Ui(e.readTime,e.key,-1)}class Ui{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ui(Ai.min(),Li.empty(),-1)}static max(){return new Ui(Ai.max(),Li.empty(),-1)}}function Fi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Li.comparator(e.documentKey,t.documentKey),0!==n?n:Si(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(e){if(e.code!==di.FAILED_PRECONDITION||e.message!==Vi)throw e;ii("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ui(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ji(((n,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ji?t:ji.resolve(t)}catch(e){return ji.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ji.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ji.reject(t)}static resolve(e){return new ji(((t,n)=>{t(e)}))}static reject(e){return new ji(((t,n)=>{n(e)}))}static waitFor(e){return new ji(((t,n)=>{let s=0,r=0,i=!1;e.forEach((e=>{++s,e.next((()=>{++r,i&&r===s&&t()}),(e=>n(e)))})),i=!0,r===s&&t()}))}static or(e){let t=ji.resolve(!1);for(const n of e)t=t.next((e=>e?ji.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,s)=>{n.push(t.call(this,e,s))})),this.waitFor(n)}static mapArray(e,t){return new ji(((n,s)=>{const r=e.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===r&&n(i)}),(e=>s(e)))}}))}static doWhile(e,t){return new ji(((n,s)=>{const r=()=>{!0===e()?t().next((()=>{r()}),s):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Ki(e){return null==e}function Gi(e){return 0===e&&1/e==-1/0}function Hi(e){return"number"==typeof e&&Number.isInteger(e)&&!Gi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zi.ct=-1;const Wi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Qi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ji=Qi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Yi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Zi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.comparator=e,this.root=t||no.EMPTY}insert(e,t){return new eo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,no.BLACK,null,null))}remove(e){return new eo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,no.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(0===s)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class no{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=null!=n?n:no.RED,this.left=null!=s?s:no.EMPTY,this.right=null!=r?r:no.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,r){return new no(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===r?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return no.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return no.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,no.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,no.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ui();if(this.right.isRed())throw ui();const e=this.left.check();if(e!==this.right.check())throw ui();return e+(this.isRed()?0:1)}}no.EMPTY=null,no.RED=!0,no.BLACK=!1,no.EMPTY=new class{constructor(){this.size=0}get key(){throw ui()}get value(){throw ui()}get color(){throw ui()}get left(){throw ui()}get right(){throw ui()}copy(e,t,n,s,r){return this}insert(e,t,n){return new no(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{constructor(e){this.comparator=e,this.data=new eo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(e){return new ro(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof so))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new so(this.comparator);return t.data=e,t}}class ro{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e){this.fields=e,e.sort(Oi.comparator)}static empty(){return new io([])}unionWith(e){let t=new so(Oi.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new io(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ci(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new oo("Invalid base64 string: "+e):e}}(e);return new ao(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ao(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Si(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ao.EMPTY_BYTE_STRING=new ao("");const co=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function uo(e){if(li(!!e),"string"==typeof e){let t=0;const n=co.exec(e);if(li(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:lo(e.seconds),nanos:lo(e.nanos)}}function lo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ho(e){return"string"==typeof e?ao.fromBase64String(e):ao.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function po(e){const t=e.mapValue.fields.__previous_value__;return fo(t)?po(t):t}function mo(e){const t=uo(e.mapValue.fields.__local_write_time__.timestampValue);return new ki(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,n,s,r,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class yo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fo(e)?4:Lo(e)?9007199254740991:10:ui()}function Io(e,t){if(e===t)return!0;const n=wo(e);if(n!==wo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return mo(e).isEqual(mo(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=uo(e.timestampValue),s=uo(t.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ho(e.bytesValue).isEqual(ho(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return lo(e.geoPointValue.latitude)===lo(t.geoPointValue.latitude)&&lo(e.geoPointValue.longitude)===lo(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return lo(e.integerValue)===lo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=lo(e.doubleValue),s=lo(t.doubleValue);return n===s?Gi(n)===Gi(s):isNaN(n)&&isNaN(s)}return!1}(e,t);case 9:return Ci(e.arrayValue.values||[],t.arrayValue.values||[],Io);case 10:return function(e,t){const n=e.mapValue.fields||{},s=t.mapValue.fields||{};if(Xi(n)!==Xi(s))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===s[e]||!Io(n[e],s[e])))return!1;return!0}(e,t);default:return ui()}}function Eo(e,t){return void 0!==(e.values||[]).find((e=>Io(e,t)))}function To(e,t){if(e===t)return 0;const n=wo(e),s=wo(t);if(n!==s)return Si(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Si(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=lo(e.integerValue||e.doubleValue),s=lo(t.integerValue||t.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(e,t);case 3:return bo(e.timestampValue,t.timestampValue);case 4:return bo(mo(e),mo(t));case 5:return Si(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ho(e),s=ho(t);return n.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),s=t.split("/");for(let e=0;e<n.length&&e<s.length;e++){const t=Si(n[e],s[e]);if(0!==t)return t}return Si(n.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Si(lo(e.latitude),lo(t.latitude));return 0!==n?n:Si(lo(e.longitude),lo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],s=t.values||[];for(let e=0;e<n.length&&e<s.length;++e){const t=To(n[e],s[e]);if(t)return t}return Si(n.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===vo.mapValue&&t===vo.mapValue)return 0;if(e===vo.mapValue)return 1;if(t===vo.mapValue)return-1;const n=e.fields||{},s=Object.keys(n),r=t.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let e=0;e<s.length&&e<i.length;++e){const t=Si(s[e],i[e]);if(0!==t)return t;const o=To(n[s[e]],r[i[e]]);if(0!==o)return o}return Si(s.length,i.length)}(e.mapValue,t.mapValue);default:throw ui()}}function bo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Si(e,t);const n=uo(e),s=uo(t),r=Si(n.seconds,s.seconds);return 0!==r?r:Si(n.nanos,s.nanos)}function _o(e){return So(e)}function So(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=uo(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ho(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Li.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const s of e.values||[])n?n=!1:t+=",",t+=So(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",s=!0;for(const r of t)s?s=!1:n+=",",n+=`${r}:${So(e.fields[r])}`;return n+"}"}(e.mapValue):ui()}function Co(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ko(e){return!!e&&"integerValue"in e}function Ao(e){return!!e&&"arrayValue"in e}function No(e){return!!e&&"nullValue"in e}function Do(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ro(e){return!!e&&"mapValue"in e}function Oo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Yi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Oo(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Oo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Lo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(e){this.value=e}static empty(){return new Po({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ro(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oo(t)}setAll(e){let t=Oi.emptyPath(),n={},s=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,s),n={},s=[],t=r.popLast()}e?n[r.lastSegment()]=Oo(e):s.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,s)}delete(e){const t=this.field(e.popLast());Ro(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Io(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Yi(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Po(Oo(this.value))}}function Mo(e){const t=[];return Yi(e.fields,((e,n)=>{const s=new Oi([e]);if(Ro(n)){const e=Mo(n.mapValue).fields;if(0===e.length)t.push(s);else for(const n of e)t.push(s.child(n))}else t.push(s)})),new io(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xo{constructor(e,t,n,s,r,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new xo(e,0,Ai.min(),Ai.min(),Ai.min(),Po.empty(),0)}static newFoundDocument(e,t,n,s){return new xo(e,1,t,Ai.min(),n,s,0)}static newNoDocument(e,t){return new xo(e,2,t,Ai.min(),Ai.min(),Po.empty(),0)}static newUnknownDocument(e,t){return new xo(e,3,t,Ai.min(),Ai.min(),Po.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ai.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Po.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Po.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ai.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof xo&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t){this.position=e,this.inclusive=t}}function Fo(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(s=i.field.isKeyField()?Li.comparator(Li.fromName(o.referenceValue),n.key):To(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function Vo(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Io(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t="asc"){this.field=e,this.dir=t}}function qo(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{}class $o extends jo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Xo(e,t,n):"array-contains"===t?new ta(e,n):"in"===t?new na(e,n):"not-in"===t?new sa(e,n):"array-contains-any"===t?new ra(e,n):new $o(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Yo(e,n):new Zo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(To(t,this.value)):null!==t&&wo(this.value)===wo(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ui()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class zo extends jo{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new zo(e,t)}matches(e){return Ko(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ko(e){return"and"===e.op}function Go(e){return Ho(e)&&Ko(e)}function Ho(e){for(const t of e.filters)if(t instanceof zo)return!1;return!0}function Wo(e){if(e instanceof $o)return e.field.canonicalString()+e.op.toString()+_o(e.value);if(Go(e))return e.filters.map((e=>Wo(e))).join(",");{const t=e.filters.map((e=>Wo(e))).join(",");return`${e.op}(${t})`}}function Qo(e,t){return e instanceof $o?function(e,t){return t instanceof $o&&e.op===t.op&&e.field.isEqual(t.field)&&Io(e.value,t.value)}(e,t):e instanceof zo?function(e,t){return t instanceof zo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,s)=>e&&Qo(n,t.filters[s])),!0)}(e,t):void ui()}function Jo(e){return e instanceof $o?function(e){return`${e.field.canonicalString()} ${e.op} ${_o(e.value)}`}(e):e instanceof zo?function(e){return e.op.toString()+" {"+e.getFilters().map(Jo).join(" ,")+"}"}(e):"Filter"}class Xo extends $o{constructor(e,t,n){super(e,t,n),this.key=Li.fromName(n.referenceValue)}matches(e){const t=Li.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yo extends $o{constructor(e,t){super(e,"in",t),this.keys=ea("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Zo extends $o{constructor(e,t){super(e,"not-in",t),this.keys=ea("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ea(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Li.fromName(e.referenceValue)))}class ta extends $o{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ao(t)&&Eo(t.arrayValue,this.value)}}class na extends $o{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Eo(this.value.arrayValue,t)}}class sa extends $o{constructor(e,t){super(e,"not-in",t)}matches(e){if(Eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Eo(this.value.arrayValue,t)}}class ra extends $o{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Eo(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t=null,n=[],s=[],r=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ft=null}}function oa(e,t=null,n=[],s=[],r=null,i=null,o=null){return new ia(e,t,n,s,r,i,o)}function aa(e){const t=hi(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Wo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ki(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>_o(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>_o(e))).join(",")),t.ft=e}return t.ft}function ca(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!qo(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Qo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Vo(e.startAt,t.startAt)&&Vo(e.endAt,t.endAt)}function ua(e){return Li.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{constructor(e,t=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ha(e,t,n,s,r,i,o,a){return new la(e,t,n,s,r,i,o,a)}function da(e){return new la(e)}function fa(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function pa(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ma(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function ga(e){return null!==e.collectionGroup}function ya(e){const t=hi(e);if(null===t.dt){t.dt=[];const e=ma(t),n=pa(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Bo(e)),t.dt.push(new Bo(Oi.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Bo(Oi.keyField(),e))}}}return t.dt}function va(e){const t=hi(e);if(!t.wt)if("F"===t.limitType)t.wt=oa(t.path,t.collectionGroup,ya(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of ya(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Bo(n.field,t))}const n=t.endAt?new Uo(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Uo(t.startAt.position,t.startAt.inclusive):null;t.wt=oa(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}return t.wt}function wa(e,t){t.getFirstInequalityField(),ma(e);const n=e.filters.concat([t]);return new la(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ia(e,t,n){return new la(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ea(e,t){return ca(va(e),va(t))&&e.limitType===t.limitType}function Ta(e){return`${aa(va(e))}|lt:${e.limitType}`}function ba(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Jo(e))).join(", ")}]`),Ki(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>_o(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>_o(e))).join(",")),`Target(${t})`}(va(e))}; limitType=${e.limitType})`}function _a(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Li.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ya(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const s=Fo(e,t,n);return e.inclusive?s<=0:s<0}(e.startAt,ya(e),t))&&!(e.endAt&&!function(e,t,n){const s=Fo(e,t,n);return e.inclusive?s>=0:s>0}(e.endAt,ya(e),t))}(e,t)}function Sa(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ca(e){return(t,n)=>{let s=!1;for(const r of ya(e)){const e=ka(r,t,n);if(0!==e)return e;s=s||r.field.isKeyField()}return 0}}function ka(e,t,n){const s=e.field.isKeyField()?Li.comparator(t.key,n.key):function(e,t,n){const s=t.data.field(e),r=n.data.field(e);return null!==s&&null!==r?To(s,r):ui()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return ui()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,s]of n)if(this.equalsFn(t,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(void 0===s)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return 1===n.length?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,((t,n)=>{for(const[t,s]of n)e(t,s)}))}isEmpty(){return Zi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new eo(Li.comparator);function Da(){return Na}const Ra=new eo(Li.comparator);function Oa(...e){let t=Ra;for(const n of e)t=t.insert(n.key,n);return t}function La(e){let t=Ra;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Pa(){return xa()}function Ma(){return xa()}function xa(){return new Aa((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ua=new eo(Li.comparator),Fa=new so(Li.comparator);function Va(...e){let t=Fa;for(const n of e)t=t.add(n);return t}const Ba=new so(Si);function qa(){return Ba}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gi(t)?"-0":t}}function $a(e){return{integerValue:""+e}}function za(e,t){return Hi(t)?$a(t):ja(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this._=void 0}}function Ga(e,t,n){return e instanceof Qa?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ja?Xa(e,t):e instanceof Ya?Za(e,t):function(e,t){const n=Wa(e,t),s=tc(n)+tc(e._t);return ko(n)&&ko(e._t)?$a(s):ja(e.serializer,s)}(e,t)}function Ha(e,t,n){return e instanceof Ja?Xa(e,t):e instanceof Ya?Za(e,t):n}function Wa(e,t){var n;return e instanceof ec?ko(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class Qa extends Ka{}class Ja extends Ka{constructor(e){super(),this.elements=e}}function Xa(e,t){const n=nc(t);for(const t of e.elements)n.some((e=>Io(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Ya extends Ka{constructor(e){super(),this.elements=e}}function Za(e,t){let n=nc(t);for(const t of e.elements)n=n.filter((e=>!Io(e,t)));return{arrayValue:{values:n}}}class ec extends Ka{constructor(e,t){super(),this.serializer=e,this._t=t}}function tc(e){return lo(e.integerValue||e.doubleValue)}function nc(e){return Ao(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.version=e,this.transformResults=t}}class rc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rc}static exists(e){return new rc(void 0,e)}static updateTime(e){return new rc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ic(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class oc{}function ac(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new yc(e.key,rc.none()):new dc(e.key,e.data,rc.none());{const n=e.data,s=Po.empty();let r=new so(Oi.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?s.delete(e):s.set(e,t),r=r.add(e)}return new fc(e.key,s,new io(r.toArray()),rc.none())}}function cc(e,t,n){e instanceof dc?function(e,t,n){const s=e.value.clone(),r=mc(e.fieldTransforms,t,n.transformResults);s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):e instanceof fc?function(e,t,n){if(!ic(e.precondition,t))return void t.convertToUnknownDocument(n.version);const s=mc(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(pc(e)),r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function uc(e,t,n,s){return e instanceof dc?function(e,t,n,s){if(!ic(e.precondition,t))return n;const r=e.value.clone(),i=gc(e.fieldTransforms,s,t);return r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,s):e instanceof fc?function(e,t,n,s){if(!ic(e.precondition,t))return n;const r=gc(e.fieldTransforms,s,t),i=t.data;return i.setAll(pc(e)),i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,s):function(e,t,n){return ic(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function lc(e,t){let n=null;for(const s of e.fieldTransforms){const e=t.data.field(s.field),r=Wa(s.transform,e||null);null!=r&&(null===n&&(n=Po.empty()),n.set(s.field,r))}return n||null}function hc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ci(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ja&&t instanceof Ja||e instanceof Ya&&t instanceof Ya?Ci(e.elements,t.elements,Io):e instanceof ec&&t instanceof ec?Io(e._t,t._t):e instanceof Qa&&t instanceof Qa}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class dc extends oc{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fc extends oc{constructor(e,t,n,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function pc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}})),t}function mc(e,t,n){const s=new Map;li(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Ha(o,a,n[r]))}return s}function gc(e,t,n){const s=new Map;for(const r of e){const e=r.transform,i=n.data.field(r.field);s.set(r.field,Ga(e,i,t))}return s}class yc extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vc extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const s=this.mutations[t];s.key.isEqual(e.key)&&cc(s,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=uc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=uc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ma();return this.mutations.forEach((s=>{const r=e.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=t.has(s.key)?null:o;const a=ac(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(Ai.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Va())}isEqual(e){return this.batchId===e.batchId&&Ci(this.mutations,e.mutations,((e,t)=>hc(e,t)))&&Ci(this.baseMutations,e.baseMutations,((e,t)=>hc(e,t)))}}class Ic{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){li(e.mutations.length===n.length);let s=Ua;const r=e.mutations;for(let e=0;e<r.length;e++)s=s.insert(r[e].key,n[e].version);return new Ic(e,t,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bc,_c;function Sc(e){switch(e){default:return ui();case di.CANCELLED:case di.UNKNOWN:case di.DEADLINE_EXCEEDED:case di.RESOURCE_EXHAUSTED:case di.INTERNAL:case di.UNAVAILABLE:case di.UNAUTHENTICATED:return!1;case di.INVALID_ARGUMENT:case di.NOT_FOUND:case di.ALREADY_EXISTS:case di.PERMISSION_DENIED:case di.FAILED_PRECONDITION:case di.ABORTED:case di.OUT_OF_RANGE:case di.UNIMPLEMENTED:case di.DATA_LOSS:return!0}}function Cc(e){if(void 0===e)return oi("GRPC error has no .code"),di.UNKNOWN;switch(e){case bc.OK:return di.OK;case bc.CANCELLED:return di.CANCELLED;case bc.UNKNOWN:return di.UNKNOWN;case bc.DEADLINE_EXCEEDED:return di.DEADLINE_EXCEEDED;case bc.RESOURCE_EXHAUSTED:return di.RESOURCE_EXHAUSTED;case bc.INTERNAL:return di.INTERNAL;case bc.UNAVAILABLE:return di.UNAVAILABLE;case bc.UNAUTHENTICATED:return di.UNAUTHENTICATED;case bc.INVALID_ARGUMENT:return di.INVALID_ARGUMENT;case bc.NOT_FOUND:return di.NOT_FOUND;case bc.ALREADY_EXISTS:return di.ALREADY_EXISTS;case bc.PERMISSION_DENIED:return di.PERMISSION_DENIED;case bc.FAILED_PRECONDITION:return di.FAILED_PRECONDITION;case bc.ABORTED:return di.ABORTED;case bc.OUT_OF_RANGE:return di.OUT_OF_RANGE;case bc.UNIMPLEMENTED:return di.UNIMPLEMENTED;case bc.DATA_LOSS:return di.DATA_LOSS;default:return ui()}}(_c=bc||(bc={}))[_c.OK=0]="OK",_c[_c.CANCELLED=1]="CANCELLED",_c[_c.UNKNOWN=2]="UNKNOWN",_c[_c.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_c[_c.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_c[_c.NOT_FOUND=5]="NOT_FOUND",_c[_c.ALREADY_EXISTS=6]="ALREADY_EXISTS",_c[_c.PERMISSION_DENIED=7]="PERMISSION_DENIED",_c[_c.UNAUTHENTICATED=16]="UNAUTHENTICATED",_c[_c.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_c[_c.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_c[_c.ABORTED=10]="ABORTED",_c[_c.OUT_OF_RANGE=11]="OUT_OF_RANGE",_c[_c.UNIMPLEMENTED=12]="UNIMPLEMENTED",_c[_c.INTERNAL=13]="INTERNAL",_c[_c.UNAVAILABLE=14]="UNAVAILABLE",_c[_c.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ac}static getOrCreateInstance(){return null===Ac&&(Ac=new kc),Ac}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Ac=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,n,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Dc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Nc(Ai.min(),s,qa(),Da(),Va())}}class Dc{constructor(e,t,n,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Dc(n,t,Va(),Va(),Va())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,n,s){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=s}}class Oc{constructor(e,t){this.targetId=e,this.Et=t}}class Lc{constructor(e,t,n=ao.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Pc{constructor(){this.At=0,this.Rt=Uc(),this.vt=ao.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=Va(),t=Va(),n=Va();return this.Rt.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:ui()}})),new Dc(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=Uc()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Mc{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Da(),this.qt=xc(),this.Ut=new so(Si)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:ui()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(ua(i))if(0===s){const e=new Li(i.path);this.Qt(n,e,xo.newNoDocument(e,Ai.min()))}else li(1===s);else{const r=this.Zt(n);r!==s&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=kc.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:r,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((n,s)=>{const r=this.Yt(s);if(r){if(n.current&&ua(r.target)){const t=new Li(r.target.path);null!==this.Lt.get(t)||this.te(s,t)||this.Qt(s,t,xo.newNoDocument(t,e))}n.St&&(t.set(s,n.Ct()),n.xt())}}));let n=Va();this.qt.forEach(((e,t)=>{let s=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(s=!1,!1)})),s&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const s=new Nc(e,t,this.Ut,this.Lt,n);return this.Lt=Da(),this.qt=xc(),this.Ut=new so(Si),s}Gt(e,t){if(!this.Wt(e))return;const n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,t)?s.Nt(t,1):s.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Pc,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new so(Si),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||ii("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Pc),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function xc(){return new eo(Li.comparator)}function Uc(){return new eo(Li.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={asc:"ASCENDING",desc:"DESCENDING"},Vc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bc={and:"AND",or:"OR"};class qc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $c(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function zc(e,t){return jc(e,t.toTimestamp())}function Kc(e){return li(!!e),Ai.fromTimestamp(function(e){const t=uo(e);return new ki(t.seconds,t.nanos)}(e))}function Gc(e,t){return function(e){return new Di(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Hc(e){const t=Di.fromString(e);return li(fu(t)),t}function Wc(e,t){return Gc(e.databaseId,t.path)}function Qc(e,t){const n=Hc(t);if(n.get(1)!==e.databaseId.projectId)throw new fi(di.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fi(di.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Li(Zc(n))}function Jc(e,t){return Gc(e.databaseId,t)}function Xc(e){const t=Hc(e);return 4===t.length?Di.emptyPath():Zc(t)}function Yc(e){return new Di(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Zc(e){return li(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function eu(e,t,n){return{name:Wc(e,t),fields:n.value.mapValue.fields}}function tu(e,t){let n;if(t instanceof dc)n={update:eu(e,t.key,t.value)};else if(t instanceof yc)n={delete:Wc(e,t.key)};else if(t instanceof fc)n={update:eu(e,t.key,t.data),updateMask:du(t.fieldMask)};else{if(!(t instanceof vc))return ui();n={verify:Wc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Qa)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ja)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ya)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ec)return{fieldPath:t.field.canonicalString(),increment:n._t};throw ui()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:zc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ui()}(e,t.precondition)),n}function nu(e,t){return{documents:[Jc(e,t.path)]}}function su(e,t){const n={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(n.parent=Jc(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Jc(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(e){if(0!==e.length)return hu(zo.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:uu(e.field),direction:ou(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.useProto3Json||Ki(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ru(e){let t=Xc(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){li(1===s);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=iu(e);return t instanceof zo&&Go(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Bo(lu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ki(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Uo(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Uo(n,t)}(n.endAt)),ha(t,r,o,i,a,"F",c,u)}function iu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=lu(e.unaryFilter.field);return $o.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=lu(e.unaryFilter.field);return $o.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=lu(e.unaryFilter.field);return $o.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=lu(e.unaryFilter.field);return $o.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ui()}}(e):void 0!==e.fieldFilter?function(e){return $o.create(lu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ui()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return zo.create(e.compositeFilter.filters.map((e=>iu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ui()}}(e.compositeFilter.op))}(e):ui()}function ou(e){return Fc[e]}function au(e){return Vc[e]}function cu(e){return Bc[e]}function uu(e){return{fieldPath:e.canonicalString()}}function lu(e){return Oi.fromServerFormat(e.fieldPath)}function hu(e){return e instanceof $o?function(e){if("=="===e.op){if(Do(e.value))return{unaryFilter:{field:uu(e.field),op:"IS_NAN"}};if(No(e.value))return{unaryFilter:{field:uu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Do(e.value))return{unaryFilter:{field:uu(e.field),op:"IS_NOT_NAN"}};if(No(e.value))return{unaryFilter:{field:uu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uu(e.field),op:au(e.op),value:e.value}}}(e):e instanceof zo?function(e){const t=e.getFilters().map((e=>hu(e)));return 1===t.length?t[0]:{compositeFilter:{op:cu(e.op),filters:t}}}(e):ui()}function du(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function fu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,n,s,r=Ai.min(),i=Ai.min(),o=ao.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new pu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new pu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new pu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.se=e}}function gu(e){const t=ru({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ia(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(lo(e.integerValue));else if("doubleValue"in e){const n=lo(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),Gi(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(ho(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?Lo(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):ui()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),Li.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}yu.pe=new yu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{constructor(){this.He=new wu}addToCollectionParentIndex(e,t){return this.He.add(t),ji.resolve()}getCollectionParents(e,t){return ji.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return ji.resolve()}deleteFieldIndex(e,t){return ji.resolve()}getDocumentsMatchingTarget(e,t){return ji.resolve(null)}getIndexType(e,t){return ji.resolve(0)}getFieldIndexes(e,t){return ji.resolve([])}getNextCollectionGroupToUpdate(e){return ji.resolve(null)}getMinOffset(e,t){return ji.resolve(Ui.min())}getMinOffsetFromCollectionGroup(e,t){return ji.resolve(Ui.min())}updateCollectionGroup(e,t,n){return ji.resolve()}updateIndexEntries(e,t){return ji.resolve()}}class wu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new so(Di.comparator),r=!s.has(n);return this.index[t]=s.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new so(Di.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Iu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Iu(e,Iu.DEFAULT_COLLECTION_PERCENTILE,Iu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Iu.DEFAULT_COLLECTION_PERCENTILE=10,Iu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Iu.DEFAULT=new Iu(41943040,Iu.DEFAULT_COLLECTION_PERCENTILE,Iu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Iu.DISABLED=new Iu(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Eu(0)}static bn(){return new Eu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tu{constructor(){this.changes=new Aa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xo.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ji.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bu{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&uc(n.mutation,e,io.empty(),ki.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Va()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Va()){const s=Pa();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((e=>{let t=Oa();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Pa();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Va())))}populateOverlays(e,t,n){const s=[];return n.forEach((e=>{t.has(e)||s.push(e)})),this.documentOverlayCache.getOverlays(e,s).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,s){let r=Da();const i=xa(),o=xa();return t.forEach(((e,t)=>{const o=n.get(t.key);s.has(t.key)&&(void 0===o||o.mutation instanceof fc)?r=r.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),uc(o.mutation,t,o.mutation.getFieldMask(),ki.now())):i.set(t.key,io.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new bu(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=xa();let s=new eo(((e,t)=>e-t)),r=Va();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||io.empty();o=r.applyToLocalView(i,o),n.set(e,o);const a=(s.get(r.batchId)||Va()).add(e);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=Ma();c.forEach((e=>{if(!r.has(e)){const s=ac(t.get(e),n.get(e));null!==s&&u.set(e,s),r=r.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return ji.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Li.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ga(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-r.size):ji.resolve(Pa());let o=-1,a=r;return i.next((t=>ji.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?ji.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Va()))).next((e=>({batchId:o,changes:La(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Li(t)).next((e=>{let t=Oa();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const s=t.collectionGroup;let r=Oa();return this.indexManager.getCollectionParents(e,s).next((i=>ji.forEach(i,(i=>{const o=function(e,t){return new la(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(s));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s)))).next((e=>{s.forEach(((t,n)=>{const s=n.getKey();null===e.get(s)&&(e=e.insert(s,xo.newInvalidDocument(s)))}));let n=Oa();return e.forEach(((e,r)=>{const i=s.get(e);void 0!==i&&uc(i.mutation,r,io.empty(),ki.now()),_a(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return ji.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Kc(n.createTime)}),ji.resolve()}getNamedQuery(e,t){return ji.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:gu(e.bundledQuery),readTime:Kc(e.readTime)}}(t)),ji.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.overlays=new eo(Li.comparator),this.ts=new Map}getOverlay(e,t){return ji.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Pa();return ji.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,s)=>{this.re(e,t,s)})),ji.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.ts.get(n);return void 0!==s&&(s.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),ji.resolve()}getOverlaysForCollection(e,t,n){const s=Pa(),r=t.length+1,i=new Li(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===r&&e.largestBatchId>n&&s.set(e.getKey(),e)}return ji.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let r=new eo(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=Pa(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Pa(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=s)););return ji.resolve(o)}re(e,t,n){const s=this.overlays.get(n.key);if(null!==s){const e=this.ts.get(s.largestBatchId).delete(n.key);this.ts.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Ec(t,n));let r=this.ts.get(t);void 0===r&&(r=Va(),this.ts.set(t,r)),this.ts.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.es=new so(Au.ns),this.ss=new so(Au.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new Au(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new Au(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new Li(new Di([])),n=new Au(t,e),s=new Au(t,e+1),r=[];return this.ss.forEachInRange([n,s],(e=>{this.us(e),r.push(e.key)})),r}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new Li(new Di([])),n=new Au(t,e),s=new Au(t,e+1);let r=Va();return this.ss.forEachInRange([n,s],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new Au(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Au{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return Li.comparator(e.key,t.key)||Si(e.ds,t.ds)}static rs(e,t){return Si(e.ds,t.ds)||Li.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new so(Au.ns)}checkEmpty(e){return ji.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new wc(r,t,n,s);this.mutationQueue.push(i);for(const t of s)this._s=this._s.add(new Au(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ji.resolve(i)}lookupMutationBatch(e,t){return ji.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ys(n),r=s<0?0:s;return ji.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ji.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return ji.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Au(t,0),s=new Au(t,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([n,s],(e=>{const t=this.gs(e.ds);r.push(t)})),ji.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new so(Si);return t.forEach((e=>{const t=new Au(e,0),s=new Au(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,s],(e=>{n=n.add(e.ds)}))})),ji.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let r=n;Li.isDocumentKey(r)||(r=r.child(""));const i=new Au(new Li(r),0);let o=new so(Si);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===s&&(o=o.add(e.ds)),!0)}),i),ji.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){li(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return ji.forEach(t.mutations,(s=>{const r=new Au(s.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new Au(t,0),s=this._s.firstAfterOrEqual(n);return ji.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,ji.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.Ts=e,this.docs=new eo(Li.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),r=s?s.size:0,i=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ji.resolve(n?n.document.mutableCopy():xo.newInvalidDocument(t))}getEntries(e,t){let n=Da();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():xo.newInvalidDocument(e))})),ji.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let r=Da();const i=t.path,o=new Li(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Fi(xi(o),n)<=0||(s.has(o.key)||_a(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return ji.resolve(r)}getAllFromCollectionGroup(e,t,n,s){ui()}Es(e,t){return ji.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ru(this)}getSize(e){return ji.resolve(this.size)}}class Ru extends Tu{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(n)})),ji.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this.persistence=e,this.As=new Aa((e=>aa(e)),ca),this.lastRemoteSnapshotVersion=Ai.min(),this.highestTargetId=0,this.Rs=0,this.vs=new ku,this.targetCount=0,this.bs=Eu.vn()}forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),ji.resolve()}getLastRemoteSnapshotVersion(e){return ji.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ji.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),ji.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),ji.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Eu(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,ji.resolve()}updateTargetData(e,t){return this.Sn(t),ji.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,ji.resolve()}removeTargets(e,t,n){let s=0;const r=[];return this.As.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(i),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)})),ji.waitFor(r).next((()=>s))}getTargetCount(e){return ji.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return ji.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),ji.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((t=>{r.push(s.markPotentiallyOrphaned(e,t))})),ji.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),ji.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return ji.resolve(n)}containsKey(e,t){return ji.resolve(this.vs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new zi(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Ou(this),this.indexManager=new vu,this.remoteDocumentCache=function(e){return new Du(e)}((e=>this.referenceDelegate.Cs(e))),this.serializer=new mu(t),this.xs=new Su(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Cu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Nu(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){ii("MemoryPersistence","Starting transaction:",e);const s=new Pu(this.Vs.next());return this.referenceDelegate.Ns(),n(s).next((e=>this.referenceDelegate.ks(s).next((()=>e)))).toPromise().then((e=>(s.raiseOnCommittedEvent(),e)))}Os(e,t){return ji.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class Pu extends Bi{constructor(e){super(),this.currentSequenceNumber=e}}class Mu{constructor(e){this.persistence=e,this.$s=new ku,this.Ms=null}static Fs(e){return new Mu(e)}get Bs(){if(this.Ms)return this.Ms;throw ui()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),ji.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),ji.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),ji.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ji.forEach(this.Bs,(n=>{const s=Li.fromPath(n);return this.Ls(e,s).next((e=>{e||t.removeEntry(s,Ai.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return ji.or([()=>ji.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xu{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=s}static Di(e,t){let n=Va(),s=Va();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new xu(e,t.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,s){return this.Ni(e,t).next((r=>r||this.ki(e,t,s,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(fa(t))return ji.resolve(null);let n=va(t);return this.indexManager.getIndexType(e,n).next((s=>0===s?null:(null!==t.limit&&1===s&&(t=Ia(t,null,"F"),n=va(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const r=Va(...s);return this.xi.getDocuments(e,r).next((s=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.$i(t,s);return this.Mi(t,i,r,n.readTime)?this.Ni(e,Ia(t,null,"F")):this.Fi(e,i,t,n)}))))})))))}ki(e,t,n,s){return fa(t)||s.isEqual(Ai.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((r=>{const i=this.$i(t,r);return this.Mi(t,i,n,s)?this.Oi(e,t):(ri()<=X.DEBUG&&ii("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ba(t)),this.Fi(e,i,t,Mi(s,-1)))}))}$i(e,t){let n=new so(Ca(e));return t.forEach(((t,s)=>{_a(e,s)&&(n=n.add(s))})),n}Mi(e,t,n,s){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,t){return ri()<=X.DEBUG&&ii("QueryEngine","Using full collection scan to execute query:",ba(t)),this.xi.getDocumentsMatchingQuery(e,t,Ui.min())}Fi(e,t,n,s){return this.xi.getDocumentsMatchingQuery(e,n,s).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,n,s){this.persistence=e,this.Bi=t,this.serializer=s,this.Li=new eo(Si),this.qi=new Aa((e=>aa(e)),ca),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _u(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}}function Vu(e,t,n,s){return new Fu(e,t,n,s)}async function Bu(e,t){const n=hi(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.mutationQueue.getAllMutationBatches(e).next((r=>(s=r,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],i=[];let o=Va();for(const e of s){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:r,addedBatchIds:i})))}))}))}function qu(e){const t=hi(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function ju(e,t,n){let s=Va(),r=Va();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=Da();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(Ai.min())?(t.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),s=s.insert(n,i)):ii("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{zi:s,ji:r}}))}function $u(e,t){const n=hi(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function zu(e,t){const n=hi(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let s;return n.Ds.getTargetData(e,t).next((r=>r?(s=r,ji.resolve(s)):n.Ds.allocateTargetId(e).next((r=>(s=new pu(t,r,0,e.currentSequenceNumber),n.Ds.addTargetData(e,s).next((()=>s)))))))})).then((e=>{const s=n.Li.get(e.targetId);return(null===s||e.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function Ku(e,t,n){const s=hi(e),r=s.Li.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(e=>s.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!$i(e))throw e;ii("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}s.Li=s.Li.remove(t),s.qi.delete(r.target)}function Gu(e,t,n){const s=hi(e);let r=Ai.min(),i=Va();return s.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const s=hi(e),r=s.qi.get(n);return void 0!==r?ji.resolve(s.Li.get(r)):s.Ds.getTargetData(t,n)}(s,e,va(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>s.Bi.getDocumentsMatchingQuery(e,t,n?r:Ai.min(),n?i:Va()))).next((e=>(Hu(s,Sa(t),e),{documents:e,Wi:i})))))}function Hu(e,t,n){let s=e.Ui.get(t)||Ai.min();n.forEach(((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)})),e.Ui.set(t,s)}class Wu{constructor(){this.activeTargetIds=qa()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qu{constructor(){this.Br=new Wu,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Wu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){ii("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){ii("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu=null;function Zu(){return null===Yu?Yu=268435456+Math.round(2147483648*Math.random()):Yu++,"0x"+Yu.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const el={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="WebChannelConnection";class sl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,n,s,r){const i=Zu(),o=this.ao(e,t);ii("RestConnection",`Sending RPC '${e}' ${i}:`,o,n);const a={};return this.ho(a,s,r),this.lo(e,o,a,n).then((t=>(ii("RestConnection",`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw ai("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,s,r,i){return this.co(e,t,n,s,r)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ni,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=el[e];return`${this.ro}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,s){const r=Zu();return new Promise(((i,o)=>{const a=new Zr;a.setWithCredentials(!0),a.listenOnce(Wr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Hr.NO_ERROR:const t=a.getResponseJson();ii(nl,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),i(t);break;case Hr.TIMEOUT:ii(nl,`RPC '${e}' ${r} timed out`),o(new fi(di.DEADLINE_EXCEEDED,"Request time out"));break;case Hr.HTTP_ERROR:const n=a.getStatus();if(ii(nl,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(di).indexOf(t)>=0?t:di.UNKNOWN}(t.status);o(new fi(e,t.message))}else o(new fi(di.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new fi(di.UNAVAILABLE,"Connection failed."));break;default:ui()}}finally{ii(nl,`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(s);ii(nl,`RPC '${e}' ${r} sending request:`,s),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const s=Zu(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Kr(),o=Gr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Xr({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=r.join("");ii(nl,`Creating RPC '${e}' stream ${s}: ${c}`,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new tl({Wr:t=>{h?ii(nl,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(l||(ii(nl,`Opening RPC '${e}' stream ${s} transport.`),u.open(),l=!0),ii(nl,`RPC '${e}' stream ${s} sending:`,t),u.send(t))},Hr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Yr.EventType.OPEN,(()=>{h||ii(nl,`RPC '${e}' stream ${s} transport opened.`)})),f(u,Yr.EventType.CLOSE,(()=>{h||(h=!0,ii(nl,`RPC '${e}' stream ${s} transport closed`),d.so())})),f(u,Yr.EventType.ERROR,(t=>{h||(h=!0,ai(nl,`RPC '${e}' stream ${s} transport errored:`,t),d.so(new fi(di.UNAVAILABLE,"The operation could not be completed")))})),f(u,Yr.EventType.MESSAGE,(t=>{var n;if(!h){const r=t.data[0];li(!!r);const i=r,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){ii(nl,`RPC '${e}' stream ${s} received error:`,o);const t=o.status;let n=function(e){const t=bc[e];if(void 0!==t)return Cc(t)}(t),r=o.message;void 0===n&&(n=di.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),h=!0,d.so(new fi(n,r)),u.close()}else ii(nl,`RPC '${e}' stream ${s} received:`,r),d.io(r)}})),f(o,Qr.STAT_EVENT,(t=>{t.stat===Jr.PROXY?ii(nl,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===Jr.NOPROXY&&ii(nl,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(e){return new qc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,n=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),s=Math.max(0,t-n);s>0&&ii("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t,n,s,r,i,o,a){this.Ws=e,this.bo=n,this.Po=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new ol(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===di.RESOURCE_EXHAUSTED?(oi(t.toString()),oi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===di.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new fi(di.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return ii("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(ii("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cl extends al{constructor(e,t,n,s,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,i),this.serializer=r}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ui()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(li(void 0===t||"string"==typeof t),ao.fromBase64String(t||"")):(li(void 0===t||t instanceof Uint8Array),ao.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?di.UNKNOWN:Cc(e.code);return new fi(t,e.message||"")}(o);n=new Lc(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Qc(e,s.document.name),i=Kc(s.document.updateTime),o=s.document.createTime?Kc(s.document.createTime):Ai.min(),a=new Po({mapValue:{fields:s.document.fields}}),c=xo.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Rc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Qc(e,s.document),i=s.readTime?Kc(s.readTime):Ai.min(),o=xo.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Rc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Qc(e,s.document),i=s.removedTargetIds||[];n=new Rc([],i,r,null)}else{if(!("filter"in t))return ui();{t.filter;const e=t.filter;e.targetId;const s=e.count||0,r=new Tc(s),i=e.targetId;n=new Oc(i,r)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ai.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ai.min():t.readTime?Kc(t.readTime):Ai.min()}(e);return this.listener.zo(t,n)}jo(e){const t={};t.database=Yc(this.serializer),t.addTarget=function(e,t){let n;const s=t.target;return n=ua(s)?{documents:nu(e,s)}:{query:su(e,s)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=$c(e,t.resumeToken):t.snapshotVersion.compareTo(Ai.min())>0&&(n.readTime=jc(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ui()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=Yc(this.serializer),t.removeTarget=e,this.Fo(t)}}class ul extends al{constructor(e,t,n,s,r,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,i),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(li(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=function(e,t){return e&&e.length>0?(li(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Kc(e.updateTime):Kc(t);return n.isEqual(Ai.min())&&(n=Kc(t)),new sc(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Kc(e.commitTime);return this.listener.Zo(n,t)}return li(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Yc(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>tu(this.serializer,e)))};this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new fi(di.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.co(e,t,n,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===di.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fi(di.UNKNOWN,e.toString())}))}fo(e,t,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.fo(e,t,n,r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===di.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fi(di.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}}class hl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(oi(t),this.ru=!1):ii("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,n,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr((e=>{n.enqueueAndForget((async()=>{El(this)&&(ii("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=hi(e);t.du.add(4),await pl(t),t.mu.set("Unknown"),t.du.delete(4),await fl(t)}(this))}))})),this.mu=new hl(n,s)}}async function fl(e){if(El(e))for(const t of e.wu)await t(!0)}async function pl(e){for(const t of e.wu)await t(!1)}function ml(e,t){const n=hi(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Il(n)?wl(n):Vl(n).No()&&yl(n,t))}function gl(e,t){const n=hi(e),s=Vl(n);n.fu.delete(t),s.No()&&vl(n,t),0===n.fu.size&&(s.No()?s.$o():El(n)&&n.mu.set("Unknown"))}function yl(e,t){e.gu.Ot(t.targetId),Vl(e).jo(t)}function vl(e,t){e.gu.Ot(t),Vl(e).Wo(t)}function wl(e){e.gu=new Mc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Vl(e).start(),e.mu.ou()}function Il(e){return El(e)&&!Vl(e).xo()&&e.fu.size>0}function El(e){return 0===hi(e).du.size}function Tl(e){e.gu=void 0}async function bl(e){e.fu.forEach(((t,n)=>{yl(e,t)}))}async function _l(e,t){Tl(e),Il(e)?(e.mu.au(t),wl(e)):e.mu.set("Unknown")}async function Sl(e,t,n){if(e.mu.set("Online"),t instanceof Lc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const s of t.targetIds)e.fu.has(s)&&(await e.remoteSyncer.rejectListen(s,n),e.fu.delete(s),e.gu.removeTarget(s))}(e,t)}catch(n){ii("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Cl(e,n)}else if(t instanceof Rc?e.gu.Kt(t):t instanceof Oc?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(Ai.min()))try{const t=await qu(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.gu.Xt(t);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.fu.get(s);r&&e.fu.set(s,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(ao.EMPTY_BYTE_STRING,n.snapshotVersion)),vl(e,t);const s=new pu(n.target,t,1,n.sequenceNumber);yl(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ii("RemoteStore","Failed to raise snapshot:",t),await Cl(e,t)}}async function Cl(e,t,n){if(!$i(t))throw t;e.du.add(1),await pl(e),e.mu.set("Offline"),n||(n=()=>qu(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ii("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await fl(e)}))}function kl(e,t){return t().catch((n=>Cl(e,n,t)))}async function Al(e){const t=hi(e),n=Bl(t);let s=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Nl(t);)try{const e=await $u(t.localStore,s);if(null===e){0===t.lu.length&&n.$o();break}s=e.batchId,Dl(t,e)}catch(e){await Cl(t,e)}Rl(t)&&Ol(t)}function Nl(e){return El(e)&&e.lu.length<10}function Dl(e,t){e.lu.push(t);const n=Bl(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Rl(e){return El(e)&&!Bl(e).xo()&&e.lu.length>0}function Ol(e){Bl(e).start()}async function Ll(e){Bl(e).tu()}async function Pl(e){const t=Bl(e);for(const n of e.lu)t.Yo(n.mutations)}async function Ml(e,t,n){const s=e.lu.shift(),r=Ic.from(s,t,n);await kl(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Al(e)}async function xl(e,t){t&&Bl(e).Jo&&await async function(e,t){if(Sc(n=t.code)&&n!==di.ABORTED){const n=e.lu.shift();Bl(e).Oo(),await kl(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Al(e)}var n}(e,t),Rl(e)&&Ol(e)}async function Ul(e,t){const n=hi(e);n.asyncQueue.verifyOperationInProgress(),ii("RemoteStore","RemoteStore received new credentials");const s=El(n);n.du.add(3),await pl(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await fl(n)}async function Fl(e,t){const n=hi(e);t?(n.du.delete(2),await fl(n)):t||(n.du.add(2),await pl(n),n.mu.set("Unknown"))}function Vl(e){return e.yu||(e.yu=function(e,t,n){const s=hi(e);return s.nu(),new cl(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(e.datastore,e.asyncQueue,{Jr:bl.bind(null,e),Zr:_l.bind(null,e),zo:Sl.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),Il(e)?wl(e):e.mu.set("Unknown")):(await e.yu.stop(),Tl(e))}))),e.yu}function Bl(e){return e.pu||(e.pu=function(e,t,n){const s=hi(e);return s.nu(),new ul(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Ll.bind(null,e),Zr:xl.bind(null,e),Xo:Pl.bind(null,e),Zo:Ml.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await Al(e)):(await e.pu.stop(),e.lu.length>0&&(ii("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ql{constructor(e,t,n,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,s,r){const i=Date.now()+n,o=new ql(e,t,i,s,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new fi(di.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jl(e,t){if(oi("AsyncQueue",`${t}: ${e}`),$i(e))return new fi(di.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Li.comparator(t.key,n.key):(e,t)=>Li.comparator(e.key,t.key),this.keyedMap=Oa(),this.sortedSet=new eo(this.comparator)}static emptySet(e){return new $l(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $l))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new $l;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.Iu=new eo(Li.comparator)}track(e){const t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):ui():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Kl{constructor(e,t,n,s,r,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Kl(e,t,$l.emptySet(t),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.Eu=void 0,this.listeners=[]}}class Hl{constructor(){this.queries=new Aa((e=>Ta(e)),Ea),this.onlineState="Unknown",this.Au=new Set}}async function Wl(e,t){const n=hi(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Gl),r)try{i.Eu=await n.onListen(s)}catch(e){const n=jl(e,`Initialization of query '${ba(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,i),i.listeners.push(t),t.Ru(n.onlineState),i.Eu&&t.vu(i.Eu)&&Yl(n)}async function Ql(e,t){const n=hi(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Jl(e,t){const n=hi(e);let s=!1;for(const e of t){const t=e.query,r=n.queries.get(t);if(r){for(const t of r.listeners)t.vu(e)&&(s=!0);r.Eu=e}}s&&Yl(n)}function Xl(e,t,n){const s=hi(e),r=s.queries.get(t);if(r)for(const e of r.listeners)e.onError(n);s.queries.delete(t)}function Yl(e){e.Au.forEach((e=>{e.next()}))}class Zl{constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Kl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=Kl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh{constructor(e){this.key=e}}class th{constructor(e){this.key=e}}class nh{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Va(),this.mutatedKeys=Va(),this.Ku=Ca(e),this.Gu=new $l(this.Ku)}get Qu(){return this.Lu}zu(e,t){const n=t?t.ju:new zl,s=t?t.Gu:this.Gu;let r=t?t.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((e,t)=>{const u=s.get(e),l=_a(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Wu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),r=d?r.add(e):r.delete(e)):(i=i.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Gu:i,ju:n,Mi:o,mutatedKeys:r}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ui()}};return n(e)-n(t)}(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const i=t?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new Kl(this.query,e.Gu,s,r,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:i}:{Yu:i}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new zl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=Va(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new th(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new eh(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=Va();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return Kl.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class sh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rh{constructor(e){this.key=e,this.ec=!1}}class ih{constructor(e,t,n,s,r,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.nc={},this.sc=new Aa((e=>Ta(e)),Ea),this.ic=new Map,this.rc=new Set,this.oc=new eo(Li.comparator),this.uc=new Map,this.cc=new ku,this.ac={},this.hc=new Map,this.lc=Eu.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function oh(e,t){const n=_h(e);let s,r;const i=n.sc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const e=await zu(n.localStore,va(t));n.isPrimaryClient&&ml(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,r=await ah(n,t,s,"current"===i,e.resumeToken)}return r}async function ah(e,t,n,s,r){e.dc=(t,n,s)=>async function(e,t,n,s){let r=t.view.zu(n);r.Mi&&(r=await Gu(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,r))));const i=s&&s.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,i);return vh(e,t.targetId,o.Yu),o.snapshot}(e,t,n,s);const i=await Gu(e.localStore,t,!0),o=new nh(t,i.Wi),a=o.zu(i.documents),c=Dc.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==e.onlineState,r),u=o.applyChanges(a,e.isPrimaryClient,c);vh(e,n,u.Yu);const l=new sh(t,n,o);return e.sc.set(t,l),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function ch(e,t){const n=hi(e),s=n.sc.get(t),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter((e=>!Ea(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ku(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),gl(n.remoteStore,s.targetId),gh(n,s.targetId)})).catch(qi)):(gh(n,s.targetId),await Ku(n.localStore,s.targetId,!0))}async function uh(e,t){const n=hi(e);try{const e=await function(e,t){const n=hi(e),s=t.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const o=[];t.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Ds.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(ao.EMPTY_BYTE_STRING,Ai.min()).withLastLimboFreeSnapshotVersion(Ai.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,i)&&o.push(n.Ds.updateTargetData(e,u))}));let a=Da(),c=Va();if(t.documentUpdates.forEach((s=>{t.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,s))})),o.push(ju(e,i,t.documentUpdates).next((e=>{a=e.zi,c=e.ji}))),!s.isEqual(Ai.min())){const t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,s)));o.push(t)}return ji.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Li=r,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const s=n.uc.get(t);s&&(li(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?s.ec=!0:e.modifiedDocuments.size>0?li(s.ec):e.removedDocuments.size>0&&(li(s.ec),s.ec=!1))})),await Eh(n,e,t)}catch(e){await qi(e)}}function lh(e,t,n){const s=hi(e);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const e=[];s.sc.forEach(((n,s)=>{const r=s.view.Ru(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=hi(e);n.onlineState=t;let s=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Ru(t)&&(s=!0)})),s&&Yl(n)}(s.eventManager,t),e.length&&s.nc.zo(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function hh(e,t,n){const s=hi(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.uc.get(t),i=r&&r.key;if(i){let e=new eo(Li.comparator);e=e.insert(i,xo.newNoDocument(i,Ai.min()));const n=Va().add(i),r=new Nc(Ai.min(),new Map,new so(Si),e,n);await uh(s,r),s.oc=s.oc.remove(i),s.uc.delete(t),Ih(s)}else await Ku(s.localStore,t,!1).then((()=>gh(s,t,n))).catch(qi)}async function dh(e,t){const n=hi(e),s=t.batch.batchId;try{const e=await function(e,t){const n=hi(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const s=t.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,s){const r=n.batch,i=r.keys();let o=ji.resolve();return i.forEach((e=>{o=o.next((()=>s.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);li(null!==i),t.version.compareTo(i)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),s.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Va();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(n.localStore,t);mh(n,s,null),ph(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Eh(n,e)}catch(e){await qi(e)}}async function fh(e,t,n){const s=hi(e);try{const e=await function(e,t){const n=hi(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let s;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(li(null!==t),s=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(s.localStore,t);mh(s,t,n),ph(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Eh(s,e)}catch(n){await qi(n)}}function ph(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function mh(e,t,n){const s=hi(e);let r=s.ac[s.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),s.ac[s.currentUser.toKey()]=r}}function gh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc.wc(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||yh(e,t)}))}function yh(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(gl(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Ih(e))}function vh(e,t,n){for(const s of n)s instanceof eh?(e.cc.addReference(s.key,t),wh(e,s)):s instanceof th?(ii("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||yh(e,s.key)):ui()}function wh(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(ii("SyncEngine","New document in limbo: "+n),e.rc.add(s),Ih(e))}function Ih(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new Li(Di.fromString(t)),s=e.lc.next();e.uc.set(s,new rh(n)),e.oc=e.oc.insert(n,s),ml(e.remoteStore,new pu(va(da(n.path)),s,2,zi.ct))}}async function Eh(e,t,n){const s=hi(e),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach(((e,a)=>{o.push(s.dc(a,t,n).then((e=>{if((e||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=xu.Di(a.targetId,e);i.push(t)}})))})),await Promise.all(o),s.nc.zo(r),await async function(e,t){const n=hi(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ji.forEach(t,(t=>ji.forEach(t.Vi,(s=>n.persistence.referenceDelegate.addReference(e,t.targetId,s))).next((()=>ji.forEach(t.Si,(s=>n.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))))))}catch(e){if(!$i(e))throw e;ii("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Li.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Li=n.Li.insert(t,r)}}}(s.localStore,i))}async function Th(e,t){const n=hi(e);if(!n.currentUser.isEqual(t)){ii("SyncEngine","User change. New user:",t.toKey());const e=await Bu(n.localStore,t);n.currentUser=t,function(e,t){e.hc.forEach((e=>{e.forEach((e=>{e.reject(new fi(di.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.hc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Eh(n,e.Qi)}}function bh(e,t){const n=hi(e),s=n.uc.get(t);if(s&&s.ec)return Va().add(s.key);{let e=Va();const s=n.ic.get(t);if(!s)return e;for(const t of s){const s=n.sc.get(t);e=e.unionWith(s.view.Qu)}return e}}function _h(e){const t=hi(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=uh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=bh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hh.bind(null,t),t.nc.zo=Jl.bind(null,t.eventManager),t.nc.wc=Xl.bind(null,t.eventManager),t}function Sh(e){const t=hi(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fh.bind(null,t),t}class Ch{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=il(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Vu(this.persistence,new Uu,e.initialUser,this.serializer)}createPersistence(e){return new Lu(Mu.Fs,this.serializer)}createSharedClientState(e){return new Qu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Th.bind(null,this.syncEngine),await Fl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Hl}createDatastore(e){const t=il(e.databaseInfo.databaseId),n=(s=e.databaseInfo,new sl(s));var s;return function(e,t,n,s){return new ll(e,t,n,s)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,s,r,i;return t=this.localStore,n=this.datastore,s=e.asyncQueue,r=e=>lh(this.syncEngine,e,0),i=Xu.D()?new Xu:new Ju,new dl(t,n,s,r,i)}createSyncEngine(e,t){return function(e,t,n,s,r,i,o){const a=new ih(e,t,n,s,r,i);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=hi(e);ii("RemoteStore","RemoteStore shutting down."),t.du.add(5),await pl(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ah{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):oi("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nh{constructor(e,t,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=ti.UNAUTHENTICATED,this.clientId=_i.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ii("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ii("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fi(di.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=jl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Dh(e,t){e.asyncQueue.verifyOperationInProgress(),ii("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener((async e=>{s.isEqual(e)||(await Bu(t.localStore,e),s=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Rh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Lh(e);ii("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener((e=>Ul(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ul(t.remoteStore,n))),e._onlineComponents=t}function Oh(e){return"FirebaseError"===e.name?e.code===di.FAILED_PRECONDITION||e.code===di.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Lh(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ii("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dh(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Oh(n))throw n;ai("Error using user provided cache. Falling back to memory cache: "+n),await Dh(e,new Ch)}}else ii("FirestoreClient","Using default OfflineComponentProvider"),await Dh(e,new Ch);return e._offlineComponents}async function Ph(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ii("FirestoreClient","Using user provided OnlineComponentProvider"),await Rh(e,e._uninitializedComponentsProvider._online)):(ii("FirestoreClient","Using default OnlineComponentProvider"),await Rh(e,new kh))),e._onlineComponents}function Mh(e){return Ph(e).then((e=>e.syncEngine))}async function xh(e){const t=await Ph(e),n=t.eventManager;return n.onListen=oh.bind(null,t.syncEngine),n.onUnlisten=ch.bind(null,t.syncEngine),n}function Uh(e,t,n={}){const s=new pi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,r){const i=new Ah({next:n=>{t.enqueueAndForget((()=>Ql(e,o))),n.fromCache&&"server"===s.source?r.reject(new fi(di.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new Zl(n,i,{includeMetadataChanges:!0,xu:!0});return Wl(e,o)}(await xh(e),e.asyncQueue,t,n,s))),s.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(e,t,n){if(!n)throw new fi(di.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Bh(e){if(!Li.isDocumentKey(e))throw new fi(di.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function qh(e){if(Li.isDocumentKey(e))throw new fi(di.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function jh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ui()}function $h(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fi(di.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jh(e);throw new fi(di.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zh{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new fi(di.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new fi(di.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,s){if(!0===t&&!0===s)throw new fi(di.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fi(di.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new fi(di.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new gi;switch(e.type){case"firstParty":return new Ii(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new fi(di.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Fh.get(e);t&&(ii("ComponentProvider","Removing Datastore"),Fh.delete(e),t.terminate())}(this),Promise.resolve()}}function Gh(e,t,n,s={}){var r;const i=(e=$h(e,Kh))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&ai("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let t,n;if("string"==typeof s.mockUserToken)t=s.mockUserToken,n=ti.MOCK_USER;else{t=A(s.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new fi(di.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ti(i)}e._authCredentials=new yi(new mi(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Hh(this.firestore,e,this._key)}}class Wh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Wh(this.firestore,e,this._query)}}class Qh extends Wh{constructor(e,t,n){super(e,t,da(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Hh(this.firestore,null,new Li(e))}withConverter(e){return new Qh(this.firestore,e,this._path)}}function Jh(e,t,...n){if(e=K(e),Vh("collection","path",t),e instanceof Kh){const s=Di.fromString(t,...n);return qh(s),new Qh(e,null,s)}{if(!(e instanceof Hh||e instanceof Qh))throw new fi(di.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Di.fromString(t,...n));return qh(s),new Qh(e.firestore,null,s)}}function Xh(e,t,...n){if(e=K(e),1===arguments.length&&(t=_i.A()),Vh("doc","path",t),e instanceof Kh){const s=Di.fromString(t,...n);return Bh(s),new Hh(e,null,new Li(s))}{if(!(e instanceof Hh||e instanceof Qh))throw new fi(di.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Di.fromString(t,...n));return Bh(s),new Hh(e.firestore,e instanceof Qh?e.converter:null,new Li(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yh{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new ol(this,"async_queue_retry"),this.qc=()=>{const e=rl();e&&ii("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=rl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=rl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new pi;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!$i(e))throw e;ii("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw oi("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const s=ql.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(s),s}Uc(){this.Mc&&ui()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}class Zh extends Kh{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Yh,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||td(this),this._firestoreClient.terminate()}}function ed(e){return e._firestoreClient||td(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function td(e){var t,n,s;const r=e._freezeSettings(),i=function(e,t,n,s){return new go(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new Nh(e._authCredentials,e._appCheckCredentials,e._queue,i),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=r.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nd{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nd(ao.fromBase64String(e))}catch(e){throw new fi(di.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new nd(ao.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new fi(di.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oi(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rd{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fi(di.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fi(di.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Si(this._lat,e._lat)||Si(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=/^__.*__$/;class ad{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new fc(e,this.data,this.fieldMask,t,this.fieldTransforms):new dc(e,this.data,t,this.fieldTransforms)}}function cd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ui()}}class ud{constructor(e,t,n,s,r,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ud(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.Zc({path:n,ta:!1});return s.ea(e),s}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.Zc({path:n,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ed(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(cd(this.Yc)&&od.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class ld{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||il(e)}ua(e,t,n,s=!1){return new ud({Yc:e,methodName:t,oa:n,path:Oi.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hd(e){const t=e._freezeSettings(),n=il(e._databaseId);return new ld(e._databaseId,!!t.ignoreUndefinedProperties,n)}function dd(e,t,n,s,r,i={}){const o=e.ua(i.merge||i.mergeFields?2:0,t,n,r);yd("Data must be an object, but it was:",o,s);const a=md(s,o);let c,u;if(i.merge)c=new io(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const s of i.mergeFields){const r=vd(t,s,n);if(!o.contains(r))throw new fi(di.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Td(e,r)||e.push(r)}c=new io(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new ad(new Po(a),c,u)}function fd(e,t,n,s=!1){return pd(n,e.ua(s?4:3,t))}function pd(e,t){if(gd(e=K(e)))return yd("Unsupported field value:",t,e),md(e,t);if(e instanceof rd)return function(e,t){if(!cd(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let s=0;for(const r of e){let e=pd(r,t.sa(s));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),s++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=K(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return za(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ki.fromDate(e);return{timestampValue:jc(t.serializer,n)}}if(e instanceof ki){const n=new ki(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:jc(t.serializer,n)}}if(e instanceof id)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof nd)return{bytesValue:$c(t.serializer,e._byteString)};if(e instanceof Hh){const n=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(n))throw t.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Gc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${jh(e)}`)}(e,t)}function md(e,t){const n={};return Zi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yi(e,((e,s)=>{const r=pd(s,t.Xc(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function gd(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ki||e instanceof id||e instanceof nd||e instanceof Hh||e instanceof rd)}function yd(e,t,n){if(!gd(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const s=jh(n);throw"an object"===s?t.ia(e+" a custom object"):t.ia(e+" "+s)}}function vd(e,t,n){if((t=K(t))instanceof sd)return t._internalPath;if("string"==typeof t)return Id(e,t);throw Ed("Field path arguments must be of type string or ",e,!1,void 0,n)}const wd=new RegExp("[~\\*/\\[\\]]");function Id(e,t,n){if(t.search(wd)>=0)throw Ed(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sd(...t.split("."))._internalPath}catch(s){throw Ed(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ed(e,t,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new fi(di.INVALID_ARGUMENT,a+e+c)}function Td(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t,n,s,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Hh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new _d(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sd("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class _d extends bd{data(){return super.data()}}function Sd(e,t){return"string"==typeof t?Id(e,t):t instanceof sd?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new fi(di.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kd{}class Ad extends kd{}function Nd(e,t,...n){let s=[];t instanceof kd&&s.push(t),s=s.concat(n),function(e){const t=e.filter((e=>e instanceof Rd)).length,n=e.filter((e=>e instanceof Dd)).length;if(t>1||t>0&&n>0)throw new fi(di.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const t of s)e=t._apply(e);return e}class Dd extends Ad{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Dd(e,t,n)}_apply(e){const t=this._parse(e);return xd(e._query,t),new Wh(e.firestore,e.converter,wa(e._query,t))}_parse(e){const t=hd(e.firestore),n=function(e,t,n,s,r,i,o){let a;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new fi(di.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Md(o,i);const t=[];for(const n of o)t.push(Pd(s,e,n));a={arrayValue:{values:t}}}else a=Pd(s,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Md(o,i),a=fd(n,"where",o,"in"===i||"not-in"===i);return $o.create(r,i,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class Rd extends kd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rd(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:zo.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const s=t.getFlattenedFilters();for(const e of s)xd(n,e),n=wa(n,e)}(e._query,t),new Wh(e.firestore,e.converter,wa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Od extends Ad{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Od(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new fi(di.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new fi(di.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new Bo(t,n);return function(e,t){if(null===pa(e)){const n=ma(e);null!==n&&Ud(e,n,t.field)}}(e,s),s}(e._query,this._field,this._direction);return new Wh(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new la(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Ld(e,t="asc"){const n=t,s=Sd("orderBy",e);return Od._create(s,n)}function Pd(e,t,n){if("string"==typeof(n=K(n))){if(""===n)throw new fi(di.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ga(t)&&-1!==n.indexOf("/"))throw new fi(di.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Di.fromString(n));if(!Li.isDocumentKey(s))throw new fi(di.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Co(e,new Li(s))}if(n instanceof Hh)return Co(e,n._key);throw new fi(di.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jh(n)}.`)}function Md(e,t){if(!Array.isArray(e)||0===e.length)throw new fi(di.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xd(e,t){if(t.isInequality()){const n=ma(e),s=t.field;if(null!==n&&!n.isEqual(s))throw new fi(di.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const r=pa(e);null!==r&&Ud(e,s,r)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new fi(di.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new fi(di.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Ud(e,t,n){if(!n.isEqual(t))throw new fi(di.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Fd{convertValue(e,t="none"){switch(wo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ho(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ui()}}convertObject(e,t){const n={};return Yi(e.fields,((e,s)=>{n[e]=this.convertValue(s,t)})),n}convertGeoPoint(e){return new id(lo(e.latitude),lo(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=po(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(mo(e));default:return null}}convertTimestamp(e){const t=uo(e);return new ki(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Di.fromString(e);li(fu(n));const s=new yo(n.get(1),n.get(3)),r=new Li(n.popFirst(5));return s.isEqual(t)||oi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bd{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qd extends bd{constructor(e,t,n,s,r,i){super(e,t,n,s,i),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Sd("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class jd extends qd{data(e={}){return super.data(e)}}class $d{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bd(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new jd(this._firestore,this._userDataWriter,n.key,n,new Bd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fi(di.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const s=new jd(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Bd(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const s=new jd(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Bd(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,i=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:zd(t.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ui()}}class Kd extends Fd{constructor(e){super(),this.firestore=e}convertBytes(e){return new nd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Hh(this.firestore,null,t)}}function Gd(e){e=$h(e,Wh);const t=$h(e.firestore,Zh),n=ed(t),s=new Kd(t);return Cd(e._query),Uh(n,e._query).then((n=>new $d(t,s,e,n)))}function Hd(e,t,n){e=$h(e,Hh);const s=$h(e.firestore,Zh),r=Vd(e.converter,t,n);return Qd(s,[dd(hd(s),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,rc.none())])}function Wd(e,t){const n=$h(e.firestore,Zh),s=Xh(e),r=Vd(e.converter,t);return Qd(n,[dd(hd(e.firestore),"addDoc",s._key,r,null!==e.converter,{}).toMutation(s._key,rc.exists(!1))]).then((()=>s))}function Qd(e,t){return function(e,t){const n=new pi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const s=Sh(e);try{const e=await function(e,t){const n=hi(e),s=ki.now(),r=t.reduce(((e,t)=>e.add(t.key)),Va());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Da(),c=Va();return n.Ki.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{i=r;const o=[];for(const e of t){const t=lc(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new fc(e.key,t,Mo(t.value.mapValue),rc.exists(!0)))}return n.mutationQueue.addMutationBatch(e,s,o,t)})).next((t=>{o=t;const s=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:La(i)})))}(s.localStore,t);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let s=e.ac[e.currentUser.toKey()];s||(s=new eo(Si)),s=s.insert(t,n),e.ac[e.currentUser.toKey()]=s}(s,e.batchId,n),await Eh(s,e.changes),await Al(s.remoteStore)}catch(e){const t=jl(e,"Failed to persist write");n.reject(t)}}(await Mh(e),t,n))),n.promise}(ed(e),t)}!function(e,t=!0){ni=Me,Re(new G("firestore",((e,{instanceIdentifier:n,options:s})=>{const r=e.getProvider("app").getImmediate(),i=new Zh(new vi(e.getProvider("auth-internal")),new Ti(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new fi(di.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(e.options.projectId,t)}(r,n),r);return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),Fe(ei,"3.10.0",e),Fe(ei,"3.10.0","esm2017")}();function Jd(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n}Object.create;Object.create;function Xd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yd=Xd,Zd=new P("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ef=new se("@firebase/auth");function tf(e,...t){ef.logLevel<=X.ERROR&&ef.error(`Auth (${Me}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(e,...t){throw of(e,...t)}function sf(e,...t){return of(e,...t)}function rf(e,t,n){const s=Object.assign(Object.assign({},Yd()),{[t]:n});return new P("auth","Firebase",s).create(t,{appName:e.name})}function of(e,...t){if("string"!=typeof e){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Zd.create(e,...t)}function af(e,t,...n){if(!e)throw of(t,...n)}function cf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw tf(t),new Error(t)}function uf(e,t){e||cf(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=new Map;function hf(e){uf(e instanceof Function,"Expected a class definition");let t=lf.get(e);return t?(uf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lf.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function df(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ff(){return"http:"===pf()||"https:"===pf()}function pf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ff()||D()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gf{constructor(e,t){this.shortDelay=e,this.longDelay=t,uf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return mf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e,t){uf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void cf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void cf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void cf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},If=new gf(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Tf(e,t,n,s,r={}){return bf(e,r,(async()=>{let r={},i={};s&&("GET"===t?i=s:r={body:JSON.stringify(s)});const o=V(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),vf.fetch()(Sf(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function bf(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},wf),t);try{const t=new Cf(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw kf(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw kf(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw kf(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw kf(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw rf(e,a,o);nf(e,a)}}catch(t){if(t instanceof L)throw t;nf(e,"network-request-failed",{message:String(t)})}}async function _f(e,t,n,s,r={}){const i=await Tf(e,t,n,s,r);return"mfaPendingCredential"in i&&nf(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Sf(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?yf(e.config,r):`${e.config.apiScheme}://${r}`}class Cf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(sf(this.auth,"network-request-failed"))),If.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function kf(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=sf(e,t,s);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Af(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(e){return 1e3*Number(e)}function Df(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return tf("JWT malformed, contained fewer than 3 sections"),null;try{const e=I(n);return e?JSON.parse(e):(tf("Failed to decode base64 JWT payload"),null)}catch(e){return tf("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rf(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof L&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Of{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Af(this.lastLoginAt),this.creationTime=Af(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pf(e){var t;const n=e.auth,s=await e.getIdToken(),r=await Rf(e,async function(e,t){return Tf(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:s}));af(null==r?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=Jd(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Lf(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mf{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){af(e.idToken,"internal-error"),af(void 0!==e.idToken,"internal-error"),af(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Df(e);return af(t,"internal-error"),af(void 0!==t.exp,"internal-error"),af(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return af(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await bf(e,{},(async()=>{const n=V({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,i=Sf(e,s,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",vf.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,i=new Mf;return n&&(af("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),s&&(af("string"==typeof s,"internal-error",{appName:e}),i.accessToken=s),r&&(af("number"==typeof r,"internal-error",{appName:e}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mf,this.toJSON())}_performRefresh(){return cf("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(e,t){af("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Uf{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Of(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Lf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Rf(this,this.stsTokenManager.getToken(this.auth,e));return af(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=K(e),s=await n.getIdToken(t),r=Df(s);af(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i="object"==typeof r.firebase?r.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Af(Nf(r.auth_time)),issuedAtTime:Af(Nf(r.iat)),expirationTime:Af(Nf(r.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=K(e);await Pf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(af(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Uf(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){af(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Pf(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rf(this,async function(e,t){return Tf(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,r,i,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(s=t.email)&&void 0!==s?s:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:I,providerData:E,stsTokenManager:T}=t;af(v&&T,e,"internal-error");const b=Mf.fromJSON(this.name,T);af("string"==typeof v,e,"internal-error"),xf(l,e.name),xf(h,e.name),af("boolean"==typeof w,e,"internal-error"),af("boolean"==typeof I,e,"internal-error"),xf(d,e.name),xf(f,e.name),xf(p,e.name),xf(m,e.name),xf(g,e.name),xf(y,e.name);const _=new Uf({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:I,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:b,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const s=new Mf;s.updateFromServerResponse(t);const r=new Uf({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Pf(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ff.type="NONE";const Vf=Ff;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(e,t,n){return`firebase:${e}:${t}:${n}`}class qf{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=Bf(this.userKey,s.apiKey,r),this.fullPersistenceKey=Bf("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Uf._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new qf(hf(Vf),e,n);const s=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=s[0]||hf(Vf);const i=Bf(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const s=Uf._fromJSON(e,t);n!==r&&(o=s),r=n;break}}catch(e){}const a=s.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(i)}catch(e){}}))),new qf(r,e,n)):new qf(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Gf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($f(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wf(t))return"Blackberry";if(Qf(t))return"Webos";if(zf(t))return"Safari";if((t.includes("chrome/")||Kf(t))&&!t.includes("edge/"))return"Chrome";if(Hf(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function $f(e=N()){return/firefox\//i.test(e)}function zf(e=N()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Kf(e=N()){return/crios\//i.test(e)}function Gf(e=N()){return/iemobile/i.test(e)}function Hf(e=N()){return/android/i.test(e)}function Wf(e=N()){return/blackberry/i.test(e)}function Qf(e=N()){return/webos/i.test(e)}function Jf(e=N()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Xf(){return R()&&10===document.documentMode}function Yf(e=N()){return Jf(e)||Hf(e)||Qf(e)||Wf(e)||/windows phone/i.test(e)||Gf(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zf(e,t=[]){let n;switch(e){case"Browser":n=jf(N());break;case"Worker":n=`${jf(N())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Me}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,s)=>{try{n(e(t))}catch(e){s(e)}}));n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sp(this),this.idTokenSubscription=new sp(this),this.beforeStateQueue=new ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hf(t)),this._initializationPromise=this.queue((async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await qf.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==s?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(e){s=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return af(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pf(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?K(e):null;return t&&af(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&af(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(hf(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new P("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&hf(e)||this._popupRedirectResolver;af(t,this,"argument-error"),this.redirectPersistenceManager=await qf.create(this,[hf(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return af(i,this,"internal-error"),i.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return af(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function np(e){return K(e)}class sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=j((e=>this.observer=e))}get next(){return af(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function rp(e,t,n){const s=np(e);af(s._canInitEmulator,s,"emulator-config-failed"),af(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),i=ip(t),{host:o,port:a}=function(e){const t=ip(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const e=r[1];return{host:e,port:op(s.substr(e.length+1))}}{const[e,t]=s.split(":");return{host:e,port:op(t)}}}(t),c=null===a?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ip(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function op(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ap{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cf("not implemented")}_getIdTokenResponse(e){return cf("not implemented")}_linkToIdToken(e,t){return cf("not implemented")}_getReauthenticationResolver(e){return cf("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(e,t){return Tf(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class up extends ap{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new up(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new up(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return _f(e,"POST","/v1/accounts:signInWithPassword",Ef(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return _f(e,"POST","/v1/accounts:signInWithEmailLink",Ef(e,t))}(e,{email:this._email,oobCode:this._password});default:nf(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return cp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return _f(e,"POST","/v1/accounts:signInWithEmailLink",Ef(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:nf(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(e,t){return _f(e,"POST","/v1/accounts:signInWithIdp",Ef(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp extends ap{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nf("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=Jd(t,["providerId","signInMethod"]);if(!n||!s)return null;const i=new hp(n,s);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(e){return lp(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,lp(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lp(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=V(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fp extends ap{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new fp({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new fp({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return _f(e,"POST","/v1/accounts:signInWithPhoneNumber",Ef(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await _f(e,"POST","/v1/accounts:signInWithPhoneNumber",Ef(e,t));if(n.temporaryProof)throw kf(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return _f(e,"POST","/v1/accounts:signInWithPhoneNumber",Ef(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),dp)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:r}=e;return n||t||s||r?new fp({verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){var t,n,s,r,i,o;const a=B(q(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=a.mode)&&void 0!==s?s:null);af(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=B(q(e)).link,n=t?B(q(t)).deep_link_id:null,s=B(q(e)).deep_link_id;return(s?B(q(s)).link:null)||s||n||t||e}(e);try{return new pp(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mp{constructor(){this.providerId=mp.PROVIDER_ID}static credential(e,t){return up._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=pp.parseLink(t);return af(n,"argument-error"),up._fromEmailAndCode(e,n.code,n.tenantId)}}mp.PROVIDER_ID="password",mp.EMAIL_PASSWORD_SIGN_IN_METHOD="password",mp.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp extends gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vp extends yp{constructor(){super("facebook.com")}static credential(e){return hp._fromParams({providerId:vp.PROVIDER_ID,signInMethod:vp.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vp.credentialFromTaggedObject(e)}static credentialFromError(e){return vp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vp.credential(e.oauthAccessToken)}catch(e){return null}}}vp.FACEBOOK_SIGN_IN_METHOD="facebook.com",vp.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wp extends yp{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hp._fromParams({providerId:wp.PROVIDER_ID,signInMethod:wp.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wp.credentialFromTaggedObject(e)}static credentialFromError(e){return wp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return wp.credential(t,n)}catch(e){return null}}}wp.GOOGLE_SIGN_IN_METHOD="google.com",wp.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ip extends yp{constructor(){super("github.com")}static credential(e){return hp._fromParams({providerId:Ip.PROVIDER_ID,signInMethod:Ip.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ip.credentialFromTaggedObject(e)}static credentialFromError(e){return Ip.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ip.credential(e.oauthAccessToken)}catch(e){return null}}}Ip.GITHUB_SIGN_IN_METHOD="github.com",Ip.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ep extends yp{constructor(){super("twitter.com")}static credential(e,t){return hp._fromParams({providerId:Ep.PROVIDER_ID,signInMethod:Ep.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ep.credentialFromTaggedObject(e)}static credentialFromError(e){return Ep.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ep.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tp(e,t){return _f(e,"POST","/v1/accounts:signUp",Ef(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ep.TWITTER_SIGN_IN_METHOD="twitter.com",Ep.PROVIDER_ID="twitter.com";class bp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await Uf._fromIdTokenResponse(e,n,s),i=_p(n);return new bp({user:r,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=_p(n);return new bp({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function _p(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sp extends L{constructor(e,t,n,s){var r;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Sp.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Sp(e,t,n,s)}}function Cp(e,t,n,s){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Sp._fromErrorAndOperation(e,n,t,s);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(e,t,n=!1){const s=await Rf(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bp._forOperation(e,"link",s)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ap(e,t,n=!1){const{auth:s}=e,r="reauthenticate";try{const i=await Rf(e,Cp(s,r,t,e),n);af(i.idToken,s,"internal-error");const o=Df(i.idToken);af(o,s,"internal-error");const{sub:a}=o;return af(e.uid===a,s,"user-mismatch"),bp._forOperation(e,r,i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&nf(s,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(e,t,n=!1){const s="signIn",r=await Cp(e,s,t),i=await bp._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}async function Dp(e,t){return Np(np(e),t)}async function Rp(e,t,n){const s=np(e),r=await Tp(s,{returnSecureToken:!0,email:t,password:n}),i=await bp._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Op(e,t,n){return Dp(K(e),mp.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lp(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const s=K(e),r={idToken:await s.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},i=await Rf(s,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Tf(e,"POST","/v1/accounts:update",t)}(s.auth,r));s.displayName=i.displayName||null,s.photoURL=i.photoUrl||null;const o=s.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=s.displayName,o.photoURL=s.photoURL),await s._updateTokensIfNecessary(i)}async function Pp(e){return K(e).delete()}new WeakMap;const Mp="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mp,"1"),this.storage.removeItem(Mp),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends xp{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=N();return zf(e)||Jf(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Xf()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Up.type="LOCAL";const Fp=Up;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp extends xp{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vp.type="SESSION";const Bp=Vp;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qp(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,i=this.handlersMap[s];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(i).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jp(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qp.receivers=[];class $p{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,i;return new Promise(((o,a)=>{const c=jp("",20);s.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kp(){return void 0!==zp().WorkerGlobalScope&&"function"==typeof zp().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gp="firebaseLocalStorageDb",Hp="firebaseLocalStorage",Wp="fbase_key";class Qp{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Jp(e,t){return e.transaction([Hp],t?"readwrite":"readonly").objectStore(Hp)}function Xp(){const e=indexedDB.open(Gp,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Hp,{keyPath:Wp})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Hp)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Gp);return new Qp(e).toPromise()}(),t(await Xp()))}))}))}async function Yp(e,t,n){const s=Jp(e,!0).put({[Wp]:t,value:n});return new Qp(s).toPromise()}function Zp(e,t){const n=Jp(e,!0).delete(t);return new Qp(n).toPromise()}class em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xp()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qp._getInstance(Kp()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new $p(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xp();return await Yp(e,Mp,"1"),await Zp(e,Mp),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Yp(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Jp(e,!1).get(t),s=await new Qp(n).toPromise();return void 0===s?null:s.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Zp(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Jp(e,!1).getAll();return new Qp(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}em.type="LOCAL";const tm=em;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e){return new Promise(((t,n)=>{const s=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,i;s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=sf("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)}))}function sm(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
sm("rcb"),new gf(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rm="recaptcha";async function im(e,t,n){var s;const r=await n.verify();try{let i;if(af("string"==typeof r,e,"argument-error"),af(n.type===rm,e,"argument-error"),i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){af("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Tf(e,"POST","/v2/accounts/mfaEnrollment:start",Ef(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{af("signin"===t.type,e,"internal-error");const n=(null===(s=i.multiFactorHint)||void 0===s?void 0:s.uid)||i.multiFactorUid;af(n,e,"missing-multi-factor-info");const o=await function(e,t){return Tf(e,"POST","/v2/accounts/mfaSignIn:start",Ef(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Tf(e,"POST","/v1/accounts:sendVerificationCode",Ef(e,t))}(e,{phoneNumber:i.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class om{constructor(e){this.providerId=om.PROVIDER_ID,this.auth=np(e)}verifyPhoneNumber(e,t){return im(this.auth,e,K(t))}static credential(e,t){return fp._fromVerification(e,t)}static credentialFromResult(e){const t=e;return om.credentialFromTaggedObject(t)}static credentialFromError(e){return om.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?fp._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function am(e,t){return t?hf(t):(af(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */om.PROVIDER_ID="phone",om.PHONE_SIGN_IN_METHOD="phone";class cm extends ap{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lp(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lp(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lp(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function um(e){return Np(e.auth,new cm(e),e.bypassAuthState)}function lm(e){const{auth:t,user:n}=e;return af(n,t,"internal-error"),Ap(n,new cm(e),e.bypassAuthState)}async function hm(e){const{auth:t,user:n}=e;return af(n,t,"internal-error"),kp(n,new cm(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return um;case"linkViaPopup":case"linkViaRedirect":return hm;case"reauthViaPopup":case"reauthViaRedirect":return lm;default:nf(this.auth,"internal-error")}}resolve(e){uf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){uf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new gf(2e3,1e4);class pm extends dm{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,pm.currentPopupAction&&pm.currentPopupAction.cancel(),pm.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return af(e,this.auth,"internal-error"),e}async onExecution(){uf(1===this.filter.length,"Popup operations only handle one event");const e=jp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(sf(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(sf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pm.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(sf(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,fm.get())};e()}}pm.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mm="pendingRedirect",gm=new Map;class ym extends dm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=gm.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Im(t),s=wm(e);if(!await s._isAvailable())return!1;const r="true"===await s._get(n);return await s._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}gm.set(this.auth._key(),e)}return this.bypassAuthState||gm.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function vm(e,t){gm.set(e._key(),t)}function wm(e){return hf(e._redirectPersistence)}function Im(e){return Bf(mm,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(e,t,n=!1){const s=np(e),r=am(s,t),i=new ym(s,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}class Tm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _m(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!_m(e)){const s=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(sf(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(bm(e))}saveEventToCache(e){this.cachedEventUids.add(bm(e)),this.lastProcessedEventTime=Date.now()}}function bm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function _m({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cm=/^https?/;async function km(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Tf(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Am(e))return}catch(e){}nf(e,"unauthorized-domain")}function Am(e){const t=df(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===s?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===s}if(!Cm.test(n))return!1;if(Sm.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new gf(3e4,6e4);function Dm(){const e=zp().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Rm=null;function Om(e){return Rm=Rm||function(e){return new Promise(((t,n)=>{var s,r,i;function o(){Dm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dm(),n(sf(e,"network-request-failed"))},timeout:Nm.get()})}if(null===(r=null===(s=zp().gapi)||void 0===s?void 0:s.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=zp().gapi)||void 0===i?void 0:i.load)){const t=sm("iframefcb");return zp()[t]=()=>{gapi.load?o():n(sf(e,"network-request-failed"))},nm(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Rm=null,e}))}(e),Rm}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=new gf(5e3,15e3),Pm="__/auth/iframe",Mm="emulator/auth/iframe",xm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Um=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fm(e){const t=e.config;af(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?yf(t,Mm):`https://${e.config.authDomain}/${Pm}`,s={apiKey:t.apiKey,appName:e.name,v:Me},r=Um.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${V(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Bm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function qm(e,t,n,s=500,r=600){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vm),{width:s.toString(),height:r.toString(),top:i,left:o}),u=N().toLowerCase();n&&(a=Kf(u)?"_blank":n),$f(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=N()){var t;return Jf(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Bm(null);const h=window.open(t||"",a,l);af(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Bm(h)}const jm="__/auth/handler",$m="emulator/auth/handler";function zm(e,t,n,s,r,i){af(e.config.authDomain,e,"auth-domain-config-required"),af(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:Me,eventId:r};if(t instanceof gp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",x(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof yp){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?yf(e,$m):`https://${e.authDomain}/${jm}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${V(a).slice(1)}`}const Km="webStorageSupport";const Gm=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bp,this._completeRedirectFn=Em,this._overrideRedirectResult=vm}async _openPopup(e,t,n,s){var r;uf(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return qm(e,zm(e,t,n,df(),s),jp())}async _openRedirect(e,t,n,s){var r;return await this._originValidation(e),r=zm(e,t,n,df(),s),zp().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(uf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Om(e),n=zp().gapi;return af(n,e,"internal-error"),t.open({where:document.body,url:Fm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xm,dontclear:!0},(t=>new Promise((async(n,s)=>{await t.restyle({setHideOnLeave:!1});const r=sf(e,"network-request-failed"),i=zp().setTimeout((()=>{s(r)}),Lm.get());function o(){zp().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{s(r)}))}))))}(e),n=new Tm(e);return t.register("authEvent",(t=>{af(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Km,{type:Km},(n=>{var s;const r=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s[Km];void 0!==r&&t(!!r),nf(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=km(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yf()||zf()||Jf()}};var Hm="@firebase/auth",Wm="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){af(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jm=C("authIdTokenMaxAge")||300;let Xm=null;var Ym;Ym="Browser",Re(new G("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:i}=n.options;return((e,n)=>{af(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),af(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const s={apiKey:r,authDomain:i,clientPlatform:Ym,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zf(Ym)},o=new tp(e,n,s);return function(e,t){const n=(null==t?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(hf);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Re(new G("auth-internal",(e=>(e=>new Qm(e))(np(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Fe(Hm,Wm,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ym)),Fe(Hm,Wm,"esm2017");const Zm=xe({apiKey:"AIzaSyDiIjPU9LYag_w_Ictyyf9Jjtplr07iBoI",authDomain:"social-529c9.firebaseapp.com",projectId:"social-529c9",storageBucket:"social-529c9.appspot.com",messagingSenderId:"1001432544500",appId:"1:1001432544500:web:732fd9906d025791f55aa1"}),eg=function(e,t){const n="string"==typeof e?e:t||"(default)",s=Oe("object"==typeof e?e:Ue(),"firestore").getImmediate({identifier:n});if(!s._initialized){const e=_("firestore");e&&Gh(s,...e)}return s}(Zm),tg=function(e=Ue()){const t=Oe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Oe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(U(n.getOptions(),null!=t?t:{}))return e;nf(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Gm,persistence:[tm,Fp,Bp]}),s=C("authTokenSyncURL");if(s){const e=(r=s,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Jm)return;const s=null==t?void 0:t.token;Xm!==s&&(Xm=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))});!function(e,t,n){K(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,s){K(e).onIdTokenChanged(t,n,s)}(n,(t=>e(t)))}var r;const i=b("auth");return i&&rp(n,`http://${i}`),n}(Zm),ng=async(e,t)=>{try{(await Op(tg,e,t)).user;console.log("logged in?");document.querySelector("#loginWrapper").innerHTML="",console.log(tg.currentUser);const n=document.querySelector("#loggedIn");n.innerText="logged in as "+tg.currentUser?.email;const s=document.createElement("img");s.src=tg.currentUser?.photoURL,n.append(s);ug(await cg());const r=async e=>{try{const t=Jh(eg,tg.currentUser?.uid);await Wd(t,{message:e,userEmail:tg.currentUser?.email,userId:tg.currentUser?.uid,userImage:tg.currentUser?.photoURL,timestamp:new Date}),i()}catch(e){console.error("Error adding document: ",e)}},i=async()=>{try{const e=Jh(eg,tg.currentUser?.uid),t=await Gd(Nd(e,Ld("timestamp","desc"))),n=document.querySelector("#messages");n.innerHTML="",t.forEach((e=>{const t=e.data(),s=document.createElement("div");s.classList.add("message"),s.innerHTML=`\n          <img src=${t.userImage}></img>\n            <p>${t.message}</p>\n            <p>Posted by: ${t.userEmail}</p>\n          `,n.appendChild(s)}))}catch(e){console.error("Error getting documents: ",e)}},o=document.createElement("form");o.id="postForm",o.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("#messageInput"),n=t.value.trim();r(n),t.value=""}));const a=document.createElement("input");a.type="text",a.id="messageInput",a.name="message";const c=document.createElement("button");c.type="submit",c.textContent="Post",o.appendChild(a),o.appendChild(c);const u=document.createElement("div");u.id="messages";const l=document.createElement("div");l.id="mainContainer",l.appendChild(o),l.appendChild(u),document.body.appendChild(l),i()}catch(e){console.log("fail in?")}},sg=async(e,t,n)=>{try{const s=await Rp(tg,e,t),r=s.user;console.log(n),await Hd(Xh(Jh(eg,"users"),r.uid),{email:r.email,uid:r.uid}),await Lp(s.user,{photoURL:`/images/${n}.png`})}catch(e){}},rg=async e=>{console.log("logged in?");document.querySelector("#loginWrapper").innerHTML="",console.log(tg.currentUser);const t=document.querySelector("#loggedIn");t.innerText="logged in as "+tg.currentUser?.email;const n=document.createElement("img");n.src="/images/1.png"==tg.currentUser?.photoURL?"1.3d884485.png":"/images/2.png"==tg.currentUser?.photoURL?"2.39edb27f.png":"/images/3.png"==tg.currentUser?.photoURL?"3.5468cb7d.png":"",t.append(n);ug(await cg());const s=async()=>{try{const e=Jh(eg,tg.currentUser?.uid),t=await Gd(Nd(e,Ld("timestamp","desc"))),n=document.querySelector("#messages");n.innerHTML="",t.forEach((e=>{const t=e.data(),s=document.createElement("div");s.classList.add("message"),s.innerHTML=`\n      <img src=${"/images/1.png"==t.userImage?"1.3d884485.png":"/images/2.png"==t.userImage?"2.39edb27f.png":"/images/3.png"==t.userImage?"3.5468cb7d.png":""}></img>\n          <p style="display:inline">${t.message}</p>\n          <p>Posted by: ${t.userEmail}</p>\n        `,n.appendChild(s)}))}catch(e){console.error("Error getting documents: ",e)}},r=document.createElement("form");r.id="postForm",r.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("#messageInput");(async e=>{try{const t=Jh(eg,tg.currentUser?.uid);await Wd(t,{message:e,userEmail:tg.currentUser?.email,userId:tg.currentUser?.uid,userImage:tg.currentUser?.photoURL,timestamp:new Date}),s()}catch(e){console.error("Error adding document: ",e)}})(t.value.trim()),t.value=""}));const i=document.createElement("input");i.type="text",i.id="messageInput",i.name="message";const o=document.createElement("button");o.type="submit",o.textContent="Post",r.appendChild(i),r.appendChild(o);const a=document.createElement("div");a.id="messages";const c=document.createElement("div");c.id="mainContainer",c.appendChild(r),c.appendChild(a),document.body.appendChild(c),s()};tg.onAuthStateChanged((e=>{e&&rg()}));const ig=document.querySelector("#log"),og=document.querySelector("#sign"),ag=og.querySelectorAll('input[type="radio"]');async function cg(){const e=Jh(eg,"users"),t=await Gd(e),n=[];return t.forEach((e=>{const t=e.data();n.push({email:t.email,uid:t.uid})})),n}function ug(e){const t=document.createElement("ul");t.classList.add("userList"),e.forEach((e=>{console.log(e.uid);const n=document.createElement("li");n.textContent=e.email,n.setAttribute("value",e.uid),t.appendChild(n)}));document.querySelector("#container").appendChild(t),document.querySelectorAll(".userList > li").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("value");lg(t)}))}))}ig.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector('#log input[name="email"]'),n=document.querySelector('#log input[name="password"]'),s=t.value,r=n.value;ng(s,r)})),og.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector('#sign input[name="email"]'),n=document.querySelector('#sign input[name="password"]');let s="";ag.forEach((e=>{e.checked&&(s=e.value)}));const r=t.value,i=n.value;sg(r,i,s)}));const lg=async e=>{try{const t=Jh(eg,e),n=await Gd(Nd(t,Ld("timestamp","desc"))),s=document.querySelector("#messages");s.innerHTML="",n.forEach((e=>{const t=e.data(),n=document.createElement("div");n.classList.add("message"),n.innerHTML=`\n      <img src=${"/images/1.png"==t.userImage?"1.3d884485.png":"/images/2.png"==t.userImage?"2.39edb27f.png":"/images/3.png"==t.userImage?"3.5468cb7d.png":""}></img>\n        <p>${t.message}</p>\n        <p>Posted by: ${t.userEmail}</p>\n      `,s.appendChild(n)}))}catch(e){console.error("Error getting documents: ",e)}};document.querySelector("#deleteBtn").addEventListener("click",(async function(){try{const t=tg.currentUser;if(t){const n=Xh(eg,"users",tg.currentUser.uid);await(e=n,Qd($h(e.firestore,Zh),[new yc(e._key,rc.none())])),await Pp(t),console.log("User account deleted successfully."),location.reload()}else console.log("No user is currently logged in.")}catch(e){console.error("Error deleting user account:",e)}var e}));
//# sourceMappingURL=index.a7667309.js.map

/*! For license information please see main.c96c48c7.js.LICENSE.txt */
(()=>{var e={730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),T=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),_=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function B(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var L,D=Object.assign;function V(e){if(void 0===L)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var F=!1;function M(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?V(e):""}function I(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case P:return"Profiler";case j:return"StrictMode";case R:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case C:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function $(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function G(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&G(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ae(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var xe=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Pe(e){if(e=yi(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Ee(e){Se?je?je.push(e):je=[e]:Se=e}function Te(){if(Se){var e=Se,t=je;if(je=Se=null,Pe(e),t)for(e=0;e<t.length;e++)Pe(t[e])}}function Ce(e,t){return e(t)}function Re(){}var Ae=!1;function Ne(e,t,n){if(Ae)return e(t,n);Ae=!0;try{return Ce(e,t,n)}finally{Ae=!1,(null!==Se||null!==je)&&(Re(),Te())}}function _e(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var ze=!1;if(u)try{var Oe={};Object.defineProperty(Oe,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Oe,Oe),window.removeEventListener("test",Oe,Oe)}catch(ue){ze=!1}function Be(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Le=!1,De=null,Ve=!1,Fe=null,Me={onError:function(e){Le=!0,De=e}};function Ie(e,t,n,r,i,a,o,s,l){Le=!1,De=null,Be.apply(Me,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $e(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(a(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return We(i),e;if(o===r)return We(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var qe=i.unstable_scheduleCallback,Ge=i.unstable_cancelCallback,Ye=i.unstable_shouldYield,Xe=i.unstable_requestPaint,Qe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=dt(s):0!==(a&=o)&&(r=dt(a))}else 0!==(o=n&~i)?r=dt(o):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ot(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Pt,Et=!1,Tt=[],Ct=null,Rt=null,At=null,Nt=new Map,_t=new Map,zt=[],Ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bt(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_t.delete(t.pointerId)}}function Lt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Dt(e){var t=vi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$e(n)))return e.blockedOn=t,void Pt(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Vt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Ft(e,t,n){Vt(e)&&n.delete(t)}function Mt(){Et=!1,null!==Ct&&Vt(Ct)&&(Ct=null),null!==Rt&&Vt(Rt)&&(Rt=null),null!==At&&Vt(At)&&(At=null),Nt.forEach(Ft),_t.forEach(Ft)}function It(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Mt)))}function Ut(e){function t(t){return It(t,e)}if(0<Tt.length){It(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ct&&It(Ct,e),null!==Rt&&It(Rt,e),null!==At&&It(At,e),Nt.forEach(t),_t.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Dt(n),null===n.blockedOn&&zt.shift()}var $t=b.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,n,r){var i=yt,a=$t.transition;$t.transition=null;try{yt=1,qt(e,t,n,r)}finally{yt=i,$t.transition=a}}function Kt(e,t,n,r){var i=yt,a=$t.transition;$t.transition=null;try{yt=4,qt(e,t,n,r)}finally{yt=i,$t.transition=a}}function qt(e,t,n,r){if(Wt){var i=Yt(e,t,n,r);if(null===i)Wr(e,t,r,Gt,n),Bt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Ct=Lt(Ct,e,t,n,r,i),!0;case"dragenter":return Rt=Lt(Rt,e,t,n,r,i),!0;case"mouseover":return At=Lt(At,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Nt.set(a,Lt(Nt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,_t.set(a,Lt(_t.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Bt(e,r),4&t&&-1<Ot.indexOf(e)){for(;null!==i;){var a=yi(i);if(null!==a&&wt(a),null===(a=Yt(e,t,n,r))&&Wr(e,t,r,Gt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Gt=null;function Yt(e,t,n,r){if(Gt=null,null!==(e=vi(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$e(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Qt?Qt.value:Qt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=D({},cn,{view:0,detail:0}),fn=an(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(on=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=on=0,ln=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=an(pn),mn=an(D({},pn,{dataTransfer:0})),gn=an(D({},dn,{relatedTarget:0})),xn=an(D({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=D({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(vn),bn=an(D({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Pn(){return jn}var En=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tn=an(En),Cn=an(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=an(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pn})),An=an(D({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_n=an(Nn),zn=[9,13,27,32],On=u&&"CompositionEvent"in window,Bn=null;u&&"documentMode"in document&&(Bn=document.documentMode);var Ln=u&&"TextEvent"in window&&!Bn,Dn=u&&(!On||Bn&&8<Bn&&11>=Bn),Vn=String.fromCharCode(32),Fn=!1;function Mn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function In(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$n[e.type]:"textarea"===t}function Hn(e,t,n,r){Ee(r),0<(t=Kr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,qn=null;function Gn(e){Vr(e,0)}function Yn(e){if(q(bi(e)))return e}function Xn(e,t){if("change"===e)return t}var Qn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Yn(qn)){var t=[];Hn(t,qn,e,we(e)),Ne(Gn,t)}}function rr(e,t,n){"focusin"===e?(tr(),qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(qn)}function ar(e,t){if("click"===e)return Yn(t)}function or(e,t){if("input"===e||"change"===e)return Yn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=G((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ur(n,a);var o=ur(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,vr=null,yr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==G(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&lr(vr,r)||(vr=r,0<(r=Kr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Pr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}u&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Pr("animationend"),Tr=Pr("animationiteration"),Cr=Pr("animationstart"),Rr=Pr("transitionend"),Ar=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,t){Ar.set(e,t),l(t,[e])}for(var zr=0;zr<Nr.length;zr++){var Or=Nr[zr];_r(Or.toLowerCase(),"on"+(Or[0].toUpperCase()+Or.slice(1)))}_r(Er,"onAnimationEnd"),_r(Tr,"onAnimationIteration"),_r(Cr,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(Rr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,l,c){if(Ie.apply(this,arguments),Le){if(!Le)throw Error(a(198));var u=De;Le=!1,De=null,Ve||(Ve=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Vr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Dr(i,s,c),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Dr(i,s,c),a=l}}}if(Ve)throw e=Fe,Ve=!1,Fe=null,e}function Fr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||($r(t,e,2,!1),n.add(r))}function Mr(e,t,n){var r=0;t&&(r|=4),$r(n,e,r,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Ir]){e[Ir]=!0,o.forEach((function(t){"selectionchange"!==t&&(Lr.has(t)||Mr(t,!1,e),Mr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ir]||(t[Ir]=!0,Mr("selectionchange",!1,t))}}function $r(e,t,n,r){switch(Xt(t)){case 1:var i=Ht;break;case 4:i=Kt;break;default:i=qt}n=i.bind(null,t,n,e),i=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=vi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Ne((function(){var r=a,i=we(n),o=[];e:{var s=Ar.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Tn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Rn;break;case Er:case Tr:case Cr:l=xn;break;case Rr:l=An;break;case"scroll":l=fn;break;case"wheel":l=_n;break;case"copy":case"cut":case"paste":l=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Cn}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==s?s+"Capture":null:s;u=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=_e(h,f))&&u.push(Hr(h,m,p)))),d)break;h=h.return}0<u.length&&(s=new l(s,c,null,n,i),o.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!vi(c)&&!c[hi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?vi(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Cn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:bi(l),p=null==c?s:bi(c),(s=new u(m,h+"leave",l,n,i)).target=d,s.relatedTarget=p,m=null,vi(i)===r&&((u=new u(f,h+"enter",c,n,i)).target=p,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(f=c,h=0,p=u=l;p;p=qr(p))h++;for(p=0,m=f;m;m=qr(m))p++;for(;0<h-p;)u=qr(u),h--;for(;0<p-h;)f=qr(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=qr(u),f=qr(f)}u=null}else u=null;null!==l&&Gr(o,s,l,u,!1),null!==c&&null!==d&&Gr(o,d,c,u,!0)}if("select"===(l=(s=r?bi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Xn;else if(Wn(s))if(Qn)g=or;else{g=ir;var x=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ar);switch(g&&(g=g(e,r))?Hn(o,g,n,i):(x&&x(e,s,r),"focusout"===e&&(x=s._wrapperState)&&x.controlled&&"number"===s.type&&ee(s,"number",s.value)),x=r?bi(r):window,e){case"focusin":(Wn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,vr=null);break;case"focusout":vr=xr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,br(o,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(o,n,i)}var v;if(On)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Mn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Dn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(v=en()):(Jt="value"in(Qt=i)?Qt.value:Qt.textContent,Un=!0)),0<(x=Kr(r,y)).length&&(y=new bn(y,e,null,n,i),o.push({event:y,listeners:x}),v?y.data=v:null!==(v=In(n))&&(y.data=v))),(v=Ln?function(e,t){switch(e){case"compositionend":return In(t);case"keypress":return 32!==t.which?null:(Fn=!0,Vn);case"textInput":return(e=t.data)===Vn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!On&&Mn(e,t)?(e=en(),Zt=Jt=Qt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Vr(o,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=_e(e,n))&&r.unshift(Hr(e,a,i)),null!=(a=_e(e,t))&&r.push(Hr(e,a,i))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=_e(n,a))&&o.unshift(Hr(n,l,s)):i||null!=(l=_e(n,a))&&o.push(Hr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Yr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(Xr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(a(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),fi="__reactFiber$"+di,pi="__reactProps$"+di,hi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,xi="__reactHandles$"+di;function vi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[fi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[fi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wi(e){return e[pi]||null}var ki=[],Si=-1;function ji(e){return{current:e}}function Pi(e){0>Si||(e.current=ki[Si],ki[Si]=null,Si--)}function Ei(e,t){Si++,ki[Si]=e.current,e.current=t}var Ti={},Ci=ji(Ti),Ri=ji(!1),Ai=Ti;function Ni(e,t){var n=e.type.contextTypes;if(!n)return Ti;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function _i(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zi(){Pi(Ri),Pi(Ci)}function Oi(e,t,n){if(Ci.current!==Ti)throw Error(a(168));Ei(Ci,t),Ei(Ri,n)}function Bi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,$(e)||"Unknown",i));return D({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ti,Ai=Ci.current,Ei(Ci,e),Ei(Ri,Ri.current),!0}function Di(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Bi(e,t,Ai),r.__reactInternalMemoizedMergedChildContext=e,Pi(Ri),Pi(Ci),Ei(Ci,e)):Pi(Ri),Ei(Ri,n)}var Vi=null,Fi=!1,Mi=!1;function Ii(e){null===Vi?Vi=[e]:Vi.push(e)}function Ui(){if(!Mi&&null!==Vi){Mi=!0;var e=0,t=yt;try{var n=Vi;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Vi=null,Fi=!1}catch(i){throw null!==Vi&&(Vi=Vi.slice(e+1)),qe(Ze,Ui),i}finally{yt=t,Mi=!1}}return null}var $i=[],Wi=0,Hi=null,Ki=0,qi=[],Gi=0,Yi=null,Xi=1,Qi="";function Ji(e,t){$i[Wi++]=Ki,$i[Wi++]=Hi,Hi=e,Ki=t}function Zi(e,t,n){qi[Gi++]=Xi,qi[Gi++]=Qi,qi[Gi++]=Yi,Yi=e;var r=Xi;e=Qi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xi=1<<32-ot(t)+i|n<<i|r,Qi=a+e}else Xi=1<<a|n<<i|r,Qi=e}function ea(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function ta(e){for(;e===Hi;)Hi=$i[--Wi],$i[Wi]=null,Ki=$i[--Wi],$i[Wi]=null;for(;e===Yi;)Yi=qi[--Gi],qi[Gi]=null,Qi=qi[--Gi],qi[Gi]=null,Xi=qi[--Gi],qi[Gi]=null}var na=null,ra=null,ia=!1,aa=null;function oa(e,t){var n=Nc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Yi?{id:Xi,overflow:Qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ia){var t=ra;if(t){var n=t;if(!sa(e,t)){if(la(e))throw Error(a(418));t=ci(n.nextSibling);var r=na;t&&sa(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function ua(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function da(e){if(e!==na)return!1;if(!ia)return ua(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ra)){if(la(e))throw fa(),Error(a(418));for(;t;)oa(e,t),t=ci(t.nextSibling)}if(ua(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?ci(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=ra;e;)e=ci(e.nextSibling)}function pa(){ra=na=null,ia=!1}function ha(e){null===aa?aa=[e]:aa.push(e)}var ma=b.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=zc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Dc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===_&&va(a)===t.type)?((r=i(t,n.props)).ref=ga(e,t,n),r.return=e,r):((r=Oc(n.type,n.key,n.props,null,e.mode,r)).ref=ga(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Vc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Bc(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Dc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Oc(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case k:return(t=Vc(t,e.mode,n)).return=e,t;case _:return f(e,(0,t._init)(t._payload),n)}if(te(t)||B(t))return(t=Bc(t,e.mode,n,null)).return=e,t;xa(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case _:return p(e,t,(i=n._init)(n._payload),r)}if(te(n)||B(n))return null!==i?null:d(e,t,n,r,null);xa(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case _:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||B(r))return d(t,e=e.get(n)||null,r,i,null);xa(t,r)}return null}function m(i,a,s,l){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=p(i,d,s[m],l);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(i,d),a=o(x,a,m),null===u?c=x:u.sibling=x,u=x,d=g}if(m===s.length)return n(i,d),ia&&Ji(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=f(i,s[m],l))&&(a=o(d,a,m),null===u?c=d:u.sibling=d,u=d);return ia&&Ji(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=h(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(i,e)})),ia&&Ji(i,m),c}function g(i,s,l,c){var u=B(l);if("function"!==typeof u)throw Error(a(150));if(null==(l=u.call(l)))throw Error(a(151));for(var d=u=null,m=s,g=s=0,x=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(x=m,m=null):x=m.sibling;var y=p(i,m,v.value,c);if(null===y){null===m&&(m=x);break}e&&m&&null===y.alternate&&t(i,m),s=o(y,s,g),null===d?u=y:d.sibling=y,d=y,m=x}if(v.done)return n(i,m),ia&&Ji(i,g),u;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=f(i,v.value,c))&&(s=o(v,s,g),null===d?u=v:d.sibling=v,d=v);return ia&&Ji(i,g),u}for(m=r(i,m);!v.done;g++,v=l.next())null!==(v=h(m,i,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=o(v,s,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(i,e)})),ia&&Ji(i,g),u}return function e(r,a,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,u=a;null!==u;){if(u.key===c){if((c=o.type)===S){if(7===u.tag){n(r,u.sibling),(a=i(u,o.props.children)).return=r,r=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===_&&va(c)===u.type){n(r,u.sibling),(a=i(u,o.props)).ref=ga(r,u,o),a.return=r,r=a;break e}n(r,u);break}t(r,u),u=u.sibling}o.type===S?((a=Bc(o.props.children,r.mode,l,o.key)).return=r,r=a):((l=Oc(o.type,o.key,o.props,null,r.mode,l)).ref=ga(r,a,o),l.return=r,r=l)}return s(r);case k:e:{for(u=o.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Vc(o,r.mode,l)).return=r,r=a}return s(r);case _:return e(r,a,(u=o._init)(o._payload),l)}if(te(o))return m(r,a,o,l);if(B(o))return g(r,a,o,l);xa(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Dc(o,r.mode,l)).return=r,r=a),s(r)):n(r,a)}}var ba=ya(!0),wa=ya(!1),ka=ji(null),Sa=null,ja=null,Pa=null;function Ea(){Pa=ja=Sa=null}function Ta(e){var t=ka.current;Pi(ka),e._currentValue=t}function Ca(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ra(e,t){Sa=e,Pa=ja=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ys=!0),e.firstContext=null)}function Aa(e){var t=e._currentValue;if(Pa!==e)if(e={context:e,memoizedValue:t,next:null},null===ja){if(null===Sa)throw Error(a(308));ja=e,Sa.dependencies={lanes:0,firstContext:e}}else ja=ja.next=e;return t}var Na=null;function _a(e){null===Na?Na=[e]:Na.push(e)}function za(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,_a(t)):(n.next=i.next,i.next=n),t.interleaved=n,Oa(e,r)}function Oa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ba=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Da(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Va(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Cl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Oa(e,n)}return null===(i=r.interleaved)?(t.next=t,_a(r)):(t.next=i.next,i.next=t),r.interleaved=t,Oa(e,n)}function Ma(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Ia(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var f=s.lane,p=s.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=D({},d,f);break e;case 2:Ba=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=p,l=d):u=u.next=p,o|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ll|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Wa={},Ha=ji(Wa),Ka=ji(Wa),qa=ji(Wa);function Ga(e){if(e===Wa)throw Error(a(174));return e}function Ya(e,t){switch(Ei(qa,t),Ei(Ka,e),Ei(Ha,Wa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Pi(Ha),Ei(Ha,t)}function Xa(){Pi(Ha),Pi(Ka),Pi(qa)}function Qa(e){Ga(qa.current);var t=Ga(Ha.current),n=le(t,e.type);t!==n&&(Ei(Ka,e),Ei(Ha,n))}function Ja(e){Ka.current===e&&(Pi(Ha),Pi(Ka))}var Za=ji(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=b.ReactCurrentDispatcher,io=b.ReactCurrentBatchConfig,ao=0,oo=null,so=null,lo=null,co=!1,uo=!1,fo=0,po=0;function ho(){throw Error(a(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:es,e=n(r,i),uo){o=0;do{if(uo=!1,fo=0,25<=o)throw Error(a(301));o+=1,lo=so=null,t.updateQueue=null,ro.current=ts,e=n(r,i)}while(uo)}if(ro.current=Jo,t=null!==so&&null!==so.next,ao=0,lo=so=oo=null,co=!1,t)throw Error(a(300));return e}function xo(){var e=0!==fo;return fo=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function yo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(a(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function bo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=so,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((ao&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=f,s=r):c=c.next=f,oo.lanes|=d,Ll|=d}u=u.next}while(null!==u&&u!==o);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(ys=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Ll|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);sr(o,t.memoizedState)||(ys=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function jo(e,t){var n=oo,r=yo(),i=t(),o=!sr(r.memoizedState,i);if(o&&(r.memoizedState=i,ys=!0),r=r.queue,Lo(To.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,No(9,Eo.bind(null,n,r,i,t),void 0,null),null===Rl)throw Error(a(349));0!==(30&ao)||Po(n,t,i)}return i}function Po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Eo(e,t,n,r){t.value=n,t.getSnapshot=r,Co(t)&&Ro(e)}function To(e,t,n){return n((function(){Co(t)&&Ro(e)}))}function Co(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Ro(e){var t=Oa(e,1);null!==t&&nc(t,e,1,-1)}function Ao(e){var t=vo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Go.bind(null,oo,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function _o(){return yo().memoizedState}function zo(e,t,n,r){var i=vo();oo.flags|=e,i.memoizedState=No(1|t,n,void 0,void 0===r?null:r)}function Oo(e,t,n,r){var i=yo();r=void 0===r?null:r;var a=void 0;if(null!==so){var o=so.memoizedState;if(a=o.destroy,null!==r&&mo(r,o.deps))return void(i.memoizedState=No(t,n,a,r))}oo.flags|=e,i.memoizedState=No(1|t,n,a,r)}function Bo(e,t){return zo(8390656,8,e,t)}function Lo(e,t){return Oo(2048,8,e,t)}function Do(e,t){return Oo(4,2,e,t)}function Vo(e,t){return Oo(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oo(4,4,Fo.bind(null,t,e),n)}function Io(){}function Uo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $o(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wo(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,ys=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),oo.lanes|=n,Ll|=n,e.baseState=!0),t)}function Ho(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{yt=n,io.transition=r}}function Ko(){return yo().memoizedState}function qo(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yo(e))Xo(t,n);else if(null!==(n=za(e,t,n,r))){nc(n,e,r,ec()),Qo(n,t,r)}}function Go(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yo(e))Xo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,o)){var l=t.interleaved;return null===l?(i.next=i,_a(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=za(e,t,i,r))&&(nc(n,e,r,i=ec()),Qo(n,t,r))}}function Yo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Xo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Jo={readContext:Aa,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Zo={readContext:Aa,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:Aa,useEffect:Bo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zo(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var n=vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:Ao,useDebugValue:Io,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=Ao(!1),t=e[0];return e=Ho.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=vo();if(ia){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Rl)throw Error(a(349));0!==(30&ao)||Po(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bo(To.bind(null,r,o,e),[e]),r.flags|=2048,No(9,Eo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vo(),t=Rl.identifierPrefix;if(ia){var n=Qi;t=":"+t+"R"+(n=(Xi&~(1<<32-ot(Xi)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Aa,useCallback:Uo,useContext:Aa,useEffect:Lo,useImperativeHandle:Mo,useInsertionEffect:Do,useLayoutEffect:Vo,useMemo:$o,useReducer:wo,useRef:_o,useState:function(){return wo(bo)},useDebugValue:Io,useDeferredValue:function(e){return Wo(yo(),so.memoizedState,e)},useTransition:function(){return[wo(bo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:Ko,unstable_isNewReconciler:!1},ts={readContext:Aa,useCallback:Uo,useContext:Aa,useEffect:Lo,useImperativeHandle:Mo,useInsertionEffect:Do,useLayoutEffect:Vo,useMemo:$o,useReducer:ko,useRef:_o,useState:function(){return ko(bo)},useDebugValue:Io,useDeferredValue:function(e){var t=yo();return null===so?t.memoizedState=e:Wo(t,so.memoizedState,e)},useTransition:function(){return[ko(bo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:Ko,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Va(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(nc(t,e,i,r),Ma(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Va(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(nc(t,e,i,r),Ma(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Va(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Fa(e,i,r))&&(nc(t,e,r,n),Ma(t,e,r))}};function as(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,a))}function os(e,t,n){var r=!1,i=Ti,a=t.contextType;return"object"===typeof a&&null!==a?a=Aa(a):(i=_i(t)?Ai:Ci.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ni(e,i):Ti),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},La(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=Aa(a):(a=_i(t)?Ai:Ci.current,i.context=Ni(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rs(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Ua(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=I(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fs="function"===typeof WeakMap?WeakMap:Map;function ps(e,t,n){(n=Va(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Hl=r),ds(0,t)},n}function hs(e,t,n){(n=Va(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Kl?Kl=new Set([this]):Kl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pc.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Va(-1,1)).tag=2,Fa(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var vs=b.ReactCurrentOwner,ys=!1;function bs(e,t,n,r){t.child=null===e?wa(t,null,n,r):ba(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var a=t.ref;return Ra(t,i),r=go(e,t,n,r,a,i),n=xo(),null===e||ys?(ia&&n&&ea(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function ks(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||_c(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Oc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ss(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(o,r)&&e.ref===t.ref)return Ws(e,t,i)}return t.flags|=1,(e=zc(a,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(lr(a,r)&&e.ref===t.ref){if(ys=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Ws(e,t,i);0!==(131072&e.flags)&&(ys=!0)}}return Es(e,t,n,r,i)}function js(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ei(zl,_l),_l|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ei(zl,_l),_l|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ei(zl,_l),_l|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ei(zl,_l),_l|=r;return bs(e,t,i,n),t.child}function Ps(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Es(e,t,n,r,i){var a=_i(n)?Ai:Ci.current;return a=Ni(t,a),Ra(t,i),n=go(e,t,n,r,a,i),r=xo(),null===e||ys?(ia&&r&&ea(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function Ts(e,t,n,r,i){if(_i(n)){var a=!0;Li(t)}else a=!1;if(Ra(t,i),null===t.stateNode)$s(e,t),os(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=Aa(c):c=Ni(t,c=_i(n)?Ai:Ci.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,o,r,c),Ba=!1;var f=t.memoizedState;o.state=f,Ua(t,r,o,i),l=t.memoizedState,s!==r||f!==l||Ri.current||Ba?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Ba||as(t,n,s,r,f,l,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Da(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),o.props=c,d=t.pendingProps,f=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=Aa(l):l=Ni(t,l=_i(n)?Ai:Ci.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==d||f!==l)&&ss(t,o,r,l),Ba=!1,f=t.memoizedState,o.state=f,Ua(t,r,o,i);var h=t.memoizedState;s!==d||f!==h||Ri.current||Ba?("function"===typeof p&&(rs(t,n,p,r),h=t.memoizedState),(c=Ba||as(t,n,c,r,f,h,l)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Cs(e,t,n,r,a,i)}function Cs(e,t,n,r,i,a){Ps(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Di(t,n,!1),Ws(e,t,a);r=t.stateNode,vs.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=ba(t,e.child,null,a),t.child=ba(t,null,s,a)):bs(e,t,s,a),t.memoizedState=r.state,i&&Di(t,n,!0),t.child}function Rs(e){var t=e.stateNode;t.pendingContext?Oi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Oi(0,t.context,!1),Ya(e,t.containerInfo)}function As(e,t,n,r,i){return pa(),ha(i),t.flags|=256,bs(e,t,n,r),t.child}var Ns,_s,zs,Os,Bs={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,t,n){var r,i=t.pendingProps,o=Za.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ei(Za,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Lc(l,i,0,null),e=Bc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ls(n),t.memoizedState=Bs,e):Vs(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,r=us(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Lc({mode:"visible",children:r.children},i,0,null),(o=Bc(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&ba(t,e.child,null,s),t.child.memoizedState=Ls(s),t.memoizedState=Bs,o);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Fs(e,t,s,r=us(o=Error(a(419)),r,void 0))}if(l=0!==(s&e.childLanes),ys||l){if(null!==(r=Rl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Oa(e,i),nc(r,e,i,-1))}return mc(),Fs(e,t,s,r=us(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Tc.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ra=ci(i.nextSibling),na=t,ia=!0,aa=null,null!==e&&(qi[Gi++]=Xi,qi[Gi++]=Qi,qi[Gi++]=Yi,Xi=e.id,Qi=e.overflow,Yi=t),t=Vs(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,o,n);if(s){s=i.fallback,l=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=zc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=zc(r,s):(s=Bc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ls(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Bs,i}return e=(s=e.child).sibling,i=zc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Vs(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&ha(r),ba(t,e.child,null,n),(e=Vs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ms(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ca(e.return,t,n)}function Is(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Us(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=Za.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ms(e,n,t);else if(19===e.tag)Ms(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ei(Za,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Is(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Is(t,!0,n,null,a);break;case"together":Is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ll|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=zc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hs(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ks(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qs(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ks(t),null;case 1:case 17:return _i(t.type)&&zi(),Ks(t),null;case 3:return r=t.stateNode,Xa(),Pi(Ri),Pi(Ci),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(da(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),_s(e,t),Ks(t),null;case 5:Ja(t);var i=Ga(qa.current);if(n=t.type,null!==e&&null!=t.stateNode)zs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Ks(t),null}if(e=Ga(Ha.current),da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fi]=t,r[pi]=o,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)Fr(Br[i],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":X(r,o),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fr("invalid",r);break;case"textarea":ie(r,o),Fr("invalid",r)}for(var l in ve(n,o),i=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Fr("scroll",r)}switch(n){case"input":K(r),Z(r,o,!0);break;case"textarea":K(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[fi]=t,e[pi]=r,Ns(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)Fr(Br[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":X(e,r),i=Y(e,r),Fr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=D({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Fr("invalid",e)}for(o in ve(n,i),c=i)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?ge(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==n||""!==u)&&fe(e,u):"number"===typeof u&&fe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Fr("scroll",e):null!=u&&y(e,o,u,l))}switch(n){case"input":K(e),Z(e,r,!1);break;case"textarea":K(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ks(t),null;case 6:if(e&&null!=t.stateNode)Os(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Ga(qa.current),Ga(Ha.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(o=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return Ks(t),null;case 13:if(Pi(Za),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&0!==(1&t.mode)&&0===(128&t.flags))fa(),pa(),t.flags|=98560,o=!1;else if(o=da(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[fi]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ks(t),o=!1}else null!==aa&&(oc(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===Ol&&(Ol=3):mc())),null!==t.updateQueue&&(t.flags|=4),Ks(t),null);case 4:return Xa(),_s(e,t),null===e&&Ur(t.stateNode.containerInfo),Ks(t),null;case 10:return Ta(t.type._context),Ks(t),null;case 19:if(Pi(Za),null===(o=t.memoizedState))return Ks(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)Hs(o,!1);else{if(0!==Ol||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,Hs(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ei(Za,1&Za.current|2),t.child}e=e.sibling}null!==o.tail&&Qe()>Ul&&(t.flags|=128,r=!0,Hs(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hs(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ia)return Ks(t),null}else 2*Qe()-o.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=128,r=!0,Hs(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Qe(),t.sibling=null,n=Za.current,Ei(Za,r?1&n|2:1&n),t):(Ks(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&_l)&&(Ks(t),6&t.subtreeFlags&&(t.flags|=8192)):Ks(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Gs(e,t){switch(ta(t),t.tag){case 1:return _i(t.type)&&zi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xa(),Pi(Ri),Pi(Ci),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Pi(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Pi(Za),null;case 4:return Xa(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ns=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},_s=function(){},zs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ga(Ha.current);var a,o=null;switch(n){case"input":i=Y(e,i),r=Y(e,r),o=[];break;case"select":i=D({},i,{value:void 0}),r=D({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ve(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Os=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ys=!1,Xs=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){jc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&el(t,n,a)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[pi],delete t[mi],delete t[gi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function fl(e,t,n){for(n=n.child;null!==n;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Xs||Zs(n,t);case 6:var r=ul,i=dl;ul=null,fl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Ut(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,fl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Xs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&el(n,t,o),i=i.next}while(i!==r)}fl(e,t,n);break;case 1:if(!Xs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){jc(n,t,s)}fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:1&n.mode?(Xs=(r=Xs)||null!==n.memoizedState,fl(e,t,n),Xs=r):fl(e,t,n);break;default:fl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qs),t.forEach((function(t){var r=Cc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(a(160));pl(o,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){jc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),xl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){jc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:ml(t,e),xl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(ml(t,e),xl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(g){jc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&Q(i,o),ye(l,s);var u=ye(l,o);for(s=0;s<c.length;s+=2){var d=c[s],f=c[s+1];"style"===d?ge(i,f):"dangerouslySetInnerHTML"===d?de(i,f):"children"===d?fe(i,f):y(i,d,f,u)}switch(l){case"input":J(i,o);break;case"textarea":ae(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(i,!!o.multiple,h,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[pi]=o}catch(g){jc(e,e.return,g)}}break;case 6:if(ml(t,e),xl(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){jc(e,e.return,g)}}break;case 3:if(ml(t,e),xl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:ml(t,e),xl(e);break;case 13:ml(t,e),xl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Il=Qe())),4&r&&hl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Xs=(u=Xs)||d,ml(t,e),Xs=u):ml(t,e),xl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(f=Js=d;null!==Js;){switch(h=(p=Js).child,p.tag){case 0:case 11:case 14:case 15:nl(4,p,p.return);break;case 1:Zs(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){jc(r,n,g)}}break;case 5:Zs(p,p.return);break;case 22:if(null!==p.memoizedState){wl(f);continue}}null!==h?(h.return=p,Js=h):wl(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,u?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=f.stateNode,s=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){jc(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ml(t,e),xl(e),4&r&&hl(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ol(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(a(161))}}catch(s){jc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vl(e,t,n){Js=e,yl(e,t,n)}function yl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Ys;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Xs;s=Ys;var c=Xs;if(Ys=o,(Xs=l)&&!c)for(Js=i;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?kl(i):null!==l?(l.return=o,Js=l):kl(i);for(;null!==a;)Js=a,yl(a,t,n),a=a.sibling;Js=i,Ys=s,Xs=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Js=a):bl(e)}}function bl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&$a(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}$a(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ut(f)}}}break;default:throw Error(a(163))}Xs||512&t.flags&&il(t)}catch(p){jc(t,t.return,p)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){jc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){jc(t,i,l)}}var a=t.return;try{il(t)}catch(l){jc(t,a,l)}break;case 5:var o=t.return;try{il(t)}catch(l){jc(t,o,l)}}}catch(l){jc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,jl=Math.ceil,Pl=b.ReactCurrentDispatcher,El=b.ReactCurrentOwner,Tl=b.ReactCurrentBatchConfig,Cl=0,Rl=null,Al=null,Nl=0,_l=0,zl=ji(0),Ol=0,Bl=null,Ll=0,Dl=0,Vl=0,Fl=null,Ml=null,Il=0,Ul=1/0,$l=null,Wl=!1,Hl=null,Kl=null,ql=!1,Gl=null,Yl=0,Xl=0,Ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&Cl)?Qe():-1!==Jl?Jl:Jl=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Cl)&&0!==Nl?Nl&-Nl:null!==ma.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nc(e,t,n,r){if(50<Xl)throw Xl=0,Ql=null,Error(a(185));xt(e,n,r),0!==(2&Cl)&&e===Rl||(e===Rl&&(0===(2&Cl)&&(Dl|=n),4===Ol&&sc(e,Nl)),rc(e,r),1===n&&0===Cl&&0===(1&t.mode)&&(Ul=Qe()+500,Fi&&Ui()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=pt(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=ft(e,e===Rl?Nl:0);if(0===r)null!==n&&Ge(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ge(n),1===t)0===e.tag?function(e){Fi=!0,Ii(e)}(lc.bind(null,e)):Ii(lc.bind(null,e)),oi((function(){0===(6&Cl)&&Ui()})),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Rc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Jl=-1,Zl=0,0!==(6&Cl))throw Error(a(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=ft(e,e===Rl?Nl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Cl;Cl|=2;var o=hc();for(Rl===e&&Nl===t||($l=null,Ul=Qe()+500,fc(e,t));;)try{vc();break}catch(l){pc(e,l)}Ea(),Pl.current=o,Cl=i,null!==Al?t=0:(Rl=null,Nl=0,t=Ol)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=ac(e,i))),1===t)throw n=Bl,fc(e,0),sc(e,r),rc(e,Qe()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(o=ht(e))&&(r=o,t=ac(e,o))),1===t))throw n=Bl,fc(e,0),sc(e,r),rc(e,Qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Ml,$l);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Il+500-Qe())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Ml,$l),t);break}wc(e,Ml,$l);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ot(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jl(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Ml,$l),r);break}wc(e,Ml,$l);break;default:throw Error(a(329))}}}return rc(e,Qe()),e.callbackNode===n?ic.bind(null,e):null}function ac(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Ml,Ml=n,null!==t&&oc(t)),e}function oc(e){null===Ml?Ml=e:Ml.push.apply(Ml,e)}function sc(e,t){for(t&=~Vl,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Cl))throw Error(a(327));kc();var t=ft(e,0);if(0===(1&t))return rc(e,Qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Bl,fc(e,0),sc(e,t),rc(e,Qe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ml,$l),rc(e,Qe()),null}function cc(e,t){var n=Cl;Cl|=1;try{return e(t)}finally{0===(Cl=n)&&(Ul=Qe()+500,Fi&&Ui())}}function uc(e){null!==Gl&&0===Gl.tag&&0===(6&Cl)&&kc();var t=Cl;Cl|=1;var n=Tl.transition,r=yt;try{if(Tl.transition=null,yt=1,e)return e()}finally{yt=r,Tl.transition=n,0===(6&(Cl=t))&&Ui()}}function dc(){_l=zl.current,Pi(zl)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Al)for(n=Al.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zi();break;case 3:Xa(),Pi(Ri),Pi(Ci),no();break;case 5:Ja(r);break;case 4:Xa();break;case 13:case 19:Pi(Za);break;case 10:Ta(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Rl=e,Al=e=zc(e.current,null),Nl=_l=t,Ol=0,Bl=null,Vl=Dl=Ll=0,Ml=Fl=null,null!==Na){for(t=0;t<Na.length;t++)if(null!==(r=(n=Na[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Na=null}return e}function pc(e,t){for(;;){var n=Al;try{if(Ea(),ro.current=Jo,co){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}co=!1}if(ao=0,lo=so=oo=null,uo=!1,fo=0,El.current=null,null===n||null===n.return){Ol=1,Bl=t,Al=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Nl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gs(s);if(null!==h){h.flags&=-257,xs(h,s,l,0,t),1&h.mode&&ms(o,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(o,u,t),mc();break e}c=Error(a(426))}else if(ia&&1&l.mode){var x=gs(s);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xs(x,s,l,0,t),ha(cs(c,l));break e}}o=c=cs(c,l),4!==Ol&&(Ol=2),null===Fl?Fl=[o]:Fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ia(o,ps(0,c,t));break e;case 1:l=c;var v=o.type,y=o.stateNode;if(0===(128&o.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Kl||!Kl.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Ia(o,hs(o,l,t));break e}}o=o.return}while(null!==o)}bc(n)}catch(b){t=b,Al===n&&null!==n&&(Al=n=n.return);continue}break}}function hc(){var e=Pl.current;return Pl.current=Jo,null===e?Jo:e}function mc(){0!==Ol&&3!==Ol&&2!==Ol||(Ol=4),null===Rl||0===(268435455&Ll)&&0===(268435455&Dl)||sc(Rl,Nl)}function gc(e,t){var n=Cl;Cl|=2;var r=hc();for(Rl===e&&Nl===t||($l=null,fc(e,t));;)try{xc();break}catch(i){pc(e,i)}if(Ea(),Cl=n,Pl.current=r,null!==Al)throw Error(a(261));return Rl=null,Nl=0,Ol}function xc(){for(;null!==Al;)yc(Al)}function vc(){for(;null!==Al&&!Ye();)yc(Al)}function yc(e){var t=Sl(e.alternate,e,_l);e.memoizedProps=e.pendingProps,null===t?bc(e):Al=t,El.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=qs(n,t,_l)))return void(Al=n)}else{if(null!==(n=Gs(n,t)))return n.flags&=32767,void(Al=n);if(null===e)return Ol=6,void(Al=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Al=t);Al=t=e}while(null!==t);0===Ol&&(Ol=5)}function wc(e,t,n){var r=yt,i=Tl.transition;try{Tl.transition=null,yt=1,function(e,t,n,r){do{kc()}while(null!==Gl);if(0!==(6&Cl))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Rl&&(Al=Rl=null,Nl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||ql||(ql=!0,Rc(tt,(function(){return kc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Tl.transition,Tl.transition=null;var s=yt;yt=1;var l=Cl;Cl|=4,El.current=null,function(e,t){if(ei=Wt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==i&&3!==f.nodeType||(l=s+i),f!==o||0!==r&&3!==f.nodeType||(c=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=s),p===o&&++d===r&&(c=s),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),x);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(a(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,n),gl(n,e),hr(ti),Wt=!!ei,ti=ei=null,e.current=n,vl(n,e,i),Xe(),Cl=l,yt=s,Tl.transition=o}else e.current=n;if(ql&&(ql=!1,Gl=e,Yl=i),o=e.pendingLanes,0===o&&(Kl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=Hl,Hl=null,e;0!==(1&Yl)&&0!==e.tag&&kc(),o=e.pendingLanes,0!==(1&o)?e===Ql?Xl++:(Xl=0,Ql=e):Xl=0,Ui()}(e,t,n,r)}finally{Tl.transition=i,yt=r}return null}function kc(){if(null!==Gl){var e=bt(Yl),t=Tl.transition,n=yt;try{if(Tl.transition=null,yt=16>e?16:e,null===Gl)var r=!1;else{if(e=Gl,Gl=null,Yl=0,0!==(6&Cl))throw Error(a(331));var i=Cl;for(Cl|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(0!==(16&Js.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Js=u;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,o)}var f=d.child;if(null!==f)f.return=d,Js=f;else for(;null!==Js;){var p=(d=Js).sibling,h=d.return;if(al(d),d===u){Js=null;break}if(null!==p){p.return=h,Js=p;break}Js=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Js=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(0!==(2048&(o=Js).flags))switch(o.tag){case 0:case 11:case 15:nl(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,Js=v;break e}Js=o.return}}var y=e.current;for(Js=y;null!==Js;){var b=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Js=b;else e:for(s=y;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){jc(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Cl=i,Ui(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{yt=n,Tl.transition=t}}return!1}function Sc(e,t,n){e=Fa(e,t=ps(0,t=cs(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Kl||!Kl.has(r))){t=Fa(t,e=hs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Pc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Rl===e&&(Nl&n)===n&&(4===Ol||3===Ol&&(130023424&Nl)===Nl&&500>Qe()-Il?fc(e,0):Vl|=n),rc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Oa(e,t))&&(xt(e,t,n),rc(e,n))}function Tc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function Cc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Ec(e,n)}function Rc(e,t){return qe(e,t)}function Ac(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nc(e,t,n,r){return new Ac(e,t,n,r)}function _c(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zc(e,t){var n=e.alternate;return null===n?((n=Nc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oc(e,t,n,r,i,o){var s=2;if(r=e,"function"===typeof e)_c(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Bc(n.children,i,o,t);case j:s=8,i|=8;break;case P:return(e=Nc(12,n,t,2|i)).elementType=P,e.lanes=o,e;case R:return(e=Nc(13,n,t,i)).elementType=R,e.lanes=o,e;case A:return(e=Nc(19,n,t,i)).elementType=A,e.lanes=o,e;case z:return Lc(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:s=10;break e;case T:s=9;break e;case C:s=11;break e;case N:s=14;break e;case _:s=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Nc(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Bc(e,t,n,r){return(e=Nc(7,e,r,t)).lanes=n,e}function Lc(e,t,n,r){return(e=Nc(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Dc(e,t,n){return(e=Nc(6,e,null,t)).lanes=n,e}function Vc(e,t,n){return(t=Nc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,i,a,o,s,l){return e=new Fc(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Nc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(a),e}function Ic(e){if(!e)return Ti;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_i(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(_i(n))return Bi(e,n,t)}return t}function Uc(e,t,n,r,i,a,o,s,l){return(e=Mc(n,r,!0,e,0,a,0,s,l)).context=Ic(null),n=e.current,(a=Va(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Fa(n,a,i),e.current.lanes=i,xt(e,i,r),rc(e,r),e}function $c(e,t,n,r){var i=t.current,a=ec(),o=tc(i);return n=Ic(n),null===t.context?t.context=n:t.pendingContext=n,(t=Va(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fa(i,t,o))&&(nc(e,i,o,a),Ma(e,i,o)),o}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Kc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ri.current)ys=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return ys=!1,function(e,t,n){switch(t.tag){case 3:Rs(t),pa();break;case 5:Qa(t);break;case 1:_i(t.type)&&Li(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ei(ka,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ei(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ds(e,t,n):(Ei(Za,1&Za.current),null!==(e=Ws(e,t,n))?e.sibling:null);Ei(Za,1&Za.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Us(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ei(Za,Za.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return Ws(e,t,n)}(e,t,n);ys=0!==(131072&e.flags)}else ys=!1,ia&&0!==(1048576&t.flags)&&Zi(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=Ni(t,Ci.current);Ra(t,n),i=go(null,t,r,e,i,n);var o=xo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_i(r)?(o=!0,Li(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,La(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Cs(null,t,r,!0,o,n)):(t.tag=0,ia&&o&&ea(t),bs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return _c(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===C)return 11;if(e===N)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Es(null,t,r,e,n);break e;case 1:t=Ts(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Es(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ts(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Rs(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,Da(e,t),Ua(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=As(e,t,r,n,i=cs(Error(a(423)),t));break e}if(r!==i){t=As(e,t,r,n,i=cs(Error(a(424)),t));break e}for(ra=ci(t.stateNode.containerInfo.firstChild),na=t,ia=!0,aa=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),r===i){t=Ws(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Qa(t),null===e&&ca(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==o&&ni(r,o)&&(t.flags|=32),Ps(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&ca(t),null;case 13:return Ds(e,t,n);case 4:return Ya(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ba(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ei(ka,r._currentValue),r._currentValue=s,null!==o)if(sr(o.value,s)){if(o.children===i.children&&!Ri.current){t=Ws(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Va(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),Ca(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ca(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}bs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ra(t,n),r=r(i=Aa(i)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),ks(e,t,r,i=ns(r.type,i),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),$s(e,t),t.tag=1,_i(r)?(e=!0,Li(t)):e=!1,Ra(t,n),os(t,r,i),ls(t,r,i,n),Cs(null,t,r,!0,e,n);case 19:return Us(e,t,n);case 22:return js(e,t,n)}throw Error(a(156,t.tag))};var qc="function"===typeof reportError?reportError:function(e){console.error(e)};function Gc(e){this._internalRoot=e}function Yc(e){this._internalRoot=e}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var s=i;i=function(){var e=Wc(o);s.call(e)}}$c(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Wc(o);a.call(e)}}var o=Uc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=o,e[hi]=o.current,Ur(8===e.nodeType?e.parentNode:e),uc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Wc(l);s.call(e)}}var l=Mc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[hi]=l.current,Ur(8===e.nodeType?e.parentNode:e),uc((function(){$c(t,l,n,r)})),l}(n,t,e,i,r);return Wc(o)}Yc.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));$c(e,t,null,null)},Yc.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){$c(null,e,null,null)})),t[hi]=null}},Yc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,Qe()),0===(6&Cl)&&(Ul=Qe()+500,Ui()))}break;case 13:uc((function(){var t=Oa(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Kc(e,1)}},kt=function(e){if(13===e.tag){var t=Oa(e,134217728);if(null!==t)nc(t,e,134217728,ec());Kc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Oa(e,t);if(null!==n)nc(n,e,t,ec());Kc(e,t)}},jt=function(){return yt},Pt=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(a(90));q(r),J(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Ce=cc,Re=uc;var eu={usingClientEntryPoint:!1,Events:[yi,bi,wi,Ee,Te,cc]},tu={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),at=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xc(e))throw Error(a(299));var n=!1,r="",i=qc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Mc(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Gc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Qc(t))throw Error(a(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=qc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,i,0,o,s),e[hi]=t.current,Ur(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yc(t)},t.render=function(e,t,n){if(!Qc(t))throw Error(a(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.H=r.createRoot,r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var b=y.prototype=new v;b.constructor=y,m(b,x.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,i)&&!j.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function C(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+C(l,0):a,w(o)?(i="",null!=e&&(i=e.replace(T,"$&/")+"/"),R(o,t,i,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+C(s=e[c],c);l+=R(s,t,i,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=R(s=s.value,t,i,u=a+C(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function A(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},z={transition:null},O={ReactCurrentDispatcher:_,ReactCurrentBatchConfig:z,ReactCurrentOwner:S};function B(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=o,t.PureComponent=y,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=B,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=B,t.useCallback=function(e,t){return _.current.useCallback(e,t)},t.useContext=function(e){return _.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return _.current.useDeferredValue(e)},t.useEffect=function(e,t){return _.current.useEffect(e,t)},t.useId=function(){return _.current.useId()},t.useImperativeHandle=function(e,t,n){return _.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return _.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return _.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return _.current.useMemo(e,t)},t.useReducer=function(e,t,n){return _.current.useReducer(e,t,n)},t.useRef=function(e){return _.current.useRef(e)},t.useState=function(e){return _.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return _.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return _.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,z(k);else{var t=r(u);null!==t&&O(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,v(E),E=-1),h=!0;var a=p;try{for(b(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!R());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var s=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?f.callback=s:f===r(c)&&i(c),b(n)}else i(c);f=r(c)}if(null!==f)var l=!0;else{var d=r(u);null!==d&&O(w,d.startTime-n),l=!1}return l}finally{f=null,p=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,P=null,E=-1,T=5,C=-1;function R(){return!(t.unstable_now()-C<T)}function A(){if(null!==P){var e=t.unstable_now();C=e;var n=!0;try{n=P(!0,e)}finally{n?S():(j=!1,P=null)}}else j=!1}if("function"===typeof y)S=function(){y(A)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,_=N.port2;N.port1.onmessage=A,S=function(){_.postMessage(null)}}else S=function(){x(A,0)};function z(e){P=e,j||(j=!0,S())}function O(e,n){E=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,z(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(v(E),E=-1):g=!0,O(w,a-o))):(e.sortIndex=s,n(c,e),m||h||(m=!0,z(k))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>nf,hasStandardBrowserEnv:()=>af,hasStandardBrowserWebWorkerEnv:()=>of,navigator:()=>rf,origin:()=>sf});var t,r=n(43),i=n.t(r,2),a=n(391);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const s="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,r){return void 0===n&&(n=null),o({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h(e,n,r,i){void 0===i&&(i={});let{window:a=document.defaultView,v5Compat:c=!1}=i,p=a.history,h=t.Pop,m=null,g=x();function x(){return(p.state||{idx:null}).idx}function v(){h=t.Pop;let e=x(),n=null==e?null:e-g;g=e,m&&m({action:h,location:b.location,delta:n})}function y(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:f(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,p.replaceState(o({},p.state,{idx:g}),""));let b={get action(){return h},get location(){return e(a,p)},listen(e){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(s,v),m=e,()=>{a.removeEventListener(s,v),m=null}},createHref:e=>n(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,n){h=t.Push;let i=d(b.location,e,n);r&&r(i,e),g=x()+1;let o=u(i,g),s=b.createHref(i);try{p.pushState(o,"",s)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;a.location.assign(s)}c&&m&&m({action:h,location:b.location,delta:1})},replace:function(e,n){h=t.Replace;let i=d(b.location,e,n);r&&r(i,e),g=x();let a=u(i,g),o=b.createHref(i);p.replaceState(a,"",o),c&&m&&m({action:h,location:b.location,delta:0})},go:e=>p.go(e)};return b}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function g(e,t,n){return void 0===n&&(n="/"),x(e,t,n,!1)}function x(e,t,n,r){let i=N(("string"===typeof t?p(t):t).pathname||"/",n);if(null==i)return null;let a=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=A(i);o=C(a[s],e,r)}return o}function v(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(l(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=L([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:T(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of y(e.path))i(e,t,r);else i(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=y(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const b=/^:[\w-]+$/,w=3,k=2,S=1,j=10,P=-2,E=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=P),t&&(r+=k),n.filter((e=>!E(e))).reduce(((e,t)=>e+(b.test(t)?w:""===t?S:j)),r)}function C(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:L([a,u.pathname]),pathnameBase:D(L([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=L([a,u.pathnameBase]))}return o}function R(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:a,pathnameBase:o,pattern:e}}function A(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function _(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function O(e,t){let n=z(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function B(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=p(e):(i=o({},e),l(!i.pathname||!i.pathname.includes("?"),_("?","pathname","search",i)),l(!i.pathname||!i.pathname.includes("#"),_("#","pathname","hash",i)),l(!i.search||!i.search.includes("#"),_("#","search","hash",i)));let a,s=""===e||""===i.pathname,c=s?"/":i.pathname;if(null==c)a=n;else{let e=t.length-1;if(!r&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?p(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:V(r),hash:F(i)}}(i,a),d=c&&"/"!==c&&c.endsWith("/"),f=(s||"."===c)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const L=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),V=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",F=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function M(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const I=["post","put","patch","delete"],U=(new Set(I),["get",...I]);new Set(U),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}const W=r.createContext(null);const H=r.createContext(null);const K=r.createContext(null);const q=r.createContext(null);const G=r.createContext({outlet:null,matches:[],isDataRoute:!1});const Y=r.createContext(null);function X(){return null!=r.useContext(q)}function Q(){return X()||l(!1),r.useContext(q).location}function J(e){r.useContext(K).static||r.useLayoutEffect(e)}function Z(){let{isDataRoute:e}=r.useContext(G);return e?function(){let{router:e}=ce(se.UseNavigateStable),t=de(le.UseNavigateStable),n=r.useRef(!1);J((()=>{n.current=!0}));let i=r.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,$({fromRouteId:t},i)))}),[e,t]);return i}():function(){X()||l(!1);let e=r.useContext(W),{basename:t,future:n,navigator:i}=r.useContext(K),{matches:a}=r.useContext(G),{pathname:o}=Q(),s=JSON.stringify(O(a,n.v7_relativeSplatPath)),c=r.useRef(!1);return J((()=>{c.current=!0})),r.useCallback((function(n,r){if(void 0===r&&(r={}),!c.current)return;if("number"===typeof n)return void i.go(n);let a=B(n,JSON.parse(s),o,"path"===r.relative);null==e&&"/"!==t&&(a.pathname="/"===a.pathname?t:L([t,a.pathname])),(r.replace?i.replace:i.push)(a,r.state,r)}),[t,i,s,o,e])}()}function ee(){let{matches:e}=r.useContext(G),t=e[e.length-1];return t?t.params:{}}function te(e,n,i,a){X()||l(!1);let{navigator:o}=r.useContext(K),{matches:s}=r.useContext(G),c=s[s.length-1],u=c?c.params:{},d=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let f,h=Q();if(n){var m;let e="string"===typeof n?p(n):n;"/"===d||(null==(m=e.pathname)?void 0:m.startsWith(d))||l(!1),f=e}else f=h;let x=f.pathname||"/",v=x;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=g(e,{pathname:v});let b=oe(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:L([d,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:L([d,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,i,a);return n&&b?r.createElement(q.Provider,{value:{location:$({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:t.Pop}},b):b}function ne(){let e=function(){var e;let t=r.useContext(Y),n=ue(le.UseRouteError),i=de(le.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[i]}(),t=M(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:a},n):null,null)}const re=r.createElement(ne,null);class ie extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(G.Provider,{value:this.props.routeContext},r.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:t,match:n,children:i}=e,a=r.useContext(W);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(G.Provider,{value:t},i)}function oe(e,t,n,i){var a;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===i&&(i=null),null==e){var o;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(o=i)&&o.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,c=null==(a=n)?void 0:a.errors;if(null!=c){let e=s.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let r=0;r<s.length;r++){let e=s[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,i,a)=>{let o,l=!1,f=null,p=null;var h;n&&(o=c&&i.route.id?c[i.route.id]:void 0,f=i.route.errorElement||re,u&&(d<0&&0===a?(h="route-fallback",!1||fe[h]||(fe[h]=!0),l=!0,p=null):d===a&&(l=!0,p=i.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,a+1)),g=()=>{let t;return t=o?f:l?p:i.route.Component?r.createElement(i.route.Component,null):i.route.element?i.route.element:e,r.createElement(ae,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(i.route.ErrorBoundary||i.route.errorElement||0===a)?r.createElement(ie,{location:n.location,revalidation:n.revalidation,component:f,error:o,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),le=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(le||{});function ce(e){let t=r.useContext(W);return t||l(!1),t}function ue(e){let t=r.useContext(H);return t||l(!1),t}function de(e){let t=function(){let e=r.useContext(G);return e||l(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||l(!1),n.route.id}const fe={};i.startTransition;function pe(e){l(!1)}function he(e){let{basename:n="/",children:i=null,location:a,navigationType:o=t.Pop,navigator:s,static:c=!1,future:u}=e;X()&&l(!1);let d=n.replace(/^\/*/,"/"),f=r.useMemo((()=>({basename:d,navigator:s,static:c,future:$({v7_relativeSplatPath:!1},u)})),[d,u,s,c]);"string"===typeof a&&(a=p(a));let{pathname:h="/",search:m="",hash:g="",state:x=null,key:v="default"}=a,y=r.useMemo((()=>{let e=N(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:x,key:v},navigationType:o}}),[d,h,m,g,x,v,o]);return null==y?null:r.createElement(K.Provider,{value:f},r.createElement(q.Provider,{children:i,value:y}))}function me(e){let{children:t,location:n}=e;return te(ge(t),n)}new Promise((()=>{}));r.Component;function ge(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,((e,i)=>{if(!r.isValidElement(e))return;let a=[...t,i];if(e.type===r.Fragment)return void n.push.apply(n,ge(e.props.children,a));e.type!==pe&&l(!1),e.props.index&&e.props.children&&l(!1);let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=ge(e.props.children,a)),n.push(o)})),n}var xe=n(950),ve=n.t(xe,2);new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(ox){}new Map;const ye=i.startTransition;ve.flushSync,i.useId;function be(e){let{basename:t,children:n,future:i,window:a}=e,o=r.useRef();var s;null==o.current&&(o.current=(void 0===(s={window:a,v5Compat:!0})&&(s={}),h((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return d("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:f(t)}),null,s)));let l=o.current,[c,u]=r.useState({action:l.action,location:l.location}),{v7_startTransition:p}=i||{},m=r.useCallback((e=>{p&&ye?ye((()=>u(e))):u(e)}),[u,p]);return r.useLayoutEffect((()=>l.listen(m)),[l,m]),r.createElement(he,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:i})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var we,ke;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(we||(we={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ke||(ke={}));var Se=n(579);const je=(0,r.createContext)(null);function Pe(e){const t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}const Ee=(0,r.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Te extends r.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ce(e){let{children:t,isPresent:n}=e;const i=(0,r.useId)(),a=(0,r.useRef)(null),o=(0,r.useRef)({width:0,height:0,top:0,left:0}),{nonce:s}=(0,r.useContext)(Ee);return(0,r.useInsertionEffect)((()=>{const{width:e,height:t,top:r,left:l}=o.current;if(n||!a.current||!e||!t)return;a.current.dataset.motionPopId=i;const c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${r}px !important;\n            left: ${l}px !important;\n          }\n        `),()=>{document.head.removeChild(c)}}),[n]),(0,Se.jsx)(Te,{isPresent:n,childRef:a,sizeRef:o,children:r.cloneElement(t,{ref:a})})}const Re=e=>{let{children:t,initial:n,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l}=e;const c=Pe(Ae),u=(0,r.useId)(),d=(0,r.useMemo)((()=>({id:u,initial:n,isPresent:i,custom:o,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;a&&a()},register:e=>(c.set(e,!1),()=>c.delete(e))})),s?[Math.random()]:[i]);return(0,r.useMemo)((()=>{c.forEach(((e,t)=>c.set(t,!1)))}),[i]),r.useEffect((()=>{!i&&!c.size&&a&&a()}),[i]),"popLayout"===l&&(t=(0,Se.jsx)(Ce,{isPresent:i,children:t})),(0,Se.jsx)(je.Provider,{value:d,children:t})};function Ae(){return new Map}const Ne=(0,r.createContext)({}),_e=e=>e;let ze=_e,Oe=_e;const Be=e=>e.key||"";function Le(e){const t=[];return r.Children.forEach(e,(e=>{(0,r.isValidElement)(e)&&t.push(e)})),t}const De="undefined"!==typeof window,Ve=De?r.useLayoutEffect:r.useEffect,Fe=e=>{let{children:t,exitBeforeEnter:n,custom:i,initial:a=!0,onExitComplete:o,presenceAffectsLayout:s=!0,mode:l="sync"}=e;Oe(!n,"Replace exitBeforeEnter with mode='wait'");const c=(0,r.useMemo)((()=>Le(t)),[t]),u=c.map(Be),d=(0,r.useRef)(!0),f=(0,r.useRef)(c),p=Pe((()=>new Map)),[h,m]=(0,r.useState)(c),[g,x]=(0,r.useState)(c);Ve((()=>{d.current=!1,f.current=c;for(let e=0;e<g.length;e++){const t=Be(g[e]);u.includes(t)?p.delete(t):!0!==p.get(t)&&p.set(t,!1)}}),[g,u.length,u.join("-")]);const v=[];if(c!==h){let e=[...c];for(let t=0;t<g.length;t++){const n=g[t],r=Be(n);u.includes(r)||(e.splice(t,0,n),v.push(n))}return"wait"===l&&v.length&&(e=v),x(Le(e)),void m(c)}const{forceRender:y}=(0,r.useContext)(Ne);return(0,Se.jsx)(Se.Fragment,{children:g.map((e=>{const t=Be(e),n=c===g||u.includes(t);return(0,Se.jsx)(Re,{isPresent:n,initial:!(d.current&&!a)&&void 0,custom:n?void 0:i,presenceAffectsLayout:s,mode:l,onExitComplete:n?void 0:()=>{if(!p.has(t))return;p.set(t,!0);let e=!0;p.forEach((t=>{t||(e=!1)})),e&&(null===y||void 0===y||y(),x(f.current),o&&o())},children:e},t)}))})};function Me(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function Ie(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const Ue=e=>Array.isArray(e);function $e(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function We(e){return"string"===typeof e||Array.isArray(e)}function He(e){const t=[{},{}];return null===e||void 0===e||e.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function Ke(e,t,n,r){if("function"===typeof t){const[i,a]=He(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,a]=He(r);t=t(void 0!==n?n:e.custom,i,a)}return t}function qe(e,t,n){const r=e.getProps();return Ke(r,t,void 0!==n?n:r.custom,e)}const Ge=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ye=["initial",...Ge],Xe=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Qe=new Set(Xe),Je=e=>1e3*e,Ze=e=>e/1e3,et={type:"spring",stiffness:500,damping:25,restSpeed:10},tt={type:"keyframes",duration:.8},nt={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rt=(e,t)=>{let{keyframes:n}=t;return n.length>2?tt:Qe.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:et:nt};function it(e,t){return e[t]||e.default||e}const at=!1,ot=!1,st=!1,lt=e=>null!==e;function ct(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const a=e.filter(lt),o=r&&"loop"!==i&&r%2===1?0:a.length-1;return o&&void 0!==n?n:a[o]}const ut=["read","resolveKeyframes","update","preRender","render","postRender"];function dt(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=ut.reduce(((e,t)=>(e[t]=function(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(l.schedule(t),e()),t(o)}const l={schedule:function(e){const i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&r?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),i.has(e)||i.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{o=e,r?i=!0:(r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(e)))}};return l}(a),e)),{}),{read:s,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:f}=o,p=()=>{const a=ot?i.timestamp:performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(p))},h=ut.reduce(((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(p)),s.schedule(t,a,o)},t}),{});return{schedule:h,cancel:e=>{for(let t=0;t<ut.length;t++)o[ut[t]].cancel(e)},state:i,steps:o}}const{schedule:ft,cancel:pt,state:ht,steps:mt}=dt("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:_e,!0),gt=e=>/^0[^.\s]+$/u.test(e);const xt=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),vt=e=>t=>"string"===typeof t&&t.startsWith(e),yt=vt("--"),bt=vt("var(--"),wt=e=>!!bt(e)&&kt.test(e.split("/*")[0].trim()),kt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,St=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function jt(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Oe(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=St.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${null!==n&&void 0!==n?n:r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return xt(e)?parseFloat(e):e}return wt(i)?jt(i,t,n+1):i}const Pt=(e,t,n)=>n>t?t:n<e?e:n,Et={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Tt={...Et,transform:e=>Pt(0,1,e)},Ct={...Et,default:1},Rt=e=>Math.round(1e5*e)/1e5,At=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,Nt=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,_t=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function zt(e){return"string"===typeof e}const Ot=e=>({test:t=>zt(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Bt=Ot("deg"),Lt=Ot("%"),Dt=Ot("px"),Vt=Ot("vh"),Ft=Ot("vw"),Mt={...Lt,parse:e=>Lt.parse(e)/100,transform:e=>Lt.transform(100*e)},It=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ut=e=>e===Et||e===Dt,$t=(e,t)=>parseFloat(e.split(", ")[t]),Wt=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const a=i.match(/^matrix3d\((.+)\)$/u);if(a)return $t(a[1],t);{const t=i.match(/^matrix\((.+)\)$/u);return t?$t(t[1],e):0}},Ht=new Set(["x","y","z"]),Kt=Xe.filter((e=>!Ht.has(e)));const qt={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:Wt(4,13),y:Wt(5,14)};qt.translateX=qt.x,qt.translateY=qt.y;const Gt=e=>t=>t.test(e),Yt=[Et,Dt,Lt,Bt,Ft,Vt,{test:e=>"auto"===e,parse:e=>e}],Xt=e=>Yt.find(Gt(e)),Qt=new Set;let Jt=!1,Zt=!1;function en(){if(Zt){const e=Array.from(Qt).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return Kt.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;var i;null===(i=e.getValue(n))||void 0===i||i.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Zt=!1,Jt=!1,Qt.forEach((e=>e.complete())),Qt.clear()}function tn(){Qt.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Zt=!0)}))}class nn{constructor(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Qt.add(this),Jt||(Jt=!0,ft.read(tn),ft.resolveKeyframes(en))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let i=0;i<e.length;i++)if(null===e[i])if(0===i){const i=null===r||void 0===r?void 0:r.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}else e[i]=e[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Qt.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Qt.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const rn=(e,t)=>n=>Boolean(zt(n)&&_t.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),an=(e,t,n)=>r=>{if(!zt(r))return r;const[i,a,o,s]=r.match(At);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},on={...Et,transform:e=>Math.round((e=>Pt(0,255,e))(e))},sn={test:rn("rgb","red"),parse:an("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+on.transform(t)+", "+on.transform(n)+", "+on.transform(r)+", "+Rt(Tt.transform(i))+")"}};const ln={test:rn("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:sn.transform},cn={test:rn("hsl","hue"),parse:an("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+Lt.transform(Rt(n))+", "+Lt.transform(Rt(r))+", "+Rt(Tt.transform(i))+")"}},un={test:e=>sn.test(e)||ln.test(e)||cn.test(e),parse:e=>sn.test(e)?sn.parse(e):cn.test(e)?cn.parse(e):ln.parse(e),transform:e=>zt(e)?e:e.hasOwnProperty("red")?sn.transform(e):cn.transform(e)};const dn="number",fn="color",pn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hn(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(pn,(e=>(un.test(e)?(r.color.push(a),i.push(fn),n.push(un.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(dn),n.push(parseFloat(e))),++a,"${}"))).split("${}");return{values:n,split:o,indexes:r,types:i}}function mn(e){return hn(e).values}function gn(e){const{split:t,types:n}=hn(e),r=t.length;return e=>{let i="";for(let a=0;a<r;a++)if(i+=t[a],void 0!==e[a]){const t=n[a];i+=t===dn?Rt(e[a]):t===fn?un.transform(e[a]):e[a]}return i}}const xn=e=>"number"===typeof e?0:e;const vn={test:function(e){var t,n;return isNaN(e)&&zt(e)&&((null===(t=e.match(At))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(Nt))||void 0===n?void 0:n.length)||0)>0},parse:mn,createTransformer:gn,getAnimatableNone:function(e){const t=mn(e);return gn(e)(t.map(xn))}},yn=new Set(["brightness","contrast","saturate","opacity"]);function bn(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(At)||[];if(!r)return e;const i=n.replace(r,"");let a=yn.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const wn=/\b([a-z-]*)\(.*?\)/gu,kn={...vn,getAnimatableNone:e=>{const t=e.match(wn);return t?t.map(bn).join(" "):e}},Sn={...Et,transform:Math.round},jn={borderWidth:Dt,borderTopWidth:Dt,borderRightWidth:Dt,borderBottomWidth:Dt,borderLeftWidth:Dt,borderRadius:Dt,radius:Dt,borderTopLeftRadius:Dt,borderTopRightRadius:Dt,borderBottomRightRadius:Dt,borderBottomLeftRadius:Dt,width:Dt,maxWidth:Dt,height:Dt,maxHeight:Dt,size:Dt,top:Dt,right:Dt,bottom:Dt,left:Dt,padding:Dt,paddingTop:Dt,paddingRight:Dt,paddingBottom:Dt,paddingLeft:Dt,margin:Dt,marginTop:Dt,marginRight:Dt,marginBottom:Dt,marginLeft:Dt,rotate:Bt,rotateX:Bt,rotateY:Bt,rotateZ:Bt,scale:Ct,scaleX:Ct,scaleY:Ct,scaleZ:Ct,skew:Bt,skewX:Bt,skewY:Bt,distance:Dt,translateX:Dt,translateY:Dt,translateZ:Dt,x:Dt,y:Dt,z:Dt,perspective:Dt,transformPerspective:Dt,opacity:Tt,originX:Mt,originY:Mt,originZ:Dt,zIndex:Sn,backgroundPositionX:Dt,backgroundPositionY:Dt,fillOpacity:Tt,strokeOpacity:Tt,numOctaves:Sn},Pn={...jn,color:un,backgroundColor:un,outlineColor:un,fill:un,stroke:un,borderColor:un,borderTopColor:un,borderRightColor:un,borderBottomColor:un,borderLeftColor:un,filter:kn,WebkitFilter:kn},En=e=>Pn[e];function Tn(e,t){let n=En(e);return n!==kn&&(n=vn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Cn=new Set(["auto","none","0"]);class Rn extends nn{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),wt(n))){const r=jt(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!It.has(n)||2!==e.length)return;const[r,i]=e,a=Xt(r),o=Xt(i);if(a!==o)if(Ut(a)&&Ut(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let i=0;i<e.length;i++)("number"===typeof(r=e[i])?0===r:null===r||"none"===r||"0"===r||gt(r))&&n.push(i);var r;n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!Cn.has(t)&&hn(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=Tn(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=qt[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){var e;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const a=r.length-1,o=r[a];r[a]=qt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach((e=>{let[n,r]=e;t.getValue(n).set(r)})),this.resolveNoneKeyframes()}}function An(e){let t;return()=>(void 0===t&&(t=e()),t)}function Nn(e){return"function"===typeof e}let _n;function zn(){_n=void 0}const On={now:()=>(void 0===_n&&On.set(ht.isProcessing||ot?ht.timestamp:performance.now()),_n),set:e=>{_n=e,queueMicrotask(zn)}},Bn=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!vn.test(e)&&"0"!==e||e.startsWith("url(")));function Ln(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=Bn(i,t),s=Bn(a,t);return ze(o===s,`You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`),!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||Nn(n))&&r)}class Dn{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=On.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(tn(),en()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=On.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:i,delay:a,onComplete:o,onUpdate:s,isGenerator:l}=this.options;if(!l&&!Ln(e,n,r,i)){if(st||!a)return null===s||void 0===s||s(ct(e,this.options,t)),null===o||void 0===o||o(),void this.resolveFinishedPromise();this.options.duration=0}const c=this.initPlayback(e,t);!1!==c&&(this._resolved={keyframes:e,finalKeyframe:t,...c},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}function Vn(e,t){return t?e*(1e3/t):0}function Fn(e,t,n){const r=Math.max(t-5,0);return Vn(n-e(r),t-r)}const Mn=.001;function In(e){let t,n,{duration:r=800,bounce:i=.25,velocity:a=0,mass:o=1}=e;ze(r<=Je(10),"Spring duration must be 10 seconds or less");let s=1-i;s=Pt(.05,1,s),r=Pt(.01,10,Ze(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=$n(e,s),l=Math.exp(-n);return Mn-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=$n(Math.pow(e,2),s);return(-t(e)+Mn>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<Un;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Je(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const Un=12;function $n(e,t){return e*Math.sqrt(1-t*t)}const Wn=["duration","bounce"],Hn=["stiffness","damping","mass"];function Kn(e,t){return t.some((t=>void 0!==e[t]))}function qn(e){let{keyframes:t,restDelta:n,restSpeed:r,...i}=e;const a=t[0],o=t[t.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Kn(e,Hn)&&Kn(e,Wn)){const n=In(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-Ze(i.velocity||0)}),h=f||0,m=c/(2*Math.sqrt(l*u)),g=o-a,x=Ze(Math.sqrt(l/u)),v=Math.abs(g)<5;let y;if(r||(r=v?.01:2),n||(n=v?.005:.5),m<1){const e=$n(x,m);y=t=>{const n=Math.exp(-m*x*t);return o-n*((h+m*x*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)y=e=>o-Math.exp(-x*e)*(g+(h+x*g)*e);else{const e=x*Math.sqrt(m*m-1);y=t=>{const n=Math.exp(-m*x*t),r=Math.min(e*t,300);return o-n*((h+m*x*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:p&&d||null,next:e=>{const t=y(e);if(p)s.done=e>=d;else{let i=0;m<1&&(i=0===e?Je(h):Fn(y,e,t));const a=Math.abs(i)<=r,l=Math.abs(o-t)<=n;s.done=a&&l}return s.value=s.done?o:t,s}}}function Gn(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const f=t[0],p={done:!1,value:f},h=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=f+m,x=void 0===s?g:s(g);x!==g&&(m=x-f);const v=e=>-m*Math.exp(-e/i),y=e=>x+v(e),b=e=>{const t=v(e),n=y(e);p.done=Math.abs(t)<=u,p.value=p.done?x:n};let w,k;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(p.value)&&(w=e,k=qn({keyframes:[p.value,h(p.value)],velocity:Fn(y,e,p.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,b(e),S(e)),void 0!==w&&e>=w?k.next(e-w):(!t&&b(e),p)}}}const Yn=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Xn(e,t,n,r){if(e===t&&n===r)return _e;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=Yn(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:Yn(i(e),t,r)}const Qn=Xn(.42,0,1,1),Jn=Xn(0,0,.58,1),Zn=Xn(.42,0,.58,1),er=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tr=e=>t=>1-e(1-t),nr=e=>1-Math.sin(Math.acos(e)),rr=tr(nr),ir=er(nr),ar=Xn(.33,1.53,.69,.99),or=tr(ar),sr={linear:_e,easeIn:Qn,easeInOut:Zn,easeOut:Jn,circIn:nr,circInOut:ir,circOut:rr,backIn:or,backInOut:er(or),backOut:ar,anticipate:e=>(e*=2)<1?.5*or(e):.5*(2-Math.pow(2,-10*(e-1)))},lr=e=>{if(Array.isArray(e)){Oe(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return Xn(t,n,r,i)}return"string"===typeof e?(Oe(void 0!==sr[e],`Invalid easing type '${e}'`),sr[e]):e},cr=(e,t)=>n=>t(e(n)),ur=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(cr)},dr=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},fr=(e,t,n)=>e+(t-e)*n;function pr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function hr(e,t){return n=>n>0?t:e}const mr=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},gr=[ln,sn,cn];function xr(e){const t=(e=>gr.find((t=>t.test(e))))(e);if(ze(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`),!Boolean(t))return!1;let n=t.parse(e);return t===cn&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=pr(i,e,t+1/3),o=pr(i,e,t),s=pr(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const vr=(e,t)=>{const n=xr(e),r=xr(t);if(!n||!r)return hr(e,t);const i={...n};return e=>(i.red=mr(n.red,r.red,e),i.green=mr(n.green,r.green,e),i.blue=mr(n.blue,r.blue,e),i.alpha=fr(n.alpha,r.alpha,e),sn.transform(i))},yr=new Set(["none","hidden"]);function br(e,t){return n=>fr(e,t,n)}function wr(e){return"number"===typeof e?br:"string"===typeof e?wt(e)?hr:un.test(e)?vr:jr:Array.isArray(e)?kr:"object"===typeof e?un.test(e)?vr:Sr:hr}function kr(e,t){const n=[...e],r=n.length,i=e.map(((e,n)=>wr(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Sr(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=wr(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const jr=(e,t)=>{const n=vn.createTransformer(t),r=hn(e),i=hn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?yr.has(e)&&!i.values.length||yr.has(t)&&!r.values.length?function(e,t){return yr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):ur(kr(function(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],l=null!==(n=e.values[s])&&void 0!==n?n:0;r[a]=l,i[o]++}return r}(r,i),i.values),n):(ze(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),hr(e,t))};function Pr(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return fr(e,t,n);return wr(e)(e,t)}function Er(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(Oe(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];if(2===a&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=function(e,t,n){const r=[],i=n||Pr,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||_e:t;n=ur(e,n)}r.push(n)}return r}(t,r,i),s=o.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=dr(e[n],e[n+1],t);return o[n](r)};return n?t=>l(Pt(e[0],e[a-1],t)):l}function Tr(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=dr(0,t,r);e.push(fr(n,1,i))}}(t,e.length-1),t}function Cr(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(lr):lr(i),o={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Tr(n),t),l=Er(s,n,{ease:Array.isArray(a)?a:(c=n,u=a,c.map((()=>u||Zn)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const Rr=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>ft.update(t,!0),stop:()=>pt(t),now:()=>ht.isProcessing?ht.timestamp:On.now()}},Ar={decay:Gn,inertia:Gn,tween:Cr,keyframes:Cr,spring:qn},Nr=e=>e/100;class _r extends Dn{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:n,element:r,keyframes:i}=this.options,a=(null===r||void 0===r?void 0:r.KeyframeResolver)||nn;this.resolver=new a(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=this.options,o=Nn(t)?t:Ar[t]||Cr;let s,l;o!==Cr&&"number"!==typeof e[0]&&(s=ur(Nr,Pr(e[0],e[1])),e=[0,100]);const c=o({...this.options,keyframes:e});"mirror"===i&&(l=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===c.calculatedDuration&&(c.calculatedDuration=function(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}(c));const{calculatedDuration:u}=c,d=u+r;return{generator:c,mirroredGenerator:l,mapPercentToKeyframes:s,calculatedDuration:u,resolvedDuration:d,totalDuration:d*(n+1)-r}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:r,generator:i,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:s,calculatedDuration:l,totalDuration:c,resolvedDuration:u}=n;if(null===this.startTime)return i.next(0);const{delay:d,repeat:f,repeatType:p,repeatDelay:h,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),x=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=c);let v=this.currentTime,y=i;if(f){const e=Math.min(this.currentTime,c)/u;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,f+1);Boolean(t%2)&&("reverse"===p?(n=1-n,h&&(n-=h/u)):"mirror"===p&&(y=a)),v=Pt(0,1,n)*u}const b=x?{done:!1,value:s[0]}:y.next(v);o&&(b.value=o(b.value));let{done:w}=b;x||null===l||(w=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const k=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return k&&void 0!==r&&(b.value=ct(s,this.options,r)),m&&m(b.value),k&&this.finish(),b}get duration(){const{resolved:e}=this;return e?Ze(e.calculatedDuration):0}get time(){return Ze(this.currentTime)}set time(e){e=Je(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Ze(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=Rr,onPlay:t,startTime:n}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=null!==n&&void 0!==n?n:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;this._resolved?(this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const zr=new Set(["opacity","clipPath","filter","transform"]),Or=e=>Array.isArray(e)&&"number"===typeof e[0];function Br(e){return Boolean(!e||"string"===typeof e&&e in Dr||Or(e)||Array.isArray(e)&&e.every(Br))}const Lr=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Dr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Lr([0,.65,.55,1]),circOut:Lr([.55,0,1,.45]),backIn:Lr([.31,.01,.66,-.59]),backOut:Lr([.33,1.53,.69,.99])};function Vr(e){return Fr(e)||Dr.easeOut}function Fr(e){return e?Or(e)?Lr(e):Array.isArray(e)?e.map(Vr):Dr[e]:void 0}const Mr=An((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));class Ir extends Dn{constructor(e){super(e);const{name:t,motionValue:n,element:r,keyframes:i}=this.options;this.resolver=new Rn(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e,t){var n;let{duration:r=300,times:i,ease:a,type:o,motionValue:s,name:l,startTime:c}=this.options;if(!(null===(n=s.owner)||void 0===n?void 0:n.current))return!1;if(Nn((u=this.options).type)||"spring"===u.type||!Br(u.ease)){const{onComplete:t,onUpdate:n,motionValue:s,element:l,...c}=this.options,u=function(e,t){const n=new _r({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<2e4;)r=n.sample(a),i.push(r.value),a+=10;return{times:void 0,keyframes:i,duration:a-10,ease:"linear"}}(e,c);1===(e=u.keyframes).length&&(e[1]=e[0]),r=u.duration,i=u.times,a=u.ease,o="keyframes"}var u;const d=function(e,t,n){let{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const u=Fr(s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"})}(s.owner.current,l,e,{...this.options,duration:r,times:i,ease:a});return d.startTime=null!==c&&void 0!==c?c:this.calcStartTime(),this.pendingTimeline?(d.timeline=this.pendingTimeline,this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:n}=this.options;s.set(ct(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Ze(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Ze(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=Je(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return _e;const{animation:n}=t;n.timeline=e,n.onfinish=null}else this.pendingTimeline=e;return _e}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:r,type:i,ease:a,times:o}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:s,element:l,...c}=this.options,u=new _r({...c,keyframes:n,duration:r,type:i,ease:a,times:o,isGenerator:!0}),d=Je(this.time);e.setWithVelocity(u.sample(d-10).value,u.sample(d).value,10)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;return Mr()&&n&&zr.has(n)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}}const Ur=An((()=>void 0!==window.ScrollTimeline));class $r{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){const t=this.animations.map((t=>{if(!Ur()||!t.attachTimeline)return t.pause(),function(e,t){let n;const r=()=>{const{currentTime:r}=t,i=(null===r?0:r.value)/100;n!==i&&e(i),n=i};return ft.update(r,!0),()=>pt(r)}((e=>{t.time=t.duration*e}),e);t.attachTimeline(e)}));return()=>{t.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const Wr=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=it(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=Je(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||(u={...u,...rt(e,u)}),u.duration&&(u.duration=Je(u.duration)),u.repeatDelay&&(u.repeatDelay=Je(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(st||at)&&(d=!0,u.duration=0,u.delay=0),d&&!a&&void 0!==t.get()){const e=ct(u.keyframes,s);if(void 0!==e)return ft.update((()=>{u.onUpdate(e),u.onComplete()})),new $r([])}return!a&&Ir.supports(u)?new Ir(u):new _r(u)}},Hr=e=>Ue(e)?e[e.length-1]||0:e;function Kr(e,t){-1===e.indexOf(t)&&e.push(t)}function qr(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Gr{constructor(){this.subscriptions=[]}add(e){return Kr(this.subscriptions,e),()=>qr(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yr={current:void 0};class Xr{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="11.7.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=On.now();t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=On.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Gr);const n=this.events[e].add(t);return"change"===e?()=>{n(),ft.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Yr.current&&Yr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=On.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Vn(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qr(e,t){return new Xr(e,t)}function Jr(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Qr(n))}const Zr=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ei="data-"+Zr("framerAppearId");function ti(e){return e.props[ei]}function ni(e){return Qe.has(e)?"transform":zr.has(e)?Zr(e):void 0}class ri extends Xr{constructor(){super(...arguments),this.values=[]}add(e){const t=ni(e);t&&(Kr(this.values,t),this.update())}update(){this.set(this.values.length?this.values.join(", "):"auto")}}const ii=e=>Boolean(e&&e.getVelocity);function ai(e,t){var n;if(!e.applyWillChange)return;let r=e.getValue("willChange");return r||(null===(n=e.props.style)||void 0===n?void 0:n.willChange)||(r=new ri("auto"),e.addValue("willChange",r)),i=r,Boolean(ii(i)&&i.add)?r.add(t):void 0;var i}function oi(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function si(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const t=e.getValue(d,null!==(a=e.latestValues[d])&&void 0!==a?a:null),r=l[d];if(void 0===r||u&&oi(u,d))continue;const i={delay:n,...it(o||{},d)};let s=!1;if(window.MotionHandoffAnimation){const t=ti(e);if(t){const e=window.MotionHandoffAnimation(t,d,ft);null!==e&&(i.startTime=e,s=!0)}}ai(e,d),t.start(Wr(d,t,r,e.shouldReduceMotion&&Qe.has(d)?{type:!1}:i,e,s));const f=t.animation;f&&c.push(f)}return s&&Promise.all(c).then((()=>{ft.update((()=>{s&&function(e,t){const n=qe(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)Jr(e,o,Hr(a[o]))}(e,s)}))})),c}function li(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var r;const i=qe(e,t,"exit"===n.type?null===(r=e.presenceContext)||void 0===r?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(si(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:o,staggerDirection:s}=a;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(ci).forEach(((e,r)=>{e.notify("AnimationStart",t),o.push(li(e,t,{...a,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,i+r,o,s,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[e,t]="beforeChildren"===l?[o,s]:[s,o];return e().then((()=>t()))}return Promise.all([o(),s(n.delay)])}function ci(e,t){return e.sortNodePosition(t)}const ui=Ye.length;function di(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&di(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<ui;n++){const r=Ye[n],i=e.props[r];(We(i)||!1===i)&&(t[r]=i)}return t}const fi=[...Ge].reverse(),pi=Ge.length;function hi(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>li(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=li(e,t,r);else{const i="function"===typeof t?qe(e,t,r.custom):t;n=Promise.all(si(e,i,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function mi(e){let t=hi(e),n=vi(),r=!0;const i=t=>(n,r)=>{var i;const a=qe(e,r,"exit"===t?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0);if(a){const{transition:e,transitionEnd:t,...r}=a;n={...n,...r,...t}}return n};function a(a){const{props:o}=e,s=di(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<pi;t++){const f=fi[t],p=n[f],h=void 0!==o[f]?o[f]:s[f],m=We(h),g=f===a?p.isActive:null;!1===g&&(d=t);let x=h===s[f]&&h!==o[f]&&m;if(x&&r&&e.manuallyAnimateOnMount&&(x=!1),p.protectedKeys={...u},!p.isActive&&null===g||!h&&!p.prevProp||Ie(h)||"boolean"===typeof h)continue;const v=gi(p.prevProp,h);let y=v||f===a&&p.isActive&&!x&&m||t>d&&m,b=!1;const w=Array.isArray(h)?h:[h];let k=w.reduce(i(f),{});!1===g&&(k={});const{prevResolvedValues:S={}}=p,j={...S,...k},P=t=>{y=!0,c.has(t)&&(b=!0,c.delete(t)),p.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in j){const t=k[e],n=S[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ue(t)&&Ue(n)?!$e(t,n):t!==n,r?void 0!==t&&null!==t?P(e):c.add(e):void 0!==t&&c.has(e)?P(e):p.protectedKeys[e]=!0}p.prevProp=h,p.prevResolvedValues=k,p.isActive&&(u={...u,...k}),r&&e.blockInitialAnimation&&(y=!1);y&&(!(x&&v)||b)&&l.push(...w.map((e=>({animation:e,options:{type:f}}))))}if(c.size){const t={};c.forEach((n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=null!==r&&void 0!==r?r:null})),l.push({animation:t})}let f=Boolean(l.length);return!r||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(f=!1),r=!1,f?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){var i;if(n[t].isActive===r)return Promise.resolve();null===(i=e.variantChildren)||void 0===i||i.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const o=a(t);for(const e in n)n[e].protectedKeys={};return o},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=vi(),r=!0}}}function gi(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!$e(t,e)}function xi(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vi(){return{animate:xi(!0),whileInView:xi(),whileHover:xi(),whileTap:xi(),whileDrag:xi(),whileFocus:xi(),exit:xi()}}class yi{constructor(e){this.isMounted=!1,this.node=e}update(){}}let bi=0;const wi={animation:{Feature:class extends yi{constructor(e){super(e),e.animationState||(e.animationState=mi(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ie(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null===(e=this.unmountControls)||void 0===e||e.call(this)}}},exit:{Feature:class extends yi{constructor(){super(...arguments),this.id=bi++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},ki=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function Si(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}function ji(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Pi(e,t,n,r){return ji(e,t,(e=>t=>ki(t)&&e(t,Si(t)))(n),r)}const Ei=(e,t)=>Math.abs(e-t);class Ti{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Ai(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Ei(e.x,t.x),r=Ei(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=ht;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Ci(t,this.transformPagePoint),ft.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Ai("pointercancel"===e.type?this.lastMoveEventInfo:Ci(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!ki(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const a=Ci(Si(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=ht;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Ai(a,this.history)),this.removeListeners=ur(Pi(this.contextWindow,"pointermove",this.handlePointerMove),Pi(this.contextWindow,"pointerup",this.handlePointerUp),Pi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),pt(this.updatePoint)}}function Ci(e,t){return t?{point:t(e.point)}:e}function Ri(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ai(e,t){let{point:n}=e;return{point:n,delta:Ri(n,_i(t)),offset:Ri(n,Ni(t)),velocity:zi(t,.1)}}function Ni(e){return e[0]}function _i(e){return e[e.length-1]}function zi(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=_i(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Je(t)));)n--;if(!r)return{x:0,y:0};const a=Ze(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Oi(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const Bi=Oi("dragHorizontal"),Li=Oi("dragVertical");function Di(e){let t=!1;if("y"===e)t=Li();else if("x"===e)t=Bi();else{const e=Bi(),n=Li();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Vi(){const e=Di(!0);return!e||(e(),!1)}function Fi(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Mi(e){return e.max-e.min}function Ii(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=fr(t.min,t.max,e.origin),e.scale=Mi(n)/Mi(t),e.translate=fr(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function Ui(e,t,n,r){Ii(e.x,t.x,n.x,r?r.originX:void 0),Ii(e.y,t.y,n.y,r?r.originY:void 0)}function $i(e,t,n){e.min=n.min+t.min,e.max=e.min+Mi(t)}function Wi(e,t,n){e.min=t.min-n.min,e.max=e.min+Mi(t)}function Hi(e,t,n){Wi(e.x,t.x,n.x),Wi(e.y,t.y,n.y)}function Ki(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function qi(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Gi=.35;function Yi(e,t,n){return{min:Xi(e,t),max:Xi(e,n)}}function Xi(e,t){return"number"===typeof e?e:e[t]||0}const Qi=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Ji(e){return[e("x"),e("y")]}function Zi(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function ea(e){return void 0===e||1===e}function ta(e){let{scale:t,scaleX:n,scaleY:r}=e;return!ea(t)||!ea(n)||!ea(r)}function na(e){return ta(e)||ra(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ra(e){return ia(e.x)||ia(e.y)}function ia(e){return e&&"0%"!==e}function aa(e,t,n){return n+t*(e-n)}function oa(e,t,n,r,i){return void 0!==i&&(e=aa(e,i,r)),aa(e,n,r)+t}function sa(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=oa(e.min,t,n,r,i),e.max=oa(e.max,t,n,r,i)}function la(e,t){let{x:n,y:r}=t;sa(e.x,n.translate,n.scale,n.originPoint),sa(e.y,r.translate,r.scale,r.originPoint)}const ca=.999999999999,ua=1.0000000000001;function da(e,t){e.min=e.min+t,e.max=e.max+t}function fa(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;sa(e,t,n,fr(e.min,e.max,i),r)}function pa(e,t){fa(e.x,t.x,t.scaleX,t.scale,t.originX),fa(e.y,t.y,t.scaleY,t.scale,t.originY)}function ha(e,t){return Zi(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const ma=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},ga=new WeakMap;class xa{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Ti(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Si(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Di(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ji((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Lt.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Mi(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&ft.postRender((()=>i(e,t))),ai(this.visualElement,"transform");const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>Ji((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:ma(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&ft.postRender((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!va(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?fr(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?fr(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Fi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:Ki(e.x,r,a),y:Ki(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gi;return!1===e?e=0:!0===e&&(e=Gi),{x:Yi(e,"left","right"),y:Yi(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ji((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Fi(e))return!1;const n=e.current;Oe(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=ha(e,n),{scroll:i}=t;return i&&(da(r.x,i.offset.x),da(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:qi(e.x,t.x),y:qi(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=Zi(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=Ji((o=>{if(!va(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return ai(this.visualElement,e),n.start(Wr(e,n,0,t,this.visualElement,!1))}stopAnimation(){Ji((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){Ji((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Ji((t=>{const{drag:n}=this.getProps();if(!va(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-fr(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Fi(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ji((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=Mi(e),i=Mi(t);return i>r?n=dr(t.min,t.max-r,e.min):r>i&&(n=dr(e.min,e.max-i,t.min)),Pt(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Ji((t=>{if(!va(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(fr(i,a,r[t]))}))}addListeners(){if(!this.visualElement.current)return;ga.set(this.visualElement,this);const e=Pi(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Fi(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),ft.read(t);const i=ji(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(Ji((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Gi,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function va(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const ya=e=>(t,n)=>{e&&ft.postRender((()=>e(t,n)))};const ba=(0,r.createContext)({}),wa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ka(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Sa={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Dt.test(e))return e;e=parseFloat(e)}return`${ka(e,t.target.x)}% ${ka(e,t.target.y)}%`}},ja={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=vn.parse(e);if(a.length>5)return i;const o=vn.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const u=fr(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=u),"number"===typeof a[3+s]&&(a[3+s]/=u),o(a)}},Pa={};const{schedule:Ea,cancel:Ta}=dt(queueMicrotask,!1);class Ca extends r.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;var a;a=Aa,Object.assign(Pa,a),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),wa.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,a=n.projection;return a?(a.isPresent=i,r||e.layoutDependency!==t||void 0===t?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||ft.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ea.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ra(e){const[t,n]=function(){const e=(0,r.useContext)(je);if(null===e)return[!0,null];const{isPresent:t,onExitComplete:n,register:i}=e,a=(0,r.useId)();(0,r.useEffect)((()=>i(a)),[]);const o=(0,r.useCallback)((()=>n&&n(a)),[a,n]);return!t&&n?[!1,o]:[!0]}(),i=(0,r.useContext)(Ne);return(0,Se.jsx)(Ca,{...e,layoutGroup:i,switchLayoutGroup:(0,r.useContext)(ba),isPresent:t,safeToRemove:n})}const Aa={borderRadius:{...Sa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Sa,borderTopRightRadius:Sa,borderBottomLeftRadius:Sa,borderBottomRightRadius:Sa,boxShadow:ja},Na=["TopLeft","TopRight","BottomLeft","BottomRight"],_a=Na.length,za=e=>"string"===typeof e?parseFloat(e):e,Oa=e=>"number"===typeof e||Dt.test(e);function Ba(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const La=Va(0,.5,rr),Da=Va(.5,.95,_e);function Va(e,t,n){return r=>r<e?0:r>t?1:n(dr(e,t,r))}function Fa(e,t){e.min=t.min,e.max=t.max}function Ma(e,t){Fa(e.x,t.x),Fa(e.y,t.y)}function Ia(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Ua(e,t,n,r,i){return e=aa(e-=t,1/n,r),void 0!==i&&(e=aa(e,1/i,r)),e}function $a(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Lt.test(t)&&(t=parseFloat(t),t=fr(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=fr(a.min,a.max,r);e===a&&(s-=t),e.min=Ua(e.min,t,n,s,i),e.max=Ua(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const Wa=["x","scaleX","originX"],Ha=["y","scaleY","originY"];function Ka(e,t,n,r){$a(e.x,t,Wa,n?n.x:void 0,r?r.x:void 0),$a(e.y,t,Ha,n?n.y:void 0,r?r.y:void 0)}function qa(e){return 0===e.translate&&1===e.scale}function Ga(e){return qa(e.x)&&qa(e.y)}function Ya(e,t){return e.min===t.min&&e.max===t.max}function Xa(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Qa(e,t){return Xa(e.x,t.x)&&Xa(e.y,t.y)}function Ja(e){return Mi(e.x)/Mi(e.y)}function Za(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class eo{constructor(){this.members=[]}add(e){Kr(this.members,e),e.scheduleRender()}remove(e){if(qr(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const to=(e,t)=>e.depth-t.depth;class no{constructor(){this.children=[],this.isDirty=!1}add(e){Kr(this.children,e),this.isDirty=!0}remove(e){qr(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(to),this.isDirty=!1,this.children.forEach(e)}}function ro(e){const t=ii(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const io={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ao="undefined"!==typeof window&&void 0!==window.MotionDebug,oo=["","X","Y","Z"],so={visibility:"hidden"};let lo=0;function co(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function uo(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ti(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ft,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&uo(r)}function fo(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=lo++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ao&&(io.totalNodes=io.resolvedTargetDeltas=io.recalculatedProjection=0),this.nodes.forEach(mo),this.nodes.forEach(ko),this.nodes.forEach(So),this.nodes.forEach(go),ao&&window.MotionDebug.record(io)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new no)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Gr),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=On.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(pt(r),e(o-t))};return ft.read(r,!0),()=>pt(r)}(r,250),wa.hasAnimatedSinceResize&&(wa.hasAnimatedSinceResize=!1,this.nodes.forEach(wo))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||Ro,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!Qa(this.targetLayout,i)||r,u=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...it(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||wo(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,pt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jo),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&uo(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(vo);this.isUpdating||this.nodes.forEach(yo),this.isUpdating=!1,this.nodes.forEach(bo),this.nodes.forEach(po),this.nodes.forEach(ho),this.clearAllSnapshots();const e=On.now();ht.delta=Pt(0,1e3/60,e-ht.timestamp),ht.timestamp=e,ht.isProcessing=!0,mt.update.process(ht),mt.preRender.process(ht),mt.render.process(ht),ht.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ea.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xo),this.sharedNodes.forEach(Po)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ft.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ft.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Ga(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||na(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),_o((r=n).x),_o(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){var e;const{visualElement:t}=this.options;if(!t)return{x:{min:0,max:0},y:{min:0,max:0}};const n=t.measureViewportBox();if(!((null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)||this.path.some(Oo))){const{scroll:e}=this.root;e&&(da(n.x,e.offset.x),da(n.y,e.offset.y))}return n}removeElementScroll(e){var t;const n={x:{min:0,max:0},y:{min:0,max:0}};if(Ma(n,e),null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)return n;for(let r=0;r<this.path.length;r++){const t=this.path[r],{scroll:i,options:a}=t;t!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Ma(n,e),da(n.x,i.offset.x),da(n.y,i.offset.y))}return n}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Ma(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&pa(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),na(e.latestValues)&&pa(n,e.latestValues)}return na(this.latestValues)&&pa(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Ma(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!na(e.latestValues))continue;ta(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Ma(r,e.measurePageBox()),Ka(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return na(this.latestValues)&&Ka(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ht.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:i,layoutId:a}=this.options;if(this.layout&&(i||a)){if(this.resolvedRelativeTargetAt=ht.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Hi(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Ma(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,$i(o.x,s.x,l.x),$i(o.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Ma(this.target,this.layout.layoutBox),la(this.target,this.targetDelta)):Ma(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Hi(this.relativeTargetOrigin,this.target,e.target),Ma(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ao&&io.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!ta(this.parent.latestValues)&&!ra(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===ht.timestamp&&(r=!1),r)return;const{layout:i,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!a)return;Ma(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&pa(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,la(e,o)),r&&na(a.latestValues)&&pa(e,a.latestValues))}t.x<ua&&t.x>ca&&(t.x=1),t.y<ua&&t.y>ca&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox,t.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:l}=t;l?(this.projectionDelta&&this.prevProjectionDelta?(Ia(this.prevProjectionDelta.x,this.projectionDelta.x),Ia(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Ui(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===o&&this.treeScale.y===s&&Za(this.projectionDelta.x,this.prevProjectionDelta.x)&&Za(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),ao&&io.recalculatedProjection++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t;if(null===(t=this.options.visualElement)||void 0===t||t.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Co));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Eo(a.x,e.x,n),Eo(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Hi(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){To(e.x,t.x,n.x,r),To(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return Ya(e.x,t.x)&&Ya(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Ma(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=fr(0,void 0!==n.opacity?n.opacity:1,La(r)),e.opacityExit=fr(void 0!==t.opacity?t.opacity:1,0,Da(r))):a&&(e.opacity=fr(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let o=0;o<_a;o++){const i=`border${Na[o]}Radius`;let a=Ba(t,i),s=Ba(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Oa(a)===Oa(s)?(e[i]=Math.max(fr(za(a),za(s),r),0),(Lt.test(s)||Lt.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=fr(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(pt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ft.update((()=>{wa.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=ii(e)?e:Qr(e);return r.start(Wr("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&zo(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Mi(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Mi(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Ma(t,n),pa(t,i),Ui(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new eo);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&co("z",e,r,this.animationValues);for(let i=0;i<oo.length;i++)co(`rotate${oo[i]}`,e,r,this.animationValues),co(`skew${oo[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return so;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=ro(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=ro(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!na(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const o=a.animationValues||a.latestValues;this.applyTransformsToTarget(),r.transform=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(null===n||void 0===n?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,o),i&&(r.transform=i(o,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,a.animationValues?r.opacity=a===this?null!==(n=null!==(t=o.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:r.opacity=a===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const c in Pa){if(void 0===o[c])continue;const{correct:e,applyTo:t}=Pa[c],n="none"===r.transform?o[c]:e(o[c],a);if(t){const e=t.length;for(let i=0;i<e;i++)r[t[i]]=n}else r[c]=n}return this.options.layoutId&&(r.pointerEvents=a===this?ro(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(vo),this.root.sharedNodes.clear()}}}function po(e){e.updateLayout()}function ho(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,a=n.source!==e.layout.source;"size"===i?Ji((e=>{const r=a?n.measuredBox[e]:n.layoutBox[e],i=Mi(r);r.min=t[e].min,r.max=r.min+i})):zo(i,n.layoutBox,t)&&Ji((r=>{const i=a?n.measuredBox[r]:n.layoutBox[r],o=Mi(t[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Ui(o,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?Ui(s,e.applyTransform(r,!0),n.measuredBox):Ui(s,t,n.layoutBox);const l=!Ga(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};Hi(o,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Hi(s,t,a.layoutBox),Qa(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function mo(e){ao&&io.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function go(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function xo(e){e.clearSnapshot()}function vo(e){e.clearMeasurements()}function yo(e){e.isLayoutDirty=!1}function bo(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function wo(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ko(e){e.resolveTargetDelta()}function So(e){e.calcProjection()}function jo(e){e.resetSkewAndRotation()}function Po(e){e.removeLeadSnapshot()}function Eo(e,t,n){e.translate=fr(t.translate,0,n),e.scale=fr(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function To(e,t,n,r){e.min=fr(t.min,n.min,r),e.max=fr(t.max,n.max,r)}function Co(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Ro={duration:.45,ease:[.4,0,.1,1]},Ao=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),No=Ao("applewebkit/")&&!Ao("chrome/")?Math.round:_e;function _o(e){e.min=No(e.min),e.max=No(e.max)}function zo(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Ja(t),i=Ja(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function Oo(e){var t;return e!==e.root&&(null===(t=e.scroll)||void 0===t?void 0:t.wasRoot)}const Bo=fo({attachResizeListener:(e,t)=>ji(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lo={current:void 0},Do=fo({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Lo.current){const e=new Bo({});e.mount(window),e.setOptions({layoutScroll:!0}),Lo.current=e}return Lo.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Vo={pan:{Feature:class extends yi{constructor(){super(...arguments),this.removePointerDownListener=_e}onPointerDown(e){this.session=new Ti(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ma(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:ya(e),onStart:ya(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&ft.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=Pi(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends yi{constructor(e){super(e),this.removeGroupControls=_e,this.removeListeners=_e,this.controls=new xa(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_e}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Do,MeasureLayout:Ra}};function Fo(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd";return Pi(e.current,n,((n,i)=>{if("touch"===n.pointerType||Vi())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const o=a[r];o&&ft.postRender((()=>o(n,i)))}),{passive:!e.getProps()[r]})}const Mo=(e,t)=>!!t&&(e===t||Mo(e,t.parentElement));function Io(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Si(n))}const Uo=new WeakMap,$o=new WeakMap,Wo=e=>{const t=Uo.get(e.target);t&&t(e)},Ho=e=>{e.forEach(Wo)};function Ko(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;$o.has(r)||$o.set(r,{});const i=$o.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(Ho,{root:t,...n})),i[a]}(t);return Uo.set(e,n),r.observe(e),()=>{Uo.delete(e),r.unobserve(e)}}const qo={some:0,all:1};const Go={inView:{Feature:class extends yi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:qo[r]};return Ko(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends yi{constructor(){super(...arguments),this.removeStartListeners=_e,this.removeEndListeners=_e,this.removeAccessibleListeners=_e,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=Pi(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps(),a=i||Mo(this.node.current,e.target)?n:r;a&&ft.update((()=>a(e,t)))}),{passive:!(n.onTap||n.onPointerUp)}),i=Pi(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=ur(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=ji(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=ji(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&Io("up",((e,t)=>{const{onTap:n}=this.node.getProps();n&&ft.postRender((()=>n(e,t)))}))})),Io("down",((e,t)=>{this.startPress(e,t)}))})),t=ji(this.node.current,"blur",(()=>{this.isPressing&&Io("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=ur(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&ft.postRender((()=>n(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Vi()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&ft.postRender((()=>n(e,t)))}mount(){const e=this.node.getProps(),t=Pi(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=ji(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ur(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends yi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(ox){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ur(ji(this.node.current,"focus",(()=>this.onFocus())),ji(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends yi{mount(){this.unmount=ur(Fo(this.node,!0),Fo(this.node,!1))}unmount(){}}}},Yo={layout:{ProjectionNode:Do,MeasureLayout:Ra}},Xo=(0,r.createContext)({}),Qo=(0,r.createContext)({strict:!1});let Jo=!1;function Zo(e,t,n,i,a){var o;const{visualElement:s}=(0,r.useContext)(Xo),l=(0,r.useContext)(Qo),c=(0,r.useContext)(je),u=(0,r.useContext)(Ee).reducedMotion,d=(0,r.useRef)();i=i||l.renderer,!d.current&&i&&(d.current=i(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:!!c&&!1===c.initial,reducedMotionConfig:u}));const f=d.current,p=(0,r.useContext)(ba);!f||f.projection||!a||"html"!==f.type&&"svg"!==f.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:ts(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&Fi(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}(d.current,n,a,p),(0,r.useInsertionEffect)((()=>{f&&f.update(n,c)}));const h=n[ei],m=(0,r.useRef)(Boolean(h)&&!window.MotionHandoffIsComplete&&(null===(o=window.MotionHasOptimisedAnimation)||void 0===o?void 0:o.call(window,h)));return Ve((()=>{f&&(f.updateFeatures(),Ea.render(f.render),m.current&&f.animationState&&f.animationState.animateChanges())})),(0,r.useEffect)((()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current=!1,Jo||(Jo=!0,queueMicrotask(es)))})),f}function es(){window.MotionHandoffIsComplete=!0}function ts(e){if(e)return!1!==e.options.allowProjection?e.projection:ts(e.parent)}function ns(e,t,n){return(0,r.useCallback)((r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&("function"===typeof n?n(r):Fi(n)&&(n.current=r))}),[t])}function rs(e){return Ie(e.animate)||Ye.some((t=>We(e[t])))}function is(e){return Boolean(rs(e)||e.variants)}function as(e){const{initial:t,animate:n}=function(e,t){if(rs(e)){const{initial:t,animate:n}=e;return{initial:!1===t||We(t)?t:void 0,animate:We(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,r.useContext)(Xo));return(0,r.useMemo)((()=>({initial:t,animate:n})),[os(t),os(n)])}function os(e){return Array.isArray(e)?e.join(" "):e}const ss={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ls={};for(const n in ss)ls[n]={isEnabled:e=>ss[n].some((t=>!!e[t]))};const cs=Symbol.for("motionComponentSymbol");function us(e){let{preloadedFeatures:t,createVisualElement:n,useRender:i,useVisualState:a,Component:o}=e;t&&function(e){for(const t in e)ls[t]={...ls[t],...e[t]}}(t);const s=(0,r.forwardRef)((function(e,t){let s;const l={...(0,r.useContext)(Ee),...e,layoutId:ds(e)},{isStatic:c}=l,u=as(e),d=a(e,c);if(!c&&De){!function(){(0,r.useContext)(Qo).strict;0}();const e=function(e){const{drag:t,layout:n}=ls;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:(null===t||void 0===t?void 0:t.isEnabled(e))||(null===n||void 0===n?void 0:n.isEnabled(e))?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=e.MeasureLayout,u.visualElement=Zo(o,d,l,n,e.ProjectionNode)}return(0,Se.jsxs)(Xo.Provider,{value:u,children:[s&&u.visualElement?(0,Se.jsx)(s,{visualElement:u.visualElement,...l}):null,i(o,e,ns(d,u.visualElement,t),d,c,u.visualElement)]})}));return s[cs]=o,s}function ds(e){let{layoutId:t}=e;const n=(0,r.useContext)(Ne).id;return n&&void 0!==t?n+"-"+t:t}const fs=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ps(e){return"string"===typeof e&&!e.includes("-")&&!!(fs.indexOf(e)>-1||/[A-Z]/u.test(e))}function hs(e,t,n,r){let{style:i,vars:a}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}const ms=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function gs(e,t,n,r){hs(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(ms.has(i)?i:Zr(i),t.attrs[i])}function xs(e,t){let{layout:n,layoutId:r}=t;return Qe.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Pa[e]||"opacity"===e)}function vs(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(ii(i[o])||t.style&&ii(t.style[o])||xs(o,e)||void 0!==(null===(r=null===n||void 0===n?void 0:n.getValue(o))||void 0===r?void 0:r.liveStyle))&&(a[o]=i[o]);return n&&i&&"string"===typeof i.willChange&&(n.applyWillChange=!1),a}function ys(e,t,n){const r=vs(e,t,n);for(const i in e)if(ii(e[i])||ii(t[i])){r[-1!==Xe.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}const bs=e=>(t,n)=>{const i=(0,r.useContext)(Xo),a=(0,r.useContext)(je),o=()=>function(e,t,n,r,i){let{applyWillChange:a=!1,scrapeMotionValuesFromProps:o,createRenderState:s,onMount:l}=e;const c={latestValues:Ss(t,n,r,!i&&a,o),renderState:s()};return l&&(c.mount=e=>l(t,e,c)),c}(e,t,i,a,n);return n?o():Pe(o)};function ws(e,t){const n=ni(t);n&&Kr(e,n)}function ks(e,t,n){const r=Array.isArray(t)?t:[t];for(let i=0;i<r.length;i++){const t=Ke(e,r[i]);if(t){const{transitionEnd:e,transition:r,...i}=t;n(i,e)}}}function Ss(e,t,n,r,i){var a;const o={},s=[],l=r&&void 0===(null===(a=e.style)||void 0===a?void 0:a.willChange),c=i(e,{});for(const g in c)o[g]=ro(c[g]);let{initial:u,animate:d}=e;const f=rs(e),p=is(e);t&&p&&!f&&!1!==e.inherit&&(void 0===u&&(u=t.initial),void 0===d&&(d=t.animate));let h=!!n&&!1===n.initial;h=h||!1===u;const m=h?d:u;return m&&"boolean"!==typeof m&&!Ie(m)&&ks(e,m,((e,t)=>{for(const n in e){let t=e[n];if(Array.isArray(t)){t=t[h?t.length-1:0]}null!==t&&(o[n]=t)}for(const n in t)o[n]=t[n]})),l&&(d&&!1!==u&&!Ie(d)&&ks(e,d,(e=>{for(const t in e)ws(s,t)})),s.length&&(o.willChange=s.join(","))),o}const js=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ps=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Es=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Ts={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Cs=Xe.length;function Rs(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(Qe.has(l))o=!0;else if(yt(l))i[l]=e;else{const t=Es(e,jn[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let a=0;a<Cs;a++){const o=Xe[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=Es(s,jn[o]);l||(i=!1,r+=`${Ts[o]||o}(${e}) `),n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function As(e,t,n){return"string"===typeof e?e:Dt.transform(t+n*e)}const Ns={offset:"stroke-dashoffset",array:"stroke-dasharray"},_s={offset:"strokeDashoffset",array:"strokeDasharray"};function zs(e,t,n,r){let{attrX:i,attrY:a,attrScale:o,originX:s,originY:l,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...f}=t;if(Rs(e,f,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:h,dimensions:m}=e;p.transform&&(m&&(h.transform=p.transform),delete p.transform),m&&(void 0!==s||void 0!==l||h.transform)&&(h.transformOrigin=function(e,t,n){return`${As(t,e.x,e.width)} ${As(n,e.y,e.height)}`}(m,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==i&&(p.x=i),void 0!==a&&(p.y=a),void 0!==o&&(p.scale=o),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Ns:_s;e[a.offset]=Dt.transform(-r);const o=Dt.transform(t),s=Dt.transform(n);e[a.array]=`${o} ${s}`}(p,c,u,d,!1)}const Os=e=>"string"===typeof e&&"svg"===e.toLowerCase(),Bs={useVisualState:bs({scrapeMotionValuesFromProps:ys,createRenderState:Ps,onMount:(e,t,n)=>{let{renderState:r,latestValues:i}=n;ft.read((()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(ox){r.dimensions={x:0,y:0,width:0,height:0}}})),ft.render((()=>{zs(r,i,Os(t.tagName),e.transformTemplate),gs(t,r)}))}})},Ls={useVisualState:bs({applyWillChange:!0,scrapeMotionValuesFromProps:vs,createRenderState:js})};function Ds(e,t,n){for(const r in t)ii(t[r])||xs(r,n)||(e[r]=t[r])}function Vs(e,t){const n={};return Ds(n,e.style||{},e),Object.assign(n,function(e,t){let{transformTemplate:n}=e;return(0,r.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Rs(e,t,n),Object.assign({},e.vars,e.style)}),[t])}(e,t)),n}function Fs(e,t){const n={},r=Vs(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Ms=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Is(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ms.has(e)}let Us=e=>!Is(e);try{($s=require("@emotion/is-prop-valid").default)&&(Us=e=>e.startsWith("on")?!Is(e):$s(e))}catch(sx){}var $s;function Ws(e,t,n,i){const a=(0,r.useMemo)((()=>{const n={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return zs(n,t,Os(i),e.transformTemplate),{...n.attrs,style:{...n.style}}}),[t]);if(e.style){const t={};Ds(t,e.style,e),a.style={...t,...a.style}}return a}function Hs(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(t,n,i,a,o)=>{let{latestValues:s}=a;const l=(ps(t)?Ws:Fs)(n,s,o,t),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(Us(i)||!0===n&&Is(i)||!t&&!Is(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(n,"string"===typeof t,e),u=t!==r.Fragment?{...c,...l,ref:i}:{},{children:d}=n,f=(0,r.useMemo)((()=>ii(d)?d.get():d),[d]);return(0,r.createElement)(t,{...u,children:f})}}function Ks(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return us({...ps(n)?Bs:Ls,preloadedFeatures:e,useRender:Hs(r),createVisualElement:t,Component:n})}}const qs={current:null},Gs={current:!1};const Ys=new WeakMap,Xs=[...Yt,un,vn],Qs=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Js{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=nn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=On.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,ft.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=rs(n),this.isVariantNode=is(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const e=d[f];void 0!==l[f]&&ii(e)&&e.set(l[f],!1)}}mount(e){this.current=e,Ys.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Gs.current||function(){if(Gs.current=!0,De)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>qs.current=e.matches;e.addListener(t),t()}else qs.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||qs.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ys.delete(this.current),this.projection&&this.projection.unmount(),pt(this.notifyUpdate),pt(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=Qe.has(e),r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&ft.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),i(),a&&a(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in ls){const t=ls[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Qs.length;n++){const t=Qs[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(ii(i))e.addValue(r,i);else if(ii(a))e.addValue(r,Qr(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,Qr(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Qr(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){var n;let r=void 0===this.latestValues[e]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,e))&&void 0!==n?n:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==r&&null!==r&&("string"===typeof r&&(xt(r)||gt(r))?r=parseFloat(r):!(e=>Xs.find(Gt(e)))(r)&&vn.test(t)&&(r=Tn(e,t)),this.setBaseTarget(e,ii(r)?r.get():r)),ii(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props;let r;if("string"===typeof n||"object"===typeof n){const i=Ke(this.props,n,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);i&&(r=i[e])}if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||ii(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new Gr),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Zs extends Js{constructor(){super(...arguments),this.KeyframeResolver=Rn}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}}class el extends Zs{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=hs}readValueFromInstance(e,t){if(Qe.has(t)){const e=En(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(yt(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return ha(e,n)}build(e,t,n){Rs(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return vs(e,t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ii(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class tl extends Zs{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qi}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Qe.has(t)){const e=En(t);return e&&e.default||0}return t=ms.has(t)?t:Zr(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ys(e,t,n)}build(e,t,n){zs(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){gs(e,t,0,r)}mount(e){this.isSVGTag=Os(e.tagName),super.mount(e)}}const nl=Me(Ks({...wi,...Go,...Vo,...Yo},((e,t)=>ps(e)?new tl(t):new el(t,{allowProjection:e!==r.Fragment}))));var rl=function(){return rl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},rl.apply(this,arguments)};Object.create;function il(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var al=n(324),ol=n.n(al),sl="-ms-",ll="-moz-",cl="-webkit-",ul="comm",dl="rule",fl="decl",pl="@keyframes",hl=Math.abs,ml=String.fromCharCode,gl=Object.assign;function xl(e){return e.trim()}function vl(e,t){return(e=t.exec(e))?e[0]:e}function yl(e,t,n){return e.replace(t,n)}function bl(e,t,n){return e.indexOf(t,n)}function wl(e,t){return 0|e.charCodeAt(t)}function kl(e,t,n){return e.slice(t,n)}function Sl(e){return e.length}function jl(e){return e.length}function Pl(e,t){return t.push(e),e}function El(e,t){return e.filter((function(e){return!vl(e,t)}))}var Tl=1,Cl=1,Rl=0,Al=0,Nl=0,_l="";function zl(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Tl,column:Cl,length:o,return:"",siblings:s}}function Ol(e,t){return gl(zl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bl(e){for(;e.root;)e=Ol(e.root,{children:[e]});Pl(e,e.siblings)}function Ll(){return Nl=Al>0?wl(_l,--Al):0,Cl--,10===Nl&&(Cl=1,Tl--),Nl}function Dl(){return Nl=Al<Rl?wl(_l,Al++):0,Cl++,10===Nl&&(Cl=1,Tl++),Nl}function Vl(){return wl(_l,Al)}function Fl(){return Al}function Ml(e,t){return kl(_l,e,t)}function Il(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ul(e){return Tl=Cl=1,Rl=Sl(_l=e),Al=0,[]}function $l(e){return _l="",e}function Wl(e){return xl(Ml(Al-1,ql(91===e?e+2:40===e?e+1:e)))}function Hl(e){for(;(Nl=Vl())&&Nl<33;)Dl();return Il(e)>2||Il(Nl)>3?"":" "}function Kl(e,t){for(;--t&&Dl()&&!(Nl<48||Nl>102||Nl>57&&Nl<65||Nl>70&&Nl<97););return Ml(e,Fl()+(t<6&&32==Vl()&&32==Dl()))}function ql(e){for(;Dl();)switch(Nl){case e:return Al;case 34:case 39:34!==e&&39!==e&&ql(Nl);break;case 40:41===e&&ql(e);break;case 92:Dl()}return Al}function Gl(e,t){for(;Dl()&&e+Nl!==57&&(e+Nl!==84||47!==Vl()););return"/*"+Ml(t,Al-1)+"*"+ml(47===e?e:Dl())}function Yl(e){for(;!Il(Vl());)Dl();return Ml(e,Al)}function Xl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ql(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case fl:return e.return=e.return||e.value;case ul:return"";case pl:return e.return=e.value+"{"+Xl(e.children,r)+"}";case dl:if(!Sl(e.value=e.props.join(",")))return""}return Sl(n=Xl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Jl(e,t,n){switch(function(e,t){return 45^wl(e,0)?(((t<<2^wl(e,0))<<2^wl(e,1))<<2^wl(e,2))<<2^wl(e,3):0}(e,t)){case 5103:return cl+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return cl+e+e;case 4789:return ll+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return cl+e+ll+e+sl+e+e;case 5936:switch(wl(e,t+11)){case 114:return cl+e+sl+yl(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return cl+e+sl+yl(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return cl+e+sl+yl(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return cl+e+sl+e+e;case 6165:return cl+e+sl+"flex-"+e+e;case 5187:return cl+e+yl(e,/(\w+).+(:[^]+)/,cl+"box-$1$2"+sl+"flex-$1$2")+e;case 5443:return cl+e+sl+"flex-item-"+yl(e,/flex-|-self/g,"")+(vl(e,/flex-|baseline/)?"":sl+"grid-row-"+yl(e,/flex-|-self/g,""))+e;case 4675:return cl+e+sl+"flex-line-pack"+yl(e,/align-content|flex-|-self/g,"")+e;case 5548:return cl+e+sl+yl(e,"shrink","negative")+e;case 5292:return cl+e+sl+yl(e,"basis","preferred-size")+e;case 6060:return cl+"box-"+yl(e,"-grow","")+cl+e+sl+yl(e,"grow","positive")+e;case 4554:return cl+yl(e,/([^-])(transform)/g,"$1"+cl+"$2")+e;case 6187:return yl(yl(yl(e,/(zoom-|grab)/,cl+"$1"),/(image-set)/,cl+"$1"),e,"")+e;case 5495:case 3959:return yl(e,/(image-set\([^]*)/,cl+"$1$`$1");case 4968:return yl(yl(e,/(.+:)(flex-)?(.*)/,cl+"box-pack:$3"+sl+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+cl+e+e;case 4200:if(!vl(e,/flex-|baseline/))return sl+"grid-column-align"+kl(e,t)+e;break;case 2592:case 3360:return sl+yl(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,vl(e.props,/grid-\w+-end/)}))?~bl(e+(n=n[t].value),"span",0)?e:sl+yl(e,"-start","")+e+sl+"grid-row-span:"+(~bl(n,"span",0)?vl(n,/\d+/):+vl(n,/\d+/)-+vl(e,/\d+/))+";":sl+yl(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return vl(e.props,/grid-\w+-start/)}))?e:sl+yl(yl(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return yl(e,/(.+)-inline(.+)/,cl+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Sl(e)-1-t>6)switch(wl(e,t+1)){case 109:if(45!==wl(e,t+4))break;case 102:return yl(e,/(.+:)(.+)-([^]+)/,"$1"+cl+"$2-$3$1"+ll+(108==wl(e,t+3)?"$3":"$2-$3"))+e;case 115:return~bl(e,"stretch",0)?Jl(yl(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return yl(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,a,o,s){return sl+n+":"+r+s+(i?sl+n+"-span:"+(a?o:+o-+r)+s:"")+e}));case 4949:if(121===wl(e,t+6))return yl(e,":",":"+cl)+e;break;case 6444:switch(wl(e,45===wl(e,14)?18:11)){case 120:return yl(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+cl+(45===wl(e,14)?"inline-":"")+"box$3$1"+cl+"$2$3$1"+sl+"$2box$3")+e;case 100:return yl(e,":",":"+sl)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return yl(e,"scroll-","scroll-snap-")+e}return e}function Zl(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case fl:return void(e.return=Jl(e.value,e.length,n));case pl:return Xl([Ol(e,{value:yl(e.value,"@","@"+cl)})],r);case dl:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(vl(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bl(Ol(e,{props:[yl(t,/:(read-\w+)/,":-moz-$1")]})),Bl(Ol(e,{props:[t]})),gl(e,{props:El(n,r)});break;case"::placeholder":Bl(Ol(e,{props:[yl(t,/:(plac\w+)/,":"+cl+"input-$1")]})),Bl(Ol(e,{props:[yl(t,/:(plac\w+)/,":-moz-$1")]})),Bl(Ol(e,{props:[yl(t,/:(plac\w+)/,sl+"input-$1")]})),Bl(Ol(e,{props:[t]})),gl(e,{props:El(n,r)})}return""}))}}function ec(e){return $l(tc("",null,null,null,[""],e=Ul(e),0,[0],e))}function tc(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,f=0,p=0,h=0,m=1,g=1,x=1,v=0,y="",b=i,w=a,k=r,S=y;g;)switch(h=v,v=Dl()){case 40:if(108!=h&&58==wl(S,d-1)){-1!=bl(S+=yl(Wl(v),"&","&\f"),"&\f",hl(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=Wl(v);break;case 9:case 10:case 13:case 32:S+=Hl(h);break;case 92:S+=Kl(Fl()-1,7);continue;case 47:switch(Vl()){case 42:case 47:Pl(rc(Gl(Dl(),Fl()),t,n,l),l);break;default:S+="/"}break;case 123*m:s[c++]=Sl(S)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==x&&(S=yl(S,/\f/g,"")),p>0&&Sl(S)-d&&Pl(p>32?ic(S+";",r,n,d-1,l):ic(yl(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(Pl(k=nc(S,t,n,c,u,i,s,y,b=[],w=[],d,a),a),123===v)if(0===u)tc(S,t,k,k,b,a,d,s,w);else switch(99===f&&110===wl(S,3)?100:f){case 100:case 108:case 109:case 115:tc(e,k,k,r&&Pl(nc(e,k,k,0,0,i,s,y,i,b=[],d,w),w),i,w,d,s,r?b:w);break;default:tc(S,k,k,k,[""],w,0,s,w)}}c=u=p=0,m=x=1,y=S="",d=o;break;case 58:d=1+Sl(S),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==Ll())continue;switch(S+=ml(v),v*m){case 38:x=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(Sl(S)-1)*x,x=1;break;case 64:45===Vl()&&(S+=Wl(Dl())),f=Vl(),u=d=Sl(y=S+=Yl(Fl())),v++;break;case 45:45===h&&2==Sl(S)&&(m=0)}}return a}function nc(e,t,n,r,i,a,o,s,l,c,u,d){for(var f=i-1,p=0===i?a:[""],h=jl(p),m=0,g=0,x=0;m<r;++m)for(var v=0,y=kl(e,f+1,f=hl(g=o[m])),b=e;v<h;++v)(b=xl(g>0?p[v]+" "+y:yl(y,/&\f/g,p[v])))&&(l[x++]=b);return zl(e,t,n,0===i?dl:s,l,c,u,d)}function rc(e,t,n,r){return zl(e,t,n,ul,ml(Nl),kl(e,2,-2),0,r)}function ic(e,t,n,r,i){return zl(e,t,n,fl,kl(e,0,r),kl(e,r+1,-1),r,i)}var ac={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oc="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",sc="active",lc="data-styled-version",cc="6.1.13",uc="/*!sc*/\n",dc="undefined"!=typeof window&&"HTMLElement"in window,fc=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),pc={},hc=(new Set,Object.freeze([])),mc=Object.freeze({});function gc(e,t,n){return void 0===n&&(n=mc),e.theme!==n.theme&&e.theme||t||n.theme}var xc=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vc=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yc=/(^-|-$)/g;function bc(e){return e.replace(vc,"-").replace(yc,"")}var wc=/(a)(d)/gi,kc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Sc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=kc(t%52)+n;return(kc(t%52)+n).replace(wc,"$1-$2")}var jc,Pc=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ec=function(e){return Pc(5381,e)};function Tc(e){return Sc(Ec(e)>>>0)}function Cc(e){return e.displayName||e.name||"Component"}function Rc(e){return"string"==typeof e&&!0}var Ac="function"==typeof Symbol&&Symbol.for,Nc=Ac?Symbol.for("react.memo"):60115,_c=Ac?Symbol.for("react.forward_ref"):60112,zc={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oc={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lc=((jc={})[_c]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jc[Nc]=Bc,jc);function Dc(e){return("type"in(t=e)&&t.type.$$typeof)===Nc?Bc:"$$typeof"in e?Lc[e.$$typeof]:zc;var t}var Vc=Object.defineProperty,Fc=Object.getOwnPropertyNames,Mc=Object.getOwnPropertySymbols,Ic=Object.getOwnPropertyDescriptor,Uc=Object.getPrototypeOf,$c=Object.prototype;function Wc(e,t,n){if("string"!=typeof t){if($c){var r=Uc(t);r&&r!==$c&&Wc(e,r,n)}var i=Fc(t);Mc&&(i=i.concat(Mc(t)));for(var a=Dc(e),o=Dc(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Oc||n&&n[l]||o&&l in o||a&&l in a)){var c=Ic(t,l);try{Vc(e,l,c)}catch(e){}}}}return e}function Hc(e){return"function"==typeof e}function Kc(e){return"object"==typeof e&&"styledComponentId"in e}function qc(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Gc(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Yc(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xc(e,t,n){if(void 0===n&&(n=!1),!n&&!Yc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xc(e[r],t[r]);else if(Yc(t))for(var r in t)e[r]=Xc(e[r],t[r]);return e}function Qc(e,t){Object.defineProperty(e,"toString",{value:t})}function Jc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Zc=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Jc(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(uc);return t},e}(),eu=new Map,tu=new Map,nu=1,ru=function(e){if(eu.has(e))return eu.get(e);for(;tu.has(nu);)nu++;var t=nu++;return eu.set(e,t),tu.set(t,e),t},iu=function(e,t){nu=t+1,eu.set(e,t),tu.set(t,e)},au="style[".concat(oc,"][").concat(lc,'="').concat(cc,'"]'),ou=new RegExp("^".concat(oc,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),su=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},lu=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(uc),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(ou);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(iu(u,c),su(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},cu=function(e){for(var t=document.querySelectorAll(au),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(oc)!==sc&&(lu(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function uu(){return n.nc}var du=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(oc,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(oc,sc),r.setAttribute(lc,cc);var o=uu();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},fu=function(){function e(e){this.element=du(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Jc(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),pu=function(){function e(e){this.element=du(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),hu=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),mu=dc,gu={isServer:!dc,useCSSOMInjection:!fc},xu=function(){function e(e,t,n){void 0===e&&(e=mc),void 0===t&&(t={});var r=this;this.options=rl(rl({},gu),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&dc&&mu&&(mu=!1,cu(this)),Qc(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return tu.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(oc,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(uc)},a=0;a<n;a++)i(a);return r}(r)}))}return e.registerId=function(e){return ru(e)},e.prototype.rehydrate=function(){!this.server&&dc&&cu(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(rl(rl({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new hu(n):t?new fu(n):new pu(n)}(this.options),new Zc(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ru(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ru(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ru(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vu=/&/g,yu=/^\s*\/\/.*$/gm;function bu(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=bu(e.children,t)),e}))}function wu(e){var t,n,r,i=void 0===e?mc:e,a=i.options,o=void 0===a?mc:a,s=i.plugins,l=void 0===s?hc:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===dl&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(vu,n).replace(r,c))})),o.prefix&&u.push(Zl),u.push(Ql);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(yu,""),c=ec(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=bu(c,o.namespace));var d,f=[];return Xl(c,function(e){var t=jl(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce((function(e,t){return t.name||Jc(15),Pc(e,t.name)}),5381).toString():"",d}var ku=new xu,Su=wu(),ju=r.createContext({shouldForwardProp:void 0,styleSheet:ku,stylis:Su}),Pu=(ju.Consumer,r.createContext(void 0));function Eu(){return(0,r.useContext)(ju)}function Tu(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],i=t[1],a=Eu().styleSheet,o=(0,r.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,a]),s=(0,r.useMemo)((function(){return wu({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)((function(){ol()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,r.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:s}}),[e.shouldForwardProp,o,s]);return r.createElement(ju.Provider,{value:l},r.createElement(Pu.Provider,{value:s},e.children))}var Cu=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Su);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Qc(this,(function(){throw Jc(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Su),this.name+e.hash},e}(),Ru=function(e){return e>="A"&&e<="Z"};function Au(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ru(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Nu=function(e){return null==e||!1===e||""===e},_u=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Nu(a)&&(Array.isArray(a)&&a.isCss||Hc(a)?r.push("".concat(Au(i),":"),a,";"):Yc(a)?r.push.apply(r,il(il(["".concat(i," {")],_u(a),!1),["}"],!1)):r.push("".concat(Au(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ac||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zu(e,t,n,r){return Nu(e)?[]:Kc(e)?[".".concat(e.styledComponentId)]:Hc(e)?!Hc(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:zu(e(t),t,n,r):e instanceof Cu?n?(e.inject(n,r),[e.getName(r)]):[e]:Yc(e)?_u(e):Array.isArray(e)?Array.prototype.concat.apply(hc,e.map((function(e){return zu(e,t,n,r)}))):[e.toString()];var i}function Ou(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hc(n)&&!Kc(n))return!1}return!0}var Bu=Ec(cc),Lu=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ou(e),this.componentId=t,this.baseHash=Pc(Bu,t),this.baseStyle=n,xu.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=qc(r,this.staticRulesId);else{var i=Gc(zu(this.rules,e,t,n)),a=Sc(Pc(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=qc(r,a),this.staticRulesId=a}else{for(var s=Pc(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Gc(zu(u,e,t,n));s=Pc(s,d+c),l+=d}}if(l){var f=Sc(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=qc(r,f)}}return r},e}(),Du=r.createContext(void 0);Du.Consumer;var Vu={};new Set;function Fu(e,t,n){var i=Kc(e),a=e,o=!Rc(e),s=t.attrs,l=void 0===s?hc:s,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":bc(e);Vu[n]=(Vu[n]||0)+1;var r="".concat(n,"-").concat(Tc(cc+n+Vu[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,f=void 0===d?function(e){return Rc(e)?"styled.".concat(e):"Styled(".concat(Cc(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(bc(t.displayName),"-").concat(t.componentId):t.componentId||u,h=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var v=new Lu(n,p,i?a.componentStyle:void 0);function y(e,t){return function(e,t,n){var i=e.attrs,a=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=r.useContext(Du),d=Eu(),f=e.shouldForwardProp||d.shouldForwardProp,p=gc(t,u,o)||mc,h=function(e,t,n){for(var r,i=rl(rl({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Hc(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?qc(i[s],o[s]):"style"===s?rl(rl({},i[s]),o[s]):o[s]}return t.className&&(i.className=qc(i.className,t.className)),i}(i,t,p),m=h.as||c,g={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===p||("forwardedAs"===x?g.as=h.forwardedAs:f&&!f(x,m)||(g[x]=h[x]));var v=function(e,t){var n=Eu();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),y=qc(s,l);return v&&(y+=" "+v),h.className&&(y+=" "+h.className),g[Rc(m)&&!xc.has(m)?"class":"className"]=y,g.ref=n,(0,r.createElement)(m,g)}(b,e,t)}y.displayName=f;var b=r.forwardRef(y);return b.attrs=h,b.componentStyle=v,b.displayName=f,b.shouldForwardProp=m,b.foldedComponentIds=i?qc(a.foldedComponentIds,a.styledComponentId):"",b.styledComponentId=p,b.target=i?a.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Xc(e,i[r],!0);return e}({},a.defaultProps,e):e}}),Qc(b,(function(){return".".concat(b.styledComponentId)})),o&&Wc(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Mu(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Iu=function(e){return Object.assign(e,{isCss:!0})};function Uu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hc(e)||Yc(e))return Iu(zu(Mu(hc,il([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?zu(r):Iu(zu(Mu(r,t)))}function $u(e,t,n){if(void 0===n&&(n=mc),!t)throw Jc(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Uu.apply(void 0,il([r],i,!1)))};return r.attrs=function(r){return $u(e,t,rl(rl({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return $u(e,t,rl(rl({},n),r))},r}var Wu=function(e){return $u(Fu,e)},Hu=Wu;xc.forEach((function(e){Hu[e]=Wu(e)}));var Ku=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ou(e),xu.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Gc(zu(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&xu.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function qu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Gc(Uu.apply(void 0,il([e],t,!1))),i=Tc(r);return new Cu(i,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=uu(),r=Gc([n&&'nonce="'.concat(n,'"'),"".concat(oc,'="true"'),"".concat(lc,'="').concat(cc,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Jc(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Jc(2);var n=e.instance.toString();if(!n)return[];var i=((t={})[oc]="",t[lc]=cc,t.dangerouslySetInnerHTML={__html:n},t),a=uu();return a&&(i.nonce=a),[r.createElement("style",rl({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new xu({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Jc(2);return r.createElement(Tu,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Jc(3)}})(),"__sc-".concat(oc,"__");const Gu=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Uu.apply(void 0,il([e],t,!1)),a="sc-global-".concat(Tc(JSON.stringify(i))),o=new Ku(i,a),s=function(e){var t=Eu(),n=r.useContext(Du),i=r.useRef(t.styleSheet.allocateGSInstance(a)).current;return t.styleSheet.server&&l(i,e,t.styleSheet,n,t.stylis),r.useLayoutEffect((function(){if(!t.styleSheet.server)return l(i,e,t.styleSheet,n,t.stylis),function(){return o.removeStyles(i,t.styleSheet)}}),[i,e,t.styleSheet,n,t.stylis]),null};function l(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,pc,n,i);else{var a=rl(rl({},t),{theme:gc(t,r,s.defaultProps)});o.renderStyles(e,a,n,i)}}return r.memo(s)})`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    height: 100%;  /* 화면 높이를 100%로 설정 */
    overflow-x: hidden;  /* 가로 스크롤 방지 */
  }

  #root {
    height: 100%;  /* React의 루트 요소도 100%로 설정 */
  }
`;function Yu(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xu}=Object.prototype,{getPrototypeOf:Qu}=Object,Ju=(Zu=Object.create(null),e=>{const t=Xu.call(e);return Zu[t]||(Zu[t]=t.slice(8,-1).toLowerCase())});var Zu;const ed=e=>(e=e.toLowerCase(),t=>Ju(t)===e),td=e=>t=>typeof t===e,{isArray:nd}=Array,rd=td("undefined");const id=ed("ArrayBuffer");const ad=td("string"),od=td("function"),sd=td("number"),ld=e=>null!==e&&"object"===typeof e,cd=e=>{if("object"!==Ju(e))return!1;const t=Qu(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ud=ed("Date"),dd=ed("File"),fd=ed("Blob"),pd=ed("FileList"),hd=ed("URLSearchParams"),[md,gd,xd,vd]=["ReadableStream","Request","Response","Headers"].map(ed);function yd(e,t){let n,r,{allOwnKeys:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),nd(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=i?Object.getOwnPropertyNames(e):Object.keys(e),a=r.length;let o;for(n=0;n<a;n++)o=r[n],t.call(null,e[o],o,e)}}function bd(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const wd="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,kd=e=>!rd(e)&&e!==wd;const Sd=(jd="undefined"!==typeof Uint8Array&&Qu(Uint8Array),e=>jd&&e instanceof jd);var jd;const Pd=ed("HTMLFormElement"),Ed=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),Td=ed("RegExp"),Cd=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};yd(n,((n,i)=>{let a;!1!==(a=t(n,i,e))&&(r[i]=a||n)})),Object.defineProperties(e,r)},Rd="abcdefghijklmnopqrstuvwxyz",Ad="0123456789",Nd={DIGIT:Ad,ALPHA:Rd,ALPHA_DIGIT:Rd+Rd.toUpperCase()+Ad};const _d=ed("AsyncFunction"),zd=(Od="function"===typeof setImmediate,Bd=od(wd.postMessage),Od?setImmediate:Bd?((e,t)=>(wd.addEventListener("message",(n=>{let{source:r,data:i}=n;r===wd&&i===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),wd.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var Od,Bd;const Ld="undefined"!==typeof queueMicrotask?queueMicrotask.bind(wd):"undefined"!==typeof process&&process.nextTick||zd,Dd={isArray:nd,isArrayBuffer:id,isBuffer:function(e){return null!==e&&!rd(e)&&null!==e.constructor&&!rd(e.constructor)&&od(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||od(e.append)&&("formdata"===(t=Ju(e))||"object"===t&&od(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&id(e.buffer),t},isString:ad,isNumber:sd,isBoolean:e=>!0===e||!1===e,isObject:ld,isPlainObject:cd,isReadableStream:md,isRequest:gd,isResponse:xd,isHeaders:vd,isUndefined:rd,isDate:ud,isFile:dd,isBlob:fd,isRegExp:Td,isFunction:od,isStream:e=>ld(e)&&od(e.pipe),isURLSearchParams:hd,isTypedArray:Sd,isFileList:pd,forEach:yd,merge:function e(){const{caseless:t}=kd(this)&&this||{},n={},r=(r,i)=>{const a=t&&bd(n,i)||i;cd(n[a])&&cd(r)?n[a]=e(n[a],r):cd(r)?n[a]=e({},r):nd(r)?n[a]=r.slice():n[a]=r};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&yd(arguments[i],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return yd(t,((t,r)=>{n&&od(t)?e[r]=Yu(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,a,o;const s={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],r&&!r(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==n&&Qu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Ju,kindOfTest:ed,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(nd(e))return e;let t=e.length;if(!sd(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Pd,hasOwnProperty:Ed,hasOwnProp:Ed,reduceDescriptors:Cd,freezeMethods:e=>{Cd(e,((t,n)=>{if(od(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];od(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return nd(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:bd,global:wd,isContextDefined:kd,ALPHABET:Nd,generateString:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Nd.ALPHA_DIGIT,n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&od(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(ld(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=nd(e)?[]:{};return yd(e,((e,t)=>{const a=n(e,r+1);!rd(a)&&(i[t]=a)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:_d,isThenable:e=>e&&(ld(e)||od(e))&&od(e.then)&&od(e.catch),setImmediate:zd,asap:Ld};function Vd(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}Dd.inherits(Vd,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Dd.toJSONObject(this.config),code:this.code,status:this.status}}});const Fd=Vd.prototype,Md={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Md[e]={value:e}})),Object.defineProperties(Vd,Md),Object.defineProperty(Fd,"isAxiosError",{value:!0}),Vd.from=(e,t,n,r,i,a)=>{const o=Object.create(Fd);return Dd.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Vd.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const Id=Vd;function Ud(e){return Dd.isPlainObject(e)||Dd.isArray(e)}function $d(e){return Dd.endsWith(e,"[]")?e.slice(0,-2):e}function Wd(e,t,n){return e?e.concat(t).map((function(e,t){return e=$d(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Hd=Dd.toFlatObject(Dd,{},null,(function(e){return/^is[A-Z]/.test(e)}));const Kd=function(e,t,n){if(!Dd.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Dd.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Dd.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&Dd.isSpecCompliantForm(t);if(!Dd.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Dd.isDate(e))return e.toISOString();if(!s&&Dd.isBlob(e))throw new Id("Blob is not supported. Use a Buffer instead.");return Dd.isArrayBuffer(e)||Dd.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,i){let s=e;if(e&&!i&&"object"===typeof e)if(Dd.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Dd.isArray(e)&&function(e){return Dd.isArray(e)&&!e.some(Ud)}(e)||(Dd.isFileList(e)||Dd.endsWith(n,"[]"))&&(s=Dd.toArray(e)))return n=$d(n),s.forEach((function(e,r){!Dd.isUndefined(e)&&null!==e&&t.append(!0===o?Wd([n],r,a):null===o?n:n+"[]",l(e))})),!1;return!!Ud(e)||(t.append(Wd(i,n,a),l(e)),!1)}const u=[],d=Object.assign(Hd,{defaultVisitor:c,convertValue:l,isVisitable:Ud});if(!Dd.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Dd.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),Dd.forEach(n,(function(n,a){!0===(!(Dd.isUndefined(n)||null===n)&&i.call(t,n,Dd.isString(a)?a.trim():a,r,d))&&e(n,r?r.concat(a):[a])})),u.pop()}}(e),t};function qd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Gd(e,t){this._pairs=[],e&&Kd(e,this,t)}const Yd=Gd.prototype;Yd.append=function(e,t){this._pairs.push([e,t])},Yd.toString=function(e){const t=e?function(t){return e.call(this,t,qd)}:qd;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Xd=Gd;function Qd(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jd(e,t,n){if(!t)return e;const r=n&&n.encode||Qd,i=n&&n.serialize;let a;if(a=i?i(t,n):Dd.isURLSearchParams(t)?t.toString():new Xd(t,n).toString(r),a){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}const Zd=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Dd.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ef={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tf={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:Xd,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},nf="undefined"!==typeof window&&"undefined"!==typeof document,rf="object"===typeof navigator&&navigator||void 0,af=nf&&(!rf||["ReactNative","NativeScript","NS"].indexOf(rf.product)<0),of="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,sf=nf&&window.location.href||"http://localhost",lf={...e,...tf};const cf=function(e){function t(e,n,r,i){let a=e[i++];if("__proto__"===a)return!0;const o=Number.isFinite(+a),s=i>=e.length;if(a=!a&&Dd.isArray(r)?r.length:a,s)return Dd.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o;r[a]&&Dd.isObject(r[a])||(r[a]=[]);return t(e,n,r[a],i)&&Dd.isArray(r[a])&&(r[a]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}(r[a])),!o}if(Dd.isFormData(e)&&Dd.isFunction(e.entries)){const n={};return Dd.forEachEntry(e,((e,r)=>{t(function(e){return Dd.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const uf={transitional:ef,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=Dd.isObject(e);i&&Dd.isHTMLForm(e)&&(e=new FormData(e));if(Dd.isFormData(e))return r?JSON.stringify(cf(e)):e;if(Dd.isArrayBuffer(e)||Dd.isBuffer(e)||Dd.isStream(e)||Dd.isFile(e)||Dd.isBlob(e)||Dd.isReadableStream(e))return e;if(Dd.isArrayBufferView(e))return e.buffer;if(Dd.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Kd(e,new lf.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return lf.isNode&&Dd.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((a=Dd.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Kd(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(Dd.isString(e))try{return(t||JSON.parse)(e),Dd.trim(e)}catch(ox){if("SyntaxError"!==ox.name)throw ox}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||uf.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Dd.isResponse(e)||Dd.isReadableStream(e))return e;if(e&&Dd.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(ox){if(n){if("SyntaxError"===ox.name)throw Id.from(ox,Id.ERR_BAD_RESPONSE,this,null,this.response);throw ox}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:lf.classes.FormData,Blob:lf.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Dd.forEach(["delete","get","head","post","put","patch"],(e=>{uf.headers[e]={}}));const df=uf,ff=Dd.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pf=Symbol("internals");function hf(e){return e&&String(e).trim().toLowerCase()}function mf(e){return!1===e||null==e?e:Dd.isArray(e)?e.map(mf):String(e)}function gf(e,t,n,r,i){return Dd.isFunction(r)?r.call(this,t,n):(i&&(t=n),Dd.isString(t)?Dd.isString(r)?-1!==t.indexOf(r):Dd.isRegExp(r)?r.test(t):void 0:void 0)}class xf{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=hf(t);if(!i)throw new Error("header name must be a non-empty string");const a=Dd.findKey(r,i);(!a||void 0===r[a]||!0===n||void 0===n&&!1!==r[a])&&(r[a||t]=mf(e))}const a=(e,t)=>Dd.forEach(e,((e,n)=>i(e,n,t)));if(Dd.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(Dd.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))a((e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&ff[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(Dd.isHeaders(e))for(const[o,s]of e.entries())i(s,o,n);else null!=e&&i(t,e,n);return this}get(e,t){if(e=hf(e)){const n=Dd.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Dd.isFunction(t))return t.call(this,e,n);if(Dd.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=hf(e)){const n=Dd.findKey(this,e);return!(!n||void 0===this[n]||t&&!gf(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=hf(e)){const i=Dd.findKey(n,e);!i||t&&!gf(0,n[i],i,t)||(delete n[i],r=!0)}}return Dd.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!gf(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return Dd.forEach(this,((r,i)=>{const a=Dd.findKey(n,i);if(a)return t[a]=mf(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=mf(r),n[o]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Dd.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Dd.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[pf]=this[pf]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=hf(e);t[r]||(!function(e,t){const n=Dd.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return Dd.isArray(e)?e.forEach(r):r(e),this}}xf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Dd.reduceDescriptors(xf.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),Dd.freezeMethods(xf);const vf=xf;function yf(e,t){const n=this||df,r=t||n,i=vf.from(r.headers);let a=r.data;return Dd.forEach(e,(function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)})),i.normalize(),a}function bf(e){return!(!e||!e.__CANCEL__)}function wf(e,t,n){Id.call(this,null==e?"canceled":e,Id.ERR_CANCELED,t,n),this.name="CanceledError"}Dd.inherits(wf,Id,{__CANCEL__:!0});const kf=wf;function Sf(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Id("Request failed with status code "+n.status,[Id.ERR_BAD_REQUEST,Id.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const jf=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,a=0,o=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=r[o];i||(i=l),n[a]=s,r[a]=l;let u=o,d=0;for(;u!==a;)d+=n[u++],u%=e;if(a=(a+1)%e,a===o&&(o=(o+1)%e),l-i<t)return;const f=c&&l-c;return f?Math.round(1e3*d/f):void 0}};const Pf=function(e,t){let n,r,i=0,a=1e3/t;const o=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();i=a,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-i;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=a?o(l,e):(n=l,r||(r=setTimeout((()=>{r=null,o(n)}),a-t)))},()=>n&&o(n)]},Ef=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const i=jf(50,250);return Pf((n=>{const a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,l=i(s);r=a;e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&a<=o?(o-a)/l:void 0,event:n,lengthComputable:null!=o,[t?"download":"upload"]:!0})}),n)},Tf=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Cf=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Dd.asap((()=>e(...n)))},Rf=lf.hasStandardBrowserEnv?function(){const e=lf.navigator&&/(msie|trident)/i.test(lf.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=Dd.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},Af=lf.hasStandardBrowserEnv?{write(e,t,n,r,i,a){const o=[e+"="+encodeURIComponent(t)];Dd.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),Dd.isString(r)&&o.push("path="+r),Dd.isString(i)&&o.push("domain="+i),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Nf(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const _f=e=>e instanceof vf?{...e}:e;function zf(e,t){t=t||{};const n={};function r(e,t,n){return Dd.isPlainObject(e)&&Dd.isPlainObject(t)?Dd.merge.call({caseless:n},e,t):Dd.isPlainObject(t)?Dd.merge({},t):Dd.isArray(t)?t.slice():t}function i(e,t,n){return Dd.isUndefined(t)?Dd.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function a(e,t){if(!Dd.isUndefined(t))return r(void 0,t)}function o(e,t){return Dd.isUndefined(t)?Dd.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,i,a){return a in t?r(n,i):a in e?r(void 0,n):void 0}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t)=>i(_f(e),_f(t),!0)};return Dd.forEach(Object.keys(Object.assign({},e,t)),(function(r){const a=l[r]||i,o=a(e[r],t[r],r);Dd.isUndefined(o)&&a!==s||(n[r]=o)})),n}const Of=e=>{const t=zf({},e);let n,{data:r,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:o,headers:s,auth:l}=t;if(t.headers=s=vf.from(s),t.url=Jd(Nf(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Dd.isFormData(r))if(lf.hasStandardBrowserEnv||lf.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(lf.hasStandardBrowserEnv&&(i&&Dd.isFunction(i)&&(i=i(t)),i||!1!==i&&Rf(t.url))){const e=a&&o&&Af.read(o);e&&s.set(a,e)}return t},Bf="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Of(e);let i=r.data;const a=vf.from(r.headers).normalize();let o,s,l,c,u,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=r;function h(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=vf.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Sf((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new Id("Request aborted",Id.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new Id("Network Error",Id.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||ef;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new Id(t,i.clarifyTimeoutError?Id.ETIMEDOUT:Id.ECONNABORTED,e,m)),m=null},void 0===i&&a.setContentType(null),"setRequestHeader"in m&&Dd.forEach(a.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Dd.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),p&&([l,u]=Ef(p,!0),m.addEventListener("progress",l)),f&&m.upload&&([s,c]=Ef(f),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(o=t=>{m&&(n(!t||t.type?new kf(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);x&&-1===lf.protocols.indexOf(x)?n(new Id("Unsupported protocol "+x+":",Id.ERR_BAD_REQUEST,e)):m.send(i||null)}))},Lf=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const i=function(e){if(!n){n=!0,o();const t=e instanceof Error?e:this.reason;r.abort(t instanceof Id?t:new kf(t instanceof Error?t.message:t))}};let a=t&&setTimeout((()=>{a=null,i(new Id(`timeout ${t} of ms exceeded`,Id.ETIMEDOUT))}),t);const o=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)})),e=null)};e.forEach((e=>e.addEventListener("abort",i)));const{signal:s}=r;return s.unsubscribe=()=>Dd.asap(o),s}},Df=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;for(;i<n;)r=i+t,yield e.slice(i,r),i=r},Vf=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Ff=(e,t,n,r)=>{const i=async function*(e,t){for await(const n of Vf(e))yield*Df(n,t)}(e,t);let a,o=0,s=e=>{a||(a=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await i.next();if(t)return s(),void e.close();let a=r.byteLength;if(n){let e=o+=a;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),i.return())},{highWaterMark:2})},Mf="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,If=Mf&&"function"===typeof ReadableStream,Uf=Mf&&("function"===typeof TextEncoder?($f=new TextEncoder,e=>$f.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var $f;const Wf=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(ox){return!1}},Hf=If&&Wf((()=>{let e=!1;const t=new Request(lf.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Kf=If&&Wf((()=>Dd.isReadableStream(new Response("").body))),qf={stream:Kf&&(e=>e.body)};var Gf;Mf&&(Gf=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!qf[e]&&(qf[e]=Dd.isFunction(Gf[e])?t=>t[e]():(t,n)=>{throw new Id(`Response type '${e}' is not supported`,Id.ERR_NOT_SUPPORT,n)})})));const Yf=async(e,t)=>{const n=Dd.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Dd.isBlob(e))return e.size;if(Dd.isSpecCompliantForm(e)){const t=new Request(lf.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Dd.isArrayBufferView(e)||Dd.isArrayBuffer(e)?e.byteLength:(Dd.isURLSearchParams(e)&&(e+=""),Dd.isString(e)?(await Uf(e)).byteLength:void 0)})(t):n},Xf=Mf&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:f}=Of(e);c=c?(c+"").toLowerCase():"text";let p,h=Lf([i,a&&a.toAbortSignal()],o);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(l&&Hf&&"get"!==n&&"head"!==n&&0!==(g=await Yf(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(Dd.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Tf(g,Ef(Cf(l)));r=Ff(n.body,65536,e,t)}}Dd.isString(d)||(d=d?"include":"omit");const i="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:i?d:void 0});let a=await fetch(p);const o=Kf&&("stream"===c||"response"===c);if(Kf&&(s||o&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=a[t]}));const t=Dd.toFiniteNumber(a.headers.get("content-length")),[n,r]=s&&Tf(t,Ef(Cf(s),!0))||[];a=new Response(Ff(a.body,65536,n,(()=>{r&&r(),m&&m()})),e)}c=c||"text";let x=await qf[Dd.findKey(qf,c)||"text"](a,e);return!o&&m&&m(),await new Promise(((t,n)=>{Sf(t,n,{data:x,headers:vf.from(a.headers),status:a.status,statusText:a.statusText,config:e,request:p})}))}catch(x){if(m&&m(),x&&"TypeError"===x.name&&/fetch/i.test(x.message))throw Object.assign(new Id("Network Error",Id.ERR_NETWORK,e,p),{cause:x.cause||x});throw Id.from(x,x&&x.code,e,p)}}),Qf={http:null,xhr:Bf,fetch:Xf};Dd.forEach(Qf,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(ox){}Object.defineProperty(e,"adapterName",{value:t})}}));const Jf=e=>`- ${e}`,Zf=e=>Dd.isFunction(e)||null===e||!1===e,ep=e=>{e=Dd.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let a=0;a<t;a++){let t;if(n=e[a],r=n,!Zf(n)&&(r=Qf[(t=String(n)).toLowerCase()],void 0===r))throw new Id(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+a]=r}if(!r){const e=Object.entries(i).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(Jf).join("\n"):" "+Jf(e[0]):"as no adapter specified";throw new Id("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function tp(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new kf(null,e)}function np(e){tp(e),e.headers=vf.from(e.headers),e.data=yf.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return ep(e.adapter||df.adapter)(e).then((function(t){return tp(e),t.data=yf.call(e,e.transformResponse,t),t.headers=vf.from(t.headers),t}),(function(t){return bf(t)||(tp(e),t&&t.response&&(t.response.data=yf.call(e,e.transformResponse,t.response),t.response.headers=vf.from(t.response.headers))),Promise.reject(t)}))}const rp="1.7.7",ip={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ip[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ap={};ip.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,a)=>{if(!1===e)throw new Id(r(i," has been removed"+(t?" in "+t:"")),Id.ERR_DEPRECATED);return t&&!ap[i]&&(ap[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}};const op={assertOptions:function(e,t,n){if("object"!==typeof e)throw new Id("options must be an object",Id.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const t=e[a],n=void 0===t||o(t,a,e);if(!0!==n)throw new Id("option "+a+" must be "+n,Id.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Id("Unknown option "+a,Id.ERR_BAD_OPTION)}},validators:ip},sp=op.validators;class lp{constructor(e){this.defaults=e,this.interceptors={request:new Zd,response:new Zd}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(ox){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=zf(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&op.assertOptions(n,{silentJSONParsing:sp.transitional(sp.boolean),forcedJSONParsing:sp.transitional(sp.boolean),clarifyTimeoutError:sp.transitional(sp.boolean)},!1),null!=r&&(Dd.isFunction(r)?t.paramsSerializer={serialize:r}:op.assertOptions(r,{encode:sp.function,serialize:sp.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=i&&Dd.merge(i.common,i[t.method]);i&&Dd.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=vf.concat(a,i);const o=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!s){const e=[np.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=o.length;let f=t;for(d=0;d<u;){const e=o[d++],t=o[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{c=np.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return Jd(Nf((e=zf(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Dd.forEach(["delete","get","head","options"],(function(e){lp.prototype[e]=function(t,n){return this.request(zf(n||{},{method:e,url:t,data:(n||{}).data}))}})),Dd.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(zf(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}lp.prototype[e]=t(),lp.prototype[e+"Form"]=t(!0)}));const cp=lp;class up{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new kf(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new up((function(t){e=t})),cancel:e}}}const dp=up;const fp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fp).forEach((e=>{let[t,n]=e;fp[n]=t}));const pp=fp;const hp=function e(t){const n=new cp(t),r=Yu(cp.prototype.request,n);return Dd.extend(r,cp.prototype,n,{allOwnKeys:!0}),Dd.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(zf(t,n))},r}(df);hp.Axios=cp,hp.CanceledError=kf,hp.CancelToken=dp,hp.isCancel=bf,hp.VERSION=rp,hp.toFormData=Kd,hp.AxiosError=Id,hp.Cancel=hp.CanceledError,hp.all=function(e){return Promise.all(e)},hp.spread=function(e){return function(t){return e.apply(null,t)}},hp.isAxiosError=function(e){return Dd.isObject(e)&&!0===e.isAxiosError},hp.mergeConfig=zf,hp.AxiosHeaders=vf,hp.formToJSON=e=>cf(Dd.isHTMLForm(e)?new FormData(e):e),hp.getAdapter=ep,hp.HttpStatusCode=pp,hp.default=hp;const mp=hp,gp=Hu.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`,xp=Hu.div`
  position: relative; /* 상대 위치 설정으로 자연스럽게 배치 */
  //   margin-top: 70px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  object {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,vp=Hu.div`
  position: absolute; /* 절대 위치로 설정하여 Background 위에 배치 */
  top: 30%; /* 원하는 위치에 배치 (예시로 화면의 절반 위치) */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  z-index: 1; /* Background보다 위에 배치 */

  object {
    width: 414px;
    height: 414px;
    flex-shrink: 0;
  }
`,yp=Hu.div`
  position: relative;
  bottom: 65%;
  z-index: 3; /* Som보다 위에 배치 */
  height: 33%;
  border: none;
  border-radius: 10px;

  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0));

  overflow-y: auto; /* 스크롤 */
  display: flex;
  margin: 10px;
  flex-direction: column;
  /* 스크롤바 스타일링 */

  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바 너비 */
    margin-right: 4px; /* 여백 추가 */
    margin-left: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffd7e3; /* 스크롤바 색상 */
    border-radius: 4px; /* 스크롤바 모서리 */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* 트랙 배경 색상 (투명) */
  }
`,bp=Hu(nl.div)`
  display: inline-block;
  padding: 10px 15px;
  margin: 5px 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 30px;
  box-sizing: border-box;
  word-wrap: break-word;
  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.375px;
  word-wrap: break-word;
  word-break: break-all;
`,wp=Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`,kp=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Sp=Hu.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,jp=Hu.div`
  width: 350px;
  height: 55px;
  flex-shrink: 0;
  justify-content: space-between;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  position: absolute;
  margin: 0 auto; /* 중앙 배치 */
  top: 9px;
  padding: 5px 10px;

  left: 50%;
  transform: translateX(-50%); /* 화면 중앙으로 정렬 */

  input {
    flex: 1;
    border: none;
    padding: 10px;
    width: 250px;
    color: #5a5a5a;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }

  p {
    color: #5a5a5a;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.45px;
  }

  button {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px; /* 이미지와 입력칸 사이 여백 추가 */
  }

  img {
    width: 100%;
    height: 100%;
  }
`,Pp=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* 화면 하단에 고정 */
  padding: 20px;
  bottom: 0;
  position: absolute;
  flex-direction: column; /* 푸터 안에서 세로 정렬 */
`,Ep=()=>{const e=Z(),[t,n]=(0,r.useState)(""),[i,a]=(0,r.useState)([]),[o,s]=(0,r.useState)([]),l=(0,r.useRef)(null);let[c,u]=(0,r.useState)(0);(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);const[d,f]=(0,r.useState)(!0);(0,r.useEffect)((()=>{(async()=>{f(!0);try{const e=await mp.get("http://3.35.236.11/api/somtalk");200===e.status&&s(e.data)}catch(e){console.error("\uba54\uc2dc\uc9c0 \ub85c\ub4dc \uc2e4\ud328:",e)}finally{f(!1)}})()}),[]),(0,r.useEffect)((()=>{const e=o.map(((e,t)=>{const n=t%2===0,r=40*Math.random()+30;return{position:{top:60*t+"px",[n?"left":"right"]:`${r}px`},message:o[t].comment}}));a(e)}),[o]),(0,r.useEffect)((()=>{l.current&&(l.current.scrollTop=l.current.scrollHeight)}),[i]);const p=e=>({initial:{y:0},animate:{y:e%2===0?[0,5,0]:[0,-5,0],transition:{duration:5*Math.random()+1,ease:"easeInOut",repeat:1/0}}});return(0,Se.jsxs)(gp,{children:[(0,Se.jsxs)(wp,{children:[(0,Se.jsx)(kp,{children:(0,Se.jsx)("img",{id:"back",src:"./static/images/Backbtn.svg",alt:"back",onClick:()=>{e("/")}})}),(0,Se.jsx)(Sp,{children:"\uc19c\ud1a1"})]}),(0,Se.jsx)(xp,{children:(0,Se.jsx)("object",{data:"./static/images/TalkBack.svg",alt:"background"})}),(0,Se.jsx)(vp,{children:(0,Se.jsx)("object",{data:"./static/images/Cotton.svg",alt:"\uc19c\uc19c"})}),(0,Se.jsx)(yp,{ref:l,children:d?(0,Se.jsx)("div",{children:"\ub85c\ub529 \uc911..."}):i.map(((e,t)=>(0,Se.jsx)(bp,{variants:p(t),initial:{y:0},animate:"animate",style:{position:"absolute",...e.position},children:e.message},t)))}),(0,Se.jsx)("form",{onSubmit:async e=>{if(e.preventDefault(),t)try{var r;const e=null===(r=document.cookie.split("; ").find((e=>e.startsWith("csrftoken="))))||void 0===r?void 0:r.split("=")[1],i=await mp.post("http://3.35.236.11/api/somtalk",{comment:t},{headers:{"X-CSRFToken":e}});201===i.status&&(s((e=>[...e,{comment:i.data.comment}])),n(""))}catch(i){console.error("\ub313\uae00 \uc804\uc1a1\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4:",i)}},children:(0,Se.jsxs)(Pp,{children:[(0,Se.jsx)("object",{data:"./static/images/Footer.svg",alt:"footer"}),(0,Se.jsxs)(jp,{children:[(0,Se.jsx)("input",{value:t,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",type:"text",onChange:e=>{n(e.target.value),u(e.target.value.length)},onInvalid:e=>e.target.setCustomValidity("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),onInput:e=>e.target.setCustomValidity(""),required:!0,maxLength:44}),(0,Se.jsxs)("p",{children:[(0,Se.jsx)("span",{children:c}),(0,Se.jsx)("span",{children:"/44"})]}),(0,Se.jsx)("button",{type:"submit",children:(0,Se.jsx)("img",{src:"./static/images/Sendbtn.svg",alt:"\ubcf4\ub0b4\uae30"})})]})]})})]})},Tp=Hu.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1380px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  overflow: hidden;
`,Cp=Hu.div`
  position: relative; /* 상대 위치 설정으로 자연스럽게 배치 */
  margin-top: -985px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 1041px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,Rp=Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`,Ap=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Np=Hu.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,_p=Hu.div`
  display: flex;
  flex-direction: row;
  width: 390px;
  height: 20px;
  margin-top: 46px;

  #choice1 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 24px;
  }

  #choice2 {
    cursor: pointer;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 63px;
  }

  #choice3 {
    cursor: pointer;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 78px;
  }
`,zp=Hu.div`
  width: 100px;
  height: 1px;
  margin-left: 27px;
  margin-top: -11px;
`,Op=Hu.div`
  width: 182.268px;
  height: 53px;
  flex-shrink: 0;
  margin-left: 110px;
  margin-top: 42px;
`,Bp=Hu.div`
  width: 115px;
  height: 16px;
  margin-left: 100px;
  margin-top: 4px;
  #text {
    color: #f6d1b1;
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`,Lp=Hu.div`
  margin-left: 215px;
  margin-top: -22px;
  .areteum {
    width: 81px;
    height: 22.878px;
    flex-shrink: 0;
  }
`,Dp=Hu.div`
  margin-top: 24px;
  margin-left: 50px;
  .Poster {
    width: 293.279px;
    height: 390.25px;
    flex-shrink: 0;
  }
  position: relative;
  z-index: 99;
`,Vp=Hu.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 14px;
  margin-top: 5px;
  margin-left: 200px;

  #text2 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #text3 {
    cursor: pointer;
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 3px;
    z-index: 99;
  }
`,Fp=Hu.div`
  // width: 328px;
  // height: 228px;
  margin-top: 24px;
  // margin-left: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #text4 {
    color: #fff;
    text-align: center;
    text-shadow: 0px 0px 2px #fff;
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.39px;
  }

  #text5 {
    color: #f6d1b1;
    text-align: center;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #text6 {
    color: #fff;
    text-align: center;
    text-shadow: 0px 0px 2px #fff;
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`,Mp=Hu.div`
  // width: 200px;
  height: 44px;
  margin-top: 39px;
  display: flex;
  justify-content: center;
  align-items: center;

  #text7 {
    color: #f6d1b1;
    text-align: center;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 18.562px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`,Ip=Hu.div`
  width: 149.949px;
  height: 147.537px;
  transform: rotate(-6.638deg);
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */
  margin-top: -130px;
  margin-left: -19px;

  .AreteumBack {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,Up=Hu.div`
  width: 160px;
  height: 40px;
  flex-shrink: 0;
  margin-left: 96px;
  margin-top: 70px;
  .PosterName {
    width: 200px;
    height: 45px;
  }
`,$p=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`,Wp=()=>{const e=Z();(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);return(0,Se.jsxs)(Tp,{children:[(0,Se.jsxs)(Rp,{children:[(0,Se.jsx)(Ap,{children:(0,Se.jsx)("img",{id:"back",src:"./static/images/Backbtn.svg",alt:"back",onClick:()=>{e("/")}})}),(0,Se.jsx)(Np,{children:"\ub9cc\ub4e0\uc774\ub4e4"})]}),(0,Se.jsxs)(_p,{children:[(0,Se.jsx)("div",{id:"choice1",children:"ARETEUM"}),(0,Se.jsx)("div",{id:"choice2",onClick:()=>{e("/Introduce_Management")},children:"\ucd95\uc6b4\uc704"}),(0,Se.jsx)("div",{id:"choice3",onClick:()=>{e("/Introduce_Lion")},children:"\uba4b\uc0ac 12\uae30"})]}),(0,Se.jsx)(zp,{children:(0,Se.jsx)("img",{src:"./static/images/UnderBar.svg",alt:"underbar"})}),(0,Se.jsx)(Op,{children:(0,Se.jsx)("object",{data:"./static/images/PosterName.svg",alt:"poster",className:"PosterName"})}),(0,Se.jsx)(Bp,{children:(0,Se.jsx)("div",{id:"text",children:"\ub3d9\ub355\uc5ec\uc790\ub300\ud559\uad50 2024"})}),(0,Se.jsx)(Lp,{children:(0,Se.jsx)("object",{data:"./static/images/ARETEUMText.svg",alt:"poster",className:"areteum"})}),(0,Se.jsx)(Dp,{children:(0,Se.jsx)("object",{data:"./static/images/Poster.svg",alt:"poster",className:"poster"})}),(0,Se.jsxs)(Vp,{children:[(0,Se.jsx)("div",{id:"text2",children:"instagram"}),(0,Se.jsx)("div",{id:"text3",onClick:()=>{window.open("https://www.instagram.com/ddwu.festival?igsh=MWo3YnFnMTBweWF1ZA==","_blank")},children:"@ddwu.festival"})]}),(0,Se.jsxs)(Fp,{children:[(0,Se.jsxs)("div",{id:"text4",children:["\uc774 \uad11\ud65c\ud55c \uc6b0\uc8fc \uc18d\uc5d0\uc11c",(0,Se.jsx)("br",{}),"\uc6b0\ub9ac\uc758 \uc0b6\uc740 \uc544\uc8fc \uc9e7\uc740 \uc21c\uac04\uc77c\uc9c0 \ubab0\ub77c\ub3c4",(0,Se.jsx)("br",{}),"\ubcf4\uc774\uc9c0 \uc54a\ub294 \uc544\uc8fc \uc791\uc740 \uba3c\uc9c0 \uac19\uc744\uc9c0\ub77c\ub3c4",(0,Se.jsx)("br",{}),"\uadf8\ub7fc\uc5d0\ub3c4 \uc800\ub9c8\ub2e4\uc758 \ube5b\uc744 \ub0b4\uba70 \uc0b4\uc544\uac00\ub294 \uac83"]}),(0,Se.jsx)("br",{})," ",(0,Se.jsx)("br",{}),(0,Se.jsx)("div",{id:"text5",children:"\uae4c\ub9cc \ubc24\uc774 \ub418\uba74 \uc6b0\ub9b0 \ub354 \ube5b\ub0a0 \uac70\uc57c"}),(0,Se.jsxs)("div",{id:"text6",children:["\ubc24\ud558\ub298\uc5d0\uc11c \ud568\uaed8 \ucda4\uc744 \ucd94\uc790",(0,Se.jsx)("br",{}),"\uc6b0\ub9ac\uc758 \ucda4\uc740 \ub610 \ub2e4\ub978 \ube5b\uc774 \ub418\uace0 \uc0c8\ub85c\uc6b4 \uc6b0\uc8fc\ub97c \ub9cc\ub4e4 \uac70\uc57c",(0,Se.jsx)("br",{}),"\uac01\uc790\uc758 \ube5b\uc744 \ubaa8\uc544 \ud568\uaed8 \uadf8\ub9ac\ub294",(0,Se.jsx)("br",{}),"\uc6b0\ub9ac\ub9cc\uc758 \ubd88\uaf43 \ucd95\uc81c.",(0,Se.jsx)("br",{}),"\uc624\ub298 \ubc24 \ub098\uc640 \ud568\uaed8\ud558\uc9c0 \uc54a\uc744\ub798?"]})]}),(0,Se.jsx)(Mp,{children:(0,Se.jsxs)("div",{id:"text7",children:["\uac01\uc790\uc758 \ube5b\uc744 \ubaa8\uc544",(0,Se.jsx)("br",{}),"\ud568\uaed8 \uadf8\ub9ac\ub294 \uc6b0\ub9ac\ub9cc\uc758 \ucd95\uc81c"]})}),(0,Se.jsx)(Ip,{children:(0,Se.jsx)("object",{data:"./static/images/ARETEUMBackImg.svg",alt:"poster",className:"AreteumBack"})}),(0,Se.jsx)(Up,{children:(0,Se.jsx)("object",{data:"./static/images/PosterName.svg",alt:"poster",className:"PosterName"})}),(0,Se.jsx)(Cp,{children:(0,Se.jsx)("img",{src:"./static/images/ARETEUMBack.svg",alt:"background"})}),(0,Se.jsx)($p,{children:(0,Se.jsx)("object",{data:"./static/images/Footer.svg",alt:"poster",className:"Footer"})})]})},Hp=Hu.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1286px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  overflow: hidden;
`,Kp=Hu.div`
  position: relative; /* 상대 위치 설정으로 자연스럽게 배치 */
  margin-top: -885px; /* Header의 높이만큼 띄워줍니다. */
  width: 491px;
  height: 909px;
  flex-shrink: 0;
  z-index: 1; /* 다른 요소들 뒤에 배치 */
  margin-left: -25px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,qp=Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`,Gp=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Yp=Hu.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,Xp=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`,Qp=Hu.div`
  display: flex;
  flex-direction: row;
  width: 390px;
  height: 20px;
  margin-top: 46px;
  #choice1 {
    cursor: pointer;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 24px;
  }

  #choice2 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 63px;
  }

  #choice3 {
    cursor: pointer;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 78px;
  }
`,Jp=Hu.div`
  width: 100px;
  height: 1px;
  margin-left: 176px;
  margin-top: -11px;
`,Zp=Hu.div`
  width: 300px;
  height: 29px;
  margin-left: 50px;
  margin-top: 65px;

  #name {
    color: #fff;
    text-shadow: 0px 0px 4.031px #fff;
    font-family: "Pretendard Variable";
    font-size: 24.185px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`,eh=Hu.div`
  width: 115px;
  height: 16px;
  margin-left: 100px;
  margin-top: 9px;
  #text {
    color: #f6d1b1;
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`,th=Hu.div`
  margin-left: 215px;
  margin-top: -22px;
  #img {
    width: 81px;
    height: 22.878px;
    flex-shrink: 0;
  }
`,nh=Hu.div`
  margin-top: 10px;
  margin-left: 30px;

  object {
    width: 337px;
    height: 320px;
    flex-shrink: 0;
    border-radius: 21.162px;
    box-shadow: 0px 1.094px 10.944px 0px rgba(255, 255, 255, 0.13);
  }
`,rh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 14px;
  margin-top: 10px;
  margin-left: 205px;

  #text2 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    z-index: 5px;
  }

  #text3 {
    cursor: pointer;
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 3px;
    z-index: 99;
  }
`,ih=Hu.div`
  // width: 363px;
  height: 275px;
  margin-top: 50px;
  // margin-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #text4 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #text5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 94px;
    // margin-top: -19px;
  }
  #text6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 32px;
  }

  #text7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -45px;
  }

  #text8 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // margin-left: 55px;
    // margin-top: -18px;
  }

  #text9 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 215px;
    // margin-top: -19px;
  }

  #text10 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 18px;
  }

  #text11 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // margin-left: 145px;
    // margin-top: -19px;
  }

  #text12 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 226px;
    // margin-top: -19px;
  }

  #text13 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -10px;
  }

  #text14 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -37px;
  }

  #text15 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 24px;
  }

  #text16 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // margin-left: -48px;
  }

  #text17 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 274.5px;
    // margin-top: -19px;
  }

  #text18 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 5px;
  }

  #text19 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -10px;
  }

  #text20 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -45px;
  }

  #text21 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 33px;
  }
`,ah=Hu.div`
  width: 160px;
  height: 40px;
  flex-shrink: 0;
  margin-left: 95px;
  margin-top: 85px;
  .PosterName {
    width: 200px;
    height: 45px;
  }
`,oh=()=>{const e=Z();(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);return(0,Se.jsxs)(Hp,{children:[(0,Se.jsxs)(qp,{children:[(0,Se.jsx)(Gp,{children:(0,Se.jsx)("img",{id:"back",src:"./static/images/Backbtn.svg",alt:"back",onClick:()=>{e("/")}})}),(0,Se.jsx)(Yp,{children:"\ub9cc\ub4e0\uc774\ub4e4"})]}),(0,Se.jsxs)(Qp,{children:[(0,Se.jsx)("div",{id:"choice1",onClick:()=>{e("/Introduce_ARETEUM")},children:"ARETEUM"}),(0,Se.jsx)("div",{id:"choice2",children:"\ucd95\uc6b4\uc704"}),(0,Se.jsx)("div",{id:"choice3",onClick:()=>{e("/Introduce_Lion")},children:"\uba4b\uc0ac 12\uae30"})]}),(0,Se.jsx)(Jp,{children:(0,Se.jsx)("img",{src:"./static/images/ManagementUnderbar.svg",alt:"areteum"})}),(0,Se.jsx)(Zp,{children:(0,Se.jsx)("div",{id:"name",children:"\ub3d9\ub355\uc5ec\uc790\ub300\ud559\uad50 \ucd95\uc81c\uc6b4\uc601\uc704\uc6d0\ud68c"})}),(0,Se.jsx)(eh,{children:(0,Se.jsx)("div",{id:"text",children:"\ub3d9\ub355\uc5ec\uc790\ub300\ud559\uad50 2024"})}),(0,Se.jsx)(th,{children:(0,Se.jsx)("object",{data:"./static/images/ARETEUMText.svg",alt:"poster",className:"areteum"})}),(0,Se.jsxs)(nh,{children:[(0,Se.jsx)("div",{className:"clickable-wrapper",children:(0,Se.jsx)("object",{data:"./static/images/FestivalLogo.svg",alt:"logo",className:"object-container",style:{pointerEvents:"none"}})})," "]}),(0,Se.jsxs)(rh,{children:[(0,Se.jsx)("div",{id:"text2",children:"instagram"}),(0,Se.jsx)("div",{id:"text3",onClick:()=>{window.open("https://www.instagram.com/ddwu.festival?igsh=MWo3YnFnMTBweWF1ZA==","_blank")},children:"@ddwu.festival"})]}),(0,Se.jsxs)(ih,{children:[(0,Se.jsxs)("div",{id:"wrap",children:[(0,Se.jsx)("div",{id:"text4",children:"\ucd95\uc81c\uc6b4\uc601\uc704\uc6d0\ud68c"}),(0,Se.jsx)("div",{id:"text5",children:"\ub294 \uc804 \uc7ac\ud559\uc0dd\uc758 \ubcf5\uc9c0 \uc99d\uc9c4\uacfc"})]}),(0,Se.jsx)("div",{id:"text6",children:"\ub2e8\ud569\uc744 \uc704\ud574 \uc124\ub9bd\ub41c \uc815\uc2dd \uae30\uad6c\ub85c,"}),(0,Se.jsxs)("div",{id:"wrap",children:[(0,Se.jsx)("div",{id:"text7",children:"\ub300\ub3d9\uc81c\ub97c \ube44\ub86f\ud55c"}),(0,Se.jsx)("div",{id:"text8",children:"\ubb38\ud654\uc0ac\uc5c5 \uc6b4\uc601 \uc5c5\ubb34\ub97c \ucd1d\uad04"}),(0,Se.jsx)("div",{id:"text9",children:"\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,Se.jsx)("br",{}),(0,Se.jsxs)("div",{id:"wrap",children:[(0,Se.jsx)("div",{id:"text10",children:"2024\ub144\uc758 \uacbd\uc6b0, 4\uc6d4"}),(0,Se.jsx)("div",{id:"text11",children:"\uc624\uc19c\ub3c4\uc19c\ub370\uc774"}),(0,Se.jsx)("div",{id:"text12",children:"\ub85c"})]}),(0,Se.jsxs)("div",{id:"text13",children:[" ","<\ucc30\uce75\ucc30\uce75 \uc0c8\ud559\uae30 \ub300\uc791\uc804! \uce5c\ud574\uc9c0\uae38 \ubc14\ub77c~> \ub97c"]}),(0,Se.jsxs)("div",{id:"text14",children:["\uc9c4\ud589\ud558\uc600\uace0, 6\uc6d4\uc5d0\ub294 <\uc548\ub155 \uaf2c\ub9c8\uc544\uac00\uc528, \uc0dd\uac01\uc774 \ub9ce\uc744 \ub550"," "]}),(0,Se.jsx)("div",{id:"text15",children:"\ub808\ubaa8\ub124\uc774\ub4dc\uc9c0!> \ub97c \uc9c4\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4. "}),(0,Se.jsx)("br",{}),(0,Se.jsxs)("div",{id:"wrap",children:[(0,Se.jsx)("div",{id:"text16",children:"\uc704\uc6d0\uc7a5\ub2e8, \uae30\ud68d\uad6d, \ubb34\ub300\uad6d, \uc0ac\ubb34\uad6d, \ud589\uc0ac\uad6d, \uc81c\uc791\ud64d\ubcf4\uad6d"}),(0,Se.jsx)("div",{id:"text17",children:"\uc73c\ub85c"})]}),(0,Se.jsx)("div",{id:"text18",children:"\uc774\ub8e8\uc5b4\uc9c4 \ucd95\uc81c\uc6b4\uc601\uc704\uc6d0\ud68c\ub294 5\uac1c\uc758 \uad6d\uc11c\uac00 "}),(0,Se.jsx)("div",{id:"text19",children:"\uc0c1\ud638 \ubcf4\uc644, \ud611\ub825\uc744 \ubc14\ud0d5\uc73c\ub85c \ud65c\ub3d9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. "}),(0,Se.jsxs)("div",{id:"text20",children:[" ","34\uba85\uc758 \uad6d\uc6d0\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba70 \ud604\uc7ac 16\uba85\uc758 \uad6c\uc131\uc6d0\uc774 4"]}),(0,Se.jsx)("div",{id:"text21",children:"\uae30 \uad6d\uc6d0\uc73c\ub85c \ud65c\ub3d9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,Se.jsx)(ah,{children:(0,Se.jsx)("object",{data:"./static/images/PosterName.svg",alt:"poster",className:"PosterName"})}),(0,Se.jsx)(Kp,{children:(0,Se.jsx)("img",{src:"./static/images/ManagementBack.svg",alt:"background"})}),(0,Se.jsx)(Xp,{children:(0,Se.jsx)("object",{data:"./static/images/Footer.svg",alt:"poster",className:"Footer"})})]})},sh=Hu.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 2719px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  overflow: hidden;
`,lh=Hu.div`
  position: relative; /* 상대 위치 설정으로 자연스럽게 배치 */
  margin-top: -2310px; /* Header의 높이만큼 띄워줍니다. */
  margin-left: -10px;
  width: 477px;
  height: 2378px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,ch=Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`,uh=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,dh=Hu.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,fh=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`,ph=Hu.div`
  display: flex;
  flex-direction: row;
  width: 390px;
  height: 20px;
  margin-top: 46px;
  #choice1 {
    cursor: pointer;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 24px;
  }

  #choice2 {
    cursor: pointer;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 63px;
  }

  #choice3 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 78px;
  }
`,hh=Hu.div`
  width: 100px;
  height: 1px;
  margin-left: 301px;
  margin-top: -11px;
`,mh=Hu.div`
  width: 361px;
  height: 30px;
  margin-left: 20px;
  margin-top: 65px;

  #name {
    color: #fff;
    text-shadow: 0px 0px 4.031px #fff;
    font-family: "Pretendard Variable";
    font-size: 24.185px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`,gh=Hu.div`
  width: 115px;
  height: 16px;
  margin-left: 100px;
  margin-top: 9px;
  #text {
    color: #f6d1b1;
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`,xh=Hu.div`
  margin-left: 215px;
  margin-top: -22px;
  .Areteum {
    width: 81px;
    height: 22.878px;
    flex-shrink: 0;
  }
`,vh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 33px;
  margin-left: 125px;
  margin-top: 30px;

  .likeLion {
    width: 112.862px;
    height: 13.1px;
    flex-shrink: 0;
  }

  .lionLogo {
    width: 32.246px;
    height: 32.246px;
    flex-shrink: 0;
    margin-left: 4px;
    margin-top: -8px;
  }
`,yh=Hu.div`
  margin-left: 10px;
  z-index: 99;
  .lion {
    width: 310.456px;
    height: 209.6px;
    flex-shrink: 0;
    border-radius: 19.65px;
    margin-left: 30px;
    margin-top: 5px;
    z-index: 99;
  }
`,bh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 14px;
  margin-top: 6px;
  margin-left: 187px;
  #text2 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #text3 {
    cursor: pointer;
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 3px;
    z-index: 3;
  }
`,wh=Hu.div`
  // width: 350px;
  height: 228px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // margin-left: 63px;
  #wrap {
    display: flex;
    align-items: center;
  }

  #text4 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    margin-right: 3px;
  }
  #text5 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // margin-left: 70px;
    // margin-top: -20.7px;
  }

  #text6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 164px;
    // margin-top: -20.3px;
  }

  #text7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 34px;
  }

  #text8 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 42px;
  }

  #text9 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 7px;
  }

  #text10 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 3px;
    // margin-left: -31px;
    // margin-top: 2px;
  }

  #text11 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-top: -20px;
    // margin-left: -1px;
  }

  #text12 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 1.5px;
    // margin-left: -20px;
  }

  #text13 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 200px;
    // margin-top: -20px;
  }

  #text14 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 35px;
  }

  #text15 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 62px;
  }

  #text16 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 35px;
  }
`,kh=Hu.div`
  width: 74px;
  height: 74px;
  margin-left: 155px;
  margin-top: 10px;

  .somsom {
    width: 74px;
    height: 74px;
    flex-shrink: 0;
  }
`,Sh=Hu.div`
  width: 144px;
  height: 22px;
  color: #f6d1b1;
  text-align: center;
  text-shadow: 0px 0px 2.015px #fff;
  font-family: "Pretendard Variable";
  font-size: 18.138px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 117px;
`,jh=Hu.div`
  width: 111px;
  height: 120px;
  margin-left: 135px;
  margin-top: px;

  .PDBack {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
  }
`,Ph=Hu.div`
  width: 64px;
  height: 34px;
  margin-left: 159px;
  margin-top: -25px;
  #pd1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major1 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Eh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .PDBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .PDBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .PDBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .PDBack5 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`,Th=Hu.div`
  display: flex;
  flex-direction: row;
  width: 380px;
  height: 34px;
  margin-left: 10px;
  margin-top: -25px;
  #pd2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 12px;
  }

  #major2 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #pd3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 12px;
  }

  #major3 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #pd4 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 32px;
  }

  #major4 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #pd5 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 28px;
  }

  #major5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Ch=Hu.div`
  width: 74px;
  height: 74px;
  margin-left: 160px;
  margin-top: 50px;

  .somsom2 {
    width: 74px;
    height: 74px;
    flex-shrink: 0;
  }
`,Rh=Hu.div`
  width: 144px;
  height: 22px;
  color: #f6d1b1;
  text-align: center;
  text-shadow: 0px 0px 2.015px #fff;
  font-family: "Pretendard Variable";
  font-size: 18.138px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 122px;
`,Ah=Hu.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 47px;
  .FrontBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`,Nh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 34px;
  margin-left: 85px;
  margin-top: -25px;
  #frontT {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major1 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #frontT2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major2 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #frontT3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major3 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,_h=Hu.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .FrontBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`,zh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 380px;
  height: 34px;
  margin-left: 10px;
  margin-top: -25px;
  #babyfront1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 7px;
  }

  #major4 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 29px;
  }

  #major5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 53px;
  }

  #major6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront4 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 37px;
  }

  #major7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Oh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .FrontBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`,Bh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 420px;
  height: 34px;
  margin-left: 5px;
  margin-top: -25px;
  #babyfront5 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront6 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 17px;
  }

  #major6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront7 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 36px;
  }

  #major7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront8 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 17px;
  }

  #major8 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Lh=Hu.div`
  width: 74px;
  height: 74px;
  margin-left: 160px;
  margin-top: 50px;

  .somsom2 {
    width: 74px;
    height: 74px;
    flex-shrink: 0;
  }
`,Dh=Hu.div`
  width: 144px;
  height: 22px;
  color: #f6d1b1;
  text-align: center;
  text-shadow: 0px 0px 2.015px #fff;
  font-family: "Pretendard Variable";
  font-size: 18.138px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 124px;
`,Vh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 110px;
  .BackBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -15px;
  }
`,Fh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 34px;
  margin-left: 127px;
  margin-top: -25px;
  #BackT {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major1 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #BackT2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 58px;
  }

  #major2 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Mh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 49px;
  .BackBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
  }
  .BackBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`,Ih=Hu.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 34px;
  margin-left: 86px;
  margin-top: -25px;
  #BackT3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major3 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #BackT4 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major4 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #BackT5 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Uh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .BackBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`,$h=Hu.div`
  display: flex;
  flex-direction: row;
  width: 420px;
  height: 34px;
  margin-left: 36px;
  margin-top: -25px;
  #babyback1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 48px;
  }

  #major7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major8 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback4 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 53px;
  }

  #major9 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Wh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .BackBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`,Hh=Hu.div`
  display: flex;
  flex-direction: row;
  width: 420px;
  height: 34px;
  margin-left: 42px;
  margin-top: -25px;
  #babyback5 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major10 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback6 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major11 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback7 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major12 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback8 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major13 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Kh=Hu.div`
  width: 160px;
  height: 40px;
  flex-shrink: 0;
  margin-left: 95px;
  margin-top: 75px;
  .PosterName {
    width: 200px;
    height: 45px;
  }
`,qh=()=>{const e=Z();(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);return(0,Se.jsxs)(sh,{children:[(0,Se.jsxs)(ch,{children:[(0,Se.jsx)(uh,{children:(0,Se.jsx)("img",{id:"back",src:"./static/images/Backbtn.svg",alt:"back",onClick:()=>{e("/")}})}),(0,Se.jsx)(dh,{children:"\ub9cc\ub4e0\uc774\ub4e4"})]}),(0,Se.jsxs)(ph,{children:[(0,Se.jsx)("div",{id:"choice1",onClick:()=>{e("/Introduce_ARETEUM")},children:"ARETEUM"}),(0,Se.jsx)("div",{id:"choice2",onClick:()=>{e("/Introduce_Management")},children:"\ucd95\uc6b4\uc704"}),(0,Se.jsx)("div",{id:"choice3",children:"\uba4b\uc0ac 12\uae30"})]}),(0,Se.jsx)(hh,{children:(0,Se.jsx)("img",{src:"./static/images/LionUnderbar.svg",alt:"underbar"})}),(0,Se.jsx)(mh,{children:(0,Se.jsx)("div",{id:"name",children:"\ub3d9\ub355\uc5ec\uc790\ub300\ud559\uad50 \uba4b\uc7c1\uc774\uc0ac\uc790\ucc98\ub7fc 12\uae30"})}),(0,Se.jsx)(gh,{children:(0,Se.jsx)("div",{id:"text",children:"\ub3d9\ub355\uc5ec\uc790\ub300\ud559\uad50 2024"})}),(0,Se.jsx)(xh,{children:(0,Se.jsx)("object",{data:"./static/images/ARETEUMText.svg",alt:"areteum",className:"Areteum"})}),(0,Se.jsxs)(vh,{children:[(0,Se.jsx)("object",{data:"./static/images/LikeLion.svg",alt:"LikeLion",className:"likeLion"}),(0,Se.jsx)("object",{data:"./static/images/LionLogo.svg",alt:"LionLogo",className:"lionLogo"})]}),(0,Se.jsx)(yh,{children:(0,Se.jsx)("object",{data:"./static/images/LionPicture.svg",alt:"Lion",className:"lion"})}),(0,Se.jsxs)(bh,{children:[(0,Se.jsx)("div",{id:"text2",children:"instagram"}),(0,Se.jsx)("div",{id:"text3",onClick:()=>{window.open("https://www.instagram.com/dongduk_likelion?igsh=MWdyMHgzcmJxbHgweA==","_blank")},children:"@dongduk_likelion"})]}),(0,Se.jsxs)(wh,{children:[(0,Se.jsxs)("div",{id:"wrap",children:[(0,Se.jsx)("div",{id:"text4",children:"\uc5f0\ud569\ub3d9\uc544\ub9ac "}),(0,Se.jsx)("div",{id:"text5",children:"\uba4b\uc7c1\uc774\uc0ac\uc790\ucc98\ub7fc"}),(0,Se.jsx)("div",{id:"text6",children:"\uc740 \ud604\uc7ac \uad6d\ub0b4\uc5d0\uc11c"})]}),(0,Se.jsx)("div",{id:"text7",children:"\uac00\uc7a5 \ub9ce\uc740 \ud559\uc0dd\ub4e4\uc774 \ud65c\ub3d9\ud558\uace0 \uc788\ub294"}),(0,Se.jsx)("div",{id:"text8",children:"\ud504\ub85c\uadf8\ub798\ubc0d \uad50\uc721 \ub3d9\uc544\ub9ac\uc785\ub2c8\ub2e4."}),(0,Se.jsx)("br",{}),(0,Se.jsx)("div",{id:"text9",children:"\uc804\uad6d\uc758 \ub300\ud559\uc774 \ud568\uaed8\ud558\ub294 \uc5f0\ud569 \ucf54\ub529\ub3d9\uc544\ub9ac\ub85c"}),(0,Se.jsxs)("div",{id:"wrap",children:[(0,Se.jsx)("div",{id:"text10",children:"\uac01\uc885"}),(0,Se.jsx)("div",{id:"text11",children:"\uc2a4\ud130\ub514\ub97c \ud1b5\ud574 \uc5ec\ub7ec \uc544\uc774\ub514\uc5b4\uc758 \uc2e4\ud604\uc5d0 \ub3c4\uc804\ud569\ub2c8\ub2e4."}),(0,Se.jsx)("br",{})]}),(0,Se.jsxs)("div",{id:"wrap",children:[(0,Se.jsx)("div",{id:"text12",children:'"\ub0b4 \uc544\uc774\ub514\uc5b4\ub97c \ub0b4 \uc190\uc73c\ub85c \uc2e4\ud604\ud55c\ub2e4"'}),(0,Se.jsx)("div",{id:"text13",children:"\ub77c\ub294 \uac00\uce58 \uc544\ub798"})]}),(0,Se.jsx)("div",{id:"text14",children:"\ucc3d\uc5c5\uacfc \uc11c\ube44\uc2a4 \uac1c\ubc1c \ub4f1 \uc544\uc774\ub514\uc5b4\ub97c"}),(0,Se.jsx)("div",{id:"text15",children:"\ub0b4 \uc190\uc73c\ub85c \uc2e4\ud604\ud560 \uc218 \uc788\ub294"}),(0,Se.jsx)("div",{id:"text16",children:"\ub2e4\uc591\ud55c \uad50\uc721\uacfc \uae30\ud68c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."})]}),(0,Se.jsx)(kh,{children:(0,Se.jsx)("object",{data:"./static/images/Somsom.svg",alt:"somsom",className:"somsom"})}),(0,Se.jsx)(Sh,{children:(0,Se.jsx)("div",{id:"pd",children:"PLAN & DESIGN"})}),(0,Se.jsx)(jh,{children:(0,Se.jsx)("object",{data:"./static/images/PDBack.svg",alt:"back",className:"PDBack"})}),(0,Se.jsx)(Ph,{children:(0,Se.jsxs)("div",{id:"pd1",children:["\ubc29\ud61c\uc9c4",(0,Se.jsx)("div",{id:"major1",children:"\ub514\uc9c0\ud138\uacf5\uc608"})]})}),(0,Se.jsxs)(Eh,{children:[(0,Se.jsx)("object",{data:"./static/images/PDBack.svg",alt:"back",className:"PDBack2"}),(0,Se.jsx)("object",{data:"./static/images/PDBack.svg",alt:"back",className:"PDBack3"}),(0,Se.jsx)("object",{data:"./static/images/PDBack.svg",alt:"back",className:"PDBack4"}),(0,Se.jsx)("object",{data:"./static/images/PDBack.svg",alt:"back",className:"PDBack5"})]}),(0,Se.jsxs)(Th,{children:[(0,Se.jsxs)("div",{id:"pd2",children:["\uc724\uc218\uc9c4",(0,Se.jsx)("div",{id:"major2",children:"\ubbf8\ub514\uc5b4\ub514\uc790\uc778"})]}),(0,Se.jsxs)("div",{id:"pd3",children:["\uc804\uc9c0\uc601",(0,Se.jsx)("div",{id:"major3",children:"\ub370\uc774\ud130\uc0ac\uc774\uc5b8\uc2a4"})]}),(0,Se.jsxs)("div",{id:"pd4",children:["\uc815\uc608\uc6d0",(0,Se.jsx)("div",{id:"major4",children:"\uacbd\uc601"})]}),(0,Se.jsxs)("div",{id:"pd5",children:["\uc870\uc815\uc778",(0,Se.jsx)("div",{id:"major5",children:"\ub370\uc774\ud130\uc0ac\uc774\uc5b8\uc2a4"})]})]}),(0,Se.jsx)(Ch,{children:(0,Se.jsx)("object",{data:"./static/images/Somsom.svg",alt:"somsom",className:"somsom2"})}),(0,Se.jsx)(Rh,{children:(0,Se.jsx)("div",{id:"front",children:"FRONT-END"})}),(0,Se.jsxs)(Ah,{children:[(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack1"}),(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack2"}),(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack3"})]}),(0,Se.jsxs)(Nh,{children:[(0,Se.jsxs)("div",{id:"frontT",children:["\ubc15\uc18c\uc815",(0,Se.jsx)("div",{id:"major1",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"frontT2",children:["\ubc15\uc8fc\ud76c",(0,Se.jsx)("div",{id:"major2",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"frontT3",children:["\uc624\uc2b9\uc5f0",(0,Se.jsx)("div",{id:"major3",children:"\ucef4\ud4e8\ud130"})]})]}),(0,Se.jsxs)(_h,{children:[(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack1"}),(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack2"}),(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack3"}),(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack4"})]}),(0,Se.jsxs)(zh,{children:[(0,Se.jsxs)("div",{id:"babyfront1",children:["\uae40\ud558\ud76c",(0,Se.jsx)("div",{id:"major4",children:"\ub370\uc774\ud130\uc0ac\uc774\uc5b8\uc2a4"})]}),(0,Se.jsxs)("div",{id:"babyfront2",children:["\ub0a8\uc9c0\uc5f0",(0,Se.jsx)("div",{id:"major5",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"babyfront3",children:["\uc120\uc9c0\uc624",(0,Se.jsx)("div",{id:"major6",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"babyfront4",children:["\uc784\uc218\uc5f0",(0,Se.jsx)("div",{id:"major7",children:"HCI\uc0ac\uc774\uc5b8\uc2a4"})]})]}),(0,Se.jsxs)(Oh,{children:[(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack1"}),(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack2"}),(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack3"}),(0,Se.jsx)("object",{data:"./static/images/FrontBack.svg",alt:"back",className:"FrontBack4"})]}),(0,Se.jsxs)(Bh,{children:[(0,Se.jsxs)("div",{id:"babyfront5",children:["\uc720\ub2e4\ud604",(0,Se.jsx)("div",{id:"major5",children:"\ucee4\ubba4\ub2c8\ucf00\uc774\uc158\ucf58\ud150\uce20"})]}),(0,Se.jsxs)("div",{id:"babyfront6",children:["\uc724\uc218\uc778",(0,Se.jsx)("div",{id:"major6",children:"\ub3c5\uc77c\uc5b4"})]}),(0,Se.jsxs)("div",{id:"babyfront7",children:["\uc870\ubbfc\uc601",(0,Se.jsx)("div",{id:"major7",children:"\ubb38\ud654\uc608\uc220\uacbd\uc601"})]}),(0,Se.jsxs)("div",{id:"babyfront8",children:["\ud558\uc131\uc5b8",(0,Se.jsx)("div",{id:"major8",children:"HCI\uc0ac\uc774\uc5b8\uc2a4"})]})]}),(0,Se.jsx)(Lh,{children:(0,Se.jsx)("object",{data:"./static/images/Somsom.svg",alt:"somsom",className:"somsom2"})}),(0,Se.jsx)(Dh,{children:(0,Se.jsx)("div",{id:"back",children:"BACK-END"})}),(0,Se.jsxs)(Vh,{children:[(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack1"}),(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack2"})]}),(0,Se.jsxs)(Fh,{children:[(0,Se.jsxs)("div",{id:"BackT",children:["\ub178\uc18c\uc740",(0,Se.jsx)("div",{id:"major1",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"BackT2",children:["\uc774\ucc44\uc5f0",(0,Se.jsx)("div",{id:"major2",children:"\ucef4\ud4e8\ud130"})]})]}),(0,Se.jsxs)(Mh,{children:[(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack1"}),(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack2"}),(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack3"})]}),(0,Se.jsxs)(Ih,{children:[(0,Se.jsxs)("div",{id:"BackT3",children:["\uc7a5\uc6b0\ub9bc",(0,Se.jsx)("div",{id:"major3",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"BackT4",children:["\uc8fc\ud604\uc815",(0,Se.jsx)("div",{id:"major4",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"BackT5",children:["\ud64d\uc131\uc8fc",(0,Se.jsx)("div",{id:"major5",children:"\ucef4\ud4e8\ud130"})]})]}),(0,Se.jsxs)(Uh,{children:[(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack1"}),(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack2"}),(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack3"}),(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack4"})]}),(0,Se.jsxs)($h,{children:[(0,Se.jsxs)("div",{id:"babyback1",children:["\uae40\uac00\ud604",(0,Se.jsx)("div",{id:"major6",children:"\uc815\ubcf4\ud1b5\uacc4"})]}),(0,Se.jsxs)("div",{id:"babyback2",children:["\uae40\ubbfc\uc8fc",(0,Se.jsx)("div",{id:"major7",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"babyback3",children:["\uc1a1\uc608\ub9bc",(0,Se.jsx)("div",{id:"major8",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"babyback4",children:["\uc774\uac00\uc5f0",(0,Se.jsx)("div",{id:"major9",children:"\ucef4\ud4e8\ud130"})]})]}),(0,Se.jsxs)(Wh,{children:[(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack1"}),(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack2"}),(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack3"}),(0,Se.jsx)("object",{data:"./static/images/BackBack.svg",alt:"back",className:"BackBack4"})]}),(0,Se.jsxs)(Hh,{children:[(0,Se.jsxs)("div",{id:"babyback5",children:["\uc7a5\ud558\uc5f0",(0,Se.jsx)("div",{id:"major10",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"babyback6",children:["\uc815\uc138\uc724",(0,Se.jsx)("div",{id:"major11",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"babyback7",children:["\ucd5c\uc720\uc5f0",(0,Se.jsx)("div",{id:"major12",children:"\ucef4\ud4e8\ud130"})]}),(0,Se.jsxs)("div",{id:"babyback8",children:["\ud5c8\ubbfc\uc601",(0,Se.jsx)("div",{id:"major13",children:"\ucef4\ud4e8\ud130"})]})]}),(0,Se.jsx)(Kh,{children:(0,Se.jsx)("object",{data:"./static/images/PosterName.svg",alt:"poster",className:"PosterName"})}),(0,Se.jsx)(lh,{children:(0,Se.jsx)("img",{src:"./static/images/LionBack.svg",alt:"background"})}),(0,Se.jsx)(fh,{children:(0,Se.jsx)("object",{data:"./static/images/Footer.svg",alt:"poster",className:"Footer"})})]})},Gh=qu`
  0% {
    transform: translateY(20px); /* 아래에서 시작 */
    opacity: 0; /* 투명하게 시작 */
  }
  100% {
    transform: translateY(0); /* 제자리로 */
    opacity: 1; /* 서서히 보이게 */
  }
`,Yh=Hu.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 974px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 d*/
  box-sizing: border-box;
  overflow: hidden;
`,Xh=Hu.div`
  position: absolute;
  margin-top: 70px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  object {
    width: 100%;
    //height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,Qh=Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`,Jh=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  z-index: 3;
`,Zh=Hu.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,em=Hu.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  z-index: 1;
`,tm=Hu.div`
  display: flex;
  margin-top: 85px;
  width: 226px;
  white-space: pre-wrap;
  justify-content: space-between;
  z-index: 1;

  img {
    transition: filter 0.3s ease;
    will-change: filter; /* 성능 최적화를 위한 will-change 추가 */
    &.active {
      filter: drop-shadow(0px 0px 20px #fff);
    }
  }
`,nm=Hu.div`
  display: flex;
  justify-content: center;
  width: 277px;
  justify-content: space-between;
  z-index: 1;
  margin-top: 25px;
  margin-bottom: 56px;
`,rm=Hu.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 1;

  #title {
    // padding-left: 25%;
    // padding-bottom: 4px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #line1 {
    width: 110px;
    height: 5px;
    background: #78b2ff;
    flex-shrink: 0;
  }
  #line2 {
    width: 110px;
    height: 5px;
    background: #fffdcd;
    flex-shrink: 0;
  }
`,im=Hu.div`
  display: flex;
  margin-top: 5px;
  width: 4px;
  height: auto;
  min-height: 370px;
  flex-shrink: 0;
  background: rgba(217, 217, 217, 0.5);
  z-index: 3;
`,am=Hu.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 40px;
  // height: auto;
  min-height: 230px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  border-radius: 8px;
  //flex-grow: 1; /* 데이터에 따라 리스트가 유연하게 커짐 */
`,om=Hu.div`
  opacity: 0; /* 초기 상태에서는 보이지 않도록 */
  animation: ${Gh} 0.6s ease forwards;
  animation-delay: ${e=>{let{delay:t}=e;return t||"0s"}}; /* 각 부스의 딜레이 설정 */

  #arrow {
    width: 43px;
    height: 18px;
    flex-shrink: 0;
  }
  #top {
    display: flex;
    text-align: center;
    align-items: center;
    width: 163px;
    gap: 7px;
    ${e=>{let{type:t}=e;return"\ubd80\uc2a4"===t?"justify-content: flex-end;\n        margin-left:8.2px;":"justify-content: flex-start;"}}
  }
  #bottom {
    ${e=>{let{type:t}=e;return"\ubd80\uc2a4"===t?"  margin-right: 20px;":"margin-left: 20px;"}}
    display: flex;
    flex-direction: column;
    width: 150px;
  }
  #wrap {
    ${e=>{let{type:t}=e;return"\ubd80\uc2a4"===t?"  margin-right: 134px;":"margin-left: 155px;"}}
    display: flex;
    flex-direction: column;
    gap: 4.5px;
    text-align: center;
  }
  #time {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #name {
    color: #fff;
    // text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 114.286% */
    letter-spacing: -0.35px;
  }
  #info {
    ${e=>{let{type:t}=e;return"\uacf5\uc5f0"===t?" margin-left:20px; margin-top:8px; width:170px; text-align:start;":""}}
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    white-space: pre-wrap;
  }
`,sm=Hu.div`
  position: absolute;
  top: 530px;
  left: 74%;
  z-index: 2;
`,lm=Hu.div`
  display: flex;
  width: 295px;
  height: 165.75px;
  padding: 13px 19px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;

  border-radius: 15px;
  border: 3px solid #fbefb5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  #title {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #booth {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    // letter-spacing: -0.35px;
  }
`,cm=Hu.footer`
  width: 393px;
  // height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  bottom: 0;
  position: absolute;
`,um=[{name:"<\ub2ec \uace8\uc9dc\uae30 \ud0c0\ub85c \uac00\uac8c>",time:"15:00 - 19:00",info:"(\uc0ac\uc804 \uc608\uc57d\uc81c)",type:"\ubd80\uc2a4",date:"1001"},{name:"\uc8fc\uc810 \ubd80\uc2a4 \uc6b4\uc601",time:"16:00 - 22:00",info:"(\uc77c\ubd80 \uc8fc\uc810 12\uc2dc\ubd80\ud130 \uc6b4\uc601)",type:"\ubd80\uc2a4",date:"1001"},{name:"\ubc84\uc2a4\ud0b9 <\uc19c\uc19c\uc5b4\uac8c\uc778>",time:"19:00 - 21:00",info:"",type:"\uacf5\uc5f0",date:"1001"},{name:"<\ub2ec \uace8\uc9dc\uae30 \ud0c0\ub85c \uac00\uac8c>",time:"15:00 - 19:00",info:"(\uc0ac\uc804 \uc608\uc57d\uc81c)",type:"\ubd80\uc2a4",date:"1002"},{name:"\uc8fc\uc810 \ubd80\uc2a4 \uc6b4\uc601",time:"16:00 - 22:00",info:"(\uc77c\ubd80 \uc8fc\uc810 12\uc2dc\ubd80\ud130 \uc6b4\uc601)",type:"\ubd80\uc2a4",date:"1002"},{name:"\ud559\uc0dd \uacf5\uc5f0",time:"17:30 - 20:10",info:"",type:"\uacf5\uc5f0",date:"1002"},{name:"\uc5f0\uc608\uc778 \uacf5\uc5f0",time:"20:30 - 22:00",info:"- 20:30 ~ 21:00  \uc720\ub2e4\ube48\ubc34\ub4dc\n- 21:20 ~ 22:00   10CM        ",type:"\uacf5\uc5f0",date:"1002"}],dm=()=>{Z();const e=(0,r.useCallback)((()=>{window.history.back()}),[]);(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);const[t,n]=(0,r.useState)(!0),[i,a]=(0,r.useState)(!1),[o,s]=(0,r.useState)("./static/images/TimeTable/TTBack.svg"),[l,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(!0),[f,p]=(0,r.useState)("1001"),[h,m]=(0,r.useState)("\n    \uc19c\uc6d0\uc744 \ub9d0\ud574\ubd10 / \ub3d9\ub355\uc5f0\ud654 <br /> \n    \ud3ec\ud1a0\uc874 '\ube5b\uc758 \uac70\ub9ac, \ube5b\uc758 \uc21c\uac04' <br />\n    \ud3ec\ud1a0\ubd80\uc2a4 RGB \uc2a4\ud29c\ub514\uc624 / \ub180\ub7ec\uc640\uc694 \ub3c4\ub2f4\uc774\ub124\n    <br /> \uc624\ub298 \ubc24\uc740 \uc5ec\uae30 \u2018\ub85c\ud0c0\u2019 / \ubd88\uaf43\ud53c\uc6c0\n    <br />\n    \ub098\ub780 \ub3cc\uc1e0\uc758 \ub9c8\ub2d8 \ud658\uc601\ud68c / \ud654\ud559\uacfc \uc8fc\uc810\n    <br />\n    \ubc24\ud558\ub298\uc744 \uc3d8\ub2e4 / \uad6d\uacbd \uc5c6\ub294 \ubc14(BAR)\n    <br />\n    \ud5e4\uc5b4\uc9c0\uc790\uace0? \ub9c1\ud06c \uc8fc\uc810 \uc774\uc81c \uc2dc\uc791\uc778\ub370?\n  "),[g,x]=(0,r.useState)("370px"),[v,y]=(0,r.useState)("370px"),[b,w]=(0,r.useState)("1000px"),[k,S]=(0,r.useState)("50px"),[j,P]=(0,r.useState)("550px"),E=(0,r.useCallback)((()=>{d(!1),c(!1),setTimeout((()=>{d(!0),c(!0)}),200)}),[]),T=(0,r.useCallback)((()=>{p("1001"),n(!0),a(!1),x("370px"),s("./static/images/TimeTable/TTBack.svg"),y("360px"),S("50px"),P("550px"),E(),w("1000px"),m("\n      \uc19c\uc6d0\uc744 \ub9d0\ud574\ubd10 / \ub3d9\ub355\uc5f0\ud654 <br /> \n      \ud3ec\ud1a0\uc874 '\ube5b\uc758 \uac70\ub9ac, \ube5b\uc758 \uc21c\uac04' <br />\n      \ud3ec\ud1a0\ubd80\uc2a4 RGB \uc2a4\ud29c\ub514\uc624 / \ub180\ub7ec\uc640\uc694 \ub3c4\ub2f4\uc774\ub124\n      <br /> \uc624\ub298 \ubc24\uc740 \uc5ec\uae30 \u2018\ub85c\ud0c0\u2019 / \ubd88\uaf43\ud53c\uc6c0\n      <br />\n      \ub098\ub780 \ub3cc\uc1e0\uc758 \ub9c8\ub2d8 \ud658\uc601\ud68c / \ud654\ud559\uacfc \uc8fc\uc810\n      <br />\n      \ubc24\ud558\ub298\uc744 \uc3d8\ub2e4 / \uad6d\uacbd \uc5c6\ub294 \ubc14(BAR)\n      <br />\n      \ud5e4\uc5b4\uc9c0\uc790\uace0? \ub9c1\ud06c \uc8fc\uc810 \uc774\uc81c \uc2dc\uc791\uc778\ub370?\n    ")}),[E]),C=(0,r.useCallback)((()=>{p("1002"),n(!1),a(!0),x("440px"),s("./static/images/TimeTable/TT1002Back.svg"),y("520px"),S("580px"),P("700px"),E(),w("1150px"),m("\n      \uc19c\uc6d0\uc744 \ub9d0\ud574\ubd10 / \ub3d9\ub355\uc5f0\ud654 (~20\uc2dc) <br /> \n      \ud3ec\ud1a0\uc874 '\ube5b\uc758 \uac70\ub9ac, \ube5b\uc758 \uc21c\uac04' <br />\n      \ud3ec\ud1a0\ubd80\uc2a4 RGB \uc2a4\ud29c\ub514\uc624 / \ub180\ub7ec\uc640\uc694 \ub3c4\ub2f4\uc774\ub124\n      <br /> \uc624\ub298 \ubc24\uc740 \uc5ec\uae30 \u2018\ub85c\ud0c0\u2019 / \ubd88\uaf43\ud53c\uc6c0\n      <br />\n      \ub098\ub780 \ub3cc\uc1e0\uc758 \ub9c8\ub2d8 \ud658\uc601\ud68c / \ud654\ud559\uacfc \uc8fc\uc810\n      <br />\n      \ubc24\ud558\ub298\uc744 \uc3d8\ub2e4 / \uad6d\uacbd \uc5c6\ub294 \ubc14(BAR)\n      <br />\n      \ud5e4\uc5b4\uc9c0\uc790\uace0? \ub9c1\ud06c \uc8fc\uc810 \uc774\uc81c \uc2dc\uc791\uc778\ub370?\n    ")}),[E]),R=(0,r.useMemo)((()=>um.filter((e=>e.date===f))),[f]);return(0,Se.jsxs)(Yh,{style:{height:b},children:[(0,Se.jsxs)(Qh,{children:[(0,Se.jsx)(Jh,{children:(0,Se.jsx)("img",{id:"back",src:"./static/images/Backbtn.svg",alt:"back",onClick:e})}),(0,Se.jsx)(Zh,{children:"\ud0c0\uc784\ud14c\uc774\ube14"})]}),(0,Se.jsx)(Xh,{children:(0,Se.jsx)("object",{data:o,alt:"background"})}),(0,Se.jsxs)(em,{children:[(0,Se.jsxs)(tm,{children:[(0,Se.jsx)("img",{id:"1001",src:"./static/images/TimeTable/"+(t?"Clicked1001.svg":"unClicked1001.svg"),alt:"1001",onClick:T,className:t?"active":""}),(0,Se.jsx)("img",{id:"1002",src:"./static/images/TimeTable/"+(i?"Clicked1002.svg":"unClicked1002.svg"),alt:"1002",onClick:C,className:i?"active":""})]}),(0,Se.jsxs)(nm,{children:[(0,Se.jsxs)(rm,{children:[(0,Se.jsx)("div",{id:"title",children:"\ubd80\uc2a4"}),(0,Se.jsx)("div",{id:"line1"})]}),(0,Se.jsx)(im,{style:{height:v}}),(0,Se.jsxs)(rm,{children:[(0,Se.jsx)("div",{id:"title",children:"\uacf5\uc5f0"}),(0,Se.jsx)("div",{id:"line2"})]}),u&&(0,Se.jsx)(am,{style:{top:g},children:R.map(((e,t)=>(0,Se.jsx)(om,{type:e.type,className:l?"animate":"",delay:.5*t+"s",children:(0,Se.jsxs)("div",{id:"wrap",type:e.type,children:[(0,Se.jsx)("div",{id:"top",type:e.type,children:"\ubd80\uc2a4"===e.type?(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("p",{id:"time",children:e.time}),(0,Se.jsx)("img",{id:"arrow",type:e.type,src:"./static/images/TimeTable/"+("\ubd80\uc2a4"===e.type?"boothArrow.svg":"performanceArrow.svg"),alt:e.name})]}):(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("img",{id:"arrow",type:e.type,src:"./static/images/TimeTable/"+("\ubd80\uc2a4"===e.type?"boothArrow.svg":"performanceArrow.svg"),alt:e.name}),(0,Se.jsx)("p",{id:"time",children:e.time})]})}),(0,Se.jsxs)("div",{id:"bottom",type:e.type,children:[(0,Se.jsx)("p",{id:"name",children:e.name}),(0,Se.jsx)("p",{id:"info",type:e.type,date:e.date,children:e.info})]})]})},t)))})]}),(0,Se.jsx)(sm,{style:{top:j},children:(0,Se.jsx)("object",{id:"somsom",data:"./static/images/TimeTable/SomSom.svg",alt:"somsom"})}),(0,Se.jsxs)(lm,{children:[(0,Se.jsx)("p",{id:"title",children:"12:00 - 22:00 \uc0c1\uc2dc \uc6b4\uc601 \ubd80\uc2a4"}),(0,Se.jsx)("p",{id:"booth",dangerouslySetInnerHTML:{__html:h}})]})]}),(0,Se.jsx)(cm,{style:{paddingTop:k},children:(0,Se.jsx)("object",{data:"./static/images/Footer.svg",alt:"footer"})})]})},fm=qu`
  0% {
    transform: translateY(50px); /* 아래에서 시작 */
    opacity: 0; /* 투명하게 시작 */
  }
  100% {
    transform: translateY(0); /* 제자리로 */
    opacity: 1; /* 서서히 보이게 */
  }
`,pm=Hu.div`
  position: relative;
  diplay: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 393px;
  height: 1113px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  overflow: hidden;
  z-index: 0;
`,hm=Hu.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 1;
  img {
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,mm=Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`,gm=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,xm=Hu.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,vm=Hu.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 16px;
  gap: 90px;
  img {
    z-index: 4;
    transition: filter 0.3s ease;
    will-change: filter;
    &.active {
      filter: drop-shadow(0px 0px 20px #fff);
    }
    cursor: pointer; //
  }
`,ym=Hu.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 26px;
  overflow: hidden; /* 스와이프 시 이미지가 벗어나지 않도록 */

  color: #fffdf0;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,bm=Hu.div`
  z-index: 3;
  display: flex;
  width: 334px;
  height: 253px;
  padding: 24px 24px 24px 24px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #136 0%, #cfd6e0 100%);
  border-radius: 15px;
  img {
    width: 340px;
    height: 225px;
  }
`,wm=Hu.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
`,km=Hu.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  gap: 8.5px;
  margin-top: 18px;
`,Sm=Hu.button`
  cursor: pointer;
  width: 60px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${e=>{if(!e.active)return"#fffdf0";switch(e.id){case"day1":return"#D7D0B8;";case"day2":return"#BFCFC2";case"day3":return"#CDA7BB";case"day4":return"#969AD2";case"day5":return"#7FA7E1";default:return"#fffdf0"}}};
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  color: #0c2557;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,jm=Hu.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`,Pm=Hu.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 334px;
  max-height: 298px;

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);

  margin-top: 20px;
  margin-bottom: 30px;

  padding-top: 17px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 17px;
`,Em=Hu.div`
  position: sticky; /* 고정된 위치로 설정 */
  top: 0; /* 상단에 고정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,Tm=Hu.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: start;
  overflow-y: auto; /* 스크롤 가능하도록 설정 */
  max-height: 500px; /* 스크롤 영역의 높이 설정 */
  scroll-behavior: smooth; /* 스크롤 부드럽게 */
  will-change: transform; /* 브라우저 최적화 */

  #one {
    display: flex;
    gap: 6px;
    align-items: flex-start;
  }
  #wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #num {
    position: absolute;
    z-index: 4;
    color: #fff;
  }
  #name {
    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.375px;
    white-space: pre-line;
  }

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(1, 1, 1, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`,Cm=Hu.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 39px;
    padding: 10px 7px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 30px;
    background: #fbefb5;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    opacity: ${e=>e.isVisible?1:0};
    animation: ${e=>e.isVisible?fm:"none"} 2s
      ease forwards;
  }
`,Rm=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`,Am=[{name:"INFORMATION",num:"1",date1:"1001",date2:"1002"},{name:"\ubd80\uc2a4\uc9c0\uc6d0",num:"1",date1:"1001",date2:"1002"},{name:"\ub2ec \uace8\uc9dc\uae30 \ud0c0\ub85c \uac00\uac8c",num:"1",date1:"1001",date2:"1002"},{name:"\ub3d9\ub355\uc5f0\ud654",num:"1",date1:"1001",date2:"1002"},{name:"\ud55c\uc794\ud558\uc19c \uc6b4\uc601\ubd80\uc2a4",num:"1",date1:"1001",date2:"1002"},{name:"RGB STUDIO (\ud3ec\ud1a0\ubd80\uc2a4)",num:"1",date1:"1001",date2:"1002"},{name:"RGB STUDIO (\ud3ec\ud1a0\ubd80\uc2a4)",num:"1",date1:"1001",date2:"1002"},{name:"\ube5b\uc758 \uac70\ub9ac, \ube5b\uc758 \uc21c\uac04 (\ud3ec\ud1a0\uc874)",num:"1",date1:"1001",date2:"1002"},{name:"\ube5b\uc758 \uac70\ub9ac, \ube5b\uc758 \uc21c\uac04 (\ud3ec\ud1a0\uc874)",num:"1",date1:"1001",date2:"1002"},{name:"\ud0dc\ub989\ub85c\ud0c0\ub799\ud2b8",num:"2",date1:"1001",date2:""},{name:"\ud0dc\ub989\ub85c\ud0c0\ub799\ud2b8",num:"2",date1:"1001",date2:""},{name:"\ud0dc\ub989\ub85c\ud0c0\ub799\ud2b8",num:"2",date1:"1001",date2:""},{name:"\ub3c4\ub2f4\ub3c4\ub2f4",num:"2",date1:"1001",date2:""},{name:"\ub3c4\ub2f4\ub3c4\ub2f4",num:"2",date1:"1001",date2:""},{name:"\ub3c4\ub2f4\ub3c4\ub2f4",num:"2",date1:"1001",date2:""},{name:"\ucd1d\ud559\uc0dd\ud68c \ub098\ub780",num:"2",date1:"1001",date2:""},{name:"\ucd1d\ud559\uc0dd\ud68c \ub098\ub780",num:"2",date1:"1001",date2:""},{name:"\ucd1d\ud559\uc0dd\ud68c \ub098\ub780",num:"2",date1:"1001",date2:""},{name:"\uc544\uc774\uc139",num:"2",date1:"1001",date2:""},{name:"\uc544\uc774\uc139",num:"2",date1:"1001",date2:""},{name:"\uc544\uc774\uc139",num:"2",date1:"1001",date2:""},{name:"\ube44\uc804",num:"2",date1:"",date2:"1002"},{name:"\ube44\uc804",num:"2",date1:"",date2:"1002"},{name:"\ube44\uc804",num:"2",date1:"",date2:"1002"},{name:"\uc778\ubb38\ub300 LINK",num:"2",date1:"",date2:"1002"},{name:"\uc778\ubb38\ub300 LINK",num:"2",date1:"",date2:"1002"},{name:"\uc778\ubb38\ub300 LINK",num:"2",date1:"",date2:"1002"},{name:"\ubb38\uc735\ub300 \ud53c\uc6c0",num:"2",date1:"",date2:"1002"},{name:"\ubb38\uc735\ub300 \ud53c\uc6c0",num:"2",date1:"",date2:"1002"},{name:"\ubb38\uc735\ub300 \ud53c\uc6c0",num:"2",date1:"",date2:"1002"},{name:"\uc751\uc6a9\ud654\ud559\uacfc",num:"2",date1:"",date2:"1002"},{name:"\uc751\uc6a9\ud654\ud559\uacfc",num:"2",date1:"",date2:"1002"},{name:"\uc751\uc6a9\ud654\ud559\uacfc",num:"2",date1:"",date2:"1002"},{name:"\uce94\uce94",num:"3",date1:"1001",date2:"1002"},{name:"CraTNT",num:"3",date1:"1001",date2:"1002"},{name:"\uc624\ub9e4\ubd88\ub9dd",num:"3",date1:"1001",date2:"1002"},{name:"\ud658\uc0c1\uc758 \ubd88\uaf43\uc1fc",num:"3",date1:"1001",date2:"1002"},{name:"\uc19c\uaf43\ub180\uc774",num:"3",date1:"1001",date2:"1002"},{name:"\uc950\ubd88\ub180\uc774",num:"3",date1:"1001",date2:"1002"},{name:"\ub808\ub514\uc5b8\ud2b8",num:"3",date1:"1001",date2:"1002"},{name:"F.W \uc2e0\uc0c1",num:"3",date1:"1001",date2:"1002"},{name:"\ud2f0\ub2c8\uc988",num:"3",date1:"1001",date2:"1002"},{name:"\uc19c\uc774\ub124 \ud3ed\uc8fd\uac00\uac8c",num:"3",date1:"1001",date2:"1002"},{name:"\ubc18\uc9dd\ubc18\uc9dd\uc624\ub791\uc624\ub791",num:"3",date1:"1001",date2:"1002"},{name:"\ucabc\uaf2c\ubbf8\ub728\uac1c",num:"3",date1:"1001",date2:"1002"},{name:"\uc810\ud1a0\uc0c1\uc810",num:"3",date1:"1001",date2:"1002"},{name:"\uc19c\ubd09\ub9c8\ucf13",num:"3",date1:"1001",date2:"1002"},{name:"\uc560\ub2c8\ubbf8\ub2c8",num:"3",date1:"1001",date2:"1002"},{name:"\ud0c4\ub2e4\ucea0\ud37c\uc2a4_\uc81c\ud734\ubd80\uc2a4",num:"4",date1:"1001",date2:"1002"},{name:"\uad7f\uc2a4\ud47c_\ud478\ub4dc\ud2b8\ub7ed\n: \ucd08\ubc25, \uac08\ub9ad\uc0c8\uc6b0\ubd88\ucd08\ubc25, \ub208\uaf43\uce58\uc988\uacc4\ub780\ucd08\ubc25",num:"4",date1:"1001",date2:"1002"},{name:"\uc2a4\uc704\ud2b8\ud37c\ud50c_\ud478\ub4dc\ud2b8\ub7ed\n: \ucee4\ud53c, \uc74c\ub8cc, \ube59\uc218, \ub17c\uc54c\ucf5c\uce75\ud14c\uc77c",num:"4",date1:"1001",date2:"1002"},{name:"\uc6a9\ud478\ub4dc\uce74\n: \uc655\ub2ed\uaf2c\uce58, \uc591\uaf2c\uce58, \uc5fc\ud1b5\uaf2c\uce58",num:"4",date1:"1001",date2:"1002"},{name:"\uc2a4\ud0c0\uce04\ub7ec\uc2a4\n: \uce04\ub7ec\uc2a4, \uc544\uce04, \uc824\ub77c\ub610",num:"4",date1:"1001",date2:"1002"},{name:"\ud53c\uc790\ud038\n: \uc6d0\ud615\ud53c\uc790 3\uc885, 1\uc778\ud53c\uc790 3\uc885",num:"4",date1:"1001",date2:"1002"},{name:"\uc5d0\ud398\uc2a4\ucf00\ubc25\n: \ucf00\ubc25, \ud130\ud0a4\uc544\uc774\uc2a4\ud06c\ub9bc",num:"4",date1:"1001",date2:"1002"},{name:"\uad50\uc9c0\ud3b8\uc9d1\uc704\uc6d0\ud68c \ubaa9\ud654",num:"5",date1:"1001",date2:"1002"},{name:"\uadf9\uc608\uc220\uc5f0\uad6c\ud68c",num:"5",date1:"1001",date2:""},{name:"\uae30\ub3c5\uc5f0\ud569(YWAM,UBF)",num:"5",date1:"1001",date2:"1002"},{name:"\ud0a4\uce58 \uc568\ub9ac",num:"5",date1:"1001",date2:"1002"},{name:"\ub3d9\uadf8\ub77c\ubbf8X\ubaa9\ud654\uc9c0\uae30",num:"5",date1:"",date2:"1002"},{name:"\ub3d9\uadf8\ub77c\ubbf8X\ubaa9\ud654\uc9c0\uae30",num:"5",date1:"",date2:"1002"},{name:"\ube5b\uc758 \ub8e8\ub8e8",num:"5",date1:"1001",date2:"1002"},{name:"\ud0a4\ub77c\ud0a4\ub77c",num:"5",date1:"1001",date2:""},{name:"\ubd95\uc5b4\ube75 \uc0ac\uc9c4\uad00",num:"5",date1:"1001",date2:""},{name:"\uc557! \ud638\uc2e0\uc6a9\ud488 \ud0c0\uc774\uc5b4\ubcf4\ub2e4 \uc2f8\ub2e4!!!",num:"5",date1:"1001",date2:"1002"},{name:"SYNERGY",num:"5",date1:"",date2:"1002"},{name:"\ubb18(\u536f/\u63cf)\ud558\ub2e4!",num:"5",date1:"1001",date2:""},{name:"\uc2a4\ud0e0\ub4dc",num:"5",date1:"1001",date2:""},{name:"0-1inkY",num:"5",date1:"1001",date2:"1002"},{name:"\uc5d1\uc2a4\ud130\uc2dc \uc815\uc0c1\uc601\uc5c5\ud569\ub2c8\ub2e4",num:"5",date1:"1001",date2:"1002"},{name:"\uc601\uc5b4\uacfc \ud559\uc0dd\ud68c",num:"5",date1:"",date2:"1002"},{name:"\ub0b4 \uc0ac\uc8fc\uac00 \uc54c\uace0\ubcf4\ub2c8 \ub85c\ud310 \uc18d \ud669\ub140\ub2d8?!",num:"5",date1:"1001",date2:"1002"},{name:"\xc9clatant(e) (\uc5d0\ub04c\ub77c\ub610)",num:"5",date1:"1001",date2:"1002"},{name:"\ud5a5\uae30\uc5f0\uad6c\uc18c",num:"5",date1:"1001",date2:"1002"},{name:"\uc778\uad8c\uc13c\ud130",num:"5",date1:"",date2:"1002"},{name:"\uae40\ubc25\uc9c0\uc625",num:"5",date1:"1001",date2:""},{name:"\ucf69\ucf69\ub79c\ub4dc",num:"5",date1:"1001",date2:"1002"},{name:"\ud478\ub978\uc790\ub9ac",num:"5",date1:"1001",date2:"1002"},{name:"\uc5d0\ucf54 \ub9ac\ud544 \uc2a4\ud14c\uc774\uc158 with \uc77c\uc0c1\uacf5\uac10 \nX SK LOOKIE_MNM X \ud658\uacbd\uc9c0\uae30",num:"5",date1:"",date2:"1002"}],Nm=()=>{const e=Z(),t=(0,r.useCallback)((()=>{window.history.back()}),[]),n=(0,r.useCallback)((()=>{e("/keyword")}),[e]);(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);const[i,a]=(0,r.useState)(!1),[o,s]=(0,r.useState)(!1),[l,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),[p,h]=(0,r.useState)("\ub0a0\uc9dc \uc120\ud0dd \ud6c4, \uad6c\uc5ed\uc744 \uc120\ud0dd\ud558\uc138\uc694"),[m,g]=(0,r.useState)(""),[x,v]=(0,r.useState)([]),[y,b]=(0,r.useState)(""),w=(0,r.useMemo)((()=>["./static/images/BoothLayout/BoothImg1.svg","./static/images/BoothLayout/BoothImg2.svg"]),[]),[k,S]=(0,r.useState)(0),j=(0,r.useRef)(0),P=(0,r.useCallback)((e=>{const t=e.changedTouches[0].clientX;j.current-t>50?(S((e=>e===w.length-1?0:e+1)),c(!l)):j.current-t<-50&&(S((e=>0===e?w.length-1:e-1)),c(!l))}),[w.length,l]),E=(0,r.useCallback)((()=>{a(!0),s(!1),h("DAY 1"),R("1001",m),A()}),[m]),T=(0,r.useCallback)((()=>{s(!0),a(!1),h("DAY 2"),R("1002",m),A()}),[m]),C=(0,r.useCallback)((e=>{g(e),b(e);R(i?"1001":"1002",e)}),[i,o]),R=(0,r.useCallback)(((e,t)=>{const n=Am.filter((n=>n["date"+("1001"===e?"1":"2")]===e&&n.num===t));v(n)}),[]),A=(0,r.useCallback)((()=>{d(!1),setTimeout((()=>d(!0)),100)}),[]);return(0,r.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(d(!0),e.unobserve(t.target))}))}),{threshold:.1});return f.current&&e.observe(f.current),()=>{f.current&&e.unobserve(f.current)}}),[]),(0,Se.jsxs)(pm,{children:[(0,Se.jsxs)(mm,{children:[(0,Se.jsx)(gm,{children:(0,Se.jsx)("img",{id:"back",src:"./static/images/Backbtn.svg",alt:"back",onClick:t})}),(0,Se.jsx)(xm,{children:"\ubd80\uc2a4\ubc30\uce58\ub3c4"})]}),(0,Se.jsx)(hm,{children:(0,Se.jsx)("object",{data:"./static/images/BoothLayout/BLBack.svg",alt:"background"})}),(0,Se.jsxs)(vm,{children:[(0,Se.jsx)("img",{id:"1001",src:"./static/images/BoothLayout/"+(i?"Clicked1001.svg":"unClicked1001.svg"),alt:"1001",onClick:E,className:i?"active":""}),(0,Se.jsx)("img",{id:"1002",src:"./static/images/BoothLayout/"+(o?"Clicked1002.svg":"unClicked1002.svg"),alt:"1002",onClick:T,className:o?"active":""})]}),(0,Se.jsxs)(ym,{onTouchStart:e=>{j.current=e.touches[0].clientX},onTouchEnd:P,children:[(0,Se.jsx)(bm,{children:(0,Se.jsx)("img",{src:w[k],alt:"boothimg",loading:"lazy"})}),(0,Se.jsx)(wm,{children:l?(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("img",{src:"./static/images/BoothLayout/Location2.svg",alt:"location2"}),(0,Se.jsx)("img",{src:"./static/images/BoothLayout/Location1.svg",alt:"location1"})]}):(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("img",{src:"./static/images/BoothLayout/Location1.svg",alt:"location1"}),(0,Se.jsx)("img",{src:"./static/images/BoothLayout/Location2.svg",alt:"location2"})]})})]}),(0,Se.jsx)(km,{children:["1","2","3","4","5"].map((e=>(0,Se.jsx)(Sm,{id:`day${e}`,active:y===e,onClick:()=>C(e),children:["\ucd95\uc6b4\uc704","\ud55c\uc794\ud558\uc19c","\ucf54\ud2bc\ub9c8\ucf13","\uc81c\ud734/\ud478\ub4dc","\uc77c\ubc18"][e-1]},e)))}),(0,Se.jsx)(jm,{children:(0,Se.jsxs)(Pm,{children:[(0,Se.jsx)(Em,{children:p}),(0,Se.jsx)(Tm,{children:x.map(((e,t)=>(0,Se.jsxs)("div",{id:"one",children:[(0,Se.jsxs)("div",{id:"wrap",children:[(0,Se.jsx)("img",{src:""+("3"===e.num||"4"===e.num?"./static/images/BoothLayout/NumberSmall.svg":"./static/images/BoothLayout/Number.svg"),alt:"num",className:`num-${e.num}`,style:{marginTop:"3"===e.num||"4"===e.num?"4px":"0px",marginLeft:"3"===e.num||"4"===e.num?"6px":"0px",marginRight:"3"===e.num||"4"===e.num?"5px":"0px"}}),"3"!==e.num&&"4"!==e.num&&(0,Se.jsx)("div",{id:"num",children:t+1})]}),(0,Se.jsx)("div",{id:"name",children:e.name})]},t)))})]})}),(0,Se.jsx)(Cm,{ref:f,isVisible:u,children:(0,Se.jsx)("div",{id:"detail",onClick:n,children:"\ubd80\uc2a4 \uc0c1\uc138\uc815\ubcf4"})}),(0,Se.jsx)(Rm,{children:(0,Se.jsx)("object",{data:"./static/images/Footer.svg",alt:"footer"})})]})};function _m(){const e=Z();function t(){e("/timetable")}function n(){e("/boothlayout")}function i(){e("/keyword")}function a(){e("/talk")}function o(){e("/introduce_areteum")}(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);const s={hover:{scale:1.15,transition:{duration:.5}}};return(0,Se.jsx)(Se.Fragment,{children:(0,Se.jsxs)("div",{className:"container",children:[(0,Se.jsx)("div",{className:"main-logo",children:(0,Se.jsx)("object",{data:"./static/images/Main/Main-logo.svg",alt:"logo"})}),(0,Se.jsxs)("div",{children:[(0,Se.jsx)("object",{data:"./static/images/Main/Main-bg.svg",alt:"Main-bg",className:"main-bg"}),(0,Se.jsx)(nl.object,{data:"./static/images/Main/Main-star.svg",alt:"main-star",className:"main-star",initial:{opacity:0},animate:{opacity:[0,1,0]},transition:{duration:2,repeat:1/0,repeatType:"loop",ease:"easeInOut"}})]}),(0,Se.jsxs)("div",{className:"menu",children:[(0,Se.jsxs)("div",{className:"timetable",children:[(0,Se.jsx)(nl.div,{initial:"initial",animate:"animate",transition:{ease:"easeInOut",duration:3,repeat:1/0,repeatType:"loop"},variants:{initial:{y:10},animate:{y:[0,20,0]}},onClick:()=>t(),className:"clickable-wrapper timetable-illur",style:{position:"relative",zIndex:10},children:(0,Se.jsx)("object",{data:"./static/images/Main/TimeTable-illur.svg",alt:"illur",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.div,{whileHover:"hover",variants:s,onClick:()=>t(),className:"clickable-wrapper timetable-btn",style:{position:"relative",zIndex:10},children:(0,Se.jsx)("object",{data:"./static/images/Main/TimeTable-btn.svg",alt:"btn",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.object,{data:"./static/images/Main/TimeTable-som.svg",alt:"som",className:"timetable-som",initial:{rotate:0},animate:{rotate:[0,-5,0,0]},transition:{duration:3,repeat:1/0,repeatType:"loop",ease:"easeInOut"}})]}),(0,Se.jsxs)("div",{className:"booth",children:[(0,Se.jsx)(nl.div,{initial:"initial",animate:"animate",transition:{ease:"easeInOut",duration:5,repeat:1/0,repeatType:"loop"},variants:{initial:{y:20},animate:{y:[0,20,0]}},onClick:()=>n(),className:"clickable-wrapper booth-illur",style:{position:"relative",zIndex:10},children:(0,Se.jsx)("object",{data:"./static/images/Main/Booth-illur.svg",alt:"illur",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.div,{whileHover:"hover",variants:s,onClick:()=>n(),className:"clickable-wrapper booth-btn",style:{position:"relative",zIndex:10},children:(0,Se.jsx)("object",{data:"./static/images/Main/Booth-btn.svg",alt:"btn",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.object,{data:"./static/images/Main/Booth-som.svg",alt:"som",className:"booth-som",initial:{rotate:0,x:0},animate:{rotate:[0,0,0,0],x:[0,20,0,0]},transition:{duration:3,repeat:1/0,repeatType:"loop",ease:"easeInOut"}})]}),(0,Se.jsxs)("div",{className:"intro",children:[(0,Se.jsx)(nl.div,{initial:"initial",animate:"animate",transition:{duration:2.5,repeat:1/0,repeatType:"loop"},variants:{initial:{y:5},animate:{y:[0,20,0]}},onClick:()=>i(),className:"clickable-wrapper intro-illur",style:{position:"relative",zIndex:10},children:(0,Se.jsx)("object",{data:"./static/images/Main/Intro-illur.svg",alt:"illur",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.div,{whileHover:"hover",variants:s,onClick:()=>i(),className:"clickable-wrapper intro-btn",style:{position:"relative",zIndex:10},children:(0,Se.jsx)("object",{data:"./static/images/Main/Intro-btn.svg",alt:"btn",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.object,{data:"./static/images/Main/Intro-som.svg",alt:"som",className:"intro-som",initial:{y:0},animate:{y:[-10,0]},transition:{ease:"easeInOut",repeat:1/0,repeatType:"loop",duration:.4,repeatDelay:1}})]}),(0,Se.jsxs)("div",{className:"talk",children:[(0,Se.jsx)(nl.div,{initial:"initial",animate:"animate",transition:{ease:"easeInOut",duration:2.5,repeat:1/0,repeatType:"loop"},variants:{initial:{y:0},animate:{y:[0,20,0]}},onClick:()=>a(),className:"clickable-wrapper talk-illur",style:{position:"relative",zIndex:0},children:(0,Se.jsx)("object",{data:"./static/images/Main/Talk-illur.svg",alt:"illur",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.div,{whileHover:"hover",variants:s,onClick:()=>a(),className:"clickable-wrapper talk-btn",style:{position:"relative",zIndex:10},children:(0,Se.jsx)("object",{data:"./static/images/Main/Talk-btn.svg",alt:"btn",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.object,{data:"./static/images/Main/Talk-som.svg",alt:"som",className:"talk-som",initial:{rotate:0},animate:{rotate:[0,-5,5,0]},transition:{duration:3,repeat:1/0,repeatType:"loop",ease:"easeInOut"}})]}),(0,Se.jsxs)("div",{className:"people",children:[(0,Se.jsx)(nl.div,{initial:"initial",animate:"animate",transition:{ease:"easeInOut",duration:4,repeat:1/0,repeatType:"loop"},variants:{initial:{y:15},animate:{y:[0,20,0]}},onClick:()=>o(),className:"clickable-wrapper people-illur",style:{position:"relative",zIndex:10},children:(0,Se.jsx)("object",{data:"./static/images/Main/People-illur.svg",alt:"illur",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.div,{whileHover:"hover",variants:s,onClick:()=>o(),className:"clickable-wrapper people-btn",style:{position:"relative",zIndex:10},children:(0,Se.jsx)("object",{data:"./static/images/Main/People-btn.svg",alt:"btn",className:"object-container",style:{pointerEvents:"none"}})}),(0,Se.jsx)(nl.object,{initial:"initial",animate:"animate",transition:{ease:"easeInOut",duration:2,repeat:1/0,repeatType:"loop"},initial:{y:0},animate:{y:[0,-10,0]},data:"./static/images/Main/People-som.svg",alt:"som",className:"people-som"})]})]}),(0,Se.jsx)("div",{className:"footer",children:(0,Se.jsx)("img",{src:"./static/images/Footer.svg",alt:"footer"})})]})})}const zm=Hu.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1129px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`,Om=(Hu.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  //   margin-top: 70px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  img {
    padding-top: 95px;
    // width: 100%;
    // height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`),Bm=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Lm=Hu.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,Dm=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`,Vm=Hu.div`
  position: absolute;
  width: 345px;
  height: 700px;
  border-radius: 20px 20px 10px 10px;
  background: #fff;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 38%;
`,Fm=Hu.div`
  width: 49px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #0c2557;
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 14%;
  color: #0c2557;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-top: 2.5px;
`,Mm=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 17.5%;
  z-index: 1; /* 텍스트가 블러보다 위에 위치 */
  color: #0c2557;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 80%; /* 부모 요소의 너비 설정 */

  /* 블러 효과 추가 (텍스트에는 미적용) */
  &::before {
    content: ""; /* 가상 요소에 내용 없음 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 50%;
    padding: 10px 20px; /* 블러 영역 확장 */
    background-color: #fff4b9;
    filter: blur(15px); /* 블러 효과 */
    z-index: -1; /* 텍스트보다 뒤에 위치 */
    border-radius: 10px; /* 블러 배경의 둥근 모서리 */
  }
`,Im=Hu.div`
  width: 300px;
  height: 227px;
  flex-shrink: 0;
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 30%;

  img {
    width: 100%;
    height: 100%;
  }
`,Um=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 24%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 42%;
  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,$m=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 13.5%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 45%;
  background-image: url("/images/LocationIcon.svg");
  width: 13.993px;
  height: 17px;
  flex-shrink: 0;
`,Wm=Hu.div`
  position: absolute;
  text-align: left; /* 왼쪽 정렬 */
  white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */
  left: 17.5%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 44.4%;
  color: #4e78b4;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,Hm=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 13.5%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 47%;
  background-image: url("/images/ClockIcon.svg");
  width: 14.587px;
  height: 14.587px;
  flex-shrink: 0;
`,Km=Hu.div`
  position: absolute;
  left: 17.5%;
  z-index: 1;
  top: 46.3%;
  color: #4e78b4;
  font-family: 4 "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: left; /* 왼쪽 정렬 */
  white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */

  .time {
    color: #4e78b4;
    font-family: 4 "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left; /* 왼쪽 정렬 */
    white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */
  }
`,qm=Hu.div`
  position: absolute;
  left: 18.5%;
  transform: translateX(-50%); /* 요소 자체는 중앙에 배치 */
  top: 52%;
  z-index: 1; /* Background보다 위에 배치 */
  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left; /* 왼쪽 정렬 */
`,Gm=Hu.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* 요소 자체는 중앙에 배치 */
  top: 54%;
  z-index: 1; /* Background보다 위에 배치 */
  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 줄 간격 */
  width: 100%;
  max-width: 300px; /* 최대 너비 290px */
  text-align: left; /* 텍스트는 왼쪽 정렬 */
  word-wrap: break-word; /* 줄바꿈 처리 */
`,Ym=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 81%;
  width: 278.288px;
  height: 81.552px;
  flex-shrink: 0;
`,Xm=Hu.div``,Qm=()=>{const{id:e}=ee(),[t,n]=(Z(),(0,r.useState)([])),[i,a]=(0,r.useState)("25px");(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);(0,r.useEffect)((()=>{(async()=>{try{const t=await mp.get(`http://3.35.236.11/api/booth-detail/${e}/`);n([t.data]),t.data.name.length>15?a("20px"):a("25px")}catch(t){console.error("\ub370\uc774\ud130 \uac00\uc838\uc624\uae30 \uc2e4\ud328:",t)}})()}),[]);return(0,Se.jsxs)(zm,{children:[(0,Se.jsxs)(Om,{children:[(0,Se.jsx)(Bm,{children:(0,Se.jsx)("img",{id:"back",src:"http://3.35.236.11/static/images/Backbtn.svg",alt:"back",onClick:()=>{window.history.back()}})}),(0,Se.jsx)(Lm,{children:"\ubd80\uc2a4 \uc18c\uac1c"})]}),t.map((e=>{return(0,Se.jsxs)(Xm,{children:[(0,Se.jsx)(Vm,{}),(0,Se.jsx)(Fm,{children:e.category}),(0,Se.jsx)(Mm,{style:{fontSize:i},children:e.name})," ",(0,Se.jsx)(Im,{children:(0,Se.jsx)("img",{src:e.image,alt:"booth image"})}),(0,Se.jsx)(Um,{children:"\ud83d\udce3 \ubd80\uc2a4 \uc6b4\uc601 \uc815\ubcf4"}),(0,Se.jsx)($m,{}),(0,Se.jsx)(Wm,{children:e.place}),(0,Se.jsx)(Hm,{}),(0,Se.jsx)(Km,{children:"day1"===e.date?(0,Se.jsxs)(Se.Fragment,{children:["10/1 (\ud654) ",(0,Se.jsx)("span",{className:"time",children:e.timeDay1})]}):"day2"===e.date?(0,Se.jsxs)(Se.Fragment,{children:["10/2 (\uc218) ",(0,Se.jsx)("span",{className:"time",children:e.timeDay2})]}):"both"===e.date?(0,Se.jsxs)(Se.Fragment,{children:["10/1 (\ud654) ",(0,Se.jsx)("span",{className:"time",children:e.timeDay1}),(0,Se.jsx)("br",{}),"10/2 (\uc218) ",(0,Se.jsx)("span",{className:"time",children:e.timeDay2})]}):e.date}),(0,Se.jsx)(qm,{children:"\ubd80\uc2a4 \uc18c\uac1c"}),(0,Se.jsx)(Gm,{children:(t=e.introduction,t.split("\n").map(((e,t)=>(0,Se.jsxs)("span",{children:[e,(0,Se.jsx)("br",{})]},t))))})]},e.id);var t})),(0,Se.jsx)(Ym,{children:(0,Se.jsx)("object",{data:"http://3.35.236.11/static/images/FooterTextLogo.svg",alt:"footer text logo"})}),(0,Se.jsx)(Dm,{children:(0,Se.jsx)("object",{data:"http://3.35.236.11/static/images/Footer.svg",alt:"footer"})})]})},Jm=Hu.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1129px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`,Zm=(Hu.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  //   margin-top: 70px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  img {
    padding-top: 95px;
    // width: 100%;
    // height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`),eg=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,tg=Hu.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,ng=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`,rg=Hu.div`
  position: absolute;
  width: 345px;
  height: 700px;
  border-radius: 20px 20px 10px 10px;
  background: #fff;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 38%;
`,ig=Hu.div`
  width: 49px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #0c2557;
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 14%;
  color: #0c2557;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-top: 2.5px;
`,ag=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 17.2%;
  z-index: 1; /* 텍스트가 블러보다 위에 위치 */
  color: #0c2557;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  width: 80%;
`,og=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 19.9%;
  z-index: 1; /* 텍스트가 블러보다 위에 위치 */
  color: #4e78b4;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */
`,sg=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 26%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 24.5%;
  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`,lg=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 15.5%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 27.5%;
  background-image: url("/images/LocationIcon.svg");
  width: 13.993px;
  height: 17px;
  flex-shrink: 0;
`,cg=Hu.div`
  position: absolute;
  text-align: left; /* 왼쪽 정렬 */
  white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */
  left: 19.5%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 26.9%;
  color: #4e78b4;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,ug=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 15.5%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 29.5%;
  background-image: url("/images/ClockIcon.svg");
  width: 14.587px;
  height: 14.587px;
  flex-shrink: 0;
`,dg=Hu.div`
  position: absolute;
  left: 19.5%;
  z-index: 1;
  top: 28.8%;
  color: #4e78b4;
  font-family: 4 "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: left; /* 왼쪽 정렬 */
  white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */

  .time {
    color: #4e78b4;
    font-family: 4 "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left; /* 왼쪽 정렬 */
    white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */
  }
`,fg=Hu.div`
  position: absolute;
  left: 50%;
  top: 33.5%;
  z-index: 1;
  width: 303px;
  min-height: 197px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 244, 185, 0.45);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-wrap: break-word;
  white-space: normal;
  transform: translate(-50%, 0);

  .menu-item {
    display: flex;
    flex-direction: column; /* 수직 정렬 */
    width: 100%; /* 가로 폭을 100%로 설정 */
    padding: 5px 0; /* 위 아래 여백 추가 */
  }

  .menutext {
    color: #57160c;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .menuclass {
    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
    padding-bottom: 5px; /* 아래 여백 추가 */
  }

  .name-price {
    display: flex; /* 수평 정렬 */
    justify-content: space-between; /* 양 끝으로 공간 배분 */
    width: 100%; /* 가로 폭을 100%로 설정 */
  }

  .menuname {
    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding-left: 15px;
    text-indent: -7px;
  }

  .price {
    color: #0c2557;
    text-align: right;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px; /* 166.667% */
    padding-right: 10px;
  }

  .group-price {
    color: #0c2557;
    text-align: right;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px; /* 166.667% */
    padding-right: 10px;
  }
`,pg=Hu.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 81%;
  width: 278.288px;
  height: 81.552px;
  flex-shrink: 0;
`,hg=(Hu.div``,()=>{const{id:e}=ee(),[t,n]=(0,r.useState)("25px"),[i,a]=(Z(),(0,r.useState)(null));if((0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,r.useEffect)((()=>{(async()=>{try{const t=await mp.get(`http://3.35.236.11/api/booth-detail/${e}/`);a(t.data),t.data.booth&&t.data.booth.name&&(t.data.booth.name.length>15?n("20px"):n("25px"))}catch(t){console.error("\ub370\uc774\ud130 \uac00\uc838\uc624\uae30 \uc2e4\ud328:",t)}})()}),[]),!i)return(0,Se.jsx)("div",{children:"Loading..."});const{booth:o,menu:s}=i,l=e=>e.split("\n").map(((e,t)=>(0,Se.jsxs)("span",{children:[e,(0,Se.jsx)("br",{})]},t)));return(0,Se.jsxs)(Jm,{children:[(0,Se.jsxs)(Zm,{children:[(0,Se.jsx)(eg,{children:(0,Se.jsx)("img",{id:"back",src:"http://3.35.236.11/static/images/Backbtn.svg",alt:"back",onClick:()=>{window.history.back()}})}),(0,Se.jsx)(tg,{children:"\ubd80\uc2a4 \uc18c\uac1c"})]}),(0,Se.jsx)(rg,{}),(0,Se.jsx)(ig,{children:o.category}),(0,Se.jsx)(ag,{style:{fontSize:t},children:o.name})," ",(0,Se.jsx)(og,{children:o.host}),(0,Se.jsx)(sg,{children:"\ud83d\udce3 \ubd80\uc2a4 \uc6b4\uc601 \uc815\ubcf4"}),(0,Se.jsx)(lg,{}),(0,Se.jsx)(cg,{children:o.place}),(0,Se.jsx)(ug,{}),(0,Se.jsxs)(dg,{children:["day1"===o.date&&(0,Se.jsxs)(Se.Fragment,{children:["10/1 (\ud654) ",(0,Se.jsx)("span",{className:"time",children:o.timeDay1})]}),"day2"===o.date&&(0,Se.jsxs)(Se.Fragment,{children:["10/2 (\uc218) ",(0,Se.jsx)("span",{className:"time",children:o.timeDay2})]}),"both"===o.date&&(0,Se.jsxs)(Se.Fragment,{children:["10/1 (\ud654) ",(0,Se.jsx)("span",{className:"time",children:o.timeDay1}),(0,Se.jsx)("br",{}),"10/2 (\uc218) ",(0,Se.jsx)("span",{className:"time",children:o.timeDay2})]})]}),(0,Se.jsxs)(fg,{children:[(0,Se.jsx)("span",{className:"menutext",children:"\ud83d\udd34 \uba54\ub274"}),s&&s.length>0?Array.isArray(s[0].foodList)?s.map(((e,t)=>(0,Se.jsxs)("div",{className:"menu-group",children:["default"!==e.menuGroup&&(0,Se.jsx)("span",{className:"menuclass",dangerouslySetInnerHTML:{__html:`&lt;${e.menuGroup}&gt;`}}),e.menuGroupPrice&&(0,Se.jsx)("span",{className:"group-price",style:{float:"right"},children:e.menuGroupPrice&&e.menuGroupPrice.toLocaleString()}),e.foodList.map(((e,t)=>(0,Se.jsxs)("div",{className:"name-price",children:[(0,Se.jsxs)("span",{className:"menuname",children:[" ","\u2022 ",l(e.name)]}),e.price&&(0,Se.jsx)("span",{className:"price",children:e.price.toLocaleString()})]},t)))]},t))):s.map(((e,t)=>(0,Se.jsxs)("div",{className:"name-price",children:[(0,Se.jsxs)("span",{className:"menuname",children:["\u2022 ",l(e.name)]}),e.price&&(0,Se.jsx)("span",{className:"price",children:e.price.toLocaleString()})]},t))):(0,Se.jsx)("div",{children:"\uba54\ub274\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),(0,Se.jsx)(pg,{children:(0,Se.jsx)("object",{data:"http://3.35.236.11/static/images/FooterTextLogo.svg",alt:"footer text logo"})}),(0,Se.jsx)(ng,{children:(0,Se.jsx)("object",{data:"http://3.35.236.11/static/images/Footer.svg",alt:"footer"})})]})}),mg=Hu.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`,gg=Hu.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  margin-top: 250px;
  margin-left: 20px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,xg=Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`,vg=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,yg=Hu.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,bg=Hu.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-top: 25px;
  margin-right: 8px;
`,wg=Hu.div`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 27px;
  border-bottom: 1.5px solid white;
  width: 340px;
  padding-bottom: 2px;
`,kg=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`,Sg=Hu.div`
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`,jg=Hu.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  flex-shrink: 0;
  background: none;
`,Pg=Hu.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 380px;
  margin-top: 20px;
  flex-shrink: 0;
  background: none;
`,Eg=Hu.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: -65px;
`,Tg=Hu.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 90px;
  cursor: pointer;
  margin-left: 0px;
`,Cg=Hu.div`
  position: relative;
  color: #0d2557;
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  margin-right: -8px;
  right: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 76.354px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 30px;
  text-align: center;
  background: ${e=>e.isClicked?"#FFF4B9":"#fff"};
  transition: all 0.1s ease;

  /* 클릭 시 주변 블러 효과 */
  box-shadow: ${e=>e.isClicked?"0 0 15px 3px rgba(120, 120, 120, 1)":"none"};
`,Rg=Hu.div`
  position: relative;
  display: flex;
  background: none;
  margin-left: 24px;
  margin-top: -5px;
  flex-shrink: 0;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,Ag=Hu.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 3px;
  height: 460px;
  background: none;
`,Ng=Hu.div`
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5px;
  height: 500px;
  width: 393px;
  overflow-x: auto;
  scrollbar-width: none;
  background-color: none;
  border: none;
`,_g=Hu.div`
  position: relative;
  display: flex;
  margin-left: 25px;
  margin-top: 30px;
  width: 335px;
  height: 105px;
  border-radius: 20px;
  background-color: #fff;
  justify-content: center;
  cursor: pointer;
`,zg=Hu.div`
  display: flex;
  height: 105px;
  width: 215px;
  margin-left: -75px;
  padding-top: 18px;
  flex-shrink: 0;
  background: none;
  color: var(--, #0c2557);
  font-family: "Pretendard Variable";
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`,Og=Hu.div`
  position: absolute;
  display: flex;
  height: 105px;
  width: 112.129px;
  background: none;
  margin-left: -176px;
  margin-top: 60px;
  flex-shrink: 0;
  color: var(--, #0c2557);
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,Bg=Hu.div`
  position: absolute;
  display: flex;
  top: 24px;
  left: 233px;
  width: 80.422px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid var(--, #0c2557);
  background: #0c2456;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
  align-items: center;
  text-align: center;
`,Lg=Hu.div`
  position: absolute;
  display: flex;
  width: 90px;
  top: 60px;
  left: 223px;
  background: none;
  display: flex;
  color: var(--, #0c2557);
  text-align: right;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
`,Dg=Hu.div`
  position: absolute;
  display: flex;
  width: 90px;
  top: 75px;
  left: 223px;
  background: none;
  display: flex;
  color: var(--, #0c2557);
  text-align: right;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
`,Vg=(Hu.div`
  display: inline-flex;
  margin-top: -25px;
  margin-left: 3px;
  height: 40px;
  width: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`,()=>{const e=Z(),[t,n]=(0,r.useState)(null),[i,a]=(0,r.useState)([]),[o,s]=(0,r.useState)(!0),[l,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(null),[f,p]=(0,r.useState)(0),h=async(e,t)=>{try{const n=await mp.get(e,{params:{category:t}});console.log("\uc11c\ubc84 \uc751\ub2f5:",n.data),a(n.data.boothsList),p(n.data.boothsCount)}catch(n){console.error("\ubd80\uc2a4 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uc911 \uc624\ub958 \ubc1c\uc0dd:",n)}};(0,r.useEffect)((()=>{h("http://3.35.236.11/api/booth-day1/",u)}),[]),(0,r.useEffect)((()=>{(o||l)&&u&&h(o?"http://3.35.236.11/api/booth-day1/":"http://3.35.236.11/api/booth-day2/",u)}),[u,o,l]);return(0,Se.jsxs)(mg,{children:[(0,Se.jsxs)(xg,{children:[(0,Se.jsx)(vg,{children:(0,Se.jsx)("img",{id:"back",src:"./static/images/Backbtn.svg",alt:"back",onClick:()=>{e("/")}})}),(0,Se.jsx)(bg,{children:(0,Se.jsx)("img",{id:"search",src:"./static/images/Search.svg",alt:"search",onClick:()=>{e("/search")},style:{position:"relative",right:"10px"}})}),(0,Se.jsx)(yg,{children:"\ubd80\uc2a4 \uc18c\uac1c"})]}),(0,Se.jsx)(gg,{children:(0,Se.jsx)("object",{data:"./static/images/KeyBack2.svg",alt:"background"})}),(0,Se.jsx)("object",{data:"./static/images/C.svg",alt:"LCloud",style:{position:"absolute",top:"105px",left:"0px"}}),(0,Se.jsx)("object",{data:"./static/images/F.svg",alt:"RCluod",style:{position:"absolute",top:"230px",right:"0px"}}),(0,Se.jsx)("object",{data:"./static/images/G.svg",alt:"PBouble",style:{position:"absolute",top:"170px",left:"0px"}}),(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"R1Star",style:{position:"absolute",top:"80px",right:"43px"}}),(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"Up2Star",style:{position:"absolute",top:"110px",left:"30px",width:"40px"}}),(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"Up1Star",style:{position:"absolute",top:"78px",left:"0px",width:"65px"}}),(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"Under3Star",style:{position:"absolute",top:"300px",left:"0px"}}),(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"Under2Star",style:{position:"absolute",top:"285px",right:"80px"}}),(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"Under1Star",style:{position:"absolute",top:"260px",right:"50px",width:"50px"}}),(0,Se.jsx)("object",{data:"./static/images/A.svg",alt:"YBouble",style:{position:"absolute",top:"90px",right:"0px",width:"70px"}}),(0,Se.jsx)(jg,{children:(0,Se.jsxs)(Eg,{children:[(0,Se.jsx)(Sg,{children:(0,Se.jsx)(Tg,{onClick:()=>{s(!0),c(!1),h("http://3.35.236.11/api/booth-day1/",u)},$isClicked:o?1:0,style:{marginLeft:"-25px"},children:(0,Se.jsx)("img",{src:"./static/images/"+(o?"Date11.svg":"Date1.svg"),alt:"Date 1"})})}),(0,Se.jsx)(Sg,{children:(0,Se.jsx)(Tg,{onClick:()=>{s(!1),c(!0),h("http://3.35.236.11/api/booth-day2/",u)},$isClicked:l?1:0,style:{marginLeft:"-10px"},children:(0,Se.jsx)("img",{src:"./static/images/"+(l?"Date22.svg":"Date2.svg"),alt:"Date 2"})})})]})}),(0,Se.jsx)(Pg,{children:(0,Se.jsx)(Eg,{children:["\uccb4\ud5d8","\ub9c8\ucf13","\ud55c\uc794\ud558\uc19c","\ud478\ub4dc\ud2b8\ub7ed"].map(((e,r)=>(0,Se.jsx)(Sg,{children:(0,Se.jsx)(Cg,{onClick:()=>((e,t)=>{n(e),d(t),o?h("http://3.35.236.11/api/booth-day1/",t):l&&h("http://3.35.236.11/api/booth-day2/",t)})(r,e),isClicked:t===r?1:0,children:(0,Se.jsx)("div",{style:{fontWeight:"bold",fontSize:"13px"},children:e})})},r)))})}),(0,Se.jsx)(wg,{children:(0,Se.jsx)("div",{})}),(0,Se.jsxs)(Ag,{children:[(0,Se.jsx)(Rg,{children:f>0?`\ucd1d ${f}\uac1c\uc758 \ubd80\uc2a4`:""}),(0,Se.jsx)(Ng,{children:i.map((t=>{const n=10===t.id,r=27===t.id,i=35===t.id||38===t.id||39===t.id;return(0,Se.jsxs)(_g,{onClick:()=>(t=>{e(t>=1&&t<=8||t>=40&&t<=45?`/foodbooth/${t}`:`/generalbooth/${t}`)})(t.id),children:[(0,Se.jsx)(zg,{style:{fontSize:n?"17px":t.name.length>15?"13px":"17px",marginTop:n?"1px":t.name.length>15?"6px":"3.3px",width:r?"205px":"215px",marginLeft:r?"-82px":"-75px"},children:t.name}),(0,Se.jsx)(Og,{children:"\uc6b4\uc601\uc2dc\uac04"}),(0,Se.jsx)(Bg,{children:t.place}),(0,Se.jsx)("br",{}),(0,Se.jsx)(Lg,{style:{left:i?"207px":"223px"},children:t.timeDay1||""}),i?null:t.timeDay2?(0,Se.jsx)(Dg,{style:{marginTop:t.timeDay1?"0":"-15px"},children:t.timeDay2}):null]},t.id)}))})]}),(0,Se.jsx)(kg,{children:(0,Se.jsx)("object",{data:"./static/images/Footer.svg",alt:"footer"})})]})}),Fg=Hu.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`,Mg=Hu.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  margin-top: 225px;
  margin-left: 20px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`,Ig=Hu.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`,Ug=Hu.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,$g=Hu.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,Wg=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`,Hg=Hu.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  top: 30px;
  position: absolute;
`,Kg=Hu.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 25px 28px;
  justify-content: center;
  width: 334px;
  height: 53px;
  flex-shrink: 0;
  z-index: 1000;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  input {
    background: none;
    border: none;
    outline: none;
    width: 273px;
    margin-left: 3px;
    color: #000;
    font-family: "Gothic A1";
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  #search {
    cursor: pointer;
  }
`,qg=Hu.div`
  position: relative;
  display: flex;
  background: none;
  margin-left: 24px;
  margin-top: 25px;
  flex-shrink: 0;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,Gg=Hu.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0px;
  margin-left: 3px;
  height: 600px;
  background: none;
`,Yg=Hu.div`
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5px;
  height: 500px;
  width: 393px;
  overflow-x: auto;
  scrollbar-width: none;
  background-color: none;
  border: none;
`,Xg=Hu.div`
  position: relative;
  display: flex;
  margin-left: 25px;
  margin-top: 30px;
  width: 335px;
  height: 105px;
  border-radius: 20px;
  background-color: #fff;
  justify-content: center;
  cursor: pointer;
`,Qg=Hu.div`
  display: flex;
  height: 105px;
  width: 215px;
  margin-left: -75px;
  padding-top: 18px;
  flex-shrink: 0;
  background: none;
  color: var(--, #0c2557);
  font-family: "Pretendard Variable";
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`,Jg=Hu.div`
  position: absolute;
  display: flex;
  height: 105px;
  width: 112.129px;
  background: none;
  margin-left: -176px;
  margin-top: 60px;
  flex-shrink: 0;
  color: var(--, #0c2557);
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,Zg=Hu.div`
  position: absolute;
  display: flex;
  top: 24px;
  left: 233px;
  width: 80.422px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid var(--, #0c2557);
  background: #0c2456;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
  align-items: center;
  text-align: center;
`,ex=Hu.div`
  position: absolute;
  display: flex;
  width: 90px;
  top: 60px;
  left: 223px;
  background: none;
  display: flex;
  color: var(--, #0c2557);
  text-align: right;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
`,tx=Hu.div`
  position: absolute;
  display: flex;
  width: 90px;
  top: 75px;
  left: 223px;
  background: none;
  display: flex;
  color: var(--, #0c2557);
  text-align: right;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
`,nx=(Hu.div`
  display: inline-flex;
  margin-top: -25px;
  margin-left: 3px;
  height: 40px;
  width: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`,()=>{const e=Z(),[t,n]=(0,r.useState)([]),[i,a]=(0,r.useState)(""),[o,s]=(0,r.useState)(0),[l,c]=(0,r.useState)(!1),u=mp.create({baseURL:"http://3.35.236.11/api/",headers:{"Content-Type":"application/json"}});(0,r.useEffect)((()=>{(async()=>{try{const e=await u.get("/booth-search/");console.log("\ucd08\uae30 \ub370\uc774\ud130 \uc751\ub2f5:",e.data),n(e.data.results),s(e.data.count)}catch(e){console.error("\ucd08\uae30 \ub370\uc774\ud130 \ub85c\ub4dc \uc911 \uc624\ub958 \ubc1c\uc0dd:",e.message)}})()}),[]);return(0,Se.jsxs)(Fg,{children:[(0,Se.jsxs)(Ig,{children:[(0,Se.jsx)(Ug,{children:(0,Se.jsx)("img",{id:"back",src:"./static/images/Backbtn.svg",alt:"back",onClick:()=>{e(-1)}})}),(0,Se.jsx)($g,{children:"\ubd80\uc2a4 \uac80\uc0c9"})]}),(0,Se.jsx)(Mg,{children:(0,Se.jsx)("object",{data:"./static/images/KeyBack2.svg",alt:"background"})}),(0,Se.jsx)("object",{data:"./static/images/C.svg",alt:"LCloud",style:{position:"absolute",top:"120px",left:"0px",width:"270px"}}),(0,Se.jsx)("object",{data:"./static/images/G.svg",alt:"PBouble",style:{position:"absolute",top:"280px",right:"0px"}}),(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"R1Star",style:{position:"absolute",top:"50px",right:"80px"}}),(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"R1Star",style:{position:"absolute",top:"143px",left:"107px",width:"50px"}}),(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"Under3Star",style:{position:"absolute",top:"300px",left:"0px"}}),(0,Se.jsx)("object",{data:"./static/images/J.svg",alt:"OBouble",style:{position:"absolute",top:"570px",left:" 0px",width:"150px"}}),!l||o>0?(0,Se.jsx)("object",{data:"./static/images/Som.svg",alt:"Som",style:{position:"absolute",top:"380px",left:"60px"}}):null,(0,Se.jsx)("object",{data:"./static/images/E.svg",alt:"E",style:{position:"absolute",top:"200px",right:"20px"}}),(0,Se.jsxs)(Kg,{children:[(0,Se.jsx)("input",{type:"text",placeholder:"\uad00\uc2ec\uc788\ub294 \ubd80\uc2a4\ub97c \uac80\uc0c9\ud574\ubcf4\uc138\uc694.",value:i,onChange:e=>{a(e.target.value)}}),(0,Se.jsx)("img",{id:"search",src:"./static/images/Search2.svg",alt:"\uac80\uc0c9 \ubc84\ud2bc",onClick:async()=>{c(!0);try{const e=await u.get("/booth-search/",{params:{search:i}});console.log("\uc11c\ubc84 \uc751\ub2f5:",e.data),n(e.data.results),s(e.data.count)}catch(e){console.error("\uac80\uc0c9 \uc911 \uc624\ub958 \ubc1c\uc0dd:",e.message)}}})]}),(0,Se.jsxs)(Gg,{children:[(0,Se.jsx)(qg,{children:o>0?`\ucd1d ${o}\uac1c\uc758 \ubd80\uc2a4`:""}),o>0?(0,Se.jsx)(Yg,{children:t.map((t=>{const n=10===t.id,r=27===t.id,i=35===t.id||38===t.id||39===t.id;return(0,Se.jsxs)(Xg,{onClick:()=>(t=>{e(t>=1&&t<=8||t>=40&&t<=45?`/foodbooth/${t}`:`/generalbooth/${t}`)})(t.id),children:[(0,Se.jsx)(Qg,{style:{fontSize:n?"17px":t.name.length>15?"13px":"17px",marginTop:n?"1px":t.name.length>15?"6px":"3.3px",width:r?"205px":"215px",marginLeft:r?"-82px":"-75px"},children:t.name}),(0,Se.jsx)(Jg,{children:"\uc6b4\uc601\uc2dc\uac04"}),(0,Se.jsx)(Zg,{children:t.place}),(0,Se.jsx)("br",{}),(0,Se.jsx)(ex,{style:{left:i?"207px":"223px"},children:t.timeDay1||""}),i?null:t.timeDay2?(0,Se.jsx)(tx,{style:{marginTop:t.timeDay1?"0":"-15px"},children:t.timeDay2}):null]},t.id)}))}):l&&(0,Se.jsx)(Hg,{children:(0,Se.jsx)("object",{data:"./static/images/NoResult.svg",alt:"\uac80\uc0c9 \uacb0\uacfc \uc5c6\uc74c"})})]}),(0,Se.jsx)(Wg,{children:(0,Se.jsx)("object",{data:"./static/images/Footer.svg",alt:"footer"})})]})});function rx(){const e=Q(),t={initial:{opacity:0},in:{opacity:1},out:{opacity:0}},n={duration:.3};return(0,Se.jsx)(Fe,{mode:"wait",children:(0,Se.jsxs)(me,{location:e,children:[(0,Se.jsx)(pe,{path:"/talk",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(Ep,{})})}),(0,Se.jsx)(pe,{path:"/introduce_areteum",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(Wp,{})})}),(0,Se.jsx)(pe,{path:"/introduce_management",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(oh,{})})}),(0,Se.jsx)(pe,{path:"/keyword",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(Vg,{})})}),(0,Se.jsx)(pe,{path:"/search",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(nx,{})})}),(0,Se.jsx)(pe,{path:"/introduce_lion",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(qh,{})})}),(0,Se.jsx)(pe,{path:"/timetable",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(dm,{})})}),(0,Se.jsx)(pe,{path:"/boothlayout",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(Nm,{})})}),(0,Se.jsx)(pe,{path:"/generalbooth/:id",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(Qm,{})})}),(0,Se.jsx)(pe,{path:"/foodbooth/:id",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(hg,{})})}),(0,Se.jsx)(pe,{path:"/",element:(0,Se.jsx)(nl.div,{initial:"initial",animate:"in",exit:"out",variants:t,transition:n,children:(0,Se.jsx)(_m,{})})})]},e.pathname)})}const ix=function(){return(0,Se.jsxs)(be,{children:[(0,Se.jsx)(Gu,{}),(0,Se.jsx)(rx,{})]})},ax=document.getElementById("root");(0,a.H)(ax).render((0,Se.jsx)(ix,{}))})()})();
//# sourceMappingURL=main.c96c48c7.js.map
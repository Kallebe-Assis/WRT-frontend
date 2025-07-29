/*! For license information please see main.3249f5dc.js.LICENSE.txt */
(()=>{var e={4:(e,t,r)=>{"use strict";var n=r(853),a=r(43),o=r(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(i(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var T=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var j=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var _=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=_&&e[_]||e["@@iterator"])?e:null}var R=Symbol.for("react.client.reference");function N(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===R?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case v:return"Fragment";case b:return"Profiler";case g:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList";case T:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case h:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return N(e(t))}catch(r){}}return null}var z=Array.isArray,L=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},F=[],I=-1;function D(e){return{current:e}}function U(e){0>I||(e.current=F[I],F[I]=null,I--)}function $(e,t){I++,F[I]=e.current,e.current=t}var B=D(null),H=D(null),W=D(null),V=D(null);function q(e,t){switch($(W,t),$(H,e),$(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=od(t=ad(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(B),$(B,e)}function G(){U(B),U(H),U(W)}function K(e){null!==e.memoizedState&&$(V,e);var t=B.current,r=od(t,e.type);t!==r&&($(H,e),$(B,r))}function Y(e){H.current===e&&(U(B),U(H)),V.current===e&&(U(V),Kd._currentValue=O)}var Q=Object.prototype.hasOwnProperty,X=n.unstable_scheduleCallback,J=n.unstable_cancelCallback,Z=n.unstable_shouldYield,ee=n.unstable_requestPaint,te=n.unstable_now,re=n.unstable_getCurrentPriorityLevel,ne=n.unstable_ImmediatePriority,ae=n.unstable_UserBlockingPriority,oe=n.unstable_NormalPriority,ie=n.unstable_LowPriority,le=n.unstable_IdlePriority,se=n.log,ce=n.unstable_setDisableYieldValue,ue=null,de=null;function fe(e){if("function"===typeof se&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var pe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(me(e)/he|0)|0},me=Math.log,he=Math.LN2;var ve=256,ge=4194304;function be(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ye(e,t,r){var n=e.pendingLanes;if(0===n)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&n;return 0!==l?0!==(n=l&~o)?a=be(n):0!==(i&=l)?a=be(i):r||0!==(r=l&~e)&&(a=be(r)):0!==(l=n&~o)?a=be(l):0!==i?a=be(i):r||0!==(r=n&~e)&&(a=be(r)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(r=t&-t)||32===o&&0!==(4194048&r))?t:a}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ve;return 0===(4194048&(ve<<=1))&&(ve=256),e}function ke(){var e=ge;return 0===(62914560&(ge<<=1))&&(ge=4194304),e}function Ee(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Pe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ce(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-pe(t);e.entangledLanes|=t,e.entanglements[n]=1073741824|e.entanglements[n]|4194090&r}function Te(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-pe(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}function je(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _e(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ae(){var e=M.p;return 0!==e?e:void 0===(e=window.event)?32:uf(e.type)}var Re=Math.random().toString(36).slice(2),Ne="__reactFiber$"+Re,ze="__reactProps$"+Re,Le="__reactContainer$"+Re,Me="__reactEvents$"+Re,Oe="__reactListeners$"+Re,Fe="__reactHandles$"+Re,Ie="__reactResources$"+Re,De="__reactMarker$"+Re;function Ue(e){delete e[Ne],delete e[ze],delete e[Me],delete e[Oe],delete e[Fe]}function $e(e){var t=e[Ne];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Le]||r[Ne]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=yd(e);null!==e;){if(r=e[Ne])return r;e=yd(e)}return t}r=(e=r).parentNode}return null}function Be(e){if(e=e[Ne]||e[Le]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function He(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function We(e){var t=e[Ie];return t||(t=e[Ie]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[De]=!0}var qe=new Set,Ge={};function Ke(e,t){Ye(e,t),Ye(e+"Capture",t)}function Ye(e,t){for(Ge[e]=t,e=0;e<t.length;e++)qe.add(t[e])}var Qe,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,r){if(a=t,Q.call(et,a)||!Q.call(Ze,a)&&(Je.test(a)?et[a]=!0:(Ze[a]=!0,0)))if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var n=t.toLowerCase().slice(0,5);if("data-"!==n&&"aria-"!==n)return void e.removeAttribute(t)}e.setAttribute(t,""+r)}var a}function rt(e,t,r){if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+r)}}function nt(e,t,r,n){if(null===n)e.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(r)}e.setAttributeNS(t,r,""+n)}}function at(e){if(void 0===Qe)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Xe=-1<r.stack.indexOf("\n    at")?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Qe+e+Xe}var ot=!1;function it(e,t){if(!e||ot)return"";ot=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var r=function(){throw Error()};if(Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(r,[])}catch(a){var n=a}Reflect.construct(e,[],r)}else{try{r.call()}catch(o){n=o}e.call(r.prototype)}}else{try{throw Error()}catch(i){n=i}(r=e())&&"function"===typeof r.catch&&r.catch(function(){})}}catch(l){if(l&&n&&"string"===typeof l.stack)return[l.stack,n.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(a=n=0;n<s.length&&!s[n].includes("DetermineComponentFrameRoot");)n++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(n===s.length||a===c.length)for(n=s.length-1,a=c.length-1;1<=n&&0<=a&&s[n]!==c[a];)a--;for(;1<=n&&0<=a;n--,a--)if(s[n]!==c[a]){if(1!==n||1!==a)do{if(n--,0>--a||s[n]!==c[a]){var u="\n"+s[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=n&&0<=a);break}}}finally{ot=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?at(r):""}function lt(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return it(e.type,!1);case 11:return it(e.type.render,!1);case 1:return it(e.type,!0);case 31:return at("Activity");default:return""}}function st(e){try{var t="";do{t+=lt(e),e=e.return}while(e);return t}catch(r){return"\nError generating stack: "+r.message+"\n"+r.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ut(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var mt=/[\n"\\]/g;function ht(e){return e.replace(mt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function vt(e,t,r,n,a,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?bt(e,i,ct(t)):null!=r?bt(e,i,ct(r)):null!=n&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ct(l):e.removeAttribute("name")}function gt(e,t,r,n,a,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=r){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return;r=null!=r?""+ct(r):"",t=null!=t?""+ct(t):r,l||t===e.value||(e.value=t),e.defaultValue=t}n="function"!==typeof(n=null!=n?n:a)&&"symbol"!==typeof n&&!!n,e.checked=l?e.checked:!!n,e.defaultChecked=!!n,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i)}function bt(e,t,r){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function yt(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ct(r),t=null,a=0;a<e.length;a++){if(e[a].value===r)return e[a].selected=!0,void(n&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function xt(e,t,r){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=r)?e.defaultValue=null!=r?""+ct(r):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,r,n){if(null==t){if(null!=n){if(null!=r)throw Error(i(92));if(z(n)){if(1<n.length)throw Error(i(93));n=n[0]}r=n}null==r&&(r=""),t=r}r=ct(t),e.defaultValue=r,(n=e.textContent)===r&&""!==n&&null!==n&&(e.value=n)}function St(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,r){var n=0===t.indexOf("--");null==r||"boolean"===typeof r||""===r?n?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":n?e.setProperty(t,r):"number"!==typeof r||0===r||kt.has(t)?"float"===t?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function Pt(e,t,r){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=r){for(var n in r)!r.hasOwnProperty(n)||null!=t&&t.hasOwnProperty(n)||(0===n.indexOf("--")?e.setProperty(n,""):"float"===n?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&r[a]!==n&&Et(e,a,n)}else for(var o in t)t.hasOwnProperty(o)&&Et(e,o,t[o])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _t(e){return jt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Nt=null,zt=null;function Lt(e){var t=Be(e);if(t&&(e=t.stateNode)){var r=e[ze]||null;e:switch(e=t.stateNode,t.type){case"input":if(vt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=n[ze]||null;if(!a)throw Error(i(90));vt(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<r.length;t++)(n=r[t]).form===e.form&&ft(n)}break e;case"textarea":xt(e,r.value,r.defaultValue);break e;case"select":null!=(t=r.value)&&yt(e,!!r.multiple,t,!1)}}}var Mt=!1;function Ot(e,t,r){if(Mt)return e(t,r);Mt=!0;try{return e(t)}finally{if(Mt=!1,(null!==Nt||null!==zt)&&($c(),Nt&&(t=Nt,e=zt,zt=Nt=null,Lt(t),e)))for(t=0;t<e.length;t++)Lt(e[t])}}function Ft(e,t){var r=e.stateNode;if(null===r)return null;var n=r[ze]||null;if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(i(231,t,typeof r));return r}var It=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Dt=!1;if(It)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch(Lf){Dt=!1}var $t=null,Bt=null,Ht=null;function Wt(){if(Ht)return Ht;var e,t,r=Bt,n=r.length,a="value"in $t?$t.value:$t.textContent,o=a.length;for(e=0;e<n&&r[e]===a[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===a[o-t];t++);return Ht=a.slice(e,1<t?1-t:void 0)}function Vt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Gt(){return!1}function Kt(e){function t(t,r,n,a,o){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?qt:Gt,this.isPropagationStopped=Gt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Yt,Qt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Kt(Jt),er=f({},Jt,{view:0,detail:0}),tr=Kt(er),rr=f({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Yt=e.screenX-Xt.screenX,Qt=e.screenY-Xt.screenY):Qt=Yt=0,Xt=e),Yt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),nr=Kt(rr),ar=Kt(f({},rr,{dataTransfer:0})),or=Kt(f({},er,{relatedTarget:0})),ir=Kt(f({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),lr=Kt(f({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),sr=Kt(f({},Jt,{data:0})),cr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ur={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=dr[e])&&!!t[e]}function pr(){return fr}var mr=Kt(f({},er,{key:function(e){if(e.key){var t=cr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Vt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?ur[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(e){return"keypress"===e.type?Vt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Vt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),hr=Kt(f({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vr=Kt(f({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr})),gr=Kt(f({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),br=Kt(f({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),yr=Kt(f({},Jt,{newState:0,oldState:0})),xr=[9,13,27,32],wr=It&&"CompositionEvent"in window,Sr=null;It&&"documentMode"in document&&(Sr=document.documentMode);var kr=It&&"TextEvent"in window&&!Sr,Er=It&&(!wr||Sr&&8<Sr&&11>=Sr),Pr=String.fromCharCode(32),Cr=!1;function Tr(e,t){switch(e){case"keyup":return-1!==xr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var _r=!1;var Ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Ar[e.type]:"textarea"===t}function Nr(e,t,r,n){Nt?zt?zt.push(n):zt=[n]:Nt=n,0<(t=Wu(t,"onChange")).length&&(r=new Zt("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var zr=null,Lr=null;function Mr(e){Ou(e,0)}function Or(e){if(ft(He(e)))return e}function Fr(e,t){if("change"===e)return t}var Ir=!1;if(It){var Dr;if(It){var Ur="oninput"in document;if(!Ur){var $r=document.createElement("div");$r.setAttribute("oninput","return;"),Ur="function"===typeof $r.oninput}Dr=Ur}else Dr=!1;Ir=Dr&&(!document.documentMode||9<document.documentMode)}function Br(){zr&&(zr.detachEvent("onpropertychange",Hr),Lr=zr=null)}function Hr(e){if("value"===e.propertyName&&Or(Lr)){var t=[];Nr(t,Lr,e,Rt(e)),Ot(Mr,t)}}function Wr(e,t,r){"focusin"===e?(Br(),Lr=r,(zr=t).attachEvent("onpropertychange",Hr)):"focusout"===e&&Br()}function Vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Or(Lr)}function qr(e,t){if("click"===e)return Or(t)}function Gr(e,t){if("input"===e||"change"===e)return Or(t)}var Kr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Yr(e,t){if(Kr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Q.call(t,a)||!Kr(e[a],t[a]))return!1}return!0}function Qr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xr(e,t){var r,n=Qr(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qr(n)}}function Jr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Jr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Zr(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=pt((e=t.contentWindow).document)}return t}function en(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var tn=It&&"documentMode"in document&&11>=document.documentMode,rn=null,nn=null,an=null,on=!1;function ln(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;on||null==rn||rn!==pt(n)||("selectionStart"in(n=rn)&&en(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},an&&Yr(an,n)||(an=n,0<(n=Wu(nn,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=rn)))}function sn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var cn={animationend:sn("Animation","AnimationEnd"),animationiteration:sn("Animation","AnimationIteration"),animationstart:sn("Animation","AnimationStart"),transitionrun:sn("Transition","TransitionRun"),transitionstart:sn("Transition","TransitionStart"),transitioncancel:sn("Transition","TransitionCancel"),transitionend:sn("Transition","TransitionEnd")},un={},dn={};function fn(e){if(un[e])return un[e];if(!cn[e])return e;var t,r=cn[e];for(t in r)if(r.hasOwnProperty(t)&&t in dn)return un[e]=r[t];return e}It&&(dn=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);var pn=fn("animationend"),mn=fn("animationiteration"),hn=fn("animationstart"),vn=fn("transitionrun"),gn=fn("transitionstart"),bn=fn("transitioncancel"),yn=fn("transitionend"),xn=new Map,wn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){xn.set(e,t),Ke(t,[e])}wn.push("scrollEnd");var kn=new WeakMap;function En(e,t){if("object"===typeof e&&null!==e){var r=kn.get(e);return void 0!==r?r:(t={value:e,source:t,stack:st(t)},kn.set(e,t),t)}return{value:e,source:t,stack:st(t)}}var Pn=[],Cn=0,Tn=0;function jn(){for(var e=Cn,t=Tn=Cn=0;t<e;){var r=Pn[t];Pn[t++]=null;var n=Pn[t];Pn[t++]=null;var a=Pn[t];Pn[t++]=null;var o=Pn[t];if(Pn[t++]=null,null!==n&&null!==a){var i=n.pending;null===i?a.next=a:(a.next=i.next,i.next=a),n.pending=a}0!==o&&Nn(r,a,o)}}function _n(e,t,r,n){Pn[Cn++]=e,Pn[Cn++]=t,Pn[Cn++]=r,Pn[Cn++]=n,Tn|=n,e.lanes|=n,null!==(e=e.alternate)&&(e.lanes|=n)}function An(e,t,r,n){return _n(e,t,r,n),zn(e)}function Rn(e,t){return _n(e,null,null,t),zn(e)}function Nn(e,t,r){e.lanes|=r;var n=e.alternate;null!==n&&(n.lanes|=r);for(var a=!1,o=e.return;null!==o;)o.childLanes|=r,null!==(n=o.alternate)&&(n.childLanes|=r),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-pe(r),null===(n=(e=o.hiddenUpdates)[a])?e[a]=[t]:n.push(t),t.lane=536870912|r),o):null}function zn(e){if(50<Nc)throw Nc=0,zc=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Ln={};function Mn(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,t,r,n){return new Mn(e,t,r,n)}function Fn(e){return!(!(e=e.prototype)||!e.isReactComponent)}function In(e,t){var r=e.alternate;return null===r?((r=On(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=65011712&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Dn(e,t){e.flags&=65011714;var r=e.alternate;return null===r?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Un(e,t,r,n,a,o){var l=0;if(n=e,"function"===typeof e)Fn(e)&&(l=1);else if("string"===typeof e)l=function(e,t,r){if(1===r||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,r,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case T:return(e=On(31,r,t,a)).elementType=T,e.lanes=o,e;case v:return $n(r.children,a,o,t);case g:l=8,a|=24;break;case b:return(e=On(12,r,t,2|a)).elementType=b,e.lanes=o,e;case k:return(e=On(13,r,t,a)).elementType=k,e.lanes=o,e;case E:return(e=On(19,r,t,a)).elementType=E,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case y:case w:l=10;break e;case x:l=9;break e;case S:l=11;break e;case P:l=14;break e;case C:l=16,n=null;break e}l=29,r=Error(i(130,null===e?"null":typeof e,"")),n=null}return(t=On(l,r,t,a)).elementType=e,t.type=n,t.lanes=o,t}function $n(e,t,r,n){return(e=On(7,e,n,t)).lanes=r,e}function Bn(e,t,r){return(e=On(6,e,null,t)).lanes=r,e}function Hn(e,t,r){return(t=On(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wn=[],Vn=0,qn=null,Gn=0,Kn=[],Yn=0,Qn=null,Xn=1,Jn="";function Zn(e,t){Wn[Vn++]=Gn,Wn[Vn++]=qn,qn=e,Gn=t}function ea(e,t,r){Kn[Yn++]=Xn,Kn[Yn++]=Jn,Kn[Yn++]=Qn,Qn=e;var n=Xn;e=Jn;var a=32-pe(n)-1;n&=~(1<<a),r+=1;var o=32-pe(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Xn=1<<32-pe(t)+a|r<<a|n,Jn=o+e}else Xn=1<<o|r<<a|n,Jn=e}function ta(e){null!==e.return&&(Zn(e,1),ea(e,1,0))}function ra(e){for(;e===qn;)qn=Wn[--Vn],Wn[Vn]=null,Gn=Wn[--Vn],Wn[Vn]=null;for(;e===Qn;)Qn=Kn[--Yn],Kn[Yn]=null,Jn=Kn[--Yn],Kn[Yn]=null,Xn=Kn[--Yn],Kn[Yn]=null}var na=null,aa=null,oa=!1,ia=null,la=!1,sa=Error(i(519));function ca(e){throw ha(En(Error(i(418,"")),e)),sa}function ua(e){var t=e.stateNode,r=e.type,n=e.memoizedProps;switch(t[Ne]=e,t[ze]=n,r){case"dialog":Fu("cancel",t),Fu("close",t);break;case"iframe":case"object":case"embed":Fu("load",t);break;case"video":case"audio":for(r=0;r<Lu.length;r++)Fu(Lu[r],t);break;case"source":Fu("error",t);break;case"img":case"image":case"link":Fu("error",t),Fu("load",t);break;case"details":Fu("toggle",t);break;case"input":Fu("invalid",t),gt(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),dt(t);break;case"select":Fu("invalid",t);break;case"textarea":Fu("invalid",t),wt(t,n.value,n.defaultValue,n.children),dt(t)}"string"!==typeof(r=n.children)&&"number"!==typeof r&&"bigint"!==typeof r||t.textContent===""+r||!0===n.suppressHydrationWarning||Qu(t.textContent,r)?(null!=n.popover&&(Fu("beforetoggle",t),Fu("toggle",t)),null!=n.onScroll&&Fu("scroll",t),null!=n.onScrollEnd&&Fu("scrollend",t),null!=n.onClick&&(t.onclick=Xu),t=!0):t=!1,t||ca(e)}function da(e){for(na=e.return;na;)switch(na.tag){case 5:case 13:return void(la=!1);case 27:case 3:return void(la=!0);default:na=na.return}}function fa(e){if(e!==na)return!1;if(!oa)return da(e),oa=!0,!1;var t,r=e.tag;if((t=3!==r&&27!==r)&&((t=5===r)&&(t=!("form"!==(t=e.type)&&"button"!==t)||id(e.type,e.memoizedProps)),t=!t),t&&aa&&ca(e),da(e),13===r){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===r){aa=gd(e.nextSibling);break e}r--}else"$"!==t&&"$!"!==t&&"$?"!==t||r++;e=e.nextSibling}aa=null}}else 27===r?(r=aa,pd(e.type)?(e=bd,bd=null,aa=e):aa=r):aa=na?gd(e.stateNode.nextSibling):null;return!0}function pa(){aa=na=null,oa=!1}function ma(){var e=ia;return null!==e&&(null===yc?yc=e:yc.push.apply(yc,e),ia=null),e}function ha(e){null===ia?ia=[e]:ia.push(e)}var va=D(null),ga=null,ba=null;function ya(e,t,r){$(va,t._currentValue),t._currentValue=r}function xa(e){e._currentValue=va.current,U(va)}function wa(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Sa(e,t,r,n){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var l=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=r,null!==(s=o.alternate)&&(s.lanes|=r),wa(o.return,r,e),n||(l=null);break e}o=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=r,null!==(o=l.alternate)&&(o.lanes|=r),wa(l,r,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function ka(e,t,r,n){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=a.type;Kr(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===V.current){if(null===(l=a.alternate))throw Error(i(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Kd):e=[Kd])}a=a.return}null!==e&&Sa(t,e,r,n),t.flags|=262144}function Ea(e){for(e=e.firstContext;null!==e;){if(!Kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){ga=e,ba=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ca(e){return ja(ga,e)}function Ta(e,t){return null===ga&&Pa(e),ja(e,t)}function ja(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},null===ba){if(null===e)throw Error(i(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return r}var _a="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Aa=n.unstable_scheduleCallback,Ra=n.unstable_NormalPriority,Na={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function za(){return{controller:new _a,data:new Map,refCount:0}}function La(e){e.refCount--,0===e.refCount&&Aa(Ra,function(){e.controller.abort()})}var Ma=null,Oa=0,Fa=0,Ia=null;function Da(){if(0===--Oa&&null!==Ma){null!==Ia&&(Ia.status="fulfilled");var e=Ma;Ma=null,Fa=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ua=L.S;L.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ma){var r=Ma=[];Oa=0,Fa=_u(),Ia={status:"pending",value:void 0,then:function(e){r.push(e)}}}Oa++,t.then(Da,Da)}(0,t),null!==Ua&&Ua(e,t)};var $a=D(null);function Ba(){var e=$a.current;return null!==e?e:nc.pooledCache}function Ha(e,t){$($a,null===t?$a.current:t.pool)}function Wa(){var e=Ba();return null===e?null:{parent:Na._currentValue,pool:e}}var Va=Error(i(460)),qa=Error(i(474)),Ga=Error(i(542)),Ka={then:function(){}};function Ya(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Qa(){}function Xa(e,t,r){switch(void 0===(r=e[r])?e.push(t):r!==t&&(t.then(Qa,Qa),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Qa,Qa);else{if(null!==(e=nc)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var r=t;r.status="fulfilled",r.value=e}},function(e){if("pending"===t.status){var r=t;r.status="rejected",r.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e}throw Ja=t,Va}}var Ja=null;function Za(){if(null===Ja)throw Error(i(459));var e=Ja;return Ja=null,e}function eo(e){if(e===Va||e===Ga)throw Error(i(483))}var to=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function no(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ao(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oo(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&rc)){var a=n.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=zn(e),Nn(e,null,r),t}return _n(e,n,t,r),zn(e)}function io(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,Te(e,r)}}function lo(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var a=null,o=null;if(null!==(r=r.firstBaseUpdate)){do{var i={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};null===o?a=o=i:o=o.next=i,r=r.next}while(null!==r);null===o?a=o=t:o=o.next=t}else a=o=t;return r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var so=!1;function co(){if(so){if(null!==Ia)throw Ia}}function uo(e,t,r,n){so=!1;var a=e.updateQueue;to=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,u=c=s=null,l=o;;){var p=-536870913&l.lane,m=p!==l.lane;if(m?(oc&p)===p:(n&p)===p){0!==p&&p===Fa&&(so=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,v=l;p=t;var g=r;switch(v.tag){case 1:if("function"===typeof(h=v.payload)){d=h.call(g,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=v.payload)?h.call(g,d,p):h)||void 0===p)break e;d=f({},d,p);break e;case 2:to=!0}}null!==(p=l.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=a.callbacks)?a.callbacks=[p]:m.push(p))}else m={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=m,s=d):u=u.next=m,i|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(m=l).next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===o&&(a.shared.lanes=0),pc|=i,e.lanes=i,e.memoizedState=d}}function fo(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function po(e,t){var r=e.callbacks;if(null!==r)for(e.callbacks=null,e=0;e<r.length;e++)fo(r[e],t)}var mo=D(null),ho=D(0);function vo(e,t){$(ho,e=dc),$(mo,t),dc=e|t.baseLanes}function go(){$(ho,dc),$(mo,mo.current)}function bo(){dc=ho.current,U(mo),U(ho)}var yo=0,xo=null,wo=null,So=null,ko=!1,Eo=!1,Po=!1,Co=0,To=0,jo=null,_o=0;function Ao(){throw Error(i(321))}function Ro(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Kr(e[r],t[r]))return!1;return!0}function No(e,t,r,n,a,o){return yo=o,xo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=null===e||null===e.memoizedState?qi:Gi,Po=!1,o=r(n,a),Po=!1,Eo&&(o=Lo(t,r,n,a)),zo(e),o}function zo(e){L.H=Vi;var t=null!==wo&&null!==wo.next;if(yo=0,So=wo=xo=null,ko=!1,To=0,jo=null,t)throw Error(i(300));null===e||Tl||null!==(e=e.dependencies)&&Ea(e)&&(Tl=!0)}function Lo(e,t,r,n){xo=e;var a=0;do{if(Eo&&(jo=null),To=0,Eo=!1,25<=a)throw Error(i(301));if(a+=1,So=wo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}L.H=Ki,o=t(r,n)}while(Eo);return o}function Mo(){var e=L.H,t=e.useState()[0];return t="function"===typeof t.then?$o(t):t,e=e.useState()[0],(null!==wo?wo.memoizedState:null)!==e&&(xo.flags|=1024),t}function Oo(){var e=0!==Co;return Co=0,e}function Fo(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Io(e){if(ko){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ko=!1}yo=0,So=wo=xo=null,Eo=!1,To=Co=0,jo=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===So?xo.memoizedState=So=e:So=So.next=e,So}function Uo(){if(null===wo){var e=xo.alternate;e=null!==e?e.memoizedState:null}else e=wo.next;var t=null===So?xo.memoizedState:So.next;if(null!==t)So=t,wo=e;else{if(null===e){if(null===xo.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(wo=e).memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},null===So?xo.memoizedState=So=e:So=So.next=e}return So}function $o(e){var t=To;return To+=1,null===jo&&(jo=[]),e=Xa(jo,e,t),t=xo,null===(null===So?t.memoizedState:So.next)&&(t=t.alternate,L.H=null===t||null===t.memoizedState?qi:Gi),e}function Bo(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return $o(e);if(e.$$typeof===w)return Ca(e)}throw Error(i(438,String(e)))}function Ho(e){var t=null,r=xo.updateQueue;if(null!==r&&(t=r.memoCache),null==t){var n=xo.alternate;null!==n&&(null!==(n=n.updateQueue)&&(null!=(n=n.memoCache)&&(t={data:n.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===r&&(r={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=r),r.memoCache=t,void 0===(r=t.data[t.index]))for(r=t.data[t.index]=Array(e),n=0;n<e;n++)r[n]=j;return t.index++,r}function Wo(e,t){return"function"===typeof t?t(e):t}function Vo(e){return qo(Uo(),wo,e)}function qo(e,t,r){var n=e.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=r;var a=e.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}t.baseQueue=a=o,n.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=l=null,c=null,u=t=a.next,d=!1;do{var f=-536870913&u.lane;if(f!==u.lane?(oc&f)===f:(yo&f)===f){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Fa&&(d=!0);else{if((yo&p)===p){u=u.next,p===Fa&&(d=!0);continue}f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=o):c=c.next=f,xo.lanes|=p,pc|=p}f=u.action,Po&&r(o,f),o=u.hasEagerState?u.eagerState:r(o,f)}else p={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,xo.lanes|=f,pc|=f;u=u.next}while(null!==u&&u!==t);if(null===c?l=o:c.next=s,!Kr(o,e.memoizedState)&&(Tl=!0,d&&null!==(r=Ia)))throw r;e.memoizedState=o,e.baseState=l,e.baseQueue=c,n.lastRenderedState=o}return null===a&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Go(e){var t=Uo(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(null!==a){r.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);Kr(o,t.memoizedState)||(Tl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Ko(e,t,r){var n=xo,a=Uo(),o=oa;if(o){if(void 0===r)throw Error(i(407));r=r()}else r=t();var l=!Kr((wo||a).memoizedState,r);if(l&&(a.memoizedState=r,Tl=!0),a=a.queue,gi(2048,8,Xo.bind(null,n,a,e),[e]),a.getSnapshot!==t||l||null!==So&&1&So.memoizedState.tag){if(n.flags|=2048,mi(9,{destroy:void 0,resource:void 0},Qo.bind(null,n,a,r,t),null),null===nc)throw Error(i(349));o||0!==(124&yo)||Yo(n,t,r)}return r}function Yo(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=xo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Qo(e,t,r,n){t.value=r,t.getSnapshot=n,Jo(t)&&Zo(e)}function Xo(e,t,r){return r(function(){Jo(t)&&Zo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Kr(e,r)}catch(n){return!0}}function Zo(e){var t=Rn(e,2);null!==t&&Oc(t,e,2)}function ei(e){var t=Do();if("function"===typeof e){var r=e;if(e=r(),Po){fe(!0);try{r()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:e},t}function ti(e,t,r,n){return e.baseState=r,qo(e,wo,"function"===typeof n?n:Wo)}function ri(e,t,r,n,a){if(Bi(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==L.T?r(!0):o.isTransition=!1,n(o),null===(r=t.pending)?(o.next=t.pending=o,ni(t,o)):(o.next=r.next,t.pending=r.next=o)}}function ni(e,t){var r=t.action,n=t.payload,a=e.state;if(t.isTransition){var o=L.T,i={};L.T=i;try{var l=r(a,n),s=L.S;null!==s&&s(i,l),ai(e,t,l)}catch(c){ii(e,t,c)}finally{L.T=o}}else try{ai(e,t,o=r(a,n))}catch(u){ii(e,t,u)}}function ai(e,t,r){null!==r&&"object"===typeof r&&"function"===typeof r.then?r.then(function(r){oi(e,t,r)},function(r){return ii(e,t,r)}):oi(e,t,r)}function oi(e,t,r){t.status="fulfilled",t.value=r,li(t),e.state=r,null!==(t=e.pending)&&((r=t.next)===t?e.pending=null:(r=r.next,t.next=r,ni(e,r)))}function ii(e,t,r){var n=e.pending;if(e.pending=null,null!==n){n=n.next;do{t.status="rejected",t.reason=r,li(t),t=t.next}while(t!==n)}e.action=null}function li(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function si(e,t){return t}function ci(e,t){if(oa){var r=nc.formState;if(null!==r){e:{var n=xo;if(oa){if(aa){t:{for(var a=aa,o=la;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=gd(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){aa=gd(a.nextSibling),n="F!"===a.data;break e}}ca(n)}n=!1}n&&(t=r[0])}}return(r=Do()).memoizedState=r.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:t},r.queue=n,r=Di.bind(null,xo,n),n.dispatch=r,n=ei(!1),o=$i.bind(null,xo,!1,n.queue),a={state:t,dispatch:null,action:e,pending:null},(n=Do()).queue=a,r=ri.bind(null,xo,a,o,r),a.dispatch=r,n.memoizedState=e,[t,r,!1]}function ui(e){return di(Uo(),wo,e)}function di(e,t,r){if(t=qo(e,t,si)[0],e=Vo(Wo)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var n=$o(t)}catch(i){if(i===Va)throw Ga;throw i}else n=t;var a=(t=Uo()).queue,o=a.dispatch;return r!==t.memoizedState&&(xo.flags|=2048,mi(9,{destroy:void 0,resource:void 0},fi.bind(null,a,r),null)),[n,o,e]}function fi(e,t){e.action=t}function pi(e){var t=Uo(),r=wo;if(null!==r)return di(t,r,e);Uo(),t=t.memoizedState;var n=(r=Uo()).queue.dispatch;return r.memoizedState=e,[t,n,!1]}function mi(e,t,r,n){return e={tag:e,create:r,deps:n,inst:t,next:null},null===(t=xo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t),null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function hi(){return Uo().memoizedState}function vi(e,t,r,n){var a=Do();n=void 0===n?null:n,xo.flags|=e,a.memoizedState=mi(1|t,{destroy:void 0,resource:void 0},r,n)}function gi(e,t,r,n){var a=Uo();n=void 0===n?null:n;var o=a.memoizedState.inst;null!==wo&&null!==n&&Ro(n,wo.memoizedState.deps)?a.memoizedState=mi(t,o,r,n):(xo.flags|=e,a.memoizedState=mi(1|t,o,r,n))}function bi(e,t){vi(8390656,8,e,t)}function yi(e,t){gi(2048,8,e,t)}function xi(e,t){return gi(4,2,e,t)}function wi(e,t){return gi(4,4,e,t)}function Si(e,t){if("function"===typeof t){e=e();var r=t(e);return function(){"function"===typeof r?r():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ki(e,t,r){r=null!==r&&void 0!==r?r.concat([e]):null,gi(4,4,Si.bind(null,t,e),r)}function Ei(){}function Pi(e,t){var r=Uo();t=void 0===t?null:t;var n=r.memoizedState;return null!==t&&Ro(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ci(e,t){var r=Uo();t=void 0===t?null:t;var n=r.memoizedState;if(null!==t&&Ro(t,n[1]))return n[0];if(n=e(),Po){fe(!0);try{e()}finally{fe(!1)}}return r.memoizedState=[n,t],n}function Ti(e,t,r){return void 0===r||0!==(1073741824&yo)?e.memoizedState=t:(e.memoizedState=r,e=Mc(),xo.lanes|=e,pc|=e,r)}function ji(e,t,r,n){return Kr(r,t)?r:null!==mo.current?(e=Ti(e,r,n),Kr(e,t)||(Tl=!0),e):0===(42&yo)?(Tl=!0,e.memoizedState=r):(e=Mc(),xo.lanes|=e,pc|=e,t)}function _i(e,t,r,n,a){var o=M.p;M.p=0!==o&&8>o?o:8;var i=L.T,l={};L.T=l,$i(e,!1,t,r);try{var s=a(),c=L.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)Ui(e,t,function(e,t){var r=[],n={status:"pending",value:null,reason:null,then:function(e){r.push(e)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var e=0;e<r.length;e++)(0,r[e])(t)},function(e){for(n.status="rejected",n.reason=e,e=0;e<r.length;e++)(0,r[e])(void 0)}),n}(s,n),Lc());else Ui(e,t,n,Lc())}catch(u){Ui(e,t,{then:function(){},status:"rejected",reason:u},Lc())}finally{M.p=o,L.T=i}}function Ai(){}function Ri(e,t,r,n){if(5!==e.tag)throw Error(i(476));var a=Ni(e).queue;_i(e,a,t,O,null===r?Ai:function(){return zi(e),r(n)})}function Ni(e){var t=e.memoizedState;if(null!==t)return t;var r={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:O},next:null}).next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:r},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function zi(e){Ui(e,Ni(e).next.queue,{},Lc())}function Li(){return Ca(Kd)}function Mi(){return Uo().memoizedState}function Oi(){return Uo().memoizedState}function Fi(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var r=Lc(),n=oo(t,e=ao(r),r);return null!==n&&(Oc(n,t,r),io(n,t,r)),t={cache:za()},void(e.payload=t)}t=t.return}}function Ii(e,t,r){var n=Lc();r={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Bi(e)?Hi(t,r):null!==(r=An(e,t,r,n))&&(Oc(r,e,n),Wi(r,t,n))}function Di(e,t,r){Ui(e,t,r,Lc())}function Ui(e,t,r,n){var a={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))Hi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,Kr(l,i))return _n(e,t,a,0),null===nc&&jn(),!1}catch(s){}if(null!==(r=An(e,t,a,n)))return Oc(r,e,n),Wi(r,t,n),!0}return!1}function $i(e,t,r,n){if(n={lane:2,revertLane:_u(),action:n,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(i(479))}else null!==(t=An(e,r,n,2))&&Oc(t,e,2)}function Bi(e){var t=e.alternate;return e===xo||null!==t&&t===xo}function Hi(e,t){Eo=ko=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Wi(e,t,r){if(0!==(4194048&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,Te(e,r)}}var Vi={readContext:Ca,use:Bo,useCallback:Ao,useContext:Ao,useEffect:Ao,useImperativeHandle:Ao,useLayoutEffect:Ao,useInsertionEffect:Ao,useMemo:Ao,useReducer:Ao,useRef:Ao,useState:Ao,useDebugValue:Ao,useDeferredValue:Ao,useTransition:Ao,useSyncExternalStore:Ao,useId:Ao,useHostTransitionStatus:Ao,useFormState:Ao,useActionState:Ao,useOptimistic:Ao,useMemoCache:Ao,useCacheRefresh:Ao},qi={readContext:Ca,use:Bo,useCallback:function(e,t){return Do().memoizedState=[e,void 0===t?null:t],e},useContext:Ca,useEffect:bi,useImperativeHandle:function(e,t,r){r=null!==r&&void 0!==r?r.concat([e]):null,vi(4194308,4,Si.bind(null,t,e),r)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){vi(4,2,e,t)},useMemo:function(e,t){var r=Do();t=void 0===t?null:t;var n=e();if(Po){fe(!0);try{e()}finally{fe(!1)}}return r.memoizedState=[n,t],n},useReducer:function(e,t,r){var n=Do();if(void 0!==r){var a=r(t);if(Po){fe(!0);try{r(t)}finally{fe(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=Ii.bind(null,xo,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},Do().memoizedState=e},useState:function(e){var t=(e=ei(e)).queue,r=Di.bind(null,xo,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Ei,useDeferredValue:function(e,t){return Ti(Do(),e,t)},useTransition:function(){var e=ei(!1);return e=_i.bind(null,xo,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var n=xo,a=Do();if(oa){if(void 0===r)throw Error(i(407));r=r()}else{if(r=t(),null===nc)throw Error(i(349));0!==(124&oc)||Yo(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,bi(Xo.bind(null,n,o,e),[e]),n.flags|=2048,mi(9,{destroy:void 0,resource:void 0},Qo.bind(null,n,o,r,t),null),r},useId:function(){var e=Do(),t=nc.identifierPrefix;if(oa){var r=Jn;t="\xab"+t+"R"+(r=(Xn&~(1<<32-pe(Xn)-1)).toString(32)+r),0<(r=Co++)&&(t+="H"+r.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(r=_o++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Li,useFormState:ci,useActionState:ci,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=$i.bind(null,xo,!0,r),r.dispatch=t,[e,t]},useMemoCache:Ho,useCacheRefresh:function(){return Do().memoizedState=Fi.bind(null,xo)}},Gi={readContext:Ca,use:Bo,useCallback:Pi,useContext:Ca,useEffect:yi,useImperativeHandle:ki,useInsertionEffect:xi,useLayoutEffect:wi,useMemo:Ci,useReducer:Vo,useRef:hi,useState:function(){return Vo(Wo)},useDebugValue:Ei,useDeferredValue:function(e,t){return ji(Uo(),wo.memoizedState,e,t)},useTransition:function(){var e=Vo(Wo)[0],t=Uo().memoizedState;return["boolean"===typeof e?e:$o(e),t]},useSyncExternalStore:Ko,useId:Mi,useHostTransitionStatus:Li,useFormState:ui,useActionState:ui,useOptimistic:function(e,t){return ti(Uo(),0,e,t)},useMemoCache:Ho,useCacheRefresh:Oi},Ki={readContext:Ca,use:Bo,useCallback:Pi,useContext:Ca,useEffect:yi,useImperativeHandle:ki,useInsertionEffect:xi,useLayoutEffect:wi,useMemo:Ci,useReducer:Go,useRef:hi,useState:function(){return Go(Wo)},useDebugValue:Ei,useDeferredValue:function(e,t){var r=Uo();return null===wo?Ti(r,e,t):ji(r,wo.memoizedState,e,t)},useTransition:function(){var e=Go(Wo)[0],t=Uo().memoizedState;return["boolean"===typeof e?e:$o(e),t]},useSyncExternalStore:Ko,useId:Mi,useHostTransitionStatus:Li,useFormState:pi,useActionState:pi,useOptimistic:function(e,t){var r=Uo();return null!==wo?ti(r,0,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Ho,useCacheRefresh:Oi},Yi=null,Qi=0;function Xi(e){var t=Qi;return Qi+=1,null===Yi&&(Yi=[]),Xa(Yi,e,t)}function Ji(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zi(e,t){if(t.$$typeof===p)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){return(0,e._init)(e._payload)}function tl(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=In(e,t)).index=0,e.sibling=null,e}function o(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=67108866,r):n:(t.flags|=67108866,r):(t.flags|=1048576,r)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,r,n){return null===t||6!==t.tag?((t=Bn(r,e.mode,n)).return=e,t):((t=a(t,r)).return=e,t)}function c(e,t,r,n){var o=r.type;return o===v?d(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===C&&el(o)===t.type)?(Ji(t=a(t,r.props),r),t.return=e,t):(Ji(t=Un(r.type,r.key,r.props,null,e.mode,n),r),t.return=e,t)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Hn(r,e.mode,n)).return=e,t):((t=a(t,r.children||[])).return=e,t)}function d(e,t,r,n,o){return null===t||7!==t.tag?((t=$n(r,e.mode,n,o)).return=e,t):((t=a(t,r)).return=e,t)}function f(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Bn(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case m:return Ji(r=Un(t.type,t.key,t.props,null,e.mode,r),t),r.return=e,r;case h:return(t=Hn(t,e.mode,r)).return=e,t;case C:return f(e,t=(0,t._init)(t._payload),r)}if(z(t)||A(t))return(t=$n(t,e.mode,r,null)).return=e,t;if("function"===typeof t.then)return f(e,Xi(t),r);if(t.$$typeof===w)return f(e,Ta(e,t),r);Zi(e,t)}return null}function p(e,t,r,n){var a=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return null!==a?null:s(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case m:return r.key===a?c(e,t,r,n):null;case h:return r.key===a?u(e,t,r,n):null;case C:return p(e,t,r=(a=r._init)(r._payload),n)}if(z(r)||A(r))return null!==a?null:d(e,t,r,n,null);if("function"===typeof r.then)return p(e,t,Xi(r),n);if(r.$$typeof===w)return p(e,t,Ta(e,r),n);Zi(e,r)}return null}function g(e,t,r,n,a){if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return s(t,e=e.get(r)||null,""+n,a);if("object"===typeof n&&null!==n){switch(n.$$typeof){case m:return c(t,e=e.get(null===n.key?r:n.key)||null,n,a);case h:return u(t,e=e.get(null===n.key?r:n.key)||null,n,a);case C:return g(e,t,r,n=(0,n._init)(n._payload),a)}if(z(n)||A(n))return d(t,e=e.get(r)||null,n,a,null);if("function"===typeof n.then)return g(e,t,r,Xi(n),a);if(n.$$typeof===w)return g(e,t,r,Ta(t,n),a);Zi(t,n)}return null}function b(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===v&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case m:e:{for(var y=u.key;null!==c;){if(c.key===y){if((y=u.type)===v){if(7===c.tag){r(s,c.sibling),(d=a(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===y||"object"===typeof y&&null!==y&&y.$$typeof===C&&el(y)===c.type){r(s,c.sibling),Ji(d=a(c,u.props),u),d.return=s,s=d;break e}r(s,c);break}t(s,c),c=c.sibling}u.type===v?((d=$n(u.props.children,s.mode,d,u.key)).return=s,s=d):(Ji(d=Un(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case h:e:{for(y=u.key;null!==c;){if(c.key===y){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){r(s,c.sibling),(d=a(c,u.children||[])).return=s,s=d;break e}r(s,c);break}t(s,c),c=c.sibling}(d=Hn(u,s.mode,d)).return=s,s=d}return l(s);case C:return b(s,c,u=(y=u._init)(u._payload),d)}if(z(u))return function(a,i,l,s){for(var c=null,u=null,d=i,m=i=0,h=null;null!==d&&m<l.length;m++){d.index>m?(h=d,d=null):h=d.sibling;var v=p(a,d,l[m],s);if(null===v){null===d&&(d=h);break}e&&d&&null===v.alternate&&t(a,d),i=o(v,i,m),null===u?c=v:u.sibling=v,u=v,d=h}if(m===l.length)return r(a,d),oa&&Zn(a,m),c;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(i=o(d,i,m),null===u?c=d:u.sibling=d,u=d);return oa&&Zn(a,m),c}for(d=n(d);m<l.length;m++)null!==(h=g(d,a,m,l[m],s))&&(e&&null!==h.alternate&&d.delete(null===h.key?m:h.key),i=o(h,i,m),null===u?c=h:u.sibling=h,u=h);return e&&d.forEach(function(e){return t(a,e)}),oa&&Zn(a,m),c}(s,c,u,d);if(A(u)){if("function"!==typeof(y=A(u)))throw Error(i(150));return function(a,l,s,c){if(null==s)throw Error(i(151));for(var u=null,d=null,m=l,h=l=0,v=null,b=s.next();null!==m&&!b.done;h++,b=s.next()){m.index>h?(v=m,m=null):v=m.sibling;var y=p(a,m,b.value,c);if(null===y){null===m&&(m=v);break}e&&m&&null===y.alternate&&t(a,m),l=o(y,l,h),null===d?u=y:d.sibling=y,d=y,m=v}if(b.done)return r(a,m),oa&&Zn(a,h),u;if(null===m){for(;!b.done;h++,b=s.next())null!==(b=f(a,b.value,c))&&(l=o(b,l,h),null===d?u=b:d.sibling=b,d=b);return oa&&Zn(a,h),u}for(m=n(m);!b.done;h++,b=s.next())null!==(b=g(m,a,h,b.value,c))&&(e&&null!==b.alternate&&m.delete(null===b.key?h:b.key),l=o(b,l,h),null===d?u=b:d.sibling=b,d=b);return e&&m.forEach(function(e){return t(a,e)}),oa&&Zn(a,h),u}(s,c,u=y.call(u),d)}if("function"===typeof u.then)return b(s,c,Xi(u),d);if(u.$$typeof===w)return b(s,c,Ta(s,u),d);Zi(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(r(s,c.sibling),(d=a(c,u)).return=s,s=d):(r(s,c),(d=Bn(u,s.mode,d)).return=s,s=d),l(s)):r(s,c)}return function(e,t,r,n){try{Qi=0;var a=b(e,t,r,n);return Yi=null,a}catch(i){if(i===Va||i===Ga)throw i;var o=On(29,i,null,e.mode);return o.lanes=n,o.return=e,o}}}var rl=tl(!0),nl=tl(!1),al=D(null),ol=null;function il(e){var t=e.alternate;$(ul,1&ul.current),$(al,e),null===ol&&(null===t||null!==mo.current||null!==t.memoizedState)&&(ol=e)}function ll(e){if(22===e.tag){if($(ul,ul.current),$(al,e),null===ol){var t=e.alternate;null!==t&&null!==t.memoizedState&&(ol=e)}}else sl()}function sl(){$(ul,ul.current),$(al,al.current)}function cl(e){U(al),ol===e&&(ol=null),U(ul)}var ul=D(0);function dl(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||vd(r)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fl(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:f({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var pl={enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Lc(),a=ao(n);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=oo(e,a,n))&&(Oc(t,e,n),io(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Lc(),a=ao(n);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=oo(e,a,n))&&(Oc(t,e,n),io(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Lc(),n=ao(r);n.tag=2,void 0!==t&&null!==t&&(n.callback=t),null!==(t=oo(e,n,r))&&(Oc(t,e,r),io(t,e,r))}};function ml(e,t,r,n,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!Yr(r,n)||!Yr(a,o))}function hl(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function vl(e,t){var r=t;if("ref"in t)for(var n in r={},t)"ref"!==n&&(r[n]=t[n]);if(e=e.defaultProps)for(var a in r===t&&(r=f({},r)),e)void 0===r[a]&&(r[a]=e[a]);return r}var gl="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function bl(e){gl(e)}function yl(e){console.error(e)}function xl(e){gl(e)}function wl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Sl(e,t,r){try{(0,e.onCaughtError)(r.value,{componentStack:r.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function kl(e,t,r){return(r=ao(r)).tag=3,r.payload={element:null},r.callback=function(){wl(e,t)},r}function El(e){return(e=ao(e)).tag=3,e}function Pl(e,t,r,n){var a=r.type.getDerivedStateFromError;if("function"===typeof a){var o=n.value;e.payload=function(){return a(o)},e.callback=function(){Sl(t,r,n)}}var i=r.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){Sl(t,r,n),"function"!==typeof a&&(null===Ec?Ec=new Set([this]):Ec.add(this));var e=n.stack;this.componentDidCatch(n.value,{componentStack:null!==e?e:""})})}var Cl=Error(i(461)),Tl=!1;function jl(e,t,r,n){t.child=null===e?nl(t,null,r,n):rl(t,e.child,r,n)}function _l(e,t,r,n,a){r=r.render;var o=t.ref;if("ref"in n){var i={};for(var l in n)"ref"!==l&&(i[l]=n[l])}else i=n;return Pa(t),n=No(e,t,r,i,o,a),l=Oo(),null===e||Tl?(oa&&l&&ta(t),t.flags|=1,jl(e,t,n,a),t.child):(Fo(e,t,a),Yl(e,t,a))}function Al(e,t,r,n,a){if(null===e){var o=r.type;return"function"!==typeof o||Fn(o)||void 0!==o.defaultProps||null!==r.compare?((e=Un(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Rl(e,t,o,n,a))}if(o=e.child,!Ql(e,a)){var i=o.memoizedProps;if((r=null!==(r=r.compare)?r:Yr)(i,n)&&e.ref===t.ref)return Yl(e,t,a)}return t.flags|=1,(e=In(o,n)).ref=t.ref,e.return=t,t.child=e}function Rl(e,t,r,n,a){if(null!==e){var o=e.memoizedProps;if(Yr(o,n)&&e.ref===t.ref){if(Tl=!1,t.pendingProps=n=o,!Ql(e,a))return t.lanes=e.lanes,Yl(e,t,a);0!==(131072&e.flags)&&(Tl=!0)}}return Ml(e,t,r,n,a)}function Nl(e,t,r){var n=t.pendingProps,a=n.children,o=null!==e?e.memoizedState:null;if("hidden"===n.mode){if(0!==(128&t.flags)){if(n=null!==o?o.baseLanes|r:r,null!==e){for(a=t.child=e.child,o=0;null!==a;)o=o|a.lanes|a.childLanes,a=a.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return zl(e,t,n,r)}if(0===(536870912&r))return t.lanes=t.childLanes=536870912,zl(e,t,null!==o?o.baseLanes|r:r,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ha(0,null!==o?o.cachePool:null),null!==o?vo(t,o):go(),ll(t)}else null!==o?(Ha(0,o.cachePool),vo(t,o),sl(),t.memoizedState=null):(null!==e&&Ha(0,null),go(),sl());return jl(e,t,a,r),t.child}function zl(e,t,r,n){var a=Ba();return a=null===a?null:{parent:Na._currentValue,pool:a},t.memoizedState={baseLanes:r,cachePool:a},null!==e&&Ha(0,null),go(),ll(t),null!==e&&ka(e,t,n,!0),null}function Ll(e,t){var r=t.ref;if(null===r)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof r&&"object"!==typeof r)throw Error(i(284));null!==e&&e.ref===r||(t.flags|=4194816)}}function Ml(e,t,r,n,a){return Pa(t),r=No(e,t,r,n,void 0,a),n=Oo(),null===e||Tl?(oa&&n&&ta(t),t.flags|=1,jl(e,t,r,a),t.child):(Fo(e,t,a),Yl(e,t,a))}function Ol(e,t,r,n,a,o){return Pa(t),t.updateQueue=null,r=Lo(t,n,r,a),zo(e),n=Oo(),null===e||Tl?(oa&&n&&ta(t),t.flags|=1,jl(e,t,r,o),t.child):(Fo(e,t,o),Yl(e,t,o))}function Fl(e,t,r,n,a){if(Pa(t),null===t.stateNode){var o=Ln,i=r.contextType;"object"===typeof i&&null!==i&&(o=Ca(i)),o=new r(n,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=pl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=n,o.state=t.memoizedState,o.refs={},ro(t),i=r.contextType,o.context="object"===typeof i&&null!==i?Ca(i):Ln,o.state=t.memoizedState,"function"===typeof(i=r.getDerivedStateFromProps)&&(fl(t,r,i,n),o.state=t.memoizedState),"function"===typeof r.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&pl.enqueueReplaceState(o,o.state,null),uo(t,n,o,a),co(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),n=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=vl(r,l);o.props=s;var c=o.context,u=r.contextType;i=Ln,"object"===typeof u&&null!==u&&(i=Ca(u));var d=r.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==i)&&hl(t,o,n,i),to=!1;var f=t.memoizedState;o.state=f,uo(t,n,o,a),co(),c=t.memoizedState,l||f!==c||to?("function"===typeof d&&(fl(t,r,d,n),c=t.memoizedState),(s=to||ml(t,r,s,n,f,c,i))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),o.props=n,o.state=c,o.context=i,n=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,no(e,t),u=vl(r,i=t.memoizedProps),o.props=u,d=t.pendingProps,f=o.context,c=r.contextType,s=Ln,"object"===typeof c&&null!==c&&(s=Ca(c)),(c="function"===typeof(l=r.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||f!==s)&&hl(t,o,n,s),to=!1,f=t.memoizedState,o.state=f,uo(t,n,o,a),co();var p=t.memoizedState;i!==d||f!==p||to||null!==e&&null!==e.dependencies&&Ea(e.dependencies)?("function"===typeof l&&(fl(t,r,l,n),p=t.memoizedState),(u=to||ml(t,r,u,n,f,p,s)||null!==e&&null!==e.dependencies&&Ea(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(n,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(n,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),o.props=n,o.state=p,o.context=s,n=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Ll(e,t),n=0!==(128&t.flags),o||n?(o=t.stateNode,r=n&&"function"!==typeof r.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&n?(t.child=rl(t,e.child,null,a),t.child=rl(t,null,r,a)):jl(e,t,r,a),t.memoizedState=o.state,e=t.child):e=Yl(e,t,a),e}function Il(e,t,r,n){return pa(),t.flags|=256,jl(e,t,r,n),t.child}var Dl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ul(e){return{baseLanes:e,cachePool:Wa()}}function $l(e,t,r){return e=null!==e?e.childLanes&~r:0,t&&(e|=vc),e}function Bl(e,t,r){var n,a=t.pendingProps,o=!1,l=0!==(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!==(2&ul.current)),n&&(o=!0,t.flags&=-129),n=0!==(32&t.flags),t.flags&=-33,null===e){if(oa){if(o?il(t):sl(),oa){var s,c=aa;if(s=c){e:{for(s=c,c=la;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=gd(s.nextSibling))){c=null;break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Qn?{id:Xn,overflow:Jn}:null,retryLane:536870912,hydrationErrors:null},(s=On(18,null,null,0)).stateNode=c,s.return=t,t.child=s,na=t,aa=null,s=!0):s=!1}s||ca(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return vd(c)?t.lanes=32:t.lanes=536870912,null;cl(t)}return c=a.children,a=a.fallback,o?(sl(),c=Wl({mode:"hidden",children:c},o=t.mode),a=$n(a,o,r,null),c.return=t,a.return=t,c.sibling=a,t.child=c,(o=t.child).memoizedState=Ul(r),o.childLanes=$l(e,n,r),t.memoizedState=Dl,a):(il(t),Hl(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(l)256&t.flags?(il(t),t.flags&=-257,t=Vl(e,t,r)):null!==t.memoizedState?(sl(),t.child=e.child,t.flags|=128,t=null):(sl(),o=a.fallback,c=t.mode,a=Wl({mode:"visible",children:a.children},c),(o=$n(o,c,r,null)).flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,rl(t,e.child,null,r),(a=t.child).memoizedState=Ul(r),a.childLanes=$l(e,n,r),t.memoizedState=Dl,t=o);else if(il(t),vd(c)){if(n=c.nextSibling&&c.nextSibling.dataset)var u=n.dgst;n=u,(a=Error(i(419))).stack="",a.digest=n,ha({value:a,source:null,stack:null}),t=Vl(e,t,r)}else if(Tl||ka(e,t,r,!1),n=0!==(r&e.childLanes),Tl||n){if(null!==(n=nc)&&(0!==(a=0!==((a=0!==(42&(a=r&-r))?1:je(a))&(n.suspendedLanes|r))?0:a)&&a!==s.retryLane))throw s.retryLane=a,Rn(e,a),Oc(n,e,a),Cl;"$?"===c.data||Gc(),t=Vl(e,t,r)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,aa=gd(c.nextSibling),na=t,oa=!0,ia=null,la=!1,null!==e&&(Kn[Yn++]=Xn,Kn[Yn++]=Jn,Kn[Yn++]=Qn,Xn=e.id,Jn=e.overflow,Qn=t),(t=Hl(t,a.children)).flags|=4096);return t}return o?(sl(),o=a.fallback,c=t.mode,u=(s=e.child).sibling,(a=In(s,{mode:"hidden",children:a.children})).subtreeFlags=65011712&s.subtreeFlags,null!==u?o=In(u,o):(o=$n(o,c,r,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,null===(c=e.child.memoizedState)?c=Ul(r):(null!==(s=c.cachePool)?(u=Na._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=Wa(),c={baseLanes:c.baseLanes|r,cachePool:s}),o.memoizedState=c,o.childLanes=$l(e,n,r),t.memoizedState=Dl,a):(il(t),e=(r=e.child).sibling,(r=In(r,{mode:"visible",children:a.children})).return=t,r.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r)}function Hl(e,t){return(t=Wl({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Wl(e,t){return(e=On(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vl(e,t,r){return rl(t,e.child,null,r),(e=Hl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ql(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),wa(e.return,t,r)}function Gl(e,t,r,n,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function Kl(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(jl(e,t,n.children,r),0!==(2&(n=ul.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ql(e,r,t);else if(19===e.tag)ql(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch($(ul,n),a){case"forwards":for(r=t.child,a=null;null!==r;)null!==(e=r.alternate)&&null===dl(e)&&(a=r),r=r.sibling;null===(r=a)?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Gl(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===dl(e)){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Gl(t,!0,r,null,o);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yl(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),pc|=t.lanes,0===(r&t.childLanes)){if(null===e)return null;if(ka(e,t,r,!1),0===(r&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(r=In(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=In(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Ql(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ea(e))}function Xl(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps)Tl=!0;else{if(!Ql(e,r)&&0===(128&t.flags))return Tl=!1,function(e,t,r){switch(t.tag){case 3:q(t,t.stateNode.containerInfo),ya(0,Na,e.memoizedState.cache),pa();break;case 27:case 5:K(t);break;case 4:q(t,t.stateNode.containerInfo);break;case 10:ya(0,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(null!==n)return null!==n.dehydrated?(il(t),t.flags|=128,null):0!==(r&t.child.childLanes)?Bl(e,t,r):(il(t),null!==(e=Yl(e,t,r))?e.sibling:null);il(t);break;case 19:var a=0!==(128&e.flags);if((n=0!==(r&t.childLanes))||(ka(e,t,r,!1),n=0!==(r&t.childLanes)),a){if(n)return Kl(e,t,r);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),$(ul,ul.current),n)break;return null;case 22:case 23:return t.lanes=0,Nl(e,t,r);case 24:ya(0,Na,e.memoizedState.cache)}return Yl(e,t,r)}(e,t,r);Tl=0!==(131072&e.flags)}else Tl=!1,oa&&0!==(1048576&t.flags)&&ea(t,Gn,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,a=n._init;if(n=a(n._payload),t.type=n,"function"!==typeof n){if(void 0!==n&&null!==n){if((a=n.$$typeof)===S){t.tag=11,t=_l(null,t,n,e,r);break e}if(a===P){t.tag=14,t=Al(null,t,n,e,r);break e}}throw t=N(n)||n,Error(i(306,t,""))}Fn(n)?(e=vl(n,e),t.tag=1,t=Fl(null,t,n,e,r)):(t.tag=0,t=Ml(null,t,n,e,r))}return t;case 0:return Ml(e,t,t.type,t.pendingProps,r);case 1:return Fl(e,t,n=t.type,a=vl(n,t.pendingProps),r);case 3:e:{if(q(t,t.stateNode.containerInfo),null===e)throw Error(i(387));n=t.pendingProps;var o=t.memoizedState;a=o.element,no(e,t),uo(t,n,null,r);var l=t.memoizedState;if(n=l.cache,ya(0,Na,n),n!==o.cache&&Sa(t,[Na],r,!0),co(),n=l.element,o.isDehydrated){if(o={element:n,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Il(e,t,n,r);break e}if(n!==a){ha(a=En(Error(i(424)),t)),t=Il(e,t,n,r);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(aa=gd(e.firstChild),na=t,oa=!0,ia=null,la=!0,r=nl(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(pa(),n===a){t=Yl(e,t,r);break e}jl(e,t,n,r)}t=t.child}return t;case 26:return Ll(e,t),null===e?(r=jd(t.type,null,t.pendingProps,null))?t.memoizedState=r:oa||(r=t.type,e=t.pendingProps,(n=nd(W.current).createElement(r))[Ne]=t,n[ze]=e,ed(n,r,e),Ve(n),t.stateNode=n):t.memoizedState=jd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return K(t),null===e&&oa&&(n=t.stateNode=xd(t.type,t.pendingProps,W.current),na=t,la=!0,a=aa,pd(t.type)?(bd=a,aa=gd(n.firstChild)):aa=a),jl(e,t,t.pendingProps.children,r),Ll(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&oa&&((a=n=aa)&&(null!==(n=function(e,t,r,n){for(;1===e.nodeType;){var a=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(n){if(!e[De])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=gd(e.nextSibling)))break}return null}(n,t.type,t.pendingProps,la))?(t.stateNode=n,na=t,aa=gd(n.firstChild),la=!1,a=!0):a=!1),a||ca(t)),K(t),a=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,n=o.children,id(a,o)?n=null:null!==l&&id(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=No(e,t,Mo,null,null,r),Kd._currentValue=a),Ll(e,t),jl(e,t,n,r),t.child;case 6:return null===e&&oa&&((e=r=aa)&&(null!==(r=function(e,t,r){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!r)return null;if(null===(e=gd(e.nextSibling)))return null}return e}(r,t.pendingProps,la))?(t.stateNode=r,na=t,aa=null,e=!0):e=!1),e||ca(t)),null;case 13:return Bl(e,t,r);case 4:return q(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=rl(t,null,n,r):jl(e,t,n,r),t.child;case 11:return _l(e,t,t.type,t.pendingProps,r);case 7:return jl(e,t,t.pendingProps,r),t.child;case 8:case 12:return jl(e,t,t.pendingProps.children,r),t.child;case 10:return n=t.pendingProps,ya(0,t.type,n.value),jl(e,t,n.children,r),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,Pa(t),n=n(a=Ca(a)),t.flags|=1,jl(e,t,n,r),t.child;case 14:return Al(e,t,t.type,t.pendingProps,r);case 15:return Rl(e,t,t.type,t.pendingProps,r);case 19:return Kl(e,t,r);case 31:return n=t.pendingProps,r=t.mode,n={mode:n.mode,children:n.children},null===e?((r=Wl(n,r)).ref=t.ref,t.child=r,r.return=t,t=r):((r=In(e.child,n)).ref=t.ref,t.child=r,r.return=t,t=r),t;case 22:return Nl(e,t,r);case 24:return Pa(t),n=Ca(Na),null===e?(null===(a=Ba())&&(a=nc,o=za(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=r),a=o),t.memoizedState={parent:n,cache:a},ro(t),ya(0,Na,a)):(0!==(e.lanes&r)&&(no(e,t),uo(t,null,null,r),co()),a=e.memoizedState,o=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),ya(0,Na,n)):(n=o.cache,ya(0,Na,n),n!==a.cache&&Sa(t,[Na],r,!0))),jl(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Jl(e){e.flags|=4}function Zl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!$d(t)){if(null!==(t=al.current)&&((4194048&oc)===oc?null!==ol:(62914560&oc)!==oc&&0===(536870912&oc)||t!==ol))throw Ja=Ka,qa;e.flags|=8192}}function es(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,gc|=t)}function ts(e,t){if(!oa)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function rs(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=65011712&a.subtreeFlags,n|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function ns(e,t,r){var n=t.pendingProps;switch(ra(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return rs(t),null;case 3:return r=t.stateNode,n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xa(Na),G(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fa(t)?Jl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,ma())),rs(t),null;case 26:return r=t.memoizedState,null===e?(Jl(t),null!==r?(rs(t),Zl(t,r)):(rs(t),t.flags&=-16777217)):r?r!==e.memoizedState?(Jl(t),rs(t),Zl(t,r)):(rs(t),t.flags&=-16777217):(e.memoizedProps!==n&&Jl(t),rs(t),t.flags&=-16777217),null;case 27:Y(t),r=W.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==n&&Jl(t);else{if(!n){if(null===t.stateNode)throw Error(i(166));return rs(t),null}e=B.current,fa(t)?ua(t):(e=xd(a,n,r),t.stateNode=e,Jl(t))}return rs(t),null;case 5:if(Y(t),r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==n&&Jl(t);else{if(!n){if(null===t.stateNode)throw Error(i(166));return rs(t),null}if(e=B.current,fa(t))ua(t);else{switch(a=nd(W.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof n.is?a.createElement("select",{is:n.is}):a.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e="string"===typeof n.is?a.createElement(r,{is:n.is}):a.createElement(r)}}e[Ne]=t,e[ze]=n;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(ed(e,r,n),r){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Jl(t)}}return rs(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==n&&Jl(t);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));if(e=W.current,fa(t)){if(e=t.stateNode,r=t.memoizedProps,n=null,null!==(a=na))switch(a.tag){case 27:case 5:n=a.memoizedProps}e[Ne]=t,(e=!!(e.nodeValue===r||null!==n&&!0===n.suppressHydrationWarning||Qu(e.nodeValue,r)))||ca(t)}else(e=nd(e).createTextNode(n))[Ne]=t,t.stateNode=e}return rs(t),null;case 13:if(n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=fa(t),null!==n&&null!==n.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[Ne]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;rs(t),a=!1}else a=ma(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(cl(t),t):(cl(t),null)}if(cl(t),0!==(128&t.flags))return t.lanes=r,t;if(r=null!==n,e=null!==e&&null!==e.memoizedState,r){a=null,null!==(n=t.child).alternate&&null!==n.alternate.memoizedState&&null!==n.alternate.memoizedState.cachePool&&(a=n.alternate.memoizedState.cachePool.pool);var o=null;null!==n.memoizedState&&null!==n.memoizedState.cachePool&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),es(t,t.updateQueue),rs(t),null;case 4:return G(),null===e&&Uu(t.stateNode.containerInfo),rs(t),null;case 10:return xa(t.type),rs(t),null;case 19:if(U(ul),null===(a=t.memoizedState))return rs(t),null;if(n=0!==(128&t.flags),null===(o=a.rendering))if(n)ts(a,!1);else{if(0!==fc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=dl(e))){for(t.flags|=128,ts(a,!1),e=o.updateQueue,t.updateQueue=e,es(t,e),t.subtreeFlags=0,e=r,r=t.child;null!==r;)Dn(r,e),r=r.sibling;return $(ul,1&ul.current|2),t.child}e=e.sibling}null!==a.tail&&te()>Sc&&(t.flags|=128,n=!0,ts(a,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=dl(o))){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,es(t,e),ts(a,!0),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!oa)return rs(t),null}else 2*te()-a.renderingStartTime>Sc&&536870912!==r&&(t.flags|=128,n=!0,ts(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=a.last)?e.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=te(),t.sibling=null,e=ul.current,$(ul,n?1&e|2:1&e),t):(rs(t),null);case 22:case 23:return cl(t),bo(),n=null!==t.memoizedState,null!==e?null!==e.memoizedState!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?0!==(536870912&r)&&0===(128&t.flags)&&(rs(t),6&t.subtreeFlags&&(t.flags|=8192)):rs(t),null!==(r=t.updateQueue)&&es(t,r.retryQueue),r=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),n=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(n=t.memoizedState.cachePool.pool),n!==r&&(t.flags|=2048),null!==e&&U($a),null;case 24:return r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xa(Na),rs(t),null;case 25:case 30:return null}throw Error(i(156,t.tag))}function as(e,t){switch(ra(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xa(Na),G(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Y(t),null;case 13:if(cl(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return U(ul),null;case 4:return G(),null;case 10:return xa(t.type),null;case 22:case 23:return cl(t),bo(),null!==e&&U($a),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xa(Na),null;default:return null}}function os(e,t){switch(ra(t),t.tag){case 3:xa(Na),G();break;case 26:case 27:case 5:Y(t);break;case 4:G();break;case 13:cl(t);break;case 19:U(ul);break;case 10:xa(t.type);break;case 22:case 23:cl(t),bo(),null!==e&&U($a);break;case 24:xa(Na)}}function is(e,t){try{var r=t.updateQueue,n=null!==r?r.lastEffect:null;if(null!==n){var a=n.next;r=a;do{if((r.tag&e)===e){n=void 0;var o=r.create,i=r.inst;n=o(),i.destroy=n}r=r.next}while(r!==a)}}catch(l){uu(t,t.return,l)}}function ls(e,t,r){try{var n=t.updateQueue,a=null!==n?n.lastEffect:null;if(null!==a){var o=a.next;n=o;do{if((n.tag&e)===e){var i=n.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,a=t;var s=r,c=l;try{c()}catch(u){uu(a,s,u)}}}n=n.next}while(n!==o)}}catch(u){uu(t,t.return,u)}}function ss(e){var t=e.updateQueue;if(null!==t){var r=e.stateNode;try{po(t,r)}catch(n){uu(e,e.return,n)}}}function cs(e,t,r){r.props=vl(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(n){uu(e,t,n)}}function us(e,t){try{var r=e.ref;if(null!==r){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;default:n=e.stateNode}"function"===typeof r?e.refCleanup=r(n):r.current=n}}catch(a){uu(e,t,a)}}function ds(e,t){var r=e.ref,n=e.refCleanup;if(null!==r)if("function"===typeof n)try{n()}catch(a){uu(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof r)try{r(null)}catch(o){uu(e,t,o)}else r.current=null}function fs(e){var t=e.type,r=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus();break e;case"img":r.src?n.src=r.src:r.srcSet&&(n.srcset=r.srcSet)}}catch(a){uu(e,e.return,a)}}function ps(e,t,r){try{var n=e.stateNode;!function(e,t,r,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,l=null,s=null,c=null,u=null,d=null;for(m in r){var f=r[m];if(r.hasOwnProperty(m)&&null!=f)switch(m){case"checked":case"value":break;case"defaultValue":c=f;default:n.hasOwnProperty(m)||Ju(e,t,m,null,n,f)}}for(var p in n){var m=n[p];if(f=r[p],n.hasOwnProperty(p)&&(null!=m||null!=f))switch(p){case"type":o=m;break;case"name":a=m;break;case"checked":u=m;break;case"defaultChecked":d=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(i(137,t));break;default:m!==f&&Ju(e,t,p,m,n,f)}}return void vt(e,l,s,c,u,d,o,a);case"select":for(o in m=l=s=p=null,r)if(c=r[o],r.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":m=c;default:n.hasOwnProperty(o)||Ju(e,t,o,null,n,c)}for(a in n)if(o=n[a],c=r[a],n.hasOwnProperty(a)&&(null!=o||null!=c))switch(a){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&Ju(e,t,a,o,n,c)}return t=s,r=l,n=m,void(null!=p?yt(e,!!r,p,!1):!!n!==!!r&&(null!=t?yt(e,!!r,t,!0):yt(e,!!r,r?[]:"",!1)));case"textarea":for(s in m=p=null,r)if(a=r[s],r.hasOwnProperty(s)&&null!=a&&!n.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Ju(e,t,s,null,n,a)}for(l in n)if(a=n[l],o=r[l],n.hasOwnProperty(l)&&(null!=a||null!=o))switch(l){case"value":p=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(i(91));break;default:a!==o&&Ju(e,t,l,a,n,o)}return void xt(e,p,m);case"option":for(var h in r)if(p=r[h],r.hasOwnProperty(h)&&null!=p&&!n.hasOwnProperty(h))if("selected"===h)e.selected=!1;else Ju(e,t,h,null,n,p);for(c in n)if(p=n[c],m=r[c],n.hasOwnProperty(c)&&p!==m&&(null!=p||null!=m))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Ju(e,t,c,p,n,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in r)p=r[v],r.hasOwnProperty(v)&&null!=p&&!n.hasOwnProperty(v)&&Ju(e,t,v,null,n,p);for(u in n)if(p=n[u],m=r[u],n.hasOwnProperty(u)&&p!==m&&(null!=p||null!=m))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(i(137,t));break;default:Ju(e,t,u,p,n,m)}return;default:if(Ct(t)){for(var g in r)p=r[g],r.hasOwnProperty(g)&&void 0!==p&&!n.hasOwnProperty(g)&&Zu(e,t,g,void 0,n,p);for(d in n)p=n[d],m=r[d],!n.hasOwnProperty(d)||p===m||void 0===p&&void 0===m||Zu(e,t,d,p,n,m);return}}for(var b in r)p=r[b],r.hasOwnProperty(b)&&null!=p&&!n.hasOwnProperty(b)&&Ju(e,t,b,null,n,p);for(f in n)p=n[f],m=r[f],!n.hasOwnProperty(f)||p===m||null==p&&null==m||Ju(e,t,f,p,n,m)}(n,e.type,r,t),n[ze]=t}catch(a){uu(e,e.return,a)}}function ms(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&pd(e.type)||4===e.tag}function hs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ms(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function vs(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?(9===r.nodeType?r.body:"HTML"===r.nodeName?r.ownerDocument.body:r).insertBefore(e,t):((t=9===r.nodeType?r.body:"HTML"===r.nodeName?r.ownerDocument.body:r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Xu));else if(4!==n&&(27===n&&pd(e.type)&&(r=e.stateNode,t=null),null!==(e=e.child)))for(vs(e,t,r),e=e.sibling;null!==e;)vs(e,t,r),e=e.sibling}function gs(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&(27===n&&pd(e.type)&&(r=e.stateNode),null!==(e=e.child)))for(gs(e,t,r),e=e.sibling;null!==e;)gs(e,t,r),e=e.sibling}function bs(e){var t=e.stateNode,r=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ed(t,n,r),t[Ne]=e,t[ze]=r}catch(o){uu(e,e.return,o)}}var ys=!1,xs=!1,ws=!1,Ss="function"===typeof WeakSet?WeakSet:Set,ks=null;function Es(e,t,r){var n=r.flags;switch(r.tag){case 0:case 11:case 15:Fs(e,r),4&n&&is(5,r);break;case 1:if(Fs(e,r),4&n)if(e=r.stateNode,null===t)try{e.componentDidMount()}catch(i){uu(r,r.return,i)}else{var a=vl(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){uu(r,r.return,l)}}64&n&&ss(r),512&n&&us(r,r.return);break;case 3:if(Fs(e,r),64&n&&null!==(e=r.updateQueue)){if(t=null,null!==r.child)switch(r.child.tag){case 27:case 5:case 1:t=r.child.stateNode}try{po(e,t)}catch(i){uu(r,r.return,i)}}break;case 27:null===t&&4&n&&bs(r);case 26:case 5:Fs(e,r),null===t&&4&n&&fs(r),512&n&&us(r,r.return);break;case 12:Fs(e,r);break;case 13:Fs(e,r),4&n&&As(e,r),64&n&&(null!==(e=r.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var r=e.ownerDocument;if("$?"!==e.data||"complete"===r.readyState)t();else{var n=function(){t(),r.removeEventListener("DOMContentLoaded",n)};r.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}(e,r=mu.bind(null,r))));break;case 22:if(!(n=null!==r.memoizedState||ys)){t=null!==t&&null!==t.memoizedState||xs,a=ys;var o=xs;ys=n,(xs=t)&&!o?Ds(e,r,0!==(8772&r.subtreeFlags)):Fs(e,r),ys=a,xs=o}break;case 30:break;default:Fs(e,r)}}function Ps(e){var t=e.alternate;null!==t&&(e.alternate=null,Ps(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ue(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cs=null,Ts=!1;function js(e,t,r){for(r=r.child;null!==r;)_s(e,t,r),r=r.sibling}function _s(e,t,r){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,r)}catch(o){}switch(r.tag){case 26:xs||ds(r,t),js(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode).parentNode.removeChild(r);break;case 27:xs||ds(r,t);var n=Cs,a=Ts;pd(r.type)&&(Cs=r.stateNode,Ts=!1),js(e,t,r),wd(r.stateNode),Cs=n,Ts=a;break;case 5:xs||ds(r,t);case 6:if(n=Cs,a=Ts,Cs=null,js(e,t,r),Ts=a,null!==(Cs=n))if(Ts)try{(9===Cs.nodeType?Cs.body:"HTML"===Cs.nodeName?Cs.ownerDocument.body:Cs).removeChild(r.stateNode)}catch(i){uu(r,t,i)}else try{Cs.removeChild(r.stateNode)}catch(i){uu(r,t,i)}break;case 18:null!==Cs&&(Ts?(md(9===(e=Cs).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,r.stateNode),jf(e)):md(Cs,r.stateNode));break;case 4:n=Cs,a=Ts,Cs=r.stateNode.containerInfo,Ts=!0,js(e,t,r),Cs=n,Ts=a;break;case 0:case 11:case 14:case 15:xs||ls(2,r,t),xs||ls(4,r,t),js(e,t,r);break;case 1:xs||(ds(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount&&cs(r,t,n)),js(e,t,r);break;case 21:js(e,t,r);break;case 22:xs=(n=xs)||null!==r.memoizedState,js(e,t,r),xs=n;break;default:js(e,t,r)}}function As(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{jf(e)}catch(r){uu(t,t.return,r)}}function Rs(e,t){var r=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Ss),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Ss),t;default:throw Error(i(435,e.tag))}}(e);t.forEach(function(t){var n=hu.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}function Ns(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var a=r[n],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(pd(s.type)){Cs=s.stateNode,Ts=!1;break e}break;case 5:Cs=s.stateNode,Ts=!1;break e;case 3:case 4:Cs=s.stateNode.containerInfo,Ts=!0;break e}s=s.return}if(null===Cs)throw Error(i(160));_s(o,l,a),Cs=null,Ts=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ls(t,e),t=t.sibling}var zs=null;function Ls(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ns(t,e),Ms(e),4&n&&(ls(3,e,e.return),is(3,e),ls(5,e,e.return));break;case 1:Ns(t,e),Ms(e),512&n&&(xs||null===r||ds(r,r.return)),64&n&&ys&&(null!==(e=e.updateQueue)&&(null!==(n=e.callbacks)&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===r?n:r.concat(n))));break;case 26:var a=zs;if(Ns(t,e),Ms(e),512&n&&(xs||null===r||ds(r,r.return)),4&n){var o=null!==r?r.memoizedState:null;if(n=e.memoizedState,null===r)if(null===n)if(null===e.stateNode){e:{n=e.type,r=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":(!(o=a.getElementsByTagName("title")[0])||o[De]||o[Ne]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(n),a.head.insertBefore(o,a.querySelector("head > title"))),ed(o,n,r),o[Ne]=e,Ve(o),n=o;break e;case"link":var l=Dd("link","href",a).get(n+(r.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==r.href||""===r.href?null:r.href)&&o.getAttribute("rel")===(null==r.rel?null:r.rel)&&o.getAttribute("title")===(null==r.title?null:r.title)&&o.getAttribute("crossorigin")===(null==r.crossOrigin?null:r.crossOrigin)){l.splice(s,1);break t}ed(o=a.createElement(n),n,r),a.head.appendChild(o);break;case"meta":if(l=Dd("meta","content",a).get(n+(r.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==r.content?null:""+r.content)&&o.getAttribute("name")===(null==r.name?null:r.name)&&o.getAttribute("property")===(null==r.property?null:r.property)&&o.getAttribute("http-equiv")===(null==r.httpEquiv?null:r.httpEquiv)&&o.getAttribute("charset")===(null==r.charSet?null:r.charSet)){l.splice(s,1);break t}ed(o=a.createElement(n),n,r),a.head.appendChild(o);break;default:throw Error(i(468,n))}o[Ne]=e,Ve(o),n=o}e.stateNode=n}else Ud(a,e.type,e.stateNode);else e.stateNode=Ld(a,n,e.memoizedProps);else o!==n?(null===o?null!==r.stateNode&&(r=r.stateNode).parentNode.removeChild(r):o.count--,null===n?Ud(a,e.type,e.stateNode):Ld(a,n,e.memoizedProps)):null===n&&null!==e.stateNode&&ps(e,e.memoizedProps,r.memoizedProps)}break;case 27:Ns(t,e),Ms(e),512&n&&(xs||null===r||ds(r,r.return)),null!==r&&4&n&&ps(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Ns(t,e),Ms(e),512&n&&(xs||null===r||ds(r,r.return)),32&e.flags){a=e.stateNode;try{St(a,"")}catch(m){uu(e,e.return,m)}}4&n&&null!=e.stateNode&&ps(e,a=e.memoizedProps,null!==r?r.memoizedProps:a),1024&n&&(ws=!0);break;case 6:if(Ns(t,e),Ms(e),4&n){if(null===e.stateNode)throw Error(i(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n}catch(m){uu(e,e.return,m)}}break;case 3:if(Id=null,a=zs,zs=Ed(t.containerInfo),Ns(t,e),zs=a,Ms(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{jf(t.containerInfo)}catch(m){uu(e,e.return,m)}ws&&(ws=!1,Os(e));break;case 4:n=zs,zs=Ed(e.stateNode.containerInfo),Ns(t,e),Ms(e),zs=n;break;case 12:default:Ns(t,e),Ms(e);break;case 13:Ns(t,e),Ms(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==r&&null!==r.memoizedState)&&(wc=te()),4&n&&(null!==(n=e.updateQueue)&&(e.updateQueue=null,Rs(e,n)));break;case 22:a=null!==e.memoizedState;var c=null!==r&&null!==r.memoizedState,u=ys,d=xs;if(ys=u||a,xs=d||c,Ns(t,e),xs=d,ys=u,Ms(e),8192&n)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===r||c||ys||xs||Is(e)),r=null,t=e;;){if(5===t.tag||26===t.tag){if(null===r){c=r=t;try{if(o=c.stateNode,a)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var f=c.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(m){uu(c,c.return,m)}}}else if(6===t.tag){if(null===r){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(m){uu(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}4&n&&(null!==(n=e.updateQueue)&&(null!==(r=n.retryQueue)&&(n.retryQueue=null,Rs(e,r))));break;case 19:Ns(t,e),Ms(e),4&n&&(null!==(n=e.updateQueue)&&(e.updateQueue=null,Rs(e,n)));case 30:case 21:}}function Ms(e){var t=e.flags;if(2&t){try{for(var r,n=e.return;null!==n;){if(ms(n)){r=n;break}n=n.return}if(null==r)throw Error(i(160));switch(r.tag){case 27:var a=r.stateNode;gs(e,hs(e),a);break;case 5:var o=r.stateNode;32&r.flags&&(St(o,""),r.flags&=-33),gs(e,hs(e),o);break;case 3:case 4:var l=r.stateNode.containerInfo;vs(e,hs(e),l);break;default:throw Error(i(161))}}catch(s){uu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Os(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Os(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Fs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Es(e,t.alternate,t),t=t.sibling}function Is(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ls(4,t,t.return),Is(t);break;case 1:ds(t,t.return);var r=t.stateNode;"function"===typeof r.componentWillUnmount&&cs(t,t.return,r),Is(t);break;case 27:wd(t.stateNode);case 26:case 5:ds(t,t.return),Is(t);break;case 22:null===t.memoizedState&&Is(t);break;default:Is(t)}e=e.sibling}}function Ds(e,t,r){for(r=r&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var n=t.alternate,a=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:Ds(a,o,r),is(4,o);break;case 1:if(Ds(a,o,r),"function"===typeof(a=(n=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){uu(n,n.return,c)}if(null!==(a=(n=o).updateQueue)){var l=n.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)fo(s[a],l)}catch(c){uu(n,n.return,c)}}r&&64&i&&ss(o),us(o,o.return);break;case 27:bs(o);case 26:case 5:Ds(a,o,r),r&&null===n&&4&i&&fs(o),us(o,o.return);break;case 12:Ds(a,o,r);break;case 13:Ds(a,o,r),r&&4&i&&As(a,o);break;case 22:null===o.memoizedState&&Ds(a,o,r),us(o,o.return);break;case 30:break;default:Ds(a,o,r)}t=t.sibling}}function Us(e,t){var r=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==r&&(null!=e&&e.refCount++,null!=r&&La(r))}function $s(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&La(e))}function Bs(e,t,r,n){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Hs(e,t,r,n),t=t.sibling}function Hs(e,t,r,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bs(e,t,r,n),2048&a&&is(9,t);break;case 1:case 13:default:Bs(e,t,r,n);break;case 3:Bs(e,t,r,n),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&La(e)));break;case 12:if(2048&a){Bs(e,t,r,n),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){uu(t,t.return,s)}}else Bs(e,t,r,n);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,null!==t.memoizedState?2&o._visibility?Bs(e,t,r,n):Vs(e,t):2&o._visibility?Bs(e,t,r,n):(o._visibility|=2,Ws(e,t,r,n,0!==(10256&t.subtreeFlags))),2048&a&&Us(i,t);break;case 24:Bs(e,t,r,n),2048&a&&$s(t.alternate,t)}}function Ws(e,t,r,n,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,i=t,l=r,s=n,c=i.flags;switch(i.tag){case 0:case 11:case 15:Ws(o,i,l,s,a),is(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?2&u._visibility?Ws(o,i,l,s,a):Vs(o,i):(u._visibility|=2,Ws(o,i,l,s,a)),a&&2048&c&&Us(i.alternate,i);break;case 24:Ws(o,i,l,s,a),a&&2048&c&&$s(i.alternate,i);break;default:Ws(o,i,l,s,a)}t=t.sibling}}function Vs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var r=e,n=t,a=n.flags;switch(n.tag){case 22:Vs(r,n),2048&a&&Us(n.alternate,n);break;case 24:Vs(r,n),2048&a&&$s(n.alternate,n);break;default:Vs(r,n)}t=t.sibling}}var qs=8192;function Gs(e){if(e.subtreeFlags&qs)for(e=e.child;null!==e;)Ks(e),e=e.sibling}function Ks(e){switch(e.tag){case 26:Gs(e),e.flags&qs&&null!==e.memoizedState&&function(e,t,r){if(null===Bd)throw Error(i(475));var n=Bd;if("stylesheet"===t.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=_d(r.href),o=e.querySelector(Ad(a));if(o)return null!==(e=o._p)&&"object"===typeof e&&"function"===typeof e.then&&(n.count++,n=Wd.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,void Ve(o);o=e.ownerDocument||e,r=Rd(r),(a=Sd.get(a))&&Od(r,a),Ve(o=o.createElement("link"));var l=o;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(o,"link",r),t.instance=o}null===n.stylesheets&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(n.count++,t=Wd.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}(zs,e.memoizedState,e.memoizedProps);break;case 5:default:Gs(e);break;case 3:case 4:var t=zs;zs=Ed(e.stateNode.containerInfo),Gs(e),zs=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=qs,qs=16777216,Gs(e),qs=t):Gs(e))}}function Ys(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Qs(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r];ks=n,Zs(n,e)}Ys(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xs(e),e=e.sibling}function Xs(e){switch(e.tag){case 0:case 11:case 15:Qs(e),2048&e.flags&&ls(9,e,e.return);break;case 3:case 12:default:Qs(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Js(e)):Qs(e)}}function Js(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r];ks=n,Zs(n,e)}Ys(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ls(8,t,t.return),Js(t);break;case 22:2&(r=t.stateNode)._visibility&&(r._visibility&=-3,Js(t));break;default:Js(t)}e=e.sibling}}function Zs(e,t){for(;null!==ks;){var r=ks;switch(r.tag){case 0:case 11:case 15:ls(8,r,t);break;case 23:case 22:if(null!==r.memoizedState&&null!==r.memoizedState.cachePool){var n=r.memoizedState.cachePool.pool;null!=n&&n.refCount++}break;case 24:La(r.memoizedState.cache)}if(null!==(n=r.child))n.return=r,ks=n;else e:for(r=e;null!==ks;){var a=(n=ks).sibling,o=n.return;if(Ps(n),n===r){ks=null;break e}if(null!==a){a.return=o,ks=a;break e}ks=o}}}var ec={getCacheForType:function(e){var t=Ca(Na),r=t.data.get(e);return void 0===r&&(r=e(),t.data.set(e,r)),r}},tc="function"===typeof WeakMap?WeakMap:Map,rc=0,nc=null,ac=null,oc=0,ic=0,lc=null,sc=!1,cc=!1,uc=!1,dc=0,fc=0,pc=0,mc=0,hc=0,vc=0,gc=0,bc=null,yc=null,xc=!1,wc=0,Sc=1/0,kc=null,Ec=null,Pc=0,Cc=null,Tc=null,jc=0,_c=0,Ac=null,Rc=null,Nc=0,zc=null;function Lc(){if(0!==(2&rc)&&0!==oc)return oc&-oc;if(null!==L.T){return 0!==Fa?Fa:_u()}return Ae()}function Mc(){0===vc&&(vc=0===(536870912&oc)||oa?Se():536870912);var e=al.current;return null!==e&&(e.flags|=32),vc}function Oc(e,t,r){(e!==nc||2!==ic&&9!==ic)&&null===e.cancelPendingCommit||(Hc(e,0),Uc(e,oc,vc,!1)),Pe(e,r),0!==(2&rc)&&e===nc||(e===nc&&(0===(2&rc)&&(mc|=r),4===fc&&Uc(e,oc,vc,!1)),Su(e))}function Fc(e,t,r){if(0!==(6&rc))throw Error(i(327));for(var n=!r&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),a=n?function(e,t){var r=rc;rc|=2;var n=Vc(),a=qc();nc!==e||oc!==t?(kc=null,Sc=te()+500,Hc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==ic&&null!==ac){t=ac;var o=lc;t:switch(ic){case 1:ic=0,lc=null,Zc(e,t,o,1);break;case 2:case 9:if(Ya(o)){ic=0,lc=null,Jc(t);break}t=function(){2!==ic&&9!==ic||nc!==e||(ic=7),Su(e)},o.then(t,t);break e;case 3:ic=7;break e;case 4:ic=5;break e;case 7:Ya(o)?(ic=0,lc=null,Jc(t)):(ic=0,lc=null,Zc(e,t,o,7));break;case 5:var l=null;switch(ac.tag){case 26:l=ac.memoizedState;case 5:case 27:var s=ac;if(!l||$d(l)){ic=0,lc=null;var c=s.sibling;if(null!==c)ac=c;else{var u=s.return;null!==u?(ac=u,eu(u)):ac=null}break t}}ic=0,lc=null,Zc(e,t,o,5);break;case 6:ic=0,lc=null,Zc(e,t,o,6);break;case 8:Bc(),fc=6;break e;default:throw Error(i(462))}}Qc();break}catch(d){Wc(e,d)}return ba=ga=null,L.H=n,L.A=a,rc=r,null!==ac?0:(nc=null,oc=0,jn(),fc)}(e,t):Kc(e,t,!0),o=n;;){if(0===a){cc&&!n&&Uc(e,t,0,!1);break}if(r=e.current.alternate,!o||Dc(r)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=bc;var c=s.current.memoizedState.isDehydrated;if(c&&(Hc(s,l).flags|=256),2!==(l=Kc(s,l,!1))){if(uc&&!c){s.errorRecoveryDisabledLanes|=o,mc|=o,a=4;break e}o=yc,yc=a,null!==o&&(null===yc?yc=o:yc.push.apply(yc,o))}a=l}if(o=!1,2!==a)continue}}if(1===a){Hc(e,0),Uc(e,t,0,!0);break}e:{switch(n=e,o=a){case 0:case 1:throw Error(i(345));case 4:if((4194048&t)!==t)break;case 6:Uc(n,t,vc,!sc);break e;case 2:yc=null;break;case 3:case 5:break;default:throw Error(i(329))}if((62914560&t)===t&&10<(a=wc+300-te())){if(Uc(n,t,vc,!sc),0!==ye(n,0,!0))break e;n.timeoutHandle=sd(Ic.bind(null,n,r,yc,kc,xc,t,vc,mc,gc,sc,o,2,-0,0),a)}else Ic(n,r,yc,kc,xc,t,vc,mc,gc,sc,o,0,-0,0)}break}a=Kc(e,t,!1),o=!1}Su(e)}function Ic(e,t,r,n,a,o,l,s,c,u,d,f,p,m){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&(Bd={stylesheets:null,count:0,unsuspend:Hd},Ks(t),null!==(f=function(){if(null===Bd)throw Error(i(475));var e=Bd;return e.stylesheets&&0===e.count&&qd(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&qd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}())))return e.cancelPendingCommit=f(ru.bind(null,e,t,o,r,n,a,l,s,c,d,1,p,m)),void Uc(e,o,l,!u);ru(e,t,o,r,n,a,l,s,c)}function Dc(e){for(var t=e;;){var r=t.tag;if((0===r||11===r||15===r)&&16384&t.flags&&(null!==(r=t.updateQueue)&&null!==(r=r.stores)))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!Kr(o(),a))return!1}catch(i){return!1}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Uc(e,t,r,n){t&=~hc,t&=~mc,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var o=31-pe(a),i=1<<o;n[o]=-1,a&=~i}0!==r&&Ce(e,r,t)}function $c(){return 0!==(6&rc)||(ku(0,!1),!1)}function Bc(){if(null!==ac){if(0===ic)var e=ac.return;else ba=ga=null,Io(e=ac),Yi=null,Qi=0,e=ac;for(;null!==e;)os(e.alternate,e),e=e.return;ac=null}}function Hc(e,t){var r=e.timeoutHandle;-1!==r&&(e.timeoutHandle=-1,cd(r)),null!==(r=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,r()),Bc(),nc=e,ac=r=In(e.current,null),oc=t,ic=0,lc=null,sc=!1,cc=xe(e,t),uc=!1,gc=vc=hc=mc=pc=fc=0,yc=bc=null,xc=!1,0!==(8&t)&&(t|=32&t);var n=e.entangledLanes;if(0!==n)for(e=e.entanglements,n&=t;0<n;){var a=31-pe(n),o=1<<a;t|=e[a],n&=~o}return dc=t,jn(),r}function Wc(e,t){xo=null,L.H=Vi,t===Va||t===Ga?(t=Za(),ic=3):t===qa?(t=Za(),ic=4):ic=t===Cl?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,lc=t,null===ac&&(fc=1,wl(e,En(t,e.current)))}function Vc(){var e=L.H;return L.H=Vi,null===e?Vi:e}function qc(){var e=L.A;return L.A=ec,e}function Gc(){fc=4,sc||(4194048&oc)!==oc&&null!==al.current||(cc=!0),0===(134217727&pc)&&0===(134217727&mc)||null===nc||Uc(nc,oc,vc,!1)}function Kc(e,t,r){var n=rc;rc|=2;var a=Vc(),o=qc();nc===e&&oc===t||(kc=null,Hc(e,t)),t=!1;var i=fc;e:for(;;)try{if(0!==ic&&null!==ac){var l=ac,s=lc;switch(ic){case 8:Bc(),i=6;break e;case 3:case 2:case 9:case 6:null===al.current&&(t=!0);var c=ic;if(ic=0,lc=null,Zc(e,l,s,c),r&&cc){i=0;break e}break;default:c=ic,ic=0,lc=null,Zc(e,l,s,c)}}Yc(),i=fc;break}catch(u){Wc(e,u)}return t&&e.shellSuspendCounter++,ba=ga=null,rc=n,L.H=a,L.A=o,null===ac&&(nc=null,oc=0,jn()),i}function Yc(){for(;null!==ac;)Xc(ac)}function Qc(){for(;null!==ac&&!Z();)Xc(ac)}function Xc(e){var t=Xl(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ac=t}function Jc(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Ol(r,t,t.pendingProps,t.type,void 0,oc);break;case 11:t=Ol(r,t,t.pendingProps,t.type.render,t.ref,oc);break;case 5:Io(t);default:os(r,t),t=Xl(r,t=ac=Dn(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ac=t}function Zc(e,t,r,n){ba=ga=null,Io(t),Yi=null,Qi=0;var a=t.return;try{if(function(e,t,r,n,a){if(r.flags|=32768,null!==n&&"object"===typeof n&&"function"===typeof n.then){if(null!==(t=r.alternate)&&ka(t,r,a,!0),null!==(r=al.current)){switch(r.tag){case 13:return null===ol?Gc():null===r.alternate&&0===fc&&(fc=3),r.flags&=-257,r.flags|=65536,r.lanes=a,n===Ka?r.flags|=16384:(null===(t=r.updateQueue)?r.updateQueue=new Set([n]):t.add(n),du(e,n,a)),!1;case 22:return r.flags|=65536,n===Ka?r.flags|=16384:(null===(t=r.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},r.updateQueue=t):null===(r=t.retryQueue)?t.retryQueue=new Set([n]):r.add(n),du(e,n,a)),!1}throw Error(i(435,r.tag))}return du(e,n,a),Gc(),!1}if(oa)return null!==(t=al.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==sa&&ha(En(e=Error(i(422),{cause:n}),r))):(n!==sa&&ha(En(t=Error(i(423),{cause:n}),r)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,n=En(n,r),lo(e,a=kl(e.stateNode,n,a)),4!==fc&&(fc=2)),!1;var o=Error(i(520),{cause:n});if(o=En(o,r),null===bc?bc=[o]:bc.push(o),4!==fc&&(fc=2),null===t)return!0;n=En(n,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=a&-a,r.lanes|=e,lo(r,e=kl(r.stateNode,n,e)),!1;case 1:if(t=r.type,o=r.stateNode,0===(128&r.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Ec||!Ec.has(o))))return r.flags|=65536,a&=-a,r.lanes|=a,Pl(a=El(a),e,r,n),lo(r,a),!1}r=r.return}while(null!==r);return!1}(e,a,t,r,oc))return fc=1,wl(e,En(r,e.current)),void(ac=null)}catch(o){if(null!==a)throw ac=a,o;return fc=1,wl(e,En(r,e.current)),void(ac=null)}32768&t.flags?(oa||1===n?e=!0:cc||0!==(536870912&oc)?e=!1:(sc=e=!0,(2===n||9===n||3===n||6===n)&&(null!==(n=al.current)&&13===n.tag&&(n.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,sc);e=t.return;var r=ns(t.alternate,t,dc);if(null!==r)return void(ac=r);if(null!==(t=t.sibling))return void(ac=t);ac=t=e}while(null!==t);0===fc&&(fc=5)}function tu(e,t){do{var r=as(e.alternate,e);if(null!==r)return r.flags&=32767,void(ac=r);if(null!==(r=e.return)&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&null!==(e=e.sibling))return void(ac=e);ac=e=r}while(null!==e);fc=6,ac=null}function ru(e,t,r,n,a,o,l,s,c){e.cancelPendingCommit=null;do{lu()}while(0!==Pc);if(0!==(6&rc))throw Error(i(327));if(null!==t){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,function(e,t,r,n,a,o){var i=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(r=i&~r;0<r;){var u=31-pe(r),d=1<<u;l[u]=0,s[u]=-1;var f=c[u];if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];null!==p&&(p.lane&=-536870913)}r&=~d}0!==n&&Ce(e,n,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,r,o|=Tn,l,s,c),e===nc&&(ac=nc=null,oc=0),Tc=t,Cc=e,jc=r,_c=o,Ac=a,Rc=n,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(oe,function(){return su(),null})):(e.callbackNode=null,e.callbackPriority=0),n=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||n){n=L.T,L.T=null,a=M.p,M.p=2,l=rc,rc|=4;try{!function(e,t){if(e=e.containerInfo,td=rf,en(e=Zr(e))){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch(v){r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==r||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==n&&3!==f.nodeType||(c=l+n),3===f.nodeType&&(l+=f.nodeValue.length),null!==(m=f.firstChild);)p=f,f=m;for(;;){if(f===e)break t;if(p===r&&++u===a&&(s=l),p===o&&++d===n&&(c=l),null!==(m=f.nextSibling))break;p=(f=p).parentNode}f=m}r=-1===s||-1===c?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(rd={focusedElem:e,selectionRange:r},rf=!1,ks=t;null!==ks;)if(e=(t=ks).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,ks=e;else for(;null!==ks;){switch(o=(t=ks).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,r=t,a=o.memoizedProps,o=o.memoizedState,n=r.stateNode;try{var h=vl(r.type,a,(r.elementType,r.type));e=n.getSnapshotBeforeUpdate(h,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(g){uu(r,r.return,g)}}break;case 3:if(0!==(1024&e))if(9===(r=(e=t.stateNode.containerInfo).nodeType))hd(e);else if(1===r)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,ks=e;break}ks=t.return}}(e,t)}finally{rc=l,M.p=a,L.T=n}}Pc=1,nu(),au(),ou()}}function nu(){if(1===Pc){Pc=0;var e=Cc,t=Tc,r=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||r){r=L.T,L.T=null;var n=M.p;M.p=2;var a=rc;rc|=4;try{Ls(t,e);var o=rd,i=Zr(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&Jr(l.ownerDocument.documentElement,l)){if(null!==s&&en(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=l.textContent.length,h=Math.min(s.start,m),v=void 0===s.end?h:Math.min(s.end,m);!p.extend&&h>v&&(i=v,v=h,h=i);var g=Xr(l,h),b=Xr(l,v);if(g&&b&&(1!==p.rangeCount||p.anchorNode!==g.node||p.anchorOffset!==g.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var y=d.createRange();y.setStart(g.node,g.offset),p.removeAllRanges(),h>v?(p.addRange(y),p.extend(b.node,b.offset)):(y.setEnd(b.node,b.offset),p.addRange(y))}}}}for(d=[],p=l;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}rf=!!td,rd=td=null}finally{rc=a,M.p=n,L.T=r}}e.current=t,Pc=2}}function au(){if(2===Pc){Pc=0;var e=Cc,t=Tc,r=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||r){r=L.T,L.T=null;var n=M.p;M.p=2;var a=rc;rc|=4;try{Es(e,t.alternate,t)}finally{rc=a,M.p=n,L.T=r}}Pc=3}}function ou(){if(4===Pc||3===Pc){Pc=0,ee();var e=Cc,t=Tc,r=jc,n=Rc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Pc=5:(Pc=0,Tc=Cc=null,iu(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Ec=null),_e(r),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==n){t=L.T,a=M.p,M.p=2,L.T=null;try{for(var o=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];o(l.value,{componentStack:l.stack})}}finally{L.T=t,M.p=a}}0!==(3&jc)&&lu(),Su(e),a=e.pendingLanes,0!==(4194090&r)&&0!==(42&a)?e===zc?Nc++:(Nc=0,zc=e):Nc=0,ku(0,!1)}}function iu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,La(t)))}function lu(e){return nu(),au(),ou(),su()}function su(){if(5!==Pc)return!1;var e=Cc,t=_c;_c=0;var r=_e(jc),n=L.T,a=M.p;try{M.p=32>r?32:r,L.T=null,r=Ac,Ac=null;var o=Cc,l=jc;if(Pc=0,Tc=Cc=null,jc=0,0!==(6&rc))throw Error(i(331));var s=rc;if(rc|=4,Xs(o.current),Hs(o,o.current,l,r),rc=s,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,o)}catch(c){}return!0}finally{M.p=a,L.T=n,iu(e,t)}}function cu(e,t,r){t=En(r,t),null!==(e=oo(e,t=kl(e.stateNode,t,2),2))&&(Pe(e,2),Su(e))}function uu(e,t,r){if(3===e.tag)cu(e,e,r);else for(;null!==t;){if(3===t.tag){cu(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Ec||!Ec.has(n))){e=En(r,e),null!==(n=oo(t,r=El(2),2))&&(Pl(r,n,t,e),Pe(n,2),Su(n));break}}t=t.return}}function du(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new tc;var a=new Set;n.set(t,a)}else void 0===(a=n.get(t))&&(a=new Set,n.set(t,a));a.has(r)||(uc=!0,a.add(r),e=fu.bind(null,e,t,r),t.then(e,e))}function fu(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,nc===e&&(oc&r)===r&&(4===fc||3===fc&&(62914560&oc)===oc&&300>te()-wc?0===(2&rc)&&Hc(e,0):hc|=r,gc===oc&&(gc=0)),Su(e)}function pu(e,t){0===t&&(t=ke()),null!==(e=Rn(e,t))&&(Pe(e,t),Su(e))}function mu(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),pu(e,r)}function hu(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==n&&n.delete(t),pu(e,r)}var vu=null,gu=null,bu=!1,yu=!1,xu=!1,wu=0;function Su(e){e!==gu&&null===e.next&&(null===gu?vu=gu=e:gu=gu.next=e),yu=!0,bu||(bu=!0,dd(function(){0!==(6&rc)?X(ne,Eu):Pu()}))}function ku(e,t){if(!xu&&yu){xu=!0;do{for(var r=!1,n=vu;null!==n;){if(!t)if(0!==e){var a=n.pendingLanes;if(0===a)var o=0;else{var i=n.suspendedLanes,l=n.pingedLanes;o=(1<<31-pe(42|e)+1)-1,o=201326741&(o&=a&~(i&~l))?201326741&o|1:o?2|o:0}0!==o&&(r=!0,ju(n,o))}else o=oc,0===(3&(o=ye(n,n===nc?o:0,null!==n.cancelPendingCommit||-1!==n.timeoutHandle)))||xe(n,o)||(r=!0,ju(n,o));n=n.next}}while(r);xu=!1}}function Eu(){Pu()}function Pu(){yu=bu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==ld&&(ld=e,!0);return ld=null,!1}()&&(e=wu),wu=0);for(var t=te(),r=null,n=vu;null!==n;){var a=n.next,o=Cu(n,t);0===o?(n.next=null,null===r?vu=a:r.next=a,null===a&&(gu=r)):(r=n,(0!==e||0!==(3&o))&&(yu=!0)),n=a}ku(e,!1)}function Cu(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-pe(o),l=1<<i,s=a[i];-1===s?0!==(l&r)&&0===(l&n)||(a[i]=we(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(r=oc,r=ye(e,e===(t=nc)?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),n=e.callbackNode,0===r||e===t&&(2===ic||9===ic)||null!==e.cancelPendingCommit)return null!==n&&null!==n&&J(n),e.callbackNode=null,e.callbackPriority=0;if(0===(3&r)||xe(e,r)){if((t=r&-r)===e.callbackPriority)return t;switch(null!==n&&J(n),_e(r)){case 2:case 8:r=ae;break;case 32:default:r=oe;break;case 268435456:r=le}return n=Tu.bind(null,e),r=X(r,n),e.callbackPriority=t,e.callbackNode=r,t}return null!==n&&null!==n&&J(n),e.callbackPriority=2,e.callbackNode=null,2}function Tu(e,t){if(0!==Pc&&5!==Pc)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(lu()&&e.callbackNode!==r)return null;var n=oc;return 0===(n=ye(e,e===nc?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Fc(e,n,t),Cu(e,te()),null!=e.callbackNode&&e.callbackNode===r?Tu.bind(null,e):null)}function ju(e,t){if(lu())return null;Fc(e,t,!0)}function _u(){return 0===wu&&(wu=Se()),wu}function Au(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:_t(""+e)}function Ru(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}for(var Nu=0;Nu<wn.length;Nu++){var zu=wn[Nu];Sn(zu.toLowerCase(),"on"+(zu[0].toUpperCase()+zu.slice(1)))}Sn(pn,"onAnimationEnd"),Sn(mn,"onAnimationIteration"),Sn(hn,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(vn,"onTransitionRun"),Sn(gn,"onTransitionStart"),Sn(bn,"onTransitionCancel"),Sn(yn,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lu));function Ou(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){gl(u)}a.currentTarget=null,o=s}else for(i=0;i<n.length;i++){if(s=(l=n[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){gl(u)}a.currentTarget=null,o=s}}}}function Fu(e,t){var r=t[Me];void 0===r&&(r=t[Me]=new Set);var n=e+"__bubble";r.has(n)||($u(t,e,2,!1),r.add(n))}function Iu(e,t,r){var n=0;t&&(n|=4),$u(r,e,n,t)}var Du="_reactListening"+Math.random().toString(36).slice(2);function Uu(e){if(!e[Du]){e[Du]=!0,qe.forEach(function(t){"selectionchange"!==t&&(Mu.has(t)||Iu(t,!1,e),Iu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Du]||(t[Du]=!0,Iu("selectionchange",!1,t))}}function $u(e,t,r,n){switch(uf(t)){case 2:var a=nf;break;case 8:a=af;break;default:a=of}r=a.bind(null,t,r,e),a=void 0,!Dt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),n?void 0!==a?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):void 0!==a?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Bu(e,t,r,n,a){var o=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===a)break;if(4===i)for(i=n.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===a)return;i=i.return}for(;null!==l;){if(null===(i=$e(l)))return;if(5===(c=i.tag)||6===c||26===c||27===c){n=o=i;continue e}l=l.parentNode}}n=n.return}Ot(function(){var n=o,a=Rt(r),i=[];e:{var l=xn.get(e);if(void 0!==l){var c=Zt,u=e;switch(e){case"keypress":if(0===Vt(r))break e;case"keydown":case"keyup":c=mr;break;case"focusin":u="focus",c=or;break;case"focusout":u="blur",c=or;break;case"beforeblur":case"afterblur":c=or;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=nr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=ar;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=vr;break;case pn:case mn:case hn:c=ir;break;case yn:c=gr;break;case"scroll":case"scrollend":c=tr;break;case"wheel":c=br;break;case"copy":case"cut":case"paste":c=lr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=hr;break;case"toggle":case"beforetoggle":c=yr}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==l?l+"Capture":null:l;d=[];for(var m,h=n;null!==h;){var v=h;if(m=v.stateNode,5!==(v=v.tag)&&26!==v&&27!==v||null===m||null===p||null!=(v=Ft(h,p))&&d.push(Hu(h,v,m)),f)break;h=h.return}0<d.length&&(l=new c(l,u,null,r,a),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||r===At||!(u=r.relatedTarget||r.fromElement)||!$e(u)&&!u[Le])&&(c||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=n,null!==(u=(u=r.relatedTarget||r.toElement)?$e(u):null)&&(f=s(u),d=u.tag,u!==f||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=n),c!==u)){if(d=nr,v="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=hr,v="onPointerLeave",p="onPointerEnter",h="pointer"),f=null==c?l:He(c),m=null==u?l:He(u),(l=new d(v,h+"leave",c,r,a)).target=f,l.relatedTarget=m,v=null,$e(a)===n&&((d=new d(p,h+"enter",u,r,a)).target=m,d.relatedTarget=f,v=d),f=v,c&&u)e:{for(p=u,h=0,m=d=c;m;m=Vu(m))h++;for(m=0,v=p;v;v=Vu(v))m++;for(;0<h-m;)d=Vu(d),h--;for(;0<m-h;)p=Vu(p),m--;for(;h--;){if(d===p||null!==p&&d===p.alternate)break e;d=Vu(d),p=Vu(p)}d=null}else d=null;null!==c&&qu(i,l,c,d,!1),null!==u&&null!==f&&qu(i,f,u,d,!0)}if("select"===(c=(l=n?He(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var g=Fr;else if(Rr(l))if(Ir)g=Gr;else{g=Vr;var b=Wr}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?n&&Ct(n.elementType)&&(g=Fr):g=qr;switch(g&&(g=g(e,n))?Nr(i,g,r,a):(b&&b(e,l,n),"focusout"===e&&n&&"number"===l.type&&null!=n.memoizedProps.value&&bt(l,"number",l.value)),b=n?He(n):window,e){case"focusin":(Rr(b)||"true"===b.contentEditable)&&(rn=b,nn=n,an=null);break;case"focusout":an=nn=rn=null;break;case"mousedown":on=!0;break;case"contextmenu":case"mouseup":case"dragend":on=!1,ln(i,r,a);break;case"selectionchange":if(tn)break;case"keydown":case"keyup":ln(i,r,a)}var y;if(wr)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else _r?Tr(e,r)&&(x="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(x="onCompositionStart");x&&(Er&&"ko"!==r.locale&&(_r||"onCompositionStart"!==x?"onCompositionEnd"===x&&_r&&(y=Wt()):(Bt="value"in($t=a)?$t.value:$t.textContent,_r=!0)),0<(b=Wu(n,x)).length&&(x=new sr(x,e,null,r,a),i.push({event:x,listeners:b}),y?x.data=y:null!==(y=jr(r))&&(x.data=y))),(y=kr?function(e,t){switch(e){case"compositionend":return jr(t);case"keypress":return 32!==t.which?null:(Cr=!0,Pr);case"textInput":return(e=t.data)===Pr&&Cr?null:e;default:return null}}(e,r):function(e,t){if(_r)return"compositionend"===e||!wr&&Tr(e,t)?(e=Wt(),Ht=Bt=$t=null,_r=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Er&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(x=Wu(n,"onBeforeInput")).length&&(b=new sr("onBeforeInput","beforeinput",null,r,a),i.push({event:b,listeners:x}),b.data=y)),function(e,t,r,n,a){if("submit"===t&&r&&r.stateNode===a){var o=Au((a[ze]||null).action),i=n.submitter;i&&null!==(t=(t=i[ze]||null)?Au(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new Zt("action","action",null,n,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(0!==wu){var e=i?Ru(a,i):new FormData(a);Ri(r,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?Ru(a,i):new FormData(a),Ri(r,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,n,r,a)}Ou(i,t)})}function Hu(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wu(e,t){for(var r=t+"Capture",n=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=Ft(e,r))&&n.unshift(Hu(e,a,o)),null!=(a=Ft(e,t))&&n.push(Hu(e,a,o))),3===e.tag)return n;e=e.return}return[]}function Vu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function qu(e,t,r,n,a){for(var o=t._reactName,i=[];null!==r&&r!==n;){var l=r,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===n)break;5!==l&&26!==l&&27!==l||null===c||(s=c,a?null!=(c=Ft(r,o))&&i.unshift(Hu(r,c,s)):a||null!=(c=Ft(r,o))&&i.push(Hu(r,c,s))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}var Gu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function Yu(e){return("string"===typeof e?e:""+e).replace(Gu,"\n").replace(Ku,"")}function Qu(e,t){return t=Yu(t),Yu(e)===t}function Xu(){}function Ju(e,t,r,n,a,o){switch(r){case"children":"string"===typeof n?"body"===t||"textarea"===t&&""===n||St(e,n):("number"===typeof n||"bigint"===typeof n)&&"body"!==t&&St(e,""+n);break;case"className":rt(e,"class",n);break;case"tabIndex":rt(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(e,r,n);break;case"style":Pt(e,n,o);break;case"data":if("object"!==t){rt(e,"data",n);break}case"src":case"href":if(""===n&&("a"!==t||"href"!==r)){e.removeAttribute(r);break}if(null==n||"function"===typeof n||"symbol"===typeof n||"boolean"===typeof n){e.removeAttribute(r);break}n=_t(""+n),e.setAttribute(r,n);break;case"action":case"formAction":if("function"===typeof n){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===r?("input"!==t&&Ju(e,t,"name",a.name,a,null),Ju(e,t,"formEncType",a.formEncType,a,null),Ju(e,t,"formMethod",a.formMethod,a,null),Ju(e,t,"formTarget",a.formTarget,a,null)):(Ju(e,t,"encType",a.encType,a,null),Ju(e,t,"method",a.method,a,null),Ju(e,t,"target",a.target,a,null))),null==n||"symbol"===typeof n||"boolean"===typeof n){e.removeAttribute(r);break}n=_t(""+n),e.setAttribute(r,n);break;case"onClick":null!=n&&(e.onclick=Xu);break;case"onScroll":null!=n&&Fu("scroll",e);break;case"onScrollEnd":null!=n&&Fu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!==typeof n||!("__html"in n))throw Error(i(61));if(null!=(r=n.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=r}}break;case"multiple":e.multiple=n&&"function"!==typeof n&&"symbol"!==typeof n;break;case"muted":e.muted=n&&"function"!==typeof n&&"symbol"!==typeof n;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==n||"function"===typeof n||"boolean"===typeof n||"symbol"===typeof n){e.removeAttribute("xlink:href");break}r=_t(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(r,""+n):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":!0===n?e.setAttribute(r,""):!1!==n&&null!=n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(r,n):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":null!=n&&"function"!==typeof n&&"symbol"!==typeof n&&!isNaN(n)&&1<=n?e.setAttribute(r,n):e.removeAttribute(r);break;case"rowSpan":case"start":null==n||"function"===typeof n||"symbol"===typeof n||isNaN(n)?e.removeAttribute(r):e.setAttribute(r,n);break;case"popover":Fu("beforetoggle",e),Fu("toggle",e),tt(e,"popover",n);break;case"xlinkActuate":nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":nt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":nt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":nt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":nt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":tt(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<r.length)||"o"!==r[0]&&"O"!==r[0]||"n"!==r[1]&&"N"!==r[1])&&tt(e,r=Tt.get(r)||r,n)}}function Zu(e,t,r,n,a,o){switch(r){case"style":Pt(e,n,o);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!==typeof n||!("__html"in n))throw Error(i(61));if(null!=(r=n.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=r}}break;case"children":"string"===typeof n?St(e,n):("number"===typeof n||"bigint"===typeof n)&&St(e,""+n);break;case"onScroll":null!=n&&Fu("scroll",e);break;case"onScrollEnd":null!=n&&Fu("scrollend",e);break;case"onClick":null!=n&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ge.hasOwnProperty(r)||("o"!==r[0]||"n"!==r[1]||(a=r.endsWith("Capture"),t=r.slice(2,a?r.length-7:void 0),"function"===typeof(o=null!=(o=e[ze]||null)?o[r]:null)&&e.removeEventListener(t,o,a),"function"!==typeof n)?r in e?e[r]=n:!0===n?e.setAttribute(r,""):tt(e,r,n):("function"!==typeof o&&null!==o&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,n,a)))}}function ed(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fu("error",e),Fu("load",e);var n,a=!1,o=!1;for(n in r)if(r.hasOwnProperty(n)){var l=r[n];if(null!=l)switch(n){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ju(e,t,n,l,r,null)}}return o&&Ju(e,t,"srcSet",r.srcSet,r,null),void(a&&Ju(e,t,"src",r.src,r,null));case"input":Fu("invalid",e);var s=n=l=o=null,c=null,u=null;for(a in r)if(r.hasOwnProperty(a)){var d=r[a];if(null!=d)switch(a){case"name":o=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":n=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:Ju(e,t,a,d,r,null)}}return gt(e,n,s,c,u,l,o,!1),void dt(e);case"select":for(o in Fu("invalid",e),a=l=n=null,r)if(r.hasOwnProperty(o)&&null!=(s=r[o]))switch(o){case"value":n=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Ju(e,t,o,s,r,null)}return t=n,r=l,e.multiple=!!a,void(null!=t?yt(e,!!a,t,!1):null!=r&&yt(e,!!a,r,!0));case"textarea":for(l in Fu("invalid",e),n=o=a=null,r)if(r.hasOwnProperty(l)&&null!=(s=r[l]))switch(l){case"value":a=s;break;case"defaultValue":o=s;break;case"children":n=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:Ju(e,t,l,s,r,null)}return wt(e,a,o,n),void dt(e);case"option":for(c in r)if(r.hasOwnProperty(c)&&null!=(a=r[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Ju(e,t,c,a,r,null);return;case"dialog":Fu("beforetoggle",e),Fu("toggle",e),Fu("cancel",e),Fu("close",e);break;case"iframe":case"object":Fu("load",e);break;case"video":case"audio":for(a=0;a<Lu.length;a++)Fu(Lu[a],e);break;case"image":Fu("error",e),Fu("load",e);break;case"details":Fu("toggle",e);break;case"embed":case"source":case"link":Fu("error",e),Fu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in r)if(r.hasOwnProperty(u)&&null!=(a=r[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ju(e,t,u,a,r,null)}return;default:if(Ct(t)){for(d in r)r.hasOwnProperty(d)&&(void 0!==(a=r[d])&&Zu(e,t,d,a,r,void 0));return}}for(s in r)r.hasOwnProperty(s)&&(null!=(a=r[s])&&Ju(e,t,s,a,r,null))}var td=null,rd=null;function nd(e){return 9===e.nodeType?e:e.ownerDocument}function ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function od(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function id(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ld=null;var sd="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(fd)}:sd;function fd(e){setTimeout(function(){throw e})}function pd(e){return"head"===e}function md(e,t){var r=t,n=0,a=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&8===o.nodeType)if("/$"===(r=o.data)){if(0<n&&8>n){r=n;var i=e.ownerDocument;if(1&r&&wd(i.documentElement),2&r&&wd(i.body),4&r)for(wd(r=i.head),i=r.firstChild;i;){var l=i.nextSibling,s=i.nodeName;i[De]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===i.rel.toLowerCase()||r.removeChild(i),i=l}}if(0===a)return e.removeChild(o),void jf(t);a--}else"$"===r||"$?"===r||"$!"===r?a++:n=r.charCodeAt(0)-48;else n=0;r=o}while(r);jf(t)}function hd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":hd(r),Ue(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===r.rel.toLowerCase())continue}e.removeChild(r)}}function vd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function gd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var bd=null;function yd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}function xd(e,t,r){switch(t=nd(r),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ue(e)}var Sd=new Map,kd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Pd=M.d;M.d={f:function(){var e=Pd.f(),t=$c();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?zi(t):Pd.r(e)},D:function(e){Pd.D(e),Td("dns-prefetch",e,null)},C:function(e,t){Pd.C(e,t),Td("preconnect",e,t)},L:function(e,t,r){Pd.L(e,t,r);var n=Cd;if(n&&e&&t){var a='link[rel="preload"][as="'+ht(t)+'"]';"image"===t&&r&&r.imageSrcSet?(a+='[imagesrcset="'+ht(r.imageSrcSet)+'"]',"string"===typeof r.imageSizes&&(a+='[imagesizes="'+ht(r.imageSizes)+'"]')):a+='[href="'+ht(e)+'"]';var o=a;switch(t){case"style":o=_d(e);break;case"script":o=Nd(e)}Sd.has(o)||(e=f({rel:"preload",href:"image"===t&&r&&r.imageSrcSet?void 0:e,as:t},r),Sd.set(o,e),null!==n.querySelector(a)||"style"===t&&n.querySelector(Ad(o))||"script"===t&&n.querySelector(zd(o))||(ed(t=n.createElement("link"),"link",e),Ve(t),n.head.appendChild(t)))}},m:function(e,t){Pd.m(e,t);var r=Cd;if(r&&e){var n=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+ht(n)+'"][href="'+ht(e)+'"]',o=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Nd(e)}if(!Sd.has(o)&&(e=f({rel:"modulepreload",href:e},t),Sd.set(o,e),null===r.querySelector(a))){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(zd(o)))return}ed(n=r.createElement("link"),"link",e),Ve(n),r.head.appendChild(n)}}},X:function(e,t){Pd.X(e,t);var r=Cd;if(r&&e){var n=We(r).hoistableScripts,a=Nd(e),o=n.get(a);o||((o=r.querySelector(zd(a)))||(e=f({src:e,async:!0},t),(t=Sd.get(a))&&Fd(e,t),Ve(o=r.createElement("script")),ed(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}},S:function(e,t,r){Pd.S(e,t,r);var n=Cd;if(n&&e){var a=We(n).hoistableStyles,o=_d(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=n.querySelector(Ad(o)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},r),(r=Sd.get(o))&&Od(e,r);var s=i=n.createElement("link");Ve(s),ed(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Md(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}},M:function(e,t){Pd.M(e,t);var r=Cd;if(r&&e){var n=We(r).hoistableScripts,a=Nd(e),o=n.get(a);o||((o=r.querySelector(zd(a)))||(e=f({src:e,async:!0,type:"module"},t),(t=Sd.get(a))&&Fd(e,t),Ve(o=r.createElement("script")),ed(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}}};var Cd="undefined"===typeof document?null:document;function Td(e,t,r){var n=Cd;if(n&&"string"===typeof t&&t){var a=ht(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof r&&(a+='[crossorigin="'+r+'"]'),kd.has(a)||(kd.add(a),e={rel:e,crossOrigin:r,href:t},null===n.querySelector(a)&&(ed(t=n.createElement("link"),"link",e),Ve(t),n.head.appendChild(t)))}}function jd(e,t,r,n){var a,o,l,s,c=(c=W.current)?Ed(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof r.precedence&&"string"===typeof r.href?(t=_d(r.href),(n=(r=We(c).hoistableStyles).get(t))||(n={type:"style",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===r.rel&&"string"===typeof r.href&&"string"===typeof r.precedence){e=_d(r.href);var u=We(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Ad(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Sd.set(e,r),u||(a=c,o=e,l=r,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),ed(o,"link",l),Ve(o),a.head.appendChild(o))))),t&&null===n)throw Error(i(528,""));return d}if(t&&null!==n)throw Error(i(529,""));return null;case"script":return t=r.async,"string"===typeof(r=r.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Nd(r),(n=(r=We(c).hoistableScripts).get(t))||(n={type:"script",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function _d(e){return'href="'+ht(e)+'"'}function Ad(e){return'link[rel="stylesheet"]['+e+"]"}function Rd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nd(e){return'[src="'+ht(e)+'"]'}function zd(e){return"script[async]"+e}function Ld(e,t,r){if(t.count++,null===t.instance)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ht(r.href)+'"]');if(n)return t.instance=n,Ve(n),n;var a=f({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return Ve(n=(e.ownerDocument||e).createElement("style")),ed(n,"style",a),Md(n,r.precedence,e),t.instance=n;case"stylesheet":a=_d(r.href);var o=e.querySelector(Ad(a));if(o)return t.state.loading|=4,t.instance=o,Ve(o),o;n=Rd(r),(a=Sd.get(a))&&Od(n,a),Ve(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(o,"link",n),t.state.loading|=4,Md(o,r.precedence,e),t.instance=o;case"script":return o=Nd(r.src),(a=e.querySelector(zd(o)))?(t.instance=a,Ve(a),a):(n=r,(a=Sd.get(o))&&Fd(n=f({},r),a),Ve(a=(e=e.ownerDocument||e).createElement("script")),ed(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(n=t.instance,t.state.loading|=4,Md(n,r.precedence,e));return t.instance}function Md(e,t,r){for(var n=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,o=a,i=0;i<n.length;i++){var l=n[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===r.nodeType?r.head:r).insertBefore(e,t.firstChild)}function Od(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Fd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Id=null;function Dd(e,t,r){if(null===Id){var n=new Map,a=Id=new Map;a.set(r,n)}else(n=(a=Id).get(r))||(n=new Map,a.set(r,n));if(n.has(e))return n;for(n.set(e,null),r=r.getElementsByTagName(e),a=0;a<r.length;a++){var o=r[a];if(!(o[De]||o[Ne]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=n.get(i);l?l.push(o):n.set(i,[o])}}return n}function Ud(e,t,r){(e=e.ownerDocument||e).head.insertBefore(r,"title"===t?e.querySelector("head > title"):null)}function $d(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Hd(){}function Wd(){if(this.count--,0===this.count)if(this.stylesheets)qd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Vd=null;function qd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Vd=new Map,t.forEach(Gd,e),Vd=null,Wd.call(e))}function Gd(e,t){if(!(4&t.state.loading)){var r=Vd.get(e);if(r)var n=r.get(null);else{r=new Map,Vd.set(e,r);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(r.set(i.dataset.precedence,i),n=i)}n&&r.set(null,n)}i=(a=t.instance).getAttribute("data-precedence"),(o=r.get(i)||n)===n&&r.set(null,a),r.set(i,a),this.count++,n=Wd.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Kd={$$typeof:w,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function Yd(e,t,r,n,a,o,i,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Qd(e,t,r,n,a,o,i,l,s,c,u,d){return e=new Yd(e,t,r,i,l,s,c,d),t=1,!0===o&&(t|=24),o=On(3,null,null,t),e.current=o,o.stateNode=e,(t=za()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:r,cache:t},ro(o),e}function Xd(e){return e?e=Ln:Ln}function Jd(e,t,r,n,a,o){a=Xd(a),null===n.context?n.context=a:n.pendingContext=a,(n=ao(t)).payload={element:r},null!==(o=void 0===o?null:o)&&(n.callback=o),null!==(r=oo(e,n,t))&&(Oc(r,0,t),io(r,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function ef(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tf(e){if(13===e.tag){var t=Rn(e,67108864);null!==t&&Oc(t,0,67108864),ef(e,67108864)}}var rf=!0;function nf(e,t,r,n){var a=L.T;L.T=null;var o=M.p;try{M.p=2,of(e,t,r,n)}finally{M.p=o,L.T=a}}function af(e,t,r,n){var a=L.T;L.T=null;var o=M.p;try{M.p=8,of(e,t,r,n)}finally{M.p=o,L.T=a}}function of(e,t,r,n){if(rf){var a=lf(n);if(null===a)Bu(e,t,n,sf,r),yf(e,n);else if(function(e,t,r,n,a){switch(t){case"focusin":return ff=xf(ff,e,t,r,n,a),!0;case"dragenter":return pf=xf(pf,e,t,r,n,a),!0;case"mouseover":return mf=xf(mf,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return hf.set(o,xf(hf.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,vf.set(o,xf(vf.get(o)||null,e,t,r,n,a)),!0}return!1}(a,e,t,r,n))n.stopPropagation();else if(yf(e,n),4&t&&-1<bf.indexOf(e)){for(;null!==a;){var o=Be(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=be(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-pe(i);l.entanglements[1]|=s,i&=~s}Su(o),0===(6&rc)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(l=Rn(o,2))&&Oc(l,0,2),$c(),ef(o,2)}if(null===(o=lf(n))&&Bu(e,t,n,sf,r),o===a)break;a=o}null!==a&&n.stopPropagation()}else Bu(e,t,n,null,r)}}function lf(e){return cf(e=Rt(e))}var sf=null;function cf(e){if(sf=null,null!==(e=$e(e))){var t=s(e);if(null===t)e=null;else{var r=t.tag;if(13===r){if(null!==(e=c(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sf=e,null}function uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(re()){case ne:return 2;case ae:return 8;case oe:case ie:return 32;case le:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,pf=null,mf=null,hf=new Map,vf=new Map,gf=[],bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":pf=null;break;case"mouseover":case"mouseout":mf=null;break;case"pointerover":case"pointerout":hf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vf.delete(t.pointerId)}}function xf(e,t,r,n,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Be(t))&&tf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function wf(e){var t=$e(e.target);if(null!==t){var r=s(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=c(r)))return e.blockedOn=t,void function(e,t){var r=M.p;try{return M.p=e,t()}finally{M.p=r}}(e.priority,function(){if(13===r.tag){var e=Lc();e=je(e);var t=Rn(r,e);null!==t&&Oc(t,0,e),ef(r,e)}})}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Sf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=lf(e.nativeEvent);if(null!==r)return null!==(t=Be(r))&&tf(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);At=n,r.target.dispatchEvent(n),At=null,t.shift()}return!0}function kf(e,t,r){Sf(e)&&r.delete(t)}function Ef(){df=!1,null!==ff&&Sf(ff)&&(ff=null),null!==pf&&Sf(pf)&&(pf=null),null!==mf&&Sf(mf)&&(mf=null),hf.forEach(kf),vf.forEach(kf)}function Pf(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Ef)))}var Cf=null;function Tf(e){Cf!==e&&(Cf=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Cf===e&&(Cf=null);for(var t=0;t<e.length;t+=3){var r=e[t],n=e[t+1],a=e[t+2];if("function"!==typeof n){if(null===cf(n||r))continue;break}var o=Be(r);null!==o&&(e.splice(t,3),t-=3,Ri(o,{pending:!0,data:a,method:r.method,action:n},n,a))}}))}function jf(e){function t(t){return Pf(t,e)}null!==ff&&Pf(ff,e),null!==pf&&Pf(pf,e),null!==mf&&Pf(mf,e),hf.forEach(t),vf.forEach(t);for(var r=0;r<gf.length;r++){var n=gf[r];n.blockedOn===e&&(n.blockedOn=null)}for(;0<gf.length&&null===(r=gf[0]).blockedOn;)wf(r),null===r.blockedOn&&gf.shift();if(null!=(r=(e.ownerDocument||e).$$reactFormReplay))for(n=0;n<r.length;n+=3){var a=r[n],o=r[n+1],i=a[ze]||null;if("function"===typeof o)i||Tf(r);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[ze]||null)l=i.formAction;else if(null!==cf(a))continue}else l=i.action;"function"===typeof l?r[n+1]=l:(r.splice(n,3),n-=3),Tf(r)}}}function _f(e){this._internalRoot=e}function Af(e){this._internalRoot=e}Af.prototype.render=_f.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Jd(t.current,Lc(),e,t,null,null)},Af.prototype.unmount=_f.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),$c(),t[Le]=null}},Af.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var r=0;r<gf.length&&0!==t&&t<gf[r].priority;r++);gf.splice(r,0,e),0===r&&wf(e)}};var Rf=a.version;if("19.1.0"!==Rf)throw Error(i(527,Rf,"19.1.0"));M.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(i(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(n=a.return)){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return u(a),e;if(o===n)return u(a),t;o=o.sibling}throw Error(i(188))}if(r.return!==n.return)r=a,n=o;else{for(var l=!1,c=a.child;c;){if(c===r){l=!0,r=a,n=o;break}if(c===n){l=!0,n=a,r=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===r){l=!0,r=o,n=a;break}if(c===n){l=!0,n=o,r=a;break}c=c.sibling}if(!l)throw Error(i(189))}}if(r.alternate!==n)throw Error(i(190))}if(3!==r.tag)throw Error(i(188));return r.stateNode.current===r?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Nf={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var zf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zf.isDisabled&&zf.supportsFiber)try{ue=zf.inject(Nf),de=zf}catch(Mf){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var r=!1,n="",a=bl,o=yl,s=xl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Qd(e,1,!1,null,0,r,n,a,o,s,0,null),e[Le]=t.current,Uu(e),new _f(t)},t.hydrateRoot=function(e,t,r){if(!l(e))throw Error(i(299));var n=!1,a="",o=bl,s=yl,c=xl,u=null;return null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(n=!0),void 0!==r.identifierPrefix&&(a=r.identifierPrefix),void 0!==r.onUncaughtError&&(o=r.onUncaughtError),void 0!==r.onCaughtError&&(s=r.onCaughtError),void 0!==r.onRecoverableError&&(c=r.onRecoverableError),void 0!==r.unstable_transitionCallbacks&&r.unstable_transitionCallbacks,void 0!==r.formState&&(u=r.formState)),(t=Qd(e,1,!0,t,0,n,a,o,s,c,0,u)).context=Xd(null),r=t.current,(a=ao(n=je(n=Lc()))).callback=null,oo(r,a,n),r=n,t.current.lanes=r,Pe(t,r),Su(t),e[Le]=t.current,Uu(e),new Af(t)},t.version="19.1.0"},43:(e,t,r)=>{"use strict";e.exports=r(288)},173:(e,t,r)=>{e.exports=r(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},288:(e,t)=>{"use strict";var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}function b(){}function y(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var x=y.prototype=new b;x.constructor=y,h(x,g.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function E(e,t,n,a,o,i){return n=i.ref,{$$typeof:r,type:e,key:t,ref:void 0!==n?n:null,props:i}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function j(){}function _(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0;break;case f:return _((u=e._init)(e._payload),t,a,o,i)}}if(u)return i=i(e),u=""===o?"."+T(e,0):o,w(i)?(a="",null!=u&&(a=u.replace(C,"$&/")+"/"),_(i,t,a,"",function(e){return e})):null!=i&&(P(i)&&(s=i,c=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+u,i=E(s.type,c,void 0,0,0,s.props)),t.push(i)),1;u=0;var d,m=""===o?".":o+":";if(w(e))for(var h=0;h<e.length;h++)u+=_(o=e[h],t,a,l=m+T(o,h),i);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(o=e.next()).done;)u+=_(o=o.value,t,a,l=m+T(o,h++),i);else if("object"===l){if("function"===typeof e.then)return _(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(j,j):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function A(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",function(e){return t.call(r,e,a++)}),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function z(){}t.Children={map:A,forEach:function(e,t,r){A(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=a,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var n=h({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!k.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(n[o]=t[o]);var o=arguments.length-2;if(1===o)n.children=r;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];n.children=i}return E(e.type,a,void 0,0,0,n)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,r){var n,a={},o=null;if(null!=t)for(n in void 0!==t.key&&(o=""+t.key),t)k.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return E(e,o,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,r={};S.T=r;try{var n=e(),a=S.S;null!==a&&a(r,n),"object"===typeof n&&null!==n&&"function"===typeof n.then&&n.then(z,N)}catch(o){N(o)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,r){return S.H.useActionState(e,t,r)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,r){var n=S.H;if("function"===typeof r)throw Error("useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,r){return S.H.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,r){return S.H.useReducer(e,t,r)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,r){return S.H.useSyncExternalStore(e,t,r)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=r?r.call(n,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(4)},497:(e,t,r)=>{"use strict";var n=r(218);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},579:(e,t,r)=>{"use strict";e.exports=r(799)},672:(e,t,r)=>{"use strict";var n=r(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=s.T,r=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=r,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var r=t.as,n=c(r,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:a,fetchPriority:o}):"script"===r&&i.d.X(e,{crossOrigin:n,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var r=t.as,n=c(r,t.crossOrigin);i.d.L(e,r,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var r=c(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return s.H.useFormState(e,t,r)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(e,t,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in n={},t)"key"!==o&&(n[o]=t[o]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:a,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=a,t.jsxs=a},853:(e,t,r)=>{"use strict";e.exports=r(896)},896:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,a=e[n];if(!(0<o(a,t)))break e;e[n]=t,e[r]=a,r=n}}function n(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,a=e.length,i=a>>>1;n<i;){var l=2*(n+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,r))c<a&&0>o(u,s)?(e[n]=u,e[c]=r,n=c):(e[n]=s,e[l]=r,n=l);else{if(!(c<a&&0>o(u,r)))break e;e[n]=u,e[c]=r,n=c}}}return t}function o(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,m=!1,h=!1,v=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=n(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,r(c,t)}t=n(u)}}function S(e){if(v=!1,w(e),!h)if(null!==n(c))h=!0,E||(E=!0,k());else{var t=n(u);null!==t&&N(S,t.startTime-e)}}var k,E=!1,P=-1,C=5,T=-1;function j(){return!!g||!(t.unstable_now()-T<C)}function _(){if(g=!1,E){var e=t.unstable_now();T=e;var r=!0;try{e:{h=!1,v&&(v=!1,y(P),P=-1),m=!0;var o=p;try{t:{for(w(e),f=n(c);null!==f&&!(f.expirationTime>e&&j());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,w(e),r=!0;break t}f===n(c)&&a(c),w(e)}else a(c);f=n(c)}if(null!==f)r=!0;else{var s=n(u);null!==s&&N(S,s.startTime-e),r=!1}}break e}finally{f=null,p=o,m=!1}r=void 0}}finally{r?k():E=!1}}}if("function"===typeof x)k=function(){x(_)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=_,k=function(){R.postMessage(null)}}else k=function(){b(_,0)};function N(e,r){P=b(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var r=p;p=t;try{return e()}finally{p=r}},t.unstable_requestPaint=function(){g=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=p;p=e;try{return t()}finally{p=r}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,r(u,e),null===n(c)&&e===n(u)&&(v?(y(P),P=-1):v=!0,N(S,o-i))):(e.sortIndex=l,r(c,e),h||m||(h=!0,E||(E=!0,k()))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=p;return function(){var r=p;p=t;try{return e.apply(this,arguments)}finally{p=r}}}},900:e=>{"use strict";e.exports=JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.0.0"},"version":"7.0.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(672)}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,n)=>(r.f[n](e,t),t),[])),r.u=e=>"static/js/"+e+".35b880a9.chunk.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="wrtmind-react:";r.l=(n,a,o,i)=>{if(e[n])e[n].push(a);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[a];var f=(t,r)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach(e=>e(r)),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="./",(()=>{var e={792:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((r,n)=>a=e[t]=[r,n]);n.push(a[2]=o);var i=r.p+r.u(t),l=new Error;r.l(i,n=>{if(r.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}},"chunk-"+t,t)}};var t=(t,n)=>{var a,o,i=n[0],l=n[1],s=n[2],c=0;if(i.some(t=>0!==e[t])){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(s)s(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkwrtmind_react=self.webpackChunkwrtmind_react||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0,(()=>{"use strict";var e=r(43),t=r(391);var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};Object.create;function a(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=r(324),i=r.n(o),l="-ms-",s="-moz-",c="-webkit-",u="comm",d="rule",f="decl",p="@keyframes",m=Math.abs,h=String.fromCharCode,v=Object.assign;function g(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,r){return e.replace(t,r)}function x(e,t,r){return e.indexOf(t,r)}function w(e,t){return 0|e.charCodeAt(t)}function S(e,t,r){return e.slice(t,r)}function k(e){return e.length}function E(e){return e.length}function P(e,t){return t.push(e),e}function C(e,t){return e.filter(function(e){return!b(e,t)})}var T=1,j=1,_=0,A=0,R=0,N="";function z(e,t,r,n,a,o,i,l){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:T,column:j,length:i,return:"",siblings:l}}function L(e,t){return v(z("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function M(e){for(;e.root;)e=L(e.root,{children:[e]});P(e,e.siblings)}function O(){return R=A>0?w(N,--A):0,j--,10===R&&(j=1,T--),R}function F(){return R=A<_?w(N,A++):0,j++,10===R&&(j=1,T++),R}function I(){return w(N,A)}function D(){return A}function U(e,t){return S(N,e,t)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return T=j=1,_=k(N=e),A=0,[]}function H(e){return N="",e}function W(e){return g(U(A-1,G(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(R=I())&&R<33;)F();return $(e)>2||$(R)>3?"":" "}function q(e,t){for(;--t&&F()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return U(e,D()+(t<6&&32==I()&&32==F()))}function G(e){for(;F();)switch(R){case e:return A;case 34:case 39:34!==e&&39!==e&&G(R);break;case 40:41===e&&G(e);break;case 92:F()}return A}function K(e,t){for(;F()&&e+R!==57&&(e+R!==84||47!==I()););return"/*"+U(t,A-1)+"*"+h(47===e?e:F())}function Y(e){for(;!$(I());)F();return U(e,A)}function Q(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function X(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case u:return"";case p:return e.return=e.value+"{"+Q(e.children,n)+"}";case d:if(!k(e.value=e.props.join(",")))return""}return k(r=Q(e.children,n))?e.return=e.value+"{"+r+"}":""}function J(e,t,r){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+s+e+l+e+e;case 5936:switch(w(e,t+11)){case 114:return c+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+l+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+l+e+e;case 6165:return c+e+l+"flex-"+e+e;case 5187:return c+e+y(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return c+e+l+"flex-item-"+y(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":l+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return c+e+l+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+l+y(e,"shrink","negative")+e;case 5292:return c+e+l+y(e,"basis","preferred-size")+e;case 6060:return c+"box-"+y(e,"-grow","")+c+e+l+y(e,"grow","positive")+e;case 4554:return c+y(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!b(e,/flex-|baseline/))return l+"grid-column-align"+S(e,t)+e;break;case 2592:case 3360:return l+y(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,b(e.props,/grid-\w+-end/)})?~x(e+(r=r[t].value),"span",0)?e:l+y(e,"-start","")+e+l+"grid-row-span:"+(~x(r,"span",0)?b(r,/\d+/):+b(r,/\d+/)-+b(e,/\d+/))+";":l+y(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return b(e.props,/grid-\w+-start/)})?e:l+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+s+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch",0)?J(y(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,a,o,i,s){return l+r+":"+n+s+(a?l+r+"-span:"+(o?i:+i-+n)+s:"")+e});case 4949:if(121===w(e,t+6))return y(e,":",":"+c)+e;break;case 6444:switch(w(e,45===w(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===w(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+l+"$2box$3")+e;case 100:return y(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function Z(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=J(e.value,e.length,r));case p:return Q([L(e,{value:y(e.value,"@","@"+c)})],n);case d:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(b(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":M(L(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),M(L(e,{props:[t]})),v(e,{props:C(r,n)});break;case"::placeholder":M(L(e,{props:[y(t,/:(plac\w+)/,":"+c+"input-$1")]})),M(L(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),M(L(e,{props:[y(t,/:(plac\w+)/,l+"input-$1")]})),M(L(e,{props:[t]})),v(e,{props:C(r,n)})}return""})}}function ee(e){return H(te("",null,null,null,[""],e=B(e),0,[0],e))}function te(e,t,r,n,a,o,i,l,s){for(var c=0,u=0,d=i,f=0,p=0,v=0,g=1,b=1,S=1,E=0,C="",T=a,j=o,_=n,A=C;b;)switch(v=E,E=F()){case 40:if(108!=v&&58==w(A,d-1)){-1!=x(A+=y(W(E),"&","&\f"),"&\f",m(c?l[c-1]:0))&&(S=-1);break}case 34:case 39:case 91:A+=W(E);break;case 9:case 10:case 13:case 32:A+=V(v);break;case 92:A+=q(D()-1,7);continue;case 47:switch(I()){case 42:case 47:P(ne(K(F(),D()),t,r,s),s);break;default:A+="/"}break;case 123*g:l[c++]=k(A)*S;case 125*g:case 59:case 0:switch(E){case 0:case 125:b=0;case 59+u:-1==S&&(A=y(A,/\f/g,"")),p>0&&k(A)-d&&P(p>32?ae(A+";",n,r,d-1,s):ae(y(A," ","")+";",n,r,d-2,s),s);break;case 59:A+=";";default:if(P(_=re(A,t,r,c,u,a,l,C,T=[],j=[],d,o),o),123===E)if(0===u)te(A,t,_,_,T,o,d,l,j);else switch(99===f&&110===w(A,3)?100:f){case 100:case 108:case 109:case 115:te(e,_,_,n&&P(re(e,_,_,0,0,a,l,C,a,T=[],d,j),j),a,j,d,l,n?T:j);break;default:te(A,_,_,_,[""],j,0,l,j)}}c=u=p=0,g=S=1,C=A="",d=i;break;case 58:d=1+k(A),p=v;default:if(g<1)if(123==E)--g;else if(125==E&&0==g++&&125==O())continue;switch(A+=h(E),E*g){case 38:S=u>0?1:(A+="\f",-1);break;case 44:l[c++]=(k(A)-1)*S,S=1;break;case 64:45===I()&&(A+=W(F())),f=I(),u=d=k(C=A+=Y(D())),E++;break;case 45:45===v&&2==k(A)&&(g=0)}}return o}function re(e,t,r,n,a,o,i,l,s,c,u,f){for(var p=a-1,h=0===a?o:[""],v=E(h),b=0,x=0,w=0;b<n;++b)for(var k=0,P=S(e,p+1,p=m(x=i[b])),C=e;k<v;++k)(C=g(x>0?h[k]+" "+P:y(P,/&\f/g,h[k])))&&(s[w++]=C);return z(e,t,r,0===a?d:l,s,c,u,f)}function ne(e,t,r,n){return z(e,t,r,u,h(R),S(e,2,-2),0,n)}function ae(e,t,r,n,a){return z(e,t,r,f,S(e,0,n),S(e,n+1,-1),n,a)}var oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ie="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}&&({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ce="6.1.19",ue="/*!sc*/\n",de="undefined"!=typeof window&&"undefined"!=typeof document,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY)),pe={},me=(new Set,Object.freeze([])),he=Object.freeze({});function ve(e,t,r){return void 0===r&&(r=he),e.theme!==r.theme&&e.theme||t||r.theme}var ge=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function xe(e){return e.replace(be,"-").replace(ye,"")}var we=/(a)(d)/gi,Se=function(e){return String.fromCharCode(e+(e>25?39:97))};function ke(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Se(t%52)+r;return(Se(t%52)+r).replace(we,"$1-$2")}var Ee,Pe=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ce=function(e){return Pe(5381,e)};function Te(e){return ke(Ce(e)>>>0)}function je(e){return e.displayName||e.name||"Component"}function _e(e){return"string"==typeof e&&!0}var Ae="function"==typeof Symbol&&Symbol.for,Re=Ae?Symbol.for("react.memo"):60115,Ne=Ae?Symbol.for("react.forward_ref"):60112,ze={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Le={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oe=((Ee={})[Ne]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[Re]=Me,Ee);function Fe(e){return("type"in(t=e)&&t.type.$$typeof)===Re?Me:"$$typeof"in e?Oe[e.$$typeof]:ze;var t}var Ie=Object.defineProperty,De=Object.getOwnPropertyNames,Ue=Object.getOwnPropertySymbols,$e=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,He=Object.prototype;function We(e,t,r){if("string"!=typeof t){if(He){var n=Be(t);n&&n!==He&&We(e,n,r)}var a=De(t);Ue&&(a=a.concat(Ue(t)));for(var o=Fe(e),i=Fe(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Le||r&&r[s]||i&&s in i||o&&s in o)){var c=$e(t,s);try{Ie(e,s,c)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function qe(e){return"object"==typeof e&&"styledComponentId"in e}function Ge(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ke(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ye(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qe(e,t,r){if(void 0===r&&(r=!1),!r&&!Ye(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Qe(e[n],t[n]);else if(Ye(t))for(var n in t)e[n]=Qe(e[n],t[n]);return e}function Xe(e,t){Object.defineProperty(e,"toString",{value:t})}function Je(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,a=n;e>=a;)if((a<<=1)<0)throw Je(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=n;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var a=r;a<n;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),a=n+r,o=n;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(ue);return t},e}(),et=new Map,tt=new Map,rt=1,nt=function(e){if(et.has(e))return et.get(e);for(;tt.has(rt);)rt++;var t=rt++;return et.set(e,t),tt.set(t,e),t},at=function(e,t){rt=t+1,et.set(e,t),tt.set(t,e)},ot="style[".concat(ie,"][").concat(se,'="').concat(ce,'"]'),it=new RegExp("^".concat(ie,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,r){for(var n,a=r.split(","),o=0,i=a.length;o<i;o++)(n=a[o])&&e.registerName(t,n)},st=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(ue),a=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var s=l.match(it);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(at(u,c),lt(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},ct=function(e){for(var t=document.querySelectorAll(ot),r=0,n=t.length;r<n;r++){var a=t[r];a&&a.getAttribute(ie)!==le&&(st(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ut(){return r.nc}var dt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ie,"]")));return t[t.length-1]}(r),o=void 0!==a?a.nextSibling:null;n.setAttribute(ie,le),n.setAttribute(se,ce);var i=ut();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},ft=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var a=t[r];if(a.ownerNode===e)return a}throw Je(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),pt=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),mt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ht=de,vt={isServer:!de,useCSSOMInjection:!fe},gt=function(){function e(e,t,r){void 0===e&&(e=he),void 0===t&&(t={});var a=this;this.options=n(n({},vt),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&de&&ht&&(ht=!1,ct(this)),Xe(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",a=function(r){var a=function(e){return tt.get(e)}(r);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(r);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(ie,".g").concat(r,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),n+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(ue)},o=0;o<r;o++)a(o);return n}(a)})}return e.registerId=function(e){return nt(e)},e.prototype.rehydrate=function(){!this.server&&de&&ct(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(n(n({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new mt(r):t?new ft(r):new pt(r)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(nt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,yt=/^\s*\/\/.*$/gm;function xt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e})}function wt(e){var t,r,n,a=void 0===e?he:e,o=a.options,i=void 0===o?he:o,l=a.plugins,s=void 0===l?me:l,c=function(e,n,a){return a.startsWith(r)&&a.endsWith(r)&&a.replaceAll(r,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,r).replace(n,c))}),i.prefix&&u.push(Z),u.push(X);var f=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,r=a,n=new RegExp("\\".concat(r,"\\b"),"g");var s=e.replace(yt,""),c=ee(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(c=xt(c,i.namespace));var d,f=[];return Q(c,function(e){var t=E(e);return function(r,n,a,o){for(var i="",l=0;l<t;l++)i+=e[l](r,n,a,o)||"";return i}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=s.length?s.reduce(function(e,t){return t.name||Je(15),Pe(e,t.name)},5381).toString():"",f}var St=new gt,kt=wt(),Et=e.createContext({shouldForwardProp:void 0,styleSheet:St,stylis:kt}),Pt=(Et.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(Et)}function Tt(t){var r=(0,e.useState)(t.stylisPlugins),n=r[0],a=r[1],o=Ct().styleSheet,l=(0,e.useMemo)(function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,o]),s=(0,e.useMemo)(function(){return wt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);(0,e.useEffect)(function(){i()(n,t.stylisPlugins)||a(t.stylisPlugins)},[t.stylisPlugins]);var c=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:s}},[t.shouldForwardProp,l,s]);return e.createElement(Et.Provider,{value:c},e.createElement(Pt.Provider,{value:s},t.children))}var jt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=kt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Xe(this,function(){throw Je(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=kt),this.name+e.hash},e}(),_t=function(e){return e>="A"&&e<="Z"};function At(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;_t(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Rt=function(e){return null==e||!1===e||""===e},Nt=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Rt(i)&&(Array.isArray(i)&&i.isCss||Ve(i)?n.push("".concat(At(o),":"),i,";"):Ye(i)?n.push.apply(n,a(a(["".concat(o," {")],Nt(i),!1),["}"],!1)):n.push("".concat(At(o),": ").concat((t=o,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in oe||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function zt(e,t,r,n){return Rt(e)?[]:qe(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:zt(e(t),t,r,n):e instanceof jt?r?(e.inject(r,n),[e.getName(n)]):[e]:Ye(e)?Nt(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map(function(e){return zt(e,t,r,n)})):[e.toString()];var a}function Lt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ve(r)&&!qe(r))return!1}return!0}var Mt=Ce(ce),Ot=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Lt(e),this.componentId=t,this.baseHash=Pe(Mt,t),this.baseStyle=r,gt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ge(n,this.staticRulesId);else{var a=Ke(zt(this.rules,e,t,r)),o=ke(Pe(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=r(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}n=Ge(n,o),this.staticRulesId=o}else{for(var l=Pe(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Ke(zt(u,e,t,r));l=Pe(l,d+c),s+=d}}if(s){var f=ke(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(s,".".concat(f),void 0,this.componentId)),n=Ge(n,f)}}return n},e}(),Ft=e.createContext(void 0);Ft.Consumer;var It={};new Set;function Dt(t,r,a){var o=qe(t),i=t,l=!_e(t),s=r.attrs,c=void 0===s?me:s,u=r.componentId,d=void 0===u?function(e,t){var r="string"!=typeof e?"sc":xe(e);It[r]=(It[r]||0)+1;var n="".concat(r,"-").concat(Te(ce+r+It[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):u,f=r.displayName,p=void 0===f?function(e){return _e(e)?"styled.".concat(e):"Styled(".concat(je(e),")")}(t):f,m=r.displayName&&r.componentId?"".concat(xe(r.displayName),"-").concat(r.componentId):r.componentId||d,h=o&&i.attrs?i.attrs.concat(c).filter(Boolean):c,v=r.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;v=function(e,t){return g(e,t)&&b(e,t)}}else v=g}var y=new Ot(a,m,o?i.componentStyle:void 0);function x(t,r){return function(t,r,a){var o=t.attrs,i=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Ft),f=Ct(),p=t.shouldForwardProp||f.shouldForwardProp,m=ve(r,d,l)||he,h=function(e,t,r){for(var a,o=n(n({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var l=Ve(a=e[i])?a(o):a;for(var s in l)o[s]="className"===s?Ge(o[s],l[s]):"style"===s?n(n({},o[s]),l[s]):l[s]}return t.className&&(o.className=Ge(o.className,t.className)),o}(o,r,m),v=h.as||u,g={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===m||("forwardedAs"===b?g.as=h.forwardedAs:p&&!p(b,v)||(g[b]=h[b]));var y=function(e,t){var r=Ct();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(i,h),x=Ge(s,c);return y&&(x+=" "+y),h.className&&(x+=" "+h.className),g[_e(v)&&!ge.has(v)?"class":"className"]=x,a&&(g.ref=a),(0,e.createElement)(v,g)}(w,t,r)}x.displayName=p;var w=e.forwardRef(x);return w.attrs=h,w.componentStyle=y,w.displayName=p,w.shouldForwardProp=v,w.foldedComponentIds=o?Ge(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=m,w.target=o?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,a=t;n<a.length;n++)Qe(e,a[n],!0);return e}({},i.defaultProps,e):e}}),Xe(w,function(){return".".concat(w.styledComponentId)}),l&&We(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ut(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var $t=function(e){return Object.assign(e,{isCss:!0})};function Bt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ve(e)||Ye(e))return $t(zt(Ut(me,a([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?zt(n):$t(zt(Ut(n,t)))}function Ht(e,t,r){if(void 0===r&&(r=he),!t)throw Je(1,t);var o=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,Bt.apply(void 0,a([n],o,!1)))};return o.attrs=function(a){return Ht(e,t,n(n({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},o.withConfig=function(a){return Ht(e,t,n(n({},r),a))},o}var Wt=function(e){return Ht(Dt,e)},Vt=Wt;ge.forEach(function(e){Vt[e]=Wt(e)});var qt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Lt(e),gt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var a=n(Ke(zt(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&gt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var r=ut(),n=Ke([r&&'nonce="'.concat(r,'"'),"".concat(ie,'="true"'),"".concat(se,'="').concat(ce,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Je(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw Je(2);var a=t.instance.toString();if(!a)return[];var o=((r={})[ie]="",r[se]=ce,r.dangerouslySetInnerHTML={__html:a},r),i=ut();return i&&(o.nonce=i),[e.createElement("style",n({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new gt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Je(2);return e.createElement(Tt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Je(3)}})(),"__sc-".concat(ie,"__");function Gt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Kt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,tr(n.key),n)}}function Yt(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=nr(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function Qt(e,t,r){return(t=tr(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Xt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Jt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Xt(Object(r),!0).forEach(function(t){Qt(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xt(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Zt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,t)||nr(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e){return function(e){if(Array.isArray(e))return Gt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||nr(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tr(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function rr(e){return rr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rr(e)}function nr(e,t){if(e){if("string"==typeof e)return Gt(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Gt(e,t):void 0}}var ar=function(){},or={},ir={},lr=null,sr={mark:ar,measure:ar};try{"undefined"!==typeof window&&(or=window),"undefined"!==typeof document&&(ir=document),"undefined"!==typeof MutationObserver&&(lr=MutationObserver),"undefined"!==typeof performance&&(sr=performance)}catch(Sf){}var cr,ur,dr=(or.navigator||{}).userAgent,fr=void 0===dr?"":dr,pr=or,mr=ir,hr=lr,vr=sr,gr=(pr.document,!!mr.documentElement&&!!mr.head&&"function"===typeof mr.addEventListener&&"function"===typeof mr.createElement),br=~fr.indexOf("MSIE")||~fr.indexOf("Trident/"),yr={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},xr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],wr="classic",Sr="duotone",kr="sharp",Er="sharp-duotone",Pr="chisel",Cr="etch",Tr="jelly",jr="jelly-duo",_r="jelly-fill",Ar="notdog",Rr="notdog-duo",Nr="slab",zr="slab-press",Lr="thumbprint",Mr="whiteboard",Or=[wr,Sr,kr,Er,Pr,Cr,Tr,jr,_r,Ar,Rr,Nr,zr,Lr,Mr],Fr=(Qt(Qt(Qt(Qt(Qt(Qt(Qt(Qt(Qt(Qt(cr={},wr,"Classic"),Sr,"Duotone"),kr,"Sharp"),Er,"Sharp Duotone"),Pr,"Chisel"),Cr,"Etch"),Tr,"Jelly"),jr,"Jelly Duo"),_r,"Jelly Fill"),Ar,"Notdog"),Qt(Qt(Qt(Qt(Qt(cr,Rr,"Notdog Duo"),Nr,"Slab"),zr,"Slab Press"),Lr,"Thumbprint"),Mr,"Whiteboard"),new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]])),Ir=["fak","fa-kit","fakd","fa-kit-duotone"],Dr={fak:"kit","fa-kit":"kit"},Ur={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},$r=(Qt(Qt({},"kit","Kit"),"kit-duotone","Kit Duotone"),{kit:"fak"}),Br={"kit-duotone":"fakd"},Hr="duotone-group",Wr="swap-opacity",Vr="primary",qr="secondary",Gr=(Qt(Qt(Qt(Qt(Qt(Qt(Qt(Qt(Qt(Qt(ur={},"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),"notdog","Notdog"),Qt(Qt(Qt(Qt(Qt(ur,"notdog-duo","Notdog Duo"),"slab","Slab"),"slab-press","Slab Press"),"thumbprint","Thumbprint"),"whiteboard","Whiteboard"),Qt(Qt({},"kit","Kit"),"kit-duotone","Kit Duotone"),{classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}}),Kr=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),Yr=[1,2,3,4,5,6,7,8,9,10],Qr=Yr.concat([11,12,13,14,15,16,17,18,19,20]),Xr=[].concat(er(Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]})),["solid","regular","light","thin","duotone","brands","semibold"],["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Hr,Wr,Vr,qr]).concat(Yr.map(function(e){return"".concat(e,"x")})).concat(Qr.map(function(e){return"w-".concat(e)})),Jr="___FONT_AWESOME___",Zr="svg-inline--fa",en="data-fa-i2svg",tn="data-fa-pseudo-element",rn="data-prefix",nn="data-icon",an="fontawesome-i2svg",on=["HTML","HEAD","STYLE","SCRIPT"],ln=["::before","::after",":before",":after"],sn=function(){try{return!0}catch(e){return!1}}();function cn(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[wr]}})}var un=Jt({},yr);un[wr]=Jt(Jt(Jt(Jt({},{"fa-duotone":"duotone"}),yr[wr]),Dr),Ur);var dn=cn(un),fn=Jt({},{chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}});fn[wr]=Jt(Jt(Jt(Jt({},{duotone:"fad"}),fn[wr]),$r),Br);var pn=cn(fn),mn=Jt({},Gr);mn[wr]=Jt(Jt({},mn[wr]),{fak:"fa-kit"});var hn=cn(mn),vn=Jt({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}});vn[wr]=Jt(Jt({},vn[wr]),{"fa-kit":"fak"});cn(vn);var gn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,bn="fa-layers-text",yn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,xn=(cn(Jt({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}})),["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"]),wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=[].concat(er(["kit"]),er(Xr)),kn=pr.FontAwesomeConfig||{};if(mr&&"function"===typeof mr.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=Zt(e,2),r=t[0],n=t[1],a=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=mr.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(r));void 0!==a&&null!==a&&(kn[n]=a)})}var En={styleDefault:"solid",familyDefault:wr,cssPrefix:"fa",replacementClass:Zr,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kn.familyPrefix&&(kn.cssPrefix=kn.familyPrefix);var Pn=Jt(Jt({},En),kn);Pn.autoReplaceSvg||(Pn.observeMutations=!1);var Cn={};Object.keys(En).forEach(function(e){Object.defineProperty(Cn,e,{enumerable:!0,set:function(t){Pn[e]=t,Tn.forEach(function(e){return e(Cn)})},get:function(){return Pn[e]}})}),Object.defineProperty(Cn,"familyPrefix",{enumerable:!0,set:function(e){Pn.cssPrefix=e,Tn.forEach(function(e){return e(Cn)})},get:function(){return Pn.cssPrefix}}),pr.FontAwesomeConfig=Cn;var Tn=[];var jn=16,_n={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function An(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Rn(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function Nn(e){return e.classList?Rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function zn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ln(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function Mn(e){return e.size!==_n.size||e.x!==_n.x||e.y!==_n.y||e.rotate!==_n.rotate||e.flipX||e.flipY}function On(){var e="fa",t=Zr,r=Cn.cssPrefix,n=Cn.replacementClass,a=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}';if(r!==e||n!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(r,"-")).replace(i,"--".concat(r,"-")).replace(l,".".concat(n))}return a}var Fn=!1;function In(){Cn.autoAddCss&&!Fn&&(!function(e){if(e&&gr){var t=mr.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=mr.head.childNodes,n=null,a=r.length-1;a>-1;a--){var o=r[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=o)}mr.head.insertBefore(t,n)}}(On()),Fn=!0)}var Dn={mixout:function(){return{dom:{css:On,insertCss:In}}},hooks:function(){return{beforeDOMElementCreation:function(){In()},beforeI2svg:function(){In()}}}},Un=pr||{};Un[Jr]||(Un[Jr]={}),Un[Jr].styles||(Un[Jr].styles={}),Un[Jr].hooks||(Un[Jr].hooks={}),Un[Jr].shims||(Un[Jr].shims=[]);var $n=Un[Jr],Bn=[],Hn=function(){mr.removeEventListener("DOMContentLoaded",Hn),Wn=1,Bn.map(function(e){return e()})},Wn=!1;function Vn(e){var t=e.tag,r=e.attributes,n=void 0===r?{}:r,a=e.children,o=void 0===a?[]:a;return"string"===typeof e?zn(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(zn(e[r]),'" ')},"").trim()}(n),">").concat(o.map(Vn).join(""),"</").concat(t,">")}function qn(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}gr&&((Wn=(mr.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(mr.readyState))||mr.addEventListener("DOMContentLoaded",Hn));var Gn=function(e,t,r,n){var a,o,i,l=Object.keys(e),s=l.length,c=void 0!==n?function(e,t){return function(r,n,a,o){return e.call(t,r,n,a,o)}}(t,n):t;for(void 0===r?(a=1,i=e[l[0]]):(a=0,i=r);a<s;a++)i=c(i,e[o=l[a]],o,e);return i};function Kn(e){return 1!==er(e).length?null:e.codePointAt(0).toString(16)}function Yn(e){return Object.keys(e).reduce(function(t,r){var n=e[r];return!!n.icon?t[n.iconName]=n.icon:t[r]=n,t},{})}function Qn(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,n=void 0!==r&&r,a=Yn(t);"function"!==typeof $n.hooks.addPack||n?$n.styles[e]=Jt(Jt({},$n.styles[e]||{}),a):$n.hooks.addPack(e,Yn(t)),"fas"===e&&Qn("fa",t)}var Xn=$n.styles,Jn=$n.shims,Zn=Object.keys(hn),ea=Zn.reduce(function(e,t){return e[t]=Object.keys(hn[t]),e},{}),ta=null,ra={},na={},aa={},oa={},ia={};function la(e,t){var r,n=t.split("-"),a=n[0],o=n.slice(1).join("-");return a!==e||""===o||(r=o,~Sn.indexOf(r))?null:o}var sa,ca=function(){var e=function(e){return Gn(Xn,function(t,r,n){return t[n]=Gn(r,e,{}),t},{})};ra=e(function(e,t,r){(t[3]&&(e[t[3]]=r),t[2])&&t[2].filter(function(e){return"number"===typeof e}).forEach(function(t){e[t.toString(16)]=r});return e}),na=e(function(e,t,r){(e[r]=r,t[2])&&t[2].filter(function(e){return"string"===typeof e}).forEach(function(t){e[t]=r});return e}),ia=e(function(e,t,r){var n=t[2];return e[r]=r,n.forEach(function(t){e[t]=r}),e});var t="far"in Xn||Cn.autoFetchSvg,r=Gn(Jn,function(e,r){var n=r[0],a=r[1],o=r[2];return"far"!==a||t||(a="fas"),"string"===typeof n&&(e.names[n]={prefix:a,iconName:o}),"number"===typeof n&&(e.unicodes[n.toString(16)]={prefix:a,iconName:o}),e},{names:{},unicodes:{}});aa=r.names,oa=r.unicodes,ta=ma(Cn.styleDefault,{family:Cn.familyDefault})};function ua(e,t){return(ra[e]||{})[t]}function da(e,t){return(ia[e]||{})[t]}function fa(e){return aa[e]||{prefix:null,iconName:null}}function pa(){return ta}sa=function(e){ta=ma(e.styleDefault,{family:Cn.familyDefault})},Tn.push(sa),ca();function ma(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,r=void 0===t?wr:t,n=dn[r][e];if(r===Sr&&!e)return"fad";var a=pn[r][e]||pn[r][n],o=e in $n.styles?e:null;return a||o||null}function ha(e){return e.sort().filter(function(e,t,r){return r.indexOf(e)===t})}var va=Kr.concat(Ir);function ga(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,r=void 0!==t&&t,n=null,a=ha(e.filter(function(e){return va.includes(e)})),o=ha(e.filter(function(e){return!va.includes(e)})),i=Zt(a.filter(function(e){return n=e,!xr.includes(e)}),1)[0],l=void 0===i?null:i,s=function(e){var t=wr,r=Zn.reduce(function(e,t){return e[t]="".concat(Cn.cssPrefix,"-").concat(t),e},{});return Or.forEach(function(n){(e.includes(r[n])||e.some(function(e){return ea[n].includes(e)}))&&(t=n)}),t}(a),c=Jt(Jt({},function(e){var t=[],r=null;return e.forEach(function(e){var n=la(Cn.cssPrefix,e);n?r=n:e&&t.push(e)}),{iconName:r,rest:t}}(o)),{},{prefix:ma(l,{family:s})});return Jt(Jt(Jt({},c),function(e){var t=e.values,r=e.family,n=e.canonical,a=e.givenPrefix,o=void 0===a?"":a,i=e.styles,l=void 0===i?{}:i,s=e.config,c=void 0===s?{}:s,u=r===Sr,d=t.includes("fa-duotone")||t.includes("fad"),f="duotone"===c.familyDefault,p="fad"===n.prefix||"fa-duotone"===n.prefix;!u&&(d||f||p)&&(n.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab");if(!n.prefix&&ba.includes(r)){if(Object.keys(l).find(function(e){return ya.includes(e)})||c.autoFetchSvg){var m=Fr.get(r).defaultShortPrefixId;n.prefix=m,n.iconName=da(n.prefix,n.iconName)||n.iconName}}"fa"!==n.prefix&&"fa"!==o||(n.prefix=pa()||"fas");return n}({values:e,family:s,styles:Xn,config:Cn,canonical:c,givenPrefix:n})),function(e,t,r){var n=r.prefix,a=r.iconName;if(e||!n||!a)return{prefix:n,iconName:a};var o="fa"===t?fa(a):{},i=da(n,a);a=o.iconName||i||a,n=o.prefix||n,"far"!==n||Xn.far||!Xn.fas||Cn.autoFetchSvg||(n="fas");return{prefix:n,iconName:a}}(r,n,c))}var ba=Or.filter(function(e){return e!==wr||e!==Sr}),ya=Object.keys(Gr).filter(function(e){return e!==wr}).map(function(e){return Object.keys(Gr[e])}).flat();var xa=function(){return function(e,t,r){return t&&Kt(e.prototype,t),r&&Kt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}},[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(t){e.definitions[t]=Jt(Jt({},e.definitions[t]||{}),a[t]),Qn(t,a[t]),ca()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var n=r[t],a=n.prefix,o=n.iconName,i=n.icon,l=i[2];e[a]||(e[a]={}),l.length>0&&l.forEach(function(t){"string"===typeof t&&(e[a][t]=i)}),e[a][o]=i}),e}}])}(),wa=[],Sa={},ka={},Ea=Object.keys(ka);function Pa(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return(Sa[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Ca(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];(Sa[e]||[]).forEach(function(e){e.apply(null,r)})}function Ta(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ka[e]?ka[e].apply(null,t):void 0}function ja(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,r=e.prefix||pa();if(t)return t=da(r,t)||t,qn(_a.definitions,r,t)||qn($n.styles,r,t)}var _a=new xa,Aa={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return gr?(Ca("beforeI2svg",e),Ta("pseudoElements2svg",e),Ta("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.autoReplaceSvgRoot;!1===Cn.autoReplaceSvg&&(Cn.autoReplaceSvg=!0),Cn.observeMutations=!0,e=function(){za({autoReplaceSvgRoot:r}),Ca("watch",t)},gr&&(Wn?setTimeout(e,0):Bn.push(e))}},Ra={icon:function(e){if(null===e)return null;if("object"===rr(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:da(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],r=ma(e[0]);return{prefix:r,iconName:da(r,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(Cn.cssPrefix,"-"))>-1||e.match(gn))){var n=ga(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||pa(),iconName:da(n.prefix,n.iconName)||n.iconName}}if("string"===typeof e){var a=pa();return{prefix:a,iconName:da(a,e)||e}}}},Na={noAuto:function(){Cn.autoReplaceSvg=!1,Cn.observeMutations=!1,Ca("noAuto")},config:Cn,dom:Aa,parse:Ra,library:_a,findIconDefinition:ja,toHtml:Vn},za=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?mr:e;(Object.keys($n.styles).length>0||Cn.autoFetchSvg)&&gr&&Cn.autoReplaceSvg&&Na.dom.i2svg({node:t})};function La(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Vn(e)})}}),Object.defineProperty(e,"node",{get:function(){if(gr){var t=mr.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Ma(e){var t=e.icons,r=t.main,n=t.mask,a=e.prefix,o=e.iconName,i=e.transform,l=e.symbol,s=e.maskId,c=e.extra,u=e.watchable,d=void 0!==u&&u,f=n.found?n:r,p=f.width,m=f.height,h=[Cn.replacementClass,o?"".concat(Cn.cssPrefix,"-").concat(o):""].filter(function(e){return-1===c.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(c.classes).join(" "),v={children:[],attributes:Jt(Jt({},c.attributes),{},{"data-prefix":a,"data-icon":o,class:h,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(m)})};(function(e){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in e})})(c.attributes)||c.attributes["aria-hidden"]||(v.attributes["aria-hidden"]="true"),d&&(v.attributes[en]="");var g=Jt(Jt({},v),{},{prefix:a,iconName:o,main:r,mask:n,maskId:s,transform:i,symbol:l,styles:Jt({},c.styles)}),b=n.found&&r.found?Ta("generateAbstractMask",g)||{children:[],attributes:{}}:Ta("generateAbstractIcon",g)||{children:[],attributes:{}},y=b.children,x=b.attributes;return g.children=y,g.attributes=x,l?function(e){var t=e.prefix,r=e.iconName,n=e.children,a=e.attributes,o=e.symbol,i=!0===o?"".concat(t,"-").concat(Cn.cssPrefix,"-").concat(r):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Jt(Jt({},a),{},{id:i}),children:n}]}]}(g):function(e){var t=e.children,r=e.main,n=e.mask,a=e.attributes,o=e.styles,i=e.transform;if(Mn(i)&&r.found&&!n.found){var l={x:r.width/r.height/2,y:.5};a.style=Ln(Jt(Jt({},o),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(g)}function Oa(e){var t=e.content,r=e.width,n=e.height,a=e.transform,o=e.extra,i=e.watchable,l=void 0!==i&&i,s=Jt(Jt({},o.attributes),{},{class:o.classes.join(" ")});l&&(s[en]="");var c=Jt({},o.styles);Mn(a)&&(c.transform=function(e){var t=e.transform,r=e.width,n=void 0===r?16:r,a=e.height,o=void 0===a?16:a,i=e.startCentered,l=void 0!==i&&i,s="";return s+=l&&br?"translate(".concat(t.x/jn-n/2,"em, ").concat(t.y/jn-o/2,"em) "):l?"translate(calc(-50% + ".concat(t.x/jn,"em), calc(-50% + ").concat(t.y/jn,"em)) "):"translate(".concat(t.x/jn,"em, ").concat(t.y/jn,"em) "),s+="scale(".concat(t.size/jn*(t.flipX?-1:1),", ").concat(t.size/jn*(t.flipY?-1:1),") "),s+"rotate(".concat(t.rotate,"deg) ")}({transform:a,startCentered:!0,width:r,height:n}),c["-webkit-transform"]=c.transform);var u=Ln(c);u.length>0&&(s.style=u);var d=[];return d.push({tag:"span",attributes:s,children:[t]}),d}var Fa=$n.styles;function Ia(e){var t=e[0],r=e[1],n=Zt(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(Cn.cssPrefix,"-").concat(wn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Cn.cssPrefix,"-").concat(wn.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(Cn.cssPrefix,"-").concat(wn.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}var Da={found:!1,width:512,height:512};function Ua(e,t){var r=t;return"fa"===t&&null!==Cn.styleDefault&&(t=pa()),new Promise(function(n,a){if("fa"===r){var o=fa(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Fa[t]&&Fa[t][e])return n(Ia(Fa[t][e]));!function(e,t){sn||Cn.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),n(Jt(Jt({},Da),{},{icon:Cn.showMissingIcons&&e&&Ta("missingIconAbstract")||{}}))})}var $a=function(){},Ba=Cn.measurePerformance&&vr&&vr.mark&&vr.measure?vr:{mark:$a,measure:$a},Ha='FA "7.0.0"',Wa=function(e){Ba.mark("".concat(Ha," ").concat(e," ends")),Ba.measure("".concat(Ha," ").concat(e),"".concat(Ha," ").concat(e," begins"),"".concat(Ha," ").concat(e," ends"))},Va=function(e){return Ba.mark("".concat(Ha," ").concat(e," begins")),function(){return Wa(e)}},qa=function(){};function Ga(e){return"string"===typeof(e.getAttribute?e.getAttribute(en):null)}function Ka(e){return mr.createElementNS("http://www.w3.org/2000/svg",e)}function Ya(e){return mr.createElement(e)}function Qa(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,r=void 0===t?"svg"===e.tag?Ka:Ya:t;if("string"===typeof e)return mr.createTextNode(e);var n=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Qa(e,{ceFn:r}))}),n}var Xa={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Qa(e),t)}),null===t.getAttribute(en)&&Cn.keepOriginalSource){var r=mr.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~Nn(t).indexOf(Cn.replacementClass))return Xa.replace(e);var n=new RegExp("".concat(Cn.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(e,t){return t===Cn.replacementClass||t.match(n)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),0===a.toNode.length?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(e){return Vn(e)}).join("\n");t.setAttribute(en,""),t.innerHTML=o}};function Ja(e){e()}function Za(e,t){var r="function"===typeof t?t:qa;if(0===e.length)r();else{var n=Ja;"async"===Cn.mutateApproach&&(n=pr.requestAnimationFrame||Ja),n(function(){var t=!0===Cn.autoReplaceSvg?Xa.replace:Xa[Cn.autoReplaceSvg]||Xa.replace,n=Va("mutate");e.map(t),n(),r()})}}var eo=!1;function to(){eo=!0}function ro(){eo=!1}var no=null;function ao(e){if(hr&&Cn.observeMutations){var t=e.treeCallback,r=void 0===t?qa:t,n=e.nodeCallback,a=void 0===n?qa:n,o=e.pseudoElementsCallback,i=void 0===o?qa:o,l=e.observeMutationsRoot,s=void 0===l?mr:l;no=new hr(function(e){if(!eo){var t=pa();Rn(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Ga(e.addedNodes[0])&&(Cn.searchPseudoElements&&i(e.target),r(e.target)),"attributes"===e.type&&e.target.parentNode&&Cn.searchPseudoElements&&i([e.target],!0),"attributes"===e.type&&Ga(e.target)&&~xn.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(rn):null,r=e.getAttribute?e.getAttribute(nn):null;return t&&r}(e.target)){var n=ga(Nn(e.target)),o=n.prefix,l=n.iconName;e.target.setAttribute(rn,o||t),l&&e.target.setAttribute(nn,l)}else(function(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Cn.replacementClass)})(e.target)&&a(e.target)})}}),gr&&no.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function oo(e){var t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),n=void 0!==e.innerText?e.innerText.trim():"",a=ga(Nn(e));return a.prefix||(a.prefix=pa()),t&&r&&(a.prefix=t,a.iconName=r),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=function(e,t){return(na[e]||{})[t]}(a.prefix,e.innerText)||ua(a.prefix,Kn(e.innerText))),!a.iconName&&Cn.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function io(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},r=oo(e),n=r.iconName,a=r.prefix,o=r.rest,i=function(e){return Rn(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{})}(e),l=Pa("parseNodeAttributes",{},e),s=t.styleParser?function(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(e,t){var r=t.split(":"),n=r[0],a=r.slice(1);return n&&a.length>0&&(e[n]=a.join(":").trim()),e},{})),r}(e):[];return Jt({iconName:n,prefix:a,transform:_n,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:i}},l)}var lo=$n.styles;function so(e){var t="nest"===Cn.autoReplaceSvg?io(e,{styleParser:!1}):io(e);return~t.extra.classes.indexOf(bn)?Ta("generateLayersText",e,t):Ta("generateSvgReplacementMutation",e,t)}function co(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!gr)return Promise.resolve();var r=mr.documentElement.classList,n=function(e){return r.add("".concat(an,"-").concat(e))},a=function(e){return r.remove("".concat(an,"-").concat(e))},o=Cn.autoFetchSvg?[].concat(er(Ir),er(Kr)):xr.concat(Object.keys(lo));o.includes("fa")||o.push("fa");var i=[".".concat(bn,":not([").concat(en,"])")].concat(o.map(function(e){return".".concat(e,":not([").concat(en,"])")})).join(", ");if(0===i.length)return Promise.resolve();var l=[];try{l=Rn(e.querySelectorAll(i))}catch(u){}if(!(l.length>0))return Promise.resolve();n("pending"),a("complete");var s=Va("onTree"),c=l.reduce(function(e,t){try{var r=so(t);r&&e.push(r)}catch(u){sn||"MissingIcon"===u.name&&console.error(u)}return e},[]);return new Promise(function(e,r){Promise.all(c).then(function(r){Za(r,function(){n("active"),n("complete"),a("pending"),"function"===typeof t&&t(),s(),e()})}).catch(function(e){s(),r(e)})})}function uo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;so(e).then(function(e){e&&Za([e],t)})}function fo(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:ja(t||{}),a=r.mask;return a&&(a=(a||{}).icon?a:ja(a||{})),e(n,Jt(Jt({},r),{},{mask:a}))}}var po=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?_n:r,a=t.symbol,o=void 0!==a&&a,i=t.mask,l=void 0===i?null:i,s=t.maskId,c=void 0===s?null:s,u=t.classes,d=void 0===u?[]:u,f=t.attributes,p=void 0===f?{}:f,m=t.styles,h=void 0===m?{}:m;if(e){var v=e.prefix,g=e.iconName,b=e.icon;return La(Jt({type:"icon"},e),function(){return Ca("beforeDOMElementCreation",{iconDefinition:e,params:t}),Ma({icons:{main:Ia(b),mask:l?Ia(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:g,transform:Jt(Jt({},_n),n),symbol:o,maskId:c,extra:{attributes:p,styles:h,classes:d}})})}},mo={mixout:function(){return{icon:fo(po)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=co,e.nodeCallback=uo,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,r=void 0===t?mr:t,n=e.callback;return co(r,void 0===n?function(){}:n)},e.generateSvgReplacementMutation=function(e,t){var r=t.iconName,n=t.prefix,a=t.transform,o=t.symbol,i=t.mask,l=t.maskId,s=t.extra;return new Promise(function(t,c){Promise.all([Ua(r,n),i.iconName?Ua(i.iconName,i.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(i){var c=Zt(i,2),u=c[0],d=c[1];t([e,Ma({icons:{main:u,mask:d},prefix:n,iconName:r,transform:a,symbol:o,maskId:l,extra:s,watchable:!0})])}).catch(c)})},e.generateAbstractIcon=function(e){var t,r=e.children,n=e.attributes,a=e.main,o=e.transform,i=Ln(e.styles);return i.length>0&&(n.style=i),Mn(o)&&(t=Ta("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(t||a.icon),{children:r,attributes:n}}}},ho={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.classes,n=void 0===r?[]:r;return La({type:"layer"},function(){Ca("beforeDOMElementCreation",{assembler:e,params:t});var r=[];return e(function(e){Array.isArray(e)?e.map(function(e){r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(Cn.cssPrefix,"-layers")].concat(er(n)).join(" ")},children:r}]})}}}},vo={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.title,n=void 0===r?null:r,a=t.classes,o=void 0===a?[]:a,i=t.attributes,l=void 0===i?{}:i,s=t.styles,c=void 0===s?{}:s;return La({type:"counter",content:e},function(){return Ca("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,r=e.extra,n=Jt(Jt({},r.attributes),{},{class:r.classes.join(" ")}),a=Ln(r.styles);a.length>0&&(n.style=a);var o=[];return o.push({tag:"span",attributes:n,children:[t]}),o}({content:e.toString(),title:n,extra:{attributes:l,styles:c,classes:["".concat(Cn.cssPrefix,"-layers-counter")].concat(er(o))}})})}}}},go={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?_n:r,a=t.classes,o=void 0===a?[]:a,i=t.attributes,l=void 0===i?{}:i,s=t.styles,c=void 0===s?{}:s;return La({type:"text",content:e},function(){return Ca("beforeDOMElementCreation",{content:e,params:t}),Oa({content:e,transform:Jt(Jt({},_n),n),extra:{attributes:l,styles:c,classes:["".concat(Cn.cssPrefix,"-layers-text")].concat(er(o))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var r=t.transform,n=t.extra,a=null,o=null;if(br){var i=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();a=l.width/i,o=l.height/i}return Promise.resolve([e,Oa({content:e.innerHTML,width:a,height:o,transform:r,extra:n,watchable:!0})])}}},bo=new RegExp('"',"ug"),yo=[1105920,1112319],xo=Jt(Jt(Jt(Jt({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),wo=Object.keys(xo).reduce(function(e,t){return e[t.toLowerCase()]=xo[t],e},{}),So=Object.keys(wo).reduce(function(e,t){var r=wo[t];return e[t]=r[900]||er(Object.entries(r))[0][1],e},{});function ko(e,t){var r="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(n,a){if(null!==e.getAttribute(r))return n();var o=Rn(e.children).filter(function(e){return e.getAttribute(tn)===t})[0],i=pr.getComputedStyle(e,t),l=i.getPropertyValue("font-family"),s=l.match(yn),c=i.getPropertyValue("font-weight"),u=i.getPropertyValue("content");if(o&&!s)return e.removeChild(o),n();if(s&&"none"!==u&&""!==u){var d=i.getPropertyValue("content"),f=function(e,t){var r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),a=isNaN(n)?"normal":n;return(wo[r]||{})[a]||So[r]}(l,c),p=function(e){return Kn(er(e.replace(bo,""))[0]||"")}(d),m=s[0].startsWith("FontAwesome"),h=function(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),r=e.getPropertyValue("content").replace(bo,""),n=r.codePointAt(0),a=n>=yo[0]&&n<=yo[1],o=2===r.length&&r[0]===r[1];return a||o||t}(i),v=ua(f,p),g=v;if(m){var b=function(e){var t=oa[e],r=ua("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}(p);b.iconName&&b.prefix&&(v=b.iconName,f=b.prefix)}if(!v||h||o&&o.getAttribute(rn)===f&&o.getAttribute(nn)===g)n();else{e.setAttribute(r,g),o&&e.removeChild(o);var y={iconName:null,prefix:null,transform:_n,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},x=y.extra;x.attributes[tn]=t,Ua(v,f).then(function(a){var o=Ma(Jt(Jt({},y),{},{icons:{main:a,mask:{prefix:null,iconName:null,rest:[]}},prefix:f,iconName:g,extra:x,watchable:!0})),i=mr.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(i,e.firstChild):e.appendChild(i),i.outerHTML=o.map(function(e){return Vn(e)}).join("\n"),e.removeAttribute(r),n()}).catch(a)}}else n()})}function Eo(e){return Promise.all([ko(e,"::before"),ko(e,"::after")])}function Po(e){return e.parentNode!==document.head&&!~on.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(tn)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}var Co=function(e){return!!e&&ln.some(function(t){return e.includes(t)})},To=function(e){if(!e)return[];for(var t=new Set,r=[e],n=function(){var e=o[a];r=r.flatMap(function(t){return t.split(e).map(function(e){return e.replace(/,\s*$/,"").trim()})})},a=0,o=[/(?=\s:)/,/(?<=\)\)?[^,]*,)/];a<o.length;a++)n();r=r.flatMap(function(e){return e.includes("(")?e:e.split(",").map(function(e){return e.trim()})});var i,l=Yt(r);try{for(l.s();!(i=l.n()).done;){var s=i.value;if(Co(s)){var c=ln.reduce(function(e,t){return e.replace(t,"")},s);""!==c&&"*"!==c&&t.add(c)}}}catch(u){l.e(u)}finally{l.f()}return t};function jo(e){if(gr){var t;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])t=e;else if(Cn.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r,n=new Set,a=Yt(document.styleSheets);try{for(a.s();!(r=a.n()).done;){var o=r.value;try{var i,l=Yt(o.cssRules);try{for(l.s();!(i=l.n()).done;){var s,c=i.value,u=Yt(To(c.selectorText));try{for(u.s();!(s=u.n()).done;){var d=s.value;n.add(d)}}catch(p){u.e(p)}finally{u.f()}}}catch(p){l.e(p)}finally{l.f()}}catch(m){Cn.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(m.message,')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))}}}catch(p){a.e(p)}finally{a.f()}if(!n.size)return;var f=Array.from(n).join(", ");try{t=e.querySelectorAll(f)}catch(h){}}return new Promise(function(e,r){var n=Rn(t).filter(Po).map(Eo),a=Va("searchPseudoElements");to(),Promise.all(n).then(function(){a(),ro(),e()}).catch(function(){a(),ro(),r()})})}}var _o={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=jo,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,r=void 0===t?mr:t;Cn.searchPseudoElements&&jo(r)}}},Ao=!1,Ro=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),n=r[0],a=r.slice(1).join("-");if(n&&"h"===a)return e.flipX=!0,e;if(n&&"v"===a)return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(n){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},No={mixout:function(){return{parse:{transform:function(e){return Ro(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=Ro(r)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,n=e.containerWidth,a=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*r.x,", ").concat(32*r.y,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),c={outer:o,inner:{transform:"".concat(i," ").concat(l," ").concat(s)},path:{transform:"translate(".concat(a/2*-1," -256)")}};return{tag:"g",attributes:Jt({},c.outer),children:[{tag:"g",attributes:Jt({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Jt(Jt({},t.icon.attributes),c.path)}]}]}}}},zo={x:0,y:0,width:"100%",height:"100%"};function Lo(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Mo={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),n=r?ga(r.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]};return n.prefix||(n.prefix=pa()),e.mask=n,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,r=e.children,n=e.attributes,a=e.main,o=e.mask,i=e.maskId,l=e.transform,s=a.width,c=a.icon,u=o.width,d=o.icon,f=function(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(o," ").concat(i," ").concat(l)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:l,containerWidth:u,iconWidth:s}),p={tag:"rect",attributes:Jt(Jt({},zo),{},{fill:"white"})},m=c.children?{children:c.children.map(Lo)}:{},h={tag:"g",attributes:Jt({},f.inner),children:[Lo(Jt({tag:c.tag,attributes:Jt(Jt({},c.attributes),f.path)},m))]},v={tag:"g",attributes:Jt({},f.outer),children:[h]},g="mask-".concat(i||An()),b="clip-".concat(i||An()),y={tag:"mask",attributes:Jt(Jt({},zo),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(t=d,"g"===t.tag?t.children:[t])},y]};return r.push(x,{tag:"rect",attributes:Jt({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},zo)}),{children:r,attributes:n}}}},Oo={provides:function(e){var t=!1;pr.matchMedia&&(t=pr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:Jt(Jt({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=Jt(Jt({},n),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Jt(Jt({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:Jt(Jt({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Jt(Jt({},a),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:Jt(Jt({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Jt(Jt({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:Jt(Jt({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Jt(Jt({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Fo=[Dn,mo,ho,vo,go,_o,{mixout:function(){return{dom:{unwatch:function(){to(),Ao=!0}}}},hooks:function(){return{bootstrap:function(){ao(Pa("mutationObserverCallbacks",{}))},noAuto:function(){no&&no.disconnect()},watch:function(e){var t=e.observeMutationsRoot;Ao?ro():ao(Pa("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},No,Mo,Oo,{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol"),n=null!==r&&(""===r||r);return e.symbol=n,e}}}}];!function(e,t){var r=t.mixoutsTo;wa=e,Sa={},Object.keys(ka).forEach(function(e){-1===Ea.indexOf(e)&&delete ka[e]}),wa.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"===typeof t[e]&&(r[e]=t[e]),"object"===rr(t[e])&&Object.keys(t[e]).forEach(function(n){r[e]||(r[e]={}),r[e][n]=t[e][n]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(e){Sa[e]||(Sa[e]=[]),Sa[e].push(n[e])})}e.provides&&e.provides(ka)})}(Fo,{mixoutsTo:Na});var Io=Na.parse,Do=Na.icon,Uo=r(173),$o=r.n(Uo);function Bo(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Ho(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Wo(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Vo(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Wo(Object(r),!0).forEach(function(t){Ho(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Wo(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function qo(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,t)||Yo(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Go(e){return function(e){if(Array.isArray(e))return Bo(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Yo(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ko(e){return Ko="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ko(e)}function Yo(e,t){if(e){if("string"==typeof e)return Bo(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Bo(e,t):void 0}}var Qo;try{var Xo=r(900);Qo=Xo.version}catch(Sf){Qo={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.FA_VERSION||"7.0.0-alpha8"}function Jo(e){var t=e.beat,r=e.fade,n=e.beatFade,a=e.bounce,o=e.shake,i=e.flash,l=e.spin,s=e.spinPulse,c=e.spinReverse,u=e.pulse,d=e.fixedWidth,f=e.inverse,p=e.border,m=e.listItem,h=e.flip,v=e.size,g=e.rotation,b=e.pull,y=e.swapOpacity,x=e.rotateBy,w=e.widthAuto,S=function(e,t){for(var r=qo(e.split("-"),2),n=r[0],a=r[1],o=qo(t.split("-"),2),i=o[0],l=o[1],s=n.split("."),c=i.split("."),u=0;u<Math.max(s.length,c.length);u++){var d=s[u]||"0",f=c[u]||"0",p=parseInt(d,10),m=parseInt(f,10);if(p!==m)return p>m}for(var h=0;h<Math.max(s.length,c.length);h++){var v=s[h]||"0",g=c[h]||"0";if(v!==g&&v.length!==g.length)return v.length<g.length}return!(a&&!l)}(Qo,"7.0.0-alpha1"),k=Ho(Ho(Ho(Ho(Ho(Ho({"fa-beat":t,"fa-fade":r,"fa-beat-fade":n,"fa-bounce":a,"fa-shake":o,"fa-flash":i,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":s,"fa-pulse":u,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(v),"undefined"!==typeof v&&null!==v),"fa-rotate-".concat(g),"undefined"!==typeof g&&null!==g&&0!==g),"fa-pull-".concat(b),"undefined"!==typeof b&&null!==b),"fa-swap-opacity",y),"fa-rotate-by",S&&x),"fa-width-auto",S&&w);return Object.keys(k).map(function(e){return k[e]?e:null}).filter(function(e){return e})}function Zo(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1);var t}var ei=["style"];var ti=!1;try{ti=!0}catch(Sf){}function ri(e){return e&&"object"===Ko(e)&&e.prefix&&e.iconName&&e.icon?e:Io.icon?Io.icon(e):null===e?null:e&&"object"===Ko(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function ni(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ho({},e,t):{}}var ai={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},oi=e.forwardRef(function(e,t){var r=Vo(Vo({},ai),e),n=r.icon,a=r.mask,o=r.symbol,i=r.className,l=r.title,s=r.titleId,c=r.maskId,u=ri(n),d=ni("classes",[].concat(Go(Jo(r)),Go((i||"").split(" ")))),f=ni("transform","string"===typeof r.transform?Io.transform(r.transform):r.transform),p=ni("mask",ri(a)),m=Do(u,Vo(Vo(Vo(Vo({},d),f),p),{},{symbol:o,title:l,titleId:s,maskId:c}));if(!m)return function(){var e;!ti&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var h=m.abstract,v={ref:t};return Object.keys(r).forEach(function(e){ai.hasOwnProperty(e)||(v[e]=r[e])}),ii(h[0],v)});oi.displayName="FontAwesomeIcon",oi.propTypes={beat:$o().bool,border:$o().bool,beatFade:$o().bool,bounce:$o().bool,className:$o().string,fade:$o().bool,flash:$o().bool,mask:$o().oneOfType([$o().object,$o().array,$o().string]),maskId:$o().string,fixedWidth:$o().bool,inverse:$o().bool,flip:$o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:$o().oneOfType([$o().object,$o().array,$o().string]),listItem:$o().bool,pull:$o().oneOf(["right","left"]),pulse:$o().bool,rotation:$o().oneOf([0,90,180,270]),rotateBy:$o().bool,shake:$o().bool,size:$o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:$o().bool,spinPulse:$o().bool,spinReverse:$o().bool,symbol:$o().oneOfType([$o().bool,$o().string]),title:$o().string,titleId:$o().string,transform:$o().oneOfType([$o().string,$o().object]),swapOpacity:$o().bool,widthAuto:$o().bool};var ii=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var a=(r.children||[]).map(function(r){return e(t,r)}),o=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),a=Zo(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[Zo(t)]=n}return e},{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(n,ei);return o.attrs.style=Vo(Vo({},o.attrs.style),l),t.apply(void 0,[r.tag,Vo(Vo({},o.attrs),s)].concat(Go(a)))}.bind(null,e.createElement);const li={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},si=li,ci={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},ui=ci,di={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},fi={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},pi={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},mi=pi,hi={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},vi={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},gi={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},bi={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},yi={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]},xi={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},wi={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Si=wi,ki={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},Ei=ki,Pi={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},Ci=Pi,Ti={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},ji={prefix:"fas",iconName:"recycle",icon:[512,512,[9842,9850,9851],"f1b8","M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448l0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z"]},_i={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Ai={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Ri={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Ni=Ri,zi={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Li={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},Mi=Li,Oi={prefix:"fas",iconName:"tag",icon:[448,512,[127991],"f02b","M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Fi={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Ii={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Di=Ii,Ui={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},$i=Ui,Bi={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Hi={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Wi={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Vi={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},qi=Vi,Gi={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},Ki={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Yi={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},Qi={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Xi=Qi,Ji={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},Zi={prefix:"fas",iconName:"file-export",icon:[576,512,["arrow-right-from-file"],"f56e","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 128-168 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0 0 112c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM384 336l0-48 110.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L384 336zm0-208l-128 0L256 0 384 128z"]},el={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},tl=el,rl={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]},nl={prefix:"fas",iconName:"note-sticky",icon:[448,512,[62026,"sticky-note"],"f249","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-112c0-26.5 21.5-48 48-48l112 0 0-224c0-35.3-28.7-64-64-64L64 32zM448 352l-45.3 0L336 352c-8.8 0-16 7.2-16 16l0 66.7 0 45.3 32-32 64-64 32-32z"]},al=nl,ol={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};const il="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname;console.log("\ud83c\udf10 Configura\xe7\xe3o de ambiente:",{NODE_ENV:"production",hostname:window.location.hostname,isDevelopment:il});const ll={API_BASE_URL:"https://wrt-back.vercel.app/api",NODE_ENV:"production",IS_DEVELOPMENT:il,IS_PRODUCTION:!il,APP_NAME:"WRTmind",APP_VERSION:"1.0.0",FIREBASE_API_KEY:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_API_KEY,FIREBASE_AUTH_DOMAIN:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_AUTH_DOMAIN,FIREBASE_PROJECT_ID:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_PROJECT_ID,FIREBASE_STORAGE_BUCKET:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_STORAGE_BUCKET,FIREBASE_MESSAGING_SENDER_ID:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,FIREBASE_APP_ID:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_APP_ID,FIREBASE_MEASUREMENT_ID:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_MEASUREMENT_ID,ENABLE_DEBUG:il,ENABLE_LOGS:!0,ENABLE_ANALYTICS:!il},sl=function(){return`${ll.API_BASE_URL}${arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}`};console.log("\ud83c\udf10 Configura\xe7\xe3o do Frontend:",{environment:ll.NODE_ENV,apiUrl:ll.API_BASE_URL,isDevelopment:ll.IS_DEVELOPMENT});const cl=ll.API_BASE_URL;async function ul(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("\ud83c\udf10 makeRequest - Endpoint:",e),console.log("\ud83c\udf10 makeRequest - URL completa:",`${cl}${e}`),console.log("\ud83c\udf10 makeRequest - Options:",t);try{const r=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=sl(e),n={headers:{"Content-Type":"application/json"},...t},a=localStorage.getItem("user");if(console.log("\ud83d\udd0d apiRequest - User do localStorage:",a),a)try{const e=JSON.parse(a);console.log("\ud83d\udd0d apiRequest - UserData:",e),e.id?(n.headers["user-id"]=e.id,console.log("\ud83d\udd0d apiRequest - Header user-id adicionado:",e.id)):console.log("\u274c apiRequest - UserData.id n\xe3o encontrado")}catch(o){console.error("\u274c apiRequest - Erro ao obter ID do usu\xe1rio:",o)}else console.log("\u274c apiRequest - User n\xe3o encontrado no localStorage");return console.log("\ud83d\udd0d apiRequest - Headers finais:",n.headers),fetch(r,n)}(e,t);if(console.log("\ud83d\udce1 makeRequest - Status:",r.status),console.log("\ud83d\udce1 makeRequest - Status Text:",r.statusText),!r.ok){const e=await r.text();throw console.error("\u274c makeRequest - Erro HTTP:",r.status,e),401===r.status&&(console.log("\ud83d\udd10 Erro 401 - Limpando dados do usu\xe1rio"),localStorage.removeItem("user"),window.dispatchEvent(new CustomEvent("userLogout"))),new Error(`HTTP ${r.status}: ${r.statusText}`)}const n=await r.json();return console.log("\ud83d\udce6 makeRequest - Dados recebidos:",n),n}catch(r){throw console.error("\u274c makeRequest - Erro:",r),new Error(`Erro na requisi\xe7\xe3o: ${r.message}`)}}console.log("\ud83c\udf10 API Base URL:",cl),console.log("\ud83c\udf10 Environment:",ll.NODE_ENV),console.log("\u2705 Configura\xe7\xe3o da API carregada:",{baseURL:cl,environment:ll.NODE_ENV,isDevelopment:ll.IS_DEVELOPMENT});const dl=()=>{const e=localStorage.getItem("user");if(console.log("\ud83d\udd0d getUserId - User do localStorage:",e),!e)return console.log("\u274c getUserId - User n\xe3o encontrado no localStorage"),null;try{const t=JSON.parse(e);return console.log("\ud83d\udd0d getUserId - UserData:",t),console.log("\ud83d\udd0d getUserId - UserId:",t.id),t.id}catch(t){return console.error("\u274c getUserId - Erro ao obter ID do usu\xe1rio:",t),null}},fl={buscarTodos:async()=>{try{console.log("\ud83c\udf10 API - listarLinks chamado");const e=`${ll.API_BASE_URL}/links`;console.log("\ud83c\udf10 API - URL completa:",e);const t=await fetch(e,{method:"GET",headers:{"Content-Type":"application/json","user-id":dl()}});if(console.log("\ud83d\udce1 API - Status:",t.status),console.log("\ud83d\udce1 API - Status Text:",t.statusText),!t.ok){const e=await t.text();throw console.error("\u274c API - Erro HTTP:",t.status,e),new Error(`HTTP ${t.status}: ${e}`)}const r=await t.json();return console.log("\u2705 API - listarLinks resposta:",r),r}catch(e){throw console.error("Erro ao listar links:",e),e}},buscarPorId:async e=>{try{return await ul(`/links/${e}`)}catch(t){throw console.error("Erro ao buscar link por ID:",t),t}},criar:async e=>{try{console.log("\ud83c\udf10 API - criarLink chamado com dados:",e);const t=dl();if(console.log("\ud83c\udf10 API - UserId obtido:",t),!t)throw new Error("Usu\xe1rio n\xe3o autenticado");const r={nome:e.nome,url:e.url,imagemUrl:e.imagemUrl||""};console.log("\ud83c\udf10 API - dados corretos para Vercel:",r);const n=`${ll.API_BASE_URL}/links`;console.log("\ud83c\udf10 API - URL completa:",n);const a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json","user-id":t},body:JSON.stringify(r)});if(console.log("\ud83d\udce1 API - Status:",a.status),console.log("\ud83d\udce1 API - Status Text:",a.statusText),!a.ok){const e=await a.text();throw console.error("\u274c API - Erro HTTP:",a.status,e),new Error(`HTTP ${a.status}: ${e}`)}const o=await a.json();return console.log("\u2705 API - criarLink resposta:",o),o}catch(t){throw console.error("Erro ao criar link:",t),t}},atualizar:async(e,t)=>{try{console.log("\ud83c\udf10 API - atualizarLink chamado com ID:",e,"dados:",t);const r=dl();if(!r)throw new Error("Usu\xe1rio n\xe3o autenticado");const n={nome:t.nome,url:t.url,imagemUrl:t.imagemUrl||""};console.log("\ud83c\udf10 API - dados corretos para Vercel:",n);const a=`${ll.API_BASE_URL}/links?id=${e}`;console.log("\ud83c\udf10 API - URL completa:",a);const o=await fetch(a,{method:"PUT",headers:{"Content-Type":"application/json","user-id":r},body:JSON.stringify(n)});if(console.log("\ud83d\udce1 API - Status:",o.status),console.log("\ud83d\udce1 API - Status Text:",o.statusText),!o.ok){const e=await o.text();throw console.error("\u274c API - Erro HTTP:",o.status,e),new Error(`HTTP ${o.status}: ${e}`)}const i=await o.json();return console.log("\u2705 API - atualizarLink resposta:",i),i}catch(r){throw console.error("\u274c API - Erro ao atualizar link:",r),r}},deletar:async e=>{try{console.log("\ud83c\udf10 API - deletarLink chamado com ID:",e);const t=dl();if(!t)throw new Error("Usu\xe1rio n\xe3o autenticado");const r=`${ll.API_BASE_URL}/links?id=${e}`;console.log("\ud83c\udf10 API - URL completa:",r);const n=await fetch(r,{method:"DELETE",headers:{"Content-Type":"application/json","user-id":t}});if(console.log("\ud83d\udce1 API - Status:",n.status),console.log("\ud83d\udce1 API - Status Text:",n.statusText),!n.ok){const e=await n.text();throw console.error("\u274c API - Erro HTTP:",n.status,e),new Error(`HTTP ${n.status}: ${e}`)}const a=await n.json();return console.log("\u2705 API - deletarLink resposta:",a),a}catch(t){throw console.error("\u274c API - Erro ao deletar link:",t),t}},sincronizarManual:()=>ul("/links/sincronizar-manual",{method:"POST"})},pl=async function(){try{const t=localStorage.getItem("user");let r=null;if(t)try{r=JSON.parse(t).id}catch(e){console.error("\u274c Erro ao obter ID do usu\xe1rio:",e)}if(!r)throw new Error("Usu\xe1rio n\xe3o autenticado");const n=`${ll.API_BASE_URL}/notas?userId=${r}`;console.log("\ud83c\udf10 API - listarNotas URL:",n);const a=await fetch(n);if(!a.ok){const e=await a.text();throw new Error(`HTTP ${a.status}: ${e}`)}const o=await a.json();return console.log("\ud83d\udce6 API - listarNotas dados:",o),o}catch(e){throw console.error("Erro ao listar notas:",e),e}},ml=async e=>{try{return await ul(`/notas/${e}`)}catch(t){throw console.error("Erro ao buscar nota por ID:",t),t}},hl=async e=>{try{const r=localStorage.getItem("user");let n=null;if(r)try{n=JSON.parse(r).id}catch(t){console.error("\u274c Erro ao obter ID do usu\xe1rio:",t)}if(!n)throw new Error("Usu\xe1rio n\xe3o autenticado");const a=`${ll.API_BASE_URL}/notas`;console.log("\ud83c\udf10 API - criarNota URL:",a),console.log("\ud83c\udf10 API - criarNota dados:",{...e,userId:n});const o=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,userId:n})});if(!o.ok){const e=await o.text();throw new Error(`HTTP ${o.status}: ${e}`)}const i=await o.json();return console.log("\u2705 API - criarNota resposta:",i),i}catch(t){throw console.error("\u274c API - Erro ao criar nota:",t),t}},vl=async(e,t)=>{try{console.log("\ud83c\udf10 API - atualizarNota chamado com ID:",e,"dados:",t);const r=`${ll.API_BASE_URL}/notas?id=${e}`;console.log("\ud83c\udf10 API - URL completa:",r);const n=await fetch(r,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(console.log("\ud83d\udce1 API - Status:",n.status),console.log("\ud83d\udce1 API - Status Text:",n.statusText),!n.ok){const e=await n.text();throw console.error("\u274c API - Erro HTTP:",n.status,e),new Error(`HTTP ${n.status}: ${e}`)}const a=await n.json();return console.log("\u2705 API - atualizarNota resposta:",a),a}catch(r){throw console.error("\u274c API - Erro ao atualizar nota:",r),console.error("\u274c API - Stack trace:",r.stack),r}},gl=async e=>{try{console.log("\ud83c\udf10 API - deletarNota chamado com ID:",e);const t=`${ll.API_BASE_URL}/notas?id=${e}`;console.log("\ud83c\udf10 API - URL completa:",t);const r=await fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}});if(console.log("\ud83d\udce1 API - Status:",r.status),console.log("\ud83d\udce1 API - Status Text:",r.statusText),!r.ok){const e=await r.text();throw console.error("\u274c API - Erro HTTP:",r.status,e),new Error(`HTTP ${r.status}: ${e}`)}const n=await r.json();return console.log("\u2705 API - deletarNota resposta:",n),n}catch(t){throw console.error("\u274c API - Erro ao deletar nota:",t),console.error("\u274c API - Stack trace:",t.stack),t}},bl=async e=>{try{return await ul(`/notas/${e}/restore`,{method:"PATCH"})}catch(t){throw console.error("Erro ao restaurar nota:",t),t}},yl=async e=>{try{return await ul(`/notas/${e}/permanent`,{method:"DELETE"})}catch(t){throw console.error("Erro ao excluir nota definitivamente:",t),t}},xl=async e=>{try{return await ul(`/notas/${e}/favorito`,{method:"PATCH"})}catch(t){throw console.error("Erro ao alternar favorito:",t),t}},wl=async e=>{try{return await ul(`/notas/${e}/fixado`,{method:"PATCH"})}catch(t){throw console.error("Erro ao alternar fixado:",t),t}},Sl=async(e,t)=>{try{return await ul(`/notas/${e}/ordenacao`,{method:"PATCH",body:JSON.stringify({ordenacao:t})})}catch(r){throw console.error("Erro ao atualizar ordena\xe7\xe3o:",r),r}},kl=async e=>{try{return await ul("/notas/ordenacao-multipla",{method:"PATCH",body:JSON.stringify({ordenacoes:e})})}catch(t){throw console.error("Erro ao atualizar m\xfaltiplas ordena\xe7\xf5es:",t),t}},El=async()=>{try{return await ul("/notas/favoritas")}catch(e){throw console.error("Erro ao buscar favoritas:",e),e}},Pl=async()=>{try{return await ul("/notas/fixadas")}catch(e){throw console.error("Erro ao buscar fixadas:",e),e}},Cl=async()=>{try{return await ul("/categorias")}catch(e){throw console.error("Erro ao listar categorias:",e),e}},Tl=async e=>{try{return await ul("/categorias",{method:"POST",body:JSON.stringify(e)})}catch(t){throw console.error("Erro ao criar categoria:",t),t}},jl=async(e,t)=>{try{return await ul(`/categorias/${e}`,{method:"PUT",body:JSON.stringify(t)})}catch(r){throw console.error("Erro ao atualizar categoria:",r),r}},_l=async e=>{try{return await ul(`/categorias/${e}`,{method:"DELETE"})}catch(t){throw console.error("Erro ao deletar categoria:",t),t}};var Al=r(579);const Rl=(0,e.createContext)(),Nl=()=>{const t=(0,e.useContext)(Rl);if(!t)throw new Error("useNotasAPIContext deve ser usado dentro de um NotasAPIProvider");return t},zl=t=>{let{children:r}=t;const[n,a]=(0,e.useState)("anotacoes"),[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(""),[c,u]=(0,e.useState)("dataCriacao"),{notas:d,categorias:f,topicos:p,carregando:m,erro:h,carregarNotas:v,carregarCategorias:g,carregarTopicos:b,criarNota:y,atualizarNota:x,deletarNota:w,restaurarNota:S,excluirNotaDefinitivamente:k,buscarNotaPorId:E,filtrarPorCategoria:P,buscarPorTermo:C,limparErro:T,notasAtivas:j,notasDeletadas:_,adicionarCategoria:A,editarCategoria:R,removerCategoria:N,alternarFavorito:z,buscarFavoritas:L}=(()=>{const[t,r]=(0,e.useState)([]),[n,a]=(0,e.useState)([]),[o,i]=(0,e.useState)([]),[l,s]=(0,e.useState)(!1),[c,u]=(0,e.useState)(null),d=(0,e.useCallback)(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(!0),u(null);try{const n=await pl(e);var t;n&&n.success?(r(n.notas||[]),console.log("\u2705 Notas carregadas:",(null===(t=n.notas)||void 0===t?void 0:t.length)||0)):(console.error("\u274c Resposta inv\xe1lida da API:",n),u("Resposta inv\xe1lida da API"))}catch(n){console.error("Erro ao carregar notas:",n),u(n.message)}finally{s(!1)}},[]),f=(0,e.useCallback)(async()=>{try{const e=await Cl();a(e.categorias||[])}catch(e){console.error("Erro ao carregar categorias:",e),u(e.message)}},[]),p=(0,e.useCallback)(async()=>{try{const e=await Cl();i(e.categorias||[])}catch(e){console.error("Erro ao carregar t\xf3picos:",e),u(e.message)}},[]),m=(0,e.useCallback)(async e=>{s(!0),u(null);try{const t=await hl(e);return await d({ativo:!0}),t}catch(t){throw console.error("Erro ao criar nota:",t),u(t.message),t}finally{s(!1)}},[d]),h=(0,e.useCallback)(async(e,t)=>{s(!0),u(null);try{const r=await vl(e,t);return await d({ativo:!0}),r}catch(r){throw console.error("Erro ao atualizar nota:",r),u(r.message),r}finally{s(!1)}},[d]),v=(0,e.useCallback)(async e=>{s(!0),u(null);try{await gl(e),await d({ativo:!0})}catch(t){throw console.error("Erro ao deletar nota:",t),u(t.message),t}finally{s(!1)}},[d]),g=(0,e.useCallback)(async e=>{s(!0),u(null);try{const t=(await bl(e)).nota;return await d({ativo:!0}),t}catch(t){throw console.error("Erro ao restaurar nota:",t),u(t.message),t}finally{s(!1)}},[d]),b=(0,e.useCallback)(async e=>{s(!0),u(null);try{return await yl(e),await d({ativo:!0}),!0}catch(t){throw console.error("Erro ao excluir nota definitivamente:",t),u(t.message),t}finally{s(!1)}},[d]),y=(0,e.useCallback)(async e=>{s(!0),u(null);try{const t=await xl(e);return await d({ativo:!0}),t}catch(t){throw console.error("Erro ao alternar favorito:",t),u(t.message),t}finally{s(!1)}},[d]),x=(0,e.useCallback)(async()=>{s(!0),u(null);try{return(await El()).notas||[]}catch(e){return console.error("Erro ao buscar favoritas:",e),u(e.message),[]}finally{s(!1)}},[]),w=(0,e.useCallback)(async e=>{s(!0),u(null);try{const t=(await wl(e)).nota;return r(r=>r.map(r=>r.id===e?{...r,fixado:t.fixado}:r)),t}catch(t){throw console.error("Erro ao alternar fixado:",t),u(t.message),t}finally{s(!1)}},[]),S=(0,e.useCallback)(async(e,t)=>{s(!0),u(null);try{const n=(await Sl(e,t)).nota;return r(t=>t.map(t=>t.id===e?{...t,ordenacao:n.ordenacao}:t)),n}catch(n){throw console.error("Erro ao atualizar ordena\xe7\xe3o:",n),u(n.message),n}finally{s(!1)}},[]),k=(0,e.useCallback)(async e=>{s(!0),u(null);try{return await kl(e),await d({ativo:!0}),!0}catch(t){throw console.error("Erro ao atualizar m\xfaltiplas ordena\xe7\xf5es:",t),u(t.message),t}finally{s(!1)}},[d]),E=(0,e.useCallback)(async()=>{s(!0),u(null);try{return(await Pl()).notas||[]}catch(e){return console.error("Erro ao buscar notas fixadas:",e),u(e.message),[]}finally{s(!1)}},[]),P=(0,e.useCallback)(async e=>{s(!0),u(null);try{return(await ml(e)).nota}catch(t){throw console.error("Erro ao buscar nota:",t),u(t.message),t}finally{s(!1)}},[]),C=(0,e.useCallback)(async e=>await d({categoria:e,ativo:!0}),[d]),T=(0,e.useCallback)(async e=>t.filter(t=>t.titulo.toLowerCase().includes(e.toLowerCase())||t.conteudo.toLowerCase().includes(e.toLowerCase())),[t]),j=(0,e.useCallback)(()=>{u(null)},[]),_=(0,e.useCallback)(async e=>{try{const t=(await Tl(e)).categoria;return a(e=>[...e,t]),t}catch(t){throw console.error("Erro ao adicionar categoria:",t),u(t.message),t}},[]),A=(0,e.useCallback)(async(e,t)=>{try{const r=(await jl(e,t)).categoria;return a(t=>t.map(t=>t.id===e?r:t)),r}catch(r){throw console.error("Erro ao editar categoria:",r),u(r.message),r}},[]),R=(0,e.useCallback)(async e=>{try{return await _l(e),a(t=>t.filter(t=>t.id!==e)),!0}catch(t){throw console.error("Erro ao remover categoria:",t),u(t.message),t}},[]);return(0,e.useEffect)(()=>{console.log("\ud83d\ude80 Verificando se usu\xe1rio est\xe1 logado..."),(async()=>{try{const t=localStorage.getItem("user");if(!t)return console.log("\u26a0\ufe0f Usu\xe1rio n\xe3o est\xe1 logado, aguardando login..."),r([]),void a([]);let n;try{if(n=JSON.parse(t),!n.id)return console.log("\u26a0\ufe0f Dados do usu\xe1rio inv\xe1lidos, aguardando login v\xe1lido..."),r([]),void a([])}catch(e){return console.log("\u26a0\ufe0f Erro ao parsear dados do usu\xe1rio, aguardando login v\xe1lido..."),r([]),void a([])}console.log("\u2705 Usu\xe1rio logado, carregando dados...");const o=await pl();r(o.notas||[]);const i=(await Cl()).categorias||[];a(i)}catch(e){console.error("Erro ao carregar dados iniciais:",e),u(e.message),r([]),a([])}})()},[]),(0,e.useEffect)(()=>{const e=e=>{"user"===e.key&&(console.log("\ud83d\udc64 Mudan\xe7a detectada no localStorage (user)"),e.newValue?(console.log("\u2705 Usu\xe1rio logado, carregando dados..."),(async()=>{try{const e=await pl();r(e.notas||[]);const t=(await Cl()).categorias||[];a(t)}catch(e){console.error("Erro ao carregar dados ap\xf3s login:",e),u(e.message)}})()):(console.log("\ud83d\udeaa Usu\xe1rio deslogado, limpando dados..."),r([]),a([]),u(null)))},t=e=>{console.log("\ud83d\udc64 Evento de login detectado:",e.detail),console.log("\u2705 Usu\xe1rio logado, carregando dados..."),(async()=>{try{const e=await pl();r(e.notas||[]);const t=(await Cl()).categorias||[];a(t)}catch(e){console.error("Erro ao carregar dados ap\xf3s login:",e),u(e.message)}})()},n=()=>{console.log("\ud83d\udeaa Evento de logout detectado"),console.log("\ud83d\udeaa Usu\xe1rio deslogado, limpando dados..."),r([]),a([]),u(null)};return window.addEventListener("storage",e),window.addEventListener("userLogin",t),window.addEventListener("userLogout",n),()=>{window.removeEventListener("storage",e),window.removeEventListener("userLogin",t),window.removeEventListener("userLogout",n)}},[]),{notas:t,categorias:n,topicos:o,carregando:l,erro:c,carregarNotas:d,carregarCategorias:f,carregarTopicos:p,criarNota:m,atualizarNota:h,deletarNota:v,restaurarNota:g,excluirNotaDefinitivamente:b,buscarNotaPorId:P,filtrarPorCategoria:C,buscarPorTermo:T,limparErro:j,alternarFixado:w,atualizarOrdenacao:S,atualizarMultiplasOrdenacoes:k,buscarFixadas:E,alternarFavorito:y,buscarFavoritas:x,adicionarCategoria:_,editarCategoria:A,removerCategoria:R,notasAtivas:t?t.filter(e=>!1!==e.ativo):[],notasDeletadas:t?t.filter(e=>!1===e.ativo):[],notasFixadas:t?t.filter(e=>e.fixado&&!1!==e.ativo):[]}})();(0,e.useEffect)(()=>(window.notasContext={carregarNotas:v,carregarCategorias:g,carregarTopicos:b,recarregarDados:O},()=>{delete window.notasContext}),[v,g,b]);const M=(0,e.useMemo)(()=>{if(!j||0===j.length)return[];let e=[...j];if(n&&"anotacoes"!==n&&(e=e.filter(e=>e.topico===n)),l&&l.trim()){const t=l.toLowerCase().trim();e=e.filter(e=>e.titulo.toLowerCase().includes(t)||e.conteudo.toLowerCase().includes(t))}switch(c){case"dataCriacao":e.sort((e,t)=>new Date(t.dataCriacao)-new Date(e.dataCriacao));break;case"dataModificacao":e.sort((e,t)=>new Date(t.dataModificacao)-new Date(e.dataModificacao));break;case"titulo":e.sort((e,t)=>e.titulo.localeCompare(t.titulo));break;case"topico":e.sort((e,t)=>e.topico.localeCompare(t.topico))}return e},[j,n,l,c]),O=async()=>{try{await v({ativo:!0}),await g(),await b()}catch(e){console.error("Erro ao recarregar dados:",e)}},F={totalNotas:j?j.length:0,totalCategorias:f?f.length:0,notasDeletadas:_?_.length:0,notasPorCategoria:f?f.map(e=>({categoria:e.nome,quantidade:j?j.filter(t=>t.topico===e.nome).length:0})):[],notasPorTopico:p?p.map(e=>({topico:e,quantidade:j?j.filter(t=>t.topico===e).length:0})):[]},I={notas:M,todasAsNotas:d,categorias:f,topicos:p,carregando:m,erro:h,categoriaAtiva:n,menuRecolhido:o,termoBusca:l,ordenacao:c,estatisticas:F,adicionarNota:async e=>{try{return await y(e)}catch(t){throw console.error("Erro ao adicionar nota:",t),t}},editarNota:async(e,t)=>{try{return await x(e,t)}catch(r){throw console.error("Erro ao editar nota:",r),r}},excluirNota:async e=>{try{await w(e)}catch(t){throw console.error("Erro ao excluir nota:",t),t}},excluirNotaDefinitivamente:k,visualizarNota:async e=>{try{return await E(e)}catch(t){throw console.error("Erro ao buscar nota:",t),t}},restaurarNota:S,carregarNotas:v,carregarCategorias:g,carregarTopicos:b,adicionarCategoria:A,editarCategoria:R,removerCategoria:N,filtrarPorCategoria:async e=>{try{return await P(e)}catch(t){throw console.error("Erro ao filtrar por categoria:",t),t}},buscarNotas:async e=>{try{return await C(e)}catch(t){throw console.error("Erro ao buscar notas:",t),t}},recarregarDados:O,definirCategoriaAtiva:e=>{a(e)},alternarMenu:()=>{i(!o)},definirTermoBusca:e=>{s(e)},definirOrdenacao:e=>{u(e)},limparErro:T,notasAtivas:j,notasDeletadas:_,buscarFavoritas:L,alternarFavorito:z};return(0,Al.jsx)(Rl.Provider,{value:I,children:r})},Ll=Vt.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  padding: 20px;
`,Ml=Vt.div`
  background: white;
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraForte);
  padding: 40px;
  width: 100%;
  max-width: 400px;
`,Ol=Vt.div`
  text-align: center;
  margin-bottom: 30px;
  
  h1 {
    color: var(--corPrimaria);
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  
  p {
    color: var(--corTextoSecundaria);
    margin: 5px 0 0 0;
  }
`,Fl=Vt.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 2px solid var(--corBordaPrimaria);
`,Il=Vt.button`
  flex: 1;
  padding: 15px;
  background: none;
  border: none;
  font-size: var(--tamanhoFonteGrande);
  font-weight: bold;
  color: ${e=>e["data-active"]?"var(--corPrimaria)":"var(--corTextoSecundaria)"};
  border-bottom: 2px solid ${e=>e["data-active"]?"var(--corPrimaria)":"transparent"};
  cursor: pointer;
  transition: all var(--transicaoMedia);
  
  &:hover {
    color: var(--corPrimaria);
  }
`,Dl=Vt.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ul=Vt.div`
  position: relative;
`,$l=Vt.input`
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoMedia);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`,Bl=Vt.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
  z-index: 1;
`,Hl=Vt.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--corTextoTerciaria);
  cursor: pointer;
  z-index: 1;
  
  &:hover {
    color: var(--corPrimaria);
  }
`,Wl=Vt.button`
  width: 100%;
  padding: 15px;
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteGrande);
  font-weight: bold;
  cursor: pointer;
  transition: all var(--transicaoMedia);
  
  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraHover);
  }
  
  &:disabled {
    background: var(--corTextoTerciaria);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Vl=Vt.div`
  background: var(--corErro);
  color: white;
  padding: 10px;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  text-align: center;
`,ql=Vt.div`
  background: var(--corSucesso);
  color: white;
  padding: 10px;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  text-align: center;
`,Gl=Vt.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
`,Kl=t=>{let{onLogin:r}=t;const[n,a]=(0,e.useState)("login"),[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1),[c,u]=(0,e.useState)(""),[d,f]=(0,e.useState)(""),[p,m]=(0,e.useState)({email:"",senha:""}),[h,v]=(0,e.useState)({nome:"",email:"",senha:"",confirmarSenha:""}),g=(e,t,r)=>{"login"===e?m(e=>({...e,[t]:r})):v(e=>({...e,[t]:r})),u(""),f("")};return(0,Al.jsx)(Ll,{children:(0,Al.jsxs)(Ml,{children:[(0,Al.jsxs)(Ol,{children:[(0,Al.jsx)("h1",{children:"WRTmind"}),(0,Al.jsx)("p",{children:"Organize suas ideias e links"})]}),(0,Al.jsxs)(Fl,{children:[(0,Al.jsx)(Il,{"data-active":"login"===n,onClick:()=>a("login"),children:"Login"}),(0,Al.jsx)(Il,{"data-active":"cadastro"===n,onClick:()=>a("cadastro"),children:"Cadastro"})]}),c&&(0,Al.jsx)(Vl,{children:c}),d&&(0,Al.jsx)(ql,{children:d}),"login"===n?(0,Al.jsxs)(Dl,{onSubmit:async e=>{if(e.preventDefault(),s(!0),u(""),!p.email||!p.email.trim())return u("Email \xe9 obrigat\xf3rio"),void s(!1);if(!p.senha||!p.senha.trim())return u("Senha \xe9 obrigat\xf3ria"),void s(!1);try{console.log("Enviando login:",p);const e=await fetch(sl("/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:p.email.trim(),senha:p.senha.trim()})}),t=await e.json();if(console.log("Resposta do login:",t),e.ok){f("Login realizado com sucesso!");const e=t.usuario||t.user;e?(localStorage.setItem("user",JSON.stringify(e)),console.log("\ud83d\udd0d Dados do usu\xe1rio para onLogin:",e),r(e)):u("Dados do usu\xe1rio inv\xe1lidos na resposta")}else u(t.error||"Erro ao fazer login")}catch(c){console.error("Erro no login:",c),u("Erro de conex\xe3o. Verifique se o servidor est\xe1 rodando.")}finally{s(!1)}},children:[(0,Al.jsxs)(Ul,{children:[(0,Al.jsx)(Bl,{children:(0,Al.jsx)(oi,{icon:Fi})}),(0,Al.jsx)($l,{type:"email",placeholder:"Email",value:p.email,onChange:e=>g("login","email",e.target.value),required:!0})]}),(0,Al.jsxs)(Ul,{children:[(0,Al.jsx)(Bl,{children:(0,Al.jsx)(oi,{icon:fi})}),(0,Al.jsx)($l,{type:o?"text":"password",placeholder:"Senha",value:p.senha,onChange:e=>g("login","senha",e.target.value),required:!0}),(0,Al.jsx)(Hl,{type:"button",onClick:()=>i(!o),children:(0,Al.jsx)(oi,{icon:o?vi:Ai})})]}),(0,Al.jsxs)(Wl,{type:"submit",disabled:l,children:[l&&(0,Al.jsx)(Gl,{}),l?"Entrando...":"Entrar"]})]}):(0,Al.jsxs)(Dl,{onSubmit:async e=>{if(e.preventDefault(),s(!0),u(""),!h.nome||!h.nome.trim())return u("Nome \xe9 obrigat\xf3rio"),void s(!1);if(!h.email||!h.email.trim())return u("Email \xe9 obrigat\xf3rio"),void s(!1);if(!h.senha||!h.senha.trim())return u("Senha \xe9 obrigat\xf3ria"),void s(!1);if(h.senha!==h.confirmarSenha)return u("As senhas n\xe3o coincidem"),void s(!1);try{console.log("Enviando cadastro:",h);const e=await fetch(sl("/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:h.nome.trim(),email:h.email.trim(),senha:h.senha.trim()})}),t=await e.json();console.log("Resposta do cadastro:",t),e.ok?(f("Cadastro realizado com sucesso! Fa\xe7a login para continuar."),v({nome:"",email:"",senha:"",confirmarSenha:""}),setTimeout(()=>{a("login"),f("")},2e3)):u(t.error||"Erro ao fazer cadastro")}catch(c){console.error("Erro no cadastro:",c),u("Erro de conex\xe3o. Verifique se o servidor est\xe1 rodando.")}finally{s(!1)}},children:[(0,Al.jsxs)(Ul,{children:[(0,Al.jsx)(Bl,{children:(0,Al.jsx)(oi,{icon:gi})}),(0,Al.jsx)($l,{type:"text",placeholder:"Nome completo",value:h.nome,onChange:e=>g("cadastro","nome",e.target.value),required:!0})]}),(0,Al.jsxs)(Ul,{children:[(0,Al.jsx)(Bl,{children:(0,Al.jsx)(oi,{icon:Fi})}),(0,Al.jsx)($l,{type:"email",placeholder:"Email",value:h.email,onChange:e=>g("cadastro","email",e.target.value),required:!0})]}),(0,Al.jsxs)(Ul,{children:[(0,Al.jsx)(Bl,{children:(0,Al.jsx)(oi,{icon:fi})}),(0,Al.jsx)($l,{type:o?"text":"password",placeholder:"Senha",value:h.senha,onChange:e=>g("cadastro","senha",e.target.value),required:!0}),(0,Al.jsx)(Hl,{type:"button",onClick:()=>i(!o),children:(0,Al.jsx)(oi,{icon:o?vi:Ai})})]}),(0,Al.jsxs)(Ul,{children:[(0,Al.jsx)(Bl,{children:(0,Al.jsx)(oi,{icon:fi})}),(0,Al.jsx)($l,{type:o?"text":"password",placeholder:"Confirmar senha",value:h.confirmarSenha,onChange:e=>g("cadastro","confirmarSenha",e.target.value),required:!0})]}),(0,Al.jsxs)(Wl,{type:"submit",disabled:l,children:[l&&(0,Al.jsx)(Gl,{}),l?"Cadastrando...":"Cadastrar"]})]})]})})},Yl=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;
`,Ql=Vt.div`
  text-align: center;
  margin-bottom: var(--espacamentoExtraGrande);
`,Xl=Vt.h1`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--espacamentoMedio);
  animation: fadeIn 0.6s ease-out;
`,Jl=Vt.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteGrande);
  margin-bottom: var(--espacamentoGrande);
  animation: fadeIn 0.7s ease-out;
`,Zl=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--espacamentoGrande);
  margin-bottom: var(--espacamentoExtraGrande);
`,es=Vt.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  text-align: center;
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--sombraLeve);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-6px);
    box-shadow: var(--sombraForte);
    
    &::before {
      opacity: 1;
    }
    
    .card-icon {
      transform: scale(1.1) translateY(-5px);
      animation: iconFloat 2s ease-in-out infinite;
    }
  }
`,ts=Vt.div`
  font-size: 3rem;
  color: var(--corPrimaria);
  margin-bottom: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  
  &.card-icon {
    animation: iconGlow 3s ease-in-out infinite;
  }
`,rs=Vt.h3`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteExtraGrande);
  font-weight: 600;
  margin-bottom: var(--espacamentoMedio);
`,ns=Vt.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  line-height: 1.6;
  margin-bottom: var(--espacamentoGrande);
`,as=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`,os=Vt.div`
  text-align: center;
`,is=Vt.div`
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  color: var(--corPrimaria);
`,ls=Vt.div`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ss=Vt.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);
  
  &:hover {
    background: linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`,cs=e=>{let{notas:t,links:r,onNovoItem:n}=e;return(0,Al.jsxs)(Yl,{children:[(0,Al.jsxs)(Ql,{children:[(0,Al.jsx)(Xl,{children:"Bem-vindo ao WRTmind"}),(0,Al.jsx)(Jl,{children:"Gerencie suas notas e links de forma organizada e eficiente."})]}),(0,Al.jsxs)(Zl,{children:[(0,Al.jsxs)(es,{onClick:()=>n("nota"),children:[(0,Al.jsx)(ts,{className:"card-icon",children:(0,Al.jsx)(oi,{icon:al})}),(0,Al.jsx)(rs,{children:"Notas"}),(0,Al.jsx)(ns,{children:"Crie, edite e organize suas anota\xe7\xf5es."}),(0,Al.jsxs)(as,{children:[(0,Al.jsxs)(os,{children:[(0,Al.jsx)(is,{children:(null===t||void 0===t?void 0:t.length)||0}),(0,Al.jsx)(ls,{children:"Total de Notas"})]}),(0,Al.jsxs)(os,{children:[(0,Al.jsx)(is,{children:((null===t||void 0===t?void 0:t.filter(e=>e.favorito))||[]).length}),(0,Al.jsx)(ls,{children:"Favoritos"})]})]}),(0,Al.jsxs)(ss,{onClick:e=>{e.stopPropagation(),n("nota")},children:[(0,Al.jsx)(oi,{icon:Ki})," Adicionar Nota"]})]}),(0,Al.jsxs)(es,{onClick:()=>n("link"),children:[(0,Al.jsx)(ts,{className:"card-icon",children:(0,Al.jsx)(oi,{icon:Wi})}),(0,Al.jsx)(rs,{children:"Links"}),(0,Al.jsx)(ns,{children:"Adicione links \xfateis para facilitar o acesso."}),(0,Al.jsxs)(as,{children:[(0,Al.jsxs)(os,{children:[(0,Al.jsx)(is,{children:(null===r||void 0===r?void 0:r.length)||0}),(0,Al.jsx)(ls,{children:"Total de Links"})]}),(0,Al.jsxs)(os,{children:[(0,Al.jsx)(is,{children:((null===r||void 0===r?void 0:r.filter(e=>e.favorito))||[]).length}),(0,Al.jsx)(ls,{children:"Favoritos"})]})]}),(0,Al.jsxs)(ss,{onClick:e=>{e.stopPropagation(),n("link")},children:[(0,Al.jsx)(oi,{icon:Ki})," Adicionar Link"]})]}),(0,Al.jsxs)(es,{onClick:()=>window.dispatchEvent(new CustomEvent("navegarPara",{detail:"favoritos"})),children:[(0,Al.jsx)(ts,{className:"card-icon",children:(0,Al.jsx)(oi,{icon:Ti})}),(0,Al.jsx)(rs,{children:"Favoritos"}),(0,Al.jsx)(ns,{children:"Veja seus itens favoritos em um s\xf3 lugar."}),(0,Al.jsxs)(as,{children:[(0,Al.jsxs)(os,{children:[(0,Al.jsx)(is,{children:((null===t||void 0===t?void 0:t.filter(e=>e.favorito))||[]).length}),(0,Al.jsx)(ls,{children:"Notas Favoritas"})]}),(0,Al.jsxs)(os,{children:[(0,Al.jsx)(is,{children:((null===r||void 0===r?void 0:r.filter(e=>e.favorito))||[]).length}),(0,Al.jsx)(ls,{children:"Links Favoritos"})]})]}),(0,Al.jsxs)(ss,{onClick:e=>{e.stopPropagation(),window.dispatchEvent(new CustomEvent("navegarPara",{detail:"favoritos"}))},children:[(0,Al.jsx)(oi,{icon:Ti})," Ver Favoritos"]})]})]})]})},us=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`,ds=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
`,fs=Vt.h1`
  color: var(--corTextoPrimaria);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,ps=Vt.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`,ms=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
  flex-wrap: wrap;
`,hs=Vt.input`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  min-width: 300px;
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,vs=Vt.select`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
  }
`,gs=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--espacamentoGrande);
`,bs=Vt.div`
  background: var(--corFundoCard);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  transition: all var(--transicaoRapida);
  cursor: pointer;

  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`,ys=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--espacamentoMedio);
`,xs=Vt.h3`
  color: var(--corTextoPrimaria);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
`,ws=Vt.div`
  display: flex;
  gap: var(--espacamentoPequeno);
`,Ss=Vt.button`
  background: transparent;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--bordaRaioPequena);
  transition: all var(--transicaoRapida);

  &:hover {
    color: var(--corPrimaria);
    background: var(--corFundoSecundaria);
  }
`,ks=Vt.div`
  color: var(--corTextoSecundaria);
  line-height: 1.6;
  margin-bottom: var(--espacamentoMedio);
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`,Es=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
`,Ps=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
`,Cs=Vt.span`
  background: var(--corPrimaria);
  color: white;
  padding: 4px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`,Ts=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,js=Vt.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoGrande);
`,_s=t=>{let{notas:r,carregando:n,onNovoItem:a,onEditarItem:o,onVisualizarItem:i,onExcluirItem:l,onFavoritarItem:s}=t;const[c,u]=(0,e.useState)(""),[d,f]=(0,e.useState)("todos"),[p,m]=(0,e.useState)("dataCriacao");console.log("\ud83d\udd0d TelaNotas - notas recebidas:",r),console.log("\ud83d\udd0d TelaNotas - carregando:",n),console.log("\ud83d\udd0d TelaNotas - total de notas:",(null===r||void 0===r?void 0:r.length)||0);const h=r.filter(e=>{const t=""===c||e.titulo.toLowerCase().includes(c.toLowerCase())||e.conteudo.toLowerCase().includes(c.toLowerCase()),r="todos"===d||e.topico===d;return t&&r}).sort((e,t)=>{switch(p){case"titulo":return e.titulo.localeCompare(t.titulo);case"dataCriacao":return new Date(t.dataCriacao)-new Date(e.dataCriacao);case"dataModificacao":return new Date(t.dataModificacao||t.dataCriacao)-new Date(e.dataModificacao||e.dataCriacao);default:return 0}});console.log("\ud83d\udd0d TelaNotas - notas filtradas:",h),console.log("\ud83d\udd0d TelaNotas - total de notas filtradas:",(null===h||void 0===h?void 0:h.length)||0);const v=[...new Set(r.map(e=>e.topico).filter(Boolean))];return n?(0,Al.jsx)(us,{children:(0,Al.jsxs)(Ts,{children:[(0,Al.jsx)(js,{children:(0,Al.jsx)(oi,{icon:al})}),(0,Al.jsx)("p",{children:"Carregando suas notas..."})]})}):(0,Al.jsxs)(us,{children:[(0,Al.jsxs)(ds,{children:[(0,Al.jsxs)(fs,{children:[(0,Al.jsx)(oi,{icon:al}),"Minhas Notas"]}),(0,Al.jsxs)(ps,{onClick:a,children:[(0,Al.jsx)(oi,{icon:Ki}),"Nova Nota"]})]}),(0,Al.jsxs)(ms,{children:[(0,Al.jsx)(hs,{type:"text",placeholder:"Buscar por t\xedtulo ou conte\xfado...",value:c,onChange:e=>u(e.target.value)}),(0,Al.jsxs)(vs,{value:d,onChange:e=>f(e.target.value),children:[(0,Al.jsx)("option",{value:"todos",children:"Todos os t\xf3picos"}),v.map(e=>(0,Al.jsx)("option",{value:e,children:e},e))]}),(0,Al.jsxs)(vs,{value:p,onChange:e=>m(e.target.value),children:[(0,Al.jsx)("option",{value:"dataCriacao",children:"Data de Cria\xe7\xe3o"}),(0,Al.jsx)("option",{value:"dataModificacao",children:"Data de Modifica\xe7\xe3o"}),(0,Al.jsx)("option",{value:"titulo",children:"T\xedtulo"})]})]}),0===h.length?(0,Al.jsxs)(Ts,{children:[(0,Al.jsx)(js,{children:(0,Al.jsx)(oi,{icon:al})}),(0,Al.jsx)("p",{children:c||"todos"!==d?"Nenhuma nota encontrada":"Voc\xea ainda n\xe3o tem notas"}),!c&&"todos"===d&&(0,Al.jsxs)(ps,{onClick:a,children:[(0,Al.jsx)(oi,{icon:Ki}),"Criar Primeira Nota"]})]}):(0,Al.jsx)(gs,{children:h.map(e=>{return(0,Al.jsxs)(bs,{onClick:()=>i(e),children:[(0,Al.jsxs)(ys,{children:[(0,Al.jsx)(xs,{children:e.titulo}),(0,Al.jsxs)(ws,{onClick:e=>e.stopPropagation(),children:[e.favorito&&(0,Al.jsx)(Ss,{onClick:()=>s(e.id),children:(0,Al.jsx)(oi,{icon:Ti,style:{color:"#e74c3c"}})}),(0,Al.jsx)(Ss,{onClick:()=>o(e),children:(0,Al.jsx)(oi,{icon:mi})}),(0,Al.jsx)(Ss,{onClick:()=>l(e.id),children:(0,Al.jsx)(oi,{icon:zi})})]})]}),(0,Al.jsxs)(ks,{children:[e.conteudo.replace(/<[^>]*>/g,"").substring(0,150),"..."]}),(0,Al.jsxs)(Es,{children:[(0,Al.jsxs)(Ps,{children:[e.topico&&(0,Al.jsx)(Cs,{children:e.topico}),(0,Al.jsx)("span",{children:(t=e.dataCriacao,new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}))})]}),(0,Al.jsx)(Ss,{onClick:e=>e.stopPropagation(),children:(0,Al.jsx)(oi,{icon:Ai})})]})]},e.id);var t})})]})},As=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`,Rs=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
`,Ns=Vt.h1`
  color: var(--corTextoPrimaria);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,zs=Vt.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`,Ls=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
  flex-wrap: wrap;
`,Ms=Vt.input`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  min-width: 300px;
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Os=Vt.select`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
  }
`,Fs=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--espacamentoMedio);
`,Is=Vt.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--sombraLeve);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-4px);
    box-shadow: var(--sombraForte);
    
    &::before {
      opacity: 1;
    }
  }
`,Ds=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoMedio);
`,Us=Vt.h3`
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  color: var(--corTextoPrimaria);
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$s=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  opacity: 0;
  transition: opacity var(--transicaoRapida);
  
  ${Is}:hover & {
    opacity: 1;
  }
`,Bs=Vt.button`
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  &:hover {
    background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }
`,Hs=Vt.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: var(--bordaRaioMedia);
    padding: 4px;
  }
  
  .placeholder {
    color: var(--corTextoTerciaria);
    font-size: 1.5rem;
  }
`,Ws=Vt.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  line-height: 1.4;
  margin-bottom: var(--espacamentoMedio);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 2.8em;
`,Vs=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`,qs=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  flex: 1;
`,Gs=Vt.span`
  background: var(--corFundoTerciaria);
  padding: 2px 6px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`,Ks=Vt.button`
  background: ${e=>e.favorito?"linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)":"linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%)"};
  color: ${e=>e.favorito?"white":"var(--corTextoSecundaria)"};
  border: 1px solid ${e=>e.favorito?"#ff6b6b":"var(--corBordaPrimaria)"};
  border-radius: var(--bordaRaioMedia);
  padding: 4px;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  &:hover {
    background: ${e=>e.favorito?"linear-gradient(135deg, #ee5a52 0%, #ff6b6b 100%)":"linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)"};
    color: white;
    border-color: ${e=>e.favorito?"#ee5a52":"var(--corPrimaria)"};
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }
`,Ys=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,Qs=Vt.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoGrande);
`,Xs=t=>{let{links:r,carregando:n,onNovoItem:a,onEditarItem:o,onVisualizarItem:i,onExcluirItem:l,onFavoritarItem:s}=t;const[c,u]=(0,e.useState)(""),[d,f]=(0,e.useState)("todos"),[p,m]=(0,e.useState)("dataCriacao"),h=r.filter(e=>{const t=""===c||e.nome.toLowerCase().includes(c.toLowerCase())||e.descricao.toLowerCase().includes(c.toLowerCase())||e.url.toLowerCase().includes(c.toLowerCase()),r="todos"===d||e.categoria===d;return t&&r}).sort((e,t)=>{switch(p){case"nome":return e.nome.localeCompare(t.nome);case"dataCriacao":return new Date(t.createdAt)-new Date(e.createdAt);case"dataModificacao":return new Date(t.updatedAt)-new Date(e.updatedAt);default:return 0}}),v=[...new Set(r.map(e=>e.categoria).filter(Boolean))];return n?(0,Al.jsx)(As,{children:(0,Al.jsxs)(Ys,{children:[(0,Al.jsx)(Qs,{children:(0,Al.jsx)(oi,{icon:Wi})}),(0,Al.jsx)("p",{children:"Carregando seus links..."})]})}):(0,Al.jsxs)(As,{children:[(0,Al.jsxs)(Rs,{children:[(0,Al.jsxs)(Ns,{children:[(0,Al.jsx)(oi,{icon:Wi}),"Meus Links"]}),(0,Al.jsxs)(zs,{onClick:a,children:[(0,Al.jsx)(oi,{icon:Ki}),"Novo Link"]})]}),(0,Al.jsxs)(Ls,{children:[(0,Al.jsx)(Ms,{type:"text",placeholder:"Buscar por nome, descri\xe7\xe3o ou URL...",value:c,onChange:e=>u(e.target.value)}),(0,Al.jsxs)(Os,{value:d,onChange:e=>f(e.target.value),children:[(0,Al.jsx)("option",{value:"todos",children:"Todas as categorias"}),v.map(e=>(0,Al.jsx)("option",{value:e,children:e},e))]}),(0,Al.jsxs)(Os,{value:p,onChange:e=>m(e.target.value),children:[(0,Al.jsx)("option",{value:"dataCriacao",children:"Data de Cria\xe7\xe3o"}),(0,Al.jsx)("option",{value:"dataModificacao",children:"Data de Modifica\xe7\xe3o"}),(0,Al.jsx)("option",{value:"nome",children:"Nome"})]})]}),0===h.length?(0,Al.jsxs)(Ys,{children:[(0,Al.jsx)(Qs,{children:(0,Al.jsx)(oi,{icon:Wi})}),(0,Al.jsx)("p",{children:c||"todos"!==d?"Nenhum link encontrado":"Voc\xea ainda n\xe3o tem links"}),!c&&"todos"===d&&(0,Al.jsxs)(zs,{onClick:a,children:[(0,Al.jsx)(oi,{icon:Ki}),"Criar Primeiro Link"]})]}):(0,Al.jsx)(Fs,{children:h.map(e=>{return(0,Al.jsxs)(Is,{children:[(0,Al.jsxs)(Ds,{children:[(0,Al.jsx)(Us,{children:e.nome}),(0,Al.jsxs)($s,{children:[(0,Al.jsx)(Ks,{favorito:e.favorito,onClick:()=>s(e.id),children:(0,Al.jsx)(oi,{icon:Ti})}),(0,Al.jsx)(Bs,{onClick:()=>o(e),children:(0,Al.jsx)(oi,{icon:mi})}),(0,Al.jsx)(Bs,{onClick:()=>l(e.id),children:(0,Al.jsx)(oi,{icon:zi})})]})]}),e.imagemUrl?(0,Al.jsx)(Hs,{children:(0,Al.jsx)("img",{src:e.imagemUrl,alt:e.nome})}):(0,Al.jsx)(Hs,{children:(0,Al.jsx)("div",{className:"placeholder",children:(0,Al.jsx)(oi,{icon:Wi})})}),(0,Al.jsx)(Ws,{children:e.descricao}),(0,Al.jsxs)(Vs,{children:[(0,Al.jsxs)(qs,{children:[e.categoria&&(0,Al.jsx)("span",{children:e.categoria}),(0,Al.jsx)(Gs,{children:(t=e.createdAt,new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}))})]}),(0,Al.jsx)(Bs,{onClick:()=>{return t=e.url,void window.open(t,"_blank");var t},children:(0,Al.jsx)(oi,{icon:Mi})})]})]},e.id);var t})})]})},Js=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"completo";if(!e)return"";const r=new Date(e);if(isNaN(r.getTime()))return"";const n=new Date-r,a=Math.floor(n/864e5);switch(t){case"curto":return r.toLocaleDateString("pt-BR");case"medio":return r.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});case"relativo":if(0===a){const e=Math.floor(n/36e5);if(0===e){const e=Math.floor(n/6e4);return 0===e?"Agora mesmo":`${e} min atr\xe1s`}return`${e}h atr\xe1s`}if(1===a)return"Ontem";if(a<7)return`${a} dias atr\xe1s`;if(a<30){const e=Math.floor(a/7);return`${e} ${1===e?"semana":"semanas"} atr\xe1s`}if(a<365){const e=Math.floor(a/30);return`${e} ${1===e?"m\xeas":"meses"} atr\xe1s`}{const e=Math.floor(a/365);return`${e} ${1===e?"ano":"anos"} atr\xe1s`}default:return r.toLocaleDateString("pt-BR",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}},Zs=Vt.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  box-shadow: var(--sombraLeve);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-4px);
    box-shadow: var(--sombraForte);
    
    &::before {
      opacity: 1;
    }
  }
`,ec=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoMedio);
`,tc=Vt.h3`
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
  color: var(--corTextoPrimaria);
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,rc=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  opacity: 0;
  transition: opacity var(--transicaoRapida);
  
  ${Zs}:hover & {
    opacity: 1;
  }
`,nc=Vt.button`
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 6px;
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  
  &:hover {
    background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }
`,ac=Vt.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  line-height: 1.6;
  margin-bottom: var(--espacamentoMedio);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`,oc=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`,ic=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`,lc=Vt.span`
  background: var(--corFundoTerciaria);
  padding: 4px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`,sc=Vt.button`
  background: ${e=>e.favorito?"linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)":"linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%)"};
  color: ${e=>e.favorito?"white":"var(--corTextoSecundaria)"};
  border: 1px solid ${e=>e.favorito?"#ff6b6b":"var(--corBordaPrimaria)"};
  border-radius: var(--bordaRaioMedia);
  padding: 6px;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  
  &:hover {
    background: ${e=>e.favorito?"linear-gradient(135deg, #ee5a52 0%, #ff6b6b 100%)":"linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)"};
    color: white;
    border-color: ${e=>e.favorito?"#ee5a52":"var(--corPrimaria)"};
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }
`,cc=Vt.span`
  background: var(--corPrimaria);
  color: white;
  padding: 2px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`,uc=t=>{let{item:r,tipo:n,onEditar:a,onExcluir:o,onVisualizar:i,onCopiar:l,onExportar:s,onImprimir:c,onTelaCheia:u,onFavoritar:d}=t;const[f,p]=(0,e.useState)(!1);return(0,Al.jsxs)(Zs,{onClick:e=>{e.stopPropagation(),"link"===n?window.open(r.url,"_blank"):i(r)},children:[(0,Al.jsxs)(ec,{children:[(0,Al.jsx)(tc,{children:"nota"===n?r.titulo:r.nome}),(0,Al.jsxs)(rc,{children:["nota"===n&&d&&(0,Al.jsx)(sc,{onClick:e=>{e.stopPropagation(),d(r.id)},favorito:r.favorito,children:(0,Al.jsx)(oi,{icon:bi})}),(0,Al.jsx)(nc,{onClick:e=>{e.stopPropagation(),a(r)},title:"Editar",children:(0,Al.jsx)(oi,{icon:mi})}),(0,Al.jsx)(nc,{onClick:e=>{e.stopPropagation(),window.confirm("Tem certeza que deseja excluir este item?")&&o(r.id)},title:"Excluir",children:(0,Al.jsx)(oi,{icon:zi})}),"link"===n&&(0,Al.jsx)(nc,{onClick:e=>{e.stopPropagation(),window.open(r.url,"_blank")},title:"Abrir link",children:(0,Al.jsx)(oi,{icon:Mi})}),"nota"===n&&(0,Al.jsxs)(Al.Fragment,{children:[(0,Al.jsx)(nc,{onClick:e=>{e.stopPropagation(),l(r)},title:"Copiar",children:(0,Al.jsx)(oi,{icon:Gi})}),(0,Al.jsx)(nc,{onClick:e=>{e.stopPropagation(),u(r)},title:"Tela cheia",children:(0,Al.jsx)(oi,{icon:Yi})}),s&&(0,Al.jsx)(nc,{onClick:e=>{e.stopPropagation(),s(r)},title:"Exportar",children:(0,Al.jsx)(oi,{icon:Zi})}),c&&(0,Al.jsx)(nc,{onClick:e=>{e.stopPropagation(),c(r)},title:"Imprimir",children:(0,Al.jsx)(oi,{icon:ol})})]})]})]}),(0,Al.jsx)(ac,{children:(()=>{var e;return"nota"===n?(null===(e=r.conteudo)||void 0===e?void 0:e.length)>150?`${r.conteudo.substring(0,150)}...`:r.conteudo:"link"===n?r.url:""})()}),(0,Al.jsxs)(oc,{children:[(0,Al.jsxs)(ic,{children:["nota"===n&&r.topico&&(0,Al.jsx)(cc,{children:r.topico}),"link"===n&&r.categoria&&(0,Al.jsx)(cc,{children:r.categoria}),(0,Al.jsx)(lc,{children:Js(r.dataCriacao||r.dataModificacao)})]}),(0,Al.jsx)("div",{children:"nota"===n&&r.favorito&&(0,Al.jsx)(oi,{icon:bi,style:{color:"#FFD700"}})})]})]})},dc=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoExtraGrande);
  min-height: 400px;
  text-align: center;
`,fc=Vt.div`
  font-size: 2rem;
  color: var(--corPrimaria);
  margin-bottom: var(--espacamentoGrande);
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,pc=Vt.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  margin: 0;
`,mc=Vt.p`
  color: var(--corTextoTerciaria);
  font-size: var(--tamanhoFontePequena);
  margin: var(--espacamentoPequeno) 0 0 0;
`,hc=e=>{let{mensagem:t="Carregando notas...",subMensagem:r="Aguarde um momento"}=e;return(0,Al.jsxs)(dc,{children:[(0,Al.jsx)(fc,{children:(0,Al.jsx)(oi,{icon:Ji})}),(0,Al.jsx)(pc,{children:t}),(0,Al.jsx)(mc,{children:r})]})},vc=Vt.div`
  padding: ${e=>"nota"===e.tipo?"var(--espacamentoMedio)":"var(--espacamentoGrande)"};
  min-height: 100vh;
`,gc=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${e=>"nota"===e.tipo?"var(--espacamentoMedio)":"var(--espacamentoGrande)"};
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
`,bc=Vt.h1`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin: 0;
`,yc=Vt.span`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
`,xc=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
`,wc=Vt.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Sc=(Vt(wc)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`,Vt.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`),kc=Vt.input`
  width: 100%;
  padding: var(--espacamentoMedio) var(--espacamentoMedio) var(--espacamentoMedio) 40px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoMedia);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`,Ec=Vt.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
`,Pc=Vt.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  align-items: center;
`,Cc=Vt.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }

  &.ativo {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
  }
`,Tc=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--espacamentoMedio);
`,jc=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,_c=Vt.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoMedio);
`,Ac=t=>{let{itens:r,tipo:n,titulo:a,icone:o,carregando:i,onNovo:l,onEditar:s,onExcluir:c,onVisualizar:u,onCopiar:d,onExportar:f,onImprimir:p,onTelaCheia:m,onFavoritar:h,modoOrdenacao:v="automatico"}=t;const[g,b]=(0,e.useState)(""),[y,x]=(0,e.useState)("todos"),w=(null===r||void 0===r?void 0:r.filter(e=>{if(g){const i=g.toLowerCase();var t,r,a,o;if("nota"===n)return(null===(t=e.titulo)||void 0===t?void 0:t.toLowerCase().includes(i))||(null===(r=e.conteudo)||void 0===r?void 0:r.toLowerCase().includes(i));if("link"===n)return(null===(a=e.nome)||void 0===a?void 0:a.toLowerCase().includes(i))||(null===(o=e.url)||void 0===o?void 0:o.toLowerCase().includes(i))}return!0}))||[];if(i)return(0,Al.jsx)(vc,{tipo:n,children:(0,Al.jsx)(hc,{mensagem:`Carregando ${"nota"===n?"notas":"links"}...`,subMensagem:"Conectando com o servidor"})});const S=async e=>{const t="nota"===n?`${e.titulo}\n${e.conteudo}`:`${e.nome}\n${e.url}`;await(async e=>{try{return await navigator.clipboard.writeText(e),!0}catch(t){return console.error("Erro ao copiar para clipboard:",t),!1}})(t)&&d&&d("Conte\xfado copiado para a \xe1rea de transfer\xeancia!")};return"link"===n?(0,Al.jsxs)(vc,{tipo:n,children:[(0,Al.jsxs)(gc,{tipo:n,children:[(0,Al.jsxs)(bc,{children:[(0,Al.jsx)(oi,{icon:o}),a,(0,Al.jsx)(yc,{children:r.length})]}),(0,Al.jsxs)(xc,{children:[(0,Al.jsxs)(Sc,{children:[(0,Al.jsx)(Ec,{children:(0,Al.jsx)(oi,{icon:qi})}),(0,Al.jsx)(kc,{type:"text",placeholder:"Buscar links...",value:g,onChange:e=>b(e.target.value)})]}),(0,Al.jsxs)(wc,{onClick:l,children:[(0,Al.jsx)(oi,{icon:Ki}),"Novo Link"]})]})]}),0===w.length?(0,Al.jsxs)(jc,{children:[(0,Al.jsx)(_c,{children:(0,Al.jsx)(oi,{icon:o})}),(0,Al.jsx)("h3",{children:"Nenhum link encontrado"}),(0,Al.jsx)("p",{children:'Clique em "Novo Link" para come\xe7ar a adicionar seus links favoritos.'})]}):(0,Al.jsx)(Tc,{children:w.map(e=>(0,Al.jsx)(uc,{item:e,tipo:"link",onEditar:()=>s(e),onExcluir:()=>c(e.id),onVisualizar:()=>(e=>{e.url&&window.open(e.url,"_blank")})(e),onCopiar:()=>S(e),onTelaCheia:()=>m(e)},e.id))})]}):(0,Al.jsxs)(vc,{tipo:n,children:[(0,Al.jsxs)(gc,{tipo:n,children:[(0,Al.jsxs)(bc,{children:[(0,Al.jsx)(oi,{icon:o}),a,(0,Al.jsx)(yc,{children:r.length})]}),(0,Al.jsxs)(xc,{children:[(0,Al.jsxs)(Sc,{children:[(0,Al.jsx)(Ec,{children:(0,Al.jsx)(oi,{icon:qi})}),(0,Al.jsx)(kc,{type:"text",placeholder:"Buscar notas...",value:g,onChange:e=>b(e.target.value)})]}),(0,Al.jsxs)(Pc,{children:[(0,Al.jsx)(Cc,{className:"todos"===y?"ativo":"",onClick:()=>x("todos"),children:"Todos"}),(0,Al.jsxs)(Cc,{className:"favoritos"===y?"ativo":"",onClick:()=>x("favoritos"),children:[(0,Al.jsx)(oi,{icon:Ti}),"Favoritos"]})]}),(0,Al.jsxs)(wc,{onClick:l,children:[(0,Al.jsx)(oi,{icon:Ki}),"Nova Nota"]})]})]}),0===w.length?(0,Al.jsxs)(jc,{children:[(0,Al.jsx)(_c,{children:(0,Al.jsx)(oi,{icon:o})}),(0,Al.jsx)("h3",{children:"Nenhuma nota encontrada"}),(0,Al.jsx)("p",{children:'Clique em "Nova Nota" para come\xe7ar a criar suas anota\xe7\xf5es.'})]}):(0,Al.jsx)(Tc,{children:w.map(e=>(0,Al.jsx)(uc,{item:e,tipo:"nota",onEditar:()=>s(e),onExcluir:()=>c(e.id),onVisualizar:()=>u(e),onCopiar:()=>S(e),onExportar:()=>f(e),onImprimir:()=>p(e),onTelaCheia:()=>m(e),onFavoritar:()=>(async e=>{if(h)try{await h(e)}catch(t){console.error("Erro ao favoritar item:",t)}})(e.id)},e.id))})]})},Rc=Vt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--espacamentoMedio);
`,Nc=Vt.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,zc=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`,Lc=Vt.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
`,Mc=Vt.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--bordaRaioPequena);

  &:hover {
    background: var(--corFundoHover);
    color: var(--corTextoPrimaria);
  }
`,Oc=Vt.div`
  padding: var(--espacamentoGrande);
`,Fc=Vt.div`
  margin-bottom: var(--espacamentoMedio);
`,Ic=Vt.label`
  display: block;
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoPequeno);
  font-weight: 500;
`,Dc=Vt.input`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoMedia);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Uc=Vt.textarea`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  font-family: inherit;
  resize: vertical;
  min-height: 200px;
  transition: all var(--transicaoMedia);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,$c=Vt.select`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  cursor: pointer;
  transition: all var(--transicaoMedia);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Bc=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-top: 1px solid var(--corBordaPrimaria);
  gap: var(--espacamentoMedio);
`,Hc=Vt.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Wc=Vt(Hc)`
  background: var(--corPrimaria);
  color: white;

  &:hover:not(:disabled) {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`,Vc=Vt(Hc)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover:not(:disabled) {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`,qc=Vt(Hc)`
  background: var(--corErro);
  color: white;

  &:hover:not(:disabled) {
    background: var(--corErroHover);
    transform: translateY(-1px);
  }
`,Gc=Vt(Hc)`
  background: ${e=>e.favorito?"#FF6B6B":"var(--corFundoSecundaria)"};
  color: ${e=>e.favorito?"white":"var(--corTextoPrimaria)"};
  border: 2px solid ${e=>e.favorito?"#FF6B6B":"var(--corBordaPrimaria)"};

  &:hover:not(:disabled) {
    background: ${e=>e.favorito?"#FF5252":"var(--corFundoTerciaria)"};
    border-color: ${e=>e.favorito?"#FF5252":"var(--corPrimaria)"};
  }
`,Kc=t=>{let{isVisible:r,item:n,modo:a,categorias:o=[],onSave:i,onDelete:l,onClose:s,carregando:c=!1}=t;const[u,d]=(0,e.useState)({titulo:"",conteudo:"",topico:"",categoria:""});(0,e.useEffect)(()=>{d(n?{titulo:n.titulo||n.nome||"",conteudo:n.conteudo||"",topico:n.topico||"",categoria:n.categoria||""}:{titulo:"",conteudo:"",topico:"",categoria:""})},[n]);const f=e=>{const{name:t,value:r}=e.target;d(e=>({...e,[t]:r}))};return r?(0,Al.jsx)(Rc,{onClick:s,children:(0,Al.jsxs)(Nc,{onClick:e=>e.stopPropagation(),children:[(0,Al.jsxs)(zc,{children:[(0,Al.jsx)(Lc,{children:(()=>{switch(a){case"novo":return"Novo Item";case"editar":return"Editar Item";case"visualizar":return"Visualizar Item";default:return"Item"}})()}),(0,Al.jsx)(Mc,{onClick:s,children:(0,Al.jsx)(oi,{icon:Xi})})]}),(0,Al.jsxs)("form",{onSubmit:e=>{e.preventDefault(),i&&i(null===n||void 0===n?void 0:n.id,u)},children:[(0,Al.jsxs)(Oc,{children:[(0,Al.jsxs)(Fc,{children:[(0,Al.jsx)(Ic,{htmlFor:"titulo",children:"T\xedtulo"}),(0,Al.jsx)(Dc,{id:"titulo",name:"titulo",type:"text",value:u.titulo,onChange:f,placeholder:"Digite o t\xedtulo...",disabled:"visualizar"===a,required:!0})]}),(0,Al.jsxs)(Fc,{children:[(0,Al.jsx)(Ic,{htmlFor:"conteudo",children:"Conte\xfado"}),(0,Al.jsx)(Uc,{id:"conteudo",name:"conteudo",value:u.conteudo,onChange:f,placeholder:"Digite o conte\xfado...",disabled:"visualizar"===a})]}),(0,Al.jsxs)(Fc,{children:[(0,Al.jsx)(Ic,{htmlFor:"topico",children:"T\xf3pico"}),(0,Al.jsx)(Dc,{id:"topico",name:"topico",type:"text",value:u.topico,onChange:f,placeholder:"Digite o t\xf3pico...",disabled:"visualizar"===a})]}),o.length>0&&(0,Al.jsxs)(Fc,{children:[(0,Al.jsx)(Ic,{htmlFor:"categoria",children:"Categoria"}),(0,Al.jsxs)($c,{id:"categoria",name:"categoria",value:u.categoria,onChange:f,disabled:"visualizar"===a,children:[(0,Al.jsx)("option",{value:"",children:"Selecione uma categoria"}),o.map(e=>(0,Al.jsx)("option",{value:e.nome,children:e.nome},e.id))]})]})]}),(0,Al.jsxs)(Bc,{children:[(0,Al.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoMedio)"},children:["visualizar"!==a&&(0,Al.jsxs)(Wc,{type:"submit",disabled:c,children:[(0,Al.jsx)(oi,{icon:Ni}),null!==n&&void 0!==n&&n.id?"Atualizar":"Salvar"]}),"visualizar"===a&&(null===n||void 0===n?void 0:n.id)&&(0,Al.jsxs)(Gc,{favorito:n.favorito,onClick:()=>{console.log("Toggle favorito:",n.id)},children:[(0,Al.jsx)(oi,{icon:n.favorito?Ti:bi}),n.favorito?"Favorito":"Favoritar"]})]}),(0,Al.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoMedio)"},children:["visualizar"!==a&&(null===n||void 0===n?void 0:n.id)&&(0,Al.jsxs)(qc,{onClick:()=>{window.confirm("Tem certeza que deseja excluir este item?")&&l(null===n||void 0===n?void 0:n.id)},disabled:c,children:[(0,Al.jsx)(oi,{icon:zi}),"Excluir"]}),(0,Al.jsx)(Vc,{onClick:s,disabled:c,children:"Cancelar"})]})]})]})]})}):null},Yc=Vt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--corFundoModal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--zIndexModal);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-out;
`,Qc=Vt.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--sombraForte);
  border: 2px solid var(--corBordaPrimaria);
  position: relative;
  animation: scaleIn 0.3s ease-out;
`,Xc=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoGrande);
  padding-bottom: var(--espacamentoMedio);
  border-bottom: 2px solid var(--corBordaPrimaria);
`,Jc=Vt.h2`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  margin: 0;
`,Zc=Vt.button`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, #d32f2f 0%, var(--corErro) 100%);
    transform: scale(1.1);
    box-shadow: var(--sombraMedia);
  }
`,eu=Vt.form`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoMedio);
`,tu=Vt.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoPequeno);
`,ru=Vt.label`
  color: var(--corTextoPrimaria);
  font-weight: 600;
  font-size: var(--tamanhoFonteMedia);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`,nu=Vt.input`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoRapida);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`,au=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-top: var(--espacamentoGrande);
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`,ou=Vt.button`
  background: linear-gradient(135deg, var(--corSucesso) 0%, #45a049 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);
  flex: 1;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #45a049 0%, var(--corSucesso) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,iu=Vt.button`
  background: linear-gradient(135deg, var(--corTextoSecundaria) 0%, var(--corTextoTerciaria) 100%);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corTextoTerciaria) 0%, var(--corTextoSecundaria) 100%);
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`,lu=(Vt.button`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, #d32f2f 0%, var(--corErro) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`,Vt.div`
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  color: var(--corErro);
  padding: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corErro);
  font-size: var(--tamanhoFonteMedia);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`,Vt.div`
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  color: var(--corSucesso);
  padding: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corSucesso);
  font-size: var(--tamanhoFonteMedia);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`,t=>{let{isVisible:r,link:n,modo:a="editar",categorias:o=[],onSave:i,onDelete:l,onClose:s,carregando:c=!1}=t;const[u,d]=(0,e.useState)({nome:"",url:"",imagemUrl:""});(0,e.useEffect)(()=>{d(n?{nome:n.nome||"",url:n.url||"",imagemUrl:n.imagemUrl||""}:{nome:"",url:"",imagemUrl:""})},[n]);const f=(e,t)=>{d(r=>({...r,[e]:t}))};return r?(0,Al.jsx)(Yc,{onClick:s,children:(0,Al.jsxs)(Qc,{onClick:e=>e.stopPropagation(),children:[(0,Al.jsxs)(Xc,{children:[(0,Al.jsx)(Jc,{children:n?"visualizar"===a?"Visualizar Link":"Editar Link":"Novo Link"}),(0,Al.jsx)(Zc,{onClick:s,title:"Fechar",children:(0,Al.jsx)(oi,{icon:Xi})})]}),(0,Al.jsxs)(eu,{children:[(0,Al.jsxs)(tu,{children:[(0,Al.jsx)(ru,{htmlFor:"nome",children:"Nome *"}),(0,Al.jsx)(nu,{id:"nome",type:"text",placeholder:"Digite o nome do link...",value:u.nome,onChange:e=>f("nome",e.target.value),disabled:"visualizar"===a})]}),(0,Al.jsxs)(tu,{children:[(0,Al.jsx)(ru,{htmlFor:"url",children:"URL *"}),(0,Al.jsx)(nu,{id:"url",type:"url",placeholder:"https://exemplo.com",value:u.url,onChange:e=>f("url",e.target.value),disabled:"visualizar"===a})]}),(0,Al.jsxs)(tu,{children:[(0,Al.jsx)(ru,{htmlFor:"imagemUrl",children:"URL da Imagem"}),(0,Al.jsx)(nu,{id:"imagemUrl",type:"url",placeholder:"https://exemplo.com/imagem.jpg",value:u.imagemUrl||"",onChange:e=>f("imagemUrl",e.target.value),disabled:"visualizar"===a}),(0,Al.jsx)("small",{style:{color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFontePequena)"},children:"URL opcional para uma imagem de preview do link"})]}),"editar"===a&&(0,Al.jsxs)(au,{children:[(0,Al.jsxs)(ou,{onClick:()=>{if(u.nome&&u.url){try{new URL(u.url)}catch{return void alert("URL inv\xe1lida. Digite uma URL v\xe1lida (ex: https://exemplo.com)")}if(u.imagemUrl)try{new URL(u.imagemUrl)}catch{return void alert("URL da imagem inv\xe1lida. Digite uma URL v\xe1lida ou deixe em branco.")}i(u)}else alert("Nome e URL s\xe3o obrigat\xf3rios")},disabled:c,children:[(0,Al.jsx)(oi,{icon:Ni}),c?"Salvando...":"Salvar"]}),(0,Al.jsx)(iu,{onClick:s,disabled:c,children:"Fechar"})]})]})]})}):null}),su=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;
`,cu=Vt.div`
  text-align: center;
  margin-bottom: var(--espacamentoExtraGrande);
`,uu=Vt.h1`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--espacamentoMedio);
  animation: fadeIn 0.6s ease-out;
`,du=Vt.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteGrande);
  animation: fadeIn 0.7s ease-out;
`,fu=Vt.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraMedia);
  border: 2px solid var(--corBordaPrimaria);
  overflow: hidden;
`,pu=Vt.div`
  display: flex;
  background: linear-gradient(90deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border-bottom: 2px solid var(--corBordaPrimaria);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,mu=Vt.button`
  background: ${e=>e.active?"linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)":"transparent"};
  color: ${e=>e.active?"white":"var(--corTextoPrimaria)"};
  border: none;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  font-weight: ${e=>e.active?"600":"500"};
  font-size: var(--tamanhoFonteMedia);
  white-space: nowrap;
  position: relative;
  min-width: 140px;
  justify-content: center;
  
  &:hover {
    background: ${e=>e.active?"linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%)":"var(--corFundoHover)"};
    transform: ${e=>e.active?"translateY(-1px)":"none"};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: ${e=>e.active?1:0};
    transition: opacity var(--transicaoRapida);
  }
`,hu=Vt.div`
  padding: var(--espacamentoGrande);
  min-height: 500px;
  animation: fadeIn 0.3s ease-out;
`,vu=(Vt.div`
  display: ${e=>e.active?"block":"none"};
`,Vt.div`
  background: linear-gradient(135deg, var(--corFundoSecundaria) 0%, var(--corFundoCard) 100%);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  margin-bottom: var(--espacamentoGrande);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
  transition: all var(--transicaoRapida);
  
  &:hover {
    box-shadow: var(--sombraMedia);
    transform: translateY(-2px);
  }
`),gu=Vt.h2`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--espacamentoMedio);
  font-size: var(--tamanhoFonteExtraGrande);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,bu=Vt.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  border: none;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,yu=Vt(bu)`
  background: linear-gradient(135deg, var(--corTextoSecundaria) 0%, var(--corTextoTerciaria) 100%);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  
  &:hover {
    background: linear-gradient(135deg, var(--corTextoTerciaria) 0%, var(--corTextoSecundaria) 100%);
    border-color: var(--corPrimaria);
  }
`,xu=(Vt(bu)`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  
  &:hover {
    background: linear-gradient(135deg, #d32f2f 0%, var(--corErro) 100%);
  }
`,Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoMedio);
  background: linear-gradient(135deg, var(--corFundoPrimaria) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoMedio);
  border: 1px solid var(--corBordaPrimaria);
  transition: all var(--transicaoRapida);
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateX(4px);
  }
`),wu=Vt.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoPequeno);
`,Su=Vt.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`,ku=Vt.span`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
`,Eu=Vt.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>"online"===e.status?"var(--corSucesso)":"syncing"===e.status?"var(--corAviso)":"var(--corErro)"};
  box-shadow: 0 0 8px ${e=>"online"===e.status?"rgba(76, 175, 80, 0.4)":"syncing"===e.status?"rgba(255, 152, 0, 0.4)":"rgba(244, 67, 54, 0.4)"};
  animation: ${e=>"syncing"===e.status?"pulse 2s infinite":"none"};
`,Pu=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
`,Cu=Vt.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  text-align: center;
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--sombraLeve);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-4px);
    box-shadow: var(--sombraForte);
    
    &::before {
      opacity: 1;
    }
  }
`,Tu=Vt.div`
  font-size: 2.5rem;
  color: var(--corPrimaria);
  margin-bottom: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  
  ${Cu}:hover & {
    transform: scale(1.1);
  }
`,ju=Vt.h3`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
  margin-bottom: var(--espacamentoMedio);
`,_u=Vt.div`
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  color: var(--corPrimaria);
  margin-bottom: var(--espacamentoPequeno);
`,Au=Vt.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ru=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--espacamentoMedio);
`,Nu=Vt.div`
  background: linear-gradient(135deg, var(--corFundoSecundaria) 0%, var(--corFundoCard) 100%);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  transition: all var(--transicaoRapida);
  cursor: pointer;
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`,zu=Vt.div`
  color: var(--corTextoPrimaria);
  font-weight: 600;
  margin-bottom: var(--espacamentoPequeno);
`,Lu=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`,Mu=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,Ou=Vt.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoGrande);
  opacity: 0.5;
`,Fu=Vt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--corFundoModal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--zIndexModal);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-out;
`,Iu=Vt.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  width: 90%;
  max-width: 500px;
  box-shadow: var(--sombraForte);
  border: 2px solid var(--corBordaPrimaria);
  animation: scaleIn 0.3s ease-out;
`,Du=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoGrande);
  padding-bottom: var(--espacamentoMedio);
  border-bottom: 2px solid var(--corBordaPrimaria);
`,Uu=Vt.h2`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  margin: 0;
`,$u=Vt.button`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, #d32f2f 0%, var(--corErro) 100%);
    transform: scale(1.1);
    box-shadow: var(--sombraMedia);
  }
`,Bu=Vt.form`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoMedio);
`,Hu=Vt.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoPequeno);
`,Wu=Vt.label`
  color: var(--corTextoPrimaria);
  font-weight: 600;
  font-size: var(--tamanhoFonteMedia);
`,Vu=Vt.input`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoRapida);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,qu=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-top: var(--espacamentoGrande);
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`,Gu=Vt.button`
  background: linear-gradient(135deg, var(--corSucesso) 0%, #45a049 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);
  flex: 1;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #45a049 0%, var(--corSucesso) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Ku=Vt.button`
  background: linear-gradient(135deg, var(--corTextoSecundaria) 0%, var(--corTextoTerciaria) 100%);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corTextoTerciaria) 0%, var(--corTextoSecundaria) 100%);
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`,Yu=t=>{let{onAbrirLogs:r,onAbrirAdmin:n,syncStatus:a,lastSync:o,onSincronizar:i}=t;const[l,s]=(0,e.useState)([]),[c,u]=(0,e.useState)(!1),[d,f]=(0,e.useState)(!1),[p,m]=(0,e.useState)(null),[h,v]=(0,e.useState)({nome:"",cor:"#667eea"}),[g,b]=(0,e.useState)("categorias");(0,e.useEffect)(()=>{y()},[]);const y=async()=>{u(!0);try{const e=await Cl();e.success&&s(e.data||[])}catch(e){console.error("Erro ao carregar categorias:",e)}finally{u(!1)}},x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(m(e),v({nome:e.nome,cor:e.cor})):(m(null),v({nome:"",cor:"#667eea"})),f(!0)},w=[{id:"categorias",titulo:"Categorias",icone:_i,descricao:"Gerencie suas categorias de organiza\xe7\xe3o"},{id:"admin",titulo:"Painel Admin",icone:yi,descricao:"Painel administrativo do sistema"},{id:"lixeira",titulo:"Lixeira",icone:ji,descricao:"Itens exclu\xeddos e restaura\xe7\xe3o"},{id:"sincronizacao",titulo:"Sincroniza\xe7\xe3o",icone:Ei,descricao:"Configura\xe7\xf5es de sincroniza\xe7\xe3o"},{id:"sistema",titulo:"Sistema",icone:$i,descricao:"Configura\xe7\xf5es do sistema"}];return(0,Al.jsxs)(su,{children:[(0,Al.jsxs)(cu,{children:[(0,Al.jsx)(uu,{children:"Configura\xe7\xf5es"}),(0,Al.jsx)(du,{children:"Personalize e configure suas op\xe7\xf5es de sistema."})]}),(0,Al.jsxs)(fu,{children:[(0,Al.jsx)(pu,{children:w.map(e=>(0,Al.jsxs)(mu,{active:g===e.id,onClick:()=>b(e.id),title:e.descricao,children:[(0,Al.jsx)(oi,{icon:e.icone}),e.titulo]},e.id))}),(0,Al.jsx)(hu,{children:(()=>{switch(g){case"categorias":return(0,Al.jsxs)(vu,{children:[(0,Al.jsxs)(gu,{children:[(0,Al.jsx)(oi,{icon:_i}),"Gerenciar Categorias"]}),(0,Al.jsxs)(bu,{onClick:()=>x(),children:[(0,Al.jsx)(oi,{icon:Ki}),"Nova Categoria"]}),c?(0,Al.jsx)("p",{children:"Carregando categorias..."}):l.length>0?(0,Al.jsx)(Ru,{children:l.map(e=>(0,Al.jsxs)(Nu,{onClick:()=>x(e),children:[(0,Al.jsx)(zu,{children:e.nome}),(0,Al.jsxs)(Lu,{children:[(0,Al.jsx)("span",{style:{color:e.cor},children:"\u25cf"}),(0,Al.jsx)(oi,{icon:mi,onClick:t=>{t.stopPropagation(),x(e)}}),(0,Al.jsx)(oi,{icon:zi,onClick:t=>{t.stopPropagation(),(async e=>{if(window.confirm("Tem certeza que deseja excluir esta categoria?"))try{await _l(e),y()}catch(t){console.error("Erro ao excluir categoria:",t),alert("Erro ao excluir categoria")}})(e.id)}})]})]},e.id))}):(0,Al.jsxs)(Mu,{children:[(0,Al.jsx)(Ou,{children:(0,Al.jsx)(oi,{icon:_i})}),(0,Al.jsx)("p",{children:"Nenhuma categoria encontrada"}),(0,Al.jsx)("p",{children:"Crie sua primeira categoria para come\xe7ar a organizar"})]})]});case"admin":return(0,Al.jsx)(Al.Fragment,{children:(0,Al.jsxs)(vu,{children:[(0,Al.jsxs)(gu,{children:[(0,Al.jsx)(oi,{icon:yi}),"Painel Administrativo"]}),(0,Al.jsxs)(Pu,{children:[(0,Al.jsxs)(Cu,{children:[(0,Al.jsx)(Tu,{children:(0,Al.jsx)(oi,{icon:hi})}),(0,Al.jsx)(ju,{children:"Usu\xe1rios"}),(0,Al.jsx)(_u,{children:"0"}),(0,Al.jsx)(Au,{children:"Total de Usu\xe1rios"})]}),(0,Al.jsxs)(Cu,{children:[(0,Al.jsx)(Tu,{children:(0,Al.jsx)(oi,{icon:rl})}),(0,Al.jsx)(ju,{children:"Dados"}),(0,Al.jsx)(_u,{children:"0"}),(0,Al.jsx)(Au,{children:"Total de Registros"})]}),(0,Al.jsxs)(Cu,{children:[(0,Al.jsx)(Tu,{children:(0,Al.jsx)(oi,{icon:xi})}),(0,Al.jsx)(ju,{children:"Estat\xedsticas"}),(0,Al.jsx)(_u,{children:"0%"}),(0,Al.jsx)(Au,{children:"Taxa de Sucesso"})]})]}),(0,Al.jsxs)(bu,{onClick:n,children:[(0,Al.jsx)(oi,{icon:Ci}),"Acessar Painel Admin"]})]})});case"lixeira":return(0,Al.jsxs)(vu,{children:[(0,Al.jsxs)(gu,{children:[(0,Al.jsx)(oi,{icon:ji}),"Lixeira"]}),(0,Al.jsxs)(Mu,{children:[(0,Al.jsx)(Ou,{children:(0,Al.jsx)(oi,{icon:ji})}),(0,Al.jsx)("p",{children:"Nenhum item na lixeira"}),(0,Al.jsx)("p",{children:"Itens exclu\xeddos aparecer\xe3o aqui para restaura\xe7\xe3o"})]})]});case"sincronizacao":return(0,Al.jsxs)(vu,{children:[(0,Al.jsxs)(gu,{children:[(0,Al.jsx)(oi,{icon:Ei}),"Sincroniza\xe7\xe3o"]}),(0,Al.jsxs)(xu,{children:[(0,Al.jsxs)(wu,{children:[(0,Al.jsx)(Su,{children:"Status"}),(0,Al.jsx)(ku,{children:"online"===a?"Online":"Offline"})]}),(0,Al.jsx)(Eu,{status:a})]}),(0,Al.jsx)(xu,{children:(0,Al.jsxs)(wu,{children:[(0,Al.jsx)(Su,{children:"\xdaltima Sincroniza\xe7\xe3o"}),(0,Al.jsx)(ku,{children:o?new Date(o).toLocaleString("pt-BR"):"Nunca"})]})}),(0,Al.jsxs)(bu,{onClick:i,disabled:"online"!==a,children:[(0,Al.jsx)(oi,{icon:Ei}),"Sincronizar Manualmente"]})]});case"sistema":return(0,Al.jsxs)(Al.Fragment,{children:[(0,Al.jsxs)(vu,{children:[(0,Al.jsxs)(gu,{children:[(0,Al.jsx)(oi,{icon:$i}),"Sistema"]}),(0,Al.jsxs)(yu,{onClick:r,children:[(0,Al.jsx)(oi,{icon:rl}),"Ver Logs do Sistema"]})]}),(0,Al.jsxs)(vu,{children:[(0,Al.jsxs)(gu,{children:[(0,Al.jsx)(oi,{icon:tl}),"Alertas"]}),(0,Al.jsxs)(Mu,{children:[(0,Al.jsx)(Ou,{children:(0,Al.jsx)(oi,{icon:Si})}),(0,Al.jsx)("p",{children:"Nenhum alerta ativo"}),(0,Al.jsx)("p",{children:"Sistema funcionando normalmente"})]})]})]});default:return null}})()})]}),d&&(0,Al.jsx)(Fu,{onClick:()=>f(!1),children:(0,Al.jsxs)(Iu,{onClick:e=>e.stopPropagation(),children:[(0,Al.jsxs)(Du,{children:[(0,Al.jsx)(Uu,{children:p?"Editar Categoria":"Nova Categoria"}),(0,Al.jsx)($u,{onClick:()=>f(!1),children:(0,Al.jsx)(oi,{icon:Xi})})]}),(0,Al.jsxs)(Bu,{onSubmit:e=>{e.preventDefault(),(async()=>{if(h.nome.trim())try{p?await jl(p.id,h):await Tl(h),f(!1),y()}catch(e){console.error("Erro ao salvar categoria:",e),alert("Erro ao salvar categoria")}else alert("Nome da categoria \xe9 obrigat\xf3rio")})()},children:[(0,Al.jsxs)(Hu,{children:[(0,Al.jsx)(Wu,{children:"Nome"}),(0,Al.jsx)(Vu,{type:"text",value:h.nome,onChange:e=>v({...h,nome:e.target.value}),placeholder:"Digite o nome da categoria"})]}),(0,Al.jsxs)(Hu,{children:[(0,Al.jsx)(Wu,{children:"Cor"}),(0,Al.jsx)(Vu,{type:"color",value:h.cor,onChange:e=>v({...h,cor:e.target.value})})]}),(0,Al.jsxs)(qu,{children:[(0,Al.jsx)(Ku,{type:"button",onClick:()=>f(!1),children:"Cancelar"}),(0,Al.jsx)(Gu,{type:"submit",children:"Salvar"})]})]})]})})]})},Qu=Vt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--espacamentoMedio);
`,Xu=Vt.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,Ju=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`,Zu=Vt.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,ed=Vt.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--bordaRaioPequena);

  &:hover {
    background: var(--corFundoHover);
    color: var(--corTextoPrimaria);
  }
`,td=Vt.div`
  padding: var(--espacamentoGrande);
`,rd=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
`,nd=Vt.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,ad=Vt(nd)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`,od=Vt(nd)`
  background: var(--corErro);
  color: white;

  &:hover {
    background: var(--corErroHover);
  }
`,id=Vt.div`
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
`,ld=Vt.div`
  padding: var(--espacamentoMedio);
  border-bottom: 1px solid var(--corBordaPrimaria);
  display: flex;
  align-items: flex-start;
  gap: var(--espacamentoMedio);
  background: ${e=>"error"===e.tipo?"rgba(220, 53, 69, 0.1)":"success"===e.tipo?"rgba(40, 167, 69, 0.1)":"rgba(0, 123, 255, 0.1)"};
  border-left: 4px solid ${e=>"error"===e.tipo?"#dc3545":"success"===e.tipo?"#28a745":"#007bff"};

  &:last-child {
    border-bottom: none;
  }
`,sd=Vt.div`
  color: ${e=>"error"===e.tipo?"#dc3545":"success"===e.tipo?"#28a745":"#007bff"};
  font-size: var(--tamanhoFonteMedia);
  margin-top: 2px;
`,cd=Vt.div`
  flex: 1;
`,ud=Vt.div`
  font-weight: 500;
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoPequeno);
`,dd=Vt.div`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`,fd=Vt.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  margin-top: var(--espacamentoPequeno);
  font-family: monospace;
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioPequena);
  white-space: pre-wrap;
`,pd=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,md=t=>{let{isVisible:r,onClose:n,onCarregarLogs:a,onLimparLogs:o,onExportarLogs:i}=t;const[l,s]=(0,e.useState)([]),[c,u]=(0,e.useState)(!1);(0,e.useEffect)(()=>{r&&d()},[r]);const d=async()=>{u(!0);try{const e=await a();s(e.logs||[])}catch(e){console.error("Erro ao carregar logs:",e),s([])}finally{u(!1)}},f=e=>{switch(e){case"error":return"\u274c";case"success":return"\u2705";case"info":return"\u2139\ufe0f";default:return"\ud83d\udcdd"}};return r?(0,Al.jsx)(Qu,{onClick:n,children:(0,Al.jsxs)(Xu,{onClick:e=>e.stopPropagation(),children:[(0,Al.jsxs)(Ju,{children:[(0,Al.jsxs)(Zu,{children:[(0,Al.jsx)(oi,{icon:si}),"Logs do Sistema"]}),(0,Al.jsx)(ed,{onClick:n,children:(0,Al.jsx)(oi,{icon:Xi})})]}),(0,Al.jsxs)(td,{children:[(0,Al.jsxs)(rd,{children:[(0,Al.jsxs)(ad,{onClick:d,disabled:c,children:[(0,Al.jsx)(oi,{icon:Ei,spin:c}),c?"Carregando...":"Atualizar"]}),(0,Al.jsxs)(nd,{onClick:async()=>{try{await i(),alert("Logs exportados com sucesso!")}catch(e){console.error("Erro ao exportar logs:",e),alert("Erro ao exportar logs: "+e.message)}},children:[(0,Al.jsx)(oi,{icon:Hi}),"Exportar"]}),(0,Al.jsxs)(od,{onClick:async()=>{if(window.confirm("Tem certeza que deseja limpar todos os logs?"))try{await o(),await d(),alert("Logs limpos com sucesso!")}catch(e){console.error("Erro ao limpar logs:",e),alert("Erro ao limpar logs: "+e.message)}},children:[(0,Al.jsx)(oi,{icon:zi}),"Limpar Logs"]})]}),(0,Al.jsx)(id,{children:c?(0,Al.jsxs)(pd,{children:[(0,Al.jsx)(oi,{icon:Ei,spin:!0,style:{fontSize:"2rem",marginBottom:"1rem"}}),(0,Al.jsx)("p",{children:"Carregando logs..."})]}):0===l.length?(0,Al.jsxs)(pd,{children:[(0,Al.jsx)(oi,{icon:si,style:{fontSize:"2rem",marginBottom:"1rem"}}),(0,Al.jsx)("p",{children:"Nenhum log encontrado."})]}):l.map(e=>{return(0,Al.jsxs)(ld,{tipo:e.type,children:[(0,Al.jsx)(sd,{tipo:e.type,children:f(e.type)}),(0,Al.jsxs)(cd,{children:[(0,Al.jsx)(ud,{children:e.message}),(0,Al.jsx)(dd,{children:(t=e.timestamp,new Date(t).toLocaleString("pt-BR"))}),e.details&&Object.keys(e.details).length>0&&(0,Al.jsx)(fd,{children:JSON.stringify(e.details,null,2)})]})]},e.id);var t})})]})]})}):null},hd=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`,vd=Vt.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoGrande);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,gd=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,bd=Vt.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoMedio);
`,yd=()=>(0,Al.jsxs)(hd,{children:[(0,Al.jsxs)(vd,{children:[(0,Al.jsx)(oi,{icon:zi}),"Lixeira"]}),(0,Al.jsxs)(gd,{children:[(0,Al.jsx)(bd,{children:(0,Al.jsx)(oi,{icon:zi})}),(0,Al.jsx)("h3",{children:"Lixeira vazia"}),(0,Al.jsx)("p",{children:"Nenhum item foi exclu\xeddo ainda."}),(0,Al.jsxs)("p",{style:{fontSize:"var(--tamanhoFontePequena)",marginTop:"var(--espacamentoMedio)"},children:[(0,Al.jsx)(oi,{icon:Di}),"Itens exclu\xeddos aparecer\xe3o aqui por 30 dias antes de serem removidos permanentemente."]})]})]}),xd=Vt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--espacamentoMedio);
`,wd=Vt.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,Sd=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`,kd=Vt.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,Ed=Vt.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--bordaRaioPequena);

  &:hover {
    background: var(--corFundoHover);
    color: var(--corTextoPrimaria);
  }
`,Pd=Vt.div`
  padding: var(--espacamentoGrande);
`,Cd=Vt.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoMedio);
  font-size: 1.8rem;
  font-weight: 700;
`,Td=Vt.div`
  color: var(--corTextoSecundaria);
  line-height: 1.8;
  font-size: var(--tamanhoFonteMedia);
  white-space: pre-wrap;
  margin-bottom: var(--espacamentoGrande);
`,jd=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoGrande);
`,_d=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
`,Ad=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  flex-wrap: wrap;
`,Rd=Vt.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`,Nd=Vt(Rd)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`,zd=Vt(Rd)`
  background: ${e=>e.favorito?"#FF6B6B":"var(--corFundoSecundaria)"};
  color: ${e=>e.favorito?"white":"var(--corTextoPrimaria)"};
  border: 2px solid ${e=>e.favorito?"#FF6B6B":"var(--corBordaPrimaria)"};

  &:hover {
    background: ${e=>e.favorito?"#FF5252":"var(--corFundoTerciaria)"};
    border-color: ${e=>e.favorito?"#FF5252":"var(--corPrimaria)"};
  }
`,Ld=e=>{let{nota:t,isVisible:r,onClose:n,onEditar:a,onCopiar:o,onExportar:i,onImprimir:l,onFavoritar:s}=e;if(!r||!t)return null;const c=e=>new Date(e).toLocaleString("pt-BR");return(0,Al.jsx)(xd,{onClick:n,children:(0,Al.jsxs)(wd,{onClick:e=>e.stopPropagation(),children:[(0,Al.jsxs)(Sd,{children:[(0,Al.jsxs)(kd,{children:[(0,Al.jsx)(oi,{icon:bi}),"Visualizar Nota"]}),(0,Al.jsx)(Ed,{onClick:n,children:(0,Al.jsx)(oi,{icon:Xi})})]}),(0,Al.jsxs)(Pd,{children:[(0,Al.jsx)(Cd,{children:t.titulo}),(0,Al.jsxs)(jd,{children:[(0,Al.jsxs)(_d,{children:[(0,Al.jsxs)("span",{children:["Criada em: ",c(t.dataCriacao)]}),t.dataModificacao!==t.dataCriacao&&(0,Al.jsxs)("span",{children:["\u2022 Editada em: ",c(t.dataModificacao)]}),t.topico&&(0,Al.jsxs)("span",{children:["\u2022 T\xf3pico: ",t.topico]})]}),t.favorito&&(0,Al.jsx)(oi,{icon:Ti,style:{color:"#FF6B6B"}})]}),(0,Al.jsx)(Td,{children:t.conteudo}),(0,Al.jsxs)(Ad,{children:[(0,Al.jsxs)(zd,{favorito:t.favorito,onClick:()=>{s&&s(t.id)},children:[(0,Al.jsx)(oi,{icon:t.favorito?Ti:bi}),t.favorito?"Favorito":"Favoritar"]}),(0,Al.jsxs)(Nd,{onClick:a,children:[(0,Al.jsx)(oi,{icon:mi}),"Editar"]}),(0,Al.jsxs)(Nd,{onClick:async()=>{const e=`${t.titulo}\n\n${t.conteudo}`;try{await navigator.clipboard.writeText(e),alert("Conte\xfado copiado para a \xe1rea de transfer\xeancia!")}catch(r){console.error("Erro ao copiar:",r),alert("Erro ao copiar conte\xfado")}},children:[(0,Al.jsx)(oi,{icon:Gi}),"Copiar"]}),i&&(0,Al.jsxs)(Nd,{onClick:i,children:[(0,Al.jsx)(oi,{icon:Hi}),"Exportar"]}),l&&(0,Al.jsxs)(Nd,{onClick:l,children:[(0,Al.jsx)(oi,{icon:ol}),"Imprimir"]})]})]})]})})},Md=Vt.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${e=>e.recolhido?"var(--larguraMenuRecolhido)":"var(--larguraMenu)"};
  background: linear-gradient(180deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border-right: 2px solid var(--corBordaPrimaria);
  transition: width var(--transicaoMedia);
  z-index: var(--zIndexDropdown);
  box-shadow: var(--sombraMedia);
  overflow: hidden;
  backdrop-filter: blur(10px);
`,Od=Vt.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.recolhido?"center":"space-between"};
  padding: var(--espacamentoMedio);
  border-bottom: 2px solid var(--corBordaPrimaria);
  height: var(--alturaHeader);
  min-height: 60px;
  background: linear-gradient(135deg, var(--corFundoSecundaria) 0%, var(--corFundoTerciaria) 100%);
`,Fd=Vt.h2`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--tamanhoFonteTitulo);
  margin: 0;
  opacity: ${e=>e.recolhido?0:1};
  transition: opacity var(--transicaoMedia);
  white-space: nowrap;
  overflow: hidden;
  font-weight: 700;
`,Id=Vt.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  flex-shrink: 0;
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%);
    transform: scale(1.1);
    box-shadow: var(--sombraMedia);
  }
`,Dd=Vt.div`
  padding: var(--espacamentoMedio);
  height: calc(100vh - var(--alturaHeader));
  overflow-y: auto;
  overflow-x: hidden;
`,Ud=Vt.div`
  margin-bottom: var(--espacamentoGrande);
  opacity: ${e=>e.recolhido?0:1};
  transition: opacity var(--transicaoMedia);
  pointer-events: ${e=>e.recolhido?"none":"auto"};
  visibility: ${e=>e.recolhido?"hidden":"visible"};
`,$d=Vt.h3`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--espacamentoMedio);
  white-space: nowrap;
  overflow: hidden;
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
`,Bd=Vt.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Hd=Vt.li`
  margin-bottom: var(--espacamentoPequeno);
`,Wd=Vt.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio);
  background: ${e=>e.ativo?"linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)":"transparent"};
  color: ${e=>e.ativo?"var(--corTextoClara)":"var(--corTextoPrimaria)"};
  border: ${e=>e.ativo?"none":"1px solid var(--corBordaPrimaria)"};
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;
  font-size: var(--tamanhoFonteMedia);
  white-space: nowrap;
  font-weight: ${e=>e.ativo?"600":"500"};
  box-shadow: ${e=>e.ativo?"var(--sombraLeve)":"none"};

  &:hover {
    background: ${e=>e.ativo?"linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%)":"var(--corFundoHover)"};
    transform: ${e=>e.ativo?"translateY(-1px)":"none"};
    box-shadow: ${e=>e.ativo?"var(--sombraMedia)":"var(--sombraLeve)"};
    border-color: ${e=>e.ativo?"transparent":"var(--corPrimaria)"};
  }
`,Vd=Vt.div`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,qd=Vt.span`
  flex: 1;
  opacity: ${e=>e.recolhido?0:1};
  transition: opacity var(--transicaoMedia);
  overflow: hidden;
  text-overflow: ellipsis;
`,Gd=Vt.span`
  background: ${e=>e.ativo?"var(--corTextoClara)":"var(--corPrimaria)"};
  color: ${e=>e.ativo?"var(--corPrimaria)":"var(--corTextoClara)"};
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
  opacity: ${e=>e.recolhido?0:1};
  transition: opacity var(--transicaoMedia);
  flex-shrink: 0;
`,Kd=Vt.div`
  margin-bottom: var(--espacamentoGrande);
`,Yd=Vt.div`
  position: relative;
  margin-bottom: var(--espacamentoMedio);
`,Qd=Vt.input`
  width: 100%;
  padding: var(--espacamentoMedio) var(--espacamentoMedio) var(--espacamentoMedio) 40px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoRapida);
  opacity: ${e=>e.recolhido?0:1};
  pointer-events: ${e=>e.recolhido?"none":"auto"};
  visibility: ${e=>e.recolhido?"hidden":"visible"};

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`,Xd=Vt.div`
  position: absolute;
  left: var(--espacamentoMedio);
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
  z-index: 1;
  opacity: ${e=>e.recolhido?0:1};
  transition: opacity var(--transicaoMedia);
  visibility: ${e=>e.recolhido?"hidden":"visible"};
`,Jd=Vt.div`
  margin-bottom: var(--espacamentoGrande);
`,Zd=Vt.select`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
  cursor: pointer;
  opacity: ${e=>e.recolhido?0:1};
  pointer-events: ${e=>e.recolhido?"none":"auto"};
  visibility: ${e=>e.recolhido?"hidden":"visible"};

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,ef=Vt.option`
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
`,tf=Vt.div`
  margin-top: auto;
  padding-top: var(--espacamentoGrande);
  border-top: 1px solid var(--corBordaPrimaria);
`,rf=Vt.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio);
  background: transparent;
  color: var(--corTextoPrimaria);
  border: none;
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;
  font-size: var(--tamanhoFonteMedia);
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: var(--corFundoSecundaria);
    transform: translateX(2px);
  }

  &:active {
    transform: translateX(2px) scale(0.98);
  }
`,nf=e=>{let{onAbrirConfiguracoes:t,telaAtiva:r,onTelaChange:n}=e;const{categoriaAtiva:a,menuRecolhido:o,termoBusca:i,ordenacao:l,alternarMenu:s,definirCategoriaAtiva:c,definirTermoBusca:u,definirOrdenacao:d,estatisticas:f}=Nl(),p=[{id:"notas",titulo:"Minhas Notas",icone:al,contador:f.totalNotas},{id:"links",titulo:"Meus Links",icone:Wi,contador:0}];return(0,Al.jsxs)(Md,{recolhido:o,children:[(0,Al.jsxs)(Od,{recolhido:o,children:[(0,Al.jsx)(Fd,{recolhido:o,children:"WRTmind"}),(0,Al.jsx)(Id,{onClick:s,children:(0,Al.jsx)(oi,{icon:o?Xi:di,size:"sm"})})]}),(0,Al.jsxs)(Dd,{children:[(0,Al.jsxs)(Kd,{children:[(0,Al.jsx)($d,{recolhido:o,children:"Buscar"}),(0,Al.jsxs)(Yd,{children:[(0,Al.jsx)(Xd,{recolhido:o,children:(0,Al.jsx)(oi,{icon:qi,size:"sm"})}),(0,Al.jsx)(Qd,{type:"text",placeholder:"Buscar por t\xedtulo...",value:i,onChange:e=>u(e.target.value),recolhido:o})]})]}),(0,Al.jsxs)(Jd,{children:[(0,Al.jsx)($d,{recolhido:o,children:"Ordenar por"}),(0,Al.jsx)(Zd,{value:l,onChange:e=>d(e.target.value),recolhido:o,children:[{valor:"dataCriacao",label:"Data de Cria\xe7\xe3o"},{valor:"dataModificacao",label:"Data de Modifica\xe7\xe3o"},{valor:"titulo",label:"T\xedtulo"},{valor:"topico",label:"T\xf3pico"}].map(e=>(0,Al.jsx)(ef,{value:e.valor,children:e.label},e.valor))})]}),(0,Al.jsxs)(Ud,{recolhido:o,children:[(0,Al.jsx)($d,{recolhido:o,children:"T\xf3picos"}),(0,Al.jsx)(Bd,{children:f.notasPorTopico.map(e=>{let{topico:t,quantidade:r}=e;return(0,Al.jsx)(Hd,{children:(0,Al.jsxs)(Wd,{onClick:()=>c(t),title:o?t:"",children:[(0,Al.jsx)(Vd,{children:(0,Al.jsx)(oi,{icon:Oi,size:"sm"})}),(0,Al.jsx)(qd,{recolhido:o,children:t}),(0,Al.jsx)(Gd,{recolhido:o,children:r})]})},t)})})]}),(0,Al.jsxs)(Ud,{recolhido:o,children:[(0,Al.jsx)($d,{recolhido:o,children:"Navega\xe7\xe3o"}),(0,Al.jsx)(Bd,{children:p.map(e=>(0,Al.jsx)(Hd,{children:(0,Al.jsxs)(Wd,{ativo:r===e.id,onClick:()=>n(e.id),title:o?e.titulo:"",children:[(0,Al.jsx)(Vd,{children:(0,Al.jsx)(oi,{icon:e.icone,size:"sm"})}),(0,Al.jsx)(qd,{recolhido:o,children:e.titulo}),(0,Al.jsx)(Gd,{ativo:r===e.id,recolhido:o,children:e.contador})]})},e.id))})]}),(0,Al.jsx)(tf,{children:(0,Al.jsxs)(rf,{onClick:t,title:o?"Configura\xe7\xf5es":"",children:[(0,Al.jsx)(Vd,{children:(0,Al.jsx)(oi,{icon:$i,size:"sm"})}),(0,Al.jsx)(qd,{recolhido:o,children:"Configura\xe7\xf5es"})]})})]})]})},af=(function(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var i=Bt.apply(void 0,a([t],r,!1)),l="sc-global-".concat(Te(JSON.stringify(i))),s=new qt(i,l),c=function(t){var r=Ct(),n=e.useContext(Ft),a=e.useRef(r.styleSheet.allocateGSInstance(l)).current;return r.styleSheet.server&&u(a,t,r.styleSheet,n,r.stylis),e.useLayoutEffect(function(){if(!r.styleSheet.server)return u(a,t,r.styleSheet,n,r.stylis),function(){return s.removeStyles(a,r.styleSheet)}},[a,t,r.styleSheet,n,r.stylis]),null};function u(e,t,r,a,o){if(s.isStatic)s.renderStyles(e,pe,r,o);else{var i=n(n({},t),{theme:ve(t,a,c.defaultProps)});s.renderStyles(e,i,r,o)}}return e.memo(c)})`
  :root {
    /* Cores */
    --corPrimaria: #667eea;
    --corSecundaria: #764ba2;
    --corPrimariaHover: #5a6fd8;
    --corSecundariaHover: #6a4190;
    --corSucesso: #4caf50;
    --corErro: #f44336;
    --corAviso: #ff9800;
    --corInfo: #2196f3;
    --corErroHover: #d32f2f;
    --corSucessoHover: #45a049;
    --corAvisoHover: #e68900;
    --corInfoHover: #1976d2;
    
    /* Cores de fundo */
    --corFundoPrincipal: #f8fafc;
    --corFundoPrimaria: #f8fafc;
    --corFundoSecundaria: #ffffff;
    --corFundoTerciaria: #f1f5f9;
    --corFundoCard: #ffffff;
    --corFundoModal: rgba(0, 0, 0, 0.5);
    --corFundoHover: #f8fafc;
    --corFundo: #f8fafc;
    
    /* Cores de texto */
    --corTextoPrimaria: #1e293b;
    --corTextoSecundaria: #64748b;
    --corTextoTerciaria: #94a3b8;
    --corTextoClara: #ffffff;
    
    /* Cores de borda */
    --corBordaPrimaria: #e2e8f0;
    --corBordaSecundaria: #cbd5e1;
    --corBordaFoco: #667eea;
    
    /* Espaçamentos */
    --espacamentoPequeno: 8px;
    --espacamentoMedio: 16px;
    --espacamentoGrande: 24px;
    --espacamentoExtraGrande: 32px;
    
    /* Bordas */
    --bordaRaioPequena: 4px;
    --bordaRaioMedia: 8px;
    --bordaRaioGrande: 12px;
    --bordaRaioExtraGrande: 16px;
    --bordaRaioCircular: 50%;
    
    /* Sombras */
    --sombraLeve: 0 1px 3px rgba(0, 0, 0, 0.1);
    --sombraMedia: 0 4px 6px rgba(0, 0, 0, 0.1);
    --sombraForte: 0 10px 25px rgba(0, 0, 0, 0.15);
    --sombraHover: 0 8px 25px rgba(0, 0, 0, 0.15);
    
    /* Transições */
    --transicaoRapida: 0.15s ease;
    --transicaoMedia: 0.3s ease;
    --transicaoLenta: 0.5s ease;
    
    /* Tamanhos de fonte */
    --tamanhoFontePequena: 12px;
    --tamanhoFonteMedia: 14px;
    --tamanhoFonteGrande: 16px;
    --tamanhoFonteExtraGrande: 20px;
    --tamanhoFonteTitulo: 24px;
    
    /* Layout */
    --larguraMenu: 280px;
    --larguraMenuRecolhido: 80px;
    --alturaHeader: 64px;
    
    /* Z-index */
    --zIndexDropdown: 1000;
    --zIndexTooltip: 1100;
    --zIndexModal: 2500;
    --zIndexOverlay: 1300;
    --zIndexLoading: 1400;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--corFundoPrimaria) !important;
    color: var(--corTextoPrimaria) !important;
    line-height: 1.6;
    margin: 0 !important;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Animações */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0, 0, 0);
    }
    40%, 43% {
      transform: translate3d(0, -8px, 0);
    }
    70% {
      transform: translate3d(0, -4px, 0);
    }
    90% {
      transform: translate3d(0, -2px, 0);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-5px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(5px);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Animações para a tela inicial */
  @keyframes iconFloat {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes iconGlow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
    }
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--corFundoSecundaria);
    border-radius: var(--bordaRaioPequena);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--corBordaSecundaria);
    border-radius: var(--bordaRaioPequena);
    transition: background var(--transicaoRapida);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--corTextoTerciaria);
  }

  /* Seleção de texto */
  ::selection {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
  }

  /* Foco global */
  *:focus {
    outline: 2px solid var(--corBordaFoco);
    outline-offset: 2px;
  }

  /* Botões e inputs */
  button, input, textarea, select {
    font-family: inherit;
  }

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Listas */
  ul, ol {
    list-style: none;
  }

  /* Imagens */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Utilitários */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .scale-in {
    animation: scaleIn 0.3s ease-out;
  }

  .bounce {
    animation: bounce 0.6s ease-out;
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .shake {
    animation: shake 0.5s ease-in-out;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    :root {
      --espacamentoGrande: 16px;
      --espacamentoExtraGrande: 24px;
      --tamanhoFonteTitulo: 20px;
    }
  }

  @media (max-width: 480px) {
    :root {
      --espacamentoMedio: 12px;
      --espacamentoGrande: 16px;
      --tamanhoFonteGrande: 14px;
      --tamanhoFonteExtraGrande: 18px;
    }
  }
`,of=af,lf=Vt.div`
  min-height: 100vh;
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`,sf=Vt.div`
  display: flex;
  min-height: 100vh;
`,cf=Vt.div`
  flex: 1;
  margin-left: ${e=>e.menuRecolhido?"var(--larguraMenuRecolhido)":"var(--larguraMenu)"};
  transition: margin-left var(--transicaoMedia);
  display: flex;
  flex-direction: column;
`,uf=Vt.header`
  background: linear-gradient(135deg, var(--corFundoSecundaria) 0%, var(--corFundoTerciaria) 100%);
  border-bottom: 2px solid var(--corBordaPrimaria);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--sombraMedia);
  height: 80px;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
`,df=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  color: var(--corTextoPrimaria);
  font-weight: 600;
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioGrande);
  border: 1px solid var(--corBordaPrimaria);
`,ff=Vt.button`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: 10px 18px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corErroHover) 0%, #b71c1c 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`,pf=Vt.div`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);

  &:hover {
    transform: scale(1.05);
  }
`,mf=Vt.div`
  background: linear-gradient(90deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border-bottom: 1px solid var(--corBordaPrimaria);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
  backdrop-filter: blur(5px);
`,hf=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
`,vf=Vt.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${e=>"online"===e.status?"var(--corSucesso)":"syncing"===e.status?"var(--corAviso)":"var(--corErro)"};
  box-shadow: 0 0 8px ${e=>"online"===e.status?"rgba(76, 175, 80, 0.4)":"syncing"===e.status?"rgba(255, 152, 0, 0.4)":"rgba(244, 67, 54, 0.4)"};
  animation: ${e=>"syncing"===e.status?"pulse 2s infinite":"none"};
`,gf=Vt.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: 8px 16px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: var(--sombraLeve);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,bf=Vt.div`
  flex: 1;
  overflow-y: auto;
`;const yf=()=>{const{categorias:t,carregando:r,carregarNotas:n,adicionarNota:a,editarNota:o,excluirNota:i,alternarFavorito:l,notasAtivas:s,menuRecolhido:c}=Nl(),[u,d]=(0,e.useState)(null),[f,p]=(0,e.useState)("inicial"),[m,h]=(0,e.useState)(!1),[v,g]=(0,e.useState)(null),[b,y]=(0,e.useState)("editar"),[x,w]=(0,e.useState)(!1),[S,k]=(0,e.useState)(null),[E,P]=(0,e.useState)(!1),[C,T]=(0,e.useState)(!1),[j,_]=(0,e.useState)(null),[A,R]=(0,e.useState)("criar"),[N,z]=(0,e.useState)([]),[L,M]=(0,e.useState)(!1),{syncStatus:O,lastSync:F,sincronizarManual:I}=function(){const[t,r]=(0,e.useState)("online"),[n,a]=(0,e.useState)(null),o=async()=>{try{const e=await fetch(`${{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_API_BASE_URL}/sync/status`);if(e.ok){const t=await e.json();r(t.status||"online"),a(t.lastSync?new Date(t.lastSync):null)}else r("offline")}catch(e){console.error("Erro ao verificar status de sincroniza\xe7\xe3o:",e),r("offline")}};return(0,e.useEffect)(()=>{o();const e=setInterval(o,3e4);return()=>clearInterval(e)},[]),{syncStatus:t,lastSync:n,sincronizarManual:async()=>{r("syncing");try{const e=await fetch(`${{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_API_BASE_URL}/sync/manual`,{method:"POST",headers:{"Content-Type":"application/json"}});if(e.ok){const t=await e.json();r("online"),a(new Date),console.log("Sincroniza\xe7\xe3o manual realizada com sucesso:",t)}else r("offline"),console.error("Erro na sincroniza\xe7\xe3o manual")}catch(e){console.error("Erro na sincroniza\xe7\xe3o manual:",e),r("offline")}}}}();(0,e.useEffect)(()=>{const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e);d(t),p("inicial"),console.log("\ud83d\udd04 Carregando dados iniciais..."),D(t)}catch(t){console.error("Erro ao carregar dados do usu\xe1rio:",t),localStorage.removeItem("user")}},[]);const D=async e=>{if(e)try{console.log("\ud83d\udcdd Carregando notas..."),await n(),console.log("\u2705 Notas carregadas"),console.log("\ud83d\udd17 Carregando links..."),await U(),console.log("\u2705 Links carregados"),console.log("\ud83c\udf89 Todos os dados carregados com sucesso!")}catch(t){console.error("\u274c Erro ao carregar dados iniciais:",t)}};(0,e.useEffect)(()=>{u&&U()},[u]);const U=async()=>{if(u){M(!0);try{console.log("\ud83d\udd04 Carregando links...");const e=await fl.buscarTodos();console.log("\ud83d\udd17 Resposta da API de links:",e);const t=e.links||e.data||[];console.log("\ud83d\udd17 Links carregados:",t),console.log("\ud83d\udd17 Quantidade de links:",t.length),z(t)}catch(e){console.error("Erro ao carregar links:",e)}finally{M(!1)}}},$=e=>{const t=e.detail;g(t),y("visualizar"),h(!0)},B=e=>{const t=e.detail;window.open(t.url,"_blank")},H=()=>{d(null),p("login"),h(!1),w(!1),P(!1)};(0,e.useEffect)(()=>(window.addEventListener("abrirNota",$),window.addEventListener("abrirLink",B),window.addEventListener("userLogout",H),()=>{window.removeEventListener("abrirNota",$),window.removeEventListener("abrirLink",B),window.removeEventListener("userLogout",H)}),[]);const W=e=>{d(e),p("inicial"),console.log("\ud83d\udd04 Login realizado, carregando dados..."),D(e)},V=()=>{g(null),y("editar"),h(!0)},q=()=>{_(null),R("editar"),T(!0)},G=e=>{g(e),y("editar"),h(!0)},K=e=>{_(e),R("editar"),T(!0)},Y=e=>{g(e),y("visualizar"),h(!0)},Q=e=>{console.log("Exportar:",e)},X=e=>{console.log("Imprimir:",e)},J=e=>{k(e),w(!0)},Z=async e=>{try{window.confirm("Tem certeza que deseja excluir este link?")&&(await fl.deletar(e),console.log("\u2705 Link deletado:",e),z(t=>t.filter(t=>t.id!==e)),T(!1),_(null))}catch(t){console.error("Erro ao excluir link:",t),alert("Erro ao excluir link")}},ee=async e=>{try{await i(e),h(!1),g(null)}catch(t){console.error("Erro ao excluir item:",t)}},te=async()=>{P(!0)};return u?(0,Al.jsxs)(lf,{children:[(0,Al.jsx)(of,{}),(0,Al.jsxs)(sf,{children:[(0,Al.jsx)(nf,{onAbrirConfiguracoes:()=>{p("configuracoes")},telaAtiva:f,onTelaChange:p}),(0,Al.jsxs)(cf,{menuRecolhido:c,children:[(0,Al.jsxs)(uf,{children:[(0,Al.jsxs)(pf,{children:[(0,Al.jsx)(oi,{icon:al}),"WRTmind"]}),(0,Al.jsxs)(df,{children:[(0,Al.jsxs)("span",{children:["Ol\xe1, ",u.nome]}),(0,Al.jsxs)(ff,{onClick:()=>{localStorage.removeItem("user"),d(null),p("login")},children:[(0,Al.jsx)(oi,{icon:ui}),"Sair"]})]})]}),(0,Al.jsxs)(mf,{children:[(0,Al.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoGrande)"},children:[(0,Al.jsxs)(hf,{children:[(0,Al.jsx)(vf,{status:O}),(0,Al.jsx)("span",{children:"online"===O?"Online":"syncing"===O?"Sincronizando...":"Offline"})]}),F&&(0,Al.jsxs)(hf,{children:[(0,Al.jsx)(oi,{icon:Bi}),(0,Al.jsxs)("span",{children:["\xdaltima sincroniza\xe7\xe3o: ",F.toLocaleTimeString()]})]})]}),(0,Al.jsxs)(gf,{onClick:I,disabled:"syncing"===O,children:[(0,Al.jsx)(oi,{icon:Ei,spin:"syncing"===O}),"Sincronizar"]})]}),(0,Al.jsx)(bf,{children:(()=>{switch(console.log("\ud83d\udd0d Renderizando conte\xfado - telaAtiva:",f),console.log("\ud83d\udcdd Notas ativas:",s),console.log("\ud83d\udcdd Total de notas:",(null===s||void 0===s?void 0:s.length)||0),f){case"login":return(0,Al.jsx)(Kl,{onLogin:W});case"inicial":return(0,Al.jsx)(cs,{notas:s,links:N,carregando:r,carregandoLinks:L,onNovoItem:V,onEditarItem:G,onVisualizarItem:Y,onTelaCheia:J});case"notas":return(0,Al.jsx)(_s,{notas:s,carregando:r,onNovoItem:V,onEditarItem:G,onVisualizarItem:Y,onExcluirItem:ee,onFavoritarItem:l});case"links":return(0,Al.jsx)(Xs,{links:N,carregando:L,onNovoItem:q,onEditarItem:K,onVisualizarItem:e=>window.open(e.url,"_blank"),onExcluirItem:Z,onFavoritarItem:e=>console.log("Favoritar link:",e)});case"favoritos":return(0,Al.jsx)(Ac,{itens:s.filter(e=>e.favorito),tipo:"nota",titulo:"Favoritos",icone:Ti,carregando:r,onNovo:V,onEditar:G,onExcluir:ee,onVisualizar:Y,onExportar:Q,onImprimir:X,onTelaCheia:J,onFavoritar:l});case"lixeira":return(0,Al.jsx)(yd,{notas:s.filter(e=>!e.ativo),onRestaurar:e=>console.log("Restaurar:",e),onExcluirDefinitivamente:e=>console.log("Excluir definitivamente:",e)});case"configuracoes":return(0,Al.jsx)(Yu,{onAbrirLogs:te,onAbrirAdmin:()=>alert("Acesso negado. Apenas administradores podem acessar este painel."),syncStatus:O,lastSync:F,onSincronizar:I});default:return(0,Al.jsx)(cs,{})}})()})]})]}),(0,Al.jsx)(Kc,{isVisible:m,item:v,modo:b,categorias:t,onSave:async(e,t)=>{try{void 0!==t.url?e?console.log("Editar link:",e,t):console.log("Criar link:",t):e?await o(e,t):await a(t),h(!1),g(null)}catch(r){console.error("Erro ao salvar item:",r)}},onDelete:ee,onClose:()=>{h(!1),g(null)}}),(0,Al.jsx)(lu,{isVisible:C,link:j,modo:A,onSave:async e=>{try{if(j){const t=await fl.atualizar(j.id,e);console.log("\u2705 Link atualizado:",t),z(t=>t.map(t=>t.id===j.id?{...t,...e}:t))}else{const t=await fl.criar(e);console.log("\u2705 Link criado:",t);const r=t.data||t.link;r&&z(e=>[...e,r])}T(!1),_(null)}catch(t){console.error("Erro ao salvar link:",t),alert("Erro ao salvar link")}},onDelete:Z,onClose:()=>T(!1)}),(0,Al.jsx)(Ld,{isVisible:x,nota:S,onClose:()=>{w(!1),k(null)},onEdit:()=>{S&&(g(S),y("editar"),h(!0),w(!1))},onDelete:()=>{S&&(ee(S.id),w(!1))}}),(0,Al.jsx)(md,{isVisible:E,onClose:()=>P(!1),onCarregarLogs:async()=>{console.log("Carregando logs do sistema...")},onLimparLogs:async()=>{console.log("Limpando logs do sistema...")},onExportarLogs:async()=>{console.log("Exportando logs...")}})]}):(0,Al.jsxs)(lf,{children:[(0,Al.jsx)(of,{}),(0,Al.jsx)(Kl,{onLogin:W})]})},xf=()=>(0,Al.jsx)(zl,{children:(0,Al.jsx)(yf,{})}),wf=e=>{e&&e instanceof Function&&r.e(453).then(r.bind(r,453)).then(t=>{let{getCLS:r,getFID:n,getFCP:a,getLCP:o,getTTFB:i}=t;r(e),n(e),a(e),o(e),i(e)})};t.createRoot(document.getElementById("root")).render((0,Al.jsx)(e.StrictMode,{children:(0,Al.jsx)(xf,{})})),wf()})()})();
//# sourceMappingURL=main.3249f5dc.js.map
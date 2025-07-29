/*! For license information please see main.f6a522be.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),a=n(43),o=n(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(i(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var j=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var _=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=_&&e[_]||e["@@iterator"])?e:null}var N=Symbol.for("react.client.reference");function R(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===N?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case v:return"Fragment";case b:return"Profiler";case g:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList";case j:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case h:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(t=e.displayName||null)?t:R(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return R(e(t))}catch(n){}}return null}var z=Array.isArray,O=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},F=[],I=-1;function D(e){return{current:e}}function U(e){0>I||(e.current=F[I],F[I]=null,I--)}function $(e,t){I++,F[I]=e.current,e.current=t}var B=D(null),H=D(null),W=D(null),V=D(null);function q(e,t){switch($(W,t),$(H,e),$(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=od(t=ad(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(B),$(B,e)}function G(){U(B),U(H),U(W)}function K(e){null!==e.memoizedState&&$(V,e);var t=B.current,n=od(t,e.type);t!==n&&($(H,e),$(B,n))}function Y(e){H.current===e&&(U(B),U(H)),V.current===e&&(U(V),Kd._currentValue=M)}var Q=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ae=r.unstable_UserBlockingPriority,oe=r.unstable_NormalPriority,ie=r.unstable_LowPriority,le=r.unstable_IdlePriority,se=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function fe(e){if("function"===typeof se&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var pe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(me(e)/he|0)|0},me=Math.log,he=Math.LN2;var ve=256,ge=4194304;function be(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ye(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~o)?a=be(r):0!==(i&=l)?a=be(i):n||0!==(n=l&~e)&&(a=be(n)):0!==(l=r&~o)?a=be(l):0!==i?a=be(i):n||0!==(n=r&~e)&&(a=be(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:a}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ve;return 0===(4194048&(ve<<=1))&&(ve=256),e}function ke(){var e=ge;return 0===(62914560&(ge<<=1))&&(ge=4194304),e}function Ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ce(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-pe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function je(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Te(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _e(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ae(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:uf(e.type)}var Ne=Math.random().toString(36).slice(2),Re="__reactFiber$"+Ne,ze="__reactProps$"+Ne,Oe="__reactContainer$"+Ne,Le="__reactEvents$"+Ne,Me="__reactListeners$"+Ne,Fe="__reactHandles$"+Ne,Ie="__reactResources$"+Ne,De="__reactMarker$"+Ne;function Ue(e){delete e[Re],delete e[ze],delete e[Le],delete e[Me],delete e[Fe]}function $e(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oe]||n[Re]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=yd(e);null!==e;){if(n=e[Re])return n;e=yd(e)}return t}n=(e=n).parentNode}return null}function Be(e){if(e=e[Re]||e[Oe]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function He(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function We(e){var t=e[Ie];return t||(t=e[Ie]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[De]=!0}var qe=new Set,Ge={};function Ke(e,t){Ye(e,t),Ye(e+"Capture",t)}function Ye(e,t){for(Ge[e]=t,e=0;e<t.length;e++)qe.add(t[e])}var Qe,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(a=t,Q.call(et,a)||!Q.call(Ze,a)&&(Je.test(a)?et[a]=!0:(Ze[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function at(e){if(void 0===Qe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Xe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Qe+e+Xe}var ot=!1;function it(e,t){if(!e||ot)return"";ot=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}}else{try{throw Error()}catch(i){r=i}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===c.length)for(r=s.length-1,a=c.length-1;1<=r&&0<=a&&s[r]!==c[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==c[a]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=a);break}}}finally{ot=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?at(n):""}function lt(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return it(e.type,!1);case 11:return it(e.type.render,!1);case 1:return it(e.type,!0);case 31:return at("Activity");default:return""}}function st(e){try{var t="";do{t+=lt(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var mt=/[\n"\\]/g;function ht(e){return e.replace(mt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function vt(e,t,n,r,a,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?bt(e,i,ct(t)):null!=n?bt(e,i,ct(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ct(l):e.removeAttribute("name")}function gt(e,t,n,r,a,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i)}function bt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(i(92));if(z(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Pt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Et(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Et(e,o,t[o])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _t(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function Nt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Rt=null,zt=null;function Ot(e){var t=Be(e);if(t&&(e=t.stateNode)){var n=e[ze]||null;e:switch(e=t.stateNode,t.type){case"input":if(vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ze]||null;if(!a)throw Error(i(90));vt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&yt(e,!!n.multiple,t,!1)}}}var Lt=!1;function Mt(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==Rt||null!==zt)&&($c(),Rt&&(t=Rt,e=zt,zt=Rt=null,Ot(t),e)))for(t=0;t<e.length;t++)Ot(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[ze]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var It=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Dt=!1;if(It)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch(Of){Dt=!1}var $t=null,Bt=null,Ht=null;function Wt(){if(Ht)return Ht;var e,t,n=Bt,r=n.length,a="value"in $t?$t.value:$t.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Ht=a.slice(e,1<t?1-t:void 0)}function Vt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Gt(){return!1}function Kt(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?qt:Gt,this.isPropagationStopped=Gt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Yt,Qt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Kt(Jt),en=f({},Jt,{view:0,detail:0}),tn=Kt(en),nn=f({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Yt=e.screenX-Xt.screenX,Qt=e.screenY-Xt.screenY):Qt=Yt=0,Xt=e),Yt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),rn=Kt(nn),an=Kt(f({},nn,{dataTransfer:0})),on=Kt(f({},en,{relatedTarget:0})),ln=Kt(f({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),sn=Kt(f({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Kt(f({},Jt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=fn[e])&&!!t[e]}function mn(){return pn}var hn=Kt(f({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Vt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mn,charCode:function(e){return"keypress"===e.type?Vt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Vt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),vn=Kt(f({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),gn=Kt(f({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mn})),bn=Kt(f({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),yn=Kt(f({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Kt(f({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=It&&"CompositionEvent"in window,kn=null;It&&"documentMode"in document&&(kn=document.documentMode);var En=It&&"TextEvent"in window&&!kn,Pn=It&&(!Sn||kn&&8<kn&&11>=kn),Cn=String.fromCharCode(32),jn=!1;function Tn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _n(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var An=!1;var Nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nn[e.type]:"textarea"===t}function zn(e,t,n,r){Rt?zt?zt.push(r):zt=[r]:Rt=r,0<(t=Wu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Ln=null;function Mn(e){Mu(e,0)}function Fn(e){if(ft(He(e)))return e}function In(e,t){if("change"===e)return t}var Dn=!1;if(It){var Un;if(It){var $n="oninput"in document;if(!$n){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),$n="function"===typeof Bn.oninput}Un=$n}else Un=!1;Dn=Un&&(!document.documentMode||9<document.documentMode)}function Hn(){On&&(On.detachEvent("onpropertychange",Wn),Ln=On=null)}function Wn(e){if("value"===e.propertyName&&Fn(Ln)){var t=[];zn(t,Ln,e,Nt(e)),Mt(Mn,t)}}function Vn(e,t,n){"focusin"===e?(Hn(),Ln=n,(On=t).attachEvent("onpropertychange",Wn)):"focusout"===e&&Hn()}function qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(Ln)}function Gn(e,t){if("click"===e)return Fn(t)}function Kn(e,t){if("input"===e||"change"===e)return Fn(t)}var Yn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Qn(e,t){if(Yn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Q.call(t,a)||!Yn(e[a],t[a]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=It&&"documentMode"in document&&11>=document.documentMode,rr=null,ar=null,or=null,ir=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ir||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},or&&Qn(or,r)||(or=r,0<(r=Wu(ar,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},ur={},dr={};function fr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}It&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var pr=fr("animationend"),mr=fr("animationiteration"),hr=fr("animationstart"),vr=fr("transitionrun"),gr=fr("transitionstart"),br=fr("transitioncancel"),yr=fr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){xr.set(e,t),Ke(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function Er(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:st(t)},kr.set(e,t),t)}return{value:e,source:t,stack:st(t)}}var Pr=[],Cr=0,jr=0;function Tr(){for(var e=Cr,t=jr=Cr=0;t<e;){var n=Pr[t];Pr[t++]=null;var r=Pr[t];Pr[t++]=null;var a=Pr[t];Pr[t++]=null;var o=Pr[t];if(Pr[t++]=null,null!==r&&null!==a){var i=r.pending;null===i?a.next=a:(a.next=i.next,i.next=a),r.pending=a}0!==o&&Rr(n,a,o)}}function _r(e,t,n,r){Pr[Cr++]=e,Pr[Cr++]=t,Pr[Cr++]=n,Pr[Cr++]=r,jr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Ar(e,t,n,r){return _r(e,t,n,r),zr(e)}function Nr(e,t){return _r(e,null,null,t),zr(e)}function Rr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-pe(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function zr(e){if(50<Rc)throw Rc=0,zc=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Or={};function Lr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mr(e,t,n,r){return new Lr(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ir(e,t){var n=e.alternate;return null===n?((n=Mr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Dr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ur(e,t,n,r,a,o){var l=0;if(r=e,"function"===typeof e)Fr(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case j:return(e=Mr(31,n,t,a)).elementType=j,e.lanes=o,e;case v:return $r(n.children,a,o,t);case g:l=8,a|=24;break;case b:return(e=Mr(12,n,t,2|a)).elementType=b,e.lanes=o,e;case k:return(e=Mr(13,n,t,a)).elementType=k,e.lanes=o,e;case E:return(e=Mr(19,n,t,a)).elementType=E,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case y:case w:l=10;break e;case x:l=9;break e;case S:l=11;break e;case P:l=14;break e;case C:l=16,r=null;break e}l=29,n=Error(i(130,null===e?"null":typeof e,"")),r=null}return(t=Mr(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function $r(e,t,n,r){return(e=Mr(7,e,r,t)).lanes=n,e}function Br(e,t,n){return(e=Mr(6,e,null,t)).lanes=n,e}function Hr(e,t,n){return(t=Mr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wr=[],Vr=0,qr=null,Gr=0,Kr=[],Yr=0,Qr=null,Xr=1,Jr="";function Zr(e,t){Wr[Vr++]=Gr,Wr[Vr++]=qr,qr=e,Gr=t}function ea(e,t,n){Kr[Yr++]=Xr,Kr[Yr++]=Jr,Kr[Yr++]=Qr,Qr=e;var r=Xr;e=Jr;var a=32-pe(r)-1;r&=~(1<<a),n+=1;var o=32-pe(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Xr=1<<32-pe(t)+a|n<<a|r,Jr=o+e}else Xr=1<<o|n<<a|r,Jr=e}function ta(e){null!==e.return&&(Zr(e,1),ea(e,1,0))}function na(e){for(;e===qr;)qr=Wr[--Vr],Wr[Vr]=null,Gr=Wr[--Vr],Wr[Vr]=null;for(;e===Qr;)Qr=Kr[--Yr],Kr[Yr]=null,Jr=Kr[--Yr],Kr[Yr]=null,Xr=Kr[--Yr],Kr[Yr]=null}var ra=null,aa=null,oa=!1,ia=null,la=!1,sa=Error(i(519));function ca(e){throw ha(Er(Error(i(418,"")),e)),sa}function ua(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Re]=e,t[ze]=r,n){case"dialog":Fu("cancel",t),Fu("close",t);break;case"iframe":case"object":case"embed":Fu("load",t);break;case"video":case"audio":for(n=0;n<Ou.length;n++)Fu(Ou[n],t);break;case"source":Fu("error",t);break;case"img":case"image":case"link":Fu("error",t),Fu("load",t);break;case"details":Fu("toggle",t);break;case"input":Fu("invalid",t),gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Fu("invalid",t);break;case"textarea":Fu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Qu(t.textContent,n)?(null!=r.popover&&(Fu("beforetoggle",t),Fu("toggle",t)),null!=r.onScroll&&Fu("scroll",t),null!=r.onScrollEnd&&Fu("scrollend",t),null!=r.onClick&&(t.onclick=Xu),t=!0):t=!1,t||ca(e)}function da(e){for(ra=e.return;ra;)switch(ra.tag){case 5:case 13:return void(la=!1);case 27:case 3:return void(la=!0);default:ra=ra.return}}function fa(e){if(e!==ra)return!1;if(!oa)return da(e),oa=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||id(e.type,e.memoizedProps)),t=!t),t&&aa&&ca(e),da(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){aa=gd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}aa=null}}else 27===n?(n=aa,pd(e.type)?(e=bd,bd=null,aa=e):aa=n):aa=ra?gd(e.stateNode.nextSibling):null;return!0}function pa(){aa=ra=null,oa=!1}function ma(){var e=ia;return null!==e&&(null===yc?yc=e:yc.push.apply(yc,e),ia=null),e}function ha(e){null===ia?ia=[e]:ia.push(e)}var va=D(null),ga=null,ba=null;function ya(e,t,n){$(va,t._currentValue),t._currentValue=n}function xa(e){e._currentValue=va.current,U(va)}function wa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sa(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var l=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),wa(o.return,n,e),r||(l=null);break e}o=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(o=l.alternate)&&(o.lanes|=n),wa(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function ka(e,t,n,r){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=a.type;Yn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===V.current){if(null===(l=a.alternate))throw Error(i(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Kd):e=[Kd])}a=a.return}null!==e&&Sa(t,e,n,r),t.flags|=262144}function Ea(e){for(e=e.firstContext;null!==e;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){ga=e,ba=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ca(e){return Ta(ga,e)}function ja(e,t){return null===ga&&Pa(e),Ta(e,t)}function Ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===ba){if(null===e)throw Error(i(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return n}var _a="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Aa=r.unstable_scheduleCallback,Na=r.unstable_NormalPriority,Ra={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function za(){return{controller:new _a,data:new Map,refCount:0}}function Oa(e){e.refCount--,0===e.refCount&&Aa(Na,function(){e.controller.abort()})}var La=null,Ma=0,Fa=0,Ia=null;function Da(){if(0===--Ma&&null!==La){null!==Ia&&(Ia.status="fulfilled");var e=La;La=null,Fa=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ua=O.S;O.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===La){var n=La=[];Ma=0,Fa=_u(),Ia={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ma++,t.then(Da,Da)}(0,t),null!==Ua&&Ua(e,t)};var $a=D(null);function Ba(){var e=$a.current;return null!==e?e:rc.pooledCache}function Ha(e,t){$($a,null===t?$a.current:t.pool)}function Wa(){var e=Ba();return null===e?null:{parent:Ra._currentValue,pool:e}}var Va=Error(i(460)),qa=Error(i(474)),Ga=Error(i(542)),Ka={then:function(){}};function Ya(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Qa(){}function Xa(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Qa,Qa),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Qa,Qa);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e}throw Ja=t,Va}}var Ja=null;function Za(){if(null===Ja)throw Error(i(459));var e=Ja;return Ja=null,e}function eo(e){if(e===Va||e===Ga)throw Error(i(483))}var to=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ao(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=zr(e),Rr(e,null,n),t}return _r(e,r,t,n),zr(e)}function io(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,je(e,n)}}function lo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var so=!1;function co(){if(so){if(null!==Ia)throw Ia}}function uo(e,t,n,r){so=!1;var a=e.updateQueue;to=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,u=c=s=null,l=o;;){var p=-536870913&l.lane,m=p!==l.lane;if(m?(oc&p)===p:(r&p)===p){0!==p&&p===Fa&&(so=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,v=l;p=t;var g=n;switch(v.tag){case 1:if("function"===typeof(h=v.payload)){d=h.call(g,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=v.payload)?h.call(g,d,p):h)||void 0===p)break e;d=f({},d,p);break e;case 2:to=!0}}null!==(p=l.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=a.callbacks)?a.callbacks=[p]:m.push(p))}else m={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=m,s=d):u=u.next=m,i|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(m=l).next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===o&&(a.shared.lanes=0),pc|=i,e.lanes=i,e.memoizedState=d}}function fo(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function po(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)fo(n[e],t)}var mo=D(null),ho=D(0);function vo(e,t){$(ho,e=dc),$(mo,t),dc=e|t.baseLanes}function go(){$(ho,dc),$(mo,mo.current)}function bo(){dc=ho.current,U(mo),U(ho)}var yo=0,xo=null,wo=null,So=null,ko=!1,Eo=!1,Po=!1,Co=0,jo=0,To=null,_o=0;function Ao(){throw Error(i(321))}function No(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function Ro(e,t,n,r,a,o){return yo=o,xo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=null===e||null===e.memoizedState?qi:Gi,Po=!1,o=n(r,a),Po=!1,Eo&&(o=Oo(t,n,r,a)),zo(e),o}function zo(e){O.H=Vi;var t=null!==wo&&null!==wo.next;if(yo=0,So=wo=xo=null,ko=!1,jo=0,To=null,t)throw Error(i(300));null===e||jl||null!==(e=e.dependencies)&&Ea(e)&&(jl=!0)}function Oo(e,t,n,r){xo=e;var a=0;do{if(Eo&&(To=null),jo=0,Eo=!1,25<=a)throw Error(i(301));if(a+=1,So=wo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}O.H=Ki,o=t(n,r)}while(Eo);return o}function Lo(){var e=O.H,t=e.useState()[0];return t="function"===typeof t.then?$o(t):t,e=e.useState()[0],(null!==wo?wo.memoizedState:null)!==e&&(xo.flags|=1024),t}function Mo(){var e=0!==Co;return Co=0,e}function Fo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Io(e){if(ko){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ko=!1}yo=0,So=wo=xo=null,Eo=!1,jo=Co=0,To=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===So?xo.memoizedState=So=e:So=So.next=e,So}function Uo(){if(null===wo){var e=xo.alternate;e=null!==e?e.memoizedState:null}else e=wo.next;var t=null===So?xo.memoizedState:So.next;if(null!==t)So=t,wo=e;else{if(null===e){if(null===xo.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(wo=e).memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},null===So?xo.memoizedState=So=e:So=So.next=e}return So}function $o(e){var t=jo;return jo+=1,null===To&&(To=[]),e=Xa(To,e,t),t=xo,null===(null===So?t.memoizedState:So.next)&&(t=t.alternate,O.H=null===t||null===t.memoizedState?qi:Gi),e}function Bo(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return $o(e);if(e.$$typeof===w)return Ca(e)}throw Error(i(438,String(e)))}function Ho(e){var t=null,n=xo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Wo(e,t){return"function"===typeof t?t(e):t}function Vo(e){return qo(Uo(),wo,e)}function qo(e,t,n){var r=e.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=l=null,c=null,u=t=a.next,d=!1;do{var f=-536870913&u.lane;if(f!==u.lane?(oc&f)===f:(yo&f)===f){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Fa&&(d=!0);else{if((yo&p)===p){u=u.next,p===Fa&&(d=!0);continue}f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=o):c=c.next=f,xo.lanes|=p,pc|=p}f=u.action,Po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,xo.lanes|=f,pc|=f;u=u.next}while(null!==u&&u!==t);if(null===c?l=o:c.next=s,!Yn(o,e.memoizedState)&&(jl=!0,d&&null!==(n=Ia)))throw n;e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Go(e){var t=Uo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);Yn(o,t.memoizedState)||(jl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ko(e,t,n){var r=xo,a=Uo(),o=oa;if(o){if(void 0===n)throw Error(i(407));n=n()}else n=t();var l=!Yn((wo||a).memoizedState,n);if(l&&(a.memoizedState=n,jl=!0),a=a.queue,gi(2048,8,Xo.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==So&&1&So.memoizedState.tag){if(r.flags|=2048,mi(9,{destroy:void 0,resource:void 0},Qo.bind(null,r,a,n,t),null),null===rc)throw Error(i(349));o||0!==(124&yo)||Yo(r,t,n)}return n}function Yo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Qo(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Zo(e)}function Xo(e,t,n){return n(function(){Jo(t)&&Zo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch(r){return!0}}function Zo(e){var t=Nr(e,2);null!==t&&Mc(t,e,2)}function ei(e){var t=Do();if("function"===typeof e){var n=e;if(e=n(),Po){fe(!0);try{n()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:e},t}function ti(e,t,n,r){return e.baseState=n,qo(e,wo,"function"===typeof r?r:Wo)}function ni(e,t,n,r,a){if(Bi(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==O.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,ri(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ri(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=O.T,i={};O.T=i;try{var l=n(a,r),s=O.S;null!==s&&s(i,l),ai(e,t,l)}catch(c){ii(e,t,c)}finally{O.T=o}}else try{ai(e,t,o=n(a,r))}catch(u){ii(e,t,u)}}function ai(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){oi(e,t,n)},function(n){return ii(e,t,n)}):oi(e,t,n)}function oi(e,t,n){t.status="fulfilled",t.value=n,li(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ri(e,n)))}function ii(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,li(t),t=t.next}while(t!==r)}e.action=null}function li(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function si(e,t){return t}function ci(e,t){if(oa){var n=rc.formState;if(null!==n){e:{var r=xo;if(oa){if(aa){t:{for(var a=aa,o=la;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=gd(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){aa=gd(a.nextSibling),r="F!"===a.data;break e}}ca(r)}r=!1}r&&(t=n[0])}}return(n=Do()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:t},n.queue=r,n=Di.bind(null,xo,r),r.dispatch=n,r=ei(!1),o=$i.bind(null,xo,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Do()).queue=a,n=ni.bind(null,xo,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function ui(e){return di(Uo(),wo,e)}function di(e,t,n){if(t=qo(e,t,si)[0],e=Vo(Wo)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=$o(t)}catch(i){if(i===Va)throw Ga;throw i}else r=t;var a=(t=Uo()).queue,o=a.dispatch;return n!==t.memoizedState&&(xo.flags|=2048,mi(9,{destroy:void 0,resource:void 0},fi.bind(null,a,n),null)),[r,o,e]}function fi(e,t){e.action=t}function pi(e){var t=Uo(),n=wo;if(null!==n)return di(t,n,e);Uo(),t=t.memoizedState;var r=(n=Uo()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function mi(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function hi(){return Uo().memoizedState}function vi(e,t,n,r){var a=Do();r=void 0===r?null:r,xo.flags|=e,a.memoizedState=mi(1|t,{destroy:void 0,resource:void 0},n,r)}function gi(e,t,n,r){var a=Uo();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==wo&&null!==r&&No(r,wo.memoizedState.deps)?a.memoizedState=mi(t,o,n,r):(xo.flags|=e,a.memoizedState=mi(1|t,o,n,r))}function bi(e,t){vi(8390656,8,e,t)}function yi(e,t){gi(2048,8,e,t)}function xi(e,t){return gi(4,2,e,t)}function wi(e,t){return gi(4,4,e,t)}function Si(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ki(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,gi(4,4,Si.bind(null,t,e),n)}function Ei(){}function Pi(e,t){var n=Uo();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ci(e,t){var n=Uo();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&No(t,r[1]))return r[0];if(r=e(),Po){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r}function ji(e,t,n){return void 0===n||0!==(1073741824&yo)?e.memoizedState=t:(e.memoizedState=n,e=Lc(),xo.lanes|=e,pc|=e,n)}function Ti(e,t,n,r){return Yn(n,t)?n:null!==mo.current?(e=ji(e,n,r),Yn(e,t)||(jl=!0),e):0===(42&yo)?(jl=!0,e.memoizedState=n):(e=Lc(),xo.lanes|=e,pc|=e,t)}function _i(e,t,n,r,a){var o=L.p;L.p=0!==o&&8>o?o:8;var i=O.T,l={};O.T=l,$i(e,!1,t,n);try{var s=a(),c=O.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)Ui(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),Oc());else Ui(e,t,r,Oc())}catch(u){Ui(e,t,{then:function(){},status:"rejected",reason:u},Oc())}finally{L.p=o,O.T=i}}function Ai(){}function Ni(e,t,n,r){if(5!==e.tag)throw Error(i(476));var a=Ri(e).queue;_i(e,a,t,M,null===n?Ai:function(){return zi(e),n(r)})}function Ri(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:M},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function zi(e){Ui(e,Ri(e).next.queue,{},Oc())}function Oi(){return Ca(Kd)}function Li(){return Uo().memoizedState}function Mi(){return Uo().memoizedState}function Fi(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Oc(),r=oo(t,e=ao(n),n);return null!==r&&(Mc(r,t,n),io(r,t,n)),t={cache:za()},void(e.payload=t)}t=t.return}}function Ii(e,t,n){var r=Oc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Bi(e)?Hi(t,n):null!==(n=Ar(e,t,n,r))&&(Mc(n,e,r),Wi(n,t,r))}function Di(e,t,n){Ui(e,t,n,Oc())}function Ui(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))Hi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,Yn(l,i))return _r(e,t,a,0),null===rc&&Tr(),!1}catch(s){}if(null!==(n=Ar(e,t,a,r)))return Mc(n,e,r),Wi(n,t,r),!0}return!1}function $i(e,t,n,r){if(r={lane:2,revertLane:_u(),action:r,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(i(479))}else null!==(t=Ar(e,n,r,2))&&Mc(t,e,2)}function Bi(e){var t=e.alternate;return e===xo||null!==t&&t===xo}function Hi(e,t){Eo=ko=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wi(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,je(e,n)}}var Vi={readContext:Ca,use:Bo,useCallback:Ao,useContext:Ao,useEffect:Ao,useImperativeHandle:Ao,useLayoutEffect:Ao,useInsertionEffect:Ao,useMemo:Ao,useReducer:Ao,useRef:Ao,useState:Ao,useDebugValue:Ao,useDeferredValue:Ao,useTransition:Ao,useSyncExternalStore:Ao,useId:Ao,useHostTransitionStatus:Ao,useFormState:Ao,useActionState:Ao,useOptimistic:Ao,useMemoCache:Ao,useCacheRefresh:Ao},qi={readContext:Ca,use:Bo,useCallback:function(e,t){return Do().memoizedState=[e,void 0===t?null:t],e},useContext:Ca,useEffect:bi,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,vi(4194308,4,Si.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){vi(4,2,e,t)},useMemo:function(e,t){var n=Do();t=void 0===t?null:t;var r=e();if(Po){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(void 0!==n){var a=n(t);if(Po){fe(!0);try{n(t)}finally{fe(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Ii.bind(null,xo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Do().memoizedState=e},useState:function(e){var t=(e=ei(e)).queue,n=Di.bind(null,xo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ei,useDeferredValue:function(e,t){return ji(Do(),e,t)},useTransition:function(){var e=ei(!1);return e=_i.bind(null,xo,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xo,a=Do();if(oa){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===rc)throw Error(i(349));0!==(124&oc)||Yo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,bi(Xo.bind(null,r,o,e),[e]),r.flags|=2048,mi(9,{destroy:void 0,resource:void 0},Qo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=rc.identifierPrefix;if(oa){var n=Jr;t="\xab"+t+"R"+(n=(Xr&~(1<<32-pe(Xr)-1)).toString(32)+n),0<(n=Co++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=_o++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Oi,useFormState:ci,useActionState:ci,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=$i.bind(null,xo,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ho,useCacheRefresh:function(){return Do().memoizedState=Fi.bind(null,xo)}},Gi={readContext:Ca,use:Bo,useCallback:Pi,useContext:Ca,useEffect:yi,useImperativeHandle:ki,useInsertionEffect:xi,useLayoutEffect:wi,useMemo:Ci,useReducer:Vo,useRef:hi,useState:function(){return Vo(Wo)},useDebugValue:Ei,useDeferredValue:function(e,t){return Ti(Uo(),wo.memoizedState,e,t)},useTransition:function(){var e=Vo(Wo)[0],t=Uo().memoizedState;return["boolean"===typeof e?e:$o(e),t]},useSyncExternalStore:Ko,useId:Li,useHostTransitionStatus:Oi,useFormState:ui,useActionState:ui,useOptimistic:function(e,t){return ti(Uo(),0,e,t)},useMemoCache:Ho,useCacheRefresh:Mi},Ki={readContext:Ca,use:Bo,useCallback:Pi,useContext:Ca,useEffect:yi,useImperativeHandle:ki,useInsertionEffect:xi,useLayoutEffect:wi,useMemo:Ci,useReducer:Go,useRef:hi,useState:function(){return Go(Wo)},useDebugValue:Ei,useDeferredValue:function(e,t){var n=Uo();return null===wo?ji(n,e,t):Ti(n,wo.memoizedState,e,t)},useTransition:function(){var e=Go(Wo)[0],t=Uo().memoizedState;return["boolean"===typeof e?e:$o(e),t]},useSyncExternalStore:Ko,useId:Li,useHostTransitionStatus:Oi,useFormState:pi,useActionState:pi,useOptimistic:function(e,t){var n=Uo();return null!==wo?ti(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ho,useCacheRefresh:Mi},Yi=null,Qi=0;function Xi(e){var t=Qi;return Qi+=1,null===Yi&&(Yi=[]),Xa(Yi,e,t)}function Ji(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zi(e,t){if(t.$$typeof===p)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){return(0,e._init)(e._payload)}function tl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Ir(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Br(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===v?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===C&&el(o)===t.type)?(Ji(t=a(t,n.props),n),t.return=e,t):(Ji(t=Ur(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=$r(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Br(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case m:return Ji(n=Ur(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case h:return(t=Hr(t,e.mode,n)).return=e,t;case C:return f(e,t=(0,t._init)(t._payload),n)}if(z(t)||A(t))return(t=$r(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,Xi(t),n);if(t.$$typeof===w)return f(e,ja(e,t),n);Zi(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case m:return n.key===a?c(e,t,n,r):null;case h:return n.key===a?u(e,t,n,r):null;case C:return p(e,t,n=(a=n._init)(n._payload),r)}if(z(n)||A(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,Xi(n),r);if(n.$$typeof===w)return p(e,t,ja(e,n),r);Zi(e,n)}return null}function g(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case m:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case h:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case C:return g(e,t,n,r=(0,r._init)(r._payload),a)}if(z(r)||A(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return g(e,t,n,Xi(r),a);if(r.$$typeof===w)return g(e,t,n,ja(t,r),a);Zi(t,r)}return null}function b(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===v&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case m:e:{for(var y=u.key;null!==c;){if(c.key===y){if((y=u.type)===v){if(7===c.tag){n(s,c.sibling),(d=a(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===y||"object"===typeof y&&null!==y&&y.$$typeof===C&&el(y)===c.type){n(s,c.sibling),Ji(d=a(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===v?((d=$r(u.props.children,s.mode,d,u.key)).return=s,s=d):(Ji(d=Ur(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case h:e:{for(y=u.key;null!==c;){if(c.key===y){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=a(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=Hr(u,s.mode,d)).return=s,s=d}return l(s);case C:return b(s,c,u=(y=u._init)(u._payload),d)}if(z(u))return function(a,i,l,s){for(var c=null,u=null,d=i,m=i=0,h=null;null!==d&&m<l.length;m++){d.index>m?(h=d,d=null):h=d.sibling;var v=p(a,d,l[m],s);if(null===v){null===d&&(d=h);break}e&&d&&null===v.alternate&&t(a,d),i=o(v,i,m),null===u?c=v:u.sibling=v,u=v,d=h}if(m===l.length)return n(a,d),oa&&Zr(a,m),c;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(i=o(d,i,m),null===u?c=d:u.sibling=d,u=d);return oa&&Zr(a,m),c}for(d=r(d);m<l.length;m++)null!==(h=g(d,a,m,l[m],s))&&(e&&null!==h.alternate&&d.delete(null===h.key?m:h.key),i=o(h,i,m),null===u?c=h:u.sibling=h,u=h);return e&&d.forEach(function(e){return t(a,e)}),oa&&Zr(a,m),c}(s,c,u,d);if(A(u)){if("function"!==typeof(y=A(u)))throw Error(i(150));return function(a,l,s,c){if(null==s)throw Error(i(151));for(var u=null,d=null,m=l,h=l=0,v=null,b=s.next();null!==m&&!b.done;h++,b=s.next()){m.index>h?(v=m,m=null):v=m.sibling;var y=p(a,m,b.value,c);if(null===y){null===m&&(m=v);break}e&&m&&null===y.alternate&&t(a,m),l=o(y,l,h),null===d?u=y:d.sibling=y,d=y,m=v}if(b.done)return n(a,m),oa&&Zr(a,h),u;if(null===m){for(;!b.done;h++,b=s.next())null!==(b=f(a,b.value,c))&&(l=o(b,l,h),null===d?u=b:d.sibling=b,d=b);return oa&&Zr(a,h),u}for(m=r(m);!b.done;h++,b=s.next())null!==(b=g(m,a,h,b.value,c))&&(e&&null!==b.alternate&&m.delete(null===b.key?h:b.key),l=o(b,l,h),null===d?u=b:d.sibling=b,d=b);return e&&m.forEach(function(e){return t(a,e)}),oa&&Zr(a,h),u}(s,c,u=y.call(u),d)}if("function"===typeof u.then)return b(s,c,Xi(u),d);if(u.$$typeof===w)return b(s,c,ja(s,u),d);Zi(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=a(c,u)).return=s,s=d):(n(s,c),(d=Br(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,r){try{Qi=0;var a=b(e,t,n,r);return Yi=null,a}catch(i){if(i===Va||i===Ga)throw i;var o=Mr(29,i,null,e.mode);return o.lanes=r,o.return=e,o}}}var nl=tl(!0),rl=tl(!1),al=D(null),ol=null;function il(e){var t=e.alternate;$(ul,1&ul.current),$(al,e),null===ol&&(null===t||null!==mo.current||null!==t.memoizedState)&&(ol=e)}function ll(e){if(22===e.tag){if($(ul,ul.current),$(al,e),null===ol){var t=e.alternate;null!==t&&null!==t.memoizedState&&(ol=e)}}else sl()}function sl(){$(ul,ul.current),$(al,al.current)}function cl(e){U(al),ol===e&&(ol=null),U(ul)}var ul=D(0);function dl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||vd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var pl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oc(),a=ao(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=oo(e,a,r))&&(Mc(t,e,r),io(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oc(),a=ao(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=oo(e,a,r))&&(Mc(t,e,r),io(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oc(),r=ao(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=oo(e,r,n))&&(Mc(t,e,n),io(t,e,n))}};function ml(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!Qn(n,r)||!Qn(a,o))}function hl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function vl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=f({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}var gl="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function bl(e){gl(e)}function yl(e){console.error(e)}function xl(e){gl(e)}function wl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Sl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function kl(e,t,n){return(n=ao(n)).tag=3,n.payload={element:null},n.callback=function(){wl(e,t)},n}function El(e){return(e=ao(e)).tag=3,e}function Pl(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){Sl(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){Sl(t,n,r),"function"!==typeof a&&(null===Ec?Ec=new Set([this]):Ec.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Cl=Error(i(461)),jl=!1;function Tl(e,t,n,r){t.child=null===e?rl(t,null,n,r):nl(t,e.child,n,r)}function _l(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return Pa(t),r=Ro(e,t,n,i,o,a),l=Mo(),null===e||jl?(oa&&l&&ta(t),t.flags|=1,Tl(e,t,r,a),t.child):(Fo(e,t,a),Yl(e,t,a))}function Al(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Fr(o)||void 0!==o.defaultProps||null!==n.compare?((e=Ur(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Nl(e,t,o,r,a))}if(o=e.child,!Ql(e,a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:Qn)(i,r)&&e.ref===t.ref)return Yl(e,t,a)}return t.flags|=1,(e=Ir(o,r)).ref=t.ref,e.return=t,t.child=e}function Nl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(Qn(o,r)&&e.ref===t.ref){if(jl=!1,t.pendingProps=r=o,!Ql(e,a))return t.lanes=e.lanes,Yl(e,t,a);0!==(131072&e.flags)&&(jl=!0)}}return Ll(e,t,n,r,a)}function Rl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==o?o.baseLanes|n:n,null!==e){for(a=t.child=e.child,o=0;null!==a;)o=o|a.lanes|a.childLanes,a=a.sibling;t.childLanes=o&~r}else t.childLanes=0,t.child=null;return zl(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,zl(e,t,null!==o?o.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ha(0,null!==o?o.cachePool:null),null!==o?vo(t,o):go(),ll(t)}else null!==o?(Ha(0,o.cachePool),vo(t,o),sl(),t.memoizedState=null):(null!==e&&Ha(0,null),go(),sl());return Tl(e,t,a,n),t.child}function zl(e,t,n,r){var a=Ba();return a=null===a?null:{parent:Ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Ha(0,null),go(),ll(t),null!==e&&ka(e,t,r,!0),null}function Ol(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(i(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Ll(e,t,n,r,a){return Pa(t),n=Ro(e,t,n,r,void 0,a),r=Mo(),null===e||jl?(oa&&r&&ta(t),t.flags|=1,Tl(e,t,n,a),t.child):(Fo(e,t,a),Yl(e,t,a))}function Ml(e,t,n,r,a,o){return Pa(t),t.updateQueue=null,n=Oo(t,r,n,a),zo(e),r=Mo(),null===e||jl?(oa&&r&&ta(t),t.flags|=1,Tl(e,t,n,o),t.child):(Fo(e,t,o),Yl(e,t,o))}function Fl(e,t,n,r,a){if(Pa(t),null===t.stateNode){var o=Or,i=n.contextType;"object"===typeof i&&null!==i&&(o=Ca(i)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=pl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},no(t),i=n.contextType,o.context="object"===typeof i&&null!==i?Ca(i):Or,o.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(fl(t,n,i,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&pl.enqueueReplaceState(o,o.state,null),uo(t,r,o,a),co(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=vl(n,l);o.props=s;var c=o.context,u=n.contextType;i=Or,"object"===typeof u&&null!==u&&(i=Ca(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==i)&&hl(t,o,r,i),to=!1;var f=t.memoizedState;o.state=f,uo(t,r,o,a),co(),c=t.memoizedState,l||f!==c||to?("function"===typeof d&&(fl(t,n,d,r),c=t.memoizedState),(s=to||ml(t,n,s,r,f,c,i))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=i,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ro(e,t),u=vl(n,i=t.memoizedProps),o.props=u,d=t.pendingProps,f=o.context,c=n.contextType,s=Or,"object"===typeof c&&null!==c&&(s=Ca(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||f!==s)&&hl(t,o,r,s),to=!1,f=t.memoizedState,o.state=f,uo(t,r,o,a),co();var p=t.memoizedState;i!==d||f!==p||to||null!==e&&null!==e.dependencies&&Ea(e.dependencies)?("function"===typeof l&&(fl(t,n,l,r),p=t.memoizedState),(u=to||ml(t,n,u,r,f,p,s)||null!==e&&null!==e.dependencies&&Ea(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Ol(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=nl(t,e.child,null,a),t.child=nl(t,null,n,a)):Tl(e,t,n,a),t.memoizedState=o.state,e=t.child):e=Yl(e,t,a),e}function Il(e,t,n,r){return pa(),t.flags|=256,Tl(e,t,n,r),t.child}var Dl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ul(e){return{baseLanes:e,cachePool:Wa()}}function $l(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=vc),e}function Bl(e,t,n){var r,a=t.pendingProps,o=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&ul.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(oa){if(o?il(t):sl(),oa){var s,c=aa;if(s=c){e:{for(s=c,c=la;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=gd(s.nextSibling))){c=null;break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Qr?{id:Xr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(s=Mr(18,null,null,0)).stateNode=c,s.return=t,t.child=s,ra=t,aa=null,s=!0):s=!1}s||ca(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return vd(c)?t.lanes=32:t.lanes=536870912,null;cl(t)}return c=a.children,a=a.fallback,o?(sl(),c=Wl({mode:"hidden",children:c},o=t.mode),a=$r(a,o,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,(o=t.child).memoizedState=Ul(n),o.childLanes=$l(e,r,n),t.memoizedState=Dl,a):(il(t),Hl(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(l)256&t.flags?(il(t),t.flags&=-257,t=Vl(e,t,n)):null!==t.memoizedState?(sl(),t.child=e.child,t.flags|=128,t=null):(sl(),o=a.fallback,c=t.mode,a=Wl({mode:"visible",children:a.children},c),(o=$r(o,c,n,null)).flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,nl(t,e.child,null,n),(a=t.child).memoizedState=Ul(n),a.childLanes=$l(e,r,n),t.memoizedState=Dl,t=o);else if(il(t),vd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(a=Error(i(419))).stack="",a.digest=r,ha({value:a,source:null,stack:null}),t=Vl(e,t,n)}else if(jl||ka(e,t,n,!1),r=0!==(n&e.childLanes),jl||r){if(null!==(r=rc)&&(0!==(a=0!==((a=0!==(42&(a=n&-n))?1:Te(a))&(r.suspendedLanes|n))?0:a)&&a!==s.retryLane))throw s.retryLane=a,Nr(e,a),Mc(r,e,a),Cl;"$?"===c.data||Gc(),t=Vl(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,aa=gd(c.nextSibling),ra=t,oa=!0,ia=null,la=!1,null!==e&&(Kr[Yr++]=Xr,Kr[Yr++]=Jr,Kr[Yr++]=Qr,Xr=e.id,Jr=e.overflow,Qr=t),(t=Hl(t,a.children)).flags|=4096);return t}return o?(sl(),o=a.fallback,c=t.mode,u=(s=e.child).sibling,(a=Ir(s,{mode:"hidden",children:a.children})).subtreeFlags=65011712&s.subtreeFlags,null!==u?o=Ir(u,o):(o=$r(o,c,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,null===(c=e.child.memoizedState)?c=Ul(n):(null!==(s=c.cachePool)?(u=Ra._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=Wa(),c={baseLanes:c.baseLanes|n,cachePool:s}),o.memoizedState=c,o.childLanes=$l(e,r,n),t.memoizedState=Dl,a):(il(t),e=(n=e.child).sibling,(n=Ir(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Hl(e,t){return(t=Wl({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Wl(e,t){return(e=Mr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vl(e,t,n){return nl(t,e.child,null,n),(e=Hl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ql(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wa(e.return,t,n)}function Gl(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Kl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Tl(e,t,r.children,n),0!==(2&(r=ul.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ql(e,n,t);else if(19===e.tag)ql(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch($(ul,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===dl(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Gl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===dl(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Gl(t,!0,n,null,o);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),pc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ka(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ir(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ir(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ql(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ea(e))}function Xl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)jl=!0;else{if(!Ql(e,n)&&0===(128&t.flags))return jl=!1,function(e,t,n){switch(t.tag){case 3:q(t,t.stateNode.containerInfo),ya(0,Ra,e.memoizedState.cache),pa();break;case 27:case 5:K(t);break;case 4:q(t,t.stateNode.containerInfo);break;case 10:ya(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(il(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Bl(e,t,n):(il(t),null!==(e=Yl(e,t,n))?e.sibling:null);il(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(ka(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return Kl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),$(ul,ul.current),r)break;return null;case 22:case 23:return t.lanes=0,Rl(e,t,n);case 24:ya(0,Ra,e.memoizedState.cache)}return Yl(e,t,n)}(e,t,n);jl=0!==(131072&e.flags)}else jl=!1,oa&&0!==(1048576&t.flags)&&ea(t,Gr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((a=r.$$typeof)===S){t.tag=11,t=_l(null,t,r,e,n);break e}if(a===P){t.tag=14,t=Al(null,t,r,e,n);break e}}throw t=R(r)||r,Error(i(306,t,""))}Fr(r)?(e=vl(r,e),t.tag=1,t=Fl(null,t,r,e,n)):(t.tag=0,t=Ll(null,t,r,e,n))}return t;case 0:return Ll(e,t,t.type,t.pendingProps,n);case 1:return Fl(e,t,r=t.type,a=vl(r,t.pendingProps),n);case 3:e:{if(q(t,t.stateNode.containerInfo),null===e)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,ro(e,t),uo(t,r,null,n);var l=t.memoizedState;if(r=l.cache,ya(0,Ra,r),r!==o.cache&&Sa(t,[Ra],n,!0),co(),r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Il(e,t,r,n);break e}if(r!==a){ha(a=Er(Error(i(424)),t)),t=Il(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(aa=gd(e.firstChild),ra=t,oa=!0,ia=null,la=!0,n=rl(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),r===a){t=Yl(e,t,n);break e}Tl(e,t,r,n)}t=t.child}return t;case 26:return Ol(e,t),null===e?(n=Td(t.type,null,t.pendingProps,null))?t.memoizedState=n:oa||(n=t.type,e=t.pendingProps,(r=rd(W.current).createElement(n))[Re]=t,r[ze]=e,ed(r,n,e),Ve(r),t.stateNode=r):t.memoizedState=Td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return K(t),null===e&&oa&&(r=t.stateNode=xd(t.type,t.pendingProps,W.current),ra=t,la=!0,a=aa,pd(t.type)?(bd=a,aa=gd(r.firstChild)):aa=a),Tl(e,t,t.pendingProps.children,n),Ol(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&oa&&((a=r=aa)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[De])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=gd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,la))?(t.stateNode=r,ra=t,aa=gd(r.firstChild),la=!1,a=!0):a=!1),a||ca(t)),K(t),a=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,r=o.children,id(a,o)?r=null:null!==l&&id(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=Ro(e,t,Lo,null,null,n),Kd._currentValue=a),Ol(e,t),Tl(e,t,r,n),t.child;case 6:return null===e&&oa&&((e=n=aa)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=gd(e.nextSibling)))return null}return e}(n,t.pendingProps,la))?(t.stateNode=n,ra=t,aa=null,e=!0):e=!1),e||ca(t)),null;case 13:return Bl(e,t,n);case 4:return q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=nl(t,null,r,n):Tl(e,t,r,n),t.child;case 11:return _l(e,t,t.type,t.pendingProps,n);case 7:return Tl(e,t,t.pendingProps,n),t.child;case 8:case 12:return Tl(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ya(0,t.type,r.value),Tl(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Pa(t),r=r(a=Ca(a)),t.flags|=1,Tl(e,t,r,n),t.child;case 14:return Al(e,t,t.type,t.pendingProps,n);case 15:return Nl(e,t,t.type,t.pendingProps,n);case 19:return Kl(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Wl(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Ir(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Rl(e,t,n);case 24:return Pa(t),r=Ca(Ra),null===e?(null===(a=Ba())&&(a=rc,o=za(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},no(t),ya(0,Ra,a)):(0!==(e.lanes&n)&&(ro(e,t),uo(t,null,null,n),co()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),ya(0,Ra,r)):(r=o.cache,ya(0,Ra,r),r!==a.cache&&Sa(t,[Ra],n,!0))),Tl(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Jl(e){e.flags|=4}function Zl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!$d(t)){if(null!==(t=al.current)&&((4194048&oc)===oc?null!==ol:(62914560&oc)!==oc&&0===(536870912&oc)||t!==ol))throw Ja=Ka,qa;e.flags|=8192}}function es(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,gc|=t)}function ts(e,t){if(!oa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ns(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rs(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ns(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xa(Ra),G(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(fa(t)?Jl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,ma())),ns(t),null;case 26:return n=t.memoizedState,null===e?(Jl(t),null!==n?(ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Jl(t),ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217):(e.memoizedProps!==r&&Jl(t),ns(t),t.flags&=-16777217),null;case 27:Y(t),n=W.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Jl(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return ns(t),null}e=B.current,fa(t)?ua(t):(e=xd(a,r,n),t.stateNode=e,Jl(t))}return ns(t),null;case 5:if(Y(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Jl(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return ns(t),null}if(e=B.current,fa(t))ua(t);else{switch(a=rd(W.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[Re]=t,e[ze]=r;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Jl(t)}}return ns(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Jl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(e=W.current,fa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ra))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Re]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Qu(e.nodeValue,n)))||ca(t)}else(e=rd(e).createTextNode(r))[Re]=t,t.stateNode=e}return ns(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[Re]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ns(t),a=!1}else a=ma(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(cl(t),t):(cl(t),null)}if(cl(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool);var o=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),es(t,t.updateQueue),ns(t),null;case 4:return G(),null===e&&Uu(t.stateNode.containerInfo),ns(t),null;case 10:return xa(t.type),ns(t),null;case 19:if(U(ul),null===(a=t.memoizedState))return ns(t),null;if(r=0!==(128&t.flags),null===(o=a.rendering))if(r)ts(a,!1);else{if(0!==fc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=dl(e))){for(t.flags|=128,ts(a,!1),e=o.updateQueue,t.updateQueue=e,es(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Dr(n,e),n=n.sibling;return $(ul,1&ul.current|2),t.child}e=e.sibling}null!==a.tail&&te()>Sc&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=dl(o))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,es(t,e),ts(a,!0),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!oa)return ns(t),null}else 2*te()-a.renderingStartTime>Sc&&536870912!==n&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=a.last)?e.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=te(),t.sibling=null,e=ul.current,$(ul,r?1&e|2:1&e),t):(ns(t),null);case 22:case 23:return cl(t),bo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ns(t),6&t.subtreeFlags&&(t.flags|=8192)):ns(t),null!==(n=t.updateQueue)&&es(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&U($a),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xa(Ra),ns(t),null;case 25:case 30:return null}throw Error(i(156,t.tag))}function as(e,t){switch(na(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xa(Ra),G(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Y(t),null;case 13:if(cl(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return U(ul),null;case 4:return G(),null;case 10:return xa(t.type),null;case 22:case 23:return cl(t),bo(),null!==e&&U($a),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xa(Ra),null;default:return null}}function os(e,t){switch(na(t),t.tag){case 3:xa(Ra),G();break;case 26:case 27:case 5:Y(t);break;case 4:G();break;case 13:cl(t);break;case 19:U(ul);break;case 10:xa(t.type);break;case 22:case 23:cl(t),bo(),null!==e&&U($a);break;case 24:xa(Ra)}}function is(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,i=n.inst;r=o(),i.destroy=r}n=n.next}while(n!==a)}}catch(l){uu(t,t.return,l)}}function ls(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,a=t;var s=n,c=l;try{c()}catch(u){uu(a,s,u)}}}r=r.next}while(r!==o)}}catch(u){uu(t,t.return,u)}}function ss(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{po(t,n)}catch(r){uu(e,e.return,r)}}}function cs(e,t,n){n.props=vl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function us(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){uu(e,t,a)}}function ds(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){uu(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){uu(e,t,o)}else n.current=null}function fs(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){uu(e,e.return,a)}}function ps(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,l=null,s=null,c=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&null!=f)switch(m){case"checked":case"value":break;case"defaultValue":c=f;default:r.hasOwnProperty(m)||Ju(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=m||null!=f))switch(p){case"type":o=m;break;case"name":a=m;break;case"checked":u=m;break;case"defaultChecked":d=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(i(137,t));break;default:m!==f&&Ju(e,t,p,m,r,f)}}return void vt(e,l,s,c,u,d,o,a);case"select":for(o in m=l=s=p=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":m=c;default:r.hasOwnProperty(o)||Ju(e,t,o,null,r,c)}for(a in r)if(o=r[a],c=n[a],r.hasOwnProperty(a)&&(null!=o||null!=c))switch(a){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&Ju(e,t,a,o,r,c)}return t=s,n=l,r=m,void(null!=p?yt(e,!!n,p,!1):!!r!==!!n&&(null!=t?yt(e,!!n,t,!0):yt(e,!!n,n?[]:"",!1)));case"textarea":for(s in m=p=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Ju(e,t,s,null,r,a)}for(l in r)if(a=r[l],o=n[l],r.hasOwnProperty(l)&&(null!=a||null!=o))switch(l){case"value":p=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(i(91));break;default:a!==o&&Ju(e,t,l,a,r,o)}return void xt(e,p,m);case"option":for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&null!=p&&!r.hasOwnProperty(h))if("selected"===h)e.selected=!1;else Ju(e,t,h,null,r,p);for(c in r)if(p=r[c],m=n[c],r.hasOwnProperty(c)&&p!==m&&(null!=p||null!=m))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Ju(e,t,c,p,r,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in n)p=n[v],n.hasOwnProperty(v)&&null!=p&&!r.hasOwnProperty(v)&&Ju(e,t,v,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(null!=p||null!=m))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(i(137,t));break;default:Ju(e,t,u,p,r,m)}return;default:if(Ct(t)){for(var g in n)p=n[g],n.hasOwnProperty(g)&&void 0!==p&&!r.hasOwnProperty(g)&&Zu(e,t,g,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||void 0===p&&void 0===m||Zu(e,t,d,p,r,m);return}}for(var b in n)p=n[b],n.hasOwnProperty(b)&&null!=p&&!r.hasOwnProperty(b)&&Ju(e,t,b,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||null==p&&null==m||Ju(e,t,f,p,r,m)}(r,e.type,n,t),r[ze]=t}catch(a){uu(e,e.return,a)}}function ms(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&pd(e.type)||4===e.tag}function hs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ms(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function vs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xu));else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(vs(e,t,n),e=e.sibling;null!==e;)vs(e,t,n),e=e.sibling}function gs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(gs(e,t,n),e=e.sibling;null!==e;)gs(e,t,n),e=e.sibling}function bs(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ed(t,r,n),t[Re]=e,t[ze]=n}catch(o){uu(e,e.return,o)}}var ys=!1,xs=!1,ws=!1,Ss="function"===typeof WeakSet?WeakSet:Set,ks=null;function Es(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fs(e,n),4&r&&is(5,n);break;case 1:if(Fs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){uu(n,n.return,i)}else{var a=vl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){uu(n,n.return,l)}}64&r&&ss(n),512&r&&us(n,n.return);break;case 3:if(Fs(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{po(e,t)}catch(i){uu(n,n.return,i)}}break;case 27:null===t&&4&r&&bs(n);case 26:case 5:Fs(e,n),null===t&&4&r&&fs(n),512&r&&us(n,n.return);break;case 12:Fs(e,n);break;case 13:Fs(e,n),4&r&&As(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=mu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||ys)){t=null!==t&&null!==t.memoizedState||xs,a=ys;var o=xs;ys=r,(xs=t)&&!o?Ds(e,n,0!==(8772&n.subtreeFlags)):Fs(e,n),ys=a,xs=o}break;case 30:break;default:Fs(e,n)}}function Ps(e){var t=e.alternate;null!==t&&(e.alternate=null,Ps(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ue(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cs=null,js=!1;function Ts(e,t,n){for(n=n.child;null!==n;)_s(e,t,n),n=n.sibling}function _s(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(o){}switch(n.tag){case 26:xs||ds(n,t),Ts(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xs||ds(n,t);var r=Cs,a=js;pd(n.type)&&(Cs=n.stateNode,js=!1),Ts(e,t,n),wd(n.stateNode),Cs=r,js=a;break;case 5:xs||ds(n,t);case 6:if(r=Cs,a=js,Cs=null,Ts(e,t,n),js=a,null!==(Cs=r))if(js)try{(9===Cs.nodeType?Cs.body:"HTML"===Cs.nodeName?Cs.ownerDocument.body:Cs).removeChild(n.stateNode)}catch(i){uu(n,t,i)}else try{Cs.removeChild(n.stateNode)}catch(i){uu(n,t,i)}break;case 18:null!==Cs&&(js?(md(9===(e=Cs).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Tf(e)):md(Cs,n.stateNode));break;case 4:r=Cs,a=js,Cs=n.stateNode.containerInfo,js=!0,Ts(e,t,n),Cs=r,js=a;break;case 0:case 11:case 14:case 15:xs||ls(2,n,t),xs||ls(4,n,t),Ts(e,t,n);break;case 1:xs||(ds(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cs(n,t,r)),Ts(e,t,n);break;case 21:Ts(e,t,n);break;case 22:xs=(r=xs)||null!==n.memoizedState,Ts(e,t,n),xs=r;break;default:Ts(e,t,n)}}function As(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Tf(e)}catch(n){uu(t,t.return,n)}}function Ns(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Ss),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Ss),t;default:throw Error(i(435,e.tag))}}(e);t.forEach(function(t){var r=hu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Rs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(pd(s.type)){Cs=s.stateNode,js=!1;break e}break;case 5:Cs=s.stateNode,js=!1;break e;case 3:case 4:Cs=s.stateNode.containerInfo,js=!0;break e}s=s.return}if(null===Cs)throw Error(i(160));_s(o,l,a),Cs=null,js=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Os(t,e),t=t.sibling}var zs=null;function Os(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rs(t,e),Ls(e),4&r&&(ls(3,e,e.return),is(3,e),ls(5,e,e.return));break;case 1:Rs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),64&r&&ys&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=zs;if(Rs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[De]||o[Re]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),ed(o,r,n),o[Re]=e,Ve(o),r=o;break e;case"link":var l=Dd("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}ed(o=a.createElement(r),r,n),a.head.appendChild(o);break;case"meta":if(l=Dd("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}ed(o=a.createElement(r),r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[Re]=e,Ve(o),r=o}e.stateNode=r}else Ud(a,e.type,e.stateNode);else e.stateNode=Od(a,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?Ud(a,e.type,e.stateNode):Od(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&ps(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),null!==n&&4&r&&ps(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),32&e.flags){a=e.stateNode;try{St(a,"")}catch(m){uu(e,e.return,m)}}4&r&&null!=e.stateNode&&ps(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(ws=!0);break;case 6:if(Rs(t,e),Ls(e),4&r){if(null===e.stateNode)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){uu(e,e.return,m)}}break;case 3:if(Id=null,a=zs,zs=Ed(t.containerInfo),Rs(t,e),zs=a,Ls(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Tf(t.containerInfo)}catch(m){uu(e,e.return,m)}ws&&(ws=!1,Ms(e));break;case 4:r=zs,zs=Ed(e.stateNode.containerInfo),Rs(t,e),Ls(e),zs=r;break;case 12:default:Rs(t,e),Ls(e);break;case 13:Rs(t,e),Ls(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ns(e,r)));break;case 22:a=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=ys,d=xs;if(ys=u||a,xs=d||c,Rs(t,e),xs=d,ys=u,Ls(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||c||ys||xs||Is(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(o=c.stateNode,a)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var f=c.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(m){uu(c,c.return,m)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(m){uu(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ns(e,n))));break;case 19:Rs(t,e),Ls(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ns(e,r)));case 30:case 21:}}function Ls(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(ms(r)){n=r;break}r=r.return}if(null==n)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;gs(e,hs(e),a);break;case 5:var o=n.stateNode;32&n.flags&&(St(o,""),n.flags&=-33),gs(e,hs(e),o);break;case 3:case 4:var l=n.stateNode.containerInfo;vs(e,hs(e),l);break;default:throw Error(i(161))}}catch(s){uu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ms(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ms(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Fs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Es(e,t.alternate,t),t=t.sibling}function Is(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ls(4,t,t.return),Is(t);break;case 1:ds(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cs(t,t.return,n),Is(t);break;case 27:wd(t.stateNode);case 26:case 5:ds(t,t.return),Is(t);break;case 22:null===t.memoizedState&&Is(t);break;default:Is(t)}e=e.sibling}}function Ds(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:Ds(a,o,n),is(4,o);break;case 1:if(Ds(a,o,n),"function"===typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(a=(r=o).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)fo(s[a],l)}catch(c){uu(r,r.return,c)}}n&&64&i&&ss(o),us(o,o.return);break;case 27:bs(o);case 26:case 5:Ds(a,o,n),n&&null===r&&4&i&&fs(o),us(o,o.return);break;case 12:Ds(a,o,n);break;case 13:Ds(a,o,n),n&&4&i&&As(a,o);break;case 22:null===o.memoizedState&&Ds(a,o,n),us(o,o.return);break;case 30:break;default:Ds(a,o,n)}t=t.sibling}}function Us(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Oa(n))}function $s(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Oa(e))}function Bs(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Hs(e,t,n,r),t=t.sibling}function Hs(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bs(e,t,n,r),2048&a&&is(9,t);break;case 1:case 13:default:Bs(e,t,n,r);break;case 3:Bs(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Oa(e)));break;case 12:if(2048&a){Bs(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){uu(t,t.return,s)}}else Bs(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,null!==t.memoizedState?2&o._visibility?Bs(e,t,n,r):Vs(e,t):2&o._visibility?Bs(e,t,n,r):(o._visibility|=2,Ws(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&a&&Us(i,t);break;case 24:Bs(e,t,n,r),2048&a&&$s(t.alternate,t)}}function Ws(e,t,n,r,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,i=t,l=n,s=r,c=i.flags;switch(i.tag){case 0:case 11:case 15:Ws(o,i,l,s,a),is(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?2&u._visibility?Ws(o,i,l,s,a):Vs(o,i):(u._visibility|=2,Ws(o,i,l,s,a)),a&&2048&c&&Us(i.alternate,i);break;case 24:Ws(o,i,l,s,a),a&&2048&c&&$s(i.alternate,i);break;default:Ws(o,i,l,s,a)}t=t.sibling}}function Vs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Vs(n,r),2048&a&&Us(r.alternate,r);break;case 24:Vs(n,r),2048&a&&$s(r.alternate,r);break;default:Vs(n,r)}t=t.sibling}}var qs=8192;function Gs(e){if(e.subtreeFlags&qs)for(e=e.child;null!==e;)Ks(e),e=e.sibling}function Ks(e){switch(e.tag){case 26:Gs(e),e.flags&qs&&null!==e.memoizedState&&function(e,t,n){if(null===Bd)throw Error(i(475));var r=Bd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=_d(n.href),o=e.querySelector(Ad(a));if(o)return null!==(e=o._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Wd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,void Ve(o);o=e.ownerDocument||e,n=Nd(n),(a=Sd.get(a))&&Md(n,a),Ve(o=o.createElement("link"));var l=o;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(o,"link",n),t.instance=o}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Wd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(zs,e.memoizedState,e.memoizedProps);break;case 5:default:Gs(e);break;case 3:case 4:var t=zs;zs=Ed(e.stateNode.containerInfo),Gs(e),zs=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=qs,qs=16777216,Gs(e),qs=t):Gs(e))}}function Ys(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Qs(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ks=r,Zs(r,e)}Ys(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xs(e),e=e.sibling}function Xs(e){switch(e.tag){case 0:case 11:case 15:Qs(e),2048&e.flags&&ls(9,e,e.return);break;case 3:case 12:default:Qs(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Js(e)):Qs(e)}}function Js(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ks=r,Zs(r,e)}Ys(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ls(8,t,t.return),Js(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Js(t));break;default:Js(t)}e=e.sibling}}function Zs(e,t){for(;null!==ks;){var n=ks;switch(n.tag){case 0:case 11:case 15:ls(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Oa(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,ks=r;else e:for(n=e;null!==ks;){var a=(r=ks).sibling,o=r.return;if(Ps(r),r===n){ks=null;break e}if(null!==a){a.return=o,ks=a;break e}ks=o}}}var ec={getCacheForType:function(e){var t=Ca(Ra),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ac=null,oc=0,ic=0,lc=null,sc=!1,cc=!1,uc=!1,dc=0,fc=0,pc=0,mc=0,hc=0,vc=0,gc=0,bc=null,yc=null,xc=!1,wc=0,Sc=1/0,kc=null,Ec=null,Pc=0,Cc=null,jc=null,Tc=0,_c=0,Ac=null,Nc=null,Rc=0,zc=null;function Oc(){if(0!==(2&nc)&&0!==oc)return oc&-oc;if(null!==O.T){return 0!==Fa?Fa:_u()}return Ae()}function Lc(){0===vc&&(vc=0===(536870912&oc)||oa?Se():536870912);var e=al.current;return null!==e&&(e.flags|=32),vc}function Mc(e,t,n){(e!==rc||2!==ic&&9!==ic)&&null===e.cancelPendingCommit||(Hc(e,0),Uc(e,oc,vc,!1)),Pe(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(mc|=n),4===fc&&Uc(e,oc,vc,!1)),Su(e))}function Fc(e,t,n){if(0!==(6&nc))throw Error(i(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),a=r?function(e,t){var n=nc;nc|=2;var r=Vc(),a=qc();rc!==e||oc!==t?(kc=null,Sc=te()+500,Hc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==ic&&null!==ac){t=ac;var o=lc;t:switch(ic){case 1:ic=0,lc=null,Zc(e,t,o,1);break;case 2:case 9:if(Ya(o)){ic=0,lc=null,Jc(t);break}t=function(){2!==ic&&9!==ic||rc!==e||(ic=7),Su(e)},o.then(t,t);break e;case 3:ic=7;break e;case 4:ic=5;break e;case 7:Ya(o)?(ic=0,lc=null,Jc(t)):(ic=0,lc=null,Zc(e,t,o,7));break;case 5:var l=null;switch(ac.tag){case 26:l=ac.memoizedState;case 5:case 27:var s=ac;if(!l||$d(l)){ic=0,lc=null;var c=s.sibling;if(null!==c)ac=c;else{var u=s.return;null!==u?(ac=u,eu(u)):ac=null}break t}}ic=0,lc=null,Zc(e,t,o,5);break;case 6:ic=0,lc=null,Zc(e,t,o,6);break;case 8:Bc(),fc=6;break e;default:throw Error(i(462))}}Qc();break}catch(d){Wc(e,d)}return ba=ga=null,O.H=r,O.A=a,nc=n,null!==ac?0:(rc=null,oc=0,Tr(),fc)}(e,t):Kc(e,t,!0),o=r;;){if(0===a){cc&&!r&&Uc(e,t,0,!1);break}if(n=e.current.alternate,!o||Dc(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=bc;var c=s.current.memoizedState.isDehydrated;if(c&&(Hc(s,l).flags|=256),2!==(l=Kc(s,l,!1))){if(uc&&!c){s.errorRecoveryDisabledLanes|=o,mc|=o,a=4;break e}o=yc,yc=a,null!==o&&(null===yc?yc=o:yc.push.apply(yc,o))}a=l}if(o=!1,2!==a)continue}}if(1===a){Hc(e,0),Uc(e,t,0,!0);break}e:{switch(r=e,o=a){case 0:case 1:throw Error(i(345));case 4:if((4194048&t)!==t)break;case 6:Uc(r,t,vc,!sc);break e;case 2:yc=null;break;case 3:case 5:break;default:throw Error(i(329))}if((62914560&t)===t&&10<(a=wc+300-te())){if(Uc(r,t,vc,!sc),0!==ye(r,0,!0))break e;r.timeoutHandle=sd(Ic.bind(null,r,n,yc,kc,xc,t,vc,mc,gc,sc,o,2,-0,0),a)}else Ic(r,n,yc,kc,xc,t,vc,mc,gc,sc,o,0,-0,0)}break}a=Kc(e,t,!1),o=!1}Su(e)}function Ic(e,t,n,r,a,o,l,s,c,u,d,f,p,m){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&(Bd={stylesheets:null,count:0,unsuspend:Hd},Ks(t),null!==(f=function(){if(null===Bd)throw Error(i(475));var e=Bd;return e.stylesheets&&0===e.count&&qd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&qd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=f(nu.bind(null,e,t,o,n,r,a,l,s,c,d,1,p,m)),void Uc(e,o,l,!u);nu(e,t,o,n,r,a,l,s,c)}function Dc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Yn(o(),a))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Uc(e,t,n,r){t&=~hc,t&=~mc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-pe(a),i=1<<o;r[o]=-1,a&=~i}0!==n&&Ce(e,n,t)}function $c(){return 0!==(6&nc)||(ku(0,!1),!1)}function Bc(){if(null!==ac){if(0===ic)var e=ac.return;else ba=ga=null,Io(e=ac),Yi=null,Qi=0,e=ac;for(;null!==e;)os(e.alternate,e),e=e.return;ac=null}}function Hc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Bc(),rc=e,ac=n=Ir(e.current,null),oc=t,ic=0,lc=null,sc=!1,cc=xe(e,t),uc=!1,gc=vc=hc=mc=pc=fc=0,yc=bc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-pe(r),o=1<<a;t|=e[a],r&=~o}return dc=t,Tr(),n}function Wc(e,t){xo=null,O.H=Vi,t===Va||t===Ga?(t=Za(),ic=3):t===qa?(t=Za(),ic=4):ic=t===Cl?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,lc=t,null===ac&&(fc=1,wl(e,Er(t,e.current)))}function Vc(){var e=O.H;return O.H=Vi,null===e?Vi:e}function qc(){var e=O.A;return O.A=ec,e}function Gc(){fc=4,sc||(4194048&oc)!==oc&&null!==al.current||(cc=!0),0===(134217727&pc)&&0===(134217727&mc)||null===rc||Uc(rc,oc,vc,!1)}function Kc(e,t,n){var r=nc;nc|=2;var a=Vc(),o=qc();rc===e&&oc===t||(kc=null,Hc(e,t)),t=!1;var i=fc;e:for(;;)try{if(0!==ic&&null!==ac){var l=ac,s=lc;switch(ic){case 8:Bc(),i=6;break e;case 3:case 2:case 9:case 6:null===al.current&&(t=!0);var c=ic;if(ic=0,lc=null,Zc(e,l,s,c),n&&cc){i=0;break e}break;default:c=ic,ic=0,lc=null,Zc(e,l,s,c)}}Yc(),i=fc;break}catch(u){Wc(e,u)}return t&&e.shellSuspendCounter++,ba=ga=null,nc=r,O.H=a,O.A=o,null===ac&&(rc=null,oc=0,Tr()),i}function Yc(){for(;null!==ac;)Xc(ac)}function Qc(){for(;null!==ac&&!Z();)Xc(ac)}function Xc(e){var t=Xl(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ac=t}function Jc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ml(n,t,t.pendingProps,t.type,void 0,oc);break;case 11:t=Ml(n,t,t.pendingProps,t.type.render,t.ref,oc);break;case 5:Io(t);default:os(n,t),t=Xl(n,t=ac=Dr(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ac=t}function Zc(e,t,n,r){ba=ga=null,Io(t),Yi=null,Qi=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ka(t,n,a,!0),null!==(n=al.current)){switch(n.tag){case 13:return null===ol?Gc():null===n.alternate&&0===fc&&(fc=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ka?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,a)),!1;case 22:return n.flags|=65536,r===Ka?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,a)),!1}throw Error(i(435,n.tag))}return du(e,r,a),Gc(),!1}if(oa)return null!==(t=al.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==sa&&ha(Er(e=Error(i(422),{cause:r}),n))):(r!==sa&&ha(Er(t=Error(i(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Er(r,n),lo(e,a=kl(e.stateNode,r,a)),4!==fc&&(fc=2)),!1;var o=Error(i(520),{cause:r});if(o=Er(o,n),null===bc?bc=[o]:bc.push(o),4!==fc&&(fc=2),null===t)return!0;r=Er(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,lo(n,e=kl(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Ec||!Ec.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Pl(a=El(a),e,n,r),lo(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,oc))return fc=1,wl(e,Er(n,e.current)),void(ac=null)}catch(o){if(null!==a)throw ac=a,o;return fc=1,wl(e,Er(n,e.current)),void(ac=null)}32768&t.flags?(oa||1===r?e=!0:cc||0!==(536870912&oc)?e=!1:(sc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=al.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,sc);e=t.return;var n=rs(t.alternate,t,dc);if(null!==n)return void(ac=n);if(null!==(t=t.sibling))return void(ac=t);ac=t=e}while(null!==t);0===fc&&(fc=5)}function tu(e,t){do{var n=as(e.alternate,e);if(null!==n)return n.flags&=32767,void(ac=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ac=e);ac=e=n}while(null!==e);fc=6,ac=null}function nu(e,t,n,r,a,o,l,s,c){e.cancelPendingCommit=null;do{lu()}while(0!==Pc);if(0!==(6&nc))throw Error(i(327));if(null!==t){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,a,o){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=i&~n;0<n;){var u=31-pe(n),d=1<<u;l[u]=0,s[u]=-1;var f=c[u];if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Ce(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,n,o|=jr,l,s,c),e===rc&&(ac=rc=null,oc=0),jc=t,Cc=e,Tc=n,_c=o,Ac=a,Nc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(oe,function(){return su(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=O.T,O.T=null,a=L.p,L.p=2,l=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=nf,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(v){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(m=f.firstChild);)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===a&&(s=l),p===o&&++d===r&&(c=l),null!==(m=f.nextSibling))break;p=(f=p).parentNode}f=m}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nf=!1,ks=t;null!==ks;)if(e=(t=ks).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,ks=e;else for(;null!==ks;){switch(o=(t=ks).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=vl(n.type,a,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(g){uu(n,n.return,g)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))hd(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,ks=e;break}ks=t.return}}(e,t)}finally{nc=l,L.p=a,O.T=r}}Pc=1,ru(),au(),ou()}}function ru(){if(1===Pc){Pc=0;var e=Cc,t=jc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=O.T,O.T=null;var r=L.p;L.p=2;var a=nc;nc|=4;try{Os(t,e);var o=nd,i=er(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&Zn(l.ownerDocument.documentElement,l)){if(null!==s&&tr(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=l.textContent.length,h=Math.min(s.start,m),v=void 0===s.end?h:Math.min(s.end,m);!p.extend&&h>v&&(i=v,v=h,h=i);var g=Jn(l,h),b=Jn(l,v);if(g&&b&&(1!==p.rangeCount||p.anchorNode!==g.node||p.anchorOffset!==g.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var y=d.createRange();y.setStart(g.node,g.offset),p.removeAllRanges(),h>v?(p.addRange(y),p.extend(b.node,b.offset)):(y.setEnd(b.node,b.offset),p.addRange(y))}}}}for(d=[],p=l;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}nf=!!td,nd=td=null}finally{nc=a,L.p=r,O.T=n}}e.current=t,Pc=2}}function au(){if(2===Pc){Pc=0;var e=Cc,t=jc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=O.T,O.T=null;var r=L.p;L.p=2;var a=nc;nc|=4;try{Es(e,t.alternate,t)}finally{nc=a,L.p=r,O.T=n}}Pc=3}}function ou(){if(4===Pc||3===Pc){Pc=0,ee();var e=Cc,t=jc,n=Tc,r=Nc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Pc=5:(Pc=0,jc=Cc=null,iu(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Ec=null),_e(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=O.T,a=L.p,L.p=2,O.T=null;try{for(var o=e.onRecoverableError,i=0;i<r.length;i++){var l=r[i];o(l.value,{componentStack:l.stack})}}finally{O.T=t,L.p=a}}0!==(3&Tc)&&lu(),Su(e),a=e.pendingLanes,0!==(4194090&n)&&0!==(42&a)?e===zc?Rc++:(Rc=0,zc=e):Rc=0,ku(0,!1)}}function iu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Oa(t)))}function lu(e){return ru(),au(),ou(),su()}function su(){if(5!==Pc)return!1;var e=Cc,t=_c;_c=0;var n=_e(Tc),r=O.T,a=L.p;try{L.p=32>n?32:n,O.T=null,n=Ac,Ac=null;var o=Cc,l=Tc;if(Pc=0,jc=Cc=null,Tc=0,0!==(6&nc))throw Error(i(331));var s=nc;if(nc|=4,Xs(o.current),Hs(o,o.current,l,n),nc=s,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,o)}catch(c){}return!0}finally{L.p=a,O.T=r,iu(e,t)}}function cu(e,t,n){t=Er(n,t),null!==(e=oo(e,t=kl(e.stateNode,t,2),2))&&(Pe(e,2),Su(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ec||!Ec.has(r))){e=Er(n,e),null!==(r=oo(t,n=El(2),2))&&(Pl(n,r,t,e),Pe(r,2),Su(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(uc=!0,a.add(n),e=fu.bind(null,e,t,n),t.then(e,e))}function fu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(oc&n)===n&&(4===fc||3===fc&&(62914560&oc)===oc&&300>te()-wc?0===(2&nc)&&Hc(e,0):hc|=n,gc===oc&&(gc=0)),Su(e)}function pu(e,t){0===t&&(t=ke()),null!==(e=Nr(e,t))&&(Pe(e,t),Su(e))}function mu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),pu(e,n)}function hu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==r&&r.delete(t),pu(e,n)}var vu=null,gu=null,bu=!1,yu=!1,xu=!1,wu=0;function Su(e){e!==gu&&null===e.next&&(null===gu?vu=gu=e:gu=gu.next=e),yu=!0,bu||(bu=!0,dd(function(){0!==(6&nc)?X(re,Eu):Pu()}))}function ku(e,t){if(!xu&&yu){xu=!0;do{for(var n=!1,r=vu;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var i=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-pe(42|e)+1)-1,o=201326741&(o&=a&~(i&~l))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Tu(r,o))}else o=oc,0===(3&(o=ye(r,r===rc?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,o)||(n=!0,Tu(r,o));r=r.next}}while(n);xu=!1}}function Eu(){Pu()}function Pu(){yu=bu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==ld&&(ld=e,!0);return ld=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=vu;null!==r;){var a=r.next,o=Cu(r,t);0===o?(r.next=null,null===n?vu=a:n.next=a,null===a&&(gu=n)):(n=r,(0!==e||0!==(3&o))&&(yu=!0)),r=a}ku(e,!1)}function Cu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-pe(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=we(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=oc,n=ye(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===ic||9===ic)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),_e(n)){case 2:case 8:n=ae;break;case 32:default:n=oe;break;case 268435456:n=le}return r=ju.bind(null,e),n=X(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function ju(e,t){if(0!==Pc&&5!==Pc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lu()&&e.callbackNode!==n)return null;var r=oc;return 0===(r=ye(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Fc(e,r,t),Cu(e,te()),null!=e.callbackNode&&e.callbackNode===n?ju.bind(null,e):null)}function Tu(e,t){if(lu())return null;Fc(e,t,!0)}function _u(){return 0===wu&&(wu=Se()),wu}function Au(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:_t(""+e)}function Nu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ru=0;Ru<wr.length;Ru++){var zu=wr[Ru];Sr(zu.toLowerCase(),"on"+(zu[0].toUpperCase()+zu.slice(1)))}Sr(pr,"onAnimationEnd"),Sr(mr,"onAnimationIteration"),Sr(hr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(vr,"onTransitionRun"),Sr(gr,"onTransitionStart"),Sr(br,"onTransitionCancel"),Sr(yr,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ou="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ou));function Mu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){gl(u)}a.currentTarget=null,o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){gl(u)}a.currentTarget=null,o=s}}}}function Fu(e,t){var n=t[Le];void 0===n&&(n=t[Le]=new Set);var r=e+"__bubble";n.has(r)||($u(t,e,2,!1),n.add(r))}function Iu(e,t,n){var r=0;t&&(r|=4),$u(n,e,r,t)}var Du="_reactListening"+Math.random().toString(36).slice(2);function Uu(e){if(!e[Du]){e[Du]=!0,qe.forEach(function(t){"selectionchange"!==t&&(Lu.has(t)||Iu(t,!1,e),Iu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Du]||(t[Du]=!0,Iu("selectionchange",!1,t))}}function $u(e,t,n,r){switch(uf(t)){case 2:var a=rf;break;case 8:a=af;break;default:a=of}n=a.bind(null,t,n,e),a=void 0,!Dt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Bu(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a)break;if(4===i)for(i=r.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===a)return;i=i.return}for(;null!==l;){if(null===(i=$e(l)))return;if(5===(c=i.tag)||6===c||26===c||27===c){r=o=i;continue e}l=l.parentNode}}r=r.return}Mt(function(){var r=o,a=Nt(n),i=[];e:{var l=xr.get(e);if(void 0!==l){var c=Zt,u=e;switch(e){case"keypress":if(0===Vt(n))break e;case"keydown":case"keyup":c=hn;break;case"focusin":u="focus",c=on;break;case"focusout":u="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=gn;break;case pr:case mr:case hr:c=ln;break;case yr:c=bn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=yn;break;case"copy":case"cut":case"paste":c=sn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=vn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==l?l+"Capture":null:l;d=[];for(var m,h=r;null!==h;){var v=h;if(m=v.stateNode,5!==(v=v.tag)&&26!==v&&27!==v||null===m||null===p||null!=(v=Ft(h,p))&&d.push(Hu(h,v,m)),f)break;h=h.return}0<d.length&&(l=new c(l,u,null,n,a),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===At||!(u=n.relatedTarget||n.fromElement)||!$e(u)&&!u[Oe])&&(c||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?$e(u):null)&&(f=s(u),d=u.tag,u!==f||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,v="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=vn,v="onPointerLeave",p="onPointerEnter",h="pointer"),f=null==c?l:He(c),m=null==u?l:He(u),(l=new d(v,h+"leave",c,n,a)).target=f,l.relatedTarget=m,v=null,$e(a)===r&&((d=new d(p,h+"enter",u,n,a)).target=m,d.relatedTarget=f,v=d),f=v,c&&u)e:{for(p=u,h=0,m=d=c;m;m=Vu(m))h++;for(m=0,v=p;v;v=Vu(v))m++;for(;0<h-m;)d=Vu(d),h--;for(;0<m-h;)p=Vu(p),m--;for(;h--;){if(d===p||null!==p&&d===p.alternate)break e;d=Vu(d),p=Vu(p)}d=null}else d=null;null!==c&&qu(i,l,c,d,!1),null!==u&&null!==f&&qu(i,f,u,d,!0)}if("select"===(c=(l=r?He(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var g=In;else if(Rn(l))if(Dn)g=Kn;else{g=qn;var b=Vn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Ct(r.elementType)&&(g=In):g=Gn;switch(g&&(g=g(e,r))?zn(i,g,n,a):(b&&b(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&bt(l,"number",l.value)),b=r?He(r):window,e){case"focusin":(Rn(b)||"true"===b.contentEditable)&&(rr=b,ar=r,or=null);break;case"focusout":or=ar=rr=null;break;case"mousedown":ir=!0;break;case"contextmenu":case"mouseup":case"dragend":ir=!1,lr(i,n,a);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(i,n,a)}var y;if(Sn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else An?Tn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Pn&&"ko"!==n.locale&&(An||"onCompositionStart"!==x?"onCompositionEnd"===x&&An&&(y=Wt()):(Bt="value"in($t=a)?$t.value:$t.textContent,An=!0)),0<(b=Wu(r,x)).length&&(x=new cn(x,e,null,n,a),i.push({event:x,listeners:b}),y?x.data=y:null!==(y=_n(n))&&(x.data=y))),(y=En?function(e,t){switch(e){case"compositionend":return _n(t);case"keypress":return 32!==t.which?null:(jn=!0,Cn);case"textInput":return(e=t.data)===Cn&&jn?null:e;default:return null}}(e,n):function(e,t){if(An)return"compositionend"===e||!Sn&&Tn(e,t)?(e=Wt(),Ht=Bt=$t=null,An=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Wu(r,"onBeforeInput")).length&&(b=new cn("onBeforeInput","beforeinput",null,n,a),i.push({event:b,listeners:x}),b.data=y)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=Au((a[ze]||null).action),i=r.submitter;i&&null!==(t=(t=i[ze]||null)?Au(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new Zt("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=i?Nu(a,i):new FormData(a);Ni(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?Nu(a,i):new FormData(a),Ni(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,r,n,a)}Mu(i,t)})}function Hu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wu(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=Ft(e,n))&&r.unshift(Hu(e,a,o)),null!=(a=Ft(e,t))&&r.push(Hu(e,a,o))),3===e.tag)return r;e=e.return}return[]}function Vu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function qu(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,a?null!=(c=Ft(n,o))&&i.unshift(Hu(n,c,s)):a||null!=(c=Ft(n,o))&&i.push(Hu(n,c,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Gu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function Yu(e){return("string"===typeof e?e:""+e).replace(Gu,"\n").replace(Ku,"")}function Qu(e,t){return t=Yu(t),Yu(e)===t}function Xu(){}function Ju(e,t,n,r,a,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Pt(e,r,o);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=_t(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&Ju(e,t,"name",a.name,a,null),Ju(e,t,"formEncType",a.formEncType,a,null),Ju(e,t,"formMethod",a.formMethod,a,null),Ju(e,t,"formTarget",a.formTarget,a,null)):(Ju(e,t,"encType",a.encType,a,null),Ju(e,t,"method",a.method,a,null),Ju(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=_t(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=_t(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Fu("beforetoggle",e),Fu("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=jt.get(n)||n,r)}}function Zu(e,t,n,r,a,o){switch(n){case"style":Pt(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ge.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(o=null!=(o=e[ze]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fu("error",e),Fu("load",e);var r,a=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ju(e,t,r,l,n,null)}}return o&&Ju(e,t,"srcSet",n.srcSet,n,null),void(a&&Ju(e,t,"src",n.src,n,null));case"input":Fu("invalid",e);var s=r=l=o=null,c=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":o=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:Ju(e,t,a,d,n,null)}}return gt(e,r,s,c,u,l,o,!1),void dt(e);case"select":for(o in Fu("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Ju(e,t,o,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?yt(e,!!a,t,!1):null!=n&&yt(e,!!a,n,!0));case"textarea":for(l in Fu("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:Ju(e,t,l,s,n,null)}return wt(e,a,o,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Ju(e,t,c,a,n,null);return;case"dialog":Fu("beforetoggle",e),Fu("toggle",e),Fu("cancel",e),Fu("close",e);break;case"iframe":case"object":Fu("load",e);break;case"video":case"audio":for(a=0;a<Ou.length;a++)Fu(Ou[a],e);break;case"image":Fu("error",e),Fu("load",e);break;case"details":Fu("toggle",e);break;case"embed":case"source":case"link":Fu("error",e),Fu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ju(e,t,u,a,n,null)}return;default:if(Ct(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&Zu(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&Ju(e,t,s,a,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function od(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function id(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ld=null;var sd="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(fd)}:sd;function fd(e){setTimeout(function(){throw e})}function pd(e){return"head"===e}function md(e,t){var n=t,r=0,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0<r&&8>r){n=r;var i=e.ownerDocument;if(1&n&&wd(i.documentElement),2&n&&wd(i.body),4&n)for(wd(n=i.head),i=n.firstChild;i;){var l=i.nextSibling,s=i.nodeName;i[De]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===i.rel.toLowerCase()||n.removeChild(i),i=l}}if(0===a)return e.removeChild(o),void Tf(t);a--}else"$"===n||"$?"===n||"$!"===n?a++:r=n.charCodeAt(0)-48;else r=0;n=o}while(n);Tf(t)}function hd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hd(n),Ue(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function vd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function gd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var bd=null;function yd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ue(e)}var Sd=new Map,kd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Pd=L.d;L.d={f:function(){var e=Pd.f(),t=$c();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?zi(t):Pd.r(e)},D:function(e){Pd.D(e),jd("dns-prefetch",e,null)},C:function(e,t){Pd.C(e,t),jd("preconnect",e,t)},L:function(e,t,n){Pd.L(e,t,n);var r=Cd;if(r&&e&&t){var a='link[rel="preload"][as="'+ht(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ht(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+ht(n.imageSizes)+'"]')):a+='[href="'+ht(e)+'"]';var o=a;switch(t){case"style":o=_d(e);break;case"script":o=Rd(e)}Sd.has(o)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Ad(o))||"script"===t&&r.querySelector(zd(o))||(ed(t=r.createElement("link"),"link",e),Ve(t),r.head.appendChild(t)))}},m:function(e,t){Pd.m(e,t);var n=Cd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+ht(r)+'"][href="'+ht(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Rd(e)}if(!Sd.has(o)&&(e=f({rel:"modulepreload",href:e},t),Sd.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(zd(o)))return}ed(r=n.createElement("link"),"link",e),Ve(r),n.head.appendChild(r)}}},X:function(e,t){Pd.X(e,t);var n=Cd;if(n&&e){var r=We(n).hoistableScripts,a=Rd(e),o=r.get(a);o||((o=n.querySelector(zd(a)))||(e=f({src:e,async:!0},t),(t=Sd.get(a))&&Fd(e,t),Ve(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){Pd.S(e,t,n);var r=Cd;if(r&&e){var a=We(r).hoistableStyles,o=_d(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(Ad(o)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(o))&&Md(e,n);var s=i=r.createElement("link");Ve(s),ed(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ld(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}},M:function(e,t){Pd.M(e,t);var n=Cd;if(n&&e){var r=We(n).hoistableScripts,a=Rd(e),o=r.get(a);o||((o=n.querySelector(zd(a)))||(e=f({src:e,async:!0,type:"module"},t),(t=Sd.get(a))&&Fd(e,t),Ve(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var Cd="undefined"===typeof document?null:document;function jd(e,t,n){var r=Cd;if(r&&"string"===typeof t&&t){var a=ht(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),kd.has(a)||(kd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(ed(t=r.createElement("link"),"link",e),Ve(t),r.head.appendChild(t)))}}function Td(e,t,n,r){var a,o,l,s,c=(c=W.current)?Ed(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=_d(n.href),(r=(n=We(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=_d(n.href);var u=We(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Ad(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),u||(a=c,o=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),ed(o,"link",l),Ve(o),a.head.appendChild(o))))),t&&null===r)throw Error(i(528,""));return d}if(t&&null!==r)throw Error(i(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Rd(n),(r=(n=We(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function _d(e){return'href="'+ht(e)+'"'}function Ad(e){return'link[rel="stylesheet"]['+e+"]"}function Nd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Rd(e){return'[src="'+ht(e)+'"]'}function zd(e){return"script[async]"+e}function Od(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+ht(n.href)+'"]');if(r)return t.instance=r,Ve(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Ve(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",a),Ld(r,n.precedence,e),t.instance=r;case"stylesheet":a=_d(n.href);var o=e.querySelector(Ad(a));if(o)return t.state.loading|=4,t.instance=o,Ve(o),o;r=Nd(n),(a=Sd.get(a))&&Md(r,a),Ve(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(o,"link",r),t.state.loading|=4,Ld(o,n.precedence,e),t.instance=o;case"script":return o=Rd(n.src),(a=e.querySelector(zd(o)))?(t.instance=a,Ve(a),a):(r=n,(a=Sd.get(o))&&Fd(r=f({},n),a),Ve(a=(e=e.ownerDocument||e).createElement("script")),ed(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Ld(r,n.precedence,e));return t.instance}function Ld(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Md(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Fd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Id=null;function Dd(e,t,n){if(null===Id){var r=new Map,a=Id=new Map;a.set(n,r)}else(r=(a=Id).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[De]||o[Re]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(o):r.set(i,[o])}}return r}function Ud(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function $d(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Hd(){}function Wd(){if(this.count--,0===this.count)if(this.stylesheets)qd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Vd=null;function qd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Vd=new Map,t.forEach(Gd,e),Vd=null,Wd.call(e))}function Gd(e,t){if(!(4&t.state.loading)){var n=Vd.get(e);if(n)var r=n.get(null);else{n=new Map,Vd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(a=t.instance).getAttribute("data-precedence"),(o=n.get(i)||r)===r&&n.set(null,a),n.set(i,a),this.count++,r=Wd.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Kd={$$typeof:w,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function Yd(e,t,n,r,a,o,i,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Qd(e,t,n,r,a,o,i,l,s,c,u,d){return e=new Yd(e,t,n,i,l,s,c,d),t=1,!0===o&&(t|=24),o=Mr(3,null,null,t),e.current=o,o.stateNode=e,(t=za()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},no(o),e}function Xd(e){return e?e=Or:Or}function Jd(e,t,n,r,a,o){a=Xd(a),null===r.context?r.context=a:r.pendingContext=a,(r=ao(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=oo(e,r,t))&&(Mc(n,0,t),io(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ef(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tf(e){if(13===e.tag){var t=Nr(e,67108864);null!==t&&Mc(t,0,67108864),ef(e,67108864)}}var nf=!0;function rf(e,t,n,r){var a=O.T;O.T=null;var o=L.p;try{L.p=2,of(e,t,n,r)}finally{L.p=o,O.T=a}}function af(e,t,n,r){var a=O.T;O.T=null;var o=L.p;try{L.p=8,of(e,t,n,r)}finally{L.p=o,O.T=a}}function of(e,t,n,r){if(nf){var a=lf(r);if(null===a)Bu(e,t,r,sf,n),yf(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return ff=xf(ff,e,t,n,r,a),!0;case"dragenter":return pf=xf(pf,e,t,n,r,a),!0;case"mouseover":return mf=xf(mf,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return hf.set(o,xf(hf.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,vf.set(o,xf(vf.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(yf(e,r),4&t&&-1<bf.indexOf(e)){for(;null!==a;){var o=Be(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=be(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-pe(i);l.entanglements[1]|=s,i&=~s}Su(o),0===(6&nc)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(l=Nr(o,2))&&Mc(l,0,2),$c(),ef(o,2)}if(null===(o=lf(r))&&Bu(e,t,r,sf,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Bu(e,t,r,null,n)}}function lf(e){return cf(e=Nt(e))}var sf=null;function cf(e){if(sf=null,null!==(e=$e(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sf=e,null}function uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ae:return 8;case oe:case ie:return 32;case le:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,pf=null,mf=null,hf=new Map,vf=new Map,gf=[],bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":pf=null;break;case"mouseover":case"mouseout":mf=null;break;case"pointerover":case"pointerout":hf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vf.delete(t.pointerId)}}function xf(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Be(t))&&tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function wf(e){var t=$e(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}(e.priority,function(){if(13===n.tag){var e=Oc();e=Te(e);var t=Nr(n,e);null!==t&&Mc(t,0,e),ef(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Sf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=lf(e.nativeEvent);if(null!==n)return null!==(t=Be(n))&&tf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);At=r,n.target.dispatchEvent(r),At=null,t.shift()}return!0}function kf(e,t,n){Sf(e)&&n.delete(t)}function Ef(){df=!1,null!==ff&&Sf(ff)&&(ff=null),null!==pf&&Sf(pf)&&(pf=null),null!==mf&&Sf(mf)&&(mf=null),hf.forEach(kf),vf.forEach(kf)}function Pf(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ef)))}var Cf=null;function jf(e){Cf!==e&&(Cf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cf===e&&(Cf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===cf(r||n))continue;break}var o=Be(n);null!==o&&(e.splice(t,3),t-=3,Ni(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Tf(e){function t(t){return Pf(t,e)}null!==ff&&Pf(ff,e),null!==pf&&Pf(pf,e),null!==mf&&Pf(mf,e),hf.forEach(t),vf.forEach(t);for(var n=0;n<gf.length;n++){var r=gf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gf.length&&null===(n=gf[0]).blockedOn;)wf(n),null===n.blockedOn&&gf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],i=a[ze]||null;if("function"===typeof o)i||jf(n);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[ze]||null)l=i.formAction;else if(null!==cf(a))continue}else l=i.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),jf(n)}}}function _f(e){this._internalRoot=e}function Af(e){this._internalRoot=e}Af.prototype.render=_f.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Jd(t.current,Oc(),e,t,null,null)},Af.prototype.unmount=_f.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),$c(),t[Oe]=null}},Af.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gf.length&&0!==t&&t<gf[n].priority;n++);gf.splice(n,0,e),0===n&&wf(e)}};var Nf=a.version;if("19.1.0"!==Nf)throw Error(i(527,Nf,"19.1.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return u(a),e;if(o===r)return u(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,r=o;break}if(c===r){l=!0,r=a,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=a;break}if(c===r){l=!0,r=o,n=a;break}c=c.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Rf={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var zf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zf.isDisabled&&zf.supportsFiber)try{ue=zf.inject(Rf),de=zf}catch(Lf){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var n=!1,r="",a=bl,o=yl,s=xl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Qd(e,1,!1,null,0,n,r,a,o,s,0,null),e[Oe]=t.current,Uu(e),new _f(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(i(299));var r=!1,a="",o=bl,s=yl,c=xl,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Qd(e,1,!0,t,0,r,a,o,s,c,0,u)).context=Xd(null),n=t.current,(a=ao(r=Te(r=Oc()))).callback=null,oo(n,a,r),n=r,t.current.lanes=n,Pe(t,n),Su(t),e[Oe]=t.current,Uu(e),new Af(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},173:(e,t,n)=>{e.exports=n(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var x=y.prototype=new b;x.constructor=y,h(x,g.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function E(e,t,r,a,o,i){return r=i.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:i}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(){}function _(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case f:return _((u=e._init)(e._payload),t,a,o,i)}}if(u)return i=i(e),u=""===o?"."+j(e,0):o,w(i)?(a="",null!=u&&(a=u.replace(C,"$&/")+"/"),_(i,t,a,"",function(e){return e})):null!=i&&(P(i)&&(s=i,c=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+u,i=E(s.type,c,void 0,0,0,s.props)),t.push(i)),1;u=0;var d,m=""===o?".":o+":";if(w(e))for(var h=0;h<e.length;h++)u+=_(o=e[h],t,a,l=m+j(o,h),i);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(o=e.next()).done;)u+=_(o=o.value,t,a,l=m+j(o,h++),i);else if("object"===l){if("function"===typeof e.then)return _(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(T,T):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function A(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",function(e){return t.call(n,e,a++)}),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function z(){}t.Children={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=a,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=h({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!k.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];r.children=i}return E(e.type,a,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return E(e,o,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),a=S.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(z,R)}catch(o){R(o)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},497:(e,t,n)=>{"use strict";var r=n(218);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):"script"===n&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<a&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,m=!1,h=!1,v=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function S(e){if(v=!1,w(e),!h)if(null!==r(c))h=!0,E||(E=!0,k());else{var t=r(u);null!==t&&R(S,t.startTime-e)}}var k,E=!1,P=-1,C=5,j=-1;function T(){return!!g||!(t.unstable_now()-j<C)}function _(){if(g=!1,E){var e=t.unstable_now();j=e;var n=!0;try{e:{h=!1,v&&(v=!1,y(P),P=-1),m=!0;var o=p;try{t:{for(w(e),f=r(c);null!==f&&!(f.expirationTime>e&&T());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,w(e),n=!0;break t}f===r(c)&&a(c),w(e)}else a(c);f=r(c)}if(null!==f)n=!0;else{var s=r(u);null!==s&&R(S,s.startTime-e),n=!1}}break e}finally{f=null,p=o,m=!1}n=void 0}}finally{n?k():E=!1}}}if("function"===typeof x)k=function(){x(_)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,N=A.port2;A.port1.onmessage=_,k=function(){N.postMessage(null)}}else k=function(){b(_,0)};function R(e,n){P=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){g=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(v?(y(P),P=-1):v=!0,R(S,o-i))):(e.sortIndex=l,n(c,e),h||m||(h=!0,E||(E=!0,k()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},900:e=>{"use strict";e.exports=JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.0.0"},"version":"7.0.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+".35b880a9.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="wrtmind-react:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach(e=>e(n)),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="./",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((n,r)=>a=e[t]=[n,r]);r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}},"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],c=0;if(i.some(t=>0!==e[t])){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkwrtmind_react=self.webpackChunkwrtmind_react||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(324),i=n.n(o),l="-ms-",s="-moz-",c="-webkit-",u="comm",d="rule",f="decl",p="@keyframes",m=Math.abs,h=String.fromCharCode,v=Object.assign;function g(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function x(e,t,n){return e.indexOf(t,n)}function w(e,t){return 0|e.charCodeAt(t)}function S(e,t,n){return e.slice(t,n)}function k(e){return e.length}function E(e){return e.length}function P(e,t){return t.push(e),e}function C(e,t){return e.filter(function(e){return!b(e,t)})}var j=1,T=1,_=0,A=0,N=0,R="";function z(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:j,column:T,length:i,return:"",siblings:l}}function O(e,t){return v(z("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=O(e.root,{children:[e]});P(e,e.siblings)}function M(){return N=A>0?w(R,--A):0,T--,10===N&&(T=1,j--),N}function F(){return N=A<_?w(R,A++):0,T++,10===N&&(T=1,j++),N}function I(){return w(R,A)}function D(){return A}function U(e,t){return S(R,e,t)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return j=T=1,_=k(R=e),A=0,[]}function H(e){return R="",e}function W(e){return g(U(A-1,G(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(N=I())&&N<33;)F();return $(e)>2||$(N)>3?"":" "}function q(e,t){for(;--t&&F()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return U(e,D()+(t<6&&32==I()&&32==F()))}function G(e){for(;F();)switch(N){case e:return A;case 34:case 39:34!==e&&39!==e&&G(N);break;case 40:41===e&&G(e);break;case 92:F()}return A}function K(e,t){for(;F()&&e+N!==57&&(e+N!==84||47!==I()););return"/*"+U(t,A-1)+"*"+h(47===e?e:F())}function Y(e){for(;!$(I());)F();return U(e,A)}function Q(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case u:return"";case p:return e.return=e.value+"{"+Q(e.children,r)+"}";case d:if(!k(e.value=e.props.join(",")))return""}return k(n=Q(e.children,r))?e.return=e.value+"{"+n+"}":""}function J(e,t,n){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+s+e+l+e+e;case 5936:switch(w(e,t+11)){case 114:return c+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+l+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+l+e+e;case 6165:return c+e+l+"flex-"+e+e;case 5187:return c+e+y(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return c+e+l+"flex-item-"+y(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":l+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return c+e+l+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+l+y(e,"shrink","negative")+e;case 5292:return c+e+l+y(e,"basis","preferred-size")+e;case 6060:return c+"box-"+y(e,"-grow","")+c+e+l+y(e,"grow","positive")+e;case 4554:return c+y(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!b(e,/flex-|baseline/))return l+"grid-column-align"+S(e,t)+e;break;case 2592:case 3360:return l+y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,b(e.props,/grid-\w+-end/)})?~x(e+(n=n[t].value),"span",0)?e:l+y(e,"-start","")+e+l+"grid-row-span:"+(~x(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(e,/\d+/))+";":l+y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return b(e.props,/grid-\w+-start/)})?e:l+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+s+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch",0)?J(y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,o,i,s){return l+n+":"+r+s+(a?l+n+"-span:"+(o?i:+i-+r)+s:"")+e});case 4949:if(121===w(e,t+6))return y(e,":",":"+c)+e;break;case 6444:switch(w(e,45===w(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===w(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+l+"$2box$3")+e;case 100:return y(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function Z(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=J(e.value,e.length,n));case p:return Q([O(e,{value:y(e.value,"@","@"+c)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(b(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":L(O(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),L(O(e,{props:[t]})),v(e,{props:C(n,r)});break;case"::placeholder":L(O(e,{props:[y(t,/:(plac\w+)/,":"+c+"input-$1")]})),L(O(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),L(O(e,{props:[y(t,/:(plac\w+)/,l+"input-$1")]})),L(O(e,{props:[t]})),v(e,{props:C(n,r)})}return""})}}function ee(e){return H(te("",null,null,null,[""],e=B(e),0,[0],e))}function te(e,t,n,r,a,o,i,l,s){for(var c=0,u=0,d=i,f=0,p=0,v=0,g=1,b=1,S=1,E=0,C="",j=a,T=o,_=r,A=C;b;)switch(v=E,E=F()){case 40:if(108!=v&&58==w(A,d-1)){-1!=x(A+=y(W(E),"&","&\f"),"&\f",m(c?l[c-1]:0))&&(S=-1);break}case 34:case 39:case 91:A+=W(E);break;case 9:case 10:case 13:case 32:A+=V(v);break;case 92:A+=q(D()-1,7);continue;case 47:switch(I()){case 42:case 47:P(re(K(F(),D()),t,n,s),s);break;default:A+="/"}break;case 123*g:l[c++]=k(A)*S;case 125*g:case 59:case 0:switch(E){case 0:case 125:b=0;case 59+u:-1==S&&(A=y(A,/\f/g,"")),p>0&&k(A)-d&&P(p>32?ae(A+";",r,n,d-1,s):ae(y(A," ","")+";",r,n,d-2,s),s);break;case 59:A+=";";default:if(P(_=ne(A,t,n,c,u,a,l,C,j=[],T=[],d,o),o),123===E)if(0===u)te(A,t,_,_,j,o,d,l,T);else switch(99===f&&110===w(A,3)?100:f){case 100:case 108:case 109:case 115:te(e,_,_,r&&P(ne(e,_,_,0,0,a,l,C,a,j=[],d,T),T),a,T,d,l,r?j:T);break;default:te(A,_,_,_,[""],T,0,l,T)}}c=u=p=0,g=S=1,C=A="",d=i;break;case 58:d=1+k(A),p=v;default:if(g<1)if(123==E)--g;else if(125==E&&0==g++&&125==M())continue;switch(A+=h(E),E*g){case 38:S=u>0?1:(A+="\f",-1);break;case 44:l[c++]=(k(A)-1)*S,S=1;break;case 64:45===I()&&(A+=W(F())),f=I(),u=d=k(C=A+=Y(D())),E++;break;case 45:45===v&&2==k(A)&&(g=0)}}return o}function ne(e,t,n,r,a,o,i,l,s,c,u,f){for(var p=a-1,h=0===a?o:[""],v=E(h),b=0,x=0,w=0;b<r;++b)for(var k=0,P=S(e,p+1,p=m(x=i[b])),C=e;k<v;++k)(C=g(x>0?h[k]+" "+P:y(P,/&\f/g,h[k])))&&(s[w++]=C);return z(e,t,n,0===a?d:l,s,c,u,f)}function re(e,t,n,r){return z(e,t,n,u,h(N),S(e,2,-2),0,r)}function ae(e,t,n,r,a){return z(e,t,n,f,S(e,0,r),S(e,r+1,-1),r,a)}var oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ie="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}&&({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ce="6.1.19",ue="/*!sc*/\n",de="undefined"!=typeof window&&"undefined"!=typeof document,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY)),pe={},me=(new Set,Object.freeze([])),he=Object.freeze({});function ve(e,t,n){return void 0===n&&(n=he),e.theme!==n.theme&&e.theme||t||n.theme}var ge=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function xe(e){return e.replace(be,"-").replace(ye,"")}var we=/(a)(d)/gi,Se=function(e){return String.fromCharCode(e+(e>25?39:97))};function ke(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Se(t%52)+n;return(Se(t%52)+n).replace(we,"$1-$2")}var Ee,Pe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ce=function(e){return Pe(5381,e)};function je(e){return ke(Ce(e)>>>0)}function Te(e){return e.displayName||e.name||"Component"}function _e(e){return"string"==typeof e&&!0}var Ae="function"==typeof Symbol&&Symbol.for,Ne=Ae?Symbol.for("react.memo"):60115,Re=Ae?Symbol.for("react.forward_ref"):60112,ze={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Le={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Me=((Ee={})[Re]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[Ne]=Le,Ee);function Fe(e){return("type"in(t=e)&&t.type.$$typeof)===Ne?Le:"$$typeof"in e?Me[e.$$typeof]:ze;var t}var Ie=Object.defineProperty,De=Object.getOwnPropertyNames,Ue=Object.getOwnPropertySymbols,$e=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,He=Object.prototype;function We(e,t,n){if("string"!=typeof t){if(He){var r=Be(t);r&&r!==He&&We(e,r,n)}var a=De(t);Ue&&(a=a.concat(Ue(t)));for(var o=Fe(e),i=Fe(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Oe||n&&n[s]||i&&s in i||o&&s in o)){var c=$e(t,s);try{Ie(e,s,c)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function qe(e){return"object"==typeof e&&"styledComponentId"in e}function Ge(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ke(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ye(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qe(e,t,n){if(void 0===n&&(n=!1),!n&&!Ye(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Qe(e[r],t[r]);else if(Ye(t))for(var r in t)e[r]=Qe(e[r],t[r]);return e}function Xe(e,t){Object.defineProperty(e,"toString",{value:t})}function Je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Je(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(ue);return t},e}(),et=new Map,tt=new Map,nt=1,rt=function(e){if(et.has(e))return et.get(e);for(;tt.has(nt);)nt++;var t=nt++;return et.set(e,t),tt.set(t,e),t},at=function(e,t){nt=t+1,et.set(e,t),tt.set(t,e)},ot="style[".concat(ie,"][").concat(se,'="').concat(ce,'"]'),it=new RegExp("^".concat(ie,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},st=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ue),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(it);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(at(u,c),lt(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},ct=function(e){for(var t=document.querySelectorAll(ot),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(ie)!==le&&(st(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ut(){return n.nc}var dt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ie,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(ie,le),r.setAttribute(se,ce);var i=ut();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},ft=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Je(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),pt=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),mt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ht=de,vt={isServer:!de,useCSSOMInjection:!fe},gt=function(){function e(e,t,n){void 0===e&&(e=he),void 0===t&&(t={});var a=this;this.options=r(r({},vt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&ht&&(ht=!1,ct(this)),Xe(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return tt.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(ie,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(ue)},o=0;o<n;o++)a(o);return r}(a)})}return e.registerId=function(e){return rt(e)},e.prototype.rehydrate=function(){!this.server&&de&&ct(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new mt(n):t?new ft(n):new pt(n)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,yt=/^\s*\/\/.*$/gm;function xt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e})}function wt(e){var t,n,r,a=void 0===e?he:e,o=a.options,i=void 0===o?he:o,l=a.plugins,s=void 0===l?me:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,n).replace(r,c))}),i.prefix&&u.push(Z),u.push(X);var f=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(yt,""),c=ee(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(c=xt(c,i.namespace));var d,f=[];return Q(c,function(e){var t=E(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=s.length?s.reduce(function(e,t){return t.name||Je(15),Pe(e,t.name)},5381).toString():"",f}var St=new gt,kt=wt(),Et=e.createContext({shouldForwardProp:void 0,styleSheet:St,stylis:kt}),Pt=(Et.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(Et)}function jt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],o=Ct().styleSheet,l=(0,e.useMemo)(function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,o]),s=(0,e.useMemo)(function(){return wt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})},[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)(function(){i()(r,t.stylisPlugins)||a(t.stylisPlugins)},[t.stylisPlugins]);var c=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:s}},[t.shouldForwardProp,l,s]);return e.createElement(Et.Provider,{value:c},e.createElement(Pt.Provider,{value:s},t.children))}var Tt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=kt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Xe(this,function(){throw Je(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=kt),this.name+e.hash},e}(),_t=function(e){return e>="A"&&e<="Z"};function At(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;_t(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Nt=function(e){return null==e||!1===e||""===e},Rt=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Nt(i)&&(Array.isArray(i)&&i.isCss||Ve(i)?r.push("".concat(At(o),":"),i,";"):Ye(i)?r.push.apply(r,a(a(["".concat(o," {")],Rt(i),!1),["}"],!1)):r.push("".concat(At(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in oe||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zt(e,t,n,r){return Nt(e)?[]:qe(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:zt(e(t),t,n,r):e instanceof Tt?n?(e.inject(n,r),[e.getName(r)]):[e]:Ye(e)?Rt(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map(function(e){return zt(e,t,n,r)})):[e.toString()];var a}function Ot(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ve(n)&&!qe(n))return!1}return!0}var Lt=Ce(ce),Mt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ot(e),this.componentId=t,this.baseHash=Pe(Lt,t),this.baseStyle=n,gt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ge(r,this.staticRulesId);else{var a=Ke(zt(this.rules,e,t,n)),o=ke(Pe(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Ge(r,o),this.staticRulesId=o}else{for(var l=Pe(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Ke(zt(u,e,t,n));l=Pe(l,d+c),s+=d}}if(s){var f=ke(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Ge(r,f)}}return r},e}(),Ft=e.createContext(void 0);Ft.Consumer;var It={};new Set;function Dt(t,n,a){var o=qe(t),i=t,l=!_e(t),s=n.attrs,c=void 0===s?me:s,u=n.componentId,d=void 0===u?function(e,t){var n="string"!=typeof e?"sc":xe(e);It[n]=(It[n]||0)+1;var r="".concat(n,"-").concat(je(ce+n+It[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,f=n.displayName,p=void 0===f?function(e){return _e(e)?"styled.".concat(e):"Styled(".concat(Te(e),")")}(t):f,m=n.displayName&&n.componentId?"".concat(xe(n.displayName),"-").concat(n.componentId):n.componentId||d,h=o&&i.attrs?i.attrs.concat(c).filter(Boolean):c,v=n.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var b=n.shouldForwardProp;v=function(e,t){return g(e,t)&&b(e,t)}}else v=g}var y=new Mt(a,m,o?i.componentStyle:void 0);function x(t,n){return function(t,n,a){var o=t.attrs,i=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Ft),f=Ct(),p=t.shouldForwardProp||f.shouldForwardProp,m=ve(n,d,l)||he,h=function(e,t,n){for(var a,o=r(r({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var l=Ve(a=e[i])?a(o):a;for(var s in l)o[s]="className"===s?Ge(o[s],l[s]):"style"===s?r(r({},o[s]),l[s]):l[s]}return t.className&&(o.className=Ge(o.className,t.className)),o}(o,n,m),v=h.as||u,g={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===m||("forwardedAs"===b?g.as=h.forwardedAs:p&&!p(b,v)||(g[b]=h[b]));var y=function(e,t){var n=Ct();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),x=Ge(s,c);return y&&(x+=" "+y),h.className&&(x+=" "+h.className),g[_e(v)&&!ge.has(v)?"class":"className"]=x,a&&(g.ref=a),(0,e.createElement)(v,g)}(w,t,n)}x.displayName=p;var w=e.forwardRef(x);return w.attrs=h,w.componentStyle=y,w.displayName=p,w.shouldForwardProp=v,w.foldedComponentIds=o?Ge(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=m,w.target=o?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Qe(e,a[r],!0);return e}({},i.defaultProps,e):e}}),Xe(w,function(){return".".concat(w.styledComponentId)}),l&&We(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ut(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var $t=function(e){return Object.assign(e,{isCss:!0})};function Bt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ve(e)||Ye(e))return $t(zt(Ut(me,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?zt(r):$t(zt(Ut(r,t)))}function Ht(e,t,n){if(void 0===n&&(n=he),!t)throw Je(1,t);var o=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Bt.apply(void 0,a([r],o,!1)))};return o.attrs=function(a){return Ht(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},o.withConfig=function(a){return Ht(e,t,r(r({},n),a))},o}var Wt=function(e){return Ht(Dt,e)},Vt=Wt;ge.forEach(function(e){Vt[e]=Wt(e)});var qt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ot(e),gt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(Ke(zt(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&gt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ke(Bt.apply(void 0,a([e],t,!1))),o=je(r);return new Tt(o,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ut(),r=Ke([n&&'nonce="'.concat(n,'"'),"".concat(ie,'="true"'),"".concat(se,'="').concat(ce,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Je(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Je(2);var a=t.instance.toString();if(!a)return[];var o=((n={})[ie]="",n[se]=ce,n.dangerouslySetInnerHTML={__html:a},n),i=ut();return i&&(o.nonce=i),[e.createElement("style",r({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new gt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Je(2);return e.createElement(jt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Je(3)}})(),"__sc-".concat(ie,"__");function Kt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Yt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nn(r.key),r)}}function Qt(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=an(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function Xt(e,t,n){return(t=nn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Zt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Jt(Object(n),!0).forEach(function(t){Xt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function en(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,t)||an(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tn(e){return function(e){if(Array.isArray(e))return Kt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||an(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nn(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function rn(e){return rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rn(e)}function an(e,t){if(e){if("string"==typeof e)return Kt(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Kt(e,t):void 0}}var on=function(){},ln={},sn={},cn=null,un={mark:on,measure:on};try{"undefined"!==typeof window&&(ln=window),"undefined"!==typeof document&&(sn=document),"undefined"!==typeof MutationObserver&&(cn=MutationObserver),"undefined"!==typeof performance&&(un=performance)}catch(Mn){}var dn,fn,pn=(ln.navigator||{}).userAgent,mn=void 0===pn?"":pn,hn=ln,vn=sn,gn=cn,bn=un,yn=(hn.document,!!vn.documentElement&&!!vn.head&&"function"===typeof vn.addEventListener&&"function"===typeof vn.createElement),xn=~mn.indexOf("MSIE")||~mn.indexOf("Trident/"),wn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},Sn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],kn="classic",En="duotone",Pn="sharp",Cn="sharp-duotone",jn="chisel",Tn="etch",_n="jelly",An="jelly-duo",Nn="jelly-fill",Rn="notdog",zn="notdog-duo",On="slab",Ln="slab-press",Mn="thumbprint",Fn="whiteboard",In=[kn,En,Pn,Cn,jn,Tn,_n,An,Nn,Rn,zn,On,Ln,Mn,Fn],Dn=(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(dn={},kn,"Classic"),En,"Duotone"),Pn,"Sharp"),Cn,"Sharp Duotone"),jn,"Chisel"),Tn,"Etch"),_n,"Jelly"),An,"Jelly Duo"),Nn,"Jelly Fill"),Rn,"Notdog"),Xt(Xt(Xt(Xt(Xt(dn,zn,"Notdog Duo"),On,"Slab"),Ln,"Slab Press"),Mn,"Thumbprint"),Fn,"Whiteboard"),new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]])),Un=["fak","fa-kit","fakd","fa-kit-duotone"],$n={fak:"kit","fa-kit":"kit"},Bn={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},Hn=(Xt(Xt({},"kit","Kit"),"kit-duotone","Kit Duotone"),{kit:"fak"}),Wn={"kit-duotone":"fakd"},Vn="duotone-group",qn="swap-opacity",Gn="primary",Kn="secondary",Yn=(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(fn={},"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),"notdog","Notdog"),Xt(Xt(Xt(Xt(Xt(fn,"notdog-duo","Notdog Duo"),"slab","Slab"),"slab-press","Slab Press"),"thumbprint","Thumbprint"),"whiteboard","Whiteboard"),Xt(Xt({},"kit","Kit"),"kit-duotone","Kit Duotone"),{classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}}),Qn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),Xn=[1,2,3,4,5,6,7,8,9,10],Jn=Xn.concat([11,12,13,14,15,16,17,18,19,20]),Zn=[].concat(tn(Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]})),["solid","regular","light","thin","duotone","brands","semibold"],["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Vn,qn,Gn,Kn]).concat(Xn.map(function(e){return"".concat(e,"x")})).concat(Jn.map(function(e){return"w-".concat(e)})),er="___FONT_AWESOME___",tr="svg-inline--fa",nr="data-fa-i2svg",rr="data-fa-pseudo-element",ar="data-prefix",or="data-icon",ir="fontawesome-i2svg",lr=["HTML","HEAD","STYLE","SCRIPT"],sr=["::before","::after",":before",":after"],cr=function(){try{return!0}catch(e){return!1}}();function ur(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[kn]}})}var dr=Zt({},wn);dr[kn]=Zt(Zt(Zt(Zt({},{"fa-duotone":"duotone"}),wn[kn]),$n),Bn);var fr=ur(dr),pr=Zt({},{chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}});pr[kn]=Zt(Zt(Zt(Zt({},{duotone:"fad"}),pr[kn]),Hn),Wn);var mr=ur(pr),hr=Zt({},Yn);hr[kn]=Zt(Zt({},hr[kn]),{fak:"fa-kit"});var vr=ur(hr),gr=Zt({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}});gr[kn]=Zt(Zt({},gr[kn]),{"fa-kit":"fak"});ur(gr);var br=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,yr="fa-layers-text",xr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,wr=(ur(Zt({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}})),["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"]),Sr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},kr=[].concat(tn(["kit"]),tn(Zn)),Er=hn.FontAwesomeConfig||{};if(vn&&"function"===typeof vn.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=en(e,2),n=t[0],r=t[1],a=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=vn.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(n));void 0!==a&&null!==a&&(Er[r]=a)})}var Pr={styleDefault:"solid",familyDefault:kn,cssPrefix:"fa",replacementClass:tr,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Er.familyPrefix&&(Er.cssPrefix=Er.familyPrefix);var Cr=Zt(Zt({},Pr),Er);Cr.autoReplaceSvg||(Cr.observeMutations=!1);var jr={};Object.keys(Pr).forEach(function(e){Object.defineProperty(jr,e,{enumerable:!0,set:function(t){Cr[e]=t,Tr.forEach(function(e){return e(jr)})},get:function(){return Cr[e]}})}),Object.defineProperty(jr,"familyPrefix",{enumerable:!0,set:function(e){Cr.cssPrefix=e,Tr.forEach(function(e){return e(jr)})},get:function(){return Cr.cssPrefix}}),hn.FontAwesomeConfig=jr;var Tr=[];var _r=16,Ar={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nr(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Rr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function zr(e){return e.classList?Rr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Or(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Mr(e){return e.size!==Ar.size||e.x!==Ar.x||e.y!==Ar.y||e.rotate!==Ar.rotate||e.flipX||e.flipY}function Fr(){var e="fa",t=tr,n=jr.cssPrefix,r=jr.replacementClass,a=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}';if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var Ir=!1;function Dr(){jr.autoAddCss&&!Ir&&(!function(e){if(e&&yn){var t=vn.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=vn.head.childNodes,r=null,a=n.length-1;a>-1;a--){var o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}vn.head.insertBefore(t,r)}}(Fr()),Ir=!0)}var Ur={mixout:function(){return{dom:{css:Fr,insertCss:Dr}}},hooks:function(){return{beforeDOMElementCreation:function(){Dr()},beforeI2svg:function(){Dr()}}}},$r=hn||{};$r[er]||($r[er]={}),$r[er].styles||($r[er].styles={}),$r[er].hooks||($r[er].hooks={}),$r[er].shims||($r[er].shims=[]);var Br=$r[er],Hr=[],Wr=function(){vn.removeEventListener("DOMContentLoaded",Wr),Vr=1,Hr.map(function(e){return e()})},Vr=!1;function qr(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,a=e.children,o=void 0===a?[]:a;return"string"===typeof e?Or(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Or(e[n]),'" ')},"").trim()}(r),">").concat(o.map(qr).join(""),"</").concat(t,">")}function Gr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}yn&&((Vr=(vn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(vn.readyState))||vn.addEventListener("DOMContentLoaded",Wr));var Kr=function(e,t,n,r){var a,o,i,l=Object.keys(e),s=l.length,c=void 0!==r?function(e,t){return function(n,r,a,o){return e.call(t,n,r,a,o)}}(t,r):t;for(void 0===n?(a=1,i=e[l[0]]):(a=0,i=n);a<s;a++)i=c(i,e[o=l[a]],o,e);return i};function Yr(e){return 1!==tn(e).length?null:e.codePointAt(0).toString(16)}function Qr(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Xr(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==n&&n,a=Qr(t);"function"!==typeof Br.hooks.addPack||r?Br.styles[e]=Zt(Zt({},Br.styles[e]||{}),a):Br.hooks.addPack(e,Qr(t)),"fas"===e&&Xr("fa",t)}var Jr=Br.styles,Zr=Br.shims,ea=Object.keys(vr),ta=ea.reduce(function(e,t){return e[t]=Object.keys(vr[t]),e},{}),na=null,ra={},aa={},oa={},ia={},la={};function sa(e,t){var n,r=t.split("-"),a=r[0],o=r.slice(1).join("-");return a!==e||""===o||(n=o,~kr.indexOf(n))?null:o}var ca,ua=function(){var e=function(e){return Kr(Jr,function(t,n,r){return t[r]=Kr(n,e,{}),t},{})};ra=e(function(e,t,n){(t[3]&&(e[t[3]]=n),t[2])&&t[2].filter(function(e){return"number"===typeof e}).forEach(function(t){e[t.toString(16)]=n});return e}),aa=e(function(e,t,n){(e[n]=n,t[2])&&t[2].filter(function(e){return"string"===typeof e}).forEach(function(t){e[t]=n});return e}),la=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t="far"in Jr||jr.autoFetchSvg,n=Kr(Zr,function(e,n){var r=n[0],a=n[1],o=n[2];return"far"!==a||t||(a="fas"),"string"===typeof r&&(e.names[r]={prefix:a,iconName:o}),"number"===typeof r&&(e.unicodes[r.toString(16)]={prefix:a,iconName:o}),e},{names:{},unicodes:{}});oa=n.names,ia=n.unicodes,na=ha(jr.styleDefault,{family:jr.familyDefault})};function da(e,t){return(ra[e]||{})[t]}function fa(e,t){return(la[e]||{})[t]}function pa(e){return oa[e]||{prefix:null,iconName:null}}function ma(){return na}ca=function(e){na=ha(e.styleDefault,{family:jr.familyDefault})},Tr.push(ca),ua();function ha(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,n=void 0===t?kn:t,r=fr[n][e];if(n===En&&!e)return"fad";var a=mr[n][e]||mr[n][r],o=e in Br.styles?e:null;return a||o||null}function va(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var ga=Qn.concat(Un);function ba(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,n=void 0!==t&&t,r=null,a=va(e.filter(function(e){return ga.includes(e)})),o=va(e.filter(function(e){return!ga.includes(e)})),i=en(a.filter(function(e){return r=e,!Sn.includes(e)}),1)[0],l=void 0===i?null:i,s=function(e){var t=kn,n=ea.reduce(function(e,t){return e[t]="".concat(jr.cssPrefix,"-").concat(t),e},{});return In.forEach(function(r){(e.includes(n[r])||e.some(function(e){return ta[r].includes(e)}))&&(t=r)}),t}(a),c=Zt(Zt({},function(e){var t=[],n=null;return e.forEach(function(e){var r=sa(jr.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}(o)),{},{prefix:ha(l,{family:s})});return Zt(Zt(Zt({},c),function(e){var t=e.values,n=e.family,r=e.canonical,a=e.givenPrefix,o=void 0===a?"":a,i=e.styles,l=void 0===i?{}:i,s=e.config,c=void 0===s?{}:s,u=n===En,d=t.includes("fa-duotone")||t.includes("fad"),f="duotone"===c.familyDefault,p="fad"===r.prefix||"fa-duotone"===r.prefix;!u&&(d||f||p)&&(r.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab");if(!r.prefix&&ya.includes(n)){if(Object.keys(l).find(function(e){return xa.includes(e)})||c.autoFetchSvg){var m=Dn.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=fa(r.prefix,r.iconName)||r.iconName}}"fa"!==r.prefix&&"fa"!==o||(r.prefix=ma()||"fas");return r}({values:e,family:s,styles:Jr,config:jr,canonical:c,givenPrefix:r})),function(e,t,n){var r=n.prefix,a=n.iconName;if(e||!r||!a)return{prefix:r,iconName:a};var o="fa"===t?pa(a):{},i=fa(r,a);a=o.iconName||i||a,r=o.prefix||r,"far"!==r||Jr.far||!Jr.fas||jr.autoFetchSvg||(r="fas");return{prefix:r,iconName:a}}(n,r,c))}var ya=In.filter(function(e){return e!==kn||e!==En}),xa=Object.keys(Yn).filter(function(e){return e!==kn}).map(function(e){return Object.keys(Yn[e])}).flat();var wa=function(){return function(e,t,n){return t&&Yt(e.prototype,t),n&&Yt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}},[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(t){e.definitions[t]=Zt(Zt({},e.definitions[t]||{}),a[t]),Xr(t,a[t]),ua()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],a=r.prefix,o=r.iconName,i=r.icon,l=i[2];e[a]||(e[a]={}),l.length>0&&l.forEach(function(t){"string"===typeof t&&(e[a][t]=i)}),e[a][o]=i}),e}}])}(),Sa=[],ka={},Ea={},Pa=Object.keys(Ea);function Ca(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ka[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(r))}),t}function ja(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ka[e]||[]).forEach(function(e){e.apply(null,n)})}function Ta(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ea[e]?Ea[e].apply(null,t):void 0}function _a(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ma();if(t)return t=fa(n,t)||t,Gr(Aa.definitions,n,t)||Gr(Br.styles,n,t)}var Aa=new wa,Na={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return yn?(ja("beforeI2svg",e),Ta("pseudoElements2svg",e),Ta("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.autoReplaceSvgRoot;!1===jr.autoReplaceSvg&&(jr.autoReplaceSvg=!0),jr.observeMutations=!0,e=function(){Oa({autoReplaceSvgRoot:n}),ja("watch",t)},yn&&(Vr?setTimeout(e,0):Hr.push(e))}},Ra={icon:function(e){if(null===e)return null;if("object"===rn(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:fa(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=ha(e[0]);return{prefix:n,iconName:fa(n,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(jr.cssPrefix,"-"))>-1||e.match(br))){var r=ba(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||ma(),iconName:fa(r.prefix,r.iconName)||r.iconName}}if("string"===typeof e){var a=ma();return{prefix:a,iconName:fa(a,e)||e}}}},za={noAuto:function(){jr.autoReplaceSvg=!1,jr.observeMutations=!1,ja("noAuto")},config:jr,dom:Na,parse:Ra,library:Aa,findIconDefinition:_a,toHtml:qr},Oa=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?vn:e;(Object.keys(Br.styles).length>0||jr.autoFetchSvg)&&yn&&jr.autoReplaceSvg&&za.dom.i2svg({node:t})};function La(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return qr(e)})}}),Object.defineProperty(e,"node",{get:function(){if(yn){var t=vn.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Ma(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,o=e.iconName,i=e.transform,l=e.symbol,s=e.maskId,c=e.extra,u=e.watchable,d=void 0!==u&&u,f=r.found?r:n,p=f.width,m=f.height,h=[jr.replacementClass,o?"".concat(jr.cssPrefix,"-").concat(o):""].filter(function(e){return-1===c.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(c.classes).join(" "),v={children:[],attributes:Zt(Zt({},c.attributes),{},{"data-prefix":a,"data-icon":o,class:h,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(m)})};(function(e){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in e})})(c.attributes)||c.attributes["aria-hidden"]||(v.attributes["aria-hidden"]="true"),d&&(v.attributes[nr]="");var g=Zt(Zt({},v),{},{prefix:a,iconName:o,main:n,mask:r,maskId:s,transform:i,symbol:l,styles:Zt({},c.styles)}),b=r.found&&n.found?Ta("generateAbstractMask",g)||{children:[],attributes:{}}:Ta("generateAbstractIcon",g)||{children:[],attributes:{}},y=b.children,x=b.attributes;return g.children=y,g.attributes=x,l?function(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,o=e.symbol,i=!0===o?"".concat(t,"-").concat(jr.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Zt(Zt({},a),{},{id:i}),children:r}]}]}(g):function(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,o=e.styles,i=e.transform;if(Mr(i)&&n.found&&!r.found){var l={x:n.width/n.height/2,y:.5};a.style=Lr(Zt(Zt({},o),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(g)}function Fa(e){var t=e.content,n=e.width,r=e.height,a=e.transform,o=e.extra,i=e.watchable,l=void 0!==i&&i,s=Zt(Zt({},o.attributes),{},{class:o.classes.join(" ")});l&&(s[nr]="");var c=Zt({},o.styles);Mr(a)&&(c.transform=function(e){var t=e.transform,n=e.width,r=void 0===n?16:n,a=e.height,o=void 0===a?16:a,i=e.startCentered,l=void 0!==i&&i,s="";return s+=l&&xn?"translate(".concat(t.x/_r-r/2,"em, ").concat(t.y/_r-o/2,"em) "):l?"translate(calc(-50% + ".concat(t.x/_r,"em), calc(-50% + ").concat(t.y/_r,"em)) "):"translate(".concat(t.x/_r,"em, ").concat(t.y/_r,"em) "),s+="scale(".concat(t.size/_r*(t.flipX?-1:1),", ").concat(t.size/_r*(t.flipY?-1:1),") "),s+"rotate(".concat(t.rotate,"deg) ")}({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Lr(c);u.length>0&&(s.style=u);var d=[];return d.push({tag:"span",attributes:s,children:[t]}),d}var Ia=Br.styles;function Da(e){var t=e[0],n=e[1],r=en(e.slice(4),1)[0];return{found:!0,width:t,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(jr.cssPrefix,"-").concat(Sr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(jr.cssPrefix,"-").concat(Sr.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(jr.cssPrefix,"-").concat(Sr.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}var Ua={found:!1,width:512,height:512};function $a(e,t){var n=t;return"fa"===t&&null!==jr.styleDefault&&(t=ma()),new Promise(function(r,a){if("fa"===n){var o=pa(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ia[t]&&Ia[t][e])return r(Da(Ia[t][e]));!function(e,t){cr||jr.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),r(Zt(Zt({},Ua),{},{icon:jr.showMissingIcons&&e&&Ta("missingIconAbstract")||{}}))})}var Ba=function(){},Ha=jr.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Ba,measure:Ba},Wa='FA "7.0.0"',Va=function(e){Ha.mark("".concat(Wa," ").concat(e," ends")),Ha.measure("".concat(Wa," ").concat(e),"".concat(Wa," ").concat(e," begins"),"".concat(Wa," ").concat(e," ends"))},qa=function(e){return Ha.mark("".concat(Wa," ").concat(e," begins")),function(){return Va(e)}},Ga=function(){};function Ka(e){return"string"===typeof(e.getAttribute?e.getAttribute(nr):null)}function Ya(e){return vn.createElementNS("http://www.w3.org/2000/svg",e)}function Qa(e){return vn.createElement(e)}function Xa(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,n=void 0===t?"svg"===e.tag?Ya:Qa:t;if("string"===typeof e)return vn.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Xa(e,{ceFn:n}))}),r}var Ja={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Xa(e),t)}),null===t.getAttribute(nr)&&jr.keepOriginalSource){var n=vn.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~zr(t).indexOf(jr.replacementClass))return Ja.replace(e);var r=new RegExp("".concat(jr.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(e,t){return t===jr.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),0===a.toNode.length?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}var o=n.map(function(e){return qr(e)}).join("\n");t.setAttribute(nr,""),t.innerHTML=o}};function Za(e){e()}function eo(e,t){var n="function"===typeof t?t:Ga;if(0===e.length)n();else{var r=Za;"async"===jr.mutateApproach&&(r=hn.requestAnimationFrame||Za),r(function(){var t=!0===jr.autoReplaceSvg?Ja.replace:Ja[jr.autoReplaceSvg]||Ja.replace,r=qa("mutate");e.map(t),r(),n()})}}var to=!1;function no(){to=!0}function ro(){to=!1}var ao=null;function oo(e){if(gn&&jr.observeMutations){var t=e.treeCallback,n=void 0===t?Ga:t,r=e.nodeCallback,a=void 0===r?Ga:r,o=e.pseudoElementsCallback,i=void 0===o?Ga:o,l=e.observeMutationsRoot,s=void 0===l?vn:l;ao=new gn(function(e){if(!to){var t=ma();Rr(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Ka(e.addedNodes[0])&&(jr.searchPseudoElements&&i(e.target),n(e.target)),"attributes"===e.type&&e.target.parentNode&&jr.searchPseudoElements&&i([e.target],!0),"attributes"===e.type&&Ka(e.target)&&~wr.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(ar):null,n=e.getAttribute?e.getAttribute(or):null;return t&&n}(e.target)){var r=ba(zr(e.target)),o=r.prefix,l=r.iconName;e.target.setAttribute(ar,o||t),l&&e.target.setAttribute(or,l)}else(function(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(jr.replacementClass)})(e.target)&&a(e.target)})}}),yn&&ao.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function io(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"",a=ba(zr(e));return a.prefix||(a.prefix=ma()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=function(e,t){return(aa[e]||{})[t]}(a.prefix,e.innerText)||da(a.prefix,Yr(e.innerText))),!a.iconName&&jr.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function lo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=io(e),r=n.iconName,a=n.prefix,o=n.rest,i=function(e){return Rr(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{})}(e),l=Ca("parseNodeAttributes",{},e),s=t.styleParser?function(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(e,t){var n=t.split(":"),r=n[0],a=n.slice(1);return r&&a.length>0&&(e[r]=a.join(":").trim()),e},{})),n}(e):[];return Zt({iconName:r,prefix:a,transform:Ar,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:i}},l)}var so=Br.styles;function co(e){var t="nest"===jr.autoReplaceSvg?lo(e,{styleParser:!1}):lo(e);return~t.extra.classes.indexOf(yr)?Ta("generateLayersText",e,t):Ta("generateSvgReplacementMutation",e,t)}function uo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!yn)return Promise.resolve();var n=vn.documentElement.classList,r=function(e){return n.add("".concat(ir,"-").concat(e))},a=function(e){return n.remove("".concat(ir,"-").concat(e))},o=jr.autoFetchSvg?[].concat(tn(Un),tn(Qn)):Sn.concat(Object.keys(so));o.includes("fa")||o.push("fa");var i=[".".concat(yr,":not([").concat(nr,"])")].concat(o.map(function(e){return".".concat(e,":not([").concat(nr,"])")})).join(", ");if(0===i.length)return Promise.resolve();var l=[];try{l=Rr(e.querySelectorAll(i))}catch(u){}if(!(l.length>0))return Promise.resolve();r("pending"),a("complete");var s=qa("onTree"),c=l.reduce(function(e,t){try{var n=co(t);n&&e.push(n)}catch(u){cr||"MissingIcon"===u.name&&console.error(u)}return e},[]);return new Promise(function(e,n){Promise.all(c).then(function(n){eo(n,function(){r("active"),r("complete"),a("pending"),"function"===typeof t&&t(),s(),e()})}).catch(function(e){s(),n(e)})})}function fo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;co(e).then(function(e){e&&eo([e],t)})}function po(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(t||{}).icon?t:_a(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:_a(a||{})),e(r,Zt(Zt({},n),{},{mask:a}))}}var mo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?Ar:n,a=t.symbol,o=void 0!==a&&a,i=t.mask,l=void 0===i?null:i,s=t.maskId,c=void 0===s?null:s,u=t.classes,d=void 0===u?[]:u,f=t.attributes,p=void 0===f?{}:f,m=t.styles,h=void 0===m?{}:m;if(e){var v=e.prefix,g=e.iconName,b=e.icon;return La(Zt({type:"icon"},e),function(){return ja("beforeDOMElementCreation",{iconDefinition:e,params:t}),Ma({icons:{main:Da(b),mask:l?Da(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:g,transform:Zt(Zt({},Ar),r),symbol:o,maskId:c,extra:{attributes:p,styles:h,classes:d}})})}},ho={mixout:function(){return{icon:po(mo)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=uo,e.nodeCallback=fo,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=void 0===t?vn:t,r=e.callback;return uo(n,void 0===r?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,a=t.transform,o=t.symbol,i=t.mask,l=t.maskId,s=t.extra;return new Promise(function(t,c){Promise.all([$a(n,r),i.iconName?$a(i.iconName,i.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(i){var c=en(i,2),u=c[0],d=c[1];t([e,Ma({icons:{main:u,mask:d},prefix:r,iconName:n,transform:a,symbol:o,maskId:l,extra:s,watchable:!0})])}).catch(c)})},e.generateAbstractIcon=function(e){var t,n=e.children,r=e.attributes,a=e.main,o=e.transform,i=Lr(e.styles);return i.length>0&&(r.style=i),Mr(o)&&(t=Ta("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(t||a.icon),{children:n,attributes:r}}}},vo={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.classes,r=void 0===n?[]:n;return La({type:"layer"},function(){ja("beforeDOMElementCreation",{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(jr.cssPrefix,"-layers")].concat(tn(r)).join(" ")},children:n}]})}}}},go={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.title,r=void 0===n?null:n,a=t.classes,o=void 0===a?[]:a,i=t.attributes,l=void 0===i?{}:i,s=t.styles,c=void 0===s?{}:s;return La({type:"counter",content:e},function(){return ja("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,n=e.extra,r=Zt(Zt({},n.attributes),{},{class:n.classes.join(" ")}),a=Lr(n.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),o}({content:e.toString(),title:r,extra:{attributes:l,styles:c,classes:["".concat(jr.cssPrefix,"-layers-counter")].concat(tn(o))}})})}}}},bo={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?Ar:n,a=t.classes,o=void 0===a?[]:a,i=t.attributes,l=void 0===i?{}:i,s=t.styles,c=void 0===s?{}:s;return La({type:"text",content:e},function(){return ja("beforeDOMElementCreation",{content:e,params:t}),Fa({content:e,transform:Zt(Zt({},Ar),r),extra:{attributes:l,styles:c,classes:["".concat(jr.cssPrefix,"-layers-text")].concat(tn(o))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,a=null,o=null;if(xn){var i=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();a=l.width/i,o=l.height/i}return Promise.resolve([e,Fa({content:e.innerHTML,width:a,height:o,transform:n,extra:r,watchable:!0})])}}},yo=new RegExp('"',"ug"),xo=[1105920,1112319],wo=Zt(Zt(Zt(Zt({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),So=Object.keys(wo).reduce(function(e,t){return e[t.toLowerCase()]=wo[t],e},{}),ko=Object.keys(So).reduce(function(e,t){var n=So[t];return e[t]=n[900]||tn(Object.entries(n))[0][1],e},{});function Eo(e,t){var n="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(r,a){if(null!==e.getAttribute(n))return r();var o=Rr(e.children).filter(function(e){return e.getAttribute(rr)===t})[0],i=hn.getComputedStyle(e,t),l=i.getPropertyValue("font-family"),s=l.match(xr),c=i.getPropertyValue("font-weight"),u=i.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&"none"!==u&&""!==u){var d=i.getPropertyValue("content"),f=function(e,t){var n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(So[n]||{})[a]||ko[n]}(l,c),p=function(e){return Yr(tn(e.replace(yo,""))[0]||"")}(d),m=s[0].startsWith("FontAwesome"),h=function(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),n=e.getPropertyValue("content").replace(yo,""),r=n.codePointAt(0),a=r>=xo[0]&&r<=xo[1],o=2===n.length&&n[0]===n[1];return a||o||t}(i),v=da(f,p),g=v;if(m){var b=function(e){var t=ia[e],n=da("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(p);b.iconName&&b.prefix&&(v=b.iconName,f=b.prefix)}if(!v||h||o&&o.getAttribute(ar)===f&&o.getAttribute(or)===g)r();else{e.setAttribute(n,g),o&&e.removeChild(o);var y={iconName:null,prefix:null,transform:Ar,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},x=y.extra;x.attributes[rr]=t,$a(v,f).then(function(a){var o=Ma(Zt(Zt({},y),{},{icons:{main:a,mask:{prefix:null,iconName:null,rest:[]}},prefix:f,iconName:g,extra:x,watchable:!0})),i=vn.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(i,e.firstChild):e.appendChild(i),i.outerHTML=o.map(function(e){return qr(e)}).join("\n"),e.removeAttribute(n),r()}).catch(a)}}else r()})}function Po(e){return Promise.all([Eo(e,"::before"),Eo(e,"::after")])}function Co(e){return e.parentNode!==document.head&&!~lr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(rr)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}var jo=function(e){return!!e&&sr.some(function(t){return e.includes(t)})},To=function(e){if(!e)return[];for(var t=new Set,n=[e],r=function(){var e=o[a];n=n.flatMap(function(t){return t.split(e).map(function(e){return e.replace(/,\s*$/,"").trim()})})},a=0,o=[/(?=\s:)/,/(?<=\)\)?[^,]*,)/];a<o.length;a++)r();n=n.flatMap(function(e){return e.includes("(")?e:e.split(",").map(function(e){return e.trim()})});var i,l=Qt(n);try{for(l.s();!(i=l.n()).done;){var s=i.value;if(jo(s)){var c=sr.reduce(function(e,t){return e.replace(t,"")},s);""!==c&&"*"!==c&&t.add(c)}}}catch(u){l.e(u)}finally{l.f()}return t};function _o(e){if(yn){var t;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])t=e;else if(jr.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var n,r=new Set,a=Qt(document.styleSheets);try{for(a.s();!(n=a.n()).done;){var o=n.value;try{var i,l=Qt(o.cssRules);try{for(l.s();!(i=l.n()).done;){var s,c=i.value,u=Qt(To(c.selectorText));try{for(u.s();!(s=u.n()).done;){var d=s.value;r.add(d)}}catch(p){u.e(p)}finally{u.f()}}}catch(p){l.e(p)}finally{l.f()}}catch(m){jr.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(m.message,')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))}}}catch(p){a.e(p)}finally{a.f()}if(!r.size)return;var f=Array.from(r).join(", ");try{t=e.querySelectorAll(f)}catch(h){}}return new Promise(function(e,n){var r=Rr(t).filter(Co).map(Po),a=qa("searchPseudoElements");no(),Promise.all(r).then(function(){a(),ro(),e()}).catch(function(){a(),ro(),n()})})}}var Ao={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=_o,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=void 0===t?vn:t;jr.searchPseudoElements&&_o(n)}}},No=!1,Ro=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var n=t.toLowerCase().split("-"),r=n[0],a=n.slice(1).join("-");if(r&&"h"===a)return e.flipX=!0,e;if(r&&"v"===a)return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(r){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},zo={mixout:function(){return{parse:{transform:function(e){return Ro(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-transform");return n&&(e.transform=Ro(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,a=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(32*n.x,", ").concat(32*n.y,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),c={outer:o,inner:{transform:"".concat(i," ").concat(l," ").concat(s)},path:{transform:"translate(".concat(a/2*-1," -256)")}};return{tag:"g",attributes:Zt({},c.outer),children:[{tag:"g",attributes:Zt({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Zt(Zt({},t.icon.attributes),c.path)}]}]}}}},Oo={x:0,y:0,width:"100%",height:"100%"};function Lo(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Mo={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-mask"),r=n?ba(n.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=ma()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,n=e.children,r=e.attributes,a=e.main,o=e.mask,i=e.maskId,l=e.transform,s=a.width,c=a.icon,u=o.width,d=o.icon,f=function(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(o," ").concat(i," ").concat(l)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:l,containerWidth:u,iconWidth:s}),p={tag:"rect",attributes:Zt(Zt({},Oo),{},{fill:"white"})},m=c.children?{children:c.children.map(Lo)}:{},h={tag:"g",attributes:Zt({},f.inner),children:[Lo(Zt({tag:c.tag,attributes:Zt(Zt({},c.attributes),f.path)},m))]},v={tag:"g",attributes:Zt({},f.outer),children:[h]},g="mask-".concat(i||Nr()),b="clip-".concat(i||Nr()),y={tag:"mask",attributes:Zt(Zt({},Oo),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(t=d,"g"===t.tag?t.children:[t])},y]};return n.push(x,{tag:"rect",attributes:Zt({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},Oo)}),{children:n,attributes:r}}}},Fo={provides:function(e){var t=!1;hn.matchMedia&&(t=hn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:Zt(Zt({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=Zt(Zt({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Zt(Zt({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:Zt(Zt({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Zt(Zt({},a),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:Zt(Zt({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Zt(Zt({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:Zt(Zt({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Zt(Zt({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Io=[Ur,ho,vo,go,bo,Ao,{mixout:function(){return{dom:{unwatch:function(){no(),No=!0}}}},hooks:function(){return{bootstrap:function(){oo(Ca("mutationObserverCallbacks",{}))},noAuto:function(){ao&&ao.disconnect()},watch:function(e){var t=e.observeMutationsRoot;No?ro():oo(Ca("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},zo,Mo,Fo,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}}}}];!function(e,t){var n=t.mixoutsTo;Sa=e,ka={},Object.keys(Ea).forEach(function(e){-1===Pa.indexOf(e)&&delete Ea[e]}),Sa.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"===typeof t[e]&&(n[e]=t[e]),"object"===rn(t[e])&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){ka[e]||(ka[e]=[]),ka[e].push(r[e])})}e.provides&&e.provides(Ea)})}(Io,{mixoutsTo:za});var Do=za.parse,Uo=za.icon,$o=n(173),Bo=n.n($o);function Ho(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Wo(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function qo(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Vo(Object(n),!0).forEach(function(t){Wo(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Go(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,t)||Qo(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ko(e){return function(e){if(Array.isArray(e))return Ho(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Qo(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Yo(e){return Yo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yo(e)}function Qo(e,t){if(e){if("string"==typeof e)return Ho(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ho(e,t):void 0}}var Xo;try{var Jo=n(900);Xo=Jo.version}catch(Mn){Xo={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.FA_VERSION||"7.0.0-alpha8"}function Zo(e){var t=e.beat,n=e.fade,r=e.beatFade,a=e.bounce,o=e.shake,i=e.flash,l=e.spin,s=e.spinPulse,c=e.spinReverse,u=e.pulse,d=e.fixedWidth,f=e.inverse,p=e.border,m=e.listItem,h=e.flip,v=e.size,g=e.rotation,b=e.pull,y=e.swapOpacity,x=e.rotateBy,w=e.widthAuto,S=function(e,t){for(var n=Go(e.split("-"),2),r=n[0],a=n[1],o=Go(t.split("-"),2),i=o[0],l=o[1],s=r.split("."),c=i.split("."),u=0;u<Math.max(s.length,c.length);u++){var d=s[u]||"0",f=c[u]||"0",p=parseInt(d,10),m=parseInt(f,10);if(p!==m)return p>m}for(var h=0;h<Math.max(s.length,c.length);h++){var v=s[h]||"0",g=c[h]||"0";if(v!==g&&v.length!==g.length)return v.length<g.length}return!(a&&!l)}(Xo,"7.0.0-alpha1"),k=Wo(Wo(Wo(Wo(Wo(Wo({"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":o,"fa-flash":i,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":s,"fa-pulse":u,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(v),"undefined"!==typeof v&&null!==v),"fa-rotate-".concat(g),"undefined"!==typeof g&&null!==g&&0!==g),"fa-pull-".concat(b),"undefined"!==typeof b&&null!==b),"fa-swap-opacity",y),"fa-rotate-by",S&&x),"fa-width-auto",S&&w);return Object.keys(k).map(function(e){return k[e]?e:null}).filter(function(e){return e})}function ei(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1);var t}var ti=["style"];var ni=!1;try{ni=!0}catch(Mn){}function ri(e){return e&&"object"===Yo(e)&&e.prefix&&e.iconName&&e.icon?e:Do.icon?Do.icon(e):null===e?null:e&&"object"===Yo(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function ai(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Wo({},e,t):{}}var oi={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},ii=e.forwardRef(function(e,t){var n=qo(qo({},oi),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,l=n.title,s=n.titleId,c=n.maskId,u=ri(r),d=ai("classes",[].concat(Ko(Zo(n)),Ko((i||"").split(" ")))),f=ai("transform","string"===typeof n.transform?Do.transform(n.transform):n.transform),p=ai("mask",ri(a)),m=Uo(u,qo(qo(qo(qo({},d),f),p),{},{symbol:o,title:l,titleId:s,maskId:c}));if(!m)return function(){var e;!ni&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var h=m.abstract,v={ref:t};return Object.keys(n).forEach(function(e){oi.hasOwnProperty(e)||(v[e]=n[e])}),li(h[0],v)});ii.displayName="FontAwesomeIcon",ii.propTypes={beat:Bo().bool,border:Bo().bool,beatFade:Bo().bool,bounce:Bo().bool,className:Bo().string,fade:Bo().bool,flash:Bo().bool,mask:Bo().oneOfType([Bo().object,Bo().array,Bo().string]),maskId:Bo().string,fixedWidth:Bo().bool,inverse:Bo().bool,flip:Bo().oneOf([!0,!1,"horizontal","vertical","both"]),icon:Bo().oneOfType([Bo().object,Bo().array,Bo().string]),listItem:Bo().bool,pull:Bo().oneOf(["right","left"]),pulse:Bo().bool,rotation:Bo().oneOf([0,90,180,270]),rotateBy:Bo().bool,shake:Bo().bool,size:Bo().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Bo().bool,spinPulse:Bo().bool,spinReverse:Bo().bool,symbol:Bo().oneOfType([Bo().bool,Bo().string]),title:Bo().string,titleId:Bo().string,transform:Bo().oneOfType([Bo().string,Bo().object]),swapOpacity:Bo().bool,widthAuto:Bo().bool};var li=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var a=(n.children||[]).map(function(n){return e(t,n)}),o=Object.keys(n.attributes||{}).reduce(function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n,r=t.indexOf(":"),a=ei(t.slice(0,r)),o=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[a]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[ei(t)]=r}return e},{attrs:{}}),i=r.style,l=void 0===i?{}:i,s=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(r,ti);return o.attrs.style=qo(qo({},o.attrs.style),l),t.apply(void 0,[n.tag,qo(qo({},o.attrs),s)].concat(Ko(a)))}.bind(null,e.createElement);const si={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},ci=si,ui={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},di=ui,fi={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},pi={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},mi={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},hi=mi,vi={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},gi={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},bi={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},yi={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},xi={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},wi={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},Si=wi,ki={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},Ei=ki,Pi={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},Ci={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},ji={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Ti={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},_i=Ti,Ai={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Ni={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},Ri=Ni,zi={prefix:"fas",iconName:"tag",icon:[448,512,[127991],"f02b","M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Oi={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Li={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Mi=Li,Fi={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},Ii=Fi,Di={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Ui={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},$i={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Bi={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Hi=Bi,Wi={prefix:"fas",iconName:"user-shield",icon:[640,512,[],"f505","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3l-91.4 0zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7l0-187.8L591.4 312z"]},Vi={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},qi={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Gi={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},Ki={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Yi=Ki,Qi={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},Xi={prefix:"fas",iconName:"file-export",icon:[576,512,["arrow-right-from-file"],"f56e","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 128-168 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0 0 112c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM384 336l0-48 110.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L384 336zm0-208l-128 0L256 0 384 128z"]},Ji={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]},Zi={prefix:"fas",iconName:"note-sticky",icon:[448,512,[62026,"sticky-note"],"f249","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-112c0-26.5 21.5-48 48-48l112 0 0-224c0-35.3-28.7-64-64-64L64 32zM448 352l-45.3 0L336 352c-8.8 0-16 7.2-16 16l0 66.7 0 45.3 32-32 64-64 32-32z"]},el=Zi,tl={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};const nl="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname;console.log("\ud83c\udf10 Configura\xe7\xe3o de ambiente:",{NODE_ENV:"production",hostname:window.location.hostname,isDevelopment:nl});const rl={API_BASE_URL:"https://wrt-back.vercel.app/api",NODE_ENV:"production",IS_DEVELOPMENT:nl,IS_PRODUCTION:!nl,APP_NAME:"WRTmind",APP_VERSION:"1.0.0",FIREBASE_API_KEY:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_API_KEY,FIREBASE_AUTH_DOMAIN:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_AUTH_DOMAIN,FIREBASE_PROJECT_ID:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_PROJECT_ID,FIREBASE_STORAGE_BUCKET:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_STORAGE_BUCKET,FIREBASE_MESSAGING_SENDER_ID:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,FIREBASE_APP_ID:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_APP_ID,FIREBASE_MEASUREMENT_ID:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_MEASUREMENT_ID,ENABLE_DEBUG:nl,ENABLE_LOGS:!0,ENABLE_ANALYTICS:!nl},al=function(){return`${rl.API_BASE_URL}${arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}`};console.log("\ud83c\udf10 Configura\xe7\xe3o do Frontend:",{environment:rl.NODE_ENV,apiUrl:rl.API_BASE_URL,isDevelopment:rl.IS_DEVELOPMENT});const ol=rl.API_BASE_URL;async function il(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("\ud83c\udf10 makeRequest - Endpoint:",e),console.log("\ud83c\udf10 makeRequest - URL completa:",`${ol}${e}`),console.log("\ud83c\udf10 makeRequest - Options:",t);try{const n=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=al(e),r={headers:{"Content-Type":"application/json"},...t},a=localStorage.getItem("user");if(console.log("\ud83d\udd0d apiRequest - User do localStorage:",a),a)try{const e=JSON.parse(a);console.log("\ud83d\udd0d apiRequest - UserData:",e),e.id?(r.headers["user-id"]=e.id,console.log("\ud83d\udd0d apiRequest - Header user-id adicionado:",e.id)):console.log("\u274c apiRequest - UserData.id n\xe3o encontrado")}catch(o){console.error("\u274c apiRequest - Erro ao obter ID do usu\xe1rio:",o)}else console.log("\u274c apiRequest - User n\xe3o encontrado no localStorage");return console.log("\ud83d\udd0d apiRequest - Headers finais:",r.headers),fetch(n,r)}(e,t);if(console.log("\ud83d\udce1 makeRequest - Status:",n.status),console.log("\ud83d\udce1 makeRequest - Status Text:",n.statusText),!n.ok){const e=await n.text();throw console.error("\u274c makeRequest - Erro HTTP:",n.status,e),401===n.status&&(console.log("\ud83d\udd10 Erro 401 - Limpando dados do usu\xe1rio"),localStorage.removeItem("user"),window.dispatchEvent(new CustomEvent("userLogout"))),new Error(`HTTP ${n.status}: ${n.statusText}`)}const r=await n.json();return console.log("\ud83d\udce6 makeRequest - Dados recebidos:",r),r}catch(n){throw console.error("\u274c makeRequest - Erro:",n),new Error(`Erro na requisi\xe7\xe3o: ${n.message}`)}}console.log("\ud83c\udf10 API Base URL:",ol),console.log("\ud83c\udf10 Environment:",rl.NODE_ENV),console.log("\u2705 Configura\xe7\xe3o da API carregada:",{baseURL:ol,environment:rl.NODE_ENV,isDevelopment:rl.IS_DEVELOPMENT});const ll=()=>{const e=localStorage.getItem("user");if(console.log("\ud83d\udd0d getUserId - User do localStorage:",e),e)try{const t=JSON.parse(e);return console.log("\ud83d\udd0d getUserId - UserData:",t),console.log("\ud83d\udd0d getUserId - UserId:",t.id),t.id}catch(t){console.error("\u274c getUserId - Erro ao obter ID do usu\xe1rio:",t)}else console.log("\u274c getUserId - User n\xe3o encontrado no localStorage");return null},sl={buscarTodos:async()=>{try{console.log("\ud83c\udf10 API - listarLinks chamado");const e=`${rl.API_BASE_URL}/links`;console.log("\ud83c\udf10 API - URL completa:",e);const t=await fetch(e,{method:"GET",headers:{"Content-Type":"application/json","user-id":ll()}});if(console.log("\ud83d\udce1 API - Status:",t.status),console.log("\ud83d\udce1 API - Status Text:",t.statusText),!t.ok){const e=await t.text();throw console.error("\u274c API - Erro HTTP:",t.status,e),new Error(`HTTP ${t.status}: ${e}`)}const n=await t.json();return console.log("\u2705 API - listarLinks resposta:",n),n}catch(e){throw console.error("Erro ao listar links:",e),e}},buscarPorId:async e=>{try{return await il(`/links/${e}`)}catch(t){throw console.error("Erro ao buscar link por ID:",t),t}},criar:async e=>{try{console.log("\ud83c\udf10 API - criarLink chamado com dados:",e);const t=ll();if(console.log("\ud83c\udf10 API - UserId obtido:",t),!t)throw new Error("Usu\xe1rio n\xe3o autenticado");const n={nome:e.nome,url:e.url,imagemUrl:e.imagemUrl||""};console.log("\ud83c\udf10 API - dados corretos para Vercel:",n);const r=`${rl.API_BASE_URL}/links`;console.log("\ud83c\udf10 API - URL completa:",r);const a=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json","user-id":t},body:JSON.stringify(n)});if(console.log("\ud83d\udce1 API - Status:",a.status),console.log("\ud83d\udce1 API - Status Text:",a.statusText),!a.ok){const e=await a.text();throw console.error("\u274c API - Erro HTTP:",a.status,e),new Error(`HTTP ${a.status}: ${e}`)}const o=await a.json();return console.log("\u2705 API - criarLink resposta:",o),o}catch(t){throw console.error("Erro ao criar link:",t),t}},atualizar:async(e,t)=>{try{console.log("\ud83c\udf10 API - atualizarLink chamado com ID:",e,"dados:",t);const n={nome:t.nome,url:t.url,imagemUrl:t.imagemUrl||""};console.log("\ud83c\udf10 API - dados corretos para Vercel:",n);const r=`${rl.API_BASE_URL}/links?id=${e}`;console.log("\ud83c\udf10 API - URL completa:",r);const a=await fetch(r,{method:"PUT",headers:{"Content-Type":"application/json","user-id":ll()},body:JSON.stringify(n)});if(console.log("\ud83d\udce1 API - Status:",a.status),console.log("\ud83d\udce1 API - Status Text:",a.statusText),!a.ok){const e=await a.text();throw console.error("\u274c API - Erro HTTP:",a.status,e),new Error(`HTTP ${a.status}: ${e}`)}const o=await a.json();return console.log("\u2705 API - atualizarLink resposta:",o),o}catch(n){throw console.error("\u274c API - Erro ao atualizar link:",n),n}},deletar:async e=>{try{console.log("\ud83c\udf10 API - deletarLink chamado com ID:",e);const t=`${rl.API_BASE_URL}/links?id=${e}`;console.log("\ud83c\udf10 API - URL completa:",t);const n=await fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json","user-id":ll()}});if(console.log("\ud83d\udce1 API - Status:",n.status),console.log("\ud83d\udce1 API - Status Text:",n.statusText),!n.ok){const e=await n.text();throw console.error("\u274c API - Erro HTTP:",n.status,e),new Error(`HTTP ${n.status}: ${e}`)}const r=await n.json();return console.log("\u2705 API - deletarLink resposta:",r),r}catch(t){throw console.error("\u274c API - Erro ao deletar link:",t),t}},sincronizarManual:()=>il("/links/sincronizar-manual",{method:"POST"})},cl=async function(){try{const t=localStorage.getItem("user");let n=null;if(t)try{n=JSON.parse(t).id}catch(e){console.error("\u274c Erro ao obter ID do usu\xe1rio:",e)}if(!n)throw new Error("Usu\xe1rio n\xe3o autenticado");const r=`${rl.API_BASE_URL}/notas?userId=${n}`;console.log("\ud83c\udf10 API - listarNotas URL:",r);const a=await fetch(r);if(!a.ok){const e=await a.text();throw new Error(`HTTP ${a.status}: ${e}`)}const o=await a.json();return console.log("\ud83d\udce6 API - listarNotas dados:",o),o}catch(e){throw console.error("Erro ao listar notas:",e),e}},ul=async e=>{try{return await il(`/notas/${e}`)}catch(t){throw console.error("Erro ao buscar nota por ID:",t),t}},dl=async e=>{try{const n=localStorage.getItem("user");let r=null;if(n)try{r=JSON.parse(n).id}catch(t){console.error("\u274c Erro ao obter ID do usu\xe1rio:",t)}if(!r)throw new Error("Usu\xe1rio n\xe3o autenticado");const a=`${rl.API_BASE_URL}/notas`;console.log("\ud83c\udf10 API - criarNota URL:",a),console.log("\ud83c\udf10 API - criarNota dados:",{...e,userId:r});const o=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,userId:r})});if(!o.ok){const e=await o.text();throw new Error(`HTTP ${o.status}: ${e}`)}const i=await o.json();return console.log("\u2705 API - criarNota resposta:",i),i}catch(t){throw console.error("\u274c API - Erro ao criar nota:",t),t}},fl=async(e,t)=>{try{console.log("\ud83c\udf10 API - atualizarNota chamado com ID:",e,"dados:",t);const n=`${rl.API_BASE_URL}/notas?id=${e}`;console.log("\ud83c\udf10 API - URL completa:",n);const r=await fetch(n,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(console.log("\ud83d\udce1 API - Status:",r.status),console.log("\ud83d\udce1 API - Status Text:",r.statusText),!r.ok){const e=await r.text();throw console.error("\u274c API - Erro HTTP:",r.status,e),new Error(`HTTP ${r.status}: ${e}`)}const a=await r.json();return console.log("\u2705 API - atualizarNota resposta:",a),a}catch(n){throw console.error("\u274c API - Erro ao atualizar nota:",n),console.error("\u274c API - Stack trace:",n.stack),n}},pl=async e=>{try{console.log("\ud83c\udf10 API - deletarNota chamado com ID:",e);const t=`${rl.API_BASE_URL}/notas?id=${e}`;console.log("\ud83c\udf10 API - URL completa:",t);const n=await fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}});if(console.log("\ud83d\udce1 API - Status:",n.status),console.log("\ud83d\udce1 API - Status Text:",n.statusText),!n.ok){const e=await n.text();throw console.error("\u274c API - Erro HTTP:",n.status,e),new Error(`HTTP ${n.status}: ${e}`)}const r=await n.json();return console.log("\u2705 API - deletarNota resposta:",r),r}catch(t){throw console.error("\u274c API - Erro ao deletar nota:",t),console.error("\u274c API - Stack trace:",t.stack),t}},ml=async e=>{try{return await il(`/notas/${e}/restore`,{method:"PATCH"})}catch(t){throw console.error("Erro ao restaurar nota:",t),t}},hl=async e=>{try{return await il(`/notas/${e}/permanent`,{method:"DELETE"})}catch(t){throw console.error("Erro ao excluir nota definitivamente:",t),t}},vl=async e=>{try{return await il(`/notas/${e}/favorito`,{method:"PATCH"})}catch(t){throw console.error("Erro ao alternar favorito:",t),t}},gl=async e=>{try{return await il(`/notas/${e}/fixado`,{method:"PATCH"})}catch(t){throw console.error("Erro ao alternar fixado:",t),t}},bl=async(e,t)=>{try{return await il(`/notas/${e}/ordenacao`,{method:"PATCH",body:JSON.stringify({ordenacao:t})})}catch(n){throw console.error("Erro ao atualizar ordena\xe7\xe3o:",n),n}},yl=async e=>{try{return await il("/notas/ordenacao-multipla",{method:"PATCH",body:JSON.stringify({ordenacoes:e})})}catch(t){throw console.error("Erro ao atualizar m\xfaltiplas ordena\xe7\xf5es:",t),t}},xl=async()=>{try{return await il("/notas/favoritas")}catch(e){throw console.error("Erro ao buscar favoritas:",e),e}},wl=async()=>{try{return await il("/notas/fixadas")}catch(e){throw console.error("Erro ao buscar fixadas:",e),e}},Sl=async()=>{try{return await il("/categorias")}catch(e){throw console.error("Erro ao listar categorias:",e),e}},kl=async e=>{try{return await il("/categorias",{method:"POST",body:JSON.stringify(e)})}catch(t){throw console.error("Erro ao criar categoria:",t),t}},El=async(e,t)=>{try{return await il(`/categorias/${e}`,{method:"PUT",body:JSON.stringify(t)})}catch(n){throw console.error("Erro ao atualizar categoria:",n),n}},Pl=async e=>{try{return await il(`/categorias/${e}`,{method:"DELETE"})}catch(t){throw console.error("Erro ao deletar categoria:",t),t}};var Cl=n(579);const jl=(0,e.createContext)(),Tl=()=>{const t=(0,e.useContext)(jl);if(!t)throw new Error("useNotasAPIContext deve ser usado dentro de um NotasAPIProvider");return t},_l=t=>{let{children:n}=t;const[r,a]=(0,e.useState)("anotacoes"),[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(""),[c,u]=(0,e.useState)("dataCriacao"),{notas:d,categorias:f,topicos:p,carregando:m,erro:h,carregarNotas:v,carregarCategorias:g,carregarTopicos:b,criarNota:y,atualizarNota:x,deletarNota:w,restaurarNota:S,excluirNotaDefinitivamente:k,buscarNotaPorId:E,filtrarPorCategoria:P,buscarPorTermo:C,limparErro:j,notasAtivas:T,notasDeletadas:_,adicionarCategoria:A,editarCategoria:N,removerCategoria:R,alternarFavorito:z,buscarFavoritas:O}=(()=>{const[t,n]=(0,e.useState)([]),[r,a]=(0,e.useState)([]),[o,i]=(0,e.useState)([]),[l,s]=(0,e.useState)(!1),[c,u]=(0,e.useState)(null),d=(0,e.useCallback)(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(!0),u(null);try{const r=await cl(e);var t;r&&r.success?(n(r.notas||[]),console.log("\u2705 Notas carregadas:",(null===(t=r.notas)||void 0===t?void 0:t.length)||0)):(console.error("\u274c Resposta inv\xe1lida da API:",r),u("Resposta inv\xe1lida da API"))}catch(r){console.error("Erro ao carregar notas:",r),u(r.message)}finally{s(!1)}},[]),f=(0,e.useCallback)(async()=>{try{const e=await Sl();a(e.categorias||[])}catch(e){console.error("Erro ao carregar categorias:",e),u(e.message)}},[]),p=(0,e.useCallback)(async()=>{try{const e=await Sl();i(e.categorias||[])}catch(e){console.error("Erro ao carregar t\xf3picos:",e),u(e.message)}},[]),m=(0,e.useCallback)(async e=>{s(!0),u(null);try{const t=await dl(e);return await d({ativo:!0}),t}catch(t){throw console.error("Erro ao criar nota:",t),u(t.message),t}finally{s(!1)}},[d]),h=(0,e.useCallback)(async(e,t)=>{s(!0),u(null);try{const n=await fl(e,t);return await d({ativo:!0}),n}catch(n){throw console.error("Erro ao atualizar nota:",n),u(n.message),n}finally{s(!1)}},[d]),v=(0,e.useCallback)(async e=>{s(!0),u(null);try{await pl(e),await d({ativo:!0})}catch(t){throw console.error("Erro ao deletar nota:",t),u(t.message),t}finally{s(!1)}},[d]),g=(0,e.useCallback)(async e=>{s(!0),u(null);try{const t=(await ml(e)).nota;return await d({ativo:!0}),t}catch(t){throw console.error("Erro ao restaurar nota:",t),u(t.message),t}finally{s(!1)}},[d]),b=(0,e.useCallback)(async e=>{s(!0),u(null);try{return await hl(e),await d({ativo:!0}),!0}catch(t){throw console.error("Erro ao excluir nota definitivamente:",t),u(t.message),t}finally{s(!1)}},[d]),y=(0,e.useCallback)(async e=>{s(!0),u(null);try{const t=await vl(e);return await d({ativo:!0}),t}catch(t){throw console.error("Erro ao alternar favorito:",t),u(t.message),t}finally{s(!1)}},[d]),x=(0,e.useCallback)(async()=>{s(!0),u(null);try{return(await xl()).notas||[]}catch(e){return console.error("Erro ao buscar favoritas:",e),u(e.message),[]}finally{s(!1)}},[]),w=(0,e.useCallback)(async e=>{s(!0),u(null);try{const t=(await gl(e)).nota;return n(n=>n.map(n=>n.id===e?{...n,fixado:t.fixado}:n)),t}catch(t){throw console.error("Erro ao alternar fixado:",t),u(t.message),t}finally{s(!1)}},[]),S=(0,e.useCallback)(async(e,t)=>{s(!0),u(null);try{const r=(await bl(e,t)).nota;return n(t=>t.map(t=>t.id===e?{...t,ordenacao:r.ordenacao}:t)),r}catch(r){throw console.error("Erro ao atualizar ordena\xe7\xe3o:",r),u(r.message),r}finally{s(!1)}},[]),k=(0,e.useCallback)(async e=>{s(!0),u(null);try{return await yl(e),await d({ativo:!0}),!0}catch(t){throw console.error("Erro ao atualizar m\xfaltiplas ordena\xe7\xf5es:",t),u(t.message),t}finally{s(!1)}},[d]),E=(0,e.useCallback)(async()=>{s(!0),u(null);try{return(await wl()).notas||[]}catch(e){return console.error("Erro ao buscar notas fixadas:",e),u(e.message),[]}finally{s(!1)}},[]),P=(0,e.useCallback)(async e=>{s(!0),u(null);try{return(await ul(e)).nota}catch(t){throw console.error("Erro ao buscar nota:",t),u(t.message),t}finally{s(!1)}},[]),C=(0,e.useCallback)(async e=>await d({categoria:e,ativo:!0}),[d]),j=(0,e.useCallback)(async e=>t.filter(t=>t.titulo.toLowerCase().includes(e.toLowerCase())||t.conteudo.toLowerCase().includes(e.toLowerCase())),[t]),T=(0,e.useCallback)(()=>{u(null)},[]),_=(0,e.useCallback)(async e=>{try{const t=(await kl(e)).categoria;return a(e=>[...e,t]),t}catch(t){throw console.error("Erro ao adicionar categoria:",t),u(t.message),t}},[]),A=(0,e.useCallback)(async(e,t)=>{try{const n=(await El(e,t)).categoria;return a(t=>t.map(t=>t.id===e?n:t)),n}catch(n){throw console.error("Erro ao editar categoria:",n),u(n.message),n}},[]),N=(0,e.useCallback)(async e=>{try{return await Pl(e),a(t=>t.filter(t=>t.id!==e)),!0}catch(t){throw console.error("Erro ao remover categoria:",t),u(t.message),t}},[]);return(0,e.useEffect)(()=>{console.log("\ud83d\ude80 Verificando se usu\xe1rio est\xe1 logado..."),(async()=>{try{const t=localStorage.getItem("user");if(!t)return console.log("\u26a0\ufe0f Usu\xe1rio n\xe3o est\xe1 logado, aguardando login..."),n([]),void a([]);let r;try{if(r=JSON.parse(t),!r.id)return console.log("\u26a0\ufe0f Dados do usu\xe1rio inv\xe1lidos, aguardando login v\xe1lido..."),n([]),void a([])}catch(e){return console.log("\u26a0\ufe0f Erro ao parsear dados do usu\xe1rio, aguardando login v\xe1lido..."),n([]),void a([])}console.log("\u2705 Usu\xe1rio logado, carregando dados...");const o=await cl();n(o.notas||[]);const i=(await Sl()).categorias||[];a(i)}catch(e){console.error("Erro ao carregar dados iniciais:",e),u(e.message),n([]),a([])}})()},[]),(0,e.useEffect)(()=>{const e=e=>{"user"===e.key&&(console.log("\ud83d\udc64 Mudan\xe7a detectada no localStorage (user)"),e.newValue?(console.log("\u2705 Usu\xe1rio logado, carregando dados..."),(async()=>{try{const e=await cl();n(e.notas||[]);const t=(await Sl()).categorias||[];a(t)}catch(e){console.error("Erro ao carregar dados ap\xf3s login:",e),u(e.message)}})()):(console.log("\ud83d\udeaa Usu\xe1rio deslogado, limpando dados..."),n([]),a([]),u(null)))},t=e=>{console.log("\ud83d\udc64 Evento de login detectado:",e.detail),console.log("\u2705 Usu\xe1rio logado, carregando dados..."),(async()=>{try{const e=await cl();n(e.notas||[]);const t=(await Sl()).categorias||[];a(t)}catch(e){console.error("Erro ao carregar dados ap\xf3s login:",e),u(e.message)}})()},r=()=>{console.log("\ud83d\udeaa Evento de logout detectado"),console.log("\ud83d\udeaa Usu\xe1rio deslogado, limpando dados..."),n([]),a([]),u(null)};return window.addEventListener("storage",e),window.addEventListener("userLogin",t),window.addEventListener("userLogout",r),()=>{window.removeEventListener("storage",e),window.removeEventListener("userLogin",t),window.removeEventListener("userLogout",r)}},[]),{notas:t,categorias:r,topicos:o,carregando:l,erro:c,carregarNotas:d,carregarCategorias:f,carregarTopicos:p,criarNota:m,atualizarNota:h,deletarNota:v,restaurarNota:g,excluirNotaDefinitivamente:b,buscarNotaPorId:P,filtrarPorCategoria:C,buscarPorTermo:j,limparErro:T,alternarFixado:w,atualizarOrdenacao:S,atualizarMultiplasOrdenacoes:k,buscarFixadas:E,alternarFavorito:y,buscarFavoritas:x,adicionarCategoria:_,editarCategoria:A,removerCategoria:N,notasAtivas:t?t.filter(e=>!1!==e.ativo):[],notasDeletadas:t?t.filter(e=>!1===e.ativo):[],notasFixadas:t?t.filter(e=>e.fixado&&!1!==e.ativo):[]}})();(0,e.useEffect)(()=>(window.notasContext={carregarNotas:v,carregarCategorias:g,carregarTopicos:b,recarregarDados:M},()=>{delete window.notasContext}),[v,g,b]);const L=(0,e.useMemo)(()=>{if(!T||0===T.length)return[];let e=[...T];if(r&&"anotacoes"!==r&&(e=e.filter(e=>e.topico===r)),l&&l.trim()){const t=l.toLowerCase().trim();e=e.filter(e=>e.titulo.toLowerCase().includes(t)||e.conteudo.toLowerCase().includes(t))}switch(c){case"dataCriacao":e.sort((e,t)=>new Date(t.dataCriacao)-new Date(e.dataCriacao));break;case"dataModificacao":e.sort((e,t)=>new Date(t.dataModificacao)-new Date(e.dataModificacao));break;case"titulo":e.sort((e,t)=>e.titulo.localeCompare(t.titulo));break;case"topico":e.sort((e,t)=>e.topico.localeCompare(t.topico))}return e},[T,r,l,c]),M=async()=>{try{await v({ativo:!0}),await g(),await b()}catch(e){console.error("Erro ao recarregar dados:",e)}},F={totalNotas:T?T.length:0,totalCategorias:f?f.length:0,notasDeletadas:_?_.length:0,notasPorCategoria:f?f.map(e=>({categoria:e.nome,quantidade:T?T.filter(t=>t.topico===e.nome).length:0})):[],notasPorTopico:p?p.map(e=>({topico:e,quantidade:T?T.filter(t=>t.topico===e).length:0})):[]},I={notas:L,todasAsNotas:d,categorias:f,topicos:p,carregando:m,erro:h,categoriaAtiva:r,menuRecolhido:o,termoBusca:l,ordenacao:c,estatisticas:F,adicionarNota:async e=>{try{return await y(e)}catch(t){throw console.error("Erro ao adicionar nota:",t),t}},editarNota:async(e,t)=>{try{return await x(e,t)}catch(n){throw console.error("Erro ao editar nota:",n),n}},excluirNota:async e=>{try{await w(e)}catch(t){throw console.error("Erro ao excluir nota:",t),t}},excluirNotaDefinitivamente:k,visualizarNota:async e=>{try{return await E(e)}catch(t){throw console.error("Erro ao buscar nota:",t),t}},restaurarNota:S,carregarNotas:v,carregarCategorias:g,carregarTopicos:b,adicionarCategoria:A,editarCategoria:N,removerCategoria:R,filtrarPorCategoria:async e=>{try{return await P(e)}catch(t){throw console.error("Erro ao filtrar por categoria:",t),t}},buscarNotas:async e=>{try{return await C(e)}catch(t){throw console.error("Erro ao buscar notas:",t),t}},recarregarDados:M,definirCategoriaAtiva:e=>{a(e)},alternarMenu:()=>{i(!o)},definirTermoBusca:e=>{s(e)},definirOrdenacao:e=>{u(e)},limparErro:j,notasAtivas:T,notasDeletadas:_,buscarFavoritas:O,alternarFavorito:z};return(0,Cl.jsx)(jl.Provider,{value:I,children:n})},Al=Vt.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  padding: 20px;
`,Nl=Vt.div`
  background: white;
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraForte);
  padding: 40px;
  width: 100%;
  max-width: 400px;
`,Rl=Vt.div`
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
`,zl=Vt.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 2px solid var(--corBordaPrimaria);
`,Ol=Vt.button`
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
`,Ll=Vt.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ml=Vt.div`
  position: relative;
`,Fl=Vt.input`
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
`,Il=Vt.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
  z-index: 1;
`,Dl=Vt.button`
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
`,Ul=Vt.button`
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
`,$l=Vt.div`
  background: var(--corErro);
  color: white;
  padding: 10px;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  text-align: center;
`,Bl=Vt.div`
  background: var(--corSucesso);
  color: white;
  padding: 10px;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  text-align: center;
`,Hl=Vt.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
`,Wl=t=>{let{onLogin:n}=t;const[r,a]=(0,e.useState)("login"),[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1),[c,u]=(0,e.useState)(""),[d,f]=(0,e.useState)(""),[p,m]=(0,e.useState)({email:"",senha:""}),[h,v]=(0,e.useState)({nome:"",email:"",senha:"",confirmarSenha:""}),g=(e,t,n)=>{"login"===e?m(e=>({...e,[t]:n})):v(e=>({...e,[t]:n})),u(""),f("")};return(0,Cl.jsx)(Al,{children:(0,Cl.jsxs)(Nl,{children:[(0,Cl.jsxs)(Rl,{children:[(0,Cl.jsx)("h1",{children:"WRTmind"}),(0,Cl.jsx)("p",{children:"Organize suas ideias e links"})]}),(0,Cl.jsxs)(zl,{children:[(0,Cl.jsx)(Ol,{"data-active":"login"===r,onClick:()=>a("login"),children:"Login"}),(0,Cl.jsx)(Ol,{"data-active":"cadastro"===r,onClick:()=>a("cadastro"),children:"Cadastro"})]}),c&&(0,Cl.jsx)($l,{children:c}),d&&(0,Cl.jsx)(Bl,{children:d}),"login"===r?(0,Cl.jsxs)(Ll,{onSubmit:async e=>{if(e.preventDefault(),s(!0),u(""),!p.email||!p.email.trim())return u("Email \xe9 obrigat\xf3rio"),void s(!1);if(!p.senha||!p.senha.trim())return u("Senha \xe9 obrigat\xf3ria"),void s(!1);try{console.log("Enviando login:",p);const e=await fetch(al("/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:p.email.trim(),senha:p.senha.trim()})}),t=await e.json();if(console.log("Resposta do login:",t),e.ok){f("Login realizado com sucesso!");const e=t.usuario||t.user;e?(localStorage.setItem("user",JSON.stringify(e)),console.log("\ud83d\udd0d Dados do usu\xe1rio para onLogin:",e),n(e)):u("Dados do usu\xe1rio inv\xe1lidos na resposta")}else u(t.error||"Erro ao fazer login")}catch(c){console.error("Erro no login:",c),u("Erro de conex\xe3o. Verifique se o servidor est\xe1 rodando.")}finally{s(!1)}},children:[(0,Cl.jsxs)(Ml,{children:[(0,Cl.jsx)(Il,{children:(0,Cl.jsx)(ii,{icon:Oi})}),(0,Cl.jsx)(Fl,{type:"email",placeholder:"Email",value:p.email,onChange:e=>g("login","email",e.target.value),required:!0})]}),(0,Cl.jsxs)(Ml,{children:[(0,Cl.jsx)(Il,{children:(0,Cl.jsx)(ii,{icon:pi})}),(0,Cl.jsx)(Fl,{type:o?"text":"password",placeholder:"Senha",value:p.senha,onChange:e=>g("login","senha",e.target.value),required:!0}),(0,Cl.jsx)(Dl,{type:"button",onClick:()=>i(!o),children:(0,Cl.jsx)(ii,{icon:o?gi:ji})})]}),(0,Cl.jsxs)(Ul,{type:"submit",disabled:l,children:[l&&(0,Cl.jsx)(Hl,{}),l?"Entrando...":"Entrar"]})]}):(0,Cl.jsxs)(Ll,{onSubmit:async e=>{if(e.preventDefault(),s(!0),u(""),!h.nome||!h.nome.trim())return u("Nome \xe9 obrigat\xf3rio"),void s(!1);if(!h.email||!h.email.trim())return u("Email \xe9 obrigat\xf3rio"),void s(!1);if(!h.senha||!h.senha.trim())return u("Senha \xe9 obrigat\xf3ria"),void s(!1);if(h.senha!==h.confirmarSenha)return u("As senhas n\xe3o coincidem"),void s(!1);try{console.log("Enviando cadastro:",h);const e=await fetch(al("/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:h.nome.trim(),email:h.email.trim(),senha:h.senha.trim()})}),t=await e.json();console.log("Resposta do cadastro:",t),e.ok?(f("Cadastro realizado com sucesso! Fa\xe7a login para continuar."),v({nome:"",email:"",senha:"",confirmarSenha:""}),setTimeout(()=>{a("login"),f("")},2e3)):u(t.error||"Erro ao fazer cadastro")}catch(c){console.error("Erro no cadastro:",c),u("Erro de conex\xe3o. Verifique se o servidor est\xe1 rodando.")}finally{s(!1)}},children:[(0,Cl.jsxs)(Ml,{children:[(0,Cl.jsx)(Il,{children:(0,Cl.jsx)(ii,{icon:bi})}),(0,Cl.jsx)(Fl,{type:"text",placeholder:"Nome completo",value:h.nome,onChange:e=>g("cadastro","nome",e.target.value),required:!0})]}),(0,Cl.jsxs)(Ml,{children:[(0,Cl.jsx)(Il,{children:(0,Cl.jsx)(ii,{icon:Oi})}),(0,Cl.jsx)(Fl,{type:"email",placeholder:"Email",value:h.email,onChange:e=>g("cadastro","email",e.target.value),required:!0})]}),(0,Cl.jsxs)(Ml,{children:[(0,Cl.jsx)(Il,{children:(0,Cl.jsx)(ii,{icon:pi})}),(0,Cl.jsx)(Fl,{type:o?"text":"password",placeholder:"Senha",value:h.senha,onChange:e=>g("cadastro","senha",e.target.value),required:!0}),(0,Cl.jsx)(Dl,{type:"button",onClick:()=>i(!o),children:(0,Cl.jsx)(ii,{icon:o?gi:ji})})]}),(0,Cl.jsxs)(Ml,{children:[(0,Cl.jsx)(Il,{children:(0,Cl.jsx)(ii,{icon:pi})}),(0,Cl.jsx)(Fl,{type:o?"text":"password",placeholder:"Confirmar senha",value:h.confirmarSenha,onChange:e=>g("cadastro","confirmarSenha",e.target.value),required:!0})]}),(0,Cl.jsxs)(Ul,{type:"submit",disabled:l,children:[l&&(0,Cl.jsx)(Hl,{}),l?"Cadastrando...":"Cadastrar"]})]})]})})},Vl=Gt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ql=Gt`
  0% { box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.7); }
  70% { box-shadow: 0 0 0 16px rgba(0, 191, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 191, 255, 0); }
`,Gl=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  width: 100%;
`,Kl=Vt.div`
  width: ${e=>e.tamanho||"64px"};
  height: ${e=>e.tamanho||"64px"};
  border: ${e=>e.tamanho?"2px":"8px"} solid #e0e0e0;
  border-top: ${e=>e.tamanho?"2px":"8px"} solid #00bfff;
  border-radius: 50%;
  animation: ${Vl} 1s linear infinite;
  ${e=>!e.tamanho&&Bt`
    animation: ${Vl} 1s linear infinite, ${ql} 1.2s infinite;
    margin-bottom: 18px;
    box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.7);
  `}
`,Yl=Vt.div`
  color: #00bfff;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
`,Ql=e=>{let{texto:t="Carregando...",tamanho:n}=e;return n?(0,Cl.jsx)(Kl,{tamanho:n}):(0,Cl.jsxs)(Gl,{children:[(0,Cl.jsx)(Kl,{}),(0,Cl.jsx)(Yl,{children:t})]})},Xl=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"completo";if(!e)return"";const n=new Date(e);if(isNaN(n.getTime()))return"";const r=new Date-n,a=Math.floor(r/864e5);switch(t){case"curto":return n.toLocaleDateString("pt-BR");case"medio":return n.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});case"relativo":if(0===a){const e=Math.floor(r/36e5);if(0===e){const e=Math.floor(r/6e4);return 0===e?"Agora mesmo":`${e} min atr\xe1s`}return`${e}h atr\xe1s`}if(1===a)return"Ontem";if(a<7)return`${a} dias atr\xe1s`;if(a<30){const e=Math.floor(a/7);return`${e} ${1===e?"semana":"semanas"} atr\xe1s`}if(a<365){const e=Math.floor(a/30);return`${e} ${1===e?"m\xeas":"meses"} atr\xe1s`}{const e=Math.floor(a/365);return`${e} ${1===e?"ano":"anos"} atr\xe1s`}default:return n.toLocaleDateString("pt-BR",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}},Jl=Vt.div`
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Zl=Vt.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
`,es=Vt.p`
  color: var(--corTextoSecundaria);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.6;
`,ts=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,ns=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: var(--corFundoCard);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 120px;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--corPrimaria);
  }

  &.arrastando {
    opacity: 0.5;
    transform: rotate(5deg);
  }

  &.sobre {
    border-color: var(--corSecundaria);
    background: var(--corFundoHover);
  }
`,rs=(Vt.img`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
  border-radius: var(--bordaRaioPequena);
`,Vt.span`
  color: var(--corTextoPrimaria);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  margin-top: 0.5rem;
`),as=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: var(--corFundoCard);
  border: 2px dashed var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 120px;

  &:hover {
    border-color: var(--corPrimaria);
    background: var(--corFundoHover);
    transform: translateY(-2px);
  }

  &.sobre {
    border-color: var(--corPrimaria);
    background: var(--corFundoHover);
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,os=Vt.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--corPrimaria);
  border-radius: 50%;
  margin-bottom: 0.5rem;
  color: white;
  font-size: 1.2rem;
`,is=Vt.span`
  color: var(--corTextoSecundaria);
  font-size: 0.9rem;
  font-weight: 500;
`,ls=Vt.div`
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
`,ss=Vt.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,cs=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,us=Vt.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
`,ds=Vt.button`
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
`,fs=Vt.span`
  background: var(--corPrimaria);
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
`,ps=t=>{let{notas:n,links:r,carregando:a,carregandoLinks:o,onNovoItem:i,onEditarItem:l,onVisualizarItem:s,onTelaCheia:c}=t;const[u,d]=(0,e.useState)([]),[f,p]=(0,e.useState)(!1),[m,h]=(0,e.useState)(null);(0,e.useEffect)(()=>{const e=[...(n||[]).map(e=>({...e,tipo:"nota"})),...(r||[]).map(e=>({...e,tipo:"link"}))].sort((e,t)=>new Date(t.dataCriacao)-new Date(e.dataCriacao)).slice(0,6);d(e)},[n,r]);const v=e=>{h(e),p(!0)},g=()=>{p(!1),h(null)};return a||o?(0,Cl.jsx)(Ql,{}):(0,Cl.jsxs)(Jl,{children:[(0,Cl.jsx)(Zl,{children:"Bem-vindo ao WRTmind"}),(0,Cl.jsx)(es,{children:"Gerencie suas notas e links de forma organizada e eficiente."}),(0,Cl.jsxs)(ts,{children:[(0,Cl.jsxs)(ns,{onClick:()=>v("nota"),children:[(0,Cl.jsx)(ii,{icon:el,style:{fontSize:"48px",color:"var(--corPrimaria)"}}),(0,Cl.jsxs)(rs,{children:["Notas",(0,Cl.jsx)(fs,{children:(null===n||void 0===n?void 0:n.length)||0})]})]}),(0,Cl.jsxs)(ns,{onClick:()=>v("link"),children:[(0,Cl.jsx)(ii,{icon:$i,style:{fontSize:"48px",color:"var(--corSecundaria)"}}),(0,Cl.jsxs)(rs,{children:["Links",(0,Cl.jsx)(fs,{children:(null===r||void 0===r?void 0:r.length)||0})]})]}),(0,Cl.jsxs)(ns,{onClick:()=>window.dispatchEvent(new CustomEvent("navegarPara",{detail:"favoritos"})),children:[(0,Cl.jsx)(ii,{icon:Pi,style:{fontSize:"48px",color:"#FF6B6B"}}),(0,Cl.jsxs)(rs,{children:["Favoritos",(0,Cl.jsx)(fs,{children:((null===n||void 0===n?void 0:n.filter(e=>e.favorito))||[]).length})]})]}),(0,Cl.jsxs)(as,{onClick:()=>v("nota"),children:[(0,Cl.jsx)(os,{children:(0,Cl.jsx)(ii,{icon:qi})}),(0,Cl.jsx)(is,{children:"Adicionar"})]})]}),u.length>0&&(0,Cl.jsxs)(Cl.Fragment,{children:[(0,Cl.jsx)(Zl,{style:{marginTop:"3rem",fontSize:"1.8rem"},children:"Itens Recentes"}),(0,Cl.jsx)(ts,{children:u.map(e=>(0,Cl.jsxs)(ns,{onClick:()=>(e=>{"nota"===e.tipo?s(e):"link"===e.tipo&&window.open(e.url,"_blank")})(e),children:[(0,Cl.jsx)(ii,{icon:"nota"===e.tipo?el:$i,style:{fontSize:"32px",color:"nota"===e.tipo?"var(--corPrimaria)":"var(--corSecundaria)"}}),(0,Cl.jsxs)(rs,{children:[e.titulo||e.nome,(0,Cl.jsx)("br",{}),(0,Cl.jsx)("small",{style:{color:"var(--corTextoSecundaria)"},children:Xl(e.dataCriacao)})]})]},`${e.tipo}-${e.id}`))})]}),f&&(0,Cl.jsx)(ls,{onClick:g,children:(0,Cl.jsxs)(ss,{onClick:e=>e.stopPropagation(),children:[(0,Cl.jsxs)(cs,{children:[(0,Cl.jsxs)(us,{children:["Novo ","nota"===m?"Nota":"Link"]}),(0,Cl.jsx)(ds,{onClick:g,children:(0,Cl.jsx)(ii,{icon:Yi})})]}),(0,Cl.jsxs)("p",{style:{marginBottom:"1.5rem",color:"var(--corTextoSecundaria)"},children:["Deseja criar um novo ","nota"===m?"nota":"link","?"]}),(0,Cl.jsxs)("div",{style:{display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[(0,Cl.jsx)("button",{onClick:g,style:{padding:"0.5rem 1rem",border:"1px solid var(--corBordaPrimaria)",background:"transparent",borderRadius:"var(--bordaRaioMedia)",cursor:"pointer"},children:"Cancelar"}),(0,Cl.jsx)("button",{onClick:()=>{i(),p(!1),h(null)},style:{padding:"0.5rem 1rem",border:"none",background:"var(--corPrimaria)",color:"white",borderRadius:"var(--bordaRaioMedia)",cursor:"pointer"},children:"Criar"})]})]})})]})},ms=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`,hs=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
`,vs=Vt.h1`
  color: var(--corTextoPrimaria);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,gs=Vt.button`
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
`,bs=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
  flex-wrap: wrap;
`,ys=Vt.input`
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
`,xs=Vt.select`
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
`,ws=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--espacamentoGrande);
`,Ss=Vt.div`
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
`,ks=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--espacamentoMedio);
`,Es=Vt.h3`
  color: var(--corTextoPrimaria);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
`,Ps=Vt.div`
  display: flex;
  gap: var(--espacamentoPequeno);
`,Cs=Vt.button`
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
`,js=Vt.div`
  color: var(--corTextoSecundaria);
  line-height: 1.6;
  margin-bottom: var(--espacamentoMedio);
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`,Ts=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
`,_s=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
`,As=Vt.span`
  background: var(--corPrimaria);
  color: white;
  padding: 4px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`,Ns=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,Rs=Vt.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoGrande);
`,zs=t=>{let{notas:n,carregando:r,onNovoItem:a,onEditarItem:o,onVisualizarItem:i,onExcluirItem:l,onFavoritarItem:s}=t;const[c,u]=(0,e.useState)(""),[d,f]=(0,e.useState)("todos"),[p,m]=(0,e.useState)("dataCriacao");console.log("\ud83d\udd0d TelaNotas - notas recebidas:",n),console.log("\ud83d\udd0d TelaNotas - carregando:",r),console.log("\ud83d\udd0d TelaNotas - total de notas:",(null===n||void 0===n?void 0:n.length)||0);const h=n.filter(e=>{const t=""===c||e.titulo.toLowerCase().includes(c.toLowerCase())||e.conteudo.toLowerCase().includes(c.toLowerCase()),n="todos"===d||e.topico===d;return t&&n}).sort((e,t)=>{switch(p){case"titulo":return e.titulo.localeCompare(t.titulo);case"dataCriacao":return new Date(t.dataCriacao)-new Date(e.dataCriacao);case"dataModificacao":return new Date(t.dataModificacao||t.dataCriacao)-new Date(e.dataModificacao||e.dataCriacao);default:return 0}});console.log("\ud83d\udd0d TelaNotas - notas filtradas:",h),console.log("\ud83d\udd0d TelaNotas - total de notas filtradas:",(null===h||void 0===h?void 0:h.length)||0);const v=[...new Set(n.map(e=>e.topico).filter(Boolean))];return r?(0,Cl.jsx)(ms,{children:(0,Cl.jsxs)(Ns,{children:[(0,Cl.jsx)(Rs,{children:(0,Cl.jsx)(ii,{icon:el})}),(0,Cl.jsx)("p",{children:"Carregando suas notas..."})]})}):(0,Cl.jsxs)(ms,{children:[(0,Cl.jsxs)(hs,{children:[(0,Cl.jsxs)(vs,{children:[(0,Cl.jsx)(ii,{icon:el}),"Minhas Notas"]}),(0,Cl.jsxs)(gs,{onClick:a,children:[(0,Cl.jsx)(ii,{icon:qi}),"Nova Nota"]})]}),(0,Cl.jsxs)(bs,{children:[(0,Cl.jsx)(ys,{type:"text",placeholder:"Buscar por t\xedtulo ou conte\xfado...",value:c,onChange:e=>u(e.target.value)}),(0,Cl.jsxs)(xs,{value:d,onChange:e=>f(e.target.value),children:[(0,Cl.jsx)("option",{value:"todos",children:"Todos os t\xf3picos"}),v.map(e=>(0,Cl.jsx)("option",{value:e,children:e},e))]}),(0,Cl.jsxs)(xs,{value:p,onChange:e=>m(e.target.value),children:[(0,Cl.jsx)("option",{value:"dataCriacao",children:"Data de Cria\xe7\xe3o"}),(0,Cl.jsx)("option",{value:"dataModificacao",children:"Data de Modifica\xe7\xe3o"}),(0,Cl.jsx)("option",{value:"titulo",children:"T\xedtulo"})]})]}),0===h.length?(0,Cl.jsxs)(Ns,{children:[(0,Cl.jsx)(Rs,{children:(0,Cl.jsx)(ii,{icon:el})}),(0,Cl.jsx)("p",{children:c||"todos"!==d?"Nenhuma nota encontrada":"Voc\xea ainda n\xe3o tem notas"}),!c&&"todos"===d&&(0,Cl.jsxs)(gs,{onClick:a,children:[(0,Cl.jsx)(ii,{icon:qi}),"Criar Primeira Nota"]})]}):(0,Cl.jsx)(ws,{children:h.map(e=>{return(0,Cl.jsxs)(Ss,{onClick:()=>i(e),children:[(0,Cl.jsxs)(ks,{children:[(0,Cl.jsx)(Es,{children:e.titulo}),(0,Cl.jsxs)(Ps,{onClick:e=>e.stopPropagation(),children:[e.favorito&&(0,Cl.jsx)(Cs,{onClick:()=>s(e.id),children:(0,Cl.jsx)(ii,{icon:Pi,style:{color:"#e74c3c"}})}),(0,Cl.jsx)(Cs,{onClick:()=>o(e),children:(0,Cl.jsx)(ii,{icon:hi})}),(0,Cl.jsx)(Cs,{onClick:()=>l(e.id),children:(0,Cl.jsx)(ii,{icon:Ai})})]})]}),(0,Cl.jsxs)(js,{children:[e.conteudo.replace(/<[^>]*>/g,"").substring(0,150),"..."]}),(0,Cl.jsxs)(Ts,{children:[(0,Cl.jsxs)(_s,{children:[e.topico&&(0,Cl.jsx)(As,{children:e.topico}),(0,Cl.jsx)("span",{children:(t=e.dataCriacao,new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}))})]}),(0,Cl.jsx)(Cs,{onClick:e=>e.stopPropagation(),children:(0,Cl.jsx)(ii,{icon:ji})})]})]},e.id);var t})})]})},Os=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`,Ls=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
`,Ms=Vt.h1`
  color: var(--corTextoPrimaria);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,Fs=Vt.button`
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
`,Is=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
  flex-wrap: wrap;
`,Ds=Vt.input`
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
`,Us=Vt.select`
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
`,$s=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--espacamentoGrande);
`,Bs=Vt.div`
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
`,Hs=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--espacamentoMedio);
`,Ws=Vt.h3`
  color: var(--corTextoPrimaria);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
`,Vs=Vt.div`
  display: flex;
  gap: var(--espacamentoPequeno);
`,qs=Vt.button`
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
`,Gs=Vt.div`
  width: 100%;
  height: 150px;
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ks=Vt.div`
  color: var(--corTextoSecundaria);
  line-height: 1.6;
  margin-bottom: var(--espacamentoMedio);
`,Ys=Vt.div`
  color: var(--corPrimaria);
  font-size: var(--tamanhoFontePequena);
  word-break: break-all;
  margin-bottom: var(--espacamentoMedio);
`,Qs=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
`,Xs=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
`,Js=Vt.span`
  background: var(--corPrimaria);
  color: white;
  padding: 4px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`,Zs=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,ec=Vt.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoGrande);
`,tc=t=>{let{links:n,carregando:r,onNovoItem:a,onEditarItem:o,onVisualizarItem:i,onExcluirItem:l,onFavoritarItem:s}=t;const[c,u]=(0,e.useState)(""),[d,f]=(0,e.useState)("todos"),[p,m]=(0,e.useState)("dataCriacao"),h=n.filter(e=>{const t=""===c||e.nome.toLowerCase().includes(c.toLowerCase())||e.descricao.toLowerCase().includes(c.toLowerCase())||e.url.toLowerCase().includes(c.toLowerCase()),n="todos"===d||e.categoria===d;return t&&n}).sort((e,t)=>{switch(p){case"nome":return e.nome.localeCompare(t.nome);case"dataCriacao":return new Date(t.createdAt)-new Date(e.createdAt);case"dataModificacao":return new Date(t.updatedAt)-new Date(e.updatedAt);default:return 0}}),v=[...new Set(n.map(e=>e.categoria).filter(Boolean))];return r?(0,Cl.jsx)(Os,{children:(0,Cl.jsxs)(Zs,{children:[(0,Cl.jsx)(ec,{children:(0,Cl.jsx)(ii,{icon:$i})}),(0,Cl.jsx)("p",{children:"Carregando seus links..."})]})}):(0,Cl.jsxs)(Os,{children:[(0,Cl.jsxs)(Ls,{children:[(0,Cl.jsxs)(Ms,{children:[(0,Cl.jsx)(ii,{icon:$i}),"Meus Links"]}),(0,Cl.jsxs)(Fs,{onClick:a,children:[(0,Cl.jsx)(ii,{icon:qi}),"Novo Link"]})]}),(0,Cl.jsxs)(Is,{children:[(0,Cl.jsx)(Ds,{type:"text",placeholder:"Buscar por nome, descri\xe7\xe3o ou URL...",value:c,onChange:e=>u(e.target.value)}),(0,Cl.jsxs)(Us,{value:d,onChange:e=>f(e.target.value),children:[(0,Cl.jsx)("option",{value:"todos",children:"Todas as categorias"}),v.map(e=>(0,Cl.jsx)("option",{value:e,children:e},e))]}),(0,Cl.jsxs)(Us,{value:p,onChange:e=>m(e.target.value),children:[(0,Cl.jsx)("option",{value:"dataCriacao",children:"Data de Cria\xe7\xe3o"}),(0,Cl.jsx)("option",{value:"dataModificacao",children:"Data de Modifica\xe7\xe3o"}),(0,Cl.jsx)("option",{value:"nome",children:"Nome"})]})]}),0===h.length?(0,Cl.jsxs)(Zs,{children:[(0,Cl.jsx)(ec,{children:(0,Cl.jsx)(ii,{icon:$i})}),(0,Cl.jsx)("p",{children:c||"todos"!==d?"Nenhum link encontrado":"Voc\xea ainda n\xe3o tem links"}),!c&&"todos"===d&&(0,Cl.jsxs)(Fs,{onClick:a,children:[(0,Cl.jsx)(ii,{icon:qi}),"Criar Primeiro Link"]})]}):(0,Cl.jsx)($s,{children:h.map(e=>{return(0,Cl.jsxs)(Bs,{children:[(0,Cl.jsxs)(Hs,{children:[(0,Cl.jsx)(Ws,{children:e.nome}),(0,Cl.jsxs)(Vs,{children:[e.favorito&&(0,Cl.jsx)(qs,{onClick:()=>s(e.id),children:(0,Cl.jsx)(ii,{icon:Pi,style:{color:"#e74c3c"}})}),(0,Cl.jsx)(qs,{onClick:()=>o(e),children:(0,Cl.jsx)(ii,{icon:hi})}),(0,Cl.jsx)(qs,{onClick:()=>l(e.id),children:(0,Cl.jsx)(ii,{icon:Ai})})]})]}),e.imagemUrl&&(0,Cl.jsx)(Gs,{children:(0,Cl.jsx)("img",{src:e.imagemUrl,alt:e.nome})}),(0,Cl.jsx)(Ks,{children:e.descricao}),(0,Cl.jsx)(Ys,{children:e.url}),(0,Cl.jsxs)(Qs,{children:[(0,Cl.jsxs)(Xs,{children:[e.categoria&&(0,Cl.jsx)(Js,{children:e.categoria}),(0,Cl.jsx)("span",{children:(t=e.createdAt,new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}))})]}),(0,Cl.jsx)(qs,{onClick:()=>{return t=e.url,void window.open(t,"_blank");var t},children:(0,Cl.jsx)(ii,{icon:Ri})})]})]},e.id);var t})})]})},nc=Vt.div`
  background: var(--corFundoCard);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`,rc=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoMedio);
`,ac=Vt.h3`
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
  color: var(--corTextoPrimaria);
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,oc=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  opacity: 0;
  transition: opacity var(--transicaoRapida);
  
  ${nc}:hover & {
    opacity: 1;
  }
`,ic=Vt.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--bordaRaioPequena);
  transition: all var(--transicaoRapida);
  
  &:hover {
    background: var(--corFundoTerciaria);
    color: var(--corTextoPrimaria);
  }
`,lc=Vt.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  line-height: 1.5;
  margin-bottom: var(--espacamentoMedio);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`,sc=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
`,cc=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,uc=Vt.span`
  background: var(--corPrimaria);
  color: white;
  padding: 2px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`,dc=t=>{let{item:n,tipo:r,onEditar:a,onExcluir:o,onVisualizar:i,onCopiar:l,onExportar:s,onImprimir:c,onTelaCheia:u,onFavoritar:d}=t;const[f,p]=(0,e.useState)(!1);return(0,Cl.jsxs)(nc,{onClick:e=>{e.stopPropagation(),"link"===r?window.open(n.url,"_blank"):i(n)},children:[(0,Cl.jsxs)(rc,{children:[(0,Cl.jsx)(ac,{children:"nota"===r?n.titulo:n.nome}),(0,Cl.jsxs)(oc,{children:["nota"===r&&d&&(0,Cl.jsx)(ic,{onClick:e=>{e.stopPropagation(),d(n.id)},title:n.favorito?"Remover dos favoritos":"Adicionar aos favoritos",children:(0,Cl.jsx)(ii,{icon:yi,style:{color:n.favorito?"#FF6B6B":"inherit"}})}),(0,Cl.jsx)(ic,{onClick:e=>{e.stopPropagation(),a(n)},title:"Editar",children:(0,Cl.jsx)(ii,{icon:hi})}),(0,Cl.jsx)(ic,{onClick:e=>{e.stopPropagation(),window.confirm("Tem certeza que deseja excluir este item?")&&o(n.id)},title:"Excluir",children:(0,Cl.jsx)(ii,{icon:Ai})}),"link"===r&&(0,Cl.jsx)(ic,{onClick:e=>{e.stopPropagation(),window.open(n.url,"_blank")},title:"Abrir link",children:(0,Cl.jsx)(ii,{icon:Ri})}),"nota"===r&&(0,Cl.jsxs)(Cl.Fragment,{children:[(0,Cl.jsx)(ic,{onClick:e=>{e.stopPropagation(),l(n)},title:"Copiar",children:(0,Cl.jsx)(ii,{icon:Vi})}),(0,Cl.jsx)(ic,{onClick:e=>{e.stopPropagation(),u(n)},title:"Tela cheia",children:(0,Cl.jsx)(ii,{icon:Gi})}),s&&(0,Cl.jsx)(ic,{onClick:e=>{e.stopPropagation(),s(n)},title:"Exportar",children:(0,Cl.jsx)(ii,{icon:Xi})}),c&&(0,Cl.jsx)(ic,{onClick:e=>{e.stopPropagation(),c(n)},title:"Imprimir",children:(0,Cl.jsx)(ii,{icon:tl})})]})]})]}),(0,Cl.jsx)(lc,{children:(()=>{var e;return"nota"===r?(null===(e=n.conteudo)||void 0===e?void 0:e.length)>150?`${n.conteudo.substring(0,150)}...`:n.conteudo:"link"===r?n.url:""})()}),(0,Cl.jsxs)(sc,{children:[(0,Cl.jsxs)(cc,{children:["nota"===r&&n.topico&&(0,Cl.jsx)(uc,{children:n.topico}),"link"===r&&n.categoria&&(0,Cl.jsx)(uc,{children:n.categoria}),(0,Cl.jsx)("span",{children:Xl(n.dataCriacao||n.dataModificacao)})]}),(0,Cl.jsx)("div",{children:"nota"===r&&n.favorito&&(0,Cl.jsx)(ii,{icon:yi,style:{color:"#FFD700"}})})]})]})},fc=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoExtraGrande);
  min-height: 400px;
  text-align: center;
`,pc=Vt.div`
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
`,mc=Vt.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  margin: 0;
`,hc=Vt.p`
  color: var(--corTextoTerciaria);
  font-size: var(--tamanhoFontePequena);
  margin: var(--espacamentoPequeno) 0 0 0;
`,vc=e=>{let{mensagem:t="Carregando notas...",subMensagem:n="Aguarde um momento"}=e;return(0,Cl.jsxs)(fc,{children:[(0,Cl.jsx)(pc,{children:(0,Cl.jsx)(ii,{icon:Qi})}),(0,Cl.jsx)(mc,{children:t}),(0,Cl.jsx)(hc,{children:n})]})},gc=Vt.div`
  padding: ${e=>"nota"===e.tipo?"var(--espacamentoMedio)":"var(--espacamentoGrande)"};
  min-height: 100vh;
`,bc=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${e=>"nota"===e.tipo?"var(--espacamentoMedio)":"var(--espacamentoGrande)"};
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
`,yc=Vt.h1`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin: 0;
`,xc=Vt.span`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
`,wc=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
`,Sc=Vt.button`
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
`,kc=(Vt(Sc)`
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
`),Ec=Vt.input`
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
`,Pc=Vt.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
`,Cc=Vt.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  align-items: center;
`,jc=Vt.button`
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
`,_c=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,Ac=Vt.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoMedio);
`,Nc=t=>{let{itens:n,tipo:r,titulo:a,icone:o,carregando:i,onNovo:l,onEditar:s,onExcluir:c,onVisualizar:u,onCopiar:d,onExportar:f,onImprimir:p,onTelaCheia:m,onFavoritar:h,modoOrdenacao:v="automatico"}=t;const[g,b]=(0,e.useState)(""),[y,x]=(0,e.useState)("todos"),w=(null===n||void 0===n?void 0:n.filter(e=>{if(g){const i=g.toLowerCase();var t,n,a,o;if("nota"===r)return(null===(t=e.titulo)||void 0===t?void 0:t.toLowerCase().includes(i))||(null===(n=e.conteudo)||void 0===n?void 0:n.toLowerCase().includes(i));if("link"===r)return(null===(a=e.nome)||void 0===a?void 0:a.toLowerCase().includes(i))||(null===(o=e.url)||void 0===o?void 0:o.toLowerCase().includes(i))}return!0}))||[];if(i)return(0,Cl.jsx)(gc,{tipo:r,children:(0,Cl.jsx)(vc,{mensagem:`Carregando ${"nota"===r?"notas":"links"}...`,subMensagem:"Conectando com o servidor"})});const S=async e=>{const t="nota"===r?`${e.titulo}\n${e.conteudo}`:`${e.nome}\n${e.url}`;await(async e=>{try{return await navigator.clipboard.writeText(e),!0}catch(t){return console.error("Erro ao copiar para clipboard:",t),!1}})(t)&&d&&d("Conte\xfado copiado para a \xe1rea de transfer\xeancia!")};return"link"===r?(0,Cl.jsxs)(gc,{tipo:r,children:[(0,Cl.jsxs)(bc,{tipo:r,children:[(0,Cl.jsxs)(yc,{children:[(0,Cl.jsx)(ii,{icon:o}),a,(0,Cl.jsx)(xc,{children:n.length})]}),(0,Cl.jsxs)(wc,{children:[(0,Cl.jsxs)(kc,{children:[(0,Cl.jsx)(Pc,{children:(0,Cl.jsx)(ii,{icon:Hi})}),(0,Cl.jsx)(Ec,{type:"text",placeholder:"Buscar links...",value:g,onChange:e=>b(e.target.value)})]}),(0,Cl.jsxs)(Sc,{onClick:l,children:[(0,Cl.jsx)(ii,{icon:qi}),"Novo Link"]})]})]}),0===w.length?(0,Cl.jsxs)(_c,{children:[(0,Cl.jsx)(Ac,{children:(0,Cl.jsx)(ii,{icon:o})}),(0,Cl.jsx)("h3",{children:"Nenhum link encontrado"}),(0,Cl.jsx)("p",{children:'Clique em "Novo Link" para come\xe7ar a adicionar seus links favoritos.'})]}):(0,Cl.jsx)(Tc,{children:w.map(e=>(0,Cl.jsx)(dc,{item:e,tipo:"link",onEditar:()=>s(e),onExcluir:()=>c(e.id),onVisualizar:()=>(e=>{e.url&&window.open(e.url,"_blank")})(e),onCopiar:()=>S(e),onTelaCheia:()=>m(e)},e.id))})]}):(0,Cl.jsxs)(gc,{tipo:r,children:[(0,Cl.jsxs)(bc,{tipo:r,children:[(0,Cl.jsxs)(yc,{children:[(0,Cl.jsx)(ii,{icon:o}),a,(0,Cl.jsx)(xc,{children:n.length})]}),(0,Cl.jsxs)(wc,{children:[(0,Cl.jsxs)(kc,{children:[(0,Cl.jsx)(Pc,{children:(0,Cl.jsx)(ii,{icon:Hi})}),(0,Cl.jsx)(Ec,{type:"text",placeholder:"Buscar notas...",value:g,onChange:e=>b(e.target.value)})]}),(0,Cl.jsxs)(Cc,{children:[(0,Cl.jsx)(jc,{className:"todos"===y?"ativo":"",onClick:()=>x("todos"),children:"Todos"}),(0,Cl.jsxs)(jc,{className:"favoritos"===y?"ativo":"",onClick:()=>x("favoritos"),children:[(0,Cl.jsx)(ii,{icon:Pi}),"Favoritos"]})]}),(0,Cl.jsxs)(Sc,{onClick:l,children:[(0,Cl.jsx)(ii,{icon:qi}),"Nova Nota"]})]})]}),0===w.length?(0,Cl.jsxs)(_c,{children:[(0,Cl.jsx)(Ac,{children:(0,Cl.jsx)(ii,{icon:o})}),(0,Cl.jsx)("h3",{children:"Nenhuma nota encontrada"}),(0,Cl.jsx)("p",{children:'Clique em "Nova Nota" para come\xe7ar a criar suas anota\xe7\xf5es.'})]}):(0,Cl.jsx)(Tc,{children:w.map(e=>(0,Cl.jsx)(dc,{item:e,tipo:"nota",onEditar:()=>s(e),onExcluir:()=>c(e.id),onVisualizar:()=>u(e),onCopiar:()=>S(e),onExportar:()=>f(e),onImprimir:()=>p(e),onTelaCheia:()=>m(e),onFavoritar:()=>(async e=>{if(h)try{await h(e)}catch(t){console.error("Erro ao favoritar item:",t)}})(e.id)},e.id))})]})},Rc=Vt.div`
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
`,zc=Vt.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,Oc=Vt.div`
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
`,Fc=Vt.div`
  padding: var(--espacamentoGrande);
`,Ic=Vt.div`
  margin-bottom: var(--espacamentoMedio);
`,Dc=Vt.label`
  display: block;
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoPequeno);
  font-weight: 500;
`,Uc=Vt.input`
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
`,$c=Vt.textarea`
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
`,Bc=Vt.select`
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
`,Hc=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-top: 1px solid var(--corBordaPrimaria);
  gap: var(--espacamentoMedio);
`,Wc=Vt.button`
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
`,Vc=Vt(Wc)`
  background: var(--corPrimaria);
  color: white;

  &:hover:not(:disabled) {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`,qc=Vt(Wc)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover:not(:disabled) {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`,Gc=Vt(Wc)`
  background: var(--corErro);
  color: white;

  &:hover:not(:disabled) {
    background: var(--corErroHover);
    transform: translateY(-1px);
  }
`,Kc=Vt(Wc)`
  background: ${e=>e.favorito?"#FF6B6B":"var(--corFundoSecundaria)"};
  color: ${e=>e.favorito?"white":"var(--corTextoPrimaria)"};
  border: 2px solid ${e=>e.favorito?"#FF6B6B":"var(--corBordaPrimaria)"};

  &:hover:not(:disabled) {
    background: ${e=>e.favorito?"#FF5252":"var(--corFundoTerciaria)"};
    border-color: ${e=>e.favorito?"#FF5252":"var(--corPrimaria)"};
  }
`,Yc=t=>{let{isVisible:n,item:r,modo:a,categorias:o=[],onSave:i,onDelete:l,onClose:s,carregando:c=!1}=t;const[u,d]=(0,e.useState)({titulo:"",conteudo:"",topico:"",categoria:""});(0,e.useEffect)(()=>{d(r?{titulo:r.titulo||r.nome||"",conteudo:r.conteudo||"",topico:r.topico||"",categoria:r.categoria||""}:{titulo:"",conteudo:"",topico:"",categoria:""})},[r]);const f=e=>{const{name:t,value:n}=e.target;d(e=>({...e,[t]:n}))};return n?(0,Cl.jsx)(Rc,{onClick:s,children:(0,Cl.jsxs)(zc,{onClick:e=>e.stopPropagation(),children:[(0,Cl.jsxs)(Oc,{children:[(0,Cl.jsx)(Lc,{children:(()=>{switch(a){case"novo":return"Novo Item";case"editar":return"Editar Item";case"visualizar":return"Visualizar Item";default:return"Item"}})()}),(0,Cl.jsx)(Mc,{onClick:s,children:(0,Cl.jsx)(ii,{icon:Yi})})]}),(0,Cl.jsxs)("form",{onSubmit:e=>{e.preventDefault(),i&&i(null===r||void 0===r?void 0:r.id,u)},children:[(0,Cl.jsxs)(Fc,{children:[(0,Cl.jsxs)(Ic,{children:[(0,Cl.jsx)(Dc,{htmlFor:"titulo",children:"T\xedtulo"}),(0,Cl.jsx)(Uc,{id:"titulo",name:"titulo",type:"text",value:u.titulo,onChange:f,placeholder:"Digite o t\xedtulo...",disabled:"visualizar"===a,required:!0})]}),(0,Cl.jsxs)(Ic,{children:[(0,Cl.jsx)(Dc,{htmlFor:"conteudo",children:"Conte\xfado"}),(0,Cl.jsx)($c,{id:"conteudo",name:"conteudo",value:u.conteudo,onChange:f,placeholder:"Digite o conte\xfado...",disabled:"visualizar"===a})]}),(0,Cl.jsxs)(Ic,{children:[(0,Cl.jsx)(Dc,{htmlFor:"topico",children:"T\xf3pico"}),(0,Cl.jsx)(Uc,{id:"topico",name:"topico",type:"text",value:u.topico,onChange:f,placeholder:"Digite o t\xf3pico...",disabled:"visualizar"===a})]}),o.length>0&&(0,Cl.jsxs)(Ic,{children:[(0,Cl.jsx)(Dc,{htmlFor:"categoria",children:"Categoria"}),(0,Cl.jsxs)(Bc,{id:"categoria",name:"categoria",value:u.categoria,onChange:f,disabled:"visualizar"===a,children:[(0,Cl.jsx)("option",{value:"",children:"Selecione uma categoria"}),o.map(e=>(0,Cl.jsx)("option",{value:e.nome,children:e.nome},e.id))]})]})]}),(0,Cl.jsxs)(Hc,{children:[(0,Cl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoMedio)"},children:["visualizar"!==a&&(0,Cl.jsxs)(Vc,{type:"submit",disabled:c,children:[(0,Cl.jsx)(ii,{icon:_i}),null!==r&&void 0!==r&&r.id?"Atualizar":"Salvar"]}),"visualizar"===a&&(null===r||void 0===r?void 0:r.id)&&(0,Cl.jsxs)(Kc,{favorito:r.favorito,onClick:()=>{console.log("Toggle favorito:",r.id)},children:[(0,Cl.jsx)(ii,{icon:r.favorito?Pi:yi}),r.favorito?"Favorito":"Favoritar"]})]}),(0,Cl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoMedio)"},children:["visualizar"!==a&&(null===r||void 0===r?void 0:r.id)&&(0,Cl.jsxs)(Gc,{onClick:()=>{window.confirm("Tem certeza que deseja excluir este item?")&&l(null===r||void 0===r?void 0:r.id)},disabled:c,children:[(0,Cl.jsx)(ii,{icon:Ai}),"Excluir"]}),(0,Cl.jsx)(qc,{onClick:s,disabled:c,children:"Cancelar"})]})]})]})]})}):null},Qc=Vt.div`
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
`,Xc=Vt.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraForte);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Jc=Vt.div`
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-bottom: 2px solid var(--corBordaPrimaria);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--corFundoTerciaria);
`,Zc=Vt.h2`
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  color: var(--corTextoPrimaria);
  margin: 0;
`,eu=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`,tu=Vt.button`
  background: ${e=>"danger"===e.variant?"var(--corErro)":"secondary"===e.variant?"var(--corFundoTerciaria)":"var(--corPrimaria)"};
  color: ${e=>"secondary"===e.variant?"var(--corTextoPrimaria)":"white"};
  border: 2px solid ${e=>"secondary"===e.variant?"var(--corBordaPrimaria)":"transparent"};
  border-radius: var(--bordaRaioMedia);
  padding: 8px 16px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: ${e=>"danger"===e.variant?"var(--corErroHover)":"secondary"===e.variant?"var(--corFundoSecundaria)":"var(--corSecundaria)"};
    transform: translateY(-1px);
  }
`,nu=Vt.div`
  padding: var(--espacamentoGrande);
  flex: 1;
  overflow-y: auto;
`,ru=Vt.div`
  margin-bottom: var(--espacamentoMedio);
`,au=Vt.label`
  display: block;
  margin-bottom: var(--espacamentoPequeno);
  font-weight: 600;
  color: var(--corTextoPrimaria);
`,ou=Vt.input`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoMedia);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`,iu=(Vt.textarea`
  width: 100%;
  min-height: 100px;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-family: inherit;
  resize: vertical;
  transition: all var(--transicaoMedia);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`,Vt.select`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  cursor: pointer;
  transition: all var(--transicaoMedia);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,t=>{let{isVisible:n,link:r,modo:a="editar",categorias:o=[],onSave:i,onDelete:l,onClose:s,carregando:c=!1}=t;const[u,d]=(0,e.useState)({nome:"",url:"",imagemUrl:""});(0,e.useEffect)(()=>{d(r?{nome:r.nome||"",url:r.url||"",imagemUrl:r.imagemUrl||""}:{nome:"",url:"",imagemUrl:""})},[r]);const f=(e,t)=>{d(n=>({...n,[e]:t}))};return n?(0,Cl.jsx)(Qc,{onClick:s,children:(0,Cl.jsxs)(Xc,{onClick:e=>e.stopPropagation(),children:[(0,Cl.jsxs)(Jc,{children:[(0,Cl.jsx)(Zc,{children:r?"visualizar"===a?"Visualizar Link":"Editar Link":"Novo Link"}),(0,Cl.jsxs)(eu,{children:[r&&(0,Cl.jsxs)(Cl.Fragment,{children:[(0,Cl.jsxs)(tu,{variant:"secondary",onClick:()=>{u.url&&window.open(u.url,"_blank")},title:"Abrir link",disabled:!u.url,children:[(0,Cl.jsx)(ii,{icon:Ri}),"Abrir"]}),(0,Cl.jsxs)(tu,{variant:"danger",onClick:()=>{window.confirm("Tem certeza que deseja excluir este link?")&&l(null===r||void 0===r?void 0:r.id)},title:"Excluir link",children:[(0,Cl.jsx)(ii,{icon:Ai}),"Excluir"]})]}),(0,Cl.jsxs)(tu,{variant:"secondary",onClick:s,title:"Fechar",children:[(0,Cl.jsx)(ii,{icon:Yi}),"Fechar"]})]})]}),(0,Cl.jsxs)(nu,{children:[(0,Cl.jsxs)(ru,{children:[(0,Cl.jsx)(au,{htmlFor:"nome",children:"Nome *"}),(0,Cl.jsx)(ou,{id:"nome",type:"text",placeholder:"Digite o nome do link...",value:u.nome,onChange:e=>f("nome",e.target.value),disabled:"visualizar"===a})]}),(0,Cl.jsxs)(ru,{children:[(0,Cl.jsx)(au,{htmlFor:"url",children:"URL *"}),(0,Cl.jsx)(ou,{id:"url",type:"url",placeholder:"https://exemplo.com",value:u.url,onChange:e=>f("url",e.target.value),disabled:"visualizar"===a})]}),(0,Cl.jsxs)(ru,{children:[(0,Cl.jsx)(au,{htmlFor:"imagemUrl",children:"URL da Imagem"}),(0,Cl.jsx)(ou,{id:"imagemUrl",type:"url",placeholder:"https://exemplo.com/imagem.jpg",value:u.imagemUrl||"",onChange:e=>f("imagemUrl",e.target.value),disabled:"visualizar"===a}),(0,Cl.jsx)("small",{style:{color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFontePequena)"},children:"URL opcional para uma imagem de preview do link"})]}),"editar"===a&&(0,Cl.jsx)(eu,{style:{justifyContent:"flex-end",marginTop:"var(--espacamentoMedio)"},children:(0,Cl.jsxs)(tu,{onClick:()=>{if(u.nome&&u.url){try{new URL(u.url)}catch{return void alert("URL inv\xe1lida. Digite uma URL v\xe1lida (ex: https://exemplo.com)")}if(u.imagemUrl)try{new URL(u.imagemUrl)}catch{return void alert("URL da imagem inv\xe1lida. Digite uma URL v\xe1lida ou deixe em branco.")}i(u)}else alert("Nome e URL s\xe3o obrigat\xf3rios")},disabled:c,children:[(0,Cl.jsx)(ii,{icon:_i}),c?"Salvando...":"Salvar"]})})]})]})}):null}),lu=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 800px;
  margin: 0 auto;
`,su=Vt.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoGrande);
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
`,cu=Vt.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  margin-bottom: var(--espacamentoGrande);
  border: 1px solid var(--corBorda);
`,uu=Vt.h2`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoMedio);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,du=Vt.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-radius: var(--bordaRaioPequena);
  cursor: pointer;
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);

  &:hover {
    background: var(--corPrimariaHover);
  }

  &:disabled {
    background: var(--corDesabilitada);
    cursor: not-allowed;
  }
`,fu=Vt(du)`
  background: var(--corSecundaria);
  
  &:hover {
    background: var(--corSecundariaHover);
  }
`,pu=(Vt(du)`
  background: var(--corPerigo);
  
  &:hover {
    background: var(--corPerigoHover);
  }
`,Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoMedio);
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioPequena);
  margin-bottom: var(--espacamentoMedio);
`),mu=Vt.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,hu=Vt.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
`,vu=Vt.span`
  color: var(--corTextoPrimaria);
  font-weight: 500;
`,gu=Vt.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>"online"===e.status?"var(--corSucesso)":"var(--corPerigo)"};
`,bu=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--espacamentoMedio);
  margin-top: var(--espacamentoMedio);
`,yu=Vt.div`
  background: var(--corFundoPrimaria);
  border: 1px solid var(--corBorda);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  position: relative;
`,xu=Vt.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.cor};
  border-radius: var(--bordaRaioPequena);
  margin-bottom: var(--espacamentoMedio);
`,wu=Vt.h3`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  margin-bottom: var(--espacamentoPequeno);
`,Su=Vt.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  margin-top: var(--espacamentoMedio);
`,ku=Vt.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--bordaRaioPequena);
  transition: color 0.2s;

  &:hover {
    color: var(--corTextoPrimaria);
    background: var(--corFundoSecundaria);
  }
`,Eu=Vt.div`
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
`,Pu=Vt.div`
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`,Cu=Vt.h2`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
`,ju=Vt.div`
  margin-bottom: var(--espacamentoMedio);
`,Tu=Vt.label`
  display: block;
  color: var(--corTextoSecundaria);
  margin-bottom: var(--espacamentoPequeno);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`,_u=Vt.input`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 1px solid var(--corBorda);
  border-radius: var(--bordaRaioPequena);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFontePequena);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
  }
`,Au=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  justify-content: flex-end;
  margin-top: var(--espacamentoGrande);
`,Nu=t=>{let{onAbrirLogs:n,onAbrirAdmin:r,syncStatus:a,lastSync:o,onSincronizar:i}=t;const[l,s]=(0,e.useState)([]),[c,u]=(0,e.useState)(!1),[d,f]=(0,e.useState)(!1),[p,m]=(0,e.useState)(null),[h,v]=(0,e.useState)({nome:"",cor:"#007bff"}),g=async()=>{u(!0);try{const e=await Sl();s(e.categorias||[])}catch(e){console.error("Erro ao carregar categorias:",e)}finally{u(!1)}};(0,e.useEffect)(()=>{g()},[]);const b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(m(e),v({nome:e.nome,cor:e.cor||"#007bff"})):(m(null),v({nome:"",cor:"#007bff"})),f(!0)};return(0,Cl.jsxs)(lu,{children:[(0,Cl.jsx)(su,{children:"Configura\xe7\xf5es"}),(0,Cl.jsxs)(cu,{children:[(0,Cl.jsxs)(uu,{children:[(0,Cl.jsx)(ii,{icon:Ci}),"Gerenciar Categorias"]}),(0,Cl.jsxs)(du,{onClick:()=>b(),children:[(0,Cl.jsx)(ii,{icon:qi}),"Nova Categoria"]}),c?(0,Cl.jsx)("p",{children:"Carregando categorias..."}):(0,Cl.jsx)(bu,{children:l.map(e=>(0,Cl.jsxs)(yu,{children:[(0,Cl.jsx)(xu,{cor:e.cor}),(0,Cl.jsx)(wu,{children:e.nome}),(0,Cl.jsxs)(Su,{children:[(0,Cl.jsx)(ku,{onClick:()=>b(e),children:(0,Cl.jsx)(ii,{icon:hi})}),(0,Cl.jsx)(ku,{onClick:()=>(async e=>{if(window.confirm("Tem certeza que deseja excluir esta categoria?"))try{await Pl(e),g()}catch(t){console.error("Erro ao excluir categoria:",t),alert("Erro ao excluir categoria")}})(e.id),children:(0,Cl.jsx)(ii,{icon:Ai})})]})]},e.id))})]}),(0,Cl.jsxs)(cu,{children:[(0,Cl.jsxs)(uu,{children:[(0,Cl.jsx)(ii,{icon:Si}),"Sincroniza\xe7\xe3o"]}),(0,Cl.jsxs)(pu,{children:[(0,Cl.jsxs)(mu,{children:[(0,Cl.jsx)(hu,{children:"Status"}),(0,Cl.jsx)(vu,{children:"online"===a?"Online":"Offline"})]}),(0,Cl.jsx)(gu,{status:a})]}),(0,Cl.jsx)(pu,{children:(0,Cl.jsxs)(mu,{children:[(0,Cl.jsx)(hu,{children:"\xdaltima Sincroniza\xe7\xe3o"}),(0,Cl.jsx)(vu,{children:o?new Date(o).toLocaleString("pt-BR"):"Nunca"})]})}),(0,Cl.jsxs)(du,{onClick:i,disabled:"online"!==a,children:[(0,Cl.jsx)(ii,{icon:Si}),"Sincronizar Manualmente"]})]}),(0,Cl.jsxs)(cu,{children:[(0,Cl.jsxs)(uu,{children:[(0,Cl.jsx)(ii,{icon:Ii}),"Sistema"]}),(0,Cl.jsxs)(fu,{onClick:n,children:[(0,Cl.jsx)(ii,{icon:Ji}),"Ver Logs do Sistema"]}),(0,Cl.jsxs)(fu,{onClick:r,style:{marginLeft:"var(--espacamentoMedio)"},children:[(0,Cl.jsx)(ii,{icon:Ei}),"Painel Administrativo"]})]}),d&&(0,Cl.jsx)(Eu,{onClick:()=>f(!1),children:(0,Cl.jsxs)(Pu,{onClick:e=>e.stopPropagation(),children:[(0,Cl.jsx)(Cu,{children:p?"Editar Categoria":"Nova Categoria"}),(0,Cl.jsxs)(ju,{children:[(0,Cl.jsx)(Tu,{children:"Nome"}),(0,Cl.jsx)(_u,{type:"text",value:h.nome,onChange:e=>v({...h,nome:e.target.value}),placeholder:"Digite o nome da categoria"})]}),(0,Cl.jsxs)(ju,{children:[(0,Cl.jsx)(Tu,{children:"Cor"}),(0,Cl.jsx)(_u,{type:"color",value:h.cor,onChange:e=>v({...h,cor:e.target.value})})]}),(0,Cl.jsxs)(Au,{children:[(0,Cl.jsxs)(fu,{onClick:()=>f(!1),children:[(0,Cl.jsx)(ii,{icon:Yi}),"Cancelar"]}),(0,Cl.jsx)(du,{onClick:async()=>{if(h.nome.trim())try{p?await El(p.id,h):await kl(h),f(!1),g()}catch(e){console.error("Erro ao salvar categoria:",e),alert("Erro ao salvar categoria")}else alert("Nome \xe9 obrigat\xf3rio")},children:"Salvar"})]})]})})]})},Ru=Vt.div`
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
`,zu=Vt.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,Ou=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`,Lu=Vt.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,Mu=Vt.button`
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
`,Fu=Vt.div`
  padding: var(--espacamentoGrande);
`,Iu=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
`,Du=Vt.button`
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
`,Uu=Vt(Du)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`,$u=Vt(Du)`
  background: var(--corErro);
  color: white;

  &:hover {
    background: var(--corErroHover);
  }
`,Bu=Vt.div`
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
`,Hu=Vt.div`
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
`,Wu=Vt.div`
  color: ${e=>"error"===e.tipo?"#dc3545":"success"===e.tipo?"#28a745":"#007bff"};
  font-size: var(--tamanhoFonteMedia);
  margin-top: 2px;
`,Vu=Vt.div`
  flex: 1;
`,qu=Vt.div`
  font-weight: 500;
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoPequeno);
`,Gu=Vt.div`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`,Ku=Vt.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  margin-top: var(--espacamentoPequeno);
  font-family: monospace;
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioPequena);
  white-space: pre-wrap;
`,Yu=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,Qu=t=>{let{isVisible:n,onClose:r,onCarregarLogs:a,onLimparLogs:o,onExportarLogs:i}=t;const[l,s]=(0,e.useState)([]),[c,u]=(0,e.useState)(!1);(0,e.useEffect)(()=>{n&&d()},[n]);const d=async()=>{u(!0);try{const e=await a();s(e.logs||[])}catch(e){console.error("Erro ao carregar logs:",e),s([])}finally{u(!1)}},f=e=>{switch(e){case"error":return"\u274c";case"success":return"\u2705";case"info":return"\u2139\ufe0f";default:return"\ud83d\udcdd"}};return n?(0,Cl.jsx)(Ru,{onClick:r,children:(0,Cl.jsxs)(zu,{onClick:e=>e.stopPropagation(),children:[(0,Cl.jsxs)(Ou,{children:[(0,Cl.jsxs)(Lu,{children:[(0,Cl.jsx)(ii,{icon:ci}),"Logs do Sistema"]}),(0,Cl.jsx)(Mu,{onClick:r,children:(0,Cl.jsx)(ii,{icon:Yi})})]}),(0,Cl.jsxs)(Fu,{children:[(0,Cl.jsxs)(Iu,{children:[(0,Cl.jsxs)(Uu,{onClick:d,disabled:c,children:[(0,Cl.jsx)(ii,{icon:Si,spin:c}),c?"Carregando...":"Atualizar"]}),(0,Cl.jsxs)(Du,{onClick:async()=>{try{await i(),alert("Logs exportados com sucesso!")}catch(e){console.error("Erro ao exportar logs:",e),alert("Erro ao exportar logs: "+e.message)}},children:[(0,Cl.jsx)(ii,{icon:Ui}),"Exportar"]}),(0,Cl.jsxs)($u,{onClick:async()=>{if(window.confirm("Tem certeza que deseja limpar todos os logs?"))try{await o(),await d(),alert("Logs limpos com sucesso!")}catch(e){console.error("Erro ao limpar logs:",e),alert("Erro ao limpar logs: "+e.message)}},children:[(0,Cl.jsx)(ii,{icon:Ai}),"Limpar Logs"]})]}),(0,Cl.jsx)(Bu,{children:c?(0,Cl.jsxs)(Yu,{children:[(0,Cl.jsx)(ii,{icon:Si,spin:!0,style:{fontSize:"2rem",marginBottom:"1rem"}}),(0,Cl.jsx)("p",{children:"Carregando logs..."})]}):0===l.length?(0,Cl.jsxs)(Yu,{children:[(0,Cl.jsx)(ii,{icon:ci,style:{fontSize:"2rem",marginBottom:"1rem"}}),(0,Cl.jsx)("p",{children:"Nenhum log encontrado."})]}):l.map(e=>{return(0,Cl.jsxs)(Hu,{tipo:e.type,children:[(0,Cl.jsx)(Wu,{tipo:e.type,children:f(e.type)}),(0,Cl.jsxs)(Vu,{children:[(0,Cl.jsx)(qu,{children:e.message}),(0,Cl.jsx)(Gu,{children:(t=e.timestamp,new Date(t).toLocaleString("pt-BR"))}),e.details&&Object.keys(e.details).length>0&&(0,Cl.jsx)(Ku,{children:JSON.stringify(e.details,null,2)})]})]},e.id);var t})})]})]})}):null},Xu=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`,Ju=Vt.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoGrande);
  font-size: 2rem;
  font-weight: 700;
`,Zu=Vt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--espacamentoGrande);
`,ed=Vt.div`
  background: var(--corFundoCard);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
`,td=Vt.h3`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoMedio);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,nd=Vt.div`
  color: var(--corTextoSecundaria);
  line-height: 1.6;
`,rd=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoMedio);
`,ad=Vt.span`
  color: var(--corTextoPrimaria);
  font-weight: 500;
`,od=Vt.span`
  color: var(--corPrimaria);
  font-weight: 600;
  font-size: 1.1rem;
`,id=()=>(0,Cl.jsxs)(Xu,{children:[(0,Cl.jsxs)(Ju,{children:[(0,Cl.jsx)(ii,{icon:Wi}),"Painel Administrativo"]}),(0,Cl.jsxs)(Zu,{children:[(0,Cl.jsxs)(ed,{children:[(0,Cl.jsxs)(td,{children:[(0,Cl.jsx)(ii,{icon:vi}),"Usu\xe1rios"]}),(0,Cl.jsxs)(nd,{children:[(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Total de Usu\xe1rios"}),(0,Cl.jsx)(od,{children:"0"})]}),(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Usu\xe1rios Ativos"}),(0,Cl.jsx)(od,{children:"0"})]}),(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Novos Hoje"}),(0,Cl.jsx)(od,{children:"0"})]})]})]}),(0,Cl.jsxs)(ed,{children:[(0,Cl.jsxs)(td,{children:[(0,Cl.jsx)(ii,{icon:Ji}),"Dados"]}),(0,Cl.jsxs)(nd,{children:[(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Total de Notas"}),(0,Cl.jsx)(od,{children:"0"})]}),(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Total de Links"}),(0,Cl.jsx)(od,{children:"0"})]}),(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Notas Favoritas"}),(0,Cl.jsx)(od,{children:"0"})]})]})]}),(0,Cl.jsxs)(ed,{children:[(0,Cl.jsxs)(td,{children:[(0,Cl.jsx)(ii,{icon:xi}),"Estat\xedsticas"]}),(0,Cl.jsxs)(nd,{children:[(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Requisi\xe7\xf5es Hoje"}),(0,Cl.jsx)(od,{children:"0"})]}),(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Erros Hoje"}),(0,Cl.jsx)(od,{children:"0"})]}),(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Taxa de Sucesso"}),(0,Cl.jsx)(od,{children:"0%"})]})]})]}),(0,Cl.jsxs)(ed,{children:[(0,Cl.jsxs)(td,{children:[(0,Cl.jsx)(ii,{icon:Ii}),"Sistema"]}),(0,Cl.jsxs)(nd,{children:[(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Vers\xe3o"}),(0,Cl.jsx)(od,{children:"v1.0.0"})]}),(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Status"}),(0,Cl.jsx)(od,{children:"Online"})]}),(0,Cl.jsxs)(rd,{children:[(0,Cl.jsx)(ad,{children:"Backend"}),(0,Cl.jsx)(od,{children:"Vercel"})]})]})]})]}),(0,Cl.jsxs)(ed,{style:{marginTop:"var(--espacamentoGrande)"},children:[(0,Cl.jsxs)(td,{children:[(0,Cl.jsx)(ii,{icon:Mi}),"Informa\xe7\xf5es do Sistema"]}),(0,Cl.jsxs)(nd,{children:[(0,Cl.jsx)("p",{children:"Este \xe9 o painel administrativo do WRTmind. Aqui voc\xea pode monitorar estat\xedsticas do sistema, gerenciar usu\xe1rios e visualizar dados importantes."}),(0,Cl.jsxs)("p",{style:{marginTop:"var(--espacamentoMedio)"},children:[(0,Cl.jsx)("strong",{children:"Backend:"})," https://wrt-back.vercel.app"]}),(0,Cl.jsxs)("p",{children:[(0,Cl.jsx)("strong",{children:"Vers\xe3o:"})," WRTmind v1.0.0"]})]})]})]}),ld=Vt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`,sd=Vt.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoGrande);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,cd=Vt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,ud=Vt.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoMedio);
`,dd=()=>(0,Cl.jsxs)(ld,{children:[(0,Cl.jsxs)(sd,{children:[(0,Cl.jsx)(ii,{icon:Ai}),"Lixeira"]}),(0,Cl.jsxs)(cd,{children:[(0,Cl.jsx)(ud,{children:(0,Cl.jsx)(ii,{icon:Ai})}),(0,Cl.jsx)("h3",{children:"Lixeira vazia"}),(0,Cl.jsx)("p",{children:"Nenhum item foi exclu\xeddo ainda."}),(0,Cl.jsxs)("p",{style:{fontSize:"var(--tamanhoFontePequena)",marginTop:"var(--espacamentoMedio)"},children:[(0,Cl.jsx)(ii,{icon:Mi}),"Itens exclu\xeddos aparecer\xe3o aqui por 30 dias antes de serem removidos permanentemente."]})]})]}),fd=Vt.div`
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
`,pd=Vt.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,md=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`,hd=Vt.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,vd=Vt.button`
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
`,gd=Vt.div`
  padding: var(--espacamentoGrande);
`,bd=Vt.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoMedio);
  font-size: 1.8rem;
  font-weight: 700;
`,yd=Vt.div`
  color: var(--corTextoSecundaria);
  line-height: 1.8;
  font-size: var(--tamanhoFonteMedia);
  white-space: pre-wrap;
  margin-bottom: var(--espacamentoGrande);
`,xd=Vt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoGrande);
`,wd=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
`,Sd=Vt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  flex-wrap: wrap;
`,kd=Vt.button`
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
`,Ed=Vt(kd)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`,Pd=Vt(kd)`
  background: ${e=>e.favorito?"#FF6B6B":"var(--corFundoSecundaria)"};
  color: ${e=>e.favorito?"white":"var(--corTextoPrimaria)"};
  border: 2px solid ${e=>e.favorito?"#FF6B6B":"var(--corBordaPrimaria)"};

  &:hover {
    background: ${e=>e.favorito?"#FF5252":"var(--corFundoTerciaria)"};
    border-color: ${e=>e.favorito?"#FF5252":"var(--corPrimaria)"};
  }
`,Cd=e=>{let{nota:t,isVisible:n,onClose:r,onEditar:a,onCopiar:o,onExportar:i,onImprimir:l,onFavoritar:s}=e;if(!n||!t)return null;const c=e=>new Date(e).toLocaleString("pt-BR");return(0,Cl.jsx)(fd,{onClick:r,children:(0,Cl.jsxs)(pd,{onClick:e=>e.stopPropagation(),children:[(0,Cl.jsxs)(md,{children:[(0,Cl.jsxs)(hd,{children:[(0,Cl.jsx)(ii,{icon:yi}),"Visualizar Nota"]}),(0,Cl.jsx)(vd,{onClick:r,children:(0,Cl.jsx)(ii,{icon:Yi})})]}),(0,Cl.jsxs)(gd,{children:[(0,Cl.jsx)(bd,{children:t.titulo}),(0,Cl.jsxs)(xd,{children:[(0,Cl.jsxs)(wd,{children:[(0,Cl.jsxs)("span",{children:["Criada em: ",c(t.dataCriacao)]}),t.dataModificacao!==t.dataCriacao&&(0,Cl.jsxs)("span",{children:["\u2022 Editada em: ",c(t.dataModificacao)]}),t.topico&&(0,Cl.jsxs)("span",{children:["\u2022 T\xf3pico: ",t.topico]})]}),t.favorito&&(0,Cl.jsx)(ii,{icon:Pi,style:{color:"#FF6B6B"}})]}),(0,Cl.jsx)(yd,{children:t.conteudo}),(0,Cl.jsxs)(Sd,{children:[(0,Cl.jsxs)(Pd,{favorito:t.favorito,onClick:()=>{s&&s(t.id)},children:[(0,Cl.jsx)(ii,{icon:t.favorito?Pi:yi}),t.favorito?"Favorito":"Favoritar"]}),(0,Cl.jsxs)(Ed,{onClick:a,children:[(0,Cl.jsx)(ii,{icon:hi}),"Editar"]}),(0,Cl.jsxs)(Ed,{onClick:async()=>{const e=`${t.titulo}\n\n${t.conteudo}`;try{await navigator.clipboard.writeText(e),alert("Conte\xfado copiado para a \xe1rea de transfer\xeancia!")}catch(n){console.error("Erro ao copiar:",n),alert("Erro ao copiar conte\xfado")}},children:[(0,Cl.jsx)(ii,{icon:Vi}),"Copiar"]}),i&&(0,Cl.jsxs)(Ed,{onClick:i,children:[(0,Cl.jsx)(ii,{icon:Ui}),"Exportar"]}),l&&(0,Cl.jsxs)(Ed,{onClick:l,children:[(0,Cl.jsx)(ii,{icon:tl}),"Imprimir"]})]})]})]})})},jd=Vt.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${e=>e.recolhido?"var(--larguraMenuRecolhido)":"var(--larguraMenu)"};
  background: var(--corFundoTerciaria);
  border-right: 1px solid var(--corBordaPrimaria);
  transition: width var(--transicaoMedia);
  z-index: var(--zIndexDropdown);
  box-shadow: var(--sombraLeve);
  overflow: hidden;
`,Td=Vt.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.recolhido?"center":"space-between"};
  padding: var(--espacamentoMedio);
  border-bottom: 1px solid var(--corBordaPrimaria);
  height: var(--alturaHeader);
  min-height: 60px;
`,_d=Vt.h2`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  margin: 0;
  opacity: ${e=>e.recolhido?0:1};
  transition: opacity var(--transicaoMedia);
  white-space: nowrap;
  overflow: hidden;
`,Ad=Vt.button`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  flex-shrink: 0;

  &:hover {
    background: var(--corSecundaria);
    transform: scale(1.05);
  }
`,Nd=Vt.div`
  padding: var(--espacamentoMedio);
  height: calc(100vh - var(--alturaHeader));
  overflow-y: auto;
  overflow-x: hidden;
`,Rd=Vt.div`
  margin-bottom: var(--espacamentoGrande);
  opacity: ${e=>e.recolhido?0:1};
  transition: opacity var(--transicaoMedia);
  pointer-events: ${e=>e.recolhido?"none":"auto"};
  visibility: ${e=>e.recolhido?"hidden":"visible"};
`,zd=Vt.h3`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--espacamentoMedio);
  white-space: nowrap;
  overflow: hidden;
`,Od=Vt.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ld=Vt.li`
  margin-bottom: var(--espacamentoPequeno);
`,Md=Vt.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio);
  background: ${e=>e.ativo?"var(--corPrimaria)":"transparent"};
  color: ${e=>e.ativo?"var(--corTextoClara)":"var(--corTextoPrimaria)"};
  border: none;
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;
  font-size: var(--tamanhoFonteMedia);
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: ${e=>e.ativo?"var(--corSecundaria)":"var(--corFundoSecundaria)"};
    transform: translateX(2px);
  }

  &:active {
    transform: translateX(2px) scale(0.98);
  }
`,Fd=Vt.div`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Id=Vt.span`
  flex: 1;
  opacity: ${e=>e.recolhido?0:1};
  transition: opacity var(--transicaoMedia);
  overflow: hidden;
  text-overflow: ellipsis;
`,Dd=Vt.span`
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
`,Ud=Vt.div`
  margin-bottom: var(--espacamentoGrande);
`,$d=Vt.div`
  position: relative;
  margin-bottom: var(--espacamentoMedio);
`,Bd=Vt.input`
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
`,Hd=Vt.div`
  position: absolute;
  left: var(--espacamentoMedio);
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
  z-index: 1;
  opacity: ${e=>e.recolhido?0:1};
  transition: opacity var(--transicaoMedia);
  visibility: ${e=>e.recolhido?"hidden":"visible"};
`,Wd=Vt.div`
  margin-bottom: var(--espacamentoGrande);
`,Vd=Vt.select`
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
`,qd=Vt.option`
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
`,Gd=Vt.div`
  margin-top: auto;
  padding-top: var(--espacamentoGrande);
  border-top: 1px solid var(--corBordaPrimaria);
`,Kd=Vt.button`
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
`,Yd=e=>{let{onAbrirConfiguracoes:t,telaAtiva:n,onTelaChange:r}=e;const{categoriaAtiva:a,menuRecolhido:o,termoBusca:i,ordenacao:l,alternarMenu:s,definirCategoriaAtiva:c,definirTermoBusca:u,definirOrdenacao:d,estatisticas:f}=Tl(),p=[{id:"notas",titulo:"Minhas Notas",icone:el,contador:f.totalNotas},{id:"links",titulo:"Meus Links",icone:$i,contador:0},{id:"lixeira",titulo:"Lixeira",icone:Yi,contador:f.notasDeletadas}];return(0,Cl.jsxs)(jd,{recolhido:o,children:[(0,Cl.jsxs)(Td,{recolhido:o,children:[(0,Cl.jsx)(_d,{recolhido:o,children:"WRTmind"}),(0,Cl.jsx)(Ad,{onClick:s,children:(0,Cl.jsx)(ii,{icon:o?Yi:fi,size:"sm"})})]}),(0,Cl.jsxs)(Nd,{children:[(0,Cl.jsxs)(Ud,{children:[(0,Cl.jsx)(zd,{recolhido:o,children:"Buscar"}),(0,Cl.jsxs)($d,{children:[(0,Cl.jsx)(Hd,{recolhido:o,children:(0,Cl.jsx)(ii,{icon:Hi,size:"sm"})}),(0,Cl.jsx)(Bd,{type:"text",placeholder:"Buscar por t\xedtulo...",value:i,onChange:e=>u(e.target.value),recolhido:o})]})]}),(0,Cl.jsxs)(Wd,{children:[(0,Cl.jsx)(zd,{recolhido:o,children:"Ordenar por"}),(0,Cl.jsx)(Vd,{value:l,onChange:e=>d(e.target.value),recolhido:o,children:[{valor:"dataCriacao",label:"Data de Cria\xe7\xe3o"},{valor:"dataModificacao",label:"Data de Modifica\xe7\xe3o"},{valor:"titulo",label:"T\xedtulo"},{valor:"topico",label:"T\xf3pico"}].map(e=>(0,Cl.jsx)(qd,{value:e.valor,children:e.label},e.valor))})]}),(0,Cl.jsxs)(Rd,{recolhido:o,children:[(0,Cl.jsx)(zd,{recolhido:o,children:"T\xf3picos"}),(0,Cl.jsx)(Od,{children:f.notasPorTopico.map(e=>{let{topico:t,quantidade:n}=e;return(0,Cl.jsx)(Ld,{children:(0,Cl.jsxs)(Md,{onClick:()=>c(t),title:o?t:"",children:[(0,Cl.jsx)(Fd,{children:(0,Cl.jsx)(ii,{icon:zi,size:"sm"})}),(0,Cl.jsx)(Id,{recolhido:o,children:t}),(0,Cl.jsx)(Dd,{recolhido:o,children:n})]})},t)})})]}),(0,Cl.jsxs)(Rd,{recolhido:o,children:[(0,Cl.jsx)(zd,{recolhido:o,children:"Navega\xe7\xe3o"}),(0,Cl.jsx)(Od,{children:p.map(e=>(0,Cl.jsx)(Ld,{children:(0,Cl.jsxs)(Md,{ativo:n===e.id,onClick:()=>r(e.id),title:o?e.titulo:"",children:[(0,Cl.jsx)(Fd,{children:(0,Cl.jsx)(ii,{icon:e.icone,size:"sm"})}),(0,Cl.jsx)(Id,{recolhido:o,children:e.titulo}),(0,Cl.jsx)(Dd,{ativo:n===e.id,recolhido:o,children:e.contador})]})},e.id))})]}),(0,Cl.jsx)(Gd,{children:(0,Cl.jsxs)(Kd,{onClick:t,title:o?"Configura\xe7\xf5es":"",children:[(0,Cl.jsx)(Fd,{children:(0,Cl.jsx)(ii,{icon:Ii,size:"sm"})}),(0,Cl.jsx)(Id,{recolhido:o,children:"Configura\xe7\xf5es"})]})})]})]})},Qd=(function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=Bt.apply(void 0,a([t],n,!1)),l="sc-global-".concat(je(JSON.stringify(i))),s=new qt(i,l),c=function(t){var n=Ct(),r=e.useContext(Ft),a=e.useRef(n.styleSheet.allocateGSInstance(l)).current;return n.styleSheet.server&&u(a,t,n.styleSheet,r,n.stylis),e.useLayoutEffect(function(){if(!n.styleSheet.server)return u(a,t,n.styleSheet,r,n.stylis),function(){return s.removeStyles(a,n.styleSheet)}},[a,t,n.styleSheet,r,n.stylis]),null};function u(e,t,n,a,o){if(s.isStatic)s.renderStyles(e,pe,n,o);else{var i=r(r({},t),{theme:ve(t,a,c.defaultProps)});s.renderStyles(e,i,n,o)}}return e.memo(c)})`
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
`,Xd=Qd,Jd=Vt.div`
  min-height: 100vh;
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`,Zd=Vt.div`
  display: flex;
  min-height: 100vh;
`,ef=Vt.div`
  flex: 1;
  margin-left: ${e=>e.menuRecolhido?"var(--larguraMenuRecolhido)":"var(--larguraMenu)"};
  transition: margin-left var(--transicaoMedia);
  display: flex;
  flex-direction: column;
`,tf=Vt.header`
  background: var(--corFundoSecundaria);
  border-bottom: 2px solid var(--corBordaPrimaria);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--sombraLeve);
  height: 80px;
  box-sizing: border-box;
`,nf=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  color: var(--corTextoPrimaria);
  font-weight: 600;
`,rf=Vt.button`
  background: var(--corErro);
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
  gap: 6px;

  &:hover {
    background: var(--corErroHover);
    transform: translateY(-1px);
  }
`,af=Vt.div`
  color: var(--corPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,of=Vt.div`
  background: var(--corFundoTerciaria);
  border-bottom: 1px solid var(--corBordaPrimaria);
  padding: var(--espacamentoPequeno) var(--espacamentoGrande);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`,lf=Vt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`,sf=Vt.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>"online"===e.status?"var(--corSucesso)":"syncing"===e.status?"var(--corAviso)":"var(--corErro)"};
`,cf=Vt.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: 6px 12px;
  font-size: var(--tamanhoFontePequena);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover:not(:disabled) {
    background: var(--corSecundaria);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,uf=Vt.div`
  flex: 1;
  overflow-y: auto;
`;const df=()=>{const{categorias:t,carregando:n,carregarNotas:r,adicionarNota:a,editarNota:o,excluirNota:i,alternarFavorito:l,notasAtivas:s,menuRecolhido:c}=Tl(),[u,d]=(0,e.useState)(null),[f,p]=(0,e.useState)("inicial"),[m,h]=(0,e.useState)(!1),[v,g]=(0,e.useState)(null),[b,y]=(0,e.useState)("editar"),[x,w]=(0,e.useState)(!1),[S,k]=(0,e.useState)(null),[E,P]=(0,e.useState)(!1),[C,j]=(0,e.useState)(!1),[T,_]=(0,e.useState)(!1),[A,N]=(0,e.useState)(null),[R,z]=(0,e.useState)("editar"),[O,L]=(0,e.useState)([]),[M,F]=(0,e.useState)(!1),{syncStatus:I,lastSync:D,sincronizarManual:U}=function(){const[t,n]=(0,e.useState)("online"),[r,a]=(0,e.useState)(null),o=async()=>{try{const e=await fetch(`${{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_API_BASE_URL}/sync/status`);if(e.ok){const t=await e.json();n(t.status||"online"),a(t.lastSync?new Date(t.lastSync):null)}else n("offline")}catch(e){console.error("Erro ao verificar status de sincroniza\xe7\xe3o:",e),n("offline")}};return(0,e.useEffect)(()=>{o();const e=setInterval(o,3e4);return()=>clearInterval(e)},[]),{syncStatus:t,lastSync:r,sincronizarManual:async()=>{n("syncing");try{const e=await fetch(`${{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_API_BASE_URL}/sync/manual`,{method:"POST",headers:{"Content-Type":"application/json"}});if(e.ok){const t=await e.json();n("online"),a(new Date),console.log("Sincroniza\xe7\xe3o manual realizada com sucesso:",t)}else n("offline"),console.error("Erro na sincroniza\xe7\xe3o manual")}catch(e){console.error("Erro na sincroniza\xe7\xe3o manual:",e),n("offline")}}}}();(0,e.useEffect)(()=>{const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e);d(t),p("inicial"),console.log("\ud83d\udd04 Carregando dados iniciais..."),$(t)}catch(t){console.error("Erro ao carregar dados do usu\xe1rio:",t),localStorage.removeItem("user")}},[]);const $=async e=>{if(e)try{console.log("\ud83d\udcdd Carregando notas..."),await r(),console.log("\u2705 Notas carregadas"),console.log("\ud83d\udd17 Carregando links..."),await B(),console.log("\u2705 Links carregados"),console.log("\ud83c\udf89 Todos os dados carregados com sucesso!")}catch(t){console.error("\u274c Erro ao carregar dados iniciais:",t)}};(0,e.useEffect)(()=>{u&&B()},[u]);const B=async()=>{if(u){F(!0);try{console.log("\ud83d\udd04 Carregando links...");const e=await sl.buscarTodos();console.log("\ud83d\udd17 Resposta da API de links:",e);const t=e.links||e.data||[];console.log("\ud83d\udd17 Links carregados:",t),console.log("\ud83d\udd17 Quantidade de links:",t.length),L(t)}catch(e){console.error("Erro ao carregar links:",e)}finally{F(!1)}}},H=e=>{const t=e.detail;g(t),y("visualizar"),h(!0)},W=e=>{const t=e.detail;window.open(t.url,"_blank")},V=()=>{d(null),p("login"),h(!1),w(!1),P(!1),j(!1)};(0,e.useEffect)(()=>(window.addEventListener("abrirNota",H),window.addEventListener("abrirLink",W),window.addEventListener("userLogout",V),()=>{window.removeEventListener("abrirNota",H),window.removeEventListener("abrirLink",W),window.removeEventListener("userLogout",V)}),[]);const q=e=>{d(e),p("inicial"),console.log("\ud83d\udd04 Login realizado, carregando dados..."),$(e)},G=()=>{g(null),y("editar"),h(!0)},K=()=>{N(null),z("editar"),_(!0)},Y=e=>{g(e),y("editar"),h(!0)},Q=e=>{N(e),z("editar"),_(!0)},X=e=>{g(e),y("visualizar"),h(!0)},J=e=>{console.log("Exportar:",e)},Z=e=>{console.log("Imprimir:",e)},ee=e=>{k(e),w(!0)},te=async e=>{try{window.confirm("Tem certeza que deseja excluir este link?")&&(await sl.deletar(e),console.log("\u2705 Link deletado:",e),L(t=>t.filter(t=>t.id!==e)),_(!1),N(null))}catch(t){console.error("Erro ao excluir link:",t),alert("Erro ao excluir link")}},ne=async e=>{try{await i(e),h(!1),g(null)}catch(t){console.error("Erro ao excluir item:",t)}},re=async()=>{P(!0)},ae=u&&"Nrt4xSRGjruu5yBTUxrA"===u.id,oe=()=>{ae?j(!0):alert("Acesso negado. Apenas administradores podem acessar este painel.")};return u?(0,Cl.jsxs)(Jd,{children:[(0,Cl.jsx)(Xd,{}),(0,Cl.jsxs)(Zd,{children:[(0,Cl.jsx)(Yd,{onAbrirConfiguracoes:()=>{p("configuracoes")},telaAtiva:f,onTelaChange:p}),(0,Cl.jsxs)(ef,{menuRecolhido:c,children:[(0,Cl.jsxs)(tf,{children:[(0,Cl.jsxs)(af,{children:[(0,Cl.jsx)(ii,{icon:el}),"WRTmind"]}),(0,Cl.jsxs)(nf,{children:[(0,Cl.jsxs)("span",{children:["Ol\xe1, ",u.nome]}),(0,Cl.jsxs)(rf,{onClick:()=>{localStorage.removeItem("user"),d(null),p("login")},children:[(0,Cl.jsx)(ii,{icon:di}),"Sair"]})]})]}),(0,Cl.jsxs)(of,{children:[(0,Cl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoGrande)"},children:[(0,Cl.jsxs)(lf,{children:[(0,Cl.jsx)(sf,{status:I}),(0,Cl.jsx)("span",{children:"online"===I?"Online":"syncing"===I?"Sincronizando...":"Offline"})]}),D&&(0,Cl.jsxs)(lf,{children:[(0,Cl.jsx)(ii,{icon:Di}),(0,Cl.jsxs)("span",{children:["\xdaltima sincroniza\xe7\xe3o: ",D.toLocaleTimeString()]})]})]}),(0,Cl.jsxs)(cf,{onClick:U,disabled:"syncing"===I,children:[(0,Cl.jsx)(ii,{icon:Si,spin:"syncing"===I}),"Sincronizar"]})]}),(0,Cl.jsx)(uf,{children:(()=>{switch(console.log("\ud83d\udd0d Renderizando conte\xfado - telaAtiva:",f),console.log("\ud83d\udcdd Notas ativas:",s),console.log("\ud83d\udcdd Total de notas:",(null===s||void 0===s?void 0:s.length)||0),f){case"login":return(0,Cl.jsx)(Wl,{onLogin:q});case"inicial":return(0,Cl.jsx)(ps,{notas:s,links:O,carregando:n,carregandoLinks:M,onNovoItem:G,onEditarItem:Y,onVisualizarItem:X,onTelaCheia:ee});case"notas":return(0,Cl.jsx)(zs,{notas:s,carregando:n,onNovoItem:G,onEditarItem:Y,onVisualizarItem:X,onExcluirItem:ne,onFavoritarItem:l});case"links":return(0,Cl.jsx)(tc,{links:O,carregando:M,onNovoItem:K,onEditarItem:Q,onVisualizarItem:e=>window.open(e.url,"_blank"),onExcluirItem:te,onFavoritarItem:e=>console.log("Favoritar link:",e)});case"favoritos":return(0,Cl.jsx)(Nc,{itens:s.filter(e=>e.favorito),tipo:"nota",titulo:"Favoritos",icone:Pi,carregando:n,onNovo:G,onEditar:Y,onExcluir:ne,onVisualizar:X,onExportar:J,onImprimir:Z,onTelaCheia:ee,onFavoritar:l});case"lixeira":return(0,Cl.jsx)(dd,{notas:s.filter(e=>!e.ativo),onRestaurar:e=>console.log("Restaurar:",e),onExcluirDefinitivamente:e=>console.log("Excluir definitivamente:",e)});case"configuracoes":return(0,Cl.jsx)(Nu,{onAbrirLogs:re,onAbrirAdmin:oe,syncStatus:I,lastSync:D,onSincronizar:U});default:return(0,Cl.jsx)(ps,{})}})()})]})]}),(0,Cl.jsx)(Yc,{isVisible:m,item:v,modo:b,categorias:t,onSave:async(e,t)=>{try{void 0!==t.url?e?console.log("Editar link:",e,t):console.log("Criar link:",t):e?await o(e,t):await a(t),h(!1),g(null)}catch(n){console.error("Erro ao salvar item:",n)}},onDelete:ne,onClose:()=>{h(!1),g(null)}}),(0,Cl.jsx)(iu,{isVisible:T,link:A,modo:R,onSave:async e=>{try{if(A){const t=await sl.atualizar(A.id,e);console.log("\u2705 Link atualizado:",t),L(t=>t.map(t=>t.id===A.id?{...t,...e}:t))}else{const t=await sl.criar(e);console.log("\u2705 Link criado:",t);const n=t.data||t.link;n&&L(e=>[...e,n])}_(!1),N(null)}catch(t){console.error("Erro ao salvar link:",t),alert("Erro ao salvar link")}},onDelete:te,onClose:()=>_(!1)}),(0,Cl.jsx)(Cd,{isVisible:x,nota:S,onClose:()=>{w(!1),k(null)},onEdit:()=>{S&&(g(S),y("editar"),h(!0),w(!1))},onDelete:()=>{S&&(ne(S.id),w(!1))}}),(0,Cl.jsx)(Qu,{isVisible:E,onClose:()=>P(!1),onCarregarLogs:async()=>{console.log("Carregando logs do sistema...")},onLimparLogs:async()=>{console.log("Limpando logs do sistema...")},onExportarLogs:async()=>{console.log("Exportando logs...")}}),(0,Cl.jsx)(id,{isVisible:C,onClose:()=>j(!1)})]}):(0,Cl.jsxs)(Jd,{children:[(0,Cl.jsx)(Xd,{}),(0,Cl.jsx)(Wl,{onLogin:q})]})},ff=()=>(0,Cl.jsx)(_l,{children:(0,Cl.jsx)(df,{})}),pf=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then(t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),r(e),a(e),o(e),i(e)})};t.createRoot(document.getElementById("root")).render((0,Cl.jsx)(e.StrictMode,{children:(0,Cl.jsx)(ff,{})})),pf()})()})();
//# sourceMappingURL=main.f6a522be.js.map
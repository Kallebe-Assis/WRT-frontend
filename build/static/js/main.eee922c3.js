/*! For license information please see main.eee922c3.js.LICENSE.txt */
(()=>{var e={4:(e,t,a)=>{"use strict";var n=a(853),r=a(43),o=a(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(a=t.return),e=t.return}while(e)}return 3===t.tag?a:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(i(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var j=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var z=Symbol.iterator;function _(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var R=Symbol.for("react.client.reference");function M(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===R?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case b:return"Profiler";case v:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList";case j:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case h:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(t=e.displayName||null)?t:M(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return M(e(t))}catch(a){}}return null}var A=Array.isArray,N=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},F=[],I=-1;function D(e){return{current:e}}function q(e){0>I||(e.current=F[I],F[I]=null,I--)}function $(e,t){I++,F[I]=e.current,e.current=t}var B=D(null),U=D(null),H=D(null),W=D(null);function V(e,t){switch($(H,t),$(U,e),$(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=od(t=rd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(B),$(B,e)}function G(){q(B),q(U),q(H)}function Y(e){null!==e.memoizedState&&$(W,e);var t=B.current,a=od(t,e.type);t!==a&&($(U,e),$(B,a))}function K(e){U.current===e&&(q(B),q(U)),W.current===e&&(q(W),Yd._currentValue=O)}var Q=Object.prototype.hasOwnProperty,X=n.unstable_scheduleCallback,J=n.unstable_cancelCallback,Z=n.unstable_shouldYield,ee=n.unstable_requestPaint,te=n.unstable_now,ae=n.unstable_getCurrentPriorityLevel,ne=n.unstable_ImmediatePriority,re=n.unstable_UserBlockingPriority,oe=n.unstable_NormalPriority,ie=n.unstable_LowPriority,le=n.unstable_IdlePriority,se=n.log,ce=n.unstable_setDisableYieldValue,ue=null,de=null;function fe(e){if("function"===typeof se&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var pe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(me(e)/he|0)|0},me=Math.log,he=Math.LN2;var ge=256,ve=4194304;function be(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ye(e,t,a){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&n;return 0!==l?0!==(n=l&~o)?r=be(n):0!==(i&=l)?r=be(i):a||0!==(a=l&~e)&&(r=be(a)):0!==(l=n&~o)?r=be(l):0!==i?r=be(i):a||0!==(a=n&~e)&&(r=be(a)),0===r?0:0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(a=t&-t)||32===o&&0!==(4194048&a))?t:r}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=ve;return 0===(62914560&(ve<<=1))&&(ve=4194304),e}function Ee(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Pe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ce(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-pe(t);e.entangledLanes|=t,e.entanglements[n]=1073741824|e.entanglements[n]|4194090&a}function je(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-pe(a),r=1<<n;r&t|e[n]&t&&(e[n]|=t),a&=~r}}function Te(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ze(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function _e(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:uf(e.type)}var Re=Math.random().toString(36).slice(2),Me="__reactFiber$"+Re,Ae="__reactProps$"+Re,Ne="__reactContainer$"+Re,Le="__reactEvents$"+Re,Oe="__reactListeners$"+Re,Fe="__reactHandles$"+Re,Ie="__reactResources$"+Re,De="__reactMarker$"+Re;function qe(e){delete e[Me],delete e[Ae],delete e[Le],delete e[Oe],delete e[Fe]}function $e(e){var t=e[Me];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ne]||a[Me]){if(a=t.alternate,null!==t.child||null!==a&&null!==a.child)for(e=yd(e);null!==e;){if(a=e[Me])return a;e=yd(e)}return t}a=(e=a).parentNode}return null}function Be(e){if(e=e[Me]||e[Ne]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ue(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function He(e){var t=e[Ie];return t||(t=e[Ie]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[De]=!0}var Ve=new Set,Ge={};function Ye(e,t){Ke(e,t),Ke(e+"Capture",t)}function Ke(e,t){for(Ge[e]=t,e=0;e<t.length;e++)Ve.add(t[e])}var Qe,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,a){if(r=t,Q.call(et,r)||!Q.call(Ze,r)&&(Je.test(r)?et[r]=!0:(Ze[r]=!0,0)))if(null===a)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var n=t.toLowerCase().slice(0,5);if("data-"!==n&&"aria-"!==n)return void e.removeAttribute(t)}e.setAttribute(t,""+a)}var r}function at(e,t,a){if(null===a)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+a)}}function nt(e,t,a,n){if(null===n)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(a)}e.setAttributeNS(t,a,""+n)}}function rt(e){if(void 0===Qe)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Xe=-1<a.stack.indexOf("\n    at")?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Qe+e+Xe}var ot=!1;function it(e,t){if(!e||ot)return"";ot=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var a=function(){throw Error()};if(Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(a,[])}catch(r){var n=r}Reflect.construct(e,[],a)}else{try{a.call()}catch(o){n=o}e.call(a.prototype)}}else{try{throw Error()}catch(i){n=i}(a=e())&&"function"===typeof a.catch&&a.catch(function(){})}}catch(l){if(l&&n&&"string"===typeof l.stack)return[l.stack,n.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(r=n=0;n<s.length&&!s[n].includes("DetermineComponentFrameRoot");)n++;for(;r<c.length&&!c[r].includes("DetermineComponentFrameRoot");)r++;if(n===s.length||r===c.length)for(n=s.length-1,r=c.length-1;1<=n&&0<=r&&s[n]!==c[r];)r--;for(;1<=n&&0<=r;n--,r--)if(s[n]!==c[r]){if(1!==n||1!==r)do{if(n--,0>--r||s[n]!==c[r]){var u="\n"+s[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=n&&0<=r);break}}}finally{ot=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?rt(a):""}function lt(e){switch(e.tag){case 26:case 27:case 5:return rt(e.type);case 16:return rt("Lazy");case 13:return rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return it(e.type,!1);case 11:return it(e.type.render,!1);case 1:return it(e.type,!0);case 31:return rt("Activity");default:return""}}function st(e){try{var t="";do{t+=lt(e),e=e.return}while(e);return t}catch(a){return"\nError generating stack: "+a.message+"\n"+a.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof a&&"function"===typeof a.get&&"function"===typeof a.set){var r=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=ut(e)?e.checked?"true":"false":e.value),(e=n)!==a&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var mt=/[\n"\\]/g;function ht(e){return e.replace(mt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gt(e,t,a,n,r,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?bt(e,i,ct(t)):null!=a?bt(e,i,ct(a)):null!=n&&e.removeAttribute("value"),null==r&&null!=o&&(e.defaultChecked=!!o),null!=r&&(e.checked=r&&"function"!==typeof r&&"symbol"!==typeof r),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ct(l):e.removeAttribute("name")}function vt(e,t,a,n,r,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=a){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return;a=null!=a?""+ct(a):"",t=null!=t?""+ct(t):a,l||t===e.value||(e.value=t),e.defaultValue=t}n="function"!==typeof(n=null!=n?n:r)&&"symbol"!==typeof n&&!!n,e.checked=l?e.checked:!!n,e.defaultChecked=!!n,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i)}function bt(e,t,a){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yt(e,t,a,n){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ct(a),t=null,r=0;r<e.length;r++){if(e[r].value===a)return e[r].selected=!0,void(n&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function xt(e,t,a){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=a)?e.defaultValue=null!=a?""+ct(a):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,a,n){if(null==t){if(null!=n){if(null!=a)throw Error(i(92));if(A(n)){if(1<n.length)throw Error(i(93));n=n[0]}a=n}null==a&&(a=""),t=a}a=ct(t),e.defaultValue=a,(n=e.textContent)===a&&""!==n&&null!==n&&(e.value=n)}function St(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&3===a.nodeType)return void(a.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,a){var n=0===t.indexOf("--");null==a||"boolean"===typeof a||""===a?n?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":n?e.setProperty(t,a):"number"!==typeof a||0===a||kt.has(t)?"float"===t?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Pt(e,t,a){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=a){for(var n in a)!a.hasOwnProperty(n)||null!=t&&t.hasOwnProperty(n)||(0===n.indexOf("--")?e.setProperty(n,""):"float"===n?e.cssFloat="":e[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&a[r]!==n&&Et(e,r,n)}else for(var o in t)t.hasOwnProperty(o)&&Et(e,o,t[o])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zt(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _t=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Mt=null,At=null;function Nt(e){var t=Be(e);if(t&&(e=t.stateNode)){var a=e[Ae]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,"radio"===a.type&&null!=t){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var r=n[Ae]||null;if(!r)throw Error(i(90));gt(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)(n=a[t]).form===e.form&&ft(n)}break e;case"textarea":xt(e,a.value,a.defaultValue);break e;case"select":null!=(t=a.value)&&yt(e,!!a.multiple,t,!1)}}}var Lt=!1;function Ot(e,t,a){if(Lt)return e(t,a);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==Mt||null!==At)&&($c(),Mt&&(t=Mt,e=At,At=Mt=null,Nt(t),e)))for(t=0;t<e.length;t++)Nt(e[t])}}function Ft(e,t){var a=e.stateNode;if(null===a)return null;var n=a[Ae]||null;if(null===n)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(a&&"function"!==typeof a)throw Error(i(231,t,typeof a));return a}var It=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Dt=!1;if(It)try{var qt={};Object.defineProperty(qt,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",qt,qt),window.removeEventListener("test",qt,qt)}catch(Nf){Dt=!1}var $t=null,Bt=null,Ut=null;function Ht(){if(Ut)return Ut;var e,t,a=Bt,n=a.length,r="value"in $t?$t.value:$t.textContent,o=r.length;for(e=0;e<n&&a[e]===r[e];e++);var i=n-e;for(t=1;t<=i&&a[n-t]===r[o-t];t++);return Ut=r.slice(e,1<t?1-t:void 0)}function Wt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Vt(){return!0}function Gt(){return!1}function Yt(e){function t(t,a,n,r,o){for(var i in this._reactName=t,this._targetInst=n,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(r):r[i]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?Vt:Gt,this.isPropagationStopped=Gt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Vt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Vt)},persist:function(){},isPersistent:Vt}),t}var Kt,Qt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Yt(Jt),ea=f({},Jt,{view:0,detail:0}),ta=Yt(ea),aa=f({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Kt=e.screenX-Xt.screenX,Qt=e.screenY-Xt.screenY):Qt=Kt=0,Xt=e),Kt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),na=Yt(aa),ra=Yt(f({},aa,{dataTransfer:0})),oa=Yt(f({},ea,{relatedTarget:0})),ia=Yt(f({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),la=Yt(f({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),sa=Yt(f({},Jt,{data:0})),ca={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ua={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},da={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fa(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=da[e])&&!!t[e]}function pa(){return fa}var ma=Yt(f({},ea,{key:function(e){if(e.key){var t=ca[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Wt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?ua[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(e){return"keypress"===e.type?Wt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Wt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),ha=Yt(f({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),ga=Yt(f({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa})),va=Yt(f({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),ba=Yt(f({},aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ya=Yt(f({},Jt,{newState:0,oldState:0})),xa=[9,13,27,32],wa=It&&"CompositionEvent"in window,Sa=null;It&&"documentMode"in document&&(Sa=document.documentMode);var ka=It&&"TextEvent"in window&&!Sa,Ea=It&&(!wa||Sa&&8<Sa&&11>=Sa),Pa=String.fromCharCode(32),Ca=!1;function ja(e,t){switch(e){case"keyup":return-1!==xa.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ta(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var za=!1;var _a={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!_a[e.type]:"textarea"===t}function Ma(e,t,a,n){Mt?At?At.push(n):At=[n]:Mt=n,0<(t=Hu(t,"onChange")).length&&(a=new Zt("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Aa=null,Na=null;function La(e){Ou(e,0)}function Oa(e){if(ft(Ue(e)))return e}function Fa(e,t){if("change"===e)return t}var Ia=!1;if(It){var Da;if(It){var qa="oninput"in document;if(!qa){var $a=document.createElement("div");$a.setAttribute("oninput","return;"),qa="function"===typeof $a.oninput}Da=qa}else Da=!1;Ia=Da&&(!document.documentMode||9<document.documentMode)}function Ba(){Aa&&(Aa.detachEvent("onpropertychange",Ua),Na=Aa=null)}function Ua(e){if("value"===e.propertyName&&Oa(Na)){var t=[];Ma(t,Na,e,Rt(e)),Ot(La,t)}}function Ha(e,t,a){"focusin"===e?(Ba(),Na=a,(Aa=t).attachEvent("onpropertychange",Ua)):"focusout"===e&&Ba()}function Wa(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Oa(Na)}function Va(e,t){if("click"===e)return Oa(t)}function Ga(e,t){if("input"===e||"change"===e)return Oa(t)}var Ya="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Ka(e,t){if(Ya(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var r=a[n];if(!Q.call(t,r)||!Ya(e[r],t[r]))return!1}return!0}function Qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xa(e,t){var a,n=Qa(e);for(e=0;n;){if(3===n.nodeType){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qa(n)}}function Ja(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Ja(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Za(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var a="string"===typeof t.contentWindow.location.href}catch(n){a=!1}if(!a)break;t=pt((e=t.contentWindow).document)}return t}function en(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var tn=It&&"documentMode"in document&&11>=document.documentMode,an=null,nn=null,rn=null,on=!1;function ln(e,t,a){var n=a.window===a?a.document:9===a.nodeType?a:a.ownerDocument;on||null==an||an!==pt(n)||("selectionStart"in(n=an)&&en(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},rn&&Ka(rn,n)||(rn=n,0<(n=Hu(nn,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=an)))}function sn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var cn={animationend:sn("Animation","AnimationEnd"),animationiteration:sn("Animation","AnimationIteration"),animationstart:sn("Animation","AnimationStart"),transitionrun:sn("Transition","TransitionRun"),transitionstart:sn("Transition","TransitionStart"),transitioncancel:sn("Transition","TransitionCancel"),transitionend:sn("Transition","TransitionEnd")},un={},dn={};function fn(e){if(un[e])return un[e];if(!cn[e])return e;var t,a=cn[e];for(t in a)if(a.hasOwnProperty(t)&&t in dn)return un[e]=a[t];return e}It&&(dn=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);var pn=fn("animationend"),mn=fn("animationiteration"),hn=fn("animationstart"),gn=fn("transitionrun"),vn=fn("transitionstart"),bn=fn("transitioncancel"),yn=fn("transitionend"),xn=new Map,wn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){xn.set(e,t),Ye(t,[e])}wn.push("scrollEnd");var kn=new WeakMap;function En(e,t){if("object"===typeof e&&null!==e){var a=kn.get(e);return void 0!==a?a:(t={value:e,source:t,stack:st(t)},kn.set(e,t),t)}return{value:e,source:t,stack:st(t)}}var Pn=[],Cn=0,jn=0;function Tn(){for(var e=Cn,t=jn=Cn=0;t<e;){var a=Pn[t];Pn[t++]=null;var n=Pn[t];Pn[t++]=null;var r=Pn[t];Pn[t++]=null;var o=Pn[t];if(Pn[t++]=null,null!==n&&null!==r){var i=n.pending;null===i?r.next=r:(r.next=i.next,i.next=r),n.pending=r}0!==o&&Mn(a,r,o)}}function zn(e,t,a,n){Pn[Cn++]=e,Pn[Cn++]=t,Pn[Cn++]=a,Pn[Cn++]=n,jn|=n,e.lanes|=n,null!==(e=e.alternate)&&(e.lanes|=n)}function _n(e,t,a,n){return zn(e,t,a,n),An(e)}function Rn(e,t){return zn(e,null,null,t),An(e)}function Mn(e,t,a){e.lanes|=a;var n=e.alternate;null!==n&&(n.lanes|=a);for(var r=!1,o=e.return;null!==o;)o.childLanes|=a,null!==(n=o.alternate)&&(n.childLanes|=a),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(r=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,r&&null!==t&&(r=31-pe(a),null===(n=(e=o.hiddenUpdates)[r])?e[r]=[t]:n.push(t),t.lane=536870912|a),o):null}function An(e){if(50<Mc)throw Mc=0,Ac=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Nn={};function Ln(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,t,a,n){return new Ln(e,t,a,n)}function Fn(e){return!(!(e=e.prototype)||!e.isReactComponent)}function In(e,t){var a=e.alternate;return null===a?((a=On(e.tag,t,e.key,e.mode)).elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=65011712&e.flags,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dn(e,t){e.flags&=65011714;var a=e.alternate;return null===a?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qn(e,t,a,n,r,o){var l=0;if(n=e,"function"===typeof e)Fn(e)&&(l=1);else if("string"===typeof e)l=function(e,t,a){if(1===a||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,a,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case j:return(e=On(31,a,t,r)).elementType=j,e.lanes=o,e;case g:return $n(a.children,r,o,t);case v:l=8,r|=24;break;case b:return(e=On(12,a,t,2|r)).elementType=b,e.lanes=o,e;case k:return(e=On(13,a,t,r)).elementType=k,e.lanes=o,e;case E:return(e=On(19,a,t,r)).elementType=E,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case y:case w:l=10;break e;case x:l=9;break e;case S:l=11;break e;case P:l=14;break e;case C:l=16,n=null;break e}l=29,a=Error(i(130,null===e?"null":typeof e,"")),n=null}return(t=On(l,a,t,r)).elementType=e,t.type=n,t.lanes=o,t}function $n(e,t,a,n){return(e=On(7,e,n,t)).lanes=a,e}function Bn(e,t,a){return(e=On(6,e,null,t)).lanes=a,e}function Un(e,t,a){return(t=On(4,null!==e.children?e.children:[],e.key,t)).lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hn=[],Wn=0,Vn=null,Gn=0,Yn=[],Kn=0,Qn=null,Xn=1,Jn="";function Zn(e,t){Hn[Wn++]=Gn,Hn[Wn++]=Vn,Vn=e,Gn=t}function er(e,t,a){Yn[Kn++]=Xn,Yn[Kn++]=Jn,Yn[Kn++]=Qn,Qn=e;var n=Xn;e=Jn;var r=32-pe(n)-1;n&=~(1<<r),a+=1;var o=32-pe(t)+r;if(30<o){var i=r-r%5;o=(n&(1<<i)-1).toString(32),n>>=i,r-=i,Xn=1<<32-pe(t)+r|a<<r|n,Jn=o+e}else Xn=1<<o|a<<r|n,Jn=e}function tr(e){null!==e.return&&(Zn(e,1),er(e,1,0))}function ar(e){for(;e===Vn;)Vn=Hn[--Wn],Hn[Wn]=null,Gn=Hn[--Wn],Hn[Wn]=null;for(;e===Qn;)Qn=Yn[--Kn],Yn[Kn]=null,Jn=Yn[--Kn],Yn[Kn]=null,Xn=Yn[--Kn],Yn[Kn]=null}var nr=null,rr=null,or=!1,ir=null,lr=!1,sr=Error(i(519));function cr(e){throw hr(En(Error(i(418,"")),e)),sr}function ur(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Me]=e,t[Ae]=n,a){case"dialog":Fu("cancel",t),Fu("close",t);break;case"iframe":case"object":case"embed":Fu("load",t);break;case"video":case"audio":for(a=0;a<Nu.length;a++)Fu(Nu[a],t);break;case"source":Fu("error",t);break;case"img":case"image":case"link":Fu("error",t),Fu("load",t);break;case"details":Fu("toggle",t);break;case"input":Fu("invalid",t),vt(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),dt(t);break;case"select":Fu("invalid",t);break;case"textarea":Fu("invalid",t),wt(t,n.value,n.defaultValue,n.children),dt(t)}"string"!==typeof(a=n.children)&&"number"!==typeof a&&"bigint"!==typeof a||t.textContent===""+a||!0===n.suppressHydrationWarning||Qu(t.textContent,a)?(null!=n.popover&&(Fu("beforetoggle",t),Fu("toggle",t)),null!=n.onScroll&&Fu("scroll",t),null!=n.onScrollEnd&&Fu("scrollend",t),null!=n.onClick&&(t.onclick=Xu),t=!0):t=!1,t||cr(e)}function dr(e){for(nr=e.return;nr;)switch(nr.tag){case 5:case 13:return void(lr=!1);case 27:case 3:return void(lr=!0);default:nr=nr.return}}function fr(e){if(e!==nr)return!1;if(!or)return dr(e),or=!0,!1;var t,a=e.tag;if((t=3!==a&&27!==a)&&((t=5===a)&&(t=!("form"!==(t=e.type)&&"button"!==t)||id(e.type,e.memoizedProps)),t=!t),t&&rr&&cr(e),dr(e),13===a){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,a=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===a){rr=vd(e.nextSibling);break e}a--}else"$"!==t&&"$!"!==t&&"$?"!==t||a++;e=e.nextSibling}rr=null}}else 27===a?(a=rr,pd(e.type)?(e=bd,bd=null,rr=e):rr=a):rr=nr?vd(e.stateNode.nextSibling):null;return!0}function pr(){rr=nr=null,or=!1}function mr(){var e=ir;return null!==e&&(null===yc?yc=e:yc.push.apply(yc,e),ir=null),e}function hr(e){null===ir?ir=[e]:ir.push(e)}var gr=D(null),vr=null,br=null;function yr(e,t,a){$(gr,t._currentValue),t._currentValue=a}function xr(e){e._currentValue=gr.current,q(gr)}function wr(e,t,a){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Sr(e,t,a,n){var r=e.child;for(null!==r&&(r.return=e);null!==r;){var o=r.dependencies;if(null!==o){var l=r.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=r;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=a,null!==(s=o.alternate)&&(s.lanes|=a),wr(o.return,a,e),n||(l=null);break e}o=s.next}}else if(18===r.tag){if(null===(l=r.return))throw Error(i(341));l.lanes|=a,null!==(o=l.alternate)&&(o.lanes|=a),wr(l,a,e),l=null}else l=r.child;if(null!==l)l.return=r;else for(l=r;null!==l;){if(l===e){l=null;break}if(null!==(r=l.sibling)){r.return=l.return,l=r;break}l=l.return}r=l}}function kr(e,t,a,n){e=null;for(var r=t,o=!1;null!==r;){if(!o)if(0!==(524288&r.flags))o=!0;else if(0!==(262144&r.flags))break;if(10===r.tag){var l=r.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=r.type;Ya(r.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(r===W.current){if(null===(l=r.alternate))throw Error(i(387));l.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(null!==e?e.push(Yd):e=[Yd])}r=r.return}null!==e&&Sr(t,e,a,n),t.flags|=262144}function Er(e){for(e=e.firstContext;null!==e;){if(!Ya(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pr(e){vr=e,br=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Cr(e){return Tr(vr,e)}function jr(e,t){return null===vr&&Pr(e),Tr(e,t)}function Tr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},null===br){if(null===e)throw Error(i(308));br=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else br=br.next=t;return a}var zr="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},_r=n.unstable_scheduleCallback,Rr=n.unstable_NormalPriority,Mr={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ar(){return{controller:new zr,data:new Map,refCount:0}}function Nr(e){e.refCount--,0===e.refCount&&_r(Rr,function(){e.controller.abort()})}var Lr=null,Or=0,Fr=0,Ir=null;function Dr(){if(0===--Or&&null!==Lr){null!==Ir&&(Ir.status="fulfilled");var e=Lr;Lr=null,Fr=0,Ir=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var qr=N.S;N.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Lr){var a=Lr=[];Or=0,Fr=zu(),Ir={status:"pending",value:void 0,then:function(e){a.push(e)}}}Or++,t.then(Dr,Dr)}(0,t),null!==qr&&qr(e,t)};var $r=D(null);function Br(){var e=$r.current;return null!==e?e:nc.pooledCache}function Ur(e,t){$($r,null===t?$r.current:t.pool)}function Hr(){var e=Br();return null===e?null:{parent:Mr._currentValue,pool:e}}var Wr=Error(i(460)),Vr=Error(i(474)),Gr=Error(i(542)),Yr={then:function(){}};function Kr(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Qr(){}function Xr(e,t,a){switch(void 0===(a=e[a])?e.push(t):a!==t&&(t.then(Qr,Qr),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Qr,Qr);else{if(null!==(e=nc)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var a=t;a.status="fulfilled",a.value=e}},function(e){if("pending"===t.status){var a=t;a.status="rejected",a.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e}throw Jr=t,Wr}}var Jr=null;function Zr(){if(null===Jr)throw Error(i(459));var e=Jr;return Jr=null,e}function eo(e){if(e===Wr||e===Gr)throw Error(i(483))}var to=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function no(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ro(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oo(e,t,a){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&ac)){var r=n.pending;return null===r?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=An(e),Mn(e,null,a),t}return zn(e,n,t,a),An(e)}function io(e,t,a){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&a))){var n=t.lanes;a|=n&=e.pendingLanes,t.lanes=a,je(e,a)}}function lo(e,t){var a=e.updateQueue,n=e.alternate;if(null!==n&&a===(n=n.updateQueue)){var r=null,o=null;if(null!==(a=a.firstBaseUpdate)){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};null===o?r=o=i:o=o.next=i,a=a.next}while(null!==a);null===o?r=o=t:o=o.next=t}else r=o=t;return a={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},void(e.updateQueue=a)}null===(e=a.lastBaseUpdate)?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var so=!1;function co(){if(so){if(null!==Ir)throw Ir}}function uo(e,t,a,n){so=!1;var r=e.updateQueue;to=!1;var o=r.firstBaseUpdate,i=r.lastBaseUpdate,l=r.shared.pending;if(null!==l){r.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=r.baseState;for(i=0,u=c=s=null,l=o;;){var p=-536870913&l.lane,m=p!==l.lane;if(m?(oc&p)===p:(n&p)===p){0!==p&&p===Fr&&(so=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,g=l;p=t;var v=a;switch(g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(v,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=g.payload)?h.call(v,d,p):h)||void 0===p)break e;d=f({},d,p);break e;case 2:to=!0}}null!==(p=l.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=r.callbacks)?r.callbacks=[p]:m.push(p))}else m={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=m,s=d):u=u.next=m,i|=p;if(null===(l=l.next)){if(null===(l=r.shared.pending))break;l=(m=l).next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}null===u&&(s=d),r.baseState=s,r.firstBaseUpdate=c,r.lastBaseUpdate=u,null===o&&(r.shared.lanes=0),pc|=i,e.lanes=i,e.memoizedState=d}}function fo(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function po(e,t){var a=e.callbacks;if(null!==a)for(e.callbacks=null,e=0;e<a.length;e++)fo(a[e],t)}var mo=D(null),ho=D(0);function go(e,t){$(ho,e=dc),$(mo,t),dc=e|t.baseLanes}function vo(){$(ho,dc),$(mo,mo.current)}function bo(){dc=ho.current,q(mo),q(ho)}var yo=0,xo=null,wo=null,So=null,ko=!1,Eo=!1,Po=!1,Co=0,jo=0,To=null,zo=0;function _o(){throw Error(i(321))}function Ro(e,t){if(null===t)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ya(e[a],t[a]))return!1;return!0}function Mo(e,t,a,n,r,o){return yo=o,xo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=null===e||null===e.memoizedState?Vi:Gi,Po=!1,o=a(n,r),Po=!1,Eo&&(o=No(t,a,n,r)),Ao(e),o}function Ao(e){N.H=Wi;var t=null!==wo&&null!==wo.next;if(yo=0,So=wo=xo=null,ko=!1,jo=0,To=null,t)throw Error(i(300));null===e||jl||null!==(e=e.dependencies)&&Er(e)&&(jl=!0)}function No(e,t,a,n){xo=e;var r=0;do{if(Eo&&(To=null),jo=0,Eo=!1,25<=r)throw Error(i(301));if(r+=1,So=wo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}N.H=Yi,o=t(a,n)}while(Eo);return o}function Lo(){var e=N.H,t=e.useState()[0];return t="function"===typeof t.then?$o(t):t,e=e.useState()[0],(null!==wo?wo.memoizedState:null)!==e&&(xo.flags|=1024),t}function Oo(){var e=0!==Co;return Co=0,e}function Fo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Io(e){if(ko){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ko=!1}yo=0,So=wo=xo=null,Eo=!1,jo=Co=0,To=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===So?xo.memoizedState=So=e:So=So.next=e,So}function qo(){if(null===wo){var e=xo.alternate;e=null!==e?e.memoizedState:null}else e=wo.next;var t=null===So?xo.memoizedState:So.next;if(null!==t)So=t,wo=e;else{if(null===e){if(null===xo.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(wo=e).memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},null===So?xo.memoizedState=So=e:So=So.next=e}return So}function $o(e){var t=jo;return jo+=1,null===To&&(To=[]),e=Xr(To,e,t),t=xo,null===(null===So?t.memoizedState:So.next)&&(t=t.alternate,N.H=null===t||null===t.memoizedState?Vi:Gi),e}function Bo(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return $o(e);if(e.$$typeof===w)return Cr(e)}throw Error(i(438,String(e)))}function Uo(e){var t=null,a=xo.updateQueue;if(null!==a&&(t=a.memoCache),null==t){var n=xo.alternate;null!==n&&(null!==(n=n.updateQueue)&&(null!=(n=n.memoCache)&&(t={data:n.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===a&&(a={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=a),a.memoCache=t,void 0===(a=t.data[t.index]))for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=T;return t.index++,a}function Ho(e,t){return"function"===typeof t?t(e):t}function Wo(e){return Vo(qo(),wo,e)}function Vo(e,t,a){var n=e.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=a;var r=e.baseQueue,o=n.pending;if(null!==o){if(null!==r){var l=r.next;r.next=o.next,o.next=l}t.baseQueue=r=o,n.pending=null}if(o=e.baseState,null===r)e.memoizedState=o;else{var s=l=null,c=null,u=t=r.next,d=!1;do{var f=-536870913&u.lane;if(f!==u.lane?(oc&f)===f:(yo&f)===f){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Fr&&(d=!0);else{if((yo&p)===p){u=u.next,p===Fr&&(d=!0);continue}f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=o):c=c.next=f,xo.lanes|=p,pc|=p}f=u.action,Po&&a(o,f),o=u.hasEagerState?u.eagerState:a(o,f)}else p={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,xo.lanes|=f,pc|=f;u=u.next}while(null!==u&&u!==t);if(null===c?l=o:c.next=s,!Ya(o,e.memoizedState)&&(jl=!0,d&&null!==(a=Ir)))throw a;e.memoizedState=o,e.baseState=l,e.baseQueue=c,n.lastRenderedState=o}return null===r&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Go(e){var t=qo(),a=t.queue;if(null===a)throw Error(i(311));a.lastRenderedReducer=e;var n=a.dispatch,r=a.pending,o=t.memoizedState;if(null!==r){a.pending=null;var l=r=r.next;do{o=e(o,l.action),l=l.next}while(l!==r);Ya(o,t.memoizedState)||(jl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function Yo(e,t,a){var n=xo,r=qo(),o=or;if(o){if(void 0===a)throw Error(i(407));a=a()}else a=t();var l=!Ya((wo||r).memoizedState,a);if(l&&(r.memoizedState=a,jl=!0),r=r.queue,vi(2048,8,Xo.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||null!==So&&1&So.memoizedState.tag){if(n.flags|=2048,mi(9,{destroy:void 0,resource:void 0},Qo.bind(null,n,r,a,t),null),null===nc)throw Error(i(349));o||0!==(124&yo)||Ko(n,t,a)}return a}function Ko(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},null===(t=xo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t,t.stores=[e]):null===(a=t.stores)?t.stores=[e]:a.push(e)}function Qo(e,t,a,n){t.value=a,t.getSnapshot=n,Jo(t)&&Zo(e)}function Xo(e,t,a){return a(function(){Jo(t)&&Zo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ya(e,a)}catch(n){return!0}}function Zo(e){var t=Rn(e,2);null!==t&&Oc(t,e,2)}function ei(e){var t=Do();if("function"===typeof e){var a=e;if(e=a(),Po){fe(!0);try{a()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t}function ti(e,t,a,n){return e.baseState=a,Vo(e,wo,"function"===typeof n?n:Ho)}function ai(e,t,a,n,r){if(Bi(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==N.T?a(!0):o.isTransition=!1,n(o),null===(a=t.pending)?(o.next=t.pending=o,ni(t,o)):(o.next=a.next,t.pending=a.next=o)}}function ni(e,t){var a=t.action,n=t.payload,r=e.state;if(t.isTransition){var o=N.T,i={};N.T=i;try{var l=a(r,n),s=N.S;null!==s&&s(i,l),ri(e,t,l)}catch(c){ii(e,t,c)}finally{N.T=o}}else try{ri(e,t,o=a(r,n))}catch(u){ii(e,t,u)}}function ri(e,t,a){null!==a&&"object"===typeof a&&"function"===typeof a.then?a.then(function(a){oi(e,t,a)},function(a){return ii(e,t,a)}):oi(e,t,a)}function oi(e,t,a){t.status="fulfilled",t.value=a,li(t),e.state=a,null!==(t=e.pending)&&((a=t.next)===t?e.pending=null:(a=a.next,t.next=a,ni(e,a)))}function ii(e,t,a){var n=e.pending;if(e.pending=null,null!==n){n=n.next;do{t.status="rejected",t.reason=a,li(t),t=t.next}while(t!==n)}e.action=null}function li(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function si(e,t){return t}function ci(e,t){if(or){var a=nc.formState;if(null!==a){e:{var n=xo;if(or){if(rr){t:{for(var r=rr,o=lr;8!==r.nodeType;){if(!o){r=null;break t}if(null===(r=vd(r.nextSibling))){r=null;break t}}r="F!"===(o=r.data)||"F"===o?r:null}if(r){rr=vd(r.nextSibling),n="F!"===r.data;break e}}cr(n)}n=!1}n&&(t=a[0])}}return(a=Do()).memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:t},a.queue=n,a=Di.bind(null,xo,n),n.dispatch=a,n=ei(!1),o=$i.bind(null,xo,!1,n.queue),r={state:t,dispatch:null,action:e,pending:null},(n=Do()).queue=r,a=ai.bind(null,xo,r,o,a),r.dispatch=a,n.memoizedState=e,[t,a,!1]}function ui(e){return di(qo(),wo,e)}function di(e,t,a){if(t=Vo(e,t,si)[0],e=Wo(Ho)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var n=$o(t)}catch(i){if(i===Wr)throw Gr;throw i}else n=t;var r=(t=qo()).queue,o=r.dispatch;return a!==t.memoizedState&&(xo.flags|=2048,mi(9,{destroy:void 0,resource:void 0},fi.bind(null,r,a),null)),[n,o,e]}function fi(e,t){e.action=t}function pi(e){var t=qo(),a=wo;if(null!==a)return di(t,a,e);qo(),t=t.memoizedState;var n=(a=qo()).queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mi(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},null===(t=xo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t),null===(a=t.lastEffect)?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function hi(){return qo().memoizedState}function gi(e,t,a,n){var r=Do();n=void 0===n?null:n,xo.flags|=e,r.memoizedState=mi(1|t,{destroy:void 0,resource:void 0},a,n)}function vi(e,t,a,n){var r=qo();n=void 0===n?null:n;var o=r.memoizedState.inst;null!==wo&&null!==n&&Ro(n,wo.memoizedState.deps)?r.memoizedState=mi(t,o,a,n):(xo.flags|=e,r.memoizedState=mi(1|t,o,a,n))}function bi(e,t){gi(8390656,8,e,t)}function yi(e,t){vi(2048,8,e,t)}function xi(e,t){return vi(4,2,e,t)}function wi(e,t){return vi(4,4,e,t)}function Si(e,t){if("function"===typeof t){e=e();var a=t(e);return function(){"function"===typeof a?a():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ki(e,t,a){a=null!==a&&void 0!==a?a.concat([e]):null,vi(4,4,Si.bind(null,t,e),a)}function Ei(){}function Pi(e,t){var a=qo();t=void 0===t?null:t;var n=a.memoizedState;return null!==t&&Ro(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ci(e,t){var a=qo();t=void 0===t?null:t;var n=a.memoizedState;if(null!==t&&Ro(t,n[1]))return n[0];if(n=e(),Po){fe(!0);try{e()}finally{fe(!1)}}return a.memoizedState=[n,t],n}function ji(e,t,a){return void 0===a||0!==(1073741824&yo)?e.memoizedState=t:(e.memoizedState=a,e=Lc(),xo.lanes|=e,pc|=e,a)}function Ti(e,t,a,n){return Ya(a,t)?a:null!==mo.current?(e=ji(e,a,n),Ya(e,t)||(jl=!0),e):0===(42&yo)?(jl=!0,e.memoizedState=a):(e=Lc(),xo.lanes|=e,pc|=e,t)}function zi(e,t,a,n,r){var o=L.p;L.p=0!==o&&8>o?o:8;var i=N.T,l={};N.T=l,$i(e,!1,t,a);try{var s=r(),c=N.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)qi(e,t,function(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(e){a.push(e)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var e=0;e<a.length;e++)(0,a[e])(t)},function(e){for(n.status="rejected",n.reason=e,e=0;e<a.length;e++)(0,a[e])(void 0)}),n}(s,n),Nc());else qi(e,t,n,Nc())}catch(u){qi(e,t,{then:function(){},status:"rejected",reason:u},Nc())}finally{L.p=o,N.T=i}}function _i(){}function Ri(e,t,a,n){if(5!==e.tag)throw Error(i(476));var r=Mi(e).queue;zi(e,r,t,O,null===a?_i:function(){return Ai(e),a(n)})}function Mi(e){var t=e.memoizedState;if(null!==t)return t;var a={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:O},next:null}).next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:a},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Ai(e){qi(e,Mi(e).next.queue,{},Nc())}function Ni(){return Cr(Yd)}function Li(){return qo().memoizedState}function Oi(){return qo().memoizedState}function Fi(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var a=Nc(),n=oo(t,e=ro(a),a);return null!==n&&(Oc(n,t,a),io(n,t,a)),t={cache:Ar()},void(e.payload=t)}t=t.return}}function Ii(e,t,a){var n=Nc();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Bi(e)?Ui(t,a):null!==(a=_n(e,t,a,n))&&(Oc(a,e,n),Hi(a,t,n))}function Di(e,t,a){qi(e,t,a,Nc())}function qi(e,t,a,n){var r={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))Ui(t,r);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,a);if(r.hasEagerState=!0,r.eagerState=l,Ya(l,i))return zn(e,t,r,0),null===nc&&Tn(),!1}catch(s){}if(null!==(a=_n(e,t,r,n)))return Oc(a,e,n),Hi(a,t,n),!0}return!1}function $i(e,t,a,n){if(n={lane:2,revertLane:zu(),action:n,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(i(479))}else null!==(t=_n(e,a,n,2))&&Oc(t,e,2)}function Bi(e){var t=e.alternate;return e===xo||null!==t&&t===xo}function Ui(e,t){Eo=ko=!0;var a=e.pending;null===a?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Hi(e,t,a){if(0!==(4194048&a)){var n=t.lanes;a|=n&=e.pendingLanes,t.lanes=a,je(e,a)}}var Wi={readContext:Cr,use:Bo,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useLayoutEffect:_o,useInsertionEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useSyncExternalStore:_o,useId:_o,useHostTransitionStatus:_o,useFormState:_o,useActionState:_o,useOptimistic:_o,useMemoCache:_o,useCacheRefresh:_o},Vi={readContext:Cr,use:Bo,useCallback:function(e,t){return Do().memoizedState=[e,void 0===t?null:t],e},useContext:Cr,useEffect:bi,useImperativeHandle:function(e,t,a){a=null!==a&&void 0!==a?a.concat([e]):null,gi(4194308,4,Si.bind(null,t,e),a)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){gi(4,2,e,t)},useMemo:function(e,t){var a=Do();t=void 0===t?null:t;var n=e();if(Po){fe(!0);try{e()}finally{fe(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Do();if(void 0!==a){var r=a(t);if(Po){fe(!0);try{a(t)}finally{fe(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Ii.bind(null,xo,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},Do().memoizedState=e},useState:function(e){var t=(e=ei(e)).queue,a=Di.bind(null,xo,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ei,useDeferredValue:function(e,t){return ji(Do(),e,t)},useTransition:function(){var e=ei(!1);return e=zi.bind(null,xo,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=xo,r=Do();if(or){if(void 0===a)throw Error(i(407));a=a()}else{if(a=t(),null===nc)throw Error(i(349));0!==(124&oc)||Ko(n,t,a)}r.memoizedState=a;var o={value:a,getSnapshot:t};return r.queue=o,bi(Xo.bind(null,n,o,e),[e]),n.flags|=2048,mi(9,{destroy:void 0,resource:void 0},Qo.bind(null,n,o,a,t),null),a},useId:function(){var e=Do(),t=nc.identifierPrefix;if(or){var a=Jn;t="\xab"+t+"R"+(a=(Xn&~(1<<32-pe(Xn)-1)).toString(32)+a),0<(a=Co++)&&(t+="H"+a.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(a=zo++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Ni,useFormState:ci,useActionState:ci,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=$i.bind(null,xo,!0,a),a.dispatch=t,[e,t]},useMemoCache:Uo,useCacheRefresh:function(){return Do().memoizedState=Fi.bind(null,xo)}},Gi={readContext:Cr,use:Bo,useCallback:Pi,useContext:Cr,useEffect:yi,useImperativeHandle:ki,useInsertionEffect:xi,useLayoutEffect:wi,useMemo:Ci,useReducer:Wo,useRef:hi,useState:function(){return Wo(Ho)},useDebugValue:Ei,useDeferredValue:function(e,t){return Ti(qo(),wo.memoizedState,e,t)},useTransition:function(){var e=Wo(Ho)[0],t=qo().memoizedState;return["boolean"===typeof e?e:$o(e),t]},useSyncExternalStore:Yo,useId:Li,useHostTransitionStatus:Ni,useFormState:ui,useActionState:ui,useOptimistic:function(e,t){return ti(qo(),0,e,t)},useMemoCache:Uo,useCacheRefresh:Oi},Yi={readContext:Cr,use:Bo,useCallback:Pi,useContext:Cr,useEffect:yi,useImperativeHandle:ki,useInsertionEffect:xi,useLayoutEffect:wi,useMemo:Ci,useReducer:Go,useRef:hi,useState:function(){return Go(Ho)},useDebugValue:Ei,useDeferredValue:function(e,t){var a=qo();return null===wo?ji(a,e,t):Ti(a,wo.memoizedState,e,t)},useTransition:function(){var e=Go(Ho)[0],t=qo().memoizedState;return["boolean"===typeof e?e:$o(e),t]},useSyncExternalStore:Yo,useId:Li,useHostTransitionStatus:Ni,useFormState:pi,useActionState:pi,useOptimistic:function(e,t){var a=qo();return null!==wo?ti(a,0,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Uo,useCacheRefresh:Oi},Ki=null,Qi=0;function Xi(e){var t=Qi;return Qi+=1,null===Ki&&(Ki=[]),Xr(Ki,e,t)}function Ji(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zi(e,t){if(t.$$typeof===p)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){return(0,e._init)(e._payload)}function tl(e){function t(t,a){if(e){var n=t.deletions;null===n?(t.deletions=[a],t.flags|=16):n.push(a)}}function a(a,n){if(!e)return null;for(;null!==n;)t(a,n),n=n.sibling;return null}function n(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function r(e,t){return(e=In(e,t)).index=0,e.sibling=null,e}function o(t,a,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<a?(t.flags|=67108866,a):n:(t.flags|=67108866,a):(t.flags|=1048576,a)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,a,n){return null===t||6!==t.tag?((t=Bn(a,e.mode,n)).return=e,t):((t=r(t,a)).return=e,t)}function c(e,t,a,n){var o=a.type;return o===g?d(e,t,a.props.children,n,a.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===C&&el(o)===t.type)?(Ji(t=r(t,a.props),a),t.return=e,t):(Ji(t=qn(a.type,a.key,a.props,null,e.mode,n),a),t.return=e,t)}function u(e,t,a,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==a.containerInfo||t.stateNode.implementation!==a.implementation?((t=Un(a,e.mode,n)).return=e,t):((t=r(t,a.children||[])).return=e,t)}function d(e,t,a,n,o){return null===t||7!==t.tag?((t=$n(a,e.mode,n,o)).return=e,t):((t=r(t,a)).return=e,t)}function f(e,t,a){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Bn(""+t,e.mode,a)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case m:return Ji(a=qn(t.type,t.key,t.props,null,e.mode,a),t),a.return=e,a;case h:return(t=Un(t,e.mode,a)).return=e,t;case C:return f(e,t=(0,t._init)(t._payload),a)}if(A(t)||_(t))return(t=$n(t,e.mode,a,null)).return=e,t;if("function"===typeof t.then)return f(e,Xi(t),a);if(t.$$typeof===w)return f(e,jr(e,t),a);Zi(e,t)}return null}function p(e,t,a,n){var r=null!==t?t.key:null;if("string"===typeof a&&""!==a||"number"===typeof a||"bigint"===typeof a)return null!==r?null:s(e,t,""+a,n);if("object"===typeof a&&null!==a){switch(a.$$typeof){case m:return a.key===r?c(e,t,a,n):null;case h:return a.key===r?u(e,t,a,n):null;case C:return p(e,t,a=(r=a._init)(a._payload),n)}if(A(a)||_(a))return null!==r?null:d(e,t,a,n,null);if("function"===typeof a.then)return p(e,t,Xi(a),n);if(a.$$typeof===w)return p(e,t,jr(e,a),n);Zi(e,a)}return null}function v(e,t,a,n,r){if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return s(t,e=e.get(a)||null,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case m:return c(t,e=e.get(null===n.key?a:n.key)||null,n,r);case h:return u(t,e=e.get(null===n.key?a:n.key)||null,n,r);case C:return v(e,t,a,n=(0,n._init)(n._payload),r)}if(A(n)||_(n))return d(t,e=e.get(a)||null,n,r,null);if("function"===typeof n.then)return v(e,t,a,Xi(n),r);if(n.$$typeof===w)return v(e,t,a,jr(t,n),r);Zi(t,n)}return null}function b(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case m:e:{for(var y=u.key;null!==c;){if(c.key===y){if((y=u.type)===g){if(7===c.tag){a(s,c.sibling),(d=r(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===y||"object"===typeof y&&null!==y&&y.$$typeof===C&&el(y)===c.type){a(s,c.sibling),Ji(d=r(c,u.props),u),d.return=s,s=d;break e}a(s,c);break}t(s,c),c=c.sibling}u.type===g?((d=$n(u.props.children,s.mode,d,u.key)).return=s,s=d):(Ji(d=qn(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case h:e:{for(y=u.key;null!==c;){if(c.key===y){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){a(s,c.sibling),(d=r(c,u.children||[])).return=s,s=d;break e}a(s,c);break}t(s,c),c=c.sibling}(d=Un(u,s.mode,d)).return=s,s=d}return l(s);case C:return b(s,c,u=(y=u._init)(u._payload),d)}if(A(u))return function(r,i,l,s){for(var c=null,u=null,d=i,m=i=0,h=null;null!==d&&m<l.length;m++){d.index>m?(h=d,d=null):h=d.sibling;var g=p(r,d,l[m],s);if(null===g){null===d&&(d=h);break}e&&d&&null===g.alternate&&t(r,d),i=o(g,i,m),null===u?c=g:u.sibling=g,u=g,d=h}if(m===l.length)return a(r,d),or&&Zn(r,m),c;if(null===d){for(;m<l.length;m++)null!==(d=f(r,l[m],s))&&(i=o(d,i,m),null===u?c=d:u.sibling=d,u=d);return or&&Zn(r,m),c}for(d=n(d);m<l.length;m++)null!==(h=v(d,r,m,l[m],s))&&(e&&null!==h.alternate&&d.delete(null===h.key?m:h.key),i=o(h,i,m),null===u?c=h:u.sibling=h,u=h);return e&&d.forEach(function(e){return t(r,e)}),or&&Zn(r,m),c}(s,c,u,d);if(_(u)){if("function"!==typeof(y=_(u)))throw Error(i(150));return function(r,l,s,c){if(null==s)throw Error(i(151));for(var u=null,d=null,m=l,h=l=0,g=null,b=s.next();null!==m&&!b.done;h++,b=s.next()){m.index>h?(g=m,m=null):g=m.sibling;var y=p(r,m,b.value,c);if(null===y){null===m&&(m=g);break}e&&m&&null===y.alternate&&t(r,m),l=o(y,l,h),null===d?u=y:d.sibling=y,d=y,m=g}if(b.done)return a(r,m),or&&Zn(r,h),u;if(null===m){for(;!b.done;h++,b=s.next())null!==(b=f(r,b.value,c))&&(l=o(b,l,h),null===d?u=b:d.sibling=b,d=b);return or&&Zn(r,h),u}for(m=n(m);!b.done;h++,b=s.next())null!==(b=v(m,r,h,b.value,c))&&(e&&null!==b.alternate&&m.delete(null===b.key?h:b.key),l=o(b,l,h),null===d?u=b:d.sibling=b,d=b);return e&&m.forEach(function(e){return t(r,e)}),or&&Zn(r,h),u}(s,c,u=y.call(u),d)}if("function"===typeof u.then)return b(s,c,Xi(u),d);if(u.$$typeof===w)return b(s,c,jr(s,u),d);Zi(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(a(s,c.sibling),(d=r(c,u)).return=s,s=d):(a(s,c),(d=Bn(u,s.mode,d)).return=s,s=d),l(s)):a(s,c)}return function(e,t,a,n){try{Qi=0;var r=b(e,t,a,n);return Ki=null,r}catch(i){if(i===Wr||i===Gr)throw i;var o=On(29,i,null,e.mode);return o.lanes=n,o.return=e,o}}}var al=tl(!0),nl=tl(!1),rl=D(null),ol=null;function il(e){var t=e.alternate;$(ul,1&ul.current),$(rl,e),null===ol&&(null===t||null!==mo.current||null!==t.memoizedState)&&(ol=e)}function ll(e){if(22===e.tag){if($(ul,ul.current),$(rl,e),null===ol){var t=e.alternate;null!==t&&null!==t.memoizedState&&(ol=e)}}else sl()}function sl(){$(ul,ul.current),$(rl,rl.current)}function cl(e){q(rl),ol===e&&(ol=null),q(ul)}var ul=D(0);function dl(e){for(var t=e;null!==t;){if(13===t.tag){var a=t.memoizedState;if(null!==a&&(null===(a=a.dehydrated)||"$?"===a.data||gd(a)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fl(e,t,a,n){a=null===(a=a(n,t=e.memoizedState))||void 0===a?t:f({},t,a),e.memoizedState=a,0===e.lanes&&(e.updateQueue.baseState=a)}var pl={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Nc(),r=ro(n);r.payload=t,void 0!==a&&null!==a&&(r.callback=a),null!==(t=oo(e,r,n))&&(Oc(t,e,n),io(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Nc(),r=ro(n);r.tag=1,r.payload=t,void 0!==a&&null!==a&&(r.callback=a),null!==(t=oo(e,r,n))&&(Oc(t,e,n),io(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Nc(),n=ro(a);n.tag=2,void 0!==t&&null!==t&&(n.callback=t),null!==(t=oo(e,n,a))&&(Oc(t,e,a),io(t,e,a))}};function ml(e,t,a,n,r,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!Ka(a,n)||!Ka(r,o))}function hl(e,t,a,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(a,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function gl(e,t){var a=t;if("ref"in t)for(var n in a={},t)"ref"!==n&&(a[n]=t[n]);if(e=e.defaultProps)for(var r in a===t&&(a=f({},a)),e)void 0===a[r]&&(a[r]=e[r]);return a}var vl="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function bl(e){vl(e)}function yl(e){console.error(e)}function xl(e){vl(e)}function wl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Sl(e,t,a){try{(0,e.onCaughtError)(a.value,{componentStack:a.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function kl(e,t,a){return(a=ro(a)).tag=3,a.payload={element:null},a.callback=function(){wl(e,t)},a}function El(e){return(e=ro(e)).tag=3,e}function Pl(e,t,a,n){var r=a.type.getDerivedStateFromError;if("function"===typeof r){var o=n.value;e.payload=function(){return r(o)},e.callback=function(){Sl(t,a,n)}}var i=a.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){Sl(t,a,n),"function"!==typeof r&&(null===Ec?Ec=new Set([this]):Ec.add(this));var e=n.stack;this.componentDidCatch(n.value,{componentStack:null!==e?e:""})})}var Cl=Error(i(461)),jl=!1;function Tl(e,t,a,n){t.child=null===e?nl(t,null,a,n):al(t,e.child,a,n)}function zl(e,t,a,n,r){a=a.render;var o=t.ref;if("ref"in n){var i={};for(var l in n)"ref"!==l&&(i[l]=n[l])}else i=n;return Pr(t),n=Mo(e,t,a,i,o,r),l=Oo(),null===e||jl?(or&&l&&tr(t),t.flags|=1,Tl(e,t,n,r),t.child):(Fo(e,t,r),Kl(e,t,r))}function _l(e,t,a,n,r){if(null===e){var o=a.type;return"function"!==typeof o||Fn(o)||void 0!==o.defaultProps||null!==a.compare?((e=qn(a.type,null,n,t,t.mode,r)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Rl(e,t,o,n,r))}if(o=e.child,!Ql(e,r)){var i=o.memoizedProps;if((a=null!==(a=a.compare)?a:Ka)(i,n)&&e.ref===t.ref)return Kl(e,t,r)}return t.flags|=1,(e=In(o,n)).ref=t.ref,e.return=t,t.child=e}function Rl(e,t,a,n,r){if(null!==e){var o=e.memoizedProps;if(Ka(o,n)&&e.ref===t.ref){if(jl=!1,t.pendingProps=n=o,!Ql(e,r))return t.lanes=e.lanes,Kl(e,t,r);0!==(131072&e.flags)&&(jl=!0)}}return Ll(e,t,a,n,r)}function Ml(e,t,a){var n=t.pendingProps,r=n.children,o=null!==e?e.memoizedState:null;if("hidden"===n.mode){if(0!==(128&t.flags)){if(n=null!==o?o.baseLanes|a:a,null!==e){for(r=t.child=e.child,o=0;null!==r;)o=o|r.lanes|r.childLanes,r=r.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return Al(e,t,n,a)}if(0===(536870912&a))return t.lanes=t.childLanes=536870912,Al(e,t,null!==o?o.baseLanes|a:a,a);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ur(0,null!==o?o.cachePool:null),null!==o?go(t,o):vo(),ll(t)}else null!==o?(Ur(0,o.cachePool),go(t,o),sl(),t.memoizedState=null):(null!==e&&Ur(0,null),vo(),sl());return Tl(e,t,r,a),t.child}function Al(e,t,a,n){var r=Br();return r=null===r?null:{parent:Mr._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},null!==e&&Ur(0,null),vo(),ll(t),null!==e&&kr(e,t,n,!0),null}function Nl(e,t){var a=t.ref;if(null===a)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof a&&"object"!==typeof a)throw Error(i(284));null!==e&&e.ref===a||(t.flags|=4194816)}}function Ll(e,t,a,n,r){return Pr(t),a=Mo(e,t,a,n,void 0,r),n=Oo(),null===e||jl?(or&&n&&tr(t),t.flags|=1,Tl(e,t,a,r),t.child):(Fo(e,t,r),Kl(e,t,r))}function Ol(e,t,a,n,r,o){return Pr(t),t.updateQueue=null,a=No(t,n,a,r),Ao(e),n=Oo(),null===e||jl?(or&&n&&tr(t),t.flags|=1,Tl(e,t,a,o),t.child):(Fo(e,t,o),Kl(e,t,o))}function Fl(e,t,a,n,r){if(Pr(t),null===t.stateNode){var o=Nn,i=a.contextType;"object"===typeof i&&null!==i&&(o=Cr(i)),o=new a(n,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=pl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=n,o.state=t.memoizedState,o.refs={},ao(t),i=a.contextType,o.context="object"===typeof i&&null!==i?Cr(i):Nn,o.state=t.memoizedState,"function"===typeof(i=a.getDerivedStateFromProps)&&(fl(t,a,i,n),o.state=t.memoizedState),"function"===typeof a.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&pl.enqueueReplaceState(o,o.state,null),uo(t,n,o,r),co(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),n=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=gl(a,l);o.props=s;var c=o.context,u=a.contextType;i=Nn,"object"===typeof u&&null!==u&&(i=Cr(u));var d=a.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==i)&&hl(t,o,n,i),to=!1;var f=t.memoizedState;o.state=f,uo(t,n,o,r),co(),c=t.memoizedState,l||f!==c||to?("function"===typeof d&&(fl(t,a,d,n),c=t.memoizedState),(s=to||ml(t,a,s,n,f,c,i))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),o.props=n,o.state=c,o.context=i,n=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,no(e,t),u=gl(a,i=t.memoizedProps),o.props=u,d=t.pendingProps,f=o.context,c=a.contextType,s=Nn,"object"===typeof c&&null!==c&&(s=Cr(c)),(c="function"===typeof(l=a.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||f!==s)&&hl(t,o,n,s),to=!1,f=t.memoizedState,o.state=f,uo(t,n,o,r),co();var p=t.memoizedState;i!==d||f!==p||to||null!==e&&null!==e.dependencies&&Er(e.dependencies)?("function"===typeof l&&(fl(t,a,l,n),p=t.memoizedState),(u=to||ml(t,a,u,n,f,p,s)||null!==e&&null!==e.dependencies&&Er(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(n,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(n,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),o.props=n,o.state=p,o.context=s,n=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Nl(e,t),n=0!==(128&t.flags),o||n?(o=t.stateNode,a=n&&"function"!==typeof a.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&n?(t.child=al(t,e.child,null,r),t.child=al(t,null,a,r)):Tl(e,t,a,r),t.memoizedState=o.state,e=t.child):e=Kl(e,t,r),e}function Il(e,t,a,n){return pr(),t.flags|=256,Tl(e,t,a,n),t.child}var Dl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ql(e){return{baseLanes:e,cachePool:Hr()}}function $l(e,t,a){return e=null!==e?e.childLanes&~a:0,t&&(e|=gc),e}function Bl(e,t,a){var n,r=t.pendingProps,o=!1,l=0!==(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!==(2&ul.current)),n&&(o=!0,t.flags&=-129),n=0!==(32&t.flags),t.flags&=-33,null===e){if(or){if(o?il(t):sl(),or){var s,c=rr;if(s=c){e:{for(s=c,c=lr;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=vd(s.nextSibling))){c=null;break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Qn?{id:Xn,overflow:Jn}:null,retryLane:536870912,hydrationErrors:null},(s=On(18,null,null,0)).stateNode=c,s.return=t,t.child=s,nr=t,rr=null,s=!0):s=!1}s||cr(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cl(t)}return c=r.children,r=r.fallback,o?(sl(),c=Hl({mode:"hidden",children:c},o=t.mode),r=$n(r,o,a,null),c.return=t,r.return=t,c.sibling=r,t.child=c,(o=t.child).memoizedState=ql(a),o.childLanes=$l(e,n,a),t.memoizedState=Dl,r):(il(t),Ul(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(l)256&t.flags?(il(t),t.flags&=-257,t=Wl(e,t,a)):null!==t.memoizedState?(sl(),t.child=e.child,t.flags|=128,t=null):(sl(),o=r.fallback,c=t.mode,r=Hl({mode:"visible",children:r.children},c),(o=$n(o,c,a,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,al(t,e.child,null,a),(r=t.child).memoizedState=ql(a),r.childLanes=$l(e,n,a),t.memoizedState=Dl,t=o);else if(il(t),gd(c)){if(n=c.nextSibling&&c.nextSibling.dataset)var u=n.dgst;n=u,(r=Error(i(419))).stack="",r.digest=n,hr({value:r,source:null,stack:null}),t=Wl(e,t,a)}else if(jl||kr(e,t,a,!1),n=0!==(a&e.childLanes),jl||n){if(null!==(n=nc)&&(0!==(r=0!==((r=0!==(42&(r=a&-a))?1:Te(r))&(n.suspendedLanes|a))?0:r)&&r!==s.retryLane))throw s.retryLane=r,Rn(e,r),Oc(n,e,r),Cl;"$?"===c.data||Gc(),t=Wl(e,t,a)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,rr=vd(c.nextSibling),nr=t,or=!0,ir=null,lr=!1,null!==e&&(Yn[Kn++]=Xn,Yn[Kn++]=Jn,Yn[Kn++]=Qn,Xn=e.id,Jn=e.overflow,Qn=t),(t=Ul(t,r.children)).flags|=4096);return t}return o?(sl(),o=r.fallback,c=t.mode,u=(s=e.child).sibling,(r=In(s,{mode:"hidden",children:r.children})).subtreeFlags=65011712&s.subtreeFlags,null!==u?o=In(u,o):(o=$n(o,c,a,null)).flags|=2,o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,null===(c=e.child.memoizedState)?c=ql(a):(null!==(s=c.cachePool)?(u=Mr._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=Hr(),c={baseLanes:c.baseLanes|a,cachePool:s}),o.memoizedState=c,o.childLanes=$l(e,n,a),t.memoizedState=Dl,r):(il(t),e=(a=e.child).sibling,(a=In(a,{mode:"visible",children:r.children})).return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a)}function Ul(e,t){return(t=Hl({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Hl(e,t){return(e=On(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Wl(e,t,a){return al(t,e.child,null,a),(e=Ul(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vl(e,t,a){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),wr(e.return,t,a)}function Gl(e,t,a,n,r){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=r)}function Yl(e,t,a){var n=t.pendingProps,r=n.revealOrder,o=n.tail;if(Tl(e,t,n.children,a),0!==(2&(n=ul.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vl(e,a,t);else if(19===e.tag)Vl(e,a,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch($(ul,n),r){case"forwards":for(a=t.child,r=null;null!==a;)null!==(e=a.alternate)&&null===dl(e)&&(r=a),a=a.sibling;null===(a=r)?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),Gl(t,!1,r,a,o);break;case"backwards":for(a=null,r=t.child,t.child=null;null!==r;){if(null!==(e=r.alternate)&&null===dl(e)){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Gl(t,!0,a,null,o);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kl(e,t,a){if(null!==e&&(t.dependencies=e.dependencies),pc|=t.lanes,0===(a&t.childLanes)){if(null===e)return null;if(kr(e,t,a,!1),0===(a&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(a=In(e=t.child,e.pendingProps),t.child=a,a.return=t;null!==e.sibling;)e=e.sibling,(a=a.sibling=In(e,e.pendingProps)).return=t;a.sibling=null}return t.child}function Ql(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Er(e))}function Xl(e,t,a){if(null!==e)if(e.memoizedProps!==t.pendingProps)jl=!0;else{if(!Ql(e,a)&&0===(128&t.flags))return jl=!1,function(e,t,a){switch(t.tag){case 3:V(t,t.stateNode.containerInfo),yr(0,Mr,e.memoizedState.cache),pr();break;case 27:case 5:Y(t);break;case 4:V(t,t.stateNode.containerInfo);break;case 10:yr(0,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(null!==n)return null!==n.dehydrated?(il(t),t.flags|=128,null):0!==(a&t.child.childLanes)?Bl(e,t,a):(il(t),null!==(e=Kl(e,t,a))?e.sibling:null);il(t);break;case 19:var r=0!==(128&e.flags);if((n=0!==(a&t.childLanes))||(kr(e,t,a,!1),n=0!==(a&t.childLanes)),r){if(n)return Yl(e,t,a);t.flags|=128}if(null!==(r=t.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),$(ul,ul.current),n)break;return null;case 22:case 23:return t.lanes=0,Ml(e,t,a);case 24:yr(0,Mr,e.memoizedState.cache)}return Kl(e,t,a)}(e,t,a);jl=0!==(131072&e.flags)}else jl=!1,or&&0!==(1048576&t.flags)&&er(t,Gn,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,r=n._init;if(n=r(n._payload),t.type=n,"function"!==typeof n){if(void 0!==n&&null!==n){if((r=n.$$typeof)===S){t.tag=11,t=zl(null,t,n,e,a);break e}if(r===P){t.tag=14,t=_l(null,t,n,e,a);break e}}throw t=M(n)||n,Error(i(306,t,""))}Fn(n)?(e=gl(n,e),t.tag=1,t=Fl(null,t,n,e,a)):(t.tag=0,t=Ll(null,t,n,e,a))}return t;case 0:return Ll(e,t,t.type,t.pendingProps,a);case 1:return Fl(e,t,n=t.type,r=gl(n,t.pendingProps),a);case 3:e:{if(V(t,t.stateNode.containerInfo),null===e)throw Error(i(387));n=t.pendingProps;var o=t.memoizedState;r=o.element,no(e,t),uo(t,n,null,a);var l=t.memoizedState;if(n=l.cache,yr(0,Mr,n),n!==o.cache&&Sr(t,[Mr],a,!0),co(),n=l.element,o.isDehydrated){if(o={element:n,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Il(e,t,n,a);break e}if(n!==r){hr(r=En(Error(i(424)),t)),t=Il(e,t,n,a);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(rr=vd(e.firstChild),nr=t,or=!0,ir=null,lr=!0,a=nl(t,null,n,a),t.child=a;a;)a.flags=-3&a.flags|4096,a=a.sibling}else{if(pr(),n===r){t=Kl(e,t,a);break e}Tl(e,t,n,a)}t=t.child}return t;case 26:return Nl(e,t),null===e?(a=Td(t.type,null,t.pendingProps,null))?t.memoizedState=a:or||(a=t.type,e=t.pendingProps,(n=nd(H.current).createElement(a))[Me]=t,n[Ae]=e,ed(n,a,e),We(n),t.stateNode=n):t.memoizedState=Td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Y(t),null===e&&or&&(n=t.stateNode=xd(t.type,t.pendingProps,H.current),nr=t,lr=!0,r=rr,pd(t.type)?(bd=r,rr=vd(n.firstChild)):rr=r),Tl(e,t,t.pendingProps.children,a),Nl(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&or&&((r=n=rr)&&(null!==(n=function(e,t,a,n){for(;1===e.nodeType;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(n){if(!e[De])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(null==r.href||""===r.href?null:r.href)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin)||e.getAttribute("title")!==(null==r.title?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==r.src?null:r.src)||e.getAttribute("type")!==(null==r.type?null:r.type)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==r.name?null:""+r.name;if("hidden"===r.type&&e.getAttribute("name")===o)return e}if(null===(e=vd(e.nextSibling)))break}return null}(n,t.type,t.pendingProps,lr))?(t.stateNode=n,nr=t,rr=vd(n.firstChild),lr=!1,r=!0):r=!1),r||cr(t)),Y(t),r=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,n=o.children,id(r,o)?n=null:null!==l&&id(r,l)&&(t.flags|=32),null!==t.memoizedState&&(r=Mo(e,t,Lo,null,null,a),Yd._currentValue=r),Nl(e,t),Tl(e,t,n,a),t.child;case 6:return null===e&&or&&((e=a=rr)&&(null!==(a=function(e,t,a){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!a)return null;if(null===(e=vd(e.nextSibling)))return null}return e}(a,t.pendingProps,lr))?(t.stateNode=a,nr=t,rr=null,e=!0):e=!1),e||cr(t)),null;case 13:return Bl(e,t,a);case 4:return V(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=al(t,null,n,a):Tl(e,t,n,a),t.child;case 11:return zl(e,t,t.type,t.pendingProps,a);case 7:return Tl(e,t,t.pendingProps,a),t.child;case 8:case 12:return Tl(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,yr(0,t.type,n.value),Tl(e,t,n.children,a),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,Pr(t),n=n(r=Cr(r)),t.flags|=1,Tl(e,t,n,a),t.child;case 14:return _l(e,t,t.type,t.pendingProps,a);case 15:return Rl(e,t,t.type,t.pendingProps,a);case 19:return Yl(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},null===e?((a=Hl(n,a)).ref=t.ref,t.child=a,a.return=t,t=a):((a=In(e.child,n)).ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Ml(e,t,a);case 24:return Pr(t),n=Cr(Mr),null===e?(null===(r=Br())&&(r=nc,o=Ar(),r.pooledCache=o,o.refCount++,null!==o&&(r.pooledCacheLanes|=a),r=o),t.memoizedState={parent:n,cache:r},ao(t),yr(0,Mr,r)):(0!==(e.lanes&a)&&(no(e,t),uo(t,null,null,a),co()),r=e.memoizedState,o=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=r),yr(0,Mr,n)):(n=o.cache,yr(0,Mr,n),n!==r.cache&&Sr(t,[Mr],a,!0))),Tl(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Jl(e){e.flags|=4}function Zl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!$d(t)){if(null!==(t=rl.current)&&((4194048&oc)===oc?null!==ol:(62914560&oc)!==oc&&0===(536870912&oc)||t!==ol))throw Jr=Yr,Vr;e.flags|=8192}}function es(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,vc|=t)}function ts(e,t){if(!or)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;null!==t;)null!==t.alternate&&(a=t),t=t.sibling;null===a?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;null!==a;)null!==a.alternate&&(n=a),a=a.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function as(e){var t=null!==e.alternate&&e.alternate.child===e.child,a=0,n=0;if(t)for(var r=e.child;null!==r;)a|=r.lanes|r.childLanes,n|=65011712&r.subtreeFlags,n|=65011712&r.flags,r.return=e,r=r.sibling;else for(r=e.child;null!==r;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function ns(e,t,a){var n=t.pendingProps;switch(ar(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return as(t),null;case 3:return a=t.stateNode,n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xr(Mr),G(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),null!==e&&null!==e.child||(fr(t)?Jl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,mr())),as(t),null;case 26:return a=t.memoizedState,null===e?(Jl(t),null!==a?(as(t),Zl(t,a)):(as(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Jl(t),as(t),Zl(t,a)):(as(t),t.flags&=-16777217):(e.memoizedProps!==n&&Jl(t),as(t),t.flags&=-16777217),null;case 27:K(t),a=H.current;var r=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==n&&Jl(t);else{if(!n){if(null===t.stateNode)throw Error(i(166));return as(t),null}e=B.current,fr(t)?ur(t):(e=xd(r,n,a),t.stateNode=e,Jl(t))}return as(t),null;case 5:if(K(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==n&&Jl(t);else{if(!n){if(null===t.stateNode)throw Error(i(166));return as(t),null}if(e=B.current,fr(t))ur(t);else{switch(r=nd(H.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":(e=r.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof n.is?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e="string"===typeof n.is?r.createElement(a,{is:n.is}):r.createElement(a)}}e[Me]=t,e[Ae]=n;e:for(r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&27!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;null===r.sibling;){if(null===r.return||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(ed(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Jl(t)}}return as(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==n&&Jl(t);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));if(e=H.current,fr(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,null!==(r=nr))switch(r.tag){case 27:case 5:n=r.memoizedProps}e[Me]=t,(e=!!(e.nodeValue===a||null!==n&&!0===n.suppressHydrationWarning||Qu(e.nodeValue,a)))||cr(t)}else(e=nd(e).createTextNode(n))[Me]=t,t.stateNode=e}return as(t),null;case 13:if(n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(r=fr(t),null!==n&&null!==n.dehydrated){if(null===e){if(!r)throw Error(i(318));if(!(r=null!==(r=t.memoizedState)?r.dehydrated:null))throw Error(i(317));r[Me]=t}else pr(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;as(t),r=!1}else r=mr(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return 256&t.flags?(cl(t),t):(cl(t),null)}if(cl(t),0!==(128&t.flags))return t.lanes=a,t;if(a=null!==n,e=null!==e&&null!==e.memoizedState,a){r=null,null!==(n=t.child).alternate&&null!==n.alternate.memoizedState&&null!==n.alternate.memoizedState.cachePool&&(r=n.alternate.memoizedState.cachePool.pool);var o=null;null!==n.memoizedState&&null!==n.memoizedState.cachePool&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),es(t,t.updateQueue),as(t),null;case 4:return G(),null===e&&qu(t.stateNode.containerInfo),as(t),null;case 10:return xr(t.type),as(t),null;case 19:if(q(ul),null===(r=t.memoizedState))return as(t),null;if(n=0!==(128&t.flags),null===(o=r.rendering))if(n)ts(r,!1);else{if(0!==fc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=dl(e))){for(t.flags|=128,ts(r,!1),e=o.updateQueue,t.updateQueue=e,es(t,e),t.subtreeFlags=0,e=a,a=t.child;null!==a;)Dn(a,e),a=a.sibling;return $(ul,1&ul.current|2),t.child}e=e.sibling}null!==r.tail&&te()>Sc&&(t.flags|=128,n=!0,ts(r,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=dl(o))){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,es(t,e),ts(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!or)return as(t),null}else 2*te()-r.renderingStartTime>Sc&&536870912!==a&&(t.flags|=128,n=!0,ts(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=r.last)?e.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=te(),t.sibling=null,e=ul.current,$(ul,n?1&e|2:1&e),t):(as(t),null);case 22:case 23:return cl(t),bo(),n=null!==t.memoizedState,null!==e?null!==e.memoizedState!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?0!==(536870912&a)&&0===(128&t.flags)&&(as(t),6&t.subtreeFlags&&(t.flags|=8192)):as(t),null!==(a=t.updateQueue)&&es(t,a.retryQueue),a=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(a=e.memoizedState.cachePool.pool),n=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),null!==e&&q($r),null;case 24:return a=null,null!==e&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),xr(Mr),as(t),null;case 25:case 30:return null}throw Error(i(156,t.tag))}function rs(e,t){switch(ar(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xr(Mr),G(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return K(t),null;case 13:if(cl(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pr()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return q(ul),null;case 4:return G(),null;case 10:return xr(t.type),null;case 22:case 23:return cl(t),bo(),null!==e&&q($r),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xr(Mr),null;default:return null}}function os(e,t){switch(ar(t),t.tag){case 3:xr(Mr),G();break;case 26:case 27:case 5:K(t);break;case 4:G();break;case 13:cl(t);break;case 19:q(ul);break;case 10:xr(t.type);break;case 22:case 23:cl(t),bo(),null!==e&&q($r);break;case 24:xr(Mr)}}function is(e,t){try{var a=t.updateQueue,n=null!==a?a.lastEffect:null;if(null!==n){var r=n.next;a=r;do{if((a.tag&e)===e){n=void 0;var o=a.create,i=a.inst;n=o(),i.destroy=n}a=a.next}while(a!==r)}}catch(l){uu(t,t.return,l)}}function ls(e,t,a){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next;n=o;do{if((n.tag&e)===e){var i=n.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,r=t;var s=a,c=l;try{c()}catch(u){uu(r,s,u)}}}n=n.next}while(n!==o)}}catch(u){uu(t,t.return,u)}}function ss(e){var t=e.updateQueue;if(null!==t){var a=e.stateNode;try{po(t,a)}catch(n){uu(e,e.return,n)}}}function cs(e,t,a){a.props=gl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){uu(e,t,n)}}function us(e,t){try{var a=e.ref;if(null!==a){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;default:n=e.stateNode}"function"===typeof a?e.refCleanup=a(n):a.current=n}}catch(r){uu(e,t,r)}}function ds(e,t){var a=e.ref,n=e.refCleanup;if(null!==a)if("function"===typeof n)try{n()}catch(r){uu(e,t,r)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof a)try{a(null)}catch(o){uu(e,t,o)}else a.current=null}function fs(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(r){uu(e,e.return,r)}}function ps(e,t,a){try{var n=e.stateNode;!function(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,l=null,s=null,c=null,u=null,d=null;for(m in a){var f=a[m];if(a.hasOwnProperty(m)&&null!=f)switch(m){case"checked":case"value":break;case"defaultValue":c=f;default:n.hasOwnProperty(m)||Ju(e,t,m,null,n,f)}}for(var p in n){var m=n[p];if(f=a[p],n.hasOwnProperty(p)&&(null!=m||null!=f))switch(p){case"type":o=m;break;case"name":r=m;break;case"checked":u=m;break;case"defaultChecked":d=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(i(137,t));break;default:m!==f&&Ju(e,t,p,m,n,f)}}return void gt(e,l,s,c,u,d,o,r);case"select":for(o in m=l=s=p=null,a)if(c=a[o],a.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":m=c;default:n.hasOwnProperty(o)||Ju(e,t,o,null,n,c)}for(r in n)if(o=n[r],c=a[r],n.hasOwnProperty(r)&&(null!=o||null!=c))switch(r){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&Ju(e,t,r,o,n,c)}return t=s,a=l,n=m,void(null!=p?yt(e,!!a,p,!1):!!n!==!!a&&(null!=t?yt(e,!!a,t,!0):yt(e,!!a,a?[]:"",!1)));case"textarea":for(s in m=p=null,a)if(r=a[s],a.hasOwnProperty(s)&&null!=r&&!n.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Ju(e,t,s,null,n,r)}for(l in n)if(r=n[l],o=a[l],n.hasOwnProperty(l)&&(null!=r||null!=o))switch(l){case"value":p=r;break;case"defaultValue":m=r;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=r)throw Error(i(91));break;default:r!==o&&Ju(e,t,l,r,n,o)}return void xt(e,p,m);case"option":for(var h in a)if(p=a[h],a.hasOwnProperty(h)&&null!=p&&!n.hasOwnProperty(h))if("selected"===h)e.selected=!1;else Ju(e,t,h,null,n,p);for(c in n)if(p=n[c],m=a[c],n.hasOwnProperty(c)&&p!==m&&(null!=p||null!=m))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Ju(e,t,c,p,n,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in a)p=a[g],a.hasOwnProperty(g)&&null!=p&&!n.hasOwnProperty(g)&&Ju(e,t,g,null,n,p);for(u in n)if(p=n[u],m=a[u],n.hasOwnProperty(u)&&p!==m&&(null!=p||null!=m))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(i(137,t));break;default:Ju(e,t,u,p,n,m)}return;default:if(Ct(t)){for(var v in a)p=a[v],a.hasOwnProperty(v)&&void 0!==p&&!n.hasOwnProperty(v)&&Zu(e,t,v,void 0,n,p);for(d in n)p=n[d],m=a[d],!n.hasOwnProperty(d)||p===m||void 0===p&&void 0===m||Zu(e,t,d,p,n,m);return}}for(var b in a)p=a[b],a.hasOwnProperty(b)&&null!=p&&!n.hasOwnProperty(b)&&Ju(e,t,b,null,n,p);for(f in n)p=n[f],m=a[f],!n.hasOwnProperty(f)||p===m||null==p&&null==m||Ju(e,t,f,p,n,m)}(n,e.type,a,t),n[Ae]=t}catch(r){uu(e,e.return,r)}}function ms(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&pd(e.type)||4===e.tag}function hs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ms(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gs(e,t,a){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?(9===a.nodeType?a.body:"HTML"===a.nodeName?a.ownerDocument.body:a).insertBefore(e,t):((t=9===a.nodeType?a.body:"HTML"===a.nodeName?a.ownerDocument.body:a).appendChild(e),null!==(a=a._reactRootContainer)&&void 0!==a||null!==t.onclick||(t.onclick=Xu));else if(4!==n&&(27===n&&pd(e.type)&&(a=e.stateNode,t=null),null!==(e=e.child)))for(gs(e,t,a),e=e.sibling;null!==e;)gs(e,t,a),e=e.sibling}function vs(e,t,a){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(4!==n&&(27===n&&pd(e.type)&&(a=e.stateNode),null!==(e=e.child)))for(vs(e,t,a),e=e.sibling;null!==e;)vs(e,t,a),e=e.sibling}function bs(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ed(t,n,a),t[Me]=e,t[Ae]=a}catch(o){uu(e,e.return,o)}}var ys=!1,xs=!1,ws=!1,Ss="function"===typeof WeakSet?WeakSet:Set,ks=null;function Es(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Fs(e,a),4&n&&is(5,a);break;case 1:if(Fs(e,a),4&n)if(e=a.stateNode,null===t)try{e.componentDidMount()}catch(i){uu(a,a.return,i)}else{var r=gl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){uu(a,a.return,l)}}64&n&&ss(a),512&n&&us(a,a.return);break;case 3:if(Fs(e,a),64&n&&null!==(e=a.updateQueue)){if(t=null,null!==a.child)switch(a.child.tag){case 27:case 5:case 1:t=a.child.stateNode}try{po(e,t)}catch(i){uu(a,a.return,i)}}break;case 27:null===t&&4&n&&bs(a);case 26:case 5:Fs(e,a),null===t&&4&n&&fs(a),512&n&&us(a,a.return);break;case 12:Fs(e,a);break;case 13:Fs(e,a),4&n&&_s(e,a),64&n&&(null!==(e=a.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var a=e.ownerDocument;if("$?"!==e.data||"complete"===a.readyState)t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}(e,a=mu.bind(null,a))));break;case 22:if(!(n=null!==a.memoizedState||ys)){t=null!==t&&null!==t.memoizedState||xs,r=ys;var o=xs;ys=n,(xs=t)&&!o?Ds(e,a,0!==(8772&a.subtreeFlags)):Fs(e,a),ys=r,xs=o}break;case 30:break;default:Fs(e,a)}}function Ps(e){var t=e.alternate;null!==t&&(e.alternate=null,Ps(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cs=null,js=!1;function Ts(e,t,a){for(a=a.child;null!==a;)zs(e,t,a),a=a.sibling}function zs(e,t,a){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,a)}catch(o){}switch(a.tag){case 26:xs||ds(a,t),Ts(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode).parentNode.removeChild(a);break;case 27:xs||ds(a,t);var n=Cs,r=js;pd(a.type)&&(Cs=a.stateNode,js=!1),Ts(e,t,a),wd(a.stateNode),Cs=n,js=r;break;case 5:xs||ds(a,t);case 6:if(n=Cs,r=js,Cs=null,Ts(e,t,a),js=r,null!==(Cs=n))if(js)try{(9===Cs.nodeType?Cs.body:"HTML"===Cs.nodeName?Cs.ownerDocument.body:Cs).removeChild(a.stateNode)}catch(i){uu(a,t,i)}else try{Cs.removeChild(a.stateNode)}catch(i){uu(a,t,i)}break;case 18:null!==Cs&&(js?(md(9===(e=Cs).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,a.stateNode),Tf(e)):md(Cs,a.stateNode));break;case 4:n=Cs,r=js,Cs=a.stateNode.containerInfo,js=!0,Ts(e,t,a),Cs=n,js=r;break;case 0:case 11:case 14:case 15:xs||ls(2,a,t),xs||ls(4,a,t),Ts(e,t,a);break;case 1:xs||(ds(a,t),"function"===typeof(n=a.stateNode).componentWillUnmount&&cs(a,t,n)),Ts(e,t,a);break;case 21:Ts(e,t,a);break;case 22:xs=(n=xs)||null!==a.memoizedState,Ts(e,t,a),xs=n;break;default:Ts(e,t,a)}}function _s(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Tf(e)}catch(a){uu(t,t.return,a)}}function Rs(e,t){var a=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Ss),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Ss),t;default:throw Error(i(435,e.tag))}}(e);t.forEach(function(t){var n=hu.bind(null,e,t);a.has(t)||(a.add(t),t.then(n,n))})}function Ms(e,t){var a=t.deletions;if(null!==a)for(var n=0;n<a.length;n++){var r=a[n],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(pd(s.type)){Cs=s.stateNode,js=!1;break e}break;case 5:Cs=s.stateNode,js=!1;break e;case 3:case 4:Cs=s.stateNode.containerInfo,js=!0;break e}s=s.return}if(null===Cs)throw Error(i(160));zs(o,l,r),Cs=null,js=!1,null!==(o=r.alternate)&&(o.return=null),r.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ns(t,e),t=t.sibling}var As=null;function Ns(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ms(t,e),Ls(e),4&n&&(ls(3,e,e.return),is(3,e),ls(5,e,e.return));break;case 1:Ms(t,e),Ls(e),512&n&&(xs||null===a||ds(a,a.return)),64&n&&ys&&(null!==(e=e.updateQueue)&&(null!==(n=e.callbacks)&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===a?n:a.concat(n))));break;case 26:var r=As;if(Ms(t,e),Ls(e),512&n&&(xs||null===a||ds(a,a.return)),4&n){var o=null!==a?a.memoizedState:null;if(n=e.memoizedState,null===a)if(null===n)if(null===e.stateNode){e:{n=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(n){case"title":(!(o=r.getElementsByTagName("title")[0])||o[De]||o[Me]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=r.createElement(n),r.head.insertBefore(o,r.querySelector("head > title"))),ed(o,n,a),o[Me]=e,We(o),n=o;break e;case"link":var l=Dd("link","href",r).get(n+(a.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==a.href||""===a.href?null:a.href)&&o.getAttribute("rel")===(null==a.rel?null:a.rel)&&o.getAttribute("title")===(null==a.title?null:a.title)&&o.getAttribute("crossorigin")===(null==a.crossOrigin?null:a.crossOrigin)){l.splice(s,1);break t}ed(o=r.createElement(n),n,a),r.head.appendChild(o);break;case"meta":if(l=Dd("meta","content",r).get(n+(a.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==a.content?null:""+a.content)&&o.getAttribute("name")===(null==a.name?null:a.name)&&o.getAttribute("property")===(null==a.property?null:a.property)&&o.getAttribute("http-equiv")===(null==a.httpEquiv?null:a.httpEquiv)&&o.getAttribute("charset")===(null==a.charSet?null:a.charSet)){l.splice(s,1);break t}ed(o=r.createElement(n),n,a),r.head.appendChild(o);break;default:throw Error(i(468,n))}o[Me]=e,We(o),n=o}e.stateNode=n}else qd(r,e.type,e.stateNode);else e.stateNode=Nd(r,n,e.memoizedProps);else o!==n?(null===o?null!==a.stateNode&&(a=a.stateNode).parentNode.removeChild(a):o.count--,null===n?qd(r,e.type,e.stateNode):Nd(r,n,e.memoizedProps)):null===n&&null!==e.stateNode&&ps(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ms(t,e),Ls(e),512&n&&(xs||null===a||ds(a,a.return)),null!==a&&4&n&&ps(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ms(t,e),Ls(e),512&n&&(xs||null===a||ds(a,a.return)),32&e.flags){r=e.stateNode;try{St(r,"")}catch(m){uu(e,e.return,m)}}4&n&&null!=e.stateNode&&ps(e,r=e.memoizedProps,null!==a?a.memoizedProps:r),1024&n&&(ws=!0);break;case 6:if(Ms(t,e),Ls(e),4&n){if(null===e.stateNode)throw Error(i(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(m){uu(e,e.return,m)}}break;case 3:if(Id=null,r=As,As=Ed(t.containerInfo),Ms(t,e),As=r,Ls(e),4&n&&null!==a&&a.memoizedState.isDehydrated)try{Tf(t.containerInfo)}catch(m){uu(e,e.return,m)}ws&&(ws=!1,Os(e));break;case 4:n=As,As=Ed(e.stateNode.containerInfo),Ms(t,e),Ls(e),As=n;break;case 12:default:Ms(t,e),Ls(e);break;case 13:Ms(t,e),Ls(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==a&&null!==a.memoizedState)&&(wc=te()),4&n&&(null!==(n=e.updateQueue)&&(e.updateQueue=null,Rs(e,n)));break;case 22:r=null!==e.memoizedState;var c=null!==a&&null!==a.memoizedState,u=ys,d=xs;if(ys=u||r,xs=d||c,Ms(t,e),xs=d,ys=u,Ls(e),8192&n)e:for(t=e.stateNode,t._visibility=r?-2&t._visibility:1|t._visibility,r&&(null===a||c||ys||xs||Is(e)),a=null,t=e;;){if(5===t.tag||26===t.tag){if(null===a){c=a=t;try{if(o=c.stateNode,r)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var f=c.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(m){uu(c,c.return,m)}}}else if(6===t.tag){if(null===a){c=t;try{c.stateNode.nodeValue=r?"":c.memoizedProps}catch(m){uu(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}4&n&&(null!==(n=e.updateQueue)&&(null!==(a=n.retryQueue)&&(n.retryQueue=null,Rs(e,a))));break;case 19:Ms(t,e),Ls(e),4&n&&(null!==(n=e.updateQueue)&&(e.updateQueue=null,Rs(e,n)));case 30:case 21:}}function Ls(e){var t=e.flags;if(2&t){try{for(var a,n=e.return;null!==n;){if(ms(n)){a=n;break}n=n.return}if(null==a)throw Error(i(160));switch(a.tag){case 27:var r=a.stateNode;vs(e,hs(e),r);break;case 5:var o=a.stateNode;32&a.flags&&(St(o,""),a.flags&=-33),vs(e,hs(e),o);break;case 3:case 4:var l=a.stateNode.containerInfo;gs(e,hs(e),l);break;default:throw Error(i(161))}}catch(s){uu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Os(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Os(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Fs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Es(e,t.alternate,t),t=t.sibling}function Is(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ls(4,t,t.return),Is(t);break;case 1:ds(t,t.return);var a=t.stateNode;"function"===typeof a.componentWillUnmount&&cs(t,t.return,a),Is(t);break;case 27:wd(t.stateNode);case 26:case 5:ds(t,t.return),Is(t);break;case 22:null===t.memoizedState&&Is(t);break;default:Is(t)}e=e.sibling}}function Ds(e,t,a){for(a=a&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var n=t.alternate,r=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:Ds(r,o,a),is(4,o);break;case 1:if(Ds(r,o,a),"function"===typeof(r=(n=o).stateNode).componentDidMount)try{r.componentDidMount()}catch(c){uu(n,n.return,c)}if(null!==(r=(n=o).updateQueue)){var l=n.stateNode;try{var s=r.shared.hiddenCallbacks;if(null!==s)for(r.shared.hiddenCallbacks=null,r=0;r<s.length;r++)fo(s[r],l)}catch(c){uu(n,n.return,c)}}a&&64&i&&ss(o),us(o,o.return);break;case 27:bs(o);case 26:case 5:Ds(r,o,a),a&&null===n&&4&i&&fs(o),us(o,o.return);break;case 12:Ds(r,o,a);break;case 13:Ds(r,o,a),a&&4&i&&_s(r,o);break;case 22:null===o.memoizedState&&Ds(r,o,a),us(o,o.return);break;case 30:break;default:Ds(r,o,a)}t=t.sibling}}function qs(e,t){var a=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(a=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==a&&(null!=e&&e.refCount++,null!=a&&Nr(a))}function $s(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Nr(e))}function Bs(e,t,a,n){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Us(e,t,a,n),t=t.sibling}function Us(e,t,a,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Bs(e,t,a,n),2048&r&&is(9,t);break;case 1:case 13:default:Bs(e,t,a,n);break;case 3:Bs(e,t,a,n),2048&r&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Nr(e)));break;case 12:if(2048&r){Bs(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){uu(t,t.return,s)}}else Bs(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,null!==t.memoizedState?2&o._visibility?Bs(e,t,a,n):Ws(e,t):2&o._visibility?Bs(e,t,a,n):(o._visibility|=2,Hs(e,t,a,n,0!==(10256&t.subtreeFlags))),2048&r&&qs(i,t);break;case 24:Bs(e,t,a,n),2048&r&&$s(t.alternate,t)}}function Hs(e,t,a,n,r){for(r=r&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,i=t,l=a,s=n,c=i.flags;switch(i.tag){case 0:case 11:case 15:Hs(o,i,l,s,r),is(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?2&u._visibility?Hs(o,i,l,s,r):Ws(o,i):(u._visibility|=2,Hs(o,i,l,s,r)),r&&2048&c&&qs(i.alternate,i);break;case 24:Hs(o,i,l,s,r),r&&2048&c&&$s(i.alternate,i);break;default:Hs(o,i,l,s,r)}t=t.sibling}}function Ws(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var a=e,n=t,r=n.flags;switch(n.tag){case 22:Ws(a,n),2048&r&&qs(n.alternate,n);break;case 24:Ws(a,n),2048&r&&$s(n.alternate,n);break;default:Ws(a,n)}t=t.sibling}}var Vs=8192;function Gs(e){if(e.subtreeFlags&Vs)for(e=e.child;null!==e;)Ys(e),e=e.sibling}function Ys(e){switch(e.tag){case 26:Gs(e),e.flags&Vs&&null!==e.memoizedState&&function(e,t,a){if(null===Bd)throw Error(i(475));var n=Bd;if("stylesheet"===t.type&&("string"!==typeof a.media||!1!==matchMedia(a.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var r=zd(a.href),o=e.querySelector(_d(r));if(o)return null!==(e=o._p)&&"object"===typeof e&&"function"===typeof e.then&&(n.count++,n=Hd.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,void We(o);o=e.ownerDocument||e,a=Rd(a),(r=Sd.get(r))&&Od(a,r),We(o=o.createElement("link"));var l=o;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(o,"link",a),t.instance=o}null===n.stylesheets&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(n.count++,t=Hd.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}(As,e.memoizedState,e.memoizedProps);break;case 5:default:Gs(e);break;case 3:case 4:var t=As;As=Ed(e.stateNode.containerInfo),Gs(e),As=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Vs,Vs=16777216,Gs(e),Vs=t):Gs(e))}}function Ks(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Qs(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var a=0;a<t.length;a++){var n=t[a];ks=n,Zs(n,e)}Ks(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xs(e),e=e.sibling}function Xs(e){switch(e.tag){case 0:case 11:case 15:Qs(e),2048&e.flags&&ls(9,e,e.return);break;case 3:case 12:default:Qs(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Js(e)):Qs(e)}}function Js(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var a=0;a<t.length;a++){var n=t[a];ks=n,Zs(n,e)}Ks(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ls(8,t,t.return),Js(t);break;case 22:2&(a=t.stateNode)._visibility&&(a._visibility&=-3,Js(t));break;default:Js(t)}e=e.sibling}}function Zs(e,t){for(;null!==ks;){var a=ks;switch(a.tag){case 0:case 11:case 15:ls(8,a,t);break;case 23:case 22:if(null!==a.memoizedState&&null!==a.memoizedState.cachePool){var n=a.memoizedState.cachePool.pool;null!=n&&n.refCount++}break;case 24:Nr(a.memoizedState.cache)}if(null!==(n=a.child))n.return=a,ks=n;else e:for(a=e;null!==ks;){var r=(n=ks).sibling,o=n.return;if(Ps(n),n===a){ks=null;break e}if(null!==r){r.return=o,ks=r;break e}ks=o}}}var ec={getCacheForType:function(e){var t=Cr(Mr),a=t.data.get(e);return void 0===a&&(a=e(),t.data.set(e,a)),a}},tc="function"===typeof WeakMap?WeakMap:Map,ac=0,nc=null,rc=null,oc=0,ic=0,lc=null,sc=!1,cc=!1,uc=!1,dc=0,fc=0,pc=0,mc=0,hc=0,gc=0,vc=0,bc=null,yc=null,xc=!1,wc=0,Sc=1/0,kc=null,Ec=null,Pc=0,Cc=null,jc=null,Tc=0,zc=0,_c=null,Rc=null,Mc=0,Ac=null;function Nc(){if(0!==(2&ac)&&0!==oc)return oc&-oc;if(null!==N.T){return 0!==Fr?Fr:zu()}return _e()}function Lc(){0===gc&&(gc=0===(536870912&oc)||or?Se():536870912);var e=rl.current;return null!==e&&(e.flags|=32),gc}function Oc(e,t,a){(e!==nc||2!==ic&&9!==ic)&&null===e.cancelPendingCommit||(Uc(e,0),qc(e,oc,gc,!1)),Pe(e,a),0!==(2&ac)&&e===nc||(e===nc&&(0===(2&ac)&&(mc|=a),4===fc&&qc(e,oc,gc,!1)),Su(e))}function Fc(e,t,a){if(0!==(6&ac))throw Error(i(327));for(var n=!a&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),r=n?function(e,t){var a=ac;ac|=2;var n=Wc(),r=Vc();nc!==e||oc!==t?(kc=null,Sc=te()+500,Uc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==ic&&null!==rc){t=rc;var o=lc;t:switch(ic){case 1:ic=0,lc=null,Zc(e,t,o,1);break;case 2:case 9:if(Kr(o)){ic=0,lc=null,Jc(t);break}t=function(){2!==ic&&9!==ic||nc!==e||(ic=7),Su(e)},o.then(t,t);break e;case 3:ic=7;break e;case 4:ic=5;break e;case 7:Kr(o)?(ic=0,lc=null,Jc(t)):(ic=0,lc=null,Zc(e,t,o,7));break;case 5:var l=null;switch(rc.tag){case 26:l=rc.memoizedState;case 5:case 27:var s=rc;if(!l||$d(l)){ic=0,lc=null;var c=s.sibling;if(null!==c)rc=c;else{var u=s.return;null!==u?(rc=u,eu(u)):rc=null}break t}}ic=0,lc=null,Zc(e,t,o,5);break;case 6:ic=0,lc=null,Zc(e,t,o,6);break;case 8:Bc(),fc=6;break e;default:throw Error(i(462))}}Qc();break}catch(d){Hc(e,d)}return br=vr=null,N.H=n,N.A=r,ac=a,null!==rc?0:(nc=null,oc=0,Tn(),fc)}(e,t):Yc(e,t,!0),o=n;;){if(0===r){cc&&!n&&qc(e,t,0,!1);break}if(a=e.current.alternate,!o||Dc(a)){if(2===r){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;r=bc;var c=s.current.memoizedState.isDehydrated;if(c&&(Uc(s,l).flags|=256),2!==(l=Yc(s,l,!1))){if(uc&&!c){s.errorRecoveryDisabledLanes|=o,mc|=o,r=4;break e}o=yc,yc=r,null!==o&&(null===yc?yc=o:yc.push.apply(yc,o))}r=l}if(o=!1,2!==r)continue}}if(1===r){Uc(e,0),qc(e,t,0,!0);break}e:{switch(n=e,o=r){case 0:case 1:throw Error(i(345));case 4:if((4194048&t)!==t)break;case 6:qc(n,t,gc,!sc);break e;case 2:yc=null;break;case 3:case 5:break;default:throw Error(i(329))}if((62914560&t)===t&&10<(r=wc+300-te())){if(qc(n,t,gc,!sc),0!==ye(n,0,!0))break e;n.timeoutHandle=sd(Ic.bind(null,n,a,yc,kc,xc,t,gc,mc,vc,sc,o,2,-0,0),r)}else Ic(n,a,yc,kc,xc,t,gc,mc,vc,sc,o,0,-0,0)}break}r=Yc(e,t,!1),o=!1}Su(e)}function Ic(e,t,a,n,r,o,l,s,c,u,d,f,p,m){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&(Bd={stylesheets:null,count:0,unsuspend:Ud},Ys(t),null!==(f=function(){if(null===Bd)throw Error(i(475));var e=Bd;return e.stylesheets&&0===e.count&&Vd(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Vd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}())))return e.cancelPendingCommit=f(au.bind(null,e,t,o,a,n,r,l,s,c,d,1,p,m)),void qc(e,o,l,!u);au(e,t,o,a,n,r,l,s,c)}function Dc(e){for(var t=e;;){var a=t.tag;if((0===a||11===a||15===a)&&16384&t.flags&&(null!==(a=t.updateQueue)&&null!==(a=a.stores)))for(var n=0;n<a.length;n++){var r=a[n],o=r.getSnapshot;r=r.value;try{if(!Ya(o(),r))return!1}catch(i){return!1}}if(a=t.child,16384&t.subtreeFlags&&null!==a)a.return=t,t=a;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qc(e,t,a,n){t&=~hc,t&=~mc,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var o=31-pe(r),i=1<<o;n[o]=-1,r&=~i}0!==a&&Ce(e,a,t)}function $c(){return 0!==(6&ac)||(ku(0,!1),!1)}function Bc(){if(null!==rc){if(0===ic)var e=rc.return;else br=vr=null,Io(e=rc),Ki=null,Qi=0,e=rc;for(;null!==e;)os(e.alternate,e),e=e.return;rc=null}}function Uc(e,t){var a=e.timeoutHandle;-1!==a&&(e.timeoutHandle=-1,cd(a)),null!==(a=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,a()),Bc(),nc=e,rc=a=In(e.current,null),oc=t,ic=0,lc=null,sc=!1,cc=xe(e,t),uc=!1,vc=gc=hc=mc=pc=fc=0,yc=bc=null,xc=!1,0!==(8&t)&&(t|=32&t);var n=e.entangledLanes;if(0!==n)for(e=e.entanglements,n&=t;0<n;){var r=31-pe(n),o=1<<r;t|=e[r],n&=~o}return dc=t,Tn(),a}function Hc(e,t){xo=null,N.H=Wi,t===Wr||t===Gr?(t=Zr(),ic=3):t===Vr?(t=Zr(),ic=4):ic=t===Cl?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,lc=t,null===rc&&(fc=1,wl(e,En(t,e.current)))}function Wc(){var e=N.H;return N.H=Wi,null===e?Wi:e}function Vc(){var e=N.A;return N.A=ec,e}function Gc(){fc=4,sc||(4194048&oc)!==oc&&null!==rl.current||(cc=!0),0===(134217727&pc)&&0===(134217727&mc)||null===nc||qc(nc,oc,gc,!1)}function Yc(e,t,a){var n=ac;ac|=2;var r=Wc(),o=Vc();nc===e&&oc===t||(kc=null,Uc(e,t)),t=!1;var i=fc;e:for(;;)try{if(0!==ic&&null!==rc){var l=rc,s=lc;switch(ic){case 8:Bc(),i=6;break e;case 3:case 2:case 9:case 6:null===rl.current&&(t=!0);var c=ic;if(ic=0,lc=null,Zc(e,l,s,c),a&&cc){i=0;break e}break;default:c=ic,ic=0,lc=null,Zc(e,l,s,c)}}Kc(),i=fc;break}catch(u){Hc(e,u)}return t&&e.shellSuspendCounter++,br=vr=null,ac=n,N.H=r,N.A=o,null===rc&&(nc=null,oc=0,Tn()),i}function Kc(){for(;null!==rc;)Xc(rc)}function Qc(){for(;null!==rc&&!Z();)Xc(rc)}function Xc(e){var t=Xl(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):rc=t}function Jc(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ol(a,t,t.pendingProps,t.type,void 0,oc);break;case 11:t=Ol(a,t,t.pendingProps,t.type.render,t.ref,oc);break;case 5:Io(t);default:os(a,t),t=Xl(a,t=rc=Dn(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):rc=t}function Zc(e,t,a,n){br=vr=null,Io(t),Ki=null,Qi=0;var r=t.return;try{if(function(e,t,a,n,r){if(a.flags|=32768,null!==n&&"object"===typeof n&&"function"===typeof n.then){if(null!==(t=a.alternate)&&kr(t,a,r,!0),null!==(a=rl.current)){switch(a.tag){case 13:return null===ol?Gc():null===a.alternate&&0===fc&&(fc=3),a.flags&=-257,a.flags|=65536,a.lanes=r,n===Yr?a.flags|=16384:(null===(t=a.updateQueue)?a.updateQueue=new Set([n]):t.add(n),du(e,n,r)),!1;case 22:return a.flags|=65536,n===Yr?a.flags|=16384:(null===(t=a.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):null===(a=t.retryQueue)?t.retryQueue=new Set([n]):a.add(n),du(e,n,r)),!1}throw Error(i(435,a.tag))}return du(e,n,r),Gc(),!1}if(or)return null!==(t=rl.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==sr&&hr(En(e=Error(i(422),{cause:n}),a))):(n!==sr&&hr(En(t=Error(i(423),{cause:n}),a)),(e=e.current.alternate).flags|=65536,r&=-r,e.lanes|=r,n=En(n,a),lo(e,r=kl(e.stateNode,n,r)),4!==fc&&(fc=2)),!1;var o=Error(i(520),{cause:n});if(o=En(o,a),null===bc?bc=[o]:bc.push(o),4!==fc&&(fc=2),null===t)return!0;n=En(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,lo(a,e=kl(a.stateNode,n,e)),!1;case 1:if(t=a.type,o=a.stateNode,0===(128&a.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Ec||!Ec.has(o))))return a.flags|=65536,r&=-r,a.lanes|=r,Pl(r=El(r),e,a,n),lo(a,r),!1}a=a.return}while(null!==a);return!1}(e,r,t,a,oc))return fc=1,wl(e,En(a,e.current)),void(rc=null)}catch(o){if(null!==r)throw rc=r,o;return fc=1,wl(e,En(a,e.current)),void(rc=null)}32768&t.flags?(or||1===n?e=!0:cc||0!==(536870912&oc)?e=!1:(sc=e=!0,(2===n||9===n||3===n||6===n)&&(null!==(n=rl.current)&&13===n.tag&&(n.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,sc);e=t.return;var a=ns(t.alternate,t,dc);if(null!==a)return void(rc=a);if(null!==(t=t.sibling))return void(rc=t);rc=t=e}while(null!==t);0===fc&&(fc=5)}function tu(e,t){do{var a=rs(e.alternate,e);if(null!==a)return a.flags&=32767,void(rc=a);if(null!==(a=e.return)&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&null!==(e=e.sibling))return void(rc=e);rc=e=a}while(null!==e);fc=6,rc=null}function au(e,t,a,n,r,o,l,s,c){e.cancelPendingCommit=null;do{lu()}while(0!==Pc);if(0!==(6&ac))throw Error(i(327));if(null!==t){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,function(e,t,a,n,r,o){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(a=i&~a;0<a;){var u=31-pe(a),d=1<<u;l[u]=0,s[u]=-1;var f=c[u];if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];null!==p&&(p.lane&=-536870913)}a&=~d}0!==n&&Ce(e,n,0),0!==o&&0===r&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,a,o|=jn,l,s,c),e===nc&&(rc=nc=null,oc=0),jc=t,Cc=e,Tc=a,zc=o,_c=r,Rc=n,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(oe,function(){return su(),null})):(e.callbackNode=null,e.callbackPriority=0),n=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||n){n=N.T,N.T=null,r=L.p,L.p=2,l=ac,ac|=4;try{!function(e,t){if(e=e.containerInfo,td=af,en(e=Za(e))){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(a=(a=e.ownerDocument)&&a.defaultView||window).getSelection&&a.getSelection();if(n&&0!==n.rangeCount){a=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch(g){a=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==a||0!==r&&3!==f.nodeType||(s=l+r),f!==o||0!==n&&3!==f.nodeType||(c=l+n),3===f.nodeType&&(l+=f.nodeValue.length),null!==(m=f.firstChild);)p=f,f=m;for(;;){if(f===e)break t;if(p===a&&++u===r&&(s=l),p===o&&++d===n&&(c=l),null!==(m=f.nextSibling))break;p=(f=p).parentNode}f=m}a=-1===s||-1===c?null:{start:s,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(ad={focusedElem:e,selectionRange:a},af=!1,ks=t;null!==ks;)if(e=(t=ks).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,ks=e;else for(;null!==ks;){switch(o=(t=ks).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,a=t,r=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var h=gl(a.type,r,(a.elementType,a.type));e=n.getSnapshotBeforeUpdate(h,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(v){uu(a,a.return,v)}}break;case 3:if(0!==(1024&e))if(9===(a=(e=t.stateNode.containerInfo).nodeType))hd(e);else if(1===a)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,ks=e;break}ks=t.return}}(e,t)}finally{ac=l,L.p=r,N.T=n}}Pc=1,nu(),ru(),ou()}}function nu(){if(1===Pc){Pc=0;var e=Cc,t=jc,a=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||a){a=N.T,N.T=null;var n=L.p;L.p=2;var r=ac;ac|=4;try{Ns(t,e);var o=ad,i=Za(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&Ja(l.ownerDocument.documentElement,l)){if(null!==s&&en(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=l.textContent.length,h=Math.min(s.start,m),g=void 0===s.end?h:Math.min(s.end,m);!p.extend&&h>g&&(i=g,g=h,h=i);var v=Xa(l,h),b=Xa(l,g);if(v&&b&&(1!==p.rangeCount||p.anchorNode!==v.node||p.anchorOffset!==v.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var y=d.createRange();y.setStart(v.node,v.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(b.node,b.offset)):(y.setEnd(b.node,b.offset),p.addRange(y))}}}}for(d=[],p=l;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}af=!!td,ad=td=null}finally{ac=r,L.p=n,N.T=a}}e.current=t,Pc=2}}function ru(){if(2===Pc){Pc=0;var e=Cc,t=jc,a=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||a){a=N.T,N.T=null;var n=L.p;L.p=2;var r=ac;ac|=4;try{Es(e,t.alternate,t)}finally{ac=r,L.p=n,N.T=a}}Pc=3}}function ou(){if(4===Pc||3===Pc){Pc=0,ee();var e=Cc,t=jc,a=Tc,n=Rc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Pc=5:(Pc=0,jc=Cc=null,iu(e,e.pendingLanes));var r=e.pendingLanes;if(0===r&&(Ec=null),ze(a),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==n){t=N.T,r=L.p,L.p=2,N.T=null;try{for(var o=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];o(l.value,{componentStack:l.stack})}}finally{N.T=t,L.p=r}}0!==(3&Tc)&&lu(),Su(e),r=e.pendingLanes,0!==(4194090&a)&&0!==(42&r)?e===Ac?Mc++:(Mc=0,Ac=e):Mc=0,ku(0,!1)}}function iu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Nr(t)))}function lu(e){return nu(),ru(),ou(),su()}function su(){if(5!==Pc)return!1;var e=Cc,t=zc;zc=0;var a=ze(Tc),n=N.T,r=L.p;try{L.p=32>a?32:a,N.T=null,a=_c,_c=null;var o=Cc,l=Tc;if(Pc=0,jc=Cc=null,Tc=0,0!==(6&ac))throw Error(i(331));var s=ac;if(ac|=4,Xs(o.current),Us(o,o.current,l,a),ac=s,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,o)}catch(c){}return!0}finally{L.p=r,N.T=n,iu(e,t)}}function cu(e,t,a){t=En(a,t),null!==(e=oo(e,t=kl(e.stateNode,t,2),2))&&(Pe(e,2),Su(e))}function uu(e,t,a){if(3===e.tag)cu(e,e,a);else for(;null!==t;){if(3===t.tag){cu(t,e,a);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Ec||!Ec.has(n))){e=En(a,e),null!==(n=oo(t,a=El(2),2))&&(Pl(a,n,t,e),Pe(n,2),Su(n));break}}t=t.return}}function du(e,t,a){var n=e.pingCache;if(null===n){n=e.pingCache=new tc;var r=new Set;n.set(t,r)}else void 0===(r=n.get(t))&&(r=new Set,n.set(t,r));r.has(a)||(uc=!0,r.add(a),e=fu.bind(null,e,t,a),t.then(e,e))}function fu(e,t,a){var n=e.pingCache;null!==n&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,nc===e&&(oc&a)===a&&(4===fc||3===fc&&(62914560&oc)===oc&&300>te()-wc?0===(2&ac)&&Uc(e,0):hc|=a,vc===oc&&(vc=0)),Su(e)}function pu(e,t){0===t&&(t=ke()),null!==(e=Rn(e,t))&&(Pe(e,t),Su(e))}function mu(e){var t=e.memoizedState,a=0;null!==t&&(a=t.retryLane),pu(e,a)}function hu(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,r=e.memoizedState;null!==r&&(a=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==n&&n.delete(t),pu(e,a)}var gu=null,vu=null,bu=!1,yu=!1,xu=!1,wu=0;function Su(e){e!==vu&&null===e.next&&(null===vu?gu=vu=e:vu=vu.next=e),yu=!0,bu||(bu=!0,dd(function(){0!==(6&ac)?X(ne,Eu):Pu()}))}function ku(e,t){if(!xu&&yu){xu=!0;do{for(var a=!1,n=gu;null!==n;){if(!t)if(0!==e){var r=n.pendingLanes;if(0===r)var o=0;else{var i=n.suspendedLanes,l=n.pingedLanes;o=(1<<31-pe(42|e)+1)-1,o=201326741&(o&=r&~(i&~l))?201326741&o|1:o?2|o:0}0!==o&&(a=!0,Tu(n,o))}else o=oc,0===(3&(o=ye(n,n===nc?o:0,null!==n.cancelPendingCommit||-1!==n.timeoutHandle)))||xe(n,o)||(a=!0,Tu(n,o));n=n.next}}while(a);xu=!1}}function Eu(){Pu()}function Pu(){yu=bu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==ld&&(ld=e,!0);return ld=null,!1}()&&(e=wu),wu=0);for(var t=te(),a=null,n=gu;null!==n;){var r=n.next,o=Cu(n,t);0===o?(n.next=null,null===a?gu=r:a.next=r,null===r&&(vu=a)):(a=n,(0!==e||0!==(3&o))&&(yu=!0)),n=r}ku(e,!1)}function Cu(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-pe(o),l=1<<i,s=r[i];-1===s?0!==(l&a)&&0===(l&n)||(r[i]=we(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(a=oc,a=ye(e,e===(t=nc)?a:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),n=e.callbackNode,0===a||e===t&&(2===ic||9===ic)||null!==e.cancelPendingCommit)return null!==n&&null!==n&&J(n),e.callbackNode=null,e.callbackPriority=0;if(0===(3&a)||xe(e,a)){if((t=a&-a)===e.callbackPriority)return t;switch(null!==n&&J(n),ze(a)){case 2:case 8:a=re;break;case 32:default:a=oe;break;case 268435456:a=le}return n=ju.bind(null,e),a=X(a,n),e.callbackPriority=t,e.callbackNode=a,t}return null!==n&&null!==n&&J(n),e.callbackPriority=2,e.callbackNode=null,2}function ju(e,t){if(0!==Pc&&5!==Pc)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lu()&&e.callbackNode!==a)return null;var n=oc;return 0===(n=ye(e,e===nc?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Fc(e,n,t),Cu(e,te()),null!=e.callbackNode&&e.callbackNode===a?ju.bind(null,e):null)}function Tu(e,t){if(lu())return null;Fc(e,t,!0)}function zu(){return 0===wu&&(wu=Se()),wu}function _u(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:zt(""+e)}function Ru(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}for(var Mu=0;Mu<wn.length;Mu++){var Au=wn[Mu];Sn(Au.toLowerCase(),"on"+(Au[0].toUpperCase()+Au.slice(1)))}Sn(pn,"onAnimationEnd"),Sn(mn,"onAnimationIteration"),Sn(hn,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(gn,"onTransitionRun"),Sn(vn,"onTransitionStart"),Sn(bn,"onTransitionCancel"),Sn(yn,"onTransitionEnd"),Ke("onMouseEnter",["mouseout","mouseover"]),Ke("onMouseLeave",["mouseout","mouseover"]),Ke("onPointerEnter",["pointerout","pointerover"]),Ke("onPointerLeave",["pointerout","pointerover"]),Ye("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ye("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ye("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ye("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ye("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ye("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nu));function Ou(e,t){t=0!==(4&t);for(var a=0;a<e.length;a++){var n=e[a],r=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&r.isPropagationStopped())break e;o=l,r.currentTarget=c;try{o(r)}catch(u){vl(u)}r.currentTarget=null,o=s}else for(i=0;i<n.length;i++){if(s=(l=n[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&r.isPropagationStopped())break e;o=l,r.currentTarget=c;try{o(r)}catch(u){vl(u)}r.currentTarget=null,o=s}}}}function Fu(e,t){var a=t[Le];void 0===a&&(a=t[Le]=new Set);var n=e+"__bubble";a.has(n)||($u(t,e,2,!1),a.add(n))}function Iu(e,t,a){var n=0;t&&(n|=4),$u(a,e,n,t)}var Du="_reactListening"+Math.random().toString(36).slice(2);function qu(e){if(!e[Du]){e[Du]=!0,Ve.forEach(function(t){"selectionchange"!==t&&(Lu.has(t)||Iu(t,!1,e),Iu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Du]||(t[Du]=!0,Iu("selectionchange",!1,t))}}function $u(e,t,a,n){switch(uf(t)){case 2:var r=nf;break;case 8:r=rf;break;default:r=of}a=r.bind(null,t,a,e),r=void 0,!Dt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(r=!0),n?void 0!==r?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):void 0!==r?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function Bu(e,t,a,n,r){var o=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===r)break;if(4===i)for(i=n.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===r)return;i=i.return}for(;null!==l;){if(null===(i=$e(l)))return;if(5===(c=i.tag)||6===c||26===c||27===c){n=o=i;continue e}l=l.parentNode}}n=n.return}Ot(function(){var n=o,r=Rt(a),i=[];e:{var l=xn.get(e);if(void 0!==l){var c=Zt,u=e;switch(e){case"keypress":if(0===Wt(a))break e;case"keydown":case"keyup":c=ma;break;case"focusin":u="focus",c=oa;break;case"focusout":u="blur",c=oa;break;case"beforeblur":case"afterblur":c=oa;break;case"click":if(2===a.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=ra;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=ga;break;case pn:case mn:case hn:c=ia;break;case yn:c=va;break;case"scroll":case"scrollend":c=ta;break;case"wheel":c=ba;break;case"copy":case"cut":case"paste":c=la;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=ha;break;case"toggle":case"beforetoggle":c=ya}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==l?l+"Capture":null:l;d=[];for(var m,h=n;null!==h;){var g=h;if(m=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===m||null===p||null!=(g=Ft(h,p))&&d.push(Uu(h,g,m)),f)break;h=h.return}0<d.length&&(l=new c(l,u,null,a,r),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||a===_t||!(u=a.relatedTarget||a.fromElement)||!$e(u)&&!u[Ne])&&(c||l)&&(l=r.window===r?r:(l=r.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=n,null!==(u=(u=a.relatedTarget||a.toElement)?$e(u):null)&&(f=s(u),d=u.tag,u!==f||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=n),c!==u)){if(d=na,g="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=ha,g="onPointerLeave",p="onPointerEnter",h="pointer"),f=null==c?l:Ue(c),m=null==u?l:Ue(u),(l=new d(g,h+"leave",c,a,r)).target=f,l.relatedTarget=m,g=null,$e(r)===n&&((d=new d(p,h+"enter",u,a,r)).target=m,d.relatedTarget=f,g=d),f=g,c&&u)e:{for(p=u,h=0,m=d=c;m;m=Wu(m))h++;for(m=0,g=p;g;g=Wu(g))m++;for(;0<h-m;)d=Wu(d),h--;for(;0<m-h;)p=Wu(p),m--;for(;h--;){if(d===p||null!==p&&d===p.alternate)break e;d=Wu(d),p=Wu(p)}d=null}else d=null;null!==c&&Vu(i,l,c,d,!1),null!==u&&null!==f&&Vu(i,f,u,d,!0)}if("select"===(c=(l=n?Ue(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var v=Fa;else if(Ra(l))if(Ia)v=Ga;else{v=Wa;var b=Ha}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?n&&Ct(n.elementType)&&(v=Fa):v=Va;switch(v&&(v=v(e,n))?Ma(i,v,a,r):(b&&b(e,l,n),"focusout"===e&&n&&"number"===l.type&&null!=n.memoizedProps.value&&bt(l,"number",l.value)),b=n?Ue(n):window,e){case"focusin":(Ra(b)||"true"===b.contentEditable)&&(an=b,nn=n,rn=null);break;case"focusout":rn=nn=an=null;break;case"mousedown":on=!0;break;case"contextmenu":case"mouseup":case"dragend":on=!1,ln(i,a,r);break;case"selectionchange":if(tn)break;case"keydown":case"keyup":ln(i,a,r)}var y;if(wa)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else za?ja(e,a)&&(x="onCompositionEnd"):"keydown"===e&&229===a.keyCode&&(x="onCompositionStart");x&&(Ea&&"ko"!==a.locale&&(za||"onCompositionStart"!==x?"onCompositionEnd"===x&&za&&(y=Ht()):(Bt="value"in($t=r)?$t.value:$t.textContent,za=!0)),0<(b=Hu(n,x)).length&&(x=new sa(x,e,null,a,r),i.push({event:x,listeners:b}),y?x.data=y:null!==(y=Ta(a))&&(x.data=y))),(y=ka?function(e,t){switch(e){case"compositionend":return Ta(t);case"keypress":return 32!==t.which?null:(Ca=!0,Pa);case"textInput":return(e=t.data)===Pa&&Ca?null:e;default:return null}}(e,a):function(e,t){if(za)return"compositionend"===e||!wa&&ja(e,t)?(e=Ht(),Ut=Bt=$t=null,za=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ea&&"ko"!==t.locale?null:t.data}}(e,a))&&(0<(x=Hu(n,"onBeforeInput")).length&&(b=new sa("onBeforeInput","beforeinput",null,a,r),i.push({event:b,listeners:x}),b.data=y)),function(e,t,a,n,r){if("submit"===t&&a&&a.stateNode===r){var o=_u((r[Ae]||null).action),i=n.submitter;i&&null!==(t=(t=i[Ae]||null)?_u(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new Zt("action","action",null,n,r);e.push({event:l,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(0!==wu){var e=i?Ru(r,i):new FormData(r);Ri(a,{pending:!0,data:e,method:r.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?Ru(r,i):new FormData(r),Ri(a,{pending:!0,data:e,method:r.method,action:o},o,e))},currentTarget:r}]})}}(i,e,n,a,r)}Ou(i,t)})}function Uu(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Hu(e,t){for(var a=t+"Capture",n=[];null!==e;){var r=e,o=r.stateNode;if(5!==(r=r.tag)&&26!==r&&27!==r||null===o||(null!=(r=Ft(e,a))&&n.unshift(Uu(e,r,o)),null!=(r=Ft(e,t))&&n.push(Uu(e,r,o))),3===e.tag)return n;e=e.return}return[]}function Wu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Vu(e,t,a,n,r){for(var o=t._reactName,i=[];null!==a&&a!==n;){var l=a,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===n)break;5!==l&&26!==l&&27!==l||null===c||(s=c,r?null!=(c=Ft(a,o))&&i.unshift(Uu(a,c,s)):r||null!=(c=Ft(a,o))&&i.push(Uu(a,c,s))),a=a.return}0!==i.length&&e.push({event:t,listeners:i})}var Gu=/\r\n?/g,Yu=/\u0000|\uFFFD/g;function Ku(e){return("string"===typeof e?e:""+e).replace(Gu,"\n").replace(Yu,"")}function Qu(e,t){return t=Ku(t),Ku(e)===t}function Xu(){}function Ju(e,t,a,n,r,o){switch(a){case"children":"string"===typeof n?"body"===t||"textarea"===t&&""===n||St(e,n):("number"===typeof n||"bigint"===typeof n)&&"body"!==t&&St(e,""+n);break;case"className":at(e,"class",n);break;case"tabIndex":at(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":at(e,a,n);break;case"style":Pt(e,n,o);break;case"data":if("object"!==t){at(e,"data",n);break}case"src":case"href":if(""===n&&("a"!==t||"href"!==a)){e.removeAttribute(a);break}if(null==n||"function"===typeof n||"symbol"===typeof n||"boolean"===typeof n){e.removeAttribute(a);break}n=zt(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if("function"===typeof n){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===a?("input"!==t&&Ju(e,t,"name",r.name,r,null),Ju(e,t,"formEncType",r.formEncType,r,null),Ju(e,t,"formMethod",r.formMethod,r,null),Ju(e,t,"formTarget",r.formTarget,r,null)):(Ju(e,t,"encType",r.encType,r,null),Ju(e,t,"method",r.method,r,null),Ju(e,t,"target",r.target,r,null))),null==n||"symbol"===typeof n||"boolean"===typeof n){e.removeAttribute(a);break}n=zt(""+n),e.setAttribute(a,n);break;case"onClick":null!=n&&(e.onclick=Xu);break;case"onScroll":null!=n&&Fu("scroll",e);break;case"onScrollEnd":null!=n&&Fu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!==typeof n||!("__html"in n))throw Error(i(61));if(null!=(a=n.__html)){if(null!=r.children)throw Error(i(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&"function"!==typeof n&&"symbol"!==typeof n;break;case"muted":e.muted=n&&"function"!==typeof n&&"symbol"!==typeof n;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==n||"function"===typeof n||"boolean"===typeof n||"symbol"===typeof n){e.removeAttribute("xlink:href");break}a=zt(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":!0===n?e.setAttribute(a,""):!1!==n&&null!=n&&"function"!==typeof n&&"symbol"!==typeof n?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":null!=n&&"function"!==typeof n&&"symbol"!==typeof n&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":null==n||"function"===typeof n||"symbol"===typeof n||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Fu("beforetoggle",e),Fu("toggle",e),tt(e,"popover",n);break;case"xlinkActuate":nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":nt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":nt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":nt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":nt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":tt(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1])&&tt(e,a=jt.get(a)||a,n)}}function Zu(e,t,a,n,r,o){switch(a){case"style":Pt(e,n,o);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!==typeof n||!("__html"in n))throw Error(i(61));if(null!=(a=n.__html)){if(null!=r.children)throw Error(i(60));e.innerHTML=a}}break;case"children":"string"===typeof n?St(e,n):("number"===typeof n||"bigint"===typeof n)&&St(e,""+n);break;case"onScroll":null!=n&&Fu("scroll",e);break;case"onScrollEnd":null!=n&&Fu("scrollend",e);break;case"onClick":null!=n&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ge.hasOwnProperty(a)||("o"!==a[0]||"n"!==a[1]||(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),"function"===typeof(o=null!=(o=e[Ae]||null)?o[a]:null)&&e.removeEventListener(t,o,r),"function"!==typeof n)?a in e?e[a]=n:!0===n?e.setAttribute(a,""):tt(e,a,n):("function"!==typeof o&&null!==o&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,r)))}}function ed(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fu("error",e),Fu("load",e);var n,r=!1,o=!1;for(n in a)if(a.hasOwnProperty(n)){var l=a[n];if(null!=l)switch(n){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ju(e,t,n,l,a,null)}}return o&&Ju(e,t,"srcSet",a.srcSet,a,null),void(r&&Ju(e,t,"src",a.src,a,null));case"input":Fu("invalid",e);var s=n=l=o=null,c=null,u=null;for(r in a)if(a.hasOwnProperty(r)){var d=a[r];if(null!=d)switch(r){case"name":o=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":n=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:Ju(e,t,r,d,a,null)}}return vt(e,n,s,c,u,l,o,!1),void dt(e);case"select":for(o in Fu("invalid",e),r=l=n=null,a)if(a.hasOwnProperty(o)&&null!=(s=a[o]))switch(o){case"value":n=s;break;case"defaultValue":l=s;break;case"multiple":r=s;default:Ju(e,t,o,s,a,null)}return t=n,a=l,e.multiple=!!r,void(null!=t?yt(e,!!r,t,!1):null!=a&&yt(e,!!r,a,!0));case"textarea":for(l in Fu("invalid",e),n=o=r=null,a)if(a.hasOwnProperty(l)&&null!=(s=a[l]))switch(l){case"value":r=s;break;case"defaultValue":o=s;break;case"children":n=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:Ju(e,t,l,s,a,null)}return wt(e,r,o,n),void dt(e);case"option":for(c in a)if(a.hasOwnProperty(c)&&null!=(r=a[c]))if("selected"===c)e.selected=r&&"function"!==typeof r&&"symbol"!==typeof r;else Ju(e,t,c,r,a,null);return;case"dialog":Fu("beforetoggle",e),Fu("toggle",e),Fu("cancel",e),Fu("close",e);break;case"iframe":case"object":Fu("load",e);break;case"video":case"audio":for(r=0;r<Nu.length;r++)Fu(Nu[r],e);break;case"image":Fu("error",e),Fu("load",e);break;case"details":Fu("toggle",e);break;case"embed":case"source":case"link":Fu("error",e),Fu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&null!=(r=a[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ju(e,t,u,r,a,null)}return;default:if(Ct(t)){for(d in a)a.hasOwnProperty(d)&&(void 0!==(r=a[d])&&Zu(e,t,d,r,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(null!=(r=a[s])&&Ju(e,t,s,r,a,null))}var td=null,ad=null;function nd(e){return 9===e.nodeType?e:e.ownerDocument}function rd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function od(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function id(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ld=null;var sd="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(fd)}:sd;function fd(e){setTimeout(function(){throw e})}function pd(e){return"head"===e}function md(e,t){var a=t,n=0,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&8===o.nodeType)if("/$"===(a=o.data)){if(0<n&&8>n){a=n;var i=e.ownerDocument;if(1&a&&wd(i.documentElement),2&a&&wd(i.body),4&a)for(wd(a=i.head),i=a.firstChild;i;){var l=i.nextSibling,s=i.nodeName;i[De]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===i.rel.toLowerCase()||a.removeChild(i),i=l}}if(0===r)return e.removeChild(o),void Tf(t);r--}else"$"===a||"$?"===a||"$!"===a?r++:n=a.charCodeAt(0)-48;else n=0;a=o}while(a);Tf(t)}function hd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hd(a),qe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===a.rel.toLowerCase())continue}e.removeChild(a)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function vd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var bd=null;function yd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var a=e.data;if("$"===a||"$!"===a||"$?"===a){if(0===t)return e;t--}else"/$"===a&&t++}e=e.previousSibling}return null}function xd(e,t,a){switch(t=nd(a),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qe(e)}var Sd=new Map,kd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Pd=L.d;L.d={f:function(){var e=Pd.f(),t=$c();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?Ai(t):Pd.r(e)},D:function(e){Pd.D(e),jd("dns-prefetch",e,null)},C:function(e,t){Pd.C(e,t),jd("preconnect",e,t)},L:function(e,t,a){Pd.L(e,t,a);var n=Cd;if(n&&e&&t){var r='link[rel="preload"][as="'+ht(t)+'"]';"image"===t&&a&&a.imageSrcSet?(r+='[imagesrcset="'+ht(a.imageSrcSet)+'"]',"string"===typeof a.imageSizes&&(r+='[imagesizes="'+ht(a.imageSizes)+'"]')):r+='[href="'+ht(e)+'"]';var o=r;switch(t){case"style":o=zd(e);break;case"script":o=Md(e)}Sd.has(o)||(e=f({rel:"preload",href:"image"===t&&a&&a.imageSrcSet?void 0:e,as:t},a),Sd.set(o,e),null!==n.querySelector(r)||"style"===t&&n.querySelector(_d(o))||"script"===t&&n.querySelector(Ad(o))||(ed(t=n.createElement("link"),"link",e),We(t),n.head.appendChild(t)))}},m:function(e,t){Pd.m(e,t);var a=Cd;if(a&&e){var n=t&&"string"===typeof t.as?t.as:"script",r='link[rel="modulepreload"][as="'+ht(n)+'"][href="'+ht(e)+'"]',o=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Md(e)}if(!Sd.has(o)&&(e=f({rel:"modulepreload",href:e},t),Sd.set(o,e),null===a.querySelector(r))){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ad(o)))return}ed(n=a.createElement("link"),"link",e),We(n),a.head.appendChild(n)}}},X:function(e,t){Pd.X(e,t);var a=Cd;if(a&&e){var n=He(a).hoistableScripts,r=Md(e),o=n.get(r);o||((o=a.querySelector(Ad(r)))||(e=f({src:e,async:!0},t),(t=Sd.get(r))&&Fd(e,t),We(o=a.createElement("script")),ed(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}},S:function(e,t,a){Pd.S(e,t,a);var n=Cd;if(n&&e){var r=He(n).hoistableStyles,o=zd(e);t=t||"default";var i=r.get(o);if(!i){var l={loading:0,preload:null};if(i=n.querySelector(_d(o)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Sd.get(o))&&Od(e,a);var s=i=n.createElement("link");We(s),ed(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ld(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:l},r.set(o,i)}}},M:function(e,t){Pd.M(e,t);var a=Cd;if(a&&e){var n=He(a).hoistableScripts,r=Md(e),o=n.get(r);o||((o=a.querySelector(Ad(r)))||(e=f({src:e,async:!0,type:"module"},t),(t=Sd.get(r))&&Fd(e,t),We(o=a.createElement("script")),ed(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}};var Cd="undefined"===typeof document?null:document;function jd(e,t,a){var n=Cd;if(n&&"string"===typeof t&&t){var r=ht(t);r='link[rel="'+e+'"][href="'+r+'"]',"string"===typeof a&&(r+='[crossorigin="'+a+'"]'),kd.has(r)||(kd.add(r),e={rel:e,crossOrigin:a,href:t},null===n.querySelector(r)&&(ed(t=n.createElement("link"),"link",e),We(t),n.head.appendChild(t)))}}function Td(e,t,a,n){var r,o,l,s,c=(c=H.current)?Ed(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof a.precedence&&"string"===typeof a.href?(t=zd(a.href),(n=(a=He(c).hoistableStyles).get(t))||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===a.rel&&"string"===typeof a.href&&"string"===typeof a.precedence){e=zd(a.href);var u=He(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(_d(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Sd.set(e,a),u||(r=c,o=e,l=a,s=d.state,r.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=r.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),ed(o,"link",l),We(o),r.head.appendChild(o))))),t&&null===n)throw Error(i(528,""));return d}if(t&&null!==n)throw Error(i(529,""));return null;case"script":return t=a.async,"string"===typeof(a=a.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Md(a),(n=(a=He(c).hoistableScripts).get(t))||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function zd(e){return'href="'+ht(e)+'"'}function _d(e){return'link[rel="stylesheet"]['+e+"]"}function Rd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Md(e){return'[src="'+ht(e)+'"]'}function Ad(e){return"script[async]"+e}function Nd(e,t,a){if(t.count++,null===t.instance)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ht(a.href)+'"]');if(n)return t.instance=n,We(n),n;var r=f({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return We(n=(e.ownerDocument||e).createElement("style")),ed(n,"style",r),Ld(n,a.precedence,e),t.instance=n;case"stylesheet":r=zd(a.href);var o=e.querySelector(_d(r));if(o)return t.state.loading|=4,t.instance=o,We(o),o;n=Rd(a),(r=Sd.get(r))&&Od(n,r),We(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(o,"link",n),t.state.loading|=4,Ld(o,a.precedence,e),t.instance=o;case"script":return o=Md(a.src),(r=e.querySelector(Ad(o)))?(t.instance=r,We(r),r):(n=a,(r=Sd.get(o))&&Fd(n=f({},a),r),We(r=(e=e.ownerDocument||e).createElement("script")),ed(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(n=t.instance,t.state.loading|=4,Ld(n,a.precedence,e));return t.instance}function Ld(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,o=r,i=0;i<n.length;i++){var l=n[i];if(l.dataset.precedence===t)o=l;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===a.nodeType?a.head:a).insertBefore(e,t.firstChild)}function Od(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Fd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Id=null;function Dd(e,t,a){if(null===Id){var n=new Map,r=Id=new Map;r.set(a,n)}else(n=(r=Id).get(a))||(n=new Map,r.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var o=a[r];if(!(o[De]||o[Me]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=n.get(i);l?l.push(o):n.set(i,[o])}}return n}function qd(e,t,a){(e=e.ownerDocument||e).head.insertBefore(a,"title"===t?e.querySelector("head > title"):null)}function $d(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Ud(){}function Hd(){if(this.count--,0===this.count)if(this.stylesheets)Vd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Wd=null;function Vd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Wd=new Map,t.forEach(Gd,e),Wd=null,Hd.call(e))}function Gd(e,t){if(!(4&t.state.loading)){var a=Wd.get(e);if(a)var n=a.get(null);else{a=new Map,Wd.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var i=r[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(a.set(i.dataset.precedence,i),n=i)}n&&a.set(null,n)}i=(r=t.instance).getAttribute("data-precedence"),(o=a.get(i)||n)===n&&a.set(null,r),a.set(i,r),this.count++,n=Hd.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),o?o.parentNode.insertBefore(r,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(r,e.firstChild),t.state.loading|=4}}var Yd={$$typeof:w,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function Kd(e,t,a,n,r,o,i,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Qd(e,t,a,n,r,o,i,l,s,c,u,d){return e=new Kd(e,t,a,i,l,s,c,d),t=1,!0===o&&(t|=24),o=On(3,null,null,t),e.current=o,o.stateNode=e,(t=Ar()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},ao(o),e}function Xd(e){return e?e=Nn:Nn}function Jd(e,t,a,n,r,o){r=Xd(r),null===n.context?n.context=r:n.pendingContext=r,(n=ro(t)).payload={element:a},null!==(o=void 0===o?null:o)&&(n.callback=o),null!==(a=oo(e,n,t))&&(Oc(a,0,t),io(a,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var a=e.retryLane;e.retryLane=0!==a&&a<t?a:t}}function ef(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tf(e){if(13===e.tag){var t=Rn(e,67108864);null!==t&&Oc(t,0,67108864),ef(e,67108864)}}var af=!0;function nf(e,t,a,n){var r=N.T;N.T=null;var o=L.p;try{L.p=2,of(e,t,a,n)}finally{L.p=o,N.T=r}}function rf(e,t,a,n){var r=N.T;N.T=null;var o=L.p;try{L.p=8,of(e,t,a,n)}finally{L.p=o,N.T=r}}function of(e,t,a,n){if(af){var r=lf(n);if(null===r)Bu(e,t,n,sf,a),yf(e,n);else if(function(e,t,a,n,r){switch(t){case"focusin":return ff=xf(ff,e,t,a,n,r),!0;case"dragenter":return pf=xf(pf,e,t,a,n,r),!0;case"mouseover":return mf=xf(mf,e,t,a,n,r),!0;case"pointerover":var o=r.pointerId;return hf.set(o,xf(hf.get(o)||null,e,t,a,n,r)),!0;case"gotpointercapture":return o=r.pointerId,gf.set(o,xf(gf.get(o)||null,e,t,a,n,r)),!0}return!1}(r,e,t,a,n))n.stopPropagation();else if(yf(e,n),4&t&&-1<bf.indexOf(e)){for(;null!==r;){var o=Be(r);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=be(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-pe(i);l.entanglements[1]|=s,i&=~s}Su(o),0===(6&ac)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(l=Rn(o,2))&&Oc(l,0,2),$c(),ef(o,2)}if(null===(o=lf(n))&&Bu(e,t,n,sf,a),o===r)break;r=o}null!==r&&n.stopPropagation()}else Bu(e,t,n,null,a)}}function lf(e){return cf(e=Rt(e))}var sf=null;function cf(e){if(sf=null,null!==(e=$e(e))){var t=s(e);if(null===t)e=null;else{var a=t.tag;if(13===a){if(null!==(e=c(t)))return e;e=null}else if(3===a){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sf=e,null}function uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case ne:return 2;case re:return 8;case oe:case ie:return 32;case le:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,pf=null,mf=null,hf=new Map,gf=new Map,vf=[],bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":pf=null;break;case"mouseover":case"mouseout":mf=null;break;case"pointerover":case"pointerout":hf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gf.delete(t.pointerId)}}function xf(e,t,a,n,r,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]},null!==t&&(null!==(t=Be(t))&&tf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==r&&-1===t.indexOf(r)&&t.push(r),e)}function wf(e){var t=$e(e.target);if(null!==t){var a=s(t);if(null!==a)if(13===(t=a.tag)){if(null!==(t=c(a)))return e.blockedOn=t,void function(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}(e.priority,function(){if(13===a.tag){var e=Nc();e=Te(e);var t=Rn(a,e);null!==t&&Oc(t,0,e),ef(a,e)}})}else if(3===t&&a.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===a.tag?a.stateNode.containerInfo:null)}e.blockedOn=null}function Sf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var a=lf(e.nativeEvent);if(null!==a)return null!==(t=Be(a))&&tf(t),e.blockedOn=a,!1;var n=new(a=e.nativeEvent).constructor(a.type,a);_t=n,a.target.dispatchEvent(n),_t=null,t.shift()}return!0}function kf(e,t,a){Sf(e)&&a.delete(t)}function Ef(){df=!1,null!==ff&&Sf(ff)&&(ff=null),null!==pf&&Sf(pf)&&(pf=null),null!==mf&&Sf(mf)&&(mf=null),hf.forEach(kf),gf.forEach(kf)}function Pf(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Ef)))}var Cf=null;function jf(e){Cf!==e&&(Cf=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Cf===e&&(Cf=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],r=e[t+2];if("function"!==typeof n){if(null===cf(n||a))continue;break}var o=Be(a);null!==o&&(e.splice(t,3),t-=3,Ri(o,{pending:!0,data:r,method:a.method,action:n},n,r))}}))}function Tf(e){function t(t){return Pf(t,e)}null!==ff&&Pf(ff,e),null!==pf&&Pf(pf,e),null!==mf&&Pf(mf,e),hf.forEach(t),gf.forEach(t);for(var a=0;a<vf.length;a++){var n=vf[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<vf.length&&null===(a=vf[0]).blockedOn;)wf(a),null===a.blockedOn&&vf.shift();if(null!=(a=(e.ownerDocument||e).$$reactFormReplay))for(n=0;n<a.length;n+=3){var r=a[n],o=a[n+1],i=r[Ae]||null;if("function"===typeof o)i||jf(a);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(r=o,i=o[Ae]||null)l=i.formAction;else if(null!==cf(r))continue}else l=i.action;"function"===typeof l?a[n+1]=l:(a.splice(n,3),n-=3),jf(a)}}}function zf(e){this._internalRoot=e}function _f(e){this._internalRoot=e}_f.prototype.render=zf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Jd(t.current,Nc(),e,t,null,null)},_f.prototype.unmount=zf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),$c(),t[Ne]=null}},_f.prototype.unstable_scheduleHydration=function(e){if(e){var t=_e();e={blockedOn:null,target:e,priority:t};for(var a=0;a<vf.length&&0!==t&&t<vf[a].priority;a++);vf.splice(a,0,e),0===a&&wf(e)}};var Rf=r.version;if("19.1.0"!==Rf)throw Error(i(527,Rf,"19.1.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(i(188));return t!==e?null:e}for(var a=e,n=t;;){var r=a.return;if(null===r)break;var o=r.alternate;if(null===o){if(null!==(n=r.return)){a=n;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===a)return u(r),e;if(o===n)return u(r),t;o=o.sibling}throw Error(i(188))}if(a.return!==n.return)a=r,n=o;else{for(var l=!1,c=r.child;c;){if(c===a){l=!0,a=r,n=o;break}if(c===n){l=!0,n=r,a=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===a){l=!0,a=o,n=r;break}if(c===n){l=!0,n=o,a=r;break}c=c.sibling}if(!l)throw Error(i(189))}}if(a.alternate!==n)throw Error(i(190))}if(3!==a.tag)throw Error(i(188));return a.stateNode.current===a?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Mf={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Af=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Af.isDisabled&&Af.supportsFiber)try{ue=Af.inject(Mf),de=Af}catch(Lf){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var a=!1,n="",r=bl,o=yl,s=xl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(a=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onUncaughtError&&(r=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Qd(e,1,!1,null,0,a,n,r,o,s,0,null),e[Ne]=t.current,qu(e),new zf(t)},t.hydrateRoot=function(e,t,a){if(!l(e))throw Error(i(299));var n=!1,r="",o=bl,s=yl,c=xl,u=null;return null!==a&&void 0!==a&&(!0===a.unstable_strictMode&&(n=!0),void 0!==a.identifierPrefix&&(r=a.identifierPrefix),void 0!==a.onUncaughtError&&(o=a.onUncaughtError),void 0!==a.onCaughtError&&(s=a.onCaughtError),void 0!==a.onRecoverableError&&(c=a.onRecoverableError),void 0!==a.unstable_transitionCallbacks&&a.unstable_transitionCallbacks,void 0!==a.formState&&(u=a.formState)),(t=Qd(e,1,!0,t,0,n,r,o,s,c,0,u)).context=Xd(null),a=t.current,(r=ro(n=Te(n=Nc()))).callback=null,oo(a,r,n),a=n,t.current.lanes=a,Pe(t,a),Su(t),e[Ne]=t.current,qu(e),new _f(t)},t.version="19.1.0"},43:(e,t,a)=>{"use strict";e.exports=a(288)},173:(e,t,a)=>{e.exports=a(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},288:(e,t)=>{"use strict";var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||m}function b(){}function y(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,h(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function E(e,t,n,r,o,i){return n=i.ref,{$$typeof:a,type:e,key:t,ref:void 0!==n?n:null,props:i}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(){}function z(e,t,r,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case n:u=!0;break;case f:return z((u=e._init)(e._payload),t,r,o,i)}}if(u)return i=i(e),u=""===o?"."+j(e,0):o,w(i)?(r="",null!=u&&(r=u.replace(C,"$&/")+"/"),z(i,t,r,"",function(e){return e})):null!=i&&(P(i)&&(s=i,c=r+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+u,i=E(s.type,c,void 0,0,0,s.props)),t.push(i)),1;u=0;var d,m=""===o?".":o+":";if(w(e))for(var h=0;h<e.length;h++)u+=z(o=e[h],t,r,l=m+j(o,h),i);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(o=e.next()).done;)u+=z(o=o.value,t,r,l=m+j(o,h++),i);else if("object"===l){if("function"===typeof e.then)return z(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(T,T):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,r,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function _(e,t,a){if(null==e)return e;var n=[],r=0;return z(e,n,"","",function(e){return t.call(a,e,r++)}),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function A(){}t.Children={map:_,forEach:function(e,t,a){_(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=r,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,a){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var n=h({},e.props),r=e.key;if(null!=t)for(o in void 0!==t.ref&&void 0,void 0!==t.key&&(r=""+t.key),t)!k.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(n[o]=t[o]);var o=arguments.length-2;if(1===o)n.children=a;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];n.children=i}return E(e.type,r,void 0,0,0,n)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,a){var n,r={},o=null;if(null!=t)for(n in void 0!==t.key&&(o=""+t.key),t)k.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(r[n]=t[n]);var i=arguments.length-2;if(1===i)r.children=a;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];r.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===r[n]&&(r[n]=i[n]);return E(e,o,void 0,0,0,r)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,a={};S.T=a;try{var n=e(),r=S.S;null!==r&&r(a,n),"object"===typeof n&&null!==n&&"function"===typeof n.then&&n.then(A,M)}catch(o){M(o)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,a){return S.H.useActionState(e,t,a)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,a){var n=S.H;if("function"===typeof a)throw Error("useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,a){return S.H.useImperativeHandle(e,t,a)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,a){return S.H.useReducer(e,t,a)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,a){return S.H.useSyncExternalStore(e,t,a)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,a,n){var r=a?a.call(n,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(r=a?a.call(n,u,d,c):void 0)||void 0===r&&u!==d)return!1}return!0}},391:(e,t,a)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=a(4)},497:(e,t,a)=>{"use strict";var n=a(218);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,o,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return a.PropTypes=a,a}},579:(e,t,a)=>{"use strict";e.exports=a(799)},672:(e,t,a)=>{"use strict";var n=a(43);function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(r(299));return function(e,t,a){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==n?null:""+n,children:e,containerInfo:t,implementation:a}}(e,t,null,a)},t.flushSync=function(e){var t=s.T,a=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=a,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var a=t.as,n=c(a,t.crossOrigin),r="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===a?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:r,fetchPriority:o}):"script"===a&&i.d.X(e,{crossOrigin:n,integrity:r,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var a=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:a,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var a=t.as,n=c(a,t.crossOrigin);i.d.L(e,a,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var a=c(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:a,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,a){return s.H.useFormState(e,t,a)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(e,t,n){var r=null;if(void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),"key"in t)for(var o in n={},t)"key"!==o&&(n[o]=t[o]);else n=t;return t=n.ref,{$$typeof:a,type:e,key:r,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=r,t.jsxs=r},853:(e,t,a)=>{"use strict";e.exports=a(896)},896:(e,t)=>{"use strict";function a(e,t){var a=e.length;e.push(t);e:for(;0<a;){var n=a-1>>>1,r=e[n];if(!(0<o(r,t)))break e;e[n]=t,e[a]=r,a=n}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var n=0,r=e.length,i=r>>>1;n<i;){var l=2*(n+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,a))c<r&&0>o(u,s)?(e[n]=u,e[c]=a,n=c):(e[n]=s,e[l]=a,n=l);else{if(!(c<r&&0>o(u,a)))break e;e[n]=u,e[c]=a,n=c}}}return t}function o(e,t){var a=e.sortIndex-t.sortIndex;return 0!==a?a:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,m=!1,h=!1,g=!1,v=!1,b="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=n(u);null!==t;){if(null===t.callback)r(u);else{if(!(t.startTime<=e))break;r(u),t.sortIndex=t.expirationTime,a(c,t)}t=n(u)}}function S(e){if(g=!1,w(e),!h)if(null!==n(c))h=!0,E||(E=!0,k());else{var t=n(u);null!==t&&M(S,t.startTime-e)}}var k,E=!1,P=-1,C=5,j=-1;function T(){return!!v||!(t.unstable_now()-j<C)}function z(){if(v=!1,E){var e=t.unstable_now();j=e;var a=!0;try{e:{h=!1,g&&(g=!1,y(P),P=-1),m=!0;var o=p;try{t:{for(w(e),f=n(c);null!==f&&!(f.expirationTime>e&&T());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,w(e),a=!0;break t}f===n(c)&&r(c),w(e)}else r(c);f=n(c)}if(null!==f)a=!0;else{var s=n(u);null!==s&&M(S,s.startTime-e),a=!1}}break e}finally{f=null,p=o,m=!1}a=void 0}}finally{a?k():E=!1}}}if("function"===typeof x)k=function(){x(z)};else if("undefined"!==typeof MessageChannel){var _=new MessageChannel,R=_.port2;_.port1.onmessage=z,k=function(){R.postMessage(null)}}else k=function(){b(z,0)};function M(e,a){P=b(function(){e(t.unstable_now())},a)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var a=p;p=t;try{return e()}finally{p=a}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=p;p=e;try{return t()}finally{p=a}},t.unstable_scheduleCallback=function(e,r,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:r,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,a(u,e),null===n(c)&&e===n(u)&&(g?(y(P),P=-1):g=!0,M(S,o-i))):(e.sortIndex=l,a(c,e),h||m||(h=!0,E||(E=!0,k()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var a=p;p=t;try{return e.apply(this,arguments)}finally{p=a}}}},950:(e,t,a)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=a(672)}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((t,n)=>(a.f[n](e,t),t),[])),a.u=e=>"static/js/"+e+".a37f736a.chunk.js",a.miniCssF=e=>{},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="wrtmind-react:";a.l=(n,r,o,i)=>{if(e[n])e[n].push(r);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[r];var f=(t,a)=>{l.onerror=l.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach(e=>e(a)),t)return t(a)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{var e={792:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((a,n)=>r=e[t]=[a,n]);n.push(r[2]=o);var i=a.p+a.u(t),l=new Error;a.l(i,n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}},"chunk-"+t,t)}};var t=(t,n)=>{var r,o,i=n[0],l=n[1],s=n[2],c=0;if(i.some(t=>0!==e[t])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)s(a)}for(t&&t(n);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkwrtmind_react=self.webpackChunkwrtmind_react||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.nc=void 0,(()=>{"use strict";var e=a(43),t=a(391);var n=function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};Object.create;function r(e,t,a){if(a||2===arguments.length)for(var n,r=0,o=t.length;r<o;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=a(324),i=a.n(o),l="-ms-",s="-moz-",c="-webkit-",u="comm",d="rule",f="decl",p="@keyframes",m=Math.abs,h=String.fromCharCode,g=Object.assign;function v(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,a){return e.replace(t,a)}function x(e,t,a){return e.indexOf(t,a)}function w(e,t){return 0|e.charCodeAt(t)}function S(e,t,a){return e.slice(t,a)}function k(e){return e.length}function E(e){return e.length}function P(e,t){return t.push(e),e}function C(e,t){return e.filter(function(e){return!b(e,t)})}var j=1,T=1,z=0,_=0,R=0,M="";function A(e,t,a,n,r,o,i,l){return{value:e,root:t,parent:a,type:n,props:r,children:o,line:j,column:T,length:i,return:"",siblings:l}}function N(e,t){return g(A("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=N(e.root,{children:[e]});P(e,e.siblings)}function O(){return R=_>0?w(M,--_):0,T--,10===R&&(T=1,j--),R}function F(){return R=_<z?w(M,_++):0,T++,10===R&&(T=1,j++),R}function I(){return w(M,_)}function D(){return _}function q(e,t){return S(M,e,t)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return j=T=1,z=k(M=e),_=0,[]}function U(e){return M="",e}function H(e){return v(q(_-1,G(91===e?e+2:40===e?e+1:e)))}function W(e){for(;(R=I())&&R<33;)F();return $(e)>2||$(R)>3?"":" "}function V(e,t){for(;--t&&F()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return q(e,D()+(t<6&&32==I()&&32==F()))}function G(e){for(;F();)switch(R){case e:return _;case 34:case 39:34!==e&&39!==e&&G(R);break;case 40:41===e&&G(e);break;case 92:F()}return _}function Y(e,t){for(;F()&&e+R!==57&&(e+R!==84||47!==I()););return"/*"+q(t,_-1)+"*"+h(47===e?e:F())}function K(e){for(;!$(I());)F();return q(e,_)}function Q(e,t){for(var a="",n=0;n<e.length;n++)a+=t(e[n],n,e,t)||"";return a}function X(e,t,a,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case u:return"";case p:return e.return=e.value+"{"+Q(e.children,n)+"}";case d:if(!k(e.value=e.props.join(",")))return""}return k(a=Q(e.children,n))?e.return=e.value+"{"+a+"}":""}function J(e,t,a){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+s+e+l+e+e;case 5936:switch(w(e,t+11)){case 114:return c+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+l+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+l+e+e;case 6165:return c+e+l+"flex-"+e+e;case 5187:return c+e+y(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return c+e+l+"flex-item-"+y(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":l+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return c+e+l+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+l+y(e,"shrink","negative")+e;case 5292:return c+e+l+y(e,"basis","preferred-size")+e;case 6060:return c+"box-"+y(e,"-grow","")+c+e+l+y(e,"grow","positive")+e;case 4554:return c+y(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!b(e,/flex-|baseline/))return l+"grid-column-align"+S(e,t)+e;break;case 2592:case 3360:return l+y(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(e,a){return t=a,b(e.props,/grid-\w+-end/)})?~x(e+(a=a[t].value),"span",0)?e:l+y(e,"-start","")+e+l+"grid-row-span:"+(~x(a,"span",0)?b(a,/\d+/):+b(a,/\d+/)-+b(e,/\d+/))+";":l+y(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(e){return b(e.props,/grid-\w+-start/)})?e:l+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+s+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch",0)?J(y(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,a,n,r,o,i,s){return l+a+":"+n+s+(r?l+a+"-span:"+(o?i:+i-+n)+s:"")+e});case 4949:if(121===w(e,t+6))return y(e,":",":"+c)+e;break;case 6444:switch(w(e,45===w(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===w(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+l+"$2box$3")+e;case 100:return y(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function Z(e,t,a,n){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=J(e.value,e.length,a));case p:return Q([N(e,{value:y(e.value,"@","@"+c)})],n);case d:if(e.length)return function(e,t){return e.map(t).join("")}(a=e.props,function(t){switch(b(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":L(N(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),L(N(e,{props:[t]})),g(e,{props:C(a,n)});break;case"::placeholder":L(N(e,{props:[y(t,/:(plac\w+)/,":"+c+"input-$1")]})),L(N(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),L(N(e,{props:[y(t,/:(plac\w+)/,l+"input-$1")]})),L(N(e,{props:[t]})),g(e,{props:C(a,n)})}return""})}}function ee(e){return U(te("",null,null,null,[""],e=B(e),0,[0],e))}function te(e,t,a,n,r,o,i,l,s){for(var c=0,u=0,d=i,f=0,p=0,g=0,v=1,b=1,S=1,E=0,C="",j=r,T=o,z=n,_=C;b;)switch(g=E,E=F()){case 40:if(108!=g&&58==w(_,d-1)){-1!=x(_+=y(H(E),"&","&\f"),"&\f",m(c?l[c-1]:0))&&(S=-1);break}case 34:case 39:case 91:_+=H(E);break;case 9:case 10:case 13:case 32:_+=W(g);break;case 92:_+=V(D()-1,7);continue;case 47:switch(I()){case 42:case 47:P(ne(Y(F(),D()),t,a,s),s);break;default:_+="/"}break;case 123*v:l[c++]=k(_)*S;case 125*v:case 59:case 0:switch(E){case 0:case 125:b=0;case 59+u:-1==S&&(_=y(_,/\f/g,"")),p>0&&k(_)-d&&P(p>32?re(_+";",n,a,d-1,s):re(y(_," ","")+";",n,a,d-2,s),s);break;case 59:_+=";";default:if(P(z=ae(_,t,a,c,u,r,l,C,j=[],T=[],d,o),o),123===E)if(0===u)te(_,t,z,z,j,o,d,l,T);else switch(99===f&&110===w(_,3)?100:f){case 100:case 108:case 109:case 115:te(e,z,z,n&&P(ae(e,z,z,0,0,r,l,C,r,j=[],d,T),T),r,T,d,l,n?j:T);break;default:te(_,z,z,z,[""],T,0,l,T)}}c=u=p=0,v=S=1,C=_="",d=i;break;case 58:d=1+k(_),p=g;default:if(v<1)if(123==E)--v;else if(125==E&&0==v++&&125==O())continue;switch(_+=h(E),E*v){case 38:S=u>0?1:(_+="\f",-1);break;case 44:l[c++]=(k(_)-1)*S,S=1;break;case 64:45===I()&&(_+=H(F())),f=I(),u=d=k(C=_+=K(D())),E++;break;case 45:45===g&&2==k(_)&&(v=0)}}return o}function ae(e,t,a,n,r,o,i,l,s,c,u,f){for(var p=r-1,h=0===r?o:[""],g=E(h),b=0,x=0,w=0;b<n;++b)for(var k=0,P=S(e,p+1,p=m(x=i[b])),C=e;k<g;++k)(C=v(x>0?h[k]+" "+P:y(P,/&\f/g,h[k])))&&(s[w++]=C);return A(e,t,a,0===r?d:l,s,c,u,f)}function ne(e,t,a,n){return A(e,t,a,u,h(R),S(e,2,-2),0,n)}function re(e,t,a,n,r){return A(e,t,a,f,S(e,0,n),S(e,n+1,-1),n,r)}var oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ie="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ce="6.1.19",ue="/*!sc*/\n",de="undefined"!=typeof window&&"undefined"!=typeof document,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY)),pe={},me=(new Set,Object.freeze([])),he=Object.freeze({});function ge(e,t,a){return void 0===a&&(a=he),e.theme!==a.theme&&e.theme||t||a.theme}var ve=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function xe(e){return e.replace(be,"-").replace(ye,"")}var we=/(a)(d)/gi,Se=function(e){return String.fromCharCode(e+(e>25?39:97))};function ke(e){var t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Se(t%52)+a;return(Se(t%52)+a).replace(we,"$1-$2")}var Ee,Pe=function(e,t){for(var a=t.length;a;)e=33*e^t.charCodeAt(--a);return e},Ce=function(e){return Pe(5381,e)};function je(e){return ke(Ce(e)>>>0)}function Te(e){return e.displayName||e.name||"Component"}function ze(e){return"string"==typeof e&&!0}var _e="function"==typeof Symbol&&Symbol.for,Re=_e?Symbol.for("react.memo"):60115,Me=_e?Symbol.for("react.forward_ref"):60112,Ae={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ne={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Le={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oe=((Ee={})[Me]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[Re]=Le,Ee);function Fe(e){return("type"in(t=e)&&t.type.$$typeof)===Re?Le:"$$typeof"in e?Oe[e.$$typeof]:Ae;var t}var Ie=Object.defineProperty,De=Object.getOwnPropertyNames,qe=Object.getOwnPropertySymbols,$e=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,Ue=Object.prototype;function He(e,t,a){if("string"!=typeof t){if(Ue){var n=Be(t);n&&n!==Ue&&He(e,n,a)}var r=De(t);qe&&(r=r.concat(qe(t)));for(var o=Fe(e),i=Fe(t),l=0;l<r.length;++l){var s=r[l];if(!(s in Ne||a&&a[s]||i&&s in i||o&&s in o)){var c=$e(t,s);try{Ie(e,s,c)}catch(e){}}}}return e}function We(e){return"function"==typeof e}function Ve(e){return"object"==typeof e&&"styledComponentId"in e}function Ge(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ye(e,t){if(0===e.length)return"";for(var a=e[0],n=1;n<e.length;n++)a+=t?t+e[n]:e[n];return a}function Ke(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qe(e,t,a){if(void 0===a&&(a=!1),!a&&!Ke(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Qe(e[n],t[n]);else if(Ke(t))for(var n in t)e[n]=Qe(e[n],t[n]);return e}function Xe(e,t){Object.defineProperty(e,"toString",{value:t})}function Je(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,a=0;a<e;a++)t+=this.groupSizes[a];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var a=this.groupSizes,n=a.length,r=n;e>=r;)if((r<<=1)<0)throw Je(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(a),this.length=r;for(var o=n;o<r;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],a=this.indexOfGroup(e),n=a+t;this.groupSizes[e]=0;for(var r=a;r<n;r++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var a=this.groupSizes[e],n=this.indexOfGroup(e),r=n+a,o=n;o<r;o++)t+="".concat(this.tag.getRule(o)).concat(ue);return t},e}(),et=new Map,tt=new Map,at=1,nt=function(e){if(et.has(e))return et.get(e);for(;tt.has(at);)at++;var t=at++;return et.set(e,t),tt.set(t,e),t},rt=function(e,t){at=t+1,et.set(e,t),tt.set(t,e)},ot="style[".concat(ie,"][").concat(se,'="').concat(ce,'"]'),it=new RegExp("^".concat(ie,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,a){for(var n,r=a.split(","),o=0,i=r.length;o<i;o++)(n=r[o])&&e.registerName(t,n)},st=function(e,t){for(var a,n=(null!==(a=t.textContent)&&void 0!==a?a:"").split(ue),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var s=l.match(it);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(rt(u,c),lt(e,u,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(l)}}},ct=function(e){for(var t=document.querySelectorAll(ot),a=0,n=t.length;a<n;a++){var r=t[a];r&&r.getAttribute(ie)!==le&&(st(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function ut(){return a.nc}var dt=function(e){var t=document.head,a=e||t,n=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ie,"]")));return t[t.length-1]}(a),o=void 0!==r?r.nextSibling:null;n.setAttribute(ie,le),n.setAttribute(se,ce);var i=ut();return i&&n.setAttribute("nonce",i),a.insertBefore(n,o),n},ft=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,a=0,n=t.length;a<n;a++){var r=t[a];if(r.ownerNode===e)return r}throw Je(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),pt=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),mt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ht=de,gt={isServer:!de,useCSSOMInjection:!fe},vt=function(){function e(e,t,a){void 0===e&&(e=he),void 0===t&&(t={});var r=this;this.options=n(n({},gt),e),this.gs=t,this.names=new Map(a),this.server=!!e.isServer,!this.server&&de&&ht&&(ht=!1,ct(this)),Xe(this,function(){return function(e){for(var t=e.getTag(),a=t.length,n="",r=function(a){var r=function(e){return tt.get(e)}(a);if(void 0===r)return"continue";var o=e.names.get(r),i=t.getGroup(a);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(ie,".g").concat(a,'[id="').concat(r,'"]'),s="";void 0!==o&&o.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),n+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(ue)},o=0;o<a;o++)r(o);return n}(r)})}return e.registerId=function(e){return nt(e)},e.prototype.rehydrate=function(){!this.server&&de&&ct(this)},e.prototype.reconstructWithOptions=function(t,a){return void 0===a&&(a=!0),new e(n(n({},this.options),t),this.gs,a&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,a=e.target;return e.isServer?new mt(a):t?new ft(a):new pt(a)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var a=new Set;a.add(t),this.names.set(e,a)}},e.prototype.insertRules=function(e,t,a){this.registerName(e,t),this.getTag().insertRules(nt(e),a)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,yt=/^\s*\/\/.*$/gm;function xt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e})}function wt(e){var t,a,n,r=void 0===e?he:e,o=r.options,i=void 0===o?he:o,l=r.plugins,s=void 0===l?me:l,c=function(e,n,r){return r.startsWith(a)&&r.endsWith(a)&&r.replaceAll(a,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,a).replace(n,c))}),i.prefix&&u.push(Z),u.push(X);var f=function(e,r,o,l){void 0===r&&(r=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,a=r,n=new RegExp("\\".concat(a,"\\b"),"g");var s=e.replace(yt,""),c=ee(o||r?"".concat(o," ").concat(r," { ").concat(s," }"):s);i.namespace&&(c=xt(c,i.namespace));var d,f=[];return Q(c,function(e){var t=E(e);return function(a,n,r,o){for(var i="",l=0;l<t;l++)i+=e[l](a,n,r,o)||"";return i}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=s.length?s.reduce(function(e,t){return t.name||Je(15),Pe(e,t.name)},5381).toString():"",f}var St=new vt,kt=wt(),Et=e.createContext({shouldForwardProp:void 0,styleSheet:St,stylis:kt}),Pt=(Et.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(Et)}function jt(t){var a=(0,e.useState)(t.stylisPlugins),n=a[0],r=a[1],o=Ct().styleSheet,l=(0,e.useMemo)(function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,o]),s=(0,e.useMemo)(function(){return wt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);(0,e.useEffect)(function(){i()(n,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var c=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:s}},[t.shouldForwardProp,l,s]);return e.createElement(Et.Provider,{value:c},e.createElement(Pt.Provider,{value:s},t.children))}var Tt=function(){function e(e,t){var a=this;this.inject=function(e,t){void 0===t&&(t=kt);var n=a.name+t.hash;e.hasNameForId(a.id,n)||e.insertRules(a.id,n,t(a.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Xe(this,function(){throw Je(12,String(a.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=kt),this.name+e.hash},e}(),zt=function(e){return e>="A"&&e<="Z"};function _t(e){for(var t="",a=0;a<e.length;a++){var n=e[a];if(1===a&&"-"===n&&"-"===e[0])return e;zt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Rt=function(e){return null==e||!1===e||""===e},Mt=function(e){var t,a,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Rt(i)&&(Array.isArray(i)&&i.isCss||We(i)?n.push("".concat(_t(o),":"),i,";"):Ke(i)?n.push.apply(n,r(r(["".concat(o," {")],Mt(i),!1),["}"],!1)):n.push("".concat(_t(o),": ").concat((t=o,null==(a=i)||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||t in oe||t.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return n};function At(e,t,a,n){return Rt(e)?[]:Ve(e)?[".".concat(e.styledComponentId)]:We(e)?!We(r=e)||r.prototype&&r.prototype.isReactComponent||!t?[e]:At(e(t),t,a,n):e instanceof Tt?a?(e.inject(a,n),[e.getName(n)]):[e]:Ke(e)?Mt(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map(function(e){return At(e,t,a,n)})):[e.toString()];var r}function Nt(e){for(var t=0;t<e.length;t+=1){var a=e[t];if(We(a)&&!Ve(a))return!1}return!0}var Lt=Ce(ce),Ot=function(){function e(e,t,a){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===a||a.isStatic)&&Nt(e),this.componentId=t,this.baseHash=Pe(Lt,t),this.baseStyle=a,vt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,a){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ge(n,this.staticRulesId);else{var r=Ye(At(this.rules,e,t,a)),o=ke(Pe(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=a(r,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}n=Ge(n,o),this.staticRulesId=o}else{for(var l=Pe(this.baseHash,a.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Ye(At(u,e,t,a));l=Pe(l,d+c),s+=d}}if(s){var f=ke(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,a(s,".".concat(f),void 0,this.componentId)),n=Ge(n,f)}}return n},e}(),Ft=e.createContext(void 0);Ft.Consumer;var It={};new Set;function Dt(t,a,r){var o=Ve(t),i=t,l=!ze(t),s=a.attrs,c=void 0===s?me:s,u=a.componentId,d=void 0===u?function(e,t){var a="string"!=typeof e?"sc":xe(e);It[a]=(It[a]||0)+1;var n="".concat(a,"-").concat(je(ce+a+It[a]));return t?"".concat(t,"-").concat(n):n}(a.displayName,a.parentComponentId):u,f=a.displayName,p=void 0===f?function(e){return ze(e)?"styled.".concat(e):"Styled(".concat(Te(e),")")}(t):f,m=a.displayName&&a.componentId?"".concat(xe(a.displayName),"-").concat(a.componentId):a.componentId||d,h=o&&i.attrs?i.attrs.concat(c).filter(Boolean):c,g=a.shouldForwardProp;if(o&&i.shouldForwardProp){var v=i.shouldForwardProp;if(a.shouldForwardProp){var b=a.shouldForwardProp;g=function(e,t){return v(e,t)&&b(e,t)}}else g=v}var y=new Ot(r,m,o?i.componentStyle:void 0);function x(t,a){return function(t,a,r){var o=t.attrs,i=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Ft),f=Ct(),p=t.shouldForwardProp||f.shouldForwardProp,m=ge(a,d,l)||he,h=function(e,t,a){for(var r,o=n(n({},t),{className:void 0,theme:a}),i=0;i<e.length;i+=1){var l=We(r=e[i])?r(o):r;for(var s in l)o[s]="className"===s?Ge(o[s],l[s]):"style"===s?n(n({},o[s]),l[s]):l[s]}return t.className&&(o.className=Ge(o.className,t.className)),o}(o,a,m),g=h.as||u,v={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===m||("forwardedAs"===b?v.as=h.forwardedAs:p&&!p(b,g)||(v[b]=h[b]));var y=function(e,t){var a=Ct();return e.generateAndInjectStyles(t,a.styleSheet,a.stylis)}(i,h),x=Ge(s,c);return y&&(x+=" "+y),h.className&&(x+=" "+h.className),v[ze(g)&&!ve.has(g)?"class":"className"]=x,r&&(v.ref=r),(0,e.createElement)(g,v)}(w,t,a)}x.displayName=p;var w=e.forwardRef(x);return w.attrs=h,w.componentStyle=y,w.displayName=p,w.shouldForwardProp=g,w.foldedComponentIds=o?Ge(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=m,w.target=o?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];for(var n=0,r=t;n<r.length;n++)Qe(e,r[n],!0);return e}({},i.defaultProps,e):e}}),Xe(w,function(){return".".concat(w.styledComponentId)}),l&&He(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function qt(e,t){for(var a=[e[0]],n=0,r=t.length;n<r;n+=1)a.push(t[n],e[n+1]);return a}var $t=function(e){return Object.assign(e,{isCss:!0})};function Bt(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];if(We(e)||Ke(e))return $t(At(qt(me,r([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?At(n):$t(At(qt(n,t)))}function Ut(e,t,a){if(void 0===a&&(a=he),!t)throw Je(1,t);var o=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,a,Bt.apply(void 0,r([n],o,!1)))};return o.attrs=function(r){return Ut(e,t,n(n({},a),{attrs:Array.prototype.concat(a.attrs,r).filter(Boolean)}))},o.withConfig=function(r){return Ut(e,t,n(n({},a),r))},o}var Ht=function(e){return Ut(Dt,e)},Wt=Ht;ve.forEach(function(e){Wt[e]=Ht(e)});var Vt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Nt(e),vt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,a,n){var r=n(Ye(At(this.rules,t,a,n)),""),o=this.componentId+e;a.insertRules(o,o,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,a,n){e>2&&vt.registerId(this.componentId+e),this.removeStyles(e,a),this.createStyles(e,t,a,n)},e}();function Gt(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];var n=Ye(Bt.apply(void 0,r([e],t,!1))),o=je(n);return new Tt(o,n)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var a=ut(),n=Ye([a&&'nonce="'.concat(a,'"'),"".concat(ie,'="true"'),"".concat(se,'="').concat(ce,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Je(2);return t._emitSheetCSS()},this.getStyleElement=function(){var a;if(t.sealed)throw Je(2);var r=t.instance.toString();if(!r)return[];var o=((a={})[ie]="",a[se]=ce,a.dangerouslySetInnerHTML={__html:r},a),i=ut();return i&&(o.nonce=i),[e.createElement("style",n({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new vt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Je(2);return e.createElement(jt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Je(3)}})(),"__sc-".concat(ie,"__");function Yt(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Kt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Qt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Kt(Object(a),!0).forEach(function(t){Yt(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Kt(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}const Xt=()=>{};let Jt={},Zt={},ea=null,ta={mark:Xt,measure:Xt};try{"undefined"!==typeof window&&(Jt=window),"undefined"!==typeof document&&(Zt=document),"undefined"!==typeof MutationObserver&&(ea=MutationObserver),"undefined"!==typeof performance&&(ta=performance)}catch(vf){}const{userAgent:aa=""}=Jt.navigator||{},na=Jt,ra=Zt,oa=ea,ia=ta,la=(na.document,!!ra.documentElement&&!!ra.head&&"function"===typeof ra.addEventListener&&"function"===typeof ra.createElement),sa=~aa.indexOf("MSIE")||~aa.indexOf("Trident/");var ca={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ua=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],da="classic",fa="duotone",pa=[da,fa,"sharp","sharp-duotone"],ma=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ha=["fak","fa-kit","fakd","fa-kit-duotone"],ga={fak:"kit","fa-kit":"kit"},va={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},ba=["fak","fakd"],ya={kit:"fak"},xa={"kit-duotone":"fakd"},wa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sa=["fak","fa-kit","fakd","fa-kit-duotone"],ka={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ea=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Pa=[1,2,3,4,5,6,7,8,9,10],Ca=Pa.concat([11,12,13,14,15,16,17,18,19,20]),ja=[...Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wa.GROUP,wa.SWAP_OPACITY,wa.PRIMARY,wa.SECONDARY].concat(Pa.map(e=>"".concat(e,"x"))).concat(Ca.map(e=>"w-".concat(e)));const Ta="___FONT_AWESOME___",za=16,_a="svg-inline--fa",Ra="data-fa-i2svg",Ma="data-fa-pseudo-element",Aa="data-prefix",Na="data-icon",La="fontawesome-i2svg",Oa=["HTML","HEAD","STYLE","SCRIPT"],Fa=(()=>{try{return!0}catch(e){return!1}})();function Ia(e){return new Proxy(e,{get:(e,t)=>t in e?e[t]:e[da]})}const Da=Qt({},ca);Da[da]=Qt(Qt(Qt(Qt({},{"fa-duotone":"duotone"}),ca[da]),ga),va);const qa=Ia(Da),$a=Qt({},{classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}});$a[da]=Qt(Qt(Qt(Qt({},{duotone:"fad"}),$a[da]),ya),xa);const Ba=Ia($a),Ua=Qt({},ka);Ua[da]=Qt(Qt({},Ua[da]),{fak:"fa-kit"});const Ha=Ia(Ua),Wa=Qt({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}});Wa[da]=Qt(Qt({},Wa[da]),{"fa-kit":"fak"});Ia(Wa);const Va=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ga="fa-layers-text",Ya=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ka=(Ia(Qt({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}})),["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"]),Qa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xa=["kit",...ja],Ja=na.FontAwesomeConfig||{};if(ra&&"function"===typeof ra.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,a]=e;const n=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=ra.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t));void 0!==n&&null!==n&&(Ja[a]=n)})}const Za={styleDefault:"solid",familyDefault:da,cssPrefix:"fa",replacementClass:_a,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ja.familyPrefix&&(Ja.cssPrefix=Ja.familyPrefix);const en=Qt(Qt({},Za),Ja);en.autoReplaceSvg||(en.observeMutations=!1);const tn={};Object.keys(Za).forEach(e=>{Object.defineProperty(tn,e,{enumerable:!0,set:function(t){en[e]=t,an.forEach(e=>e(tn))},get:function(){return en[e]}})}),Object.defineProperty(tn,"familyPrefix",{enumerable:!0,set:function(e){en.cssPrefix=e,an.forEach(e=>e(tn))},get:function(){return en.cssPrefix}}),na.FontAwesomeConfig=tn;const an=[];const nn=za,rn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function on(){let e=12,t="";for(;e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function ln(e){const t=[];for(let a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function sn(e){return e.classList?ln(e.classList):(e.getAttribute("class")||"").split(" ").filter(e=>e)}function cn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function un(e){return Object.keys(e||{}).reduce((t,a)=>t+"".concat(a,": ").concat(e[a].trim(),";"),"")}function dn(e){return e.size!==rn.size||e.x!==rn.x||e.y!==rn.y||e.rotate!==rn.rotate||e.flipX||e.flipY}function fn(){const e="fa",t=_a,a=tn.cssPrefix,n=tn.replacementClass;let r=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';if(a!==e||n!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(l,".".concat(n))}return r}let pn=!1;function mn(){tn.autoAddCss&&!pn&&(!function(e){if(!e||!la)return;const t=ra.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const a=ra.head.childNodes;let n=null;for(let r=a.length-1;r>-1;r--){const e=a[r],t=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(n=e)}ra.head.insertBefore(t,n)}(fn()),pn=!0)}var hn={mixout:()=>({dom:{css:fn,insertCss:mn}}),hooks:()=>({beforeDOMElementCreation(){mn()},beforeI2svg(){mn()}})};const gn=na||{};gn[Ta]||(gn[Ta]={}),gn[Ta].styles||(gn[Ta].styles={}),gn[Ta].hooks||(gn[Ta].hooks={}),gn[Ta].shims||(gn[Ta].shims=[]);var vn=gn[Ta];const bn=[],yn=function(){ra.removeEventListener("DOMContentLoaded",yn),xn=1,bn.map(e=>e())};let xn=!1;function wn(e){const{tag:t,attributes:a={},children:n=[]}=e;return"string"===typeof e?cn(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce((t,a)=>t+"".concat(a,'="').concat(cn(e[a]),'" '),"").trim()}(a),">").concat(n.map(wn).join(""),"</").concat(t,">")}function Sn(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}la&&(xn=(ra.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ra.readyState),xn||ra.addEventListener("DOMContentLoaded",yn));var kn=function(e,t,a,n){var r,o,i,l=Object.keys(e),s=l.length,c=void 0!==n?function(e,t){return function(a,n,r,o){return e.call(t,a,n,r,o)}}(t,n):t;for(void 0===a?(r=1,i=e[l[0]]):(r=0,i=a);r<s;r++)i=c(i,e[o=l[r]],o,e);return i};function En(e){const t=function(e){const t=[];let a=0;const n=e.length;for(;a<n;){const r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){const n=e.charCodeAt(a++);56320==(64512&n)?t.push(((1023&r)<<10)+(1023&n)+65536):(t.push(r),a--)}else t.push(r)}return t}(e);return 1===t.length?t[0].toString(16):null}function Pn(e){return Object.keys(e).reduce((t,a)=>{const n=e[a];return!!n.icon?t[n.iconName]=n.icon:t[a]=n,t},{})}function Cn(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{skipHooks:n=!1}=a,r=Pn(t);"function"!==typeof vn.hooks.addPack||n?vn.styles[e]=Qt(Qt({},vn.styles[e]||{}),r):vn.hooks.addPack(e,Pn(t)),"fas"===e&&Cn("fa",t)}const{styles:jn,shims:Tn}=vn,zn=Object.keys(Ha),_n=zn.reduce((e,t)=>(e[t]=Object.keys(Ha[t]),e),{});let Rn=null,Mn={},An={},Nn={},Ln={},On={};function Fn(e,t){const a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n!==e||""===r||(o=r,~Xa.indexOf(o))?null:r;var o}const In=()=>{const e=e=>kn(jn,(t,a,n)=>(t[n]=kn(a,e,{}),t),{});Mn=e((e,t,a)=>{if(t[3]&&(e[t[3]]=a),t[2]){t[2].filter(e=>"number"===typeof e).forEach(t=>{e[t.toString(16)]=a})}return e}),An=e((e,t,a)=>{if(e[a]=a,t[2]){t[2].filter(e=>"string"===typeof e).forEach(t=>{e[t]=a})}return e}),On=e((e,t,a)=>{const n=t[2];return e[a]=a,n.forEach(t=>{e[t]=a}),e});const t="far"in jn||tn.autoFetchSvg,a=kn(Tn,(e,a)=>{const n=a[0];let r=a[1];const o=a[2];return"far"!==r||t||(r="fas"),"string"===typeof n&&(e.names[n]={prefix:r,iconName:o}),"number"===typeof n&&(e.unicodes[n.toString(16)]={prefix:r,iconName:o}),e},{names:{},unicodes:{}});Nn=a.names,Ln=a.unicodes,Rn=Hn(tn.styleDefault,{family:tn.familyDefault})};var Dn;function qn(e,t){return(Mn[e]||{})[t]}function $n(e,t){return(On[e]||{})[t]}function Bn(e){return Nn[e]||{prefix:null,iconName:null}}function Un(){return Rn}Dn=e=>{Rn=Hn(e.styleDefault,{family:tn.familyDefault})},an.push(Dn),In();function Hn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{family:a=da}=t,n=qa[a][e];if(a===fa&&!e)return"fad";const r=Ba[a][e]||Ba[a][n],o=e in vn.styles?e:null;return r||o||null}function Wn(e){return e.sort().filter((e,t,a)=>a.indexOf(e)===t)}function Vn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{skipLookups:a=!1}=t;let n=null;const r=Ea.concat(Sa),o=Wn(e.filter(e=>r.includes(e))),i=Wn(e.filter(e=>!Ea.includes(e))),l=o.filter(e=>(n=e,!ua.includes(e))),[s=null]=l,c=function(e){let t=da;const a=zn.reduce((e,t)=>(e[t]="".concat(tn.cssPrefix,"-").concat(t),e),{});return pa.forEach(n=>{(e.includes(a[n])||e.some(e=>_n[n].includes(e)))&&(t=n)}),t}(o),u=Qt(Qt({},function(e){let t=[],a=null;return e.forEach(e=>{const n=Fn(tn.cssPrefix,e);n?a=n:e&&t.push(e)}),{iconName:a,rest:t}}(i)),{},{prefix:Hn(s,{family:c})});return Qt(Qt(Qt({},u),function(e){const{values:t,family:a,canonical:n,givenPrefix:r="",styles:o={},config:i={}}=e,l=a===fa,s=t.includes("fa-duotone")||t.includes("fad"),c="duotone"===i.familyDefault,u="fad"===n.prefix||"fa-duotone"===n.prefix;!l&&(s||c||u)&&(n.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab");if(!n.prefix&&Gn.includes(a)){if(Object.keys(o).find(e=>Yn.includes(e))||i.autoFetchSvg){const e=ma.get(a).defaultShortPrefixId;n.prefix=e,n.iconName=$n(n.prefix,n.iconName)||n.iconName}}"fa"!==n.prefix&&"fa"!==r||(n.prefix=Un()||"fas");return n}({values:e,family:c,styles:jn,config:tn,canonical:u,givenPrefix:n})),function(e,t,a){let{prefix:n,iconName:r}=a;if(e||!n||!r)return{prefix:n,iconName:r};const o="fa"===t?Bn(r):{},i=$n(n,r);r=o.iconName||i||r,n=o.prefix||n,"far"!==n||jn.far||!jn.fas||tn.autoFetchSvg||(n="fas");return{prefix:n,iconName:r}}(a,n,u))}const Gn=pa.filter(e=>e!==da||e!==fa),Yn=Object.keys(ka).filter(e=>e!==da).map(e=>Object.keys(ka[e])).flat();let Kn=[],Qn={};const Xn={},Jn=Object.keys(Xn);function Zn(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return(Qn[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function er(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];(Qn[e]||[]).forEach(e=>{e.apply(null,a)})}function tr(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Xn[e]?Xn[e].apply(null,t):void 0}function ar(e){"fa"===e.prefix&&(e.prefix="fas");let{iconName:t}=e;const a=e.prefix||Un();if(t)return t=$n(a,t)||t,Sn(nr.definitions,a,t)||Sn(vn.styles,a,t)}const nr=new class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];const n=t.reduce(this._pullDefinitions,{});Object.keys(n).forEach(e=>{this.definitions[e]=Qt(Qt({},this.definitions[e]||{}),n[e]),Cn(e,n[e]);const t=Ha[da][e];t&&Cn(t,n[e]),In()})}reset(){this.definitions={}}_pullDefinitions(e,t){const a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(t=>{const{prefix:n,iconName:r,icon:o}=a[t],i=o[2];e[n]||(e[n]={}),i.length>0&&i.forEach(t=>{"string"===typeof t&&(e[n][t]=o)}),e[n][r]=o}),e}},rr={i2svg:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return la?(er("beforeI2svg",e),tr("pseudoElements2svg",e),tr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;var a;!1===tn.autoReplaceSvg&&(tn.autoReplaceSvg=!0),tn.observeMutations=!0,a=()=>{lr({autoReplaceSvgRoot:t}),er("watch",e)},la&&(xn?setTimeout(a,0):bn.push(a))}},or={icon:e=>{if(null===e)return null;if("object"===typeof e&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$n(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){const t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],a=Hn(e[0]);return{prefix:a,iconName:$n(a,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(tn.cssPrefix,"-"))>-1||e.match(Va))){const t=Vn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Un(),iconName:$n(t.prefix,t.iconName)||t.iconName}}if("string"===typeof e){const t=Un();return{prefix:t,iconName:$n(t,e)||e}}}},ir={noAuto:()=>{tn.autoReplaceSvg=!1,tn.observeMutations=!1,er("noAuto")},config:tn,dom:rr,parse:or,library:nr,findIconDefinition:ar,toHtml:wn},lr=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t=ra}=e;(Object.keys(vn.styles).length>0||tn.autoFetchSvg)&&la&&tn.autoReplaceSvg&&ir.dom.i2svg({node:t})};function sr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>wn(e))}}),Object.defineProperty(e,"node",{get:function(){if(!la)return;const t=ra.createElement("div");return t.innerHTML=e.html,t.children}}),e}function cr(e){const{icons:{main:t,mask:a},prefix:n,iconName:r,transform:o,symbol:i,title:l,maskId:s,titleId:c,extra:u,watchable:d=!1}=e,{width:f,height:p}=a.found?a:t,m=ba.includes(n),h=[tn.replacementClass,r?"".concat(tn.cssPrefix,"-").concat(r):""].filter(e=>-1===u.classes.indexOf(e)).filter(e=>""!==e||!!e).concat(u.classes).join(" ");let g={children:[],attributes:Qt(Qt({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:h,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)})};const v=m&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};d&&(g.attributes[Ra]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||on())},children:[l]}),delete g.attributes.title);const b=Qt(Qt({},g),{},{prefix:n,iconName:r,main:t,mask:a,maskId:s,transform:o,symbol:i,styles:Qt(Qt({},v),u.styles)}),{children:y,attributes:x}=a.found&&t.found?tr("generateAbstractMask",b)||{children:[],attributes:{}}:tr("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=y,b.attributes=x,i?function(e){let{prefix:t,iconName:a,children:n,attributes:r,symbol:o}=e;const i=!0===o?"".concat(t,"-").concat(tn.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Qt(Qt({},r),{},{id:i}),children:n}]}]}(b):function(e){let{children:t,main:a,mask:n,attributes:r,styles:o,transform:i}=e;if(dn(i)&&a.found&&!n.found){const{width:e,height:t}=a,n={x:e/t/2,y:.5};r.style=un(Qt(Qt({},o),{},{"transform-origin":"".concat(n.x+i.x/16,"em ").concat(n.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}(b)}function ur(e){const{content:t,width:a,height:n,transform:r,title:o,extra:i,watchable:l=!1}=e,s=Qt(Qt(Qt({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(s[Ra]="");const c=Qt({},i.styles);dn(r)&&(c.transform=function(e){let{transform:t,width:a=za,height:n=za,startCentered:r=!1}=e,o="";return o+=r&&sa?"translate(".concat(t.x/nn-a/2,"em, ").concat(t.y/nn-n/2,"em) "):r?"translate(calc(-50% + ".concat(t.x/nn,"em), calc(-50% + ").concat(t.y/nn,"em)) "):"translate(".concat(t.x/nn,"em, ").concat(t.y/nn,"em) "),o+="scale(".concat(t.size/nn*(t.flipX?-1:1),", ").concat(t.size/nn*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}({transform:r,startCentered:!0,width:a,height:n}),c["-webkit-transform"]=c.transform);const u=un(c);u.length>0&&(s.style=u);const d=[];return d.push({tag:"span",attributes:s,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}const{styles:dr}=vn;function fr(e){const t=e[0],a=e[1],[n]=e.slice(4);let r=null;return r=Array.isArray(n)?{tag:"g",attributes:{class:"".concat(tn.cssPrefix,"-").concat(Qa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(tn.cssPrefix,"-").concat(Qa.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(tn.cssPrefix,"-").concat(Qa.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:t,height:a,icon:r}}const pr={found:!1,width:512,height:512};function mr(e,t){let a=t;return"fa"===t&&null!==tn.styleDefault&&(t=Un()),new Promise((n,r)=>{if("fa"===a){const a=Bn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&dr[t]&&dr[t][e]){return n(fr(dr[t][e]))}!function(e,t){Fa||tn.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),n(Qt(Qt({},pr),{},{icon:tn.showMissingIcons&&e&&tr("missingIconAbstract")||{}}))})}const hr=()=>{},gr=tn.measurePerformance&&ia&&ia.mark&&ia.measure?ia:{mark:hr,measure:hr},vr='FA "6.7.2"',br=e=>{gr.mark("".concat(vr," ").concat(e," ends")),gr.measure("".concat(vr," ").concat(e),"".concat(vr," ").concat(e," begins"),"".concat(vr," ").concat(e," ends"))};var yr=e=>(gr.mark("".concat(vr," ").concat(e," begins")),()=>br(e));const xr=()=>{};function wr(e){return"string"===typeof(e.getAttribute?e.getAttribute(Ra):null)}function Sr(e){return ra.createElementNS("http://www.w3.org/2000/svg",e)}function kr(e){return ra.createElement(e)}function Er(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ceFn:a=("svg"===e.tag?Sr:kr)}=t;if("string"===typeof e)return ra.createTextNode(e);const n=a(e.tag);Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])});return(e.children||[]).forEach(function(e){n.appendChild(Er(e,{ceFn:a}))}),n}const Pr={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(Er(e),t)}),null===t.getAttribute(Ra)&&tn.keepOriginalSource){let e=ra.createComment(function(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){const t=e[0],a=e[1];if(~sn(t).indexOf(tn.replacementClass))return Pr.replace(e);const n=new RegExp("".concat(tn.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){const e=a[0].attributes.class.split(" ").reduce((e,t)=>(t===tn.replacementClass||t.match(n)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});a[0].attributes.class=e.toSvg.join(" "),0===e.toNode.length?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}const r=a.map(e=>wn(e)).join("\n");t.setAttribute(Ra,""),t.innerHTML=r}};function Cr(e){e()}function jr(e,t){const a="function"===typeof t?t:xr;if(0===e.length)a();else{let t=Cr;"async"===tn.mutateApproach&&(t=na.requestAnimationFrame||Cr),t(()=>{const t=!0===tn.autoReplaceSvg?Pr.replace:Pr[tn.autoReplaceSvg]||Pr.replace,n=yr("mutate");e.map(t),n(),a()})}}let Tr=!1;function zr(){Tr=!0}function _r(){Tr=!1}let Rr=null;function Mr(e){if(!oa)return;if(!tn.observeMutations)return;const{treeCallback:t=xr,nodeCallback:a=xr,pseudoElementsCallback:n=xr,observeMutationsRoot:r=ra}=e;Rr=new oa(e=>{if(Tr)return;const r=Un();ln(e).forEach(e=>{if("childList"===e.type&&e.addedNodes.length>0&&!wr(e.addedNodes[0])&&(tn.searchPseudoElements&&n(e.target),t(e.target)),"attributes"===e.type&&e.target.parentNode&&tn.searchPseudoElements&&n(e.target.parentNode),"attributes"===e.type&&wr(e.target)&&~Ka.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){const t=e.getAttribute?e.getAttribute(Aa):null,a=e.getAttribute?e.getAttribute(Na):null;return t&&a}(e.target)){const{prefix:t,iconName:a}=Vn(sn(e.target));e.target.setAttribute(Aa,t||r),a&&e.target.setAttribute(Na,a)}else(function(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(tn.replacementClass)})(e.target)&&a(e.target)})}),la&&Rr.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ar(e){const t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=void 0!==e.innerText?e.innerText.trim():"";let r=Vn(sn(e));return r.prefix||(r.prefix=Un()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=function(e,t){return(An[e]||{})[t]}(r.prefix,e.innerText)||qn(r.prefix,En(e.innerText))),!r.iconName&&tn.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Nr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0};const{iconName:a,prefix:n,rest:r}=Ar(e),o=function(e){const t=ln(e.attributes).reduce((e,t)=>("class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e),{}),a=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return tn.autoA11y&&(a?t["aria-labelledby"]="".concat(tn.replacementClass,"-title-").concat(n||on()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),i=Zn("parseNodeAttributes",{},e);let l=t.styleParser?function(e){const t=e.getAttribute("style");let a=[];return t&&(a=t.split(";").reduce((e,t)=>{const a=t.split(":"),n=a[0],r=a.slice(1);return n&&r.length>0&&(e[n]=r.join(":").trim()),e},{})),a}(e):[];return Qt({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:rn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},i)}const{styles:Lr}=vn;function Or(e){const t="nest"===tn.autoReplaceSvg?Nr(e,{styleParser:!1}):Nr(e);return~t.extra.classes.indexOf(Ga)?tr("generateLayersText",e,t):tr("generateSvgReplacementMutation",e,t)}function Fr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!la)return Promise.resolve();const a=ra.documentElement.classList,n=e=>a.add("".concat(La,"-").concat(e)),r=e=>a.remove("".concat(La,"-").concat(e)),o=tn.autoFetchSvg?[...ha,...Ea]:ua.concat(Object.keys(Lr));o.includes("fa")||o.push("fa");const i=[".".concat(Ga,":not([").concat(Ra,"])")].concat(o.map(e=>".".concat(e,":not([").concat(Ra,"])"))).join(", ");if(0===i.length)return Promise.resolve();let l=[];try{l=ln(e.querySelectorAll(i))}catch(u){}if(!(l.length>0))return Promise.resolve();n("pending"),r("complete");const s=yr("onTree"),c=l.reduce((e,t)=>{try{const a=Or(t);a&&e.push(a)}catch(u){Fa||"MissingIcon"===u.name&&console.error(u)}return e},[]);return new Promise((e,a)=>{Promise.all(c).then(a=>{jr(a,()=>{n("active"),n("complete"),r("pending"),"function"===typeof t&&t(),s(),e()})}).catch(e=>{s(),a(e)})})}function Ir(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Or(e).then(e=>{e&&jr([e],t)})}function Dr(e){return function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(t||{}).icon?t:ar(t||{});let{mask:r}=a;return r&&(r=(r||{}).icon?r:ar(r||{})),e(n,Qt(Qt({},a),{},{mask:r}))}}const qr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:a=rn,symbol:n=!1,mask:r=null,maskId:o=null,title:i=null,titleId:l=null,classes:s=[],attributes:c={},styles:u={}}=t;if(!e)return;const{prefix:d,iconName:f,icon:p}=e;return sr(Qt({type:"icon"},e),()=>(er("beforeDOMElementCreation",{iconDefinition:e,params:t}),tn.autoA11y&&(i?c["aria-labelledby"]="".concat(tn.replacementClass,"-title-").concat(l||on()):(c["aria-hidden"]="true",c.focusable="false")),cr({icons:{main:fr(p),mask:r?fr(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:Qt(Qt({},rn),a),symbol:n,title:i,maskId:o,titleId:l,extra:{attributes:c,styles:u,classes:s}})))};var $r={mixout:()=>({icon:Dr(qr)}),hooks:()=>({mutationObserverCallbacks:e=>(e.treeCallback=Fr,e.nodeCallback=Ir,e)}),provides(e){e.i2svg=function(e){const{node:t=ra,callback:a=()=>{}}=e;return Fr(t,a)},e.generateSvgReplacementMutation=function(e,t){const{iconName:a,title:n,titleId:r,prefix:o,transform:i,symbol:l,mask:s,maskId:c,extra:u}=t;return new Promise((t,d)=>{Promise.all([mr(a,o),s.iconName?mr(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(s=>{let[d,f]=s;t([e,cr({icons:{main:d,mask:f},prefix:o,iconName:a,transform:i,symbol:l,maskId:c,title:n,titleId:r,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:a,main:n,transform:r,styles:o}=e;const i=un(o);let l;return i.length>0&&(a.style=i),dn(r)&&(l=tr("generateAbstractTransformGrouping",{main:n,transform:r,containerWidth:n.width,iconWidth:n.width})),t.push(l||n.icon),{children:t,attributes:a}}}},Br={mixout:()=>({layer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{classes:a=[]}=t;return sr({type:"layer"},()=>{er("beforeDOMElementCreation",{assembler:e,params:t});let n=[];return e(e=>{Array.isArray(e)?e.map(e=>{n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(tn.cssPrefix,"-layers"),...a].join(" ")},children:n}]})}})},Ur={mixout:()=>({counter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{title:a=null,classes:n=[],attributes:r={},styles:o={}}=t;return sr({type:"counter",content:e},()=>(er("beforeDOMElementCreation",{content:e,params:t}),function(e){const{content:t,title:a,extra:n}=e,r=Qt(Qt(Qt({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),o=un(n.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[t]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}({content:e.toString(),title:a,extra:{attributes:r,styles:o,classes:["".concat(tn.cssPrefix,"-layers-counter"),...n]}})))}})},Hr={mixout:()=>({text(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:a=rn,title:n=null,classes:r=[],attributes:o={},styles:i={}}=t;return sr({type:"text",content:e},()=>(er("beforeDOMElementCreation",{content:e,params:t}),ur({content:e,transform:Qt(Qt({},rn),a),title:n,extra:{attributes:o,styles:i,classes:["".concat(tn.cssPrefix,"-layers-text"),...r]}})))}}),provides(e){e.generateLayersText=function(e,t){const{title:a,transform:n,extra:r}=t;let o=null,i=null;if(sa){const t=parseInt(getComputedStyle(e).fontSize,10),a=e.getBoundingClientRect();o=a.width/t,i=a.height/t}return tn.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,ur({content:e.innerHTML,width:o,height:i,transform:n,title:a,extra:r,watchable:!0})])}}};const Wr=new RegExp('"',"ug"),Vr=[1105920,1112319],Gr=Qt(Qt(Qt(Qt({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),Yr=Object.keys(Gr).reduce((e,t)=>(e[t.toLowerCase()]=Gr[t],e),{}),Kr=Object.keys(Yr).reduce((e,t)=>{const a=Yr[t];return e[t]=a[900]||[...Object.entries(a)][0][1],e},{});function Qr(e,t){const a="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise((n,r)=>{if(null!==e.getAttribute(a))return n();const o=ln(e.children).filter(e=>e.getAttribute(Ma)===t)[0],i=na.getComputedStyle(e,t),l=i.getPropertyValue("font-family"),s=l.match(Ya),c=i.getPropertyValue("font-weight"),u=i.getPropertyValue("content");if(o&&!s)return e.removeChild(o),n();if(s&&"none"!==u&&""!==u){const u=i.getPropertyValue("content");let d=function(e,t){const a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(Yr[a]||{})[r]||Kr[a]}(l,c);const{value:f,isSecondary:p}=function(e){const t=e.replace(Wr,""),a=function(e,t){const a=e.length;let n,r=e.charCodeAt(t);return r>=55296&&r<=56319&&a>t+1&&(n=e.charCodeAt(t+1),n>=56320&&n<=57343)?1024*(r-55296)+n-56320+65536:r}(t,0),n=a>=Vr[0]&&a<=Vr[1],r=2===t.length&&t[0]===t[1];return{value:En(r?t[0]:t),isSecondary:n||r}}(u),m=s[0].startsWith("FontAwesome");let h=qn(d,f),g=h;if(m){const e=function(e){const t=Ln[e],a=qn("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}(f);e.iconName&&e.prefix&&(h=e.iconName,d=e.prefix)}if(!h||p||o&&o.getAttribute(Aa)===d&&o.getAttribute(Na)===g)n();else{e.setAttribute(a,g),o&&e.removeChild(o);const i={iconName:null,title:null,titleId:null,prefix:null,transform:rn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:l}=i;l.attributes[Ma]=t,mr(h,d).then(r=>{const o=cr(Qt(Qt({},i),{},{icons:{main:r,mask:{prefix:null,iconName:null,rest:[]}},prefix:d,iconName:g,extra:l,watchable:!0})),s=ra.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(s,e.firstChild):e.appendChild(s),s.outerHTML=o.map(e=>wn(e)).join("\n"),e.removeAttribute(a),n()}).catch(r)}}else n()})}function Xr(e){return Promise.all([Qr(e,"::before"),Qr(e,"::after")])}function Jr(e){return e.parentNode!==document.head&&!~Oa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ma)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}function Zr(e){if(la)return new Promise((t,a)=>{const n=ln(e.querySelectorAll("*")).filter(Jr).map(Xr),r=yr("searchPseudoElements");zr(),Promise.all(n).then(()=>{r(),_r(),t()}).catch(()=>{r(),_r(),a()})})}var eo={hooks:()=>({mutationObserverCallbacks:e=>(e.pseudoElementsCallback=Zr,e)}),provides(e){e.pseudoElements2svg=function(e){const{node:t=ra}=e;tn.searchPseudoElements&&Zr(t)}}};let to=!1;var ao={mixout:()=>({dom:{unwatch(){zr(),to=!0}}}),hooks:()=>({bootstrap(){Mr(Zn("mutationObserverCallbacks",{}))},noAuto(){Rr&&Rr.disconnect()},watch(e){const{observeMutationsRoot:t}=e;to?_r():Mr(Zn("mutationObserverCallbacks",{observeMutationsRoot:t}))}})};const no=e=>e.toLowerCase().split(" ").reduce((e,t)=>{const a=t.toLowerCase().split("-"),n=a[0];let r=a.slice(1).join("-");if(n&&"h"===r)return e.flipX=!0,e;if(n&&"v"===r)return e.flipY=!0,e;if(r=parseFloat(r),isNaN(r))return e;switch(n){case"grow":e.size=e.size+r;break;case"shrink":e.size=e.size-r;break;case"left":e.x=e.x-r;break;case"right":e.x=e.x+r;break;case"up":e.y=e.y-r;break;case"down":e.y=e.y+r;break;case"rotate":e.rotate=e.rotate+r}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});var ro={mixout:()=>({parse:{transform:e=>no(e)}}),hooks:()=>({parseNodeAttributes(e,t){const a=t.getAttribute("data-fa-transform");return a&&(e.transform=no(a)),e}}),provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:a,containerWidth:n,iconWidth:r}=e;const o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*a.x,", ").concat(32*a.y,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),c={outer:o,inner:{transform:"".concat(i," ").concat(l," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}};return{tag:"g",attributes:Qt({},c.outer),children:[{tag:"g",attributes:Qt({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Qt(Qt({},t.icon.attributes),c.path)}]}]}}}};const oo={x:0,y:0,width:"100%",height:"100%"};function io(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var lo={hooks:()=>({parseNodeAttributes(e,t){const a=t.getAttribute("data-fa-mask"),n=a?Vn(a.split(" ").map(e=>e.trim())):{prefix:null,iconName:null,rest:[]};return n.prefix||(n.prefix=Un()),e.mask=n,e.maskId=t.getAttribute("data-fa-mask-id"),e}}),provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:a,main:n,mask:r,maskId:o,transform:i}=e;const{width:l,icon:s}=n,{width:c,icon:u}=r,d=function(e){let{transform:t,containerWidth:a,iconWidth:n}=e;const r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(o," ").concat(i," ").concat(l)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:i,containerWidth:c,iconWidth:l}),f={tag:"rect",attributes:Qt(Qt({},oo),{},{fill:"white"})},p=s.children?{children:s.children.map(io)}:{},m={tag:"g",attributes:Qt({},d.inner),children:[io(Qt({tag:s.tag,attributes:Qt(Qt({},s.attributes),d.path)},p))]},h={tag:"g",attributes:Qt({},d.outer),children:[m]},g="mask-".concat(o||on()),v="clip-".concat(o||on()),b={tag:"mask",attributes:Qt(Qt({},oo),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,h]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(x=u,"g"===x.tag?x.children:[x])},b]};var x;return t.push(y,{tag:"rect",attributes:Qt({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(g,")")},oo)}),{children:t,attributes:a}}}},so={provides(e){let t=!1;na.matchMedia&&(t=na.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const e=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:Qt(Qt({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=Qt(Qt({},n),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Qt(Qt({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:Qt(Qt({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Qt(Qt({},r),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:Qt(Qt({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Qt(Qt({},r),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:Qt(Qt({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Qt(Qt({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},co={hooks:()=>({parseNodeAttributes(e,t){const a=t.getAttribute("data-fa-symbol"),n=null!==a&&(""===a||a);return e.symbol=n,e}})};!function(e,t){let{mixoutsTo:a}=t;Kn=e,Qn={},Object.keys(Xn).forEach(e=>{-1===Jn.indexOf(e)&&delete Xn[e]}),Kn.forEach(e=>{const t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{"function"===typeof t[e]&&(a[e]=t[e]),"object"===typeof t[e]&&Object.keys(t[e]).forEach(n=>{a[e]||(a[e]={}),a[e][n]=t[e][n]})}),e.hooks){const t=e.hooks();Object.keys(t).forEach(e=>{Qn[e]||(Qn[e]=[]),Qn[e].push(t[e])})}e.provides&&e.provides(Xn)})}([hn,$r,Br,Ur,Hr,eo,ao,ro,lo,so,co],{mixoutsTo:ir});const uo=ir.library,fo=ir.parse,po=ir.icon;var mo=a(173),ho=a.n(mo);function go(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function vo(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?go(Object(a),!0).forEach(function(t){yo(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):go(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function bo(e){return bo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bo(e)}function yo(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function xo(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function wo(e){return function(e){if(Array.isArray(e))return So(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return So(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return So(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function So(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ko(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1);var t}var Eo=["style"];var Po=!1;try{Po=!0}catch(vf){}function Co(e){return e&&"object"===bo(e)&&e.prefix&&e.iconName&&e.icon?e:fo.icon?fo.icon(e):null===e?null:e&&"object"===bo(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function jo(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?yo({},e,t):{}}var To={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},zo=e.forwardRef(function(e,t){var a=vo(vo({},To),e),n=a.icon,r=a.mask,o=a.symbol,i=a.className,l=a.title,s=a.titleId,c=a.maskId,u=Co(n),d=jo("classes",[].concat(wo(function(e){var t,a=e.beat,n=e.fade,r=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,s=e.spin,c=e.spinPulse,u=e.spinReverse,d=e.pulse,f=e.fixedWidth,p=e.inverse,m=e.border,h=e.listItem,g=e.flip,v=e.size,b=e.rotation,y=e.pull,x=(yo(t={"fa-beat":a,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":m,"fa-li":h,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(v),"undefined"!==typeof v&&null!==v),yo(t,"fa-rotate-".concat(b),"undefined"!==typeof b&&null!==b&&0!==b),yo(t,"fa-pull-".concat(y),"undefined"!==typeof y&&null!==y),yo(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(e){return x[e]?e:null}).filter(function(e){return e})}(a)),wo((i||"").split(" ")))),f=jo("transform","string"===typeof a.transform?fo.transform(a.transform):a.transform),p=jo("mask",Co(r)),m=po(u,vo(vo(vo(vo({},d),f),p),{},{symbol:o,title:l,titleId:s,maskId:c}));if(!m)return function(){var e;!Po&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var h=m.abstract,g={ref:t};return Object.keys(a).forEach(function(e){To.hasOwnProperty(e)||(g[e]=a[e])}),_o(h[0],g)});zo.displayName="FontAwesomeIcon",zo.propTypes={beat:ho().bool,border:ho().bool,beatFade:ho().bool,bounce:ho().bool,className:ho().string,fade:ho().bool,flash:ho().bool,mask:ho().oneOfType([ho().object,ho().array,ho().string]),maskId:ho().string,fixedWidth:ho().bool,inverse:ho().bool,flip:ho().oneOf([!0,!1,"horizontal","vertical","both"]),icon:ho().oneOfType([ho().object,ho().array,ho().string]),listItem:ho().bool,pull:ho().oneOf(["right","left"]),pulse:ho().bool,rotation:ho().oneOf([0,90,180,270]),shake:ho().bool,size:ho().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ho().bool,spinPulse:ho().bool,spinReverse:ho().bool,symbol:ho().oneOfType([ho().bool,ho().string]),title:ho().string,titleId:ho().string,transform:ho().oneOfType([ho().string,ho().object]),swapOpacity:ho().bool};var _o=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof a)return a;var r=(a.children||[]).map(function(a){return e(t,a)}),o=Object.keys(a.attributes||{}).reduce(function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var a,n=t.indexOf(":"),r=ko(t.slice(0,n)),o=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=o:e[r]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[ko(t)]=n}return e},{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=xo(n,Eo);return o.attrs.style=vo(vo({},o.attrs.style),l),t.apply(void 0,[a.tag,vo(vo({},o.attrs),s)].concat(wo(r)))}.bind(null,e.createElement);const Ro={prefix:"fas",iconName:"fill-drip",icon:[576,512,[],"f576","M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6l319.2 0 42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z"]},Mo={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},Ao=Mo,No={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},Lo=No,Oo={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},Fo=Oo,Io={prefix:"fas",iconName:"strikethrough",icon:[512,512,[],"f0cc","M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-209.9 0-.4-.1-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3c0 0 0 0 0 0s0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6c0 0 0 0 0 0l.2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1l-75.7 0c7 5.6 11.4 11.2 13.9 17.2z"]},Do={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},qo={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},$o=qo,Bo={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},Uo={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Ho=Uo,Wo={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"]},Vo=Wo,Go={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},Yo={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},Ko={prefix:"fas",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"]},Qo={prefix:"fas",iconName:"align-justify",icon:[448,512,[],"f039","M448 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32L32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z"]},Xo={prefix:"fas",iconName:"folder",icon:[512,512,[128193,128447,61716,"folder-blank"],"f07b","M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"]},Jo={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},Zo={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},ei={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]},ti={prefix:"fas",iconName:"underline",icon:[448,512,[],"f0cd","M16 64c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 128c0 53 43 96 96 96s96-43 96-96l0-128-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 128c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 96 48 96C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z"]},ai={prefix:"fas",iconName:"bold",icon:[384,512,[],"f032","M0 64C0 46.3 14.3 32 32 32l48 0 16 0 128 0c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128L96 480l-16 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-160L48 96 32 96C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64L112 96l0 128 112 0zM112 288l0 128 144 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0-112 0z"]},ni={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},ri={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},oi=ri,ii={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},li={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},si=li,ci=li,ui={prefix:"fas",iconName:"italic",icon:[384,512,[],"f033","M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0L160 416l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0L224 96l-64 0c-17.7 0-32-14.3-32-32z"]},di={prefix:"fas",iconName:"list-ol",icon:[512,512,["list-1-2","list-numeric"],"f0cb","M24 56c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 120 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0 0-96-8 0C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432l33.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},fi={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},pi={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},mi={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},hi={prefix:"fas",iconName:"terminal",icon:[576,512,[],"f120","M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},gi={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},vi={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},bi=vi,yi={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},xi=yi,wi={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Si={prefix:"fas",iconName:"align-left",icon:[448,512,[],"f036","M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},ki={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},Ei=ki,Pi={prefix:"fas",iconName:"tag",icon:[448,512,[127991],"f02b","M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Ci={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},ji={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Ti=ji,zi={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},_i=zi,Ri={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Mi={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},Ai=Mi,Ni={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]},Li={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Oi={prefix:"fas",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32zM272 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM368 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM464 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},Fi={prefix:"fas",iconName:"network-wired",icon:[640,512,[],"f6ff","M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"]},Ii={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Di={prefix:"fas",iconName:"align-center",icon:[448,512,[],"f037","M352 64c0-17.7-14.3-32-32-32L128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32z"]},qi={prefix:"fas",iconName:"bug",icon:[512,512,[],"f188","M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"]},$i={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Bi={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Ui={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Hi=Ui,Wi={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Vi={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},Gi={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},Yi={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Ki={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},Qi={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Xi=Qi,Ji={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"]},Zi={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},el={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},tl={prefix:"fas",iconName:"file-export",icon:[576,512,["arrow-right-from-file"],"f56e","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 128-168 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0 0 112c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM384 336l0-48 110.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L384 336zm0-208l-128 0L256 0 384 128z"]},al={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]},nl={prefix:"fas",iconName:"link-slash",icon:[640,512,["chain-broken","chain-slash","unlink"],"f127","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM406.6 416.4L220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3zm-290-228.5L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9z"]},rl=nl,ol={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},il={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},ll=il,sl={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]},cl={prefix:"fas",iconName:"share",icon:[512,512,["mail-forward"],"f064","M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"]},ul={prefix:"fas",iconName:"align-right",icon:[448,512,[],"f038","M448 64c0 17.7-14.3 32-32 32L192 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},dl={prefix:"fas",iconName:"note-sticky",icon:[448,512,[62026,"sticky-note"],"f249","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-112c0-26.5 21.5-48 48-48l112 0 0-224c0-35.3-28.7-64-64-64L64 32zM448 352l-45.3 0L336 352c-8.8 0-16 7.2-16 16l0 66.7 0 45.3 32-32 64-64 32-32z"]},fl=dl,pl={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};const ml=!1,hl={API_BASE_URL:"https://wrt-back.vercel.app/api",NODE_ENV:"production",IS_DEVELOPMENT:ml,IS_PRODUCTION:!0,APP_NAME:"WRTmind",APP_VERSION:"1.0.0",FIREBASE_API_KEY:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_API_KEY,FIREBASE_AUTH_DOMAIN:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_AUTH_DOMAIN,FIREBASE_PROJECT_ID:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_PROJECT_ID,FIREBASE_STORAGE_BUCKET:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_STORAGE_BUCKET,FIREBASE_MESSAGING_SENDER_ID:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,FIREBASE_APP_ID:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_APP_ID,FIREBASE_MEASUREMENT_ID:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5000/api",REACT_APP_NAME:"WRTmind",REACT_APP_NODE_ENV:"development",REACT_APP_VERSION:"1.0.0"}.REACT_APP_FIREBASE_MEASUREMENT_ID,ENABLE_DEBUG:ml,ENABLE_LOGS:!0,ENABLE_ANALYTICS:!0},gl=function(){return`${hl.API_BASE_URL}${arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}`};console.log("\ud83c\udf10 Configura\xe7\xe3o do Frontend:",{environment:hl.NODE_ENV,apiUrl:hl.API_BASE_URL,isDevelopment:hl.IS_DEVELOPMENT});const vl=hl.API_BASE_URL;console.log("\ud83c\udf10 API Base URL:",vl),console.log("\ud83c\udf10 Environment:",hl.NODE_ENV),console.log("\u2705 Configura\xe7\xe3o da API carregada:",{baseURL:vl,environment:hl.NODE_ENV,isDevelopment:hl.IS_DEVELOPMENT});const bl={headers:{"Content-Type":"application/json"},timeout:1e4};async function yl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=localStorage.getItem("user");let n=null;if(!a)throw console.error("\u274c Nenhum usu\xe1rio encontrado no localStorage"),new Error("Usu\xe1rio n\xe3o autenticado");try{if(n=JSON.parse(a).id,!n)throw console.error("\u274c ID do usu\xe1rio inv\xe1lido"),new Error("Usu\xe1rio n\xe3o autenticado")}catch(o){throw console.error("\u274c Erro ao obter ID do usu\xe1rio:",o),new Error("Usu\xe1rio n\xe3o autenticado")}const r={...bl,...t,headers:{...bl.headers,...t.headers||{},...n&&{"user-id":n}}};console.log("\ud83c\udf10 makeRequest - Endpoint:",e),console.log("\ud83c\udf10 makeRequest - Config:",r),console.log("\ud83c\udf10 makeRequest - User ID:",n);try{const t=await fetch(`${vl}${e}`,r);if(console.log("\ud83d\udce1 makeRequest - Status:",t.status),console.log("\ud83d\udce1 makeRequest - Status Text:",t.statusText),!t.ok){const e=await t.text();throw console.error("\u274c makeRequest - Erro HTTP:",t.status,e),401===t.status&&(console.log("\ud83d\udd10 Erro 401 - Limpando dados do usu\xe1rio"),localStorage.removeItem("user"),window.dispatchEvent(new CustomEvent("userLogout"))),new Error(`HTTP ${t.status}: ${t.statusText}`)}const a=await t.json();return console.log("\ud83d\udce6 makeRequest - Dados recebidos:",a),a}catch(o){throw console.error("\u274c makeRequest - Erro:",o),new Error(`Erro na requisi\xe7\xe3o: ${o.message}`)}}const xl={buscarTodos:()=>yl("/links"),buscarPorId:e=>yl(`/links/${e}`),criar:e=>yl("/links",{method:"POST",body:JSON.stringify(e)}),atualizar:(e,t)=>yl(`/links/${e}`,{method:"PUT",body:JSON.stringify(t)}),excluir:e=>yl(`/links/${e}`,{method:"DELETE"}),atualizarPosicoes:e=>yl("/links/posicoes",{method:"PUT",body:JSON.stringify({posicoes:e})}),verificarPendencias:()=>yl("/links/pendencias"),sincronizarManual:()=>yl("/links/sincronizar-manual",{method:"POST"})},wl={buscarStatus:()=>yl("/sync/status"),buscarLogs:()=>yl("/sync/logs"),limparLogs:()=>yl("/sync/limpar-logs",{method:"POST"}),buscarUltimaAlteracaoBanco:()=>yl("/sync/last-database-change"),sincronizarManual:xl.sincronizarManual},Sl=async()=>{try{return await yl("/categorias")}catch(e){throw console.error("Erro ao listar categorias:",e),e}},kl=async e=>{try{return await yl("/categorias",{method:"POST",body:JSON.stringify(e)})}catch(t){throw console.error("Erro ao criar categoria:",t),t}},El=async(e,t)=>{try{return await yl(`/categorias/${e}`,{method:"PUT",body:JSON.stringify(t)})}catch(a){throw console.error("Erro ao atualizar categoria:",a),a}},Pl=async e=>{try{return await yl(`/categorias/${e}`,{method:"DELETE"})}catch(t){throw console.error("Erro ao deletar categoria:",t),t}},Cl=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const t=new URLSearchParams;Object.keys(e).forEach(a=>{void 0!==e[a]&&null!==e[a]&&t.append(a,e[a])});const a=t.toString()?`/notas?${t.toString()}`:"/notas";return await yl(a)}catch(t){throw console.error("Erro ao listar notas:",t),t}},jl=async e=>{try{return await yl(`/notas/${e}`)}catch(t){throw console.error("Erro ao buscar nota por ID:",t),t}},Tl=async e=>{try{console.log("\ud83c\udf10 API - criarNota chamado com dados:",e);const t=await yl("/notas",{method:"POST",body:JSON.stringify(e)});return console.log("\u2705 API - criarNota resposta:",t),t}catch(t){throw console.error("\u274c API - Erro ao criar nota:",t),t}},zl=async(e,t)=>{try{console.log("\ud83c\udf10 API - atualizarNota chamado com ID:",e,"dados:",t);const a=await yl(`/notas/${e}`,{method:"PUT",body:JSON.stringify(t)});return console.log("\u2705 API - atualizarNota resposta:",a),a}catch(a){throw console.error("\u274c API - Erro ao atualizar nota:",a),a}},_l=async e=>{try{return await yl(`/notas/${e}`,{method:"DELETE"})}catch(t){throw console.error("Erro ao deletar nota:",t),t}},Rl=async e=>{try{return await yl(`/notas/${e}/restore`,{method:"PATCH"})}catch(t){throw console.error("Erro ao restaurar nota:",t),t}},Ml=async e=>{try{return await yl(`/notas/${e}/permanent`,{method:"DELETE"})}catch(t){throw console.error("Erro ao excluir nota definitivamente:",t),t}},Al=async e=>{try{return await yl(`/notas/${e}/fixado`,{method:"PATCH"})}catch(t){throw console.error("Erro ao alternar fixado:",t),t}},Nl=async(e,t)=>{try{return await yl(`/notas/${e}/ordenacao`,{method:"PUT",body:JSON.stringify({ordenacao:t})})}catch(a){throw console.error("Erro ao atualizar ordena\xe7\xe3o:",a),a}},Ll=async e=>{try{return await yl("/notas/ordenacoes",{method:"PUT",body:JSON.stringify({ordenacoes:e})})}catch(t){throw console.error("Erro ao atualizar m\xfaltiplas ordena\xe7\xf5es:",t),t}},Ol=async()=>{try{return await yl("/notas/fixadas")}catch(e){throw console.error("Erro ao buscar notas fixadas:",e),e}},Fl=()=>{console.log("\ud83d\udd0d === DEBUG AUTENTICA\xc7\xc3O ===");const e=localStorage.getItem("user");if(console.log("\ud83d\udce6 User no localStorage:",e),e)try{const t=JSON.parse(e);console.log("\ud83d\udc64 Dados do usu\xe1rio:",t),console.log("\ud83c\udd94 User ID:",t.id)}catch(a){console.error("\u274c Erro ao parsear dados do usu\xe1rio:",a)}else console.log("\u274c Nenhum usu\xe1rio encontrado no localStorage");const t=!!e;return console.log("\ud83d\udd10 Usu\xe1rio logado:",t),console.log("\ud83d\udd0d === FIM DEBUG ==="),{isLoggedIn:t,user:e?JSON.parse(e):null}},Il=async e=>{console.log("\ud83e\uddea === TESTE DE REQUISI\xc7\xc3O ==="),console.log("\ud83c\udf10 Endpoint:",e);const t=localStorage.getItem("user");let a=null;if(t)try{a=JSON.parse(t).id}catch(r){console.error("\u274c Erro ao obter ID do usu\xe1rio:",r)}console.log("\ud83c\udd94 User ID para requisi\xe7\xe3o:",a);const n={"Content-Type":"application/json",...a&&{"user-id":a}};console.log("\ud83d\udccb Headers:",n);try{const t="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"http://localhost:5000/api":"https://wrt-back.vercel.app/api",a=await fetch(`${t}${e}`,{method:"GET",headers:n});if(console.log("\ud83d\udce1 Status:",a.status),console.log("\ud83d\udce1 Status Text:",a.statusText),!a.ok){const e=await a.text();return console.error("\u274c Erro HTTP:",a.status,e),{error:!0,status:a.status,message:e}}const r=await a.json();return console.log("\ud83d\udce6 Dados recebidos:",r),{error:!1,data:r}}catch(r){return console.error("\u274c Erro na requisi\xe7\xe3o:",r),{error:!0,message:r.message}}};var Dl=a(579);const ql=(0,e.createContext)(),$l=()=>{const t=(0,e.useContext)(ql);if(!t)throw new Error("useNotasAPIContext deve ser usado dentro de um NotasAPIProvider");return t},Bl=t=>{let{children:a}=t;const[n,r]=(0,e.useState)("anotacoes"),[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(""),[c,u]=(0,e.useState)("dataCriacao"),{notas:d,categorias:f,carregando:p,erro:m,carregarNotas:h,carregarCategorias:g,criarNota:v,atualizarNota:b,deletarNota:y,restaurarNota:x,excluirNotaDefinitivamente:w,buscarNotaPorId:S,filtrarPorCategoria:k,buscarPorTermo:E,limparErro:P,notasAtivas:C,notasDeletadas:j,adicionarCategoria:T,editarCategoria:z,removerCategoria:_}=(()=>{const[t,a]=(0,e.useState)([]),[n,r]=(0,e.useState)([]),[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(null),c=(0,e.useCallback)(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(console.log("\ud83d\udce1 Fazendo requisi\xe7\xe3o para API..."),Fl(),!localStorage.getItem("user"))return console.log("\u274c Usu\xe1rio n\xe3o logado, pulando carregamento de notas"),a([]),[];i(!0),s(null);try{const t=await Cl(e);return console.log("\ud83d\udce6 Resposta da API:",t),a(t.notas||[]),t.notas||[]}catch(t){return console.error("\u274c Erro ao carregar notas:",t),s(t.message),[]}finally{i(!1)}},[]),u=(0,e.useCallback)(async()=>{try{const e=(await Sl()).categorias||[];return r(e),e}catch(e){return console.error("Erro ao carregar categorias:",e),s(e.message),r([]),[]}},[]),d=(0,e.useCallback)(async e=>{i(!0),s(null);try{const t=(await Tl(e)).nota;return await c({ativo:!0}),t}catch(t){throw console.error("Erro ao criar nota:",t),s(t.message),t}finally{i(!1)}},[c]),f=(0,e.useCallback)(async(e,t)=>{i(!0),s(null);try{const a=(await zl(e,t)).nota;return await c({ativo:!0}),a}catch(a){throw console.error("Erro ao atualizar nota:",a),s(a.message),a}finally{i(!1)}},[c]),p=(0,e.useCallback)(async e=>{i(!0),s(null);try{return await _l(e),await c({ativo:!0}),!0}catch(t){throw console.error("Erro ao deletar nota:",t),s(t.message),t}finally{i(!1)}},[c]),m=(0,e.useCallback)(async e=>{i(!0),s(null);try{const t=(await Rl(e)).nota;return await c({ativo:!0}),t}catch(t){throw console.error("Erro ao restaurar nota:",t),s(t.message),t}finally{i(!1)}},[c]),h=(0,e.useCallback)(async e=>{i(!0),s(null);try{return await Ml(e),await c({ativo:!0}),!0}catch(t){throw console.error("Erro ao excluir nota definitivamente:",t),s(t.message),t}finally{i(!1)}},[c]),g=(0,e.useCallback)(async e=>{i(!0),s(null);try{const t=(await Al(e)).nota;return a(a=>a.map(a=>a.id===e?{...a,fixado:t.fixado}:a)),t}catch(t){throw console.error("Erro ao alternar fixado:",t),s(t.message),t}finally{i(!1)}},[]),v=(0,e.useCallback)(async(e,t)=>{i(!0),s(null);try{const n=(await Nl(e,t)).nota;return a(t=>t.map(t=>t.id===e?{...t,ordenacao:n.ordenacao}:t)),n}catch(n){throw console.error("Erro ao atualizar ordena\xe7\xe3o:",n),s(n.message),n}finally{i(!1)}},[]),b=(0,e.useCallback)(async e=>{i(!0),s(null);try{return await Ll(e),await c({ativo:!0}),!0}catch(t){throw console.error("Erro ao atualizar m\xfaltiplas ordena\xe7\xf5es:",t),s(t.message),t}finally{i(!1)}},[c]),y=(0,e.useCallback)(async()=>{i(!0),s(null);try{return(await Ol()).notas||[]}catch(e){return console.error("Erro ao buscar notas fixadas:",e),s(e.message),[]}finally{i(!1)}},[]),x=(0,e.useCallback)(async e=>{i(!0),s(null);try{return(await jl(e)).nota}catch(t){throw console.error("Erro ao buscar nota:",t),s(t.message),t}finally{i(!1)}},[]),w=(0,e.useCallback)(async e=>await c({categoria:e,ativo:!0}),[c]),S=(0,e.useCallback)(async e=>t.filter(t=>t.titulo.toLowerCase().includes(e.toLowerCase())||t.conteudo.toLowerCase().includes(e.toLowerCase())),[t]),k=(0,e.useCallback)(()=>{s(null)},[]),E=(0,e.useCallback)(async e=>{try{const t=(await kl(e)).categoria;return r(e=>[...e,t]),t}catch(t){throw console.error("Erro ao adicionar categoria:",t),s(t.message),t}},[]),P=(0,e.useCallback)(async(e,t)=>{try{const a=(await El(e,t)).categoria;return r(t=>t.map(t=>t.id===e?a:t)),a}catch(a){throw console.error("Erro ao editar categoria:",a),s(a.message),a}},[]),C=(0,e.useCallback)(async e=>{try{return await Pl(e),r(t=>t.filter(t=>t.id!==e)),!0}catch(t){throw console.error("Erro ao remover categoria:",t),s(t.message),t}},[]);return(0,e.useEffect)(()=>{console.log("\ud83d\ude80 Verificando se usu\xe1rio est\xe1 logado..."),(async()=>{try{const t=localStorage.getItem("user");if(!t)return console.log("\u26a0\ufe0f Usu\xe1rio n\xe3o est\xe1 logado, aguardando login..."),a([]),void r([]);let n;try{if(n=JSON.parse(t),!n.id)return console.log("\u26a0\ufe0f Dados do usu\xe1rio inv\xe1lidos, aguardando login v\xe1lido..."),a([]),void r([])}catch(e){return console.log("\u26a0\ufe0f Erro ao parsear dados do usu\xe1rio, aguardando login v\xe1lido..."),a([]),void r([])}console.log("\u2705 Usu\xe1rio logado, carregando dados...");const o=await Cl();a(o.notas||[]);const i=(await Sl()).categorias||[];r(i)}catch(e){console.error("Erro ao carregar dados iniciais:",e),s(e.message),a([]),r([])}})()},[]),(0,e.useEffect)(()=>{const e=e=>{"user"===e.key&&(console.log("\ud83d\udc64 Mudan\xe7a detectada no localStorage (user)"),e.newValue?(console.log("\u2705 Usu\xe1rio logado, carregando dados..."),(async()=>{try{const e=await Cl();a(e.notas||[]);const t=(await Sl()).categorias||[];r(t)}catch(e){console.error("Erro ao carregar dados ap\xf3s login:",e),s(e.message)}})()):(console.log("\ud83d\udeaa Usu\xe1rio deslogado, limpando dados..."),a([]),r([]),s(null)))},t=e=>{console.log("\ud83d\udc64 Evento de login detectado:",e.detail),console.log("\u2705 Usu\xe1rio logado, carregando dados..."),(async()=>{try{const e=await Cl();a(e.notas||[]);const t=(await Sl()).categorias||[];r(t)}catch(e){console.error("Erro ao carregar dados ap\xf3s login:",e),s(e.message)}})()},n=()=>{console.log("\ud83d\udeaa Evento de logout detectado"),console.log("\ud83d\udeaa Usu\xe1rio deslogado, limpando dados..."),a([]),r([]),s(null)};return window.addEventListener("storage",e),window.addEventListener("userLogin",t),window.addEventListener("userLogout",n),()=>{window.removeEventListener("storage",e),window.removeEventListener("userLogin",t),window.removeEventListener("userLogout",n)}},[]),{notas:t,categorias:n,carregando:o,erro:l,carregarNotas:c,carregarCategorias:u,criarNota:d,atualizarNota:f,deletarNota:p,restaurarNota:m,excluirNotaDefinitivamente:h,buscarNotaPorId:x,filtrarPorCategoria:w,buscarPorTermo:S,limparErro:k,alternarFixado:g,atualizarOrdenacao:v,atualizarMultiplasOrdenacoes:b,buscarFixadas:y,adicionarCategoria:E,editarCategoria:P,removerCategoria:C,notasAtivas:t.filter(e=>e.ativo),notasDeletadas:t.filter(e=>!e.ativo),notasFixadas:t.filter(e=>e.fixado&&e.ativo)}})(),R=(0,e.useMemo)(()=>{if(!C||0===C.length)return[];let e=[...C];if(n&&"anotacoes"!==n&&(e=e.filter(e=>e.topico===n)),l&&l.trim()){const t=l.toLowerCase().trim();e=e.filter(e=>e.titulo.toLowerCase().includes(t)||e.conteudo.toLowerCase().includes(t))}switch(c){case"dataCriacao":e.sort((e,t)=>new Date(t.dataCriacao)-new Date(e.dataCriacao));break;case"dataModificacao":e.sort((e,t)=>new Date(t.dataModificacao)-new Date(e.dataModificacao));break;case"titulo":e.sort((e,t)=>e.titulo.localeCompare(t.titulo));break;case"topico":e.sort((e,t)=>e.topico.localeCompare(t.topico))}return e},[C,n,l,c]),M={totalNotas:C?C.length:0,totalCategorias:f?f.length:0,notasDeletadas:j?j.length:0,notasPorCategoria:f?f.map(e=>({categoria:e.nome,quantidade:C?C.filter(t=>t.topico===e.nome).length:0})):[]},A={notas:R,todasAsNotas:d,categorias:f,carregando:p,erro:m,categoriaAtiva:n,menuRecolhido:o,termoBusca:l,ordenacao:c,estatisticas:M,adicionarNota:async e=>{try{return await v(e)}catch(t){throw console.error("Erro ao adicionar nota:",t),t}},editarNota:async(e,t)=>{try{return await b(e,t)}catch(a){throw console.error("Erro ao editar nota:",a),a}},excluirNota:async e=>{try{await y(e)}catch(t){throw console.error("Erro ao excluir nota:",t),t}},excluirNotaDefinitivamente:w,visualizarNota:async e=>{try{return await S(e)}catch(t){throw console.error("Erro ao buscar nota:",t),t}},restaurarNota:x,adicionarCategoria:T,editarCategoria:z,removerCategoria:_,filtrarPorCategoria:async e=>{try{return await k(e)}catch(t){throw console.error("Erro ao filtrar por categoria:",t),t}},buscarNotas:async e=>{try{return await E(e)}catch(t){throw console.error("Erro ao buscar notas:",t),t}},recarregarDados:async()=>{try{await h({ativo:!0}),await g()}catch(e){console.error("Erro ao recarregar dados:",e)}},definirCategoriaAtiva:e=>{r(e)},alternarMenu:()=>{i(!o)},definirTermoBusca:e=>{s(e)},definirOrdenacao:e=>{u(e)},limparErro:P,notasAtivas:C,notasDeletadas:j};return(0,Dl.jsx)(ql.Provider,{value:A,children:a})},Ul=Wt.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  padding: 20px;
`,Hl=Wt.div`
  background: white;
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraForte);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  animation: fadeIn 0.5s ease-out;
`,Wl=Wt.div`
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
`,Vl=Wt.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 2px solid var(--corBordaPrimaria);
`,Gl=Wt.button`
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
`,Yl=Wt.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Kl=Wt.div`
  position: relative;
`,Ql=Wt.input`
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
`,Xl=Wt.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
  z-index: 1;
`,Jl=Wt.button`
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
`,Zl=Wt.button`
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
`,es=Wt.div`
  background: var(--corErro);
  color: white;
  padding: 10px;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  text-align: center;
`,ts=Wt.div`
  background: var(--corSucesso);
  color: white;
  padding: 10px;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  text-align: center;
`,as=Wt.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
`,ns=t=>{let{onLogin:a}=t;const[n,r]=(0,e.useState)("login"),[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1),[c,u]=(0,e.useState)(""),[d,f]=(0,e.useState)(""),[p,m]=(0,e.useState)({email:"",senha:""}),[h,g]=(0,e.useState)({nome:"",email:"",senha:"",confirmarSenha:""}),v=(e,t,a)=>{"login"===e?m(e=>({...e,[t]:a})):g(e=>({...e,[t]:a})),u(""),f("")};return(0,Dl.jsx)(Ul,{children:(0,Dl.jsxs)(Hl,{children:[(0,Dl.jsxs)(Wl,{children:[(0,Dl.jsx)("h1",{children:"WRTmind"}),(0,Dl.jsx)("p",{children:"Organize suas ideias e links"})]}),(0,Dl.jsxs)(Vl,{children:[(0,Dl.jsx)(Gl,{"data-active":"login"===n,onClick:()=>r("login"),children:"Login"}),(0,Dl.jsx)(Gl,{"data-active":"cadastro"===n,onClick:()=>r("cadastro"),children:"Cadastro"})]}),c&&(0,Dl.jsx)(es,{children:c}),d&&(0,Dl.jsx)(ts,{children:d}),"login"===n?(0,Dl.jsxs)(Yl,{onSubmit:async e=>{e.preventDefault(),s(!0),u("");try{const e=await fetch(gl("/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),t=await e.json();e.ok?(f("Login realizado com sucesso!"),localStorage.setItem("user",JSON.stringify(t.usuario)),window.dispatchEvent(new CustomEvent("userLogin",{detail:{user:t.usuario}})),setTimeout(()=>{a(t.usuario)},1e3)):u(t.error||"Erro ao fazer login")}catch(c){u("Erro de conex\xe3o. Verifique se o servidor est\xe1 rodando.")}finally{s(!1)}},children:[(0,Dl.jsxs)(Kl,{children:[(0,Dl.jsx)(Xl,{children:(0,Dl.jsx)(zo,{icon:Ci})}),(0,Dl.jsx)(Ql,{type:"email",placeholder:"Email",value:p.email,onChange:e=>v("login","email",e.target.value),autoComplete:"email",required:!0})]}),(0,Dl.jsxs)(Kl,{children:[(0,Dl.jsx)(Xl,{children:(0,Dl.jsx)(zo,{icon:Bo})}),(0,Dl.jsx)(Ql,{type:o?"text":"password",placeholder:"Senha",value:p.senha,onChange:e=>v("login","senha",e.target.value),autoComplete:"current-password",required:!0}),(0,Dl.jsx)(Jl,{type:"button",onClick:()=>i(!o),children:(0,Dl.jsx)(zo,{icon:o?Yo:gi})})]}),(0,Dl.jsxs)(Zl,{type:"submit",disabled:l,children:[l&&(0,Dl.jsx)(as,{}),l?"Entrando...":"Entrar"]})]}):(0,Dl.jsxs)(Yl,{onSubmit:async e=>{if(e.preventDefault(),s(!0),u(""),h.senha!==h.confirmarSenha)return u("As senhas n\xe3o coincidem"),void s(!1);if(h.senha.length<6)return u("A senha deve ter pelo menos 6 caracteres"),void s(!1);try{const e=await fetch(gl("/auth/cadastro"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:h.nome,email:h.email,senha:h.senha})}),t=await e.json();e.ok?(f("Cadastro realizado com sucesso! Fa\xe7a login para continuar."),g({nome:"",email:"",senha:"",confirmarSenha:""}),setTimeout(()=>{r("login"),f("")},2e3)):u(t.error||"Erro ao fazer cadastro")}catch(c){u("Erro de conex\xe3o. Verifique se o servidor est\xe1 rodando.")}finally{s(!1)}},children:[(0,Dl.jsxs)(Kl,{children:[(0,Dl.jsx)(Xl,{children:(0,Dl.jsx)(zo,{icon:Jo})}),(0,Dl.jsx)(Ql,{type:"text",placeholder:"Nome completo",value:h.nome,onChange:e=>v("cadastro","nome",e.target.value),autoComplete:"name",required:!0})]}),(0,Dl.jsxs)(Kl,{children:[(0,Dl.jsx)(Xl,{children:(0,Dl.jsx)(zo,{icon:Ci})}),(0,Dl.jsx)(Ql,{type:"email",placeholder:"Email",value:h.email,onChange:e=>v("cadastro","email",e.target.value),autoComplete:"email",required:!0})]}),(0,Dl.jsxs)(Kl,{children:[(0,Dl.jsx)(Xl,{children:(0,Dl.jsx)(zo,{icon:Bo})}),(0,Dl.jsx)(Ql,{type:o?"text":"password",placeholder:"Senha",value:h.senha,onChange:e=>v("cadastro","senha",e.target.value),autoComplete:"new-password",required:!0}),(0,Dl.jsx)(Jl,{type:"button",onClick:()=>i(!o),children:(0,Dl.jsx)(zo,{icon:o?Yo:gi})})]}),(0,Dl.jsxs)(Kl,{children:[(0,Dl.jsx)(Xl,{children:(0,Dl.jsx)(zo,{icon:Bo})}),(0,Dl.jsx)(Ql,{type:o?"text":"password",placeholder:"Confirmar senha",value:h.confirmarSenha,onChange:e=>v("cadastro","confirmarSenha",e.target.value),required:!0})]}),(0,Dl.jsxs)(Zl,{type:"submit",disabled:l,children:[l&&(0,Dl.jsx)(as,{}),l?"Cadastrando...":"Cadastrar"]})]})]})})},rs=Gt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,os=Gt`
  0% { box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.7); }
  70% { box-shadow: 0 0 0 16px rgba(0, 191, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 191, 255, 0); }
`,is=Wt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  width: 100%;
`,ls=Wt.div`
  width: ${e=>e.tamanho||"64px"};
  height: ${e=>e.tamanho||"64px"};
  border: ${e=>e.tamanho?"2px":"8px"} solid #e0e0e0;
  border-top: ${e=>e.tamanho?"2px":"8px"} solid #00bfff;
  border-radius: 50%;
  animation: ${rs} 1s linear infinite;
  ${e=>!e.tamanho&&Bt`
    animation: ${rs} 1s linear infinite, ${os} 1.2s infinite;
    margin-bottom: 18px;
    box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.7);
  `}
`,ss=Wt.div`
  color: #00bfff;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
`,cs=e=>{let{texto:t="Carregando...",tamanho:a}=e;return a?(0,Dl.jsx)(ls,{tamanho:a}):(0,Dl.jsxs)(is,{children:[(0,Dl.jsx)(ls,{}),(0,Dl.jsx)(ss,{children:t})]})},us=Wt.div`
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,ds=Wt.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
`,fs=Wt.p`
  color: var(--corTextoSecundaria);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.6;
`,ps=Wt.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
`,ms=Wt.div`
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
`,hs=Wt.img`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
  border-radius: var(--bordaRaioPequena);
`,gs=Wt.span`
  color: var(--corTextoPrimaria);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  margin-top: 0.5rem;
`,vs=Wt.div`
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
`,bs=Wt.div`
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
`,ys=Wt.span`
  color: var(--corTextoSecundaria);
  font-size: 0.9rem;
  font-weight: 500;
`,xs=Wt.div`
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
`,ws=Wt.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,Ss=Wt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,ks=Wt.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
`,Es=Wt.button`
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
`,Ps=Wt.div`
  margin-bottom: 1.5rem;
`,Cs=Wt.label`
  display: block;
  color: var(--corTextoPrimaria);
  margin-bottom: 0.5rem;
  font-weight: 500;
`,js=Wt.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioPequena);
  background: var(--corFundo);
  color: var(--corTextoPrimaria);
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
  }
`,Ts=Wt.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--bordaRaioPequena);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: var(--corPrimariaHover);
  }

  &:disabled {
    background: var(--corTextoSecundaria);
    cursor: not-allowed;
  }
`,zs=Wt.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.25rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`,_s=Wt.button`
  background: var(--corFundoCard);
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoSecundaria);
  padding: 0.25rem;
  border-radius: var(--bordaRaioPequena);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;

  &:hover {
    background: var(--corPrimaria);
    color: white;
    border-color: var(--corPrimaria);
  }

  &.danger:hover {
    background: var(--corErro);
    border-color: var(--corErro);
  }
`,Rs=(Wt.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  margin-bottom: var(--espacamentoGrande);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
`,Wt.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoMedio);
`,Wt.div`
  padding: var(--espacamentoMedio);
  background: var(--corFundoTerciaria);
  border-radius: var(--bordaRaioMedia);
  border-left: 4px solid #FF6B6B;
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    transform: translateX(4px);
    box-shadow: var(--sombraLeve);
  }
`,Wt.h4`
  color: var(--corTextoPrimaria);
  margin: 0 0 var(--espacamentoPequeno) 0;
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
`,Wt.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
`,Wt.h3`
  color: var(--corTextoSecundaria);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,()=>{const[t,a]=(0,e.useState)([]),[n,r]=(0,e.useState)(!1),[o,i]=(0,e.useState)(null),[l,s]=(0,e.useState)(!0),[c,u]=(0,e.useState)(null),[d,f]=(0,e.useState)({nome:"",urlIcone:"",urlDestino:""}),[p,m]=(0,e.useState)(null),[h,g]=(0,e.useState)(null),[v,b]=(0,e.useState)(!1),y=(0,e.useCallback)(async()=>{try{s(!0),u(null),console.log("\ud83d\udd04 Carregando links do banco...");const e=(await xl.buscarTodos()).links||[];console.log("\ud83d\udcca Links carregados:",e.length);const t=e.map(e=>({id:e.id,nome:e.nome,urlIcone:e.urlIcone,urlDestino:e.urlDestino,posicao:e.posicao}));a(t),console.log("\u2705 Links atualizados na interface")}catch(e){console.error("\u274c Erro ao carregar links:",e),u("Erro ao carregar links de atalho")}finally{s(!1)}},[]);(0,e.useEffect)(()=>{y()},[y]);const x=(0,e.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i(null),f({nome:"",urlIcone:"",urlDestino:""}),r(!0),null!==e&&i({posicao:e})},[]),w=(0,e.useCallback)(e=>{window.open(e.urlDestino,"_blank")},[]),S=(0,e.useCallback)((e,t)=>{i(e.id),f({nome:e.nome,urlIcone:e.urlIcone,urlDestino:e.urlDestino}),r(!0)},[]),k=(0,e.useCallback)(async()=>{if(d.nome.trim()&&d.urlIcone.trim()&&d.urlDestino.trim())try{let e;if(o&&"object"===typeof o&&void 0!==o.posicao)e=o.posicao;else if(o&&"string"===typeof o){const a=t.find(e=>e.id===o);e=a?a.posicao:t.length}else{const a=t.map(e=>e.posicao).sort((e,t)=>e-t);e=0;for(let t=0;t<a.length;t++){if(a[t]!==t){e=t;break}e=t+1}}const a={nome:d.nome.trim(),urlIcone:d.urlIcone.trim(),urlDestino:d.urlDestino.trim(),posicao:e};o&&"string"===typeof o?(console.log("\ud83d\udd04 Atualizando link existente:",o),await xl.atualizar(o,a),console.log("\u2705 Link atualizado com sucesso")):(console.log("\ud83d\udd04 Criando novo link:",a),await xl.criar(a),console.log("\u2705 Link criado com sucesso")),console.log("\ud83d\udd04 Recarregando links ap\xf3s salvar..."),await y(),console.log("\u2705 Links recarregados com sucesso"),r(!1),i(null),f({nome:"",urlIcone:"",urlDestino:""})}catch(e){console.error("Erro ao salvar link:",e),alert("Erro ao salvar link. Tente novamente.")}},[d,o,t,y]),E=(0,e.useCallback)(()=>{r(!1),i(null),f({nome:"",urlIcone:"",urlDestino:""})},[]),P=(0,e.useCallback)(async e=>{const a=t.find(t=>t.posicao===e);if(a){if(console.log("\ud83d\udd04 Tentando remover \xedcone:",a),console.log("\ud83c\udd94 ID do \xedcone:",a.id),window.confirm("Tem certeza que deseja remover este \xedcone?"))try{console.log("\ud83d\uddd1\ufe0f Executando exclus\xe3o do link ID:",a.id),await xl.excluir(a.id),console.log("\u2705 Link exclu\xeddo com sucesso"),console.log("\ud83d\udd04 Recarregando links ap\xf3s exclus\xe3o..."),await y(),console.log("\u2705 Links recarregados ap\xf3s exclus\xe3o")}catch(n){console.error("\u274c Erro ao remover link:",n),alert("Erro ao remover link. Tente novamente.")}}else console.log("\u274c \xcdcone n\xe3o encontrado para posi\xe7\xe3o:",e)},[t,y]),C=(0,e.useCallback)((e,t)=>{m(t),e.dataTransfer.effectAllowed="move"},[]),j=(0,e.useCallback)((e,t)=>{e.preventDefault(),null!==p&&p!==t&&g(t)},[p]),T=(0,e.useCallback)(()=>{g(null)},[]),z=(0,e.useCallback)(async(e,a)=>{if(e.preventDefault(),null!==p&&p!==a)try{b(!0);const e=t.find(e=>e.posicao===p);if(!e)return;const n=t.find(e=>e.posicao===a),r=t.map(e=>e.posicao===p?{...e,posicao:a}:n&&e.posicao===a?{...e,posicao:p}:e),o=r.map(e=>({id:e.id,posicao:e.posicao}));await xl.atualizarPosicoes(o),await y()}catch(n){console.error("Erro ao reordenar links:",n),alert("Erro ao reordenar links. Tente novamente.")}finally{b(!1)}m(null),g(null)},[p,t,y]),_=(0,e.useCallback)(()=>{m(null),g(null)},[]),R=Array.from({length:35},(e,t)=>t);return l?(0,Dl.jsx)(us,{children:(0,Dl.jsx)(cs,{texto:"Carregando links de atalho..."})}):c?(0,Dl.jsx)(us,{children:(0,Dl.jsxs)("div",{style:{textAlign:"center",padding:"50px",color:"var(--corErro)"},children:[(0,Dl.jsx)("h3",{children:"Erro ao carregar links"}),(0,Dl.jsx)("p",{children:c}),(0,Dl.jsx)("button",{onClick:y,style:{padding:"10px 20px",background:"var(--corPrimaria)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",cursor:"pointer",marginTop:"20px"},children:"Tentar novamente"})]})}):(0,Dl.jsxs)(us,{children:[(0,Dl.jsx)(ds,{children:"Links de atalho"}),(0,Dl.jsx)(fs,{children:'Organize seus links de atalho favoritos. Clique em "Adicionar \xcdcone" para come\xe7ar, ou arraste e solte para reorganizar'}),(0,Dl.jsxs)(ps,{style:{position:"relative"},children:[v&&(0,Dl.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,borderRadius:"var(--bordaRaioMedia)"},children:(0,Dl.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[(0,Dl.jsx)("div",{style:{width:"40px",height:"40px",border:"4px solid var(--corPrimaria)",borderTop:"4px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}),(0,Dl.jsx)("span",{style:{color:"var(--corPrimaria)",fontWeight:"bold"},children:"Reposicionando..."})]})}),R.map(e=>{const a=t.find(t=>t.posicao===e);return a?(0,Dl.jsxs)(ms,{className:`${p===e?"arrastando":""} ${h===e?"sobre":""}`,draggable:!v,onDragStart:t=>!v&&C(t,e),onDragOver:t=>!v&&j(t,e),onDragLeave:v?void 0:T,onDrop:t=>!v&&z(t,e),onDragEnd:v?void 0:_,onClick:()=>!v&&w(a),onMouseEnter:e=>{v||(e.currentTarget.querySelector(".acoes-icone").style.opacity="1")},onMouseLeave:e=>{v||(e.currentTarget.querySelector(".acoes-icone").style.opacity="0")},style:{pointerEvents:v?"none":"auto",opacity:v?.6:1},children:[(0,Dl.jsx)(hs,{src:a.urlIcone,alt:a.nome,onError:e=>{e.target.style.display="none"}}),(0,Dl.jsx)(gs,{children:a.nome}),(0,Dl.jsxs)(zs,{className:"acoes-icone",onClick:e=>e.stopPropagation(),children:[(0,Dl.jsx)(_s,{onClick:()=>!v&&S(a,e),title:"Editar",disabled:v,style:{opacity:v?.5:1,cursor:v?"not-allowed":"pointer"},children:(0,Dl.jsx)(zo,{icon:Ho,size:"sm"})}),(0,Dl.jsx)(_s,{className:"danger",onClick:()=>!v&&P(e),title:"Remover",disabled:v,style:{opacity:v?.5:1,cursor:v?"not-allowed":"pointer"},children:(0,Dl.jsx)(zo,{icon:wi,size:"sm"})}),(0,Dl.jsx)(_s,{onClick:()=>!v&&w(a),title:"Abrir",disabled:v,style:{opacity:v?.5:1,cursor:v?"not-allowed":"pointer"},children:(0,Dl.jsx)(zo,{icon:Ei,size:"sm"})})]})]},a.id):(0,Dl.jsxs)(vs,{onClick:()=>!v&&x(e),className:""+(h===e?"sobre":""),onDragOver:t=>!v&&j(t,e),onDragLeave:v?void 0:T,onDrop:t=>!v&&z(t,e),style:{pointerEvents:v?"none":"auto",opacity:v?.6:1},children:[(0,Dl.jsx)(bs,{children:(0,Dl.jsx)(zo,{icon:Yi})}),(0,Dl.jsx)(ys,{children:"Adicionar \xcdcone"})]},`empty-${e}`)})]}),n&&(0,Dl.jsx)(xs,{onClick:E,children:(0,Dl.jsxs)(ws,{onClick:e=>e.stopPropagation(),children:[(0,Dl.jsxs)(Ss,{children:[(0,Dl.jsx)(ks,{children:o&&"string"===typeof o?"Editar \xcdcone":"Adicionar \xcdcone"}),(0,Dl.jsx)(Es,{onClick:E,children:(0,Dl.jsx)(zo,{icon:Xi})})]}),(0,Dl.jsxs)(Ps,{children:[(0,Dl.jsx)(Cs,{children:"Nome do \xcdcone"}),(0,Dl.jsx)(js,{type:"text",value:d.nome,onChange:e=>f({...d,nome:e.target.value}),placeholder:"Ex: Google"})]}),(0,Dl.jsxs)(Ps,{children:[(0,Dl.jsx)(Cs,{children:"URL do \xcdcone"}),(0,Dl.jsx)(js,{type:"url",value:d.urlIcone,onChange:e=>f({...d,urlIcone:e.target.value}),placeholder:"https://exemplo.com/favicon.ico"})]}),(0,Dl.jsxs)(Ps,{children:[(0,Dl.jsx)(Cs,{children:"URL de Destino"}),(0,Dl.jsx)(js,{type:"url",value:d.urlDestino,onChange:e=>f({...d,urlDestino:e.target.value}),placeholder:"https://exemplo.com"})]}),(0,Dl.jsx)(Ts,{onClick:k,children:o&&"string"===typeof o?"Atualizar":"Adicionar"})]})})]})}),Ms=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"completo";if(!e)return"";const a=new Date(e);if(isNaN(a.getTime()))return"";const n=new Date-a,r=Math.floor(n/864e5);switch(t){case"curto":return a.toLocaleDateString("pt-BR");case"medio":return a.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});case"relativo":if(0===r){const e=Math.floor(n/36e5);if(0===e){const e=Math.floor(n/6e4);return 0===e?"Agora mesmo":`${e} min atr\xe1s`}return`${e}h atr\xe1s`}if(1===r)return"Ontem";if(r<7)return`${r} dias atr\xe1s`;if(r<30){const e=Math.floor(r/7);return`${e} ${1===e?"semana":"semanas"} atr\xe1s`}if(r<365){const e=Math.floor(r/30);return`${e} ${1===e?"m\xeas":"meses"} atr\xe1s`}{const e=Math.floor(r/365);return`${e} ${1===e?"ano":"anos"} atr\xe1s`}default:return a.toLocaleDateString("pt-BR",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}},As=async e=>{try{return await navigator.clipboard.writeText(e),!0}catch(t){return console.error("Erro ao copiar para clipboard:",t),!1}},Ns=Wt.div`
  background: var(--corFundoCard);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: ${e=>"nota"===e.tipo?"var(--espacamentoMedio)":"var(--espacamentoGrande)"};
  margin-bottom: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--sombraHover);
    border-color: var(--corPrimaria);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>e.corDestaque||"var(--corPrimaria)"};
  }
`,Ls=Wt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--espacamentoMedio);
`,Os=Wt.h3`
  color: var(--corTextoPrimaria);
  font-size: ${e=>"nota"===e.tipo?"var(--tamanhoFonteGrande)":"var(--tamanhoFonteExtraGrande)"};
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  flex: 1;
  margin-right: var(--espacamentoMedio);
`,Fs=Wt.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  opacity: 0;
  transition: opacity var(--transicaoRapida);
  flex-shrink: 0;

  ${Ns}:hover & {
    opacity: 1;
  }
`,Is=Wt.button`
  background: var(--corFundoSecundaria);
  color: var(--corTextoSecundaria);
  border: none;
  border-radius: var(--bordaRaioPequena);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  font-size: var(--tamanhoFontePequena);

  &:hover {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
    transform: scale(1.1);
  }

  &.danger:hover {
    background: var(--corErro);
  }
`,Ds=Wt.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
`,qs=Wt.span`
  display: inline-flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
  background: ${e=>e.background||"var(--corFundoSecundaria)"};
  color: ${e=>e.color||"var(--corTextoPrimaria)"};
  border: 1px solid ${e=>e.border||"transparent"};
`,$s=Wt.div`
  color: var(--corTextoSecundaria);
  line-height: 1.6;
  margin-bottom: var(--espacamentoMedio);
  max-height: 120px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 20px;
    background: linear-gradient(transparent, var(--corFundoCard));
    pointer-events: none;
  }
`,Bs=Wt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
`,Us=Wt.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Hs=Wt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`,Ws=(Wt.div`
  width: 8px;
  height: 8px;
  border-radius: var(--bordaRaioCircular);
  background: ${e=>e.cor};
  flex-shrink: 0;
`,Wt.div`
  width: 12px;
  height: 12px;
  border-radius: var(--bordaRaioCircular);
  background: ${e=>e.cor};
  border: 2px solid var(--corFundoCard);
  flex-shrink: 0;
`,Wt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`),Vs=Wt.div`
  font-size: 3rem;
  margin-bottom: var(--espacamentoMedio);
  opacity: 0.5;
`,Gs=Wt.h3`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoPequeno);
`,Ys=Wt.p`
  margin: 0;
  line-height: 1.6;
`,Ks=t=>{let{item:a,tipo:n,onEditar:r,onExcluir:o,onVisualizar:i,onCopiar:l,onTelaCheia:s,onCompartilhar:c,onFavoritar:u,onBookmark:d,onExportar:f,onImprimir:p}=t;const[m,h]=(0,e.useState)(!1),[g,v]=(0,e.useState)(!1);(0,e.useEffect)(()=>{const e=JSON.parse(localStorage.getItem("notasFavoritas")||"[]"),t=JSON.parse(localStorage.getItem("notasBookmarks")||"[]");h(e.includes(a.id||a._id)),v(t.includes(a.id||a._id))},[a]);return a?(0,Dl.jsxs)(Ns,{tipo:n,corDestaque:"var(--corPrimaria)",onClick:()=>{r(a)},title:"Clique para editar esta nota",children:[(0,Dl.jsxs)(Ls,{children:[(0,Dl.jsx)(Os,{tipo:n,children:a.titulo}),(0,Dl.jsxs)(Fs,{children:[(0,Dl.jsx)(Is,{onClick:e=>{e.stopPropagation(),s&&s(a)},title:"Visualizar em tela cheia",children:(0,Dl.jsx)(zo,{icon:Ki})}),(0,Dl.jsx)(Is,{onClick:e=>{e.stopPropagation(),c&&c(a)},title:"Compartilhar",children:(0,Dl.jsx)(zo,{icon:cl})}),(0,Dl.jsx)(Is,{onClick:async e=>{e.stopPropagation();try{if(u){await u(a._id||a.id),h(!m);const e=JSON.parse(localStorage.getItem("notasFavoritas")||"[]"),t=a.id||a._id;if(m){const a=e.filter(e=>e!==t);localStorage.setItem("notasFavoritas",JSON.stringify(a))}else e.push(t),localStorage.setItem("notasFavoritas",JSON.stringify(e))}}catch(t){console.error("Erro ao favoritar nota:",t)}},title:"Favoritar",style:{color:m?"#FF6B6B":"inherit"},children:(0,Dl.jsx)(zo,{icon:pi})}),(0,Dl.jsx)(Is,{onClick:e=>{e.stopPropagation();const t=JSON.parse(localStorage.getItem("notasBookmarks")||"[]"),n=a.id||a._id;if(g){const e=t.filter(e=>e!==n);localStorage.setItem("notasBookmarks",JSON.stringify(e))}else t.push(n),localStorage.setItem("notasBookmarks",JSON.stringify(t));v(!g),d&&d(a)},title:"Adicionar aos favoritos",style:{color:g?"#FFD700":"inherit"},children:(0,Dl.jsx)(zo,{icon:Ko})}),(0,Dl.jsx)(Is,{onClick:e=>{e.stopPropagation(),(async()=>{const e=`${a.titulo}\n\n${a.conteudo||""}`;await As(e)&&l&&l("Conte\xfado copiado para a \xe1rea de transfer\xeancia!")})()},title:"Copiar conte\xfado",children:(0,Dl.jsx)(zo,{icon:Gi})}),(0,Dl.jsx)(Is,{onClick:e=>{e.stopPropagation(),f&&f(a)},title:"Exportar",children:(0,Dl.jsx)(zo,{icon:Ii})}),(0,Dl.jsx)(Is,{onClick:e=>{e.stopPropagation(),p&&p(a)},title:"Imprimir",children:(0,Dl.jsx)(zo,{icon:pl})}),(0,Dl.jsx)(Is,{onClick:e=>{e.stopPropagation(),i(a)},title:"Visualizar (n\xe3o editar)",children:(0,Dl.jsx)(zo,{icon:gi})}),(0,Dl.jsx)(Is,{onClick:e=>{e.stopPropagation(),r(a)},title:"Editar nota",children:(0,Dl.jsx)(zo,{icon:Ho})}),(0,Dl.jsx)(Is,{onClick:e=>{e.stopPropagation();window.confirm(`Tem certeza que deseja excluir a nota "${a.titulo}"?\n\nEsta a\xe7\xe3o n\xe3o pode ser desfeita.`)&&o(a._id||a.id)},className:"danger",title:"Excluir nota",children:(0,Dl.jsx)(zo,{icon:wi})})]})]}),"nota"!==n&&(0,Dl.jsx)(Ds,{children:(()=>{const e=[];return a.topico&&e.push((0,Dl.jsxs)(qs,{background:"var(--corFundoSecundaria)",children:[(0,Dl.jsx)(zo,{icon:Pi,size:"xs"}),a.topico]},"topico")),e})()}),(0,Dl.jsx)($s,{children:(()=>{if(!a.conteudo)return(0,Dl.jsx)("em",{children:"Sem conte\xfado"});return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(!e)return"";const a=e.replace(/<[^>]*>/g,"");return a.length<=t?e:a.substring(0,t)+"..."}(a.conteudo.replace(/<[^>]*>/g,""),"nota"===n?80:150)})()}),"nota"!==n&&(0,Dl.jsxs)(Bs,{children:[(0,Dl.jsxs)(Us,{children:[(0,Dl.jsxs)(Hs,{children:[(0,Dl.jsx)(zo,{icon:al}),"Criado: ",Ms(a.dataCriacao,"relativo")]}),a.dataModificacao&&a.dataCriacao!==a.dataModificacao&&(0,Dl.jsxs)(Hs,{children:[(0,Dl.jsx)(zo,{icon:Li}),"Editado: ",Ms(a.dataModificacao,"relativo")]})]}),(0,Dl.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:!1===a.ativo&&(0,Dl.jsx)(qs,{background:"var(--corErro)",color:"white",children:"Deletado"})})]})]}):(0,Dl.jsxs)(Ws,{children:[(0,Dl.jsx)(Vs,{children:(0,Dl.jsx)(zo,{icon:fl})}),(0,Dl.jsxs)(Gs,{children:["Nenhum ",n," encontrado"]}),(0,Dl.jsxs)(Ys,{children:['Clique no bot\xe3o "Novo ',n,'" para criar seu primeiro ',n,"."]})]})},Qs=Wt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoExtraGrande);
  min-height: 400px;
  text-align: center;
`,Xs=Wt.div`
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
`,Js=Wt.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  margin: 0;
`,Zs=Wt.p`
  color: var(--corTextoTerciaria);
  font-size: var(--tamanhoFontePequena);
  margin: var(--espacamentoPequeno) 0 0 0;
`,ec=e=>{let{mensagem:t="Carregando notas...",subMensagem:a="Aguarde um momento"}=e;return(0,Dl.jsxs)(Qs,{children:[(0,Dl.jsx)(Xs,{children:(0,Dl.jsx)(zo,{icon:el})}),(0,Dl.jsx)(Js,{children:t}),(0,Dl.jsx)(Zs,{children:a})]})},tc=Wt.div`
  padding: ${e=>"nota"===e.tipo?"var(--espacamentoMedio)":"var(--espacamentoGrande)"};
  min-height: 100vh;
`,ac=Wt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${e=>"nota"===e.tipo?"var(--espacamentoMedio)":"var(--espacamentoGrande)"};
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
`,nc=Wt.h1`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin: 0;
`,rc=Wt.span`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
`,oc=Wt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
`,ic=Wt.button`
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
`,lc=(Wt(ic)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`,Wt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${e=>"nota"===e.tipo?"var(--espacamentoMedio)":"var(--espacamentoGrande)"};
`),sc=Wt.div`
  position: relative;
  flex: 1;
  min-width: 250px;
`,cc=Wt.input`
  width: 100%;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  padding-left: 40px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoRapida);

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`,uc=Wt.div`
  position: absolute;
  left: var(--espacamentoMedio);
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
`,dc=Wt.select`
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,fc=Wt.div`
  display: ${e=>"nota"===e.tipo?"grid":"flex"};
  flex-direction: ${e=>"nota"===e.tipo?"unset":"column"};
  grid-template-columns: ${e=>"nota"===e.tipo?"repeat(2, 1fr)":"unset"};
  gap: var(--espacamentoMedio);
`,pc=Wt.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--espacamentoMedio);
  max-width: 1200px;
  margin: 0 auto;
`,mc=Wt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoMedio);
  background: var(--corFundoTerciaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  position: relative;
  min-height: 100px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--sombraMedia);
    border-color: var(--corPrimaria);
    background: var(--corFundoSecundaria);
  }
`,hc=Wt.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-bottom: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioPequena);
  transition: all var(--transicaoRapida);

  ${mc}:hover & {
    transform: scale(1.1);
  }
`,gc=Wt.span`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  text-align: center;
  word-break: break-word;
  max-width: 100%;
`,vc=Wt.div`
  position: absolute;
  top: var(--espacamentoPequeno);
  right: var(--espacamentoPequeno);
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity var(--transicaoRapida);

  ${mc}:hover & {
    opacity: 1;
  }
`,bc=Wt.button`
  background: var(--corFundoTerciaria);
  color: var(--corTextoSecundaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioPequena);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  font-size: 10px;

  &:hover {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
    transform: scale(1.1);
  }

  &.danger:hover {
    background: var(--corErro);
    border-color: var(--corErro);
  }
`,yc=Wt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border: 2px dashed var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  min-height: 100px;

  &:hover {
    border-color: var(--corPrimaria);
    background: var(--corFundoTerciaria);
    transform: translateY(-2px);
  }
`,xc=Wt.div`
  color: var(--corPrimaria);
  font-size: 24px;
  margin-bottom: var(--espacamentoPequeno);
`,wc=Wt.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  text-align: center;
`,Sc=Wt.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
  font-style: italic;
  grid-column: 1 / -1;
`,kc=e=>{let{itens:t,tipo:a,titulo:n,icone:r,carregando:o,onNovo:i,onEditar:l,onExcluir:s,onVisualizar:c,onCopiar:u,onExportar:d,onImprimir:f,onTelaCheia:p,onFavoritar:m,modoOrdenacao:h="automatico"}=e;const{definirTermoBusca:g,definirOrdenacao:v,termoBusca:b,ordenacao:y,erro:x,alternarFavorito:w}=$l();if(o)return(0,Dl.jsx)(tc,{children:(0,Dl.jsx)(ec,{mensagem:"Carregando notas...",subMensagem:"Conectando com o servidor"})});if(x)return(0,Dl.jsx)(tc,{children:(0,Dl.jsxs)("div",{style:{textAlign:"center",padding:"var(--espacamentoExtraGrande)",color:"var(--corErro)"},children:[(0,Dl.jsx)("h3",{children:"Erro ao carregar notas"}),(0,Dl.jsx)("p",{children:x}),(0,Dl.jsx)("button",{onClick:()=>window.location.reload(),style:{padding:"var(--espacamentoMedio) var(--espacamentoGrande)",background:"var(--corPrimaria)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",cursor:"pointer",marginTop:"var(--espacamentoMedio)"},children:"Tentar novamente"})]})});const S=e=>{e.url&&window.open(e.url,"_blank")},k=async e=>{try{await w(e)}catch(t){console.error("Erro ao favoritar item:",t)}};return"link"===a?(0,Dl.jsxs)(tc,{children:[(0,Dl.jsxs)(ac,{tipo:a,children:[(0,Dl.jsxs)(nc,{children:[(0,Dl.jsx)(zo,{icon:r}),n,(0,Dl.jsx)(rc,{children:t.length})]}),(0,Dl.jsx)(oc,{children:(0,Dl.jsxs)(ic,{onClick:i,children:[(0,Dl.jsx)(zo,{icon:Yi}),"Adicionar Link"]})})]}),(0,Dl.jsxs)(lc,{tipo:a,children:[(0,Dl.jsxs)(sc,{children:[(0,Dl.jsx)(uc,{children:(0,Dl.jsx)(zo,{icon:Hi})}),(0,Dl.jsx)(cc,{type:"text",placeholder:"Buscar notas...",value:b,onChange:e=>g(e.target.value)})]}),(0,Dl.jsxs)(dc,{value:y,onChange:e=>v(e.target.value),children:[(0,Dl.jsx)("option",{value:"dataCriacao",children:"Data de Cria\xe7\xe3o"}),(0,Dl.jsx)("option",{value:"dataModificacao",children:"Data de Modifica\xe7\xe3o"}),(0,Dl.jsx)("option",{value:"titulo",children:"T\xedtulo"}),(0,Dl.jsx)("option",{value:"topico",children:"T\xf3pico"})]})]}),(0,Dl.jsx)(pc,{children:0===t.length?(0,Dl.jsx)(Sc,{children:'Nenhum link adicionado ainda. Clique em "Adicionar Link" para come\xe7ar.'}):(0,Dl.jsxs)(Dl.Fragment,{children:[t.map((e,t)=>(0,Dl.jsxs)(mc,{onClick:()=>S(e),children:[(0,Dl.jsx)(hc,{src:e.urlIcone||e.icone,alt:e.titulo,onError:e=>{e.target.style.display="none"}}),(0,Dl.jsx)(gc,{children:e.titulo}),(0,Dl.jsxs)(vc,{onClick:e=>e.stopPropagation(),children:[(0,Dl.jsx)(bc,{onClick:()=>l(e),title:"Editar",children:(0,Dl.jsx)(zo,{icon:Ho})}),(0,Dl.jsx)(bc,{className:"danger",onClick:()=>s(e.id),title:"Remover",children:(0,Dl.jsx)(zo,{icon:wi})}),(0,Dl.jsx)(bc,{onClick:()=>S(e),title:"Abrir",children:(0,Dl.jsx)(zo,{icon:Ei})})]})]},e.id)),(0,Dl.jsxs)(yc,{onClick:i,children:[(0,Dl.jsx)(xc,{children:(0,Dl.jsx)(zo,{icon:Yi})}),(0,Dl.jsx)(wc,{children:"Adicionar"})]})]})})]}):(0,Dl.jsxs)(tc,{tipo:a,children:[(0,Dl.jsxs)(ac,{tipo:a,children:[(0,Dl.jsxs)(nc,{children:[(0,Dl.jsx)(zo,{icon:r}),n,(0,Dl.jsx)(rc,{children:t.length})]}),(0,Dl.jsx)(oc,{children:(0,Dl.jsxs)(ic,{onClick:i,children:[(0,Dl.jsx)(zo,{icon:Yi}),"Novo ",n.slice(0,-1)]})})]}),(0,Dl.jsxs)(lc,{tipo:a,children:[(0,Dl.jsxs)(sc,{children:[(0,Dl.jsx)(uc,{children:(0,Dl.jsx)(zo,{icon:Hi})}),(0,Dl.jsx)(cc,{type:"text",placeholder:"Buscar notas...",value:b,onChange:e=>g(e.target.value)})]}),(0,Dl.jsxs)(dc,{value:y,onChange:e=>v(e.target.value),children:[(0,Dl.jsx)("option",{value:"dataCriacao",children:"Data de Cria\xe7\xe3o"}),(0,Dl.jsx)("option",{value:"dataModificacao",children:"Data de Modifica\xe7\xe3o"}),(0,Dl.jsx)("option",{value:"titulo",children:"T\xedtulo"}),(0,Dl.jsx)("option",{value:"topico",children:"T\xf3pico"})]})]}),(0,Dl.jsx)(fc,{tipo:a,children:0===t.length?(0,Dl.jsxs)(Sc,{children:["Nenhum ",n.slice(0,-1).toLowerCase(),' adicionado ainda. Clique em "Novo ',n.slice(0,-1),'" para come\xe7ar.']}):t.map((e,t)=>(0,Dl.jsx)(Ks,{item:e,tipo:a,onEditar:()=>l(e),onExcluir:()=>s(e.id),onVisualizar:()=>c(e),onCopiar:()=>(async e=>{const t=`${e.titulo}\n${e.url||e.conteudo}`;await As(t)&&u&&u("Conte\xfado copiado para a \xe1rea de transfer\xeancia!")})(e),onExportar:()=>d&&d(e),onImprimir:()=>f&&f(e),onTelaCheia:p,onFavoritar:k},e.id))})]})},Ec=Wt.div`
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoTerciaria);
  overflow: hidden;
  transition: all var(--transicaoRapida);

  &:focus-within {
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Pc=Wt.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-bottom: 1px solid var(--corBordaPrimaria);
`,Cc=Wt.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  border-radius: var(--bordaRaioPequena);
  background: var(--corFundoTerciaria);
`,jc=Wt.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${e=>e.ativo?"var(--corPrimaria)":"transparent"};
  color: ${e=>e.ativo?"var(--corTextoClara)":"var(--corTextoPrimaria)"};
  border: none;
  border-radius: var(--bordaRaioPequena);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  font-size: var(--tamanhoFontePequena);

  &:hover {
    background: ${e=>e.ativo?"var(--corSecundaria)":"var(--corFundoSecundaria)"};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,Tc=Wt.div`
  width: 1px;
  background: var(--corBordaPrimaria);
  margin: 0 var(--espacamentoPequeno);
`,zc=Wt.div`
  position: relative;
  display: inline-block;
`,_c=Wt(jc)`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: ${e=>e.cor||"currentColor"};
    border-radius: 2px;
    border: 1px solid var(--corBordaPrimaria);
  }
`,Rc=Wt.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: var(--zIndexDropdown);
  background: var(--corFundoTerciaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  box-shadow: var(--sombraMedia);
  display: ${e=>e.visivel?"grid":"none"};
  grid-template-columns: repeat(8, 1fr);
  gap: var(--espacamentoPequeno);
  min-width: 200px;
`,Mc=Wt.button`
  width: 24px;
  height: 24px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioPequena);
  background: ${e=>e.cor};
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    transform: scale(1.2);
    border-color: var(--corPrimaria);
  }
`,Ac=Wt.div`
  min-height: 200px;
  max-height: 500px;
  padding: var(--espacamentoMedio);
  outline: none;
  overflow-y: auto;
  font-size: var(--tamanhoFonteMedia);
  line-height: 1.6;
  color: var(--corTextoPrimaria);
  
  /* Forçar direção LTR */
  direction: ltr !important;
  text-align: left !important;
  unicode-bidi: normal !important;
  writing-mode: horizontal-tb !important;
  
  &[contenteditable="true"] {
    direction: ltr !important;
    text-align: left !important;
  }

  &[contenteditable="true"]:empty:before {
    content: attr(placeholder);
    color: var(--corTextoTerciaria);
    pointer-events: none;
    direction: ltr !important;
    text-align: left !important;
  }

  /* Estilos para elementos formatados */
  strong, b {
    font-weight: bold;
  }

  em, i {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  s, strike {
    text-decoration: line-through;
  }

  p {
    margin: 0;
    padding: 0;
  }

  blockquote {
    border-left: 4px solid var(--corPrimaria);
    margin: var(--espacamentoMedio) 0;
    padding-left: var(--espacamentoMedio);
    font-style: italic;
    color: var(--corTextoSecundaria);
  }

  code {
    background: var(--corFundoSecundaria);
    padding: 2px 6px;
    border-radius: var(--bordaRaioPequena);
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background: var(--corFundoSecundaria);
    padding: var(--espacamentoMedio);
    border-radius: var(--bordaRaioMedia);
    overflow-x: auto;
  }

  ul, ol {
    margin: var(--espacamentoMedio) 0;
    padding-left: var(--espacamentoGrande);
  }

  a {
    color: var(--corPrimaria);
    text-decoration: none;
  }

  a:hover {
    color: var(--corSecundaria);
  }
`,Nc=["#000000","#ffffff","#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff","#800000","#008000","#000080","#808000","#800080","#008080","#808080","#c0c0c0","#ffa500","#ffc0cb","#dda0dd","#90ee90","#87ceeb","#f0e68c","#ffb6c1","#add8e6"],Lc=["transparent","#ffffff","#ffebee","#e8f5e8","#e3f2fd","#fff8e1","#fce4ec","#f3e5f5","#e0f2f1","#fff3e0","#f1f8e9","#e8eaf6","#fafafa","#f5f5f5","#eeeeee","#e0e0e0"],Oc=t=>{let{valor:a,onChange:n,placeholder:r="Digite seu texto aqui...",alturaMinima:o="200px",alturaMaxima:i="500px",usarTextarea:l=!1}=t;const[s,c]=(0,e.useState)(!1),[u,d]=(0,e.useState)(!1),[f,p]=(0,e.useState)([]),[m,h]=(0,e.useState)(-1),[g,v]=(0,e.useState)(l),b=(0,e.useRef)(null),y=(0,e.useRef)("");(0,e.useEffect)(()=>{b.current&&a!==y.current&&(b.current.innerHTML=a||"",y.current=a||"")},[a]);const x=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;document.execCommand(e,!1,a),null===(t=b.current)||void 0===t||t.focus(),w()},w=(0,e.useCallback)(()=>{if(b.current){const e=b.current.innerHTML;if(e!==y.current){y.current=e;const t=f.slice(0,m+1);t.push(e),p(t),h(t.length-1),n&&n(e)}}},[f,m,n]),S=m>0,k=m<f.length-1;return(0,Dl.jsx)(Ec,{children:g?(0,Dl.jsx)("textarea",{ref:b,value:a||"",onChange:e=>{const t=e.target.value;t!==y.current&&(y.current=t,n&&n(t))},placeholder:r,style:{width:"100%",minHeight:o,maxHeight:i,padding:"var(--espacamentoMedio)",border:"2px solid var(--corBordaPrimaria)",borderRadius:"var(--bordaRaioMedia)",fontSize:"var(--tamanhoFonteMedia)",lineHeight:"1.6",color:"var(--corTextoPrimaria)",backgroundColor:"var(--corFundoTerciaria)",direction:"ltr",textAlign:"left",resize:"vertical",outline:"none"}}):(0,Dl.jsxs)(Dl.Fragment,{children:[(0,Dl.jsxs)(Pc,{children:[(0,Dl.jsxs)(Cc,{children:[(0,Dl.jsx)(jc,{onClick:()=>{if(m>0){const e=m-1;if(h(e),b.current){const t=f[e];b.current.innerHTML=t,y.current=t,n&&n(t)}}},disabled:!S,title:"Desfazer",children:(0,Dl.jsx)(zo,{icon:_i})}),(0,Dl.jsx)(jc,{onClick:()=>{if(m<f.length-1){const e=m+1;if(h(e),b.current){const t=f[e];b.current.innerHTML=t,y.current=t,n&&n(t)}}},disabled:!k,title:"Refazer",children:(0,Dl.jsx)(zo,{icon:xi})})]}),(0,Dl.jsx)(Tc,{}),(0,Dl.jsxs)(Cc,{children:[(0,Dl.jsx)(jc,{onClick:()=>x("bold"),title:"Negrito",children:(0,Dl.jsx)(zo,{icon:ai})}),(0,Dl.jsx)(jc,{onClick:()=>x("italic"),title:"It\xe1lico",children:(0,Dl.jsx)(zo,{icon:ui})}),(0,Dl.jsx)(jc,{onClick:()=>x("underline"),title:"Sublinhado",children:(0,Dl.jsx)(zo,{icon:ti})}),(0,Dl.jsx)(jc,{onClick:()=>x("strikeThrough"),title:"Tachado",children:(0,Dl.jsx)(zo,{icon:Io})})]}),(0,Dl.jsx)(Tc,{}),(0,Dl.jsxs)(Cc,{children:[(0,Dl.jsx)(jc,{onClick:()=>x("justifyLeft"),title:"Alinhar \xe0 Esquerda",children:(0,Dl.jsx)(zo,{icon:Si})}),(0,Dl.jsx)(jc,{onClick:()=>x("justifyCenter"),title:"Centralizar",children:(0,Dl.jsx)(zo,{icon:Di})}),(0,Dl.jsx)(jc,{onClick:()=>x("justifyRight"),title:"Alinhar \xe0 Direita",children:(0,Dl.jsx)(zo,{icon:ul})}),(0,Dl.jsx)(jc,{onClick:()=>x("justifyFull"),title:"Justificar",children:(0,Dl.jsx)(zo,{icon:Qo})})]}),(0,Dl.jsx)(Tc,{}),(0,Dl.jsxs)(Cc,{children:[(0,Dl.jsx)(jc,{onClick:()=>x("insertUnorderedList"),title:"Lista N\xe3o Ordenada",children:(0,Dl.jsx)(zo,{icon:Vi})}),(0,Dl.jsx)(jc,{onClick:()=>x("insertOrderedList"),title:"Lista Ordenada",children:(0,Dl.jsx)(zo,{icon:di})}),(0,Dl.jsx)(jc,{onClick:()=>x("formatBlock","<blockquote>"),title:"Cita\xe7\xe3o",children:(0,Dl.jsx)(zo,{icon:Ji})}),(0,Dl.jsx)(jc,{onClick:()=>x("formatBlock","<pre>"),title:"C\xf3digo",children:(0,Dl.jsx)(zo,{icon:fi})})]}),(0,Dl.jsx)(Tc,{}),(0,Dl.jsxs)(Cc,{children:[(0,Dl.jsx)(jc,{onClick:()=>{const e=prompt("Digite a URL:");if(e){const t=e.startsWith("http://")||e.startsWith("https://")?e:`https://${e}`;x("createLink",t)}},title:"Inserir Link",children:(0,Dl.jsx)(zo,{icon:$i})}),(0,Dl.jsx)(jc,{onClick:()=>{x("unlink")},title:"Remover Link",children:(0,Dl.jsx)(zo,{icon:rl})}),(0,Dl.jsx)(jc,{onClick:()=>{x("insertHorizontalRule")},title:"Inserir Linha Horizontal",children:(0,Dl.jsx)(zo,{icon:Ri})})]}),(0,Dl.jsx)(Tc,{}),(0,Dl.jsxs)(zc,{children:[(0,Dl.jsx)(_c,{onClick:()=>c(!s),title:"Cor do Texto",children:(0,Dl.jsx)(zo,{icon:ii})}),(0,Dl.jsx)(Rc,{visivel:s,children:Nc.map(e=>(0,Dl.jsx)(Mc,{cor:e,onClick:()=>(e=>{x("foreColor",e),c(!1)})(e),title:e},e))})]}),(0,Dl.jsxs)(zc,{children:[(0,Dl.jsx)(_c,{onClick:()=>d(!u),title:"Cor de Fundo",children:(0,Dl.jsx)(zo,{icon:Ro})}),(0,Dl.jsx)(Rc,{visivel:u,children:Lc.map(e=>(0,Dl.jsx)(Mc,{cor:e,onClick:()=>(e=>{x("hiliteColor","transparent"===e?"transparent":e),d(!1)})(e),title:"transparent"===e?"Transparente":e},e))})]}),(0,Dl.jsx)(jc,{onClick:()=>{v(!0)},title:"Alternar para Textarea",children:(0,Dl.jsx)(zo,{icon:Oi})})]}),(0,Dl.jsx)(Ac,{ref:b,contentEditable:!g,placeholder:r,onInput:w,onBlur:w,onClick:e=>{const t=e.target;"A"===t.tagName&&t.href&&(e.preventDefault(),window.open(t.href,"_blank","noopener,noreferrer"))},style:{minHeight:o,maxHeight:i}})]})})},Fc=Wt.div`
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
  padding: var(--espacamentoGrande);
`,Ic=Wt.div`
  background: var(--corFundoTerciaria);
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraForte);
  width: 100%;
  max-width: 1000px;
  max-height: 85vh;
  overflow: hidden;
  animation: fadeIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
`,Dc=Wt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamentoMedio);
  border-bottom: 1px solid var(--corBordaPrimaria);
  background: var(--corFundoSecundaria);
  flex-shrink: 0;
`,qc=Wt.h2`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteExtraGrande);
  margin: 0;
`,$c=Wt.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteExtraGrande);
  cursor: pointer;
  padding: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioPequena);
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corFundoSecundaria);
    color: var(--corTextoPrimaria);
  }
`,Bc=Wt.div`
  padding: var(--espacamentoMedio);
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  max-height: calc(85vh - 80px); /* Altura máxima menos o header */
`,Uc=Wt.div`
  margin-bottom: var(--espacamentoMedio);
`,Hc=Wt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--espacamentoMedio);
  }
`,Wc=Wt.label`
  display: block;
  margin-bottom: var(--espacamentoPequeno);
  color: var(--corTextoPrimaria);
  font-weight: 600;
  font-size: var(--tamanhoFonteMedia);
`,Vc=Wt.input`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoRapida);

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`,Gc=Wt.select`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Yc=Wt.option`
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
  padding: var(--espacamentoPequeno);
`,Kc=Wt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-top: 1px solid var(--corBordaPrimaria);
  background: var(--corFundoSecundaria);
  flex-shrink: 0;
`,Qc=Wt.button`
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
`,Xc=Wt(Qc)`
  background: var(--corPrimaria);
  color: var(--corTextoClara);

  &:hover:not(:disabled) {
    background: var(--corSecundaria);
    transform: translateY(-2px);
  }
`,Jc=Wt.button`
  background: var(--corErro);
  color: var(--corTextoClara);
  border: none;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);

  &:hover {
    background: var(--corErroHover);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Zc=Wt(Qc)`
  background: var(--corTextoSecundaria);
  color: var(--corTextoClara);

  &:hover:not(:disabled) {
    background: var(--corTextoPrimaria);
    transform: translateY(-2px);
  }
`,eu=(Wt.div`
  color: var(--corErro);
  font-size: var(--tamanhoFontePequena);
  margin-top: var(--espacamentoPequeno);
`,Wt.div`
  display: flex;
  gap: var(--espacamentoMedio);
`,Wt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
  margin-left: auto;
  margin-right: var(--espacamentoMedio);
`),tu=Wt.span`
  color: ${e=>"salvando"===e.status?"var(--corAviso)":"salvo"===e.status?"var(--corSucesso)":"erro"===e.status?"var(--corErro)":"var(--corTextoSecundaria)"};
`,au=t=>{let{visivel:a,tipo:n,item:r=null,onSalvar:o,onExcluir:i,onFechar:l,carregando:s=!1}=t;const c=e=>{if(!e)return"rgb(102, 126, 234)";const t=e.replace("#","");return`rgb(${parseInt(t.substring(0,2),16)}, ${parseInt(t.substring(2,4),16)}, ${parseInt(t.substring(4,6),16)})`},{categorias:u}=$l(),[d,f]=(0,e.useState)({titulo:"",conteudo:"",topico:""}),[p,m]=(0,e.useState)("salvo"),[h,g]=(0,e.useState)(null),v=(0,e.useRef)(null);(0,e.useEffect)(()=>{r?(f({titulo:r.titulo||"",conteudo:r.conteudo||"",topico:r.topico||""}),m("salvo"),g(new Date)):(f({titulo:"",conteudo:"",topico:""}),m("salvo"),g(null))},[r]);const b=(0,e.useCallback)(async()=>{if(y()){console.log("\ud83d\udcdd ModalItem - executarSalvamento chamado com formData:",d),m("salvando");try{if(r&&(r.id||r._id)){const e=r.id||r._id;console.log("\ud83d\udcdd ModalItem - Atualizando nota com ID:",e),await o(e,d)}else console.log("\ud83d\udcdd ModalItem - Criando nova nota"),await o(null,d);m("salvo"),g(new Date)}catch(e){console.error("Erro ao salvar automaticamente:",e),m("erro")}}},[d,r,o]),y=()=>""!==d.titulo.trim()&&""!==d.conteudo.trim(),x=(e,t)=>{f(a=>({...a,[e]:t})),v.current=new Date},w=()=>{switch(p){case"salvando":case"erro":return ll;case"salvo":return ol;default:return null}};return a?(0,Dl.jsx)(Fc,{onClick:l,children:(0,Dl.jsxs)(Ic,{onClick:e=>e.stopPropagation(),children:[(0,Dl.jsxs)(Dc,{children:[(0,Dl.jsx)(qc,{children:r?"Editar Nota":"Nova Nota"}),(0,Dl.jsx)(eu,{children:(0,Dl.jsxs)(tu,{status:p,children:[w()&&(0,Dl.jsx)(zo,{icon:w()}),(()=>{switch(p){case"salvando":return"Salvando...";case"salvo":return h?`Salvo \xe0s ${h.toLocaleTimeString()}`:"Salvo";case"erro":return"Erro ao salvar";default:return""}})()]})}),(0,Dl.jsx)($c,{onClick:l,children:(0,Dl.jsx)(zo,{icon:Xi})})]}),(0,Dl.jsxs)(Bc,{children:[(0,Dl.jsxs)(Hc,{children:[(0,Dl.jsxs)(Uc,{children:[(0,Dl.jsx)(Wc,{children:"T\xedtulo *"}),(0,Dl.jsx)(Vc,{type:"text",value:d.titulo,onChange:e=>x("titulo",e.target.value),placeholder:"Digite o t\xedtulo da nota..."})]}),(0,Dl.jsxs)(Uc,{children:[(0,Dl.jsx)(Wc,{children:"T\xf3pico"}),(0,Dl.jsxs)(Gc,{value:d.topico,onChange:e=>x("topico",e.target.value),children:[(0,Dl.jsx)(Yc,{value:"",children:"Selecione um t\xf3pico..."}),u.map(e=>({value:e.nome,label:e.nome,cor:e.cor,descricao:e.descricao})).map(e=>(0,Dl.jsx)(Yc,{value:e.value,children:e.label},e.value))]}),u&&u.length>0&&(0,Dl.jsxs)("div",{style:{marginTop:"var(--espacamentoMedio)",fontSize:"var(--tamanhoFontePequena)",color:"var(--corTextoSecundaria)"},children:[(0,Dl.jsxs)("div",{style:{marginBottom:"var(--espacamentoPequeno)"},children:["Categorias dispon\xedveis (",u?u.length:0,"):"]}),(0,Dl.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--espacamentoPequeno)",maxHeight:"100px",overflowY:"auto"},children:u.map(e=>(0,Dl.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",padding:"4px 8px",backgroundColor:d.topico===e.nome?"var(--corPrimaria)":"var(--corFundoTerciaria)",color:d.topico===e.nome?"var(--corTextoClara)":"var(--corTextoPrimaria)",borderRadius:"var(--bordaRaioPequena)",border:"1px solid "+(d.topico===e.nome?"var(--corPrimaria)":"var(--corBordaPrimaria)"),fontSize:"var(--tamanhoFontePequena)",cursor:"pointer",transition:"all var(--transicaoRapida)",transform:d.topico===e.nome?"scale(1.05)":"scale(1)"},onMouseEnter:t=>{d.topico!==e.nome&&(t.target.style.backgroundColor="var(--corFundoSecundaria)",t.target.style.transform="scale(1.02)")},onMouseLeave:t=>{d.topico!==e.nome&&(t.target.style.backgroundColor="var(--corFundoTerciaria)",t.target.style.transform="scale(1)")},onClick:()=>x("topico",e.nome),title:e.descricao||e.nome,children:[(0,Dl.jsx)("div",{style:{width:"16px",height:"16px",borderRadius:"var(--bordaRaioPequena)",backgroundColor:e.cor||"#667eea",border:"2px solid var(--corBordaPrimaria)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"8px",fontWeight:"bold",textShadow:"1px 1px 1px rgba(0,0,0,0.5)"},title:`HEX: ${e.cor||"#667eea"} | RGB: ${c(e.cor||"#667eea")}`,children:e.cor?e.cor.substring(1,3):"66"}),e.nome]},e.id))})]})]})]}),(0,Dl.jsxs)(Uc,{children:[(0,Dl.jsx)(Wc,{children:"Conte\xfado *"}),(0,Dl.jsx)(Oc,{valor:d.conteudo,onChange:e=>x("conteudo",e),placeholder:"Digite o conte\xfado da nota...",alturaMinima:"300px",alturaMaxima:"600px"})]})]}),(0,Dl.jsxs)(Kc,{children:[(0,Dl.jsx)("div",{children:r&&(r.id||r._id)&&(0,Dl.jsxs)(Jc,{onClick:()=>{if(!r||!r.id&&!r._id)return void alert("N\xe3o \xe9 poss\xedvel excluir uma nota que ainda n\xe3o foi salva.");if(window.confirm(`Tem certeza que deseja excluir a nota "${r.titulo}"?\n\nEsta a\xe7\xe3o n\xe3o pode ser desfeita.`)){const e=r.id||r._id;i(e)}},disabled:s,children:[(0,Dl.jsx)(zo,{icon:wi}),"Excluir Nota"]})}),(0,Dl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoMedio)"},children:[(0,Dl.jsx)(Zc,{onClick:l,disabled:s,children:"Cancelar"}),(0,Dl.jsx)(Xc,{onClick:async()=>{y()?await b():alert("Por favor, preencha o t\xedtulo e o conte\xfado da nota.")},disabled:s||!y(),children:s?(0,Dl.jsx)(cs,{tamanho:"14px"}):(0,Dl.jsxs)(Dl.Fragment,{children:[(0,Dl.jsx)(zo,{icon:bi}),"Salvar"]})})]})]})]})}):null},nu=Wt.div`
  background: var(--corFundoTerciaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  box-shadow: var(--sombraLeve);
`,ru=Wt.h3`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,ou=Wt.p`
  color: var(--corTextoSecundaria);
  margin-bottom: var(--espacamentoMedio);
  font-size: var(--tamanhoFonteMedia);
`,iu=t=>{var a,n,r,o;let{visivel:i,onFechar:l}=t;const{categorias:s,adicionarCategoria:c,removerCategoria:u,editarCategoria:d,recarregarDados:f}=$l(),[p,m]=(0,e.useState)("categorias"),[h,g]=(0,e.useState)(null),[v,b]=(0,e.useState)({nome:"",descricao:"",cor:"#667eea"}),[y,x]=(0,e.useState)(!1),[w,S]=(0,e.useState)(!1),[k,E]=(0,e.useState)([]),[P,C]=(0,e.useState)(null),[j,T]=(0,e.useState)(!1),[z,_]=(0,e.useState)([]),[R,M]=(0,e.useState)(null),[A,N]=(0,e.useState)(!1),[L,O]=(0,e.useState)("all"),F=e=>{if(!e)return"rgb(102, 126, 234)";const t=e.replace("#","");return`rgb(${parseInt(t.substring(0,2),16)}, ${parseInt(t.substring(2,4),16)}, ${parseInt(t.substring(4,6),16)})`},I=async()=>{try{T(!0);const[e,t]=await Promise.all([wl.buscarLogs(),wl.buscarStatus()]);E(e.logs||[]),C(t)}catch(e){console.error("Erro ao carregar logs de sincroniza\xe7\xe3o:",e)}finally{T(!1)}},D=()=>{S(!1)},q=async()=>{try{T(!0),await wl.sincronizarManual(),await I()}catch(e){console.error("Erro ao executar sincroniza\xe7\xe3o manual:",e)}finally{T(!1)}},$=e=>new Date(e).toLocaleString("pt-BR"),B=e=>{switch(e){case"error":return Xi;case"success":return ol;default:return Ai}},U=async()=>{try{N(!0);const e=await fetch(`${gl("/logs")}?type=${"all"!==L?L:""}`),t=await e.json();_(t.logs||[]),M(t.stats)}catch(e){console.error("Erro ao carregar logs do sistema:",e),alert("Erro ao carregar logs: "+e.message)}finally{N(!1)}};(0,e.useEffect)(()=>{"logs"===p&&i&&U()},[p,L,i]);return i?(0,Dl.jsxs)("div",{style:{padding:"var(--espacamentoGrande)"},children:[(0,Dl.jsxs)("div",{style:{background:"var(--corFundoTerciaria)",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoGrande)",boxShadow:"var(--sombraLeve)"},children:[(0,Dl.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--espacamentoGrande)",paddingBottom:"var(--espacamentoMedio)",borderBottom:"1px solid var(--corBordaPrimaria)"},children:[(0,Dl.jsxs)("h2",{style:{color:"var(--corTextoPrimaria)",margin:0,display:"flex",alignItems:"center",gap:"var(--espacamentoMedio)"},children:[(0,Dl.jsx)(zo,{icon:Ai}),"Configura\xe7\xf5es"]}),l&&(0,Dl.jsx)("button",{onClick:l,style:{background:"none",border:"none",color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFonteTitulo)",cursor:"pointer",padding:"var(--espacamentoPequeno)",borderRadius:"var(--bordaRaioMedia)",transition:"all var(--transicaoRapida)"},children:(0,Dl.jsx)(zo,{icon:Xi})})]}),(0,Dl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoPequeno)",marginBottom:"var(--espacamentoMedio)",borderBottom:"1px solid var(--corBordaPrimaria)"},children:[(0,Dl.jsxs)("button",{onClick:()=>m("categorias"),style:{background:"categorias"===p?"var(--corPrimaria)":"var(--corFundoSecundaria)",color:"categorias"===p?"var(--corTextoClara)":"var(--corTextoPrimaria)",border:"none",borderRadius:"var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFonteMedia)",fontWeight:"bold",transition:"all var(--transicaoRapida)"},children:[(0,Dl.jsx)(zo,{icon:mi}),"Categorias"]}),(0,Dl.jsxs)("button",{onClick:()=>m("sincronizacao"),style:{background:"sincronizacao"===p?"var(--corPrimaria)":"var(--corFundoSecundaria)",color:"sincronizacao"===p?"var(--corTextoClara)":"var(--corTextoPrimaria)",border:"none",borderRadius:"var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFonteMedia)",fontWeight:"bold",transition:"all var(--transicaoRapida)"},children:[(0,Dl.jsx)(zo,{icon:ci}),"Sincroniza\xe7\xe3o"]}),(0,Dl.jsxs)("button",{onClick:()=>m("debug"),style:{background:"debug"===p?"var(--corPrimaria)":"var(--corFundoSecundaria)",color:"debug"===p?"var(--corTextoClara)":"var(--corTextoPrimaria)",border:"none",borderRadius:"var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFonteMedia)",fontWeight:"bold",transition:"all var(--transicaoRapida)"},children:[(0,Dl.jsx)(zo,{icon:qi}),"Debug"]}),(0,Dl.jsxs)("button",{onClick:()=>m("logs"),style:{background:"logs"===p?"var(--corPrimaria)":"var(--corFundoSecundaria)",color:"logs"===p?"var(--corTextoClara)":"var(--corTextoPrimaria)",border:"none",borderRadius:"var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFonteMedia)",fontWeight:"bold",transition:"all var(--transicaoRapida)"},children:[(0,Dl.jsx)(zo,{icon:hi}),"Logs"]})]}),"categorias"===p&&(0,Dl.jsxs)(nu,{children:[(0,Dl.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--espacamentoGrande)"},children:[(0,Dl.jsxs)("div",{children:[(0,Dl.jsxs)(ru,{children:[(0,Dl.jsx)(zo,{icon:Xo}),"Gerenciar Categorias"]}),(0,Dl.jsx)(ou,{children:"Crie e gerencie categorias para organizar suas notas. As categorias ajudam a categorizar e encontrar suas notas mais facilmente."})]}),(0,Dl.jsxs)("button",{onClick:()=>x(!y),style:{background:"var(--corPrimaria)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoMedio) var(--espacamentoGrande)",cursor:"pointer",fontSize:"var(--tamanhoFonteMedia)",fontWeight:"bold",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)",transition:"all var(--transicaoRapida)",boxShadow:"var(--sombraLeve)"},onMouseEnter:e=>{e.target.style.background="var(--corSecundaria)",e.target.style.transform="translateY(-2px)",e.target.style.boxShadow="var(--sombraMedia)"},onMouseLeave:e=>{e.target.style.background="var(--corPrimaria)",e.target.style.transform="translateY(0)",e.target.style.boxShadow="var(--sombraLeve)"},children:[(0,Dl.jsx)(zo,{icon:y?Xi:Yi}),y?"Cancelar":"Nova Categoria"]})]}),(0,Dl.jsxs)("div",{style:{marginBottom:"var(--espacamentoGrande)"},children:[(0,Dl.jsxs)("h4",{style:{color:"var(--corTextoPrimaria)",marginBottom:"var(--espacamentoMedio)"},children:["Categorias Existentes (",s?s.length:0,")"]}),s&&0!==s.length?(0,Dl.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"var(--espacamentoPequeno)"},children:s&&s.map((e,t)=>(0,Dl.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--espacamentoMedio)",background:"var(--corFundoTerciaria)",borderRadius:"var(--bordaRaioMedia)",border:"1px solid var(--corBordaPrimaria)"},children:[(0,Dl.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"var(--espacamentoMedio)",flex:1},children:[(0,Dl.jsx)("div",{style:{width:"32px",height:"32px",borderRadius:"var(--bordaRaioMedia)",backgroundColor:e.cor||"#667eea",border:"2px solid var(--corBordaPrimaria)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"10px",fontWeight:"bold",textShadow:"1px 1px 2px rgba(0,0,0,0.5)",cursor:"pointer"},title:`Cor: ${e.cor||"#667eea"}`,onClick:()=>{navigator.clipboard.writeText(e.cor||"#667eea"),alert(`Cor ${e.cor||"#667eea"} copiada para a \xe1rea de transfer\xeancia!`)},children:e.cor?e.cor.substring(1,4):"667"}),(0,Dl.jsxs)("div",{style:{flex:1},children:[(0,Dl.jsx)("span",{style:{color:"var(--corTextoPrimaria)",fontSize:"var(--tamanhoFonteMedia)"},children:e.nome}),e.descricao&&(0,Dl.jsx)("p",{style:{color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFontePequena)",margin:"var(--espacamentoPequeno) 0 0 0"},children:e.descricao}),(0,Dl.jsxs)("div",{style:{fontSize:"var(--tamanhoFontePequena)",color:"var(--corTextoSecundaria)",marginTop:"2px"},children:["HEX: ",e.cor||"#667eea"," | RGB: ",F(e.cor||"#667eea")]})]})]}),(0,Dl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)("button",{onClick:()=>(e=>{const t=s[e];g(e),b({nome:t.nome,descricao:t.descricao||"",cor:t.cor||"#667eea"}),x(!0)})(t),title:"Editar categoria",style:{background:"var(--corPrimaria)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all var(--transicaoRapida)"},children:(0,Dl.jsx)(zo,{icon:Ho})}),(0,Dl.jsx)("button",{onClick:()=>(async e=>{if(window.confirm("Tem certeza que deseja remover esta categoria?"))try{const t=s[e];await u(t.id)}catch(t){console.error("Erro ao remover categoria:",t),alert("Erro ao remover categoria: "+t.message)}})(t),title:"Remover categoria",style:{background:"var(--corErro)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all var(--transicaoRapida)"},children:(0,Dl.jsx)(zo,{icon:wi})})]})]},e.id||t))}):(0,Dl.jsx)("p",{style:{color:"var(--corTextoSecundaria)",textAlign:"center",padding:"var(--espacamentoGrande)"},children:'Nenhuma categoria criada ainda. Crie sua primeira categoria clicando no bot\xe3o "Nova Categoria"!'})]}),y&&(0,Dl.jsxs)("form",{onSubmit:e=>{e.preventDefault(),null!==h?(async()=>{if(v.nome.trim())try{const e=s[h],t={nome:v.nome.trim(),descricao:v.descricao.trim(),cor:v.cor||"#667eea"};await d(e.id,t),g(null),b({nome:"",descricao:"",cor:"#667eea"}),x(!1)}catch(e){console.error("Erro ao salvar categoria:",e),alert("Erro ao salvar categoria: "+e.message)}})():(async()=>{if(v.nome.trim())try{const e={nome:v.nome.trim(),descricao:v.descricao.trim(),cor:v.cor||"#667eea"};await c(e),b({nome:"",descricao:"",cor:"#667eea"}),x(!1)}catch(e){console.error("Erro ao adicionar categoria:",e),alert("Erro ao adicionar categoria: "+e.message)}})()},style:{display:"flex",flexDirection:"column",gap:"var(--espacamentoMedio)"},children:[(0,Dl.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,Dl.jsx)("label",{style:{color:"var(--corTextoPrimaria)",fontSize:"var(--tamanhoFonteMedia)",marginBottom:"var(--espacamentoPequeno)"},children:"Nome da Categoria *"}),(0,Dl.jsx)("input",{type:"text",value:v.nome,onChange:e=>b({...v,nome:e.target.value}),placeholder:"Ex: Trabalho, Pessoal, Projetos...",maxLength:50,required:!0,style:{padding:"var(--espacamentoMedio)",border:"2px solid var(--corBordaPrimaria)",borderRadius:"var(--bordaRaioMedia)",fontSize:"var(--tamanhoFonteMedia)",background:"var(--corFundoTerciaria)",color:"var(--corTextoPrimaria)"}})]}),(0,Dl.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,Dl.jsx)("label",{style:{color:"var(--corTextoPrimaria)",fontSize:"var(--tamanhoFonteMedia)",marginBottom:"var(--espacamentoPequeno)"},children:"Descri\xe7\xe3o"}),(0,Dl.jsx)("input",{type:"text",value:v.descricao,onChange:e=>b({...v,descricao:e.target.value}),placeholder:"Descri\xe7\xe3o opcional da categoria...",maxLength:200,style:{padding:"var(--espacamentoMedio)",border:"2px solid var(--corBordaPrimaria)",borderRadius:"var(--bordaRaioMedia)",fontSize:"var(--tamanhoFonteMedia)",background:"var(--corFundoTerciaria)",color:"var(--corTextoPrimaria)"}})]}),(0,Dl.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,Dl.jsx)("label",{style:{color:"var(--corTextoPrimaria)",fontSize:"var(--tamanhoFonteMedia)",marginBottom:"var(--espacamentoPequeno)"},children:"Cor"}),(0,Dl.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"var(--espacamentoMedio)"},children:[(0,Dl.jsx)("input",{type:"color",value:v.cor||"#667eea",onChange:e=>b({...v,cor:e.target.value}),style:{width:"100px",height:"40px",backgroundColor:v.cor||"#667eea",border:"2px solid var(--corBordaPrimaria)",borderRadius:"var(--bordaRaioMedia)",cursor:"pointer"}}),(0,Dl.jsx)("div",{style:{width:"40px",height:"40px",borderRadius:"var(--bordaRaioMedia)",backgroundColor:v.cor||"#667eea",border:"2px solid var(--corBordaPrimaria)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"var(--tamanhoFontePequena)",fontWeight:"bold",textShadow:"1px 1px 2px rgba(0,0,0,0.5)"},title:`Cor selecionada: ${v.cor||"#667eea"}`,children:v.cor||"#667eea"})]}),(0,Dl.jsxs)("div",{style:{marginTop:"var(--espacamentoPequeno)",fontSize:"var(--tamanhoFontePequena)",color:"var(--corTextoSecundaria)",display:"flex",gap:"var(--espacamentoMedio)"},children:[(0,Dl.jsxs)("span",{children:["HEX: ",v.cor||"#667eea"]}),(0,Dl.jsxs)("span",{children:["RGB: ",F(v.cor||"#667eea")]})]})]}),(0,Dl.jsx)("div",{style:{display:"flex",gap:"var(--espacamentoMedio)",marginTop:"var(--espacamentoMedio)"},children:null!==h?(0,Dl.jsxs)(Dl.Fragment,{children:[(0,Dl.jsxs)("button",{type:"submit",style:{background:"var(--corSucesso)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoMedio)",display:"flex",alignItems:"center",gap:"var(--espacamentoMedio)",cursor:"pointer",transition:"all var(--transicaoRapida)",fontSize:"var(--tamanhoFonteMedia)"},children:[(0,Dl.jsx)(zo,{icon:ol}),"Salvar Altera\xe7\xf5es"]}),(0,Dl.jsxs)("button",{type:"button",onClick:()=>{g(null),b({nome:"",descricao:"",cor:"#667eea"}),x(!1)},style:{background:"var(--corErro)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoMedio)",display:"flex",alignItems:"center",gap:"var(--espacamentoMedio)",cursor:"pointer",transition:"all var(--transicaoRapida)",fontSize:"var(--tamanhoFonteMedia)"},children:[(0,Dl.jsx)(zo,{icon:Xi}),"Cancelar"]})]}):(0,Dl.jsxs)("button",{type:"submit",style:{background:"var(--corPrimaria)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoMedio)",display:"flex",alignItems:"center",gap:"var(--espacamentoMedio)",cursor:"pointer",transition:"all var(--transicaoRapida)",fontSize:"var(--tamanhoFonteMedia)"},children:[(0,Dl.jsx)(zo,{icon:Yi}),"Adicionar Categoria"]})})]})]}),"sincronizacao"===p&&(0,Dl.jsxs)(nu,{children:[(0,Dl.jsxs)(ru,{children:[(0,Dl.jsx)(zo,{icon:ci}),"Sincroniza\xe7\xe3o com Firebase"]}),(0,Dl.jsx)(ou,{children:"Gerencie a sincroniza\xe7\xe3o de dados entre dispositivos atrav\xe9s do Firebase."}),(0,Dl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoMedio)",marginTop:"var(--espacamentoMedio)"},children:[(0,Dl.jsxs)("button",{onClick:async()=>{S(!0),await I()},style:{background:"var(--corPrimaria)",color:"var(--corTextoClara)",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoMedio)",display:"flex",alignItems:"center",gap:"var(--espacamentoMedio)",cursor:"pointer",transition:"all var(--transicaoRapida)",fontSize:"var(--tamanhoFonteMedia)"},children:[(0,Dl.jsx)(zo,{icon:gi}),"Ver Logs de Sincroniza\xe7\xe3o"]}),(0,Dl.jsxs)("button",{onClick:q,disabled:j,style:{background:"var(--corPrimaria)",color:"var(--corTextoClara)",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoMedio)",display:"flex",alignItems:"center",gap:"var(--espacamentoMedio)",cursor:j?"not-allowed":"pointer",transition:"all var(--transicaoRapida)",fontSize:"var(--tamanhoFonteMedia)",opacity:j?.5:1},children:[(0,Dl.jsx)(zo,{icon:Bi}),j?"Sincronizando...":"Sincronizar Agora"]})]})]}),"debug"===p&&(0,Dl.jsxs)(nu,{children:[(0,Dl.jsxs)(ru,{children:[(0,Dl.jsx)(zo,{icon:qi}),"Ferramentas de Debug"]}),(0,Dl.jsx)(ou,{children:"Ferramentas para diagnosticar problemas e testar funcionalidades do sistema."}),(0,Dl.jsxs)("div",{style:{display:"grid",gap:"var(--espacamentoMedio)",marginTop:"var(--espacamentoGrande)"},children:[(0,Dl.jsxs)("div",{style:{background:"var(--corFundoSecundaria)",padding:"var(--espacamentoMedio)",borderRadius:"var(--bordaRaioMedia)",border:"1px solid var(--corBordaPrimaria)"},children:[(0,Dl.jsxs)("h4",{style:{color:"var(--corTextoPrimaria)",margin:"0 0 var(--espacamentoMedio) 0",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:Jo}),"Autentica\xe7\xe3o"]}),(0,Dl.jsx)("div",{style:{display:"flex",gap:"var(--espacamentoPequeno)",flexWrap:"wrap"},children:(0,Dl.jsxs)("button",{onClick:Fl,style:{background:"var(--corPrimaria)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFontePequena)",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:gi}),"Verificar Auth"]})})]}),(0,Dl.jsxs)("div",{style:{background:"var(--corFundoSecundaria)",padding:"var(--espacamentoMedio)",borderRadius:"var(--bordaRaioMedia)",border:"1px solid var(--corBordaPrimaria)"},children:[(0,Dl.jsxs)("h4",{style:{color:"var(--corTextoPrimaria)",margin:"0 0 var(--espacamentoMedio) 0",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:Fi}),"Testes de API"]}),(0,Dl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoPequeno)",flexWrap:"wrap"},children:[(0,Dl.jsxs)("button",{onClick:()=>Il("/notas"),style:{background:"#28a745",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFontePequena)",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:fl}),"Testar Notas"]}),(0,Dl.jsxs)("button",{onClick:()=>Il("/links"),style:{background:"#007bff",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFontePequena)",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:$i}),"Testar Links"]}),(0,Dl.jsxs)("button",{onClick:()=>Il("/categorias"),style:{background:"#6f42c1",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFontePequena)",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:mi}),"Testar Categorias"]}),(0,Dl.jsxs)("button",{onClick:()=>Il("/sync/status"),style:{background:"#fd7e14",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFontePequena)",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:ci}),"Testar Sync"]})]})]}),(0,Dl.jsxs)("div",{style:{background:"var(--corFundoSecundaria)",padding:"var(--espacamentoMedio)",borderRadius:"var(--bordaRaioMedia)",border:"1px solid var(--corBordaPrimaria)"},children:[(0,Dl.jsxs)("h4",{style:{color:"var(--corTextoPrimaria)",margin:"0 0 var(--espacamentoMedio) 0",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:sl}),"Informa\xe7\xf5es do Sistema"]}),(0,Dl.jsxs)("div",{style:{background:"var(--corFundoPrimaria)",padding:"var(--espacamentoMedio)",borderRadius:"var(--bordaRaioMedia)",fontSize:"var(--tamanhoFontePequena)",fontFamily:"monospace"},children:[(0,Dl.jsxs)("div",{children:[(0,Dl.jsx)("strong",{children:"User Agent:"})," ",navigator.userAgent]}),(0,Dl.jsxs)("div",{children:[(0,Dl.jsx)("strong",{children:"Local Storage:"})," ",localStorage.getItem("user")?"Usu\xe1rio logado":"Nenhum usu\xe1rio"]}),(0,Dl.jsxs)("div",{children:[(0,Dl.jsx)("strong",{children:"API Base URL:"})," ",gl()]}),(0,Dl.jsxs)("div",{children:[(0,Dl.jsx)("strong",{children:"Timestamp:"})," ",(new Date).toLocaleString()]})]})]}),(0,Dl.jsxs)("div",{style:{background:"var(--corFundoSecundaria)",padding:"var(--espacamentoMedio)",borderRadius:"var(--bordaRaioMedia)",border:"1px solid var(--corBordaPrimaria)"},children:[(0,Dl.jsxs)("h4",{style:{color:"var(--corTextoPrimaria)",margin:"0 0 var(--espacamentoMedio) 0",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:Ao}),"Limpeza"]}),(0,Dl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoPequeno)",flexWrap:"wrap"},children:[(0,Dl.jsxs)("button",{onClick:()=>{localStorage.clear(),alert("LocalStorage limpo! Recarregue a p\xe1gina.")},style:{background:"#dc3545",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFontePequena)",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:Ao}),"Limpar LocalStorage"]}),(0,Dl.jsxs)("button",{onClick:()=>{console.clear(),alert("Console limpo!")},style:{background:"#6c757d",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",fontSize:"var(--tamanhoFontePequena)",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:hi}),"Limpar Console"]})]})]})]})]}),"logs"===p&&(0,Dl.jsxs)(nu,{children:[(0,Dl.jsxs)(ru,{children:[(0,Dl.jsx)(zo,{icon:hi}),"Logs do Sistema"]}),(0,Dl.jsx)(ou,{children:"Visualize logs detalhados das opera\xe7\xf5es do Firebase e do sistema."}),R&&(0,Dl.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"var(--espacamentoMedio)",marginBottom:"var(--espacamentoGrande)"},children:[(0,Dl.jsxs)("div",{style:{background:"var(--corFundoSecundaria)",padding:"var(--espacamentoMedio)",borderRadius:"var(--bordaRaioMedia)",textAlign:"center"},children:[(0,Dl.jsx)("div",{style:{fontSize:"var(--tamanhoFonteTitulo)",fontWeight:"bold",color:"var(--corPrimaria)"},children:R.total}),(0,Dl.jsx)("div",{style:{fontSize:"var(--tamanhoFontePequena)",color:"var(--corTextoSecundaria)"},children:"Total"})]}),(0,Dl.jsxs)("div",{style:{background:"var(--corFundoSecundaria)",padding:"var(--espacamentoMedio)",borderRadius:"var(--bordaRaioMedia)",textAlign:"center"},children:[(0,Dl.jsx)("div",{style:{fontSize:"var(--tamanhoFonteTitulo)",fontWeight:"bold",color:"#28a745"},children:R.firebase}),(0,Dl.jsx)("div",{style:{fontSize:"var(--tamanhoFontePequena)",color:"var(--corTextoSecundaria)"},children:"Firebase"})]}),(0,Dl.jsxs)("div",{style:{background:"var(--corFundoSecundaria)",padding:"var(--espacamentoMedio)",borderRadius:"var(--bordaRaioMedia)",textAlign:"center"},children:[(0,Dl.jsx)("div",{style:{fontSize:"var(--tamanhoFonteTitulo)",fontWeight:"bold",color:"#007bff"},children:R.api}),(0,Dl.jsx)("div",{style:{fontSize:"var(--tamanhoFontePequena)",color:"var(--corTextoSecundaria)"},children:"API"})]}),(0,Dl.jsxs)("div",{style:{background:"var(--corFundoSecundaria)",padding:"var(--espacamentoMedio)",borderRadius:"var(--bordaRaioMedia)",textAlign:"center"},children:[(0,Dl.jsx)("div",{style:{fontSize:"var(--tamanhoFonteTitulo)",fontWeight:"bold",color:"#dc3545"},children:R.error}),(0,Dl.jsx)("div",{style:{fontSize:"var(--tamanhoFontePequena)",color:"var(--corTextoSecundaria)"},children:"Erros"})]})]}),(0,Dl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoMedio)",marginBottom:"var(--espacamentoGrande)",flexWrap:"wrap"},children:[(0,Dl.jsxs)("select",{value:L,onChange:e=>O(e.target.value),style:{padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",border:"1px solid var(--corBordaPrimaria)",borderRadius:"var(--bordaRaioMedia)",background:"var(--corFundoPrimaria)",color:"var(--corTextoPrimaria)"},children:[(0,Dl.jsx)("option",{value:"all",children:"Todos os tipos"}),(0,Dl.jsx)("option",{value:"firebase",children:"Firebase"}),(0,Dl.jsx)("option",{value:"api",children:"API"}),(0,Dl.jsx)("option",{value:"error",children:"Erros"}),(0,Dl.jsx)("option",{value:"info",children:"Informa\xe7\xf5es"})]}),(0,Dl.jsxs)("button",{onClick:U,disabled:A,style:{background:"var(--corPrimaria)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:A?"not-allowed":"pointer",opacity:A?.5:1,display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:ci}),A?"Carregando...":"Atualizar"]}),(0,Dl.jsxs)("button",{onClick:async()=>{try{const e=await fetch(gl("/logs/export")),t=await e.json(),a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(a),r=document.createElement("a");r.href=n,r.download=`wrtmind-logs-${(new Date).toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),alert("Logs exportados com sucesso!")}catch(e){console.error("Erro ao exportar logs:",e),alert("Erro ao exportar logs: "+e.message)}},style:{background:"#28a745",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:Ii}),"Exportar"]}),(0,Dl.jsxs)("button",{onClick:async()=>{if(window.confirm("Tem certeza que deseja limpar todos os logs do sistema?"))try{await fetch(gl("/logs"),{method:"DELETE"}),await U(),alert("Logs do sistema limpos com sucesso!")}catch(e){console.error("Erro ao limpar logs do sistema:",e),alert("Erro ao limpar logs: "+e.message)}},style:{background:"#dc3545",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:Ao}),"Limpar"]})]}),(0,Dl.jsx)("div",{style:{background:"var(--corFundoSecundaria)",borderRadius:"var(--bordaRaioMedia)",maxHeight:"400px",overflowY:"auto"},children:A?(0,Dl.jsx)("div",{style:{padding:"var(--espacamentoGrande)",textAlign:"center"},children:"Carregando logs..."}):0===z.length?(0,Dl.jsx)("div",{style:{padding:"var(--espacamentoGrande)",textAlign:"center",color:"var(--corTextoSecundaria)"},children:"Nenhum log encontrado."}):z.map(e=>(0,Dl.jsxs)("div",{style:{padding:"var(--espacamentoMedio)",borderBottom:"1px solid var(--corBordaPrimaria)",display:"flex",alignItems:"flex-start",gap:"var(--espacamentoMedio)"},children:[(0,Dl.jsx)("div",{style:{width:"40px",height:"40px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"firebase"===e.type?"#ff6b35":"api"===e.type?"#007bff":"error"===e.type?"#dc3545":"#6c757d",color:"white",fontSize:"var(--tamanhoFontePequena)"},children:"firebase"===e.type?"\ud83d\udd25":"api"===e.type?"\ud83c\udf10":"error"===e.type?"\u274c":"\u2139\ufe0f"}),(0,Dl.jsxs)("div",{style:{flex:1},children:[(0,Dl.jsx)("div",{style:{fontWeight:"bold",color:"var(--corTextoPrimaria)",marginBottom:"var(--espacamentoPequeno)"},children:e.message}),(0,Dl.jsxs)("div",{style:{fontSize:"var(--tamanhoFontePequena)",color:"var(--corTextoSecundaria)",marginBottom:"var(--espacamentoPequeno)"},children:[$(e.timestamp)," \u2022 ",e.type.toUpperCase()]}),e.details&&(0,Dl.jsx)("div",{style:{background:"var(--corFundoPrimaria)",padding:"var(--espacamentoPequeno)",borderRadius:"var(--bordaRaioMedia)",fontSize:"var(--tamanhoFontePequena)",fontFamily:"monospace",whiteSpace:"pre-wrap",maxHeight:"100px",overflowY:"auto"},children:JSON.stringify(e.details,null,2)})]})]},e.id))})]})]}),w&&(0,Dl.jsx)("div",{onClick:D,style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"var(--espacamentoMedio)"},children:(0,Dl.jsxs)("div",{onClick:e=>e.stopPropagation(),style:{background:"var(--corFundoTerciaria)",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoGrande)",maxWidth:"800px",width:"100%",maxHeight:"80vh",overflowY:"auto",position:"relative",boxShadow:"var(--sombraForte)"},children:[(0,Dl.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--espacamentoGrande)",paddingBottom:"var(--espacamentoMedio)",borderBottom:"1px solid var(--corBordaPrimaria)"},children:[(0,Dl.jsxs)("h3",{style:{color:"var(--corTextoPrimaria)",margin:0,display:"flex",alignItems:"center",gap:"var(--espacamentoMedio)"},children:[(0,Dl.jsx)(zo,{icon:ci}),"Logs de Sincroniza\xe7\xe3o"]}),(0,Dl.jsx)("button",{onClick:D,style:{background:"none",border:"none",color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFonteTitulo)",cursor:"pointer",padding:"var(--espacamentoPequeno)",borderRadius:"var(--bordaRaioMedia)",transition:"all var(--transicaoRapida)"},children:(0,Dl.jsx)(zo,{icon:Xi})})]}),P&&(0,Dl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoGrande)",marginBottom:"var(--espacamentoMedio)",padding:"var(--espacamentoMedio)",background:"var(--corFundoSecundaria)",borderRadius:"var(--bordaRaioMedia)"},children:[(0,Dl.jsxs)("div",{style:{textAlign:"center"},children:[(0,Dl.jsx)("div",{style:{color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFontePequena)",marginBottom:"var(--espacamentoPequeno)"},children:"Total de Logs"}),(0,Dl.jsx)("div",{style:{color:"var(--corTextoPrimaria)",fontSize:"var(--tamanhoFonteGrande)",fontWeight:"bold"},children:(null===(a=P.stats)||void 0===a?void 0:a.total)||0})]}),(0,Dl.jsxs)("div",{style:{textAlign:"center"},children:[(0,Dl.jsx)("div",{style:{color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFontePequena)",marginBottom:"var(--espacamentoPequeno)"},children:"Sucessos"}),(0,Dl.jsx)("div",{style:{color:"#28a745",fontSize:"var(--tamanhoFonteGrande)",fontWeight:"bold"},children:(null===(n=P.stats)||void 0===n?void 0:n.success)||0})]}),(0,Dl.jsxs)("div",{style:{textAlign:"center"},children:[(0,Dl.jsx)("div",{style:{color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFontePequena)",marginBottom:"var(--espacamentoPequeno)"},children:"Erros"}),(0,Dl.jsx)("div",{style:{color:"#dc3545",fontSize:"var(--tamanhoFonteGrande)",fontWeight:"bold"},children:(null===(r=P.stats)||void 0===r?void 0:r.errors)||0})]}),(0,Dl.jsxs)("div",{style:{textAlign:"center"},children:[(0,Dl.jsx)("div",{style:{color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFontePequena)",marginBottom:"var(--espacamentoPequeno)"},children:"Informa\xe7\xf5es"}),(0,Dl.jsx)("div",{style:{color:"#007bff",fontSize:"var(--tamanhoFonteGrande)",fontWeight:"bold"},children:(null===(o=P.stats)||void 0===o?void 0:o.info)||0})]})]}),(0,Dl.jsxs)("div",{style:{display:"flex",gap:"var(--espacamentoPequeno)",marginBottom:"var(--espacamentoMedio)"},children:[(0,Dl.jsxs)("button",{onClick:I,disabled:j,style:{background:"var(--corPrimaria)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:j?"not-allowed":"pointer",opacity:j?.5:1,display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:ci}),j?"Carregando...":"Atualizar"]}),(0,Dl.jsxs)("button",{onClick:q,disabled:j,style:{background:"var(--corPrimaria)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:j?"not-allowed":"pointer",opacity:j?.5:1,display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:Bi}),"Sincronizar Agora"]}),(0,Dl.jsxs)("button",{onClick:async()=>{try{await wl.limparLogs(),await I()}catch(e){console.error("Erro ao limpar logs:",e)}},style:{background:"var(--corErro)",color:"white",border:"none",borderRadius:"var(--bordaRaioMedia)",padding:"var(--espacamentoPequeno) var(--espacamentoMedio)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:Ao}),"Limpar Logs"]})]}),(0,Dl.jsx)("div",{style:{maxHeight:"400px",overflowY:"auto",border:"1px solid var(--corBordaPrimaria)",borderRadius:"var(--bordaRaioMedia)",background:"var(--corFundoPrimaria)"},children:j?(0,Dl.jsx)("div",{style:{padding:"var(--espacamentoGrande)",textAlign:"center"},children:"Carregando logs..."}):0===k.length?(0,Dl.jsx)("div",{style:{padding:"var(--espacamentoGrande)",textAlign:"center",color:"var(--corTextoSecundaria)"},children:"Nenhum log de sincroniza\xe7\xe3o encontrado."}):k.map(e=>(0,Dl.jsxs)("div",{style:{padding:"var(--espacamentoMedio)",borderBottom:"1px solid var(--corBordaPrimaria)",display:"flex",alignItems:"flex-start",gap:"var(--espacamentoMedio)",background:"error"===e.type?"rgba(220, 53, 69, 0.1)":"success"===e.type?"rgba(40, 167, 69, 0.1)":"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid "+("error"===e.type?"#dc3545":"success"===e.type?"#28a745":"#007bff")},children:[(0,Dl.jsx)("div",{style:{color:"error"===e.type?"#dc3545":"success"===e.type?"#28a745":"#007bff",fontSize:"var(--tamanhoFonteMedia)",marginTop:"2px"},children:(0,Dl.jsx)(zo,{icon:B(e.type)})}),(0,Dl.jsxs)("div",{style:{flex:1},children:[(0,Dl.jsx)("div",{style:{fontWeight:"500",color:"var(--corTextoPrimaria)",marginBottom:"var(--espacamentoPequeno)"},children:e.message}),(0,Dl.jsx)("div",{style:{fontSize:"var(--tamanhoFontePequena)",color:"var(--corTextoSecundaria)"},children:$(e.timestamp)}),e.details&&Object.keys(e.details).length>0&&(0,Dl.jsx)("div",{style:{color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFontePequena)",marginTop:"var(--espacamentoPequeno)",fontFamily:"monospace",background:"var(--corFundoSecundaria)",padding:"var(--espacamentoPequeno)",borderRadius:"var(--bordaRaioPequena)",whiteSpace:"pre-wrap"},children:JSON.stringify(e.details,null,2)})]})]},e.id))})]})})]}):null},lu=Wt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
`,su=Wt.div`
  background: var(--corFundoTerciaria);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--sombraForte);
`,cu=Wt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`,uu=Wt.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,du=Wt.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteTitulo);
  cursor: pointer;
  padding: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corFundoSecundaria);
    color: var(--corTextoPrimaria);
  }
`,fu=Wt.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,pu=Wt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
  background: var(--corFundoSecundaria);
  flex-wrap: wrap;
`,mu=Wt.button`
  background: ${e=>"danger"===e.variant?"#dc3545":"success"===e.variant?"#28a745":"warning"===e.variant?"#ffc107":"var(--corPrimaria)"};
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  cursor: pointer;
  font-size: var(--tamanhoFontePequena);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  transition: all var(--transicaoRapida);

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,hu=Wt.select`
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFontePequena);
`,gu=Wt.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--espacamentoGrande);
  background: var(--corFundoPrimaria);
`,vu=Wt.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
  border-left: 4px solid ${e=>{switch(e.type){case"firebase":return"#ff6b35";case"api":return"#007bff";case"error":return"#dc3545";case"info":default:return"#6c757d";case"success":return"#28a745"}}};
`,bu=Wt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoPequeno);
`,yu=Wt.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>{switch(e.type){case"firebase":return"#ff6b35";case"api":return"#007bff";case"error":return"#dc3545";case"info":default:return"#6c757d";case"success":return"#28a745"}}};
  color: white;
  font-size: 12px;
`,xu=Wt.div`
  font-weight: bold;
  color: var(--corTextoPrimaria);
  flex: 1;
`,wu=Wt.div`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`,Su=Wt.div`
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  margin-top: var(--espacamentoMedio);
  font-family: 'Courier New', monospace;
  font-size: var(--tamanhoFontePequena);
  white-space: pre-wrap;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid var(--corBordaPrimaria);
`,ku=Wt.div`
  display: flex;
  gap: var(--espacamentoGrande);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corFundoSecundaria);
  border-bottom: 1px solid var(--corBordaPrimaria);
`,Eu=Wt.div`
  text-align: center;
  
  .stat-number {
    font-size: var(--tamanhoFonteTitulo);
    font-weight: bold;
    color: var(--corPrimaria);
  }
  
  .stat-label {
    font-size: var(--tamanhoFontePequena);
    color: var(--corTextoSecundaria);
  }
`,Pu=t=>{let{isVisible:a,onClose:n,logs:r=[],stats:o=null,onRefresh:i,onClear:l,onExport:s,filter:c,onFilterChange:u}=t;const[d,f]=(0,e.useState)(!0),p=e.useRef(null);if((0,e.useEffect)(()=>{d&&p.current&&(p.current.scrollTop=p.current.scrollHeight)},[r,d]),!a)return null;const m=e=>{switch(e){case"firebase":return"\ud83d\udd25";case"api":return"\ud83c\udf10";case"error":return"\u274c";case"info":return"\u2139\ufe0f";case"success":return"\u2705";default:return"\ud83d\udcdd"}};return(0,Dl.jsx)(lu,{onClick:n,children:(0,Dl.jsxs)(su,{onClick:e=>e.stopPropagation(),children:[(0,Dl.jsxs)(cu,{children:[(0,Dl.jsxs)(uu,{children:[(0,Dl.jsx)(zo,{icon:gi}),"Logs em Tempo Real"]}),(0,Dl.jsx)(du,{onClick:n,children:(0,Dl.jsx)(zo,{icon:Xi})})]}),(0,Dl.jsxs)(fu,{children:[o&&(0,Dl.jsxs)(ku,{children:[(0,Dl.jsxs)(Eu,{children:[(0,Dl.jsx)("div",{className:"stat-number",children:o.total}),(0,Dl.jsx)("div",{className:"stat-label",children:"Total"})]}),(0,Dl.jsxs)(Eu,{children:[(0,Dl.jsx)("div",{className:"stat-number",style:{color:"#ff6b35"},children:o.firebase}),(0,Dl.jsx)("div",{className:"stat-label",children:"Firebase"})]}),(0,Dl.jsxs)(Eu,{children:[(0,Dl.jsx)("div",{className:"stat-number",style:{color:"#007bff"},children:o.api}),(0,Dl.jsx)("div",{className:"stat-label",children:"API"})]}),(0,Dl.jsxs)(Eu,{children:[(0,Dl.jsx)("div",{className:"stat-number",style:{color:"#dc3545"},children:o.error}),(0,Dl.jsx)("div",{className:"stat-label",children:"Erros"})]}),(0,Dl.jsxs)(Eu,{children:[(0,Dl.jsx)("div",{className:"stat-number",style:{color:"#28a745"},children:o.info}),(0,Dl.jsx)("div",{className:"stat-label",children:"Info"})]})]}),(0,Dl.jsxs)(pu,{children:[(0,Dl.jsxs)(hu,{value:c,onChange:e=>u(e.target.value),children:[(0,Dl.jsx)("option",{value:"all",children:"Todos os tipos"}),(0,Dl.jsx)("option",{value:"firebase",children:"Firebase"}),(0,Dl.jsx)("option",{value:"api",children:"API"}),(0,Dl.jsx)("option",{value:"error",children:"Erros"}),(0,Dl.jsx)("option",{value:"info",children:"Informa\xe7\xf5es"}),(0,Dl.jsx)("option",{value:"success",children:"Sucessos"})]}),(0,Dl.jsxs)(mu,{onClick:i,children:[(0,Dl.jsx)(zo,{icon:ci}),"Atualizar"]}),(0,Dl.jsxs)(mu,{variant:"success",onClick:s,children:[(0,Dl.jsx)(zo,{icon:Ii}),"Exportar"]}),(0,Dl.jsxs)(mu,{variant:"danger",onClick:l,children:[(0,Dl.jsx)(zo,{icon:Ao}),"Limpar"]}),(0,Dl.jsxs)(mu,{variant:d?"success":"warning",onClick:()=>f(!d),children:[(0,Dl.jsx)(zo,{icon:d?gi:Yo}),d?"Auto-scroll ON":"Auto-scroll OFF"]})]}),(0,Dl.jsx)(gu,{ref:p,children:0===r.length?(0,Dl.jsx)("div",{style:{textAlign:"center",padding:"var(--espacamentoExtraGrande)",color:"var(--corTextoSecundaria)"},children:"Nenhum log encontrado."}):r.map(e=>{return(0,Dl.jsxs)(vu,{type:e.type,children:[(0,Dl.jsxs)(bu,{children:[(0,Dl.jsx)(yu,{type:e.type,children:m(e.type)}),(0,Dl.jsx)(xu,{children:e.message}),(0,Dl.jsx)(wu,{children:(t=e.timestamp,new Date(t).toLocaleString("pt-BR"))})]}),e.details&&(0,Dl.jsx)(Su,{children:"object"===typeof e.details?JSON.stringify(e.details,null,2):e.details})]},e.id);var t})})]})]})})},Cu=Wt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`,ju=Wt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  padding: var(--espacamentoGrande);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: var(--bordaRaioGrande);
  color: white;
  box-shadow: var(--sombraMedia);
`,Tu=Wt.h1`
  margin: 0;
  font-size: var(--tamanhoFonteTitulo);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,zu=Wt.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--tamanhoFontePequena);
  font-weight: bold;
`,_u=Wt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--espacamentoGrande);
  margin-bottom: var(--espacamentoGrande);
`,Ru=Wt.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  box-shadow: var(--sombraLeve);
  border-left: 4px solid ${e=>e.color||"var(--corPrimaria)"};
`,Mu=Wt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
`,Au=Wt.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${e=>e.color||"var(--corPrimaria)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`,Nu=Wt.h3`
  margin: 0;
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
`,Lu=Wt.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${e=>e.color||"var(--corPrimaria)"};
  margin-bottom: var(--espacamentoPequeno);
`,Ou=Wt.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  margin-bottom: var(--espacamentoMedio);
`,Fu=Wt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--espacamentoMedio);
`,Iu=Wt.div`
  text-align: center;
  padding: var(--espacamentoMedio);
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioMedia);
`,Du=Wt.div`
  font-size: var(--tamanhoFonteTitulo);
  font-weight: bold;
  color: var(--corTextoPrimaria);
`,qu=Wt.div`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
  margin-top: 4px;
`,$u=Wt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
`,Bu=Wt.button`
  background: ${e=>"success"===e.variant?"#28a745":"warning"===e.variant?"#ffc107":"var(--corPrimaria)"};
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  cursor: pointer;
  font-size: var(--tamanhoFontePequena);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  transition: all var(--transicaoRapida);

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,Uu=Wt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`,Hu=Wt.div`
  background: var(--corErro);
  color: white;
  padding: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoGrande);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,Wu=Wt.div`
  width: 100%;
  height: 8px;
  background: var(--corFundoPrimaria);
  border-radius: 4px;
  overflow: hidden;
  margin-top: var(--espacamentoPequeno);
`,Vu=Wt.div`
  height: 100%;
  background: ${e=>e.color||"var(--corPrimaria)"};
  width: ${e=>e.percentual}%;
  transition: width 0.3s ease;
`,Gu=()=>{const[t,a]=(0,e.useState)(null),[n,r]=(0,e.useState)(!0),[o,i]=(0,e.useState)(null),[l,s]=(0,e.useState)(null),c=async()=>{try{r(!0),i(null);const e=localStorage.getItem("user");if(!e)throw new Error("Usu\xe1rio n\xe3o autenticado");const t=JSON.parse(e),n=await fetch(`${gl()}/api/admin/stats`,{headers:{"user-id":t.id,"Content-Type":"application/json"}});if(!n.ok){if(403===n.status)throw new Error("Acesso negado. Apenas administradores podem acessar esta \xe1rea.");throw new Error(`Erro ${n.status}: ${n.statusText}`)}const o=await n.json();a(o),s(new Date)}catch(o){console.error("Erro ao carregar estat\xedsticas admin:",o),i(o.message)}finally{r(!1)}};return(0,e.useEffect)(()=>{c()},[]),n?(0,Dl.jsx)(Cu,{children:(0,Dl.jsxs)(Uu,{children:[(0,Dl.jsx)(zo,{icon:si,spin:!0}),"Carregando estat\xedsticas administrativas..."]})}):o?(0,Dl.jsxs)(Cu,{children:[(0,Dl.jsxs)(Hu,{children:[(0,Dl.jsx)(zo,{icon:ei}),o]}),(0,Dl.jsxs)(Bu,{onClick:c,children:[(0,Dl.jsx)(zo,{icon:si}),"Tentar Novamente"]})]}):t?(0,Dl.jsxs)(Cu,{children:[(0,Dl.jsxs)(ju,{children:[(0,Dl.jsxs)(Tu,{children:[(0,Dl.jsx)(zo,{icon:ei}),"Painel Administrativo"]}),(0,Dl.jsxs)(zu,{children:["Admin ID: ",t.adminUserId]})]}),(0,Dl.jsxs)($u,{children:[(0,Dl.jsxs)(Bu,{onClick:c,children:[(0,Dl.jsx)(zo,{icon:si}),"Atualizar"]}),(0,Dl.jsxs)(Bu,{variant:"success",onClick:async()=>{if(t)try{const e={...t,exportadoEm:(new Date).toISOString()},a=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(a),r=document.createElement("a");r.href=n,r.download=`wrtmind-admin-stats-${(new Date).toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),alert("Estat\xedsticas exportadas com sucesso!")}catch(o){console.error("Erro ao exportar estat\xedsticas:",o),alert("Erro ao exportar: "+o.message)}},children:[(0,Dl.jsx)(zo,{icon:Ii}),"Exportar"]}),l&&(0,Dl.jsxs)("div",{style:{color:"var(--corTextoSecundaria)",fontSize:"var(--tamanhoFontePequena)",display:"flex",alignItems:"center",gap:"var(--espacamentoPequeno)"},children:[(0,Dl.jsx)(zo,{icon:ni}),"\xdaltima atualiza\xe7\xe3o: ",l.toLocaleString("pt-BR")]})]}),(0,Dl.jsxs)(_u,{children:[(0,Dl.jsxs)(Ru,{color:"#667eea",children:[(0,Dl.jsxs)(Mu,{children:[(0,Dl.jsx)(Au,{color:"#667eea",children:(0,Dl.jsx)(zo,{icon:sl})}),(0,Dl.jsx)(Nu,{children:"Banco de Dados"})]}),(0,Dl.jsx)(Lu,{color:"#667eea",children:t.database.totalNotas+t.database.totalLinks}),(0,Dl.jsx)(Ou,{children:"Total de registros no sistema"}),(0,Dl.jsxs)(Fu,{children:[(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.database.totalNotas}),(0,Dl.jsx)(qu,{children:"Notas"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.database.totalLinks}),(0,Dl.jsx)(qu,{children:"Links"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.database.totalCategorias}),(0,Dl.jsx)(qu,{children:"Categorias"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.database.totalTopicos}),(0,Dl.jsx)(qu,{children:"T\xf3picos"})]})]})]}),(0,Dl.jsxs)(Ru,{color:"#28a745",children:[(0,Dl.jsxs)(Mu,{children:[(0,Dl.jsx)(Au,{color:"#28a745",children:(0,Dl.jsx)(zo,{icon:fl})}),(0,Dl.jsx)(Nu,{children:"Suas Notas"})]}),(0,Dl.jsx)(Lu,{color:"#28a745",children:t.admin.notas.total}),(0,Dl.jsxs)(Ou,{children:[t.percentuais.notasAdmin,"% do total do sistema",(0,Dl.jsx)(Wu,{children:(0,Dl.jsx)(Vu,{color:"#28a745",percentual:parseFloat(t.percentuais.notasAdmin)})})]}),(0,Dl.jsxs)(Fu,{children:[(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.admin.notas.ativas}),(0,Dl.jsx)(qu,{children:"Ativas"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.admin.notas.favoritas}),(0,Dl.jsx)(qu,{children:"Favoritas"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.admin.notas.fixadas}),(0,Dl.jsx)(qu,{children:"Fixadas"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.admin.notas.inativas}),(0,Dl.jsx)(qu,{children:"Inativas"})]})]})]}),(0,Dl.jsxs)(Ru,{color:"#007bff",children:[(0,Dl.jsxs)(Mu,{children:[(0,Dl.jsx)(Au,{color:"#007bff",children:(0,Dl.jsx)(zo,{icon:$i})}),(0,Dl.jsx)(Nu,{children:"Seus Links"})]}),(0,Dl.jsx)(Lu,{color:"#007bff",children:t.admin.links.total}),(0,Dl.jsxs)(Ou,{children:[t.percentuais.linksAdmin,"% do total do sistema",(0,Dl.jsx)(Wu,{children:(0,Dl.jsx)(Vu,{color:"#007bff",percentual:parseFloat(t.percentuais.linksAdmin)})})]}),(0,Dl.jsxs)(Fu,{children:[(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.admin.links.ativos}),(0,Dl.jsx)(qu,{children:"Ativos"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.admin.links.favoritos}),(0,Dl.jsx)(qu,{children:"Favoritos"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.admin.links.inativos}),(0,Dl.jsx)(qu,{children:"Inativos"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:"-"}),(0,Dl.jsx)(qu,{children:"-"})]})]})]}),(0,Dl.jsxs)(Ru,{color:"#ffc107",children:[(0,Dl.jsxs)(Mu,{children:[(0,Dl.jsx)(Au,{color:"#ffc107",children:(0,Dl.jsx)(zo,{icon:mi})}),(0,Dl.jsx)(Nu,{children:"Organiza\xe7\xe3o"})]}),(0,Dl.jsx)(Lu,{color:"#ffc107",children:t.admin.categorias.total+t.admin.topicos.total}),(0,Dl.jsx)(Ou,{children:"Categorias e t\xf3picos criados"}),(0,Dl.jsxs)(Fu,{children:[(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.admin.categorias.total}),(0,Dl.jsx)(qu,{children:"Categorias"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.admin.topicos.total}),(0,Dl.jsx)(qu,{children:"T\xf3picos"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsxs)(Du,{children:[t.percentuais.categoriasAdmin,"%"]}),(0,Dl.jsx)(qu,{children:"% Categorias"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsxs)(Du,{children:[t.percentuais.topicosAdmin,"%"]}),(0,Dl.jsx)(qu,{children:"% T\xf3picos"})]})]})]}),(0,Dl.jsxs)(Ru,{color:"#dc3545",children:[(0,Dl.jsxs)(Mu,{children:[(0,Dl.jsx)(Au,{color:"#dc3545",children:(0,Dl.jsx)(zo,{icon:Go})}),(0,Dl.jsx)(Nu,{children:"Usu\xe1rios"})]}),(0,Dl.jsx)(Lu,{color:"#dc3545",children:t.database.totalUsuarios}),(0,Dl.jsx)(Ou,{children:"Total de usu\xe1rios registrados"}),(0,Dl.jsxs)(Fu,{children:[(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.database.totalUsuarios}),(0,Dl.jsx)(qu,{children:"Total"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:"1"}),(0,Dl.jsx)(qu,{children:"Admin"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:t.database.totalUsuarios-1}),(0,Dl.jsx)(qu,{children:"Usu\xe1rios"})]}),(0,Dl.jsxs)(Iu,{children:[(0,Dl.jsx)(Du,{children:"-"}),(0,Dl.jsx)(qu,{children:"-"})]})]})]})]})]}):(0,Dl.jsx)(Cu,{children:(0,Dl.jsx)(Hu,{children:"Nenhuma estat\xedstica dispon\xedvel."})})},Yu=Wt.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`,Ku=Wt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoGrande);
  padding-bottom: var(--espacamentoMedio);
  border-bottom: 2px solid var(--corBorda);
`,Qu=Wt.h2`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  color: var(--corTextoPrimaria);
  margin: 0;
  
  svg {
    color: var(--corAviso);
  }
`,Xu=Wt.div`
  display: flex;
  gap: var(--espacamentoMedio);
  font-size: 0.9rem;
  color: var(--corTextoSecundaria);
`,Ju=Wt.div`
  background: var(--corAvisoClara);
  border: 1px solid var(--corAviso);
  border-radius: var(--bordaRaio);
  padding: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  color: var(--corAvisoEscura);
`,Zu=Wt.div`
  display: grid;
  gap: var(--espacamentoMedio);
`,ed=Wt.div`
  background: var(--corFundoSecundaria);
  border: 1px solid var(--corBorda);
  border-radius: var(--bordaRaio);
  padding: var(--espacamentoMedio);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`,td=Wt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--espacamentoPequeno);
`,ad=Wt.h3`
  margin: 0;
  color: var(--corTextoPrimaria);
  font-size: 1.1rem;
  flex: 1;
`,nd=Wt.div`
  display: flex;
  gap: var(--espacamentoPequeno);
`,rd=Wt.button`
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border: none;
  border-radius: var(--bordaRaio);
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`,od=Wt(rd)`
  background: var(--corSucesso);
  color: white;
  
  &:hover {
    background: var(--corSucessoEscura);
  }
`,id=Wt(rd)`
  background: var(--corErro);
  color: white;
  
  &:hover {
    background: var(--corErroEscura);
  }
`,ld=Wt.div`
  color: var(--corTextoSecundaria);
  margin-bottom: var(--espacamentoMedio);
  line-height: 1.5;
  
  p {
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`,sd=Wt.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
  font-size: 0.85rem;
  color: var(--corTextoTerciaria);
`,cd=Wt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`,ud=Wt.span`
  background: var(--corPrimariaClara);
  color: var(--corPrimaria);
  padding: 2px var(--espacamentoPequeno);
  border-radius: 12px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
`,dd=Wt.div`
  text-align: center;
  padding: var(--espacamentoGrande);
  color: var(--corTextoSecundaria);
  
  svg {
    font-size: 3rem;
    margin-bottom: var(--espacamentoMedio);
    opacity: 0.5;
  }
`,fd=()=>{const{notasDeletadas:t,restaurarNota:a,excluirNotaDefinitivamente:n,carregando:r}=$l(),[o,i]=(0,e.useState)(null),[l,s]=(0,e.useState)(null),c=e=>new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;return e?e.length>t?e.substring(0,t)+"...":e:""};return r?(0,Dl.jsx)(Yu,{children:(0,Dl.jsx)("div",{children:"Carregando lixeira..."})}):(0,Dl.jsxs)(Yu,{children:[(0,Dl.jsxs)(Ku,{children:[(0,Dl.jsxs)(Qu,{children:[(0,Dl.jsx)(zo,{icon:wi}),"Lixeira"]}),(0,Dl.jsx)(Xu,{children:(0,Dl.jsxs)("span",{children:[t.length," nota",1!==t.length?"s":""," exclu\xedda",1!==t.length?"s":""]})})]}),(0,Dl.jsxs)(Ju,{children:[(0,Dl.jsx)(zo,{icon:ll}),(0,Dl.jsxs)("div",{children:[(0,Dl.jsx)("strong",{children:"Aten\xe7\xe3o:"})," As notas na lixeira s\xe3o exclu\xeddas automaticamente ap\xf3s 30 dias. Voc\xea pode restaur\xe1-las ou exclu\xed-las definitivamente."]})]}),0===t.length?(0,Dl.jsxs)(dd,{children:[(0,Dl.jsx)(zo,{icon:Ao}),(0,Dl.jsx)("h3",{children:"Lixeira vazia"}),(0,Dl.jsx)("p",{children:"Nenhuma nota foi exclu\xedda ainda."})]}):(0,Dl.jsx)(Zu,{children:t.map(e=>(0,Dl.jsxs)(ed,{children:[(0,Dl.jsxs)(td,{children:[(0,Dl.jsx)(ad,{children:e.titulo}),(0,Dl.jsxs)(nd,{children:[(0,Dl.jsxs)(od,{onClick:()=>(async e=>{if(window.confirm(`Tem certeza que deseja restaurar a nota "${e.titulo}"?`)){i(e.id||e._id);try{await a(e.id||e._id),alert("Nota restaurada com sucesso!")}catch(t){console.error("Erro ao restaurar nota:",t),alert("Erro ao restaurar nota. Tente novamente.")}finally{i(null)}}})(e),disabled:o===(e.id||e._id),title:"Restaurar nota",children:[(0,Dl.jsx)(zo,{icon:_i}),o===(e.id||e._id)?"Restaurando...":"Restaurar"]}),(0,Dl.jsxs)(id,{onClick:()=>(async e=>{if(window.confirm(`ATEN\xc7\xc3O: Esta a\xe7\xe3o \xe9 irrevers\xedvel!\n\nTem certeza que deseja excluir definitivamente a nota "${e.titulo}"?\n\nEsta nota ser\xe1 removida permanentemente e n\xe3o poder\xe1 ser recuperada.`)){s(e.id||e._id);try{await n(e.id||e._id),alert("Nota exclu\xedda definitivamente!")}catch(t){console.error("Erro ao excluir nota definitivamente:",t),alert("Erro ao excluir nota. Tente novamente.")}finally{s(null)}}})(e),disabled:l===(e.id||e._id),title:"Excluir definitivamente",children:[(0,Dl.jsx)(zo,{icon:Ao}),l===(e.id||e._id)?"Excluindo...":"Excluir"]})]})]}),(0,Dl.jsx)(ld,{children:(0,Dl.jsx)("p",{children:u(e.conteudo,200)})}),(0,Dl.jsxs)(sd,{children:[(0,Dl.jsxs)(cd,{children:[(0,Dl.jsx)(zo,{icon:Lo}),(0,Dl.jsxs)("span",{children:["Exclu\xedda em: ",c(e.dataModificacao)]})]}),e.topico&&(0,Dl.jsxs)(cd,{children:[(0,Dl.jsx)(zo,{icon:Pi}),(0,Dl.jsxs)(ud,{children:[(0,Dl.jsx)(zo,{icon:Pi,size:"xs"}),e.topico]})]}),(0,Dl.jsxs)(cd,{children:[(0,Dl.jsx)(zo,{icon:Ti}),(0,Dl.jsxs)("span",{children:["Criada em: ",c(e.dataCriacao)]})]})]})]},e.id||e._id))})]})},pd={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},md={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]};const hd=Gt`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,gd=Gt`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,vd=Gt`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,bd=Gt`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,yd=Gt`
  0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.3); }
  50% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.6); }
`,xd=Wt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${hd} 0.5s ease-out;
`,wd=Wt.div`
  background: var(--corFundoTerciaria);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  animation: ${gd} 0.5s ease-out;
`,Sd=Wt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background: linear-gradient(135deg, #C0C0C0 0%, #E5E5E5 25%, #F5F5F5 50%, #E5E5E5 75%, #C0C0C0 100%);
  color: #333;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid #B0B0B0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.3) 25%, 
      rgba(255, 255, 255, 0.1) 50%, 
      rgba(255, 255, 255, 0.3) 75%, 
      rgba(255, 255, 255, 0.1) 100%
    );
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.8) 50%, 
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 15px 20px;
  }
`,kd=Wt.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${bd} 3s ease-in-out infinite;
  color: #2C3E50;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`,Ed=Wt.div`
  display: flex;
  gap: 12px;
  z-index: 1;
  flex-wrap: wrap;
  max-width: 65%;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
    gap: 10px;
    padding: 8px;
  }
`,Pd=Wt.button`
  background: rgba(255, 255, 255, 0.8);
  color: #1a1a1a;
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(15px);
  font-size: 0.9rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  min-width: fit-content;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(255, 255, 255, 0.3) inset;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(255, 255, 255, 0.4) inset;
    border-color: rgba(255, 255, 255, 1);
    color: #000;
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  &.danger {
    background: rgba(231, 76, 60, 0.9);
    color: white;
    border-color: rgba(231, 76, 60, 0.8);
    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3), 0 0 20px rgba(231, 76, 60, 0.2);

    &:hover {
      background: rgba(231, 76, 60, 1);
      box-shadow: 0 12px 25px rgba(231, 76, 60, 0.4), 0 0 30px rgba(231, 76, 60, 0.3);
      animation: ${vd} 0.6s ease-in-out;
    }
  }

  &.primary {
    background: rgba(46, 204, 113, 0.9);
    color: white;
    border-color: rgba(46, 204, 113, 0.8);
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3), 0 0 20px rgba(46, 204, 113, 0.2);

    &:hover {
      background: rgba(46, 204, 113, 1);
      box-shadow: 0 12px 25px rgba(46, 204, 113, 0.4), 0 0 30px rgba(46, 204, 113, 0.3);
      animation: ${yd} 1s ease-in-out infinite;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 0.8rem;
    gap: 6px;
  }
`,Cd=Wt.div`
  padding: 30px;
  max-height: calc(90vh - 120px);
  overflow-y: auto;
  position: relative;
`,jd=Wt.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--corTextoPrimaria);
  background: var(--corFundoSecundaria);
  padding: 30px;
  border-radius: 15px;
  border-left: 5px solid var(--corPrimaria);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--corPrimaria), var(--corSecundaria), var(--corPrimaria));
    background-size: 200% 100%;
    animation: gradient 3s ease infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`,Td=Wt.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 10000;
`,zd=Wt.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    animation: ${vd} 0.6s ease-in-out;
  }

  &.share {
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  }

  &.favorite {
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  }

  &.export {
    background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
  }
`,_d=Wt.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--corFundoTerciaria);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 10001;
  animation: ${hd} 0.3s ease-out;
  min-width: 400px;
`,Rd=Wt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,Md=Wt.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--corFundoSecundaria);
  color: var(--corTextoSecundaria);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  &.whatsapp:hover {
    background: #25D366;
    color: white;
  }

  &.telegram:hover {
    background: #0088cc;
    color: white;
  }

  &.email:hover {
    background: #EA4335;
    color: white;
  }

  &.copy:hover {
    background: var(--corPrimaria);
    color: white;
  }
`,Ad=Wt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
  background: var(--corFundoSecundaria);
  border-radius: 15px;
  border: 1px solid var(--corBordaPrimaria);
`,Nd=Wt.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--corTextoSecundaria);
  font-size: 0.9rem;

  svg {
    color: var(--corPrimaria);
  }
`,Ld=Wt.span`
  background: ${e=>e.background||"var(--corPrimaria)"};
  color: ${e=>e.color||"white"};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  animation: ${vd} 2s ease-in-out infinite;
`,Od=t=>{let{nota:a,onFechar:n,onEditar:r,onExcluir:o}=t;const[i,l]=(0,e.useState)(!1),[s,c]=(0,e.useState)(!1),[u,d]=(0,e.useState)(!1),[f,p]=(0,e.useState)(!1),[m,h]=(0,e.useState)(!1),[g,v]=(0,e.useState)(null),b=(0,e.useRef)(null),{adicionarNota:y,atualizarNota:x,alternarFavorito:w}=$l();(0,e.useEffect)(()=>{const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e);v(t)}catch(r){console.error("Erro ao carregar dados do usu\xe1rio:",r)}const t=JSON.parse(localStorage.getItem("notasFavoritas")||"[]"),n=JSON.parse(localStorage.getItem("notasBookmarks")||"[]");c(t.includes(a.id||a._id)),d(n.includes(a.id||a._id))},[a]);const S=async e=>{const t=`${a.titulo}\n\n${a.conteudo}\n\nCompartilhado via WRTmind`,n=window.location.href;switch(e){case"whatsapp":window.open(`https://wa.me/?text=${encodeURIComponent(t)}`);break;case"telegram":window.open(`https://t.me/share/url?url=${encodeURIComponent(n)}&text=${encodeURIComponent(t)}`);break;case"email":window.open(`mailto:?subject=${encodeURIComponent(a.titulo)}&body=${encodeURIComponent(t)}`);break;case"copy":await As(t),h(!0),setTimeout(()=>h(!1),2e3)}l(!1)},k=async()=>{try{await w(a.id||a._id),c(!s);const e=JSON.parse(localStorage.getItem("notasFavoritas")||"[]"),t=a.id||a._id;if(s){const a=e.filter(e=>e!==t);localStorage.setItem("notasFavoritas",JSON.stringify(a))}else e.push(t),localStorage.setItem("notasFavoritas",JSON.stringify(e))}catch(e){console.error("Erro ao alternar favorito:",e)}},E=()=>{const e={titulo:a.titulo,conteudo:a.conteudo,topico:a.topico,dataCriacao:a.dataCriacao,dataModificacao:a.dataModificacao,exportadoEm:(new Date).toISOString()},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=`${a.titulo.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)};return a?(0,Dl.jsxs)(Dl.Fragment,{children:[(0,Dl.jsx)(xd,{onClick:n,children:(0,Dl.jsxs)(wd,{onClick:e=>e.stopPropagation(),children:[(0,Dl.jsxs)(Sd,{children:[(0,Dl.jsx)(kd,{children:a.titulo}),(0,Dl.jsxs)(Ed,{children:[(0,Dl.jsxs)(Pd,{onClick:()=>{const e=JSON.parse(localStorage.getItem("notasBookmarks")||"[]"),t=a.id||a._id;if(u){const a=e.filter(e=>e!==t);localStorage.setItem("notasBookmarks",JSON.stringify(a))}else e.push(t),localStorage.setItem("notasBookmarks",JSON.stringify(e));d(!u)},title:"Adicionar aos favoritos",children:[(0,Dl.jsx)(zo,{icon:Ko}),u?"Favorito":"Favoritar"]}),(0,Dl.jsxs)(Pd,{onClick:k,title:"Marcar como importante",children:[(0,Dl.jsx)(zo,{icon:pi}),"Importante"]}),(0,Dl.jsxs)(Pd,{onClick:()=>l(!0),title:"Compartilhar",children:[(0,Dl.jsx)(zo,{icon:cl}),"Compartilhar"]}),(0,Dl.jsxs)(Pd,{onClick:()=>{const e=window.open("","_blank");e.document.write(`\n      <html>\n        <head>\n          <title>${a.titulo}</title>\n          <style>\n            body { font-family: Arial, sans-serif; margin: 40px; }\n            h1 { color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; }\n            .content { line-height: 1.6; margin-top: 20px; }\n            .metadata { margin-top: 30px; padding: 15px; background: #f5f5f5; border-radius: 8px; }\n          </style>\n        </head>\n        <body>\n          <h1>${a.titulo}</h1>\n          <div class="content">${a.conteudo}</div>\n          <div class="metadata">\n            <p><strong>Criado:</strong> ${Ms(a.dataCriacao)}</p>\n            <p><strong>Modificado:</strong> ${Ms(a.dataModificacao)}</p>\n            ${a.topico?`<p><strong>T\xf3pico:</strong> ${a.topico}</p>`:""}\n          </div>\n        </body>\n      </html>\n    `),e.document.close(),e.print()},title:"Imprimir",children:[(0,Dl.jsx)(zo,{icon:pl}),"Imprimir"]}),(0,Dl.jsxs)(Pd,{onClick:E,title:"Exportar",children:[(0,Dl.jsx)(zo,{icon:Ii}),"Exportar"]}),(0,Dl.jsxs)(Pd,{onClick:r,className:"primary",title:"Editar",children:[(0,Dl.jsx)(zo,{icon:Ho}),"Editar"]}),(0,Dl.jsxs)(Pd,{onClick:o,className:"danger",title:"Excluir",children:[(0,Dl.jsx)(zo,{icon:wi}),"Excluir"]}),(0,Dl.jsxs)(Pd,{onClick:n,title:"Fechar",children:[(0,Dl.jsx)(zo,{icon:Xi}),"Fechar"]})]})]}),(0,Dl.jsxs)(Cd,{ref:b,children:[(0,Dl.jsx)(jd,{dangerouslySetInnerHTML:{__html:a.conteudo}}),(0,Dl.jsxs)(Ad,{children:[(0,Dl.jsxs)(Nd,{children:[(0,Dl.jsx)(zo,{icon:Lo}),"Criado: ",Ms(a.dataCriacao)]}),(0,Dl.jsxs)(Nd,{children:[(0,Dl.jsx)(zo,{icon:Li}),"Modificado: ",Ms(a.dataModificacao)]}),a.topico&&(0,Dl.jsxs)(Nd,{children:[(0,Dl.jsx)(zo,{icon:Pi}),(0,Dl.jsx)(Ld,{background:"var(--corSecundaria)",children:a.topico})]}),(0,Dl.jsxs)(Nd,{children:[(0,Dl.jsx)(zo,{icon:Jo}),"Autor: ",g?g.nome:"Usu\xe1rio"]}),s&&(0,Dl.jsxs)(Nd,{children:[(0,Dl.jsx)(zo,{icon:Zo}),(0,Dl.jsx)(Ld,{background:"#FFD700",color:"#333",children:"Importante"})]}),u&&(0,Dl.jsxs)(Nd,{children:[(0,Dl.jsx)(zo,{icon:Ko}),(0,Dl.jsx)(Ld,{background:"#FF6B6B",children:"Favorito"})]})]})]})]})}),(0,Dl.jsxs)(Td,{children:[(0,Dl.jsx)(zd,{onClick:()=>{b.current&&(document.fullscreenElement?document.exitFullscreen():b.current.requestFullscreen())},title:"Tela cheia",children:(0,Dl.jsx)(zo,{icon:Ki})}),(0,Dl.jsx)(zd,{onClick:()=>l(!0),className:"share",title:"Compartilhar",children:(0,Dl.jsx)(zo,{icon:Vo})}),(0,Dl.jsx)(zd,{onClick:k,className:"favorite",title:"Favorito",children:(0,Dl.jsx)(zo,{icon:pi})}),(0,Dl.jsx)(zd,{onClick:E,className:"export",title:"Exportar",children:(0,Dl.jsx)(zo,{icon:tl})})]}),i&&(0,Dl.jsxs)(_d,{onClick:e=>e.stopPropagation(),children:[(0,Dl.jsx)("h3",{children:"Compartilhar Nota"}),(0,Dl.jsxs)(Rd,{children:[(0,Dl.jsxs)(Md,{onClick:()=>S("whatsapp"),className:"whatsapp",children:[(0,Dl.jsx)(zo,{icon:pd,size:"lg"}),(0,Dl.jsx)("span",{children:"WhatsApp"})]}),(0,Dl.jsxs)(Md,{onClick:()=>S("telegram"),className:"telegram",children:[(0,Dl.jsx)(zo,{icon:md,size:"lg"}),(0,Dl.jsx)("span",{children:"Telegram"})]}),(0,Dl.jsxs)(Md,{onClick:()=>S("email"),className:"email",children:[(0,Dl.jsx)(zo,{icon:Ci,size:"lg"}),(0,Dl.jsx)("span",{children:"Email"})]}),(0,Dl.jsxs)(Md,{onClick:()=>S("copy"),className:"copy",children:[(0,Dl.jsx)(zo,{icon:Gi,size:"lg"}),(0,Dl.jsx)("span",{children:m?"Copiado!":"Copiar"})]})]}),(0,Dl.jsxs)(Pd,{onClick:()=>l(!1),style:{marginTop:"20px",width:"100%"},children:[(0,Dl.jsx)(zo,{icon:Xi}),"Fechar"]})]})]}):null},Fd=Gt`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,Id=Gt`
  from { opacity: 0; }
  to { opacity: 1; }
`,Dd=Gt`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,qd=Gt`
  0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.3); }
  50% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.6); }
`,$d=Gt`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`,Bd=(Wt.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--corFundoTerciaria);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${Id} 0.5s ease-out;
`,Wt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 15px;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  border-bottom: 1px solid var(--corBordaPrimaria);
  animation: ${Fd} 0.3s ease-out;
`,Wt.div`
  display: flex;
  gap: 2px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
`,Wt.button`
  background: ${e=>e.active?"rgba(255, 255, 255, 0.3)":"rgba(255, 255, 255, 0.1)"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &.special {
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
    animation: ${Dd} 2s ease-in-out infinite;
  }

  &.magic {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    animation: ${qd} 1.5s ease-in-out infinite;
  }

  &.ai {
    background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
    animation: ${$d} 3s ease-in-out infinite;
  }
`,Wt.textarea`
  flex: 1;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--corTextoPrimaria);
  background: var(--corFundoSecundaria);
  resize: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: all 0.3s ease;

  &:focus {
    background: var(--corFundoTerciaria);
    box-shadow: inset 0 0 0 2px var(--corPrimaria);
  }

  &::placeholder {
    color: var(--corTextoTerciaria);
    font-style: italic;
  }
`,Wt.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
`,Wt.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateX(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    animation: ${Dd} 0.6s ease-in-out;
  }

  &.ai {
    background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
    animation: ${$d} 3s ease-in-out infinite;
  }

  &.magic {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    animation: ${qd} 1.5s ease-in-out infinite;
  }
`,Wt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${Id} 0.3s ease-out;
`,Wt.div`
  background: var(--corFundoTerciaria);
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  animation: ${Fd} 0.3s ease-out;
`,(function(t){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];var i=Bt.apply(void 0,r([t],a,!1)),l="sc-global-".concat(je(JSON.stringify(i))),s=new Vt(i,l),c=function(t){var a=Ct(),n=e.useContext(Ft),r=e.useRef(a.styleSheet.allocateGSInstance(l)).current;return a.styleSheet.server&&u(r,t,a.styleSheet,n,a.stylis),e.useLayoutEffect(function(){if(!a.styleSheet.server)return u(r,t,a.styleSheet,n,a.stylis),function(){return s.removeStyles(r,a.styleSheet)}},[r,t,a.styleSheet,n,a.stylis]),null};function u(e,t,a,r,o){if(s.isStatic)s.renderStyles(e,pe,a,o);else{var i=n(n({},t),{theme:ge(t,r,c.defaultProps)});s.renderStyles(e,i,a,o)}}return e.memo(c)})`
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
`),Ud=Bd,Hd=Wt.div`
  min-height: 100vh;
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  padding-top: 80px; /* altura do header fixo */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`,Wd=Wt.header`
  background: var(--corFundoSecundaria);
  border-bottom: 2px solid var(--corBordaPrimaria);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--sombraLeve);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
`,Vd=Wt.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  color: var(--corTextoPrimaria);
  font-weight: 600;
`,Gd=Wt.button`
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
`,Yd=Wt.div`
  color: var(--corPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`,Kd=Wt.nav`
  position: fixed;
  left: 0;
  top: 80px;
  height: calc(100vh - 80px);
  background: var(--corFundoSecundaria);
  border-right: 2px solid var(--corBordaPrimaria);
  width: ${e=>e.recolhido?"60px":"250px"};
  padding: ${e=>e.recolhido?"var(--espacamentoMedio)":"var(--espacamentoGrande)"};
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoMedio);
  box-shadow: var(--sombraLeve);
  z-index: var(--zIndexDropdown);
  overflow-y: auto;
  box-sizing: border-box;
  transition: all var(--transicaoMedia);
`,Qd=Wt.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: ${e=>e.recolhido?"var(--espacamentoMedio)":"var(--espacamentoMedio) var(--espacamentoGrande)"};
  background: ${e=>e.ativo?"var(--corPrimaria)":"transparent"};
  color: ${e=>e.ativo?"var(--corTextoClara)":"var(--corTextoPrimaria)"};
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;
  justify-content: ${e=>e.recolhido?"center":"flex-start"};
  min-height: 48px;

  &:hover {
    background: ${e=>e.ativo?"var(--corSecundaria)":"var(--corFundoTerciaria)"};
    transform: ${e=>e.recolhido?"scale(1.05)":"translateX(4px)"};
  }

  span {
    opacity: ${e=>e.recolhido?0:1};
    transition: opacity var(--transicaoRapida);
    white-space: nowrap;
    overflow: hidden;
  }
`,Xd=Wt.div`
  display: flex;
  min-height: calc(100vh - 80px);
  width: 100%;
  box-sizing: border-box;
`,Jd=Wt.main`
  flex: 1;
  margin-left: ${e=>e.menuRecolhido?"60px":"250px"};
  overflow-y: auto;
  background: var(--corFundoPrimaria);
  min-height: calc(100vh - 80px);
  width: 100%;
  box-sizing: border-box;
  transition: margin-left var(--transicaoMedia);
`,Zd=(Wt.div`
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoMedio);
  margin: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
`,Wt.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--espacamentoPequeno);
  
  &:last-child {
    margin-bottom: 0;
  }
`,Wt.span`
  color: var(--corTextoSecundaria);
  font-weight: 600;
`,Wt.span`
  color: var(--corTextoPrimaria);
  font-weight: 600;
`,Wt.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`),ef=Wt.button`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: var(--tamanhoFonteMedia);
  box-shadow: var(--sombraLeve);
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corSecundaria);
    transform: scale(1.1);
  }
`,tf=Wt.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: var(--corFundoTerciaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  box-shadow: var(--sombraForte);
  min-width: 250px;
  z-index: 1001;
  opacity: ${e=>e.visivel?1:0};
  visibility: ${e=>e.visivel?"visible":"hidden"};
  transition: all var(--transicaoRapida);
  transform: ${e=>e.visivel?"translateY(0)":"translateY(-10px)"};
`,af=Wt.h4`
  color: var(--corTextoPrimaria);
  margin: 0 0 var(--espacamentoMedio) 0;
  font-size: var(--tamanhoFonteMedia);
  border-bottom: 1px solid var(--corBordaPrimaria);
  padding-bottom: var(--espacamentoPequeno);
`,nf=Wt.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--espacamentoPequeno);
  
  &:last-child {
    margin-bottom: 0;
  }
`,rf=Wt.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
`,of=Wt.span`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
`,lf=Wt.div`
  background: var(--corFundoTerciaria);
  padding: var(--espacamentoMedio);
  margin: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
`,sf=Wt.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoPequeno);
`,cf=Wt.div`
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corFundoTerciaria);
    transform: translateX(4px);
    box-shadow: var(--sombraLeve);
  }
`,uf=Wt.h4`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
`,df=(Wt.div`
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
  
  &:last-child {
    margin-bottom: 0;
  }
`,Wt.h3`
  color: var(--corTextoPrimaria);
  margin: 0 0 var(--espacamentoPequeno) 0;
  font-size: var(--tamanhoFonteMedia);
`,Wt.span`
  color: var(--corPrimaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  background: var(--corFundoTerciaria);
  padding: 2px 8px;
  border-radius: var(--bordaRaioPequena);
`,Wt.p`
  color: var(--corTextoSecundaria);
  margin: var(--espacamentoPequeno) 0 0 0;
  font-size: var(--tamanhoFontePequena);
  line-height: 1.4;
`,Wt.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 24px;
  position: relative;
  max-width: 300px;
  overflow: hidden;
`),ff=Wt.button`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: 8px 16px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }

  &:disabled {
    background: var(--corTextoSecundaria);
    cursor: not-allowed;
    transform: none;
  }
`,pf=Wt.div`
  font-size: 1.5rem;
  color: ${e=>"ok"===e.status?"#28a745":"syncing"===e.status?"#ffc107":"error"===e.status?"#dc3545":"var(--corTextoSecundaria)"};
  cursor: pointer;
  transition: color 0.2s;
`,mf=Wt.div`
  position: absolute;
  top: 36px;
  left: 0;
  background: var(--corFundoTerciaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  box-shadow: var(--sombraForte);
  min-width: 220px;
  z-index: 1001;
  opacity: ${e=>e.visivel?1:0};
  visibility: ${e=>e.visivel?"visible":"hidden"};
  transition: all var(--transicaoRapida);
  transform: ${e=>e.visivel?"translateY(0)":"translateY(-10px)"};
`;const hf=()=>{const{notas:t,categorias:n,carregando:r,erro:o,adicionarNota:i,editarNota:l,excluirNota:s}=$l(),[c,u]=(0,e.useState)(null),[d,f]=(0,e.useState)("inicial"),[p,m]=(0,e.useState)(!1),[h,g]=(0,e.useState)(!1),[v,b]=(0,e.useState)(null),[y,x]=(0,e.useState)(!1),[w,S]=(0,e.useState)(!1),[k,E]=(0,e.useState)([]),[P,C]=(0,e.useState)(null),[j,T]=(0,e.useState)("all"),[z,_]=(0,e.useState)(!1),[R,M]=(0,e.useState)(!1),[A,N]=(0,e.useState)(null),L=function(){const[t,a]=(0,e.useState)("syncing"),[n,r]=(0,e.useState)(null),[o,i]=(0,e.useState)(null),[l,s]=(0,e.useState)(!1),[c,u]=(0,e.useState)(!1),d=async()=>{try{const t=await xl.verificarPendencias();let n=null,o=null;try{const t=await wl.buscarStatus();n=t,r(t.lastSync),t.stats&&i(e=>({...e,...t.stats}));try{const e=await wl.buscarUltimaAlteracaoBanco();e.success&&e.lastDatabaseChange&&(o=e.lastDatabaseChange,console.log("\ud83d\uddc4\ufe0f \xdaltima altera\xe7\xe3o no banco:",o))}catch(e){console.log("\u26a0\ufe0f N\xe3o foi poss\xedvel buscar \xfaltima altera\xe7\xe3o no banco:",e.message)}}catch(vf){console.log("\u26a0\ufe0f N\xe3o foi poss\xedvel buscar status de sincroniza\xe7\xe3o:",vf.message)}t.temPendencias?(a("syncing"),i({pendentes:t.quantidade}),console.log("\ud83d\udd04 Status: Sincronizando (pend\xeancias detectadas)")):n&&n.stats&&n.stats.errors>0?(a("error"),console.log("\u274c Status: Erro (erros detectados na sincroniza\xe7\xe3o)")):o?(a("ok"),i({pendentes:0}),console.log("\u2705 Status: Verificado (altera\xe7\xe3o confirmada no banco)"),console.log(`\ud83d\uddc4\ufe0f \xdaltima altera\xe7\xe3o: ${o.message} em ${o.timestamp}`)):(a("ok"),i({pendentes:0}),console.log("\u2705 Status: Sincronizado (sem pend\xeancias e sem erros)"))}catch(vf){console.error("\u274c Erro ao verificar status:",vf),a("error")}};return(0,e.useEffect)(()=>{d();const e=setInterval(d,3e4);return()=>clearInterval(e)},[]),{status:t,lastSync:n,stats:o,tooltip:l,setTooltip:s,syncing:c,sincronizarManual:async()=>{if(!c)try{u(!0),a("syncing"),console.log("\ud83d\udd04 Iniciando sincroniza\xe7\xe3o manual...");const t=await xl.sincronizarManual();if(t.success){console.log("\u2705 Sincroniza\xe7\xe3o manual conclu\xedda com sucesso");try{const e=await xl.verificarPendencias();e.temPendencias?(a("syncing"),i({pendentes:e.quantidade}),console.log("\ud83d\udd04 Status: Ainda sincronizando (pend\xeancias restantes)")):(a("ok"),i({pendentes:0}),console.log("\u2705 Status: Totalmente sincronizado"))}catch(e){console.log("\u26a0\ufe0f Erro ao verificar pend\xeancias p\xf3s-sync:",e.message),a("ok")}setTimeout(d,5e3)}else console.log("\u26a0\ufe0f Sincroniza\xe7\xe3o manual falhou:",t.message),a("error")}catch(e){console.error("\u274c Erro na sincroniza\xe7\xe3o manual:",e),a("error")}finally{u(!1)}}}}();(0,e.useEffect)(()=>{const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e);u(t)}catch(t){console.error("Erro ao carregar dados do usu\xe1rio:",t),localStorage.removeItem("user")}},[]),(0,e.useEffect)(()=>{const e=e=>{const{nota:t}=e.detail;t&&I(t)};return window.addEventListener("abrirNota",e),()=>{window.removeEventListener("abrirNota",e)}},[]),(0,e.useEffect)(()=>{const e=()=>{console.log("\ud83d\udeaa Evento de logout detectado no App"),u(null)};return window.addEventListener("userLogout",e),()=>{window.removeEventListener("userLogout",e)}},[]);const O=e=>{console.log("\ud83d\udc64 Executando login...",e),u(e),g("eUF9zbjEuU0G9f7ntD4R"===e.id),window.dispatchEvent(new CustomEvent("userLogin",{detail:e}))},F=()=>{b(null),m(!0)},I=e=>{b(e),m(!0)},D=e=>{b(e),m(!0)},q=e=>{a.e(138).then(a.bind(a,138)).then(t=>{let{mostrarOpcoesExportacao:a}=t;a(e)})},$=e=>{a.e(138).then(a.bind(a,138)).then(t=>{let{imprimirNota:a}=t;a(e)})},B=e=>{N(e),M(!0)},U=async()=>{try{const e=await fetch(`${gl("/logs")}?type=${"all"!==j?j:""}`),t=await e.json();E(t.logs||[]),C(t.stats)}catch(e){console.error("Erro ao carregar logs do sistema:",e)}};(0,e.useEffect)(()=>{if(w){const e=setInterval(U,2e3);return()=>clearInterval(e)}},[w,j]);return c?(0,Dl.jsxs)(Hd,{children:[(0,Dl.jsxs)(Wd,{children:[(0,Dl.jsxs)(Yd,{children:[(0,Dl.jsx)(zo,{icon:fl}),"WRTmind"]}),(0,Dl.jsxs)(Vd,{children:[(0,Dl.jsxs)("span",{children:["Ol\xe1, ",c.nome]}),(0,Dl.jsx)("button",{onClick:()=>_(!z),style:{background:"var(--corFundoTerciaria)",color:"var(--corTextoPrimaria)",border:"1px solid var(--corBordaPrimaria)",borderRadius:"var(--bordaRaioMedia)",padding:"8px 12px",marginRight:"10px",cursor:"pointer",fontSize:"var(--tamanhoFontePequena)",display:"flex",alignItems:"center",gap:"6px",transition:"all var(--transicaoRapida)"},onMouseEnter:e=>{e.target.style.background="var(--corFundoSecundaria)",e.target.style.transform="scale(1.05)"},onMouseLeave:e=>{e.target.style.background="var(--corFundoTerciaria)",e.target.style.transform="scale(1)"},title:z?"Expandir Menu":"Recolher Menu",children:(0,Dl.jsx)(zo,{icon:z?Do:Xi})}),(0,Dl.jsxs)(Gd,{onClick:()=>{console.log("\ud83d\udeaa Executando logout..."),u(null),localStorage.removeItem("user"),window.dispatchEvent(new CustomEvent("userLogout"))},children:[(0,Dl.jsx)(zo,{icon:Fo}),"Sair"]})]}),(0,Dl.jsxs)(df,{onMouseEnter:()=>L.setTooltip(!0),onMouseLeave:()=>L.setTooltip(!1),children:[(0,Dl.jsxs)(ff,{onClick:L.sincronizarManual,disabled:L.syncing,children:[(0,Dl.jsx)(zo,{icon:ci,spin:L.syncing}),L.syncing?"Sincronizando...":"Sincronizar Agora"]}),(0,Dl.jsx)(pf,{status:L.status,children:(0,Dl.jsx)(zo,{icon:"ok"===L.status?oi:"syncing"===L.status?ci:$o,spin:"syncing"===L.status})}),(0,Dl.jsxs)(mf,{visivel:L.tooltip,children:[(0,Dl.jsxs)("div",{style:{fontWeight:"bold",marginBottom:8},children:["ok"===L.status&&"\u2705 Tudo sincronizado","syncing"===L.status&&"\ud83d\udd04 Sincronizando...","error"===L.status&&"\u274c Erro de sincroniza\xe7\xe3o"]}),L.stats&&void 0!==L.stats.pendentes&&(0,Dl.jsx)("div",{style:{fontSize:13,marginBottom:4},children:"syncing"===L.status?(0,Dl.jsxs)("div",{children:["Pend\xeancias: ",(0,Dl.jsx)("b",{style:{color:"#ffc107"},children:L.stats.pendentes})]}):(0,Dl.jsxs)("div",{children:["Pend\xeancias: ",(0,Dl.jsx)("b",{style:{color:"#28a745"},children:"0"})]})}),L.lastSync&&(0,Dl.jsxs)("div",{style:{fontSize:13,marginBottom:4},children:["\xdaltima sincroniza\xe7\xe3o:",(0,Dl.jsx)("br",{}),(0,Dl.jsx)("b",{children:new Date(L.lastSync.timestamp).toLocaleString("pt-BR")})]}),L.stats&&void 0!==L.stats.databaseChanges&&L.stats.databaseChanges>0&&(0,Dl.jsx)("div",{style:{fontSize:13,marginBottom:4},children:(0,Dl.jsxs)("div",{style:{color:"#28a745",fontWeight:"bold"},children:["\ud83d\uddc4\ufe0f Altera\xe7\xf5es no banco: ",(0,Dl.jsx)("b",{children:L.stats.databaseChanges})]})}),L.stats&&void 0!==L.stats.total&&(0,Dl.jsxs)("div",{style:{fontSize:13},children:[(0,Dl.jsxs)("div",{children:["Total de logs: ",(0,Dl.jsx)("b",{children:L.stats.total})]}),(0,Dl.jsxs)("div",{children:["Sucessos: ",(0,Dl.jsx)("b",{style:{color:"#28a745"},children:L.stats.success})]}),(0,Dl.jsxs)("div",{children:["Erros: ",(0,Dl.jsx)("b",{style:{color:"#dc3545"},children:L.stats.errors})]}),(0,Dl.jsxs)("div",{children:["Info: ",(0,Dl.jsx)("b",{style:{color:"#007bff"},children:L.stats.info})]})]}),(0,Dl.jsx)("div",{style:{fontSize:11,marginTop:8,color:"#666",fontStyle:"italic"},children:"Verifica\xe7\xe3o autom\xe1tica: a cada 30s"})]})]})]}),(0,Dl.jsxs)(Xd,{children:[(0,Dl.jsxs)(Kd,{recolhido:z,children:[(0,Dl.jsxs)(Qd,{ativo:"inicial"===d,onClick:()=>f("inicial"),recolhido:z,children:[(0,Dl.jsx)(zo,{icon:fl}),(0,Dl.jsx)("span",{children:"Shortcuts"})]}),(0,Dl.jsxs)(Qd,{ativo:"notas"===d,onClick:()=>f("notas"),recolhido:z,children:[(0,Dl.jsx)(zo,{icon:fl}),(0,Dl.jsx)("span",{children:"Notes"})]}),(0,Dl.jsxs)(Qd,{ativo:"configuracoes"===d,onClick:()=>f("configuracoes"),recolhido:z,children:[(0,Dl.jsx)(zo,{icon:Ai}),(0,Dl.jsx)("span",{children:"Configurations"})]}),h&&(0,Dl.jsxs)(Qd,{ativo:"admin"===d,onClick:()=>f("admin"),recolhido:z,children:[(0,Dl.jsx)(zo,{icon:ei}),(0,Dl.jsx)("span",{children:"Admin"})]})]}),(0,Dl.jsx)(Jd,{menuRecolhido:z,children:(()=>{switch(d){case"inicial":default:return(0,Dl.jsx)(Rs,{});case"notas":return(0,Dl.jsxs)(Dl.Fragment,{children:[(0,Dl.jsxs)(Zd,{children:[(0,Dl.jsx)(ef,{onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:(0,Dl.jsx)(zo,{icon:Ti})}),(0,Dl.jsxs)(tf,{visivel:y,children:[(0,Dl.jsx)(af,{children:"Status da Aplica\xe7\xe3o"}),(0,Dl.jsxs)(nf,{children:[(0,Dl.jsx)(rf,{children:"Carregando:"}),(0,Dl.jsx)(of,{children:r?"Sim":"N\xe3o"})]}),(0,Dl.jsxs)(nf,{children:[(0,Dl.jsx)(rf,{children:"Notas carregadas:"}),(0,Dl.jsx)(of,{children:t.length})]}),(0,Dl.jsxs)(nf,{children:[(0,Dl.jsx)(rf,{children:"Categorias carregadas:"}),(0,Dl.jsx)(of,{children:n?n.length:0})]}),(0,Dl.jsxs)(nf,{children:[(0,Dl.jsx)(rf,{children:"Erro:"}),(0,Dl.jsx)(of,{children:o||"Nenhum"})]})]})]}),(0,Dl.jsxs)(lf,{children:[(0,Dl.jsx)("h3",{children:"Notas Encontradas"}),t.length>0?(0,Dl.jsx)(sf,{children:t.map(e=>(0,Dl.jsx)(cf,{onClick:()=>I(e),children:(0,Dl.jsx)(uf,{children:e.titulo})},e.id||e._id))}):(0,Dl.jsx)("p",{children:"Nenhuma nota encontrada."})]}),(0,Dl.jsx)(kc,{itens:t,tipo:"nota",titulo:"Notas",icone:fl,carregando:r,onNovo:F,onEditar:I,onExcluir:s,onVisualizar:D,onExportar:q,onImprimir:$,onTelaCheia:B})]});case"configuracoes":return(0,Dl.jsx)(iu,{visivel:!0,onFechar:()=>f("inicial")});case"lixeira":return(0,Dl.jsx)(fd,{});case"admin":return(0,Dl.jsx)(Gu,{})}})()})]}),(0,Dl.jsx)(au,{visivel:p,tipo:"nota",item:v,onSalvar:async(e,t)=>{try{console.log("\ud83d\udcdd App.js - handleSalvarItem chamado com:",{id:e,formData:t}),e?(console.log("\ud83d\udcdd Atualizando nota com ID:",e),await l(e,t)):(console.log("\ud83d\udcdd Criando nova nota com dados:",t),await i(t)),m(!1),b(null)}catch(a){console.error("Erro ao salvar nota:",a),alert("Erro ao salvar nota. Tente novamente.")}},onExcluir:async()=>{if(v)try{const e=v.id||v._id;await s(e),m(!1),b(null)}catch(e){console.error("Erro ao excluir nota:",e),alert("Erro ao excluir nota. Tente novamente.")}},onFechar:()=>{m(!1),b(null)},carregando:r}),(0,Dl.jsx)(Pu,{isVisible:w,onClose:()=>S(!1),logs:k,stats:P,onRefresh:U,onClear:async()=>{if(window.confirm("Tem certeza que deseja limpar todos os logs do sistema?"))try{await fetch(gl("/logs"),{method:"DELETE"}),await U(),alert("Logs do sistema limpos com sucesso!")}catch(e){console.error("Erro ao limpar logs do sistema:",e),alert("Erro ao limpar logs: "+e.message)}},onExport:async()=>{try{const e=await fetch(gl("/logs/export")),t=await e.json(),a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(a),r=document.createElement("a");r.href=n,r.download=`wrtmind-logs-${(new Date).toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),alert("Logs exportados com sucesso!")}catch(e){console.error("Erro ao exportar logs:",e),alert("Erro ao exportar logs: "+e.message)}},filter:j,onFilterChange:T}),R&&A&&(0,Dl.jsx)(Od,{nota:A,onFechar:()=>{M(!1),N(null)},onEditar:()=>{A&&(M(!1),N(null),I(A))},onExcluir:()=>{if(A){window.confirm(`Tem certeza que deseja excluir a nota "${A.titulo}"?\n\nEsta a\xe7\xe3o n\xe3o pode ser desfeita.`)&&(s(A.id||A._id),M(!1),N(null))}}})]}):(0,Dl.jsx)(ns,{onLogin:O})},gf=()=>(0,Dl.jsxs)(Dl.Fragment,{children:[(0,Dl.jsx)(Ud,{}),(0,Dl.jsx)(Bl,{children:(0,Dl.jsx)(hf,{})})]});uo.add(fl,Xo,$i,Ai,Yi,Xi,Ho,wi,gi,Gi,Ei,Ni,Hi,ol,Wi,Zi,bi);t.createRoot(document.getElementById("root")).render((0,Dl.jsx)(e.StrictMode,{children:(0,Dl.jsx)(gf,{})}))})()})();
//# sourceMappingURL=main.eee922c3.js.map
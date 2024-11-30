function up(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function cp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hc={exports:{}},mo={},mc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.element"),dp=Symbol.for("react.portal"),fp=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),wp=Symbol.for("react.memo"),xp=Symbol.for("react.lazy"),$s=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=$s&&e[$s]||e["@@iterator"],typeof e=="function"?e:null)}var gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vc=Object.assign,yc={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||gc}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wc(){}wc.prototype=Xn.prototype;function ja(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||gc}var _a=ja.prototype=new wc;_a.constructor=ja;vc(_a,Xn.prototype);_a.isPureReactComponent=!0;var zs=Array.isArray,xc=Object.prototype.hasOwnProperty,$a={current:null},kc={key:!0,ref:!0,__self:!0,__source:!0};function Sc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)xc.call(t,r)&&!kc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vr,type:e,key:o,ref:l,props:i,_owner:$a.current}}function Sp(e,t){return{$$typeof:Vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function za(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function Cp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ns=/\/+/g;function Bo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cp(""+e.key):t.toString(36)}function Ci(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vr:case dp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Bo(l,0):r,zs(i)?(n="",e!=null&&(n=e.replace(Ns,"$&/")+"/"),Ci(i,t,n,"",function(u){return u})):i!=null&&(za(i)&&(i=Sp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ns,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",zs(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Bo(o,a);l+=Ci(o,t,n,s,i)}else if(s=kp(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Bo(o,a++),l+=Ci(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function br(e,t,n){if(e==null)return e;var r=[],i=0;return Ci(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ep(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Ei={transition:null},Pp={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:$a};M.Children={map:br,forEach:function(e,t,n){br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return br(e,function(){t++}),t},toArray:function(e){return br(e,function(t){return t})||[]},only:function(e){if(!za(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Xn;M.Fragment=fp;M.Profiler=hp;M.PureComponent=ja;M.StrictMode=pp;M.Suspense=yp;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=$a.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)xc.call(t,s)&&!kc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vr,type:e.type,key:i,ref:o,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};M.createElement=Sc;M.createFactory=function(e){var t=Sc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:vp,render:e}};M.isValidElement=za;M.lazy=function(e){return{$$typeof:xp,_payload:{_status:-1,_result:e},_init:Ep}};M.memo=function(e,t){return{$$typeof:wp,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return we.current.useCallback(e,t)};M.useContext=function(e){return we.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return we.current.useDeferredValue(e)};M.useEffect=function(e,t){return we.current.useEffect(e,t)};M.useId=function(){return we.current.useId()};M.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return we.current.useMemo(e,t)};M.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};M.useRef=function(e){return we.current.useRef(e)};M.useState=function(e){return we.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return we.current.useTransition()};M.version="18.2.0";mc.exports=M;var N=mc.exports;const Ee=cp(N),jp=up({__proto__:null,default:Ee},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p=N,$p=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),Np=Object.prototype.hasOwnProperty,Lp=_p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tp={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Np.call(t,r)&&!Tp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$p,type:e,key:o,ref:l,props:i,_owner:Lp.current}}mo.Fragment=zp;mo.jsx=Cc;mo.jsxs=Cc;hc.exports=mo;var h=hc.exports,Cl={},Ec={exports:{}},Re={},Pc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,T){var R=P.length;P.push(T);e:for(;0<R;){var A=R-1>>>1,q=P[A];if(0<i(q,T))P[A]=T,P[R]=q,R=A;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var T=P[0],R=P.pop();if(R!==T){P[0]=R;e:for(var A=0,q=P.length,wt=q>>>1;A<wt;){var Ie=2*(A+1)-1,lt=P[Ie],Me=Ie+1,be=P[Me];if(0>i(lt,R))Me<q&&0>i(be,lt)?(P[A]=be,P[Me]=R,A=Me):(P[A]=lt,P[Ie]=R,A=Ie);else if(Me<q&&0>i(be,R))P[A]=be,P[Me]=R,A=Me;else break e}}return T}function i(P,T){var R=P.sortIndex-T.sortIndex;return R!==0?R:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],m=1,g=null,p=3,y=!1,w=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=P)r(u),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(u)}}function v(P){if(x=!1,f(P),!w)if(n(s)!==null)w=!0,tr(C);else{var T=n(u);T!==null&&Xt(v,T.startTime-P)}}function C(P,T){w=!1,x&&(x=!1,d(z),z=-1),y=!0;var R=p;try{for(f(T),g=n(s);g!==null&&(!(g.expirationTime>T)||P&&!$e());){var A=g.callback;if(typeof A=="function"){g.callback=null,p=g.priorityLevel;var q=A(g.expirationTime<=T);T=e.unstable_now(),typeof q=="function"?g.callback=q:g===n(s)&&r(s),f(T)}else r(s);g=n(s)}if(g!==null)var wt=!0;else{var Ie=n(u);Ie!==null&&Xt(v,Ie.startTime-T),wt=!1}return wt}finally{g=null,p=R,y=!1}}var E=!1,k=null,z=-1,B=5,I=-1;function $e(){return!(e.unstable_now()-I<B)}function Yt(){if(k!==null){var P=e.unstable_now();I=P;var T=!0;try{T=k(!0,P)}finally{T?Gt():(E=!1,k=null)}}else E=!1}var Gt;if(typeof c=="function")Gt=function(){c(Yt)};else if(typeof MessageChannel<"u"){var Jr=new MessageChannel,Fo=Jr.port2;Jr.port1.onmessage=Yt,Gt=function(){Fo.postMessage(null)}}else Gt=function(){_(Yt,0)};function tr(P){k=P,E||(E=!0,Gt())}function Xt(P,T){z=_(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,tr(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var R=p;p=T;try{return P()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=p;p=P;try{return T()}finally{p=R}},e.unstable_scheduleCallback=function(P,T,R){var A=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?A+R:A):R=A,P){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,P={id:m++,callback:T,priorityLevel:P,startTime:R,expirationTime:q,sortIndex:-1},R>A?(P.sortIndex=R,t(u,P),n(s)===null&&P===n(u)&&(x?(d(z),z=-1):x=!0,Xt(v,R-A))):(P.sortIndex=q,t(s,P),w||y||(w=!0,tr(C))),P},e.unstable_shouldYield=$e,e.unstable_wrapCallback=function(P){var T=p;return function(){var R=p;p=T;try{return P.apply(this,arguments)}finally{p=R}}}})(jc);Pc.exports=jc;var Rp=Pc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=N,Te=Rp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $c=new Set,Pr={};function hn(e,t){Dn(e,t),Dn(e+"Capture",t)}function Dn(e,t){for(Pr[e]=t,e=0;e<t.length;e++)$c.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,Op=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ls={},Ts={};function Ip(e){return El.call(Ts,e)?!0:El.call(Ls,e)?!1:Op.test(e)?Ts[e]=!0:(Ls[e]=!0,!1)}function Mp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dp(e,t,n,r){if(t===null||typeof t>"u"||Mp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Na=/[\-:]([a-z])/g;function La(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Na,La);fe[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Na,La);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Na,La);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ta(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dp(t,n,i,r)&&(n=null),r||i===null?Ip(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ei=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Ra=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Oa=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),_l=Symbol.for("react.suspense_list"),Ia=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Lc=Symbol.for("react.offscreen"),Rs=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Wo;function cr(e){if(Wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||""}return`
`+Wo+e}var Ho=!1;function Vo(e,t){if(!e||Ho)return"";Ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function Ap(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Vo(e.type,!1),e;case 11:return e=Vo(e.type.render,!1),e;case 1:return e=Vo(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case Pl:return"Profiler";case Ra:return"StrictMode";case jl:return"Suspense";case _l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nc:return(e.displayName||"Context")+".Consumer";case zc:return(e._context.displayName||"Context")+".Provider";case Oa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ia:return t=e.displayName||null,t!==null?t:$l(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return $l(e(t))}catch{}}return null}function Fp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(t);case 8:return t===Ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Up(e){var t=Tc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){e._valueTracker||(e._valueTracker=Up(e))}function Rc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Os(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oc(e,t){t=t.checked,t!=null&&Ta(e,"checked",t,!1)}function Nl(e,t){Oc(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||Ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Tl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(dr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Ic(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ni,Dc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bp=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){Bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function Ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function Fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ac(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(Wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function Ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,Tn=null,Rn=null;function As(e){if(e=Yr(e)){if(typeof Dl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=xo(t),Dl(e.stateNode,e.type,t))}}function Uc(e){Tn?Rn?Rn.push(e):Rn=[e]:Tn=e}function Bc(){if(Tn){var e=Tn,t=Rn;if(Rn=Tn=null,As(e),t)for(e=0;e<t.length;e++)As(t[e])}}function Wc(e,t){return e(t)}function Hc(){}var Qo=!1;function Vc(e,t,n){if(Qo)return e(t,n);Qo=!0;try{return Wc(e,t,n)}finally{Qo=!1,(Tn!==null||Rn!==null)&&(Hc(),Bc())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Al=!1;if(ht)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Al=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Al=!1}function Hp(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var gr=!1,Bi=null,Wi=!1,Fl=null,Vp={onError:function(e){gr=!0,Bi=e}};function Qp(e,t,n,r,i,o,l,a,s){gr=!1,Bi=null,Hp.apply(Vp,arguments)}function Kp(e,t,n,r,i,o,l,a,s){if(Qp.apply(this,arguments),gr){if(gr){var u=Bi;gr=!1,Bi=null}else throw Error(S(198));Wi||(Wi=!0,Fl=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fs(e){if(mn(e)!==e)throw Error(S(188))}function Yp(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fs(i),e;if(o===r)return Fs(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Kc(e){return e=Yp(e),e!==null?Yc(e):null}function Yc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yc(e);if(t!==null)return t;e=e.sibling}return null}var Gc=Te.unstable_scheduleCallback,Us=Te.unstable_cancelCallback,Gp=Te.unstable_shouldYield,Xp=Te.unstable_requestPaint,b=Te.unstable_now,Zp=Te.unstable_getCurrentPriorityLevel,Da=Te.unstable_ImmediatePriority,Xc=Te.unstable_UserBlockingPriority,Hi=Te.unstable_NormalPriority,Jp=Te.unstable_LowPriority,Zc=Te.unstable_IdlePriority,go=null,it=null;function qp(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:th,bp=Math.log,eh=Math.LN2;function th(e){return e>>>=0,e===0?32:31-(bp(e)/eh|0)|0}var ri=64,ii=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=fr(a):(o&=l,o!==0&&(r=fr(o)))}else l=n&~i,l!==0?r=fr(l):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),i=1<<n,r|=e[n],t&=~i;return r}function nh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ge(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=nh(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jc(){var e=ri;return ri<<=1,!(ri&4194240)&&(ri=64),e}function Ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function ih(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ge(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Aa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bc,Fa,ed,td,nd,Bl=!1,oi=[],Rt=null,Ot=null,It=null,$r=new Map,zr=new Map,zt=[],oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bs(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Yr(t),t!==null&&Fa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lh(e,t,n,r,i){switch(t){case"focusin":return Rt=ir(Rt,e,t,n,r,i),!0;case"dragenter":return Ot=ir(Ot,e,t,n,r,i),!0;case"mouseover":return It=ir(It,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return $r.set(o,ir($r.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zr.set(o,ir(zr.get(o)||null,e,t,n,r,i)),!0}return!1}function rd(e){var t=bt(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Qc(n),t!==null){e.blockedOn=t,nd(e.priority,function(){ed(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ml=r,n.target.dispatchEvent(r),Ml=null}else return t=Yr(n),t!==null&&Fa(t),e.blockedOn=n,!1;t.shift()}return!0}function Ws(e,t,n){Pi(e)&&n.delete(t)}function ah(){Bl=!1,Rt!==null&&Pi(Rt)&&(Rt=null),Ot!==null&&Pi(Ot)&&(Ot=null),It!==null&&Pi(It)&&(It=null),$r.forEach(Ws),zr.forEach(Ws)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,ah)))}function Nr(e){function t(i){return or(i,e)}if(0<oi.length){or(oi[0],e);for(var n=1;n<oi.length;n++){var r=oi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&or(Rt,e),Ot!==null&&or(Ot,e),It!==null&&or(It,e),$r.forEach(t),zr.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)rd(n),n.blockedOn===null&&zt.shift()}var On=yt.ReactCurrentBatchConfig,Qi=!0;function sh(e,t,n,r){var i=U,o=On.transition;On.transition=null;try{U=1,Ua(e,t,n,r)}finally{U=i,On.transition=o}}function uh(e,t,n,r){var i=U,o=On.transition;On.transition=null;try{U=4,Ua(e,t,n,r)}finally{U=i,On.transition=o}}function Ua(e,t,n,r){if(Qi){var i=Wl(e,t,n,r);if(i===null)nl(e,t,r,Ki,n),Bs(e,r);else if(lh(i,e,t,n,r))r.stopPropagation();else if(Bs(e,r),t&4&&-1<oh.indexOf(e)){for(;i!==null;){var o=Yr(i);if(o!==null&&bc(o),o=Wl(e,t,n,r),o===null&&nl(e,t,r,Ki,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else nl(e,t,r,null,n)}}var Ki=null;function Wl(e,t,n,r){if(Ki=null,e=Ma(r),e=bt(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case Da:return 1;case Xc:return 4;case Hi:case Jp:return 16;case Zc:return 536870912;default:return 16}default:return 16}}var Lt=null,Ba=null,ji=null;function od(){if(ji)return ji;var e,t=Ba,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Hs(){return!1}function Oe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?li:Hs,this.isPropagationStopped=Hs,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Oe(Zn),Kr=X({},Zn,{view:0,detail:0}),ch=Oe(Kr),Yo,Go,lr,vo=X({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ha,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(Yo=e.screenX-lr.screenX,Go=e.screenY-lr.screenY):Go=Yo=0,lr=e),Yo)},movementY:function(e){return"movementY"in e?e.movementY:Go}}),Vs=Oe(vo),dh=X({},vo,{dataTransfer:0}),fh=Oe(dh),ph=X({},Kr,{relatedTarget:0}),Xo=Oe(ph),hh=X({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),mh=Oe(hh),gh=X({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vh=Oe(gh),yh=X({},Zn,{data:0}),Qs=Oe(yh),wh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kh[e])?!!t[e]:!1}function Ha(){return Sh}var Ch=X({},Kr,{key:function(e){if(e.key){var t=wh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ha,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eh=Oe(Ch),Ph=X({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=Oe(Ph),jh=X({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ha}),_h=Oe(jh),$h=X({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zh=Oe($h),Nh=X({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lh=Oe(Nh),Th=[9,13,27,32],Va=ht&&"CompositionEvent"in window,vr=null;ht&&"documentMode"in document&&(vr=document.documentMode);var Rh=ht&&"TextEvent"in window&&!vr,ld=ht&&(!Va||vr&&8<vr&&11>=vr),Ys=String.fromCharCode(32),Gs=!1;function ad(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Oh(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(Gs=!0,Ys);case"textInput":return e=t.data,e===Ys&&Gs?null:e;default:return null}}function Ih(e,t){if(xn)return e==="compositionend"||!Va&&ad(e,t)?(e=od(),ji=Ba=Lt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ld&&t.locale!=="ko"?null:t.data;default:return null}}var Mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mh[e.type]:t==="textarea"}function ud(e,t,n,r){Uc(r),t=Yi(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Lr=null;function Dh(e){xd(e,0)}function yo(e){var t=Cn(e);if(Rc(t))return e}function Ah(e,t){if(e==="change")return t}var cd=!1;if(ht){var Zo;if(ht){var Jo="oninput"in document;if(!Jo){var Zs=document.createElement("div");Zs.setAttribute("oninput","return;"),Jo=typeof Zs.oninput=="function"}Zo=Jo}else Zo=!1;cd=Zo&&(!document.documentMode||9<document.documentMode)}function Js(){yr&&(yr.detachEvent("onpropertychange",dd),Lr=yr=null)}function dd(e){if(e.propertyName==="value"&&yo(Lr)){var t=[];ud(t,Lr,e,Ma(e)),Vc(Dh,t)}}function Fh(e,t,n){e==="focusin"?(Js(),yr=t,Lr=n,yr.attachEvent("onpropertychange",dd)):e==="focusout"&&Js()}function Uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(Lr)}function Bh(e,t){if(e==="click")return yo(t)}function Wh(e,t){if(e==="input"||e==="change")return yo(t)}function Hh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Hh;function Tr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!El.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function qs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bs(e,t){var n=qs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qs(n)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pd(){for(var e=window,t=Ui();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ui(e.document)}return t}function Qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vh(e){var t=pd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fd(n.ownerDocument.documentElement,n)){if(r!==null&&Qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bs(n,o);var l=bs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qh=ht&&"documentMode"in document&&11>=document.documentMode,kn=null,Hl=null,wr=null,Vl=!1;function eu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vl||kn==null||kn!==Ui(r)||(r=kn,"selectionStart"in r&&Qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Tr(wr,r)||(wr=r,r=Yi(Hl,"onSelect"),0<r.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionend:ai("Transition","TransitionEnd")},qo={},hd={};ht&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function wo(e){if(qo[e])return qo[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hd)return qo[e]=t[n];return e}var md=wo("animationend"),gd=wo("animationiteration"),vd=wo("animationstart"),yd=wo("transitionend"),wd=new Map,tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){wd.set(e,t),hn(t,[e])}for(var bo=0;bo<tu.length;bo++){var el=tu[bo],Kh=el.toLowerCase(),Yh=el[0].toUpperCase()+el.slice(1);Vt(Kh,"on"+Yh)}Vt(md,"onAnimationEnd");Vt(gd,"onAnimationIteration");Vt(vd,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(yd,"onTransitionEnd");Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gh=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function nu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kp(r,t,void 0,e),e.currentTarget=null}function xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;nu(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;nu(i,a,u),o=s}}}if(Wi)throw e=Fl,Wi=!1,Fl=null,e}function H(e,t){var n=t[Xl];n===void 0&&(n=t[Xl]=new Set);var r=e+"__bubble";n.has(r)||(kd(t,e,2,!1),n.add(r))}function tl(e,t,n){var r=0;t&&(r|=4),kd(n,e,r,t)}var si="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[si]){e[si]=!0,$c.forEach(function(n){n!=="selectionchange"&&(Gh.has(n)||tl(n,!1,e),tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[si]||(t[si]=!0,tl("selectionchange",!1,t))}}function kd(e,t,n,r){switch(id(t)){case 1:var i=sh;break;case 4:i=uh;break;default:i=Ua}n=i.bind(null,t,n,e),i=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=bt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Vc(function(){var u=o,m=Ma(n),g=[];e:{var p=wd.get(e);if(p!==void 0){var y=Wa,w=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":y=Eh;break;case"focusin":w="focus",y=Xo;break;case"focusout":w="blur",y=Xo;break;case"beforeblur":case"afterblur":y=Xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_h;break;case md:case gd:case vd:y=mh;break;case yd:y=zh;break;case"scroll":y=ch;break;case"wheel":y=Lh;break;case"copy":case"cut":case"paste":y=vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ks}var x=(t&4)!==0,_=!x&&e==="scroll",d=x?p!==null?p+"Capture":null:p;x=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=_r(c,d),v!=null&&x.push(Or(c,v,f)))),_)break;c=c.return}0<x.length&&(p=new y(p,w,null,n,m),g.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Ml&&(w=n.relatedTarget||n.fromElement)&&(bt(w)||w[mt]))break e;if((y||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?bt(w):null,w!==null&&(_=mn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(x=Vs,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ks,v="onPointerLeave",d="onPointerEnter",c="pointer"),_=y==null?p:Cn(y),f=w==null?p:Cn(w),p=new x(v,c+"leave",y,n,m),p.target=_,p.relatedTarget=f,v=null,bt(m)===u&&(x=new x(d,c+"enter",w,n,m),x.target=f,x.relatedTarget=_,v=x),_=v,y&&w)t:{for(x=y,d=w,c=0,f=x;f;f=gn(f))c++;for(f=0,v=d;v;v=gn(v))f++;for(;0<c-f;)x=gn(x),c--;for(;0<f-c;)d=gn(d),f--;for(;c--;){if(x===d||d!==null&&x===d.alternate)break t;x=gn(x),d=gn(d)}x=null}else x=null;y!==null&&ru(g,p,y,x,!1),w!==null&&_!==null&&ru(g,_,w,x,!0)}}e:{if(p=u?Cn(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var C=Ah;else if(Xs(p))if(cd)C=Wh;else{C=Uh;var E=Fh}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Bh);if(C&&(C=C(e,u))){ud(g,C,n,m);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Ll(p,"number",p.value)}switch(E=u?Cn(u):window,e){case"focusin":(Xs(E)||E.contentEditable==="true")&&(kn=E,Hl=u,wr=null);break;case"focusout":wr=Hl=kn=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,eu(g,n,m);break;case"selectionchange":if(Qh)break;case"keydown":case"keyup":eu(g,n,m)}var k;if(Va)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else xn?ad(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(ld&&n.locale!=="ko"&&(xn||z!=="onCompositionStart"?z==="onCompositionEnd"&&xn&&(k=od()):(Lt=m,Ba="value"in Lt?Lt.value:Lt.textContent,xn=!0)),E=Yi(u,z),0<E.length&&(z=new Qs(z,e,null,n,m),g.push({event:z,listeners:E}),k?z.data=k:(k=sd(n),k!==null&&(z.data=k)))),(k=Rh?Oh(e,n):Ih(e,n))&&(u=Yi(u,"onBeforeInput"),0<u.length&&(m=new Qs("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:u}),m.data=k))}xd(g,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_r(e,n),o!=null&&r.unshift(Or(e,o,i)),o=_r(e,t),o!=null&&r.push(Or(e,o,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ru(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=_r(n,o),s!=null&&l.unshift(Or(n,s,a))):i||(s=_r(n,o),s!=null&&l.push(Or(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Xh=/\r\n?/g,Zh=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(Xh,`
`).replace(Zh,"")}function ui(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(S(425))}function Gi(){}var Ql=null,Kl=null;function Yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,Jh=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,qh=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(e){return ou.resolve(null).then(e).catch(bh)}:Gl;function bh(e){setTimeout(function(){throw e})}function rl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nr(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Jn,Ir="__reactProps$"+Jn,mt="__reactContainer$"+Jn,Xl="__reactEvents$"+Jn,em="__reactListeners$"+Jn,tm="__reactHandles$"+Jn;function bt(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[rt])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){return e=e[rt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function xo(e){return e[Ir]||null}var Zl=[],En=-1;function Qt(e){return{current:e}}function Q(e){0>En||(e.current=Zl[En],Zl[En]=null,En--)}function W(e,t){En++,Zl[En]=e.current,e.current=t}var Ht={},ge=Qt(Ht),Pe=Qt(!1),un=Ht;function An(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function Xi(){Q(Pe),Q(ge)}function au(e,t,n){if(ge.current!==Ht)throw Error(S(168));W(ge,t),W(Pe,n)}function Sd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Fp(e)||"Unknown",i));return X({},n,r)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,un=ge.current,W(ge,e),W(Pe,Pe.current),!0}function su(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Sd(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,Q(Pe),Q(ge),W(ge,e)):Q(Pe),W(Pe,n)}var ut=null,ko=!1,il=!1;function Cd(e){ut===null?ut=[e]:ut.push(e)}function nm(e){ko=!0,Cd(e)}function Kt(){if(!il&&ut!==null){il=!0;var e=0,t=U;try{var n=ut;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,ko=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),Gc(Da,Kt),i}finally{U=t,il=!1}}return null}var Pn=[],jn=0,Ji=null,qi=0,De=[],Ae=0,cn=null,ct=1,dt="";function Jt(e,t){Pn[jn++]=qi,Pn[jn++]=Ji,Ji=e,qi=t}function Ed(e,t,n){De[Ae++]=ct,De[Ae++]=dt,De[Ae++]=cn,cn=e;var r=ct;e=dt;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var o=32-Ge(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ct=1<<32-Ge(t)+i|n<<i|r,dt=o+e}else ct=1<<o|n<<i|r,dt=e}function Ka(e){e.return!==null&&(Jt(e,1),Ed(e,1,0))}function Ya(e){for(;e===Ji;)Ji=Pn[--jn],Pn[jn]=null,qi=Pn[--jn],Pn[jn]=null;for(;e===cn;)cn=De[--Ae],De[Ae]=null,dt=De[--Ae],De[Ae]=null,ct=De[--Ae],De[Ae]=null}var Le=null,Ne=null,K=!1,Ye=null;function Pd(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Ne=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:ct,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Ne=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ql(e){if(K){var t=Ne;if(t){var n=t;if(!uu(e,t)){if(Jl(e))throw Error(S(418));t=Mt(n.nextSibling);var r=Le;t&&uu(e,t)?Pd(r,n):(e.flags=e.flags&-4097|2,K=!1,Le=e)}}else{if(Jl(e))throw Error(S(418));e.flags=e.flags&-4097|2,K=!1,Le=e}}}function cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ci(e){if(e!==Le)return!1;if(!K)return cu(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yl(e.type,e.memoizedProps)),t&&(t=Ne)){if(Jl(e))throw jd(),Error(S(418));for(;t;)Pd(e,t),t=Mt(t.nextSibling)}if(cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Le?Mt(e.stateNode.nextSibling):null;return!0}function jd(){for(var e=Ne;e;)e=Mt(e.nextSibling)}function Fn(){Ne=Le=null,K=!1}function Ga(e){Ye===null?Ye=[e]:Ye.push(e)}var rm=yt.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bi=Qt(null),eo=null,_n=null,Xa=null;function Za(){Xa=_n=eo=null}function Ja(e){var t=bi.current;Q(bi),e._currentValue=t}function bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){eo=e,Xa=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(eo===null)throw Error(S(308));_n=e,eo.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var en=null;function qa(e){en===null?en=[e]:en.push(e)}function _d(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qa(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,qa(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function $i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}function du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;$t=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(o!==null){var g=i.baseState;l=0,m=u=s=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,x=a;switch(p=t,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){g=w.call(y,g,p);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,p=typeof w=="function"?w.call(y,g,p):w,p==null)break e;g=X({},g,p);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=y,s=g):m=m.next=y,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(m===null&&(s=g),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fn|=l,e.lanes=l,e.memoizedState=g}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var zd=new _c.Component().refs;function ea(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Ft(e),o=ft(r,i);o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(Xe(t,e,i,r),$i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Ft(e),o=ft(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(Xe(t,e,i,r),$i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Ft(e),i=ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(Xe(t,e,r,n),$i(t,e,r))}};function pu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(i,o):!0}function Nd(e,t,n){var r=!1,i=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=je(t)?un:ge.current,r=t.contextTypes,o=(r=r!=null)?An(e,i):Ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function ta(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=zd,ba(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=je(t)?un:ge.current,i.context=An(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ea(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&So.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===zd&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function di(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function Ld(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Ut(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,v){return c===null||c.tag!==6?(c=dl(f,d.mode,v),c.return=d,c):(c=i(c,f),c.return=d,c)}function s(d,c,f,v){var C=f.type;return C===wn?m(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_t&&mu(C)===c.type)?(v=i(c,f.props),v.ref=ar(d,c,f),v.return=d,v):(v=Oi(f.type,f.key,f.props,null,d.mode,v),v.ref=ar(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=fl(f,d.mode,v),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function m(d,c,f,v,C){return c===null||c.tag!==7?(c=ln(f,d.mode,v,C),c.return=d,c):(c=i(c,f),c.return=d,c)}function g(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=dl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ei:return f=Oi(c.type,c.key,c.props,null,d.mode,f),f.ref=ar(d,null,c),f.return=d,f;case yn:return c=fl(c,d.mode,f),c.return=d,c;case _t:var v=c._init;return g(d,v(c._payload),f)}if(dr(c)||nr(c))return c=ln(c,d.mode,f,null),c.return=d,c;di(d,c)}return null}function p(d,c,f,v){var C=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ei:return f.key===C?s(d,c,f,v):null;case yn:return f.key===C?u(d,c,f,v):null;case _t:return C=f._init,p(d,c,C(f._payload),v)}if(dr(f)||nr(f))return C!==null?null:m(d,c,f,v,null);di(d,f)}return null}function y(d,c,f,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,a(c,d,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ei:return d=d.get(v.key===null?f:v.key)||null,s(c,d,v,C);case yn:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,C);case _t:var E=v._init;return y(d,c,f,E(v._payload),C)}if(dr(v)||nr(v))return d=d.get(f)||null,m(c,d,v,C,null);di(c,v)}return null}function w(d,c,f,v){for(var C=null,E=null,k=c,z=c=0,B=null;k!==null&&z<f.length;z++){k.index>z?(B=k,k=null):B=k.sibling;var I=p(d,k,f[z],v);if(I===null){k===null&&(k=B);break}e&&k&&I.alternate===null&&t(d,k),c=o(I,c,z),E===null?C=I:E.sibling=I,E=I,k=B}if(z===f.length)return n(d,k),K&&Jt(d,z),C;if(k===null){for(;z<f.length;z++)k=g(d,f[z],v),k!==null&&(c=o(k,c,z),E===null?C=k:E.sibling=k,E=k);return K&&Jt(d,z),C}for(k=r(d,k);z<f.length;z++)B=y(k,d,z,f[z],v),B!==null&&(e&&B.alternate!==null&&k.delete(B.key===null?z:B.key),c=o(B,c,z),E===null?C=B:E.sibling=B,E=B);return e&&k.forEach(function($e){return t(d,$e)}),K&&Jt(d,z),C}function x(d,c,f,v){var C=nr(f);if(typeof C!="function")throw Error(S(150));if(f=C.call(f),f==null)throw Error(S(151));for(var E=C=null,k=c,z=c=0,B=null,I=f.next();k!==null&&!I.done;z++,I=f.next()){k.index>z?(B=k,k=null):B=k.sibling;var $e=p(d,k,I.value,v);if($e===null){k===null&&(k=B);break}e&&k&&$e.alternate===null&&t(d,k),c=o($e,c,z),E===null?C=$e:E.sibling=$e,E=$e,k=B}if(I.done)return n(d,k),K&&Jt(d,z),C;if(k===null){for(;!I.done;z++,I=f.next())I=g(d,I.value,v),I!==null&&(c=o(I,c,z),E===null?C=I:E.sibling=I,E=I);return K&&Jt(d,z),C}for(k=r(d,k);!I.done;z++,I=f.next())I=y(k,d,z,I.value,v),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?z:I.key),c=o(I,c,z),E===null?C=I:E.sibling=I,E=I);return e&&k.forEach(function(Yt){return t(d,Yt)}),K&&Jt(d,z),C}function _(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===wn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ei:e:{for(var C=f.key,E=c;E!==null;){if(E.key===C){if(C=f.type,C===wn){if(E.tag===7){n(d,E.sibling),c=i(E,f.props.children),c.return=d,d=c;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_t&&mu(C)===E.type){n(d,E.sibling),c=i(E,f.props),c.ref=ar(d,E,f),c.return=d,d=c;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===wn?(c=ln(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=Oi(f.type,f.key,f.props,null,d.mode,v),v.ref=ar(d,c,f),v.return=d,d=v)}return l(d);case yn:e:{for(E=f.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=fl(f,d.mode,v),c.return=d,d=c}return l(d);case _t:return E=f._init,_(d,c,E(f._payload),v)}if(dr(f))return w(d,c,f,v);if(nr(f))return x(d,c,f,v);di(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=dl(f,d.mode,v),c.return=d,d=c),l(d)):n(d,c)}return _}var Un=Ld(!0),Td=Ld(!1),Gr={},ot=Qt(Gr),Mr=Qt(Gr),Dr=Qt(Gr);function tn(e){if(e===Gr)throw Error(S(174));return e}function es(e,t){switch(W(Dr,t),W(Mr,e),W(ot,Gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rl(t,e)}Q(ot),W(ot,t)}function Bn(){Q(ot),Q(Mr),Q(Dr)}function Rd(e){tn(Dr.current);var t=tn(ot.current),n=Rl(t,e.type);t!==n&&(W(Mr,e),W(ot,n))}function ts(e){Mr.current===e&&(Q(ot),Q(Mr))}var Y=Qt(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ol=[];function ns(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var zi=yt.ReactCurrentDispatcher,ll=yt.ReactCurrentBatchConfig,dn=0,G=null,ne=null,oe=null,ro=!1,xr=!1,Ar=0,im=0;function pe(){throw Error(S(321))}function rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function is(e,t,n,r,i,o){if(dn=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zi.current=e===null||e.memoizedState===null?sm:um,e=n(r,i),xr){o=0;do{if(xr=!1,Ar=0,25<=o)throw Error(S(301));o+=1,oe=ne=null,t.updateQueue=null,zi.current=cm,e=n(r,i)}while(xr)}if(zi.current=io,t=ne!==null&&ne.next!==null,dn=0,oe=ne=G=null,ro=!1,t)throw Error(S(300));return e}function os(){var e=Ar!==0;return Ar=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?G.memoizedState=oe=e:oe=oe.next=e,oe}function We(){if(ne===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?G.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?G.memoizedState=oe=e:oe=oe.next=e}return oe}function Fr(e,t){return typeof t=="function"?t(e):t}function al(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var m=u.lane;if((dn&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=g,l=r):s=s.next=g,G.lanes|=m,fn|=m}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,qe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sl(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);qe(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Od(){}function Id(e,t){var n=G,r=We(),i=t(),o=!qe(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,ls(Ad.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Ur(9,Dd.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(S(349));dn&30||Md(n,t,i)}return i}function Md(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dd(e,t,n,r){t.value=n,t.getSnapshot=r,Fd(t)&&Ud(e)}function Ad(e,t,n){return n(function(){Fd(t)&&Ud(e)})}function Fd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Ud(e){var t=gt(e,1);t!==null&&Xe(t,e,1,-1)}function gu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=am.bind(null,G,e),[t.memoizedState,e]}function Ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bd(){return We().memoizedState}function Ni(e,t,n,r){var i=tt();G.flags|=e,i.memoizedState=Ur(1|t,n,void 0,r===void 0?null:r)}function Co(e,t,n,r){var i=We();r=r===void 0?null:r;var o=void 0;if(ne!==null){var l=ne.memoizedState;if(o=l.destroy,r!==null&&rs(r,l.deps)){i.memoizedState=Ur(t,n,o,r);return}}G.flags|=e,i.memoizedState=Ur(1|t,n,o,r)}function vu(e,t){return Ni(8390656,8,e,t)}function ls(e,t){return Co(2048,8,e,t)}function Wd(e,t){return Co(4,2,e,t)}function Hd(e,t){return Co(4,4,e,t)}function Vd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qd(e,t,n){return n=n!=null?n.concat([e]):null,Co(4,4,Vd.bind(null,t,e),n)}function as(){}function Kd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gd(e,t,n){return dn&21?(qe(n,t)||(n=Jc(),G.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function om(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{U=n,ll.transition=r}}function Xd(){return We().memoizedState}function lm(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zd(e))Jd(t,n);else if(n=_d(e,t,n,r),n!==null){var i=ye();Xe(n,e,r,i),qd(n,t,r)}}function am(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zd(e))Jd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,qe(a,l)){var s=t.interleaved;s===null?(i.next=i,qa(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=_d(e,t,i,r),n!==null&&(i=ye(),Xe(n,e,r,i),qd(n,t,r))}}function Zd(e){var t=e.alternate;return e===G||t!==null&&t===G}function Jd(e,t){xr=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}var io={readContext:Be,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},sm={readContext:Be,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4194308,4,Vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lm.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:gu,useDebugValue:as,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=gu(!1),t=e[0];return e=om.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=tt();if(K){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ae===null)throw Error(S(349));dn&30||Md(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vu(Ad.bind(null,r,o,e),[e]),r.flags|=2048,Ur(9,Dd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tt(),t=ae.identifierPrefix;if(K){var n=dt,r=ct;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=im++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},um={readContext:Be,useCallback:Kd,useContext:Be,useEffect:ls,useImperativeHandle:Qd,useInsertionEffect:Wd,useLayoutEffect:Hd,useMemo:Yd,useReducer:al,useRef:Bd,useState:function(){return al(Fr)},useDebugValue:as,useDeferredValue:function(e){var t=We();return Gd(t,ne.memoizedState,e)},useTransition:function(){var e=al(Fr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Id,useId:Xd,unstable_isNewReconciler:!1},cm={readContext:Be,useCallback:Kd,useContext:Be,useEffect:ls,useImperativeHandle:Qd,useInsertionEffect:Wd,useLayoutEffect:Hd,useMemo:Yd,useReducer:sl,useRef:Bd,useState:function(){return sl(Fr)},useDebugValue:as,useDeferredValue:function(e){var t=We();return ne===null?t.memoizedState=e:Gd(t,ne.memoizedState,e)},useTransition:function(){var e=sl(Fr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Id,useId:Xd,unstable_isNewReconciler:!1};function Wn(e,t){try{var n="",r=t;do n+=Ap(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dm=typeof WeakMap=="function"?WeakMap:Map;function bd(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lo||(lo=!0,fa=r),na(e,t)},n}function ef(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){na(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){na(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pm.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var fm=yt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Td(t,null,n,r):Un(t,e.child,n,r)}function ku(e,t,n,r,i){n=n.render;var o=t.ref;return In(t,i),r=is(e,t,n,r,o,i),n=os(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(K&&n&&Ka(t),t.flags|=1,ve(e,t,r,i),t.child)}function Su(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ms(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,tf(e,t,o,r,i)):(e=Oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(l,r)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function tf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Tr(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,vt(e,t,i)}return ra(e,t,n,r,i)}function nf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(zn,ze),ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(zn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(zn,ze),ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(zn,ze),ze|=r;return ve(e,t,i,n),t.child}function rf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ra(e,t,n,r,i){var o=je(n)?un:ge.current;return o=An(t,o),In(t,i),n=is(e,t,n,r,o,i),r=os(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(K&&r&&Ka(t),t.flags|=1,ve(e,t,n,i),t.child)}function Cu(e,t,n,r,i){if(je(n)){var o=!0;Zi(t)}else o=!1;if(In(t,i),t.stateNode===null)Li(e,t),Nd(t,n,r),ta(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=je(n)?un:ge.current,u=An(t,u));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&hu(t,l,r,u),$t=!1;var p=t.memoizedState;l.state=p,to(t,r,l,i),s=t.memoizedState,a!==r||p!==s||Pe.current||$t?(typeof m=="function"&&(ea(t,n,m,r),s=t.memoizedState),(a=$t||pu(t,n,a,r,p,s,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,$d(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),l.props=u,g=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=je(n)?un:ge.current,s=An(t,s));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||p!==s)&&hu(t,l,r,s),$t=!1,p=t.memoizedState,l.state=p,to(t,r,l,i);var w=t.memoizedState;a!==g||p!==w||Pe.current||$t?(typeof y=="function"&&(ea(t,n,y,r),w=t.memoizedState),(u=$t||pu(t,n,u,r,p,w,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ia(e,t,n,r,o,i)}function ia(e,t,n,r,i,o){rf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&su(t,n,!1),vt(e,t,o);r=t.stateNode,fm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Un(t,e.child,null,o),t.child=Un(t,null,a,o)):ve(e,t,a,o),t.memoizedState=r.state,i&&su(t,n,!0),t.child}function of(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),es(e,t.containerInfo)}function Eu(e,t,n,r,i){return Fn(),Ga(i),t.flags|=256,ve(e,t,n,r),t.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function la(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Y,i&1),e===null)return ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=jo(l,r,0,null),e=ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=la(n),t.memoizedState=oa,e):ss(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pm(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ut(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ut(a,o):(o=ln(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?la(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=oa,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ss(e,t){return t=jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,r){return r!==null&&Ga(r),Un(t,e.child,null,n),e=ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(S(422))),fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=jo({mode:"visible",children:r.children},i,0,null),o=ln(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Un(t,e.child,null,l),t.child.memoizedState=la(l),t.memoizedState=oa,o);if(!(t.mode&1))return fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=ul(o,r,void 0),fi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Se||a){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gt(e,i),Xe(r,e,i,-1))}return hs(),r=ul(Error(S(421))),fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=Mt(i.nextSibling),Le=t,K=!0,Ye=null,e!==null&&(De[Ae++]=ct,De[Ae++]=dt,De[Ae++]=cn,ct=e.id,dt=e.overflow,cn=t),t=ss(t,r.children),t.flags|=4096,t)}function Pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bl(e.return,t,n)}function cl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function af(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ve(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,n,t);else if(e.tag===19)Pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,o);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hm(e,t,n){switch(t.tag){case 3:of(t),Fn();break;case 5:Rd(t);break;case 1:je(t.type)&&Zi(t);break;case 4:es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(bi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?lf(e,t,n):(W(Y,Y.current&1),e=vt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return af(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,nf(e,t,n)}return vt(e,t,n)}var sf,aa,uf,cf;sf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};aa=function(){};uf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(ot.current);var o=null;switch(n){case"input":i=zl(e,i),r=zl(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=Tl(e,i),r=Tl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}Ol(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mm(e,t,n){var r=t.pendingProps;switch(Ya(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return je(t.type)&&Xi(),he(t),null;case 3:return r=t.stateNode,Bn(),Q(Pe),Q(ge),ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(ma(Ye),Ye=null))),aa(e,t),he(t),null;case 5:ts(t);var i=tn(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)uf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return he(t),null}if(e=tn(ot.current),ci(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[rt]=t,r[Ir]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)H(pr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Os(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":Ms(r,o),H("invalid",r)}Ol(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,a,e),i=["children",""+a]):Pr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":ti(r),Is(r,o,!0);break;case"textarea":ti(r),Ds(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[rt]=t,e[Ir]=r,sf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Il(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)H(pr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Os(e,r),i=zl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ms(e,r),i=Tl(e,r),H("invalid",e);break;default:i=r}Ol(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Fc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Dc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&jr(e,s):typeof s=="number"&&jr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&H("scroll",e):s!=null&&Ta(e,o,s,l))}switch(n){case"input":ti(e),Is(e,r,!1);break;case"textarea":ti(e),Ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=tn(Dr.current),tn(ot.current),ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:ui(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return he(t),null;case 13:if(Q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ne!==null&&t.mode&1&&!(t.flags&128))jd(),Fn(),t.flags|=98560,o=!1;else if(o=ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[rt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else Ye!==null&&(ma(Ye),Ye=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?re===0&&(re=3):hs())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Bn(),aa(e,t),e===null&&Rr(t.stateNode.containerInfo),he(t),null;case 10:return Ja(t.type._context),he(t),null;case 17:return je(t.type)&&Xi(),he(t),null;case 19:if(Q(Y),o=t.memoizedState,o===null)return he(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)sr(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=no(e),l!==null){for(t.flags|=128,sr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&b()>Hn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=no(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!K)return he(t),null}else 2*b()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return ps(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function gm(e,t){switch(Ya(t),t.tag){case 1:return je(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),Q(Pe),Q(ge),ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ts(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return Bn(),null;case 10:return Ja(t.type._context),null;case 22:case 23:return ps(),null;case 24:return null;default:return null}}var pi=!1,me=!1,vm=typeof WeakSet=="function"?WeakSet:Set,j=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function sa(e,t,n){try{n()}catch(r){Z(e,t,r)}}var ju=!1;function ym(e,t){if(Ql=Qi,e=pd(),Qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,m=0,g=e,p=null;t:for(;;){for(var y;g!==n||i!==0&&g.nodeType!==3||(a=l+i),g!==o||r!==0&&g.nodeType!==3||(s=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(y=g.firstChild)!==null;)p=g,g=y;for(;;){if(g===e)break t;if(p===n&&++u===i&&(a=l),p===o&&++m===r&&(s=l),(y=g.nextSibling)!==null)break;g=p,p=g.parentNode}g=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kl={focusedElem:e,selectionRange:n},Qi=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,_=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),_);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){Z(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=ju,ju=!1,w}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&sa(t,n,o)}i=i.next}while(i!==r)}}function Eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function df(e){var t=e.alternate;t!==null&&(e.alternate=null,df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[Ir],delete t[Xl],delete t[em],delete t[tm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ff(e){return e.tag===5||e.tag===3||e.tag===4}function _u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}function da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,t,n),e=e.sibling;e!==null;)da(e,t,n),e=e.sibling}var ue=null,Ke=!1;function kt(e,t,n){for(n=n.child;n!==null;)pf(e,t,n),n=n.sibling}function pf(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:me||$n(n,t);case 6:var r=ue,i=Ke;ue=null,kt(e,t,n),ue=r,Ke=i,ue!==null&&(Ke?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ke?(e=ue,n=n.stateNode,e.nodeType===8?rl(e.parentNode,n):e.nodeType===1&&rl(e,n),Nr(e)):rl(ue,n.stateNode));break;case 4:r=ue,i=Ke,ue=n.stateNode.containerInfo,Ke=!0,kt(e,t,n),ue=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&sa(n,t,l),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!me&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,kt(e,t,n),me=r):kt(e,t,n);break;default:kt(e,t,n)}}function $u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vm),t.forEach(function(r){var i=_m.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ke=!1;break e;case 3:ue=a.stateNode.containerInfo,Ke=!0;break e;case 4:ue=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ue===null)throw Error(S(160));pf(o,l,i),ue=null,Ke=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hf(t,e),t=t.sibling}function hf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),et(e),r&4){try{kr(3,e,e.return),Eo(3,e)}catch(x){Z(e,e.return,x)}try{kr(5,e,e.return)}catch(x){Z(e,e.return,x)}}break;case 1:Ve(t,e),et(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(Ve(t,e),et(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(x){Z(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Oc(i,o),Il(a,l);var u=Il(a,o);for(l=0;l<s.length;l+=2){var m=s[l],g=s[l+1];m==="style"?Fc(i,g):m==="dangerouslySetInnerHTML"?Dc(i,g):m==="children"?jr(i,g):Ta(i,m,g,u)}switch(a){case"input":Nl(i,o);break;case"textarea":Ic(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Ln(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ir]=o}catch(x){Z(e,e.return,x)}}break;case 6:if(Ve(t,e),et(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Z(e,e.return,x)}}break;case 3:if(Ve(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(x){Z(e,e.return,x)}break;case 4:Ve(t,e),et(e);break;case 13:Ve(t,e),et(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ds=b())),r&4&&$u(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||m,Ve(t,e),me=u):Ve(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(j=e,m=e.child;m!==null;){for(g=j=m;j!==null;){switch(p=j,y=p.child,p.tag){case 0:case 11:case 14:case 15:kr(4,p,p.return);break;case 1:$n(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){Z(r,n,x)}}break;case 5:$n(p,p.return);break;case 22:if(p.memoizedState!==null){Nu(g);continue}}y!==null?(y.return=p,j=y):Nu(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,s=g.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ac("display",l))}catch(x){Z(e,e.return,x)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(x){Z(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ve(t,e),et(e),r&4&&$u(e);break;case 21:break;default:Ve(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ff(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jr(i,""),r.flags&=-33);var o=_u(e);da(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=_u(e);ca(e,a,l);break;default:throw Error(S(161))}}catch(s){Z(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wm(e,t,n){j=e,mf(e)}function mf(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||pi;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||me;a=pi;var u=me;if(pi=l,(me=s)&&!u)for(j=i;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?Lu(i):s!==null?(s.return=l,j=s):Lu(i);for(;o!==null;)j=o,mf(o),o=o.sibling;j=i,pi=a,me=u}zu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):zu(e)}}function zu(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Eo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&fu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Nr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&ua(t)}catch(p){Z(t,t.return,p)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Nu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Lu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Eo(4,t)}catch(s){Z(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Z(t,i,s)}}var o=t.return;try{ua(t)}catch(s){Z(t,o,s)}break;case 5:var l=t.return;try{ua(t)}catch(s){Z(t,l,s)}}}catch(s){Z(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var xm=Math.ceil,oo=yt.ReactCurrentDispatcher,us=yt.ReactCurrentOwner,Ue=yt.ReactCurrentBatchConfig,D=0,ae=null,te=null,de=0,ze=0,zn=Qt(0),re=0,Br=null,fn=0,Po=0,cs=0,Sr=null,ke=null,ds=0,Hn=1/0,at=null,lo=!1,fa=null,At=null,hi=!1,Tt=null,ao=0,Cr=0,pa=null,Ti=-1,Ri=0;function ye(){return D&6?b():Ti!==-1?Ti:Ti=b()}function Ft(e){return e.mode&1?D&2&&de!==0?de&-de:rm.transition!==null?(Ri===0&&(Ri=Jc()),Ri):(e=U,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function Xe(e,t,n,r){if(50<Cr)throw Cr=0,pa=null,Error(S(185));Qr(e,n,r),(!(D&2)||e!==ae)&&(e===ae&&(!(D&2)&&(Po|=n),re===4&&Nt(e,de)),_e(e,r),n===1&&D===0&&!(t.mode&1)&&(Hn=b()+500,ko&&Kt()))}function _e(e,t){var n=e.callbackNode;rh(e,t);var r=Vi(e,e===ae?de:0);if(r===0)n!==null&&Us(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Us(n),t===1)e.tag===0?nm(Tu.bind(null,e)):Cd(Tu.bind(null,e)),qh(function(){!(D&6)&&Kt()}),n=null;else{switch(qc(r)){case 1:n=Da;break;case 4:n=Xc;break;case 16:n=Hi;break;case 536870912:n=Zc;break;default:n=Hi}n=Cf(n,gf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gf(e,t){if(Ti=-1,Ri=0,D&6)throw Error(S(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Vi(e,e===ae?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=so(e,r);else{t=r;var i=D;D|=2;var o=yf();(ae!==e||de!==t)&&(at=null,Hn=b()+500,on(e,t));do try{Cm();break}catch(a){vf(e,a)}while(1);Za(),oo.current=o,D=i,te!==null?t=0:(ae=null,de=0,t=re)}if(t!==0){if(t===2&&(i=Ul(e),i!==0&&(r=i,t=ha(e,i))),t===1)throw n=Br,on(e,0),Nt(e,r),_e(e,b()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!km(i)&&(t=so(e,r),t===2&&(o=Ul(e),o!==0&&(r=o,t=ha(e,o))),t===1))throw n=Br,on(e,0),Nt(e,r),_e(e,b()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:qt(e,ke,at);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=ds+500-b(),10<t)){if(Vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gl(qt.bind(null,e,ke,at),t);break}qt(e,ke,at);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ge(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xm(r/1960))-r,10<r){e.timeoutHandle=Gl(qt.bind(null,e,ke,at),r);break}qt(e,ke,at);break;case 5:qt(e,ke,at);break;default:throw Error(S(329))}}}return _e(e,b()),e.callbackNode===n?gf.bind(null,e):null}function ha(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=so(e,t),e!==2&&(t=ke,ke=n,t!==null&&ma(t)),e}function ma(e){ke===null?ke=e:ke.push.apply(ke,e)}function km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!qe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~cs,t&=~Po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function Tu(e){if(D&6)throw Error(S(327));Mn();var t=Vi(e,0);if(!(t&1))return _e(e,b()),null;var n=so(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=ha(e,r))}if(n===1)throw n=Br,on(e,0),Nt(e,t),_e(e,b()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,ke,at),_e(e,b()),null}function fs(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Hn=b()+500,ko&&Kt())}}function pn(e){Tt!==null&&Tt.tag===0&&!(D&6)&&Mn();var t=D;D|=1;var n=Ue.transition,r=U;try{if(Ue.transition=null,U=1,e)return e()}finally{U=r,Ue.transition=n,D=t,!(D&6)&&Kt()}}function ps(){ze=zn.current,Q(zn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jh(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:Bn(),Q(Pe),Q(ge),ns();break;case 5:ts(r);break;case 4:Bn();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:Ja(r.type._context);break;case 22:case 23:ps()}n=n.return}if(ae=e,te=e=Ut(e.current,null),de=ze=t,re=0,Br=null,cs=Po=fn=0,ke=Sr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}en=null}return e}function vf(e,t){do{var n=te;try{if(Za(),zi.current=io,ro){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ro=!1}if(dn=0,oe=ne=G=null,xr=!1,Ar=0,us.current=null,n===null||n.return===null){re=1,Br=t,te=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=de,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=wu(l);if(y!==null){y.flags&=-257,xu(y,l,a,o,t),y.mode&1&&yu(o,u,t),t=y,s=u;var w=t.updateQueue;if(w===null){var x=new Set;x.add(s),t.updateQueue=x}else w.add(s);break e}else{if(!(t&1)){yu(o,u,t),hs();break e}s=Error(S(426))}}else if(K&&a.mode&1){var _=wu(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),xu(_,l,a,o,t),Ga(Wn(s,a));break e}}o=s=Wn(s,a),re!==4&&(re=2),Sr===null?Sr=[o]:Sr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=bd(o,s,t);du(o,d);break e;case 1:a=s;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(At===null||!At.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=ef(o,a,t);du(o,v);break e}}o=o.return}while(o!==null)}xf(n)}catch(C){t=C,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function yf(){var e=oo.current;return oo.current=io,e===null?io:e}function hs(){(re===0||re===3||re===2)&&(re=4),ae===null||!(fn&268435455)&&!(Po&268435455)||Nt(ae,de)}function so(e,t){var n=D;D|=2;var r=yf();(ae!==e||de!==t)&&(at=null,on(e,t));do try{Sm();break}catch(i){vf(e,i)}while(1);if(Za(),D=n,oo.current=r,te!==null)throw Error(S(261));return ae=null,de=0,re}function Sm(){for(;te!==null;)wf(te)}function Cm(){for(;te!==null&&!Gp();)wf(te)}function wf(e){var t=Sf(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?xf(e):te=t,us.current=null}function xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gm(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=mm(n,t,ze),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function qt(e,t,n){var r=U,i=Ue.transition;try{Ue.transition=null,U=1,Em(e,t,n,r)}finally{Ue.transition=i,U=r}return null}function Em(e,t,n,r){do Mn();while(Tt!==null);if(D&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ih(e,o),e===ae&&(te=ae=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hi||(hi=!0,Cf(Hi,function(){return Mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var l=U;U=1;var a=D;D|=4,us.current=null,ym(e,n),hf(n,e),Vh(Kl),Qi=!!Ql,Kl=Ql=null,e.current=n,wm(n),Xp(),D=a,U=l,Ue.transition=o}else e.current=n;if(hi&&(hi=!1,Tt=e,ao=i),o=e.pendingLanes,o===0&&(At=null),qp(n.stateNode),_e(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lo)throw lo=!1,e=fa,fa=null,e;return ao&1&&e.tag!==0&&Mn(),o=e.pendingLanes,o&1?e===pa?Cr++:(Cr=0,pa=e):Cr=0,Kt(),null}function Mn(){if(Tt!==null){var e=qc(ao),t=Ue.transition,n=U;try{if(Ue.transition=null,U=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,ao=0,D&6)throw Error(S(331));var i=D;for(D|=4,j=e.current;j!==null;){var o=j,l=o.child;if(j.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(j=u;j!==null;){var m=j;switch(m.tag){case 0:case 11:case 15:kr(8,m,o)}var g=m.child;if(g!==null)g.return=m,j=g;else for(;j!==null;){m=j;var p=m.sibling,y=m.return;if(df(m),m===u){j=null;break}if(p!==null){p.return=y,j=p;break}j=y}}}var w=o.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var _=x.sibling;x.sibling=null,x=_}while(x!==null)}}j=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,j=l;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,j=d;break e}j=o.return}}var c=e.current;for(j=c;j!==null;){l=j;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,j=f;else e:for(l=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eo(9,a)}}catch(C){Z(a,a.return,C)}if(a===l){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(D=i,Kt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(go,e)}catch{}r=!0}return r}finally{U=n,Ue.transition=t}}return!1}function Ru(e,t,n){t=Wn(n,t),t=bd(e,t,1),e=Dt(e,t,1),t=ye(),e!==null&&(Qr(e,1,t),_e(e,t))}function Z(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Wn(n,e),e=ef(t,e,1),t=Dt(t,e,1),e=ye(),t!==null&&(Qr(t,1,e),_e(t,e));break}}t=t.return}}function Pm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(de&n)===n&&(re===4||re===3&&(de&130023424)===de&&500>b()-ds?on(e,0):cs|=n),_e(e,t)}function kf(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=ye();e=gt(e,t),e!==null&&(Qr(e,t,n),_e(e,n))}function jm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kf(e,n)}function _m(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),kf(e,n)}var Sf;Sf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,hm(e,t,n);Se=!!(e.flags&131072)}else Se=!1,K&&t.flags&1048576&&Ed(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var i=An(t,ge.current);In(t,n),i=is(null,t,r,e,i,n);var o=os();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(o=!0,Zi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ba(t),i.updater=So,t.stateNode=i,i._reactInternals=t,ta(t,r,e,n),t=ia(null,t,r,!0,o,n)):(t.tag=0,K&&o&&Ka(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zm(r),e=Qe(r,e),i){case 0:t=ra(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=ku(null,t,r,e,n);break e;case 14:t=Su(null,t,r,Qe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),ra(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Cu(e,t,r,i,n);case 3:e:{if(of(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$d(e,t),to(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wn(Error(S(423)),t),t=Eu(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(S(424)),t),t=Eu(e,t,r,n,i);break e}else for(Ne=Mt(t.stateNode.containerInfo.firstChild),Le=t,K=!0,Ye=null,n=Td(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===i){t=vt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Rd(t),e===null&&ql(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Yl(r,i)?l=null:o!==null&&Yl(r,o)&&(t.flags|=32),rf(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&ql(t),null;case 13:return lf(e,t,n);case 4:return es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),ku(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(bi,r._currentValue),r._currentValue=l,o!==null)if(qe(o.value,l)){if(o.children===i.children&&!Pe.current){t=vt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=ft(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),bl(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),bl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,In(t,n),i=Be(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),Su(e,t,r,i,n);case 15:return tf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Li(e,t),t.tag=1,je(r)?(e=!0,Zi(t)):e=!1,In(t,n),Nd(t,r,i),ta(t,r,i,n),ia(null,t,r,!0,e,n);case 19:return af(e,t,n);case 22:return nf(e,t,n)}throw Error(S(156,t.tag))};function Cf(e,t){return Gc(e,t)}function $m(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new $m(e,t,n,r)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zm(e){if(typeof e=="function")return ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oa)return 11;if(e===Ia)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ms(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case wn:return ln(n.children,i,o,t);case Ra:l=8,i|=8;break;case Pl:return e=Fe(12,n,t,i|2),e.elementType=Pl,e.lanes=o,e;case jl:return e=Fe(13,n,t,i),e.elementType=jl,e.lanes=o,e;case _l:return e=Fe(19,n,t,i),e.elementType=_l,e.lanes=o,e;case Lc:return jo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zc:l=10;break e;case Nc:l=9;break e;case Oa:l=11;break e;case Ia:l=14;break e;case _t:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ln(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function jo(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Lc,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gs(e,t,n,r,i,o,l,a,s){return e=new Nm(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ba(o),e}function Lm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ef(e){if(!e)return Ht;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(je(n))return Sd(e,n,t)}return t}function Pf(e,t,n,r,i,o,l,a,s){return e=gs(n,r,!0,e,i,o,l,a,s),e.context=Ef(null),n=e.current,r=ye(),i=Ft(n),o=ft(r,i),o.callback=t??null,Dt(n,o,i),e.current.lanes=i,Qr(e,i,r),_e(e,r),e}function _o(e,t,n,r){var i=t.current,o=ye(),l=Ft(i);return n=Ef(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,l),e!==null&&(Xe(e,i,l,o),$i(e,i,l)),l}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vs(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function Tm(){return null}var jf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ys(e){this._internalRoot=e}$o.prototype.render=ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));_o(e,t,null,null)};$o.prototype.unmount=ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){_o(null,e,null,null)}),t[mt]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=td();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&rd(e)}};function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Iu(){}function Rm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=uo(l);o.call(u)}}var l=Pf(t,r,e,0,null,!1,!1,"",Iu);return e._reactRootContainer=l,e[mt]=l.current,Rr(e.nodeType===8?e.parentNode:e),pn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=uo(s);a.call(u)}}var s=gs(e,0,!1,null,null,!1,!1,"",Iu);return e._reactRootContainer=s,e[mt]=s.current,Rr(e.nodeType===8?e.parentNode:e),pn(function(){_o(t,s,n,r)}),s}function No(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=uo(l);a.call(s)}}_o(t,l,e,i)}else l=Rm(n,t,e,i,r);return uo(l)}bc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Aa(t,n|1),_e(t,b()),!(D&6)&&(Hn=b()+500,Kt()))}break;case 13:pn(function(){var r=gt(e,1);if(r!==null){var i=ye();Xe(r,e,1,i)}}),vs(e,1)}};Fa=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=ye();Xe(t,e,134217728,n)}vs(e,134217728)}};ed=function(e){if(e.tag===13){var t=Ft(e),n=gt(e,t);if(n!==null){var r=ye();Xe(n,e,t,r)}vs(e,t)}};td=function(){return U};nd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Dl=function(e,t,n){switch(t){case"input":if(Nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xo(r);if(!i)throw Error(S(90));Rc(r),Nl(r,i)}}}break;case"textarea":Ic(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Wc=fs;Hc=pn;var Om={usingClientEntryPoint:!1,Events:[Yr,Cn,xo,Uc,Bc,fs]},ur={findFiberByHostInstance:bt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Im={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kc(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{go=mi.inject(Im),it=mi}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Om;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ws(t))throw Error(S(200));return Lm(e,t,null,n)};Re.createRoot=function(e,t){if(!ws(e))throw Error(S(299));var n=!1,r="",i=jf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gs(e,1,!1,null,null,n,!1,r,i),e[mt]=t.current,Rr(e.nodeType===8?e.parentNode:e),new ys(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Kc(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return pn(e)};Re.hydrate=function(e,t,n){if(!zo(t))throw Error(S(200));return No(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!ws(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=jf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Pf(t,null,e,1,n??null,i,!1,o,l),e[mt]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $o(t)};Re.render=function(e,t,n){if(!zo(t))throw Error(S(200));return No(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!zo(e))throw Error(S(40));return e._reactRootContainer?(pn(function(){No(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Re.unstable_batchedUpdates=fs;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return No(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function _f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_f)}catch(e){console.error(e)}}_f(),Ec.exports=Re;var Mm=Ec.exports,Mu=Mm;Cl.createRoot=Mu.createRoot,Cl.hydrateRoot=Mu.hydrateRoot;var $f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Du=Ee.createContext&&Ee.createContext($f),Bt=globalThis&&globalThis.__assign||function(){return Bt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Bt.apply(this,arguments)},Dm=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function zf(e){return e&&e.map(function(t,n){return Ee.createElement(t.tag,Bt({key:n},t.attr),zf(t.child))})}function Nf(e){return function(t){return Ee.createElement(Am,Bt({attr:Bt({},e.attr)},t),zf(e.child))}}function Am(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=Dm(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Ee.createElement("svg",Bt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Bt(Bt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Ee.createElement("title",null,o),e.children)};return Du!==void 0?Ee.createElement(Du.Consumer,null,function(n){return t(n)}):t($f)}function Fm(e){return Nf({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function Um(e){return Nf({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}var Ce=function(){return Ce=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ce.apply(this,arguments)};function co(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var V="-ms-",Er="-moz-",F="-webkit-",Lf="comm",Lo="rule",xs="decl",Bm="@import",Tf="@keyframes",Wm="@layer",Hm=Math.abs,ks=String.fromCharCode,ga=Object.assign;function Vm(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function Rf(e){return e.trim()}function st(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function Ii(e,t){return e.indexOf(t)}function le(e,t){return e.charCodeAt(t)|0}function Vn(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function Of(e){return e.length}function hr(e,t){return t.push(e),e}function Qm(e,t){return e.map(t).join("")}function Au(e,t){return e.filter(function(n){return!st(n,t)})}var To=1,Qn=1,If=0,He=0,ee=0,qn="";function Ro(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:To,column:Qn,length:l,return:"",siblings:a}}function jt(e,t){return ga(Ro("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function vn(e){for(;e.root;)e=jt(e.root,{children:[e]});hr(e,e.siblings)}function Km(){return ee}function Ym(){return ee=He>0?le(qn,--He):0,Qn--,ee===10&&(Qn=1,To--),ee}function Ze(){return ee=He<If?le(qn,He++):0,Qn++,ee===10&&(Qn=1,To++),ee}function an(){return le(qn,He)}function Mi(){return He}function Oo(e,t){return Vn(qn,e,t)}function va(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gm(e){return To=Qn=1,If=nt(qn=e),He=0,[]}function Xm(e){return qn="",e}function pl(e){return Rf(Oo(He-1,ya(e===91?e+2:e===40?e+1:e)))}function Zm(e){for(;(ee=an())&&ee<33;)Ze();return va(e)>2||va(ee)>3?"":" "}function Jm(e,t){for(;--t&&Ze()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Oo(e,Mi()+(t<6&&an()==32&&Ze()==32))}function ya(e){for(;Ze();)switch(ee){case e:return He;case 34:case 39:e!==34&&e!==39&&ya(ee);break;case 40:e===41&&ya(e);break;case 92:Ze();break}return He}function qm(e,t){for(;Ze()&&e+ee!==47+10;)if(e+ee===42+42&&an()===47)break;return"/*"+Oo(t,He-1)+"*"+ks(e===47?e:Ze())}function bm(e){for(;!va(an());)Ze();return Oo(e,He)}function e0(e){return Xm(Di("",null,null,null,[""],e=Gm(e),0,[0],e))}function Di(e,t,n,r,i,o,l,a,s){for(var u=0,m=0,g=l,p=0,y=0,w=0,x=1,_=1,d=1,c=0,f="",v=i,C=o,E=r,k=f;_;)switch(w=c,c=Ze()){case 40:if(w!=108&&le(k,g-1)==58){Ii(k+=O(pl(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=pl(c);break;case 9:case 10:case 13:case 32:k+=Zm(w);break;case 92:k+=Jm(Mi()-1,7);continue;case 47:switch(an()){case 42:case 47:hr(t0(qm(Ze(),Mi()),t,n,s),s);break;default:k+="/"}break;case 123*x:a[u++]=nt(k)*d;case 125*x:case 59:case 0:switch(c){case 0:case 125:_=0;case 59+m:d==-1&&(k=O(k,/\f/g,"")),y>0&&nt(k)-g&&hr(y>32?Uu(k+";",r,n,g-1,s):Uu(O(k," ","")+";",r,n,g-2,s),s);break;case 59:k+=";";default:if(hr(E=Fu(k,t,n,u,m,i,a,f,v=[],C=[],g,o),o),c===123)if(m===0)Di(k,t,E,E,v,o,g,a,C);else switch(p===99&&le(k,3)===110?100:p){case 100:case 108:case 109:case 115:Di(e,E,E,r&&hr(Fu(e,E,E,0,0,i,a,f,i,v=[],g,C),C),i,C,g,a,r?v:C);break;default:Di(k,E,E,E,[""],C,0,a,C)}}u=m=y=0,x=d=1,f=k="",g=l;break;case 58:g=1+nt(k),y=w;default:if(x<1){if(c==123)--x;else if(c==125&&x++==0&&Ym()==125)continue}switch(k+=ks(c),c*x){case 38:d=m>0?1:(k+="\f",-1);break;case 44:a[u++]=(nt(k)-1)*d,d=1;break;case 64:an()===45&&(k+=pl(Ze())),p=an(),m=g=nt(f=k+=bm(Mi())),c++;break;case 45:w===45&&nt(k)==2&&(x=0)}}return o}function Fu(e,t,n,r,i,o,l,a,s,u,m,g){for(var p=i-1,y=i===0?o:[""],w=Of(y),x=0,_=0,d=0;x<r;++x)for(var c=0,f=Vn(e,p+1,p=Hm(_=l[x])),v=e;c<w;++c)(v=Rf(_>0?y[c]+" "+f:O(f,/&\f/g,y[c])))&&(s[d++]=v);return Ro(e,t,n,i===0?Lo:a,s,u,m,g)}function t0(e,t,n,r){return Ro(e,t,n,Lf,ks(Km()),Vn(e,2,-2),0,r)}function Uu(e,t,n,r,i){return Ro(e,t,n,xs,Vn(e,0,r),Vn(e,r+1,-1),r,i)}function Mf(e,t,n){switch(Vm(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Er+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Er+e+V+e+e;case 5936:switch(le(e,t+11)){case 114:return F+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+V+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+V+e+e;case 6165:return F+e+V+"flex-"+e+e;case 5187:return F+e+O(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return F+e+V+"flex-item-"+O(e,/flex-|-self/g,"")+(st(e,/flex-|baseline/)?"":V+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return F+e+V+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+V+O(e,"shrink","negative")+e;case 5292:return F+e+V+O(e,"basis","preferred-size")+e;case 6060:return F+"box-"+O(e,"-grow","")+F+e+V+O(e,"grow","positive")+e;case 4554:return F+O(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!st(e,/flex-|baseline/))return V+"grid-column-align"+Vn(e,t)+e;break;case 2592:case 3360:return V+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,st(r.props,/grid-\w+-end/)})?~Ii(e+(n=n[t].value),"span")?e:V+O(e,"-start","")+e+V+"grid-row-span:"+(~Ii(n,"span")?st(n,/\d+/):+st(n,/\d+/)-+st(e,/\d+/))+";":V+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return st(r.props,/grid-\w+-start/)})?e:V+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Er+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ii(e,"stretch")?Mf(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return V+i+":"+o+u+(l?V+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(le(e,t+6)===121)return O(e,":",":"+F)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(le(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+V+"$2box$3")+e;case 100:return O(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function fo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function n0(e,t,n,r){switch(e.type){case Wm:if(e.children.length)break;case Bm:case xs:return e.return=e.return||e.value;case Lf:return"";case Tf:return e.return=e.value+"{"+fo(e.children,r)+"}";case Lo:if(!nt(e.value=e.props.join(",")))return""}return nt(n=fo(e.children,r))?e.return=e.value+"{"+n+"}":""}function r0(e){var t=Of(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function i0(e){return function(t){t.root||(t=t.return)&&e(t)}}function o0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case xs:e.return=Mf(e.value,e.length,n);return;case Tf:return fo([jt(e,{value:O(e.value,"@","@"+F)})],r);case Lo:if(e.length)return Qm(n=e.props,function(i){switch(st(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vn(jt(e,{props:[O(i,/:(read-\w+)/,":"+Er+"$1")]})),vn(jt(e,{props:[i]})),ga(e,{props:Au(n,r)});break;case"::placeholder":vn(jt(e,{props:[O(i,/:(plac\w+)/,":"+F+"input-$1")]})),vn(jt(e,{props:[O(i,/:(plac\w+)/,":"+Er+"$1")]})),vn(jt(e,{props:[O(i,/:(plac\w+)/,V+"input-$1")]})),vn(jt(e,{props:[i]})),ga(e,{props:Au(n,r)});break}return""})}}var l0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ss=typeof window<"u"&&"HTMLElement"in window,a0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Io=Object.freeze([]),Yn=Object.freeze({});function s0(e,t,n){return n===void 0&&(n=Yn),e.theme!==n.theme&&e.theme||t||n.theme}var Df=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),u0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,c0=/(^-|-$)/g;function Bu(e){return e.replace(u0,"-").replace(c0,"")}var d0=/(a)(d)/gi,Wu=function(e){return String.fromCharCode(e+(e>25?39:97))};function wa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wu(t%52)+n;return(Wu(t%52)+n).replace(d0,"$1-$2")}var hl,Nn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Af=function(e){return Nn(5381,e)};function f0(e){return wa(Af(e)>>>0)}function p0(e){return e.displayName||e.name||"Component"}function ml(e){return typeof e=="string"&&!0}var Ff=typeof Symbol=="function"&&Symbol.for,Uf=Ff?Symbol.for("react.memo"):60115,h0=Ff?Symbol.for("react.forward_ref"):60112,m0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},g0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v0=((hl={})[h0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hl[Uf]=Bf,hl);function Hu(e){return("type"in(t=e)&&t.type.$$typeof)===Uf?Bf:"$$typeof"in e?v0[e.$$typeof]:m0;var t}var y0=Object.defineProperty,w0=Object.getOwnPropertyNames,Vu=Object.getOwnPropertySymbols,x0=Object.getOwnPropertyDescriptor,k0=Object.getPrototypeOf,Qu=Object.prototype;function Wf(e,t,n){if(typeof t!="string"){if(Qu){var r=k0(t);r&&r!==Qu&&Wf(e,r,n)}var i=w0(t);Vu&&(i=i.concat(Vu(t)));for(var o=Hu(e),l=Hu(t),a=0;a<i.length;++a){var s=i[a];if(!(s in g0||n&&n[s]||l&&s in l||o&&s in o)){var u=x0(t,s);try{y0(e,s,u)}catch{}}}}return e}function Gn(e){return typeof e=="function"}function Cs(e){return typeof e=="object"&&"styledComponentId"in e}function nn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ku(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Wr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xa(e,t,n){if(n===void 0&&(n=!1),!n&&!Wr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=xa(e[r],t[r]);else if(Wr(t))for(var r in t)e[r]=xa(e[r],t[r]);return e}function Es(e,t){Object.defineProperty(e,"toString",{value:t})}function Xr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var S0=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Xr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Ai=new Map,po=new Map,Fi=1,gi=function(e){if(Ai.has(e))return Ai.get(e);for(;po.has(Fi);)Fi++;var t=Fi++;return Ai.set(e,t),po.set(t,e),t},C0=function(e,t){Fi=t+1,Ai.set(e,t),po.set(t,e)},E0="style[".concat(Kn,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),P0=new RegExp("^".concat(Kn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),j0=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},_0=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(P0);if(s){var u=0|parseInt(s[1],10),m=s[2];u!==0&&(C0(m,u),j0(e,m,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function $0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Kn,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Kn,"active"),r.setAttribute("data-styled-version","6.1.1");var l=$0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},z0=function(){function e(t){this.element=Hf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Xr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),N0=function(){function e(t){this.element=Hf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),L0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Yu=Ss,T0={isServer:!Ss,useCSSOMInjection:!a0},Vf=function(){function e(t,n,r){t===void 0&&(t=Yn),n===void 0&&(n={});var i=this;this.options=Ce(Ce({},T0),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ss&&Yu&&(Yu=!1,function(o){for(var l=document.querySelectorAll(E0),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Kn)!=="active"&&(_0(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Es(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(g){var p=function(d){return po.get(d)}(g);if(p===void 0)return"continue";var y=o.names.get(p),w=l.getGroup(g);if(y===void 0||w.length===0)return"continue";var x="".concat(Kn,".g").concat(g,'[id="').concat(p,'"]'),_="";y!==void 0&&y.forEach(function(d){d.length>0&&(_+="".concat(d,","))}),s+="".concat(w).concat(x,'{content:"').concat(_,'"}').concat(`/*!sc*/
`)},m=0;m<a;m++)u(m);return s}(i)})}return e.registerId=function(t){return gi(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ce(Ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new L0(i):r?new z0(i):new N0(i)}(this.options),new S0(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(gi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(gi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(gi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),R0=/&/g,O0=/^\s*\/\/.*$/gm;function Qf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Qf(n.children,t)),n})}function I0(e){var t,n,r,i=e===void 0?Yn:e,o=i.options,l=o===void 0?Yn:o,a=i.plugins,s=a===void 0?Io:a,u=function(p,y,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):p},m=s.slice();m.push(function(p){p.type===Lo&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(R0,n).replace(r,u))}),l.prefix&&m.push(o0),m.push(n0);var g=function(p,y,w,x){y===void 0&&(y=""),w===void 0&&(w=""),x===void 0&&(x="&"),t=x,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var _=p.replace(O0,""),d=e0(w||y?"".concat(w," ").concat(y," { ").concat(_," }"):_);l.namespace&&(d=Qf(d,l.namespace));var c=[];return fo(d,r0(m.concat(i0(function(f){return c.push(f)})))),c};return g.hash=s.length?s.reduce(function(p,y){return y.name||Xr(15),Nn(p,y.name)},5381).toString():"",g}var M0=new Vf,ka=I0(),Kf=Ee.createContext({shouldForwardProp:void 0,styleSheet:M0,stylis:ka});Kf.Consumer;Ee.createContext(void 0);function Gu(){return N.useContext(Kf)}var D0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ka);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Es(this,function(){throw Xr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ka),this.name+t.hash},e}(),A0=function(e){return e>="A"&&e<="Z"};function Xu(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;A0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Yf=function(e){return e==null||e===!1||e===""},Gf=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Yf(o)&&(Array.isArray(o)&&o.isCss||Gn(o)?r.push("".concat(Xu(i),":"),o,";"):Wr(o)?r.push.apply(r,co(co(["".concat(i," {")],Gf(o),!1),["}"],!1)):r.push("".concat(Xu(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in l0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function sn(e,t,n,r){if(Yf(e))return[];if(Cs(e))return[".".concat(e.styledComponentId)];if(Gn(e)){if(!Gn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return sn(i,t,n,r)}var o;return e instanceof D0?n?(e.inject(n,r),[e.getName(r)]):[e]:Wr(e)?Gf(e):Array.isArray(e)?Array.prototype.concat.apply(Io,e.map(function(l){return sn(l,t,n,r)})):[e.toString()]}function F0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gn(n)&&!Cs(n))return!1}return!0}var U0=Af("6.1.1"),B0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&F0(t),this.componentId=n,this.baseHash=Nn(U0,n),this.baseStyle=r,Vf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=nn(i,this.staticRulesId);else{var o=Ku(sn(this.rules,t,n,r)),l=wa(Nn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=nn(i,l),this.staticRulesId=l}else{for(var s=Nn(this.baseHash,r.hash),u="",m=0;m<this.rules.length;m++){var g=this.rules[m];if(typeof g=="string")u+=g;else if(g){var p=Ku(sn(g,t,n,r));s=Nn(s,p+m),u+=p}}if(u){var y=wa(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=nn(i,y)}}return i},e}(),Xf=Ee.createContext(void 0);Xf.Consumer;var gl={};function W0(e,t,n){var r=Cs(e),i=e,o=!ml(e),l=t.attrs,a=l===void 0?Io:l,s=t.componentId,u=s===void 0?function(v,C){var E=typeof v!="string"?"sc":Bu(v);gl[E]=(gl[E]||0)+1;var k="".concat(E,"-").concat(f0("6.1.1"+E+gl[E]));return C?"".concat(C,"-").concat(k):k}(t.displayName,t.parentComponentId):s,m=t.displayName,g=m===void 0?function(v){return ml(v)?"styled.".concat(v):"Styled(".concat(p0(v),")")}(e):m,p=t.displayName&&t.componentId?"".concat(Bu(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;w=function(v,C){return x(v,C)&&_(v,C)}}else w=x}var d=new B0(n,p,r?i.componentStyle:void 0);function c(v,C){return function(E,k,z){var B=E.attrs,I=E.componentStyle,$e=E.defaultProps,Yt=E.foldedComponentIds,Gt=E.styledComponentId,Jr=E.target,Fo=Ee.useContext(Xf),tr=Gu(),Xt=E.shouldForwardProp||tr.shouldForwardProp,P=function(Ie,lt,Me){for(var be,Zt=Ce(Ce({},lt),{className:void 0,theme:Me}),Uo=0;Uo<Ie.length;Uo+=1){var qr=Gn(be=Ie[Uo])?be(Zt):be;for(var xt in qr)Zt[xt]=xt==="className"?nn(Zt[xt],qr[xt]):xt==="style"?Ce(Ce({},Zt[xt]),qr[xt]):qr[xt]}return lt.className&&(Zt.className=nn(Zt.className,lt.className)),Zt}(B,k,s0(k,Fo,$e)||Yn),T=P.as||Jr,R={};for(var A in P)P[A]===void 0||A[0]==="$"||A==="as"||A==="theme"||(A==="forwardedAs"?R.as=P.forwardedAs:Xt&&!Xt(A,T)||(R[A]=P[A]));var q=function(Ie,lt){var Me=Gu(),be=Ie.generateAndInjectStyles(lt,Me.styleSheet,Me.stylis);return be}(I,P),wt=nn(Yt,Gt);return q&&(wt+=" "+q),P.className&&(wt+=" "+P.className),R[ml(T)&&!Df.has(T)?"class":"className"]=wt,R.ref=z,N.createElement(T,R)}(f,v,C)}c.displayName=g;var f=Ee.forwardRef(c);return f.attrs=y,f.componentStyle=d,f.displayName=g,f.shouldForwardProp=w,f.foldedComponentIds=r?nn(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=p,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(C){for(var E=[],k=1;k<arguments.length;k++)E[k-1]=arguments[k];for(var z=0,B=E;z<B.length;z++)xa(C,B[z],!0);return C}({},i.defaultProps,v):v}}),Es(f,function(){return".".concat(f.styledComponentId)}),o&&Wf(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Zu(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ju=function(e){return Object.assign(e,{isCss:!0})};function H0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Gn(e)||Wr(e)){var r=e;return Ju(sn(Zu(Io,co([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?sn(i):Ju(sn(Zu(i,t)))}function Sa(e,t,n){if(n===void 0&&(n=Yn),!t)throw Xr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,H0.apply(void 0,co([i],o,!1)))};return r.attrs=function(i){return Sa(e,t,Ce(Ce({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Sa(e,t,Ce(Ce({},n),i))},r}var Zf=function(e){return Sa(W0,e)},$=Zf;Df.forEach(function(e){$[e]=Zf(e)});/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const qu="popstate";function V0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Ca("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ho(i)}return K0(t,n,null,e)}function Je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Q0(){return Math.random().toString(36).substr(2,8)}function bu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ca(e,t,n,r){return n===void 0&&(n=null),Hr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mo(t):t,{state:n,key:t&&t.key||r||Q0()})}function ho(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function K0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=rn.Pop,s=null,u=m();u==null&&(u=0,l.replaceState(Hr({},l.state,{idx:u}),""));function m(){return(l.state||{idx:null}).idx}function g(){a=rn.Pop;let _=m(),d=_==null?null:_-u;u=_,s&&s({action:a,location:x.location,delta:d})}function p(_,d){a=rn.Push;let c=Ca(x.location,_,d);n&&n(c,_),u=m()+1;let f=bu(c,u),v=x.createHref(c);try{l.pushState(f,"",v)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(v)}o&&s&&s({action:a,location:x.location,delta:1})}function y(_,d){a=rn.Replace;let c=Ca(x.location,_,d);n&&n(c,_),u=m();let f=bu(c,u),v=x.createHref(c);l.replaceState(f,"",v),o&&s&&s({action:a,location:x.location,delta:0})}function w(_){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof _=="string"?_:ho(_);return Je(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let x={get action(){return a},get location(){return e(i,l)},listen(_){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(qu,g),s=_,()=>{i.removeEventListener(qu,g),s=null}},createHref(_){return t(i,_)},createURL:w,encodeLocation(_){let d=w(_);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:p,replace:y,go(_){return l.go(_)}};return x}var ec;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ec||(ec={}));function Jf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Y0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Mo(e):e;return{pathname:n?n.startsWith("/")?n:G0(n,t):t,search:Z0(r),hash:J0(i)}}function G0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function X0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qf(e){return X0(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function bf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Mo(e):(i=Hr({},e),Je(!i.pathname||!i.pathname.includes("?"),vl("?","pathname","search",i)),Je(!i.pathname||!i.pathname.includes("#"),vl("#","pathname","hash",i)),Je(!i.search||!i.search.includes("#"),vl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else if(r){let g=t[t.length-1].replace(/^\//,"").split("/");if(l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),g.pop();i.pathname=p.join("/")}a="/"+g.join("/")}else{let g=t.length-1;if(l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),g-=1;i.pathname=p.join("/")}a=g>=0?t[g]:"/"}let s=Y0(i,a),u=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const ep=e=>e.join("/").replace(/\/\/+/g,"/"),Z0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,J0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,tp=["post","put","patch","delete"];new Set(tp);const q0=["get",...tp];new Set(q0);/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ea(){return Ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ea.apply(this,arguments)}const np=N.createContext(null),Zr=N.createContext(null),Ps=N.createContext(null),Do=N.createContext({outlet:null,matches:[],isDataRoute:!1});function b0(e,t){let{relative:n}=t===void 0?{}:t;Ao()||Je(!1);let{basename:r,navigator:i}=N.useContext(Zr),{hash:o,pathname:l,search:a}=ip(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:ep([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Ao(){return N.useContext(Ps)!=null}function js(){return Ao()||Je(!1),N.useContext(Ps).location}function rp(e){N.useContext(Zr).static||N.useLayoutEffect(e)}function eg(){let{isDataRoute:e}=N.useContext(Do);return e?og():tg()}function tg(){Ao()||Je(!1);let e=N.useContext(np),{basename:t,navigator:n}=N.useContext(Zr),{matches:r}=N.useContext(Do),{pathname:i}=js(),o=JSON.stringify(qf(r)),l=N.useRef(!1);return rp(()=>{l.current=!0}),N.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let m=bf(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ep([t,m.pathname])),(u.replace?n.replace:n.push)(m,u.state,u)},[t,n,o,i,e])}function ip(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=N.useContext(Do),{pathname:i}=js(),o=JSON.stringify(qf(r));return N.useMemo(()=>bf(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}var op=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(op||{}),lp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(lp||{});function ng(e){let t=N.useContext(np);return t||Je(!1),t}function rg(e){let t=N.useContext(Do);return t||Je(!1),t}function ig(e){let t=rg(),n=t.matches[t.matches.length-1];return n.route.id||Je(!1),n.route.id}function og(){let{router:e}=ng(op.UseNavigateStable),t=ig(lp.UseNavigateStable),n=N.useRef(!1);return rp(()=>{n.current=!0}),N.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ea({fromRouteId:t},o)))},[e,t])}function lg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rn.Pop,navigator:o,static:l=!1}=e;Ao()&&Je(!1);let a=t.replace(/^\/*/,"/"),s=N.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Mo(r));let{pathname:u="/",search:m="",hash:g="",state:p=null,key:y="default"}=r,w=N.useMemo(()=>{let x=Jf(u,a);return x==null?null:{location:{pathname:x,search:m,hash:g,state:p,key:y},navigationType:i}},[a,u,m,g,p,y,i]);return w==null?null:N.createElement(Zr.Provider,{value:s},N.createElement(Ps.Provider,{children:n,value:w}))}new Promise(()=>{});/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}function ag(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ug(e,t){return e.button===0&&(!t||t==="_self")&&!sg(e)}const cg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],dg="startTransition",tc=jp[dg];function fg(e){let{basename:t,children:n,future:r,window:i}=e,o=N.useRef();o.current==null&&(o.current=V0({window:i,v5Compat:!0}));let l=o.current,[a,s]=N.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},m=N.useCallback(g=>{u&&tc?tc(()=>s(g)):s(g)},[s,u]);return N.useLayoutEffect(()=>l.listen(m),[l,m]),N.createElement(lg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const pg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_s=N.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:m,unstable_viewTransition:g}=t,p=ag(t,cg),{basename:y}=N.useContext(Zr),w,x=!1;if(typeof u=="string"&&hg.test(u)&&(w=u,pg))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),C=Jf(v.pathname,y);v.origin===f.origin&&C!=null?u=C+v.search+v.hash:x=!0}catch{}let _=b0(u,{relative:i}),d=mg(u,{replace:l,state:a,target:s,preventScrollReset:m,relative:i,unstable_viewTransition:g});function c(f){r&&r(f),f.defaultPrevented||d(f)}return N.createElement("a",Pa({},p,{href:w||_,onClick:x||o?r:c,ref:n,target:s}))});var nc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(nc||(nc={}));var rc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rc||(rc={}));function mg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=eg(),u=js(),m=ip(e,{relative:l});return N.useCallback(g=>{if(ug(g,n)){g.preventDefault();let p=r!==void 0?r:ho(u)===ho(m);s(e,{replace:p,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[u,s,m,r,i,n,e,o,l,a])}const pt={mobile:"430px",tablet:"768px",desktop:"1024px"},gg=$.nav`
  background: #0d1321;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  @media screen and (min-width: ${pt.tablet}) {
    transition: 0.8s all ease;
  }
`,vg=$.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1800px;
`,yg=$(_s)`
  color: #dee2e6;
  cursor: pointer;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  text-decoration: none;
  transition: 0.5s ease;

  &:hover {
    color: #f7b32b;
  }

  &:hover #hide {
    max-width: 100%;
  }

  @media screen and (min-width: ${pt.mobile}) and (max-width: ${pt.desktop}) {
    font-size: 1rem;
  }
`,ic=$.div`
  display: inline-block;
  max-width: 0%;
  vertical-align: bottom;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.5s ease-in-out;
`,wg=$.div`
  display: none;

  @media screen and (max-width: ${pt.mobile}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }

  &: hover {
    color: #ffc300;
    transition: 0.2s ease-in-out;
  }
`,xg=$.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  width: 500px;

  @media screen and (max-width: ${pt.mobile}) {
    display: none;
  }

  @media screen and (min-width: ${pt.tablet}) and (max-width: ${pt.desktop}) {
    width: 400px;}
`,yl=$.li`
  height: 80px;
`,wl=$(_s)`
  color: ${e=>e.active?"#f7b32b":"#dee2e6"};
  display: flex;
  align-items: center;
  text-align: none;
  height: 100%;
  cursor: pointer;
  font-size: 1.15rem;
  margin-right: 50px;
  text-decoration: none;
  transition: 0.5s ease;

  &:hover {
    color: #f7b32b;
  }

  border-bottom: ${e=>e.active?"1px solid #f7b32b":"none"};

  @media screen and (min-width: ${pt.tablet}) and (max-width: ${pt.desktop}) {
    font-size: 1rem;
  }
`,bn=N.createContext(),kg=({children:e})=>{const[t,n]=N.useState("default"),[r,i]=N.useState(!1),o=()=>{i(!r)},[l,a]=N.useState(""),[s,u]=N.useState(""),m={pageState:t,setPageState:n,isOpen:r,toggle:o,contentState:l,setContentState:a,activeDrawer:s,setActiveDrawer:u};return h.jsx(bn.Provider,{value:m,children:e})},Sg=()=>{const{pageState:e,setPageState:t,toggle:n}=N.useContext(bn);return h.jsx(h.Fragment,{children:h.jsx(gg,{children:h.jsxs(vg,{children:[h.jsxs(yg,{onClick:()=>t("default"),children:["N",h.jsx(ic,{id:"hide",children:"athan"}),".G",h.jsx(ic,{id:"hide",children:"oh"})]}),h.jsx(wg,{onClick:()=>n(),children:h.jsx(Fm,{})}),h.jsxs(xg,{children:[h.jsx(yl,{children:h.jsx(wl,{onClick:()=>t("about-me"),active:e==="about-me",children:"About Me"})}),h.jsx(yl,{children:h.jsx(wl,{onClick:()=>t("experience"),active:e==="experience",children:"Experience"})}),h.jsx(yl,{children:h.jsx(wl,{onClick:()=>t("contact"),active:e==="contact",children:"Contact"})})]})]})})})},Cg={mobile:"430px",tablet:"768px",desktop:"1024px"},Eg=$.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d1321;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen:e})=>e?"100%":"0"};
  top: ${({isOpen:e})=>e?"0":"-100%"};
`,Pg=$(Um)`
  color: #fff;

  &: hover {
    color: #ffc300;
    transition: 0.2s ease-in-out;
  }
`,jg=$.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`,_g=$.div`
  color: #fff;
`,$g=$.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: ${Cg.mobile}) {
    grid-template-rows: repeat(6, 60px);
  }
`,xl=$(_s)`
  dispay: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #dee2e6;
  cursor: pointer;

  &: hover {
    color: #ffc300;
    transition: 0.2s ease-in-out;
  }
`,zg=()=>{const{isOpen:e,toggle:t,setPageState:n}=N.useContext(bn);return h.jsxs(Eg,{isOpen:e,onClick:t,children:[h.jsx(jg,{onClick:()=>t(),children:h.jsx(Pg,{})}),h.jsx(_g,{children:h.jsxs($g,{children:[h.jsx(xl,{onClick:()=>n("about-me"),children:"About Me"}),h.jsx(xl,{onClick:()=>n("experience"),children:"Experience"}),h.jsx(xl,{onClick:()=>n("contact"),children:"Contact"})]})})]})},oc="80px",ce={mobile:"430px",tablet:"768px",desktop:"1024px"},Ng=$.div`
  background: #0d1321;
  height: calc(100vh - ${oc});
  margin-top: ${oc};
  padding: 20px;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: ${ce.desktop}) {
    padding: 40px;
  }
`,Lg=$.div`
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${ce.mobile}) {
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: ${ce.tablet}) and (max-width: ${ce.desktop}) {
    flex-direction: column;
    padding: 20px;
  }

  @media screen and (min-width: ${ce.desktop}) {
    flex-direction: column;
    padding: 40px;
  }
`,Tg=$.div`
  width: 100%;
  font-size: 6rem;
  font-weight: 700;
  color: #f7b32b;
  margin: 30px 0;
  animation: fade-in 2s;
  text-transform: uppercase;
  letter-spacing: 5px;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${ce.mobile}) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: ${ce.tablet}) and (max-width: ${ce.desktop}) {
    font-size: 4.5rem;
  }
`,lc=$.div`
  font-size: 2rem;
  font-weight: 700;
  color: #dee2e6;

  @media screen and (max-width: ${ce.mobile}) {
    font-size: 1rem;
  }

  @media screen and (min-width: ${ce.tablet}) and (max-width: ${ce.desktop}) {
    font-size: 1.5rem;
  }
`,Rg=$.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 50px;
  gap: 50px;

  @media screen and (max-width: ${ce.mobile}) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (min-width: ${ce.tablet}) and (max-width: ${ce.desktop}) {
    gap: 40px;
  }
`,ac=$.div`
  cursor: pointer;
  width: 200px;
  height: 30px;
  display: flex;
  padding: 25px;
  align-items: center;
  justify-content: center;
  background-color: #dee2e6;
  transition: all 0.5s ease;
  font-size: 1rem;
  border-radius: 8px;

  &:hover {
    letter-spacing: 3px;
    background-color: #f7b32b;
    color: #0d1321;
    box-shadow: #f7b32b 0px 7px 29px 0px;
    font-weight: bold;
  }

  &:active {
    transform: translateY(10px);
    transition: 100ms;
  }

  @media screen and (max-width: ${ce.mobile}) {
    font-size: 0.8rem;
    padding: 20px;
  }

  @media screen and (min-width: ${ce.tablet}) and (max-width: ${ce.desktop}) {
    width: 180px;
    font-size: 0.8rem;
  }
`,Og=()=>{const{setPageState:e}=N.useContext(bn);return h.jsx(Ng,{children:h.jsxs(Lg,{children:[h.jsx(lc,{children:"Hello, my name is"}),h.jsx(Tg,{children:"Nathan Goh"}),h.jsx(lc,{children:"Frontend Web Developer"}),h.jsxs(Rg,{children:[h.jsx(ac,{onClick:()=>e("about-me"),children:"About Me"}),h.jsx(ac,{onClick:()=>e("contact"),children:"Contact Me"})]})]})})},sc="80px",ie={mobile:"430px",tablet:"768px",desktop:"1024px"},Ig=$.div`
  height: calc(100vh - ${sc});
  margin-top: ${sc};
`,Mg=$.div`
  background-color: #000814;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: ${ie.mobile}) {
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: ${ie.tablet}) and (max-width: ${ie.desktop}) {
    flex-direction: row;
    width: 100%;
  }
`,Dg=$.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade-in-left 2s;

  @keyframes fade-in-left {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${ie.mobile}) {
    height: 50%;
    width: 100%;
  }
`,Ag=$.img`
  width: 50%;

  @media screen and (max-width: ${ie.mobile}) {
    width: 50%;
  }

  @media screen and (min-width: ${ie.tablet}) and (max-width: ${ie.desktop}) {
    width: 70%;
  }
`,Fg=$.div`
  padding: 50px 100px 50px 50px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fade-in-right 2s forwards;
  animation-delay: 0.5s;
  opacity: 0;

  @keyframes fade-in-right {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${ie.mobile}) {
    width: 100%;
    padding: 0 20px;
    justify-content: start;
  }

  @media screen and (min-width: ${ie.tablet}) and (max-width: ${ie.desktop}) {
    width: 50%;
    padding: 0 20px;
  }
`,Ug=$.div`
  color: #eec584;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;

  @media screen and (max-width: ${ie.mobile}) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${ie.tablet}) and (max-width: ${ie.desktop}) {
    font-size: 2rem;
  }
`,Bg=$.div`
  color: #dee2e6;
  font-size: 1rem;
  margin: 30px 20px;
  line-height: 2rem;
  text-align: justify;
  
  @media screen and (max-width: ${ie.mobile}) {
    width: 100%;
    font-size: 0.8rem;
    line-height: 1.2rem;
    margin: 20px 0;
  }

  @media screen and (min-width: ${ie.tablet}) and (max-width: ${ie.desktop}) {
    width: 100%;
    font-size: 0.8rem;
    line-height: 1.5rem;
    margin: 20px 0;
  }
`,Wg=$.div`
  width: 250px;
  height: 30px;
  cursor: pointer;
  padding: 25px;
  border-radius: 8px;
  background-color: #dee2e6;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  font-size: 1rem;
  display: flex;
  text-align: center;
  line-height: 50px;
  white-space: nowrap;
  transition: all 0.5s ease;
  align-items: center;
  justify-content: center;

  &:hover {
    letter-spacing: 3px;
    background-color: #f7b32b;
    color: #000814;
    box-shadow: #f7b32b 0px 7px 29px 0px;
    font-weight: bold;
  }

  &:active {
    transform: translateY(10px);
    transition: 100ms;
  }

  @media screen and (max-width: ${ie.mobile}) {
    width: auto;
    padding: 10px 20px;
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${ie.tablet}) and (max-width: ${ie.desktop}) {
    width: auto;
    padding: 20px;
    font-size: 0.8rem;
  }
`,uc="/nategprofile/assets/Resume_Nathan_Goh-9334d0dd.pdf",Hg=()=>h.jsx(Ig,{children:h.jsxs(Mg,{children:[h.jsx(Dg,{children:h.jsx(Ag,{src:"aboutme.png",alt:"aboutme-img"})}),h.jsxs(Fg,{children:[h.jsx(Ug,{children:"About Me"}),h.jsx(Bg,{children:"I’ve recently transitioned into the tech industry, focusing on frontend development through self-teaching and continuous learning. After completing an internship, I continued working with the same team, gaining additional valuable hands-on experience. This has deepened my passion for creating seamless, user-friendly digital solutions, and I’m committed to further improving my skills. I’m eager to contribute to impactful projects, collaborate with talented professionals, and continue growing in a dynamic and innovative environment."}),h.jsx(Wg,{href:uc,onClick:e=>{e.preventDefault(),window.open(uc,"_blank","noopener, noreferrer")},children:"Download Resume"})]})]})}),cc="80px",L={mobile:"430px",tablet:"768px",desktop:"1024px"},Vg=$.div`
  height: calc(100vh - ${cc});
  overflow: hidden;
  margin-top: ${cc};
  overflow: hidden;
  position: relative;
`,Qg=$.div`
  background-color: #000814;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;

  @media screen and (max-width: ${L.mobile}) {
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    flex-direction: row;
    width: 100%;
  }
`,Kg=$.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade-in-left 2s;

  @keyframes fade-in-left {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${L.mobile}) {
    width: 100%;
    height: 10%;
  }
`,Yg=$.div`
  color: #eec584;
  font-size: 1.25rem;
  position: relative;
  transform: skewY(-15deg);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${L.mobile}) {
    transform: skewY(0);
    font-size: 0.8rem;
    flex-direction: row;
    gap: 15px;

    svg {
      display: none;
    }
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    font-size: 1rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,kl=$.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 350px;
  padding: 30px;
  background: #495057;
  margin-top: 40px;
  transition: 0.5s;
  cursor: pointer;

  @media screen and (max-width: ${L.mobile}) {
    width: auto;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    width: 250px;
    padding: 20px;
  }

  &:hover,
  &.active {
    transform: translateX(-50px);
    background-color: #f7b32b;
    color: #000814;

    @media screen and (max-width: ${L.mobile}) {
      transform: translateX(0);
    }
  }

  &::before,
  &.active::before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    content: '';
    position: absolute;
    background: #212529;
    top: 0;
    left: -30px;
    width: 30px;
    height: 100%;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;

    @media screen and (max-width: ${L.mobile}) {
      display: none;
    }
  }

  &:hover::before,
  &.active::before {
    background-color: #ff7b00;
    color: #000814;
  }

  &::after {
    content: '';
    position: absolute;
    top: -30px;
    left: 0px;
    width: 100%;
    height: 30px;
    background: #343a40;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;

    @media screen and (max-width: ${L.mobile}) {
      display: none;
    }
  }

  &:hover::after,
  &.active::after {
    background-color: #ff9500;
    color: #ffaa00;
  }
`,Gg=$.div`
  padding: 50px 100px 50px 50px;
  width: 50%;
  height: 100%;
  display: flex;
  justify-self: center;
  align-items: center;
  overflow: auto;
  box-sizing: border-box;
  animation: fade-in-right 2s forwards;
  animation-delay: 0.5s;
  opacity: 0;
  position: relative;

  @keyframes fade-in-right {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${L.mobile}) {
    width: 100%;
    padding: 0 20px;
    justify-content: start;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    width: 50%;
    padding: 20px 50px 20px 20px;
  }
`;$.div`
  color: #dee2e6;
  font-size: 2.5rem;
  text-align: center;
  position: relative;

  @media screen and (max-width: ${L.mobile}) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    font-size: 2rem;
  }
`;const Xg=$.div`
  height: 100%;
  margin
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,vi=$.div`
  color: #eec584;
  // color: #dee2e6;
  font-size: 1.5rem;
  margin: 40px 30px 0;
  display: flex;
  justify-content: center;
  position: relative;
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: bold;
  letter-spacing: 2px;

  @media screen and (max-width: ${L.mobile}) {
    font-size: 1rem;
    margin: 20px 0 0;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    font-size: 1.2rem;
    margin: 20px 0 0;
    letter-spacing: 1px;
  }
`,yi=$.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: ${L.mobile}) {
    margin-top: 10px;
  }
`,wi=$.div`
  color: #dee2e6;
  font-size: 1.15rem;
  // text-decoration: underline;

  @media screen and (max-width: ${L.mobile}) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    font-size: 1rem;
  }
`,xi=$.div`
  color: #dee2e6;
  font-size: 1.15rem;
  text-align: right;

  @media screen and (max-width: ${L.mobile}) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    font-size: 1rem;
  }
`,se=$.div`
  color: #dee2e6;
  font-size: 1rem;
  margin: 20px 0 0 30px;
  text-align: justify;

  @media screen and (max-width: ${L.mobile}) {
    font-size: 0.8rem;
    margin: 10px 10px 0;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    font-size: 1rem;
  }
`,Zg=$.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  padding: 20px;
  position: relative;

  @media screen and (max-width: ${L.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    height: 85%;
  }
`,St=$.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`,Ct=$.img`
  width: 80px;
  height: 80px;
  display: block;
  max-width: 100%;
  max-height: 100%;
  background: transparent;
  vertical-align: middle;

  @media screen and (max-width: ${L.mobile}) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    width: 60px;
    height: 60px;
  }
`,Et=$.div`
  color: #dee2e6;
  font-size: 1rem;
  margin: 5px 0;
  text-align: center;

  @media screen and (max-width: ${L.mobile}) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    font-size: 0.8rem;
  }
`,Jg=$.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: start;

  @media screen and (max-width: ${L.mobile}) {
    width: 100%;
    height: 85%;
  }
`,qg=$.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  @media screen and (max-width: ${L.mobile}) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`,dc=$.img`
  aspect-ratio: 16/9;
  width: 350px;
  margin-bottom: 20px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;

  @media screen and (max-width: ${L.mobile}) {
    width: 250px;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    width: 300px;
  }
`,bg=$.div`
  color: #eec584;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    color: #dee2e6;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #eec584;
    }
  }

  @media screen and (max-width: ${L.mobile}) {
    font-size: 1rem;

    svg {
      width: 12px;    
      height: 12px;
    }
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    font-size: 1rem;
  }
`,e1=$.div`
  color: #dee2e6;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;

  @media screen and (max-width: ${L.mobile}) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${L.tablet}) and (max-width: ${L.desktop}) {
    font-size: 1rem;
  }
`,t1="/nategprofile/assets/react-logo-56311bed.svg",n1="/nategprofile/assets/nextjs-logo-d0aad26e.svg",r1="/nategprofile/assets/javascript-logo-348a59a3.svg",i1="/nategprofile/assets/typescript-logo-6a4ddc4d.svg",o1="/nategprofile/assets/html5-logo-d4415476.svg",l1="/nategprofile/assets/css3-logo-3950d31a.svg",a1="/nategprofile/assets/tailwind-logo-d9011701.svg",s1="/nategprofile/assets/mobx-logo-3dfcabba.svg";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ap=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=N.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:l,...a},s)=>N.createElement("svg",{ref:s,...c1,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ap("lucide",i),...a},[...l.map(([u,m])=>N.createElement(u,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=(e,t)=>{const n=N.forwardRef(({className:r,...i},o)=>N.createElement(d1,{ref:o,iconNode:t,className:ap(`lucide-${u1(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=er("CircleChevronRight",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=er("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=er("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=er("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=er("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=er("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),Pt={reactLogo:t1,nextjsLogo:n1,javascriptLogo:r1,typescriptLogo:i1,htmlLogo:o1,cssLogo:l1,tailwindLogo:a1,mobxLogo:s1},g1=()=>{const{setContentState:e,contentState:t,activeDrawer:n,setActiveDrawer:r}=N.useContext(bn),i=o=>{e(o),r(o)};return h.jsx(Vg,{children:h.jsxs(Qg,{children:[h.jsx(Kg,{children:h.jsxs(Yg,{children:[h.jsxs(kl,{onClick:()=>i("workExperience"),className:n==="workExperience"?"active":"",children:["Work Experience",h.jsx(Sl,{})]}),h.jsxs(kl,{onClick:()=>i("professionalSkills"),className:n==="professionalSkills"?"active":"",children:["Professional Skills",h.jsx(Sl,{})]}),h.jsxs(kl,{onClick:()=>i("projects"),className:n==="projects"?"active":"",children:["Projects",h.jsx(Sl,{})]})]})}),h.jsxs(Gg,{children:[t==="workExperience"&&h.jsx(h.Fragment,{children:h.jsxs(Xg,{children:[h.jsxs("div",{children:[h.jsx(vi,{children:"Software Engineer (Frontend)"}),h.jsxs(yi,{children:[h.jsx(wi,{children:"Accendo Technologies"}),h.jsx(xi,{children:"2024 - Present"})]}),h.jsx(se,{children:"• Developed and optimized frontend features using Next.js, TypeScript, Tailwind CSS, and MobX, significantly enhancing rendering efficiency and application performance"}),h.jsx(se,{children:"• Integrated APIs to enable seamless data flow and dynamic content rendering, boosting interactivity and user engagement"}),h.jsx(se,{children:"• Collaborated with stakeholders and designers to create user-friendly enhancements, directly improving users’ experience"}),h.jsx(se,{children:"• Actively participated in agile processes, including sprint planning and stand-ups, contributing to an improvement in feature delivery timelines"}),h.jsx(se,{children:"• Implemented proactive testing and debugging, reducing bug reports and increasing overall product stability"})]}),h.jsxs("div",{children:[h.jsx(vi,{children:"Process Coordinator"}),h.jsxs(yi,{children:[h.jsx(wi,{children:"Kibing Group Malaysia"}),h.jsx(xi,{children:"2022 - 2024"})]}),h.jsx(se,{children:"• Supported the Technical Director as a personal assistant, handling documentation and coordinating daily administrative tasks to streamline operations"}),h.jsx(se,{children:"• Facilitated communication across departments, ensuring the efficient execution of directives from HQ"}),h.jsx(se,{children:"• Established and maintained standardized documentation and workflows, reducing process inconsistencies and improving operational efficiency"}),h.jsx(se,{children:"• Prepared and presented essential departmental documentation like teahnical reports for senior management"})]}),h.jsxs("div",{children:[h.jsx(vi,{children:"Service Provider Support"}),h.jsxs(yi,{children:[h.jsx(wi,{children:"Daikin Malaysia Sales & Services"}),h.jsx(xi,{children:"2021 - 2022"})]}),h.jsx(se,{children:"• Managed the onboarding and training of service providers, ensuring consistent service quality nationwide"}),h.jsx(se,{children:"• Converted 20+ suppliers to authorized service providers, expanding service reach and ensuring resource availability"}),h.jsx(se,{children:"• Provided support for service providers and handled customer inquiries, enhancing both service quality and customer satisfaction"}),h.jsx(se,{children:"• Oversaw the E-commerce platform on customer service and ensuring accurate stock management"})]}),h.jsxs("div",{children:[h.jsx(vi,{children:"Sales Support & Marketing"}),h.jsxs(yi,{children:[h.jsx(wi,{children:"Matrix Concepts Sdn Bhd"}),h.jsx(xi,{children:"2018 - 2020"})]}),h.jsx(se,{children:"• Developed targeted marketing campaigns that achieved 80% sales for assigned projects, effectively reaching targetted buyer demographics"}),h.jsx(se,{children:"• Organized large-scale annual events and property exhibitions, driving walk-in traffic and potential buyers"}),h.jsx(se,{children:"• Ensured marketing collateral availability, coordinating materials like scale models and brochures to optimize promotional efforts"}),h.jsx(se,{children:"• Compiled and analyzed daily sales records, providing valuable insights for strategic planning"})]})]})}),t==="professionalSkills"&&h.jsx(h.Fragment,{children:h.jsxs(Zg,{children:[h.jsxs(St,{children:[h.jsx(Ct,{src:Pt.reactLogo,alt:"react-logo"}),h.jsx(Et,{children:"React"})]}),h.jsxs(St,{children:[h.jsx(Ct,{src:Pt.nextjsLogo,alt:"nextjs-logo"}),h.jsx(Et,{children:"Next.js"})]}),h.jsxs(St,{children:[h.jsx(Ct,{src:Pt.javascriptLogo,alt:"javascript-logo"}),h.jsx(Et,{children:"JavaScript"})]}),h.jsxs(St,{children:[h.jsx(Ct,{src:Pt.typescriptLogo,alt:"typescript-logo"}),h.jsx(Et,{children:"TypeScript"})]}),h.jsxs(St,{children:[h.jsx(Ct,{src:Pt.htmlLogo,alt:"html-logo"}),h.jsx(Et,{children:"HTML"})]}),h.jsxs(St,{children:[h.jsx(Ct,{src:Pt.cssLogo,alt:"css-logo"}),h.jsx(Et,{children:"CSS"})]}),h.jsxs(St,{children:[h.jsx(Ct,{src:Pt.tailwindLogo,alt:"tailwind-logo"}),h.jsx(Et,{children:"Tailwind CSS"})]}),h.jsxs(St,{children:[h.jsx(Ct,{src:Pt.mobxLogo,alt:"mobx-logo"}),h.jsx(Et,{children:"MobX"})]})]})}),t==="projects"&&h.jsx(h.Fragment,{children:h.jsxs(Jg,{children:[h.jsxs(bg,{children:["Country Explorer (In Progress)",h.jsx(f1,{onClick:o=>{o.preventDefault(),window.open("https://accendo-countriesinfo.vercel.app/","_blank","noopener, noreferrer")}}),h.jsx(sp,{onClick:o=>{o.preventDefault(),window.open("https://github.com/NathanGoh95/accendo-countriesinfo","_blank","noopener, noreferrer")}})]}),h.jsxs(qg,{children:[h.jsx(dc,{src:"country_explorer_card.png",alt:"country-explorer-card"}),h.jsx(dc,{src:"country_explorer_list.png",alt:"country-explorer-list"})]}),h.jsx(e1,{children:"A responsive web application built with Next.js, Tailwind CSS, Material UI, and MobX, designed to explore global countries, facts, and data. The application integrates the REST Countries API to provide real-time information, allowing users to search for countries, filter by region, toggle between light and dark themes, and view countries in list or card formats. Currently still in progress to improve the user experience and optimization for mobile view."})]})})]})]})})},fc="80px",J={mobile:"430px",tablet:"768px",desktop:"1024px"},v1=$.div`
  height: calc(100vh - ${fc});
  margin-top: ${fc};
  overflow: hidden;
  position: relative;
`,y1=$.div`
  background-color: #000814;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;

  @media screen and (max-width: ${J.mobile}) {
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: ${J.tablet}) and (max-width: ${J.desktop}) {
    flex-direction: row;
    width: 100%;
  }
`,w1=$.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade-in-left 2s;

  @keyframes fade-in-left {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${J.mobile}) {
    width: 100%;
    height: 50%;
  }
`,x1=$.img`
  width: 50%;

  @media screen and (max-width: ${J.mobile}) {
    width: 50%;
  }

  @media screen and (min-width: ${J.tablet}) and (max-width: ${J.desktop}) {
    width: 70%;
  }
`,k1=$.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  animation: fade-in-right 2s forwards;
  animation-delay: 0.5s;
  opacity: 0;

  @keyframes fade-in-right {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${J.mobile}) {
    width: 100%;
    padding: 0 20px;
    justify-content: start;
    align-items: center;
  }

  @media screen and (min-width: ${J.tablet}) and (max-width: ${J.desktop}) {
    width: 50%;
    padding: 0 20px;
  }
`,S1=$.div`
  color: #eec584;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;

  @media screen and (max-width: ${J.mobile}) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${J.tablet}) and (max-width: ${J.desktop}) {
    font-size: 2rem;
  }
`,pc=$.div`
  color: #dee2e6;
  font-size: 1.5rem;
  margin-top: 10px;

  @media screen and (max-width: ${J.mobile}) {
    font-size: 0.85rem;
  }

  @media screen and (min-width: ${J.tablet}) and (max-width: ${J.desktop}) {
    font-size: 1rem;
  }
`,ki=$.div`
  color: #dee2e6;
  font-size: 1.5rem;
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    vertical-align: middle;
    color: #eec584;
  }

  @media screen and (max-width: ${J.mobile}) {
    font-size: 0.8rem;
    margin-top: 15px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: ${J.tablet}) and (max-width: ${J.desktop}) {
    font-size: 1rem;
    margin-top: 20px;

    svg {
      width: 16px;    
      height: 16px;
    }
`,Si=$.div`
  color: #dee2e6;
  font-size: 1.25rem;
  margin-top: 15px;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #f7b32b;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  @media screen and (max-width: ${J.mobile}) {
    font-size: 0.8rem;
    margin-top: 5px;
  }

  @media screen and (min-width: ${J.tablet}) and (max-width: ${J.desktop}) {
    font-size: 1rem;
    margin-top: 10px;
  }
`,C1=()=>h.jsx(v1,{children:h.jsxs(y1,{children:[h.jsx(w1,{children:h.jsx(x1,{src:"contactme.png",alt:"contactme-img"})}),h.jsxs(k1,{children:[h.jsx(S1,{children:"Contact"}),h.jsx(pc,{children:"Looking for a Developer?"}),h.jsx(pc,{children:"I’d love to chat and I’m available for new opportunities!"}),h.jsxs(ki,{children:[h.jsx(h1,{}),"Email"]}),h.jsx(Si,{onClick:e=>{e.preventDefault(),window.location="mailto:gohjunhao95@gmail.com"},children:"gohjunhao95@gmail.com"}),h.jsxs(ki,{children:[h.jsx(m1,{}),"Phone"]}),h.jsx(Si,{onClick:e=>{e.preventDefault(),window.open("https://wa.me/60162398645","_blank","noopener, noreferrer")},children:"+6016-2398645"}),h.jsxs(ki,{children:[h.jsx(p1,{}),"LinkedIn"]}),h.jsx(Si,{onClick:e=>{e.preventDefault(),window.open("https://www.linkedin.com/in/nathangjh/","_blank","noopener, noreferrer")},children:"linkedin.com/in/nathangjh/"}),h.jsxs(ki,{children:[h.jsx(sp,{}),"GitHub"]}),h.jsx(Si,{onClick:e=>{e.preventDefault(),window.open("https://github.com/NathanGoh95","_blank","noopener, noreferrer")},children:"github.com/NathanGoh95"})]})]})}),E1=()=>{const{pageState:e}=N.useContext(bn);return h.jsxs("div",{style:{height:"calc(100vh - 80px)"},children:[e==="default"&&h.jsx(Og,{}),e==="about-me"&&h.jsx(Hg,{}),e==="experience"&&h.jsx(g1,{}),e==="contact"&&h.jsx(C1,{})]})};function P1(){return h.jsx(kg,{children:h.jsxs(fg,{children:[h.jsx(zg,{}),h.jsx(Sg,{}),h.jsx(E1,{})]})})}Cl.createRoot(document.getElementById("root")).render(h.jsx(Ee.StrictMode,{children:h.jsx(P1,{})}));

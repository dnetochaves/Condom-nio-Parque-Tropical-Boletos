import{$ as uo,$a as ws,$b as Ts,A as Ge,Aa as Tn,Ab as V,B as rs,Ba as ps,Bb as it,C as Bt,Ca as Ii,Cb as On,D as mt,Da as $t,Db as Z,E as co,Ea as Gt,Eb as Y,F as os,Fa as gs,Fb as Es,G as as,Ga as vs,Gb as Ns,H as jt,Ha as bs,Hb as Do,I as ss,Ia as ys,Ib as Pn,J as Ct,Ja as _s,Jb as Ms,K as Ie,Ka as Ss,Kb as j,L as qe,La as Ds,Lb as Yt,M as oe,Ma as Cs,Mb as g,N as S,Na as qt,Nb as I,O as zt,Oa as xs,Ob as Ue,P as An,Pa as po,Pb as Be,Q as R,Qa as go,Qb as se,R as O,Ra as h,Rb as As,S as ls,Sa as Ti,Sb as Rs,T as v,Ta as We,Tb as Is,U as x,Ua as ae,Ub as X,V as c,Va as Fn,Vb as A,W as Je,Wa as K,Wb as Co,X as cs,Xa as Fi,Xb as Xt,Y as xe,Ya as pt,Yb as xo,Z as ve,Za as Wt,Zb as Et,_ as we,_a as vo,_b as kn,a as p,aa as fo,ab as bo,ac as Ne,b as z,ba as ds,bb as H,bc as Fs,ca as be,cb as L,cc as Q,d as De,da as M,db as C,dc as Pi,e as ao,ea as ke,eb as ye,ec as wo,f as Lt,fa as us,fb as Kt,fc as Eo,g as T,ga as W,gb as yo,h as Ce,ha as P,hb as _o,i as ce,ia as xt,ib as Zt,j as ge,ja as Rn,jb as ie,k as _,ka as fs,kb as $,l as Ei,la as N,lb as G,m as so,ma as In,mb as Ke,n as es,na as ms,nb as Ze,o as F,oa as Ht,ob as Ee,p as ts,pa as Ri,pb as m,q as Qe,qa as wt,qb as f,r as lo,ra as hs,rb as tt,s as ns,sa as Le,sb as Ve,t as Ni,ta as ht,tb as Ye,u as Mi,ua as mo,ub as nt,v as Ai,va as de,vb as So,w as ne,wa as et,wb as Oi,x as Vt,xa as ho,xb as ue,y as Ut,ya as D,yb as q,z as is,za as k,zb as _e}from"./chunk-WHRQTSRG.js";var Os=null;function Te(){return Os}function No(n){Os??=n}var Ln=class{},Qt=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:()=>c(Ps),providedIn:"platform"})}return n})();var Ps=(()=>{class n extends Qt{_location;_history;_doc=c(M);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Te().getBaseHref(this._doc)}onPopState(e){let t=Te().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Te().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Vs(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function ks(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function gt(n){return n&&n[0]!=="?"?`?${n}`:n}var Jt=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:()=>c(Jd),providedIn:"root"})}return n})(),Qd=new v(""),Jd=(()=>{class n extends Jt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??c(M).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Vs(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+gt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+gt(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+gt(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(x(Qt),x(Qd,8))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var en=(()=>{class n{_subject=new T;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=nu(ks(Ls(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+gt(t))}normalize(e){return n.stripTrailingSlash(tu(this._basePath,Ls(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=gt;static joinWithSlash=Vs;static stripTrailingSlash=ks;static \u0275fac=function(t){return new(t||n)(x(Jt))};static \u0275prov=R({token:n,factory:()=>eu(),providedIn:"root"})}return n})();function eu(){return new en(x(Jt))}function tu(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Ls(n){return n.replace(/\/index\.html$/,"")}function nu(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Mo=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(be);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(K(pt))};static \u0275dir=C({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[de]})}return n})();function Vn(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()!==i)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]==='"'&&a[a.length-1]==='"'&&(a=a.slice(1,-1)),a}return null}var Ao="browser";function Us(n){return n===Ao}var Un=class{_doc;constructor(i){this._doc=i}manager},ki=(()=>{class n extends Un{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(x(M))};static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})(),Ui=new v(""),Fo=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof ki));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof ki);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new S(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(x(Ui),x(P))};static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})(),Ro="ng-app-id";function Bs(n){for(let i of n)i.remove()}function js(n,i){let e=i.createElement("style");return e.textContent=n,e}function su(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Ro}="${i}"],link[${Ro}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Ro),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function To(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Oo=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,su(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,js);t?.forEach(r=>this.addUsage(r,this.external,To))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Bs(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Bs(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,js(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,To(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(x(M),x(In),x(wt,8),x(Ht))};static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})(),Io={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Po=/%COMP%/g;var Hs="%COMP%",lu=`_nghost-${Hs}`,cu=`_ngcontent-${Hs}`,du=!0,uu=new v("",{factory:()=>du}),fu=new v("");function mu(n){return cu.replace(Po,n)}function hu(n){return lu.replace(Po,n)}function $s(n,i){return i.map(e=>e.replace(Po,n))}var zn=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,o,a,l,s=null,d=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=l,this.nonce=s,this.tracingService=d,this.cssVarNamespace=u??"",this.defaultRenderer=new Bn(e,a,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Vi?r.applyToHost(e):r instanceof jn&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,l=this.ngZone,s=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,b=this.tracingService;switch(t.encapsulation){case Ii.Emulated:o=new Vi(s,d,t,this.appId,u,a,l,b,this.cssVarNamespace);break;case Ii.ShadowDom:return new Li(s,e,t,a,l,this.nonce,b,this.cssVarNamespace,d);case Ii.ExperimentalIsolatedShadowDom:return new Li(s,e,t,a,l,this.nonce,b,this.cssVarNamespace);default:o=new jn(s,d,t,u,a,l,b,this.cssVarNamespace);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(x(Fo),x(Fn),x(In),x(uu),x(M),x(P),x(wt),x(po,8),x(fu,8))};static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})(),Bn=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r,o=""){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Io[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(zs(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){if(i){let r=zs(i)?i.content:i;if(t!=null&&t.parentNode!==r)throw new S(-5106,!1);r.insertBefore(e,t)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new S(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=Io[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Io[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(qt.DashCase|qt.Important)?i.style.setProperty(e,t,r&qt.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||t&qt.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=Te().getGlobalEventTarget(this.doc,i),!i))throw new S(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function zs(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Li=class extends Bn{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,l,s,d){super(i,r,o,l,s),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=t.styles;u=$s(t.id,u).map(y=>y.replace(/%NS%/g,s));for(let y of u){let B=document.createElement("style");a&&B.setAttribute("nonce",a),B.textContent=y,this.shadowRoot.appendChild(B)}let b=t.getExternalStyles?.();if(b)for(let y of b){let B=To(y,r);a&&B.setAttribute("nonce",a),this.shadowRoot.appendChild(B)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},jn=class extends Bn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,l,s,d){super(i,o,a,l,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=t.styles,b=d?$s(d,u):u;this.styles=b.map(y=>y.replace(/%NS%/g,s)),this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&xs.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Vi=class extends jn{contentAttr;hostAttr;constructor(i,e,t,r,o,a,l,s,d){let u=r+"-"+t.id;super(i,e,t,o,a,l,s,d,u),this.contentAttr=mu(u),this.hostAttr=hu(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var Bi=class n extends Ln{supportsDOMEvents=!0;static makeCurrent(){No(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=gu();return e==null?null:vu(e)}resetBaseElement(){Hn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Vn(document.cookie,i)}},Hn=null;function gu(){return Hn=Hn||document.head.querySelector("base"),Hn?Hn.getAttribute("href"):null}function vu(n){return new URL(n,document.baseURI).pathname}var Gs=["alt","control","meta","shift"],bu={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yu={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},qs=(()=>{class n extends Un{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),l=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Te().onAndCancel(e,a.domEventName,l,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),a="code."),Gs.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let s={};return s.domEventName=r,s.fullKey=a,s}static matchEventFullKeyCode(e,t){let r=bu[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Gs.forEach(a=>{if(a!==r){let l=yu[a];l(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(x(M))};static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})();async function ko(n,i,e){let t=p({rootComponent:n},_u(i,e));return Fs(t)}function _u(n,i){return{platformRef:i?.platformRef,appProviders:[...wu,...n?.providers??[]],platformProviders:xu}}function Su(){Bi.makeCurrent()}function Du(){return new xt}function Cu(){return ps(document),document}var xu=[{provide:Ht,useValue:Ao},{provide:ms,useValue:Su,multi:!0},{provide:M,useFactory:Cu}];var wu=[{provide:cs,useValue:"root"},{provide:xt,useFactory:Du},{provide:Ui,useClass:ki,multi:!0},{provide:Ui,useClass:qs,multi:!0},zn,{provide:Fn,useClass:Oo},{provide:Oo,useExisting:Fn},Fo,{provide:We,useExisting:zn},[]];var ot=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],l=this.headers.get(e);if(!l)return;l=l.filter(s=>a.indexOf(s)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var zi=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Hi=class{encodeKey(i){return Ws(i)}encodeValue(i){return Ws(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Eu(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,l]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],s=e.get(a)||[];s.push(l),e.set(a,s)}),e}var Nu=/%(\d[a-f0-9])/gi,Mu={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ws(n){return encodeURIComponent(n).replace(Nu,(i,e)=>Mu[e]??i)}function ji(n){return`${n}`}var rt=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Hi,i.fromString){if(i.fromObject)throw new S(2805,!1);this.map=Eu(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(ji):[ji(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(ji(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),r=t.indexOf(ji(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function Au(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ks(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Zs(n){return typeof Blob<"u"&&n instanceof Blob}function Ys(n){return typeof FormData<"u"&&n instanceof FormData}function Ru(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Lo="Content-Type",Xs="Accept",el="text/plain",tl="application/json",Iu=`${tl}, ${el}, */*`,tn=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(Au(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new S(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new ot,this.context??=new zi,!this.params)this.params=new rt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let l=e,s="",d=e.indexOf("#");d!==-1&&(s=e.substring(d),l=e.substring(0,d));let u=l.indexOf("?"),b=u===-1?"?":u<l.length-1?"&":"";this.urlWithParams=l+b+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ks(this.body)||Zs(this.body)||Ys(this.body)||Ru(this.body)?this.body:this.body instanceof rt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ys(this.body)?null:Zs(this.body)?this.body.type||null:Ks(this.body)?null:typeof this.body=="string"?el:this.body instanceof rt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?tl:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,l=i.cache||this.cache,s=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,b=i.referrer??this.referrer,y=i.integrity||this.integrity,B=i.referrerPolicy||this.referrerPolicy,ee=i.transferCache??this.transferCache,te=i.timeout??this.timeout,J=i.body!==void 0?i.body:this.body,Pe=i.withCredentials??this.withCredentials,he=i.reportProgress??this.reportProgress,pe=i.reportUploadProgress??this.reportUploadProgress,En=i.reportDownloadProgress??this.reportDownloadProgress,ut=i.headers||this.headers,Nn=i.params||this.params,Mn=i.context??this.context;return i.setHeaders!==void 0&&(ut=Object.keys(i.setHeaders).reduce((kt,ft)=>kt.set(ft,i.setHeaders[ft]),ut)),i.setParams&&(Nn=Object.keys(i.setParams).reduce((kt,ft)=>kt.set(ft,i.setParams[ft]),Nn)),new n(e,t,J,{params:Nn,headers:ut,context:Mn,reportProgress:he,reportUploadProgress:pe,reportDownloadProgress:En,responseType:r,withCredentials:Pe,transferCache:ee,keepalive:o,cache:l,priority:a,timeout:te,mode:s,redirect:d,credentials:u,referrer:b,integrity:y,referrerPolicy:B})}},Mt=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Mt||{}),nn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new ot,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},$i=class n extends nn{constructor(i={}){super(i)}type=Mt.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},$n=class n extends nn{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Mt.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Nt=class extends nn{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Tu=200;var Fu=/^\)\]\}',?\n/,Kb=1024*1024,nl=new v("",{factory:()=>null}),Gi=(()=>{class n{fetchImpl=c(Uo,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=c(P);destroyRef=c(ke);maxResponseSize=c(nl);handle(e){return new Lt(t=>{let r=new AbortController,o=!1,a={next:s=>{s.type===Mt.Response&&(o=!0),t.next(s)},error:s=>{o=!0,t.error(s)},complete:()=>{o=!0,t.complete()}};this.doRequest(e,r.signal,a).then(Bo,s=>a.error(new Nt({error:s})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!o&&!r.signal.aborted&&r.abort()}})}async doRequest(e,t,r){let o=this.createRequestInit(e),a;try{let J=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,p({signal:t},o)));Ou(J),r.next({type:Mt.Sent}),a=await J}catch(J){r.error(new Nt({error:J,status:J.status??0,statusText:J.statusText,url:e.urlWithParams,headers:J.headers}));return}let l=new ot(a.headers),s=a.statusText,d=a.url||e.urlWithParams,u=a.status,b=null,y=e.reportProgress||e.reportDownloadProgress;if(y&&r.next(new $i({headers:l,status:u,statusText:s,url:d})),a.body){let J=a.headers.get(Lo)??"",Pe=a.headers.get("content-length"),he=Pe!==null?Number(Pe):NaN;this.maxResponseSize!==null&&Number.isFinite(he)&&he>this.maxResponseSize&&(await a.body.cancel(),Qs(this.maxResponseSize));let pe=[],En=a.body.getReader(),ut=0,Nn,Mn,kt=typeof Zone<"u"&&Zone.current,ft=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await En.cancel(),ft=!0;break}let{done:ro,value:oo}=await En.read();if(ro)break;if(pe.push(oo),ut+=oo.length,this.maxResponseSize!==null&&ut>this.maxResponseSize&&(await En.cancel(),Qs(this.maxResponseSize)),y){Mn=e.responseType==="text"?(Mn??"")+(Nn??=Js(J)).decode(oo,{stream:!0}):void 0;let Ja=()=>r.next({type:Mt.DownloadProgress,total:Number.isFinite(he)?he:void 0,loaded:ut,partialText:Mn});kt?kt.run(Ja):Ja()}}}),ft){r.complete();return}let Xd=this.concatChunks(pe,ut);try{b=this.parseBody(e,Xd,J,u)}catch(ro){r.error(new Nt({error:ro,headers:new ot(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=b?Tu:0);let B=u>=200&&u<300,ee=a.redirected,te=a.type;B?(r.next(new $n({body:b,headers:l,status:u,statusText:s,url:d,redirected:ee,responseType:te})),r.complete()):r.error(new Nt({error:b,headers:l,status:u,statusText:s,url:d,redirected:ee,responseType:te}))}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(Fu,"");if(a==="")return null;try{return JSON.parse(a)}catch(l){if(o<200||o>=300)return a;throw l}case"text":return Js(r).decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new S(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(Xs)||(t[Xs]=Iu),!e.headers.has(Lo)){let o=e.detectContentTypeHeader();o!==null&&(t[Lo]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),Uo=class{};function Bo(){}function Ou(n){n.then(Bo,Bo)}function Qs(n){throw new S(-2825,!1)}var Pu=/charset=\s*["']?([^;"'\s]+)["']?/i;function Js(n){let i=n.match(Pu);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var ku=new v("",{factory:()=>!0}),Lu="XSRF-TOKEN",Vu=new v("",{factory:()=>Lu}),Uu="X-XSRF-TOKEN",Bu=new v("",{factory:()=>Uu}),ju=(()=>{class n{cookieName=c(Vu);doc=c(M);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Vn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),il=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=x(ju),r},providedIn:"root"})}return n})();function rl(n,i){if(!c(ku)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=c(Qt).href,{origin:o}=new URL(r),{origin:a}=new URL(n.url,o);if(o!==a)return i(n)}catch{return i(n)}let e=c(il).getToken(),t=c(Bu);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function zu(n,i){return i(n)}function Hu(n,i,e){return(t,r)=>ve(e,()=>i(t,o=>n(o,r)))}var ol=new v("",{factory:()=>[rl]}),al=new v(""),sl=new v("",{factory:()=>!0});var jo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=x(Gi),r},providedIn:"root"})}return n})();var qi=(()=>{class n{backend;injector;chain=null;pendingTasks=c(mo);contributeToStability=c(sl);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=this.injector.get(Wi,null,{skipSelf:!0}),o=r!==null&&this.backend===r,a=this.injector.get(al,[],o?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(ol),...a]));this.chain=l.reduceRight((s,d)=>Hu(s,d,this.injector),zu)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return A(()=>t(e,o=>this.backend.handle(o))).pipe(Bt(r))}else return A(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||n)(x(jo),x(xe))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Wi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=x(qi),r},providedIn:"root"})}return n})();function Vo(n,i){return p({body:i},n)}var vt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof tn)o=e;else{let s;r.headers instanceof ot?s=r.headers:s=new ot(r.headers);let d;r.params&&(r.params instanceof rt?d=r.params:d=new rt({fromObject:r.params})),o=new tn(e,t,r.body!==void 0?r.body:null,{headers:s,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=_(o).pipe(Ut(s=>this.handler.handle(s)));if(e instanceof tn||r.observe==="events")return a;let l=a.pipe(ne(s=>s instanceof $n));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return l.pipe(F(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new S(2806,!1);return s.body}));case"blob":return l.pipe(F(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new S(2807,!1);return s.body}));case"text":return l.pipe(F(s=>{if(s.body!==null&&typeof s.body!="string")throw new S(2808,!1);return s.body}));default:return l.pipe(F(s=>s.body))}case"response":return l;default:throw new S(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new rt().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Vo(r,t))}post(e,t,r={}){return this.request("POST",e,Vo(r,t))}put(e,t,r={}){return this.request("PUT",e,Vo(r,t))}static \u0275fac=function(t){return new(t||n)(x(Wi))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function zo(...n){let i=[vt,Gi,qi,{provide:Wi,useExisting:qi},{provide:jo,useFactory:()=>c(Gi)},{provide:ol,useValue:rl,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return Je(i)}var ll=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(x(M))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ho=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=x(Wu),r},providedIn:"root"})}return n})(),Wu=(()=>{class n extends Ho{_doc=c(M);sanitize(e,t){if(t==null)return null;switch(e){case we.NONE:return t;case we.HTML:return Gt(t,"HTML")?$t(t):Ds(this._doc,String(t)).toString();case we.STYLE:return Gt(t,"Style")?$t(t):t;case we.SCRIPT:if(Gt(t,"Script"))return $t(t);throw new S(5200,!1);case we.URL:return Gt(t,"URL")?$t(t):Ss(String(t));case we.RESOURCE_URL:if(Gt(t,"ResourceURL"))return $t(t);throw new S(-5201,!1);default:throw new S(5202,!1)}}bypassSecurityTrustHtml(e){return gs(e)}bypassSecurityTrustStyle(e){return vs(e)}bypassSecurityTrustScript(e){return bs(e)}bypassSecurityTrustUrl(e){return ys(e)}bypassSecurityTrustResourceUrl(e){return _s(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var w="primary",ri=Symbol("RouteTitle"),Ko=class{params;constructor(i){this.params=i||{}}has(i){return Object.hasOwn(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Rt(n){return new Ko(n)}function $o(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function vl(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let s={},d=n.slice(0,t.length);return $o(t,d,s)?{consumed:d,posParams:s}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let l={};return!$o(o,n.slice(0,o.length),l)||!$o(a,n.slice(n.length-a.length),l)?null:{consumed:n,posParams:l}}function Ji(n){return new Promise((i,e)=>{n.pipe(mt()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Zu(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Xe(n[e],i[e]))return!1;return!0}function Xe(n,i){let e=n?Zo(n):void 0,t=i?Zo(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!bl(n[r],i[r]))return!1;return!0}function Zo(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function bl(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function Yu(n){return n.length>0?n[n.length-1]:null}function Ft(n){return so(n)?n:Wt(n)?ge(Promise.resolve(n)):_(n)}function yl(n){return so(n)?Ji(n):Promise.resolve(n)}var Xu={exact:Sl,subset:Dl},_l={exact:Qu,subset:Ju,ignored:()=>!0},da={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},sn={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function ua(n,i,e){let t=n instanceof Se?n:i.parseUrl(n);return X(()=>Yo(i.lastSuccessfulNavigation()?.finalUrl??new Se,t,p(p({},sn),e)))}function Yo(n,i,e){return Xu[e.paths](n.root,i.root,e.matrixParams)&&_l[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function Qu(n,i){return Xe(n,i)}function Sl(n,i,e){if(!At(n.segments,i.segments)||!Yi(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Sl(n.children[t],i.children[t],e))return!1;return!0}function Ju(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>bl(n[e],i[e]))}function Dl(n,i,e){return Cl(n,i,i.segments,e)}function Cl(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!At(r,e)||i.hasChildren()||!Yi(r,e,t))}else if(n.segments.length===e.length){if(!At(n.segments,e)||!Yi(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Dl(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!At(n.segments,r)||!Yi(n.segments,r,t)||!n.children[w]?!1:Cl(n.children[w],i,o,t)}}function Yi(n,i,e){return i.every((t,r)=>_l[e](n[r].parameters,t.parameters))}var Se=class{root;queryParams;fragment;_queryParamMap;constructor(i=new U([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=Rt(this.queryParams),this._queryParamMap}toString(){return nf.serialize(this)}},U=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Xi(this)}},bt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Rt(this.parameters),this._parameterMap}toString(){return wl(this)}};function ef(n,i){return At(n,i)&&n.every((e,t)=>Xe(e.parameters,i[t].parameters))}function At(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function tf(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===w&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==w&&(e=e.concat(i(r,t)))}),e}var mn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>new yt})}return n})(),yt=class{parse(i){let e=new Qo(i);return new Se(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Gn(i.root,!0)}`,t=af(i.queryParams),r=typeof i.fragment=="string"?`#${rf(i.fragment)}`:"";return`${e}${t}${r}`}},nf=new yt;function Xi(n){return n.segments.map(i=>wl(i)).join("/")}function Gn(n,i){if(!n.hasChildren())return Xi(n);if(i){let e=n.children[w]?Gn(n.children[w],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==w&&t.push(`${r}:${Gn(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=tf(n,(t,r)=>r===w?[Gn(n.children[w],!1)]:[`${r}:${Gn(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[w]!=null?`${Xi(n)}/${e[0]}`:`${Xi(n)}/(${e.join("//")})`}}function xl(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ki(n){return xl(n).replace(/%3B/gi,";")}function rf(n){return encodeURI(n)}function Xo(n){return xl(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Qi(n){return decodeURIComponent(n)}function dl(n){return Qi(n.replace(/\+/g,"%20"))}function wl(n){return`${Xo(n.path)}${of(n.parameters)}`}function of(n){return Object.entries(n).map(([i,e])=>`;${Xo(i)}=${Xo(e)}`).join("")}function af(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Ki(e)}=${Ki(r)}`).join("&"):`${Ki(e)}=${Ki(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var sf=/^[^\/()?;#]+/;function Go(n){let i=n.match(sf);return i?i[0]:""}var lf=/^[^\/()?;=#]+/;function cf(n){let i=n.match(lf);return i?i[0]:""}var df=/^[^=?&#]+/;function uf(n){let i=n.match(df);return i?i[0]:""}var ff=/^[^&#]+/;function mf(n){let i=n.match(ff);return i?i[0]:""}var Qo=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new U([],{}):new U([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new S(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[w]=new U(e,t)),r}parseSegment(){let i=Go(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new S(4009,!1);return this.capture(i),new bt(Qi(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=cf(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Go(this.remaining);r&&(t=r,this.capture(t))}i[Qi(e)]=Qi(t)}parseQueryParam(i){let e=uf(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=mf(this.remaining);a&&(t=a,this.capture(t))}let r=dl(e),o=dl(t);if(Object.hasOwn(i,r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Go(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new S(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=w);let l=this.parseChildren(e+1);t[a??w]=Object.keys(l).length===1&&l[w]?l[w]:new U([],l),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new S(4011,!1)}};function El(n){return n.segments.length>0?new U([],{[w]:n}):n}function Nl(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let o=Nl(r);if(t===w&&o.segments.length===0&&o.hasChildren())for(let[a,l]of Object.entries(o.children))i[a]=l;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new U(n.segments,i);return hf(e)}function hf(n){if(n.numberOfChildren===1&&n.children[w]){let i=n.children[w];return new U(n.segments.concat(i.segments),i.children)}return n}function _t(n){return n instanceof Se}function Ml(n,i,e=null,t=null,r=new yt){let o=Al(n);return Rl(o,i,e,t,r)}function Al(n){let i;function e(o){let a={};for(let s of o.children){let d=e(s);a[s.outlet]=d}let l=new U(o.url,a);return o===n&&(i=l),l}let t=e(n.root),r=El(t);return i??r}function Rl(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return qo(o,o,o,e,t,r);let a=pf(i);if(a.toRoot())return qo(o,o,new U([],{}),e,t,r);let l=gf(a,o,n),s=l.processChildren?Wn(l.segmentGroup,l.index,a.commands):Tl(l.segmentGroup,l.index,a.commands);return qo(o,l.segmentGroup,s,e,t,r)}function er(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Yn(n){return typeof n=="object"&&n!=null&&n.outlets}function ul(n,i,e){n||="\u0275";let t=new Se;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function qo(n,i,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(b=>ul(d,b,o)):ul(d,u,o);let l;n===i?l=e:l=Il(n,i,e);let s=El(Nl(l));return new Se(s,a,r)}function Il(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Il(o,i,e)}),new U(n.segments,t)}var tr=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&er(t[0]))throw new S(4003,!1);let r=t.find(Yn);if(r&&r!==Yu(t))throw new S(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function pf(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new tr(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let l={};return Object.entries(o.outlets).forEach(([s,d])=>{l[s]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:l}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((l,s)=>{s==0&&l==="."||(s==0&&l===""?e=!0:l===".."?i++:l!=""&&r.push(l))}),r):[...r,o]},[]);return new tr(e,i,t)}var on=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function gf(n,i,e){if(n.isAbsolute)return new on(i,!0,0);if(!e)return new on(i,!1,NaN);if(e.parent===null)return new on(e,!0,0);let t=er(n.commands[0])?0:1,r=e.segments.length-1+t;return vf(e,r,n.numberOfDoubleDots)}function vf(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new S(4005,!1);r=t.segments.length}return new on(t,!1,r-o)}function bf(n){return Yn(n[0])?n[0].outlets:{[w]:n}}function Tl(n,i,e){if(n??=new U([],{}),n.segments.length===0&&n.hasChildren())return Wn(n,i,e);let t=yf(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new U(n.segments.slice(0,t.pathIndex),{});return o.children[w]=new U(n.segments.slice(t.pathIndex),n.children),Wn(o,0,r)}else return t.match&&r.length===0?new U(n.segments,{}):t.match&&!n.hasChildren()?Jo(n,i,e):t.match?Wn(n,0,r):Jo(n,i,e)}function Wn(n,i,e){if(e.length===0)return new U(n.segments,{});{let t=bf(e),r=Object.create(null);if(Object.keys(t).some(o=>o!==w)&&n.children[w]&&n.numberOfChildren===1&&n.children[w].segments.length===0){let o=Wn(n.children[w],i,e);return new U(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Tl(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new U(n.segments,r)}}function yf(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],l=e[t];if(Yn(l))break;let s=`${l}`,d=t<e.length-1?e[t+1]:null;if(r>0&&s===void 0)break;if(s&&d&&typeof d=="object"&&d.outlets===void 0){if(!ml(s,d,a))return o;t+=2}else{if(!ml(s,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Jo(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(Yn(o)){let s=_f(o.outlets);return new U(t,s)}if(r===0&&er(e[0])){let s=n.segments[i];t.push(new bt(s.path,fl(e[0]))),r++;continue}let a=Yn(o)?o.outlets[w]:`${o}`,l=r<e.length-1?e[r+1]:null;a&&l&&er(l)?(t.push(new bt(a,fl(l))),r+=2):(t.push(new bt(a,{})),r++)}return new U(t,{})}function _f(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=Jo(new U([],{}),0,t))}),i}function fl(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function ml(n,i,e){return n==e.path&&Xe(i,e.parameters)}var Kn="imperative",re=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(re||{}),Ae=class{id;url;constructor(i,e){this.id=i,this.url=e}},It=class extends Ae{type=re.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ze=class extends Ae{urlAfterRedirects;type=re.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},fe=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(fe||{}),Xn=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Xn||{}),Fe=class extends Ae{reason;code;type=re.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Fl(n){return n instanceof Fe&&(n.code===fe.Redirect||n.code===fe.SupersededByNewNavigation)}var st=class extends Ae{reason;code;type=re.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},Tt=class extends Ae{error;target;type=re.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Qn=class extends Ae{urlAfterRedirects;state;type=re.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nr=class extends Ae{urlAfterRedirects;state;type=re.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ir=class extends Ae{urlAfterRedirects;state;shouldActivate;type=re.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},rr=class extends Ae{urlAfterRedirects;state;type=re.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},or=class extends Ae{urlAfterRedirects;state;type=re.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ar=class{route;type=re.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},sr=class{route;type=re.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},lr=class{snapshot;type=re.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cr=class{snapshot;type=re.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dr=class{snapshot;type=re.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ur=class{snapshot;type=re.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ln=class{},Jn=class{},cn=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Sf(n){return!(n instanceof ln)&&!(n instanceof cn)&&!(n instanceof Jn)}var fr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new hn(this.rootInjector)}},hn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new fr(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(x(xe))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),mr=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=ea(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=ea(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=ta(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return ta(i,this._root).map(e=>e.value)}};function ea(n,i){if(n===i.value)return i;for(let e of i.children){let t=ea(n,e);if(t)return t}return null}function ta(n,i){if(n===i.value)return[i];for(let e of i.children){let t=ta(n,e);if(t.length)return t.unshift(i),t}return[]}var Me=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function rn(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var ei=class extends mr{snapshot;constructor(i,e){super(i),this.snapshot=e,ma(this,i)}toString(){return this.snapshot.toString()}};function Ol(n,i){let e=Df(n,i),t=new Ce([new bt("",{})]),r=new Ce({}),o=new Ce({}),a=new Ce({}),l=new Ce(""),s=new lt(t,r,a,l,o,w,n,e.root);return s.snapshot=e.root,new ei(new Me(s,[]),e)}function Df(n,i){let e={},t={},r={},a=new dn([],e,r,"",t,w,n,null,{},i);return new ti("",new Me(a,[]))}var lt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(i,e,t,r,o,a,l,s){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=l,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(F(d=>d[ri]))??_(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(F(i=>Rt(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(F(i=>Rt(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(i){this._futureSnapshot=i,this.pending?.set(!0)}},Cf="always";function fa(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:p(p({},i.params),n.params),data:p(p({},i.data),n.data),resolve:p(p(p(p({},n.data),i.data),r?.data),n._resolvedData)}:t={params:p({},n.params),data:p({},n.data),resolve:p(p({},n.data),n._resolvedData??{})},r&&kl(r)&&(t.resolve[ri]=r.title),t}var dn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[ri]}constructor(i,e,t,r,o,a,l,s,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=l,this.routeConfig=s,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Rt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Rt(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},ti=class extends mr{url;constructor(i,e){super(e),this.url=i,ma(this,e)}toString(){return Pl(this._root)}};function ma(n,i){i.value._routerState=n,i.children.forEach(e=>ma(n,e))}function Pl(n){let i=n.children.length>0?` { ${n.children.map(Pl).join(", ")} } `:"";return`${n.value}${i}`}function Wo(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Xe(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Xe(i.params,e.params)||n.paramsSubject.next(e.params),Zu(i.url,e.url)||n.urlSubject.next(e.url),Xe(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function na(n,i){let e=Xe(n.params,i.params)&&ef(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||na(n.parent,i.parent))}function kl(n){return typeof n.title=="string"||n.title===null}var Ll=new v(""),oi=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=w;activateEvents=new W;deactivateEvents=new W;attachEvents=new W;detachEvents=new W;routerOutletData=Et();parentContexts=c(hn);location=c(pt);changeDetector=c(Ne);inputBinder=c(vr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new S(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new S(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new S(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new S(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,s=new ia(e,l,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:s,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[de]})}return n})(),ia=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===lt?this.route:i===hn?this.childContexts:i===Ll?this.outletData:this.parent.get(i,e)}},vr=new v("");var ha=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&tt(0,"router-outlet")},dependencies:[oi],encapsulation:2,changeDetection:1})}return n})();function pa(n){let i=n.children&&n.children.map(pa),e=i?z(p({},n),{children:i}):p({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==w&&(e.component=ha),e}function xf(n,i,e){let t=new Set,r=ni(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new ei(r,i)}}function ni(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._setPending(i.value);let o=wf(n,i,e,t);return new Me(r,o)}else{if(n.shouldAttach(i.value)){let a=n.retrieve(i.value);if(a!==null){let l=a.route;return l.value._setPending(i.value),l.children=i.children.map(s=>ni(n,s,void 0,t)),l}}let r=Ef(i.value);r._setPending(i.value),t.add(r);let o=i.children.map(a=>ni(n,a,void 0,t));return new Me(r,o)}}function wf(n,i,e,t){return i.children.map(r=>{for(let o of e.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return ni(n,r,o,t);return ni(n,r,void 0,t)})}function Ef(n){return new lt(new Ce(n.url),new Ce(n.params),new Ce(n.queryParams),new Ce(n.fragment),new Ce(n.data),n.outlet,n.component,n)}var un=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Vl="ngNavigationCancelingError";function hr(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=_t(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Ul(!1,fe.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Ul(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Vl]=!0,e.cancellationCode=i,e}function Nf(n){return Bl(n)&&_t(n.url)}function Bl(n){return!!n&&n[Vl]}var ra=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Wo(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=rn(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=rn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),l=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=rn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=rn(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new ur(o.value.snapshot))}),i.children.length&&this.forwardEvent(new cr(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Wo(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),Wo(l.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},pr=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},an=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Mf(n,i,e){let t=n._root,r=i?i._root:null;return qn(t,r,e,[t.value])}function Af(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function pn(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!ls(n)?n:i.get(n):t}function qn(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=rn(i);return n.children.forEach(a=>{Rf(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,l])=>Zn(l,e.getContext(a),e,r)),r}function Rf(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,l=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=If(a,o,o.routeConfig.runGuardsAndResolvers);s?r.canActivateChecks.push(new pr(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?qn(n,i,l?l.children:null,t,r):qn(n,i,e,t,r),s&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new an(l.outlet.component,a))}else a&&Zn(i,l,e,r),r.canActivateChecks.push(new pr(t)),o.component?qn(n,null,l?l.children:null,t,r):qn(n,null,e,t,r);return r}function If(n,i,e){if(typeof e=="function")return ve(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!At(n.url,i.url);case"pathParamsOrQueryParamsChange":return!At(n.url,i.url)||!Xe(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!na(n,i)||!Xe(n.queryParams,i.queryParams);default:return!na(n,i)}}function Zn(n,i,e,t){let r=rn(n),o=n.value;Object.entries(r).forEach(([a,l])=>{o.component?i?Zn(l,i.children.getContext(a),i.children,t):Zn(l,null,null,t):Zn(l,e?e.getContext(a):null,e,t)}),o.component?i&&i.outlet&&i.outlet.isActivated?t.canDeactivateChecks.push(new an(i.outlet.component,o)):t.canDeactivateChecks.push(new an(null,o)):t.canDeactivateChecks.push(new an(null,o))}function ai(n){return typeof n=="function"}function Tf(n){return typeof n=="boolean"}function Ff(n){return n&&ai(n.canLoad)}function Of(n){return n&&ai(n.canActivate)}function Pf(n){return n&&ai(n.canActivateChild)}function kf(n){return n&&ai(n.canDeactivate)}function Lf(n){return n&&ai(n.canMatch)}function jl(n){return n instanceof es||n?.name==="EmptyError"}var Zi=Symbol("INITIAL_VALUE");function fn(){return Ie(n=>ts(n.map(i=>i.pipe(Ge(1),Ct(Zi)))).pipe(F(i=>{for(let e of i)if(e!==!0){if(e===Zi)return Zi;if(e===!1||Vf(e))return e}return!0}),ne(i=>i!==Zi),Ge(1)))}function Vf(n){return _t(n)||n instanceof un}function zl(n){return n.aborted?_(void 0).pipe(Ge(1)):new Lt(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Hl(n){return qe(zl(n))}function Uf(n){return Qe(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?_(z(p({},i),{guardsResult:!0})):Bf(o,e,t).pipe(Qe(a=>a&&Tf(a)?jf(e,r,n):_(a)),F(a=>z(p({},i),{guardsResult:a})))})}function Bf(n,i,e){return ge(n).pipe(Qe(t=>qf(t.component,t.route,e,i)),mt(t=>t!==!0,!0))}function jf(n,i,e){return ge(i).pipe(Ut(t=>ns(Hf(t.route.parent,e),zf(t.route,e),Gf(n,t.path),$f(n,t.route))),mt(t=>t!==!0,!0))}function zf(n,i){return n!==null&&i&&i(new dr(n)),_(!0)}function Hf(n,i){return n!==null&&i&&i(new lr(n)),_(!0)}function $f(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return _(!0);let t=e.map(r=>Ni(()=>{let o=i._environmentInjector,a=pn(r,o),l=Of(a)?a.canActivate(i,n):ve(o,()=>a(i,n));return Ft(l).pipe(mt())}));return _(t).pipe(fn())}function Gf(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Af(o)).filter(o=>o!==null).map(o=>Ni(()=>{let a=o.guards.map(l=>{let s=o.node._environmentInjector,d=pn(l,s),u=Pf(d)?d.canActivateChild(e,n):ve(s,()=>d(e,n));return Ft(u).pipe(mt())});return _(a).pipe(fn())}));return _(r).pipe(fn())}function qf(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return _(!0);let o=r.map(a=>{let l=i._environmentInjector,s=pn(a,l),d=kf(s)?s.canDeactivate(n,i,e,t):ve(l,()=>s(n,i,e,t));return Ft(d).pipe(mt())});return _(o).pipe(fn())}function Wf(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return _(!0);let a=o.map(l=>{let s=pn(l,n),d=Ff(s)?s.canLoad(i,e):ve(n,()=>s(i,e)),u=Ft(d);return r?u.pipe(Hl(r)):u});return _(a).pipe(fn(),$l(t))}function $l(n){return ao(oe(i=>{if(typeof i!="boolean")throw hr(n,i)}),F(i=>i===!0))}function Kf(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return _(!0);let l=a.map(s=>{let d=pn(s,n),u=Lf(d)?d.canMatch(i,e,r):ve(n,()=>d(i,e,r));return Ft(u).pipe(Hl(o))});return _(l).pipe(fn(),$l(t))}var at=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},ii=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function Zf(n){throw new S(4e3,!1)}function Yf(n){throw Ul(!1,fe.GuardRejected)}var oa=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[w])throw Zf(`${i.redirectTo}`);r=r.children[w]}}async applyRedirectCommands(i,e,t,r,o){let a=await Xf(e,r,o);if(a instanceof Se)throw new ii(a);let l=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new ii(l);return l}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new Se(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let l=o.substring(1);t[r]=e[l]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a=Object.create(null);return Object.entries(e.children).forEach(([l,s])=>{a[l]=this.createSegmentGroup(i,s,t,r)}),new U(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new S(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function Xf(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Ji(Ft(ve(e,()=>t(i))))}function Qf(n,i){return n.providers&&!n._injector&&(n._injector=bo(n.providers,i,`Route: ${n.path}`)),n._injector??i}function je(n){return n.outlet||w}function Jf(n,i){let e=n.filter(t=>je(t)===i);return e.push(...n.filter(t=>je(t)!==i)),e}var aa={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Gl(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function em(n,i,e,t,r,o,a){let l=ql(n,i,e);if(!l.matched)return _(l);let s=Gl(o(l));return t=Qf(i,t),Kf(t,i,e,r,s,a).pipe(F(d=>d===!0?l:p({},aa)))}function ql(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?p({},aa):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||vl)(e,n,i);if(!r)return p({},aa);let o={};Object.entries(r.posParams??{}).forEach(([l,s])=>{o[l]=s.path});let a=r.consumed.length>0?p(p({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function hl(n,i,e,t,r){return e.length>0&&im(n,e,t,r)?{segmentGroup:new U(i,nm(t,new U(e,n.children))),slicedSegments:[]}:e.length===0&&rm(n,e,t)?{segmentGroup:new U(n.segments,tm(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new U(n.segments,n.children),slicedSegments:e}}function tm(n,i,e,t){let r={};for(let o of e)if(br(n,i,o)&&!t[je(o)]){let a=new U([],{});r[je(o)]=a}return p(p({},t),r)}function nm(n,i){let e={};e[w]=i;for(let t of n)if(t.path===""&&je(t)!==w){let r=new U([],{});e[je(t)]=r}return e}function im(n,i,e,t){return e.some(r=>!br(n,i,r)||!(je(r)!==w)?!1:!(t!==void 0&&je(r)===t))}function rm(n,i,e){return e.some(t=>br(n,i,t))}function br(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function om(n,i,e){return i.length===0&&!n.children[e]}var sa=class{};async function am(n,i,e,t,r,o,a,l){return new la(n,i,e,t,r,a,o,l).recognize()}var sm=31,la=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,l,s){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=l,this.abortSignal=s,this.applyRedirects=new oa(this.urlSerializer,this.urlTree)}noMatchError(i){return new S(4002,`'${i.segmentGroup}'`)}async recognize(){let i=hl(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new Me(t,e),o=new ti("",r),a=Ml(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new dn([],Object.freeze({}),Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),w,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,w,e),rootSnapshot:e}}catch(t){if(t instanceof ii)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof at?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=await this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof Me?[a]:[]}async processChildren(i,e,t,r){let o=[];for(let s of Object.keys(t.children))s==="primary"?o.unshift(s):o.push(s);let a=[];for(let s of o){let d=t.children[s],u=Jf(e,s),b=await this.processSegmentGroup(i,u,d,s,r);a.push(...b)}let l=Wl(a);return lm(l),l}async processSegment(i,e,t,r,o,a,l){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??i,e,s,t,r,o,a,l)}catch(d){if(d instanceof at||jl(d))continue;throw d}if(om(t,r,o))return new sa;throw new at(t)}async processSegmentAgainstRoute(i,e,t,r,o,a,l,s){if(je(t)!==a&&(a===w||!br(r,o,t)))throw new at(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,s);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,s);throw new at(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,l){let{matched:s,parameters:d,consumedSegments:u,positionalParamSegments:b,remainingSegments:y}=ql(e,r,o);if(!s)throw new at(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>sm&&(this.allowRedirects=!1));let B=this.createSnapshot(i,r,o,d,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let ee=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,b,Gl(B),i),te=await this.applyRedirects.lineralizeSegments(r,ee);return this.processSegment(i,t,e,te.concat(y),a,!1,l)}createSnapshot(i,e,t,r,o){let a=new dn(t,r,Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,dm(e),je(e),e.component??e._loadedComponent??null,e,um(e),i),l=fa(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(l.params),a.data=Object.freeze(l.data),a}async matchSegmentAgainstRoute(i,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=pe=>this.createSnapshot(i,t,pe.consumedSegments,pe.parameters,a),s=await Ji(em(e,t,r,i,this.urlSerializer,l,this.abortSignal));if(t.path==="**"&&(e.children={}),!s?.matched)throw new at(e);i=t._injector??i;let{routes:d}=await this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:b,consumedSegments:y,remainingSegments:B}=s,ee=this.createSnapshot(i,t,y,b,a),{segmentGroup:te,slicedSegments:J}=hl(e,y,B,d,o);if(J.length===0&&te.hasChildren()){let pe=await this.processChildren(u,d,te,ee);return new Me(ee,pe)}if(d.length===0&&J.length===0)return new Me(ee,[]);let Pe=je(t)===o,he=await this.processSegment(u,d,te,J,Pe?w:o,!0,ee);return new Me(ee,he instanceof Me?[he]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ji(Wf(i,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Yf(e)}return{routes:[],injector:i}}};function lm(n){n.sort((i,e)=>i.value.outlet===w?-1:e.value.outlet===w?1:i.value.outlet.localeCompare(e.value.outlet))}function cm(n){let i=n.value.routeConfig;return i&&i.path===""}function Wl(n){let i=[],e=new Set;for(let t of n){if(!cm(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=Wl(t.children);i.push(new Me(t.value,r))}return i.filter(t=>!e.has(t))}function dm(n){return n.data||{}}function um(n){return n.resolve||{}}function fm(n,i,e,t,r,o,a){return Qe(async l=>{let{state:s,tree:d}=await am(n,i,e,t,l.extractedUrl,r,o,a);return z(p({},l),{targetSnapshot:s,urlAfterRedirects:d})})}function mm(n){return Qe(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return _(i);let r=new Set(t.map(l=>l.route)),o=new Set;for(let l of r)if(!o.has(l))for(let s of Kl(l))o.add(s);let a=0;return ge(o).pipe(Ut(l=>r.has(l)?hm(l,e,n):(l.data=fa(l,l.parent,n).resolve,_(void 0))),oe(()=>a++),co(1),Qe(l=>a===o.size?_(i):ce))})}function Kl(n){let i=n.children.map(e=>Kl(e)).flat();return[n,...i]}function hm(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!kl(t)&&(r[ri]=t.title),Ni(()=>(n.data=fa(n,n.parent,e).resolve,pm(r,n,i).pipe(F(o=>(n._resolvedData=o,n.data=p(p({},n.data),o),null)))))}function pm(n,i,e){let t=Zo(n);if(t.length===0)return _({});let r={};return ge(t).pipe(Qe(o=>gm(n[o],i,e).pipe(mt(),oe(a=>{if(a instanceof un)throw hr(new yt,a);r[o]=a}))),co(1),F(()=>r),Vt(o=>jl(o)?ce:Ei(o)))}function gm(n,i,e){let t=i._environmentInjector,r=pn(n,t),o=r.resolve?r.resolve(i,e):ve(t,()=>r(i,e));return Ft(o)}var Zl=new v("");function ca(n){return Ie(i=>{let e=n(i);return e?ge(e).pipe(F(()=>i)):_(i)})}var ga=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===w);return t}getResolvedTitleForRoute(e){return e.data[ri]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>c(Yl)})}return n})(),Yl=(()=>{class n extends ga{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(x(ll))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),gn=new v("",{factory:()=>({})}),si=new v(""),Xl=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(Is);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await yl(ve(e,()=>t.loadComponent())),a=await Jl(xo(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Ql(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();async function Ql(n,i,e,t){let r=await yl(ve(e,()=>n.loadChildren())),o=await Jl(xo(r)),a;o instanceof ws||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),t&&t(n);let l,s,d=!1,u;return Array.isArray(a)?(s=a,d=!0):(l=a.create(e).injector,u=a,s=l.get(si,[],{optional:!0,self:!0}).flat()),{routes:s.map(pa),injector:l,factory:u}}async function Jl(n){return n}var yr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>c(vm)})}return n})(),vm=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),ec=new v("");var bm=()=>{},tc=new v(""),nc=(()=>{class n{currentNavigation=N(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=N(null);events=new T;transitionAbortWithErrorSubject=new T;configLoader=c(Xl);environmentInjector=c(xe);destroyRef=c(ke);urlSerializer=c(mn);rootContexts=c(hn);location=c(en);inputBindingEnabled=c(vr,{optional:!0})!==null;titleStrategy=c(ga);options=c(gn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Cf;urlHandlingStrategy=c(yr);createViewTransition=c(ec,{optional:!0});navigationErrorHandler=c(tc,{optional:!0});routerResourcesFeature=c(Zl,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>_(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new ar(r)),t=r=>this.events.next(new sr(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;A(()=>{this.transitions?.next(z(p({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ce(null),this.transitions.pipe(ne(t=>t!==null),Ie(t=>{let r=!0,o=!1,a=new AbortController,l=()=>!o&&this.currentTransition?.id===t.id;return _(t).pipe(Ie(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",fe.SupersededByNewNavigation),ce;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:d?z(p({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),b=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&b!=="reload")return this.events.next(new st(s.id,this.urlSerializer.serialize(s.rawUrl),"",Xn.IgnoredSameUrlNavigation)),s.resolve(!1),ce;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return _(s).pipe(Ie(y=>(this.events.next(new It(y.id,this.urlSerializer.serialize(y.extractedUrl),y.source,y.restoredState)),y.id!==this.navigationId?ce:Promise.resolve(y))),fm(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),oe(y=>{t.targetSnapshot=y.targetSnapshot,t.urlAfterRedirects=y.urlAfterRedirects,this.currentNavigation.update(B=>(B.finalUrl=y.urlAfterRedirects,B)),this.events.next(new Jn)}),Ie(y=>ge(t.routesRecognizeHandler.deferredHandle??_(void 0)).pipe(F(()=>y))),oe(()=>{let y=new Qn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:y,extractedUrl:B,source:ee,restoredState:te,extras:J}=s,Pe=new It(y,this.urlSerializer.serialize(B),ee,te);this.events.next(Pe);let he=Ol(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=z(p({},s),{targetSnapshot:he,urlAfterRedirects:B,extras:z(p({},J),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(pe=>(pe.finalUrl=B,pe)),_(t)}else return this.events.next(new st(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Xn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ce}),F(s=>{let d=new nr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(d),this.currentTransition=t=z(p({},s),{guards:Mf(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Uf(s=>this.events.next(s)),Ie(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw hr(this.urlSerializer,s.guardsResult);let d=new ir(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(d),!l())return ce;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",fe.GuardRejected),ce;if(s.guards.canActivateChecks.length===0)return _(s);let u=new rr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!l())return ce;let b=!1;return _(s).pipe(mm(this.paramsInheritanceStrategy),oe({next:()=>{b=!0;let y=new or(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)},complete:()=>{b||this.cancelNavigationTransition(s,"",fe.NoDataFromResolver)}}))}),ca(s=>{let d=b=>{let y=[];if(b.routeConfig?._loadedComponent)b.component=b.routeConfig?._loadedComponent;else if(b.routeConfig?.loadComponent){let B=b._environmentInjector;y.push(this.configLoader.loadComponent(B,b.routeConfig).then(ee=>{b.component=ee}))}for(let B of b.children)y.push(...d(B));return y},u=d(s.targetSnapshot.root);return u.length===0?_(s):ge(Promise.all(u).then(()=>s))}),Ie(s=>{let{newlyCreatedRoutes:d,state:u}=xf(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=t=s=z(p({},s),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(b=>(b.targetRouterState=u,b)),_(s)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(s=>s),ca(()=>this.afterPreactivation()),Ie(()=>{let{currentSnapshot:s,targetSnapshot:d}=t,u=this.createViewTransition?.(this.environmentInjector,s.root,d.root);return u?ge(u).pipe(F(()=>t)):_(t)}),Ge(1),Ie(s=>{r=!1,this.events.next(new ln);let d=t.beforeActivateHandler.deferredHandle;return d?ge(d.then(()=>s)):_(s)}),oe(s=>{new ra(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),l()&&(ic(s.targetRouterState),o=!0,this.currentNavigation.update(d=>(d.abort=bm,d)),this.lastSuccessfulNavigation.set(A(this.currentNavigation)),this.events.next(new ze(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),qe(zl(a.signal).pipe(ne(()=>!o&&r),oe(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",fe.Aborted)}))),oe({complete:()=>{o=!0}}),qe(this.transitionAbortWithErrorSubject.pipe(oe(s=>{throw s}))),Bt(()=>{a.abort(),o||this.cancelNavigationTransition(t,"",fe.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Vt(s=>{if(o=!0,pl(t),this.destroyed)return t.resolve(!1),ce;if(Bl(s))this.events.next(new Fe(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Nf(s)?this.events.next(new cn(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let d=new Tt(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let u=ve(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof un){let{message:b,cancellationCode:y}=hr(this.urlSerializer,u);this.events.next(new Fe(t.id,this.urlSerializer.serialize(t.extractedUrl),b,y)),this.events.next(new cn(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),s}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return ce}))}))}cancelNavigationTransition(e,t,r){pl(e);let o=new Fe(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=A(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function ym(n){return n!==Kn}function pl(n){for(let i of n.newlyCreatedRoutes??[])i._localInjector?.destroy(),i._localInjector=void 0;ic(n.targetRouterState)}function ic(n){if(!n)return;let i=e=>{e.value.pending?.set(!1),e.children.forEach(i)};i(n._root)}var rc=new v("");var oc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>c(_m)})}return n})(),gr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},_m=(()=>{class n extends gr{static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),_r=(()=>{class n{urlSerializer=c(mn);options=c(gn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(en);urlHandlingStrategy=c(yr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Se;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof Se?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Ol(null,c(xe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>c(Sm)})}return n})(),Sm=(()=>{class n extends _r{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof It?this.updateStateMemento():e instanceof st?this.commitTransition(t):e instanceof Qn?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof ln?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Fe&&!Fl(e)?this.restoreHistory(t):e instanceof Tt?this.restoreHistory(t,!0):e instanceof ze&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:l}=r;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,d=p(p({},l),this.generateNgRouterState(o,s,t));this.location.replaceState(e,"",d)}else{let s=p(p({},l),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?p({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):p({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function va(n,i){n.events.pipe(ne(e=>e instanceof ze||e instanceof Fe||e instanceof Tt||e instanceof st),F(e=>e instanceof ze||e instanceof st?0:(e instanceof Fe?e.code===fe.Redirect||e.code===fe.SupersededByNewNavigation:!1)?2:1),ne(e=>e!==2),Ge(1)).subscribe(()=>{i()})}var Ot=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(yo);stateManager=c(_r);options=c(gn,{optional:!0})||{};pendingTasks=c(us);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(nc);urlSerializer=c(mn);location=c(en);urlHandlingStrategy=c(yr);injector=c(xe);_events=new T;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(oc);injectorCleanup=c(rc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(si,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(vr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new De;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=A(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof Fe&&t.code!==fe.Redirect&&t.code!==fe.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof ze)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof cn){let a=t.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),s=p({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ym(r.source)},a);this.scheduleNavigation(l,Kn,null,s,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Sf(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Kn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,l=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=z(p({},o),{browserUrl:e})),r){let d=p({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let s=this.parseUrl(l);this.scheduleNavigation(s,t,a,o).catch(d=>{this.disposed||this.injector.get(Rn)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return A(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(pa),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:l,preserveFragment:s}=t,d=s?this.currentUrlTree.fragment:a,u=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":u=p(p({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let b;try{let y=r?r.snapshot:this.routerState.snapshot.root;b=Al(y)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),b=this.currentUrlTree.root}return Rl(b,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=_t(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Kn,null,t)}navigate(e,t={skipLocationChange:!1}){return Dm(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(zt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=p({},da):t===!1?r=p({},sn):r=p(p({},sn),t),_t(e))return Yo(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Yo(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let l,s,d;a?(l=a.resolve,s=a.reject,d=a.promise):d=new Promise((b,y)=>{l=b,s=y});let u=this.pendingTasks.add();return va(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:l,reject:s,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function Dm(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new S(4008,!1)}var wm=(()=>{class n{router=c(Ot);stateManager=c(_r);fragment=N("");queryParams=N({});path=N("");serializer=c(mn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof ze&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Se(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),vn=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new Xt("href"),{optional:!0});reactiveHref=Co(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return A(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return A(this._target)}_target=N(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return A(this._queryParams)}_queryParams=N(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return A(this._fragment)}_fragment=N(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return A(this._queryParamsHandling)}_queryParamsHandling=N(void 0);set state(e){this._state.set(e)}get state(){return A(this._state)}_state=N(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return A(this._info)}_info=N(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return A(this._relativeTo)}_relativeTo=N(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return A(this._preserveFragment)}_preserveFragment=N(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return A(this._skipLocationChange)}_skipLocationChange=N(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return A(this._replaceUrl)}_replaceUrl=N(!1);browserUrl=Et(void 0);isAnchorElement;onChanges=new T;applicationErrorHandler=c(Rn);options=c(gn,{optional:!0});reactiveRouterState=c(wm);constructor(e,t,r,o,a,l){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=l;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s==="a"||s==="area"||!!(typeof customElements=="object"&&customElements.get(s)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=N(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(_t(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let l=this._urlTree();if(l===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let s=this.browserUrl(),d=p({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(l,d)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=X(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:_t(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return A(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(K(Ot),K(lt),ho("tabindex"),K(ae),K(k),K(Jt))};static \u0275dir=C({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&ue("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&ie("href",r.reactiveHref(),Cs)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Q],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Q],replaceUrl:[2,"replaceUrl","replaceUrl",Q],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[de]})}return n})(),ba=(()=>{class n{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new W;link=c(vn,{optional:!0});constructor(e,t,r,o){this.router=e,this.element=t,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof ze&&this.update()})}ngAfterContentInit(){_(this.links.changes,_(null)).pipe(lo()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=ge(e).pipe(lo()).subscribe(t=>{this._isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let t=Array.isArray(e)?e:e.split(" ");this.classes=t.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let t=this.routerLinkActiveOptions;if(t===null)return()=>!1;let r;return t===void 0?r=p({},sn):Em(t)?r=t:t.exact??!1?r=p({},da):r=p({},sn),o=>{let a=o.urlTree;return a?A(ua(a,e,r)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(t){return new(t||n)(K(Ot),K(k),K(ae),K(Ne))};static \u0275dir=C({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(t,r,o){if(t&1&&it(o,vn,5),t&2){let a;Z(a=Y())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[de]})}return n})();function Em(n){let i=n;return!!(i.paths||i.matrixParams||i.queryParams||i.fragment)}var Nm=new v("");function ya(n,...i){return Je([{provide:si,multi:!0,useValue:n},{provide:lt,useFactory:Mm},{provide:_o,multi:!0,useFactory:Am},i.map(e=>e.\u0275providers)])}function Mm(){return c(Ot).routerState.root}function Am(){let n=c(be);return i=>{let e=n.get(Zt);if(i!==e.components[0])return;let t=n.get(Ot),r=n.get(Rm);n.get(Im)===1&&t.initialNavigation(),n.get(Tm,null,{optional:!0})?.setUpPreloading(),n.get(Nm,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Rm=new v("",{factory:()=>new T}),Im=new v("",{factory:()=>1});var Tm=new v("");var Fm="@",Om=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(be);loadingSchedulerFn=c(Pm,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-MUSCNQ22.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new S(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new _a(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let l=a.createRenderer(e,t);o.use(l),this.scheduler??=this.injector.get(hs,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Fi()};static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})(),_a=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(Fm)}},Pm=new v("");function ac(n="animations"){return go("NgAsyncAnimations"),Je([{provide:We,useFactory:()=>new Om(c(M),c(zn),c(P),n)},{provide:Ri,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Sr(n,i){let t=!i?.manualCleanup?i?.injector?.get(ke)??c(ke):null,r=Lm(i?.equal),o;i?.requireSync?o=N({kind:0},{equal:r}):o=N({kind:1,value:i?.initialValue},{equal:r});let a,l=n.subscribe({next:s=>o.set({kind:1,value:s}),error:s=>{o.set({kind:2,error:s}),a?.()},complete:()=>{a?.()}});if(i?.requireSync&&o().kind===0)throw new S(601,!1);return a=t?.onDestroy(l.unsubscribe.bind(l)),X(()=>{let s=o();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new S(601,!1)}},{equal:i?.equal})}function Lm(n=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&n(i.value,e.value)}var Sa;try{Sa=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Sa=!1}var le=(()=>{class n{_platformId=c(Ht);isBrowser=this._platformId?Us(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Sa)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Da;function sc(){if(Da==null){let n=typeof document<"u"?document.head:null;Da=!!(n&&(n.createShadowRoot||n.attachShadow))}return Da}function Ca(n){if(sc()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function He(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var li;function lc(){if(li==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>li=!0}))}finally{li=li||!1}return li}function bn(n){return lc()?n:!!n.capture}var yn,cc=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function xa(){if(yn)return yn;if(typeof document!="object"||!document)return yn=new Set(cc),yn;let n=document.createElement("input");return yn=new Set(cc.filter(i=>(n.setAttribute("type",i),n.type===i))),yn}var Vm=new v("cdk-dir-doc",{providedIn:"root",factory:()=>c(M)}),Um=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function dc(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Um.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var wa=(()=>{class n{get value(){return this.valueSignal()}valueSignal=N("ltr");change=new W;constructor(){let e=c(Vm,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(dc(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var me=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();var Bm=["*",[["mat-toolbar-row"]]],jm=["*","mat-toolbar-row"],zm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Dr=(()=>{class n{_elementRef=c(k);_platform=c(le);_document=c(M);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&it(o,zm,5),t&2){let a;Z(a=Y())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(Yt(r.color?"mat-"+r.color:""),j("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:jm,decls:2,vars:0,template:function(t,r){t&1&&(_e(Bm),V(0),V(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return n})();var Cr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[me]})}return n})();function ci(n){return n.buttons===0||n.detail===0}function di(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}function $e(n){return n instanceof k?n.nativeElement:n}var fc=new v("cdk-input-modality-detector-options"),mc={ignoreKeys:[18,17,224,91,16]},hc=650,Ea={passive:!0,capture:!0},pc=(()=>{class n{_platform=c(le);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ce(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=He(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<hc||(this._modality.next(ci(e)?"keyboard":"mouse"),this._mostRecentTarget=He(e))};_onTouchstart=e=>{if(di(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=He(e)};constructor(){let e=c(P),t=c(M),r=c(fc,{optional:!0});if(this._options=p(p({},mc),r),this.modalityDetected=this._modality.pipe(ss(1)),this.modalityChanged=this.modalityDetected.pipe(rs()),this._platform.isBrowser){let o=c(We).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Ea),o.listen(t,"mousedown",this._onMousedown,Ea),o.listen(t,"touchstart",this._onTouchstart,Ea)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),ui=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(ui||{}),gc=new v("cdk-focus-monitor-default-options"),xr=bn({passive:!0,capture:!0}),fi=(()=>{class n{_ngZone=c(P);_platform=c(le);_inputModalityDetector=c(pc);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(M);_stopInputModalityDetector=new T;constructor(){let e=c(gc,{optional:!0});this._detectionMode=e?.detectionMode||ui.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=He(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=$e(e);if(!this._platform.isBrowser||r.nodeType!==1)return _();let o=Ca(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let l={checkChildren:t,subject:new T,rootNode:o};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=$e(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=$e(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([l,s])=>this._originChanged(l,t,s)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ui.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===ui.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?hc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=He(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,xr),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,xr)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(qe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,xr),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,xr),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var wr=new WeakMap,ct=(()=>{class n{_appRef;_injector=c(be);_environmentInjector=c(xe);load(e){let t=this._appRef=this._appRef||this._injector.get(Zt),r=wr.get(t);r||(r={loaders:new Set,refs:[]},wr.set(t,r),t.onDestroy(()=>{wr.get(t)?.refs.forEach(o=>o.destroy()),wr.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Eo(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Er;function Hm(){if(Er===void 0&&(Er=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{Er=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return Er}function _n(n){return Hm()?.createHTML(n)||n}var vc=new Set,Pt,Na=(()=>{class n{_platform=c(le);_nonce=c(wt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Gm}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&$m(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function $m(n,i){if(!vc.has(n))try{Pt||(Pt=document.createElement("style"),i&&Pt.setAttribute("nonce",i),Pt.setAttribute("type","text/css"),document.head.appendChild(Pt)),Pt.sheet&&(Pt.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),vc.add(n))}catch(e){console.error(e)}}function Gm(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var qm=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var bc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({providers:[qm]})}return n})();var Wm=200,Nr=class{_letterKeyStream=new T;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new T;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Wm;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(oe(e=>this._pressedLetters.push(e)),is(i),ne(()=>this._pressedLetters.length>0),F(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Mr(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Ar=class{_items;_activeItemIndex=N(-1);_activeItem=N(null);_wrap=!1;_typeaheadSubscription=De.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Tn?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):ht(i)&&(this._effectRef=Le(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new T;change=new T;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Nr(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Mr(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return ht(this._items)?this._items():this._items instanceof Tn?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var mi=class extends Ar{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var yc=new Map,Re=class n{_appId=c(In);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=yc.get(i);return t===void 0?t=0:t++,yc.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})};function Sn(n){return n!=null&&`${n}`!="false"}var Ma=class{_box;_destroyed=new T;_resizeSubject=new T;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Lt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(ne(e=>e.some(t=>t.target===i)),jt({bufferSize:1,refCount:!0}),qe(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},_c=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=c(P);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Ma(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Zm=new v("MATERIAL_ANIMATIONS"),Sc=null;function Ym(){return c(Zm,{optional:!0})?.animationsDisabled||c(Ri,{optional:!0})==="NoopAnimations"?"di-disabled":(Sc??=c(Na).matchMedia("(prefers-reduced-motion)").matches,Sc?"reduced-motion":"enabled")}function St(){return Ym()!=="enabled"}var Xm=["notch"],Qm=["*"],Dc=["iconPrefixContainer"],Cc=["textPrefixContainer"],xc=["iconSuffixContainer"],wc=["textSuffixContainer"],Jm=["textField"],eh=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],th=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function nh(n,i){n&1&&tt(0,"span",21)}function ih(n,i){if(n&1&&(m(0,"label",20),V(1,1),$(2,nh,1,0,"span",21),f()),n&2){let e=q(2);Ee("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ie("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),G(!e.hideRequiredMarker&&e._control.required?2:-1)}}function rh(n,i){if(n&1&&$(0,ih,3,5,"label",20),n&2){let e=q();G(e._hasFloatingLabel()?0:-1)}}function oh(n,i){n&1&&tt(0,"div",7)}function ah(n,i){}function sh(n,i){if(n&1&&Kt(0,ah,0,0,"ng-template",13),n&2){q(2);let e=Pn(1);Ee("ngTemplateOutlet",e)}}function lh(n,i){if(n&1&&(m(0,"div",9),$(1,sh,1,1,null,13),f()),n&2){let e=q();Ee("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),G(e._forceDisplayInfixLabel()?-1:1)}}function ch(n,i){n&1&&(m(0,"div",10,2),V(2,2),f())}function dh(n,i){n&1&&(m(0,"div",11,3),V(2,3),f())}function uh(n,i){}function fh(n,i){if(n&1&&Kt(0,uh,0,0,"ng-template",13),n&2){q();let e=Pn(1);Ee("ngTemplateOutlet",e)}}function mh(n,i){n&1&&(m(0,"div",14,4),V(2,4),f())}function hh(n,i){n&1&&(m(0,"div",15,5),V(2,5),f())}function ph(n,i){n&1&&tt(0,"div",16)}function gh(n,i){n&1&&(m(0,"div",18),V(1,6),f())}function vh(n,i){if(n&1&&(m(0,"mat-hint",22),g(1),f()),n&2){let e=q(2);Ee("id",e._hintLabelId),h(),I(e.hintLabel)}}function bh(n,i){if(n&1&&(m(0,"div",19),$(1,vh,2,2,"mat-hint",22),V(2,7),tt(3,"div",23),V(4,8),f()),n&2){let e=q();h(),G(e.hintLabel?1:-1)}}var hi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-label"]]})}return n})(),yh=new v("MatError");var Aa=(()=>{class n{align="start";id=c(Re).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Oi("id",r.id),ie("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Tc=new v("MatPrefix"),Ra=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[se([{provide:Tc,useExisting:n}])]})}return n})(),_h=new v("MatSuffix");var Fc=new v("FloatingLabelParent"),Ec=(()=>{class n{_elementRef=c(k);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(_c);_ngZone=c(P);_parent=c(Fc);_resizeSubscription=new De;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Sh(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Sh(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Nc="mdc-line-ripple--active",Rr="mdc-line-ripple--deactivating",Mc=(()=>{class n{_elementRef=c(k);_cleanupTransitionEnd;constructor(){let e=c(P),t=c(ae);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Rr),e.add(Nc)}deactivate(){this._elementRef.nativeElement.classList.add(Rr)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Rr);e.propertyName==="opacity"&&r&&t.remove(Nc,Rr)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Ac=(()=>{class n{_elementRef=c(k);_ngZone=c(P);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&On(Xm,5),t&2){let o;Z(o=Y())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:Qm,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(_e(),nt(0,"div",1),Ve(1,"div",2,0),V(3),Ye(),nt(4,"div",3))},encapsulation:2})}return n})(),Ia=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n})}return n})();var Ta=new v("MatFormField"),Dh=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Rc="fill",Ch="auto",Ic="fixed",xh="translateY(-50%)",Ir=(()=>{class n{_elementRef=c(k);_changeDetectorRef=c(Ne);_platform=c(le);_idGenerator=c(Re);_ngZone=c(P);_defaults=c(Dh,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=kn("iconPrefixContainer");_textPrefixContainerSignal=kn("textPrefixContainer");_iconSuffixContainerSignal=kn("iconSuffixContainer");_textSuffixContainerSignal=kn("textSuffixContainer");_prefixSuffixContainers=X(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ts(hi);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Sn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ch}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Rc;this._appearanceSignal.set(t)}_appearanceSignal=N(Rc);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ic}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ic}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new T;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=St();constructor(){let e=this._defaults,t=c(wa);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Le(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=X(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ct([void 0,void 0]),F(()=>[t.errorState,t.userAriaDescribedBy]),os(),ne(([[o,a],[l,s]])=>o!==l||a!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(qe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ai(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){wo({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=X(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",b=`${a+l}px`,B=`calc(${u} * (${b} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ee=`var(--mat-mdc-form-field-label-transform, ${xh} translateX(${B}))`,te=a+l+s+d;return[ee,te]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Es(o,r._labelChild,hi,5),it(o,Ia,5)(o,Tc,5)(o,_h,5)(o,yh,5)(o,Aa,5)),t&2){Do();let a;Z(a=Y())&&(r._formFieldControl=a.first),Z(a=Y())&&(r._prefixChildren=a),Z(a=Y())&&(r._suffixChildren=a),Z(a=Y())&&(r._errorChildren=a),Z(a=Y())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(Ns(r._iconPrefixContainerSignal,Dc,5)(r._textPrefixContainerSignal,Cc,5)(r._iconSuffixContainerSignal,xc,5)(r._textSuffixContainerSignal,wc,5),On(Jm,5)(Dc,5)(Cc,5)(xc,5)(wc,5)(Ec,5)(Ac,5)(Mc,5)),t&2){Do(4);let o;Z(o=Y())&&(r._textField=o.first),Z(o=Y())&&(r._iconPrefixContainer=o.first),Z(o=Y())&&(r._textPrefixContainer=o.first),Z(o=Y())&&(r._iconSuffixContainer=o.first),Z(o=Y())&&(r._textSuffixContainer=o.first),Z(o=Y())&&(r._floatingLabel=o.first),Z(o=Y())&&(r._notchedOutline=o.first),Z(o=Y())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[se([{provide:Ta,useExisting:n},{provide:Fc,useExisting:n}])],ngContentSelectors:th,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(_e(eh),Kt(0,rh,1,1,"ng-template",null,0,Rs),m(2,"div",6,1),ue("click",function(a){return r._control.onContainerClick(a)}),$(4,oh,1,0,"div",7),m(5,"div",8),$(6,lh,2,2,"div",9),$(7,ch,3,0,"div",10),$(8,dh,3,0,"div",11),m(9,"div",12),$(10,fh,1,1,null,13),V(11),f(),$(12,mh,3,0,"div",14),$(13,hh,3,0,"div",15),f(),$(14,ph,1,0,"div",16),f(),m(15,"div",17),$(16,gh,2,0,"div",18)(17,bh,5,1,"div",19),f()),t&2){let o;h(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),h(2),G(!r._hasOutline()&&!r._control.disabled?4:-1),h(2),G(r._hasOutline()?6:-1),h(),G(r._hasIconPrefix?7:-1),h(),G(r._hasTextPrefix?8:-1),h(2),G(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),h(2),G(r._hasTextSuffix?12:-1),h(),G(r._hasIconSuffix?13:-1),h(),G(r._hasOutline()?-1:14),h(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();h(),G((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Ec,Ac,Mo,Mc,Aa],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var pi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[bc,Ir,me]})}return n})();var Eh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})(),Nh={passive:!0},Oc=(()=>{class n{_platform=c(le);_ngZone=c(P);_renderer=c(We).createRenderer(null,null);_styleLoader=c(ct);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return ce;this._styleLoader.load(Eh);let t=$e(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new T,a="cdk-text-field-autofilled",l=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},s=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Nh)));return this._monitoredElements.set(t,{subject:o,unlisten:s}),o}stopMonitoring(e){let t=$e(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Pc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();var zc=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(K(ae),K(k))};static \u0275dir=C({type:n})}return n})(),Mh=(()=>{class n extends zc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=et(n)))(r||n)}})();static \u0275dir=C({type:n,features:[ye]})}return n})(),Ah=new v("");var Rh={provide:Ah,useExisting:An(()=>Hc),multi:!0};function Ih(){let n=Te()?Te().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Th=new v(""),Hc=(()=>{class n extends zc{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Ih())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(K(ae),K(k),K(Th,8))};static \u0275dir=C({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&ue("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[se([Rh]),ye]})}return n})();function Pa(n){return n==null||ka(n)===0}function ka(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var La=new v(""),$c=new v(""),Fh=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Si=class{static min(i){return Oh(i)}static max(i){return Ph(i)}static required(i){return Gc(i)}static requiredTrue(i){return kh(i)}static email(i){return Lh(i)}static minLength(i){return Vh(i)}static maxLength(i){return Uh(i)}static pattern(i){return Bh(i)}static nullValidator(i){return Fr()}static compose(i){return Xc(i)}static composeAsync(i){return Qc(i)}};function Oh(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function Ph(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function Gc(n){return Pa(n.value)?{required:!0}:null}function kh(n){return n.value===!0?null:{required:!0}}function Lh(n){return Pa(n.value)||Fh.test(n.value)?null:{email:!0}}function Vh(n){return i=>{let e=i.value?.length??ka(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Uh(n){return i=>{let e=i.value?.length??ka(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Bh(n){if(!n)return Fr;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(Pa(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Fr(n){return null}function qc(n){return n!=null}function Wc(n){return Wt(n)?ge(n):n}function Kc(n){let i={};return n.forEach(e=>{i=e!=null?p(p({},i),e):i}),Object.keys(i).length===0?null:i}function Zc(n,i){return i.map(e=>e(n))}function jh(n){return!n.validate}function Yc(n){return n.map(i=>jh(i)?i:e=>i.validate(e))}function Xc(n){if(!n)return null;let i=n.filter(qc);return i.length==0?null:function(e){return Kc(Zc(e,i))}}function Va(n){return n!=null?Xc(Yc(n)):null}function Qc(n){if(!n)return null;let i=n.filter(qc);return i.length==0?null:function(e){let t=Zc(e,i).map(Wc);return Mi(t).pipe(F(Kc))}}function Ua(n){return n!=null?Qc(Yc(n)):null}function kc(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function Jc(n){return n._rawValidators}function ed(n){return n._rawAsyncValidators}function Fa(n){return n?Array.isArray(n)?n:[n]:[]}function Or(n,i){return Array.isArray(n)?n.includes(i):n===i}function Lc(n,i){let e=Fa(i);return Fa(n).forEach(r=>{Or(e,r)||e.push(r)}),e}function Vc(n,i){return Fa(i).filter(e=>!Or(n,e))}var Pr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Va(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Ua(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},xn=class extends Pr{name;get formDirective(){return null}get path(){return null}};var gi="VALID",Tr="INVALID",Dn="PENDING",vi="DISABLED",Dt=class{},kr=class extends Dt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},yi=class extends Dt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},_i=class extends Dt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Cn=class extends Dt{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Lr=class extends Dt{source;constructor(i){super(),this.source=i}},wn=class extends Dt{source;constructor(i){super(),this.source=i}};function td(n){return(Hr(n)?n.validators:n)||null}function zh(n){return Array.isArray(n)?Va(n):n||null}function nd(n,i){return(Hr(i)?i.asyncValidators:n)||null}function Hh(n){return Array.isArray(n)?Ua(n):n||null}function Hr(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function $h(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new S(1e3,"");if(!id(t,e))throw new S(1001,"")}function Gh(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new S(-1002,"")})}var Vr=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=N(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return A(this.statusReactive)}set status(i){A(()=>this.statusReactive.set(i))}_status=X(()=>this.statusReactive());statusReactive=N(void 0);get valid(){return this.status===gi}get invalid(){return this.status===Tr}get pending(){return this.status===Dn}get disabled(){return this.status===vi}get enabled(){return this.status!==vi}errors;get pristine(){return A(this.pristineReactive)}set pristine(i){A(()=>this.pristineReactive.set(i))}_pristine=X(()=>this.pristineReactive());pristineReactive=N(!0);get dirty(){return!this.pristine}get touched(){return A(this.touchedReactive)}set touched(i){A(()=>this.touchedReactive.set(i))}_touched=X(()=>this.touchedReactive());touchedReactive=N(!1);get untouched(){return!this.touched}_events=new T;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Lc(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Lc(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Vc(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Vc(i,this._rawAsyncValidators))}hasValidator(i){return Or(this._rawValidators,i)}hasAsyncValidator(i){return Or(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(z(p({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new _i(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new _i(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(z(p({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new yi(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new yi(!0,t))}markAsPending(i={}){this.status=Dn;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Cn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(z(p({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=vi,this.errors=null,this._forEachChild(r=>{r.disable(z(p({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new kr(this.value,t)),this._events.next(new Cn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(z(p({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=gi,this._forEachChild(t=>{t.enable(z(p({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(z(p({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===gi||this.status===Dn)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new kr(this.value,e)),this._events.next(new Cn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(z(p({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?vi:gi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Dn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Wc(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Cn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?vi:this.errors?Tr:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Dn)?Dn:this._anyControlsHaveStatus(Tr)?Tr:gi}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new yi(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new _i(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Hr(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=zh(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Hh(this._rawAsyncValidators)}_updateHasRequiredValidator(){A(()=>this._hasRequired.set(this.hasValidator(Si.required)))}};function id(n,i){return Object.hasOwn(n,i)}function qh(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function Wh(n,i,e,t){switch(e){case"name":n.setAttribute(i,e,t);break;case"disabled":case"readonly":case"required":t?n.setAttribute(i,e,""):n.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?n.setAttribute(i,e,t.toString()):n.removeAttribute(i,e);break}}var Oa=class{kind;context;control;message;constructor({kind:i,context:e,control:t}){this.kind=i,this.context=e,this.control=t}};var Kh=(()=>{class n{_validator=Fr;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Fr,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,features:[de]})}return n})();var Zh={provide:La,useExisting:An(()=>rd),multi:!0};var rd=(()=>{class n extends Kh{required;inputName="required";normalizeInput=Q;createValidator=e=>Gc;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=et(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&ie("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[se([Zh]),ye]})}return n})();var od=new v("",{factory:()=>Yh}),Yh="always";function Uc(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),Br(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Ur(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function ad(n,i){let e=Jc(n);i.validator!==null?n.setValidators(kc(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=ed(n);i.asyncValidator!==null?n.setAsyncValidators(kc(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();Ur(i._rawValidators,r),Ur(i._rawAsyncValidators,r)}function Br(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=Jc(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=ed(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return Ur(i._rawValidators,t),Ur(i._rawAsyncValidators,t),e}function sd(n,i){n==null,ad(n,i)}function Xh(n,i){return Br(n,i)}function Qh(n){return Object.getPrototypeOf(n.constructor)===Mh}function ld(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Jh(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(o=>{o.constructor===Hc?e=o:Qh(o)?t=o:r=o}),r||t||e||null}function ep(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var jr=class extends Pr{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof wn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Jh(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,t){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(ke)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(Ne);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new De,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof wn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=qh(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof rd))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let t=this.control,r=this.customControlBindings;Object.is(r.value,t.value)||(r.value=t.value,i.setCustomControlModelInput(t.value)),this.bindControlProperty(i,r,"touched",t.touched),this.bindControlProperty(i,r,"dirty",t.dirty),this.bindControlProperty(i,r,"valid",t.valid),this.bindControlProperty(i,r,"invalid",t.invalid),this.bindControlProperty(i,r,"pending",t.pending),this.bindControlProperty(i,r,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(i,r,"required",this.isRequired);let o=t.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);i.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,t,r){if(e[t]===r)return;e[t]=r;let o=i.setInputOnDirectives(t,r);this.isNativeFormElement&&!o&&(t==="disabled"||t==="required")&&this.renderer&&Wh(this.renderer,i.nativeElement,t,r)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([t,r])=>new Oa({context:r,kind:t,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,t=X(()=>{let r=i();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Le(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}};var zr=class extends Vr{constructor(i,e,t){super(td(e),nd(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let t=this._find(i);return t||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let t=this._find(i);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){let r=this._find(i);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){A(()=>{Gh(this,!0,i),Object.keys(i).forEach(t=>{$h(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this._find(t);r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,z(p({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new wn(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return id(this.controls,i)?this.controls[i]:null}};var tp={provide:xn,useExisting:An(()=>Ba)},bi=Promise.resolve(),Ba=(()=>{class n extends xn{callSetDisabledState;get submitted(){return A(this.submittedReactive)}_submitted=X(()=>this.submittedReactive());submittedReactive=N(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new zr({},Va(e),Ua(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){bi.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){bi.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){bi.then(()=>{let t=this._findContainer(e.path),r=new zr({});sd(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){bi.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){bi.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ld(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Lr(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(K(La,10),K($c,10),K(od,8))};static \u0275dir=C({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&ue("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[se([tp]),ye]})}return n})();function Bc(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function jc(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var np=class extends Vr{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(td(e),nd(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Hr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(jc(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){A(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new wn(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Bc(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Bc(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){jc(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var ip=n=>n instanceof np;var rp=(()=>{class n extends xn{callSetDisabledState;get submitted(){return A(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=X(()=>this._submittedReactive());_submittedReactive=N(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Br(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Uc(e.control||null,e,!1),ep(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ld(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Lr(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Uc(t||null,e),ip(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);sd(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Xh(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ad(this.form,this),this._oldForm&&Br(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(K(La,10),K($c,10),K(od,8))};static \u0275dir=C({type:n,features:[ye,de]})}return n})(),op={provide:xn,useExisting:An(()=>ja)},ja=(()=>{class n extends rp{form=null;ngSubmit=new W;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=et(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&ue("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[se([op]),ye]})}return n})();var cd=new v("");var dd=new v("MAT_INPUT_VALUE_ACCESSOR");var ud=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var $r=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,r,o){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o,e?ht(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var ap=["button","checkbox","file","hidden","image","radio","range","reset","submit"],sp=new v("MAT_INPUT_CONFIG"),fd=(()=>{class n{_elementRef=c(k);_platform=c(le);ngControl=c(jr,{optional:!0,self:!0});_autofillMonitor=c(Oc);_ngZone=c(P);_formField=c(Ta,{optional:!0});_renderer=c(ae);_uid=c(Re).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(sp,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new T;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Sn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Si.required)??!1}set required(e){this._required=Sn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&xa().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Sn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>xa().has(e));constructor(){let e=c(Ba,{optional:!0}),t=c(ja,{optional:!0}),r=c(ud),o=c(dd,{optional:!0,self:!0}),a=c(cd,{optional:!0,self:!0}),l=this._elementRef.nativeElement,s=l.nodeName.toLowerCase();o?ht(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new $r(r,a||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Le(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ap.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&ue("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Oi("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ie("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Q]},exportAs:["matInput"],features:[se([{provide:Ia,useExisting:n}]),de]})}return n})(),md=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[pi,pi,Pc,me]})}return n})();var cp=["*"];var dp=new v("MAT_CARD_CONFIG"),Gr=(()=>{class n{appearance;constructor(){let e=c(dp,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:cp,decls:1,vars:0,template:function(t,r){t&1&&(_e(),V(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return n})();var hd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var qr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[me]})}return n})();var Oe=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Oe||{}),za=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Oe.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},gd=bn({passive:!0,capture:!0}),Ha=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,gd)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,gd)))}_delegateEventHandler=i=>{let e=He(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Di={enterDuration:225,exitDuration:150},up=800,vd=bn({passive:!0,capture:!0}),bd=["mousedown","touchstart"],yd=["mouseup","mouseleave","touchend","touchcancel"],fp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),Wr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ha;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=$e(t)),o&&o.get(ct).load(fp)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=p(p({},Di),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||mp(i,e,r),l=i-r.left,s=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${l-a}px`,u.style.top=`${s-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let b=window.getComputedStyle(u),y=b.transitionProperty,B=b.transitionDuration,ee=y==="none"||B==="0s"||B==="0s, 0s"||r.width===0&&r.height===0,te=new za(this,u,t,ee);u.style.transform="scale3d(1, 1, 1)",te.state=Oe.FADING_IN,t.persistent||(this._mostRecentTransientRipple=te);let J=null;return!ee&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Pe=()=>{J&&(J.fallbackTimer=null),clearTimeout(pe),this._finishRippleTransition(te)},he=()=>this._destroyRipple(te),pe=setTimeout(he,d+100);u.addEventListener("transitionend",Pe),u.addEventListener("transitioncancel",he),J={onTransitionEnd:Pe,onTransitionCancel:he,fallbackTimer:pe}}),this._activeRipples.set(te,J),(ee||!d)&&this._finishRippleTransition(te),te}fadeOutRipple(i){if(i.state===Oe.FADING_OUT||i.state===Oe.HIDDEN)return;let e=i.element,t=p(p({},Di),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Oe.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=$e(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,bd.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{yd.forEach(e=>{this._triggerElement.addEventListener(e,this,vd)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Oe.FADING_IN?this._startFadeOutTransition(i):i.state===Oe.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Oe.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Oe.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=ci(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+up;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!di(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Oe.VISIBLE||i.config.terminateOnPointerUp&&i.state===Oe.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(bd.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(yd.forEach(e=>i.removeEventListener(e,this,vd)),this._pointerUpEventsRegistered=!1))}};function mp(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var _d=new v("mat-ripple-global-options");var hp={capture:!0},pp=["focus","mousedown","mouseenter","touchstart"],$a="mat-ripple-loader-uninitialized",Ga="mat-ripple-loader-class-name",Sd="mat-ripple-loader-centered",Kr="mat-ripple-loader-disabled",Dd=(()=>{class n{_document=c(M);_animationsDisabled=St();_globalRippleOptions=c(_d,{optional:!0});_platform=c(le);_ngZone=c(P);_injector=c(be);_eventCleanups;_hosts=new Map;constructor(){let e=c(We).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>pp.map(t=>e.listen(this._document,t,this._onInteraction,hp)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute($a,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Ga))&&e.setAttribute(Ga,t.className||""),t.centered&&e.setAttribute(Sd,""),t.disabled&&e.setAttribute(Kr,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Kr,""):e.removeAttribute(Kr)}_onInteraction=e=>{let t=He(e);if(t instanceof HTMLElement){let r=t.closest(`[${$a}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Ga)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Di.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Di.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Kr),rippleConfig:{centered:e.hasAttribute(Sd),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},s=new Wr(l,this._ngZone,t,this._platform,this._injector),d=!l.rippleDisabled;d&&s.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:s,hasSetUpEvents:d}),e.removeAttribute($a)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Zr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var gp=new v("MAT_BUTTON_CONFIG");function Cd(n){return n==null?void 0:Pi(n)}var xd=(()=>{class n{_elementRef=c(k);_ngZone=c(P);_animationsDisabled=St();_config=c(gp,{optional:!0});_focusMonitor=c(fi);_cleanupClick;_renderer=c(ae);_rippleLoader=c(Dd);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Et(!1,{transform:Q});constructor(){c(ct).load(Zr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(ie("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Yt(r.color?"mat-"+r.color:""),j("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Q],disabled:[2,"disabled","disabled",Q],ariaDisabled:[2,"aria-disabled","ariaDisabled",Q],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Q],tabIndex:[2,"tabIndex","tabIndex",Cd],_tabindex:[2,"tabindex","_tabindex",Cd],showProgress:[1,"showProgress"]}})}return n})();var wd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[me]})}return n})();var vp=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],bp=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function yp(n,i){n&1&&(Ve(0,"div",2),V(1,3),Ye())}var Ed=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Nd=(()=>{class n extends xd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=_p(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Ed.get(this._appearance):null,o=Ed.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ye],ngContentSelectors:bp,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(_e(vp),nt(0,"span",0),V(1),Ve(2,"span",1),V(3,1),Ye(),V(4,2),$(5,yp,2,0,"div",2),nt(6,"span",3)(7,"span",4)),t&2&&(j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),h(5),G(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function _p(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Md=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[wd,me]})}return n})();function Ad(n){return Error(`Unable to find icon with the name "${n}"`)}function Dp(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Rd(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Id(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var dt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Fd=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new dt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(we.HTML,r);if(!a)throw Id(r);let l=_n(a);return this._addSvgIconConfig(e,t,new dt("",l,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new dt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(we.HTML,t);if(!o)throw Id(t);let a=_n(o);return this._addSvgIconSetConfig(e,new dt("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(we.RESOURCE_URL,e);if(!t)throw Rd(e);let r=this._cachedIconsByUrl.get(t);return r?_(Yr(r)):this._loadSvgIconFromConfig(new dt(e,null)).pipe(oe(o=>this._cachedIconsByUrl.set(t,o)),F(o=>Yr(o)))}getNamedSvgIcon(e,t=""){let r=Td(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Ei(Ad(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?_(Yr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(F(t=>Yr(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return _(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Vt(l=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(we.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(d)),_(null)})));return Mi(o).pipe(F(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Ad(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),l=this._extractSvgIconFromSet(a,e,o.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(oe(t=>e.svgText=t),F(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?_(null):this._fetchIcon(e).pipe(oe(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let l=this._svgElementFromString(_n("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(_n("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:l}=r[o];a!=="id"&&t.setAttribute(a,l)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Dp();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(we.RESOURCE_URL,t);if(!a)throw Rd(t);let l=this._inProgressUrlFetches.get(a);if(l)return l;let s=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(F(d=>_n(d)),Bt(()=>this._inProgressUrlFetches.delete(a)),as());return this._inProgressUrlFetches.set(a,s),s}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Td(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Cp(o)?new dt(o.url,null,o.options):new dt(o,null)}}static \u0275fac=function(t){return new(t||n)(x(vt,8),x(Ho),x(M,8),x(xt))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Yr(n){return n.cloneNode(!0)}function Td(n,i){return n+":"+i}function Cp(n){return!!(n.url&&n.options)}var xp=["*"],wp=new v("MAT_ICON_DEFAULT_OPTIONS"),Ep=new v("mat-icon-location",{providedIn:"root",factory:()=>{let n=c(M),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Od=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Np=Od.map(n=>`[${n}]`).join(", "),Mp=/^url\(['"]?#(.*?)['"]?\)$/,Xr=(()=>{class n{_elementRef=c(k);_iconRegistry=c(Fd);_location=c(Ep);_errorHandler=c(xt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=De.EMPTY;constructor(){let e=c(new Xt("aria-hidden"),{optional:!0}),t=c(wp,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Np),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Od.forEach(a=>{let l=t[o],s=l.getAttribute(a),d=s?s.match(Mp):null;if(d){let u=r.get(l);u||(u=[],r.set(l,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Ge(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(ie("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Yt(r.color?"mat-"+r.color:""),j("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Q],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:xp,decls:1,vars:0,template:function(t,r){t&1&&(_e(),V(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return n})(),Qr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[me]})}return n})();function kd(n){let[i,e]=n.split(" ");return[i,parseInt(e,10)]}function Ap(n){return[...n].sort((i,e)=>{let[t,r]=kd(i.unidade),[o,a]=kd(e.unidade);return t.localeCompare(o)||r-a})}var Jr=class n{http=c(vt);boletosMes$=this.http.get("data/boletos.json").pipe(F(i=>z(p({},i),{boletos:Ap(i.boletos)})),jt(1));carregar(){return this.boletosMes$}static \u0275fac=function(e){return new(e||n)};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})};var Rp=(n,i)=>i.documento;function Ip(n,i){if(n&1&&(m(0,"span",3),g(1),f(),m(2,"span",13),g(3),f(),m(4,"span",13),g(5),f()),n&2){let e=i,t=q();h(),Be("",e.mes," \u2014 ",e.condominio),h(2),Ue("Pagador: ",e.pagador),h(2),Be("Vencimento: ",t.formatarData(e.vencimento)," \u2022 Banco ",e.banco)}}function Tp(n,i){n&1&&(m(0,"span",3),g(1,"Carregando boletos\u2026"),f())}function Fp(n,i){if(n&1&&(m(0,"div",17),g(1),f()),n&2){let e=q().$implicit,t=q();h(),Be("Doc. ",e.documento," \u2022 Venc. ",t.formatarData(i.vencimento))}}function Op(n,i){if(n&1){let e=So();m(0,"mat-card",10)(1,"mat-card-content")(2,"div",14)(3,"span",15),g(4),f(),m(5,"span",16),g(6),f()(),$(7,Fp,2,2,"div",17),m(8,"div",18)(9,"div",19),g(10),f(),m(11,"button",20),ue("click",function(){let r=uo(e).$implicit,o=q();return fo(o.copiar(r))}),g(12),f()()()()}if(n&2){let e,t=i.$implicit,r=q();h(4),Ue("Unidade ",t.unidade),h(2),I(r.formatarMoeda(t.valor)),h(),G((e=r.dados())?7:-1,e),h(3),I(t.linhaDigitavel),h(),j("boleto__copiar--copiado",r.copiadoId()===t.documento),h(),Ue(" ",r.copiadoId()===t.documento?"Copiado!":"Copiar"," ")}}function Pp(n,i){n&1&&(m(0,"p",11),g(1,"Nenhum boleto encontrado para essa busca."),f())}var eo=class n{boletosService=c(Jr);dados=Sr(this.boletosService.carregar());busca=N("");copiadoId=N(null);boletosFiltrados=X(()=>{let i=this.dados();if(!i)return[];let e=this.busca().trim().toLowerCase();return e?i.boletos.filter(t=>t.unidade.toLowerCase().includes(e)):i.boletos});totalBoletos=X(()=>this.dados()?.boletos.length??0);totalValor=X(()=>(this.dados()?.boletos??[]).reduce((i,e)=>i+e.valor,0));formatarMoeda(i){return i.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}formatarData(i){let[e,t,r]=i.split("-");return`${r}/${t}/${e}`}async copiar(i){let e=i.linhaDigitavel;try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}this.copiadoId.set(i.documento),setTimeout(()=>{this.copiadoId()===i.documento&&this.copiadoId.set(null)},1500)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=H({type:n,selectors:[["app-boletos-page"]],decls:22,vars:4,consts:[["campoBusca",""],[1,"cabecalho"],[1,"cabecalho__conteudo"],[1,"cabecalho__titulo"],[1,"resumo"],[1,"resumo__total"],[1,"conteudo"],["appearance","outline",1,"busca"],["matPrefix",""],["matInput","","placeholder","Ex.: FL 0604",3,"input"],["appearance","outlined",1,"boleto"],[1,"vazio"],[1,"rodape"],[1,"cabecalho__info"],[1,"boleto__topo"],[1,"boleto__unidade"],[1,"boleto__valor"],[1,"boleto__meta"],[1,"boleto__linha-row"],[1,"boleto__linha"],["mat-flat-button","","color","primary",1,"boleto__copiar",3,"click"]],template:function(e,t){if(e&1){let r=So();m(0,"mat-toolbar",1)(1,"div",2),$(2,Ip,6,5)(3,Tp,2,0,"span",3),f()(),m(4,"div",4)(5,"span"),g(6),f(),m(7,"span",5),g(8),f()(),m(9,"main",6)(10,"mat-form-field",7)(11,"mat-label"),g(12,"Buscar unidade"),f(),m(13,"mat-icon",8),g(14,"search"),f(),m(15,"input",9,0),ue("input",function(){uo(r);let a=Pn(16);return fo(t.busca.set(a.value))}),f()(),Ke(17,Op,13,7,"mat-card",10,Rp,!1,Pp,2,0,"p",11),f(),m(20,"footer",12),g(21,'Toque em "Copiar" para copiar a linha digit\xE1vel do boleto.'),f()}if(e&2){let r;h(2),G((r=t.dados())?2:3,r),h(4),Ue("",t.totalBoletos()," boletos"),h(2),I(t.formatarMoeda(t.totalValor())),h(9),Ze(t.boletosFiltrados())}},dependencies:[Cr,Dr,pi,Ir,hi,Ra,md,fd,qr,Gr,hd,Md,Nd,Qr,Xr],styles:["[_nghost-%COMP%]{display:block;min-height:100%}.cabecalho[_ngcontent-%COMP%]{height:auto;padding:12px 16px 14px;background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary)}.cabecalho__conteudo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;width:100%}.cabecalho__titulo[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.cabecalho__info[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);opacity:.85}.resumo[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:-10px 12px 8px;padding:12px 16px;border-radius:12px;background:var(--%NS%mat-sys-surface-container);font:var(--%NS%mat-sys-body-medium);box-shadow:0 1px 3px #0000001f}.resumo__total[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);color:var(--%NS%mat-sys-primary)}.conteudo[_ngcontent-%COMP%]{display:block;padding:4px 12px 24px}.busca[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}.boleto[_ngcontent-%COMP%]{margin-bottom:10px}.boleto__topo[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:4px}.boleto__unidade[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small);color:var(--%NS%mat-sys-primary)}.boleto__valor[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small);white-space:nowrap}.boleto__meta[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant);margin-bottom:8px}.boleto__linha-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.boleto__linha[_ngcontent-%COMP%]{flex:1;min-width:0;background:var(--%NS%mat-sys-surface-container-highest);border-radius:8px;padding:8px 10px;font-family:Courier New,monospace;font-size:.8rem;word-break:break-all}.boleto__copiar[_ngcontent-%COMP%]{align-self:stretch;min-height:40px}.boleto__copiar--copiado[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-tertiary)!important}.vazio[_ngcontent-%COMP%]{text-align:center;color:var(--%NS%mat-sys-on-surface-variant);padding:24px 0}.rodape[_ngcontent-%COMP%]{text-align:center;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant);padding:8px 16px 28px}@media(min-width:600px){.cabecalho__conteudo[_ngcontent-%COMP%], .resumo[_ngcontent-%COMP%], .conteudo[_ngcontent-%COMP%], .rodape[_ngcontent-%COMP%]{max-width:640px;margin-left:auto;margin-right:auto}.resumo[_ngcontent-%COMP%]{margin-top:-14px}.boleto__linha-row[_ngcontent-%COMP%]{flex-direction:row;align-items:stretch}.boleto__copiar[_ngcontent-%COMP%]{flex-shrink:0;align-self:auto}}"]})};var Ci=(()=>{class n{_listeners=[];notify(e,t){for(let r of this._listeners)r(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var qa=new v("CdkAccordion"),Vd=(()=>{class n{_stateChanges=new T;_openCloseAllActions=new T;id=c(Re).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",Q]},exportAs:["cdkAccordion"],features:[se([{provide:qa,useExisting:n}]),de]})}return n})(),Ud=(()=>{class n{accordion=c(qa,{optional:!0,skipSelf:!0});_changeDetectorRef=c(Ne);_expansionDispatcher=c(Ci);_openCloseAllSubscription=De.EMPTY;closed=new W;opened=new W;destroyed=new W;expandedChange=new W;id=c(Re).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=N(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",Q],disabled:[2,"disabled","disabled",Q]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[se([{provide:qa,useValue:void 0}])]})}return n})(),Bd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();var xi=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Wa=class extends xi{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,o,a){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null,this.directives=a||null}},wi=class extends xi{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Ka=class extends xi{element;constructor(i){super(),this.element=i instanceof k?i.nativeElement:i}},Za=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Wa)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof wi)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Ka)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var jd=(()=>{class n extends Za{_moduleRef=c(vo,{optional:!0});_document=c(M);_viewContainerRef=c(pt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new W;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=et(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ye]})}return n})(),zd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();var Vp=["body"],Up=["bodyWrapper"],Bp=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],jp=["mat-expansion-panel-header","*","mat-action-row"];function zp(n,i){}var Hp=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],$p=["mat-panel-title","mat-panel-description","*"];function Gp(n,i){n&1&&(Ve(0,"span",1),ds(),Ve(1,"svg",2),nt(2,"path",3),Ye()())}var Ya=new v("MAT_ACCORDION"),Hd=new v("MAT_EXPANSION_PANEL"),qp=(()=>{class n{_template=c(Ti);_expansionPanel=c(Hd,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),$d=new v("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Xa=(()=>{class n extends Ud{_viewContainerRef=c(pt);_animationsDisabled=St();_document=c(M);_ngZone=c(P);_elementRef=c(k);_renderer=c(ae);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new W;afterCollapse=new W;_inputChanges=new T;accordion=c(Ya,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(Re).getId("mat-expansion-panel-header-");constructor(){super();let e=c($d,{optional:!0});this._expansionDispatcher=c(Ci),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Ct(null),ne(()=>this.expanded&&!this._portal),Ge(1)).subscribe(()=>{this._portal=new wi(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,r,o){if(t&1&&it(o,qp,5),t&2){let a;Z(a=Y())&&(r._lazyContent=a.first)}},viewQuery:function(t,r){if(t&1&&On(Vp,5)(Up,5),t&2){let o;Z(o=Y())&&(r._body=o.first),Z(o=Y())&&(r._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,r){t&2&&j("mat-expanded",r.expanded)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",Q],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[se([{provide:Ya,useValue:void 0},{provide:Hd,useExisting:n}]),ye,de],ngContentSelectors:jp,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,r){t&1&&(_e(Bp),V(0),m(1,"div",2,0)(3,"div",3,1)(5,"div",4),V(6,1),Kt(7,zp,0,0,"ng-template",5),f(),V(8,2),f()()),t&2&&(h(),ie("inert",r.expanded?null:""),h(2),Ee("id",r.id),ie("aria-labelledby",r._headerId),h(4),Ee("cdkPortalOutlet",r._portal))},dependencies:[jd],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return n})();var Qa=(()=>{class n{panel=c(Xa,{host:!0});_element=c(k);_focusMonitor=c(fi);_changeDetectorRef=c(Ne);_parentChangeSubscription=De.EMPTY;constructor(){c(ct).load(Zr);let e=this.panel,t=c($d,{optional:!0}),r=c(new Xt("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(ne(a=>!!(a.hideToggle||a.togglePosition))):ce;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=Ai(e.opened,e.closed,o,e._inputChanges.pipe(ne(a=>!!(a.hideToggle||a.disabled||a.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(ne(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Mr(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,r){t&1&&ue("click",function(){return r._toggle()})("keydown",function(a){return r._keydown(a)}),t&2&&(ie("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),Ms("height",r._getHeaderHeight()),j("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Pi(e)]},ngContentSelectors:$p,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,r){t&1&&(_e(Hp),Ve(0,"span",0),V(1),V(2,1),V(3,2),Ye(),$(4,Gp,3,0,"span",1)),t&2&&(j("mat-content-hide-toggle",!r._showToggle()),h(4),G(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return n})(),Gd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return n})(),qd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})(),Wd=(()=>{class n extends Vd{_keyManager;_ownHeaders=new Tn;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Ct(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new mi(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=et(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,r,o){if(t&1&&it(o,Qa,5),t&2){let a;Z(a=Y())&&(r._headers=a)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,r){t&2&&j("mat-accordion-multi",r.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",Q],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[se([{provide:Ya,useExisting:n}]),ye]})}return n})(),Kd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[Bd,zd,me]})}return n})();var to=class n{http=c(vt);extrato$=this.http.get("data/extrato-financeiro.json").pipe(jt(1));carregar(){return this.extrato$}static \u0275fac=function(e){return new(e||n)};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})};var Kp=(n,i)=>i.pagador,Zp=(n,i)=>i.unidade,Yp=(n,i)=>i.destinatario,Xp=(n,i)=>i.documento+i.data,Qp=(n,i)=>i.descricao+i.data,Jp=(n,i)=>i.tipo,eg=(n,i)=>i.data+i.descricao;function tg(n,i){if(n&1&&(m(0,"span",3),g(1),f()),n&2){let e=i;h(),Be("Per\xEDodo: ",e.d.periodoInicio," a ",e.d.periodoFim)}}function ng(n,i){n&1&&(m(0,"span",3),g(1,"Carregando extrato\u2026"),f())}function ig(n,i){if(n&1&&(m(0,"div",12)(1,"span",13),g(2),f(),m(3,"span",14),g(4),f(),m(5,"span",15),g(6),f()()),n&2){let e=i.$implicit,t=q(2);h(2),I(e.pagador),h(2),Ue("",e.qtd,"x"),h(2),I(t.brl(e.total))}}function rg(n,i){if(n&1&&(m(0,"div",12)(1,"span",13),g(2),f(),m(3,"span",14),g(4),f(),m(5,"span",15),g(6),f()()),n&2){let e=i.$implicit,t=q(2);h(2),I(e.unidade),h(2),I(e.data),h(2),I(t.brl(e.valor))}}function og(n,i){if(n&1&&(m(0,"div",12)(1,"span",13),g(2),f(),m(3,"span",14),g(4),f(),m(5,"span",15),g(6),f()()),n&2){let e=i.$implicit,t=q(3);h(2),I(e.descricao),h(2),I(e.data),h(2),I(t.brl(e.valor))}}function ag(n,i){if(n&1&&(m(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),g(3,"Outros pagamentos"),f(),m(4,"mat-panel-description"),g(5),f()(),Ke(6,og,7,3,"div",12,Qp),f()),n&2){let e=q(),t=q();h(5),Be("",e.d.outrosPagamentos.length," \xB7 ",t.brl(e.totais.outros)),h(),Ze(e.d.outrosPagamentos)}}function sg(n,i){if(n&1&&(m(0,"div",12)(1,"span",13),g(2),f(),m(3,"span",14),g(4),f(),m(5,"span",15),g(6),f()()),n&2){let e=i.$implicit,t=q(2);h(2),I(e.destinatario),h(2),Ue("",e.qtd,"x"),h(2),I(t.brl(e.total))}}function lg(n,i){if(n&1&&(m(0,"div",12)(1,"span",13),g(2),f(),m(3,"span",14),g(4),f(),m(5,"span",15),g(6),f()()),n&2){let e=i.$implicit,t=q(2);h(2),Be("Consulta Serasa (",e.tipo," ",e.documento,")"),h(2),I(e.data),h(2),I(t.brl(e.valor))}}function cg(n,i){if(n&1&&(m(0,"div",12)(1,"span",13),g(2),f(),m(3,"span",14),g(4),f(),m(5,"span",15),g(6),f()()),n&2){let e=i.$implicit,t=q(3);h(2),I(e.tipo),h(2),Ue("",e.qtd,"x"),h(2),I(t.brl(e.total))}}function dg(n,i){if(n&1&&(m(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),g(3,"Outros tipos de transa\xE7\xE3o"),f(),m(4,"mat-panel-description"),g(5),f()(),Ke(6,cg,7,3,"div",12,Jp),f()),n&2){let e=q();h(5),I(e.d.outrosTipos.length),h(),Ze(e.d.outrosTipos)}}function ug(n,i){if(n&1&&(m(0,"div",12)(1,"span",13),g(2),f(),m(3,"span",14),g(4),f(),m(5,"span",15),g(6),f()()),n&2){let e=i.$implicit,t=q(3);h(2),I(e.descricao),h(2),I(e.data),h(2),I(t.brl(e.valor))}}function fg(n,i){if(n&1&&(m(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),g(3,"\u26A0\uFE0F Transa\xE7\xF5es estornadas"),f(),m(4,"mat-panel-description"),g(5),f()(),Ke(6,ug,7,3,"div",12,eg),f()),n&2){let e=q();h(5),I(e.d.estornadas.length),h(),Ze(e.d.estornadas)}}function mg(n,i){if(n&1&&(m(0,"main",4)(1,"section",5)(2,"mat-card",6)(3,"span",7),g(4,"Saldo inicial"),f(),m(5,"span",8),g(6),f()(),m(7,"mat-card",6)(8,"span",7),g(9,"Saldo final"),f(),m(10,"span",8),g(11),f()(),m(12,"mat-card",6)(13,"span",7),g(14,"Varia\xE7\xE3o"),f(),m(15,"span",8),g(16),f()(),m(17,"mat-card",9)(18,"span",7),g(19,"Entradas"),f(),m(20,"span",8),g(21),f()(),m(22,"mat-card",10)(23,"span",7),g(24,"Sa\xEDdas"),f(),m(25,"span",8),g(26),f()(),m(27,"mat-card",6)(28,"span",7),g(29,"Transa\xE7\xF5es"),f(),m(30,"span",8),g(31),f()()(),m(32,"mat-accordion",11)(33,"mat-expansion-panel")(34,"mat-expansion-panel-header")(35,"mat-panel-title"),g(36,"Cobran\xE7as recebidas"),f(),m(37,"mat-panel-description"),g(38),f()(),Ke(39,ig,7,3,"div",12,Kp),f(),m(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),g(44,"Condom\xEDnio por unidade"),f(),m(45,"mat-panel-description"),g(46),f()(),Ke(47,rg,7,3,"div",12,Zp),f(),$(49,ag,8,2,"mat-expansion-panel"),m(50,"mat-expansion-panel")(51,"mat-expansion-panel-header")(52,"mat-panel-title"),g(53,"Pix enviados"),f(),m(54,"mat-panel-description"),g(55),f()(),Ke(56,sg,7,3,"div",12,Yp),f(),m(58,"mat-expansion-panel")(59,"mat-expansion-panel-header")(60,"mat-panel-title"),g(61,"Taxas da plataforma"),f(),m(62,"mat-panel-description"),g(63),f()(),m(64,"div",12)(65,"span",13),g(66,"Taxas de boleto/cart\xE3o/Pix"),f(),m(67,"span",14),g(68),f(),m(69,"span",15),g(70),f()(),m(71,"div",12)(72,"span",13),g(73,"Mensalidade do plano Asaas"),f(),m(74,"span",14),g(75),f(),m(76,"span",15),g(77),f()(),Ke(78,lg,7,4,"div",12,Xp),f(),$(80,dg,8,1,"mat-expansion-panel"),$(81,fg,8,1,"mat-expansion-panel"),f()()),n&2){let e=i,t=q();h(6),I(t.brl(e.d.saldoInicial)),h(5),I(t.brl(e.d.saldoFinal)),h(),j("stat--negativo",e.d.variacao<0)("stat--positivo",e.d.variacao>=0),h(4),I(t.brl(e.d.variacao)),h(5),I(t.brl(e.d.totalCredito)),h(5),I(t.brl(e.d.totalDebito)),h(5),I(e.d.qtdTransacoes),h(),Ee("multi",!1),h(6),Be("",e.d.cobrancas.length," pagadores \xB7 ",t.brl(e.totais.cobrancas)),h(),Ze(e.d.cobrancas),h(7),Be("",e.d.condominioUnidades.length," unidades \xB7 ",t.brl(e.totais.condominio)),h(),Ze(e.d.condominioUnidades),h(2),G(e.d.outrosPagamentos.length?49:-1),h(6),Be("",e.d.pixSaidas.length," destinat\xE1rios \xB7 ",t.brl(e.totais.pix)),h(),Ze(e.d.pixSaidas),h(7),I(t.brl(e.totais.taxas)),h(5),Ue("",e.d.taxas.boleto.qtd,"x"),h(2),I(t.brl(e.d.taxas.boleto.total)),h(5),Ue("",e.d.taxas.asaas.qtd,"x"),h(2),I(t.brl(e.d.taxas.asaas.total)),h(),Ze(e.d.taxas.serasa),h(2),G(e.d.outrosTipos.length?80:-1),h(),G(e.d.estornadas.length?81:-1)}}var no=class n{extratoService=c(to);dados=Sr(this.extratoService.carregar());vista=X(()=>{let i=this.dados();return i?{d:i,totais:{cobrancas:i.cobrancas.reduce((e,t)=>e+t.total,0),condominio:i.condominioUnidades.reduce((e,t)=>e+t.valor,0),outros:i.outrosPagamentos.reduce((e,t)=>e+t.valor,0),pix:i.pixSaidas.reduce((e,t)=>e+t.total,0),taxas:i.taxas.boleto.total+i.taxas.asaas.total+i.taxas.serasa.reduce((e,t)=>e+t.valor,0)}}:null});brl(i){return i.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=H({type:n,selectors:[["app-dashboard-page"]],decls:7,vars:2,consts:[[1,"cabecalho"],[1,"cabecalho__conteudo"],[1,"cabecalho__titulo"],[1,"cabecalho__info"],[1,"conteudo"],[1,"resumo-grid"],["appearance","outlined",1,"stat"],[1,"stat__label"],[1,"stat__valor"],["appearance","outlined",1,"stat","stat--positivo"],["appearance","outlined",1,"stat","stat--negativo"],[1,"secoes",3,"multi"],[1,"linha"],[1,"linha__nome"],[1,"linha__meta"],[1,"linha__valor"]],template:function(e,t){if(e&1&&(m(0,"mat-toolbar",0)(1,"div",1)(2,"span",2),g(3,"Financeiro"),f(),$(4,tg,2,2,"span",3)(5,ng,2,0,"span",3),f()(),$(6,mg,82,25,"main",4)),e&2){let r,o;h(4),G((r=t.vista())?4:5,r),h(2),G((o=t.vista())?6:-1,o)}},dependencies:[Cr,Dr,qr,Gr,Kd,Wd,Xa,Qa,qd,Gd],styles:["[_nghost-%COMP%]{display:block;min-height:100%}.cabecalho[_ngcontent-%COMP%]{height:auto;padding:12px 16px 14px;background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary)}.cabecalho__conteudo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;width:100%}.cabecalho__titulo[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.cabecalho__info[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);opacity:.85}.conteudo[_ngcontent-%COMP%]{padding:12px 12px 24px}.resumo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:12px}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;padding:10px 12px!important}.stat__label[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.stat__valor[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.stat--positivo[_ngcontent-%COMP%]   .stat__valor[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-tertiary)}.stat--negativo[_ngcontent-%COMP%]   .stat__valor[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.secoes[_ngcontent-%COMP%]{display:block}.linha[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px solid var(--%NS%mat-sys-outline-variant);font:var(--%NS%mat-sys-body-medium)}.linha[_ngcontent-%COMP%]:last-child{border-bottom:none}.linha__nome[_ngcontent-%COMP%]{flex:1;min-width:0;overflow-wrap:anywhere}.linha__meta[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-small);white-space:nowrap}.linha__valor[_ngcontent-%COMP%]{font-weight:600;white-space:nowrap}@media(min-width:600px){.conteudo[_ngcontent-%COMP%]{max-width:640px;margin-left:auto;margin-right:auto}.resumo-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}"]})};var Zd=[{path:"",component:eo},{path:"financeiro",component:no},{path:"**",redirectTo:""}];var Yd={providers:[fs(),ya(Zd),zo(),ac()]};var hg=()=>({exact:!0}),io=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=H({type:n,selectors:[["app-root"]],decls:14,vars:2,consts:[[1,"app-shell"],[1,"app-shell__conteudo"],[1,"app-shell__nav"],["routerLink","/","routerLinkActive","app-shell__nav-item--ativo",1,"app-shell__nav-item",3,"routerLinkActiveOptions"],["routerLink","/financeiro","routerLinkActive","app-shell__nav-item--ativo",1,"app-shell__nav-item"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1),tt(2,"router-outlet"),f(),m(3,"nav",2)(4,"a",3)(5,"mat-icon"),g(6,"receipt_long"),f(),m(7,"span"),g(8,"Boletos"),f()(),m(9,"a",4)(10,"mat-icon"),g(11,"bar_chart"),f(),m(12,"span"),g(13,"Financeiro"),f()()()()),e&2&&(h(4),Ee("routerLinkActiveOptions",As(1,hg)))},dependencies:[oi,vn,ba,Qr,Xr],styles:[".app-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100%}.app-shell__conteudo[_ngcontent-%COMP%]{flex:1;padding-bottom:64px}.app-shell__nav[_ngcontent-%COMP%]{position:fixed;left:0;right:0;bottom:0;display:flex;background:var(--%NS%mat-sys-surface-container);border-top:1px solid var(--%NS%mat-sys-outline-variant);box-shadow:0 -1px 4px #00000014;z-index:10}.app-shell__nav-item[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 0 10px;text-decoration:none;color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-label-small)}.app-shell__nav-item--ativo[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}"]})};ko(io,Yd).catch(n=>console.error(n));

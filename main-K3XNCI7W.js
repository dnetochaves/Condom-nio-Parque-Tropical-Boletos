import{$ as po,$a as Ts,$b as Vs,A as Ke,Aa as Un,Ab as H,B as us,Ba as xs,Bb as it,C as jt,Ca as Bi,Cb as zn,D as ft,Da as Gt,Db as Y,E as ho,Ea as qt,Eb as X,F as ms,Fa as Ds,Fb as Fs,G as fs,Ga as Cs,Gb as Os,H as zt,Ha as ws,Hb as Eo,I as hs,Ia as Es,Ib as Hn,J as Dt,Ja as Ns,Jb as Xt,K as Pe,Ka as Ms,Kb as q,L as Ze,La as As,Lb as Qt,M as se,Ma as Is,Mb as h,N as x,Na as Wt,Nb as b,O as Ht,Oa as Rs,Ob as He,P as Ln,Pa as yo,Pb as Ne,Q as O,Qa as _o,Qb as ce,R as V,Ra as f,Rb as Ps,S as ps,Sa as Ui,Sb as ks,T as v,Ta as Ye,Tb as Ls,U as E,Ua as le,Ub as K,V as c,Va as jn,Vb as F,W as et,Wa as Z,Wb as No,X as gs,Xa as ji,Xb as Jt,Y as Ee,Ya as pt,Yb as Mo,Z as ye,Za as Kt,Zb as Et,_ as Me,_a as So,_b as $n,a as g,aa as go,ab as xo,ac as Re,b as L,ba as vs,bb as j,bc as Bs,ca as _e,cb as z,cc as Q,d as Ce,da as T,db as C,dc as Hi,e as uo,ea as Ue,eb as Se,ec as Ao,f as Vt,fa as bs,fb as Zt,fc as Io,g as P,ga as W,gb as Do,h as we,ha as B,hb as Co,i as ue,ia as Ct,ib as Yt,j as be,ja as Vn,jb as ie,k as S,ka as ys,kb as I,l as Oi,la as A,lb as R,m as mo,ma as Bn,mb as re,n as ss,na as _s,nb as oe,o as k,oa as $t,ob as Ae,p as ls,pa as Vi,pb as m,q as Je,qa as wt,qb as u,r as fo,ra as Ss,rb as Ie,s as cs,sa as je,sb as ze,t as Pi,ta as ht,tb as Xe,u as ki,ua as vo,ub as nt,v as Li,va as me,vb as wo,w as ne,wa as tt,wb as zi,x as Bt,xa as bo,xb as fe,y as Ut,ya as D,yb as w,z as ds,za as U,zb as xe}from"./chunk-WHRQTSRG.js";var Us=null;function ke(){return Us}function Ro(n){Us??=n}var Gn=class{},en=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:()=>c(js),providedIn:"platform"})}return n})();var js=(()=>{class n extends en{_location;_history;_doc=c(T);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ke().getBaseHref(this._doc)}onPopState(e){let t=ke().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=ke().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function $s(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function zs(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function gt(n){return n&&n[0]!=="?"?`?${n}`:n}var tn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:()=>c(nu),providedIn:"root"})}return n})(),tu=new v(""),nu=(()=>{class n extends tn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??c(T).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return $s(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+gt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+gt(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+gt(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(E(en),E(tu,8))};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var nn=(()=>{class n{_subject=new P;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=ou(zs(Hs(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+gt(t))}normalize(e){return n.stripTrailingSlash(ru(this._basePath,Hs(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=gt;static joinWithSlash=$s;static stripTrailingSlash=zs;static \u0275fac=function(t){return new(t||n)(E(tn))};static \u0275prov=O({token:n,factory:()=>iu(),providedIn:"root"})}return n})();function iu(){return new nn(E(tn))}function ru(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Hs(n){return n.replace(/\/index\.html$/,"")}function ou(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var To=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(_e);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(Z(pt))};static \u0275dir=C({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[me]})}return n})();function qn(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()!==i)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]==='"'&&a[a.length-1]==='"'&&(a=a.slice(1,-1)),a}return null}var Fo="browser";function Gs(n){return n===Fo}var Wn=class{_doc;constructor(i){this._doc=i}manager},$i=(()=>{class n extends Wn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(E(T))};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Wi=new v(""),Lo=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof $i));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof $i);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new x(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(E(Wi),E(B))};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Oo="ng-app-id";function qs(n){for(let i of n)i.remove()}function Ws(n,i){let e=i.createElement("style");return e.textContent=n,e}function du(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Oo}="${i}"],link[${Oo}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Oo),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function ko(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Vo=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,du(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Ws);t?.forEach(r=>this.addUsage(r,this.external,ko))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(qs(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])qs(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Ws(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,ko(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(E(T),E(Bn),E(wt,8),E($t))};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Po={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Bo=/%COMP%/g;var Zs="%COMP%",uu=`_nghost-${Zs}`,mu=`_ngcontent-${Zs}`,fu=!0,hu=new v("",{factory:()=>fu}),pu=new v("");function gu(n){return mu.replace(Bo,n)}function vu(n){return uu.replace(Bo,n)}function Ys(n,i){return i.map(e=>e.replace(Bo,n))}var Yn=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,o,a,l,s=null,d=null,p=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=l,this.nonce=s,this.tracingService=d,this.cssVarNamespace=p??"",this.defaultRenderer=new Kn(e,a,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof qi?r.applyToHost(e):r instanceof Zn&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,l=this.ngZone,s=this.eventManager,d=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,y=this.tracingService;switch(t.encapsulation){case Bi.Emulated:o=new qi(s,d,t,this.appId,p,a,l,y,this.cssVarNamespace);break;case Bi.ShadowDom:return new Gi(s,e,t,a,l,this.nonce,y,this.cssVarNamespace,d);case Bi.ExperimentalIsolatedShadowDom:return new Gi(s,e,t,a,l,this.nonce,y,this.cssVarNamespace);default:o=new Zn(s,d,t,p,a,l,y,this.cssVarNamespace);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(E(Lo),E(jn),E(Bn),E(hu),E(T),E(B),E(wt),E(yo,8),E(pu,8))};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Kn=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r,o=""){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Po[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Ks(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){if(i){let r=Ks(i)?i.content:i;if(t!=null&&t.parentNode!==r)throw new x(-5106,!1);r.insertBefore(e,t)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new x(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=Po[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Po[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(Wt.DashCase|Wt.Important)?i.style.setProperty(e,t,r&Wt.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||t&Wt.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=ke().getGlobalEventTarget(this.doc,i),!i))throw new x(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Ks(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Gi=class extends Kn{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,l,s,d){super(i,r,o,l,s),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let p=t.styles;p=Ys(t.id,p).map(_=>_.replace(/%NS%/g,s));for(let _ of p){let G=document.createElement("style");a&&G.setAttribute("nonce",a),G.textContent=_,this.shadowRoot.appendChild(G)}let y=t.getExternalStyles?.();if(y)for(let _ of y){let G=ko(_,r);a&&G.setAttribute("nonce",a),this.shadowRoot.appendChild(G)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Zn=class extends Kn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,l,s,d){super(i,o,a,l,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let p=t.styles,y=d?Ys(d,p):p;this.styles=y.map(_=>_.replace(/%NS%/g,s)),this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Rs.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},qi=class extends Zn{contentAttr;hostAttr;constructor(i,e,t,r,o,a,l,s,d){let p=r+"-"+t.id;super(i,e,t,o,a,l,s,d,p),this.contentAttr=gu(p),this.hostAttr=vu(p)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var Ki=class n extends Gn{supportsDOMEvents=!0;static makeCurrent(){Ro(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=yu();return e==null?null:_u(e)}resetBaseElement(){Xn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return qn(document.cookie,i)}},Xn=null;function yu(){return Xn=Xn||document.head.querySelector("base"),Xn?Xn.getAttribute("href"):null}function _u(n){return new URL(n,document.baseURI).pathname}var Xs=["alt","control","meta","shift"],Su={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},xu={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Qs=(()=>{class n extends Wn{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),l=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ke().onAndCancel(e,a.domEventName,l,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),a="code."),Xs.forEach(d=>{let p=t.indexOf(d);p>-1&&(t.splice(p,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let s={};return s.domEventName=r,s.fullKey=a,s}static matchEventFullKeyCode(e,t){let r=Su[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Xs.forEach(a=>{if(a!==r){let l=xu[a];l(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(E(T))};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();async function Uo(n,i,e){let t=g({rootComponent:n},Du(i,e));return Bs(t)}function Du(n,i){return{platformRef:i?.platformRef,appProviders:[...Mu,...n?.providers??[]],platformProviders:Nu}}function Cu(){Ki.makeCurrent()}function wu(){return new Ct}function Eu(){return xs(document),document}var Nu=[{provide:$t,useValue:Fo},{provide:_s,useValue:Cu,multi:!0},{provide:T,useFactory:Eu}];var Mu=[{provide:gs,useValue:"root"},{provide:Ct,useFactory:wu},{provide:Wi,useClass:$i,multi:!0},{provide:Wi,useClass:Qs,multi:!0},Yn,{provide:jn,useClass:Vo},{provide:Vo,useExisting:jn},Lo,{provide:Ye,useExisting:Yn},[]];var ot=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],l=this.headers.get(e);if(!l)return;l=l.filter(s=>a.indexOf(s)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Yi=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Xi=class{encodeKey(i){return Js(i)}encodeValue(i){return Js(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Au(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,l]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],s=e.get(a)||[];s.push(l),e.set(a,s)}),e}var Iu=/%(\d[a-f0-9])/gi,Ru={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Js(n){return encodeURIComponent(n).replace(Iu,(i,e)=>Ru[e]??i)}function Zi(n){return`${n}`}var rt=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Xi,i.fromString){if(i.fromObject)throw new x(2805,!1);this.map=Au(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Zi):[Zi(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(Zi(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),r=t.indexOf(Zi(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function Tu(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function el(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function tl(n){return typeof Blob<"u"&&n instanceof Blob}function nl(n){return typeof FormData<"u"&&n instanceof FormData}function Fu(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var jo="Content-Type",il="Accept",al="text/plain",sl="application/json",Ou=`${sl}, ${al}, */*`,rn=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(Tu(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new x(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new ot,this.context??=new Yi,!this.params)this.params=new rt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let l=e,s="",d=e.indexOf("#");d!==-1&&(s=e.substring(d),l=e.substring(0,d));let p=l.indexOf("?"),y=p===-1?"?":p<l.length-1?"&":"";this.urlWithParams=l+y+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||el(this.body)||tl(this.body)||nl(this.body)||Fu(this.body)?this.body:this.body instanceof rt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||nl(this.body)?null:tl(this.body)?this.body.type||null:el(this.body)?null:typeof this.body=="string"?al:this.body instanceof rt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?sl:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,l=i.cache||this.cache,s=i.mode||this.mode,d=i.redirect||this.redirect,p=i.credentials||this.credentials,y=i.referrer??this.referrer,_=i.integrity||this.integrity,G=i.referrerPolicy||this.referrerPolicy,ee=i.transferCache??this.transferCache,te=i.timeout??this.timeout,J=i.body!==void 0?i.body:this.body,Be=i.withCredentials??this.withCredentials,ge=i.reportProgress??this.reportProgress,ve=i.reportUploadProgress??this.reportUploadProgress,On=i.reportDownloadProgress??this.reportDownloadProgress,ut=i.headers||this.headers,Pn=i.params||this.params,kn=i.context??this.context;return i.setHeaders!==void 0&&(ut=Object.keys(i.setHeaders).reduce((Lt,mt)=>Lt.set(mt,i.setHeaders[mt]),ut)),i.setParams&&(Pn=Object.keys(i.setParams).reduce((Lt,mt)=>Lt.set(mt,i.setParams[mt]),Pn)),new n(e,t,J,{params:Pn,headers:ut,context:kn,reportProgress:ge,reportUploadProgress:ve,reportDownloadProgress:On,responseType:r,withCredentials:Be,transferCache:ee,keepalive:o,cache:l,priority:a,timeout:te,mode:s,redirect:d,credentials:p,referrer:y,integrity:_,referrerPolicy:G})}},Mt=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Mt||{}),on=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new ot,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Qi=class n extends on{constructor(i={}){super(i)}type=Mt.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Qn=class n extends on{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Mt.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Nt=class extends on{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Pu=200;var ku=/^\)\]\}',?\n/,wy=1024*1024,ll=new v("",{factory:()=>null}),Ji=(()=>{class n{fetchImpl=c(Ho,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=c(B);destroyRef=c(Ue);maxResponseSize=c(ll);handle(e){return new Vt(t=>{let r=new AbortController,o=!1,a={next:s=>{s.type===Mt.Response&&(o=!0),t.next(s)},error:s=>{o=!0,t.error(s)},complete:()=>{o=!0,t.complete()}};this.doRequest(e,r.signal,a).then($o,s=>a.error(new Nt({error:s})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!o&&!r.signal.aborted&&r.abort()}})}async doRequest(e,t,r){let o=this.createRequestInit(e),a;try{let J=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,g({signal:t},o)));Lu(J),r.next({type:Mt.Sent}),a=await J}catch(J){r.error(new Nt({error:J,status:J.status??0,statusText:J.statusText,url:e.urlWithParams,headers:J.headers}));return}let l=new ot(a.headers),s=a.statusText,d=a.url||e.urlWithParams,p=a.status,y=null,_=e.reportProgress||e.reportDownloadProgress;if(_&&r.next(new Qi({headers:l,status:p,statusText:s,url:d})),a.body){let J=a.headers.get(jo)??"",Be=a.headers.get("content-length"),ge=Be!==null?Number(Be):NaN;this.maxResponseSize!==null&&Number.isFinite(ge)&&ge>this.maxResponseSize&&(await a.body.cancel(),rl(this.maxResponseSize));let ve=[],On=a.body.getReader(),ut=0,Pn,kn,Lt=typeof Zone<"u"&&Zone.current,mt=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await On.cancel(),mt=!0;break}let{done:lo,value:co}=await On.read();if(lo)break;if(ve.push(co),ut+=co.length,this.maxResponseSize!==null&&ut>this.maxResponseSize&&(await On.cancel(),rl(this.maxResponseSize)),_){kn=e.responseType==="text"?(kn??"")+(Pn??=ol(J)).decode(co,{stream:!0}):void 0;let as=()=>r.next({type:Mt.DownloadProgress,total:Number.isFinite(ge)?ge:void 0,loaded:ut,partialText:kn});Lt?Lt.run(as):as()}}}),mt){r.complete();return}let eu=this.concatChunks(ve,ut);try{y=this.parseBody(e,eu,J,p)}catch(lo){r.error(new Nt({error:lo,headers:new ot(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}p===0&&(p=y?Pu:0);let G=p>=200&&p<300,ee=a.redirected,te=a.type;G?(r.next(new Qn({body:y,headers:l,status:p,statusText:s,url:d,redirected:ee,responseType:te})),r.complete()):r.error(new Nt({error:y,headers:l,status:p,statusText:s,url:d,redirected:ee,responseType:te}))}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(ku,"");if(a==="")return null;try{return JSON.parse(a)}catch(l){if(o<200||o>=300)return a;throw l}case"text":return ol(r).decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new x(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(il)||(t[il]=Ou),!e.headers.has(jo)){let o=e.detectContentTypeHeader();o!==null&&(t[jo]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),Ho=class{};function $o(){}function Lu(n){n.then($o,$o)}function rl(n){throw new x(-2825,!1)}var Vu=/charset=\s*["']?([^;"'\s]+)["']?/i;function ol(n){let i=n.match(Vu);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var Bu=new v("",{factory:()=>!0}),Uu="XSRF-TOKEN",ju=new v("",{factory:()=>Uu}),zu="X-XSRF-TOKEN",Hu=new v("",{factory:()=>zu}),$u=(()=>{class n{cookieName=c(ju);doc=c(T);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=qn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),cl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E($u),r},providedIn:"root"})}return n})();function dl(n,i){if(!c(Bu)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=c(en).href,{origin:o}=new URL(r),{origin:a}=new URL(n.url,o);if(o!==a)return i(n)}catch{return i(n)}let e=c(cl).getToken(),t=c(Hu);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function Gu(n,i){return i(n)}function qu(n,i,e){return(t,r)=>ye(e,()=>i(t,o=>n(o,r)))}var ul=new v("",{factory:()=>[dl]}),ml=new v(""),fl=new v("",{factory:()=>!0});var Go=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E(Ji),r},providedIn:"root"})}return n})();var er=(()=>{class n{backend;injector;chain=null;pendingTasks=c(vo);contributeToStability=c(fl);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=this.injector.get(tr,null,{skipSelf:!0}),o=r!==null&&this.backend===r,a=this.injector.get(ml,[],o?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(ul),...a]));this.chain=l.reduceRight((s,d)=>qu(s,d,this.injector),Gu)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return F(()=>t(e,o=>this.backend.handle(o))).pipe(jt(r))}else return F(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||n)(E(Go),E(Ee))};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E(er),r},providedIn:"root"})}return n})();function zo(n,i){return g({body:i},n)}var vt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof rn)o=e;else{let s;r.headers instanceof ot?s=r.headers:s=new ot(r.headers);let d;r.params&&(r.params instanceof rt?d=r.params:d=new rt({fromObject:r.params})),o=new rn(e,t,r.body!==void 0?r.body:null,{headers:s,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=S(o).pipe(Ut(s=>this.handler.handle(s)));if(e instanceof rn||r.observe==="events")return a;let l=a.pipe(ne(s=>s instanceof Qn));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return l.pipe(k(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new x(2806,!1);return s.body}));case"blob":return l.pipe(k(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new x(2807,!1);return s.body}));case"text":return l.pipe(k(s=>{if(s.body!==null&&typeof s.body!="string")throw new x(2808,!1);return s.body}));default:return l.pipe(k(s=>s.body))}case"response":return l;default:throw new x(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new rt().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,zo(r,t))}post(e,t,r={}){return this.request("POST",e,zo(r,t))}put(e,t,r={}){return this.request("PUT",e,zo(r,t))}static \u0275fac=function(t){return new(t||n)(E(tr))};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qo(...n){let i=[vt,Ji,er,{provide:tr,useExisting:er},{provide:Go,useFactory:()=>c(Ji)},{provide:ul,useValue:dl,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return et(i)}var hl=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(E(T))};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Wo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E(Yu),r},providedIn:"root"})}return n})(),Yu=(()=>{class n extends Wo{_doc=c(T);sanitize(e,t){if(t==null)return null;switch(e){case Me.NONE:return t;case Me.HTML:return qt(t,"HTML")?Gt(t):As(this._doc,String(t)).toString();case Me.STYLE:return qt(t,"Style")?Gt(t):t;case Me.SCRIPT:if(qt(t,"Script"))return Gt(t);throw new x(5200,!1);case Me.URL:return qt(t,"URL")?Gt(t):Ms(String(t));case Me.RESOURCE_URL:if(qt(t,"ResourceURL"))return Gt(t);throw new x(-5201,!1);default:throw new x(5202,!1)}}bypassSecurityTrustHtml(e){return Ds(e)}bypassSecurityTrustStyle(e){return Cs(e)}bypassSecurityTrustScript(e){return ws(e)}bypassSecurityTrustUrl(e){return Es(e)}bypassSecurityTrustResourceUrl(e){return Ns(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var M="primary",mi=Symbol("RouteTitle"),Qo=class{params;constructor(i){this.params=i||{}}has(i){return Object.hasOwn(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function It(n){return new Qo(n)}function Ko(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Dl(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let s={},d=n.slice(0,t.length);return Ko(t,d,s)?{consumed:d,posParams:s}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let l={};return!Ko(o,n.slice(0,o.length),l)||!Ko(a,n.slice(n.length-a.length),l)?null:{consumed:n,posParams:l}}function sr(n){return new Promise((i,e)=>{n.pipe(ft()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Qu(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Qe(n[e],i[e]))return!1;return!0}function Qe(n,i){let e=n?Jo(n):void 0,t=i?Jo(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Cl(n[r],i[r]))return!1;return!0}function Jo(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Cl(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function Ju(n){return n.length>0?n[n.length-1]:null}function Ft(n){return mo(n)?n:Kt(n)?be(Promise.resolve(n)):S(n)}function wl(n){return mo(n)?sr(n):Promise.resolve(n)}var em={exact:Nl,subset:Ml},El={exact:tm,subset:nm,ignored:()=>!0},ha={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},cn={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function pa(n,i,e){let t=n instanceof De?n:i.parseUrl(n);return K(()=>ea(i.lastSuccessfulNavigation()?.finalUrl??new De,t,g(g({},cn),e)))}function ea(n,i,e){return em[e.paths](n.root,i.root,e.matrixParams)&&El[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function tm(n,i){return Qe(n,i)}function Nl(n,i,e){if(!At(n.segments,i.segments)||!rr(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Nl(n.children[t],i.children[t],e))return!1;return!0}function nm(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Cl(n[e],i[e]))}function Ml(n,i,e){return Al(n,i,i.segments,e)}function Al(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!At(r,e)||i.hasChildren()||!rr(r,e,t))}else if(n.segments.length===e.length){if(!At(n.segments,e)||!rr(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Ml(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!At(n.segments,r)||!rr(n.segments,r,t)||!n.children[M]?!1:Al(n.children[M],i,o,t)}}function rr(n,i,e){return i.every((t,r)=>El[e](n[r].parameters,t.parameters))}var De=class{root;queryParams;fragment;_queryParamMap;constructor(i=new $([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=It(this.queryParams),this._queryParamMap}toString(){return om.serialize(this)}},$=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return or(this)}},bt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=It(this.parameters),this._parameterMap}toString(){return Rl(this)}};function im(n,i){return At(n,i)&&n.every((e,t)=>Qe(e.parameters,i[t].parameters))}function At(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function rm(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===M&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==M&&(e=e.concat(i(r,t)))}),e}var pn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>new yt})}return n})(),yt=class{parse(i){let e=new na(i);return new De(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Jn(i.root,!0)}`,t=lm(i.queryParams),r=typeof i.fragment=="string"?`#${am(i.fragment)}`:"";return`${e}${t}${r}`}},om=new yt;function or(n){return n.segments.map(i=>Rl(i)).join("/")}function Jn(n,i){if(!n.hasChildren())return or(n);if(i){let e=n.children[M]?Jn(n.children[M],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==M&&t.push(`${r}:${Jn(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=rm(n,(t,r)=>r===M?[Jn(n.children[M],!1)]:[`${r}:${Jn(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[M]!=null?`${or(n)}/${e[0]}`:`${or(n)}/(${e.join("//")})`}}function Il(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function nr(n){return Il(n).replace(/%3B/gi,";")}function am(n){return encodeURI(n)}function ta(n){return Il(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ar(n){return decodeURIComponent(n)}function gl(n){return ar(n.replace(/\+/g,"%20"))}function Rl(n){return`${ta(n.path)}${sm(n.parameters)}`}function sm(n){return Object.entries(n).map(([i,e])=>`;${ta(i)}=${ta(e)}`).join("")}function lm(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${nr(e)}=${nr(r)}`).join("&"):`${nr(e)}=${nr(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var cm=/^[^\/()?;#]+/;function Zo(n){let i=n.match(cm);return i?i[0]:""}var dm=/^[^\/()?;=#]+/;function um(n){let i=n.match(dm);return i?i[0]:""}var mm=/^[^=?&#]+/;function fm(n){let i=n.match(mm);return i?i[0]:""}var hm=/^[^&#]+/;function pm(n){let i=n.match(hm);return i?i[0]:""}var na=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new $([],{}):new $([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new x(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[M]=new $(e,t)),r}parseSegment(){let i=Zo(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new x(4009,!1);return this.capture(i),new bt(ar(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=um(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Zo(this.remaining);r&&(t=r,this.capture(t))}i[ar(e)]=ar(t)}parseQueryParam(i){let e=fm(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=pm(this.remaining);a&&(t=a,this.capture(t))}let r=gl(e),o=gl(t);if(Object.hasOwn(i,r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Zo(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new x(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=M);let l=this.parseChildren(e+1);t[a??M]=Object.keys(l).length===1&&l[M]?l[M]:new $([],l),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new x(4011,!1)}};function Tl(n){return n.segments.length>0?new $([],{[M]:n}):n}function Fl(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let o=Fl(r);if(t===M&&o.segments.length===0&&o.hasChildren())for(let[a,l]of Object.entries(o.children))i[a]=l;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new $(n.segments,i);return gm(e)}function gm(n){if(n.numberOfChildren===1&&n.children[M]){let i=n.children[M];return new $(n.segments.concat(i.segments),i.children)}return n}function _t(n){return n instanceof De}function Ol(n,i,e=null,t=null,r=new yt){let o=Pl(n);return kl(o,i,e,t,r)}function Pl(n){let i;function e(o){let a={};for(let s of o.children){let d=e(s);a[s.outlet]=d}let l=new $(o.url,a);return o===n&&(i=l),l}let t=e(n.root),r=Tl(t);return i??r}function kl(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Yo(o,o,o,e,t,r);let a=vm(i);if(a.toRoot())return Yo(o,o,new $([],{}),e,t,r);let l=bm(a,o,n),s=l.processChildren?ti(l.segmentGroup,l.index,a.commands):Vl(l.segmentGroup,l.index,a.commands);return Yo(o,l.segmentGroup,s,e,t,r)}function lr(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ri(n){return typeof n=="object"&&n!=null&&n.outlets}function vl(n,i,e){n||="\u0275";let t=new De;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Yo(n,i,e,t,r,o){let a={};for(let[d,p]of Object.entries(t??{}))a[d]=Array.isArray(p)?p.map(y=>vl(d,y,o)):vl(d,p,o);let l;n===i?l=e:l=Ll(n,i,e);let s=Tl(Fl(l));return new De(s,a,r)}function Ll(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Ll(o,i,e)}),new $(n.segments,t)}var cr=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&lr(t[0]))throw new x(4003,!1);let r=t.find(ri);if(r&&r!==Ju(t))throw new x(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vm(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new cr(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let l={};return Object.entries(o.outlets).forEach(([s,d])=>{l[s]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:l}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((l,s)=>{s==0&&l==="."||(s==0&&l===""?e=!0:l===".."?i++:l!=""&&r.push(l))}),r):[...r,o]},[]);return new cr(e,i,t)}var sn=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function bm(n,i,e){if(n.isAbsolute)return new sn(i,!0,0);if(!e)return new sn(i,!1,NaN);if(e.parent===null)return new sn(e,!0,0);let t=lr(n.commands[0])?0:1,r=e.segments.length-1+t;return ym(e,r,n.numberOfDoubleDots)}function ym(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new x(4005,!1);r=t.segments.length}return new sn(t,!1,r-o)}function _m(n){return ri(n[0])?n[0].outlets:{[M]:n}}function Vl(n,i,e){if(n??=new $([],{}),n.segments.length===0&&n.hasChildren())return ti(n,i,e);let t=Sm(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new $(n.segments.slice(0,t.pathIndex),{});return o.children[M]=new $(n.segments.slice(t.pathIndex),n.children),ti(o,0,r)}else return t.match&&r.length===0?new $(n.segments,{}):t.match&&!n.hasChildren()?ia(n,i,e):t.match?ti(n,0,r):ia(n,i,e)}function ti(n,i,e){if(e.length===0)return new $(n.segments,{});{let t=_m(e),r=Object.create(null);if(Object.keys(t).some(o=>o!==M)&&n.children[M]&&n.numberOfChildren===1&&n.children[M].segments.length===0){let o=ti(n.children[M],i,e);return new $(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Vl(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new $(n.segments,r)}}function Sm(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],l=e[t];if(ri(l))break;let s=`${l}`,d=t<e.length-1?e[t+1]:null;if(r>0&&s===void 0)break;if(s&&d&&typeof d=="object"&&d.outlets===void 0){if(!yl(s,d,a))return o;t+=2}else{if(!yl(s,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function ia(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(ri(o)){let s=xm(o.outlets);return new $(t,s)}if(r===0&&lr(e[0])){let s=n.segments[i];t.push(new bt(s.path,bl(e[0]))),r++;continue}let a=ri(o)?o.outlets[M]:`${o}`,l=r<e.length-1?e[r+1]:null;a&&l&&lr(l)?(t.push(new bt(a,bl(l))),r+=2):(t.push(new bt(a,{})),r++)}return new $(t,{})}function xm(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=ia(new $([],{}),0,t))}),i}function bl(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function yl(n,i,e){return n==e.path&&Qe(i,e.parameters)}var ni="imperative",ae=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(ae||{}),Fe=class{id;url;constructor(i,e){this.id=i,this.url=e}},Rt=class extends Fe{type=ae.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ge=class extends Fe{urlAfterRedirects;type=ae.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},he=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(he||{}),oi=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(oi||{}),Le=class extends Fe{reason;code;type=ae.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Bl(n){return n instanceof Le&&(n.code===he.Redirect||n.code===he.SupersededByNewNavigation)}var st=class extends Fe{reason;code;type=ae.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},Tt=class extends Fe{error;target;type=ae.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ai=class extends Fe{urlAfterRedirects;state;type=ae.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dr=class extends Fe{urlAfterRedirects;state;type=ae.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ur=class extends Fe{urlAfterRedirects;state;shouldActivate;type=ae.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},mr=class extends Fe{urlAfterRedirects;state;type=ae.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fr=class extends Fe{urlAfterRedirects;state;type=ae.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hr=class{route;type=ae.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},pr=class{route;type=ae.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},gr=class{snapshot;type=ae.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vr=class{snapshot;type=ae.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},br=class{snapshot;type=ae.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},yr=class{snapshot;type=ae.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var dn=class{},si=class{},un=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Dm(n){return!(n instanceof dn)&&!(n instanceof un)&&!(n instanceof si)}var _r=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new gn(this.rootInjector)}},gn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new _r(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(E(Ee))};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sr=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=ra(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=ra(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=oa(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return oa(i,this._root).map(e=>e.value)}};function ra(n,i){if(n===i.value)return i;for(let e of i.children){let t=ra(n,e);if(t)return t}return null}function oa(n,i){if(n===i.value)return[i];for(let e of i.children){let t=oa(n,e);if(t.length)return t.unshift(i),t}return[]}var Te=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function an(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var li=class extends Sr{snapshot;constructor(i,e){super(i),this.snapshot=e,va(this,i)}toString(){return this.snapshot.toString()}};function Ul(n,i){let e=Cm(n,i),t=new we([new bt("",{})]),r=new we({}),o=new we({}),a=new we({}),l=new we(""),s=new lt(t,r,a,l,o,M,n,e.root);return s.snapshot=e.root,new li(new Te(s,[]),e)}function Cm(n,i){let e={},t={},r={},a=new mn([],e,r,"",t,M,n,null,{},i);return new ci("",new Te(a,[]))}var lt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(i,e,t,r,o,a,l,s){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=l,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(k(d=>d[mi]))??S(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(k(i=>It(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(k(i=>It(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(i){this._futureSnapshot=i,this.pending?.set(!0)}},wm="always";function ga(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:g(g({},i.params),n.params),data:g(g({},i.data),n.data),resolve:g(g(g(g({},n.data),i.data),r?.data),n._resolvedData)}:t={params:g({},n.params),data:g({},n.data),resolve:g(g({},n.data),n._resolvedData??{})},r&&zl(r)&&(t.resolve[mi]=r.title),t}var mn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[mi]}constructor(i,e,t,r,o,a,l,s,d,p){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=l,this.routeConfig=s,this._resolve=d,this._environmentInjector=p}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=It(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=It(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},ci=class extends Sr{url;constructor(i,e){super(e),this.url=i,va(this,e)}toString(){return jl(this._root)}};function va(n,i){i.value._routerState=n,i.children.forEach(e=>va(n,e))}function jl(n){let i=n.children.length>0?` { ${n.children.map(jl).join(", ")} } `:"";return`${n.value}${i}`}function Xo(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Qe(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Qe(i.params,e.params)||n.paramsSubject.next(e.params),Qu(i.url,e.url)||n.urlSubject.next(e.url),Qe(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function aa(n,i){let e=Qe(n.params,i.params)&&im(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||aa(n.parent,i.parent))}function zl(n){return typeof n.title=="string"||n.title===null}var Hl=new v(""),fi=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=M;activateEvents=new W;deactivateEvents=new W;attachEvents=new W;detachEvents=new W;routerOutletData=Et();parentContexts=c(gn);location=c(pt);changeDetector=c(Re);inputBinder=c(wr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new x(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new x(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new x(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new x(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,s=new sa(e,l,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:s,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[me]})}return n})(),sa=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===lt?this.route:i===gn?this.childContexts:i===Hl?this.outletData:this.parent.get(i,e)}},wr=new v("");var ba=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&Ie(0,"router-outlet")},dependencies:[fi],encapsulation:2,changeDetection:1})}return n})();function ya(n){let i=n.children&&n.children.map(ya),e=i?L(g({},n),{children:i}):g({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==M&&(e.component=ba),e}function Em(n,i,e){let t=new Set,r=di(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new li(r,i)}}function di(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._setPending(i.value);let o=Nm(n,i,e,t);return new Te(r,o)}else{if(n.shouldAttach(i.value)){let a=n.retrieve(i.value);if(a!==null){let l=a.route;return l.value._setPending(i.value),l.children=i.children.map(s=>di(n,s,void 0,t)),l}}let r=Mm(i.value);r._setPending(i.value),t.add(r);let o=i.children.map(a=>di(n,a,void 0,t));return new Te(r,o)}}function Nm(n,i,e,t){return i.children.map(r=>{for(let o of e.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return di(n,r,o,t);return di(n,r,void 0,t)})}function Mm(n){return new lt(new we(n.url),new we(n.params),new we(n.queryParams),new we(n.fragment),new we(n.data),n.outlet,n.component,n)}var fn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},$l="ngNavigationCancelingError";function xr(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=_t(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Gl(!1,he.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Gl(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[$l]=!0,e.cancellationCode=i,e}function Am(n){return ql(n)&&_t(n.url)}function ql(n){return!!n&&n[$l]}var la=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Xo(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=an(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=an(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),l=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=an(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=an(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new yr(o.value.snapshot))}),i.children.length&&this.forwardEvent(new vr(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Xo(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),Xo(l.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},Dr=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},ln=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Im(n,i,e){let t=n._root,r=i?i._root:null;return ei(t,r,e,[t.value])}function Rm(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function vn(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!ps(n)?n:i.get(n):t}function ei(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=an(i);return n.children.forEach(a=>{Tm(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,l])=>ii(l,e.getContext(a),e,r)),r}function Tm(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,l=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=Fm(a,o,o.routeConfig.runGuardsAndResolvers);s?r.canActivateChecks.push(new Dr(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ei(n,i,l?l.children:null,t,r):ei(n,i,e,t,r),s&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new ln(l.outlet.component,a))}else a&&ii(i,l,e,r),r.canActivateChecks.push(new Dr(t)),o.component?ei(n,null,l?l.children:null,t,r):ei(n,null,e,t,r);return r}function Fm(n,i,e){if(typeof e=="function")return ye(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!At(n.url,i.url);case"pathParamsOrQueryParamsChange":return!At(n.url,i.url)||!Qe(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!aa(n,i)||!Qe(n.queryParams,i.queryParams);default:return!aa(n,i)}}function ii(n,i,e,t){let r=an(n),o=n.value;Object.entries(r).forEach(([a,l])=>{o.component?i?ii(l,i.children.getContext(a),i.children,t):ii(l,null,null,t):ii(l,e?e.getContext(a):null,e,t)}),o.component?i&&i.outlet&&i.outlet.isActivated?t.canDeactivateChecks.push(new ln(i.outlet.component,o)):t.canDeactivateChecks.push(new ln(null,o)):t.canDeactivateChecks.push(new ln(null,o))}function hi(n){return typeof n=="function"}function Om(n){return typeof n=="boolean"}function Pm(n){return n&&hi(n.canLoad)}function km(n){return n&&hi(n.canActivate)}function Lm(n){return n&&hi(n.canActivateChild)}function Vm(n){return n&&hi(n.canDeactivate)}function Bm(n){return n&&hi(n.canMatch)}function Wl(n){return n instanceof ss||n?.name==="EmptyError"}var ir=Symbol("INITIAL_VALUE");function hn(){return Pe(n=>ls(n.map(i=>i.pipe(Ke(1),Dt(ir)))).pipe(k(i=>{for(let e of i)if(e!==!0){if(e===ir)return ir;if(e===!1||Um(e))return e}return!0}),ne(i=>i!==ir),Ke(1)))}function Um(n){return _t(n)||n instanceof fn}function Kl(n){return n.aborted?S(void 0).pipe(Ke(1)):new Vt(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Zl(n){return Ze(Kl(n))}function jm(n){return Je(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?S(L(g({},i),{guardsResult:!0})):zm(o,e,t).pipe(Je(a=>a&&Om(a)?Hm(e,r,n):S(a)),k(a=>L(g({},i),{guardsResult:a})))})}function zm(n,i,e){return be(n).pipe(Je(t=>Km(t.component,t.route,e,i)),ft(t=>t!==!0,!0))}function Hm(n,i,e){return be(i).pipe(Ut(t=>cs(Gm(t.route.parent,e),$m(t.route,e),Wm(n,t.path),qm(n,t.route))),ft(t=>t!==!0,!0))}function $m(n,i){return n!==null&&i&&i(new br(n)),S(!0)}function Gm(n,i){return n!==null&&i&&i(new gr(n)),S(!0)}function qm(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return S(!0);let t=e.map(r=>Pi(()=>{let o=i._environmentInjector,a=vn(r,o),l=km(a)?a.canActivate(i,n):ye(o,()=>a(i,n));return Ft(l).pipe(ft())}));return S(t).pipe(hn())}function Wm(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Rm(o)).filter(o=>o!==null).map(o=>Pi(()=>{let a=o.guards.map(l=>{let s=o.node._environmentInjector,d=vn(l,s),p=Lm(d)?d.canActivateChild(e,n):ye(s,()=>d(e,n));return Ft(p).pipe(ft())});return S(a).pipe(hn())}));return S(r).pipe(hn())}function Km(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return S(!0);let o=r.map(a=>{let l=i._environmentInjector,s=vn(a,l),d=Vm(s)?s.canDeactivate(n,i,e,t):ye(l,()=>s(n,i,e,t));return Ft(d).pipe(ft())});return S(o).pipe(hn())}function Zm(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return S(!0);let a=o.map(l=>{let s=vn(l,n),d=Pm(s)?s.canLoad(i,e):ye(n,()=>s(i,e)),p=Ft(d);return r?p.pipe(Zl(r)):p});return S(a).pipe(hn(),Yl(t))}function Yl(n){return uo(se(i=>{if(typeof i!="boolean")throw xr(n,i)}),k(i=>i===!0))}function Ym(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return S(!0);let l=a.map(s=>{let d=vn(s,n),p=Bm(d)?d.canMatch(i,e,r):ye(n,()=>d(i,e,r));return Ft(p).pipe(Zl(o))});return S(l).pipe(hn(),Yl(t))}var at=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},ui=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function Xm(n){throw new x(4e3,!1)}function Qm(n){throw Gl(!1,he.GuardRejected)}var ca=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[M])throw Xm(`${i.redirectTo}`);r=r.children[M]}}async applyRedirectCommands(i,e,t,r,o){let a=await Jm(e,r,o);if(a instanceof De)throw new ui(a);let l=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new ui(l);return l}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new De(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let l=o.substring(1);t[r]=e[l]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a=Object.create(null);return Object.entries(e.children).forEach(([l,s])=>{a[l]=this.createSegmentGroup(i,s,t,r)}),new $(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new x(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function Jm(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return sr(Ft(ye(e,()=>t(i))))}function ef(n,i){return n.providers&&!n._injector&&(n._injector=xo(n.providers,i,`Route: ${n.path}`)),n._injector??i}function $e(n){return n.outlet||M}function tf(n,i){let e=n.filter(t=>$e(t)===i);return e.push(...n.filter(t=>$e(t)!==i)),e}var da={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Xl(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function nf(n,i,e,t,r,o,a){let l=Ql(n,i,e);if(!l.matched)return S(l);let s=Xl(o(l));return t=ef(i,t),Ym(t,i,e,r,s,a).pipe(k(d=>d===!0?l:g({},da)))}function Ql(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?g({},da):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Dl)(e,n,i);if(!r)return g({},da);let o={};Object.entries(r.posParams??{}).forEach(([l,s])=>{o[l]=s.path});let a=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function _l(n,i,e,t,r){return e.length>0&&af(n,e,t,r)?{segmentGroup:new $(i,of(t,new $(e,n.children))),slicedSegments:[]}:e.length===0&&sf(n,e,t)?{segmentGroup:new $(n.segments,rf(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new $(n.segments,n.children),slicedSegments:e}}function rf(n,i,e,t){let r={};for(let o of e)if(Er(n,i,o)&&!t[$e(o)]){let a=new $([],{});r[$e(o)]=a}return g(g({},t),r)}function of(n,i){let e={};e[M]=i;for(let t of n)if(t.path===""&&$e(t)!==M){let r=new $([],{});e[$e(t)]=r}return e}function af(n,i,e,t){return e.some(r=>!Er(n,i,r)||!($e(r)!==M)?!1:!(t!==void 0&&$e(r)===t))}function sf(n,i,e){return e.some(t=>Er(n,i,t))}function Er(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function lf(n,i,e){return i.length===0&&!n.children[e]}var ua=class{};async function cf(n,i,e,t,r,o,a,l){return new ma(n,i,e,t,r,a,o,l).recognize()}var df=31,ma=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,l,s){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=l,this.abortSignal=s,this.applyRedirects=new ca(this.urlSerializer,this.urlTree)}noMatchError(i){return new x(4002,`'${i.segmentGroup}'`)}async recognize(){let i=_l(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new Te(t,e),o=new ci("",r),a=Ol(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new mn([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),M,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,M,e),rootSnapshot:e}}catch(t){if(t instanceof ui)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof at?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=await this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof Te?[a]:[]}async processChildren(i,e,t,r){let o=[];for(let s of Object.keys(t.children))s==="primary"?o.unshift(s):o.push(s);let a=[];for(let s of o){let d=t.children[s],p=tf(e,s),y=await this.processSegmentGroup(i,p,d,s,r);a.push(...y)}let l=Jl(a);return uf(l),l}async processSegment(i,e,t,r,o,a,l){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??i,e,s,t,r,o,a,l)}catch(d){if(d instanceof at||Wl(d))continue;throw d}if(lf(t,r,o))return new ua;throw new at(t)}async processSegmentAgainstRoute(i,e,t,r,o,a,l,s){if($e(t)!==a&&(a===M||!Er(r,o,t)))throw new at(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,s);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,s);throw new at(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,l){let{matched:s,parameters:d,consumedSegments:p,positionalParamSegments:y,remainingSegments:_}=Ql(e,r,o);if(!s)throw new at(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>df&&(this.allowRedirects=!1));let G=this.createSnapshot(i,r,o,d,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let ee=await this.applyRedirects.applyRedirectCommands(p,r.redirectTo,y,Xl(G),i),te=await this.applyRedirects.lineralizeSegments(r,ee);return this.processSegment(i,t,e,te.concat(_),a,!1,l)}createSnapshot(i,e,t,r,o){let a=new mn(t,r,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,ff(e),$e(e),e.component??e._loadedComponent??null,e,hf(e),i),l=ga(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(l.params),a.data=Object.freeze(l.data),a}async matchSegmentAgainstRoute(i,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=ve=>this.createSnapshot(i,t,ve.consumedSegments,ve.parameters,a),s=await sr(nf(e,t,r,i,this.urlSerializer,l,this.abortSignal));if(t.path==="**"&&(e.children={}),!s?.matched)throw new at(e);i=t._injector??i;let{routes:d}=await this.getChildConfig(i,t,r),p=t._loadedInjector??i,{parameters:y,consumedSegments:_,remainingSegments:G}=s,ee=this.createSnapshot(i,t,_,y,a),{segmentGroup:te,slicedSegments:J}=_l(e,_,G,d,o);if(J.length===0&&te.hasChildren()){let ve=await this.processChildren(p,d,te,ee);return new Te(ee,ve)}if(d.length===0&&J.length===0)return new Te(ee,[]);let Be=$e(t)===o,ge=await this.processSegment(p,d,te,J,Be?M:o,!0,ee);return new Te(ee,ge instanceof Te?[ge]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await sr(Zm(i,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Qm(e)}return{routes:[],injector:i}}};function uf(n){n.sort((i,e)=>i.value.outlet===M?-1:e.value.outlet===M?1:i.value.outlet.localeCompare(e.value.outlet))}function mf(n){let i=n.value.routeConfig;return i&&i.path===""}function Jl(n){let i=[],e=new Set;for(let t of n){if(!mf(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=Jl(t.children);i.push(new Te(t.value,r))}return i.filter(t=>!e.has(t))}function ff(n){return n.data||{}}function hf(n){return n.resolve||{}}function pf(n,i,e,t,r,o,a){return Je(async l=>{let{state:s,tree:d}=await cf(n,i,e,t,l.extractedUrl,r,o,a);return L(g({},l),{targetSnapshot:s,urlAfterRedirects:d})})}function gf(n){return Je(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return S(i);let r=new Set(t.map(l=>l.route)),o=new Set;for(let l of r)if(!o.has(l))for(let s of ec(l))o.add(s);let a=0;return be(o).pipe(Ut(l=>r.has(l)?vf(l,e,n):(l.data=ga(l,l.parent,n).resolve,S(void 0))),se(()=>a++),ho(1),Je(l=>a===o.size?S(i):ue))})}function ec(n){let i=n.children.map(e=>ec(e)).flat();return[n,...i]}function vf(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!zl(t)&&(r[mi]=t.title),Pi(()=>(n.data=ga(n,n.parent,e).resolve,bf(r,n,i).pipe(k(o=>(n._resolvedData=o,n.data=g(g({},n.data),o),null)))))}function bf(n,i,e){let t=Jo(n);if(t.length===0)return S({});let r={};return be(t).pipe(Je(o=>yf(n[o],i,e).pipe(ft(),se(a=>{if(a instanceof fn)throw xr(new yt,a);r[o]=a}))),ho(1),k(()=>r),Bt(o=>Wl(o)?ue:Oi(o)))}function yf(n,i,e){let t=i._environmentInjector,r=vn(n,t),o=r.resolve?r.resolve(i,e):ye(t,()=>r(i,e));return Ft(o)}var tc=new v("");function fa(n){return Pe(i=>{let e=n(i);return e?be(e).pipe(k(()=>i)):S(i)})}var _a=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===M);return t}getResolvedTitleForRoute(e){return e.data[mi]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>c(nc)})}return n})(),nc=(()=>{class n extends _a{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(E(hl))};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bn=new v("",{factory:()=>({})}),pi=new v(""),ic=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(Ls);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await wl(ye(e,()=>t.loadComponent())),a=await oc(Mo(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await rc(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();async function rc(n,i,e,t){let r=await wl(ye(e,()=>n.loadChildren())),o=await oc(Mo(r)),a;o instanceof Ts||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),t&&t(n);let l,s,d=!1,p;return Array.isArray(a)?(s=a,d=!0):(l=a.create(e).injector,p=a,s=l.get(pi,[],{optional:!0,self:!0}).flat()),{routes:s.map(ya),injector:l,factory:p}}async function oc(n){return n}var Nr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>c(_f)})}return n})(),_f=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),ac=new v("");var Sf=()=>{},sc=new v(""),lc=(()=>{class n{currentNavigation=A(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=A(null);events=new P;transitionAbortWithErrorSubject=new P;configLoader=c(ic);environmentInjector=c(Ee);destroyRef=c(Ue);urlSerializer=c(pn);rootContexts=c(gn);location=c(nn);inputBindingEnabled=c(wr,{optional:!0})!==null;titleStrategy=c(_a);options=c(bn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||wm;urlHandlingStrategy=c(Nr);createViewTransition=c(ac,{optional:!0});navigationErrorHandler=c(sc,{optional:!0});routerResourcesFeature=c(tc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>S(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new hr(r)),t=r=>this.events.next(new pr(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;F(()=>{this.transitions?.next(L(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new we(null),this.transitions.pipe(ne(t=>t!==null),Pe(t=>{let r=!0,o=!1,a=new AbortController,l=()=>!o&&this.currentTransition?.id===t.id;return S(t).pipe(Pe(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",he.SupersededByNewNavigation),ue;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:d?L(g({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let p=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),y=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!p&&y!=="reload")return this.events.next(new st(s.id,this.urlSerializer.serialize(s.rawUrl),"",oi.IgnoredSameUrlNavigation)),s.resolve(!1),ue;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return S(s).pipe(Pe(_=>(this.events.next(new Rt(_.id,this.urlSerializer.serialize(_.extractedUrl),_.source,_.restoredState)),_.id!==this.navigationId?ue:Promise.resolve(_))),pf(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),se(_=>{t.targetSnapshot=_.targetSnapshot,t.urlAfterRedirects=_.urlAfterRedirects,this.currentNavigation.update(G=>(G.finalUrl=_.urlAfterRedirects,G)),this.events.next(new si)}),Pe(_=>be(t.routesRecognizeHandler.deferredHandle??S(void 0)).pipe(k(()=>_))),se(()=>{let _=new ai(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)}));if(p&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:_,extractedUrl:G,source:ee,restoredState:te,extras:J}=s,Be=new Rt(_,this.urlSerializer.serialize(G),ee,te);this.events.next(Be);let ge=Ul(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=L(g({},s),{targetSnapshot:ge,urlAfterRedirects:G,extras:L(g({},J),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ve=>(ve.finalUrl=G,ve)),S(t)}else return this.events.next(new st(s.id,this.urlSerializer.serialize(s.extractedUrl),"",oi.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ue}),k(s=>{let d=new dr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(d),this.currentTransition=t=L(g({},s),{guards:Im(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),jm(s=>this.events.next(s)),Pe(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw xr(this.urlSerializer,s.guardsResult);let d=new ur(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(d),!l())return ue;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",he.GuardRejected),ue;if(s.guards.canActivateChecks.length===0)return S(s);let p=new mr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(p),!l())return ue;let y=!1;return S(s).pipe(gf(this.paramsInheritanceStrategy),se({next:()=>{y=!0;let _=new fr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)},complete:()=>{y||this.cancelNavigationTransition(s,"",he.NoDataFromResolver)}}))}),fa(s=>{let d=y=>{let _=[];if(y.routeConfig?._loadedComponent)y.component=y.routeConfig?._loadedComponent;else if(y.routeConfig?.loadComponent){let G=y._environmentInjector;_.push(this.configLoader.loadComponent(G,y.routeConfig).then(ee=>{y.component=ee}))}for(let G of y.children)_.push(...d(G));return _},p=d(s.targetSnapshot.root);return p.length===0?S(s):be(Promise.all(p).then(()=>s))}),Pe(s=>{let{newlyCreatedRoutes:d,state:p}=Em(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=t=s=L(g({},s),{targetRouterState:p,newlyCreatedRoutes:d}),this.currentNavigation.update(y=>(y.targetRouterState=p,y)),S(s)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(s=>s),fa(()=>this.afterPreactivation()),Pe(()=>{let{currentSnapshot:s,targetSnapshot:d}=t,p=this.createViewTransition?.(this.environmentInjector,s.root,d.root);return p?be(p).pipe(k(()=>t)):S(t)}),Ke(1),Pe(s=>{r=!1,this.events.next(new dn);let d=t.beforeActivateHandler.deferredHandle;return d?be(d.then(()=>s)):S(s)}),se(s=>{new la(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),l()&&(cc(s.targetRouterState),o=!0,this.currentNavigation.update(d=>(d.abort=Sf,d)),this.lastSuccessfulNavigation.set(F(this.currentNavigation)),this.events.next(new Ge(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Ze(Kl(a.signal).pipe(ne(()=>!o&&r),se(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",he.Aborted)}))),se({complete:()=>{o=!0}}),Ze(this.transitionAbortWithErrorSubject.pipe(se(s=>{throw s}))),jt(()=>{a.abort(),o||this.cancelNavigationTransition(t,"",he.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Bt(s=>{if(o=!0,Sl(t),this.destroyed)return t.resolve(!1),ue;if(ql(s))this.events.next(new Le(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Am(s)?this.events.next(new un(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let d=new Tt(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let p=ye(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(p instanceof fn){let{message:y,cancellationCode:_}=xr(this.urlSerializer,p);this.events.next(new Le(t.id,this.urlSerializer.serialize(t.extractedUrl),y,_)),this.events.next(new un(p.redirectTo,p.navigationBehaviorOptions))}else throw this.events.next(d),s}catch(p){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(p)}}return ue}))}))}cancelNavigationTransition(e,t,r){Sl(e);let o=new Le(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=F(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function xf(n){return n!==ni}function Sl(n){for(let i of n.newlyCreatedRoutes??[])i._localInjector?.destroy(),i._localInjector=void 0;cc(n.targetRouterState)}function cc(n){if(!n)return;let i=e=>{e.value.pending?.set(!1),e.children.forEach(i)};i(n._root)}var dc=new v("");var uc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>c(Df)})}return n})(),Cr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Df=(()=>{class n extends Cr{static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),Mr=(()=>{class n{urlSerializer=c(pn);options=c(bn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(nn);urlHandlingStrategy=c(Nr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new De;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof De?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Ul(null,c(Ee));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:()=>c(Cf)})}return n})(),Cf=(()=>{class n extends Mr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof Rt?this.updateStateMemento():e instanceof st?this.commitTransition(t):e instanceof ai?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof dn?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Le&&!Bl(e)?this.restoreHistory(t):e instanceof Tt?this.restoreHistory(t,!0):e instanceof Ge&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:l}=r;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,d=g(g({},l),this.generateNgRouterState(o,s,t));this.location.replaceState(e,"",d)}else{let s=g(g({},l),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):g({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function Sa(n,i){n.events.pipe(ne(e=>e instanceof Ge||e instanceof Le||e instanceof Tt||e instanceof st),k(e=>e instanceof Ge||e instanceof st?0:(e instanceof Le?e.code===he.Redirect||e.code===he.SupersededByNewNavigation:!1)?2:1),ne(e=>e!==2),Ke(1)).subscribe(()=>{i()})}var Ot=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Do);stateManager=c(Mr);options=c(bn,{optional:!0})||{};pendingTasks=c(bs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(lc);urlSerializer=c(pn);location=c(nn);urlHandlingStrategy=c(Nr);injector=c(Ee);_events=new P;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(uc);injectorCleanup=c(dc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(pi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(wr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ce;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=F(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof Le&&t.code!==he.Redirect&&t.code!==he.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Ge)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof un){let a=t.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),s=g({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||xf(r.source)},a);this.scheduleNavigation(l,ni,null,s,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Dm(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ni,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,l=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=L(g({},o),{browserUrl:e})),r){let d=g({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let s=this.parseUrl(l);this.scheduleNavigation(s,t,a,o).catch(d=>{this.disposed||this.injector.get(Vn)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return F(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ya),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:l,preserveFragment:s}=t,d=s?this.currentUrlTree.fragment:a,p=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":p=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":p=this.currentUrlTree.queryParams;break;default:p=o||null}p!==null&&(p=this.removeEmptyProps(p));let y;try{let _=r?r.snapshot:this.routerState.snapshot.root;y=Pl(_)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),y=this.currentUrlTree.root}return kl(y,e,p,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=_t(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ni,null,t)}navigate(e,t={skipLocationChange:!1}){return wf(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Ht(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=g({},ha):t===!1?r=g({},cn):r=g(g({},cn),t),_t(e))return ea(this.currentUrlTree,e,r);let o=this.parseUrl(e);return ea(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let l,s,d;a?(l=a.resolve,s=a.reject,d=a.promise):d=new Promise((y,_)=>{l=y,s=_});let p=this.pendingTasks.add();return Sa(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(p))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:l,reject:s,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function wf(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new x(4008,!1)}var Mf=(()=>{class n{router=c(Ot);stateManager=c(Mr);fragment=A("");queryParams=A({});path=A("");serializer=c(pn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Ge&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new De(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),yn=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new Jt("href"),{optional:!0});reactiveHref=No(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return F(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return F(this._target)}_target=A(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return F(this._queryParams)}_queryParams=A(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return F(this._fragment)}_fragment=A(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return F(this._queryParamsHandling)}_queryParamsHandling=A(void 0);set state(e){this._state.set(e)}get state(){return F(this._state)}_state=A(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return F(this._info)}_info=A(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return F(this._relativeTo)}_relativeTo=A(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return F(this._preserveFragment)}_preserveFragment=A(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return F(this._skipLocationChange)}_skipLocationChange=A(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return F(this._replaceUrl)}_replaceUrl=A(!1);browserUrl=Et(void 0);isAnchorElement;onChanges=new P;applicationErrorHandler=c(Vn);options=c(bn,{optional:!0});reactiveRouterState=c(Mf);constructor(e,t,r,o,a,l){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=l;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s==="a"||s==="area"||!!(typeof customElements=="object"&&customElements.get(s)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=A(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(_t(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let l=this._urlTree();if(l===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let s=this.browserUrl(),d=g({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(l,d)?.catch(p=>{this.applicationErrorHandler(p)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=K(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:_t(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return F(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(Z(Ot),Z(lt),bo("tabindex"),Z(le),Z(U),Z(tn))};static \u0275dir=C({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&fe("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&ie("href",r.reactiveHref(),Is)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Q],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Q],replaceUrl:[2,"replaceUrl","replaceUrl",Q],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[me]})}return n})(),xa=(()=>{class n{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new W;link=c(yn,{optional:!0});constructor(e,t,r,o){this.router=e,this.element=t,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof Ge&&this.update()})}ngAfterContentInit(){S(this.links.changes,S(null)).pipe(fo()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=be(e).pipe(fo()).subscribe(t=>{this._isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let t=Array.isArray(e)?e:e.split(" ");this.classes=t.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let t=this.routerLinkActiveOptions;if(t===null)return()=>!1;let r;return t===void 0?r=g({},cn):Af(t)?r=t:t.exact??!1?r=g({},ha):r=g({},cn),o=>{let a=o.urlTree;return a?F(pa(a,e,r)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(t){return new(t||n)(Z(Ot),Z(U),Z(le),Z(Re))};static \u0275dir=C({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(t,r,o){if(t&1&&it(o,yn,5),t&2){let a;Y(a=X())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[me]})}return n})();function Af(n){let i=n;return!!(i.paths||i.matrixParams||i.queryParams||i.fragment)}var If=new v("");function Da(n,...i){return et([{provide:pi,multi:!0,useValue:n},{provide:lt,useFactory:Rf},{provide:Co,multi:!0,useFactory:Tf},i.map(e=>e.\u0275providers)])}function Rf(){return c(Ot).routerState.root}function Tf(){let n=c(_e);return i=>{let e=n.get(Yt);if(i!==e.components[0])return;let t=n.get(Ot),r=n.get(Ff);n.get(Of)===1&&t.initialNavigation(),n.get(Pf,null,{optional:!0})?.setUpPreloading(),n.get(If,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ff=new v("",{factory:()=>new P}),Of=new v("",{factory:()=>1});var Pf=new v("");var kf="@",Lf=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(_e);loadingSchedulerFn=c(Vf,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-MUSCNQ22.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new x(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Ca(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let l=a.createRenderer(e,t);o.use(l),this.scheduler??=this.injector.get(Ss,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){ji()};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Ca=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(kf)}},Vf=new v("");function mc(n="animations"){return _o("NgAsyncAnimations"),et([{provide:Ye,useFactory:()=>new Lf(c(T),c(Yn),c(B),n)},{provide:Vi,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Pt(n,i){let t=!i?.manualCleanup?i?.injector?.get(Ue)??c(Ue):null,r=Uf(i?.equal),o;i?.requireSync?o=A({kind:0},{equal:r}):o=A({kind:1,value:i?.initialValue},{equal:r});let a,l=n.subscribe({next:s=>o.set({kind:1,value:s}),error:s=>{o.set({kind:2,error:s}),a?.()},complete:()=>{a?.()}});if(i?.requireSync&&o().kind===0)throw new x(601,!1);return a=t?.onDestroy(l.unsubscribe.bind(l)),K(()=>{let s=o();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new x(601,!1)}},{equal:i?.equal})}function Uf(n=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&n(i.value,e.value)}var wa;try{wa=typeof Intl<"u"&&Intl.v8BreakIterator}catch{wa=!1}var de=(()=>{class n{_platformId=c($t);isBrowser=this._platformId?Gs(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||wa)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Ea;function fc(){if(Ea==null){let n=typeof document<"u"?document.head:null;Ea=!!(n&&(n.createShadowRoot||n.attachShadow))}return Ea}function Na(n){if(fc()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function qe(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var gi;function hc(){if(gi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>gi=!0}))}finally{gi=gi||!1}return gi}function _n(n){return hc()?n:!!n.capture}var Sn,pc=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ma(){if(Sn)return Sn;if(typeof document!="object"||!document)return Sn=new Set(pc),Sn;let n=document.createElement("input");return Sn=new Set(pc.filter(i=>(n.setAttribute("type",i),n.type===i))),Sn}var jf=new v("cdk-dir-doc",{providedIn:"root",factory:()=>c(T)}),zf=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function gc(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?zf.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Aa=(()=>{class n{get value(){return this.valueSignal()}valueSignal=A("ltr");change=new W;constructor(){let e=c(jf,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(gc(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var pe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({})}return n})();var Hf=["*",[["mat-toolbar-row"]]],$f=["*","mat-toolbar-row"],Gf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),xn=(()=>{class n{_elementRef=c(U);_platform=c(de);_document=c(T);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&it(o,Gf,5),t&2){let a;Y(a=X())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(Qt(r.color?"mat-"+r.color:""),q("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:$f,decls:2,vars:0,template:function(t,r){t&1&&(xe(Hf),H(0),H(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return n})();var Dn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({imports:[pe]})}return n})();function vi(n){return n.buttons===0||n.detail===0}function bi(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}function We(n){return n instanceof U?n.nativeElement:n}var vc=new v("cdk-input-modality-detector-options"),bc={ignoreKeys:[18,17,224,91,16]},yc=650,Ra={passive:!0,capture:!0},_c=(()=>{class n{_platform=c(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new we(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=qe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<yc||(this._modality.next(vi(e)?"keyboard":"mouse"),this._mostRecentTarget=qe(e))};_onTouchstart=e=>{if(bi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=qe(e)};constructor(){let e=c(B),t=c(T),r=c(vc,{optional:!0});if(this._options=g(g({},bc),r),this.modalityDetected=this._modality.pipe(hs(1)),this.modalityChanged=this.modalityDetected.pipe(us()),this._platform.isBrowser){let o=c(Ye).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Ra),o.listen(t,"mousedown",this._onMousedown,Ra),o.listen(t,"touchstart",this._onTouchstart,Ra)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),yi=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(yi||{}),Sc=new v("cdk-focus-monitor-default-options"),Ar=_n({passive:!0,capture:!0}),_i=(()=>{class n{_ngZone=c(B);_platform=c(de);_inputModalityDetector=c(_c);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(T);_stopInputModalityDetector=new P;constructor(){let e=c(Sc,{optional:!0});this._detectionMode=e?.detectionMode||yi.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=qe(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=We(e);if(!this._platform.isBrowser||r.nodeType!==1)return S();let o=Na(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let l={checkChildren:t,subject:new P,rootNode:o};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=We(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=We(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([l,s])=>this._originChanged(l,t,s)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===yi.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===yi.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?yc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=qe(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ar),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ar)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ze(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ar),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ar),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Ir=new WeakMap,ct=(()=>{class n{_appRef;_injector=c(_e);_environmentInjector=c(Ee);load(e){let t=this._appRef=this._appRef||this._injector.get(Yt),r=Ir.get(t);r||(r={loaders:new Set,refs:[]},Ir.set(t,r),t.onDestroy(()=>{Ir.get(t)?.refs.forEach(o=>o.destroy()),Ir.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Io(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Rr;function qf(){if(Rr===void 0&&(Rr=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{Rr=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return Rr}function Cn(n){return qf()?.createHTML(n)||n}var xc=new Set,kt,Ta=(()=>{class n{_platform=c(de);_nonce=c(wt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Kf}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Wf(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function Wf(n,i){if(!xc.has(n))try{kt||(kt=document.createElement("style"),i&&kt.setAttribute("nonce",i),kt.setAttribute("type","text/css"),document.head.appendChild(kt)),kt.sheet&&(kt.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),xc.add(n))}catch(e){console.error(e)}}function Kf(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Zf=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Dc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({providers:[Zf]})}return n})();var Yf=200,Tr=class{_letterKeyStream=new P;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new P;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Yf;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(se(e=>this._pressedLetters.push(e)),ds(i),ne(()=>this._pressedLetters.length>0),k(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Fr(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Or=class{_items;_activeItemIndex=A(-1);_activeItem=A(null);_wrap=!1;_typeaheadSubscription=Ce.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Un?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):ht(i)&&(this._effectRef=je(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new P;change=new P;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Tr(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Fr(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return ht(this._items)?this._items():this._items instanceof Un?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Si=class extends Or{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Cc=new Map,Oe=class n{_appId=c(Bn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=Cc.get(i);return t===void 0?t=0:t++,Cc.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})};function wn(n){return n!=null&&`${n}`!="false"}var Fa=class{_box;_destroyed=new P;_resizeSubject=new P;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Vt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(ne(e=>e.some(t=>t.target===i)),zt({bufferSize:1,refCount:!0}),Ze(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},wc=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=c(B);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Fa(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Qf=new v("MATERIAL_ANIMATIONS"),Ec=null;function Jf(){return c(Qf,{optional:!0})?.animationsDisabled||c(Vi,{optional:!0})==="NoopAnimations"?"di-disabled":(Ec??=c(Ta).matchMedia("(prefers-reduced-motion)").matches,Ec?"reduced-motion":"enabled")}function St(){return Jf()!=="enabled"}var eh=["notch"],th=["*"],Nc=["iconPrefixContainer"],Mc=["textPrefixContainer"],Ac=["iconSuffixContainer"],Ic=["textSuffixContainer"],nh=["textField"],ih=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],rh=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function oh(n,i){n&1&&Ie(0,"span",21)}function ah(n,i){if(n&1&&(m(0,"label",20),H(1,1),I(2,oh,1,0,"span",21),u()),n&2){let e=w(2);Ae("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ie("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),R(!e.hideRequiredMarker&&e._control.required?2:-1)}}function sh(n,i){if(n&1&&I(0,ah,3,5,"label",20),n&2){let e=w();R(e._hasFloatingLabel()?0:-1)}}function lh(n,i){n&1&&Ie(0,"div",7)}function ch(n,i){}function dh(n,i){if(n&1&&Zt(0,ch,0,0,"ng-template",13),n&2){w(2);let e=Hn(1);Ae("ngTemplateOutlet",e)}}function uh(n,i){if(n&1&&(m(0,"div",9),I(1,dh,1,1,null,13),u()),n&2){let e=w();Ae("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),R(e._forceDisplayInfixLabel()?-1:1)}}function mh(n,i){n&1&&(m(0,"div",10,2),H(2,2),u())}function fh(n,i){n&1&&(m(0,"div",11,3),H(2,3),u())}function hh(n,i){}function ph(n,i){if(n&1&&Zt(0,hh,0,0,"ng-template",13),n&2){w();let e=Hn(1);Ae("ngTemplateOutlet",e)}}function gh(n,i){n&1&&(m(0,"div",14,4),H(2,4),u())}function vh(n,i){n&1&&(m(0,"div",15,5),H(2,5),u())}function bh(n,i){n&1&&Ie(0,"div",16)}function yh(n,i){n&1&&(m(0,"div",18),H(1,6),u())}function _h(n,i){if(n&1&&(m(0,"mat-hint",22),h(1),u()),n&2){let e=w(2);Ae("id",e._hintLabelId),f(),b(e.hintLabel)}}function Sh(n,i){if(n&1&&(m(0,"div",19),I(1,_h,2,2,"mat-hint",22),H(2,7),Ie(3,"div",23),H(4,8),u()),n&2){let e=w();f(),R(e.hintLabel?1:-1)}}var xi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-label"]]})}return n})(),xh=new v("MatError");var Oa=(()=>{class n{align="start";id=c(Oe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(zi("id",r.id),ie("align",null),q("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Lc=new v("MatPrefix"),Pa=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[ce([{provide:Lc,useExisting:n}])]})}return n})(),Dh=new v("MatSuffix");var Vc=new v("FloatingLabelParent"),Rc=(()=>{class n{_elementRef=c(U);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(wc);_ngZone=c(B);_parent=c(Vc);_resizeSubscription=new Ce;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Ch(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&q("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Ch(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Tc="mdc-line-ripple--active",Pr="mdc-line-ripple--deactivating",Fc=(()=>{class n{_elementRef=c(U);_cleanupTransitionEnd;constructor(){let e=c(B),t=c(le);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Pr),e.add(Tc)}deactivate(){this._elementRef.nativeElement.classList.add(Pr)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Pr);e.propertyName==="opacity"&&r&&t.remove(Tc,Pr)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Oc=(()=>{class n{_elementRef=c(U);_ngZone=c(B);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&zn(eh,5),t&2){let o;Y(o=X())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&q("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:th,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(xe(),nt(0,"div",1),ze(1,"div",2,0),H(3),Xe(),nt(4,"div",3))},encapsulation:2})}return n})(),ka=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n})}return n})();var La=new v("MatFormField"),wh=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Pc="fill",Eh="auto",kc="fixed",Nh="translateY(-50%)",kr=(()=>{class n{_elementRef=c(U);_changeDetectorRef=c(Re);_platform=c(de);_idGenerator=c(Oe);_ngZone=c(B);_defaults=c(wh,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=$n("iconPrefixContainer");_textPrefixContainerSignal=$n("textPrefixContainer");_iconSuffixContainerSignal=$n("iconSuffixContainer");_textSuffixContainerSignal=$n("textSuffixContainer");_prefixSuffixContainers=K(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Vs(xi);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=wn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Eh}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Pc;this._appearanceSignal.set(t)}_appearanceSignal=A(Pc);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||kc}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||kc}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new P;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=St();constructor(){let e=this._defaults,t=c(Aa);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),je(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=K(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Dt([void 0,void 0]),k(()=>[t.errorState,t.userAriaDescribedBy]),ms(),ne(([[o,a],[l,s]])=>o!==l||a!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Ze(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Li(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ao({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=K(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,p=this._currentDirection==="rtl"?"-1":"1",y=`${a+l}px`,G=`calc(${p} * (${y} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ee=`var(--mat-mdc-form-field-label-transform, ${Nh} translateX(${G}))`,te=a+l+s+d;return[ee,te]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Fs(o,r._labelChild,xi,5),it(o,ka,5)(o,Lc,5)(o,Dh,5)(o,xh,5)(o,Oa,5)),t&2){Eo();let a;Y(a=X())&&(r._formFieldControl=a.first),Y(a=X())&&(r._prefixChildren=a),Y(a=X())&&(r._suffixChildren=a),Y(a=X())&&(r._errorChildren=a),Y(a=X())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(Os(r._iconPrefixContainerSignal,Nc,5)(r._textPrefixContainerSignal,Mc,5)(r._iconSuffixContainerSignal,Ac,5)(r._textSuffixContainerSignal,Ic,5),zn(nh,5)(Nc,5)(Mc,5)(Ac,5)(Ic,5)(Rc,5)(Oc,5)(Fc,5)),t&2){Eo(4);let o;Y(o=X())&&(r._textField=o.first),Y(o=X())&&(r._iconPrefixContainer=o.first),Y(o=X())&&(r._textPrefixContainer=o.first),Y(o=X())&&(r._iconSuffixContainer=o.first),Y(o=X())&&(r._textSuffixContainer=o.first),Y(o=X())&&(r._floatingLabel=o.first),Y(o=X())&&(r._notchedOutline=o.first),Y(o=X())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&q("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ce([{provide:La,useExisting:n},{provide:Vc,useExisting:n}])],ngContentSelectors:rh,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(xe(ih),Zt(0,sh,1,1,"ng-template",null,0,ks),m(2,"div",6,1),fe("click",function(a){return r._control.onContainerClick(a)}),I(4,lh,1,0,"div",7),m(5,"div",8),I(6,uh,2,2,"div",9),I(7,mh,3,0,"div",10),I(8,fh,3,0,"div",11),m(9,"div",12),I(10,ph,1,1,null,13),H(11),u(),I(12,gh,3,0,"div",14),I(13,vh,3,0,"div",15),u(),I(14,bh,1,0,"div",16),u(),m(15,"div",17),I(16,yh,2,0,"div",18)(17,Sh,5,1,"div",19),u()),t&2){let o;f(2),q("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),f(2),R(!r._hasOutline()&&!r._control.disabled?4:-1),f(2),R(r._hasOutline()?6:-1),f(),R(r._hasIconPrefix?7:-1),f(),R(r._hasTextPrefix?8:-1),f(2),R(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),f(2),R(r._hasTextSuffix?12:-1),f(),R(r._hasIconSuffix?13:-1),f(),R(r._hasOutline()?-1:14),f(),q("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();f(),R((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Rc,Oc,To,Fc,Oa],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return n})();var Di=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({imports:[Dc,kr,pe]})}return n})();var Ah=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})(),Ih={passive:!0},Bc=(()=>{class n{_platform=c(de);_ngZone=c(B);_renderer=c(Ye).createRenderer(null,null);_styleLoader=c(ct);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return ue;this._styleLoader.load(Ah);let t=We(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new P,a="cdk-text-field-autofilled",l=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},s=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Ih)));return this._monitoredElements.set(t,{subject:o,unlisten:s}),o}stopMonitoring(e){let t=We(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Uc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({})}return n})();var Wc=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(Z(le),Z(U))};static \u0275dir=C({type:n})}return n})(),Rh=(()=>{class n extends Wc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=tt(n)))(r||n)}})();static \u0275dir=C({type:n,features:[Se]})}return n})(),Th=new v("");var Fh={provide:Th,useExisting:Ln(()=>Kc),multi:!0};function Oh(){let n=ke()?ke().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Ph=new v(""),Kc=(()=>{class n extends Wc{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Oh())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(Z(le),Z(U),Z(Ph,8))};static \u0275dir=C({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&fe("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[ce([Fh]),Se]})}return n})();function Ua(n){return n==null||ja(n)===0}function ja(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var za=new v(""),Zc=new v(""),kh=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ai=class{static min(i){return Lh(i)}static max(i){return Vh(i)}static required(i){return Yc(i)}static requiredTrue(i){return Bh(i)}static email(i){return Uh(i)}static minLength(i){return jh(i)}static maxLength(i){return zh(i)}static pattern(i){return Hh(i)}static nullValidator(i){return Vr()}static compose(i){return nd(i)}static composeAsync(i){return id(i)}};function Lh(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function Vh(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function Yc(n){return Ua(n.value)?{required:!0}:null}function Bh(n){return n.value===!0?null:{required:!0}}function Uh(n){return Ua(n.value)||kh.test(n.value)?null:{email:!0}}function jh(n){return i=>{let e=i.value?.length??ja(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function zh(n){return i=>{let e=i.value?.length??ja(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Hh(n){if(!n)return Vr;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(Ua(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Vr(n){return null}function Xc(n){return n!=null}function Qc(n){return Kt(n)?be(n):n}function Jc(n){let i={};return n.forEach(e=>{i=e!=null?g(g({},i),e):i}),Object.keys(i).length===0?null:i}function ed(n,i){return i.map(e=>e(n))}function $h(n){return!n.validate}function td(n){return n.map(i=>$h(i)?i:e=>i.validate(e))}function nd(n){if(!n)return null;let i=n.filter(Xc);return i.length==0?null:function(e){return Jc(ed(e,i))}}function Ha(n){return n!=null?nd(td(n)):null}function id(n){if(!n)return null;let i=n.filter(Xc);return i.length==0?null:function(e){let t=ed(e,i).map(Qc);return ki(t).pipe(k(Jc))}}function $a(n){return n!=null?id(td(n)):null}function jc(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function rd(n){return n._rawValidators}function od(n){return n._rawAsyncValidators}function Va(n){return n?Array.isArray(n)?n:[n]:[]}function Br(n,i){return Array.isArray(n)?n.includes(i):n===i}function zc(n,i){let e=Va(i);return Va(n).forEach(r=>{Br(e,r)||e.push(r)}),e}function Hc(n,i){return Va(i).filter(e=>!Br(n,e))}var Ur=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Ha(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=$a(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Mn=class extends Ur{name;get formDirective(){return null}get path(){return null}};var Ci="VALID",Lr="INVALID",En="PENDING",wi="DISABLED",xt=class{},jr=class extends xt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Ni=class extends xt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Mi=class extends xt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Nn=class extends xt{status;source;constructor(i,e){super(),this.status=i,this.source=e}},zr=class extends xt{source;constructor(i){super(),this.source=i}},An=class extends xt{source;constructor(i){super(),this.source=i}};function ad(n){return(Kr(n)?n.validators:n)||null}function Gh(n){return Array.isArray(n)?Ha(n):n||null}function sd(n,i){return(Kr(i)?i.asyncValidators:n)||null}function qh(n){return Array.isArray(n)?$a(n):n||null}function Kr(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Wh(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new x(1e3,"");if(!ld(t,e))throw new x(1001,"")}function Kh(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new x(-1002,"")})}var Hr=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=A(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return F(this.statusReactive)}set status(i){F(()=>this.statusReactive.set(i))}_status=K(()=>this.statusReactive());statusReactive=A(void 0);get valid(){return this.status===Ci}get invalid(){return this.status===Lr}get pending(){return this.status===En}get disabled(){return this.status===wi}get enabled(){return this.status!==wi}errors;get pristine(){return F(this.pristineReactive)}set pristine(i){F(()=>this.pristineReactive.set(i))}_pristine=K(()=>this.pristineReactive());pristineReactive=A(!0);get dirty(){return!this.pristine}get touched(){return F(this.touchedReactive)}set touched(i){F(()=>this.touchedReactive.set(i))}_touched=K(()=>this.touchedReactive());touchedReactive=A(!1);get untouched(){return!this.touched}_events=new P;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(zc(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(zc(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Hc(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Hc(i,this._rawAsyncValidators))}hasValidator(i){return Br(this._rawValidators,i)}hasAsyncValidator(i){return Br(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(L(g({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Mi(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Mi(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(L(g({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Ni(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Ni(!0,t))}markAsPending(i={}){this.status=En;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Nn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(L(g({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=wi,this.errors=null,this._forEachChild(r=>{r.disable(L(g({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new jr(this.value,t)),this._events.next(new Nn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(L(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ci,this._forEachChild(t=>{t.enable(L(g({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(L(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ci||this.status===En)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new jr(this.value,e)),this._events.next(new Nn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(L(g({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?wi:Ci}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=En,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Qc(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Nn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?wi:this.errors?Lr:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(En)?En:this._anyControlsHaveStatus(Lr)?Lr:Ci}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Ni(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Mi(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Kr(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Gh(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=qh(this._rawAsyncValidators)}_updateHasRequiredValidator(){F(()=>this._hasRequired.set(this.hasValidator(Ai.required)))}};function ld(n,i){return Object.hasOwn(n,i)}function Zh(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function Yh(n,i,e,t){switch(e){case"name":n.setAttribute(i,e,t);break;case"disabled":case"readonly":case"required":t?n.setAttribute(i,e,""):n.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?n.setAttribute(i,e,t.toString()):n.removeAttribute(i,e);break}}var Ba=class{kind;context;control;message;constructor({kind:i,context:e,control:t}){this.kind=i,this.context=e,this.control=t}};var Xh=(()=>{class n{_validator=Vr;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Vr,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,features:[me]})}return n})();var Qh={provide:za,useExisting:Ln(()=>cd),multi:!0};var cd=(()=>{class n extends Xh{required;inputName="required";normalizeInput=Q;createValidator=e=>Yc;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=tt(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&ie("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ce([Qh]),Se]})}return n})();var dd=new v("",{factory:()=>Jh}),Jh="always";function $c(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),Gr(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function $r(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function ud(n,i){let e=rd(n);i.validator!==null?n.setValidators(jc(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=od(n);i.asyncValidator!==null?n.setAsyncValidators(jc(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();$r(i._rawValidators,r),$r(i._rawAsyncValidators,r)}function Gr(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=rd(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=od(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return $r(i._rawValidators,t),$r(i._rawAsyncValidators,t),e}function md(n,i){n==null,ud(n,i)}function ep(n,i){return Gr(n,i)}function tp(n){return Object.getPrototypeOf(n.constructor)===Rh}function fd(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function np(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(o=>{o.constructor===Kc?e=o:tp(o)?t=o:r=o}),r||t||e||null}function ip(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var qr=class extends Ur{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof An&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=np(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,t){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(Ue)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(Re);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new Ce,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof An&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Zh(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof cd))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let t=this.control,r=this.customControlBindings;Object.is(r.value,t.value)||(r.value=t.value,i.setCustomControlModelInput(t.value)),this.bindControlProperty(i,r,"touched",t.touched),this.bindControlProperty(i,r,"dirty",t.dirty),this.bindControlProperty(i,r,"valid",t.valid),this.bindControlProperty(i,r,"invalid",t.invalid),this.bindControlProperty(i,r,"pending",t.pending),this.bindControlProperty(i,r,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(i,r,"required",this.isRequired);let o=t.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);i.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,t,r){if(e[t]===r)return;e[t]=r;let o=i.setInputOnDirectives(t,r);this.isNativeFormElement&&!o&&(t==="disabled"||t==="required")&&this.renderer&&Yh(this.renderer,i.nativeElement,t,r)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([t,r])=>new Ba({context:r,kind:t,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,t=K(()=>{let r=i();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),je(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}};var Wr=class extends Hr{constructor(i,e,t){super(ad(e),sd(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let t=this._find(i);return t||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let t=this._find(i);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){let r=this._find(i);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){F(()=>{Kh(this,!0,i),Object.keys(i).forEach(t=>{Wh(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this._find(t);r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,L(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new An(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return ld(this.controls,i)?this.controls[i]:null}};var rp={provide:Mn,useExisting:Ln(()=>Ga)},Ei=Promise.resolve(),Ga=(()=>{class n extends Mn{callSetDisabledState;get submitted(){return F(this.submittedReactive)}_submitted=K(()=>this.submittedReactive());submittedReactive=A(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Wr({},Ha(e),$a(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ei.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ei.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ei.then(()=>{let t=this._findContainer(e.path),r=new Wr({});md(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ei.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Ei.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),fd(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new zr(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(Z(za,10),Z(Zc,10),Z(dd,8))};static \u0275dir=C({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&fe("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ce([rp]),Se]})}return n})();function Gc(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function qc(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var op=class extends Hr{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(ad(e),sd(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Kr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(qc(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){F(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new An(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Gc(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Gc(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){qc(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var ap=n=>n instanceof op;var sp=(()=>{class n extends Mn{callSetDisabledState;get submitted(){return F(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=K(()=>this._submittedReactive());_submittedReactive=A(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Gr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){$c(e.control||null,e,!1),ip(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,fd(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new zr(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&($c(t||null,e),ap(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);md(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&ep(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ud(this.form,this),this._oldForm&&Gr(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(Z(za,10),Z(Zc,10),Z(dd,8))};static \u0275dir=C({type:n,features:[Se,me]})}return n})(),lp={provide:Mn,useExisting:Ln(()=>qa)},qa=(()=>{class n extends sp{form=null;ngSubmit=new W;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=tt(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&fe("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ce([lp]),Se]})}return n})();var hd=new v("");var pd=new v("MAT_INPUT_VALUE_ACCESSOR");var gd=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Zr=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,r,o){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o,e?ht(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var cp=["button","checkbox","file","hidden","image","radio","range","reset","submit"],dp=new v("MAT_INPUT_CONFIG"),vd=(()=>{class n{_elementRef=c(U);_platform=c(de);ngControl=c(qr,{optional:!0,self:!0});_autofillMonitor=c(Bc);_ngZone=c(B);_formField=c(La,{optional:!0});_renderer=c(le);_uid=c(Oe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(dp,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new P;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=wn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ai.required)??!1}set required(e){this._required=wn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ma().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=wn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ma().has(e));constructor(){let e=c(Ga,{optional:!0}),t=c(qa,{optional:!0}),r=c(gd),o=c(pd,{optional:!0,self:!0}),a=c(hd,{optional:!0,self:!0}),l=this._elementRef.nativeElement,s=l.nodeName.toLowerCase();o?ht(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Zr(r,a||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&je(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){cp.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&fe("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(zi("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ie("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),q("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Q]},exportAs:["matInput"],features:[ce([{provide:ka,useExisting:n}]),me]})}return n})(),bd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({imports:[Di,Di,Uc,pe]})}return n})();var mp=["*"];var fp=new v("MAT_CARD_CONFIG"),In=(()=>{class n{appearance;constructor(){let e=c(fp,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&q("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:mp,decls:1,vars:0,template:function(t,r){t&1&&(xe(),H(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return n})();var yd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Rn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({imports:[pe]})}return n})();var Ve=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Ve||{}),Ka=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ve.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},_d=_n({passive:!0,capture:!0}),Za=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,_d)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,_d)))}_delegateEventHandler=i=>{let e=qe(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Ii={enterDuration:225,exitDuration:150},hp=800,Sd=_n({passive:!0,capture:!0}),xd=["mousedown","touchstart"],Dd=["mouseup","mouseleave","touchend","touchcancel"],pp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})(),Yr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Za;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=We(t)),o&&o.get(ct).load(pp)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},Ii),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||gp(i,e,r),l=i-r.left,s=e-r.top,d=o.enterDuration,p=document.createElement("div");p.classList.add("mat-ripple-element"),p.style.left=`${l-a}px`,p.style.top=`${s-a}px`,p.style.height=`${a*2}px`,p.style.width=`${a*2}px`,t.color!=null&&(p.style.backgroundColor=t.color),p.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(p);let y=window.getComputedStyle(p),_=y.transitionProperty,G=y.transitionDuration,ee=_==="none"||G==="0s"||G==="0s, 0s"||r.width===0&&r.height===0,te=new Ka(this,p,t,ee);p.style.transform="scale3d(1, 1, 1)",te.state=Ve.FADING_IN,t.persistent||(this._mostRecentTransientRipple=te);let J=null;return!ee&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Be=()=>{J&&(J.fallbackTimer=null),clearTimeout(ve),this._finishRippleTransition(te)},ge=()=>this._destroyRipple(te),ve=setTimeout(ge,d+100);p.addEventListener("transitionend",Be),p.addEventListener("transitioncancel",ge),J={onTransitionEnd:Be,onTransitionCancel:ge,fallbackTimer:ve}}),this._activeRipples.set(te,J),(ee||!d)&&this._finishRippleTransition(te),te}fadeOutRipple(i){if(i.state===Ve.FADING_OUT||i.state===Ve.HIDDEN)return;let e=i.element,t=g(g({},Ii),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Ve.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=We(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,xd.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Dd.forEach(e=>{this._triggerElement.addEventListener(e,this,Sd)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Ve.FADING_IN?this._startFadeOutTransition(i):i.state===Ve.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Ve.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Ve.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=vi(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+hp;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!bi(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Ve.VISIBLE||i.config.terminateOnPointerUp&&i.state===Ve.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(xd.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Dd.forEach(e=>i.removeEventListener(e,this,Sd)),this._pointerUpEventsRegistered=!1))}};function gp(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Cd=new v("mat-ripple-global-options");var vp={capture:!0},bp=["focus","mousedown","mouseenter","touchstart"],Ya="mat-ripple-loader-uninitialized",Xa="mat-ripple-loader-class-name",wd="mat-ripple-loader-centered",Xr="mat-ripple-loader-disabled",Ed=(()=>{class n{_document=c(T);_animationsDisabled=St();_globalRippleOptions=c(Cd,{optional:!0});_platform=c(de);_ngZone=c(B);_injector=c(_e);_eventCleanups;_hosts=new Map;constructor(){let e=c(Ye).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>bp.map(t=>e.listen(this._document,t,this._onInteraction,vp)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Ya,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Xa))&&e.setAttribute(Xa,t.className||""),t.centered&&e.setAttribute(wd,""),t.disabled&&e.setAttribute(Xr,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Xr,""):e.removeAttribute(Xr)}_onInteraction=e=>{let t=qe(e);if(t instanceof HTMLElement){let r=t.closest(`[${Ya}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Xa)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ii.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Ii.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Xr),rippleConfig:{centered:e.hasAttribute(wd),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},s=new Yr(l,this._ngZone,t,this._platform,this._injector),d=!l.rippleDisabled;d&&s.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:s,hasSetUpEvents:d}),e.removeAttribute(Ya)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Qr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var yp=new v("MAT_BUTTON_CONFIG");function Nd(n){return n==null?void 0:Hi(n)}var Md=(()=>{class n{_elementRef=c(U);_ngZone=c(B);_animationsDisabled=St();_config=c(yp,{optional:!0});_focusMonitor=c(_i);_cleanupClick;_renderer=c(le);_rippleLoader=c(Ed);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Et(!1,{transform:Q});constructor(){c(ct).load(Qr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(ie("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Qt(r.color?"mat-"+r.color:""),q("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Q],disabled:[2,"disabled","disabled",Q],ariaDisabled:[2,"aria-disabled","ariaDisabled",Q],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Q],tabIndex:[2,"tabIndex","tabIndex",Nd],_tabindex:[2,"tabindex","_tabindex",Nd],showProgress:[1,"showProgress"]}})}return n})();var Ad=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({imports:[pe]})}return n})();var _p=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Sp=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function xp(n,i){n&1&&(ze(0,"div",2),H(1,3),Xe())}var Id=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Rd=(()=>{class n extends Md{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Dp(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Id.get(this._appearance):null,o=Id.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Se],ngContentSelectors:Sp,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(xe(_p),nt(0,"span",0),H(1),ze(2,"span",1),H(3,1),Xe(),H(4,2),I(5,xp,2,0,"div",2),nt(6,"span",3)(7,"span",4)),t&2&&(q("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),f(5),R(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return n})();function Dp(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Td=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({imports:[Ad,pe]})}return n})();function Fd(n){return Error(`Unable to find icon with the name "${n}"`)}function wp(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Od(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Pd(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var dt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Ld=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new dt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(Me.HTML,r);if(!a)throw Pd(r);let l=Cn(a);return this._addSvgIconConfig(e,t,new dt("",l,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new dt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(Me.HTML,t);if(!o)throw Pd(t);let a=Cn(o);return this._addSvgIconSetConfig(e,new dt("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Me.RESOURCE_URL,e);if(!t)throw Od(e);let r=this._cachedIconsByUrl.get(t);return r?S(Jr(r)):this._loadSvgIconFromConfig(new dt(e,null)).pipe(se(o=>this._cachedIconsByUrl.set(t,o)),k(o=>Jr(o)))}getNamedSvgIcon(e,t=""){let r=kd(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Oi(Fd(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?S(Jr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(k(t=>Jr(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return S(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Bt(l=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Me.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(d)),S(null)})));return ki(o).pipe(k(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Fd(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),l=this._extractSvgIconFromSet(a,e,o.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(se(t=>e.svgText=t),k(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?S(null):this._fetchIcon(e).pipe(se(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let l=this._svgElementFromString(Cn("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Cn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:l}=r[o];a!=="id"&&t.setAttribute(a,l)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw wp();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(Me.RESOURCE_URL,t);if(!a)throw Od(t);let l=this._inProgressUrlFetches.get(a);if(l)return l;let s=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(k(d=>Cn(d)),jt(()=>this._inProgressUrlFetches.delete(a)),fs());return this._inProgressUrlFetches.set(a,s),s}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(kd(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Ep(o)?new dt(o.url,null,o.options):new dt(o,null)}}static \u0275fac=function(t){return new(t||n)(E(vt,8),E(Wo),E(T,8),E(Ct))};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Jr(n){return n.cloneNode(!0)}function kd(n,i){return n+":"+i}function Ep(n){return!!(n.url&&n.options)}var Np=["*"],Mp=new v("MAT_ICON_DEFAULT_OPTIONS"),Ap=new v("mat-icon-location",{providedIn:"root",factory:()=>{let n=c(T),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Vd=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ip=Vd.map(n=>`[${n}]`).join(", "),Rp=/^url\(['"]?#(.*?)['"]?\)$/,eo=(()=>{class n{_elementRef=c(U);_iconRegistry=c(Ld);_location=c(Ap);_errorHandler=c(Ct);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ce.EMPTY;constructor(){let e=c(new Jt("aria-hidden"),{optional:!0}),t=c(Mp,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Ip),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Vd.forEach(a=>{let l=t[o],s=l.getAttribute(a),d=s?s.match(Rp):null;if(d){let p=r.get(l);p||(p=[],r.set(l,p)),p.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Ke(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(ie("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Qt(r.color?"mat-"+r.color:""),q("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Q],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Np,decls:1,vars:0,template:function(t,r){t&1&&(xe(),H(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return n})(),to=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({imports:[pe]})}return n})();function Ud(n){let[i,e]=n.split(" ");return[i,parseInt(e,10)]}function Tp(n){return[...n].sort((i,e)=>{let[t,r]=Ud(i.unidade),[o,a]=Ud(e.unidade);return t.localeCompare(o)||r-a})}var Tn=class n{http=c(vt);boletosMes$=this.http.get("data/boletos.json").pipe(k(i=>L(g({},i),{boletos:Tp(i.boletos)})),zt(1));carregar(){return this.boletosMes$}static \u0275fac=function(e){return new(e||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})};var Fp=(n,i)=>i.documento;function Op(n,i){if(n&1&&(m(0,"span",3),h(1),u(),m(2,"span",13),h(3),u(),m(4,"span",13),h(5),u()),n&2){let e=i,t=w();f(),Ne("",e.mes," \u2014 ",e.condominio),f(2),He("Pagador: ",e.pagador),f(2),Ne("Vencimento: ",t.formatarData(e.vencimento)," \u2022 Banco ",e.banco)}}function Pp(n,i){n&1&&(m(0,"span",3),h(1,"Carregando boletos\u2026"),u())}function kp(n,i){if(n&1&&(m(0,"div",17),h(1),u()),n&2){let e=w().$implicit,t=w();f(),Ne("Doc. ",e.documento," \u2022 Venc. ",t.formatarData(i.vencimento))}}function Lp(n,i){if(n&1){let e=wo();m(0,"mat-card",10)(1,"mat-card-content")(2,"div",14)(3,"span",15),h(4),u(),m(5,"span",16),h(6),u()(),I(7,kp,2,2,"div",17),m(8,"div",18)(9,"div",19),h(10),u(),m(11,"button",20),fe("click",function(){let r=po(e).$implicit,o=w();return go(o.copiar(r))}),h(12),u()()()()}if(n&2){let e,t=i.$implicit,r=w();f(4),He("Unidade ",t.unidade),f(2),b(r.formatarMoeda(t.valor)),f(),R((e=r.dados())?7:-1,e),f(3),b(t.linhaDigitavel),f(),q("boleto__copiar--copiado",r.copiadoId()===t.documento),f(),He(" ",r.copiadoId()===t.documento?"Copiado!":"Copiar"," ")}}function Vp(n,i){n&1&&(m(0,"p",11),h(1,"Nenhum boleto encontrado para essa busca."),u())}var no=class n{boletosService=c(Tn);dados=Pt(this.boletosService.carregar());busca=A("");copiadoId=A(null);boletosFiltrados=K(()=>{let i=this.dados();if(!i)return[];let e=this.busca().trim().toLowerCase();return e?i.boletos.filter(t=>t.unidade.toLowerCase().includes(e)):i.boletos});totalBoletos=K(()=>this.dados()?.boletos.length??0);totalValor=K(()=>(this.dados()?.boletos??[]).reduce((i,e)=>i+e.valor,0));formatarMoeda(i){return i.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}formatarData(i){let[e,t,r]=i.split("-");return`${r}/${t}/${e}`}async copiar(i){let e=i.linhaDigitavel;try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}this.copiadoId.set(i.documento),setTimeout(()=>{this.copiadoId()===i.documento&&this.copiadoId.set(null)},1500)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=j({type:n,selectors:[["app-boletos-page"]],decls:22,vars:4,consts:[["campoBusca",""],[1,"cabecalho"],[1,"cabecalho__conteudo"],[1,"cabecalho__titulo"],[1,"resumo"],[1,"resumo__total"],[1,"conteudo"],["appearance","outline",1,"busca"],["matPrefix",""],["matInput","","placeholder","Ex.: FL 0604",3,"input"],["appearance","outlined",1,"boleto"],[1,"vazio"],[1,"rodape"],[1,"cabecalho__info"],[1,"boleto__topo"],[1,"boleto__unidade"],[1,"boleto__valor"],[1,"boleto__meta"],[1,"boleto__linha-row"],[1,"boleto__linha"],["mat-flat-button","","color","primary",1,"boleto__copiar",3,"click"]],template:function(e,t){if(e&1){let r=wo();m(0,"mat-toolbar",1)(1,"div",2),I(2,Op,6,5)(3,Pp,2,0,"span",3),u()(),m(4,"div",4)(5,"span"),h(6),u(),m(7,"span",5),h(8),u()(),m(9,"main",6)(10,"mat-form-field",7)(11,"mat-label"),h(12,"Buscar unidade"),u(),m(13,"mat-icon",8),h(14,"search"),u(),m(15,"input",9,0),fe("input",function(){po(r);let a=Hn(16);return go(t.busca.set(a.value))}),u()(),re(17,Lp,13,7,"mat-card",10,Fp,!1,Vp,2,0,"p",11),u(),m(20,"footer",12),h(21,'Toque em "Copiar" para copiar a linha digit\xE1vel do boleto.'),u()}if(e&2){let r;f(2),R((r=t.dados())?2:3,r),f(4),He("",t.totalBoletos()," boletos"),f(2),b(t.formatarMoeda(t.totalValor())),f(9),oe(t.boletosFiltrados())}},dependencies:[Dn,xn,Di,kr,xi,Pa,bd,vd,Rn,In,yd,Td,Rd,to,eo],styles:["[_nghost-%COMP%]{display:block;min-height:100%}.cabecalho[_ngcontent-%COMP%]{height:auto;padding:12px 16px 14px;background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary)}.cabecalho__conteudo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;width:100%}.cabecalho__titulo[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.cabecalho__info[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);opacity:.85}.resumo[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:-10px 12px 8px;padding:12px 16px;border-radius:12px;background:var(--%NS%mat-sys-surface-container);font:var(--%NS%mat-sys-body-medium);box-shadow:0 1px 3px #0000001f}.resumo__total[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);color:var(--%NS%mat-sys-primary)}.conteudo[_ngcontent-%COMP%]{display:block;padding:4px 12px 24px}.busca[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}.boleto[_ngcontent-%COMP%]{margin-bottom:10px}.boleto__topo[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:4px}.boleto__unidade[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small);color:var(--%NS%mat-sys-primary)}.boleto__valor[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small);white-space:nowrap}.boleto__meta[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant);margin-bottom:8px}.boleto__linha-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.boleto__linha[_ngcontent-%COMP%]{flex:1;min-width:0;background:var(--%NS%mat-sys-surface-container-highest);border-radius:8px;padding:8px 10px;font-family:Courier New,monospace;font-size:.8rem;word-break:break-all}.boleto__copiar[_ngcontent-%COMP%]{align-self:stretch;min-height:40px}.boleto__copiar--copiado[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-tertiary)!important}.vazio[_ngcontent-%COMP%]{text-align:center;color:var(--%NS%mat-sys-on-surface-variant);padding:24px 0}.rodape[_ngcontent-%COMP%]{text-align:center;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant);padding:8px 16px 28px}@media(min-width:600px){.cabecalho__conteudo[_ngcontent-%COMP%], .resumo[_ngcontent-%COMP%], .conteudo[_ngcontent-%COMP%], .rodape[_ngcontent-%COMP%]{max-width:640px;margin-left:auto;margin-right:auto}.resumo[_ngcontent-%COMP%]{margin-top:-14px}.boleto__linha-row[_ngcontent-%COMP%]{flex-direction:row;align-items:stretch}.boleto__copiar[_ngcontent-%COMP%]{flex-shrink:0;align-self:auto}}"]})};var Ri=(()=>{class n{_listeners=[];notify(e,t){for(let r of this._listeners)r(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var Ja=new v("CdkAccordion"),jd=(()=>{class n{_stateChanges=new P;_openCloseAllActions=new P;id=c(Oe).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",Q]},exportAs:["cdkAccordion"],features:[ce([{provide:Ja,useExisting:n}]),me]})}return n})(),zd=(()=>{class n{accordion=c(Ja,{optional:!0,skipSelf:!0});_changeDetectorRef=c(Re);_expansionDispatcher=c(Ri);_openCloseAllSubscription=Ce.EMPTY;closed=new W;opened=new W;destroyed=new W;expandedChange=new W;id=c(Oe).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=A(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",Q],disabled:[2,"disabled","disabled",Q]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[ce([{provide:Ja,useValue:void 0}])]})}return n})(),Hd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({})}return n})();var Ti=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},es=class extends Ti{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,o,a){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null,this.directives=a||null}},Fi=class extends Ti{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},ts=class extends Ti{element;constructor(i){super(),this.element=i instanceof U?i.nativeElement:i}},ns=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof es)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Fi)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof ts)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var $d=(()=>{class n extends ns{_moduleRef=c(So,{optional:!0});_document=c(T);_viewContainerRef=c(pt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new W;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=tt(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Se]})}return n})(),Gd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({})}return n})();var jp=["body"],zp=["bodyWrapper"],Hp=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],$p=["mat-expansion-panel-header","*","mat-action-row"];function Gp(n,i){}var qp=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Wp=["mat-panel-title","mat-panel-description","*"];function Kp(n,i){n&1&&(ze(0,"span",1),vs(),ze(1,"svg",2),nt(2,"path",3),Xe()())}var is=new v("MAT_ACCORDION"),qd=new v("MAT_EXPANSION_PANEL"),Zp=(()=>{class n{_template=c(Ui);_expansionPanel=c(qd,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),Wd=new v("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),rs=(()=>{class n extends zd{_viewContainerRef=c(pt);_animationsDisabled=St();_document=c(T);_ngZone=c(B);_elementRef=c(U);_renderer=c(le);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new W;afterCollapse=new W;_inputChanges=new P;accordion=c(is,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(Oe).getId("mat-expansion-panel-header-");constructor(){super();let e=c(Wd,{optional:!0});this._expansionDispatcher=c(Ri),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Dt(null),ne(()=>this.expanded&&!this._portal),Ke(1)).subscribe(()=>{this._portal=new Fi(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,r,o){if(t&1&&it(o,Zp,5),t&2){let a;Y(a=X())&&(r._lazyContent=a.first)}},viewQuery:function(t,r){if(t&1&&zn(jp,5)(zp,5),t&2){let o;Y(o=X())&&(r._body=o.first),Y(o=X())&&(r._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,r){t&2&&q("mat-expanded",r.expanded)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",Q],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[ce([{provide:is,useValue:void 0},{provide:qd,useExisting:n}]),Se,me],ngContentSelectors:$p,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,r){t&1&&(xe(Hp),H(0),m(1,"div",2,0)(3,"div",3,1)(5,"div",4),H(6,1),Zt(7,Gp,0,0,"ng-template",5),u(),H(8,2),u()()),t&2&&(f(),ie("inert",r.expanded?null:""),f(2),Ae("id",r.id),ie("aria-labelledby",r._headerId),f(4),Ae("cdkPortalOutlet",r._portal))},dependencies:[$d],styles:[`.mat-expansion-panel {
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
`],encapsulation:2})}return n})();var os=(()=>{class n{panel=c(rs,{host:!0});_element=c(U);_focusMonitor=c(_i);_changeDetectorRef=c(Re);_parentChangeSubscription=Ce.EMPTY;constructor(){c(ct).load(Qr);let e=this.panel,t=c(Wd,{optional:!0}),r=c(new Jt("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(ne(a=>!!(a.hideToggle||a.togglePosition))):ue;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=Li(e.opened,e.closed,o,e._inputChanges.pipe(ne(a=>!!(a.hideToggle||a.disabled||a.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(ne(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Fr(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,r){t&1&&fe("click",function(){return r._toggle()})("keydown",function(a){return r._keydown(a)}),t&2&&(ie("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),Xt("height",r._getHeaderHeight()),q("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Hi(e)]},ngContentSelectors:Wp,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,r){t&1&&(xe(qp),ze(0,"span",0),H(1),H(2,1),H(3,2),Xe(),I(4,Kp,3,0,"span",1)),t&2&&(q("mat-content-hide-toggle",!r._showToggle()),f(4),R(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2})}return n})(),Kd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return n})(),Zd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=C({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})(),Yd=(()=>{class n extends jd{_keyManager;_ownHeaders=new Un;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Dt(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Si(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=tt(n)))(r||n)}})();static \u0275dir=C({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,r,o){if(t&1&&it(o,os,5),t&2){let a;Y(a=X())&&(r._headers=a)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,r){t&2&&q("mat-accordion-multi",r.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",Q],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[ce([{provide:is,useExisting:n}]),Se]})}return n})(),Xd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=V({imports:[Hd,Gd,pe]})}return n})();var Fn=class n{http=c(vt);extrato$=this.http.get("data/extrato-financeiro.json").pipe(zt(1));carregar(){return this.extrato$}static \u0275fac=function(e){return new(e||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})};var Xp=(n,i)=>i.pagador,Qp=(n,i)=>i.unidade,Jp=(n,i)=>i.destinatario,io=(n,i)=>i.data+i.valor+i.tipoLancamento,eg=(n,i)=>i.documento+i.data,tg=(n,i)=>i.descricao+i.data,ng=(n,i)=>i.tipo,ig=(n,i)=>i.data+i.descricao;function rg(n,i){if(n&1&&(m(0,"span",3),h(1),u()),n&2){let e=i;f(),Ne("Per\xEDodo: ",e.d.periodoInicio," a ",e.d.periodoFim)}}function og(n,i){n&1&&(m(0,"span",3),h(1,"Carregando extrato\u2026"),u())}function ag(n,i){if(n&1&&(m(0,"span",20),h(1),u()),n&2){let e=w().$implicit;f(),b(e.tipoLancamento)}}function sg(n,i){if(n&1&&(m(0,"div",19)(1,"span",15),h(2),u(),m(3,"span",17),h(4),u(),I(5,ag,2,1,"span",20),u()),n&2){let e=i.$implicit,t=w(3);f(2),b(e.data),f(2),b(t.brl(e.valor)),f(),R(e.tipoLancamento?5:-1)}}function lg(n,i){if(n&1&&(m(0,"div",12)(1,"div",14)(2,"span",15),h(3),u(),m(4,"span",16),h(5),u(),m(6,"span",17),h(7),u()(),m(8,"div",18),re(9,sg,6,3,"div",19,io),u()()),n&2){let e=i.$implicit,t=w(2);f(3),b(e.pagador),f(2),He("",e.qtd,"x"),f(2),b(t.brl(e.total)),f(2),oe(e.transacoes)}}function cg(n,i){if(n&1&&(m(0,"span",20),h(1),u()),n&2){let e=w().$implicit;f(),b(e.tipoLancamento)}}function dg(n,i){if(n&1&&(m(0,"div",13)(1,"span",15),h(2),u(),m(3,"span",16),h(4),u(),m(5,"span",17),h(6),u(),I(7,cg,2,1,"span",20),u()),n&2){let e=i.$implicit,t=w(2);f(2),b(e.unidade),f(2),b(e.data),f(2),b(t.brl(e.valor)),f(),R(e.tipoLancamento?7:-1)}}function ug(n,i){if(n&1&&(m(0,"span",20),h(1),u()),n&2){let e=w().$implicit;f(),b(e.tipoLancamento)}}function mg(n,i){if(n&1&&(m(0,"div",13)(1,"span",15),h(2),u(),m(3,"span",16),h(4),u(),m(5,"span",17),h(6),u(),I(7,ug,2,1,"span",20),u()),n&2){let e=i.$implicit,t=w(3);f(2),b(e.descricao),f(2),b(e.data),f(2),b(t.brl(e.valor)),f(),R(e.tipoLancamento?7:-1)}}function fg(n,i){if(n&1&&(m(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),h(3,"Outros pagamentos"),u(),m(4,"mat-panel-description"),h(5),u()(),re(6,mg,8,4,"div",13,tg),u()),n&2){let e=w(),t=w();f(5),Ne("",e.d.outrosPagamentos.length," \xB7 ",t.brl(e.totais.outros)),f(),oe(e.d.outrosPagamentos)}}function hg(n,i){if(n&1&&(m(0,"span",20),h(1),u()),n&2){let e=w().$implicit;f(),b(e.tipoLancamento)}}function pg(n,i){if(n&1&&(m(0,"div",19)(1,"span",15),h(2),u(),m(3,"span",17),h(4),u(),I(5,hg,2,1,"span",20),u()),n&2){let e=i.$implicit,t=w(3);f(2),b(e.data),f(2),b(t.brl(e.valor)),f(),R(e.tipoLancamento?5:-1)}}function gg(n,i){if(n&1&&(m(0,"div",12)(1,"div",14)(2,"span",15),h(3),u(),m(4,"span",16),h(5),u(),m(6,"span",17),h(7),u()(),m(8,"div",18),re(9,pg,6,3,"div",19,io),u()()),n&2){let e=i.$implicit,t=w(2);f(3),b(e.destinatario),f(2),He("",e.qtd,"x"),f(2),b(t.brl(e.total)),f(2),oe(e.transacoes)}}function vg(n,i){if(n&1&&(m(0,"span",20),h(1),u()),n&2){let e=w().$implicit;f(),b(e.tipoLancamento)}}function bg(n,i){if(n&1&&(m(0,"div",19)(1,"span",15),h(2),u(),m(3,"span",17),h(4),u(),I(5,vg,2,1,"span",20),u()),n&2){let e=i.$implicit,t=w(2);f(2),b(e.data),f(2),b(t.brl(e.valor)),f(),R(e.tipoLancamento?5:-1)}}function yg(n,i){if(n&1&&(m(0,"span",20),h(1),u()),n&2){let e=w().$implicit;f(),b(e.tipoLancamento)}}function _g(n,i){if(n&1&&(m(0,"div",19)(1,"span",15),h(2),u(),m(3,"span",17),h(4),u(),I(5,yg,2,1,"span",20),u()),n&2){let e=i.$implicit,t=w(2);f(2),b(e.data),f(2),b(t.brl(e.valor)),f(),R(e.tipoLancamento?5:-1)}}function Sg(n,i){if(n&1&&(m(0,"div",13)(1,"span",15),h(2),u(),m(3,"span",16),h(4),u(),m(5,"span",17),h(6),u()()),n&2){let e=i.$implicit,t=w(2);f(2),Ne("Consulta Serasa (",e.tipo," ",e.documento,")"),f(2),b(e.data),f(2),b(t.brl(e.valor))}}function xg(n,i){if(n&1&&(m(0,"div",13)(1,"span",15),h(2),u(),m(3,"span",16),h(4),u(),m(5,"span",17),h(6),u()()),n&2){let e=i.$implicit,t=w(3);f(2),b(e.tipo),f(2),He("",e.qtd,"x"),f(2),b(t.brl(e.total))}}function Dg(n,i){if(n&1&&(m(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),h(3,"Outros tipos de transa\xE7\xE3o"),u(),m(4,"mat-panel-description"),h(5),u()(),re(6,xg,7,3,"div",13,ng),u()),n&2){let e=w();f(5),b(e.d.outrosTipos.length),f(),oe(e.d.outrosTipos)}}function Cg(n,i){if(n&1&&(m(0,"div",13)(1,"span",15),h(2),u(),m(3,"span",16),h(4),u(),m(5,"span",17),h(6),u()()),n&2){let e=i.$implicit,t=w(3);f(2),b(e.descricao),f(2),b(e.data),f(2),b(t.brl(e.valor))}}function wg(n,i){if(n&1&&(m(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),h(3,"\u26A0\uFE0F Transa\xE7\xF5es estornadas"),u(),m(4,"mat-panel-description"),h(5),u()(),re(6,Cg,7,3,"div",13,ig),u()),n&2){let e=w();f(5),b(e.d.estornadas.length),f(),oe(e.d.estornadas)}}function Eg(n,i){if(n&1&&(m(0,"main",4)(1,"section",5)(2,"mat-card",6)(3,"span",7),h(4,"Saldo inicial"),u(),m(5,"span",8),h(6),u()(),m(7,"mat-card",6)(8,"span",7),h(9,"Saldo final"),u(),m(10,"span",8),h(11),u()(),m(12,"mat-card",6)(13,"span",7),h(14,"Varia\xE7\xE3o"),u(),m(15,"span",8),h(16),u()(),m(17,"mat-card",9)(18,"span",7),h(19,"Entradas"),u(),m(20,"span",8),h(21),u()(),m(22,"mat-card",10)(23,"span",7),h(24,"Sa\xEDdas"),u(),m(25,"span",8),h(26),u()(),m(27,"mat-card",6)(28,"span",7),h(29,"Transa\xE7\xF5es"),u(),m(30,"span",8),h(31),u()()(),m(32,"mat-accordion",11)(33,"mat-expansion-panel")(34,"mat-expansion-panel-header")(35,"mat-panel-title"),h(36,"Cobran\xE7as recebidas"),u(),m(37,"mat-panel-description"),h(38),u()(),re(39,lg,11,3,"div",12,Xp),u(),m(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),h(44,"Condom\xEDnio por unidade"),u(),m(45,"mat-panel-description"),h(46),u()(),re(47,dg,8,4,"div",13,Qp),u(),I(49,fg,8,2,"mat-expansion-panel"),m(50,"mat-expansion-panel")(51,"mat-expansion-panel-header")(52,"mat-panel-title"),h(53,"Pix enviados"),u(),m(54,"mat-panel-description"),h(55),u()(),re(56,gg,11,3,"div",12,Jp),u(),m(58,"mat-expansion-panel")(59,"mat-expansion-panel-header")(60,"mat-panel-title"),h(61,"Taxas da plataforma"),u(),m(62,"mat-panel-description"),h(63),u()(),m(64,"div",12)(65,"div",14)(66,"span",15),h(67,"Taxas de boleto/cart\xE3o/Pix"),u(),m(68,"span",16),h(69),u(),m(70,"span",17),h(71),u()(),m(72,"div",18),re(73,bg,6,3,"div",19,io),u()(),m(75,"div",12)(76,"div",14)(77,"span",15),h(78,"Mensalidade do plano Asaas"),u(),m(79,"span",16),h(80),u(),m(81,"span",17),h(82),u()(),m(83,"div",18),re(84,_g,6,3,"div",19,io),u()(),re(86,Sg,7,4,"div",13,eg),u(),I(88,Dg,8,1,"mat-expansion-panel"),I(89,wg,8,1,"mat-expansion-panel"),u()()),n&2){let e=i,t=w();f(6),b(t.brl(e.d.saldoInicial)),f(5),b(t.brl(e.d.saldoFinal)),f(),q("stat--negativo",e.d.variacao<0)("stat--positivo",e.d.variacao>=0),f(4),b(t.brl(e.d.variacao)),f(5),b(t.brl(e.d.totalCredito)),f(5),b(t.brl(e.d.totalDebito)),f(5),b(e.d.qtdTransacoes),f(),Ae("multi",!1),f(6),Ne("",e.d.cobrancas.length," pagadores \xB7 ",t.brl(e.totais.cobrancas)),f(),oe(e.d.cobrancas),f(7),Ne("",e.d.condominioUnidades.length," unidades \xB7 ",t.brl(e.totais.condominio)),f(),oe(e.d.condominioUnidades),f(2),R(e.d.outrosPagamentos.length?49:-1),f(6),Ne("",e.d.pixSaidas.length," destinat\xE1rios \xB7 ",t.brl(e.totais.pix)),f(),oe(e.d.pixSaidas),f(7),b(t.brl(e.totais.taxas)),f(6),He("",e.d.taxas.boleto.qtd,"x"),f(2),b(t.brl(e.d.taxas.boleto.total)),f(2),oe(e.d.taxas.boleto.transacoes),f(7),He("",e.d.taxas.asaas.qtd,"x"),f(2),b(t.brl(e.d.taxas.asaas.total)),f(2),oe(e.d.taxas.asaas.transacoes),f(2),oe(e.d.taxas.serasa),f(2),R(e.d.outrosTipos.length?88:-1),f(),R(e.d.estornadas.length?89:-1)}}var ro=class n{extratoService=c(Fn);dados=Pt(this.extratoService.carregar());vista=K(()=>{let i=this.dados();return i?{d:i,totais:{cobrancas:i.cobrancas.reduce((e,t)=>e+t.total,0),condominio:i.condominioUnidades.reduce((e,t)=>e+t.valor,0),outros:i.outrosPagamentos.reduce((e,t)=>e+t.valor,0),pix:i.pixSaidas.reduce((e,t)=>e+t.total,0),taxas:i.taxas.boleto.total+i.taxas.asaas.total+i.taxas.serasa.reduce((e,t)=>e+t.valor,0)}}:null});brl(i){return i.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=j({type:n,selectors:[["app-dashboard-page"]],decls:7,vars:2,consts:[[1,"cabecalho"],[1,"cabecalho__conteudo"],[1,"cabecalho__titulo"],[1,"cabecalho__info"],[1,"conteudo"],[1,"resumo-grid"],["appearance","outlined",1,"stat"],[1,"stat__label"],[1,"stat__valor"],["appearance","outlined",1,"stat","stat--positivo"],["appearance","outlined",1,"stat","stat--negativo"],[1,"secoes",3,"multi"],[1,"grupo"],[1,"linha"],[1,"linha","linha--grupo"],[1,"linha__nome"],[1,"linha__meta"],[1,"linha__valor"],[1,"sub-lista"],[1,"linha","linha--sub"],[1,"linha__tipo"]],template:function(e,t){if(e&1&&(m(0,"mat-toolbar",0)(1,"div",1)(2,"span",2),h(3,"Financeiro"),u(),I(4,rg,2,2,"span",3)(5,og,2,0,"span",3),u()(),I(6,Eg,90,25,"main",4)),e&2){let r,o;f(4),R((r=t.vista())?4:5,r),f(2),R((o=t.vista())?6:-1,o)}},dependencies:[Dn,xn,Rn,In,Xd,Yd,rs,os,Zd,Kd],styles:["[_nghost-%COMP%]{display:block;min-height:100%}.cabecalho[_ngcontent-%COMP%]{height:auto;padding:12px 16px 14px;background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary)}.cabecalho__conteudo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;width:100%}.cabecalho__titulo[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.cabecalho__info[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);opacity:.85}.conteudo[_ngcontent-%COMP%]{padding:12px 12px 24px}.resumo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:12px}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;padding:10px 12px!important}.stat__label[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.stat__valor[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.stat--positivo[_ngcontent-%COMP%]   .stat__valor[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-tertiary)}.stat--negativo[_ngcontent-%COMP%]   .stat__valor[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.secoes[_ngcontent-%COMP%]{display:block}.linha[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:2px 10px;padding:8px 0;border-bottom:1px solid var(--%NS%mat-sys-outline-variant);font:var(--%NS%mat-sys-body-medium)}.linha[_ngcontent-%COMP%]:last-child{border-bottom:none}.linha__nome[_ngcontent-%COMP%]{flex:1;min-width:0;overflow-wrap:anywhere}.linha__meta[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-small);white-space:nowrap}.linha__valor[_ngcontent-%COMP%]{font-weight:600;white-space:nowrap}.linha__tipo[_ngcontent-%COMP%]{flex:1 1 100%;color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-small);overflow-wrap:anywhere}.grupo[_ngcontent-%COMP%]{border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}.grupo[_ngcontent-%COMP%]:last-child{border-bottom:none}.grupo[_ngcontent-%COMP%]   .linha--grupo[_ngcontent-%COMP%]{border-bottom:none}.sub-lista[_ngcontent-%COMP%]{padding:0 0 8px 12px;margin-left:2px;border-left:2px solid var(--%NS%mat-sys-outline-variant)}.linha--sub[_ngcontent-%COMP%]{border-bottom:none;padding:4px 0;font:var(--%NS%mat-sys-body-small)}.linha--sub[_ngcontent-%COMP%]   .linha__valor[_ngcontent-%COMP%]{font-weight:500}@media(min-width:600px){.conteudo[_ngcontent-%COMP%]{max-width:640px;margin-left:auto;margin-right:auto}.resumo-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}"]})};var Ng=(n,i)=>i.titulo,Mg=(n,i)=>i.categoria,Ag=(n,i)=>i.rotulo;function Ig(n,i){if(n&1&&(m(0,"span",3),h(1),u()),n&2){let e=i;f(),Ne("",e.boletosMes.mes," \xB7 ",e.boletosMes.condominio)}}function Rg(n,i){n&1&&(m(0,"span",3),h(1,"Carregando dados\u2026"),u())}function Tg(n,i){if(n&1&&(m(0,"li",18),Ie(1,"span",19),m(2,"span",20),h(3),u(),m(4,"span",21),h(5),u()()),n&2){let e=i.$implicit,t=w(3);f(),Xt("background",e.cor),f(2),b(e.categoria),f(2),Ne("",t.brl(e.valor)," \xB7 ",t.arredondar(e.percentual),"%")}}function Fg(n,i){if(n&1&&(m(0,"div",14),Ie(1,"div",16),m(2,"ul",17),re(3,Tg,6,5,"li",18,Mg),u()()),n&2){let e=w(),t=w();f(),Xt("background",t.roscaGradiente(e.resumoSaidas)),f(2),oe(e.resumoSaidas)}}function Og(n,i){n&1&&(m(0,"p",15),h(1,"Nenhuma sa\xEDda registrada neste per\xEDodo."),u())}function Pg(n,i){if(n&1&&(m(0,"div",23)(1,"div",24)(2,"span",25),h(3),u(),m(4,"span",26),h(5),u()(),m(6,"div",27),Ie(7,"div",28),u()()),n&2){let e=i.$implicit,t=w(2).$implicit,r=w(2);f(3),b(e.rotulo),f(2),b(r.brl(e.valor)),f(2),Xt("width",r.percentual(e.valor,t.maiorValor),"%")}}function kg(n,i){if(n&1&&(m(0,"div",22),re(1,Pg,8,4,"div",23,Ag),u()),n&2){let e=w().$implicit;f(),oe(e.itens)}}function Lg(n,i){if(n&1&&(m(0,"p",15),h(1),u()),n&2){let e=w().$implicit;f(),b(e.mensagemVazia)}}function Vg(n,i){if(n&1&&(m(0,"mat-card",11)(1,"h2",12),h(2),u(),m(3,"p",13),h(4),u(),I(5,kg,3,0,"div",22)(6,Lg,2,1,"p",15),u()),n&2){let e=i.$implicit;f(2),b(e.titulo),f(2),b(e.descricao),f(),R(e.itens.length?5:6)}}function Bg(n,i){if(n&1&&(m(0,"main",4)(1,"section",6)(2,"mat-card",7)(3,"span",8),h(4,"Boletos do m\xEAs"),u(),m(5,"span",9),h(6),u()(),m(7,"mat-card",7)(8,"span",8),h(9,"Valor total de boletos"),u(),m(10,"span",9),h(11),u()(),m(12,"mat-card",10)(13,"span",8),h(14,"Total recebido no per\xEDodo"),u(),m(15,"span",9),h(16),u()(),m(17,"mat-card",7)(18,"span",8),h(19,"Taxas da plataforma"),u(),m(20,"span",9),h(21),u()()(),m(22,"mat-card",11)(23,"h2",12),h(24,"Para onde foi o dinheiro"),u(),m(25,"p",13),h(26,"Como as sa\xEDdas do condom\xEDnio se dividem neste per\xEDodo."),u(),I(27,Fg,5,2,"div",14)(28,Og,2,0,"p",15),u(),re(29,Vg,7,3,"mat-card",11,Ng),u()),n&2){let e=i,t=w();f(6),b(e.kpis.qtdBoletos),f(5),b(t.brl(e.kpis.valorBoletos)),f(5),b(t.brl(e.kpis.totalRecebido)),f(5),b(t.brl(e.kpis.totalTaxas)),f(6),R(e.resumoSaidas.length?27:28),f(2),oe(e.blocosBarras)}}function Ug(n,i){n&1&&(m(0,"main",5)(1,"p"),h(2,"Carregando dados\u2026"),u()())}var oo={pix:"light-dark(#005cbb, #abc7ff)",repasses:"light-dark(#006d3c, #6dddaa)",outros:"light-dark(#8a5300, #f0bd6c)",taxas:"var(--mat-sys-error)"},ao=class n{extratoService=c(Fn);boletosService=c(Tn);extrato=Pt(this.extratoService.carregar());boletosMes=Pt(this.boletosService.carregar());vista=K(()=>{let i=this.extrato(),e=this.boletosMes();if(!i||!e)return null;let t={qtdBoletos:e.boletos.length,valorBoletos:e.boletos.reduce((d,p)=>d+p.valor,0),totalRecebido:i.totalCredito,totalTaxas:i.taxas.boleto.total+i.taxas.asaas.total+i.taxas.serasa.reduce((d,p)=>d+p.valor,0)},r=zg(i),o=jg(i.condominioUnidades),a=Hg(i),l=[{titulo:"Pix enviados por destinat\xE1rio",descricao:"Para quem foram os Pix enviados pelo condom\xEDnio neste per\xEDodo.",itens:r,maiorValor:r[0]?.valor??0,mensagemVazia:"Nenhum Pix enviado neste per\xEDodo."},{titulo:"Repasses por unidade",descricao:"Quanto foi repassado para cada unidade neste per\xEDodo.",itens:o,maiorValor:o[0]?.valor??0,mensagemVazia:"Nenhum repasse por unidade registrado neste per\xEDodo."},{titulo:"Cobran\xE7as recebidas por pagador",descricao:"Quanto cada pagador pagou ao condom\xEDnio neste per\xEDodo.",itens:a,maiorValor:a[0]?.valor??0,mensagemVazia:"Nenhuma cobran\xE7a recebida neste per\xEDodo."}],s=$g(i,t.totalTaxas);return{boletosMes:e,extrato:i,kpis:t,blocosBarras:l,resumoSaidas:s}});brl(i){return i.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}percentual(i,e){return e>0?i/e*100:0}arredondar(i){return Math.round(i)}roscaGradiente(i){return i.length?`conic-gradient(${i.map(t=>`${t.cor} ${t.inicio}% ${t.fim}%`).join(", ")})`:"none"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=j({type:n,selectors:[["app-dashboard-overview-page"]],decls:8,vars:2,consts:[[1,"cabecalho"],[1,"cabecalho__conteudo"],[1,"cabecalho__titulo"],[1,"cabecalho__info"],[1,"conteudo"],[1,"conteudo","conteudo--carregando"],[1,"kpis-grid"],["appearance","outlined",1,"kpi"],[1,"kpi__label"],[1,"kpi__valor"],["appearance","outlined",1,"kpi","kpi--positivo"],["appearance","outlined",1,"bloco-grafico"],[1,"bloco-grafico__titulo"],[1,"bloco-grafico__descricao"],[1,"rosca-container"],[1,"bloco-grafico__vazio"],[1,"rosca"],[1,"rosca-legenda"],[1,"rosca-legenda__item"],[1,"rosca-legenda__cor"],[1,"rosca-legenda__nome"],[1,"rosca-legenda__valor"],[1,"grafico__barras"],[1,"barra"],[1,"barra__cabecalho"],[1,"barra__rotulo"],[1,"barra__valor"],[1,"barra__trilha"],[1,"barra__preenchimento"]],template:function(e,t){if(e&1&&(m(0,"mat-toolbar",0)(1,"div",1)(2,"span",2),h(3,"Dashboard"),u(),I(4,Ig,2,2,"span",3)(5,Rg,2,0,"span",3),u()(),I(6,Bg,31,5,"main",4)(7,Ug,3,0,"main",5)),e&2){let r,o;f(4),R((r=t.vista())?4:5,r),f(2),R((o=t.vista())?6:7,o)}},dependencies:[Dn,xn,Rn,In],styles:["[_nghost-%COMP%]{display:block;min-height:100%}.cabecalho[_ngcontent-%COMP%]{height:auto;padding:12px 16px 14px;background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary)}.cabecalho__conteudo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;width:100%}.cabecalho__titulo[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.cabecalho__info[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);opacity:.85}.conteudo[_ngcontent-%COMP%]{padding:12px 12px 24px}.conteudo--carregando[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:40vh;color:var(--%NS%mat-sys-on-surface-variant)}.kpis-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:20px}.kpi[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding:14px 12px!important}.kpi__label[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.kpi__valor[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-small);line-height:1.1;overflow-wrap:anywhere}.kpi--positivo[_ngcontent-%COMP%]   .kpi__valor[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-tertiary)}.bloco-grafico[_ngcontent-%COMP%]{display:block;padding:16px!important;margin-bottom:16px}.bloco-grafico__titulo[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);margin:0 0 4px}.bloco-grafico__descricao[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant);margin:0 0 16px}.bloco-grafico__vazio[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-medium);margin:0}.grafico__barras[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px}.rosca-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:20px}.rosca[_ngcontent-%COMP%]{width:160px;height:160px;border-radius:50%;flex-shrink:0}.rosca-legenda[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;width:100%;display:flex;flex-direction:column;gap:10px}.rosca-legenda__item[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:8px;font:var(--%NS%mat-sys-body-medium)}.rosca-legenda__cor[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:3px;flex-shrink:0;align-self:center}.rosca-legenda__nome[_ngcontent-%COMP%]{flex:1;min-width:0;overflow-wrap:anywhere}.rosca-legenda__valor[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-small);white-space:nowrap}.barra[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.barra__cabecalho[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-between;gap:10px;font:var(--%NS%mat-sys-body-medium)}.barra__rotulo[_ngcontent-%COMP%]{overflow-wrap:anywhere}.barra__valor[_ngcontent-%COMP%]{font-weight:600;white-space:nowrap}.barra__trilha[_ngcontent-%COMP%]{height:10px;border-radius:6px;background:var(--%NS%mat-sys-surface-container-high);overflow:hidden}.barra__preenchimento[_ngcontent-%COMP%]{height:100%;border-radius:6px;background:var(--%NS%mat-sys-primary)}@media(min-width:600px){.conteudo[_ngcontent-%COMP%]{max-width:640px;margin-left:auto;margin-right:auto}.kpis-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}.rosca-container[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.rosca[_ngcontent-%COMP%]{width:180px;height:180px}}"]})};function jg(n){let i=new Map;for(let e of n)i.set(e.unidade,(i.get(e.unidade)??0)+Math.abs(e.valor));return[...i.entries()].map(([e,t])=>({rotulo:e,valor:t})).sort((e,t)=>t.valor-e.valor)}function zg(n){return n.pixSaidas.map(i=>({rotulo:i.destinatario,valor:Math.abs(i.total)})).sort((i,e)=>e.valor-i.valor)}function Hg(n){return n.cobrancas.map(i=>({rotulo:i.pagador,valor:i.total})).sort((i,e)=>e.valor-i.valor)}function $g(n,i){let e=n.pixSaidas.reduce((s,d)=>s+Math.abs(d.total),0),t=n.condominioUnidades.reduce((s,d)=>s+Math.abs(d.valor),0),r=n.outrosPagamentos.reduce((s,d)=>s+Math.abs(d.valor),0),o=[{categoria:"Pix enviados",valor:e,cor:oo.pix},{categoria:"Repasses de condom\xEDnio",valor:t,cor:oo.repasses},{categoria:"Outros pagamentos",valor:r,cor:oo.outros},{categoria:"Taxas da plataforma",valor:Math.abs(i),cor:oo.taxas}].filter(s=>s.valor>0),a=o.reduce((s,d)=>s+d.valor,0),l=0;return o.map(s=>{let d=a>0?s.valor/a*100:0,p=l;return l+=d,L(g({},s),{percentual:d,inicio:p,fim:l})})}var Qd=[{path:"",component:ao},{path:"boletos",component:no},{path:"financeiro",component:ro},{path:"**",redirectTo:""}];var Jd={providers:[ys(),Da(Qd),qo(),mc()]};var Gg=()=>({exact:!0}),so=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=j({type:n,selectors:[["app-root"]],decls:19,vars:2,consts:[[1,"app-shell"],[1,"app-shell__conteudo"],[1,"app-shell__nav"],["routerLink","/","routerLinkActive","app-shell__nav-item--ativo",1,"app-shell__nav-item",3,"routerLinkActiveOptions"],["routerLink","/boletos","routerLinkActive","app-shell__nav-item--ativo",1,"app-shell__nav-item"],["routerLink","/financeiro","routerLinkActive","app-shell__nav-item--ativo",1,"app-shell__nav-item"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1),Ie(2,"router-outlet"),u(),m(3,"nav",2)(4,"a",3)(5,"mat-icon"),h(6,"dashboard"),u(),m(7,"span"),h(8,"Dashboard"),u()(),m(9,"a",4)(10,"mat-icon"),h(11,"receipt_long"),u(),m(12,"span"),h(13,"Boletos"),u()(),m(14,"a",5)(15,"mat-icon"),h(16,"bar_chart"),u(),m(17,"span"),h(18,"Financeiro"),u()()()()),e&2&&(f(4),Ae("routerLinkActiveOptions",Ps(1,Gg)))},dependencies:[fi,yn,xa,to,eo],styles:[".app-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100%}.app-shell__conteudo[_ngcontent-%COMP%]{flex:1;padding-bottom:64px}.app-shell__nav[_ngcontent-%COMP%]{position:fixed;left:0;right:0;bottom:0;display:flex;background:var(--%NS%mat-sys-surface-container);border-top:1px solid var(--%NS%mat-sys-outline-variant);box-shadow:0 -1px 4px #00000014;z-index:10}.app-shell__nav-item[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 0 10px;text-decoration:none;color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-label-small)}.app-shell__nav-item--ativo[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}"]})};Uo(so,Jd).catch(n=>console.error(n));

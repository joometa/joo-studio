(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{7169:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memo",function(){return o(674)}])},638:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let o=l.default,n={loading:e=>{let{error:t,isLoading:o,pastDelay:r}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=r({},n,e)),n=r({},n,t);let d=n.loader,u=()=>null!=d?d().then(a):Promise.resolve(a(()=>null));return(n.loadableGenerated&&delete(n=r({},n,n.loadableGenerated)).loadableGenerated,"boolean"!=typeof n.ssr||n.ssr)?o(r({},n,{loader:u})):(delete n.webpack,delete n.modules,i(o,n))},t.noSSR=i;var r=o(6495).Z,n=o(2648).Z,l=(n(o(7294)),n(o(4302)));function a(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,o(2648).Z)(o(7294));let n=r.default.createContext(null);t.LoadableContext=n},4302:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(6495).Z,n=(0,o(2648).Z)(o(7294)),l=o(6319);let a=[],i=[],d=!1;function u(e){let t=e(),o={loading:!0,loaded:null,error:null};return o.promise=t.then(e=>(o.loading=!1,o.loaded=e,e)).catch(e=>{throw o.loading=!1,o.error=e,e}),o}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function a(){if(!r){let t=new s(e,o);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!d){let e=o.webpack?o.webpack():o.modules;e&&i.push(t=>{for(let o of e)if(-1!==t.indexOf(o))return a()})}function u(e,t){!function(){a();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach(t=>{e(t)})}();let i=n.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),n.default.useMemo(()=>{var t;return i.loading||i.error?n.default.createElement(o.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return u.preload=()=>a(),u.displayName="LoadableComponent",n.default.forwardRef(u)}(u,e)}function p(e,t){let o=[];for(;e.length;){let r=e.pop();o.push(r(t))}return Promise.all(o).then(()=>{if(e.length)return p(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{p(a).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let o=()=>(d=!0,t());p(i,e).then(o,o)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},674:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return f}});var r=o(5944),n=o(3585),l=o(166),a=o(9008),i=o.n(a),d=o(7294),u=o(5152),s=o.n(u);o(7025);let c=s()(()=>Promise.all([o.e(925),o.e(41)]).then(o.t.bind(o,5108,23)).then(e=>e.Editor),{loadableGenerated:{webpack:()=>[5108]},ssr:!1});function p(e){let{editorState:t,onEditorStateChange:o,style:n}=e;return(0,r.tZ)(m,{style:n,children:(0,r.tZ)(c,{editorState:t,wrapperClassName:"wrapper-class",toolbarClassName:"editorToolbar-hidden",editorClassName:"editor-class",toolbar:{options:["inline","list","textAlign"]},localization:{locale:"ko"},onEditorStateChange:o,editorStyle:{height:"100%"}})})}let m=(0,l.Z)("div",{target:"erf5o7j0"})("display:flex;flex-direction:column;justify-content:space-between;border-radius:18px;height:500px;border:1px solid lightgray;padding:20px;");function h(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)("title",{children:"Memo :: 메모장- jootudio.com"}),(0,r.tZ)("meta",{name:"title",content:"Memo :: 메모장- jootudio.com"}),(0,r.tZ)("meta",{name:"description",content:"급하게 적을 곳이 필요할때 사용하세요! (Use it when you need a place to write it down!)"}),(0,r.tZ)("meta",{property:"og:type",content:"website"}),(0,r.tZ)("meta",{property:"og:url",content:"https://metatags.io/"}),(0,r.tZ)("meta",{property:"og:title",content:"Memo :: 메모장- jootudio.com"}),(0,r.tZ)("meta",{property:"og:description",content:"급하게 적을 곳이 필요할때 사용하세요! (Use it when you need a place to write it down!)"}),(0,r.tZ)("meta",{property:"og:image",content:"https://i.ibb.co/Mnx7ZvB/ogImage.png"}),(0,r.tZ)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.tZ)("meta",{property:"twitter:url",content:"https://metatags.io/"}),(0,r.tZ)("meta",{property:"twitter:title",content:"Memo :: 메모장- jootudio.com"}),(0,r.tZ)("meta",{property:"twitter:description",content:"급하게 적을 곳이 필요할때 사용하세요! (Use it when you need a place to write it down!)"}),(0,r.tZ)("meta",{property:"twitter:image",content:"https://i.ibb.co/Mnx7ZvB/ogImage.png"})]})}function f(){let[e,t]=(0,d.useState)(void 0);return(0,r.BX)(r.HY,{children:[(0,r.tZ)(i(),{children:(0,r.tZ)(h,{})}),(0,r.tZ)(n.Dx,{title:"메모장"}),(0,r.tZ)(_,{children:(0,r.tZ)(p,{editorState:e,onEditorStateChange:t})})]})}let _=(0,l.Z)("div",{target:"e1265ocz0"})("width:100%;height:auto;min-height:100%;margin:auto;margin-top:25px;padding-bottom:50px;max-width:1000px;.button-box{padding:20px;display:flex;justify-content:center;}")},7025:function(){},5152:function(e,t,o){e.exports=o(638)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7169)}),_N_E=e.O()}]);
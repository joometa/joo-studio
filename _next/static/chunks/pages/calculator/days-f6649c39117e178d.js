(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[975],{7349:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(3946),a=n(9013),r=n(3882);function i(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),i=(0,o.Z)(t);return isNaN(i)?new Date(NaN):(i&&n.setDate(n.getDate()+i),n)}},1640:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(3946),a=n(9013),r=n(3882);function i(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),i=(0,o.Z)(t);if(isNaN(i))return new Date(NaN);if(!i)return n;var l=n.getDate(),u=new Date(n.getTime());return(u.setMonth(n.getMonth()+i+1,0),l>=u.getDate())?u:(n.setFullYear(u.getFullYear(),u.getMonth(),l),n)}},4559:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(3946),a=n(1640),r=n(3882);function i(e,t){(0,r.Z)(2,arguments);var n=(0,o.Z)(t);return(0,a.Z)(e,-n)}},2869:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculator/days",function(){return n(6184)}])},1010:function(e,t,n){"use strict";n.d(t,{h_:function(){return c},VL:function(){return l}});var o=n(5944),a=n(7294),r=n(7004),i=n(166);function l(e){let{type:t,defaultValue:n,value:i,onChange:l}=e,[c,s]=(0,a.useState)(n),d=(0,a.useMemo)(()=>"year"===t?{max:9999,min:1800}:"month"===t?{max:12,min:1}:{max:31,min:1},[t]),m=e=>{s(e),l&&l(e)};return(0,a.useEffect)(()=>{i&&s(i)},[i]),(0,o.tZ)(u,{children:(0,o.BX)(r.Y2,{className:t,max:d.max,min:d.min,clampValueOnBlur:!1,onChange:(e,t)=>m(t),value:c,children:[(0,o.tZ)(r.zu,{}),(0,o.BX)(r.Fi,{children:[(0,o.tZ)(r.WQ,{}),(0,o.tZ)(r.Y_,{})]})]})})}let u=(0,i.Z)("div",{target:"ew5anw50"})(".chakra-numberinput{max-width:90px;width:100%;}.chakra-numberinput.year{min-width:90px;}");function c(){return(0,o.BX)(o.HY,{children:[(0,o.tZ)("title",{children:"날짜계산기(일수계산) :: 날짜 더하기, 빼기 - jootudio.com"}),(0,o.tZ)("meta",{name:"title",content:"날짜계산기(일수계산) :: 날짜 더하기, 빼기 - jootudio.com"}),(0,o.tZ)("meta",{name:"description",content:"특정 날짜로부터 일수를 더하거나 빼서 원하는 날짜값을 알아낼 수 있습니다."}),(0,o.tZ)("meta",{property:"og:type",content:"website"}),(0,o.tZ)("meta",{property:"og:url",content:"https://jootudio.com/calculator/days"}),(0,o.tZ)("meta",{property:"og:title",content:"날짜계산기(일수계산) :: 날짜 더하기, 빼기 - jootudio.com"}),(0,o.tZ)("meta",{property:"og:description",content:"특정 날짜로부터 일수를 더하거나 빼서 원하는 날짜값을 알아낼 수 있습니다."}),(0,o.tZ)("meta",{property:"og:image",content:"https://i.ibb.co/Mnx7ZvB/ogImage.png"}),(0,o.tZ)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.tZ)("meta",{property:"twitter:url",content:"https://jootudio.com/calculator/days"}),(0,o.tZ)("meta",{property:"twitter:title",content:"날짜계산기(일수계산) :: 날짜 더하기, 빼기 - jootudio.com"}),(0,o.tZ)("meta",{property:"twitter:description",content:"특정 날짜로부터 일수를 더하거나 빼서 원하는 날짜값을 알아낼 수 있습니다."}),(0,o.tZ)("meta",{property:"twitter:image",content:"https://i.ibb.co/Mnx7ZvB/ogImage.png"})]})}},6184:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var o=n(5944),a=n(7294),r=n(3585),i=n(166),l=n(1010),u=n(3065),c=n(3867),s=n(4629),d=n(7004),m=n(5432),p=n(1103),y=n(5059),h=n(9354),f=n(5227),v=n(5893),[g,b]=(0,f.k)({name:"RadioGroupContext",strict:!1}),Z=(0,y.G)((e,t)=>{let{colorScheme:n,size:o,variant:r,children:i,className:l,isDisabled:u,isFocusable:c,...s}=e,{value:d,onChange:y,getRootProps:f,name:b,htmlProps:Z}=function(e={}){let{onChange:t,value:n,defaultValue:o,name:r,isDisabled:i,isFocusable:l,isNative:u,...c}=e,[s,d]=(0,a.useState)(o||""),y=void 0!==n,h=y?n:s,f=(0,a.useRef)(null),v=(0,a.useCallback)(()=>{let e=f.current;if(!e)return;let t="input:not(:disabled):checked",n=e.querySelector(t);if(n){n.focus();return}t="input:not(:disabled)";let o=e.querySelector(t);null==o||o.focus()},[]),g=(0,a.useId)(),b=`radio-${g}`,Z=r||b,x=(0,a.useCallback)(e=>{let n=e&&(0,m.Kn)(e)&&(0,m.Kn)(e.target)?e.target.value:e;y||d(n),null==t||t(String(n))},[t,y]),w=(0,a.useCallback)((e={},t=null)=>({...e,ref:(0,p.lq)(t,f),role:"radiogroup"}),[]),k=(0,a.useCallback)((e={},t=null)=>({...e,ref:t,name:Z,[u?"checked":"isChecked"]:null!=h?e.value===h:void 0,onChange(e){x(e)},"data-radiogroup":!0}),[u,Z,x,h]);return{getRootProps:w,getRadioProps:k,name:Z,ref:f,focus:v,setValue:d,value:h,onChange:x,isDisabled:i,isFocusable:l,htmlProps:c}}(s),x=(0,a.useMemo)(()=>({name:b,size:o,onChange:y,colorScheme:n,value:d,variant:r,isDisabled:u,isFocusable:c}),[b,o,y,n,d,r,u,c]);return(0,v.jsx)(g,{value:x,children:(0,v.jsx)(h.m.div,{...f(Z,t),className:(0,m.cx)("chakra-radio-group",l),children:i})})});Z.displayName="RadioGroup";var x=n(7073),w=n(654),k=n(6256),N={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function S(e){e.preventDefault(),e.stopPropagation()}var B=n(1639),C=n(3179),_=(0,y.G)((e,t)=>{var n;let o=b(),{onChange:r,value:i}=e,l=(0,B.jC)("Radio",{...o,...e}),u=(0,C.Lr)(e),{spacing:c="0.5rem",children:s,isDisabled:d=null==o?void 0:o.isDisabled,isFocusable:p=null==o?void 0:o.isFocusable,inputProps:y,...f}=u,g=e.isChecked;(null==o?void 0:o.value)!=null&&null!=i&&(g=o.value===i);let Z=r;(null==o?void 0:o.onChange)&&null!=i&&(Z=(0,m.PP)(o.onChange,r));let x=null!=(n=null==e?void 0:e.name)?n:null==o?void 0:o.name,{getInputProps:_,getCheckboxProps:D,getLabelProps:E,getRootProps:M,htmlProps:j}=function(e={}){let{defaultChecked:t,isChecked:n,isFocusable:o,isDisabled:r,isReadOnly:i,isRequired:l,onChange:u,isInvalid:c,name:s,value:d,id:p,"data-radiogroup":y,"aria-describedby":h,...f}=e,v=`radio-${(0,a.useId)()}`,g=(0,w.NJ)(),Z=b(),x=g&&!(Z||y)?g.id:v;x=null!=p?p:x;let B=null!=r?r:null==g?void 0:g.isDisabled,C=null!=i?i:null==g?void 0:g.isReadOnly,_=null!=l?l:null==g?void 0:g.isRequired,D=null!=c?c:null==g?void 0:g.isInvalid,[E,M]=(0,a.useState)(!1),[j,P]=(0,a.useState)(!1),[L,T]=(0,a.useState)(!1),[X,K]=(0,a.useState)(!1),[O,I]=(0,a.useState)(Boolean(t)),W=void 0!==n,R=W?n:O;(0,a.useEffect)(()=>(0,k.BT)(M),[]);let V=(0,a.useCallback)(e=>{if(C||B){e.preventDefault();return}W||I(e.target.checked),null==u||u(e)},[W,B,C,u]),z=(0,a.useCallback)(e=>{" "===e.key&&K(!0)},[K]),Y=(0,a.useCallback)(e=>{" "===e.key&&K(!1)},[K]),q=(0,a.useCallback)((e={},t=null)=>({...e,ref:t,"data-active":(0,m.PB)(X),"data-hover":(0,m.PB)(L),"data-disabled":(0,m.PB)(B),"data-invalid":(0,m.PB)(D),"data-checked":(0,m.PB)(R),"data-focus":(0,m.PB)(j),"data-focus-visible":(0,m.PB)(j&&E),"data-readonly":(0,m.PB)(C),"aria-hidden":!0,onMouseDown:(0,m.v0)(e.onMouseDown,()=>K(!0)),onMouseUp:(0,m.v0)(e.onMouseUp,()=>K(!1)),onMouseEnter:(0,m.v0)(e.onMouseEnter,()=>T(!0)),onMouseLeave:(0,m.v0)(e.onMouseLeave,()=>T(!1))}),[X,L,B,D,R,j,C,E]),{onFocus:F,onBlur:H}=null!=g?g:{},G=(0,a.useCallback)((e={},t=null)=>{let n=B&&!o;return{...e,id:x,ref:t,type:"radio",name:s,value:d,onChange:(0,m.v0)(e.onChange,V),onBlur:(0,m.v0)(H,e.onBlur,()=>P(!1)),onFocus:(0,m.v0)(F,e.onFocus,()=>P(!0)),onKeyDown:(0,m.v0)(e.onKeyDown,z),onKeyUp:(0,m.v0)(e.onKeyUp,Y),checked:R,disabled:n,readOnly:C,required:_,"aria-invalid":(0,m.Qm)(D),"aria-disabled":(0,m.Qm)(n),"aria-required":(0,m.Qm)(_),"data-readonly":(0,m.PB)(C),"aria-describedby":h,style:N}},[B,o,x,s,d,V,H,F,z,Y,R,C,_,D,h]),A=(e={},t=null)=>({...e,ref:t,onMouseDown:(0,m.v0)(e.onMouseDown,S),"data-disabled":(0,m.PB)(B),"data-checked":(0,m.PB)(R),"data-invalid":(0,m.PB)(D)}),Q=(e,t=null)=>({...e,ref:t,"data-disabled":(0,m.PB)(B),"data-checked":(0,m.PB)(R),"data-invalid":(0,m.PB)(D)});return{state:{isInvalid:D,isFocused:j,isChecked:R,isActive:X,isHovered:L,isDisabled:B,isReadOnly:C,isRequired:_},getCheckboxProps:q,getRadioProps:q,getInputProps:G,getLabelProps:A,getRootProps:Q,htmlProps:f}}({...f,isChecked:g,isFocusable:p,isDisabled:d,onChange:Z,name:x}),[P,L]=function(e,t){let n={},o={};for(let[a,r]of Object.entries(e))t.includes(a)?n[a]=r:o[a]=r;return[n,o]}(j,C.oE),T=D(L),X=_(y,t),K=E(),O=Object.assign({},P,M()),I={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...l.container},W={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...l.control},R={userSelect:"none",marginStart:c,...l.label};return(0,v.jsxs)(h.m.label,{className:"chakra-radio",...O,__css:I,children:[(0,v.jsx)("input",{className:"chakra-radio__input",...X}),(0,v.jsx)(h.m.span,{className:"chakra-radio__control",...T,__css:W}),s&&(0,v.jsx)(h.m.span,{className:"chakra-radio__label",...K,__css:R,children:s})]})});_.displayName="Radio";var D=n(9222),E=n(8813),M=n(7349),j=n(3882),P=n(3946),L=n(4559);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var X=n(1640),K=n(9013);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var I=n(9008),W=n.n(I),R=n(3014);function V(){let e=function(e){let{theme:t}=(0,s.uP)(),n=(0,u.OX)();return(0,a.useMemo)(()=>(0,c.Cj)(t.direction,{...n,...e}),[e,t.direction,n])}(),t={year:Number((0,E.Z)(new Date,"yyyy")),month:Number((0,E.Z)(new Date,"MM")),day:Number((0,E.Z)(new Date,"dd"))},[n,i]=(0,a.useState)(t),[m,p]=(0,a.useState)(),[y,h]=(0,a.useState)("before"),[f,v]=(0,a.useState)(!1),[g,b]=(0,a.useState)(t),w=e=>i(t=>({...t,year:e})),k=e=>i(t=>({...t,month:e})),N=e=>i(t=>({...t,day:e})),S=()=>{i(t),e({title:"오늘 날짜로 초기화 되었습니다.",status:"success",isClosable:!0})},B=()=>{if(null==m){e({title:"값을 입력해주세요.",status:"warning",isClosable:!0});return}let t="".concat(n.year,"-").concat(n.month,"-").concat(n.day),o=function(e,t){if((0,j.Z)(2,arguments),!t||"object"!==T(t))return new Date(NaN);var n=t.years?(0,P.Z)(t.years):0,o=t.months?(0,P.Z)(t.months):0,a=t.weeks?(0,P.Z)(t.weeks):0,r=t.days?(0,P.Z)(t.days):0,i=t.hours?(0,P.Z)(t.hours):0,l=t.minutes?(0,P.Z)(t.minutes):0,u=t.seconds?(0,P.Z)(t.seconds):0,c=function(e,t){(0,j.Z)(2,arguments);var n=(0,P.Z)(t);return(0,M.Z)(e,-n)}((0,L.Z)(e,o+12*n),r+7*a);return new Date(c.getTime()-1e3*(u+60*(l+60*i)))}(new Date(t),{days:m}),a=function(e,t){if((0,j.Z)(2,arguments),!t||"object"!==O(t))return new Date(NaN);var n=t.years?(0,P.Z)(t.years):0,o=t.months?(0,P.Z)(t.months):0,a=t.weeks?(0,P.Z)(t.weeks):0,r=t.days?(0,P.Z)(t.days):0,i=t.hours?(0,P.Z)(t.hours):0,l=t.minutes?(0,P.Z)(t.minutes):0,u=t.seconds?(0,P.Z)(t.seconds):0,c=(0,K.Z)(e),s=o||n?(0,X.Z)(c,o+12*n):c,d=r||a?(0,M.Z)(s,r+7*a):s;return new Date(d.getTime()+1e3*(u+60*(l+60*i)))}(new Date(t),{days:m});"before"===y?b({year:Number((0,E.Z)(o,"yyyy")),month:Number((0,E.Z)(o,"MM")),day:Number((0,E.Z)(o,"dd"))}):b({year:Number((0,E.Z)(a,"yyyy")),month:Number((0,E.Z)(a,"MM")),day:Number((0,E.Z)(a,"dd"))}),v(!0)},C=()=>{v(!1)},I=e=>{h(e)};return(0,o.BX)(o.HY,{children:[(0,o.tZ)(W(),{children:(0,o.tZ)(l.h_,{})}),(0,o.tZ)(r.Dx,{title:"날짜 계산기"}),(0,o.tZ)(z,{children:f?(0,o.tZ)(o.HY,{children:(0,o.BX)("div",{className:"result",children:[(0,o.tZ)("div",{className:"icon-box",children:(0,o.tZ)(R.h,{boxSize:7,color:"blue.500"})}),(0,o.BX)("div",{className:"info-box",children:[(0,o.tZ)("h2",{children:"".concat(n.year,"년 ").concat(n.month,"월 ").concat(n.day,"일 로부터 ").concat(null!=m?m:"O","일 ").concat("before"===y?"전은":"후는")}),(0,o.BX)("p",{children:[(0,o.tZ)("strong",{children:"".concat(g.year,"년 ").concat(g.month,"월 ").concat(g.day,"일 ")}),"입니다."]})]}),(0,o.tZ)(D.z,{colorScheme:"gray",onClick:()=>C(),children:"다시 계산하기"})]})}):(0,o.tZ)(o.HY,{children:(0,o.BX)("div",{className:"content",children:[(0,o.BX)("div",{className:"date-box",children:[(0,o.tZ)(l.VL,{type:"year",defaultValue:n.year,value:n.year,onChange:w}),(0,o.tZ)("span",{className:"unit",children:"년"}),(0,o.tZ)(l.VL,{type:"month",defaultValue:n.month,value:n.month,onChange:k}),(0,o.tZ)("span",{className:"unit",children:"월"}),(0,o.tZ)(l.VL,{type:"day",defaultValue:n.day,value:n.day,onChange:N}),(0,o.tZ)("span",{className:"unit",children:"일"})]}),(0,o.tZ)("p",{className:"desc",children:"로부터"}),(0,o.BX)("div",{className:"calculate-box",children:[(0,o.tZ)(d.Y2,{value:m,onChange:(e,t)=>p(t),children:(0,o.tZ)(d.zu,{})}),(0,o.tZ)("span",{className:"unit",children:"일"}),(0,o.tZ)("span",{className:"unit",style:{color:"gray"},children:"::"}),(0,o.tZ)(Z,{defaultValue:"before",onChange:I,children:(0,o.BX)(x.K,{spacing:4,direction:"row",children:[(0,o.tZ)(_,{colorScheme:"red",value:"before",children:"전"}),(0,o.tZ)(_,{colorScheme:"blue",value:"after",children:"후"})]})})]}),(0,o.tZ)("div",{className:"result-box"}),(0,o.BX)("div",{className:"button-box",children:[(0,o.tZ)(D.z,{colorScheme:"gray",style:{marginRight:"20px"},onClick:()=>S(),children:"오늘 날짜로 초기화"}),(0,o.tZ)(D.z,{colorScheme:"gray",onClick:()=>B(),children:"계산하기"})]})]})})})]})}let z=(0,i.Z)("div",{target:"e109nwno0"})("width:100%;height:100%;margin:0;position:relative;.result{margin-top:40px;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;position:absolute;top:10%;.icon-box{}.info-box{display:flex;margin-bottom:40px;flex-direction:column;align-items:center;h2{padding:15px;}p{text-align:center;strong{font-size:1.2em;}}}}.content{margin-top:40px;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;position:absolute;top:10%;.date-box{display:flex;margin-bottom:20px;.unit{margin:10px;font-weight:500;margin-right:12px;:last-child{margin-right:0;}}}.desc{font-weight:600;margin-bottom:20px;}.calculate-box{display:flex;align-items:center;margin-bottom:30px;.unit{margin:10px;font-weight:500;}.chakra-numberinput{max-width:100px;}}.button-box{}}")},7073:function(e,t,n){"use strict";n.d(t,{K:function(){return d}});var o=n(9354),a=n(5893),r=e=>(0,a.jsx)(o.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});r.displayName="StackItem";var i=n(5432);function l(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,i.Kn)(e)?Object.keys(e).reduce((n,o)=>(n[o]=t(e[o]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var u="& > *:not(style) ~ *:not(style)",c=n(5059),s=n(7294),d=(0,c.G)((e,t)=>{let{isInline:n,direction:c,align:d,justify:m,spacing:p="0.5rem",wrap:y,children:h,divider:f,className:v,shouldWrapChildren:g,...b}=e,Z=n?"row":null!=c?c:"column",x=(0,s.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,o={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[u]:l(n,e=>o[e])}})({direction:Z,spacing:p}),[Z,p]),w=(0,s.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,o={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":l(n,e=>o[e])}})({spacing:p,direction:Z}),[p,Z]),k=!!f,N=!g&&!k,S=(0,s.useMemo)(()=>{let e=s.Children.toArray(h).filter(e=>(0,s.isValidElement)(e));return N?e:e.map((t,n)=>{let o=void 0!==t.key?t.key:n,i=n+1===e.length,l=(0,a.jsx)(r,{children:t},o),u=g?l:t;if(!k)return u;let c=(0,s.cloneElement)(f,{__css:w});return(0,a.jsxs)(s.Fragment,{children:[u,i?null:c]},o)})},[f,w,k,N,g,h]),B=(0,i.cx)("chakra-stack",v);return(0,a.jsx)(o.m.div,{ref:t,display:"flex",alignItems:d,justifyContent:m,flexDirection:x.flexDirection,flexWrap:y,className:B,__css:k?{}:{[u]:x[u]},...b,children:S})});d.displayName="Stack"},6256:function(e,t,n){"use strict";n.d(t,{BT:function(){return f}});var o=!1,a=null,r=!1,i=!1,l=new Set;function u(e,t){l.forEach(n=>n(e,t))}var c="undefined"!=typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function s(e){r=!0,e.metaKey||!c&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(a="keyboard",u("keyboard",e))}function d(e){if(a="pointer","mousedown"===e.type||"pointerdown"===e.type){r=!0;let t=e.composedPath?e.composedPath()[0]:e.target,n=!1;try{n=t.matches(":focus-visible")}catch{}n||u("pointer",e)}}function m(e){(0===e.mozInputSource&&e.isTrusted||0===e.detail&&!e.pointerType)&&(r=!0,a="virtual")}function p(e){e.target!==window&&e.target!==document&&(r||i||(a="virtual",u("virtual",e)),r=!1,i=!1)}function y(){r=!1,i=!0}function h(){return"pointer"!==a}function f(e){!function(){if("undefined"==typeof window||o)return;let{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...t){r=!0,e.apply(this,t)},document.addEventListener("keydown",s,!0),document.addEventListener("keyup",s,!0),document.addEventListener("click",m,!0),window.addEventListener("focus",p,!0),window.addEventListener("blur",y,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",d,!0),document.addEventListener("pointermove",d,!0),document.addEventListener("pointerup",d,!0)):(document.addEventListener("mousedown",d,!0),document.addEventListener("mousemove",d,!0),document.addEventListener("mouseup",d,!0)),o=!0}(),e(h());let t=()=>e(h());return l.add(t),()=>{l.delete(t)}}}},function(e){e.O(0,[367,886,774,888,179],function(){return e(e.s=2869)}),_N_E=e.O()}]);
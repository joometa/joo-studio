(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3485)}])},3485:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return G}});var n=r(5944),i=r(9008),o=r.n(i),a=r(7294),[l,c]=(0,r(6452).eC)("Card"),d=r(5432),m=r(5059),s=r(3179),u=r(4662),g=r(9354),p=r(5893),f=(0,m.G)(function(t,e){let{className:r,children:n,direction:i="column",justify:o,align:a,...c}=(0,s.Lr)(t),m=(0,u.jC)("Card",t);return(0,p.jsx)(g.m.div,{ref:e,className:(0,d.cx)("chakra-card",r),__css:{display:"flex",flexDirection:i,justifyContent:o,alignItems:a,position:"relative",minWidth:0,wordWrap:"break-word",...m.container},...c,children:(0,p.jsx)(l,{value:m,children:n})})}),h=(0,m.G)(function(t,e){let{className:r,...n}=t,i=c();return(0,p.jsx)(g.m.div,{ref:e,className:(0,d.cx)("chakra-card__body",r),__css:i.body,...n})}),x=(0,m.G)(function(t,e){let{htmlWidth:r,htmlHeight:n,alt:i,...o}=t;return(0,p.jsx)("img",{width:r,height:n,ref:e,alt:i,...o})});x.displayName="NativeImage";var y=r(6245),_=(t,e)=>"loaded"!==t&&"beforeLoadOrError"===e||"failed"===t&&"onError"===e,w=(0,m.G)(function(t,e){let{fallbackSrc:r,fallback:n,src:i,srcSet:o,align:l,fit:c,loading:d,ignoreFallback:m,crossOrigin:s,fallbackStrategy:u="beforeLoadOrError",referrerPolicy:f,...h}=t,w=null!=d||m||!(void 0!==r||void 0!==n),j=function(t){let{loading:e,src:r,srcSet:n,onLoad:i,onError:o,crossOrigin:l,sizes:c,ignoreFallback:d}=t,[m,s]=(0,a.useState)("pending");(0,a.useEffect)(()=>{s(r?"loading":"pending")},[r]);let u=(0,a.useRef)(),g=(0,a.useCallback)(()=>{if(!r)return;p();let t=new Image;t.src=r,l&&(t.crossOrigin=l),n&&(t.srcset=n),c&&(t.sizes=c),e&&(t.loading=e),t.onload=t=>{p(),s("loaded"),null==i||i(t)},t.onerror=t=>{p(),s("failed"),null==o||o(t)},u.current=t},[r,l,n,c,i,o,e]),p=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,y.G)(()=>{if(!d)return"loading"===m&&g(),()=>{p()}},[m,g,d]),d?"loaded":m}({...t,ignoreFallback:w}),b=_(j,u),v={ref:e,objectFit:c,objectPosition:l,...w?h:function(t,e=[]){let r=Object.assign({},t);for(let t of e)t in r&&delete r[t];return r}(h,["onError","onLoad"])};return b?n||(0,p.jsx)(g.m.img,{as:x,className:"chakra-image__placeholder",src:r,...v}):(0,p.jsx)(g.m.img,{as:x,src:i,srcSet:o,crossOrigin:s,loading:d,referrerPolicy:f,className:"chakra-image",...v})});w.displayName="Image";var j=t=>(0,p.jsx)(g.m.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});function b(t,e){return Array.isArray(t)?t.map(t=>null===t?null:e(t)):(0,d.Kn)(t)?Object.keys(t).reduce((r,n)=>(r[n]=e(t[n]),r),{}):null!=t?e(t):null}j.displayName="StackItem",Object.freeze(["base","sm","md","lg","xl","2xl"]);var v="& > *:not(style) ~ *:not(style)",k=(0,m.G)((t,e)=>{let{isInline:r,direction:n,align:i,justify:o,spacing:l="0.5rem",wrap:c,children:m,divider:s,className:u,shouldWrapChildren:f,...h}=t,x=r?"row":null!=n?n:"column",y=(0,a.useMemo)(()=>(function(t){let{spacing:e,direction:r}=t,n={column:{marginTop:e,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:e},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:e,marginStart:0},"row-reverse":{marginTop:0,marginEnd:e,marginBottom:0,marginStart:0}};return{flexDirection:r,[v]:b(r,t=>n[t])}})({direction:x,spacing:l}),[x,l]),_=(0,a.useMemo)(()=>(function(t){let{spacing:e,direction:r}=t,n={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":b(r,t=>n[t])}})({spacing:l,direction:x}),[l,x]),w=!!s,k=!f&&!w,Z=(0,a.useMemo)(()=>{let t=a.Children.toArray(m).filter(t=>(0,a.isValidElement)(t));return k?t:t.map((e,r)=>{let n=void 0!==e.key?e.key:r,i=r+1===t.length,o=(0,p.jsx)(j,{children:e},n),l=f?o:e;if(!w)return l;let c=(0,a.cloneElement)(s,{__css:_});return(0,p.jsxs)(a.Fragment,{children:[l,i?null:c]},n)})},[s,_,w,k,f,m]),C=(0,d.cx)("chakra-stack",u);return(0,p.jsx)(g.m.div,{ref:e,display:"flex",alignItems:i,justifyContent:o,flexDirection:y.flexDirection,flexWrap:c,className:C,__css:w?{}:{[v]:y[v]},...h,children:Z})});k.displayName="Stack";var Z=(0,m.G)(function(t,e){let r=(0,u.mq)("Heading",t),{className:n,...i}=(0,s.Lr)(t);return(0,p.jsx)(g.m.h2,{ref:e,className:(0,d.cx)("chakra-heading",t.className),...i,__css:r})});Z.displayName="Heading";var C=r(166);function N(t){let{content:e,src:r,onClick:i}=t;return(0,n.tZ)(E,{onClick:i,children:(0,n.tZ)(f,{maxW:"sm",children:(0,n.BX)(h,{children:[(0,n.tZ)(w,{src:r,alt:"image",borderRadius:"lg"}),(0,n.tZ)(k,{mt:"6",spacing:"3",children:(0,n.tZ)(Z,{size:"md",children:e})})]})})})}let E=(0,C.Z)("div",{target:"e6jwaqt0"})("cursor:pointer;transition:0.4s ease;&:hover{transform:translateY(-10px);}");var B=(0,m.G)(function(t,e){let{templateAreas:r,gap:n,rowGap:i,columnGap:o,column:a,row:l,autoFlow:c,autoRows:d,templateRows:m,autoColumns:s,templateColumns:u,...f}=t;return(0,p.jsx)(g.m.div,{ref:e,__css:{display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:i,gridColumnGap:o,gridAutoColumns:s,gridColumn:a,gridRow:l,gridAutoFlow:c,gridAutoRows:d,gridTemplateRows:m,gridTemplateColumns:u},...f})});B.displayName="Grid";var W=r(1163);function G(){let t=(0,W.useRouter)(),e=e=>{t.push(e)};return(0,n.BX)(n.HY,{children:[(0,n.BX)(o(),{children:[(0,n.tZ)("title",{children:"jootudio.com"}),(0,n.tZ)("meta",{name:"title",content:"jootudio.com"}),(0,n.tZ)("meta",{name:"description",content:"달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."}),(0,n.tZ)("meta",{property:"og:type",content:"website"}),(0,n.tZ)("meta",{property:"og:url",content:"https://jootudio.com/"}),(0,n.tZ)("meta",{property:"og:title",content:"jootudio.com"}),(0,n.tZ)("meta",{property:"og:description",content:"달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."}),(0,n.tZ)("meta",{property:"og:image",content:"./images/ogImage.png"}),(0,n.tZ)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.tZ)("meta",{property:"twitter:url",content:"https://jootudio.com/"}),(0,n.tZ)("meta",{property:"twitter:title",content:"jootudio.com"}),(0,n.tZ)("meta",{property:"twitter:description",content:"달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."}),(0,n.tZ)("meta",{property:"twitter:image",content:"./images/ogImage.png"})]}),(0,n.tZ)("main",{children:(0,n.BX)(L,{children:[(0,n.tZ)("div",{className:"title",children:(0,n.tZ)(Z,{children:"간편 정보"})}),(0,n.BX)(B,{templateColumns:"repeat(3, 1fr)",gap:6,children:[(0,n.tZ)(N,{content:"달력",src:"./images/calendar.png",onClick:()=>e("/calendar")}),(0,n.tZ)(N,{content:"날짜계산기",src:"./images/calculator.png",onClick:()=>e("/")})]})]})})]})}let L=(0,C.Z)("div",{target:"e5jm3510"})("width:100%;max-width:1440px;height:100%;margin:auto;.title{display:flex;justify-content:center;padding-bottom:50px;}@media (max-width:1200px){display:flex;justify-content:center;.button-group{max-width:90vw;width:100%;}}")},9008:function(t,e,r){t.exports=r(5443)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);
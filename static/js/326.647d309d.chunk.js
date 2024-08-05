"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[326],{1757:(e,s,a)=>{a.d(s,{A:()=>m});var n=a(3621),r=a(157),t=a(5522),l=a(7921),i=a(579);const d=[{name:"name",text:"Nome",disabled:!1},{name:"username",text:"Nome de usu\xe1rio",disabled:!1},{name:"email",text:"E-mail",disabled:!0},{name:"phone",text:"Telefone",disabled:!1},{name:"website",text:"Website",disabled:!1}],o=[{name:"street",text:"Rua"},{name:"suite",text:"N\xba"},{name:"city",text:"Cidade"},{name:"zipcode",text:"CEP"}],c=[{name:"name",text:"Nome da empresa"},{name:"catchPhrase",text:"Tagline da empresa"},{name:"bs",text:"B.S. da empresa"}],m=e=>{let{user:s,setUser:a,isNewUser:m=!1}=e;const u=e=>{let{value:n,key:r,type:t}=e;a("address"!==t?"company"!==t?{...s,[r]:n}:{...s,company:{...s.company,[r]:n}}:{...s,address:{...s.address,[r]:n}})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.Z,{p:5,borderRadius:10,gap:2,children:[(0,i.jsx)(r.E,{mb:2,fontWeight:"bold",children:"Informa\xe7\xf5es b\xe1sicas"}),d.map((e=>(0,i.jsxs)(t.az,{children:[(0,i.jsx)(r.E,{fontSize:"small",mb:2,color:"gray.500",children:"E-mail"!==e.text||m?e.text:"E-mail (Informa\xe7\xe3o n\xe3o editad\xe1vel)"}),(0,i.jsx)(l.p,{placeholder:e.text,borderColor:"gray.200",disabled:e.disabled&&!m,value:s[e.name],onChange:s=>{let{target:a}=s;return u({value:a.value,key:e.name})}})]},e.name)))]}),(0,i.jsxs)(n.Z,{p:5,borderRadius:10,gap:2,children:[(0,i.jsx)(r.E,{mb:2,fontWeight:"bold",children:"Endere\xe7o"}),o.map((e=>(0,i.jsxs)(t.az,{children:[(0,i.jsx)(r.E,{fontSize:"small",mb:2,color:"gray.500",children:e.text}),(0,i.jsx)(l.p,{placeholder:e.text,borderColor:"gray.200",value:s.address[e.name],onChange:s=>{let{target:a}=s;return u({value:a.value,key:e.name,type:"address"})}})]},e.name)))]}),(0,i.jsxs)(n.Z,{p:5,borderRadius:10,gap:2,children:[(0,i.jsx)(r.E,{mb:2,fontWeight:"bold",children:"Empresa"}),c.map((e=>(0,i.jsxs)(t.az,{children:[(0,i.jsx)(r.E,{fontSize:"small",mb:2,color:"gray.500",children:e.text}),(0,i.jsx)(l.p,{placeholder:e.text,borderColor:"gray.200",value:s.company[e.name],onChange:s=>{let{target:a}=s;return u({value:a.value,key:e.name,type:"company"})}})]},e.name)))]})]})}},9673:(e,s,a)=>{a.d(s,{A:()=>h});var n=a(1918),r=a(5522),t=a(4377),l=a(157),i=a(5532),d=a(1197),o=a(9804),c=a(4492),m=a(3216),u=a(579);const h=e=>{let{user:s,hasAction:a=!1,hasRoute:h=!1}=e;const{loginUser:x}=(0,c.d)(),p=(0,m.Zp)();return(0,u.jsxs)(n.s,{flex:"1",gap:"2",alignItems:"center",justifyContent:"space-between",children:[(0,u.jsxs)(n.s,{gap:"2",cursor:h?"pointer":"",onClick:e=>{h&&(e.preventDefault(),p("/posts/".concat(null===s||void 0===s?void 0:s.id)))},children:[(0,u.jsx)(n.s,{width:"50px",height:"50px",bg:"gray.100",borderRadius:"50%",justifyContent:"center",alignItems:"center",children:(0,u.jsx)(o.PY8,{size:25})}),(0,u.jsxs)(r.az,{children:[(0,u.jsx)(t.D,{size:"sm",children:(null===s||void 0===s?void 0:s.name)||""}),(0,u.jsx)(l.E,{children:s.email||""})]})]}),a&&(0,u.jsx)(n.s,{gap:2,children:(0,u.jsx)(i.m,{label:"Fazer login como este usu\xe1rio",placement:"left",children:(0,u.jsx)(d.$,{size:"sm",p:1,rounded:"full",onClick:()=>x(s),children:(0,u.jsx)(o.XzR,{size:20})})})})]})}},884:(e,s,a)=>{a.d(s,{A:()=>n});const n={id:0,name:"",username:"",email:"",address:{street:"",suite:"",city:"",zipcode:"",geo:{lat:"",lng:""}},phone:"",website:"",company:{name:"",catchPhrase:"",bs:""}}},4326:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var n=a(5522),r=a(1918),t=a(157),l=a(5532),i=a(1197),d=a(7921),o=a(3621),c=a(5043),m=a(4492),u=a(9673),h=a(884),x=a(1757),p=a(9804),j=a(579);const g=()=>{const{users:e,getAllUsers:s,createUser:a}=(0,m.d)(),[g,b]=(0,c.useState)(""),[f,v]=(0,c.useState)({...h.A,id:Math.random()}),[y,C]=(0,c.useState)(!1);(0,c.useEffect)((()=>{e.length||s()}),[s,e]);const z=(0,c.useMemo)((()=>g.length?e.filter((e=>{var s;return null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.toLowerCase().includes(g.toLowerCase())})):e),[g,e]);return(0,j.jsxs)(n.az,{children:[(0,j.jsxs)(n.az,{mb:5,children:[(0,j.jsxs)(r.s,{justifyContent:"space-between",alignItems:"center",children:[(0,j.jsxs)(n.az,{children:[(0,j.jsx)(t.E,{as:"h1",fontSize:"2xl",fontWeight:"bold",children:"Usu\xe1rios"}),(0,j.jsx)(t.E,{as:"p",color:"gray.500",children:"Selecione o usu\xe1rio que deseja usar!"})]}),(0,j.jsx)(l.m,{label:y?"Fechar":"Criar um novo usu\xe1rio",placement:"left",children:(0,j.jsx)(i.$,{size:"sm",height:"40px",width:"40px",p:0,rounded:"full",onClick:()=>C(!y),children:y?(0,j.jsx)(p.YJx,{size:20}):(0,j.jsx)(p.Ca6,{size:20})})})]}),y&&(0,j.jsxs)(n.az,{textAlign:"left",mt:5,children:[(0,j.jsx)(x.A,{user:f,setUser:v,isNewUser:!0}),(0,j.jsxs)(r.s,{gap:2,justifyContent:"space-between",mt:5,children:[(0,j.jsx)(i.$,{colorScheme:"red",onClick:()=>{C(!1),v(h.A)},children:"Cancelar"}),(0,j.jsx)(i.$,{colorScheme:"green",onClick:()=>{a(f),C(!1),v(h.A)},children:"Criar Usu\xe1rio"})]})]}),(0,j.jsx)(d.p,{placeholder:"Buscar por nome...",mt:5,value:g,onChange:e=>{let{target:s}=e;return b(s.value)}})]}),(0,j.jsx)(r.s,{direction:"column",gap:5,children:!!z.length&&(null===z||void 0===z?void 0:z.map((e=>(0,j.jsx)(o.Z,{p:5,borderRadius:10,children:(0,j.jsx)(u.A,{user:e,hasAction:!0})},null===e||void 0===e?void 0:e.id))))})]})}},4377:(e,s,a)=>{a.d(s,{D:()=>o});var n=a(3226),r=a(3761),t=a(6254),l=a(4550),i=a(9254),d=a(579),o=(0,n.R)((function(e,s){const a=(0,r.Vl)("Heading",e),{className:n,...o}=(0,t.MN)(e);return(0,d.jsx)(l.B.h2,{ref:s,className:(0,i.cx)("chakra-heading",e.className),...o,__css:a})}));o.displayName="Heading"}}]);
//# sourceMappingURL=326.647d309d.chunk.js.map
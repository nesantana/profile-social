"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[444],{7346:(e,s,l)=>{l.d(s,{A:()=>R});var n=l(1221),i=l(3748),o=l(3621),r=l(2018),t=l(1918),d=l(5532),c=l(2071),a=l(7921),u=l(5695),h=l(2660),x=l(8470),j=l(1197),m=l(6654),v=l(9337),p=l(1972),g=l(2449),C=l(4918),f=l(3161),b=l(169),y=l(5522),z=l(157),S=l(4710),k=l(4688),E=l(4492),w=l(5043),I=l(9673),A=l(3536),$=l(6720),D=l(2116),O=l(9804),T=l(5273),W=l(579);const P=e=>{let{comment:s}=e;const{isOpen:l,onToggle:i,onClose:r}=(0,n.j)(),{deleteComment:d}=(0,D.w)(),{currentUser:c}=(0,E.d)();return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(o.Z,{p:2,children:[(0,W.jsxs)(t.s,{gap:2,justifyContent:"space-between",children:[(0,W.jsx)(z.E,{fontSize:"small",children:null===s||void 0===s?void 0:s.email}),s.email===c.email&&(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(h.A,{returnFocusOnClose:!1,isOpen:l,onClose:r,placement:"end",closeOnBlur:!1,children:[(0,W.jsx)(x.W,{children:(0,W.jsx)(j.$,{onClick:i,children:(0,W.jsx)(O.id1,{color:"red",cursor:"pointer"})})}),(0,W.jsxs)(m.h,{children:[(0,W.jsx)(v.D,{fontWeight:"semibold",children:"Tem certeza que deseja excluir este coment\xe1rio?"}),(0,W.jsx)(p.R,{}),(0,W.jsx)(g.q,{}),(0,W.jsx)(C.e,{children:"Essa a\xe7\xe3o n\xe3o pode ser desfeita."}),(0,W.jsx)(f.N,{display:"flex",justifyContent:"flex-end",children:(0,W.jsxs)(b.e,{size:"sm",children:[(0,W.jsx)(j.$,{variant:"outline",onClick:r,children:"Cancelar"}),(0,W.jsx)(j.$,{colorScheme:"red",onClick:()=>{d(s),r()},children:"Excluir"})]})})]})]})})]}),(0,W.jsx)(z.E,{fontSize:"small",fontWeight:"bold",children:null===s||void 0===s?void 0:s.name}),(0,W.jsx)(z.E,{fontSize:"small",children:null===s||void 0===s?void 0:s.body})]})})},R=e=>{var s,l;let{post:R}=e;const{getOneUser:U,users:F,currentUser:q}=(0,E.d)(),{createComment:B,editPost:Z,deletePost:N}=(0,D.w)(),[M,X]=(0,w.useState)({}),[Y,_]=(0,w.useState)(!1),{isOpen:G,onToggle:H,onClose:J}=(0,n.j)(),[K,L]=(0,w.useState)((null===R||void 0===R?void 0:R.image)||""),[Q,V]=(0,w.useState)((null===R||void 0===R?void 0:R.title)||""),[ee,se]=(0,w.useState)((null===R||void 0===R?void 0:R.body)||""),[le,ne]=(0,w.useState)(!1),[ie,oe]=(0,w.useState)(""),[re,te]=(0,w.useState)(""),de=()=>{ne(!1),V(""),se(""),L("")},ce=(0,i.d)(),ae=(0,w.useCallback)((()=>{const e=U(null===R||void 0===R?void 0:R.userId);X(e)}),[U,R]);return(0,w.useEffect)((()=>{ae()}),[F,ae,R]),(0,W.jsxs)(o.Z,{width:"100%",children:[(0,W.jsx)(r.a,{children:(0,W.jsxs)(t.s,{justifyContent:"space-between",alignItems:"center",children:[!(0,A.isEmpty)(M)&&(0,W.jsx)(I.A,{hasRoute:!0,user:M}),(null===q||void 0===q?void 0:q.id)===(null===R||void 0===R?void 0:R.userId)&&(0,W.jsx)(d.m,{label:"Editar post",placement:"left",children:(0,W.jsx)("div",{onClick:()=>(ne(!0),V((null===R||void 0===R?void 0:R.title)||""),se((null===R||void 0===R?void 0:R.body)||""),void L((null===R||void 0===R?void 0:R.image)||"")),children:(0,W.jsx)(O.u6n,{size:20,cursor:"pointer"})})})]})}),(0,W.jsx)(c.b,{py:0,children:le?(0,W.jsxs)(t.s,{flexDirection:"column",gap:2,children:[(0,W.jsx)(a.p,{placeholder:"T\xedtulo do post",borderColor:"gray.200",value:Q,onChange:e=>{let{target:s}=e;return V(s.value)}}),(0,W.jsx)(u.T,{placeholder:"Me conta sobre isso...",borderColor:"gray.200",value:ee,onChange:e=>{let{target:s}=e;return se(s.value)}}),(0,W.jsx)(T.A,{image:K,setImage:L}),(0,W.jsxs)(t.s,{gap:2,justifyContent:"space-between",children:[(0,W.jsxs)(h.A,{returnFocusOnClose:!1,isOpen:G,onClose:J,placement:"end",closeOnBlur:!1,children:[(0,W.jsx)(x.W,{children:(0,W.jsx)(j.$,{colorScheme:"red",onClick:H,children:"Apagar"})}),(0,W.jsxs)(m.h,{children:[(0,W.jsx)(v.D,{fontWeight:"semibold",children:"Tem certeza que deseja excluir este post?"}),(0,W.jsx)(p.R,{}),(0,W.jsx)(g.q,{}),(0,W.jsx)(C.e,{children:"Essa a\xe7\xe3o n\xe3o pode ser desfeita."}),(0,W.jsx)(f.N,{display:"flex",justifyContent:"flex-end",children:(0,W.jsxs)(b.e,{size:"sm",children:[(0,W.jsx)(j.$,{variant:"outline",onClick:J,children:"Cancelar"}),(0,W.jsx)(j.$,{colorScheme:"red",onClick:()=>{N(R),J()},children:"Excluir"})]})})]})]}),(0,W.jsxs)(t.s,{gap:2,children:[(0,W.jsx)(j.$,{colorScheme:"red",onClick:()=>de(),children:"Cancelar"}),(0,W.jsx)(j.$,{colorScheme:"green",onClick:()=>{Z({title:Q,body:ee,image:K,id:null===R||void 0===R?void 0:R.id}),de()},children:"Salvar"})]})]})]}):(0,W.jsxs)(y.az,{gap:2,alignItems:"center",children:[(0,W.jsx)(z.E,{fontWeight:"bold",mb:2,children:null===R||void 0===R?void 0:R.title}),(0,W.jsx)(z.E,{whiteSpace:"pre-line",children:null===R||void 0===R?void 0:R.body}),(null===R||void 0===R?void 0:R.image)&&(0,W.jsx)(S._,{src:null===R||void 0===R?void 0:R.image,mt:5,alt:"Imagem do post"})]})}),(0,W.jsxs)(k.w,{p:5,flexDir:"column",children:[(0,W.jsxs)(z.E,{fontSize:"smaller",mb:1,color:"gray.500",display:"flex",gap:2,children:[Y?(0,W.jsx)($.U3x,{cursor:"pointer",onClick:()=>_(!1),size:20}):(0,W.jsx)($.BI9,{size:20,cursor:"pointer",onClick:()=>_(!0)}),null===R||void 0===R||null===(s=R.comments)||void 0===s?void 0:s.length," Comments"," "]}),Y&&(0,W.jsxs)(t.s,{justify:"space-between",flexDirection:"column",gap:2,bg:"gray.50",p:5,rounded:"md",children:[!(0,A.isEmpty)(null===R||void 0===R?void 0:R.comments)&&(null===R||void 0===R||null===(l=R.comments)||void 0===l?void 0:l.map((e=>(0,W.jsx)(P,{comment:e},null===e||void 0===e?void 0:e.id)))),!(0,A.isEmpty)(q)&&(0,W.jsxs)(o.Z,{p:5,gap:2,children:[(0,W.jsx)(z.E,{fontSize:"small",color:"gray.500",children:"Adicione um coment\xe1rio:"}),(0,W.jsx)(a.p,{placeholder:"De um t\xedtulo para seu coment\xe1rio",borderColor:"gray.200",value:re,onChange:e=>{let{target:s}=e;return te(s.value)}}),(0,W.jsx)(u.T,{placeholder:"Digite seu coment\xe1rio...",borderColor:"gray.200",value:ie,onChange:e=>{let{target:s}=e;return oe(s.value)}}),(0,W.jsx)(y.az,{children:(0,W.jsx)(j.$,{onClick:()=>{B({body:ie,name:re,postId:null===R||void 0===R?void 0:R.id,email:null===q||void 0===q?void 0:q.email}),oe(""),te(""),ce({title:"Coment\xe1rio criado com sucesso!",description:"Parab\xe9ns, seu coment\xe1rio foi adicionado!",status:"success",duration:3e3,isClosable:!0})},children:"Criar Coment\xe1rio"})})]})]})]})]},null===R||void 0===R?void 0:R.id)}},9673:(e,s,l)=>{l.d(s,{A:()=>x});var n=l(1918),i=l(5522),o=l(4377),r=l(157),t=l(5532),d=l(1197),c=l(9804),a=l(4492),u=l(3216),h=l(579);const x=e=>{let{user:s,hasAction:l=!1,hasRoute:x=!1}=e;const{loginUser:j}=(0,a.d)(),m=(0,u.Zp)();return(0,h.jsxs)(n.s,{flex:"1",gap:"2",alignItems:"center",justifyContent:"space-between",children:[(0,h.jsxs)(n.s,{gap:"2",cursor:x?"pointer":"",onClick:e=>{x&&(e.preventDefault(),m("/posts/".concat(null===s||void 0===s?void 0:s.id)))},children:[(0,h.jsx)(n.s,{width:"50px",height:"50px",bg:"gray.100",borderRadius:"50%",justifyContent:"center",alignItems:"center",children:(0,h.jsx)(c.PY8,{size:25})}),(0,h.jsxs)(i.az,{children:[(0,h.jsx)(o.D,{size:"sm",children:(null===s||void 0===s?void 0:s.name)||""}),(0,h.jsx)(r.E,{children:s.email||""})]})]}),l&&(0,h.jsx)(n.s,{gap:2,children:(0,h.jsx)(t.m,{label:"Fazer login como este usu\xe1rio",placement:"left",children:(0,h.jsx)(d.$,{size:"sm",p:1,rounded:"full",onClick:()=>j(s),children:(0,h.jsx)(c.XzR,{size:20})})})})]})}},3444:(e,s,l)=>{l.r(s),l.d(s,{default:()=>u});var n=l(5522),i=l(1918),o=l(157),r=l(5043),t=l(2116),d=l(7346),c=l(3216),a=l(579);const u=()=>{const{id:e}=(0,c.g)(),{getPostByUserId:s,posts:l}=(0,t.w)(),[u,h]=(0,r.useState)([]);return(0,r.useEffect)((()=>{l.length&&(async()=>{const l=await s(Number(e));h(l)})()}),[l,s,e]),(0,a.jsxs)(n.az,{children:[(0,a.jsx)(i.s,{mb:5,justifyContent:"space-between",children:(0,a.jsxs)(o.E,{fontWeight:"bold",color:"gray.500",children:[u.length," Posts"]})}),(0,a.jsx)(i.s,{direction:"column",gap:10,children:!!u.length&&(null===u||void 0===u?void 0:u.map((e=>(0,a.jsx)(d.A,{post:e},null===e||void 0===e?void 0:e.id))))})]})}}}]);
//# sourceMappingURL=444.87e7daf1.chunk.js.map
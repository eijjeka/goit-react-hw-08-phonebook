"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[518],{821:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,a,i,o,c,d,s,l,p,x,u,h,m,b,g=t(168),f=t(5048),Z=t(4654),j=t(9782),v=t(954),y=v.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 80px;\n"]))),k=t(885),w=t(2791),P=t(2450),C=v.ZP.h2(a||(a=(0,g.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  margin-bottom: 10px;\n"]))),z=v.ZP.input(i||(i=(0,g.Z)(["\n  padding: 5px;\n  min-width: 280px;\n  background-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.2);\n  border: none;\n  border-radius: 5px;\n"]))),_=v.ZP.div(o||(o=(0,g.Z)(["\n  margin-bottom: 20px;\n"]))),N=t(3329),A=function(n){var e=n.title,t=n.type,r=n.name,a=n.value,i=n.placeholder,o=n.pattern,c=n.onChange;return(0,N.jsxs)(_,{children:[(0,N.jsx)(C,{children:e}),(0,N.jsx)(z,{type:t,name:r,value:a,onChange:c,pattern:o,placeholder:i,autoComplete:"off",required:!0},r)]})},L=t(6373),I=t(2146),S=(t(4719),v.ZP.form(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 0;\n  width: 400px;\n  border-radius: 10px;\n  color: #000;\n  background-color: rgba(244, 244, 246, 0.4);\n  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.39);\n\n  @media screen and (max-width: 479px) {\n    max-width: 300px;\n  }\n"])))),E=v.ZP.button.attrs((function(){return{type:"submit"}}))(d||(d=(0,g.Z)(["\n  position: relative;\n  margin-top: 20px;\n  padding: 5px 10px;\n  display: inline-flex;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #212529;\n    color: #fff;\n  }\n"]))),T=t(9085),F=function(){var n=(0,j.Lr)(),e=(0,k.Z)(n,2),t=e[0],r=e[1].isLoading,a=(0,j.wY)().data,i=(0,w.useState)(""),o=(0,k.Z)(i,2),c=o[0],d=o[1],s=(0,w.useState)(""),l=(0,k.Z)(s,2),p=l[0],x=l[1],u=function(n){if(p.length>13)return alert("Please enter correct phone number");void 0===a.find((function(n){return n.name===c}))?t({name:c,number:p}):T.Am.error("".concat(c," is already in contacts."),{position:T.Am.POSITION.TOP_RIGHT,theme:"dark"}),n.preventDefault(),h()},h=function(){d(""),x("")};return(0,N.jsx)(I.E.div,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.9,delay:.5},children:(0,N.jsxs)(S,{onSubmit:u,children:[(0,N.jsx)(A,{onChange:function(n){d(n.currentTarget.value)},title:"Create contact tab",type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Jordan Walke"}),(0,N.jsx)(P.ZP,{defaultCountry:"UA",onChange:function(n){x(n)},region:"Europe",title:"Number",type:"tel",name:"number",value:p,placeholder:"Enter phone number",autoComplete:"off",international:!0,className:"inputPhone",maxLength:"16"}),(0,N.jsxs)(E,{disabled:r,onSubmit:u,children:[r&&(0,N.jsx)(L.gy,{color:"#fff",width:"16",height:"16"}),"Add contact"]})]})})},K=t(1538),O=t(2591),Y=t(1454),R=v.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10px;\n"]))),$=v.ZP.h2(l||(l=(0,g.Z)(["\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n"]))),q=v.ZP.button.attrs((function(){return{type:"button"}}))(p||(p=(0,g.Z)(["\n  padding: 5px 7px;\n  background-color: transparent;\n  color: #fff;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),B=v.ZP.span(x||(x=(0,g.Z)(["\n  color: #fff;\n  display: inline-block;\n  margin-top: 10px;\n"]))),D=t(6856),G=function(){var n=(0,j.wY)(),e=n.data,t=void 0===e?[]:e,r=n.isFetching,a=(0,j.Nt)(),i=(0,k.Z)(a,1)[0],o=(0,f.v9)(K.zK),c=""===o?t:t.filter((function(n){return n.name.toLowerCase().includes(o)}));return(0,N.jsx)(I.E.div,{initial:{y:300,opacity:0},animate:{y:0,opacity:1},transition:{duration:.9,delay:.6},children:(0,N.jsxs)(R,{children:[(0,N.jsx)($,{children:"Contacts"}),r&&(0,N.jsx)(Y.a,{}),t.length>0?(0,N.jsxs)(O.Z,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[(0,N.jsx)("thead",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{children:"Contact Name"}),(0,N.jsx)("th",{children:"Phone Number"}),(0,N.jsx)("th",{children:"Remove"})]})}),(0,N.jsx)("tbody",{children:c.map((function(n,e){var t=n.id,r=n.name,a=n.number;return(0,N.jsxs)("tr",{className:"text",children:[(0,N.jsx)("td",{children:r}),(0,N.jsx)("td",{children:a}),(0,N.jsx)("td",{children:(0,N.jsx)(q,{onClick:function(){return i(t)},children:(0,N.jsx)(D.$vK,{size:20})})})]},t)}))})]}):(0,N.jsx)(B,{children:"No Contacts"})]})})},H=(0,v.ZP)(y)(u||(u=(0,g.Z)(["\n  width: 400px;\n  margin: 20px 0;\n  padding: 10px 0;\n  border-radius: 10px;\n  color: #000;\n  background-color: rgba(244, 244, 246, 0.4);\n  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.39);\n  @media screen and (max-width: 479px) {\n    max-width: 300px;\n  }\n"]))),J=v.ZP.h2(h||(h=(0,g.Z)(["\n  font-size: 16px;\n  text-transform: uppercase;\n"]))),M=v.ZP.input(m||(m=(0,g.Z)(["\n  text-align: center;\n  margin-top: 10px;\n  padding: 5px;\n  border: none;\n  border-radius: 5px;\n  opacity: 0.5;\n"]))),U=function(){var n=(0,f.I0)(),e=(0,f.v9)(K.zK);return(0,N.jsx)(I.E.div,{initial:{x:-200,opacity:0},animate:{x:0,opacity:1},transition:{duration:.9,delay:.5},children:(0,N.jsxs)(H,{children:[(0,N.jsx)(J,{children:"Find contacts by name"}),(0,N.jsx)(M,{type:"text",value:e,onChange:function(e){n((0,K.hX)(e.currentTarget.value.toLocaleLowerCase().trim()))},placeholder:"Search name"})]})})},W=t.p+"static/media/contactMainBg.a6d87b9b5c7e2cc2b31f.jpg",X=function(){var n=(0,j.wY)(),e=n.data,t=(n.isFetching,(0,f.v9)(Z.Z.getIsLoggedIn));return(0,N.jsx)(Q,{children:(0,N.jsxs)(y,{children:[(0,N.jsx)(F,{}),t&&e&&(e.length>1?(0,N.jsx)(U,{}):""),(0,N.jsx)(G,{})]})})},Q=v.ZP.div(b||(b=(0,g.Z)(["\n  background: linear-gradient(\n      335deg,\n      rgba(9, 5, 47, 0.2) 0%,\n      rgba(49, 29, 94, 0.2) 100%\n    ),\n    url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  width: 100%;\n  overflow-y: scroll;\n  max-height: calc(100vh - 56px - 62px);\n"])),W)}}]);
//# sourceMappingURL=ContactsPage.e03e7519.chunk.js.map
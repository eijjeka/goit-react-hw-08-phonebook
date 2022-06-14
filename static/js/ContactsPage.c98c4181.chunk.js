"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[518],{823:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,o,a,i,c,d,l,s,p,u,x,h,b,g,f,m,Z,j=r(168),v=r(5048),y=r(4654),P=r(954),w=P.ZP.div(t||(t=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 80px;\n"]))),k=r(885),C=r(2791),z=r(9782),L=r(2450),_=P.ZP.h2(o||(o=(0,j.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  margin-bottom: 10px;\n"]))),A=P.ZP.input(a||(a=(0,j.Z)(["\n  padding: 5px;\n  min-width: 280px;\n  background-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.2);\n  border: none;\n  border-radius: 5px;\n"]))),N=P.ZP.div(i||(i=(0,j.Z)(["\n  margin-bottom: 20px;\n"]))),S=r(3329),F=function(n){var e=n.title,r=n.type,t=n.name,o=n.value,a=n.placeholder,i=n.pattern,c=n.onChange;return(0,S.jsxs)(N,{children:[(0,S.jsx)(_,{children:e}),(0,S.jsx)(A,{type:r,name:t,value:o,onChange:c,pattern:i,placeholder:a,autoComplete:"off",required:!0},t)]})},I=r(6373),Y=(r(4719),P.ZP.form(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 0;\n  width: 400px;\n  border-radius: 10px;\n  color: #000;\n  background-color: rgba(244, 244, 246, 0.4);\n  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.39);\n"])))),B=P.ZP.button.attrs((function(){return{type:"submit"}}))(d||(d=(0,j.Z)(["\n  position: relative;\n  margin-top: 20px;\n  padding: 5px 10px;\n  display: inline-flex;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #212529;\n    color: #fff;\n  }\n"]))),E=function(){var n=(0,z.Lr)(),e=(0,k.Z)(n,2),r=e[0],t=e[1].isLoading,o=(0,z.wY)().data,a=(0,C.useState)(""),i=(0,k.Z)(a,2),c=i[0],d=i[1],l=(0,C.useState)(""),s=(0,k.Z)(l,2),p=s[0],u=s[1],x=function(n){if(p.length>13)return alert("Please enter correct phone number");void 0===o.find((function(n){return n.name===c}))?r({name:c,number:p}):alert("".concat(c," is already in contacts.")),n.preventDefault(),h()},h=function(){d(""),u("")};return(0,S.jsxs)(Y,{onSubmit:x,children:[(0,S.jsx)(F,{onChange:function(n){d(n.currentTarget.value)},title:"Create contact tab",type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Jordan Walke"}),(0,S.jsx)(L.ZP,{defaultCountry:"UA",onChange:function(n){u(n)},region:"Europe",title:"Number",type:"tel",name:"number",value:p,placeholder:"Enter phone number",autoComplete:"off",international:!0,className:"inputPhone",maxLength:"16"}),(0,S.jsxs)(B,{disabled:t,onSubmit:x,children:[t&&(0,S.jsx)(I.gy,{color:"#fff",width:"16",height:"16"}),"Add contact"]})]})},K=r(1538),T=P.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10px;\n"]))),q=P.ZP.h2(s||(s=(0,j.Z)(["\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n"]))),D=(P.ZP.ul(p||(p=(0,j.Z)(["\n  margin-top: 10px;\n  list-style: none;\n"]))),P.ZP.li(u||(u=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 10px;\n  padding: 10px;\n  font-weight: bold;\n  width: 300px;\n  border-radius: 5px;\n  color: #fff;\n  background-color: ",";\n"])),(function(n){return n.index%2!==0?"#0AB3CF":"#1B59CA"})),P.ZP.button.attrs((function(){return{type:"button"}}))(x||(x=(0,j.Z)(["\n  padding: 5px 7px;\n  border-radius: 50%;\n  border: none;\n  margin-left: 20px;\n  cursor: pointer;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.1);\n  }\n"])))),J=(P.ZP.span(h||(h=(0,j.Z)(["\n  color: #fff;\n  display: inline-block;\n  margin-top: 10px;\n"]))),r(2591)),R=function(){var n=(0,z.wY)(),e=n.data,r=n.isFetching,t=(0,z.Nt)(),o=(0,k.Z)(t,1)[0],a=(0,v.v9)(K.zK),i=""===a?e:e.filter((function(n){return n.name.toLowerCase().includes(a)}));return(0,S.jsxs)(T,{children:[(0,S.jsx)(q,{children:"Contacts"}),r&&(0,S.jsx)(I.gy,{color:"#427ae4",ariaLabel:"loading-indicator"}),e&&(0,S.jsxs)(J.Z,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[(0,S.jsx)("thead",{children:(0,S.jsxs)("tr",{children:[(0,S.jsx)("th",{children:"Contact Name"}),(0,S.jsx)("th",{children:"Phone Number"}),(0,S.jsx)("th",{children:"Remove"})]})}),(0,S.jsx)("tbody",{children:i.map((function(n,e){var r=n.id,t=n.name,a=n.number;return(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{children:t}),(0,S.jsx)("td",{children:a}),(0,S.jsx)("td",{children:(0,S.jsx)(D,{onClick:function(){return o(r)},children:"\u2717"})})]},r)}))})]})]})},U=(0,P.ZP)(w)(b||(b=(0,j.Z)(["\n  width: 400px;\n  margin: 20px 0;\n  padding: 10px 0;\n  border-radius: 10px;\n  color: #000;\n  background-color: rgba(244, 244, 246, 0.4);\n  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.39);\n"]))),W=P.ZP.h2(g||(g=(0,j.Z)(["\n  font-size: 16px;\n  text-transform: uppercase;\n"]))),X=P.ZP.input(f||(f=(0,j.Z)(["\n  text-align: center;\n  margin-top: 10px;\n  padding: 5px;\n  border: none;\n  border-radius: 5px;\n  opacity: 0.5;\n"]))),$=function(){var n=(0,v.I0)(),e=(0,v.v9)(K.zK);return(0,S.jsxs)(U,{children:[(0,S.jsx)(W,{children:"Find contacts by name"}),(0,S.jsx)(X,{type:"text",value:e,onChange:function(e){n((0,K.hX)(e.currentTarget.value.toLocaleLowerCase().trim()))},placeholder:"Search name"})]})},G=r.p+"static/media/phone2.a6d87b9b5c7e2cc2b31f.jpg",H=function(){var n=(0,z.wY)(),e=n.data,r=(n.isFetching,(0,v.v9)(y.Z.getIsLoggedIn));return(0,S.jsx)(M,{children:(0,S.jsxs)(w,{children:[(0,S.jsx)(E,{}),r&&e&&(e.length>1?(0,S.jsx)($,{}):""),(0,S.jsx)(R,{})]})})},M=(P.ZP.h1(m||(m=(0,j.Z)([""]))),P.ZP.div(Z||(Z=(0,j.Z)(["\n  background: linear-gradient(\n      335deg,\n      rgba(9, 5, 47, 0.4) 0%,\n      rgba(49, 29, 94, 0.4) 100%\n    ),\n    url(",");\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n"])),G))}}]);
//# sourceMappingURL=ContactsPage.c98c4181.chunk.js.map
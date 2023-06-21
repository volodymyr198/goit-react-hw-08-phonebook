"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[421],{8421:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var a=t(5048),r=t(9439),o=t(2791),s=t(5705),c=t(2797),i=t(8174),l=(t(5462),t(4691)),u=t(3661),m=t(7445),d="FormPhonebook_form__yE3-g",h="FormPhonebook_label__actQR",_="FormPhonebook_input__iqqEB",f="FormPhonebook_btn__5b-dH",p="FormPhonebook_error__7SaV1",x=t(3329),b=function(){var e=(0,u.Tn)(),n=(0,r.Z)(e,2),t=n[0],a=n[1],b=a.isLoading,j=a.isSuccess,g=a.isError,N=(0,u.Jx)().data;(0,o.useEffect)((function(){j&&(0,m.fI)()}),[j]),(0,o.useEffect)((function(){g&&(0,m.I3)()}),[g]);var v=c.Ry().shape({name:c.Z_().min(2,"Too Short!").max(20,"Too Long!").required("Name is required field"),phone:c.Rx().typeError("That does not look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").required("A phone number is required")});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.Ix,{autoClose:1e3,position:"top-center"}),(0,x.jsx)(s.J9,{initialValues:{name:"",phone:""},validationSchema:v,onSubmit:function(e,n){var a=n.resetForm,r=e.name,o=e.phone;N.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?(0,m.jz)(e.name):t({name:r,number:o})&&a()},children:(0,x.jsxs)(s.l0,{className:d,children:[(0,x.jsxs)("label",{className:h,children:["Name",(0,x.jsx)(s.gN,{className:_,type:"text",name:"name",placeholder:"Name"}),(0,x.jsx)(s.Bc,{className:p,name:"name",component:"div"})]}),(0,x.jsxs)("label",{className:h,children:["Number",(0,x.jsx)(s.gN,{className:_,type:"tel",name:"phone",placeholder:"phone 066 111 11 11"}),(0,x.jsx)(s.Bc,{className:p,name:"phone",component:"div"})]}),(0,x.jsxs)("button",{className:f,disabled:b,type:"submit",children:[b&&(0,x.jsx)(l.s5,{height:"20",width:"20"}),"Add contact"]})]})})]})},j=t(3628),g=t(6895),N=t(6351),v="Filter_label__vEd1E",C="Filter_input__N7T3z",w=function(){var e=(0,a.I0)(),n=(0,a.v9)(N.zK);return(0,x.jsxs)("label",{className:v,children:["Find contacts by name",(0,x.jsx)(j.DebounceInput,{minLength:1,debounceTimeout:300,className:C,type:"text",value:n,placeholder:"Search",onChange:function(n){var t;t=n.target.value,e((0,g.T)(t))}})]})},y="ContactList_contactList__UFVCg",k="ContactList_default__obqAl",F="ContactItem_contactItem__aUSMv",A="ContactItem_btn__4QYtA",S=function(e){var n=e.id,t=e.name,a=e.number,s=(0,u.Nt)(),c=(0,r.Z)(s,2),i=c[0],d=c[1],h=d.isLoading,_=d.isSuccess;return(0,o.useEffect)((function(){_&&(0,m.WC)()}),[_]),(0,x.jsxs)("li",{className:F,children:[t,": ",(0,x.jsx)("span",{children:a}),(0,x.jsxs)("button",{onClick:function(){return i(n)},disabled:h,className:A,children:[h&&(0,x.jsx)(l.s5,{height:"20",width:"20"}),"Delete"]})]})},L=function(){var e=(0,a.v9)(N.zK),n=(0,u.Jx)(),t=n.data,r=n.isLoading,o=n.error;return(0,x.jsxs)(x.Fragment,{children:[r&&(0,x.jsx)("p",{className:k,children:"...loading"}),o&&(0,x.jsx)("p",{className:k,children:"Sorry, something went wrong, please try again later!"}),t&&0===t.length&&(0,x.jsx)("p",{children:"There is no contact!"}),(0,x.jsx)("ul",{className:y,children:t&&(0,N.F4)(t,e).map((function(e){var n=e.id,t=e.name,a=e.number;return(0,x.jsx)(S,{name:t,number:a,id:n},n)}))})]})},E="ContactsPage_wrapper__HYOyv",I="ContactsPage_titlePhone__ODE41",P="ContactsPage_titleCont__JLcCo",T=function(){return(0,a.v9)(N.M7)&&(0,x.jsxs)("div",{className:E,children:[(0,x.jsx)("h1",{className:I,children:"Phonebook"}),(0,x.jsx)(b,{}),(0,x.jsx)("h2",{className:P,children:"Contacts"}),(0,x.jsx)(w,{}),(0,x.jsx)(L,{})]})}},7445:function(e,n,t){t.d(n,{G$:function(){return o},I3:function(){return s},WC:function(){return i},fI:function(){return c},jz:function(){return l},oo:function(){return r}});var a=t(8174),r=function(){return a.Am.error("Sorry, wrong email or password!")},o=function(){return a.Am.error("Sorry, incorrect data entered! The password must contain at least 7 characters! The mail name must be at least 7 characters long and contain letters!")},s=function(){return a.Am.error("Sorry, something went wrong, please try again later!")},c=function(){return a.Am.success("Contact added!")},i=function(){return a.Am.info("Contact deleted!")},l=function(e){return a.Am.error("".concat(e," is already in contacts!"))}}}]);
//# sourceMappingURL=421.37530ace.chunk.js.map
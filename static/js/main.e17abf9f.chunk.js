(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__19jWm",input:"Filter_input__2CEsa"}},28:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),s=n(3),i=(n(28),n(4)),u=n.n(i),b=n(5),l=n(32),j=Object(b.a)("contacts/AddContacts",(function(t,e){return{payload:{id:Object(l.a)(),name:t,number:e}}})),m=Object(b.a)("contacts/DeleteContacts"),d=Object(b.a)("filter/UpdateFilter"),O=function(t){return t.contacts.items},f=function(t){return t.contacts.filter},p=function(t){var e=O(t),n=f(t);return function(t){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(e)},h=n(7),x=n.n(h),_=n(1),v=function(){var t=Object(s.b)(),e=Object(s.c)(p);return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("ul",{className:x.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(_.jsxs)("li",{className:x.a.item,children:[Object(_.jsxs)("p",{className:x.a.contact,children:[c," : ",a]}),Object(_.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return t(m(n))},children:"X"})]},n)}))})})},C=n(10),N=n.n(C),y=function(){var t=Object(s.b)(),e=Object(s.c)(f);return Object(_.jsx)("label",{className:N.a.label,children:Object(_.jsxs)("p",{className:N.a.contacts,children:["Find contacts by name",Object(_.jsx)("input",{className:N.a.input,type:"text",onChange:function(e){return t(d(e.target.value))},value:e})]})})},F=n(14);var g=function(){var t=Object(s.b)(),e=Object(s.c)(O),n=Object(c.useState)(""),a=Object(F.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),b=Object(F.a)(i,2),l=b[0],m=b[1],d=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":m(c);break;default:return}};return Object(_.jsxs)("form",{className:u.a.form,onSubmit:function(n){n.preventDefault(),!function(t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(r)?!function(t){return e.find((function(e){return e.number===t}))}(l)?t(j(r,l)):alert("".concat(l," is alredy in your phonebook")):alert("".concat(r," is alredy in your phonebook")),o(""),m("")},children:[Object(_.jsxs)("label",{classNam:u.a.label,children:["Name",Object(_.jsx)("input",{className:u.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:r,onChange:d,required:!0})]}),Object(_.jsxs)("label",{classNam:u.a.label,children:["Number",Object(_.jsx)("input",{className:u.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:l,onChange:d,required:!0})]}),Object(_.jsx)("button",{className:u.a.button,type:"submit",children:"Add contact"})]})};var k=function(t){var e=t.title,n=t.children;return Object(_.jsxs)(_.Fragment,{children:[e&&Object(_.jsx)("h1",{children:e}),n]})};function w(){return Object(_.jsxs)("div",{className:u.a.container,children:[Object(_.jsx)(k,{title:"Phonebook",children:Object(_.jsx)(g,{})}),Object(_.jsxs)(k,{title:"Contacts",children:[Object(_.jsx)(y,{}),Object(_.jsx)(v,{})]})]})}var L,S=n(2),A=n(16),z=n(11),D=n(17),E=Object(b.b)([],(L={},Object(z.a)(L,j,(function(t,e){return[e.payload].concat(Object(D.a)(t))})),Object(z.a)(L,m,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),L)),R=Object(b.b)("",Object(z.a)({},d,(function(t,e){return e.payload}))),Z=Object(S.combineReducers)({items:E,filter:R}),q=Object(S.combineReducers)({contacts:Z}),B=Object(S.createStore)(q,Object(A.composeWithDevTools)());o.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(s.a,{store:B,children:Object(_.jsx)(w,{})})}),document.getElementById("root"))},4:function(t,e,n){t.exports={container:"ContactForm_container__jcN59",form:"ContactForm_form__2IF4m",label:"ContactForm_label__2mfXY",input:"ContactForm_input__3dHde",button:"ContactForm_button__3oBpw"}},7:function(t,e,n){t.exports={list:"ContactList_list__2cE9S",item:"ContactList_item__MbtlS",btn:"ContactList_btn__2-jnR"}}},[[30,1,2]]]);
//# sourceMappingURL=main.e17abf9f.chunk.js.map
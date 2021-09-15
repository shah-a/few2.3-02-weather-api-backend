(this["webpackJsonp2.3-02-weather-api"]=this["webpackJsonp2.3-02-weather-api"]||[]).push([[0],{11:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(5),r=s.n(c),i=(s(11),s(2)),l=s(0),o=function(e){var t=e.code,s=e.data;return s?Object(l.jsxs)("div",{className:"DataDisplay mb-3",children:[Object(l.jsx)("h1",{className:"text-5xl mb-3 text-gradient-reverse font-bold",children:t.toUpperCase()||"Enter code:"}),Object(l.jsxs)("p",{children:["Temp: ",Object(l.jsx)("strong",{children:s.temp})]}),Object(l.jsxs)("p",{children:["Feels like: ",Object(l.jsx)("strong",{children:s.feelsLike})]}),Object(l.jsxs)("p",{children:["Description: ",Object(l.jsx)("strong",{children:s.description})]})]}):Object(l.jsxs)("div",{className:"DataDisplay mb-3",children:[Object(l.jsx)("h1",{className:"text-5xl mb-3 text-gradient-reverse font-bold",children:t.toUpperCase()||"Enter code:"}),Object(l.jsxs)("p",{children:["Temp: ",Object(l.jsx)("strong",{children:"N/A"})]}),Object(l.jsxs)("p",{children:["Feels like: ",Object(l.jsx)("strong",{children:"N/A"})]}),Object(l.jsxs)("p",{children:["Description: ",Object(l.jsx)("strong",{children:"N/A"})]})]})},d=function(e){var t=e.code,s=e.setCode;return Object(l.jsxs)("div",{className:"CodeInput mb-3",children:[Object(l.jsx)("small",{className:"block mb-2",children:"(For Canadian postal codes, first 3 characters only)"}),Object(l.jsx)("input",{type:"text",placeholder:"ZIP/Postal Code",pattern:"^([A-Za-z]\\d[A-Za-z])|(\\d{5})$",maxLength:"5",className:"p-2 border rounded-l-lg",value:t,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("button",{type:"submit",className:"p-2 text-white bg-teal-500 hover:bg-teal-600 border rounded-r-lg",children:"Submit"})]})},j=function(e){var t=e.units,s=e.setUnits;return Object(l.jsxs)("select",{value:t,className:"mb-3 p-2 border rounded-lg mr-auto",onChange:function(e){return s(e.target.value)},children:[Object(l.jsx)("option",{value:"metric",children:"Celsius"}),Object(l.jsx)("option",{value:"imperial",children:"Fahrenheit"}),Object(l.jsx)("option",{value:"standard",children:"Kelvin"})]})},b=function(e){var t=e.label,s=e.name,n=e.checked,a=e.onChange;return Object(l.jsxs)("label",{className:"block mb-1",children:[Object(l.jsx)("input",{type:"radio",className:"mr-1",name:s,checked:n,onChange:a}),t]})},h=s(4),m=s.n(h),u=s(6),x=function(){var e=Object(u.a)(m.a.mark((function e(t,s,n){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new RegExp(/([a-z]\d[a-z])/i).test(t)?"".concat(t,",ca"):t,"https://few-weather.herokuapp.com/weather",a="?code=".concat(t,"&units=").concat(s),e.next=5,fetch("https://few-weather.herokuapp.com/weather"+a);case 5:return c=e.sent,e.next=8,c.json();case 8:"2"!==(c=e.sent).cod.toString()[0]?n(null):n({temp:c.main.temp,feelsLike:c.main.feels_like,description:c.weather[0].description});case 10:case"end":return e.stop()}}),e)})));return function(t,s,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)("metric"),r=Object(i.a)(c,2),h=r[0],m=r[1],u=Object(n.useState)(null),p=Object(i.a)(u,2),O=p[0],f=p[1];return Object(l.jsx)("div",{className:"Weather text-gray-700 sm:text-lg max-w-md mx-auto",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(s,h,f)},children:[Object(l.jsx)(o,{code:s,units:h,data:O}),Object(l.jsx)(d,{code:s,setCode:a}),Object(l.jsx)(j,{units:h,setUnits:m}),["metric","imperial","standard"].map((function(e){return Object(l.jsx)(b,{name:"units",checked:h===e,onChange:function(){return m(e)},label:"".concat(e[0].toUpperCase()).concat(e.slice(1))},"key-".concat(e))}))]})})},O=function(){return Object(l.jsx)("footer",{className:"Footer mt-auto bg-gradient-reverse",children:Object(l.jsx)("a",{href:"https://github.com/shah-a/few2.3-02-weather-api",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fab fa-github-alt fa-3x p-10 text-teal-900 hover:text-teal-700"})})})},f=function(){return Object(l.jsxs)("div",{className:"App min-h-screen flex flex-col bg-gray-100",children:[Object(l.jsx)("div",{className:"my-auto sm:mx-auto",children:Object(l.jsxs)("div",{className:"relative py-3 sm:max-w-xl sm:mx-auto",children:[Object(l.jsx)("div",{className:"absolute inset-x-0 inset-y-10 sm:inset-10 bg-gradient shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}),Object(l.jsx)("div",{className:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 my-10 sm:m-10",children:Object(l.jsx)(p,{})})]})}),Object(l.jsx)(O,{})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9d561d5c.chunk.js.map
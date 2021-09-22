(this["webpackJsonp2.3-02-weather-api-frontend"]=this["webpackJsonp2.3-02-weather-api-frontend"]||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(5),c=a.n(r),i=(a(11),a(2)),o=a(0),l=function(e){var t=e.code,a=e.data;return a?Object(o.jsxs)("div",{className:"DataDisplay mb-3",children:[Object(o.jsx)("h1",{className:"text-5xl mb-3 text-gradient-reverse font-bold",children:t.toUpperCase()||"Enter code:"}),Object(o.jsxs)("p",{children:["Temp: ",Object(o.jsx)("strong",{children:a.temp})]}),Object(o.jsxs)("p",{children:["Feels like: ",Object(o.jsx)("strong",{children:a.feelsLike})]}),Object(o.jsxs)("p",{children:["Description: ",Object(o.jsx)("strong",{children:a.description})]})]}):Object(o.jsxs)("div",{className:"DataDisplay mb-3",children:[Object(o.jsx)("h1",{className:"text-5xl mb-3 text-gradient-reverse font-bold",children:t.toUpperCase()||"Enter code:"}),Object(o.jsxs)("p",{children:["Temp: ",Object(o.jsx)("strong",{children:"N/A"})]}),Object(o.jsxs)("p",{children:["Feels like: ",Object(o.jsx)("strong",{children:"N/A"})]}),Object(o.jsxs)("p",{children:["Description: ",Object(o.jsx)("strong",{children:"N/A"})]})]})},d=function(e){var t=e.code,a=e.setCode;return Object(o.jsxs)("div",{className:"CodeInput mb-3",children:[Object(o.jsx)("small",{className:"block mb-2",children:"(For Canadian postal codes, first 3 characters only)"}),Object(o.jsx)("input",{type:"text",placeholder:"ZIP/Postal Code",pattern:"^([A-Za-z]\\d[A-Za-z])|(\\d{5})$",maxLength:"5",className:"p-2 border rounded-l-lg",value:t,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"p-2 text-white bg-teal-500 hover:bg-teal-600 border rounded-r-lg",children:"Submit"})]})},j=function(e){var t=e.units,a=e.setUnits;return Object(o.jsxs)("select",{value:t,className:"mb-3 p-2 border rounded-lg mr-auto",onChange:function(e){return a(e.target.value)},children:[Object(o.jsx)("option",{value:"metric",children:"Celsius"}),Object(o.jsx)("option",{value:"imperial",children:"Fahrenheit"}),Object(o.jsx)("option",{value:"standard",children:"Kelvin"})]})},b=function(e){var t=e.label,a=e.name,s=e.checked,n=e.onChange;return Object(o.jsxs)("label",{className:"block mb-1",children:[Object(o.jsx)("input",{type:"radio",className:"mr-1",name:a,checked:s,onChange:n}),t]})},h=a(4),m=a.n(h),u=a(6),p=function(){var e=Object(u.a)(m.a.mark((function e(t,a,s){var n,r,c,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new RegExp(/([a-z]\d[a-z])/i).test(t)?"".concat(t,",ca"):t,"https://api.openweathermap.org/data/2.5/weather",n="?zip=".concat(t,"&units=").concat(a),r="".concat("https://few-weather.herokuapp.com","/weather"),"POST",c={"Content-Type":"application/json"},i=JSON.stringify({urlBase:"https://api.openweathermap.org/data/2.5/weather",urlQuery:n}),e.next=9,fetch(r,{method:"POST",headers:c,body:i});case 9:return o=e.sent,e.next=12,o.json();case 12:"2"!==(o=e.sent).cod.toString()[0]?s(null):s({temp:o.main.temp,feelsLike:o.main.feels_like,description:o.weather[0].description});case 14:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)("metric"),c=Object(i.a)(r,2),h=c[0],m=c[1],u=Object(s.useState)(null),x=Object(i.a)(u,2),O=x[0],f=x[1];return Object(o.jsx)("div",{className:"Weather text-gray-700 sm:text-lg max-w-md mx-auto",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(a,h,f)},children:[Object(o.jsx)(l,{code:a,units:h,data:O}),Object(o.jsx)(d,{code:a,setCode:n}),Object(o.jsx)(j,{units:h,setUnits:m}),["metric","imperial","standard"].map((function(e){return Object(o.jsx)(b,{name:"units",checked:h===e,onChange:function(){return m(e)},label:"".concat(e[0].toUpperCase()).concat(e.slice(1))},"key-".concat(e))}))]})})},O=function(){return Object(o.jsx)("footer",{className:"Footer mt-auto bg-gradient-reverse",children:Object(o.jsx)("a",{href:"https://github.com/shah-a/few2.3-02-weather-api",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fab fa-github-alt fa-3x p-10 text-teal-900 hover:text-teal-700"})})})},f=function(){return Object(o.jsxs)("div",{className:"App min-h-screen flex flex-col bg-gray-100",children:[Object(o.jsx)("div",{className:"my-auto sm:mx-auto",children:Object(o.jsxs)("div",{className:"relative py-3 sm:max-w-xl sm:mx-auto",children:[Object(o.jsx)("div",{className:"absolute inset-x-0 inset-y-10 sm:inset-10 bg-gradient shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}),Object(o.jsx)("div",{className:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 my-10 sm:m-10",children:Object(o.jsx)(x,{})})]})}),Object(o.jsx)(O,{})]})};c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.967193a6.chunk.js.map
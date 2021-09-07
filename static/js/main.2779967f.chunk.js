(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{379:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(36),s=a.n(r),i=a(11),o=a(139),l=a(393),d=(a(144),a(61)),j=a.n(d),h="690a99e3fce9056aa266481b4f8e7946",u=a(390),b=a(382),m=a(184),x=a(1);function f(e){var t,a=e.handleSearchOnClick,n=e.handleCityChange,r=e.handleCountryChange,s=e.handleUnitOnChange,o=e.openWeather,l=e.showAlert,d=e.unit,j=e.show,h=Object(c.useState)(""),f=Object(i.a)(h,2),O=f[0],p=f[1],y=Object(c.useState)(""),g=Object(i.a)(y,2),w=g[0],v=g[1];return t=o||l?"Hide":"Show me the weather",Object(c.useEffect)((function(){var e=setTimeout((function(){n(O),r(w)}),850);return function(){clearTimeout(e)}}),[O,w,n,r]),Object(x.jsxs)(u.a,{className:"container align-items-center \r justify-content-center p-2 col-xs-12 col-md-7 col-lg-5",onSubmit:function(e){e.preventDefault()},children:[Object(x.jsxs)("div",{className:j?"":"d-none",children:[Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(b.a,{"aria-expanded":"false","aria-controls":"weather alert",children:"Use my current location"})}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)("span",{className:"lead",children:"-----------OR-----------"})}),Object(x.jsxs)(u.a.Group,{className:"",children:[Object(x.jsx)(m.a,{controlId:"cityName",label:"City name:",className:"mb-3",children:Object(x.jsx)(u.a.Control,{type:"text",placeholder:"City...",onChange:function(e){return p(e.target.value)},autoFocus:!0,required:!0})}),Object(x.jsx)(m.a,{controlId:"countryCode",label:"Country code (optional):",children:Object(x.jsx)(u.a.Control,{type:"text",placeholder:"Country code...",onChange:function(e){return v(e.target.value)}})})]}),Object(x.jsx)(u.a.Group,{children:Object(x.jsxs)("small",{className:"form-text text-muted",children:["Use country code for a more precise result. Refer to this"," ",Object(x.jsx)("a",{href:"https://www.iso.org/obp/ui/#home",target:"_blank",rel:"noreferrer",children:"link"}),"\xa0for the country codes."]})}),Object(x.jsx)("div",{className:"mt-2",children:Object(x.jsxs)(u.a.Group,{className:"d-flex justify-content-center",children:[Object(x.jsx)(u.a.Check,{name:"unitRadio",inline:!0,label:"Metric",type:"radio",onChange:s,value:"metric",checked:"metric"===d}),Object(x.jsx)(u.a.Check,{inline:!0,label:"Imperial",name:"unitRadio",onChange:s,type:"radio",value:"imperial",checked:"imperial"===d})]})})]}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(b.a,{className:"mt-1",onClick:a,"aria-expanded":"false","aria-controls":"weather alert",type:"submit",children:t})})]})}var O=a(388),p=a(391),y=(a(117),a(74)),g=a(22),w=a(62),v=a.n(w);function N(e){var t=e.data,a=e.unit;if(t&&0===Object.keys(t).length&&t.constructor===Object)return null;var c=t.weather[0],n=t.main,r=t.sys,s=t.name,i=t.wind,o=t.timezone,l=t.sys.sunrise+o,d=t.sys.sunset+o,j="http://openweathermap.org/img/wn/".concat(c.icon,".png"),h="metric"===a?"C":"F",u="metric"===a?"m/s (meter/sec)":"mph (miles per hour)",b=((new Date).getTime()+1e3*o)/1e3,m=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{className:"lead mb-0 text-center",style:{fontSize:"2vh"},children:["This is the current weather of ",s,", ",r.country," as of\xa0",Object(x.jsx)(v.a,{unix:!0,format:"LLL",tz:"UTC",children:b})," ","(local time):"]}),Object(x.jsxs)("div",{className:"d-flex flex-row align-items-center \r justify-content-center",children:[Object(x.jsx)("img",{src:j,alt:"weather condition"}),Object(x.jsxs)("p",{className:"h2 mb-0",children:[Math.round(n.temp),"\xb0",h," -"," ",m(c.description)]})]}),Object(x.jsxs)("p",{className:"text-center fs-6",children:[m(c.description)," condition is forecasted for now."]}),Object(x.jsxs)("div",{className:"card d-flex justify-content-center",children:[Object(x.jsx)("div",{className:"card-header",children:Object(x.jsx)("span",{className:"lead",children:"Detailed weather report:"})}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsxs)("div",{id:"weatherInfo",children:[Object(x.jsx)("span",{className:"text-muted",children:"High: "}),Object(x.jsxs)("span",{children:[Math.round(n.temp_max),"\xb0",h,"."]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"text-muted",children:"Low: "}),Object(x.jsxs)("span",{children:[Math.round(n.temp_min),"\xb0",h,"."]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"text-muted",children:"Feels like: "}),Object(x.jsxs)("span",{children:[Math.round(n.feels_like),"\xb0",h,"."]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"text-muted",children:"Humidity: "}),Object(x.jsxs)("span",{children:[Math.round(n.humidity),"%."]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"text-muted",children:"Atmospheric pressure: "}),Object(x.jsxs)("span",{children:[Math.round(n.pressure)," hPa."]}),Object(x.jsx)("hr",{}),Object(x.jsx)("span",{className:"text-muted",children:"Wind speed: "}),Object(x.jsxs)("span",{children:[i.speed," ",u,"."]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"text-muted",children:"Wind gust: "}),Object(x.jsxs)("span",{children:[i.gust," ",u,"."]}),Object(x.jsx)("hr",{}),Object(x.jsx)("span",{className:"text-muted",children:"Cloudiness: "}),Object(x.jsxs)("span",{children:[t.clouds.all,"%."]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"text-muted",children:"Visibility: "}),Object(x.jsxs)("span",{children:[t.visibility/1e3," km."]}),Object(x.jsx)("hr",{}),Object(x.jsx)("span",{className:"text-muted",children:"Sunrise: "}),Object(x.jsxs)("span",{children:[Object(x.jsx)(v.a,{unix:!0,format:"LT",tz:"UTC",children:l}),"."]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"text-muted",children:"Sunset: "}),Object(x.jsxs)("span",{children:[Object(x.jsx)(v.a,{unix:!0,format:"LT",tz:"UTC",children:d}),"."]})]})})]})]})}var C=a(42),S=a.n(C),k=a(383),M=a(384),T=a(208),q=a(200),P=a(201),Y=a(59),E=a(88),D=a(185),R=a.n(D);function A(e){var t=e.data,a=e.unit;if(t&&0===Object.keys(t).length&&t.constructor===Object)return null;for(var c=t.list,n=t.city.name,r=t.city.country,s=t.city.timezone,i=((new Date).getTime()+1e3*s)/1e3,o="metric"===a?"C":"F",l=[],d=0;d<8;d++){var j=c[d],h=j.dt;S.a.unix(h+s).utc().format("YYYY-MM-DD")!==S.a.unix(i).utc().format("YYYY-MM-DD")&&S.a.unix(h+s).utc().format("YYYY-MM-DD")!==S.a.unix(i+86400).utc().format("YYYY-MM-DD")||l.push(j)}for(var u=[],b=0,m=l;b<m.length;b++){var f=m[b],O={temp:f.main.temp,feels_like:f.main.feels_like,time:S.a.unix(f.dt+s).utc().format("HH:mm")};u.push(O)}var p=R.a.groupBy(c,(function(e){return S.a.unix(e.dt+s).utc().format("ddd")})),y=Object.keys(p);y.shift();var g=[];return y.forEach((function(e,t){var a=Number.MIN_VALUE,c=Number.MAX_VALUE;p[e].forEach((function(e,t){a=Math.max(e.main.temp_max,a),c=Math.min(e.main.temp_min,c)})),a=Math.round(a),c=Math.round(c);var n={date:e,high:a,low:c};g.push(n)})),Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{className:"lead mb-0 text-center mb-3",style:{fontSize:"2vh"},children:["This is the forecast of ",n,", ",r," as of\xa0",Object(x.jsx)(v.a,{unix:!0,format:"LLL",tz:"UTC",children:i})," ","(local time):"]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"card-header lead",children:"3-hour forecast:"}),Object(x.jsxs)("div",{className:"card-body d-flex flex-column overflow-auto ",children:[Object(x.jsx)(k.a,{width:"98%",height:300,children:Object(x.jsxs)(M.a,{data:u,children:[Object(x.jsx)(T.a,{type:"monotone",dataKey:"temp",stroke:"#8884d8",name:"Temperature",des:!0}),Object(x.jsx)(q.a,{dataKey:"time"}),Object(x.jsx)(P.a,{width:40,label:function(){return Object(x.jsx)(Y.a,{x:-35,y:30,dx:50,dy:150,offset:0,angle:-90,children:"Temperature"})}}),Object(x.jsx)(E.a,{})]})}),l.map((function(e){return Object(x.jsxs)("div",{className:"d-flex flex-row\r align-items-center",children:[Object(x.jsxs)("p",{className:"h5 mb-0",children:[Object(x.jsx)(v.a,{unix:!0,format:"HH:mm",tz:"UTC",children:e.dt+s}),":"]}),Object(x.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"weather condition"}),Object(x.jsxs)("p",{className:"fw-light fs-5 mb-0",children:[Math.round(e.main.temp),"\xb0",o," -"," ",(t=e.weather[0].description,t.charAt(0).toUpperCase()+t.slice(1)),". Feels like: ",Math.round(e.main.feels_like),"\xb0",o,"."]})]},e.dt_txt);var t}))]})]}),Object(x.jsxs)("div",{className:"card mt-3",children:[Object(x.jsx)("div",{className:"card-header lead",children:"Next 5 days forecast:"}),Object(x.jsx)("div",{className:"card-body d-flex flex-column overflow-auto ",children:Object(x.jsx)(k.a,{width:"98%",height:300,children:Object(x.jsxs)(M.a,{data:g,children:[Object(x.jsx)(T.a,{type:"monotone",dataKey:"high",stroke:"#8884d8",name:"Expected high temperature",des:!0}),Object(x.jsx)(q.a,{dataKey:"date"}),Object(x.jsx)(P.a,{width:40,label:function(){return Object(x.jsx)(Y.a,{x:-35,y:30,dx:50,dy:150,offset:0,angle:-90,children:"Temperature"})}}),Object(x.jsx)(E.a,{})]})})}),g.map((function(e){return Object(x.jsxs)("div",{className:"d-flex flex-row\r align-items-center justify-content-center mx-2",children:[Object(x.jsxs)("p",{className:"h5 mb-0",children:[e.date,":\xa0"]}),Object(x.jsxs)("span",{className:"fw-light mb-0 fs-5",children:["High:\xa0",Math.round(e.high),"\xb0",o," - Low:\xa0",Math.round(e.low),"\xb0",o,"."]})]},e.date)}))]})]})}function U(e){var t=e.weather,a=e.unit,n=e.handleRefresh,r=e.handleChangeReport,s=e.forecast,o=Object(c.useState)(0),l=Object(i.a)(o,2),d=l[0],j=l[1],h=Object(c.useState)(),u=Object(i.a)(h,2),m=u[0],f=u[1],w=Object(c.useState)(),v=Object(i.a)(w,2),C=v[0],S=v[1];return Object(c.useEffect)((function(){0===d?(f("text-light text-center col"),S("text-dark text-center col")):(f("text-dark text-center col"),S("text-light text-center col"))}),[d]),t&&0===Object.keys(t).length&&t.constructor===Object?null:Object(x.jsxs)(O.a,{fluid:!0,className:"justify-content-center border bg-light",children:[Object(x.jsxs)(y.a,{children:[Object(x.jsxs)("ul",{className:"row p-0",children:[Object(x.jsx)(p.a.Item,{as:y.b,className:m,to:"/currentweather",active:0===d,onClick:function(e){j(0),r("current")},children:"Current weather"}),Object(x.jsx)(p.a.Item,{as:y.b,className:C,to:"/fivedaysweather",active:0!==d,onClick:function(){j(1),r("five days")},children:"3-hour/5-day Forecast"})]}),Object(x.jsxs)(g.d,{children:[Object(x.jsx)(g.b,{path:"/currentweather",children:Object(x.jsx)(N,{data:t,unit:a,handleRefresh:n})}),Object(x.jsx)(g.b,{path:"/fivedaysweather",children:Object(x.jsx)(A,{data:s,unit:a,handleRefresh:n})})]}),Object(x.jsx)(g.a,{exact:!0,from:"/",to:"/currentweather"})]}),Object(x.jsx)("div",{className:"d-flex flex-row align-items-center \r justify-content-center",children:Object(x.jsx)(b.a,{style:{marginTop:10},className:"mb-2",onClick:n,children:"Refresh"})})]})}var L=a(389);function _(e){var t=e.showAlert,a=e.handleClose,c=e.error;return t?Object(x.jsxs)(L.a,{variant:"danger",children:[Object(x.jsx)(L.a.Heading,{children:"Error!"}),Object(x.jsx)("p",{children:c}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{className:"d-flex justify-content-end",children:Object(x.jsx)(b.a,{onClick:a,variant:"outline-success",children:"Close"})})]}):null}var H=a.p+"static/media/background-img.c5d3ef9c.jpg";var z=function(){var e,t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),d=Object(i.a)(s,2),u=d[0],b=d[1],m=Object(c.useState)({}),O=Object(i.a)(m,2),p=O[0],g=O[1],w=Object(c.useState)({}),v=Object(i.a)(w,2),N=v[0],C=v[1],S=Object(c.useState)((new Date).getHours()),k=Object(i.a)(S,2),M=k[0],T=k[1],q=Object(c.useState)(!1),P=Object(i.a)(q,2),Y=P[0],E=P[1],D=Object(c.useState)(!1),R=Object(i.a)(D,2),A=R[0],L=R[1],z=Object(c.useState)(""),I=Object(i.a)(z,2),W=I[0],F=I[1],G=Object(c.useState)("metric"),K=Object(i.a)(G,2),V=K[0],B=K[1],J=Object(c.useState)(!1),X=Object(i.a)(J,2),Q=X[0],Z=X[1],$=Object(c.useState)("current"),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],ce=Object(c.useState)(!0),ne=Object(i.a)(ce,2),re=ne[0],se=ne[1];return Object(c.useEffect)((function(){T((new Date).getHours())}),[M]),Object(c.useEffect)((function(){return(""!==n||Q)&&("current"===te?""===u?function(e,t){return j.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=").concat(t,"&appid=").concat(h))}(n,V).then((function(e){console.log("calling the current weather api with only city"),g(e.data),F("")})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")})):function(e,t,a){return j.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,",").concat(t,"&units=").concat(a,"&appid=").concat(h))}(n,u,V).then((function(e){console.log("calling the current weather api with city and country"),g(e.data),F("")})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request?console.log(e.request):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")})):"five days"===te&&(""===u?function(e,t){return j.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&units=").concat(t,"&appid=").concat(h))}(n,V).then((function(e){console.log("calling the FORECAST api with only city"),C(e.data),F("")})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")})):function(e,t,a){return j.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,",").concat(t,"&units=").concat(a,"&appid=").concat(h))}(n,u,V).then((function(e){console.log("calling the FORECAST weather api with city and country"),C(e.data),F("")})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request?console.log(e.request):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")})))),function(){return Z(!1)}}),[n,u,V,Q,te]),Object(c.useEffect)((function(){""!==W?(L(!0),E(!1)):(L(!1),""!==n&&E(!0))}),[W,n]),Object(c.useEffect)((function(){se(!Y)}),[Y]),j.a.interceptors.response.use((function(e){return e}),(function(e){if("401"!==e.response.status)return Promise.reject(e);F("Sorry! API key error. Please try again later.")})),e=M<12&&M>4?"morning":M<18&&M>12?"afternoon":"evening",Object(x.jsx)(y.a,{basename:"/",children:Object(x.jsxs)("div",{className:"d-flex justify-content-center align-items-center\r flex-column h-100 overflow-hidden",style:{backgroundImage:"url(".concat(H,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},children:[Object(x.jsxs)("p",{className:re?"display-6 text-center w-100":"d-none",children:["Good ",e,"! Welcome to my weather app."]}),Object(x.jsx)(f,{handleSearchOnClick:function(){""===W&&""!==n?(L(!1),E(!Y)):(""===n&&F("You must enter a city first!"),L(!A))},handleCityChange:function(e){r(e)},handleCountryChange:function(e){b(e)},handleUnitOnChange:function(e){B(e.target.value)},openWeather:Y,showAlert:A,unit:V,show:re}),Object(x.jsx)(o.a,{in:A,children:Object(x.jsx)("div",{id:"alert",children:Object(x.jsx)(_,{showAlert:A,handleClose:function(){L(!A)},error:W})})}),Object(x.jsx)(l.a,{in:Y,children:Object(x.jsx)("div",{id:"weather",className:"overflow-auto",children:Object(x.jsx)(U,{weather:p,unit:V,forecast:N,handleRefresh:function(){Z(!0)},handleChangeReport:function(e){ae(e)}})})})]})})};s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root"))}},[[379,1,2]]]);
//# sourceMappingURL=main.2779967f.chunk.js.map
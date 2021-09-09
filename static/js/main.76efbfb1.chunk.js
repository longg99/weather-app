(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{374:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(36),s=a.n(r),i=a(10),o=a(139),l=a(394),d=(a(144),a(49)),u=a.n(d),j="690a99e3fce9056aa266481b4f8e7946",h=a(391),b=a(383),m=a(184),f=a(1);function x(e){var t,a=e.handleSearchOnClick,c=e.handleCityChange,r=e.handleCountryChange,s=e.handleUnitOnChange,o=e.handleGetLocation,d=e.openWeather,u=e.showAlert,j=e.unit,x=e.useCity,O=Object(n.useState)(""),p=Object(i.a)(O,2),y=p[0],g=p[1],w=Object(n.useState)(""),v=Object(i.a)(w,2),N=v[0],C=v[1];return t=d||u?"Hide":"Show me the weather",Object(n.useEffect)((function(){var e=setTimeout((function(){c(y),r(N)}),850);return function(){clearTimeout(e)}}),[y,N,c,r]),Object(n.useEffect)((function(){x||g("")}),[x]),Object(f.jsxs)(h.a,{className:"container align-items-center \r justify-content-center p-2 col-xs-12 col-md-7 col-lg-5",onSubmit:function(e){e.preventDefault()},children:[Object(f.jsx)(l.a,{in:!d,children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"d-flex justify-content-center mb-3",children:Object(f.jsx)(b.a,{"aria-expanded":"false","aria-controls":"weather alert",onClick:o,children:"Use my current location"})}),Object(f.jsx)("hr",{}),Object(f.jsxs)(h.a.Group,{className:"",children:[Object(f.jsx)("p",{className:"lead",children:"Search by City:"}),Object(f.jsx)(m.a,{controlId:"cityName",label:"City name:",className:"mb-3",children:Object(f.jsx)(h.a.Control,{type:"text",placeholder:"City...",value:y,onChange:function(e){return g(e.target.value)},autoFocus:!0})}),Object(f.jsx)(m.a,{controlId:"countryCode",label:"Country code (optional):",children:Object(f.jsx)(h.a.Control,{type:"text",placeholder:"Country code...",onChange:function(e){return C(e.target.value)}})})]}),Object(f.jsx)(h.a.Group,{children:Object(f.jsxs)("small",{className:"form-text text-muted",children:["Use country code for a more precise result. Refer to this"," ",Object(f.jsx)("a",{href:"https://www.iso.org/obp/ui/#home",target:"_blank",rel:"noreferrer",children:"link"}),"\xa0for the country codes."]})}),Object(f.jsx)("div",{className:"mt-2",children:Object(f.jsxs)(h.a.Group,{className:"d-flex justify-content-center",children:[Object(f.jsx)(h.a.Check,{name:"unitRadio",inline:!0,label:"Metric",type:"radio",onChange:s,value:"metric",checked:"metric"===j}),Object(f.jsx)(h.a.Check,{inline:!0,label:"Imperial",name:"unitRadio",onChange:s,type:"radio",value:"imperial",checked:"imperial"===j})]})})]})}),Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(b.a,{className:"mt-1",onClick:a,"aria-expanded":"false","aria-controls":"weather alert",type:"submit",children:t})})]})}var O=a(389),p=a(392),y=(a(117),a(74)),g=a(22),w=a(62),v=a.n(w);function N(e){var t=e.data,a=e.unit;if(t&&0===Object.keys(t).length&&t.constructor===Object)return null;var n=t.weather[0],c=t.main,r=t.sys,s=t.name,i=t.wind,o=t.timezone,l=t.sys.sunrise+o,d=t.sys.sunset+o,u="https://openweathermap.org/img/wn/".concat(n.icon,".png"),j="metric"===a?"C":"F",h="metric"===a?"m/s (meter/sec)":"mph (miles per hour)",b=((new Date).getTime()+1e3*o)/1e3,m=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{className:"lead mb-0 text-center",style:{fontSize:"2vh"},children:["This is the current weather of ",s,", ",r.country," as of\xa0",Object(f.jsx)(v.a,{unix:!0,format:"LLL",tz:"UTC",children:b})," ","(local time):"]}),Object(f.jsxs)("div",{className:"d-flex flex-row align-items-center \r justify-content-center",children:[Object(f.jsx)("img",{src:u,alt:"weather condition"}),Object(f.jsxs)("p",{className:"h2 mb-0",children:[Math.round(c.temp),"\xb0",j," -"," ",m(n.description)]})]}),Object(f.jsxs)("p",{className:"text-center fs-6",children:[m(n.description)," condition is forecasted for now."]}),Object(f.jsxs)("div",{className:"card d-flex justify-content-center",children:[Object(f.jsx)("div",{className:"card-header",children:Object(f.jsx)("span",{className:"lead",children:"Detailed weather report:"})}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("div",{id:"weatherInfo",children:[Object(f.jsx)("span",{className:"text-muted",children:"High: "}),Object(f.jsxs)("span",{children:[Math.round(c.temp_max),"\xb0",j,"."]}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"text-muted",children:"Low: "}),Object(f.jsxs)("span",{children:[Math.round(c.temp_min),"\xb0",j,"."]}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"text-muted",children:"Feels like: "}),Object(f.jsxs)("span",{children:[Math.round(c.feels_like),"\xb0",j,"."]}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"text-muted",children:"Humidity: "}),Object(f.jsxs)("span",{children:[Math.round(c.humidity),"%."]}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"text-muted",children:"Atmospheric pressure: "}),Object(f.jsxs)("span",{children:[Math.round(c.pressure)," hPa."]}),Object(f.jsx)("hr",{}),Object(f.jsx)("span",{className:"text-muted",children:"Wind speed: "}),Object(f.jsxs)("span",{children:[i.speed," ",h,"."]}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"text-muted",children:"Wind gust: "}),Object(f.jsxs)("span",{children:[i.gust," ",h,"."]}),Object(f.jsx)("hr",{}),Object(f.jsx)("span",{className:"text-muted",children:"Cloudiness: "}),Object(f.jsxs)("span",{children:[t.clouds.all,"%."]}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"text-muted",children:"Visibility: "}),Object(f.jsxs)("span",{children:[t.visibility/1e3," km."]}),Object(f.jsx)("hr",{}),Object(f.jsx)("span",{className:"text-muted",children:"Sunrise: "}),Object(f.jsxs)("span",{children:[Object(f.jsx)(v.a,{unix:!0,format:"LT",tz:"UTC",children:l}),"."]}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"text-muted",children:"Sunset: "}),Object(f.jsxs)("span",{children:[Object(f.jsx)(v.a,{unix:!0,format:"LT",tz:"UTC",children:d}),"."]})]})})]})]})}var C=a(42),S=a.n(C),k=a(384),M=a(385),P=a(208),T=a(202),E=a(203),q=a(60),Y=a(88),A=a(187),D=a.n(A);function L(e){var t=e.data,a=e.unit;if(t&&0===Object.keys(t).length&&t.constructor===Object)return null;for(var n=t.list,c=t.city.name,r=t.city.country,s=t.city.timezone,i=((new Date).getTime()+1e3*s)/1e3,o="metric"===a?"C":"F",l=[],d=0;d<8;d++){var u=n[d],j=u.dt;S.a.unix(j+s).utc().format("YYYY-MM-DD")!==S.a.unix(i).utc().format("YYYY-MM-DD")&&S.a.unix(j+s).utc().format("YYYY-MM-DD")!==S.a.unix(i+86400).utc().format("YYYY-MM-DD")||l.push(u)}for(var h=[],b=0,m=l;b<m.length;b++){var x=m[b],O={temp:x.main.temp,feels_like:x.main.feels_like,time:S.a.unix(x.dt+s).utc().format("HH:mm")};h.push(O)}var p=D.a.groupBy(n,(function(e){return S.a.unix(e.dt+s).utc().format("ddd")})),y=Object.keys(p);y.shift();var g=[];return y.forEach((function(e,t){var a=Number.MIN_VALUE,n=Number.MAX_VALUE;p[e].forEach((function(e,t){a=Math.max(e.main.temp_max,a),n=Math.min(e.main.temp_min,n)})),a=Math.round(a),n=Math.round(n);var c={date:e,high:a,low:n};g.push(c)})),Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{className:"lead mb-0 text-center mb-3",style:{fontSize:"2vh"},children:["This is the forecast of ",c,", ",r," as of\xa0",Object(f.jsx)(v.a,{unix:!0,format:"LLL",tz:"UTC",children:i})," ","(local time):"]}),Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"card-header lead",children:"3-hour forecast:"}),Object(f.jsxs)("div",{className:"card-body d-flex flex-column overflow-auto ",children:[Object(f.jsx)(k.a,{width:"98%",height:300,children:Object(f.jsxs)(M.a,{data:h,children:[Object(f.jsx)(P.a,{type:"monotone",dataKey:"temp",stroke:"#8884d8",name:"Temperature",des:!0}),Object(f.jsx)(T.a,{dataKey:"time"}),Object(f.jsx)(E.a,{width:40,label:function(){return Object(f.jsx)(q.a,{x:-35,y:30,dx:50,dy:150,offset:0,angle:-90,children:"Temperature"})}}),Object(f.jsx)(Y.a,{})]})}),l.map((function(e){return Object(f.jsxs)("div",{className:"d-flex flex-row\r align-items-center",children:[Object(f.jsxs)("p",{className:"h5 mb-0",children:[Object(f.jsx)(v.a,{unix:!0,format:"HH:mm",tz:"UTC",children:e.dt+s}),":"]}),Object(f.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"weather condition"}),Object(f.jsxs)("p",{className:"fw-light fs-5 mb-0",children:[Math.round(e.main.temp),"\xb0",o," -"," ",(t=e.weather[0].description,t.charAt(0).toUpperCase()+t.slice(1)),". Feels like: ",Math.round(e.main.feels_like),"\xb0",o,"."]})]},e.dt_txt);var t}))]})]}),Object(f.jsxs)("div",{className:"card mt-3",children:[Object(f.jsx)("div",{className:"card-header lead",children:"Next 5 days forecast:"}),Object(f.jsx)("div",{className:"card-body d-flex flex-column overflow-auto ",children:Object(f.jsx)(k.a,{width:"98%",height:300,children:Object(f.jsxs)(M.a,{data:g,children:[Object(f.jsx)(P.a,{type:"monotone",dataKey:"high",stroke:"#8884d8",name:"Expected high temperature",des:!0}),Object(f.jsx)(T.a,{dataKey:"date"}),Object(f.jsx)(E.a,{width:40,label:function(){return Object(f.jsx)(q.a,{x:-35,y:30,dx:50,dy:150,offset:0,angle:-90,children:"Temperature"})}}),Object(f.jsx)(Y.a,{})]})})}),g.map((function(e){return Object(f.jsxs)("div",{className:"d-flex flex-row\r align-items-center justify-content-center mx-2",children:[Object(f.jsxs)("p",{className:"h5 mb-0",children:[e.date,":\xa0"]}),Object(f.jsxs)("span",{className:"fw-light mb-0 fs-5",children:["High:\xa0",Math.round(e.high),"\xb0",o," - Low:\xa0",Math.round(e.low),"\xb0",o,"."]})]},e.date)}))]})]})}a(374);function R(e){var t=e.weather,a=e.unit,c=e.handleRefresh,r=e.handleChangeReport,s=e.forecast,o=Object(n.useState)(0),l=Object(i.a)(o,2),d=l[0],u=l[1],j=Object(n.useState)(),h=Object(i.a)(j,2),m=h[0],x=h[1],w=Object(n.useState)(),v=Object(i.a)(w,2),C=v[0],S=v[1];return Object(n.useEffect)((function(){0===d?(x("text-light text-center col"),S("text-dark text-center col")):(x("text-dark text-center col"),S("text-light text-center col"))}),[d]),t&&0===Object.keys(t).length&&t.constructor===Object?null:Object(f.jsxs)(O.a,{fluid:!0,className:"justify-content-center border bg-light",id:"weatherSection",children:[Object(f.jsxs)(y.a,{children:[Object(f.jsxs)("ul",{className:"row p-0",children:[Object(f.jsx)(p.a.Item,{as:y.b,className:m,to:"/currentweather",active:0===d,onClick:function(e){u(0),r("current")},children:"Current weather"}),Object(f.jsx)(p.a.Item,{as:y.b,className:C,to:"/fivedaysweather",active:0!==d,onClick:function(){u(1),r("five days")},children:"3-hour/5-day Forecast"})]}),Object(f.jsxs)(g.d,{children:[Object(f.jsx)(g.b,{path:"/currentweather",children:Object(f.jsx)(N,{data:t,unit:a,handleRefresh:c})}),Object(f.jsx)(g.b,{path:"/fivedaysweather",children:Object(f.jsx)(L,{data:s,unit:a,handleRefresh:c})})]}),Object(f.jsx)(g.a,{exact:!0,from:"/",to:"/currentweather"})]}),Object(f.jsx)("div",{className:"d-flex flex-row align-items-center \r justify-content-center",children:Object(f.jsx)(b.a,{style:{marginTop:10},className:"mb-2",onClick:c,children:"Refresh"})})]})}var U=a(390);function W(e){var t=e.showAlert,a=e.handleClose,n=e.error;return t?Object(f.jsxs)(U.a,{variant:"danger",children:[Object(f.jsx)(U.a.Heading,{children:"Error!"}),Object(f.jsx)("p",{children:n}),Object(f.jsx)("hr",{}),Object(f.jsx)("div",{className:"d-flex justify-content-end",children:Object(f.jsx)(b.a,{onClick:a,variant:"outline-success",children:"Close"})})]}):null}var _=a.p+"static/media/background-img.c5d3ef9c.jpg";var H=function(){var e,t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),h=d[0],b=d[1],m=Object(n.useState)({}),O=Object(i.a)(m,2),p=O[0],g=O[1],w=Object(n.useState)({}),v=Object(i.a)(w,2),N=v[0],C=v[1],S=Object(n.useState)((new Date).getHours()),k=Object(i.a)(S,2),M=k[0],P=k[1],T=Object(n.useState)(!1),E=Object(i.a)(T,2),q=E[0],Y=E[1],A=Object(n.useState)(!1),D=Object(i.a)(A,2),L=D[0],U=D[1],H=Object(n.useState)(""),I=Object(i.a)(H,2),z=I[0],F=I[1],G=Object(n.useState)("metric"),K=Object(i.a)(G,2),V=K[0],B=K[1],J=Object(n.useState)(!1),X=Object(i.a)(J,2),Q=X[0],Z=X[1],$=Object(n.useState)("current"),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(!0),ce=Object(i.a)(ne,2),re=ce[0],se=ce[1],ie=Object(n.useState)([0,0]),oe=Object(i.a)(ie,2),le=oe[0],de=oe[1],ue=Object(n.useState)(!1),je=Object(i.a)(ue,2),he=je[0],be=je[1],me=Object(n.useState)(!0),fe=Object(i.a)(me,2),xe=fe[0],Oe=fe[1];Object(n.useEffect)((function(){P((new Date).getHours())}),[M]),Object(n.useEffect)((function(){return xe&&(be(!1),(""!==c||Q)&&("current"===te?""===h?function(e,t){return u.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=").concat(t,"&appid=").concat(j))}(c,V).then((function(e){console.log("calling the current weather api with only city"),g(e.data),F("")})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")})):function(e,t,a){return u.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,",").concat(t,"&units=").concat(a,"&appid=").concat(j))}(c,h,V).then((function(e){console.log("calling the current weather api with city and country"),g(e.data),F("")})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request?console.log(e.request):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")})):"five days"===te&&(""===h?function(e,t){return u.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&units=").concat(t,"&appid=").concat(j))}(c,V).then((function(e){console.log("calling the FORECAST api with only city"),C(e.data),F("")})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")})):function(e,t,a){return u.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,",").concat(t,"&units=").concat(a,"&appid=").concat(j))}(c,h,V).then((function(e){console.log("calling the FORECAST weather api with city and country"),C(e.data),F("")})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request?console.log(e.request):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")}))))),function(){return Z(!1)}}),[c,xe,h,V,Q,te]),Object(n.useEffect)((function(){return he&&(Oe(!1),r(""),(0!==le[0]&&0!==le[1]||Q)&&("current"===te?function(e,t,a){return u.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&units=").concat(a,"&appid=").concat(j))}(le[0],le[1],V).then((function(e){console.log("calling the current weather api with current location (lat:"+le[0],",long:"+le[1]),g(e.data),F(""),Y(!0),U(!1)})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")})):"five days"===te&&function(e,t,a){return u.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e,"&lon=").concat(t,"&units=").concat(a,"&appid=").concat(j))}(le[0],le[1],V).then((function(e){console.log("calling the current FORECAST api with current location (lat:"+le[0],",long:"+le[1]),C(e.data),F(""),Y(!0),U(!1)})).catch((function(e){e.response?"404"===e.response.data.cod?F("Please enter a valid city/country!"):"429"===e.response.data.cod&&F("Sorry! The number of calls exceeded the server's allowance. Please try again in a few minutes..."):e.request&&F("Sorry! We are not receiving any request from the server. Please try again in a few minutes...")})))),function(){Z(!1)}}),[he,le,Q,te,V]),Object(n.useEffect)((function(){""!==z?(U(!0),Y(!1)):(U(!1),""!==c&&Y(!0))}),[z,c]),Object(n.useEffect)((function(){se(!q)}),[q]),u.a.interceptors.response.use((function(e){return e}),(function(e){if("401"!==e.response.status)return Promise.reject(e);F("Sorry! API key error. Please try again with another API key.")})),e=M<12&&M>4?"morning":M<18&&M>12?"afternoon":"evening";var pe=function(e){de([e.coords.latitude,e.coords.longitude])};return Object(f.jsx)(y.a,{basename:"/",children:Object(f.jsxs)("div",{className:"d-flex justify-content-center align-items-center\r flex-column h-100",style:{backgroundImage:"url(".concat(_,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},children:[Object(f.jsxs)("p",{className:re?"display-6 text-center w-100":"d-none",children:["Good ",e,"! Welcome to my weather app."]}),Object(f.jsx)(x,{handleSearchOnClick:function(){""===z&&""!==c||he?(U(!1),Y(!q)):(he||""!==c||F("You must enter a city first!"),U(!L))},handleCityChange:function(e){r(e),""!==c&&Oe(!0)},handleCountryChange:function(e){b(e)},handleUnitOnChange:function(e){B(e.target.value)},handleGetLocation:function(){navigator.geolocation?(navigator.geolocation.getCurrentPosition(pe),be(!0)):(F("Sorry! We couldn't get your geolocation. Either your browser does not support it or you did not give the permission. Please try again."),U(!0))},openWeather:q,showAlert:L,unit:V,useCity:xe}),Object(f.jsx)(o.a,{in:L,unmountOnExit:!0,children:Object(f.jsx)("div",{id:"alert",children:Object(f.jsx)(W,{showAlert:L,handleClose:function(){U(!L)},error:z})})}),Object(f.jsx)(l.a,{in:q,unmountOnExit:!0,children:Object(f.jsx)("div",{id:"weather",className:"overflow-auto m-0 p-0",children:Object(f.jsx)(R,{weather:p,unit:V,forecast:N,handleRefresh:function(){Z(!0)},handleChangeReport:function(e){ae(e)}})})})]})})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root"))}},[[380,1,2]]]);
//# sourceMappingURL=main.76efbfb1.chunk.js.map
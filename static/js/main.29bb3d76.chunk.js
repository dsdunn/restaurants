(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{64:function(e,t,a){e.exports=a(74)},69:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(69),a(27)),s=a.n(l),o=a(37),u=a(13),m=a(120),f=a(117),p=a(118),d=a(10),h=a(44),v=a(103),E=a(105),g=a(122),b=a(109),O=a(124),y=a(119),N=a(125),j=a(110),w=[["Alabama","AL"],["Alaska","AK"],["Arizona","AZ"],["Arkansas","AR"],["California","CA"],["Colorado","CO"],["Connecticut","CT"],["Delaware","DE"],["Florida","FL"],["Georgia","GA"],["Hawaii","HI"],["Idaho","ID"],["Illinois","IL"],["Indiana","IN"],["Iowa","IA"],["Kansas","KS"],["Kentucky","KY"],["Louisiana","LA"],["Maine","ME"],["Maryland","MD"],["Massachusetts","MA"],["Michigan","MI"],["Minnesota","MN"],["Mississippi","MS"],["Missouri","MO"],["Montana","MT"],["Nebraska","NE"],["Nevada","NV"],["New Hampshire","NH"],["New Jersey","NJ"],["New Mexico","NM"],["New York","NY"],["North Carolina","NC"],["North Dakota","ND"],["Ohio","OH"],["Oklahoma","OK"],["Oregon","OR"],["Pennsylvania","PA"],["Rhode Island","RI"],["South Carolina","SC"],["South Dakota","SD"],["Tennessee","TN"],["Texas","TX"],["Utah","UT"],["Vermont","VT"],["Virginia","VA"],["Washington","WA"],["West Virginia","WV"],["Wisconsin","WI"],["Wyoming","WY"]],k=Object(v.a)({form:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",padding:"1em",margin:"2em auto"},select:{minWidth:120,margin:"1em 2em"},input:{margin:"0.5em 2em"}}),A=function(e){var t=e.criteria,a=e.setCriteria,c=e.genres,i=k(),l=Object(n.useState)(""),s=Object(u.a)(l,2),o=s[0],m=s[1],f=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;if("terms"===a)return m(n),void(n||p({name:"terms",value:n}));p({name:a,value:n})},p=function(e){var n=e.name,r=e.value;a(Object(h.a)(Object(h.a)({},t),{},Object(d.a)({},n,r)))};return r.a.createElement(E.a,null,r.a.createElement("form",{"data-testid":"filter-form",className:i.form,onSubmit:function(e){e.preventDefault(),p({name:"terms",value:o})}},r.a.createElement(g.a,{id:"terms-input",inputProps:{"data-testid":"terms-input"},variant:"outlined",label:"search",name:"terms",placeholder:"name/city/genre",className:i.input,onChange:f}),r.a.createElement("div",null,r.a.createElement(b.a,{className:i.select},r.a.createElement(O.a,{shrink:!0,id:"state-input-label"},"State"),r.a.createElement(y.a,{id:"state-input",inputProps:{"data-testid":"state-input"},name:"state",value:t.state||"",labelId:"state-input-label",displayEmpty:!0,onChange:f},r.a.createElement(N.a,{key:"all",value:""},"All"),w.map((function(e){return r.a.createElement(N.a,{value:e[1],key:"state-select-".concat(e[0])},e[0])})))),r.a.createElement(b.a,{className:i.select},r.a.createElement(O.a,{shrink:!0,id:"genre-input-label"},"Genre"),r.a.createElement(y.a,{id:"genre-input",inputProps:{"data-testid":"genre-input"},name:"genre",value:t.genre||"",labelId:"genre-input-label",displayEmpty:!0,onChange:f},r.a.createElement(N.a,{key:"all",value:""},"All"),c.map((function(e){return r.a.createElement(N.a,{value:e,key:"genre-select-".concat(e)},e)}))))),r.a.createElement(j.a,{"data-testid":"filter-form-submit-button",variant:"contained",type:"submit",className:i.input},"Search")))},C=a(111),M=a(112),I=a(113),S=a(114),x=a(115),W=a(116),D=a(121),L=function(e){var t=e.filteredRestaurants,a=void 0===t?[]:t,c=Object(n.useState)(1),i=Object(u.a)(c,2),l=i[0],s=i[1];Object(n.useEffect)((function(){s(1)}),[a]);var o=a.length,m=o%10!==0,f=Math.floor(o/10);f=m?f+1:f;var p=a.map((function(e,t){return r.a.createElement(C.a,{key:t},r.a.createElement(M.a,null,e.name),r.a.createElement(M.a,null,"".concat(e.city,", ").concat(e.state)),r.a.createElement(M.a,null,e.telephone),r.a.createElement(M.a,null,e.genre))}));return r.a.createElement("div",{"data-testid":"restaurants-table"},r.a.createElement("div",{className:"pagination"},f>1&&r.a.createElement(D.a,{"data-testid":"pagination",count:f,page:l,onChange:function(e,t){s(t)}})),r.a.createElement(I.a,{component:E.a},r.a.createElement(S.a,null,r.a.createElement(x.a,null,r.a.createElement(C.a,null,r.a.createElement(M.a,null,"Name"),r.a.createElement(M.a,null,"Location"),r.a.createElement(M.a,null,"Phone"),r.a.createElement(M.a,null,"Genres"))),r.a.createElement(W.a,null,p.length?p.slice(10*(l-1),10*l):r.a.createElement(C.a,null,r.a.createElement(M.a,{colSpan:"4"},"Sorry, no restaurants match your search criteria"))))))},R="q3MNxtfep8Gt",T=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>1&&void 0!==n[1]?n[1]:"GET",e.next=3,fetch("https://code-challenge.spectrumtoolbox.com/api/".concat(t),{headers:{Authorization:"Api-Key ".concat(R)}});case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],a=function(e){e.forEach((function(e){t.includes(e)||t.push(e)}))};return e.forEach((function(e){var t=e.genre;if(t){var n=t.split(",");a(n),e.genre=n.sort().join(", ")}})),e.sort((function(e,t){return e.name>t.name?1:-1})),{formattedRestaurants:e,genres:t.sort()}},V=function(e,t){for(var a=!0,n=Object.keys(t),r=0;r<n.length;r++){var c=n[r],i=t[c];t[c]&&("terms"===c&&G(e,t[c])||"terms"!==c&&e[c].includes(i)||(a=!1))}return a},G=function(e,t){return t=t.toLowerCase(),e.name.toLowerCase().includes(t)||e.city.toLowerCase().includes(t)||e.genre.includes(t)};var P=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),l=Object(u.a)(i,2),d=l[0],h=l[1],v=Object(n.useState)([]),E=Object(u.a)(v,2),g=E[0],b=E[1],O=Object(n.useState)({terms:"",state:"",genre:""}),y=Object(u.a)(O,2),N=y[0],j=y[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("restaurants");case 2:t=e.sent,a=K(t),n=a.formattedRestaurants,r=a.genres,c(n),h(n),b(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.values(t).find((function(e){return e}))&&(e=e.filter((function(e){return V(e,t)}))),e}(a,N);h(e)}),[N,a]),r.a.createElement(m.a,null,r.a.createElement(f.a,{className:"App"},r.a.createElement(p.a,{variant:"h1",align:"center",gutterBottom:!0},"Restaurants"),r.a.createElement(A,{criteria:N,setCriteria:j,genres:g}),r.a.createElement(L,{filteredRestaurants:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.29bb3d76.chunk.js.map
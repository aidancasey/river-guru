(function(e){function t(t){for(var s,i,o=t[0],l=t[1],c=t[2],u=0,h=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"29f5":function(e,t,a){"use strict";a("c14f")},"2c35":function(e,t,a){"use strict";a("8707")},"374c":function(e,t,a){},"3ec9":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=a("7496"),n=a("a75b"),i=function(){var e=this,t=e._self._c;return t("div",[[t(r["a"],{attrs:{id:"inspire"}},[t("div",{staticClass:"app-container"},[t("toolbar",{on:{toggleNavigationBar:function(t){e.drawer=!e.drawer}}}),t("navigation",{attrs:{toggle:e.drawer}}),t(n["a"],[t("router-view")],1)],1)])]],2)},o=[],l={name:"App",data(){return{drawer:!0}}},c=l,d=(a("99a9"),a("2877")),u=Object(d["a"])(c,i,o,!1,null,null,null),h=u.exports,p=a("f309");s["a"].use(p["a"]);var f=new p["a"]({}),v=a("8c4f"),b=a("62ad"),g=a("a523"),m=a("0fd9"),y=function(){var e=this,t=e._self._c;return t("div",[t(g["a"],{attrs:{fluid:"","fill-height":""}},[t(m["a"],[t(b["a"],[t("flow-rate-chart")],1)],1),t(m["a"],[t(b["a"],[t("river-level",{attrs:{river:"lee",location:"waterworks",displayHeading:"Waterworks Weir"}})],1),t(b["a"],[t("river-level",{attrs:{river:"lee",location:"ovens",displayHeading:"River Bride at Ovens Bridge"}})],1)],1),t(m["a"],[t(b["a"],[t("sun-moon",{attrs:{river:"lee",location:"anglers-rest",displayLocation:"The Angler's Rest"}})],1),t(b["a"],[t("tide-times",{attrs:{location:"cork",displayLocation:"Cork Harbour"}})],1)],1),t(m["a"],[t(b["a"],[t("weather",{attrs:{river:"lee",location:"anglers-rest",displayHeading:"The Anglers Rest"}})],1)],1)],1)],1)},j=[],w=a("b0af"),_=a("99d9"),x=a("ce7e"),S=a("5d23"),T=function(){var e=this,t=e._self._c;return t(w["a"],{staticClass:"card",attrs:{height:"100%",width:"100%"}},[t(_["c"],{staticClass:"pa-2"},[t(_["b"],{staticClass:"title text-center"},[e._v("Flow Inniscarra Dam")]),t("p",{staticClass:"text-center display-1 text--primary"},[e._v(" "+e._s(e.currentFlow)+" ㎥/sec ")]),t("area-chart",{attrs:{data:e.chartData,colors:["cornflowerblue"]}})],1),t(x["a"]),t(S["b"],{staticClass:"ma-3 caption",attrs:{align:"center"}},[t("p",[e._v(" current flow rate intrepreted from ESB data feed ")])])],1)},k=[],C=a("bc3a"),D=a.n(C),L=D.a.create({headers:{"Content-type":"application/json"}});class R{getAll(){return L.get("/api/flowReadings/latest")}getLatestTideTimes(e){return L.get("/api/tides/"+e+"/latest")}getLatestLevels(e,t){return L.get("/api/levels/"+e+"/"+t+"/latest")}getLatestWeather(e,t){return L.get("/api/weather-forecast/"+e+"/"+t)}getSunTimes(e,t){return L.get("/api/sun-times/"+e+"/"+t)}}var O=new R,H=a("1315"),z={data(){return{chartData:[],currentFlow:0}},methods:{retrieveFlowReadings(){O.getAll().then(e=>{var t=e.data.map(this.getDisplayFlowReading);t.reverse(),this.chartData=t,this.currentFlow=t[t.length-1][1][0]}).catch(e=>{console.log(e)})},refreshList(){this.retrieveFlowReadings()},getDisplayFlowReading(e){return[[H["DateTime"].fromISO(e.recordedAt).toFormat("T")],[e.reading]]}},mounted(){this.retrieveFlowReadings()}},F=z,$=(a("2c35"),Object(d["a"])(F,T,k,!1,null,null,null)),B=$.exports,W=a("1f4f"),I=function(){var e=this,t=e._self._c;return t(w["a"],{attrs:{height:"100%",width:"100%"}},[t(_["c"],{staticClass:"pa-3"},[t(_["b"],{staticClass:"title text-center"},[e._v(e._s(e.displayLocation)+" Tide Times")]),t(_["b"],{staticClass:"subheading text-center"},[e._v(e._s(e.today)+" ")])],1),t(W["a"],{scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v(" Tide ")]),t("th",{staticClass:"text-center"},[e._v(" Time ")]),t("th",{staticClass:"text-left"},[e._v(" Height ")])])]),t("tbody",e._l(e.tides,(function(a){return t("tr",{key:a.id},[t("td",{staticClass:"text-left"},[e._v(e._s(a.hilo))]),t("td",{staticClass:"text-center"},[e._v(e._s(e.formatDate(a.time)))]),t("td",{staticClass:"text-left"},[e._v(e._s(a.height)+" m")])])})),0)]},proxy:!0}])})],1)},A=[],P={props:{location:{type:String,required:!1},displayLocation:{type:String,required:!1},icon:{type:String,required:!1},color:{type:String,required:!1}},methods:{formatDate(e){return this.$luxon(e,"HH:mm")},getTideData(){O.getLatestTideTimes(this.$props.location).then(e=>{var t=e.data;t.reverse(),this.tides=t,this.today=this.$luxon(t[0].time,"DDDD")}).catch(e=>{console.log(e)})}},mounted(){this.getTideData()},data(){return{tides:[],today:"foo"}}},q=P,M=Object(d["a"])(q,I,A,!1,null,null,null),N=M.exports,E=a("da13"),G=function(){var e=this,t=e._self._c;return t(w["a"],{staticClass:"mx-auto",attrs:{height:"100%",width:"100%",rounded:"true"}},[t(_["c"],{staticClass:"pa-2"},[t(S["c"],{staticClass:"title text-center"},[e._v("Daylight "+e._s(e.displayLocation)+" ")])],1),t(S["a"],{staticClass:"pa-0"},[t(S["c"],{staticClass:"text-center subheading text--primary"},[e._v(" "+e._s(e.day1))]),t("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunrise-icon.svg"}}),t(E["a"],[t(S["b"],{staticClass:"title text-center pa-0"},[e._v(" dawn : "+e._s(e.dawn1)+" ")]),t(S["b"],{staticClass:"title text-center"},[e._v(" sunrise : "+e._s(e.sunrise1)+" ")])],1),t("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunset-icon.svg"}}),t(E["a"],[t(S["b"],{staticClass:"title text-center"},[e._v(" sunset : "+e._s(e.sunset1)+" ")]),t(S["b"],{staticClass:"title text-center"},[e._v(" dusk : "+e._s(e.dusk1)+" ")])],1)],1),t(S["a"],[t(S["c"],{staticClass:"text-center subheading text--primary"},[e._v(" "+e._s(e.day2))]),t("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunrise-icon.svg"}}),t(E["a"],[t(S["b"],{staticClass:"title text-center"},[e._v(" dawn : "+e._s(e.dawn2)+" ")]),t(S["b"],{staticClass:"title text-center"},[e._v(" sunrise : "+e._s(e.sunrise2)+" ")])],1),t("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunset-icon.svg"}}),t(E["a"],[t(S["b"],{staticClass:"title text-center"},[e._v(" sunset : "+e._s(e.sunset2)+" ")]),t(S["b"],{staticClass:"title text-center"},[e._v(" dusk : "+e._s(e.dusk2)+" ")])],1)],1)],1)},U=[],J={props:{river:{type:String,required:!1},location:{type:String,required:!1},displayLocation:{type:String,required:!1}},methods:{getSunTimes(){O.getSunTimes(this.$props.river,this.$props.location).then(e=>{var t=e.data;this.sunTimes=t,this.dawn1=this.$luxon(this.sunTimes.data.day1.dawn,"T"),this.dawn2=this.$luxon(this.sunTimes.data.day2.dawn,"T"),this.sunrise1=this.$luxon(this.sunTimes.data.day1.sunrise,"T"),this.sunrise2=this.$luxon(this.sunTimes.data.day2.sunrise,"T"),this.sunset1=this.$luxon(this.sunTimes.data.day1.sunset,"T"),this.sunset2=this.$luxon(this.sunTimes.data.day2.sunset,"T"),this.dusk1=this.$luxon(this.sunTimes.data.day1.dusk,"T"),this.dusk2=this.$luxon(this.sunTimes.data.day2.dusk,"T"),this.day1=this.$luxon(this.sunTimes.data.day1.dawn,"DDDD"),this.day2=this.$luxon(this.sunTimes.data.day2.dawn,"DDDD")}).catch(e=>{console.log(e)})}},mounted(){this.getSunTimes()},data(){return{sunTimes:[],dawn1:"",dawn2:"",sunrise1:"",sunrise2:"",sunset1:"",sunset2:"",dusk1:"",dusk2:"",day1:"",day2:""}}},Y=J,K=Object(d["a"])(Y,G,U,!1,null,null,null),Q=K.exports,V=a("8336"),X=a("8860"),Z=function(){var e=this,t=e._self._c;return t(w["a"],{attrs:{height:"100%"}},[t(E["a"],{attrs:{"two-line":""}},[t(S["a"],[t(S["c"],{staticClass:"title text-center"},[e._v(e._s(e.displayHeading)+" ")]),t(S["b"],{staticClass:"text-center"},[e._v("last updated at "+e._s(e.currentTime)+" ")])],1)],1),t(_["c"],[t(E["a"],{staticClass:"text-center justify-center display-1"},[t("img",{staticStyle:{width:"20%"},attrs:{src:e.currentWeatherSymbol,alt:""}}),e._v(" "+e._s(e.currentDescription)+", "+e._s(e.currentTemp)+"°C ")])],1),t(X["a"],{staticClass:"pa-0"},e._l(e.forecasts,(function(a){return t(E["a"],{key:a.from},[t(E["a"],{staticClass:"caption pa=0"},[e._v(" "+e._s(e.formatDate(a.from))+" ")]),t(E["a"],{staticClass:"caption pa=0"},[t("span",{class:e.getColour(a.temperature_celsius)},[e._v(e._s(a.temperature_celsius)+"°")])]),t(E["a"],{staticClass:"h5 pa=0"},[t("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/icons/day/"+a.weatherSymbol_number+".svg"}}),"0.0"!==a.rain_mm&&void 0!==a.rain_mm?t("div",[e._v(" rain "+e._s(a.rain_mm)+"mm ")]):e._e()]),t(E["a"],{staticClass:"h5 pa=0"},[t("img",{style:"width: 20px; height: 20px; transform: rotate("+a.windDirectionDegree_degrees+"deg);",attrs:{src:"/icons/wind/weather-wind-arrow.svg"}}),e._v(" "+e._s(a.windDirectionName)+" "+e._s(a.windSpeed_kph.toFixed(2))+" km/h ")])],1)})),1),t(_["a"],[t(V["a"],{attrs:{block:"",disabled:1==e.buttonDisabled},on:{click:function(t){return t.preventDefault(),e.loadAllForecasts.apply(null,arguments)}}},[e._v(" Load More ")])],1),t(S["b"],{staticClass:"ma-3 caption",attrs:{align:"center"}},[t("p",[e._v(" weather info provided by Met Éireann public API ")])])],1)},ee=[],te={props:{river:{type:String,required:!1},location:{type:String,required:!1},displayHeading:{type:String,required:!1}},methods:{formatDate(e){return this.$luxon(e,"ccc")+" "+this.$luxon(e,"T")},formatImageLink(e){return"/day/"+e+".svg"},getColour(e){return e>20?"red":e>14&&e<=20?"orange":e>7&&e<=14?"yellow":"blue"},getWeatherDescription(e){var t={1:"Sunny",2:"Light Cloud",3:"Partly Cloud",4:"Cloudly",5:"Light Rain Sun",6:"Light Rain Thunder Sun",7:"Sleet Sun",8:"Snow Sunny",9:"Light Rain",10:"Rain",11:"Rain Thunder",12:"Sleet",13:"Snow",14:"Snow Thunder",15:"Fog",20:"Sleet Sun Thunder",21:"Snow Sun Thunder\t",22:"Light Rain Thunder\t",23:"Sleet Thunder\t",24:"Drizzle Thunder Sun",25:"Rain Thunder Sun\t",26:"Light Sleet Thunder Sun\t",27:"Heavy Sleet Thunder Sun\t",28:"Light Snow Thunder Sun\t",29:"Heavy Snow Thunder Sun\t",30:"Drizzle Thunder\t",31:"Light Sleet Thunder\t",32:"Heavy Sleet Thunder\t",33:"Light Snow Thunder",34:"Heavy Snow Thunder",40:"Drizzle Sun",41:"Rain Sun",42:"Light Sleet Sun",43:"Heavy Sleet Sun",44:"Light Snow Sun",45:"Heavy Snow Sun",46:"Drizzle",47:"Light Sleet",48:"Heavy Sleet",49:"Light Snow",50:"Heavy Snow"},a=JSON.stringify(t[e]).toString();return a.replace(/"/g,"")},loadAllForecasts(){this.buttonDisabled=this.buttonDisabled+1,this.forecasts=this.allForecasts},getData(){O.getLatestWeather(this.$props.river,this.$props.location).then(e=>{var t=e.data.data;this.allForecasts=t,this.forecasts=t.slice(0,10),this.currentWeatherSymbol="/icons/day/"+t[0].weatherSymbol_number+".svg",this.currentTemp=t[0].temperature_celsius,this.currentTime=this.formatDate(t[0].from),this.currentWindSpeed=t[0].windSpeed_kph,this.currentDescription=this.getWeatherDescription(t[0].weatherSymbol_number)}).catch(e=>{console.log(e)})}},mounted(){this.getData()},data(){return{forecasts:[],allForecasts:[],currentWeatherSymbol:null,currentWeatherPic:null,currentTemp:null,currentTime:null,currentDescription:null,buttonDisabled:0}}},ae=te,se=(a("29f5"),Object(d["a"])(ae,Z,ee,!1,null,"d282a934",null)),re=se.exports,ne={components:{FlowRateChart:B,TideTimes:N,SunMoon:Q,Weather:re},data(){return{}}},ie=ne,oe=Object(d["a"])(ie,y,j,!1,null,null,null),le=oe.exports,ce=function(){var e=this,t=e._self._c;return t("div",[t(g["a"],{attrs:{fluid:"","fill-height":""}},[t(m["a"],[t(b["a"],[t("river-level",{attrs:{river:"blackwater",location:"fermoy",displayHeading:"Fermoy Bridge"}})],1),t(b["a"],[t("river-level",{attrs:{river:"blackwater",location:"ballyduff",displayHeading:"BallyDuff"}})],1)],1),t(m["a"],[t(b["a"],[t("sun-moon",{attrs:{river:"blackwater",location:"fermoy",displayLocation:"Fermoy Town"}})],1),t(b["a"],[t("tide-times",{attrs:{location:"youghal",displayLocation:"Youghal"}})],1)],1),t(m["a"],[t(b["a"],[t("weather",{attrs:{river:"blackwater",location:"fermoy",displayHeading:"Fermoy Town"}})],1)],1)],1)],1)},de=[],ue={components:{TideTimes:N,Weather:re,SunMoon:Q},data(){return{}}},he=ue,pe=Object(d["a"])(he,ce,de,!1,null,null,null),fe=pe.exports,ve=function(){var e=this,t=e._self._c;return t("div",[t(g["a"],{attrs:{fluid:"","fill-height":""}},[t(m["a"],[t(b["a"],[t("river-level",{attrs:{river:"bandon",location:"curranure",displayHeading:"Curranure Bridge"}})],1)],1),e._v("> "),t(m["a"],[t(b["a"],[t("river-level",{attrs:{river:"bandon",location:"bealaboy",displayHeading:"Bealaboy Bridge"}})],1)],1),t(m["a"],[t(b["a"],[t("sun-moon",{attrs:{river:"bandon",location:"bandon",displayLocation:"Bandon Town"}})],1),t(b["a"],[t("tide-times",{attrs:{location:"kinsale",displayLocation:"Kinsale"}})],1)],1),t(m["a"],[t(b["a"],[t("weather",{attrs:{river:"bandon",location:"bandon",displayHeading:"Bandon Town"}})],1)],1)],1)],1)},be=[],ge={components:{TideTimes:N,Weather:re,SunMoon:Q},data(){return{}}},me=ge,ye=Object(d["a"])(me,ve,be,!1,null,null,null),je=ye.exports,we=function(){var e=this,t=e._self._c;return t("div",[t(g["a"],{attrs:{fluid:"","fill-height":""}},[t(m["a"],[t(b["a"],[t("river-level",{attrs:{river:"owenboy",location:"ballea",displayHeading:"Ballea Bridge"}})],1)],1),t(m["a"],[t(b["a"],[t("sun-moon",{attrs:{river:"owenboy",location:"carrigaline",displayHeading:"Carrigaline Town"}})],1),t(b["a"],[t("tide-times",{attrs:{location:"cork",displayLocation:"Cork Harbour"}})],1)],1),t(m["a"],[t(b["a"],[t("weather",{attrs:{river:"owenboy",location:"carrigaline",displayHeading:"Carrigaline"}})],1)],1)],1)],1)},_e=[],xe={components:{TideTimes:N,Weather:re,SunMoon:Q},data(){return{}}},Se=xe,Te=Object(d["a"])(Se,we,_e,!1,null,null,null),ke=Te.exports,Ce=function(){var e=this,t=e._self._c;return t("div",[t(g["a"],{attrs:{fluid:"","fill-height":""}},[t(m["a"],[t(b["a"],[t("river-level",{attrs:{river:"suir",location:"new-bridge",displayHeading:"New Bridge, Golden, Tipperary"}})],1)],1),e._v("> "),t(m["a"],[t(b["a"],[t("river-level",{attrs:{river:"suir",location:"carrick-on-suir",displayHeading:"Carrick-On-Suir Tipperary"}})],1)],1),t(m["a"],[t(b["a"],[t("sun-moon",{attrs:{river:"suir",location:"cahir",displayLocation:"Cahir, Tipperary"}})],1)],1),t(m["a"],[t(b["a"],[t("weather",{attrs:{river:"suir",location:"cahir",displayHeading:"Cahir, Tipperary"}})],1)],1)],1)],1)},De=[],Le={components:{Weather:re,SunMoon:Q},data(){return{}}},Re=Le,Oe=Object(d["a"])(Re,Ce,De,!1,null,null,null),He=Oe.exports,ze=function(){var e=this,t=e._self._c;return t(g["a"],[t("h1",{staticClass:"display-2"},[e._v("The River Guru")]),t("p",{staticClass:"pt-10"},[e._v(" This website collects river and weather information from different sources and presents it in one convenient place for fishermen and anyone interested in the conditions of their local rivers around Ireland. ")]),t("h3",{staticClass:"display-1"},[e._v("Data Feeds")]),t("p",{staticClass:"pt-5 pb-5"},[e._v(" Hydrometric information is collected from the ESB - "),t("a",{attrs:{href:"http://esbhydro.ie/"}},[e._v("here")])]),t("p",{staticClass:"pt-0"},[e._v(" Weather information in is collected from Met Éireann Weather Forecast "),t("a",{attrs:{href:"https://data.gov.ie/dataset/met-eireann-weather-forecast-api"}},[e._v("API")])]),t("p",{staticClass:"pt-5 pb-5"},[e._v(" Water levels are collected from the Office of Public Works public "),t("a",{attrs:{href:"https://data.gov.ie/dataset/opw-hydrometric-network-real-time-water-level-data"}},[e._v(" API ")])]),t("h3",{staticClass:"display-1"},[e._v("Disclaimer")]),t("p",{staticClass:"pt-5"},[e._v(" This site has user generated content. No guarantee can be made for the accuracy of completeness of content. Your use of this content is AT YOUR OWN RISK. River conditions (Such as Gauge Height, Flow Rate, Precipitation, and Temperature) can change without warning, and may be incorrect. ")]),t("h3",{staticClass:"display-1"},[e._v("Want To See More Rivers Or More Data ?")]),t("p",{staticClass:"pt-5"},[e._v(" If you'd like other irish rivers listed on this site or other data please contact me "),t("a",{attrs:{href:"https://form.jotform.com/210906718558362"}},[e._v(" Contact Us")])]),t("p",{staticClass:"pt-5"},[e._v(" tight lines folks ! - Aidan ")])])},Fe=[],$e={components:{},data(){return{}}},Be=$e,We=Object(d["a"])(Be,ze,Fe,!1,null,null,null),Ie=We.exports;s["a"].use(v["a"]);var Ae=new v["a"]({mode:"history",routes:[{path:"/reading",alias:"/readings",name:"readings"},{path:"/",name:"LeeDashboard",component:le},{path:"blackwater",name:"BlackwaterDashboard",component:fe},{path:"bandon",name:"BandonDashboard",component:je},{path:"suir",name:"SuirDashboard",component:He},{path:"owenboy",name:"OwenboyDashboard",component:ke},{path:"about",name:"AboutPage",component:Ie}]}),Pe=a("40dc"),qe=a("5bc1"),Me=a("2a7f"),Ne=function(){var e=this,t=e._self._c;return t(Pe["a"],{attrs:{dark:"",app:"",color:e.$root.themeColor}},[t(Me["a"],[t(qe["a"],{on:{click:e.toggleNavigationBar}})],1)],1)},Ee=[],Ge={data(){return{}},methods:{toggleNavigationBar(){const e=this;e.$emit("toggleNavigationBar")}}},Ue=Ge,Je=(a("edb9"),Object(d["a"])(Ue,Ne,Ee,!1,null,null,null)),Ye=Je.exports,Ke=a("132d"),Qe=a("1800"),Ve=a("f774"),Xe=a("71d9"),Ze=function(){var e=this,t=e._self._c;return t(Ve["a"],{attrs:{fixed:"",app:""},model:{value:e.toggle,callback:function(t){e.toggle=t},expression:"toggle"}},[t(Xe["a"],{staticClass:"toolbar",attrs:{flat:"",dark:"",color:e.$root.themeColor}},[t("router-link",{attrs:{to:{name:"LeeDashboard"}}},[t("img",{attrs:{src:a("aaa3"),width:"36px"}})]),t("router-link",{staticClass:"text",attrs:{to:{name:"LeeDashboard"}}},[e._v(" The River Guru ")])],1),t(X["a"],[t(E["a"],{on:{click:function(t){return e.changeRoute("LeeDashboard",1)}}},[t(Qe["a"],[t(Ke["a"],[e._v("mdi-waves")])],1),t(S["c"],{class:[{active:1===e.selectedIndex},"item-title"]},[e._v("River Lee, Cork")])],1),t(E["a"],{on:{click:function(t){return e.changeRoute("BandonDashboard",2)}}},[t(Qe["a"],[t(Ke["a"],[e._v("mdi-waves")])],1),t(S["c"],{class:[{active:2===e.selectedIndex},"item-title"]},[e._v("River Bandon, Cork")])],1)],1),t(E["a"],{on:{click:function(t){return e.changeRoute("BlackwaterDashboard",3)}}},[t(Qe["a"],[t(Ke["a"],[e._v("mdi-waves")])],1),t(S["c"],{class:[{active:3===e.selectedIndex},"item-title"]},[e._v("River Blackwater, Cork")])],1),t(E["a"],{on:{click:function(t){return e.changeRoute("OwenboyDashboard",4)}}},[t(Qe["a"],[t(Ke["a"],[e._v("mdi-waves")])],1),t(S["c"],{class:[{active:4===e.selectedIndex},"item-title"]},[e._v("River Owenboy, Cork")])],1),t(E["a"],{on:{click:function(t){return e.changeRoute("SuirDashboard",5)}}},[t(Qe["a"],[t(Ke["a"],[e._v("mdi-waves")])],1),t(S["c"],{class:[{active:5===e.selectedIndex},"item-title"]},[e._v("River Suir, Tipperary")])],1),t(E["a"],{on:{click:function(t){return e.changeRoute("AboutPage",6)}}},[t(Qe["a"],[t(Ke["a"],[e._v("mdi-information-outline")])],1),t(S["c"],{class:[{active:6===e.selectedIndex},"item-title"]},[e._v("About")])],1)],1)},et=[],tt=(a("14d9"),{props:{toggle:{type:Boolean,required:!1,default:!0}},data(){return{selectedIndex:1}},methods:{changeRoute(e,t){const a=this;return a.selectedIndex=t,a.$router.push({name:e})}}}),at=tt,st=(a("b8aa"),Object(d["a"])(at,Ze,et,!1,null,null,null)),rt=st.exports,nt=function(){var e=this,t=e._self._c;return t(w["a"],{staticClass:"mx-auto",attrs:{height:"100%",width:"100%"}},[t(_["c"],{staticClass:"pa-3"},[t(_["b"],{staticClass:"title text-center"},[e._v("Water Level "+e._s(e.displayHeading))]),t("p",{staticClass:"text-center display-1 text--primary"},[e._v(e._s(e.currentLevel)+" m")]),t("area-chart",{attrs:{data:e.chartData,colors:["cornflowerblue"]}})],1),t(x["a"]),t(S["b"],{staticClass:"ma-3 caption",attrs:{align:"center"}},[t("p",[e._v(" river levels intrepreted from OPW data ")])])],1)},it=[],ot={data(){return{chartData:[],currentLevel:0}},props:{river:{type:String,required:!1},location:{type:String,required:!1},displayHeading:{type:String,required:!1}},methods:{retrieveLevelReadings(){O.getLatestLevels(this.$props.river,this.$props.location).then(e=>{var t=this.getDailyFlowReadings(e.data);t.reverse(),this.chartData=t;var a=this.getHourlyFlowReadings(e.data),s=a[0][0][0],r=a[0][1][0];t.push([[s],[r]]),this.currentLevel=r}).catch(e=>{console.log("error "+e)})},refreshList(){this.retrieveFlowReadings()},getDailyFlowReadings(e){var t=[];try{e.forEach((function(e){0!=e.mean&&t.push([[H["DateTime"].fromISO(e.recordedAt).toLocaleString()],[e.mean]])}))}catch(a){console.log("error in getDailyFlowReadings"),console.log(a)}return t},getHourlyFlowReadings(e){var t=[];return e.forEach((function(e){0==e.mean&&t.push([[H["DateTime"].fromISO(e.recordedAt).toLocaleString()],[e.value]])})),t}},mounted(){this.retrieveLevelReadings()}},lt=ot,ct=(a("8829"),Object(d["a"])(lt,nt,it,!1,null,null,null)),dt=ct.exports;function ut(e){e.component("toolbar",Ye),e.component("navigation",rt),e.component("tide-times",N),e.component("sun-moon",Q),e.component("weather",re),e.component("flow-rate-chart",B),e.component("river-level",dt)}var ht=a("d842"),pt=a("30ef"),ft=a.n(pt),vt=(a("bf40"),a("d1e78"),a("7f10"),a("acc7"),a("85df"));s["a"].use(vt["a"]),s["a"].config.productionTip=!1,s["a"].use(ht["a"],{adapter:ft.a}),s["a"].use(f),ut(s["a"]),new s["a"]({router:Ae,vuetify:f,render:e=>e(h)}).$mount("#app")},"6ed7":function(e,t,a){},8707:function(e,t,a){},8829:function(e,t,a){"use strict";a("bf51")},"99a9":function(e,t,a){"use strict";a("374c")},aaa3:function(e,t,a){e.exports=a.p+"img/guru.5d4bee4d.png"},acc7:function(e,t,a){},b8aa:function(e,t,a){"use strict";a("6ed7")},bf51:function(e,t,a){},c14f:function(e,t,a){},edb9:function(e,t,a){"use strict";a("3ec9")}});
//# sourceMappingURL=app.85b80dc0.js.map
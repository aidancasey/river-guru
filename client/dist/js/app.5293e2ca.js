(function(){"use strict";var t={8201:function(t,e,a){var r=a(5471),n=a(5668),i=a(6010),s=function(){var t=this,e=t._self._c;return e("div",[[e(n.A,{attrs:{id:"inspire"}},[e("div",{staticClass:"app-container"},[e("app-toolbar",{on:{toggleNavigationBar:function(e){t.drawer=!t.drawer}}}),e("app-navigation",{attrs:{toggle:t.drawer}}),e(i.A,[e("router-view")],1)],1)])]],2)},o=[],l={name:"App",data(){return{drawer:!0}}},c=l,u=a(1656),d=(0,u.A)(c,s,o,!1,null,null,null),h=d.exports,g=a(5868);r.Ay.use(g.A);var p=new g.A({}),v=a(173),m=a(4414),f=a(4566),y=a(2756),w=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("flow-rate-chart",{attrs:{displayHeading:"Inniscarra Dam Flow"}})],1)],1),e(y.A,[e(m.A,[e("river-level",{attrs:{river:"lee",location:"waterworks",displayHeading:"Waterworks Weir"}})],1),e(m.A,[e("river-level",{attrs:{river:"lee",location:"ovens",displayHeading:"River Bride at Ovens Bridge"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"lee",location:"anglers-rest",displayLocation:"The Angler's Rest"}})],1),e(m.A,[e("tide-times",{attrs:{location:"cork",displayLocation:"Cork Harbour"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"lee",location:"anglers-rest",displayHeading:"The Anglers Rest"}})],1)],1)],1)],1)},_=[],A=function(){var t=this,e=t._self._c;return e("div",[t.displayHeading?e("h2",{staticClass:"location-heading"},[t._v(t._s(t.displayHeading))]):t._e(),e("div",{staticClass:"time-range-selector"},[e("button",{class:{active:"12h"===t.timeRange},on:{click:function(e){return t.setTimeRange("12h")}}},[t._v(" 12 Hours ")]),e("button",{class:{active:"1w"===t.timeRange},on:{click:function(e){return t.setTimeRange("1w")}}},[t._v(" 1 Week ")])]),e("div",{staticClass:"chart-wrapper"},[t.currentFlowRate?e("div",{staticClass:"current-flow-rate"},[t._v(" Current Flow: "+t._s(t.currentFlowRate)+" m³/s ")]):t._e(),e("div",{staticClass:"chart-container"},[t.chartData?e("FlowRateLineChart",{attrs:{data:t.chartData,options:t.getChartOptions()}}):t._e()],1)])])},b=[],T=(a(8111),a(2489),a(1701),a(6908)),C=a(2022);C.t1.register(C.hE,C.m_,C.s$,C.No,C.kc,C.PP,C.FN,C.dN);var S={name:"FlowRateChart",components:{FlowRateLineChart:T.N1},props:{displayHeading:{type:String,required:!1,default:""}},data(){return{timeRange:"12h",chartData:null,currentFlowRate:null}},methods:{getChartOptions(){return{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"category",title:{display:!0,text:"Time"},grid:{display:!1},ticks:{maxTicksLimit:"12h"===this.timeRange?12:14,callback:(t,e)=>{const a=this.chartData?.labels||[];if(!a[e])return"";const r=new Date(a[e]);return"1w"===this.timeRange?`${r.getDate()}/${r.getMonth()+1} ${r.getHours()}:${String(r.getMinutes()).padStart(2,"0")}`:r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}}},y:{title:{display:!1,text:"Flow Rate (m³/s)"},grid:{display:!0}}},plugins:{legend:{display:!1,position:"top",onClick:null},tooltip:{callbacks:{title:t=>new Date(t[0].label).toLocaleString()}}}}},setTimeRange(t){this.timeRange=t,this.fetchData()},async fetchData(){try{const t=(new Date).getTime();console.log("Fetching flow rate data...");const e=await fetch(`/api/flowReadings/latest?_t=${t}`,{headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const a=await e.json();if(console.log("Raw API response:",a),console.log("Response status:",e.status),!Array.isArray(a)||0===a.length)return void console.warn("No flow rate readings received");const r=new Date,n="12h"===this.timeRange?432e5:6048e5,i=new Date(r.getTime()-n),s=a.filter((t=>new Date(t.recordedAt)>i)).sort(((t,e)=>new Date(t.recordedAt)-new Date(e.recordedAt)));if(0===s.length)return void console.warn(`No flow rate readings found in the last ${this.timeRange}`);this.currentFlowRate=s[s.length-1].reading.toFixed(2),console.log("First reading:",s[0]),console.log("Last reading:",s[s.length-1]),console.log("Number of readings:",s.length);const o=s.map((t=>t.recordedAt)),l=s.map((t=>t.reading));this.chartData={labels:o,datasets:[{label:"Flow Rate (m³/s)",data:l,borderColor:"#2196F3",backgroundColor:"rgba(33, 150, 243, 0.5)",borderWidth:2,fill:{target:"origin",above:"rgba(33, 150, 243, 0.5)"},tension:.4}]}}catch(t){console.error("Error fetching flow rate data:",t),console.error("Error details:",{message:t.message,stack:t.stack})}}},mounted(){this.fetchData(),setInterval(this.fetchData,3e5)}},x=S,D=(0,u.A)(x,A,b,!1,null,"58c2c7c8",null),k=D.exports,R=a(687),L=a(2938),H=a(2498),$=function(){var t=this,e=t._self._c;return e(R.A,{attrs:{height:"100%",width:"100%"}},[e(L.OQ,{staticClass:"pa-3"},[e(L.ZR,{staticClass:"title text-center"},[t._v(t._s(t.displayLocation)+" Tide Times")]),e(L.ZR,{staticClass:"subheading text-center"},[t._v(t._s(t.today)+" ")])],1),e(H.A,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(" Tide ")]),e("th",{staticClass:"text-center"},[t._v(" Time ")]),e("th",{staticClass:"text-left"},[t._v(" Height ")])])]),e("tbody",t._l(t.tides,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"text-left"},[t._v(t._s(a.hilo))]),e("td",{staticClass:"text-center"},[t._v(t._s(t.formatDate(a.time)))]),e("td",{staticClass:"text-left"},[t._v(t._s(a.height)+" m")])])})),0)]},proxy:!0}])})],1)},F=[],W=a(4335),O=W.A.create({headers:{"Content-type":"application/json"}});class B{getAll(){return O.get("/api/flowReadings/latest")}getLatestTideTimes(t){return O.get("/api/tides/"+t+"/latest")}getLatestLevels(t,e){return O.get("/api/levels/"+t+"/"+e+"/latest")}getLatestWeather(t,e){return O.get("/api/weather-forecast/"+t+"/"+e)}getSunTimes(t,e){return O.get("/api/sun-times/"+t+"/"+e)}}var N=new B,P={props:{location:{type:String,required:!1},displayLocation:{type:String,required:!1},icon:{type:String,required:!1},color:{type:String,required:!1}},methods:{formatDate(t){return this.$luxon(t,"HH:mm")},getTideData(){N.getLatestTideTimes(this.$props.location).then((t=>{var e=t.data;e.reverse(),this.tides=e,this.today=this.$luxon(e[0].time,"DDDD")})).catch((t=>{console.log(t)}))}},mounted(){this.getTideData()},data(){return{tides:[],today:"foo"}}},I=P,M=(0,u.A)(I,$,F,!1,null,null,null),j=M.exports,q=a(7296),U=a(3156),Z=function(){var t=this,e=t._self._c;return e(R.A,{staticClass:"mx-auto",attrs:{height:"100%",width:"100%",rounded:"true"}},[e(L.OQ,{staticClass:"pa-2"},[e(U.UZ,{staticClass:"title text-center"},[t._v("Daylight "+t._s(t.displayLocation)+" ")])],1),e(U.pr,{staticClass:"pa-0"},[e(U.UZ,{staticClass:"text-center subheading text--primary"},[t._v(" "+t._s(t.day1))]),e("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunrise-icon.svg"}}),e(q.A,[e(U.w,{staticClass:"title text-center pa-0"},[t._v(" dawn : "+t._s(t.dawn1)+" ")]),e(U.w,{staticClass:"title text-center"},[t._v(" sunrise : "+t._s(t.sunrise1)+" ")])],1),e("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunset-icon.svg"}}),e(q.A,[e(U.w,{staticClass:"title text-center"},[t._v(" sunset : "+t._s(t.sunset1)+" ")]),e(U.w,{staticClass:"title text-center"},[t._v(" dusk : "+t._s(t.dusk1)+" ")])],1)],1),e(U.pr,[e(U.UZ,{staticClass:"text-center subheading text--primary"},[t._v(" "+t._s(t.day2))]),e("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunrise-icon.svg"}}),e(q.A,[e(U.w,{staticClass:"title text-center"},[t._v(" dawn : "+t._s(t.dawn2)+" ")]),e(U.w,{staticClass:"title text-center"},[t._v(" sunrise : "+t._s(t.sunrise2)+" ")])],1),e("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunset-icon.svg"}}),e(q.A,[e(U.w,{staticClass:"title text-center"},[t._v(" sunset : "+t._s(t.sunset2)+" ")]),e(U.w,{staticClass:"title text-center"},[t._v(" dusk : "+t._s(t.dusk2)+" ")])],1)],1)],1)},E=[],z={props:{river:{type:String,required:!1},location:{type:String,required:!1},displayLocation:{type:String,required:!1}},methods:{getSunTimes(){N.getSunTimes(this.$props.river,this.$props.location).then((t=>{var e=t.data;this.sunTimes=e,this.dawn1=this.$luxon(this.sunTimes.data.day1.dawn,"T"),this.dawn2=this.$luxon(this.sunTimes.data.day2.dawn,"T"),this.sunrise1=this.$luxon(this.sunTimes.data.day1.sunrise,"T"),this.sunrise2=this.$luxon(this.sunTimes.data.day2.sunrise,"T"),this.sunset1=this.$luxon(this.sunTimes.data.day1.sunset,"T"),this.sunset2=this.$luxon(this.sunTimes.data.day2.sunset,"T"),this.dusk1=this.$luxon(this.sunTimes.data.day1.dusk,"T"),this.dusk2=this.$luxon(this.sunTimes.data.day2.dusk,"T"),this.day1=this.$luxon(this.sunTimes.data.day1.dawn,"DDDD"),this.day2=this.$luxon(this.sunTimes.data.day2.dawn,"DDDD")})).catch((t=>{console.log(t)}))}},mounted(){this.getSunTimes()},data(){return{sunTimes:[],dawn1:"",dawn2:"",sunrise1:"",sunrise2:"",sunset1:"",sunset2:"",dusk1:"",dusk2:"",day1:"",day2:""}}},G=z,Q=(0,u.A)(G,Z,E,!1,null,null,null),Y=Q.exports,K=a(7314),J=a(8983),V=function(){var t=this,e=t._self._c;return e(R.A,{attrs:{height:"100%"}},[e(q.A,{attrs:{"two-line":""}},[e(U.pr,[e(U.UZ,{staticClass:"title text-center"},[t._v(t._s(t.displayHeading)+" ")]),e(U.w,{staticClass:"text-center"},[t._v("last updated at "+t._s(t.currentTime)+" ")])],1)],1),e(L.OQ,[e(q.A,{staticClass:"text-center justify-center display-1"},[e("img",{staticStyle:{width:"20%"},attrs:{src:t.currentWeatherSymbol,alt:""}}),t._v(" "+t._s(t.currentDescription)+", "+t._s(t.currentTemp)+"°C ")])],1),e(J.A,{staticClass:"pa-0"},t._l(t.forecasts,(function(a){return e(q.A,{key:a.from},[e(q.A,{staticClass:"caption pa=0"},[t._v(" "+t._s(t.formatDate(a.from))+" ")]),e(q.A,{staticClass:"caption pa=0"},[e("span",{class:t.getColour(a.temperature_celsius)},[t._v(t._s(a.temperature_celsius)+"°")])]),e(q.A,{staticClass:"h5 pa=0"},[e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/icons/day/"+a.weatherSymbol_number+".svg"}}),"0.0"!==a.rain_mm&&void 0!==a.rain_mm?e("div",[t._v(" rain "+t._s(a.rain_mm)+"mm ")]):t._e()]),e(q.A,{staticClass:"h5 pa=0"},[e("img",{style:"width: 20px; height: 20px; transform: rotate("+a.windDirectionDegree_degrees+"deg);",attrs:{src:"/icons/wind/weather-wind-arrow.svg"}}),t._v(" "+t._s(a.windDirectionName)+" "+t._s(a.windSpeed_kph.toFixed(2))+" km/h ")])],1)})),1),e(L.SL,[e(K.A,{attrs:{block:"",disabled:1==t.buttonDisabled},on:{click:function(e){return e.preventDefault(),t.loadAllForecasts.apply(null,arguments)}}},[t._v(" Load More ")])],1),e(U.w,{staticClass:"ma-3 caption",attrs:{align:"center"}},[e("p",[t._v(" weather info provided by Met Éireann public API ")])])],1)},X=[],tt={name:"WeatherDisplay",props:{river:{type:String,required:!1},location:{type:String,required:!1},displayHeading:{type:String,required:!1}},methods:{formatDate(t){return this.$luxon(t,"ccc")+" "+this.$luxon(t,"T")},formatImageLink(t){return"/day/"+t+".svg"},getColour(t){return t>20?"red":t>14&&t<=20?"orange":t>7&&t<=14?"yellow":"blue"},getWeatherDescription(t){var e={1:"Sunny",2:"Light Cloud",3:"Partly Cloud",4:"Cloudly",5:"Light Rain Sun",6:"Light Rain Thunder Sun",7:"Sleet Sun",8:"Snow Sunny",9:"Light Rain",10:"Rain",11:"Rain Thunder",12:"Sleet",13:"Snow",14:"Snow Thunder",15:"Fog",20:"Sleet Sun Thunder",21:"Snow Sun Thunder\t",22:"Light Rain Thunder\t",23:"Sleet Thunder\t",24:"Drizzle Thunder Sun",25:"Rain Thunder Sun\t",26:"Light Sleet Thunder Sun\t",27:"Heavy Sleet Thunder Sun\t",28:"Light Snow Thunder Sun\t",29:"Heavy Snow Thunder Sun\t",30:"Drizzle Thunder\t",31:"Light Sleet Thunder\t",32:"Heavy Sleet Thunder\t",33:"Light Snow Thunder",34:"Heavy Snow Thunder",40:"Drizzle Sun",41:"Rain Sun",42:"Light Sleet Sun",43:"Heavy Sleet Sun",44:"Light Snow Sun",45:"Heavy Snow Sun",46:"Drizzle",47:"Light Sleet",48:"Heavy Sleet",49:"Light Snow",50:"Heavy Snow"},a=JSON.stringify(e[t]).toString();return a.replace(/"/g,"")},loadAllForecasts(){this.buttonDisabled=this.buttonDisabled+1,this.forecasts=this.allForecasts},getData(){N.getLatestWeather(this.$props.river,this.$props.location).then((t=>{var e=t.data.data;this.allForecasts=e,this.forecasts=e.slice(0,10),this.currentWeatherSymbol="/icons/day/"+e[0].weatherSymbol_number+".svg",this.currentTemp=e[0].temperature_celsius,this.currentTime=this.formatDate(e[0].from),this.currentWindSpeed=e[0].windSpeed_kph,this.currentDescription=this.getWeatherDescription(e[0].weatherSymbol_number)})).catch((t=>{console.log(t)}))}},mounted(){this.getData()},data(){return{forecasts:[],allForecasts:[],currentWeatherSymbol:null,currentWeatherPic:null,currentTemp:null,currentTime:null,currentDescription:null,buttonDisabled:0}}},et=tt,at=(0,u.A)(et,V,X,!1,null,"b7dea336",null),rt=at.exports,nt={components:{FlowRateChart:k,TideTimes:j,SunMoon:Y,Weather:rt},data(){return{}}},it=nt,st=(0,u.A)(it,w,_,!1,null,null,null),ot=st.exports,lt=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("river-level",{attrs:{river:"blackwater",location:"fermoy",displayHeading:"Fermoy Bridge"}})],1),e(m.A,[e("river-level",{attrs:{river:"blackwater",location:"ballyduff",displayHeading:"BallyDuff"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"blackwater",location:"fermoy",displayLocation:"Fermoy Town"}})],1),e(m.A,[e("tide-times",{attrs:{location:"youghal",displayLocation:"Youghal"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"blackwater",location:"fermoy",displayHeading:"Fermoy Town"}})],1)],1)],1)],1)},ct=[],ut={components:{TideTimes:j,Weather:rt,SunMoon:Y},data(){return{}}},dt=ut,ht=(0,u.A)(dt,lt,ct,!1,null,null,null),gt=ht.exports,pt=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("river-level",{attrs:{river:"bandon",location:"curranure",displayHeading:"Curranure Bridge"}})],1)],1),t._v("> "),e(y.A,[e(m.A,[e("river-level",{attrs:{river:"bandon",location:"bealaboy",displayHeading:"Bealaboy Bridge"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"bandon",location:"bandon",displayLocation:"Bandon Town"}})],1),e(m.A,[e("tide-times",{attrs:{location:"kinsale",displayLocation:"Kinsale"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"bandon",location:"bandon",displayHeading:"Bandon Town"}})],1)],1)],1)],1)},vt=[],mt={components:{TideTimes:j,Weather:rt,SunMoon:Y},data(){return{}}},ft=mt,yt=(0,u.A)(ft,pt,vt,!1,null,null,null),wt=yt.exports,_t=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("river-level",{attrs:{river:"owenboy",location:"ballea",displayHeading:"Ballea Bridge"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"owenboy",location:"carrigaline",displayHeading:"Carrigaline Town"}})],1),e(m.A,[e("tide-times",{attrs:{location:"cork",displayLocation:"Cork Harbour"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"owenboy",location:"carrigaline",displayHeading:"Carrigaline"}})],1)],1)],1)],1)},At=[],bt={components:{TideTimes:j,Weather:rt,SunMoon:Y},data(){return{}}},Tt=bt,Ct=(0,u.A)(Tt,_t,At,!1,null,null,null),St=Ct.exports,xt=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("river-level",{attrs:{river:"suir",location:"new-bridge",displayHeading:"New Bridge, Golden, Tipperary"}})],1)],1),t._v("> "),e(y.A,[e(m.A,[e("river-level",{attrs:{river:"suir",location:"carrick-on-suir",displayHeading:"Carrick-On-Suir Tipperary"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"suir",location:"cahir",displayLocation:"Cahir, Tipperary"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"suir",location:"cahir",displayHeading:"Cahir, Tipperary"}})],1)],1)],1)],1)},Dt=[],kt={components:{Weather:rt,SunMoon:Y},data(){return{}}},Rt=kt,Lt=(0,u.A)(Rt,xt,Dt,!1,null,null,null),Ht=Lt.exports,$t=function(){var t=this,e=t._self._c;return e(f.A,[e("h1",{staticClass:"display-2"},[t._v("The River Guru")]),e("p",{staticClass:"pt-10"},[t._v(" This website collects river and weather information from different sources and presents it in one convenient place for fishermen and anyone interested in the conditions of their local rivers around Ireland. ")]),e("h3",{staticClass:"display-1"},[t._v("Data Feeds")]),e("p",{staticClass:"pt-5 pb-5"},[t._v(" Hydrometric information is collected from the ESB - "),e("a",{attrs:{href:"http://esbhydro.ie/"}},[t._v("here")])]),e("p",{staticClass:"pt-0"},[t._v(" Weather information in is collected from Met Éireann Weather Forecast "),e("a",{attrs:{href:"https://data.gov.ie/dataset/met-eireann-weather-forecast-api"}},[t._v("API")])]),e("p",{staticClass:"pt-5 pb-5"},[t._v(" Water levels are collected from the Office of Public Works public "),e("a",{attrs:{href:"https://data.gov.ie/dataset/opw-hydrometric-network-real-time-water-level-data"}},[t._v(" API ")])]),e("h3",{staticClass:"display-1"},[t._v("Disclaimer")]),e("p",{staticClass:"pt-5"},[t._v(" This site has user generated content. No guarantee can be made for the accuracy of completeness of content. Your use of this content is AT YOUR OWN RISK. River conditions (Such as Gauge Height, Flow Rate, Precipitation, and Temperature) can change without warning, and may be incorrect. ")]),e("h3",{staticClass:"display-1"},[t._v("Want To See More Rivers Or More Data ?")]),e("p",{staticClass:"pt-5"},[t._v(" If you'd like other irish rivers listed on this site or other data please contact me "),e("a",{attrs:{href:"https://form.jotform.com/210906718558362"}},[t._v(" Contact Us")])]),e("p",{staticClass:"pt-5"},[t._v(" tight lines folks ! - Aidan ")])])},Ft=[],Wt={name:"AboutPage",components:{},data(){return{}}},Ot=Wt,Bt=(0,u.A)(Ot,$t,Ft,!1,null,null,null),Nt=Bt.exports;r.Ay.use(v.Ay);var Pt=new v.Ay({mode:"history",routes:[{path:"/reading",alias:"/readings",name:"readings"},{path:"/",name:"LeeDashboard",component:ot},{path:"blackwater",name:"BlackwaterDashboard",component:gt},{path:"bandon",name:"BandonDashboard",component:wt},{path:"suir",name:"SuirDashboard",component:Ht},{path:"owenboy",name:"OwenboyDashboard",component:St},{path:"about",name:"AboutPage",component:Nt}]}),It=a(301),Mt=a(2696),jt=a(2367),qt=function(){var t=this,e=t._self._c;return e(It.A,{attrs:{dark:"",app:"",color:t.$root.themeColor}},[e(jt.sw,[e(Mt.A,{on:{click:t.toggleNavigationBar}})],1)],1)},Ut=[],Zt={name:"AppToolbar",data(){return{}},methods:{toggleNavigationBar(){const t=this;t.$emit("toggleNavigationBar")}}},Et=Zt,zt=(0,u.A)(Et,qt,Ut,!1,null,null,null),Gt=zt.exports,Qt=a(6930),Yt=a(2659),Kt=a(2232),Jt=a(198),Vt=function(){var t=this,e=t._self._c;return e(Kt.A,{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(Jt.A,{staticClass:"toolbar",attrs:{flat:"",dark:"",color:t.$root.themeColor}},[e("router-link",{attrs:{to:{name:"LeeDashboard"}}},[e("img",{attrs:{src:a(8891),width:"36px"}})]),e("router-link",{staticClass:"text",attrs:{to:{name:"LeeDashboard"}}},[t._v(" The River Guru ")])],1),e(J.A,[e(q.A,{on:{click:function(e){return t.changeRoute("LeeDashboard",1)}}},[e(Yt.A,[e(Qt.A,[t._v("mdi-waves")])],1),e(U.UZ,{class:[{active:1===t.selectedIndex},"item-title"]},[t._v("River Lee, Cork")])],1),e(q.A,{on:{click:function(e){return t.changeRoute("BandonDashboard",2)}}},[e(Yt.A,[e(Qt.A,[t._v("mdi-waves")])],1),e(U.UZ,{class:[{active:2===t.selectedIndex},"item-title"]},[t._v("River Bandon, Cork")])],1)],1),e(q.A,{on:{click:function(e){return t.changeRoute("BlackwaterDashboard",3)}}},[e(Yt.A,[e(Qt.A,[t._v("mdi-waves")])],1),e(U.UZ,{class:[{active:3===t.selectedIndex},"item-title"]},[t._v("River Blackwater, Cork")])],1),e(q.A,{on:{click:function(e){return t.changeRoute("OwenboyDashboard",4)}}},[e(Yt.A,[e(Qt.A,[t._v("mdi-waves")])],1),e(U.UZ,{class:[{active:4===t.selectedIndex},"item-title"]},[t._v("River Owenboy, Cork")])],1),e(q.A,{on:{click:function(e){return t.changeRoute("SuirDashboard",5)}}},[e(Yt.A,[e(Qt.A,[t._v("mdi-waves")])],1),e(U.UZ,{class:[{active:5===t.selectedIndex},"item-title"]},[t._v("River Suir, Tipperary")])],1),e(q.A,{on:{click:function(e){return t.changeRoute("AboutPage",6)}}},[e(Yt.A,[e(Qt.A,[t._v("mdi-information-outline")])],1),e(U.UZ,{class:[{active:6===t.selectedIndex},"item-title"]},[t._v("About")])],1)],1)},Xt=[],te=(a(4114),{name:"NavigationDrawer",props:{toggle:{type:Boolean,required:!0}},computed:{drawer:{get(){return this.toggle},set(t){this.$emit("update:toggle",t)}}},data(){return{selectedIndex:1}},methods:{changeRoute(t,e){const a=this;return a.selectedIndex=e,a.$router.push({name:t})}}}),ee=te,ae=(0,u.A)(ee,Vt,Xt,!1,null,null,null),re=ae.exports,ne=function(){var t=this,e=t._self._c;return e("div",[t.displayHeading?e("h2",{staticClass:"location-heading"},[t._v(t._s(t.displayHeading))]):t._e(),e("div",{staticClass:"time-range-selector"},[e("button",{class:{active:"12h"===t.timeRange},on:{click:function(e){return t.setTimeRange("12h")}}},[t._v(" 12 Hours ")]),e("button",{class:{active:"1w"===t.timeRange},on:{click:function(e){return t.setTimeRange("1w")}}},[t._v(" 1 Week ")])]),e("div",{staticClass:"chart-wrapper"},[t.currentLevel?e("div",{staticClass:"current-level"},[t._v(" Current Level: "+t._s(t.currentLevel)+" m ")]):t._e(),e("div",{staticClass:"chart-container"},[t.chartData?e("WaterLevelChart",{attrs:{data:t.chartData,options:t.getChartOptions()}}):t._e()],1)])])},ie=[];C.t1.register(C.hE,C.m_,C.s$,C.No,C.kc,C.PP,C.FN,C.dN);var se={name:"RiverLevel",components:{WaterLevelChart:T.N1},props:{displayHeading:{type:String,required:!1,default:""}},data(){return{timeRange:"12h",chartData:null,currentLevel:null}},methods:{getChartOptions(){return{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"category",title:{display:!0,text:"Time"},grid:{display:!1},ticks:{maxTicksLimit:"12h"===this.timeRange?12:14,callback:(t,e)=>{const a=this.chartData?.labels||[];if(!a[e])return"";const r=new Date(a[e]);return"1w"===this.timeRange?`${r.getDate()}/${r.getMonth()+1} ${r.getHours()}:${String(r.getMinutes()).padStart(2,"0")}`:r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}}},y:{title:{display:!0,text:"Water Level (m)"},grid:{display:!0}}},plugins:{legend:{display:!1,position:"top",onClick:null},tooltip:{callbacks:{title:t=>new Date(t[0].label).toLocaleString()}}}}},setTimeRange(t){this.timeRange=t,this.fetchData()},async fetchData(){try{const t=(new Date).getTime();console.log("Fetching water level data...");const e=await fetch(`/api/levels/lee/ovens/latest?_t=${t}`,{headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const a=await e.json();if(console.log("Raw API response:",a),console.log("Response status:",e.status),!Array.isArray(a)||0===a.length)return void console.warn("No water level readings received");const r=new Date,n="12h"===this.timeRange?432e5:6048e5,i=new Date(r.getTime()-n),s=a.filter((t=>new Date(t.recordedAt)>i)).sort(((t,e)=>new Date(t.recordedAt)-new Date(e.recordedAt)));if(0===s.length)return void console.warn(`No water level readings found in the last ${this.timeRange}`);this.currentLevel=s[s.length-1].value.toFixed(3),console.log("First reading:",s[0]),console.log("Last reading:",s[s.length-1]),console.log("Number of readings:",s.length);const o=s.map((t=>t.recordedAt)),l=s.map((t=>t.value));this.chartData={labels:o,datasets:[{label:"Water Level (m)",data:l,borderColor:"#4CAF50",backgroundColor:"rgba(76, 175, 80, 0.5)",borderWidth:2,fill:{target:"origin",above:"rgba(76, 175, 80, 0.5)"},tension:.4}]}}catch(t){console.error("Error fetching water level data:",t),console.error("Error details:",{message:t.message,stack:t.stack})}}},mounted(){this.fetchData(),setInterval(this.fetchData,3e5)}},oe=se,le=(0,u.A)(oe,ne,ie,!1,null,"23e90996",null),ce=le.exports;function ue(t){t.component("app-toolbar",Gt),t.component("app-navigation",re),t.component("tide-times",j),t.component("sun-moon",Y),t.component("weather-display",rt),t.component("flow-rate-chart",k),t.component("river-level",ce)}var de=a(4050),he=(a(4301),a(4953));r.Ay.use(he.A),r.Ay.config.productionTip=!1,r.Ay.use(de.A,{adapter:C["default"]}),r.Ay.use(p),ue(r.Ay),new r.Ay({router:Pt,vuetify:p,render:t=>t(h)}).$mount("#app")},8891:function(t,e,a){t.exports=a.p+"img/guru.f0d8cce4.png"}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,i){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(o=!1,i<s&&(s=i));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,s=r[0],o=r[1],l=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var u=l(a)}for(e&&e(r);c<s.length;c++)i=s[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},r=self["webpackChunkriver_guru_client"]=self["webpackChunkriver_guru_client"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(8201)}));r=a.O(r)})();
//# sourceMappingURL=app.5293e2ca.js.map
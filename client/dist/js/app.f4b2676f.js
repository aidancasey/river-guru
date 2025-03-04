(function(){"use strict";var t={2634:function(t,e,r){var a=r(5471),i=r(5668),n=r(6010),s=function(){var t=this,e=t._self._c;return e("div",[[e(i.A,{attrs:{id:"inspire"}},[e("div",{staticClass:"app-container"},[e("app-toolbar",{on:{toggleNavigationBar:function(e){t.drawer=!t.drawer}}}),e("app-navigation",{attrs:{toggle:t.drawer}}),e(n.A,[e("router-view")],1)],1)])]],2)},o=[],l={name:"App",data(){return{drawer:!0}}},c=l,u=r(1656),d=(0,u.A)(c,s,o,!1,null,null,null),h=d.exports,p=r(5868);a.Ay.use(p.A);var v=new p.A({}),g=r(173),m=r(4414),f=r(4566),y=r(2756),w=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("flow-rate-chart")],1)],1),e(y.A,[e(m.A,[e("river-level",{attrs:{river:"lee",location:"waterworks",displayHeading:"Waterworks Weir"}})],1),e(m.A,[e("river-level",{attrs:{river:"lee",location:"ovens",displayHeading:"River Bride at Ovens Bridge"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"lee",location:"anglers-rest",displayLocation:"The Angler's Rest"}})],1),e(m.A,[e("tide-times",{attrs:{location:"cork",displayLocation:"Cork Harbour"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"lee",location:"anglers-rest",displayHeading:"The Anglers Rest"}})],1)],1)],1)],1)},_=[],A=r(687),b=r(2938),S=r(9483),T=r(3156),x=function(){var t=this,e=t._self._c;return e(A.A,{staticClass:"card",attrs:{height:"100%",width:"100%"}},[e(b.OQ,{staticClass:"pa-2"},[e(b.ZR,{staticClass:"title text-center"},[t._v("Flow Inniscarra Dam")]),e("p",{staticClass:"text-center display-1 text--primary"},[t._v(" "+t._s(t.currentFlow)+" ㎥/sec ")]),e("area-chart",{attrs:{data:t.chartData,colors:["cornflowerblue"]}})],1),e(S.A),e(T.w,{staticClass:"ma-3 caption",attrs:{align:"center"}},[e("p",[t._v(" current flow rate intrepreted from ESB data feed ")])])],1)},C=[],D=(r(8111),r(1701),r(4335)),k=D.A.create({headers:{"Content-type":"application/json"}});class L{getAll(){return k.get("/api/flowReadings/latest")}getLatestTideTimes(t){return k.get("/api/tides/"+t+"/latest")}getLatestLevels(t,e){return k.get("/api/levels/"+t+"/"+e+"/latest")}getLatestWeather(t,e){return k.get("/api/weather-forecast/"+t+"/"+e)}getSunTimes(t,e){return k.get("/api/sun-times/"+t+"/"+e)}}var R=new L,H=r(1272),O={data(){return{chartData:[],currentFlow:0}},methods:{retrieveFlowReadings(){R.getAll().then((t=>{var e=t.data.map(this.getDisplayFlowReading);e.reverse(),this.chartData=e,this.currentFlow=e[e.length-1][1][0]})).catch((t=>{console.log(t)}))},refreshList(){this.retrieveFlowReadings()},getDisplayFlowReading(t){return[[H.c9.fromISO(t.recordedAt).toFormat("T")],[t.reading]]}},mounted(){this.retrieveFlowReadings()}},F=O,$=(0,u.A)(F,x,C,!1,null,null,null),B=$.exports,W=r(2498),I=function(){var t=this,e=t._self._c;return e(A.A,{attrs:{height:"100%",width:"100%"}},[e(b.OQ,{staticClass:"pa-3"},[e(b.ZR,{staticClass:"title text-center"},[t._v(t._s(t.displayLocation)+" Tide Times")]),e(b.ZR,{staticClass:"subheading text-center"},[t._v(t._s(t.today)+" ")])],1),e(W.A,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(" Tide ")]),e("th",{staticClass:"text-center"},[t._v(" Time ")]),e("th",{staticClass:"text-left"},[t._v(" Height ")])])]),e("tbody",t._l(t.tides,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"text-left"},[t._v(t._s(r.hilo))]),e("td",{staticClass:"text-center"},[t._v(t._s(t.formatDate(r.time)))]),e("td",{staticClass:"text-left"},[t._v(t._s(r.height)+" m")])])})),0)]},proxy:!0}])})],1)},P=[],q={props:{location:{type:String,required:!1},displayLocation:{type:String,required:!1},icon:{type:String,required:!1},color:{type:String,required:!1}},methods:{formatDate(t){return this.$luxon(t,"HH:mm")},getTideData(){R.getLatestTideTimes(this.$props.location).then((t=>{var e=t.data;e.reverse(),this.tides=e,this.today=this.$luxon(e[0].time,"DDDD")})).catch((t=>{console.log(t)}))}},mounted(){this.getTideData()},data(){return{tides:[],today:"foo"}}},Z=q,M=(0,u.A)(Z,I,P,!1,null,null,null),U=M.exports,j=r(7296),N=function(){var t=this,e=t._self._c;return e(A.A,{staticClass:"mx-auto",attrs:{height:"100%",width:"100%",rounded:"true"}},[e(b.OQ,{staticClass:"pa-2"},[e(T.UZ,{staticClass:"title text-center"},[t._v("Daylight "+t._s(t.displayLocation)+" ")])],1),e(T.pr,{staticClass:"pa-0"},[e(T.UZ,{staticClass:"text-center subheading text--primary"},[t._v(" "+t._s(t.day1))]),e("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunrise-icon.svg"}}),e(j.A,[e(T.w,{staticClass:"title text-center pa-0"},[t._v(" dawn : "+t._s(t.dawn1)+" ")]),e(T.w,{staticClass:"title text-center"},[t._v(" sunrise : "+t._s(t.sunrise1)+" ")])],1),e("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunset-icon.svg"}}),e(j.A,[e(T.w,{staticClass:"title text-center"},[t._v(" sunset : "+t._s(t.sunset1)+" ")]),e(T.w,{staticClass:"title text-center"},[t._v(" dusk : "+t._s(t.dusk1)+" ")])],1)],1),e(T.pr,[e(T.UZ,{staticClass:"text-center subheading text--primary"},[t._v(" "+t._s(t.day2))]),e("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunrise-icon.svg"}}),e(j.A,[e(T.w,{staticClass:"title text-center"},[t._v(" dawn : "+t._s(t.dawn2)+" ")]),e(T.w,{staticClass:"title text-center"},[t._v(" sunrise : "+t._s(t.sunrise2)+" ")])],1),e("img",{style:"width: 50px; height: 50px;",attrs:{src:"/icons/sunset-icon.svg"}}),e(j.A,[e(T.w,{staticClass:"title text-center"},[t._v(" sunset : "+t._s(t.sunset2)+" ")]),e(T.w,{staticClass:"title text-center"},[t._v(" dusk : "+t._s(t.dusk2)+" ")])],1)],1)],1)},z=[],E={props:{river:{type:String,required:!1},location:{type:String,required:!1},displayLocation:{type:String,required:!1}},methods:{getSunTimes(){R.getSunTimes(this.$props.river,this.$props.location).then((t=>{var e=t.data;this.sunTimes=e,this.dawn1=this.$luxon(this.sunTimes.data.day1.dawn,"T"),this.dawn2=this.$luxon(this.sunTimes.data.day2.dawn,"T"),this.sunrise1=this.$luxon(this.sunTimes.data.day1.sunrise,"T"),this.sunrise2=this.$luxon(this.sunTimes.data.day2.sunrise,"T"),this.sunset1=this.$luxon(this.sunTimes.data.day1.sunset,"T"),this.sunset2=this.$luxon(this.sunTimes.data.day2.sunset,"T"),this.dusk1=this.$luxon(this.sunTimes.data.day1.dusk,"T"),this.dusk2=this.$luxon(this.sunTimes.data.day2.dusk,"T"),this.day1=this.$luxon(this.sunTimes.data.day1.dawn,"DDDD"),this.day2=this.$luxon(this.sunTimes.data.day2.dawn,"DDDD")})).catch((t=>{console.log(t)}))}},mounted(){this.getSunTimes()},data(){return{sunTimes:[],dawn1:"",dawn2:"",sunrise1:"",sunrise2:"",sunset1:"",sunset2:"",dusk1:"",dusk2:"",day1:"",day2:""}}},Q=E,G=(0,u.A)(Q,N,z,!1,null,null,null),Y=G.exports,K=r(7314),J=r(8983),V=function(){var t=this,e=t._self._c;return e(A.A,{attrs:{height:"100%"}},[e(j.A,{attrs:{"two-line":""}},[e(T.pr,[e(T.UZ,{staticClass:"title text-center"},[t._v(t._s(t.displayHeading)+" ")]),e(T.w,{staticClass:"text-center"},[t._v("last updated at "+t._s(t.currentTime)+" ")])],1)],1),e(b.OQ,[e(j.A,{staticClass:"text-center justify-center display-1"},[e("img",{staticStyle:{width:"20%"},attrs:{src:t.currentWeatherSymbol,alt:""}}),t._v(" "+t._s(t.currentDescription)+", "+t._s(t.currentTemp)+"°C ")])],1),e(J.A,{staticClass:"pa-0"},t._l(t.forecasts,(function(r){return e(j.A,{key:r.from},[e(j.A,{staticClass:"caption pa=0"},[t._v(" "+t._s(t.formatDate(r.from))+" ")]),e(j.A,{staticClass:"caption pa=0"},[e("span",{class:t.getColour(r.temperature_celsius)},[t._v(t._s(r.temperature_celsius)+"°")])]),e(j.A,{staticClass:"h5 pa=0"},[e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/icons/day/"+r.weatherSymbol_number+".svg"}}),"0.0"!==r.rain_mm&&void 0!==r.rain_mm?e("div",[t._v(" rain "+t._s(r.rain_mm)+"mm ")]):t._e()]),e(j.A,{staticClass:"h5 pa=0"},[e("img",{style:"width: 20px; height: 20px; transform: rotate("+r.windDirectionDegree_degrees+"deg);",attrs:{src:"/icons/wind/weather-wind-arrow.svg"}}),t._v(" "+t._s(r.windDirectionName)+" "+t._s(r.windSpeed_kph.toFixed(2))+" km/h ")])],1)})),1),e(b.SL,[e(K.A,{attrs:{block:"",disabled:1==t.buttonDisabled},on:{click:function(e){return e.preventDefault(),t.loadAllForecasts.apply(null,arguments)}}},[t._v(" Load More ")])],1),e(T.w,{staticClass:"ma-3 caption",attrs:{align:"center"}},[e("p",[t._v(" weather info provided by Met Éireann public API ")])])],1)},X=[],tt={name:"WeatherDisplay",props:{river:{type:String,required:!1},location:{type:String,required:!1},displayHeading:{type:String,required:!1}},methods:{formatDate(t){return this.$luxon(t,"ccc")+" "+this.$luxon(t,"T")},formatImageLink(t){return"/day/"+t+".svg"},getColour(t){return t>20?"red":t>14&&t<=20?"orange":t>7&&t<=14?"yellow":"blue"},getWeatherDescription(t){var e={1:"Sunny",2:"Light Cloud",3:"Partly Cloud",4:"Cloudly",5:"Light Rain Sun",6:"Light Rain Thunder Sun",7:"Sleet Sun",8:"Snow Sunny",9:"Light Rain",10:"Rain",11:"Rain Thunder",12:"Sleet",13:"Snow",14:"Snow Thunder",15:"Fog",20:"Sleet Sun Thunder",21:"Snow Sun Thunder\t",22:"Light Rain Thunder\t",23:"Sleet Thunder\t",24:"Drizzle Thunder Sun",25:"Rain Thunder Sun\t",26:"Light Sleet Thunder Sun\t",27:"Heavy Sleet Thunder Sun\t",28:"Light Snow Thunder Sun\t",29:"Heavy Snow Thunder Sun\t",30:"Drizzle Thunder\t",31:"Light Sleet Thunder\t",32:"Heavy Sleet Thunder\t",33:"Light Snow Thunder",34:"Heavy Snow Thunder",40:"Drizzle Sun",41:"Rain Sun",42:"Light Sleet Sun",43:"Heavy Sleet Sun",44:"Light Snow Sun",45:"Heavy Snow Sun",46:"Drizzle",47:"Light Sleet",48:"Heavy Sleet",49:"Light Snow",50:"Heavy Snow"},r=JSON.stringify(e[t]).toString();return r.replace(/"/g,"")},loadAllForecasts(){this.buttonDisabled=this.buttonDisabled+1,this.forecasts=this.allForecasts},getData(){R.getLatestWeather(this.$props.river,this.$props.location).then((t=>{var e=t.data.data;this.allForecasts=e,this.forecasts=e.slice(0,10),this.currentWeatherSymbol="/icons/day/"+e[0].weatherSymbol_number+".svg",this.currentTemp=e[0].temperature_celsius,this.currentTime=this.formatDate(e[0].from),this.currentWindSpeed=e[0].windSpeed_kph,this.currentDescription=this.getWeatherDescription(e[0].weatherSymbol_number)})).catch((t=>{console.log(t)}))}},mounted(){this.getData()},data(){return{forecasts:[],allForecasts:[],currentWeatherSymbol:null,currentWeatherPic:null,currentTemp:null,currentTime:null,currentDescription:null,buttonDisabled:0}}},et=tt,rt=(0,u.A)(et,V,X,!1,null,"b7dea336",null),at=rt.exports,it={components:{FlowRateChart:B,TideTimes:U,SunMoon:Y,Weather:at},data(){return{}}},nt=it,st=(0,u.A)(nt,w,_,!1,null,null,null),ot=st.exports,lt=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("river-level",{attrs:{river:"blackwater",location:"fermoy",displayHeading:"Fermoy Bridge"}})],1),e(m.A,[e("river-level",{attrs:{river:"blackwater",location:"ballyduff",displayHeading:"BallyDuff"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"blackwater",location:"fermoy",displayLocation:"Fermoy Town"}})],1),e(m.A,[e("tide-times",{attrs:{location:"youghal",displayLocation:"Youghal"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"blackwater",location:"fermoy",displayHeading:"Fermoy Town"}})],1)],1)],1)],1)},ct=[],ut={components:{TideTimes:U,Weather:at,SunMoon:Y},data(){return{}}},dt=ut,ht=(0,u.A)(dt,lt,ct,!1,null,null,null),pt=ht.exports,vt=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("river-level",{attrs:{river:"bandon",location:"curranure",displayHeading:"Curranure Bridge"}})],1)],1),t._v("> "),e(y.A,[e(m.A,[e("river-level",{attrs:{river:"bandon",location:"bealaboy",displayHeading:"Bealaboy Bridge"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"bandon",location:"bandon",displayLocation:"Bandon Town"}})],1),e(m.A,[e("tide-times",{attrs:{location:"kinsale",displayLocation:"Kinsale"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"bandon",location:"bandon",displayHeading:"Bandon Town"}})],1)],1)],1)],1)},gt=[],mt={components:{TideTimes:U,Weather:at,SunMoon:Y},data(){return{}}},ft=mt,yt=(0,u.A)(ft,vt,gt,!1,null,null,null),wt=yt.exports,_t=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("river-level",{attrs:{river:"owenboy",location:"ballea",displayHeading:"Ballea Bridge"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"owenboy",location:"carrigaline",displayHeading:"Carrigaline Town"}})],1),e(m.A,[e("tide-times",{attrs:{location:"cork",displayLocation:"Cork Harbour"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"owenboy",location:"carrigaline",displayHeading:"Carrigaline"}})],1)],1)],1)],1)},At=[],bt={components:{TideTimes:U,Weather:at,SunMoon:Y},data(){return{}}},St=bt,Tt=(0,u.A)(St,_t,At,!1,null,null,null),xt=Tt.exports,Ct=function(){var t=this,e=t._self._c;return e("div",[e(f.A,{attrs:{fluid:"","fill-height":""}},[e(y.A,[e(m.A,[e("river-level",{attrs:{river:"suir",location:"new-bridge",displayHeading:"New Bridge, Golden, Tipperary"}})],1)],1),t._v("> "),e(y.A,[e(m.A,[e("river-level",{attrs:{river:"suir",location:"carrick-on-suir",displayHeading:"Carrick-On-Suir Tipperary"}})],1)],1),e(y.A,[e(m.A,[e("sun-moon",{attrs:{river:"suir",location:"cahir",displayLocation:"Cahir, Tipperary"}})],1)],1),e(y.A,[e(m.A,[e("weather",{attrs:{river:"suir",location:"cahir",displayHeading:"Cahir, Tipperary"}})],1)],1)],1)],1)},Dt=[],kt={components:{Weather:at,SunMoon:Y},data(){return{}}},Lt=kt,Rt=(0,u.A)(Lt,Ct,Dt,!1,null,null,null),Ht=Rt.exports,Ot=function(){var t=this,e=t._self._c;return e(f.A,[e("h1",{staticClass:"display-2"},[t._v("The River Guru")]),e("p",{staticClass:"pt-10"},[t._v(" This website collects river and weather information from different sources and presents it in one convenient place for fishermen and anyone interested in the conditions of their local rivers around Ireland. ")]),e("h3",{staticClass:"display-1"},[t._v("Data Feeds")]),e("p",{staticClass:"pt-5 pb-5"},[t._v(" Hydrometric information is collected from the ESB - "),e("a",{attrs:{href:"http://esbhydro.ie/"}},[t._v("here")])]),e("p",{staticClass:"pt-0"},[t._v(" Weather information in is collected from Met Éireann Weather Forecast "),e("a",{attrs:{href:"https://data.gov.ie/dataset/met-eireann-weather-forecast-api"}},[t._v("API")])]),e("p",{staticClass:"pt-5 pb-5"},[t._v(" Water levels are collected from the Office of Public Works public "),e("a",{attrs:{href:"https://data.gov.ie/dataset/opw-hydrometric-network-real-time-water-level-data"}},[t._v(" API ")])]),e("h3",{staticClass:"display-1"},[t._v("Disclaimer")]),e("p",{staticClass:"pt-5"},[t._v(" This site has user generated content. No guarantee can be made for the accuracy of completeness of content. Your use of this content is AT YOUR OWN RISK. River conditions (Such as Gauge Height, Flow Rate, Precipitation, and Temperature) can change without warning, and may be incorrect. ")]),e("h3",{staticClass:"display-1"},[t._v("Want To See More Rivers Or More Data ?")]),e("p",{staticClass:"pt-5"},[t._v(" If you'd like other irish rivers listed on this site or other data please contact me "),e("a",{attrs:{href:"https://form.jotform.com/210906718558362"}},[t._v(" Contact Us")])]),e("p",{staticClass:"pt-5"},[t._v(" tight lines folks ! - Aidan ")])])},Ft=[],$t={name:"AboutPage",components:{},data(){return{}}},Bt=$t,Wt=(0,u.A)(Bt,Ot,Ft,!1,null,null,null),It=Wt.exports;a.Ay.use(g.Ay);var Pt=new g.Ay({mode:"history",routes:[{path:"/reading",alias:"/readings",name:"readings"},{path:"/",name:"LeeDashboard",component:ot},{path:"blackwater",name:"BlackwaterDashboard",component:pt},{path:"bandon",name:"BandonDashboard",component:wt},{path:"suir",name:"SuirDashboard",component:Ht},{path:"owenboy",name:"OwenboyDashboard",component:xt},{path:"about",name:"AboutPage",component:It}]}),qt=r(301),Zt=r(2696),Mt=r(2367),Ut=function(){var t=this,e=t._self._c;return e(qt.A,{attrs:{dark:"",app:"",color:t.$root.themeColor}},[e(Mt.sw,[e(Zt.A,{on:{click:t.toggleNavigationBar}})],1)],1)},jt=[],Nt={name:"AppToolbar",data(){return{}},methods:{toggleNavigationBar(){const t=this;t.$emit("toggleNavigationBar")}}},zt=Nt,Et=(0,u.A)(zt,Ut,jt,!1,null,null,null),Qt=Et.exports,Gt=r(6930),Yt=r(2659),Kt=r(2232),Jt=r(198),Vt=function(){var t=this,e=t._self._c;return e(Kt.A,{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(Jt.A,{staticClass:"toolbar",attrs:{flat:"",dark:"",color:t.$root.themeColor}},[e("router-link",{attrs:{to:{name:"LeeDashboard"}}},[e("img",{attrs:{src:r(8891),width:"36px"}})]),e("router-link",{staticClass:"text",attrs:{to:{name:"LeeDashboard"}}},[t._v(" The River Guru ")])],1),e(J.A,[e(j.A,{on:{click:function(e){return t.changeRoute("LeeDashboard",1)}}},[e(Yt.A,[e(Gt.A,[t._v("mdi-waves")])],1),e(T.UZ,{class:[{active:1===t.selectedIndex},"item-title"]},[t._v("River Lee, Cork")])],1),e(j.A,{on:{click:function(e){return t.changeRoute("BandonDashboard",2)}}},[e(Yt.A,[e(Gt.A,[t._v("mdi-waves")])],1),e(T.UZ,{class:[{active:2===t.selectedIndex},"item-title"]},[t._v("River Bandon, Cork")])],1)],1),e(j.A,{on:{click:function(e){return t.changeRoute("BlackwaterDashboard",3)}}},[e(Yt.A,[e(Gt.A,[t._v("mdi-waves")])],1),e(T.UZ,{class:[{active:3===t.selectedIndex},"item-title"]},[t._v("River Blackwater, Cork")])],1),e(j.A,{on:{click:function(e){return t.changeRoute("OwenboyDashboard",4)}}},[e(Yt.A,[e(Gt.A,[t._v("mdi-waves")])],1),e(T.UZ,{class:[{active:4===t.selectedIndex},"item-title"]},[t._v("River Owenboy, Cork")])],1),e(j.A,{on:{click:function(e){return t.changeRoute("SuirDashboard",5)}}},[e(Yt.A,[e(Gt.A,[t._v("mdi-waves")])],1),e(T.UZ,{class:[{active:5===t.selectedIndex},"item-title"]},[t._v("River Suir, Tipperary")])],1),e(j.A,{on:{click:function(e){return t.changeRoute("AboutPage",6)}}},[e(Yt.A,[e(Gt.A,[t._v("mdi-information-outline")])],1),e(T.UZ,{class:[{active:6===t.selectedIndex},"item-title"]},[t._v("About")])],1)],1)},Xt=[],te=(r(4114),{name:"NavigationDrawer",props:{toggle:{type:Boolean,required:!0}},computed:{drawer:{get(){return this.toggle},set(t){this.$emit("update:toggle",t)}}},data(){return{selectedIndex:1}},methods:{changeRoute(t,e){const r=this;return r.selectedIndex=e,r.$router.push({name:t})}}}),ee=te,re=(0,u.A)(ee,Vt,Xt,!1,null,null,null),ae=re.exports,ie=function(){var t=this,e=t._self._c;return e(A.A,{staticClass:"mx-auto",attrs:{height:"100%",width:"100%"}},[e(b.OQ,{staticClass:"pa-3"},[e(b.ZR,{staticClass:"title text-center"},[t._v("Water Level "+t._s(t.displayHeading))]),e("p",{staticClass:"text-center display-1 text--primary"},[t._v(t._s(t.currentLevel)+" m")]),e("area-chart",{attrs:{data:t.chartData,colors:["cornflowerblue"]}})],1),e(S.A),e(T.w,{staticClass:"ma-3 caption",attrs:{align:"center"}},[e("p",[t._v(" river levels intrepreted from OPW data ")])])],1)},ne=[],se=(r(7588),{data(){return{chartData:[],currentLevel:0}},props:{river:{type:String,required:!1},location:{type:String,required:!1},displayHeading:{type:String,required:!1}},methods:{retrieveLevelReadings(){R.getLatestLevels(this.$props.river,this.$props.location).then((t=>{var e=this.getDailyFlowReadings(t.data);e.reverse(),this.chartData=e;var r=this.getHourlyFlowReadings(t.data),a=r[0][0][0],i=r[0][1][0];e.push([[a],[i]]),this.currentLevel=i})).catch((t=>{console.log("error "+t)}))},refreshList(){this.retrieveFlowReadings()},getDailyFlowReadings(t){var e=[];try{t.forEach((function(t){0!=t.mean&&e.push([[H.c9.fromISO(t.recordedAt).toLocaleString()],[t.mean]])}))}catch(r){console.log("error in getDailyFlowReadings"),console.log(r)}return e},getHourlyFlowReadings(t){var e=[];return t.forEach((function(t){0==t.mean&&e.push([[H.c9.fromISO(t.recordedAt).toLocaleString()],[t.value]])})),e}},mounted(){this.retrieveLevelReadings()}}),oe=se,le=(0,u.A)(oe,ie,ne,!1,null,null,null),ce=le.exports;function ue(t){t.component("app-toolbar",Qt),t.component("app-navigation",ae),t.component("tide-times",U),t.component("sun-moon",Y),t.component("weather-display",at),t.component("flow-rate-chart",B),t.component("river-level",ce)}var de=r(4050),he=r(2022),pe=(r(4301),r(4953));a.Ay.use(pe.A),a.Ay.config.productionTip=!1,a.Ay.use(de.A,{adapter:he["default"]}),a.Ay.use(v),ue(a.Ay),new a.Ay({router:Pt,vuetify:v,render:t=>t(h)}).$mount("#app")},8891:function(t,e,r){t.exports=r.p+"img/guru.f0d8cce4.png"}},e={};function r(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,a,i,n){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],n=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(o=!1,n<s&&(s=n));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,i,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,s=a[0],o=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(l)var u=l(r)}for(e&&e(a);c<s.length;c++)n=s[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},a=self["webpackChunkriver_guru_client"]=self["webpackChunkriver_guru_client"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(2634)}));a=r.O(a)})();
//# sourceMappingURL=app.f4b2676f.js.map
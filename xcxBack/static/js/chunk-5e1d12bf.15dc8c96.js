(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e1d12bf"],{"8a9b":function(t,e,a){"use strict";a("a9cc")},9901:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"chartEl",staticStyle:{height:"100%"}})},s=[],r=a("22b4"),n=a("3b8f"),o=a("49bb"),c=a("4cb5"),l=a("3620"),h=a("9394"),d=a("2da7"),p=a("4b2a"),u=a("3094"),m=a("ff32"),f=a("f95e");r["a"]([o["a"],c["a"],l["a"],h["a"],d["a"],p["a"],u["a"],m["a"],f["a"]]);var v=n,b={name:"ChartBlock",data:function(){return{chart:null,objectRef:null}},watch:{option:{handler:function(t,e){this.chart.setOption(t)},deep:!0}},mounted:function(){var t=this;this.objectRef=document.getElementsByClassName("objectRef")[0].contentDocument.defaultView,this.chart=v.init(this.$refs.chartEl),this.chart._resize=this.throttle((function(){t.chart.resize()}),500),this.objectRef.addEventListener("resize",this.chart._resize)},methods:{setOption:function(t){this.chart.on("magictypechanged",(function(t){"line"==t.currentType&&this&&this.setOption({xAxis:{boundaryGap:!0}})})),this.chart&&this.chart.setOption(t)},throttle:function(t,e,a){var i,s,r,n=0;a||(a={});var o=function(){n=!1===a.leading?0:(new Date).getTime(),i=null,t.apply(s,r),i||(s=r=null)},c=function(){var c=(new Date).getTime();n||!1!==a.leading||(n=c);var l=e-(c-n);s=this,r=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),n=c,t.apply(s,r),i||(s=r=null)):i||!1===a.trailing||(i=setTimeout(o,l))};return c}},beforeDestroy:function(){this.objectRef.removeEventListener("resize",this.chart._resize)}},g=b,y=a("2877"),x=Object(y["a"])(g,i,s,!1,null,null,null);e["a"]=x.exports},a9cc:function(t,e,a){},e11c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hhy-container"},[a("object",{staticClass:"objectRef",attrs:{tabindex:"-1",type:"text/html","aria-hidden":"true",data:"about:blank"}}),a("div",{staticClass:"card-wrap"},[a("el-card",{staticClass:"card-item"},[a("div",{staticClass:"card-detial"},[a("p",[t._v("订单数/成交额（日）（单/元）")]),a("p",[t._v("0/0")]),a("p",[t._v("日同比 0%")]),a("el-tag",{staticClass:"tag",attrs:{type:"primary"}},[t._v("日")])],1),a("p",{staticClass:"card-bottom"},[t._v("昨日新增 0 单")])]),a("el-card",{staticClass:"card-item"},[a("div",{staticClass:"card-detial"},[a("p",[t._v("订单数/成交额（月）（单/元）")]),a("p",[t._v("16/190746.3")]),a("p",[t._v("月同比 -75.76% "),a("i",{staticClass:"bottom"})]),a("el-tag",{staticClass:"tag",attrs:{type:"success"}},[t._v("月")])],1),a("p",{staticClass:"card-bottom"},[t._v("上月新增 66 单")])]),a("el-card",{staticClass:"card-item"},[a("div",{staticClass:"card-detial"},[a("p",[t._v("订单数/成交额（年）（单/元）")]),a("p",[t._v("233/3779387.03")]),a("p",[t._v("年同比 3228.57% "),a("i",{staticClass:"top"})]),a("el-tag",{staticClass:"tag",attrs:{type:"warning"}},[t._v("年")])],1),a("p",{staticClass:"card-bottom"},[t._v("去年新增 7 单")])])],1),a("el-card",{staticClass:"echart"},[a("el-form",{attrs:{inline:"",model:t.searchForm}},[a("el-form-item",[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.searchForm.date,callback:function(e){t.$set(t.searchForm,"date",e)},expression:"searchForm.date"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("查询")])],1)],1)],1),a("div",{staticClass:"echart-content"},[a("div",{staticClass:"echart-item"},[a("el-card",[a("div",{staticClass:"head",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("订单销售曲线图")])]),a("div",{staticClass:"cont"},[a("echarts",{ref:"echarts1"})],1)])],1),a("div",{staticClass:"echart-item"},[a("el-card",[a("div",{staticClass:"head",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("渠道分析")])]),a("div",{staticClass:"cont"},[a("echarts",{ref:"echarts2"})],1)])],1)]),a("div",{staticClass:"echart-content"},[a("el-card",{staticClass:"echart-footItem"},[a("div",{staticClass:"head",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("类目销售柱状图")])]),a("div",{staticClass:"cont"},[a("echarts",{ref:"echarts3"})],1)]),a("el-card",{staticClass:"echart-footItem"},[a("div",{staticClass:"head",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("预约转化率")])]),a("div",{staticClass:"cont"},[a("div",{staticClass:"zhl"},[a("el-progress",{attrs:{type:"circle",percentage:48}}),a("p",[t._v("总流量")]),a("p",[t._v("2")])],1)])])],1)],1)},s=[],r=a("9901"),n={name:"DataCenter",components:{echarts:r["a"]},data:function(){return{searchForm:{date:""},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]}}},mounted:function(){this.initEcharts1(),this.initEcharts2(),this.initEcharts3(),this.initEcharts4()},methods:{initEcharts1:function(){var t={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}},top:24,right:50},legend:{data:["单量","金额"],top:30,left:50},xAxis:{type:"category",boundaryGap:!0,data:["2023-06-01","2023-06-02","2023-06-03","2023-06-04","2023-06-05"]},yAxis:[{type:"value",splitNumber:5,axisLabel:{show:!0,formatter:function(t,e){return t+"单"}}},{type:"value",alignTicks:!0,axisLabel:{show:!0,formatter:function(t,e){return"￥"+t}}}],grid:{top:100,left:50,right:50,bottom:15,containLabel:!0},series:[{name:"单量",yAxisIndex:0,data:[10,15,11,13,40],type:"line",tooltip:{valueFormatter:function(t){return t+" 单"}}},{name:"金额",yAxisIndex:1,data:[1e3,800,900,680,770],type:"line",tooltip:{valueFormatter:function(t){return"￥ "+t}}}]};this.$refs.echarts1.setOption(t)},initEcharts2:function(){var t={title:[{text:"",left:"center",textStyle:{fontSize:24,lineHeight:24}},{subtext:"渠道收入",left:"25%",bottom:"-5%",textAlign:"center",subtextStyle:{color:"#464646",fontSize:16,lineHeight:45,fontWeight:"bolder"}},{subtext:"渠道客户",right:"15%",bottom:"-5%",textAlign:"center",subtextStyle:{color:"#464646",fontSize:16,lineHeight:45,fontWeight:"bolder"}}],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",top:"0%",left:"0%"},series:[{name:"渠道收入",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!0,formatter:"{d}%"},labelLine:{show:!0,smooth:!0},center:["50%","50%"],left:0,right:"50%",top:0,bottom:0,data:[{value:1048,name:"其他"},{value:735,name:"美团"},{value:580,name:"百度"},{value:484,name:"快手"},{value:300,name:"抖音"}]},{name:"渠道客户",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!0,formatter:"{d}%"},labelLine:{show:!0,smooth:!0},center:["50%","50%"],right:0,left:"50%",top:0,bottom:0,data:[{value:848,name:"其他"},{value:1999,name:"美团"},{value:1e3,name:"百度"},{value:1184,name:"快手"},{value:900,name:"抖音"}]}]};this.$refs.echarts2.setOption(t)},initEcharts3:function(){var t={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}},top:24,right:50},legend:{data:["订单数","金额"],top:30,left:50},xAxis:{type:"category",boundaryGap:!0,data:["定制收入","租赁收入","成品收入"]},yAxis:[{type:"value",splitNumber:5,axisLabel:{show:!0,formatter:function(t,e){return t+"单"}}},{type:"value",alignTicks:!0,axisLabel:{show:!0,formatter:function(t,e){return"￥"+t}}}],grid:{top:100,left:50,right:50,bottom:15,containLabel:!0},series:[{name:"订单数",yAxisIndex:0,data:[10,18,15],type:"bar",tooltip:{valueFormatter:function(t){return"￥ "+t}}},{name:"金额",yAxisIndex:1,data:[8e3,12500,1e4],type:"bar",tooltip:{valueFormatter:function(t){return t+" 单"}}}]};this.$refs.echarts3.setOption(t)},initEcharts4:function(){}}},o=n,c=(a("8a9b"),a("2877")),l=Object(c["a"])(o,i,s,!1,null,"303c1494",null);e["default"]=l.exports}}]);
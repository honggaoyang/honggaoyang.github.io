(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65c0a6f8"],{"1a85":function(e,t,a){},"274e":function(e,t,a){"use strict";a("1a85")},a72d:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hhy-container"},[a("PageWrap",{scopedSlots:e._u([{key:"pageTop",fn:function(){return[a("el-form",{ref:"searchForm",staticClass:"hhy-card hhy-topSearch-box",attrs:{inline:"",model:e.searchForm}},[a("el-form-item",{attrs:{label:"起止时间",prop:"OrderTime"}},[a("el-date-picker",{staticStyle:{width:"250px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchForm.OrderTime,callback:function(t){e.$set(e.searchForm,"OrderTime",t)},expression:"searchForm.OrderTime"}})],1),a("el-form-item",{attrs:{label:"结算状态",prop:"SettlementStatus"}},[a("el-select",{attrs:{placeholder:"结算状态"},model:{value:e.searchForm.SettlementStatus,callback:function(t){e.$set(e.searchForm,"SettlementStatus",t)},expression:"searchForm.SettlementStatus"}},e._l(e.SettlementStatusList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"定制顾问",prop:"CustomizedConsultant"}},[a("el-select",{attrs:{placeholder:"定制顾问"},model:{value:e.searchForm.CustomizedConsultant,callback:function(t){e.$set(e.searchForm,"CustomizedConsultant",t)},expression:"searchForm.CustomizedConsultant"}},e._l(e.CustomizedConsultantList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"制衣单号",prop:"OrderNumber"}},[a("el-input",{attrs:{clearable:"",placeholder:"制衣单号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initData(t)}},model:{value:e.searchForm.OrderNumber,callback:function(t){e.$set(e.searchForm,"OrderNumber",t)},expression:"searchForm.OrderNumber"}})],1),a("el-form-item",{attrs:{label:"制作内容",prop:"ProductContents"}},[a("el-select",{attrs:{placeholder:"制作内容"},model:{value:e.searchForm.ProductContents,callback:function(t){e.$set(e.searchForm,"ProductContents",t)},expression:"searchForm.ProductContents"}},e._l(e.ProductContentsList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"客户名称",prop:"CustomerName"}},[a("el-input",{attrs:{clearable:"",placeholder:"客户名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initData(t)}},model:{value:e.searchForm.CustomerName,callback:function(t){e.$set(e.searchForm,"CustomerName",t)},expression:"searchForm.CustomerName"}})],1),a("el-form-item",{attrs:{label:"门店",prop:"Store"}},[a("el-select",{attrs:{placeholder:"门店"},model:{value:e.searchForm.Store,callback:function(t){e.$set(e.searchForm,"Store",t)},expression:"searchForm.Store"}},e._l(e.StoreList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"工厂",prop:"Factory"}},[a("el-select",{attrs:{placeholder:"工厂"},model:{value:e.searchForm.Factory,callback:function(t){e.$set(e.searchForm,"Factory",t)},expression:"searchForm.Factory"}},e._l(e.FactoryList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"面料商",prop:"FabricMerchant"}},[a("el-select",{attrs:{placeholder:"面料商"},model:{value:e.searchForm.FabricMerchant,callback:function(t){e.$set(e.searchForm,"FabricMerchant",t)},expression:"searchForm.FabricMerchant"}},e._l(e.FabricMerchantList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择排序"}},[a("el-form-item",{staticStyle:{margin:"0"},attrs:{prop:"sort"}},[a("el-select",{model:{value:e.searchForm.sort,callback:function(t){e.$set(e.searchForm,"sort",t)},expression:"searchForm.sort"}},e._l(e.sortList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{staticStyle:{margin:"0"},attrs:{prop:"sortType"}},[a("el-select",{staticClass:"w80",model:{value:e.searchForm.sortType,callback:function(t){e.$set(e.searchForm,"sortType",t)},expression:"searchForm.sortType"}},e._l(e.sortTypeList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),a("el-form-item",[a("el-button",{staticClass:"hhy-search-btn",attrs:{type:"primary",round:""},on:{click:e.initData}},[e._v("查询")]),a("el-button",{staticClass:"hhy-reset-btn",attrs:{type:"danger",round:""},on:{click:function(t){return e.resetSearchForm("searchForm")}}},[e._v("重置")])],1)],1)]},proxy:!0},{key:"tableMenuBtn",fn:function(){return[a("div",{staticClass:"tableMenuBtn"},[a("div",{staticClass:"total"},[a("span",[e._v("总单量: 120")]),a("span",[e._v("总结算: ¥21237.25")]),a("span",[e._v("已结算: ¥123121.05")]),a("span",[e._v("未结算: ¥33316.20")])]),a("div",[a("el-button",{attrs:{type:"primary",loading:e.downloadLoading,icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v("导出 Excel")])],1)])]},proxy:!0},{key:"default",fn:function(t){return[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"hhy-table",attrs:{height:t.contentHeight,data:e.tableDataList,"element-loading-text":"加载中...",stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",index:e.indexMethod}}),a("el-table-column",{attrs:{label:"制衣单号","min-width":"250","show-overflow-tooltip":"",prop:"a"}}),a("el-table-column",{attrs:{label:"制作工厂","min-width":"120","show-overflow-tooltip":"",prop:"b"}}),a("el-table-column",{attrs:{label:"下单方","min-width":"120","show-overflow-tooltip":"",prop:"c"}}),a("el-table-column",{attrs:{label:"顾客","min-width":"120","show-overflow-tooltip":"",prop:"d"}}),a("el-table-column",{attrs:{label:"品牌下单时间","min-width":"120","show-overflow-tooltip":"",prop:"e"}}),a("el-table-column",{attrs:{label:"面料发货时间","min-width":"120","show-overflow-tooltip":"",prop:"f"}}),a("el-table-column",{attrs:{label:"门店签收时间","min-width":"120","show-overflow-tooltip":"",prop:"g"}}),a("el-table-column",{attrs:{label:"制作内容","min-width":"120","show-overflow-tooltip":"",prop:"h"}}),a("el-table-column",{attrs:{label:"面料品牌","min-width":"120","show-overflow-tooltip":"",prop:"i"}}),a("el-table-column",{attrs:{label:"面料货号","min-width":"120","show-overflow-tooltip":"",prop:"j"}}),a("el-table-column",{attrs:{label:"制作工艺","min-width":"120","show-overflow-tooltip":"",prop:"k"}}),a("el-table-column",{attrs:{label:"制作工费","min-width":"120","show-overflow-tooltip":"",prop:"l"}}),a("el-table-column",{attrs:{label:"高级工艺项","min-width":"120","show-overflow-tooltip":"",prop:"m"}}),a("el-table-column",{attrs:{label:"高级工艺费","min-width":"120","show-overflow-tooltip":"",prop:"n"}}),a("el-table-column",{attrs:{label:"流程修改项","min-width":"120","show-overflow-tooltip":"",prop:"o"}}),a("el-table-column",{attrs:{label:"流程修改费","min-width":"120","show-overflow-tooltip":"",prop:"p"}}),a("el-table-column",{attrs:{label:"制衣单状态","min-width":"120",fixed:"right",prop:"q"}}),a("el-table-column",{attrs:{label:"结算状态","min-width":"100",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[a("el-tag",{attrs:{effect:"dark",type:e._f("statusFilter")(o.r)}},[e._v(e._s(o.r))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"总结算费","min-width":"100",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return["待结算"==o.r?a("el-link",{attrs:{type:"danger"},on:{click:function(t){return e.handleSettlement(o)}}},[e._v(e._s(o.s))]):a("span",[e._v(e._s(o.s))])]}}],null,!0)})],1)]}},{key:"tablePagination",fn:function(){return[a("myPagination",{attrs:{pager:e.pager},on:{query:e.initData}})]},proxy:!0}])}),a("el-dialog",{attrs:{title:"结算",visible:e.settlementDialog,width:"30%"},on:{"update:visible":function(t){e.settlementDialog=t},closed:e.closeSettlementDialog}},[a("div",[a("div",[a("span",[e._v("这是一段信息")])])]),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.settlementDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.settlementDialog=!1}}},[e._v("确 定")])],1)])],1)},l=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),{name:"FactorySettlement",data:function(){return{SettlementStatusList:[{id:1,name:"全部"},{id:2,name:"已结算"},{id:3,name:"待结算"}],CustomizedConsultantList:[{id:1,name:"全部"},{id:2,name:"张无忌"}],ProductContentsList:[{id:1,name:"全部"},{id:2,name:"定制"}],StoreList:[{id:1,name:"全部"},{id:2,name:"北京店"}],FactoryList:[{id:1,name:"全部"},{id:2,name:"北京工厂店"}],FabricMerchantList:[{id:1,name:"全部"},{id:2,name:"北京面料"}],sortList:[{id:1,name:"下单日期"},{id:2,name:"要求货期"}],sortTypeList:[{id:1,name:"顺序"},{id:2,name:"倒序"}],searchForm:{OrderTime:"",SettlementStatus:1,CustomizedConsultant:1,OrderNumber:"",ProductContents:1,CustomerName:"",Store:1,Factory:1,FabricMerchant:1,sort:1,sortType:1},downloadLoading:!1,tableLoading:!1,tableDataList:[],pager:{count:100,page:1,rows:15,checkNum:0},settlementDialog:!1}},filters:{statusFilter:function(e){var t={"已结算":"success","待结算":"danger"};return t[e]}},created:function(){this.initData()},methods:{resetSearchForm:function(e){this.$refs[e].resetFields()},initData:function(){var e=this;this.tableLoading=!0,setTimeout((function(){e.tableDataList=[{id:1,a:"WZNJ09883230714135239-1",b:"北京工厂",c:"北京店",d:"Jerry",e:"2023-07-12",f:"2023-07-12",g:"",h:"西服",i:"世佳宝",j:"NB123",k:"粘合衬",l:"¥1000.00",m:"",n:"¥0.00",o:"",p:"",q:"制造中",r:"已结算",s:"￥200.00"},{id:2,a:"WZNJ09883230714135239-1",b:"北京工厂",c:"北京店",d:"Jerry",e:"2023-07-12",f:"2023-07-12",g:"",h:"西服",i:"世佳宝",j:"NB123",k:"粘合衬",l:"¥1000.00",m:"",n:"¥0.00",o:"",p:"",q:"制造中",r:"待结算",s:"￥200.00"}],e.tableLoading=!1}),500)},indexMethod:function(e){return(this.pager.page-1)*this.pager.rows+e+1},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-6e83591c"),a.e("chunk-433e0a57"),a.e("chunk-ed7777ae")]).then(a.bind(null,"8530")).then((function(t){var a=["序号","制衣单号","制作工厂","下单方","顾客","品牌下单时间","面料发货时间","门店签收时间","制作内容","面料品牌","面料货号","制作工艺","制作工费","高级工艺项","高级工艺费","流程修改项","流程修改费","制衣单状态","结算状态","总结算费"],o=["id","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s"],l=e.tableDataList,r=e.formatJson(o,l);t.export_json_to_excel({header:a,data:r,filename:"工厂结算",autoWidth:!0,bookType:"xlsx"}),e.downloadLoading=!1})).catch((function(t){e.$message.error("导出Excel失败"),e.downloadLoading=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},handleSettlement:function(e){this.settlementDialog=!0},closeSettlementDialog:function(){}}}),n=r,i=(a("274e"),a("2877")),s=Object(i["a"])(n,o,l,!1,null,"450b4706",null);t["default"]=s.exports}}]);
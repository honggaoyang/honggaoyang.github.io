(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66b5eac0"],{"21be":function(e,t,a){"use strict";a("6aea")},"6aea":function(e,t,a){},"84a3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hhy-container"},[a("PageWrap",{scopedSlots:e._u([{key:"pageTop",fn:function(){return[a("el-form",{ref:"searchForm",staticClass:"hhy-card hhy-topSearch-box",attrs:{inline:"",model:e.searchForm}},[a("el-form-item",{attrs:{label:"门店",prop:"store"}},[a("el-select",{attrs:{placeholder:"门店"},model:{value:e.searchForm.store,callback:function(t){e.$set(e.searchForm,"store",t)},expression:"searchForm.store"}},e._l(e.storeList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"起止时间",prop:"date"}},[a("el-date-picker",{staticStyle:{width:"250px"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchForm.date,callback:function(t){e.$set(e.searchForm,"date",t)},expression:"searchForm.date"}})],1),a("el-form-item",{attrs:{label:"单号",prop:"orderNumber"}},[a("el-input",{attrs:{clearable:"",placeholder:"单号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initData(t)}},model:{value:e.searchForm.orderNumber,callback:function(t){e.$set(e.searchForm,"orderNumber",t)},expression:"searchForm.orderNumber"}})],1),a("el-form-item",[a("el-button",{staticClass:"hhy-search-btn",attrs:{type:"primary",round:""},on:{click:e.initData}},[e._v("查询")]),a("el-button",{staticClass:"hhy-reset-btn",attrs:{type:"danger",round:""},on:{click:function(t){return e.resetSearchForm("searchForm")}}},[e._v("重置")])],1)],1)]},proxy:!0},{key:"tableMenuBtn",fn:function(){return[a("div",{staticClass:"tableMenuBtn",staticStyle:{"padding-bottom":"5px"}},[a("el-tabs",{on:{"tab-click":e.handleMenuClick},model:{value:e.activeMenuName,callback:function(t){e.activeMenuName=t},expression:"activeMenuName"}},[a("el-tab-pane",{attrs:{label:"全部",name:"全部"}}),a("el-tab-pane",{attrs:{label:"等待审批",name:"等待审批"}}),a("el-tab-pane",{attrs:{label:"驳回",name:"驳回"}}),a("el-tab-pane",{attrs:{label:"处理中",name:"处理中"}}),a("el-tab-pane",{attrs:{label:"完成",name:"完成"}}),a("el-tab-pane",{attrs:{label:"已取消",name:"已取消"}})],1)],1)]},proxy:!0},{key:"default",fn:function(t){return[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"hhy-table",attrs:{height:t.contentHeight,data:e.tableDataList,"element-loading-text":"加载中...",stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"sub_table_wrap"},[a("el-table",{attrs:{data:t.row.datas,stripe:"","header-cell-style":e.headerCellStyle,"cell-style":e.cellStyle,"row-class-name":e.rowClassName,border:""},on:{"expand-change":e.expandChange}},[a("el-table-column",{attrs:{prop:"applyNo",label:"订单商品"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.openShippedDetail(r)}}},[e._v(e._s(r.orderCount)+"件商品")])]}}],null,!0)}),a("el-table-column",{attrs:{prop:"orderStatus",label:"状态"}}),a("el-table-column",{attrs:{prop:"sendDate",label:"发货时间"}}),a("el-table-column",{attrs:{prop:"sendWarehouse",label:"发货仓"}}),a("el-table-column",{attrs:{prop:"applyNo","show-overflow-tooltip":"",label:"物流"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("div",[e._v(e._s(r.ems))]),a("div",[a("el-link",{attrs:{target:"_blank",href:"https://www.baidu.com/s?wd="+r.orderNo,type:"primary"}},[e._v("单号："+e._s(r.orderNo))])],1)]}}],null,!0)}),a("el-table-column",{attrs:{prop:"applyNo",label:"收货入库"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("div",[e._v("收货人："+e._s(r.shName))]),a("div",[e._v("收货时间："+e._s(r.date))])]}}],null,!0)})],1)],1)]}}],null,!0)}),a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",index:e.indexMethod}}),a("el-table-column",{attrs:{label:"订单","min-width":"150","show-overflow-tooltip":"",prop:"orderNo"}}),a("el-table-column",{attrs:{label:"门店","min-width":"120","show-overflow-tooltip":"",prop:"store"}}),a("el-table-column",{attrs:{label:"订单商品","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.openPurchaseDetail(r)}}},[e._v("共"+e._s(r.optionNum)+"项")]),e._v(" "),a("el-tag",{attrs:{type:e._f("statusFilter")(r.status)}},[e._v(e._s(r.status))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"订单状态","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-tag",{attrs:{effect:"dark",type:e._f("orderStatusFilter")(r.orderStatus)}},[e._v(e._s(r.orderStatus))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"订单金额","min-width":"120",prop:"amount"}}),a("el-table-column",{attrs:{label:"发货次数","min-width":"120",prop:"sendCount"}}),a("el-table-column",{attrs:{label:"创建时间","min-width":"150",prop:"createDate"}}),a("el-table-column",{attrs:{label:"操作",width:"130",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{icon:"el-icon-document",type:"primary"},on:{click:function(t){return e.overOrder(r)}}},[e._v("完成订单")])]}}],null,!0)})],1)]}},{key:"tablePagination",fn:function(){return[a("myPagination",{attrs:{pager:e.pager},on:{query:e.initData}})]},proxy:!0}])}),a("el-dialog",{attrs:{title:"查看采购单",top:"8vh",visible:e.searchPurchaseOrderDialog.visible,width:"65%"},on:{"update:visible":function(t){return e.$set(e.searchPurchaseOrderDialog,"visible",t)},closed:e.closeSearchPurchaseOrderDialog}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.searchPurchaseOrderDialog.tableLoading,expression:"searchPurchaseOrderDialog.tableLoading"}],staticClass:"hhy-table",attrs:{"element-loading-text":"加载中...",height:"400",data:e.searchPurchaseOrderDialog.tableData,stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),a("el-table-column",{attrs:{label:"采购商品","show-overflow-tooltip":"",prop:"productName"}}),a("el-table-column",{attrs:{label:"规格","show-overflow-tooltip":"",prop:"specifications"}}),a("el-table-column",{attrs:{label:"货号","show-overflow-tooltip":"",prop:"ardNo"}}),a("el-table-column",{attrs:{label:"数量",prop:"number"}}),a("el-table-column",{attrs:{label:"可用库存",prop:"availableStock"}}),a("el-table-column",{attrs:{label:"已发货",prop:"shipped"}}),a("el-table-column",{attrs:{label:"还需发货",prop:"needShipped"}})],1)],1),a("el-dialog",{attrs:{title:"查看发货详情",top:"8vh",visible:e.searchShippedDialog.visible,width:"65%"},on:{"update:visible":function(t){return e.$set(e.searchShippedDialog,"visible",t)},closed:e.closeSearchShippedDialog}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.searchShippedDialog.tableLoading,expression:"searchShippedDialog.tableLoading"}],staticClass:"hhy-table",attrs:{"element-loading-text":"加载中...",height:"400",data:e.searchShippedDialog.tableData,stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),a("el-table-column",{attrs:{label:"采购商品","show-overflow-tooltip":"",prop:"productName"}}),a("el-table-column",{attrs:{label:"规格","show-overflow-tooltip":"",prop:"specifications"}}),a("el-table-column",{attrs:{label:"货号","show-overflow-tooltip":"",prop:"ardNo"}}),a("el-table-column",{attrs:{label:"采购价",prop:"purchasePrice"}}),a("el-table-column",{attrs:{label:"采购数量",prop:"purchaseNumber"}}),a("el-table-column",{attrs:{label:"发货数量",prop:"shipmentQuantity"}})],1)],1)],1)},o=[],l=(a("d3b7"),{name:"PurchaseOrder",data:function(){return{storeList:[{id:1,name:"全部"},{id:2,name:"北京店"}],searchForm:{store:1,date:"",orderNumber:""},activeMenuName:"全部",tableLoading:!1,tableDataList:[],pager:{count:100,page:1,rows:15,checkNum:0},searchPurchaseOrderDialog:{visible:!1,tableData:[],tableLoading:!1},searchShippedDialog:{visible:!1,tableData:[],tableLoading:!1}}},filters:{statusFilter:function(e){var t={"已发完":"success","未发货":"danger"};return t[e]},orderStatusFilter:function(e){var t={"等待审批":"primary","驳回":"danger","处理中":"warning","完成":"success","已取消":"info"};return t[e]}},created:function(){this.initData()},methods:{resetSearchForm:function(e){this.$refs[e].resetFields()},handleMenuClick:function(e,t){this.tableDataList=[],this.initData()},initData:function(){var e=this;this.tableLoading=!0,setTimeout((function(){var t=[];"全部"==e.activeMenuName?t=[{id:1,orderNo:"00059230701161837",store:"北京店",optionNum:1,status:"已发完",orderStatus:"处理中",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[{id:1,orderCount:"6",orderStatus:"已完成",sendDate:"2023-05-05 15:25",sendWarehouse:"邯郸仓库",ems:"京东快递",orderNo:"JDKA00299843173",shName:"张三疯",date:"2023-07-07"}]},{id:2,orderNo:"00059230701161837",store:"北京店",optionNum:1,status:"已发完",orderStatus:"等待审批",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[{id:1,orderCount:"6",orderStatus:"已完成",sendDate:"2023-05-05 15:25",sendWarehouse:"邯郸仓库",ems:"京东快递",orderNo:"JDKA00299843173",shName:"张三疯",date:"2023-07-07"}]},{id:3,orderNo:"00059230701161837",store:"北京店",optionNum:1,status:"未发货",orderStatus:"驳回",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[]},{id:4,orderNo:"00059230701161837",store:"北京店",optionNum:1,status:"未发货",orderStatus:"完成",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[]},{id:5,orderNo:"00059230701161837",store:"北京店",optionNum:1,status:"未发货",orderStatus:"已取消",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[]}]:"等待审批"==e.activeMenuName?t=[{id:1,orderNo:"00059230701161837",store:"北京店2",optionNum:1,status:"已发完",orderStatus:"等待审批",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[{id:1,orderCount:"6",orderStatus:"已完成",sendDate:"2023-05-05 15:25",sendWarehouse:"邯郸仓库",ems:"京东快递",orderNo:"JDKA00299843173",shName:"张三疯",date:"2023-07-07"}]}]:"驳回"==e.activeMenuName?t=[{id:1,orderNo:"00059230701161837",store:"北京店3",optionNum:1,status:"已发完",orderStatus:"驳回",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[{id:1,orderCount:"6",orderStatus:"已完成",sendDate:"2023-05-05 15:25",sendWarehouse:"邯郸仓库",ems:"京东快递",orderNo:"JDKA00299843173",shName:"张三疯",date:"2023-07-07"}]}]:"处理中"==e.activeMenuName?t=[{id:1,orderNo:"00059230701161837",store:"北京店4",optionNum:1,status:"已发完",orderStatus:"处理中",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[{id:1,orderCount:"6",orderStatus:"已完成",sendDate:"2023-05-05 15:25",sendWarehouse:"邯郸仓库",ems:"京东快递",orderNo:"JDKA00299843173",shName:"张三疯",date:"2023-07-07"}]}]:"完成"==e.activeMenuName?t=[{id:1,orderNo:"00059230701161837",store:"北京店5",optionNum:1,status:"已发完",orderStatus:"完成",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[{id:1,orderCount:"6",orderStatus:"已完成",sendDate:"2023-05-05 15:25",sendWarehouse:"邯郸仓库",ems:"京东快递",orderNo:"JDKA00299843173",shName:"张三疯",date:"2023-07-07"}]}]:"已取消"==e.activeMenuName&&(t=[{id:1,orderNo:"00059230701161837",store:"北京店6",optionNum:1,status:"已发完",orderStatus:"已取消",amount:"200.00",sendCount:"2次",createDate:"2023-07-01 16:18:37",datas:[{id:1,orderCount:"6",orderStatus:"已完成",sendDate:"2023-05-05 15:25",sendWarehouse:"邯郸仓库",ems:"京东快递",orderNo:"JDKA00299843173",shName:"张三疯",date:"2023-07-07"}]}]),e.tableDataList=t,e.tableLoading=!1}),500)},indexMethod:function(e){return(this.pager.page-1)*this.pager.rows+e+1},headerCellStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return{textAlign:"center",background:"#607D8B",color:"#FFFFFF"}},cellStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return{textAlign:"center"}},rowClassName:function(e){var t=e.row,a=(e.rowIndex,t),r=[];return a.datas&&a.datas.length>0?(r.push("row-expand-has"),r):(r.push("row-expand-unhas"),r)},expandChange:function(e,t){var a=t.some((function(t){return t.id===e.id}));console.log("isExpend",a)},openPurchaseDetail:function(e){var t=this;this.searchPurchaseOrderDialog.visible=!0,this.searchPurchaseOrderDialog.tableLoading=!0,setTimeout((function(){t.searchPurchaseOrderDialog.tableData=[{id:1,productName:"POLO衫经典款",specifications:"黄色 41",ardNo:"jdk01-01",number:1,availableStock:"",shipped:1,needShipped:0}],t.searchPurchaseOrderDialog.tableLoading=!1}),500)},closeSearchPurchaseOrderDialog:function(){this.searchPurchaseOrderDialog.tableData=[]},openShippedDetail:function(e){var t=this;this.searchShippedDialog.visible=!0,this.searchShippedDialog.tableLoading=!0,setTimeout((function(){t.searchShippedDialog.tableData=[{id:1,productName:"POLO衫经典款",specifications:"黄色 41",ardNo:"jdk01-01",purchasePrice:99.88,purchaseNumber:1,shipmentQuantity:1},{id:2,productName:"POLO衫经典款",specifications:"黄色 42",ardNo:"jdk01-01",purchasePrice:99.88,purchaseNumber:1,shipmentQuantity:1},{id:3,productName:"POLO衫经典款",specifications:"黄色 43",ardNo:"jdk01-01",purchasePrice:99.88,purchaseNumber:1,shipmentQuantity:1},{id:4,productName:"POLO衫经典款",specifications:"黄色 44",ardNo:"jdk01-01",purchasePrice:99.88,purchaseNumber:1,shipmentQuantity:1},{id:5,productName:"POLO衫经典款",specifications:"黄色 45",ardNo:"jdk01-01",purchasePrice:99.88,purchaseNumber:1,shipmentQuantity:1},{id:6,productName:"POLO衫经典款",specifications:"黄色 46",ardNo:"jdk01-01",purchasePrice:99.88,purchaseNumber:1,shipmentQuantity:1}],t.searchShippedDialog.tableLoading=!1}),500)},closeSearchShippedDialog:function(){this.searchShippedDialog.tableData=[]},overOrder:function(e){var t=this;this.$confirm("确定采购单已处理完成吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message.success("操作成功"),t.initData()})).catch((function(){}))}}}),s=l,n=(a("21be"),a("2877")),i=Object(n["a"])(s,r,o,!1,null,"97307a66",null);t["default"]=i.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e97f4ca"],{"9fab":function(e,a,t){"use strict";t("c51f")},c51f:function(e,a,t){},ea7b:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"hhy-container"},[t("PageWrap",{scopedSlots:e._u([{key:"pageTop",fn:function(){return[t("el-form",{ref:"searchForm",staticClass:"hhy-card hhy-topSearch-box",attrs:{inline:"",model:e.searchForm}},[t("el-form-item",{attrs:{label:"面料商",prop:"name"}},[t("el-input",{attrs:{clearable:"",placeholder:"输入面料商"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.initData(a)}},model:{value:e.searchForm.name,callback:function(a){e.$set(e.searchForm,"name",a)},expression:"searchForm.name"}})],1),t("el-form-item",{attrs:{label:"面料品牌",prop:"brand"}},[t("el-input",{attrs:{clearable:"",placeholder:"输入面料品牌"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.initData(a)}},model:{value:e.searchForm.brand,callback:function(a){e.$set(e.searchForm,"brand",a)},expression:"searchForm.brand"}})],1),t("el-form-item",[t("el-button",{staticClass:"hhy-search-btn",attrs:{type:"primary",round:""},on:{click:e.initData}},[e._v("查询")]),t("el-button",{staticClass:"hhy-reset-btn",attrs:{type:"danger",round:""},on:{click:function(a){return e.resetSearchForm("searchForm")}}},[e._v("重置")])],1)],1)]},proxy:!0},{key:"tableMenuBtn",fn:function(){return[t("div",{staticClass:"tableMenuBtn"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(a){e.AddFabricSupplierDialog.visible=!0}}},[e._v("添加面料商")]),t("el-button",{attrs:{type:"warning",icon:"el-icon-edit-outline"},on:{click:function(a){e.ApplyFabricSupplierDialog.visible=!0}}},[e._v("申请面料商")])],1)]},proxy:!0},{key:"default",fn:function(a){return[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"hhy-table",attrs:{height:a.contentHeight,data:e.tableDataList,"element-loading-text":"加载中...",stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[t("el-table-column",{attrs:{type:"index",label:"序号",index:e.indexMethod}}),t("el-table-column",{attrs:{label:"面料商","min-width":"100","show-overflow-tooltip":"",prop:"FabricMerchant"}}),t("el-table-column",{attrs:{label:"在用品牌","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[t("div",{staticClass:"brand_wrap"},e._l(i.brand,(function(a,l){return t("el-tag",{key:l,attrs:{closable:""},on:{close:function(a){return e.handleCloseTag(l,i)}}},[e._v(e._s(a))])})),1)]}}],null,!0)}),t("el-table-column",{attrs:{label:"显示别名","min-width":"100",prop:"alias","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"状态","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[t("el-tag",{attrs:{type:e._f("statusFilter")(i.status)}},[e._v(e._s(i.status))])]}}],null,!0)}),t("el-table-column",{attrs:{label:"联系人","min-width":"100",prop:"contacts","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"联系电话","min-width":"110",prop:"phone"}}),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"350"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[t("el-button",{attrs:{icon:"el-icon-edit",type:"primary"},on:{click:function(a){return e.setBrand(i)}}},[e._v("管理面料品牌")]),t("el-button",{attrs:{icon:"el-icon-edit",type:"primary"},on:{click:function(a){return e.setAlias(i)}}},[e._v("设置别名")]),t("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:function(a){return e.handleDel(i)}}},[e._v("删除")])]}}],null,!0)})],1)]}},{key:"tablePagination",fn:function(){return[t("myPagination",{attrs:{pager:e.pager},on:{query:e.initData}})]},proxy:!0}])}),t("el-dialog",{attrs:{title:"添加面料商",visible:e.AddFabricSupplierDialog.visible,width:"850px"},on:{"update:visible":function(a){return e.$set(e.AddFabricSupplierDialog,"visible",a)},closed:e.closeAddFabricSupplierDialog}},[t("div",[t("div",{staticClass:"AddFabricSupplierSearch"},[t("el-input",{attrs:{placeholder:"输入面料商名称",clearable:""},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handleAddFabricSupplierSearch(a)}},model:{value:e.AddFabricSupplierDialog.Search,callback:function(a){e.$set(e.AddFabricSupplierDialog,"Search",a)},expression:"AddFabricSupplierDialog.Search"}},[t("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:e.handleAddFabricSupplierSearch},slot:"append"})],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.AddFabricSupplierDialog.tableLoading,expression:"AddFabricSupplierDialog.tableLoading"}],staticClass:"hhy-table",attrs:{height:"350px",data:e.AddFabricSupplierDialog.TableList,"element-loading-text":"加载中...",stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[t("el-table-column",{attrs:{type:"index",label:"序号"}}),t("el-table-column",{attrs:{label:"面料商","min-width":"100","show-overflow-tooltip":"",prop:"FabricSupplier"}}),t("el-table-column",{attrs:{label:"联系人","min-width":"100",prop:"Name","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"联系电话","min-width":"110",prop:"Phone"}}),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return["添加"==i.status?t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:function(a){return e.handleAddFabricSupplier(i)}}},[e._v("添加")]):t("el-button",{attrs:{disabled:"",type:"primary"}},[e._v("已添加")])]}}])})],1)],1)]),t("el-dialog",{attrs:{title:"申请平台添加面料商",visible:e.ApplyFabricSupplierDialog.visible,width:"450px"},on:{"update:visible":function(a){return e.$set(e.ApplyFabricSupplierDialog,"visible",a)},closed:e.closeApplyFabricSupplierDialog}},[t("el-form",{ref:"ApplyFabricSupplierRef",attrs:{model:e.ApplyFabricSupplierDialog.Form,rules:e.ApplyFabricSupplierDialog.ApplyFabricSupplierRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"面料商",prop:"FabricSupplier"}},[t("el-input",{attrs:{maxlength:"30",clearable:"",placeholder:"输入面料商"},model:{value:e.ApplyFabricSupplierDialog.Form.FabricSupplier,callback:function(a){e.$set(e.ApplyFabricSupplierDialog.Form,"FabricSupplier",a)},expression:"ApplyFabricSupplierDialog.Form.FabricSupplier"}})],1),t("el-form-item",{attrs:{label:"联系人",prop:"Name"}},[t("el-input",{attrs:{maxlength:"10",clearable:"",placeholder:"输入面料商联系人"},model:{value:e.ApplyFabricSupplierDialog.Form.Name,callback:function(a){e.$set(e.ApplyFabricSupplierDialog.Form,"Name",a)},expression:"ApplyFabricSupplierDialog.Form.Name"}})],1),t("el-form-item",{attrs:{label:"手机号",prop:"Phone"}},[t("el-input",{attrs:{maxlength:"11",clearable:"",placeholder:"输入面料商联系电话",oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.ApplyFabricSupplierDialog.Form.Phone,callback:function(a){e.$set(e.ApplyFabricSupplierDialog.Form,"Phone",a)},expression:"ApplyFabricSupplierDialog.Form.Phone"}})],1)],1),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.ApplyFabricSupplierDialog.visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:function(a){return e.handleSubmitApplyFabricSupplier("ApplyFabricSupplierRef")}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"面料品牌",visible:e.brandDialog.visible,width:"850px"},on:{"update:visible":function(a){return e.$set(e.brandDialog,"visible",a)},closed:e.closeBrandDialog}},[t("div",{staticClass:"brandDialog_wrap"},[t("div",[t("div",{staticClass:"brandSearch"},[t("el-input",{attrs:{placeholder:"请输入面料品牌",clearable:""},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handleBrandSeach(a)}},model:{value:e.brandDialog.Search,callback:function(a){e.$set(e.brandDialog,"Search",a)},expression:"brandDialog.Search"}},[t("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:e.handleBrandSeach},slot:"append"})],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.brandDialog.tableLoading,expression:"brandDialog.tableLoading"}],staticClass:"hhy-table",attrs:{height:"350px",data:e.brandDialog.TableList,"element-loading-text":"加载中...",stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[t("el-table-column",{attrs:{type:"index",label:"序号"}}),t("el-table-column",{attrs:{label:"品牌","min-width":"100","show-overflow-tooltip":"",prop:"brand"}}),t("el-table-column",{attrs:{label:"状态","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[t("el-tag",{attrs:{type:e._f("statusFilter")(i.status)}},[e._v(e._s(i.status))])]}}])}),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return["添加"==i.btnStaus?t("el-button",{attrs:{loading:e.submitLoading,icon:"el-icon-plus",type:"primary"},on:{click:function(a){return e.handleBrandAdd(i)}}},[e._v("添加")]):t("el-button",{attrs:{disabled:"",type:"primary"}},[e._v("已添加")])]}}])})],1)],1),t("div",[t("el-card",{staticClass:"box-card"},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("已添加品牌")])]),e._l(e.brandDialog.selBrand,(function(a,i){return t("p",{key:i},[t("el-tag",{attrs:{closable:""},on:{close:function(a){return e.removeSelBrand(i,e.brandDialog.selBrand)}}},[e._v(" "+e._s(a)+" ")])],1)}))],2)],1)])]),t("el-dialog",{attrs:{title:"面料商别名",visible:e.aliasDialog.visible,width:"450px"},on:{"update:visible":function(a){return e.$set(e.aliasDialog,"visible",a)},closed:e.closeAliasDialog}},[t("el-form",{ref:"aliasRef",attrs:{model:e.aliasDialog.aliasForm,rules:e.aliasDialog.aliasRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"显示别名",prop:"name"}},[t("el-input",{attrs:{maxlength:"30",clearable:"",placeholder:"输入面料商别名"},model:{value:e.aliasDialog.aliasForm.name,callback:function(a){e.$set(e.aliasDialog.aliasForm,"name",a)},expression:"aliasDialog.aliasForm.name"}})],1)],1),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.aliasDialog.visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:function(a){return e.submitAlias("aliasRef")}}},[e._v("确 定")])],1)],1)],1)},l=[],r=(t("a434"),t("498a"),t("d3b7"),t("159b"),t("caad"),t("2532"),t("b0c0"),{name:"FabricSupplier",data:function(){return{searchForm:{name:"",brand:""},tableLoading:!1,tableDataList:[],pager:{count:100,page:1,rows:15,checkNum:0},submitLoading:!1,AddFabricSupplierDialog:{visible:!1,Search:"",tableLoading:!1,TableList:[]},ApplyFabricSupplierDialog:{visible:!1,Form:{FabricSupplier:"",Name:"",Phone:""},ApplyFabricSupplierRules:{FabricSupplier:[{required:!0,message:"请输入面料商",trigger:"blur"},{pattern:/\S+/,message:"请输入面料商",trigger:"blur"}],Name:[{required:!0,message:"请输入面料商联系人",trigger:"blur"},{pattern:/\S+/,message:"请输入面料商联系人",trigger:"blur"}],Phone:[{required:!0,message:"请输入面料商联系电话",trigger:"blur"},{pattern:/^1[3|4|5|7|8][0-9]\d{8}$/,message:"请输入正确的手机号",trigger:"blur"}]}},brandDialog:{visible:!1,Search:"",tableLoading:!1,TableList:[],selBrand:[]},aliasDialog:{visible:!1,aliasForm:{name:""},aliasRules:{name:[{required:!0,message:"请输入面料商别名",trigger:"blur"},{pattern:/\S+/,message:"请输入面料商别名",trigger:"blur"}]}}}},filters:{statusFilter:function(e){var a={"已启用":"success","已禁用":"danger"};return a[e]}},created:function(){this.initData()},methods:{resetSearchForm:function(e){this.$refs[e].resetFields()},initData:function(){var e=this;this.tableLoading=!0,setTimeout((function(){e.tableDataList=[{id:1,FabricMerchant:"耐克面料",brand:["面料品牌1","面料品牌2"],alias:"面料",status:"已启用",contacts:"张无忌",phone:"13011053225"},{id:2,FabricMerchant:"耐克工厂",brand:["面料品牌2"],alias:"",status:"已启用",contacts:"张无忌",phone:"13011053225"},{id:3,FabricMerchant:"耐克仓库",brand:["面料品牌3"],alias:"面料",status:"已禁用",contacts:"张无忌",phone:"13011053225"}],e.tableLoading=!1}),500)},indexMethod:function(e){return(this.pager.page-1)*this.pager.rows+e+1},handleCloseTag:function(e,a){var t=this;this.$confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.brand.splice(e,1),t.$message.success("删除成功"),t.initData()})).catch((function(){}))},handleAddFabricSupplierSearch:function(){var e=this;if(!this.AddFabricSupplierDialog.Search.trim())return this.$message.error("请输入面料商名");this.AddFabricSupplierDialog.tableLoading=!0,setTimeout((function(){e.AddFabricSupplierDialog.TableList=[{id:1,FabricSupplier:"李宁面料",status:"添加",Name:"无极",Phone:"13011053225"},{id:2,FabricSupplier:"李宁面料",status:"添加",Name:"无极",Phone:"13011053225"},{id:3,FabricSupplier:"李宁面料",status:"添加",Name:"无极",Phone:"13011053225"},{id:4,FabricSupplier:"李宁面料",status:"添加",Name:"无极",Phone:"13011053225"},{id:5,FabricSupplier:"李宁面料",status:"添加",Name:"无极",Phone:"13011053225"},{id:6,FabricSupplier:"李宁面料",status:"添加",Name:"无极",Phone:"13011053225"}],e.AddFabricSupplierDialog.tableLoading=!1}),500)},handleAddFabricSupplier:function(e){e.status="已添加"},closeAddFabricSupplierDialog:function(){this.AddFabricSupplierDialog.TableList=[],this.AddFabricSupplierDialog.Search="",this.initData()},handleSubmitApplyFabricSupplier:function(e){var a=this;this.$refs[e].validate((function(e){if(!e)return!1;a.submitLoading=!0,setTimeout((function(){a.submitLoading=!1,a.ApplyFabricSupplierDialog.visible=!1,a.$message.success("添加成功")}),500)}))},closeApplyFabricSupplierDialog:function(){this.$refs.ApplyFabricSupplierRef.resetFields()},setBrand:function(e){var a=this;this.brandDialog.selBrand=e.brand,this.brandDialog.visible=!0,this.brandDialog.tableLoading=!0,setTimeout((function(){a.brandDialog.TableList=[{id:1,brand:"面料品牌1",status:"已启用",btnStaus:"添加"},{id:2,brand:"面料品牌2",status:"已启用",btnStaus:"添加"},{id:3,brand:"面料品牌3",status:"已启用",btnStaus:"添加"},{id:4,brand:"面料品牌4",status:"已启用",btnStaus:"添加"},{id:5,brand:"面料品牌5",status:"已启用",btnStaus:"添加"},{id:6,brand:"面料品牌6",status:"已启用",btnStaus:"添加"}],a.brandDialog.TableList.forEach((function(a){a.btnStaus=e.brand.includes(a.brand)?"已添加":"添加"})),a.brandDialog.tableLoading=!1}),500)},handleBrandSeach:function(){},handleBrandAdd:function(e){var a=this;this.submitLoading=!0,setTimeout((function(){a.submitLoading=!1,e.btnStaus="已添加",a.brandDialog.selBrand.push(e.brand)}),500)},removeSelBrand:function(e,a){var t=this;a.splice(e,1),this.brandDialog.TableList.forEach((function(e){e.btnStaus=t.brandDialog.selBrand.includes(e.brand)?"已添加":"添加"}))},closeBrandDialog:function(){this.brandDialog.TableList=[],this.brandDialog.selBrand=[]},setAlias:function(e){this.aliasDialog.aliasForm.name=e.alias,this.aliasDialog.visible=!0},submitAlias:function(e){var a=this;this.$refs[e].validate((function(e){if(!e)return!1;a.submitLoading=!0,setTimeout((function(){a.submitLoading=!1,a.aliasDialog.visible=!1,a.$message.success("设置成功"),a.initData()}),500)}))},closeAliasDialog:function(){this.$refs.aliasRef.resetFields()},handleDel:function(e){var a=this;this.$confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.$message.success("删除成功"),a.initData()})).catch((function(){}))}}}),n=r,o=(t("9fab"),t("2877")),s=Object(o["a"])(n,i,l,!1,null,"22dfdb32",null);a["default"]=s.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb311ba"],{"14b0":function(t,e,a){"use strict";a("f4e1")},"2efb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hhy-container"},[a("PageWrap",{scopedSlots:t._u([{key:"tableMenuBtn",fn:function(){return[a("div",{staticClass:"tableMenuBtn"},[a("div",{staticClass:"hhy-tips"},[a("p",[t._v(t._s(t.productName)+" - 量体参数")])])])]},proxy:!0},{key:"default",fn:function(e){return[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticClass:"hhy-table dragTable",attrs:{"row-key":"id",height:e.contentHeight+30,data:t.tableDataList,"element-loading-text":"加载中...",stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),a("el-table-column",{attrs:{label:"名称",prop:"name","min-width":"120","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"别称",prop:"alias","min-width":"120","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"图片",prop:"image","min-width":"120","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"手工输入",prop:"manualInput","min-width":"120"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tag",{attrs:{type:t._f("statusFilter")(i.status)}},[t._v(t._s(i.status))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime","min-width":"200","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-button",{attrs:{icon:"el-icon-setting",type:"primary"},on:{click:function(e){return t.handleSetAlias(i)}}},[t._v("设置别名")]),"已禁用"==i.status?a("el-button",{attrs:{icon:"el-icon-turn-off",type:"success"},on:{click:function(e){return t.handleEnable(i)}}},[t._v("启用")]):t._e(),"已启用"==i.status?a("el-button",{attrs:{icon:"el-icon-open",type:"danger"},on:{click:function(e){return t.handleDisable(i)}}},[t._v("禁用")]):t._e()]}}],null,!0)})],1)]}}])}),a("el-dialog",{attrs:{title:"设置别名",visible:t.SetAliasDialog.visible,width:"350px"},on:{"update:visible":function(e){return t.$set(t.SetAliasDialog,"visible",e)},closed:t.closeSetAliasDialog}},[a("el-form",{ref:"SetAliasDialogRef",staticClass:"SetAliasDialog",attrs:{model:t.SetAliasDialog.Form,inline:!1,rules:t.SetAliasDialog.Rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"量体参数"}},[t._v(" "+t._s(t.SetAliasDialog.Form.VolumeParams)+" ")]),a("el-form-item",{attrs:{label:"别名",prop:"alias"}},[a("el-input",{attrs:{maxlength:"30",clearable:"",placeholder:"请输入别名"},model:{value:t.SetAliasDialog.Form.alias,callback:function(e){t.$set(t.SetAliasDialog.Form,"alias",e)},expression:"SetAliasDialog.Form.alias"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.SetAliasDialog.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:function(e){return t.handleSubmitSetAlias("SetAliasDialogRef")}}},[t._v("确 定")])],1)],1)],1)},l=[],s=(a("b0c0"),a("a434"),a("aa47")),n={name:"volumeParams",data:function(){return{submitLoading:!1,productName:"",ID:"",tableLoading:!1,tableDataList:[],SetAliasDialog:{visible:!1,Form:{VolumeParams:"",alias:""},Rules:{alias:[{required:!0,message:"请输入别名",trigger:"blur"},{pattern:/\S+/,message:"请输入别名",trigger:"blur"}]}}}},filters:{statusFilter:function(t){var e={"已启用":"success","已禁用":"info"};return e[t]}},created:function(){var t=this.$route.params&&this.$route.params.id;this.productName=this.$route.query.name,this.ID=t,this.$message.success("当前ID为".concat(t)),this.initData()},methods:{initData:function(){var t=this;this.tableLoading=!0,setTimeout((function(){t.tableDataList=[{id:1,name:"领围",alias:"领围",image:"无",manualInput:"是",status:"已启用",createTime:"2023-11-12 12:12:12"},{id:2,name:"肩宽",alias:"肩宽",image:"无",manualInput:"",status:"已禁用",createTime:"2023-11-12 12:12:12"}],t.tableLoading=!1,t.$nextTick((function(){t.setSort()}))}),500)},setSort:function(){var t=this,e=document.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];new s["a"](e,{ghostClass:"sortable-ghost",setData:function(t){t.setData("Text","")},onEnd:function(e){var a=t.tableDataList.splice(e.oldIndex,1)[0];t.tableDataList.splice(e.newIndex,0,a)}})},handleSetAlias:function(t){this.SetAliasDialog.visible=!0,this.SetAliasDialog.Form.VolumeParams=t.name},handleSubmitSetAlias:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.submitLoading=!0,setTimeout((function(){e.SetAliasDialog.visible=!1,e.submitLoading=!1,e.$message.success("操作成功"),e.initData()}),500)}))},closeSetAliasDialog:function(){this.$refs["SetAliasDialogRef"].resetFields()},handleEnable:function(t){this.$message.success("操作成功"),this.initData()},handleDisable:function(t){var e=this;this.$confirm("停用后，该工艺将不可使用，确认吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message.success("操作成功"),e.initData()})).catch((function(){}))}}},o=n,r=(a("14b0"),a("2877")),u=Object(r["a"])(o,i,l,!1,null,null,null);e["default"]=u.exports},f4e1:function(t,e,a){}}]);
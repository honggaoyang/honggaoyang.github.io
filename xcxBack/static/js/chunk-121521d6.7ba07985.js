(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-121521d6"],{"0638":function(e,t,i){},"07ac":function(e,t,i){var a=i("23e7"),r=i("6f53").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},"0cbf":function(e,t,i){},1148:function(e,t,i){"use strict";var a=i("a691"),r=i("1d80");e.exports="".repeat||function(e){var t=String(r(this)),i="",l=a(e);if(l<0||l==1/0)throw RangeError("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(i+=t);return i}},"2a36":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.imgUploadUrl,"show-file-list":!1,"on-error":e.handleError,"on-success":function(t,i,a){return e.handleSuccess(t,i,a)}}},[e.imageUrl?i("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),e.imageUrl?i("span",{staticClass:"el-upload-list__item-actions",on:{click:function(e){e.stopPropagation()}}},[i("span",{staticClass:"upload-icon"},[i("span",{staticClass:"el-uploads-span",staticStyle:{"margin-right":"10px"},on:{click:function(t){return t.stopPropagation(),e.bigImgViewer(t)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),i("span",{staticClass:"el-upload-span",on:{click:function(t){return t.stopPropagation(),e.oploadImgDel(t)}}},[i("i",{staticClass:"el-icon-delete"})])])]):e._e()]),e.dialogVisible?i("el-image-viewer",{attrs:{zIndex:9999,"on-close":e.closeImgViewer,"url-list":[e.imageUrl]}}):e._e()],1)},r=[],l=(i("498a"),i("08a9")),s={components:{ElImageViewer:l["a"]},props:{imgUploadUrl:{type:String,default:Object({NODE_ENV:"production",VUE_APP_BASE_API:"/prod-api",BASE_URL:""}).VUE_APP_UPLOAD_URL},value:[String,Object,Array]},data:function(){return{imageUrl:"",dialogVisible:!1}},watch:{value:{handler:function(e,t){var i=e?e.trim():e;this.imageUrl=i?"/prod-api"+i:i},immediate:!0,deep:!0}},methods:{handleError:function(e,t,i){this.$message.error({message:"上传图片失败, 请刷新后再试",center:!0,offset:360,duration:1500})},handleSuccess:function(e,t,i,a){var r=t.response.successPath;this.changeFileList(r),this.$emit("UploadSuccess",r)},changeFileList:function(e){this.$emit("input",e)},bigImgViewer:function(){this.dialogVisible=!0},oploadImgDel:function(){this.imageUrl="",this.changeFileList("")},closeImgViewer:function(){this.dialogVisible=!1}}},o=s,n=(i("d950"),i("2877")),c=Object(n["a"])(o,a,r,!1,null,null,null);t["a"]=c.exports},"2f4e":function(e,t,i){},"408a":function(e,t,i){var a=i("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},"6f53":function(e,t,i){var a=i("83ab"),r=i("df75"),l=i("fc6a"),s=i("d1e7").f,o=function(e){return function(t){var i,o=l(t),n=r(o),c=n.length,d=0,u=[];while(c>d)i=n[d++],a&&!s.call(o,i)||u.push(e?[i,o[i]]:o[i]);return u}};e.exports={entries:o(!0),values:o(!1)}},71560:function(e,t,i){},"86a0":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hhy-container"},[i("PageWrap",{scopedSlots:e._u([{key:"pageTop",fn:function(){return[i("el-form",{ref:"searchForm",staticClass:"hhy-card hhy-topSearch-box",attrs:{inline:"",model:e.searchForm}},[i("el-form-item",{attrs:{label:"面料分类",prop:"FabricClass"}},[i("el-select",{attrs:{placeholder:"面料分类"},model:{value:e.searchForm.FabricClass,callback:function(t){e.$set(e.searchForm,"FabricClass",t)},expression:"searchForm.FabricClass"}},e._l(e.FabricClassList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-form-item",{attrs:{label:"纹路",prop:"lines"}},[i("el-select",{attrs:{placeholder:"纹路"},model:{value:e.searchForm.lines,callback:function(t){e.$set(e.searchForm,"lines",t)},expression:"searchForm.lines"}},e._l(e.linesList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-form-item",{attrs:{label:"颜色",prop:"color"}},[i("el-select",{attrs:{placeholder:"颜色"},model:{value:e.searchForm.color,callback:function(t){e.$set(e.searchForm,"color",t)},expression:"searchForm.color"}},e._l(e.colorList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-form-item",{attrs:{label:"面料品牌",prop:"FabricBrand"}},[i("el-select",{attrs:{placeholder:"面料品牌"},model:{value:e.searchForm.FabricBrand,callback:function(t){e.$set(e.searchForm,"FabricBrand",t)},expression:"searchForm.FabricBrand"}},e._l(e.FabricBrandList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-form-item",{attrs:{label:"面料商",prop:"FabricMerchant"}},[i("el-select",{attrs:{placeholder:"面料商"},model:{value:e.searchForm.FabricMerchant,callback:function(t){e.$set(e.searchForm,"FabricMerchant",t)},expression:"searchForm.FabricMerchant"}},e._l(e.FabricMerchantList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-form-item",{attrs:{label:"面料号",prop:"FabricNumber"}},[i("el-input",{attrs:{clearable:"",placeholder:"面料号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initData(t)}},model:{value:e.searchForm.FabricNumber,callback:function(t){e.$set(e.searchForm,"FabricNumber",t)},expression:"searchForm.FabricNumber"}})],1),i("el-form-item",[i("el-button",{staticClass:"hhy-search-btn",attrs:{type:"primary",round:""},on:{click:e.initData}},[e._v("查询")]),i("el-button",{staticClass:"hhy-reset-btn",attrs:{type:"danger",round:""},on:{click:function(t){return e.resetSearchForm("searchForm")}}},[e._v("重置")])],1)],1)]},proxy:!0},{key:"tableMenuBtn",fn:function(){return[i("div",{staticClass:"tableMenuBtn"},[i("el-tabs",{on:{"tab-click":e.handleMenuClick},model:{value:e.activeMenuName,callback:function(t){e.activeMenuName=t},expression:"activeMenuName"}},[i("el-tab-pane",{attrs:{label:"上架中",name:"上架中"}}),i("el-tab-pane",{attrs:{label:"已下架",name:"已下架"}}),i("el-tab-pane",{attrs:{label:"面料池",name:"面料池"}})],1),i("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addFabric}},[e._v("添加面料")])],1)]},proxy:!0},{key:"default",fn:function(t){return[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"hhy-table",attrs:{height:t.contentHeight,data:e.tableDataList,"element-loading-text":"加载中...",stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[i("el-table-column",{attrs:{type:"index",label:"序号",width:"80",index:e.indexMethod}}),i("el-table-column",{attrs:{label:"面料","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("div",{staticClass:"fabric_wrap"},[i("div",[i("el-image",{attrs:{src:a.FabricImg,"preview-src-list":[a.FabricImg]}})],1),i("div",[i("span",[e._v(e._s(a.FabricName))]),i("div",[i("el-tag",{attrs:{type:"info"}},[e._v(e._s(a.color))])],1),i("div",[i("el-tag",{attrs:{type:"info"}},[e._v(e._s(a.lines))])],1)])])]}}],null,!0)}),i("el-table-column",{attrs:{label:"状态","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("el-tag",{attrs:{type:e._f("statusFilter")(a.status)}},[e._v(e._s(a.status))])]}}],null,!0)}),i("el-table-column",{attrs:{label:"品牌","min-width":"120","show-overflow-tooltip":"",prop:"brand"}}),i("el-table-column",{attrs:{label:"面料商","min-width":"120","show-overflow-tooltip":"",prop:"FabricMerchant"}}),i("el-table-column",{attrs:{label:"价格","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[["上架中","已下架"].includes(e.activeMenuName)?i("div",{staticClass:"price_wrap"},[e._v(" 结算价：¥ "),i("el-popover",{attrs:{"popper-class":"fabricManagement_price_popper",placement:"top",width:"250",trigger:"hover"}},[i("div",{staticClass:"content"},[i("span",[e._v("定制价")]),i("div",[e._v("西服: ¥ 6593.40")])]),i("el-link",{attrs:{slot:"reference",type:"primary"},on:{click:function(t){return e.settingFabricPrice(a)}},slot:"reference"},[e._v(e._s(a.price))])],1)],1):e._e(),"面料池"==e.activeMenuName?i("div",[e._v(" 结算价：¥ "+e._s(a.price)+" ")]):e._e()]}}],null,!0)}),i("el-table-column",{attrs:{label:"用料(米)","min-width":"120","show-overflow-tooltip":"",prop:"materialsUsed"}}),i("el-table-column",{attrs:{label:"下单次数","min-width":"120","show-overflow-tooltip":"",prop:"orderNum"}}),i("el-table-column",{attrs:{label:"库存(米)","min-width":"120","show-overflow-tooltip":"",prop:"inventory"}}),i("el-table-column",{attrs:{label:"添加时间","min-width":"160","show-overflow-tooltip":"",prop:"date"}}),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"面料池"==e.activeMenuName?200:400},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[["上架中","已下架"].includes(e.activeMenuName)?i("el-button",{attrs:{icon:"el-icon-document",type:"success"},on:{click:function(t){return e.handleUsageRecord(a)}}},[e._v("使用记录")]):e._e(),["上架中","已下架"].includes(e.activeMenuName)?i("el-button",{attrs:{icon:"el-icon-edit",type:"warning"},on:{click:function(t){return e.editFabric(a)}}},[e._v("编辑")]):e._e(),["上架中","面料池","已下架"].includes(e.activeMenuName)?i("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.searchFabric(a)}}},[e._v("查看")]):e._e(),["上架中"].includes(e.activeMenuName)?i("el-button",{attrs:{icon:"el-icon-bottom",type:"danger"},on:{click:function(t){return e.handleDown(a)}}},[e._v("下架")]):e._e(),["已下架"].includes(e.activeMenuName)?i("el-button",{attrs:{icon:"el-icon-top",type:"danger"},on:{click:function(t){return e.handleUp(a)}}},[e._v("上架")]):e._e(),["面料池"].includes(e.activeMenuName)?i("el-button",{attrs:{icon:"el-icon-check",type:"success"},on:{click:function(t){return e.handleSelUse(a)}}},[e._v("选用")]):e._e()]}}],null,!0)})],1)]}},{key:"tablePagination",fn:function(){return[i("myPagination",{attrs:{pager:e.pager},on:{query:e.initData}})]},proxy:!0}])}),i("el-dialog",{staticClass:"settingFabricPriceDialog",attrs:{title:"调整面料价格",visible:e.settingFabricPriceDialog.visible,width:"450px"},on:{"update:visible":function(t){return e.$set(e.settingFabricPriceDialog,"visible",t)},closed:e.closeSettingFabricPriceDialog}},[i("el-form",{ref:"settingFabricPriceRef",attrs:{model:e.settingFabricPriceDialog.Form,rules:e.settingFabricPriceDialog.Rules,"label-width":"100px"}},[i("el-form-item",{staticClass:"item",attrs:{label:"成本价",prop:"costPrice"}},[i("el-input",{attrs:{placeholder:"输入成本价",oninput:"this.value = this.value.replace(/^\\D*(\\d*(?:\\.\\d{0,2})?).*$/g,'$1')"},model:{value:e.settingFabricPriceDialog.Form.costPrice,callback:function(t){e.$set(e.settingFabricPriceDialog.Form,"costPrice",t)},expression:"settingFabricPriceDialog.Form.costPrice"}}),i("span",[e._v("元 / 米")])],1),i("el-form-item",{staticClass:"item",attrs:{label:"计价基础价",prop:"basisPrice"}},[i("el-input",{attrs:{placeholder:"输入计价基础价",oninput:"this.value = this.value.replace(/^\\D*(\\d*(?:\\.\\d{0,2})?).*$/g,'$1')"},model:{value:e.settingFabricPriceDialog.Form.basisPrice,callback:function(t){e.$set(e.settingFabricPriceDialog.Form,"basisPrice",t)},expression:"settingFabricPriceDialog.Form.basisPrice"}}),i("span",[e._v("元")])],1),i("el-form-item",{attrs:{label:"定制价格"}},[i("div",{staticClass:"customizedPrice"},[i("span",[e._v("西服")]),i("span",[e._v("¥ 3697.65")])])]),"选用"==e.settingFabricPriceDialog.currOpenBtnName?i("el-form-item",{staticClass:"item",attrs:{label:"库存",prop:"inventory"}},[i("el-input",{attrs:{placeholder:"输入库存",oninput:"this.value = this.value.replace(/^\\D*(\\d*(?:\\.\\d{0,2})?).*$/g,'$1')"},model:{value:e.settingFabricPriceDialog.Form.inventory,callback:function(t){e.$set(e.settingFabricPriceDialog.Form,"inventory",t)},expression:"settingFabricPriceDialog.Form.inventory"}}),i("span",[e._v("米")])],1):e._e()],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.settingFabricPriceDialog.visible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:function(t){return e.handleSubmitSettingFabricPrice("settingFabricPriceRef")}}},[e._v("确 定")])],1)],1),i("el-dialog",{attrs:{title:"用料记录",visible:e.usageRecordDialog.visible,width:"750px"},on:{"update:visible":function(t){return e.$set(e.usageRecordDialog,"visible",t)},closed:e.closeUsageRecordDialog}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.usageRecordDialog.loading,expression:"usageRecordDialog.loading"}],staticClass:"hhy-table",attrs:{height:"350px",data:e.usageRecordDialog.tableDataList,"element-loading-text":"加载中...",stripe:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[i("el-table-column",{attrs:{type:"index",label:"序号"}}),i("el-table-column",{attrs:{label:"订单","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("router-link",{attrs:{to:{name:"OrderManagement",query:{orderID:a.orderNum}},target:"_blank"}},[i("el-link",{attrs:{type:"primary"}},[e._v(e._s(a.orderNum))])],1)]}}])}),i("el-table-column",{attrs:{label:"用料",prop:"MaterialsUsed"}}),i("el-table-column",{attrs:{label:"时间",prop:"date"}})],1)],1),i("el-dialog",{attrs:{title:e.addEditSearchDialog.title,visible:e.addEditSearchDialog.visible,width:"900px"},on:{"update:visible":function(t){return e.$set(e.addEditSearchDialog,"visible",t)},closed:e.closeAddEditSearchDialog}},[i("div",{staticStyle:{height:"400px",overflow:"auto"}},[e.addEditSearchDialog.visible?i("Form",{ref:"FormRef",attrs:{title:e.addEditSearchDialog.title,row:e.addEditSearchDialog.row},on:{submitSuccess:e.submitSuccess}}):e._e()],1)])],1)},r=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",{ref:"formRef",staticClass:"form_wrap",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"面料分类",prop:"fabricGroup"}},[i("el-checkbox-group",{attrs:{disabled:e.isEdit||e.isSearch},model:{value:e.form.fabricGroup,callback:function(t){e.$set(e.form,"fabricGroup",t)},expression:"form.fabricGroup"}},e._l(e.fabricGroupList,(function(e){return i("el-checkbox",{key:e.id,attrs:{label:e.name}})})),1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"品牌",prop:"brand"}},[i("el-select",{attrs:{disabled:e.isEdit||e.isSearch,placeholder:"请选择品牌",filterable:"",clearable:""},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}},e._l(e.brandList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"面料号",prop:"fabricNo"}},[i("el-input",{attrs:{disabled:e.isEdit||e.isSearch,clearable:""},model:{value:e.form.fabricNo,callback:function(t){e.$set(e.form,"fabricNo",t)},expression:"form.fabricNo"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"是否期货",prop:"isForward"}},[i("el-switch",{attrs:{disabled:e.isEdit||e.isSearch,"active-text":"是","inactive-text":"否"},model:{value:e.form.isForward,callback:function(t){e.$set(e.form,"isForward",t)},expression:"form.isForward"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"成本价",prop:"costPrice"}},[i("el-input",{attrs:{disabled:e.isSearch,placeholder:"元/米",clearable:"",oninput:"this.value = this.value.replace(/^\\D*(\\d*(?:\\.\\d{0,2})?).*$/g,'$1')"},model:{value:e.form.costPrice,callback:function(t){e.$set(e.form,"costPrice",t)},expression:"form.costPrice"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"计价基础价",prop:"basisPrice"}},[i("el-input",{attrs:{disabled:e.isSearch,placeholder:"元",clearable:"",oninput:"this.value = this.value.replace(/^\\D*(\\d*(?:\\.\\d{0,2})?).*$/g,'$1')"},model:{value:e.form.basisPrice,callback:function(t){e.$set(e.form,"basisPrice",t)},expression:"form.basisPrice"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"面料成分",prop:"composition"}},[i("el-input",{attrs:{disabled:e.isEdit||e.isSearch,clearable:""},model:{value:e.form.composition,callback:function(t){e.$set(e.form,"composition",t)},expression:"form.composition"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"面料纱织",prop:"Saori"}},[i("el-input",{attrs:{disabled:e.isEdit||e.isSearch,clearable:""},model:{value:e.form.Saori,callback:function(t){e.$set(e.form,"Saori",t)},expression:"form.Saori"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"克重",prop:"weight"}},[i("el-input",{attrs:{disabled:e.isEdit||e.isSearch,placeholder:"gms",clearable:"",oninput:"this.value = this.value.replace(/^\\D*(\\d*(?:\\.\\d{0,2})?).*$/g,'$1')"},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"门幅",prop:"doorWidth"}},[i("el-input",{attrs:{disabled:e.isEdit||e.isSearch,placeholder:"cm",clearable:"",oninput:"this.value = this.value.replace(/^\\D*(\\d*(?:\\.\\d{0,2})?).*$/g,'$1')"},model:{value:e.form.doorWidth,callback:function(t){e.$set(e.form,"doorWidth",t)},expression:"form.doorWidth"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"厚度",prop:"thickness"}},[i("el-select",{attrs:{disabled:e.isEdit||e.isSearch,placeholder:"请选择厚度",clearable:""},model:{value:e.form.thickness,callback:function(t){e.$set(e.form,"thickness",t)},expression:"form.thickness"}},e._l(e.thicknessList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"颜色",prop:"color"}},[i("el-input",{attrs:{disabled:e.isEdit||e.isSearch,clearable:""},model:{value:e.form.color,callback:function(t){e.$set(e.form,"color",t)},expression:"form.color"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"纹路",prop:"lines"}},[i("el-input",{attrs:{disabled:e.isEdit||e.isSearch,clearable:""},model:{value:e.form.lines,callback:function(t){e.$set(e.form,"lines",t)},expression:"form.lines"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"风格特色",prop:"unique"}},[i("el-input",{attrs:{disabled:e.isEdit||e.isSearch,clearable:""},model:{value:e.form.unique,callback:function(t){e.$set(e.form,"unique",t)},expression:"form.unique"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"图片",prop:"imgUrl"}},[i("myUpload",{model:{value:e.form.imgUrl,callback:function(t){e.$set(e.form,"imgUrl",t)},expression:"form.imgUrl"}})],1)],1),i("el-col",{attrs:{span:8}})],1),e.isSearch?e._e():i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:function(t){return e.submitForm("formRef")}}},[e._v("提交")]),i("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)},s=[],o=(i("caad"),i("2a36")),n={name:"Form",components:{myUpload:o["a"]},props:{row:{type:Object,default:function(){}},title:{type:String,default:""}},data:function(){return{brandList:[{id:1,name:"世佳宝"}],fabricGroupList:[{id:1,name:"上衣"},{id:2,name:"西裤"},{id:3,name:"马甲"},{id:4,name:"衬衫"},{id:5,name:"大衣"}],thicknessList:[{id:1,name:"厚"},{id:2,name:"中等"},{id:3,name:"薄"}],form:{id:0,brand:"",fabricGroup:[],fabricNo:"",isForward:!1,costPrice:"",basisPrice:"",composition:"",Saori:"",weight:"",doorWidth:"",thickness:"",color:"",lines:"",unique:"",imgUrl:""},rules:{brand:[{required:!0,message:"请选择品牌",trigger:"change"}],fabricGroup:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],fabricNo:[{required:!0,message:"请输入面料号",trigger:"blur"},{pattern:/\S+/,message:"请输入面料号",trigger:"blur"}],costPrice:[{required:!0,message:"请输入成本价",trigger:"blur"}]},submitLoading:!1,isEdit:!1,isSearch:!1}},mounted:function(){if(["编辑","查看"].includes(this.title)){var e=this.row.id;this.form={id:e,brand:1,fabricGroup:["马甲","衬衫"],fabricNo:"Bb123",isForward:!1,costPrice:"33",basisPrice:"22",composition:"面料成分",Saori:"面料纱织",weight:"11",doorWidth:"12.22",thickness:1,color:"红色",lines:"无",unique:"风格特色",imgUrl:""};var t={"编辑":"isEdit","查看":"isSearch"};this[t[this.title]]=!0}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.submitLoading=!0,setTimeout((function(){t.$emit("submitSuccess"),t.$message.success("操作成功!"),t.submitLoading=!1}),500)}))},resetForm:function(){this.$refs.formRef.resetFields()}}},c=n,d=(i("e972"),i("2877")),u=Object(d["a"])(c,l,s,!1,null,"ba58c0ba",null),m=u.exports,b={name:"FabricManagement",components:{Form:m},data:function(){return{FabricClassList:[{id:1,name:"全部"},{id:2,name:"面料分类"}],linesList:[{id:1,name:"全部"},{id:2,name:"纹路"}],colorList:[{id:1,name:"全部"},{id:2,name:"颜色"}],FabricBrandList:[{id:1,name:"全部"},{id:2,name:"面料品牌"}],FabricMerchantList:[{id:1,name:"全部"},{id:2,name:"面料商"}],searchForm:{FabricClass:1,lines:1,color:1,FabricBrand:1,FabricMerchant:1,FabricNumber:""},activeMenuName:"上架中",tableLoading:!1,tableDataList:[],pager:{count:100,page:1,rows:15,checkNum:0},submitLoading:!1,settingFabricPriceDialog:{visible:!1,currOpenBtnName:"",Form:{costPrice:"",basisPrice:"",inventory:""},Rules:{costPrice:[{required:!0,message:"请输入成本价",trigger:"blur"}],basisPrice:[{required:!0,message:"请输入计价基础价",trigger:"blur"}],inventory:[{required:!0,message:"请输入库存",trigger:"blur"}]}},usageRecordDialog:{visible:!1,loading:!1,tableDataList:[]},addEditSearchDialog:{visible:!1,title:"",row:{}}}},filters:{statusFilter:function(e){var t={"上架中":"success","待选用":"warning","已下架":"info"};return t[e]}},created:function(){this.initData()},methods:{resetSearchForm:function(e){this.$refs[e].resetFields()},handleMenuClick:function(e,t){this.tableDataList=[],this.initData()},initData:function(){var e=this;this.tableLoading=!0,setTimeout((function(){var t=[];"上架中"==e.activeMenuName?t=[{id:1,FabricImg:"https://www.fabrics-buy.com/API_Upload/Images/Factory/FabricStock/20210826171323_4642.jpg",FabricName:"WL2233054",lines:"凹陷",color:"黑色",status:"上架中",brand:"世佳宝",FabricMerchant:"乌贼工厂",price:"100",materialsUsed:"12.33",orderNum:"50",inventory:"1000",date:"2023-07-02 15:53:36"},{id:2,FabricImg:"https://www.fabrics-buy.com/API_Upload/Images/Factory/FabricStock/20210826171323_4642.jpg",FabricName:"WL2233054",lines:"凹陷",color:"黑色",status:"上架中",brand:"世佳宝",FabricMerchant:"乌贼工厂",price:"100",materialsUsed:"12.33",orderNum:"50",inventory:"1000",date:"2023-07-02 15:53:36"},{id:3,FabricImg:"https://www.fabrics-buy.com/API_Upload/Images/Factory/FabricStock/20210826171323_4642.jpg",FabricName:"WL2233054",lines:"凹陷",color:"黑色",status:"上架中",brand:"世佳宝",FabricMerchant:"乌贼工厂",price:"100",materialsUsed:"12.33",orderNum:"50",inventory:"1000",date:"2023-07-02 15:53:36"}]:"已下架"==e.activeMenuName?t=[{id:1,FabricImg:"https://www.fabrics-buy.com/API_Upload/Images/Factory/FabricStock/20210826171323_4642.jpg",FabricName:"WL2233054",lines:"凹陷",color:"黑色",status:"已下架",brand:"世佳宝",FabricMerchant:"乌贼工厂",price:"100",materialsUsed:"12.33",orderNum:"50",inventory:"1000",date:"2023-07-02 15:53:36"}]:"面料池"==e.activeMenuName&&(t=[{id:1,FabricImg:"https://www.fabrics-buy.com/API_Upload/Images/Factory/FabricStock/20210826171323_4642.jpg",FabricName:"WL2233054",lines:"凹陷",color:"黑色",status:"待选用",brand:"世佳宝",FabricMerchant:"乌贼工厂",price:"100",materialsUsed:"12.33",orderNum:"50",inventory:"1000",date:"2023-07-02 15:53:36"}]),e.tableDataList=t,e.tableLoading=!1}),500)},indexMethod:function(e){return(this.pager.page-1)*this.pager.rows+e+1},settingFabricPrice:function(e){this.settingFabricPriceDialog.visible=!0},handleSubmitSettingFabricPrice:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.submitLoading=!0,setTimeout((function(){t.submitLoading=!1,t.settingFabricPriceDialog.visible=!1,t.$message.success("操作成功")}),500)}))},closeSettingFabricPriceDialog:function(){this.$refs.settingFabricPriceRef.resetFields(),this.settingFabricPriceDialog.currOpenBtnName=""},handleUsageRecord:function(e){var t=this;this.usageRecordDialog.visible=!0,this.usageRecordDialog.loading=!0,setTimeout((function(){t.usageRecordDialog.tableDataList=[{id:1,orderNum:"WZNJ09882230711164208-1",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"},{id:2,orderNum:"WZNJ09882230711164208-2",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"},{id:3,orderNum:"WZNJ09882230711164208-3",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"},{id:4,orderNum:"WZNJ09882230711164208-4",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"},{id:5,orderNum:"WZNJ09882230711164208-5",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"},{id:6,orderNum:"WZNJ09882230711164208-5",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"},{id:7,orderNum:"WZNJ09882230711164208-5",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"},{id:8,orderNum:"WZNJ09882230711164208-5",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"},{id:9,orderNum:"WZNJ09882230711164208-5",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"},{id:10,orderNum:"WZNJ09882230711164208-5",MaterialsUsed:"30 cm",date:"2023-07-18 12:12:12"}],t.usageRecordDialog.loading=!1}),500)},closeUsageRecordDialog:function(){this.usageRecordDialog.tableDataList=[]},addFabric:function(){this.addEditSearchDialog.title="新增",this.addEditSearchDialog.visible=!0},editFabric:function(e){this.addEditSearchDialog.title="编辑",this.addEditSearchDialog.visible=!0,this.addEditSearchDialog.row=e},searchFabric:function(e){this.addEditSearchDialog.title="查看",this.addEditSearchDialog.visible=!0,this.addEditSearchDialog.row=e},submitSuccess:function(){this.addEditSearchDialog.visible=!1,this.initData()},closeAddEditSearchDialog:function(){this.addEditSearchDialog.row={}},handleDown:function(e){this.$message.success("下架成功")},handleUp:function(e){this.$message.success("上架成功")},handleSelUse:function(e){this.settingFabricPriceDialog.currOpenBtnName="选用",this.settingFabricPriceDialog.visible=!0}}},p=b,f=(i("d803"),i("870c"),Object(d["a"])(p,a,r,!1,null,"187dcd49",null));t["default"]=f.exports},"870c":function(e,t,i){"use strict";i("0cbf")},b680:function(e,t,i){"use strict";var a=i("23e7"),r=i("a691"),l=i("408a"),s=i("1148"),o=i("d039"),n=1..toFixed,c=Math.floor,d=function(e,t,i){return 0===t?i:t%2===1?d(e,t-1,i*e):d(e*e,t/2,i)},u=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},m=n&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){n.call({})}));a({target:"Number",proto:!0,forced:m},{toFixed:function(e){var t,i,a,o,n=l(this),m=r(e),b=[0,0,0,0,0,0],p="",f="0",h=function(e,t){var i=-1,a=t;while(++i<6)a+=e*b[i],b[i]=a%1e7,a=c(a/1e7)},g=function(e){var t=6,i=0;while(--t>=0)i+=b[t],b[t]=c(i/e),i=i%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==b[e]){var i=String(b[e]);t=""===t?i:t+s.call("0",7-i.length)+i}return t};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return String(n);if(n<0&&(p="-",n=-n),n>1e-21)if(t=u(n*d(2,69,1))-69,i=t<0?n*d(2,-t,1):n/d(2,t,1),i*=4503599627370496,t=52-t,t>0){h(0,i),a=m;while(a>=7)h(1e7,0),a-=7;h(d(10,a,1),0),a=t-1;while(a>=23)g(1<<23),a-=23;g(1<<a),h(1,1),g(2),f=v()}else h(0,i),h(1<<-t,0),f=v()+s.call("0",m);return m>0?(o=f.length,f=p+(o<=m?"0."+s.call("0",m-o)+f:f.slice(0,o-m)+"."+f.slice(o-m))):f=p+f,f}})},d803:function(e,t,i){"use strict";i("2f4e")},d950:function(e,t,i){"use strict";i("71560")},e972:function(e,t,i){"use strict";i("0638")}}]);
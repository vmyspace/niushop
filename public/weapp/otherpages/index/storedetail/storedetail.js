(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/index/storedetail/storedetail"],{"13ba":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("c409"));n("5e27");function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){n.e("components/ns-navbar/ns-navbar").then(function(){return resolve(n("7bdc"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("92aa"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/diy-bottom-nav/diy-bottom-nav").then(function(){return resolve(n("df22"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/diy-index-page/diy-index-page").then(function(){return resolve(n("0b5d"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/diy-group/diy-group").then(function(){return resolve(n("4294"))}.bind(null,n)).catch(n.oe)},l={components:{uniPopup:r,diyBottomNav:u,diyIndexPage:d,diyGroup:c,nsNavbar:a},data:function(){return{diyData:{global:{title:"",popWindow:{imageUrl:"",count:-1,link:{}}}},navTitle:"",siteInfo:null,memberId:0,name:"",storeId:0,latitude:null,longitude:null,storeList:[],showStore:!0,pageHeight:"0",headerHeight:"0",bottomHeight:"0",topIndexValue:null}},computed:{bgColor:function(){var t="";return this.diyData&&this.diyData.global&&(t=this.diyData.global.bgColor),t},bgUrl:function(){var t="";return this.diyData&&this.diyData.global&&(t=this.diyData.global.bgUrl),t},openBottomNav:function(){var t=!1;return this.diyData&&this.diyData.global&&(t=this.diyData.global.openBottomNav),t},scrollHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc("+this.pageHeight+" - "+this.headerHeight+" - "+this.bottomHeight+")":"100vh"},minHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc(100vh - "+this.headerHeight+" - "+this.bottomHeight+" - 80rpx)":"100vh"},scrollTopHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc("+this.pageHeight+" - "+this.headerHeight+" - "+this.bottomHeight+" - 80rpx)":"100vh"}},onLoad:function(e){e.store_id?(this.storeId=e.store_id,t.getStorageSync("location")&&(this.latitude=t.getStorageSync("location").latitude,this.longitude=t.getStorageSync("location").longitude),this.name="DIY_STORE_"+this.storeId,this.getHeight(),this.refresh()):this.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},onShow:function(){this.$langConfig.refresh(),this.getDefaultImg(),t.getStorageSync("token")&&this.getMemberId()},mixins:[i.default],methods:{getHeight:function(){var e=this;t.getSystemInfo({success:function(t){e.pageHeight=t.windowHeight+"px"}}),this.$nextTick((function(){var n=t.createSelectorQuery().in(e);n.select(".page-header").boundingClientRect((function(t){e.headerHeight=t.height+"px"})).exec()})),this.$nextTick((function(){var n=t.createSelectorQuery().in(e);n.select(".page-bottom").boundingClientRect((function(t){e.bottomHeight="56px"})).exec()}))},getDiyInfo:function(){var e=this;this.$api.sendRequest({url:"/api/diyview/info",data:{name:this.name},success:function(n){if(0==n.code&&n.data){var i=n.data;if(i.value){e.diyData=JSON.parse(i.value),e.navTitle=e.diyData.global.title,e.diyData.global.popWindow&&-1!=e.diyData.global.popWindow.count&&e.diyData.global.popWindow.imageUrl&&setTimeout((function(){if(1==e.diyData.global.popWindow.count){var n=t.getStorageSync("store_popwindow_count");""!=n&&1!=n||(e.$refs.uniPopupWindow.open(),t.setStorageSync("store_popwindow_count",1))}else 0==e.diyData.global.popWindow.count&&(e.$refs.uniPopupWindow.open(),t.setStorageSync("store_popwindow_count",0))}),500);for(var o=0;o<e.diyData.value.length;o++)"TopCategory"==e.diyData.value[o].controller&&(e.topIndexValue=e.diyData.value[o])}t.stopPullDownRefresh(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}else e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},closePopupWindow:function(){this.$refs.uniPopupWindow.close(),t.setStorageSync("store_popwindow_count",-1)},refresh:function(){this.getDiyInfo(),this.getDefaultImg()},redirectTo:function(t){this.$util.diyRedirectTo(t)},getDefaultImg:function(){this.$api.sendRequest({url:"/api/config/defaultimg",success:function(e){var n=e.data;0==e.code&&n&&t.setStorageSync("default_img",JSON.stringify(n))}})},getMemberId:function(){var t=this;this.$api.sendRequest({url:"/api/member/id",success:function(e){e.code>=0&&(t.memberId=e.data)}})},onShareTimeline:function(){var t="name="+this.name;return this.memberId&&(t+="&source_member="+this.memberId),{title:"",query:t,imageUrl:""}}}};e.default=l}).call(this,n("543d")["default"])},"236f":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={nsNavbar:function(){return n.e("components/ns-navbar/ns-navbar").then(n.bind(null,"7bdc"))},diyIndexPage:function(){return n.e("components/diy-index-page/diy-index-page").then(n.bind(null,"0b5d"))},diyGroup:function(){return n.e("components/diy-group/diy-group").then(n.bind(null,"4294"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"92aa"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"790a"))},diyBottomNav:function(){return n.e("components/diy-bottom-nav/diy-bottom-nav").then(n.bind(null,"df22"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$util.img(t.bgUrl)),i=t.diyData.global.popWindow&&-1!=t.diyData.global.popWindow.count&&t.diyData.global.popWindow.imageUrl?t.$util.img(t.diyData.global.popWindow.imageUrl):null;t.$mp.data=Object.assign({},{$root:{g0:n,g1:i}})},a=[]},3341:function(t,e,n){"use strict";n.r(e);var i=n("236f"),o=n("f81e");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("dd33"),n("cb71");var r,u=n("f0c5"),d=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"5818aa13",null,!1,i["a"],r);e["default"]=d.exports},"6cc0":function(t,e,n){"use strict";(function(t){n("34b0");i(n("66fd"));var e=i(n("3341"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ac90:function(t,e,n){},cb71:function(t,e,n){"use strict";var i=n("d8a9"),o=n.n(i);o.a},d8a9:function(t,e,n){},dd33:function(t,e,n){"use strict";var i=n("ac90"),o=n.n(i);o.a},f81e:function(t,e,n){"use strict";n.r(e);var i=n("13ba"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}},[["6cc0","common/runtime","common/vendor"]]]);
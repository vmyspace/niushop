(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/pintuan/share/share"],{1151:function(i,t,e){"use strict";var n=e("7b47"),a=e.n(n);a.a},"7b47":function(i,t,e){},"974c":function(i,t,e){"use strict";e.r(t);var n=e("b8e7"),a=e("b972");for(var u in a)"default"!==u&&function(i){e.d(t,i,(function(){return a[i]}))}(u);e("1151");var o,r=e("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=l.exports},b8e7:function(i,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return n}));var n={uniCountDown:function(){return e.e("components/uni-count-down/uni-count-down").then(e.bind(null,"1339"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"790a"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"92aa"))}},a=function(){var i=this,t=i.$createElement,e=(i._self._c,i.$util.img("upload/uniapp/pintuan/pintuan_bg.png")),n=i.$util.img(i.groupDetail.sku_image,{size:"big"}),a=i.__map(i.groupDetail.member_list,(function(t,e){var n=i.__get_orig(t),a=e<5&&t.member_img?i.$util.img(t.member_img):null,u=e<5&&!t.member_img?i.$util.img("/upload/uniapp/default_headimg.png"):null;return{$orig:n,g2:a,g3:u}})),u=i.groupDetail.member_list&&i.groupDetail.member_list.length<5?i.$util.img("/upload/uniapp/spelling_who.png"):null,o=i.groupDetail.member_list&&i.groupDetail.member_list.length<5?null:i.$util.img("/upload/uniapp/spelling_who_omit.png"),r=i.$util.img("upload/uniapp/pintuan/pintuan_playing.png");i.$mp.data=Object.assign({},{$root:{g0:e,g1:n,l0:a,g4:u,g5:o,g6:r}})},u=[]},b972:function(i,t,e){"use strict";e.r(t);var n=e("f415"),a=e.n(n);for(var u in n)"default"!==u&&function(i){e.d(t,i,(function(){return n[i]}))}(u);t["default"]=a.a},edf0:function(i,t,e){"use strict";(function(i){e("34b0");n(e("66fd"));var t=n(e("974c"));function n(i){return i&&i.__esModule?i:{default:i}}i(t.default)}).call(this,e("543d")["createPage"])},f415:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(e("c409"));function a(i){return i&&i.__esModule?i:{default:i}}var u=function(){e.e("components/uni-count-down/uni-count-down").then(function(){return resolve(e("1339"))}.bind(null,e)).catch(e.oe)},o={components:{uniCountDown:u},data:function(){return{id:0,groupDetail:{sku_image:""},kill:0,memberId:0}},mixins:[n.default],onLoad:function(i){var t=this;if(!this.addonIsExit.pintuan)return this.$util.showToast({title:"商家未开启拼团",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.id=i.id,this.$langConfig.refresh(),this.getGroupDetail(),this.getMemberId()},methods:{getGroupDetail:function(){var i=this;this.$api.sendRequest({url:"/pintuan/api/order/detail",data:{id:this.id},success:function(t){if(0==t.code){t.data.member_list;for(var e=[],n=0;n<t.data.pintuan_num-t.data.member_list.length;n++){var a="";e.push(a)}i.kill=t.data.pintuan_num-t.data.pintuan_count,t.data.member_list=t.data.member_list.concat(e),t.data.group_end_time>t.timestamp?t.data.timeMachine=i.$util.countDown(t.data.group_end_time-t.timestamp):t.data.timeMachine=null,i.groupDetail=t.data,i.groupDetail.member_list=i.groupDetail.member_list.filter((function(i,t){return i}))}else i.$util.showToast({title:t.message});i.$refs.loadingCover&&i.$refs.loadingCover.hide()},fail:function(t){i.$refs.loadingCover&&i.$refs.loadingCover.hide()}})},getMemberId:function(){var i=this;this.$api.sendRequest({url:"/api/member/id",success:function(t){t.code>=0&&(i.memberId=t.data)}})},toPintuanDetail:function(i){this.$util.redirectTo("/promotionpages/pintuan/detail/detail",{pintuan_id:this.groupDetail.pintuan_id})},toDetail:function(i,t){this.$util.redirectTo("/promotionpages/pintuan/detail/detail",{pintuan_id:this.groupDetail.pintuan_id,group_id:t})},imageError:function(){this.groupDetail.sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},openSharePopup:function(){this.$refs.sharePopup.open()},closeSharePopup:function(){this.$refs.sharePopup.close()},copyUrl:function(){var i=this,t=this.$config.h5Domain+"/promotionpages/pintuan/detail/detail?pintuan_id="+this.groupDetail.pintuan_id+"&group_id="+this.groupDetail.group_id;this.memberId&&(t+="&source_member="+this.memberId),this.$util.copy(t,(function(){i.closeSharePopup()}))},orderDetail:function(i){switch(parseInt(i.order_type)){case 2:this.$util.redirectTo("/pages/order/detail_pickup/detail_pickup",{order_id:i.order_id});break;case 3:this.$util.redirectTo("/pages/order/detail_local_delivery/detail_local_delivery",{order_id:i.order_id});break;case 4:this.$util.redirectTo("/pages/order/detail_virtual/detail_virtual",{order_id:i.order_id});break;default:this.$util.redirectTo("/pages/order/detail/detail",{order_id:i.order_id});break}}},onShareAppMessage:function(i){var t="/promotionpages/pintuan/detail/detail?id="+this.groupDetail.pintuan_goods_id+"&group_id="+this.groupDetail.group_id;return this.memberId&&(t+="&source_member="+this.memberId),{title:"还差"+(this.groupDetail.pintuan_num-this.groupDetail.pintuan_count)+"人拼团成功，"+this.groupDetail.sku_name,imageUrl:this.$util.img(this.groupDetail.sku_image,{size:"big"}),path:t,success:function(i){},fail:function(i){}}}};t.default=o}},[["edf0","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/point/detail/detail"],{"126e":function(n,o,t){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=a(t("ce70")),e=a(t("c409")),u=a(t("f385"));function a(n){return n&&n.__esModule?n:{default:n}}var p=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("92aa"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/uni-number-box/uni-number-box").then(function(){return resolve(t("092d"))}.bind(null,t)).catch(t.oe)},r=function(){t.e("components/ns-goods-sku/ns-goods-sku").then(function(){return resolve(t("ac46"))}.bind(null,t)).catch(t.oe)},f=function(){t.e("components/toTop/toTop").then(function(){return resolve(t("1aeb"))}.bind(null,t)).catch(t.oe)},c={components:{uniPopup:p,uniNumberBox:s,nsGoodsSku:r,toTop:f},data:function(){return{id:0,pointInfo:{image:""},isIphoneX:!1,isLogin:!1,memberPoint:0}},mixins:[e.default,u.default],onLoad:function(n){this.isIphoneX=this.$util.uniappIsIPhoneX(),n.id?(this.id=n.id,this.getPointInfo()):this.$util.redirectTo("/promotionpages/point/list/list",{},"redirectTo")},onShow:function(){this.$langConfig.refresh()},computed:{storeToken:function(){return this.$store.state.token},enough:function(){return parseInt(this.pointInfo.point)>parseInt(this.memberPoint)}},watch:{storeToken:function(n,o){n&&(this.isLogin=!0,this.getPointInfo())}},methods:{getAccountInfo:function(o,t){var i=this;n.getStorageSync("token")?this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(n){if(0==n.code&&n.data){i.isLogin=!0,i.memberPoint=n.data.point;var e=Math.floor(parseInt(n.data.point)/t);i.Max=o>=e?e:o}else i.$util.showToast({title:n.message});i.$refs.loadingCover&&i.$refs.loadingCover.hide()}}):(this.isLogin=!1,this.$refs.loadingCover&&this.$refs.loadingCover.hide())},getPointInfo:function(){var n=this;this.$api.sendRequest({url:"/pointexchange/api/goods/detail",data:{id:this.id},success:function(o){if(o.code>=0&&0!==o.data.length){n.pointInfo=o.data,n.$langConfig.title(n.pointInfo.name);var t=2==n.pointInfo.type?n.pointInfo.count:n.pointInfo.stock;if(1==n.pointInfo.type){if(n.pointInfo.image=n.pointInfo["sku_image"],n.pointInfo.sku_spec_format&&(n.pointInfo.sku_spec_format=JSON.parse(n.pointInfo.sku_spec_format)),n.pointInfo.goods_attr_format){var e=JSON.parse(n.pointInfo.goods_attr_format);n.pointInfo.goods_attr_format=n.$util.unique(e,"attr_id");for(var u=0;u<n.pointInfo.goods_attr_format.length;u++)for(var a=0;a<e.length;a++)n.pointInfo.goods_attr_format[u].attr_id==e[a].attr_id&&n.pointInfo.goods_attr_format[u].attr_value_id!=e[a].attr_value_id&&(n.pointInfo.goods_attr_format[u].attr_value_name+="、"+e[a].attr_value_name)}n.pointInfo.goods_spec_format&&(n.pointInfo.goods_spec_format=JSON.parse(n.pointInfo.goods_spec_format))}n.pointInfo.unit=n.pointInfo.unit||"件",n.pointInfo.content&&(n.pointInfo.content=(0,i.default)(n.pointInfo.content)),n.getAccountInfo(t,n.pointInfo.point)}else n.$util.showToast({title:o.message}),setTimeout((function(){n.$util.redirectTo("/promotionpages/point/list/list",{},"redirectTo")}),1e3)}})},exchange:function(){n.getStorageSync("token")?this.$refs.goodsSku.show("point"):this.$refs.login.open("/promotionpages/point/detail/detail?id="+this.id)},refreshGoodsSkuDetail:function(n){Object.assign(this.pointInfo,n),this.pointInfo.unit=this.pointInfo.unit||"件"},openMerchantsServicePopup:function(){this.$refs.merchantsServicePopup.open()},closeMerchantsServicePopup:function(){this.$refs.merchantsServicePopup.close()},openAttributePopup:function(){this.$refs.attributePopup.open()},closeAttributePopup:function(){this.$refs.attributePopup.close()},imageError:function(){this.pointInfo.image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};o.default=c}).call(this,t("543d")["default"])},"30b6":function(n,o,t){},3493:function(n,o,t){"use strict";t.r(o);var i=t("126e"),e=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(o,n,(function(){return i[n]}))}(u);o["default"]=e.a},4158:function(n,o,t){"use strict";var i=t("b2aa"),e=t.n(i);e.a},6925:function(n,o,t){"use strict";var i=t("30b6"),e=t.n(i);e.a},"8c5b":function(n,o,t){"use strict";t.r(o);var i=t("ad22"),e=t("3493");for(var u in e)"default"!==u&&function(n){t.d(o,n,(function(){return e[n]}))}(u);t("4158"),t("6925");var a,p=t("f0c5"),s=Object(p["a"])(e["default"],i["b"],i["c"],!1,null,"8b36eb54",null,!1,i["a"],a);o["default"]=s.exports},ad22:function(n,o,t){"use strict";t.d(o,"b",(function(){return e})),t.d(o,"c",(function(){return u})),t.d(o,"a",(function(){return i}));var i={uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"92aa"))},nsGoodsSku:function(){return t.e("components/ns-goods-sku/ns-goods-sku").then(t.bind(null,"ac46"))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,"790a"))},nsLogin:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-login/ns-login")]).then(t.bind(null,"2893"))}},e=function(){var n=this,o=n.$createElement,t=(n._self._c,2==n.pointInfo.type&&n.pointInfo.image?n.$util.img(n.pointInfo.image):null),i=2!=n.pointInfo.type||n.pointInfo.image?null:n.$util.img("upload/uniapp/point/coupon.png"),e=2==n.pointInfo.type?n.$util.img("upload/uniapp/point/coupon.png"):null,u=2!=n.pointInfo.type&&3==n.pointInfo.type&&n.pointInfo.image?n.$util.img(n.pointInfo.image):null,a=2==n.pointInfo.type||3!=n.pointInfo.type||n.pointInfo.image?null:n.$util.img("upload/uniapp/point/hongbao.png"),p=2!=n.pointInfo.type&&3==n.pointInfo.type?n.$util.img("upload/uniapp/point/hongbao.png"):null,s=2!=n.pointInfo.type&&3!=n.pointInfo.type?n.$util.img(n.pointInfo.image):null,r="0.00"!=n.pointInfo.exchange_price&&n.pointInfo.pay_type>0?n.$lang("common.currencySymbol"):null,f=n.pointInfo.price?n.$lang("common.currencySymbol"):null,c=n.pointInfo.coupon_type&&1!=n.pointInfo.validity_type?n.$util.timeStampTurnTime(n.pointInfo.end_time):null;n.$mp.data=Object.assign({},{$root:{g0:t,g1:i,g2:e,g3:u,g4:a,g5:p,g6:s,m0:r,m1:f,g7:c}})},u=[]},b2aa:function(n,o,t){},cba7:function(n,o,t){"use strict";(function(n){t("34b0");i(t("66fd"));var o=i(t("8c5b"));function i(n){return n&&n.__esModule?n:{default:n}}n(o.default)}).call(this,t("543d")["createPage"])}},[["cba7","common/runtime","common/vendor"]]]);
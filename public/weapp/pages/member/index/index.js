(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/index/index"],{"1beb":function(e,n,t){},"1c2d":function(e,n,t){"use strict";var i=t("1beb"),a=t.n(i);a.a},"2e51":function(e,n,t){"use strict";var i=t("b06f"),a=t.n(i);a.a},3557:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}));var i={uniGrid:function(){return t.e("components/uni-grid/uni-grid").then(t.bind(null,"787e"))},uniGridItem:function(){return t.e("components/uni-grid-item/uni-grid-item").then(t.bind(null,"75cf"))},nsLogin:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-login/ns-login")]).then(t.bind(null,"2893"))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,"790a"))},diyBottomNav:function(){return t.e("components/diy-bottom-nav/diy-bottom-nav").then(t.bind(null,"df22"))}},a=function(){var e=this,n=e.$createElement,t=(e._self._c,e.token&&e.memberInfo.headimg?e.$util.img(e.memberInfo.headimg):null),i=e.token&&!e.memberInfo.headimg?e.$util.getDefaultImage():null,a=e.token?null:e.$util.getDefaultImage(),o=e.token?null:e.$lang("login"),u=e.token?null:e.$lang("loginTpis"),r=(parseFloat(e.memberInfo.balance)+parseFloat(e.memberInfo.balance_money)).toFixed(2),l=e.$lang("balance"),f=parseInt(e.memberInfo.point),d=e.$lang("point"),s=e.$lang("coupon"),c=e.$lang("allOrders"),m=e.$lang("seeAllOrders"),g=e.$util.img("upload/uniapp/member/index/order/default_order_1.png"),p=e.$lang("waitPay"),h=e.$util.img("upload/uniapp/member/index/order/default_order_2.png"),b=e.$lang("readyDelivery"),v=e.$util.img("upload/uniapp/member/index/order/default_order_3.png"),I=e.$lang("waitDelivery"),y=e.$util.img("upload/uniapp/member/index/order/default_order_4.png"),x=e.$lang("waitEvaluate"),w=e.$util.img("upload/uniapp/member/index/order/default_order_5.png"),$=e.$lang("refunding"),S=1==e.defaultInfo.level?e.$util.img("upload/uniapp/member/index/member.png"):null,_=1==e.defaultInfo.level?e.$util.img("upload/uniapp/member/index/v.png"):null,C="palace"==e.defaultInfo.menuStyle&&"default"!=e.defaultInfo.topStyle?e.__map(e.defaultInfo.menuList,(function(n,t){var i=e.__get_orig(n),a=e.menuIsShow(n),o=a?e.$util.img(n.img):null;return{$orig:i,m13:a,g11:o}})):null,k="default"==e.defaultInfo.topStyle&&e.addonIsExit.membersignin&&1==e.signState?e.$util.img("upload/uniapp/member/index/menu/default_sign.png"):null,D="default"==e.defaultInfo.topStyle?e.$util.img("upload/uniapp/member/index/menu/default_person.png"):null,E="default"==e.defaultInfo.topStyle?e.$lang("personInfo"):null,N="default"==e.defaultInfo.topStyle?e.$util.img("upload/uniapp/member/index/menu/default_address.png"):null,T="default"==e.defaultInfo.topStyle?e.$lang("receivingAddress"):null,R="default"==e.defaultInfo.topStyle&&e.Development&&e.addonIsExit.memberwithdraw&&e.withdrawConfig&&e.withdrawConfig.is_use?e.$util.img("upload/uniapp/member/index/menu/default_cash.png"):null,B="default"==e.defaultInfo.topStyle&&e.Development&&e.addonIsExit.memberwithdraw&&e.withdrawConfig&&e.withdrawConfig.is_use?e.$lang("accountList"):null,L="default"==e.defaultInfo.topStyle?e.$util.img("upload/uniapp/member/index/menu/default_discount.png"):null,P="default"==e.defaultInfo.topStyle?e.$lang("couponList"):null,O="default"==e.defaultInfo.topStyle&&e.Development&&e.addonIsExit.pintuan?e.$util.img("upload/uniapp/member/index/menu/default_store.png"):null,q="default"==e.defaultInfo.topStyle&&e.Development&&e.addonIsExit.pintuan?e.$lang("mySpellList"):null,M="default"==e.defaultInfo.topStyle&&e.Development&&e.addonIsExit.gift?e.$util.img("upload/uniapp/member/index/menu/default_gift.png"):null,G="default"==e.defaultInfo.topStyle&&e.Development&&e.addonIsExit.gift?e.$lang("winningRecord"):null,j="default"==e.defaultInfo.topStyle?e.$util.img("upload/uniapp/member/index/menu/default_like.png"):null,F="default"==e.defaultInfo.topStyle?e.$lang("myCollection"):null,V="default"==e.defaultInfo.topStyle?e.$util.img("upload/uniapp/member/index/menu/default_toot.png"):null,U="default"==e.defaultInfo.topStyle?e.$lang("myTracks"):null,A="default"==e.defaultInfo.topStyle&&e.Development&&e.addonIsExit.pointexchange?e.$util.img("upload/uniapp/member/index/menu/default_point_recond.png"):null,J="default"==e.defaultInfo.topStyle&&e.Development&&e.addonIsExit.pointexchange?e.$lang("exchangeOrder"):null,W="default"==e.defaultInfo.topStyle&&e.authInfo.is_verifier?e.$util.img("upload/uniapp/member/index/menu/default_verification.png"):null,z="default"==e.defaultInfo.topStyle&&e.authInfo.is_verifier?e.$lang("verification"):null,H="default"==e.defaultInfo.topStyle&&e.Development&&e.addonIsExit.fenxiao&&e.fenxiaoBasicsConfig&&e.fenxiaoBasicsConfig.level>0?e.$util.img("upload/uniapp/member/index/menu/default_fenxiao.png"):null,K="default"==e.defaultInfo.topStyle&&e.addonIsExit.bargain?e.$util.img("upload/uniapp/member/index/menu/default_bargain.png"):null,Q="default"==e.defaultInfo.topStyle&&e.addonIsExit.bargain?e.$lang("myBargain"):null,X="palace"!=e.defaultInfo.menuStyle&&"default"!=e.defaultInfo.topStyle?e.__map(e.defaultInfo.menuList,(function(n,t){var i=e.__get_orig(n),a=e.menuIsShow(n),o=a?e.$util.img(n.img):null;return{$orig:i,m25:a,g25:o}})):null;e._isMounted||(e.e0=function(n){return e.$util.redirectTo("/pages/member/info/info")},e.e1=function(n){e.memberInfo.headimg=e.$util.getDefaultImage().default_headimg},e.e2=function(n){return e.$util.redirectTo("/otherpages/member/level/level")},e.e3=function(n){return e.$util.redirectTo("/pages/member/info/info")}),e.$mp.data=Object.assign({},{$root:{g0:t,g1:i,g2:a,m0:o,m1:u,g3:r,m2:l,m3:f,m4:d,m5:s,m6:c,m7:m,g4:g,m8:p,g5:h,m9:b,g6:v,m10:I,g7:y,m11:x,g8:w,m12:$,g9:S,g10:_,l0:C,g12:k,g13:D,m14:E,g14:N,m15:T,g15:R,m16:B,g16:L,m17:P,g17:O,m18:q,g18:M,m19:G,g19:j,m20:F,g20:V,m21:U,g21:A,m22:J,g22:W,m23:z,g23:H,g24:K,m24:Q,l1:X}})},o=[]},"6eec":function(e,n,t){"use strict";t.r(n);var i=t("a9c2"),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},"9b3e":function(e,n,t){"use strict";t.r(n);var i=t("3557"),a=t("6eec");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("1c2d"),t("2e51");var u,r=t("f0c5"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"ffa553b8",null,!1,i["a"],u);n["default"]=l.exports},a9c2:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,a=l(t("a34a")),o=l(t("f385")),u=l(t("0548")),r=l(t("c409"));function l(e){return e&&e.__esModule?e:{default:e}}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n,t,i,a,o,u){try{var r=e[o](u),l=r.value}catch(f){return void t(f)}r.done?n(l):Promise.resolve(l).then(i,a)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(i,a){var o=e.apply(n,t);function u(e){d(o,i,a,u,r,"next",e)}function r(e){d(o,i,a,u,r,"throw",e)}u(void 0)}))}}var c=function(){t.e("components/uni-grid/uni-grid").then(function(){return resolve(t("787e"))}.bind(null,t)).catch(t.oe)},m=function(){t.e("components/uni-grid-item/uni-grid-item").then(function(){return resolve(t("75cf"))}.bind(null,t)).catch(t.oe)},g=function(){t.e("components/diy-bottom-nav/diy-bottom-nav").then(function(){return resolve(t("df22"))}.bind(null,t)).catch(t.oe)},p=function(){t.e("components/toTop/toTop").then(function(){return resolve(t("1aeb"))}.bind(null,t)).catch(t.oe)},h=function(){t.e("components/ns-copyright/ns-copyright").then(function(){return resolve(t("2b8e"))}.bind(null,t)).catch(t.oe)},b=(i={components:{uniGrid:c,uniGridItem:m,diyBottomNav:g,toTop:p,nsCopyRight:h},data:function(){return{token:"",memberInfo:{balance:0,balance_money:0,point:0},couponNum:0,orderNum:{waitPay:0,readyDelivery:0,waitDelivery:0,waitEvaluate:0,refunding:0},isVerification:!0,copyrightLoad:0,bottom_info:{},authInfo:{is_verifier:!1},shopTop:!1,scrollTop:0,shopConfig:null,promoterInfo:null,withdrawConfig:null,fenxiaoBasicsConfig:null,defaultInfo:{topStyle:"default",bgColor:"#ff454f",textColor:"#fff",bgImg:"",menuList:[],insertGap:"0",menuStyle:"palace",level:1},signState:1,evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1}}},mixins:[o.default,u.default,r.default],onLoad:function(n){e.hideTabBar()},computed:{storeToken:function(){return this.$store.state.token},defaultBgColor:function(){var e="";return"default"!=this.defaultInfo.topStyle&&(e="background:"+this.defaultInfo.bgColor),e},defaultBgImg:function(){var e="";return e="default"!=this.defaultInfo.topStyle?this.defaultInfo.bgImg?this.$util.img(this.defaultInfo.bgImg):"":this.$util.img("upload/uniapp/member/index/member_bg.png"),e},defaultTextColor:function(){var e="";return"default"!=this.defaultInfo.topStyle&&(e="color:"+this.defaultInfo.textColor+" !important"),e}},watch:{storeToken:function(){var e=s(a.default.mark((function e(n,t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.addonIsExit.membersignin){e.next=3;break}return e.next=3,this.getSignState();case 3:return e.next=5,this.getMemberInfo();case 5:this.getOrderNum(),this.getCouponNum(),this.checkIsVerifier();case 8:case"end":return e.stop()}}),e,this)})));function n(n,t){return e.apply(this,arguments)}return n}()}},f(i,"onLoad",(function(){this.addonIsExit.memberwithdraw&&this.getWithdrawConfig(),this.addonIsExit.fenxiao&&this.getFenxiaoBasicsConfig(),this.getEvaluateConfig()})),f(i,"onReady",(function(){var e=this;return s(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.addonIsExit.membersignin){n.next=3;break}return n.next=3,e.getSignState();case 3:return n.next=5,e.getDefaultInfo();case 5:e.$refs.loadingCover&&e.$refs.loadingCover.hide();case 6:case"end":return n.stop()}}),n)})))()})),f(i,"onShow",(function(){var n=this;return s(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.$langConfig.refresh(),n.token=e.getStorageSync("token"),e.getStorageSync("userInfo")&&(n.memberInfo=e.getStorageSync("userInfo")),!n.token){t.next=14;break}if(!n.addonIsExit.membersignin){t.next=7;break}return t.next=7,n.getSignState();case 7:return t.next=9,n.getMemberInfo();case 9:n.getOrderNum(),n.getCouponNum(),n.checkIsVerifier(),t.next=15;break;case 14:n.initInfo();case 15:case"end":return t.stop()}}),t)})))()})),f(i,"methods",{getSignState:function(){var e=this;return s(a.default.mark((function n(){var t;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.sendRequest({url:"/api/membersignin/getSignStatus",async:!1});case 2:t=n.sent,0==t.code&&(e.signState=t.data.is_use);case 4:case"end":return n.stop()}}),n)})))()},getDefaultInfo:function(){var e=this;return s(a.default.mark((function n(){var t;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.sendRequest({url:"/api/diyview/memberindex",async:!1});case 2:t=n.sent,0==t.code&&(e.defaultInfo.topStyle=t.data.topStyle,e.defaultInfo.bgColor=t.data.bgColor,e.defaultInfo.textColor=t.data.textColor,e.defaultInfo.bgImg=t.data.bgImg,e.defaultInfo.menuStyle=t.data.menuStyle,e.defaultInfo.menuList=t.data.menuList,e.defaultInfo.insertGap=t.data.insertGap,e.defaultInfo.level=t.data.level||1);case 4:case"end":return n.stop()}}),n)})))()},redirectToLink:function(n){e.getStorageSync("token")?this.$util.redirectTo(n):this.$refs.login.open(n)},initInfo:function(){this.token="",this.memberInfo={balance:"0.00",balance_money:"0.00",point:0},this.couponNum=0,this.orderNum={waitPay:0,readyDelivery:0,waitDelivery:0,waitEvaluate:0,refunding:0},this.authInfo={is_verifier:!1},e.stopPullDownRefresh()},getMemberInfo:function(){var n=this;return s(a.default.mark((function t(){var i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$api.sendRequest({url:"/api/member/info",async:!1});case 2:i=t.sent,i.code>=0&&i.data?(n.token=e.getStorageSync("token"),n.memberInfo=i.data,e.setStorageSync("userInfo",n.memberInfo)):(n.token="",n.initInfo(),e.removeStorageSync("token"),e.removeStorageSync("userInfo")),e.stopPullDownRefresh();case 5:case"end":return t.stop()}}),t)})))()},onPullDownRefresh:function(){e.getStorageSync("token")?this.getMemberInfo():this.initInfo()},getOrderNum:function(){var e=this;this.$api.sendRequest({url:"/api/order/num",data:{order_status:"waitpay,waitsend,waitconfirm,waitrate,refunding"},success:function(n){0==n.code&&(e.orderNum.waitPay=n.data.waitpay,e.orderNum.readyDelivery=n.data.waitsend,e.orderNum.waitDelivery=n.data.waitconfirm,e.orderNum.waitEvaluate=n.data.waitrate,e.orderNum.refunding=n.data.refunding),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getCouponNum:function(){var e=this;this.$api.sendRequest({url:"/coupon/api/coupon/num",success:function(n){0==n.code&&(e.couponNum=n.data)}})},checkIsVerifier:function(){var e=this;this.$api.sendRequest({url:"/api/verify/checkisverifier",success:function(n){e.authInfo.is_verifier=0==n.code,e.$forceUpdate()}})},jumpLevel:function(){e.getStorageSync("token")?this.$util.redirectTo("/otherpages/member/level/level"):this.$refs.login.open("/pages/member/index/index")},getWithdrawConfig:function(){var e=this;this.$api.sendRequest({url:"/api/memberwithdraw/config",success:function(n){n.code>=0&&n.data&&(e.withdrawConfig=n.data,e.$forceUpdate())}})},getFenxiaoBasicsConfig:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/basics",success:function(n){n.code>=0&&(e.fenxiaoBasicsConfig=n.data,e.$forceUpdate())}})},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(n){if(0==n.code){var t=n.data;e.evaluateConfig=t}}})},menuIsShow:function(e){switch(e.tag){case"fenxiao":return 1==this.addonIsExit.fenxiao&&this.fenxiaoBasicsConfig&&this.fenxiaoBasicsConfig.level>0;case"memberwithdraw":return this.withdrawConfig&&1==this.withdrawConfig.is_use;case"membersignin":return 1==this.signState;case"verifier":return this.authInfo.is_verifier;default:return!0}}}),i);n.default=b}).call(this,t("543d")["default"])},b06f:function(e,n,t){},eedb:function(e,n,t){"use strict";(function(e){t("34b0");i(t("66fd"));var n=i(t("9b3e"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["eedb","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/game/smash_eggs/smash_eggs"],{"21f0":function(e,n,t){"use strict";t.r(n);var i=t("e7ca"),o=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=o.a},"4f28":function(e,n,t){},"7e83":function(e,n,t){"use strict";var i=t("4f28"),o=t.n(i);o.a},"7f3b":function(e,n,t){"use strict";var i=t("a78a"),o=t.n(i);o.a},"8cc6":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}));var i={lTime:function(){return Promise.all([t.e("common/vendor"),t.e("components/l-time/l-time")]).then(t.bind(null,"9050"))},uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"92aa"))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,"790a"))},nsLogin:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-login/ns-login")]).then(t.bind(null,"2893"))}},o=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$util.img("upload/uniapp/game/egg_head.png")),i=e.$util.img("upload/uniapp/game/golden_eggs.png"),o=e.$util.img("upload/uniapp/game/golden_eggs.png"),u=e.$util.img("upload/uniapp/game/golden_eggs.png"),a=e.gameInfo.is_show_winner&&e.gameInfo.draw_record.length?e.__map(e.gameInfo.draw_record,(function(n,t){var i=e.__get_orig(n),o=e._f("cover")(n.member_nick_name);return{$orig:i,f0:o}})):null,s=0==e.eggStatus?e.$util.img("upload/uniapp/game/golden_eggs_0.png"):null,r=1==e.eggStatus?e.$util.img("upload/uniapp/game/golden_eggs_1.png"):null,l=2==e.eggStatus?e.$util.img("upload/uniapp/game/golden_eggs_2.png"):null,g=e.$util.img("upload/uniapp/game/hammer.png"),c=e.result.is_winning&&1==e.result.award_type?e.$util.img("upload/uniapp/game/point.png"):null,p=e.result.is_winning&&2==e.result.award_type?e.$util.img("upload/uniapp/game/balance.png"):null,d=e.result.is_winning&&3==e.result.award_type?e.$util.img("upload/uniapp/game/coupon.png"):null,m=e.result.is_winning&&4==e.result.award_type?e.$util.img("upload/uniapp/game/gift.png"):null,f=e.result.is_winning?e.$util.img("upload/uniapp/game/result_yes.png"):null,h=e.result.is_winning?null:e.$util.img("upload/uniapp/game/result_look.png"),_=e.result.is_winning?null:e.$util.img("upload/uniapp/game/result_no.png"),$=e.$util.img("upload/uniapp/game/rule_head.png"),v=e.$util.timeStampTurnTime(e.gameInfo.start_time),w=e.$util.timeStampTurnTime(e.gameInfo.end_time);e._isMounted||(e.e0=function(n){return e.$util.redirectTo("/otherpages/game/record/record",{id:e.id})}),e.$mp.data=Object.assign({},{$root:{g0:t,g1:i,g2:o,g3:u,l0:a,g4:s,g5:r,g6:l,g7:g,g8:c,g9:p,g10:d,g11:m,g12:f,g13:h,g14:_,g15:$,g16:v,g17:w}})},u=[]},"9c63":function(e,n,t){"use strict";(function(e){t("34b0");i(t("66fd"));var n=i(t("d82c"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a78a:function(e,n,t){},d82c:function(e,n,t){"use strict";t.r(n);var i=t("8cc6"),o=t("21f0");for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t("7f3b"),t("7e83");var a,s=t("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"4ed68eb4",null,!1,i["a"],a);n["default"]=r.exports},e7ca:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t("c409"));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("92aa"))}.bind(null,t)).catch(t.oe)},a=function(){Promise.all([t.e("common/vendor"),t.e("components/l-time/l-time")]).then(function(){return resolve(t("9050"))}.bind(null,t)).catch(t.oe)},s={components:{uniPopup:u,LTime:a},data:function(){return{token:null,id:0,gameInfo:{no_winning_desc:"",surplus_num:0},result:{is_winning:0,award_type:0,point:0,balance:0,relate_name:""},isClick:!1,eggStatus:0,scrollTimer:null,point:0,animate:!1}},onShow:function(){var n=this;if(!this.addonIsExit.egg)return this.$util.showToast({title:"商家未开启砸金蛋",mask:!0,duration:2e3}),void setTimeout((function(){n.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),e.getStorageSync("token")&&(this.getMemberPointInfo(),this.token=e.getStorageSync("token"))},onLoad:function(e){e.id&&(this.id=e.id),this.getGameInfo()},mixins:[i.default],computed:{storeToken:function(){return this.$store.state.token}},watch:{storeToken:function(n,t){n&&(this.token=e.getStorageSync("token"),this.getMemberPointInfo(),this.getGameInfo())}},methods:{getMemberPointInfo:function(){var e=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(n){n.data&&(e.point=parseInt(n.data.point))}})},lottery:function(){var n=this;e.getStorageSync("token")?1==this.gameInfo.status&&(this.gameInfo.surplus_num<=0?this.$util.showToast({title:"您的抽奖次数已用完"}):this.gameInfo.points>0&&this.point<this.gameInfo.points?this.$util.showToast({title:"积分不足"}):this.isClick||(this.isClick=!0,this.$api.sendRequest({url:"/egg/api/egg/lottery",data:{id:this.id},success:function(e){e.code>=0?(n.result=e.data,n.start(),n.point-=n.gameInfo.points,n.gameInfo.surplus_num-=1):n.$util.showToast({title:e.message})}}))):this.$refs.login.open("/otherpages/game/smash_eggs/smash_eggs?id="+this.id)},getGameInfo:function(){var e=this;this.$api.sendRequest({url:"/egg/api/egg/info",data:{id:this.id},success:function(n){n.code>=0&&n.data?(e.gameInfo=n.data,e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.gameInfo.is_show_winner&&e.gameInfo.draw_record.length>6&&(e.scrollTimer=setInterval(e.scrollRecord,2e3))):(e.$util.showToast({title:"未获取到活动信息！"}),setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500))},fail:function(n){e.$util.showToast({title:"未获取到活动信息！"}),setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500)}})},start:function(){var e=this;this.$refs.transitionPopup.open(),setTimeout((function(){e.eggStatus=1}),1e3),setTimeout((function(){e.eggStatus=2}),3e3),setTimeout((function(){e.$refs.transitionPopup.close(),e.$refs.resultPopup.open()}),3300)},scrollRecord:function(){var e=this;this.animate=!0,setTimeout((function(){e.gameInfo.draw_record.push(e.gameInfo.draw_record[0]),e.gameInfo.draw_record.shift(),e.animate=!1}),1e3)},closePopup:function(){this.isClick=!1,this.eggStatus=0,this.$refs.resultPopup.close()},openRulePopup:function(){this.$refs.rulePopup.open()},closeRulePopup:function(){this.$refs.rulePopup.close()}},filters:{cover:function(e){return"string"==typeof e&&e.length>0?e.substr(0,1)+"******"+e.substr(-1):""}},onHide:function(){clearInterval(this.scrollTimer)}};n.default=s}).call(this,t("543d")["default"])}},[["9c63","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bind-mobile/bind-mobile"],{"2aced":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("50ee"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){a.e("components/uni-popup/uni-popup").then(function(){return resolve(a("92aa"))}.bind(null,a)).catch(a.oe)},c=function(){Promise.all([a.e("common/vendor"),a.e("components/register-reward/register-reward")]).then(function(){return resolve(a("87d9"))}.bind(null,a)).catch(a.oe)},r={name:"bind-mobile",components:{uniPopup:o,registerReward:c},mixins:[n.default],data:function(){return{captchaConfig:0,captcha:{id:"",img:""},dynacodeData:{seconds:120,timer:null,codeText:"获取动态码",isSend:!1},formData:{key:"",mobile:"",vercode:"",dynacode:""},isSub:!1}},created:function(){this.getCaptchaConfig()},methods:{open:function(){this.$refs.bindMobile.open()},cancel:function(){this.$refs.bindMobile.close()},confirm:function(){var t=this,a=e.getStorageSync("authInfo"),n={mobile:this.formData.mobile,key:this.formData.key,code:this.formData.dynacode};if(""!=this.captcha.id&&(n.captcha_id=this.captcha.id,n.captcha_code=this.formData.vercode),Object.keys(a).length&&Object.assign(n,a),a.avatarUrl&&(n.headimg=a.avatarUrl),a.nickName&&(n.nickname=a.nickName),e.getStorageSync("source_member")&&(n.source_member=e.getStorageSync("source_member")),this.verify(n)){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/tripartite/mobile",data:n,success:function(a){a.code>=0?(e.setStorage({key:"token",data:a.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo")}}),t.$store.commit("setToken",a.data.token),t.$store.dispatch("getCartNumber"),t.$refs.bindMobile.close(),a.data.is_register&&t.$refs.registerReward.getReward()&&t.$refs.registerReward.open()):(t.isSub=!1,t.getCaptcha(),t.$util.showToast({title:a.message}))},fail:function(e){t.isSub=!1,t.getCaptcha()}})}},verify:function(e){var t=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];1==this.captchaConfig&&""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")}),t.push({name:"code",checkType:"required",errorMsg:this.$lang("dynacodePlaceholder")});var a=n.default.check(e,t);return!!a||(this.$util.showToast({title:n.default.error}),!1)},getCaptchaConfig:function(){var e=this;this.$api.sendRequest({url:"/api/config/getCaptchaConfig",success:function(t){t.code>=0&&(e.captchaConfig=t.data.data.value.shop_reception_login,e.captchaConfig&&e.getCaptcha())}})},getCaptcha:function(){var e=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(t){t.code>=0&&(e.captcha=t.data,e.captcha.img=e.captcha.img.replace(/\r\n/g,""))}})},sendMobileCode:function(){var e=this;if(120==this.dynacodeData.seconds){var t={mobile:this.formData.mobile,captcha_id:this.captcha.id,captcha_code:this.formData.vercode},a=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];1==this.captchaConfig&&a.push({name:"captcha_code",checkType:"required",errorMsg:"请输入验证码"});var i=n.default.check(t,a);i?this.dynacodeData.isSend||(this.dynacodeData.isSend=!0,this.$api.sendRequest({url:"/api/tripartite/mobileCode",data:t,success:function(t){e.dynacodeData.isSend=!1,t.code>=0?(e.formData.key=t.data.key,120==e.dynacodeData.seconds&&null==e.dynacodeData.timer&&(e.dynacodeData.timer=setInterval((function(){e.dynacodeData.seconds--,e.dynacodeData.codeText=e.dynacodeData.seconds+"s后可重新获取"}),1e3))):e.$util.showToast({title:t.message})},fail:function(){e.$util.showToast({title:"request:fail"}),e.dynacodeData.isSend=!1}})):this.$util.showToast({title:n.default.error})}},mobileAuthLogin:function(t){var a=this;if("getPhoneNumber:ok"==t.detail.errMsg){var n=e.getStorageSync("authInfo"),i={iv:t.detail.iv,encryptedData:t.detail.encryptedData};if(Object.keys(n).length&&Object.assign(i,n),n.avatarUrl&&(i.headimg=n.avatarUrl),n.nickName&&(i.nickname=n.nickName),e.getStorageSync("source_member")&&(i.source_member=e.getStorageSync("source_member")),this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/tripartite/mobileauth",data:i,success:function(t){t.code>=0?(e.setStorage({key:"token",data:t.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),a.$store.dispatch("getCartNumber")}}),a.$store.commit("setToken",t.data.token),a.$refs.bindMobile.close(),t.data.is_register&&a.$refs.registerReward.getReward()&&a.$refs.registerReward.open()):(a.isSub=!1,a.$util.showToast({title:t.message}))},fail:function(e){a.isSub=!1,a.$util.showToast({title:"request:fail"})}})}}},watch:{"dynacodeData.seconds":{handler:function(e,t){0==e&&(clearInterval(this.dynacodeData.timer),this.dynacodeData={seconds:120,timer:null,codeText:"获取动态码",isSend:!1})},immediate:!0,deep:!0}}};t.default=r}).call(this,a("543d")["default"])},"2e8d":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uniPopup:function(){return a.e("components/uni-popup/uni-popup").then(a.bind(null,"92aa"))},registerReward:function(){return Promise.all([a.e("common/vendor"),a.e("components/register-reward/register-reward")]).then(a.bind(null,"87d9"))}},i=function(){var e=this,t=e.$createElement,a=(e._self._c,e.$util.img("/upload/uniapp/member/login.png"));e.$mp.data=Object.assign({},{$root:{g0:a}})},o=[]},5116:function(e,t,a){"use strict";a.r(t);var n=a("2aced"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"5d60":function(e,t,a){"use strict";var n=a("919d"),i=a.n(n);i.a},"919d":function(e,t,a){},b1f8:function(e,t,a){"use strict";a.r(t);var n=a("2e8d"),i=a("5116");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("5d60");var c,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bind-mobile/bind-mobile-create-component',
    {
        'components/bind-mobile/bind-mobile-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b1f8"))
        })
    },
    [['components/bind-mobile/bind-mobile-create-component']]
]);

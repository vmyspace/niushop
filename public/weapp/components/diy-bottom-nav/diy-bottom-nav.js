(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-bottom-nav/diy-bottom-nav"],{"0670":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"diy-bottom-nav",props:{value:{type:Object},type:{type:String,default:""}},data:function(){return{update:0,currentRoute:"",special:["pages/goods/cart/cart"],specialPage:"",isIphoneX:!1,jumpFlag:!0,bottomNav:{},textHoverColor:"",textColor:"",backgroundColor:"",list:{},bottomType:1}},mounted:function(){var t=getCurrentPages()[getCurrentPages().length-1];this.currentRoute=t.route,this.getBottomNav(),this.$store.dispatch("getCartNumber")},computed:{cartNumber:function(){return this.$store.state.cartNumber},isBulge:function(){return!1}},methods:{redirectTo:function(e){var o=this;if(this.$emit("callback"),this.jumpFlag){if(this.jumpFlag=!1,setTimeout((function(){o.jumpFlag=!0}),300),null==e||""==e||!e.wap_url)return!1;if(-1!=e.wap_url.indexOf(this.currentRoute))return!1;for(var r=!0,n=getCurrentPages().reverse(),u=0;u<n.length;u++)if(-1!=e.wap_url.indexOf(n[u].route)){r=!1,t.navigateBack({delta:u});break}r&&this.$util.redirectTo(e.wap_url)}},verify:function(t){return!(null==t||""==t||!t.wap_url)&&-1!=t.wap_url.indexOf(this.currentRoute)},getBottomNav:function(){var t=this;this.$api.sendRequest({url:"/api/diyview/bottomNav",data:{},success:function(e){var o=e.data;if(o&&o.value&&o.value.length){var r=JSON.parse(o.value);t.bottomNav=r,t.textColor=r.textColor,t.textHoverColor=r.textHoverColor,t.backgroundColor=r.backgroundColor,t.bottomType=r.type,t.list=r.list,t.$store.commit("setTabbarList",JSON.parse(o.value)),t.$forceUpdate()}}})}}};e.default=o}).call(this,o("543d")["default"])},"54e1":function(t,e,o){},"676a":function(t,e,o){"use strict";var r=o("54e1"),n=o.n(r);n.a},7004:function(t,e,o){"use strict";o.r(e);var r=o("0670"),n=o.n(r);for(var u in r)"default"!==u&&function(t){o.d(e,t,(function(){return r[t]}))}(u);e["default"]=n.a},8431:function(t,e,o){"use strict";var r;o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return u})),o.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.list?t.__map(t.list,(function(e,o){var r=t.__get_orig(e),n=1==t.bottomType||2==t.bottomType?t.verify(e.link):null,u=1!=t.bottomType&&2!=t.bottomType||!n?null:t.$util.img(e.selectedIconPath),a=1!=t.bottomType&&2!=t.bottomType||n?null:t.$util.img(e.iconPath),i=1==t.bottomType||3==t.bottomType?t.verify(e.link):null;return{$orig:r,m0:n,g0:u,g1:a,m1:i}})):null);t.$mp.data=Object.assign({},{$root:{l0:o}})},u=[]},df22:function(t,e,o){"use strict";o.r(e);var r=o("8431"),n=o("7004");for(var u in n)"default"!==u&&function(t){o.d(e,t,(function(){return n[t]}))}(u);o("676a");var a,i=o("f0c5"),l=Object(i["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-bottom-nav/diy-bottom-nav-create-component',
    {
        'components/diy-bottom-nav/diy-bottom-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("df22"))
        })
    },
    [['components/diy-bottom-nav/diy-bottom-nav-create-component']]
]);

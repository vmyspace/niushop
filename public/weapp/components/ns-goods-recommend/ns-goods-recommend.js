(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-goods-recommend/ns-goods-recommend"],{"0fab":function(t,e,n){"use strict";var i=n("c4bc"),o=n.n(i);o.a},1044:function(t,e,n){"use strict";n.r(e);var i=n("7a4c"),o=n("cdac");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("0fab");var s,u=n("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=r.exports},"1cca":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("c409"));function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){n.e("components/ns-loading/ns-loading").then(function(){return resolve(n("81d6"))}.bind(null,n)).catch(n.oe)},s={name:"ns-goods-recommend",components:{nsLoading:a},data:function(){return{list:[],page:1,isAll:!0,isClick:!0,showLoading:!1}},mixins:[i.default],props:{isLike:{type:Boolean,default:!0},size:{type:[Number,String],default:10},auto:{type:Boolean,default:!0},load:{type:Boolean,default:!0}},mounted:function(){this.auto&&this.getLikeList()},methods:{init:function(){this.list=[],this.page=1},toDetail:function(t){var e={sku_id:t.sku_id};this.$util.redirectTo("/pages/goods/detail/detail",e)},getLikeList:function(t){var e=this,n=this;if(this.isClick&&this.isAll)return this.isClick=!1,this.page>1&&(this.showLoading=!0),new Promise((function(i,o){n.$api.sendRequest({url:"/api/goodssku/recommend",data:{page:e.page,page_size:e.auto?e.size:t},success:function(t){e.showLoading=!1,e.isClick=!0,0==t.code&&(1==e.page&&(e.list=[]),e.list=e.list.concat(t.data.list),e.list.length==t.data.count&&(e.isAll=!1),e.page+=1,i(t.data.list))}})}))},goodsImg:function(t){var e=t.split(",");return e[0]?this.$util.img(e[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},imgError:function(t){this.list[t].goods_image=this.$util.getDefaultImage().default_goods_img},showPrice:function(t){var e=t.discount_price;return t.member_price&&parseFloat(t.member_price)<parseFloat(e)&&(e=t.member_price),e},goodsTag:function(t){switch(t.recommend_way){case 1:return"新品";case 2:return"精品";case 3:return"推荐";default:return""}}}};e.default=s},"7a4c":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={nsLoading:function(){return n.e("components/ns-loading/ns-loading").then(n.bind(null,"81d6"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.list.length?t.$util.img("/upload/uniapp/guess-like.png"):null),i=t.$lang("common.currencySymbol"),o=t.$lang("common.currencySymbol"),a=t.list.length?t.__map(t.list,(function(e,n){var i=t.__get_orig(e),o=t.goodsImg(e.goods_image),a=t.goodsTag(e),s=""!=a?t.goodsTag(e):null,u=t.showPrice(e),r=t.showPrice(e),c=e.member_price&&e.member_price==r?t.$util.img("upload/uniapp/index/VIP.png"):null,l=e.member_price&&e.member_price==r||1!=e.promotion_type?null:t.$util.img("upload/uniapp/index/discount.png");return{$orig:i,m0:o,m1:a,m2:s,m5:u,m6:r,g1:c,g2:l}})):null;t.$mp.data=Object.assign({},{$root:{g0:n,m3:i,m4:o,l0:a}})},a=[]},c4bc:function(t,e,n){},cdac:function(t,e,n){"use strict";n.r(e);var i=n("1cca"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-goods-recommend/ns-goods-recommend-create-component',
    {
        'components/ns-goods-recommend/ns-goods-recommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1044"))
        })
    },
    [['components/ns-goods-recommend/ns-goods-recommend-create-component']]
]);

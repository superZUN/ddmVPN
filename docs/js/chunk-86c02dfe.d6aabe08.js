(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86c02dfe"],{"19d7":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[t._v("Create Awesome 🙌")]),a("v-card-text",[t._v("This is your second page.")]),a("v-card-text",[t._v(" Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate. ")])],1)},s=[],c=a("2877"),n=a("6544"),o=a.n(n),i=a("b0af"),l=a("99d9"),d={},u=Object(c["a"])(d,r,s,!1,null,null,null);e["default"]=u.exports;o()(u,{VCard:i["a"],VCardText:l["b"],VCardTitle:l["c"]})},"615b":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i}));var r=a("b0af"),s=a("80d2"),c=Object(s["h"])("v-card__actions"),n=Object(s["h"])("v-card__subtitle"),o=Object(s["h"])("v-card__text"),i=Object(s["h"])("v-card__title");r["a"]},b0af:function(t,e,a){"use strict";var r=a("5530"),s=(a("a9e3"),a("0481"),a("615b"),a("10d2")),c=a("297c"),n=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(c["a"],n["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=c["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-86c02dfe.d6aabe08.js.map
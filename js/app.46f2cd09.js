(function(e){function r(r){for(var n,a,i=r[0],l=r[1],p=r[2],c=0,m=[];c<i.length;c++)a=i[c],o[a]&&m.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(r);while(m.length)m.shift()();return s.push.apply(s,p||[]),t()}function t(){for(var e,r=0;r<s.length;r++){for(var t=s[r],n=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(n=!1)}n&&(s.splice(r--,1),e=a(a.s=t[0]))}return e}var n={},o={app:0},s=[];function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/password-generator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var p=0;p<i.length;p++)r(i[p]);var u=l;s.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},2856:function(e,r,t){},"56d7":function(e,r,t){"use strict";t.r(r);t("cadf"),t("551c"),t("097d");var n=t("2b0e"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-container",{attrs:{id:"app"}},[t("el-header",{attrs:{height:"auto"}},[e._v("Password Generator")]),t("el-main",[t("password-generator")],1)],1)},s=[],a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-row",[t("el-form",{ref:"form",attrs:{inline:"",model:e.options,rules:e.rules}},[t("el-col",[t("el-checkbox",{attrs:{label:"A-Z",border:""},model:{value:e.options.upper,callback:function(r){e.$set(e.options,"upper",r)},expression:"options.upper"}}),t("el-checkbox",{attrs:{label:"a-z",border:""},model:{value:e.options.lower,callback:function(r){e.$set(e.options,"lower",r)},expression:"options.lower"}}),t("el-checkbox",{attrs:{label:"0-9",border:""},model:{value:e.options.numbers,callback:function(r){e.$set(e.options,"numbers",r)},expression:"options.numbers"}}),t("el-checkbox",{attrs:{label:"%, *, ),?, @, #, $, ~ ",border:""},model:{value:e.options.special,callback:function(r){e.$set(e.options,"special",r)},expression:"options.special"}})],1),t("el-col",[t("el-form-item",{attrs:{prop:"min"}},[t("el-input",{attrs:{type:"number",min:"1",max:"32"},model:{value:e.options.min,callback:function(r){e.$set(e.options,"min",r)},expression:"options.min"}},[t("template",{slot:"prepend"},[e._v("min")])],2)],1),t("el-form-item",{attrs:{prop:"max"}},[t("el-input",{attrs:{type:"number",min:"1",max:"32"},model:{value:e.options.max,callback:function(r){e.$set(e.options,"max",r)},expression:"options.max"}},[t("template",{slot:"append"},[e._v("max")])],2)],1)],1),t("el-col",[t("el-button",{attrs:{type:"primary"},on:{click:e.generate}},[e._v("Generate")])],1)],1),e._l(e.passwords,function(r,n){return t("el-col",{key:n},[t("div",{staticClass:"passwords",style:{width:e.width+"px"}},[t("el-rate",{attrs:{disabled:"",colors:["#99A9BF","#F7BA2A","#FF9900"]},model:{value:r.strength,callback:function(t){e.$set(r,"strength",t)},expression:"item.strength"}}),t("el-popover",{attrs:{placement:"right",trigger:"click",content:"password copied to clipboard"},model:{value:r.visible,callback:function(t){e.$set(r,"visible",t)},expression:"item.visible"}},[t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:r.password,expression:"item.password",arg:"copy"}],attrs:{slot:"reference",type:"text"},on:{click:function(r){e.toggleVisible(n)}},slot:"reference"},[e._v(e._s(r.password))])],1)],1)])})],2)},i=[],l=(t("c5f6"),t("580e")),p=t.n(l),u={name:"PasswordGenerator",data:function(){var e=this,r=function(r,t,n){""===t?n(new Error("min is required, must be a number")):"number"!==typeof Number(t)?n(new Error("must be a number")):Number(t)>Number(e.options.max)?n(new Error("can`t be bigger than max")):Number(t)<1?n(new Error("can`t be smaller than 1")):n()},t=function(r,t,n){""===t?n(new Error("max is required, must be a number")):"number"!==typeof Number(t)?n(new Error("must be a number")):Number(t)<Number(e.options.min)?n(new Error("can`t be smaller than min")):Number(t)>32?n(new Error("can`t be bigger than 32")):n()};return{options:{upper:!0,lower:!0,numbers:!0,special:!0,min:12,max:12},passwords:[],rules:{min:[{validator:r,trigger:"blur"}],max:[{validator:t,trigger:"blur"}]}}},computed:{line:function(){var e="";return this.options.lower?e+="abcdefghijklmnopqrstuvwxyz":e+="",this.options.upper?e+="abcdefghijklmnopqrstuvwxyz".toUpperCase():e+="",this.options.numbers?e+="0123456789":e+="",this.options.special?e+="!@#$%^&*()_+~}{[]?><-=":e+="",e},width:function(){var e=this.passwords.reduce(function(e,r){return e<r.password.length?r.password.length:e},0);return 9*e+135}},methods:{generate:function(){var e=this;this.$refs.form.validate(function(r){if(!r)return!1;e.passwords.splice(0,e.passwords.length);for(var t=0;t<10;t++){var n="";while(n.length<e.options.max)n+=e.line[Math.floor(Math.random()*e.line.length)];var o=n.slice(Math.floor(Math.random()*(e.options.max-e.options.min)));e.passwords.push({visible:!1,password:o,strength:p()(o).score+1})}})},toggleVisible:function(e){var r=this;setTimeout(function(){r.passwords.splice(e,1,{visible:!1,password:r.passwords[e].password,strength:r.passwords[e].strength})},1e3)}}},c=u,m=(t("77df"),t("2877")),d=Object(m["a"])(c,a,i,!1,null,"0a40106e",null);d.options.__file="PasswordGenerator.vue";var f=d.exports,b={name:"app",components:{PasswordGenerator:f}},h=b,v=(t("5c0b"),Object(m["a"])(h,o,s,!1,null,null,null));v.options.__file="App.vue";var w=v.exports,g=t("5c96"),x=t.n(g),y=(t("f843"),t("4eb5")),_=t.n(y);n["default"].use(_.a),n["default"].use(x.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(w)}}).$mount("#app")},"59f2":function(e,r,t){},"5c0b":function(e,r,t){"use strict";var n=t("2856"),o=t.n(n);o.a},"77df":function(e,r,t){"use strict";var n=t("59f2"),o=t.n(n);o.a},f843:function(e,r,t){}});
//# sourceMappingURL=app.46f2cd09.js.map
(function(e){function t(t){for(var n,a,u=t[0],c=t[1],l=t[2],s=0,p=[];s<u.length;s++)a=u[s],r[a]&&p.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,u=1;u<o.length;u++){var c=o[u];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var m=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("vue-find-memo"),o("vue-create-memo"),o("router-view")],1)},i=[],a=o("8c4f"),u=o("0ff2"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._v("\n  ID:\n  "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.memo_id,expression:"memo_id"}],attrs:{placeholder:"メモのIDを入力"},domProps:{value:e.memo_id},on:{input:function(t){t.target.composing||(e.memo_id=t.target.value)}}}),o("button",{on:{click:e.find_memo}},[e._v("移動")])])},l=[],m={data:function(){return{memo_id:""}},methods:{find_memo:function(){this.$router.push({path:"/update/"+this.memo_id})}}},s=m,p=o("2877"),d=Object(p["a"])(s,c,l,!1,null,null,null),f=d.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("button",{on:{click:e.create_memo}},[e._v("メモ新規作成")])])},h=[],_={methods:{create_memo:function(){this.$router.push({path:"/create"})}}},g=_,b=Object(p["a"])(g,v,h,!1,null,null,null),x=b.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo.text,expression:"memo.text"}],attrs:{rows:"10",cols:"70"},domProps:{value:e.memo.text},on:{input:function(t){t.target.composing||e.$set(e.memo,"text",t.target.value)}}}),o("button",{on:{click:e.register_memo}},[e._v("メモ登録")])])},y=[],j=o("59ca");o("e71f");const O=j["initializeApp"]({projectId:"fir-test01-5a90b"}).firestore();var $={data:function(){return{memo:{}}},activated:function(){this.memo={}},methods:{register_memo:function(e){O.collection("memos").add({text:this.memo.text}).then(e=>{console.log("メモ登録成功\t id="+e.id),this.$router.push({path:"/update/"+e.id})}).catch(e=>console.log("メモ登録失敗\n"+e))}}},P=$,k=Object(p["a"])(P,w,y,!1,null,null,null),M=k.exports,E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo.text,expression:"memo.text"}],attrs:{rows:"10",cols:"70"},domProps:{value:e.memo.text},on:{input:function(t){t.target.composing||e.$set(e.memo,"text",t.target.value)}}}),o("button",{on:{click:e.update_memo}},[e._v("メモ更新")])])},S=[],I={data:function(){return{memo:{}}},beforeMount:function(){this.$bind("memo",O.collection("memos").doc(this.$route.params.id)).then(()=>console.log("バインドしました。 \t"+this.memo.id))},methods:{update_memo:function(e){O.collection("memos").doc(this.memo.id).update({text:this.memo.text}).then(()=>console.log("メモ更新成功\t id="+this.memo.id)).catch(e=>console.log("メモ更新失敗 \n"+e))}}},N=I,T=Object(p["a"])(N,E,S,!1,null,null,null),D=T.exports;n["a"].use(u["a"]),n["a"].use(a["a"]);var J={name:"app",methods:{changePageUpdatePage:function(e){}},router:new a["a"]({routes:[{path:"/",component:M},{path:"/create",component:M},{path:"/update/:id",component:D}]}),components:{VueFindMemo:f,VueCreateMemo:x}},V=J,z=(o("034f"),Object(p["a"])(V,r,i,!1,null,null,null)),A=z.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(A)}}).$mount("#app")},"64a9":function(e,t,o){}});
//# sourceMappingURL=app.d743dd55.js.map
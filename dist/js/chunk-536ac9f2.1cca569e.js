(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-536ac9f2"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==c.call(t)?a(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),c=r("17c2"),i=r("9112");for(var a in o){var u=n[a],s=u&&u.prototype;if(s&&s.forEach!==c)try{i(s,"forEach",c)}catch(d){s.forEach=c}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),c=o("forEach");t.exports=c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"428f":function(t,e,r){var n=r("da84");t.exports=n},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),c=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),c=r("d066"),i=r("c430"),a=r("83ab"),u=r("4930"),s=r("d039"),d=r("5135"),f=r("e8b5"),l=r("861d"),b=r("d9b5"),p=r("825a"),h=r("7b0b"),O=r("fc6a"),v=r("a04b"),j=r("577e"),m=r("5c6c"),g=r("7c73"),y=r("df75"),w=r("241c"),S=r("057f"),P=r("7418"),x=r("06cf"),k=r("9bf2"),E=r("d1e7"),M=r("9112"),D=r("6eeb"),$=r("5692"),q=r("f772"),C=r("d012"),_=r("90e3"),A=r("b622"),N=r("e538"),J=r("746f"),T=r("d44e"),F=r("69f3"),I=r("b727").forEach,L=q("hidden"),U="Symbol",Q="prototype",V=A("toPrimitive"),W=F.set,z=F.getterFor(U),B=Object[Q],G=o.Symbol,H=c("JSON","stringify"),K=x.f,R=k.f,X=S.f,Y=E.f,Z=$("symbols"),tt=$("op-symbols"),et=$("string-to-symbol-registry"),rt=$("symbol-to-string-registry"),nt=$("wks"),ot=o.QObject,ct=!ot||!ot[Q]||!ot[Q].findChild,it=a&&s((function(){return 7!=g(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(B,e);n&&delete B[e],R(t,e,r),n&&t!==B&&R(B,e,n)}:R,at=function(t,e){var r=Z[t]=g(G[Q]);return W(r,{type:U,tag:t,description:e}),a||(r.description=e),r},ut=function(t,e,r){t===B&&ut(tt,e,r),p(t);var n=v(e);return p(r),d(Z,n)?(r.enumerable?(d(t,L)&&t[L][n]&&(t[L][n]=!1),r=g(r,{enumerable:m(0,!1)})):(d(t,L)||R(t,L,m(1,{})),t[L][n]=!0),it(t,n,r)):R(t,n,r)},st=function(t,e){p(t);var r=O(e),n=y(r).concat(pt(r));return I(n,(function(e){a&&!ft.call(r,e)||ut(t,e,r[e])})),t},dt=function(t,e){return void 0===e?g(t):st(g(t),e)},ft=function(t){var e=v(t),r=Y.call(this,e);return!(this===B&&d(Z,e)&&!d(tt,e))&&(!(r||!d(this,e)||!d(Z,e)||d(this,L)&&this[L][e])||r)},lt=function(t,e){var r=O(t),n=v(e);if(r!==B||!d(Z,n)||d(tt,n)){var o=K(r,n);return!o||!d(Z,n)||d(r,L)&&r[L][n]||(o.enumerable=!0),o}},bt=function(t){var e=X(O(t)),r=[];return I(e,(function(t){d(Z,t)||d(C,t)||r.push(t)})),r},pt=function(t){var e=t===B,r=X(e?tt:O(t)),n=[];return I(r,(function(t){!d(Z,t)||e&&!d(B,t)||n.push(Z[t])})),n};if(u||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?j(arguments[0]):void 0,e=_(t),r=function(t){this===B&&r.call(tt,t),d(this,L)&&d(this[L],e)&&(this[L][e]=!1),it(this,e,m(1,t))};return a&&ct&&it(B,e,{configurable:!0,set:r}),at(e,t)},D(G[Q],"toString",(function(){return z(this).tag})),D(G,"withoutSetter",(function(t){return at(_(t),t)})),E.f=ft,k.f=ut,x.f=lt,w.f=S.f=bt,P.f=pt,N.f=function(t){return at(A(t),t)},a&&(R(G[Q],"description",{configurable:!0,get:function(){return z(this).description}}),i||D(B,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:G}),I(y(nt),(function(t){J(t)})),n({target:U,stat:!0,forced:!u},{for:function(t){var e=j(t);if(d(et,e))return et[e];var r=G(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!b(t))throw TypeError(t+" is not a symbol");if(d(rt,t))return rt[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:dt,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(h(t))}}),H){var ht=!u||s((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],c=1;while(arguments.length>c)o.push(arguments[c++]);if(n=e,(l(e)||void 0!==t)&&!b(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!b(e))return e}),o[1]=e,H.apply(null,o)}})}G[Q][V]||M(G[Q],V,G[Q].valueOf),T(G,U),C[L]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),c=r("df75"),i=r("d039"),a=i((function(){c(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return c(o(t))}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),c=r("56ef"),i=r("fc6a"),a=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),o=a.f,s=c(n),d={},f=0;while(s.length>f)r=o(n,e=s[f++]),void 0!==r&&u(d,e,r);return d}})},dc6d:function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var n=r("7a23"),o={class:"container"},c={"aria-label":"breadcrumb"},i={class:"breadcrumb"},a={class:"breadcrumb-item"},u=Object(n["g"])("購物車"),s={class:"breadcrumb-item active","aria-current":"page"},d={class:"row justify-content-center"},f={class:"col-8"},l={class:"col-4"},b={key:0,class:"h5"},p={key:1,class:"h6"},h={key:2,class:"h5"},O=Object(n["h"])("hr",null,null,-1);function v(t,e,r,v,j,m){var g=Object(n["v"])("router-link"),y=Object(n["v"])("AddModal");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("div",o,[Object(n["h"])("nav",c,[Object(n["h"])("ol",i,[Object(n["h"])("li",a,[Object(n["h"])(g,{to:"/customer_order"},{default:Object(n["D"])((function(){return[u]})),_:1})]),Object(n["h"])("li",s,Object(n["x"])(j.product.title),1)])]),Object(n["h"])("div",d,[Object(n["h"])("article",f,[Object(n["h"])("h2",null,Object(n["x"])(j.product.title),1),Object(n["h"])("div",null,Object(n["x"])(j.product.content),1),Object(n["h"])("div",null,Object(n["x"])(j.product.description),1),Object(n["h"])("img",{src:j.product.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,["src"])]),Object(n["h"])("div",l,[j.product.price?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("div",b,Object(n["x"])(j.product.origin_price)+" 元",1)),j.product.price?(Object(n["q"])(),Object(n["d"])("del",p,"原價 "+Object(n["x"])(j.product.origin_price)+" 元",1)):Object(n["e"])("",!0),j.product.price?(Object(n["q"])(),Object(n["d"])("div",h,"現在只要 "+Object(n["x"])(j.product.price)+" 元",1)):Object(n["e"])("",!0),O,Object(n["E"])(Object(n["h"])("select",{name:"",class:"form-control mt-3","onUpdate:modelValue":e[1]||(e[1]=function(t){return j.product.num=t})},[(Object(n["q"])(),Object(n["d"])(n["a"],null,Object(n["u"])(10,(function(t){return Object(n["h"])("option",{value:t,key:t}," 選購 "+Object(n["x"])(t)+" "+Object(n["x"])(j.product.unit),9,["value"])})),64))],512),[[n["A"],j.product.num]]),Object(n["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:e[2]||(e[2]=function(t){return m.addToCart(j.product.id,j.product.num)})}," 加到購物車 ")])])]),Object(n["h"])(y,{ref:"AddModal"},null,512)],64)}var j=r("5530"),m=(r("99af"),r("ff29")),g={data:function(){return{product:{num:1},id:""}},components:{AddModal:m["a"]},methods:{getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("orange01213","/product/").concat(this.id);this.$http.get(e).then((function(e){console.log(e.data),e.data.success&&(t.product=Object(j["a"])({},e.data.product),t.product.num=1,console.log("product",t.product))}))},addToCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("orange01213","/cart"),o={product_id:t,qty:r},c=this.$refs.AddModal;this.$http.post(n,{data:o}).then((function(t){e.isLoading=!1,console.log("成功加入購物"),e.$router.push("/customer_order"),c.showModal()}))}},created:function(){this.id=this.$route.params.productId,this.getProduct()}};g.render=v;e["default"]=g},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),c=r("da84"),i=r("5135"),a=r("861d"),u=r("9bf2").f,s=r("e893"),d=c.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var f={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new d(t):void 0===t?d():d(t);return""===t&&(f[e]=!0),e};s(l,d);var b=l.prototype=d.prototype;b.constructor=l;var p=b.toString,h="Symbol(test)"==String(d("test")),O=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(i(f,t))return"";var r=h?e.slice(7,-1):e.replace(O,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:l})}},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),c=r("fc6a"),i=r("06cf").f,a=r("83ab"),u=o((function(){i(1)})),s=!a||u;n({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},ff29:function(t,e,r){"use strict";var n=r("7a23"),o={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},c={class:"modal-dialog",role:"document"},i={class:"modal-content border-0"},a=Object(n["h"])("div",{class:"modal-header bg-success text-white"},[Object(n["h"])("h5",{class:"modal-title"}," 購物提醒 "),Object(n["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),u=Object(n["h"])("div",{class:"modal-body"}," 已加入購物車 感謝購買~ ",-1),s={class:"modal-footer"};function d(t,e,r,d,f,l){return Object(n["q"])(),Object(n["d"])("div",o,[Object(n["h"])("div",c,[Object(n["h"])("div",i,[a,u,Object(n["h"])("div",s,[Object(n["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=Object(n["F"])((function(){return l.hideModal&&l.hideModal.apply(l,arguments)}),["prevent"]))},"確認 ")])])])],512)}var f=r("7c2b"),l=r.n(f),b={data:function(){return{modal:""}},methods:{showModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new l.a(this.$refs.modal)}};b.render=d;e["a"]=b}}]);
//# sourceMappingURL=chunk-536ac9f2.1cca569e.js.map
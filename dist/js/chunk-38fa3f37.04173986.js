(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38fa3f37"],{"107c":function(t,e,n){var c=n("d039");t.exports=c((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"135e":function(t,e,n){"use strict";n.r(e);n("ac1f"),n("841c");var c=n("7a23"),r=Object(c["I"])("data-v-10528896");Object(c["t"])("data-v-10528896");var o={class:"container "},a={class:"d-md-flex justify-content-center"},i=Object(c["h"])("option",{value:"",disabled:"",selected:""},"預覽紀錄",-1),l={class:"row mt-4"},s={class:"card border-0 shadow-sm","data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"},d={class:"card-body"},u={class:"badge badge-secondary float-right ml-2"},h={class:"card-title"},f={class:"card-text"},b={class:"d-flex justify-content-between align-items-baseline"},p={key:0,class:"h5"},v={key:1,class:"h6"},g={key:2,class:"h5"},O={class:"card-footer d-flex"},j=Object(c["h"])("i",{class:"bi bi-search"},null,-1),x=Object(c["g"])(" 查看更多 "),y=Object(c["h"])("i",{class:"bi bi-cart-plus"},null,-1),m=Object(c["g"])("加到購物車 ");Object(c["r"])();var I=r((function(t,e,n,r,I,w){var E=Object(c["x"])("AddModal");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("div",o,[Object(c["h"])("ul",a,[Object(c["h"])("li",null,[Object(c["G"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return I.search=t}),placeholder:"口味查詢 ex:抹茶",size:"10",style:{"font-size":"16px"}},null,512),[[c["D"],I.search]])]),Object(c["h"])("li",null,[Object(c["G"])(Object(c["h"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return I.selecthistory=t})},[i,(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(I.history,(function(t){return Object(c["q"])(),Object(c["d"])("option",{value:t,key:t.title},Object(c["z"])(t.title),9,["value"])})),128))],512),[[c["C"],I.selecthistory]])]),Object(c["h"])("li",null,[Object(c["h"])("button",{class:"btn btn-danger btn-sm",onClick:e[3]||(e[3]=Object(c["H"])((function(){return w.delhistory&&w.delhistory.apply(w,arguments)}),["prevent"]))}," 清除預覽紀錄 ")])]),Object(c["h"])("div",l,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(w.searchproducts,(function(t){return Object(c["q"])(),Object(c["d"])("div",{class:"col-md-4 mb-4",key:t.id},[Object(c["h"])("div",s,[Object(c["h"])("a",{onClick:Object(c["H"])((function(e){return w.getProduct(t)}),["prevent"]),href:"#",class:"img",style:{backgroundImage:"url(".concat(t.imageUrl,")")}},null,12,["onClick"]),Object(c["h"])("div",d,[Object(c["h"])("span",u,Object(c["z"])(t.category),1),Object(c["h"])("h5",h,[Object(c["h"])("a",{href:"#",class:"text-dark",onClick:Object(c["H"])((function(e){return w.getProduct(t)}),["prevent"])},Object(c["z"])(t.title),9,["onClick"])]),Object(c["h"])("p",f,Object(c["z"])(t.content),1),Object(c["h"])("div",b,[t.price?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])("div",p,Object(c["z"])(t.origin_price)+" 元 ",1)),t.price?(Object(c["q"])(),Object(c["d"])("del",v,"原價 "+Object(c["z"])(t.origin_price)+" 元",1)):Object(c["e"])("",!0),t.price?(Object(c["q"])(),Object(c["d"])("div",g," 現在只要 "+Object(c["z"])(t.price)+" 元 ",1)):Object(c["e"])("",!0)])]),Object(c["h"])("div",O,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:function(e){return w.getProduct(t)}},[j,x],8,["onClick"]),Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm ml-auto",onClick:function(e){return w.addToCart(t.id)}},[y,m],8,["onClick"])])])])})),128))])]),Object(c["h"])(E,{ref:"AddModal"},null,512)],64)})),w=(n("99af"),n("159b"),n("a434"),n("4de4"),n("466d"),n("ff29")),E={data:function(){return{selecthistory:{},history:[],products:[],product:{},search:"",searchproducts:[]}},components:{AddModal:w["a"]},methods:{delhistory:function(){localStorage.clear(),this.history=[]},getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("orange01213","/products/all");this.$http.get(e).then((function(e){t.products=e.data.products,console.log("products:",e)}))},getProduct:function(t){var e=this,n=t.id;this.history.forEach((function(n,c){n.id==t.id&&e.history.splice(c,1)})),this.history.push(t),localStorage.setItem("history",JSON.stringify(this.history)),this.$router.push("/product/".concat(n))},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("orange01213","/cart"),c={product_id:t,qty:e},r=this.$refs.AddModal;this.$http.post(n,{data:c}).then((function(t){console.log("成功加入購物車"),r.showModal()}))}},computed:{searchproducts:function(){var t=this;return this.products.filter((function(e,n){return e.title.match(t.search)}))}},watch:{selecthistory:function(t){var e=this;this.history.forEach((function(n,c){n.id==t.id&&e.history.splice(c,1)})),console.log("item",t),this.history.push(t),localStorage.setItem("history",JSON.stringify(this.history)),this.$router.push("/product/".concat(t.id))}},created:function(){this.getProducts();var t=JSON.parse(localStorage.getItem("history"))||[];this.history=t}};n("f394");E.render=I,E.__scopeId="data-v-10528896";e["default"]=E},"14c3":function(t,e,n){var c=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==c(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"466d":function(t,e,n){"use strict";var c=n("d784"),r=n("825a"),o=n("50c4"),a=n("577e"),i=n("1d80"),l=n("8aa5"),s=n("14c3");c("match",(function(t,e,n){return[function(e){var n=i(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,n):new RegExp(e)[t](a(n))},function(t){var c=r(this),i=a(t),d=n(e,c,i);if(d.done)return d.value;if(!c.global)return s(c,i);var u=c.unicode;c.lastIndex=0;var h,f=[],b=0;while(null!==(h=s(c,i))){var p=a(h[0]);f[b]=p,""===p&&(c.lastIndex=l(i,o(c.lastIndex),u)),b++}return 0===b?null:f}]}))},"841c":function(t,e,n){"use strict";var c=n("d784"),r=n("825a"),o=n("1d80"),a=n("129f"),i=n("577e"),l=n("14c3");c("search",(function(t,e,n){return[function(e){var n=o(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,n):new RegExp(e)[t](i(n))},function(t){var c=r(this),o=i(t),s=n(e,c,o);if(s.done)return s.value;var d=c.lastIndex;a(d,0)||(c.lastIndex=0);var u=l(c,o);return a(c.lastIndex,d)||(c.lastIndex=d),null===u?-1:u.index}]}))},"86e7":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var c=n("6547").charAt;t.exports=function(t,e,n){return e+(n?c(t,e).length:1)}},9263:function(t,e,n){"use strict";var c=n("577e"),r=n("ad6d"),o=n("9f7f"),a=n("5692"),i=n("7c73"),l=n("69f3").get,s=n("fce3"),d=n("107c"),u=RegExp.prototype.exec,h=a("native-string-replace",String.prototype.replace),f=u,b=function(){var t=/a/,e=/b*/g;return u.call(t,"a"),u.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),p=o.UNSUPPORTED_Y||o.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],g=b||v||p||s||d;g&&(f=function(t){var e,n,o,a,s,d,g,O=this,j=l(O),x=c(t),y=j.raw;if(y)return y.lastIndex=O.lastIndex,e=f.call(y,x),O.lastIndex=y.lastIndex,e;var m=j.groups,I=p&&O.sticky,w=r.call(O),E=O.source,k=0,R=x;if(I&&(w=w.replace("y",""),-1===w.indexOf("g")&&(w+="g"),R=x.slice(O.lastIndex),O.lastIndex>0&&(!O.multiline||O.multiline&&"\n"!==x.charAt(O.lastIndex-1))&&(E="(?: "+E+")",R=" "+R,k++),n=new RegExp("^(?:"+E+")",w)),v&&(n=new RegExp("^"+E+"$(?!\\s)",w)),b&&(o=O.lastIndex),a=u.call(I?n:O,R),I?a?(a.input=a.input.slice(k),a[0]=a[0].slice(k),a.index=O.lastIndex,O.lastIndex+=a[0].length):O.lastIndex=0:b&&a&&(O.lastIndex=O.global?a.index+a[0].length:o),v&&a&&a.length>1&&h.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a&&m)for(a.groups=d=i(null),s=0;s<m.length;s++)g=m[s],d[g[0]]=a[g[1]];return a}),t.exports=f},"9f7f":function(t,e,n){var c=n("d039"),r=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=c((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=c((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,n){"use strict";var c=n("23e7"),r=n("23cb"),o=n("a691"),a=n("50c4"),i=n("7b0b"),l=n("65f0"),s=n("8418"),d=n("1dde"),u=d("splice"),h=Math.max,f=Math.min,b=9007199254740991,p="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var n,c,d,u,v,g,O=i(this),j=a(O.length),x=r(t,j),y=arguments.length;if(0===y?n=c=0:1===y?(n=0,c=j-x):(n=y-2,c=f(h(o(e),0),j-x)),j+n-c>b)throw TypeError(p);for(d=l(O,c),u=0;u<c;u++)v=x+u,v in O&&s(d,u,O[v]);if(d.length=c,n<c){for(u=x;u<j-c;u++)v=u+c,g=u+n,v in O?O[g]=O[v]:delete O[g];for(u=j;u>j-c+n;u--)delete O[u-1]}else if(n>c)for(u=j-c;u>x;u--)v=u+c-1,g=u+n-1,v in O?O[g]=O[v]:delete O[g];for(u=0;u<n;u++)O[u+x]=arguments[u+2];return O.length=j-c+n,d}})},ac1f:function(t,e,n){"use strict";var c=n("23e7"),r=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var c=n("825a");t.exports=function(){var t=c(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var c=n("6eeb"),r=n("9263"),o=n("d039"),a=n("b622"),i=n("9112"),l=a("species"),s=RegExp.prototype;t.exports=function(t,e,n,d){var u=a(t),h=!o((function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})),f=h&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[u]=/./[u]),n.exec=function(){return e=!0,null},n[u](""),!e}));if(!h||!f||n){var b=/./[u],p=e(u,""[t],(function(t,e,n,c,o){var a=e.exec;return a===r||a===s.exec?h&&!o?{done:!0,value:b.call(e,n,c)}:{done:!0,value:t.call(n,e,c)}:{done:!1}}));c(String.prototype,t,p[0]),c(s,u,p[1])}d&&i(s[u],"sham",!0)}},f394:function(t,e,n){"use strict";n("86e7")},fce3:function(t,e,n){var c=n("d039");t.exports=c((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},ff29:function(t,e,n){"use strict";var c=n("7a23"),r={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},o={class:"modal-dialog",role:"document"},a={class:"modal-content border-0"},i=Object(c["h"])("div",{class:"modal-header bg-danger text-white"},[Object(c["h"])("h5",{class:"modal-title"}," 購物提醒 "),Object(c["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),l=Object(c["h"])("div",{class:"modal-body"}," 已加入購物車 感謝購買~ ",-1),s={class:"modal-footer"};function d(t,e,n,d,u,h){return Object(c["q"])(),Object(c["d"])("div",r,[Object(c["h"])("div",o,[Object(c["h"])("div",a,[i,l,Object(c["h"])("div",s,[Object(c["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=Object(c["H"])((function(){return h.hideModal&&h.hideModal.apply(h,arguments)}),["prevent"]))},"確認 ")])])])],512)}var u=n("7c2b"),h=n.n(u),f={data:function(){return{modal:""}},methods:{showModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new h.a(this.$refs.modal)}};f.render=d;e["a"]=f}}]);
//# sourceMappingURL=chunk-38fa3f37.04173986.js.map
(function(e){function a(a){for(var o,i,n=a[0],c=a[1],l=a[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(a);while(m.length)m.shift()();return s.push.apply(s,l||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],o=!0,n=1;n<t.length;n++){var c=t[n];0!==r[c]&&(o=!1)}o&&(s.splice(a--,1),e=i(i.s=t[0]))}return e}var o={},r={app:0},s=[];function i(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)i.d(t,o,function(a){return e[a]}.bind(null,o));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/comissao23/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var d=c;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"132d":function(e,a,t){e.exports=t.p+"img/logo_comissao_bege.4699d894.png"},1931:function(e,a,t){},"25e0":function(e,a,t){"use strict";t("1931")},3749:function(e,a,t){"use strict";t("9b22")},"3b8a":function(e,a,t){e.exports=t.p+"img/textura_bg.c0f5ab88.png"},"56d7":function(e,a,t){"use strict";t.r(a),t.d(a,"db",(function(){return H}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"rgb(34 6 6 / 90%)"}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{width:"60",transition:"scale-transition",contain:"",src:t("132d")}}),o("h2",{staticClass:"bege-text"},[e._v("Comissão 2023")])],1)]),o("v-main",[o("HelloWorld")],1)],1)},s=[],i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("v-container",[o("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[o("v-col",[o("v-row",[o("v-img",{staticClass:"cover-bg",attrs:{src:t("3b8a"),height:"364"}}),o("v-img",{staticClass:"my-3",attrs:{src:t("132d"),contain:"",height:"300"}})],1)],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Comissão de formatura turma 2023 - Unifei ")])]),e.selectedParceiro?e._e():o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("Carousel")],1),e.mostrarCodigo?o("v-col",{staticClass:"mt-5",staticStyle:{"margin-bottom":"80px"},attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Digite o seu código aqui! ")]),o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{align:"center",lg:"3"}},[o("v-text-field",{attrs:{outlined:""},model:{value:e.codigoParceiro,callback:function(a){e.codigoParceiro=a},expression:"codigoParceiro"}})],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-btn",{attrs:{color:"primary"},on:{click:function(a){return e.checkParceiro()}}},[e._v(" Pesquisar Código! ")])],1)],1):e._e(),e.selectedParceiro?o("v-col",{attrs:{cols:"12"}},[o("v-row",{staticClass:"mb-5",attrs:{justify:"center"}},[o("h1",[e._v(e._s(this.selectedParceiro.nome))])]),o("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[o("h1",[e._v(e._s(this.selectedParceiro.proposta))])]),o("v-row",{staticClass:"pt-5",attrs:{justify:"center"}},[o("v-btn",{attrs:{color:"primary"},on:{click:function(a){return e.voltar()}}},[e._v(" Voltar ")])],1)],1):e._e()],1),o("v-footer",{staticClass:"nav-menu-bottom",attrs:{dark:"",padless:"",color:"#a28041"}},[o("v-col",[o("v-row",e._l(e.icons,(function(a,t){return o("v-col",{key:a},[o("v-row",{attrs:{justify:"center"}},[o("v-btn",{staticClass:"white--text",attrs:{icon:""}},[o("v-icon",{staticClass:"mb-2 mt-2",attrs:{size:"24px"},on:{click:function(t){return e.redirectToSocialMedia(a)}}},[e._v(" "+e._s(a)+" ")])],1),e.$vuetify.breakpoint.mobile?e._e():o("h3",{staticClass:"mt-1"},[e._v(e._s(e.socialMediaText[t]))])],1)],1)})),1)],1)],1)],1)},n=[],c=(t("7db0"),function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("v-row",e._l(e.slides,(function(a,r){return o("v-col",{key:r},[o("v-card",{staticClass:"mx-auto",attrs:{elevation:"24",width:e.$vuetify.breakpoint.mobile?"350":"425",height:e.$vuetify.breakpoint.mobile?"625":"500"}},[o("v-col",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[o("v-row",{staticClass:"mb-5 mt-1 text-h5",staticStyle:{"font-weight":"bold"},attrs:{justify:"center"}},[o("v-col",{staticStyle:{"z-index":"1"},attrs:{cols:"10"}},[o("h3",[e._v(e._s(a.name))])])],1),o("v-row",{staticClass:"text-justify",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"9"}},[e._v(" "+e._s(a.content)+" ")])],1),o("img",{staticClass:"watermarked",attrs:{height:"120px",src:t("132d")}})],1)],1)],1)})),1)}),l=[],d={name:"Carousel",data:function(){return{colors:["green","secondary","yellow darken-4","red lighten-2","orange darken-1"],cycle:!1,slides:[{name:"No que estamos envolvidos?",content:"- Social - campanha do agasalho (colocar fotos da campanha) - Arrecadação de dinheiro (rifa, sorteios…) (colocar o engajamento no sorteio) - Pesquisa de mercado (com relação a formatura, fotos, empresas), - Fechamento da empresa de arrecadação para iniciar as adesões - Início da estruturação da adesão solidária, - Engajamento nas redes sociais (para atrair público, bbb da 23, templates, contato com ex alunos…) (colocar os insights dos vídeos da escolha do nome e outros insights bons)"},{name:"Nossas próximas realizações",content:"- Continuar criando conteúdos diferentes em nossas redes sociais, que estão atraindo bastante atenção - Abrir a adesão em nossa assembleia em julho - Realizar todos os eventos clássicos e criar novos eventos (dr/2, 500 dias, 300 dias, 100 dias...) - Finalizar a escolha do nome que já está sendo realizada + do mascote - Continuar a estruturação do evento da formatura (fechamento com empresas)"},{name:"Parcerias",content:"- Objetivo: primeiro contato com as empresas locais, sem pedir nada, e sim fidelizar o contato, oferecendo algum benefício inicial para eles (divulgação de alguma novidade deles, divulgação da marca deles, realização de sorteios para eles), mostrando o potencial da comissão, do alcance do instagram. - Como fazer: a partir da definição do que vamos realizar pra empresa, engajar a comissão + potenciais aderidos + família na divulgação da empresa para que eles entendam nosso potencial."}]}}},u=d,m=(t("3749"),t("2877")),f=t("6544"),p=t.n(f),v=t("b0af"),b=t("62ad"),g=t("0fd9"),h=Object(m["a"])(u,c,l,!1,null,"101cca0a",null),y=h.exports;p()(h,{VCard:v["a"],VCol:b["a"],VRow:g["a"]});var w={name:"HelloWorld",components:{Carousel:y},data:function(){return{codigoParceiro:null,mostrarCodigo:!0,icons:["mdi-facebook","mdi-instagram","mdi-email"],socialMediaText:["/comissao23unifei","@comissao23unifei","comissao2023unifei@gmail.com"],selectedParceiro:null,parceiros:[]}},mounted:function(){var e=this,a=H.collection("propostas").doc("proposta");a.get().then((function(a){e.parceiros=a.data()}))},methods:{checkParceiro:function(){var e=this;this.selectedParceiro=this.parceiros.propostas.find((function(a){return a.id==e.codigoParceiro})),this.mostrarCodigo=!1},voltar:function(){this.mostrarCodigo=!0,this.selectedParceiro=null},redirectToSocialMedia:function(e){"mdi-facebook"==e?window.open("https://www.facebook.com/comissao23unifei"):"mdi-instagram"==e&&window.open("https://www.instagram.com/comissao23unifei/")}}},C=w,_=(t("b463"),t("8336")),j=t("a523"),x=t("553a"),P=t("132d3"),k=t("adda"),V=t("8654"),O=Object(m["a"])(C,i,n,!1,null,"4d65fba5",null),z=O.exports;p()(O,{VBtn:_["a"],VCol:b["a"],VContainer:j["a"],VFooter:x["a"],VIcon:P["a"],VImg:k["a"],VRow:g["a"],VTextField:V["a"]});var S={name:"App",components:{HelloWorld:z},data:function(){return{}}},I=S,A=(t("25e0"),t("7496")),M=t("40dc"),T=t("f6c4"),q=Object(m["a"])(I,r,s,!1,null,"fa499cfa",null),$=q.exports;p()(q,{VApp:A["a"],VAppBar:M["a"],VImg:k["a"],VMain:T["a"]});var E=t("f309");o["a"].use(E["a"]);var R=new E["a"]({}),B=t("2591");t("e71f");o["a"].config.productionTip=!1;var F={apiKey:"AIzaSyAtjaH2erg8nznAYauhsRRijVzo58wJEmI",authDomain:"comissao23-58b23.firebaseapp.com",projectId:"comissao23-58b23",storageBucket:"comissao23-58b23.appspot.com",messagingSenderId:"560742645346",appId:"1:560742645346:web:24d94098dd8ca5caf05b3b",measurementId:"G-KXLBNLDV2T"};B["a"].initializeApp(F),B["a"].analytics();var H=B["a"].firestore();new o["a"]({vuetify:R,db:H,render:function(e){return e($)}}).$mount("#app")},8474:function(e,a,t){},"9b22":function(e,a,t){},b463:function(e,a,t){"use strict";t("8474")}});
//# sourceMappingURL=app.e63a5de4.js.map
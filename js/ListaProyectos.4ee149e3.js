"use strict";(self["webpackChunkfireframevue2"]=self["webpackChunkfireframevue2"]||[]).push([[540],{7227:function(t,r,e){e.r(r),e.d(r,{default:function(){return h}});var a=function(){var t=this,r=t._self._c;return r("div",[r("h1",{staticClass:"pb-2"},[t._v(" Productos estrella ")]),r("p",[t._v(" Estos son los 6 productos de "),r("strong",[t._v("FireFrame")]),t._v(" que mas satisfacen a nuestros clientes. Entra en el link de compra para realizar un pedido o entra en nuestro "),r("b-link",{attrs:{href:"https://es.wallapop.com/app/user/raulp-130557219-evjr21vq79zk/published"}},[t._v("Wallapop")]),t._v(" para descubrir nuestros productos más recientes. ")],1),r("div",{staticClass:"container-md"},[r("b-card-group",{attrs:{columns:""}},t._l(t.proyectos,(function(t){return r("div",{key:t.id,attrs:{columns:""}},[r("Card2",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)])},o=[],s=function(){var t=this,r=t._self._c;return r("div",[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"proyecto"}},[r("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Ir a la página del proyecto",variant:"primary",href:t.url}},[t._v("Comprar")])],1)],1)},i=[],l={name:"car-d2",props:["id","autor","titulo","srcimg","alt","texto","url"]},n=l,u=e(1001),c=(0,u.Z)(n,s,i,!1,null,"536c9d25",null),p=c.exports;const d="../proyectosWD2021.json";var m={props:{name:{type:String,default:"ListaProyectos"}},components:{Card2:p},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted(){this.fetchData()},methods:{async fetchData(){const t=await fetch(d),r=await t.json();this.proyectos=r,console.log(r)}}},v=m,f=(0,u.Z)(v,a,o,!1,null,null,null),h=f.exports}}]);
//# sourceMappingURL=ListaProyectos.4ee149e3.js.map
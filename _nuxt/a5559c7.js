(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{240:function(t,e,n){var content=n(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("b436a1c6",content,!0,{sourceMap:!1})},241:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},content:{type:String,required:!1,default:""},more:{type:Object},tags:Array,difficulty:{type:String,required:!1}},data:function(){return{expanded:!1}},methods:{toggleExpand:function(){this.expanded=!this.expanded},getContent:function(){return this.expanded?this.content:this.truncate(this.content,150)},truncate:function(t,e){return t&&t.length>e&&(t=t.substring(0,e)+"..."),t}},created:function(){}},c=(n(242),n(20)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.difficulty?n("b-tag",{staticClass:"difficulty",attrs:{rounded:"",type:"is-primary"}},[t._v(t._s(t.difficulty))]):t._e()],1),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[t._v("\n        "+t._s(t.content?t.getContent():"")+"\n        "),t._t("default")],2),t._v(" "),t.tags&&t.expanded?n("div",{staticClass:"tags-wrapper"},t._l(t.tags,(function(e,i){return n("b-tag",{key:i,attrs:{rounded:""}},[t._v(t._s(e))])})),1):t._e()]),t._v(" "),n("div",{staticClass:"card-more",attrs:{"v-if":Object.keys(t.more).length}},[t.more.path?n("div",{staticClass:"more-button"},[n("b-button",{staticClass:"is-primary is-light"},[n("NuxtLink",{attrs:{to:{path:t.more.path}}},[t._v("\n            "+t._s(t.more.label)+"\n          ")])],1)],1):t._e(),t._v(" "),t.more.faq?n("div",{staticClass:"more-button",on:{click:t.toggleExpand}},[t.expanded?t._e():n("b-icon",{attrs:{pack:"fas",icon:"chevron-down",size:"is-small"}}),t._v(" "),t.expanded?n("b-icon",{attrs:{pack:"fas",icon:"chevron-up",size:"is-small"}}):t._e()],1):t._e()])])])}),[],!1,null,"a643b386",null);e.default=component.exports},242:function(t,e,n){"use strict";n(240)},243:function(t,e,n){var r=n(29)(!1);r.push([t.i,".card .card-header .difficulty[data-v-a643b386]{align-self:center;margin-right:1em}.card .card-content .tags-wrapper .tag[data-v-a643b386]{margin:0 .25em}.card .card-more[data-v-a643b386]{display:flex}.card .card-more .more-button[data-v-a643b386]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:7px;flex-flow:column}.card .card-more .more-button[data-v-a643b386]:hover{opacity:.75}.card .card-more .more-button .button[data-v-a643b386]{align-self:flex-end}",""]),t.exports=r},245:function(t,e,n){var content=n(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("1e4eb82c",content,!0,{sourceMap:!1})},248:function(t,e,n){"use strict";n(245)},249:function(t,e,n){var r=n(29)(!1);r.push([t.i,".container h1[data-v-0f253ea8]{margin-top:2em;text-align:center}.container h2[data-v-0f253ea8]{margin:2em 1em;text-align:center}",""]),t.exports=r},265:function(t,e,n){"use strict";n.r(e);var r={name:"HomePage",components:{Card:n(241).default},transition:"slide-bottom"},c=(n(248),n(20)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\n    Un sito web open source dedicato a chi inizia ad interessarsi al mondo di\n    Bitcoin\n  ")]),t._v(" "),n("section",{staticClass:"steps"},[n("Card",{attrs:{title:"Perché Bitcoin?",more:{label:"Continua a leggere",path:"/intro/perche-bitcoin"},difficulty:"principiante"}},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit\n      laoreet purus in imperdiet. Fusce in porta erat, eget facilisis urna.\n      Cras sodales turpis eget mi pretium bibendum. Praesent rutrum.\n    ")]),t._v(" "),n("Card",{attrs:{title:"Differenze tra sistema bancario tradizionale e Bitcoin",more:{label:"Continua a leggere",path:"/intro/perche-bitcoin"},difficulty:"intermedio"}},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit\n      laoreet purus in imperdiet. Fusce in porta erat, eget facilisis urna.\n      Cras sodales turpis eget mi pretium bibendum. Praesent rutrum.\n    ")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"title"},[t._v("BitcoinItalia."),n("i",[t._v("info")])])}],!1,null,"0f253ea8",null);e.default=component.exports;installComponents(component,{Card:n(241).default})}}]);
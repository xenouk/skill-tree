(this["webpackJsonpmiku-tap-skill-tree"]=this["webpackJsonpmiku-tap-skill-tree"]||[]).push([[4],{95:function(e,t,n){"use strict";n.r(t),n.d(t,"App",(function(){return D}));var a=n(0),l=n.n(a),r=n(71),i=n(72);function c(){var e=Object(r.a)([""]);return c=function(){return e},e}var o=i.a.div(c()),s=n(12),m=n(93),d=n(94);function u(){var e=Object(r.a)(["\n  .p-tabview-nav-link {\n    padding: 1rem !important;\n  }\n\n  .p-dialog {\n    .p-dialog-content {\n      .header {\n        margin-bottom: 10px;\n      }\n      .info {\n        margin-bottom: 10px;\n      }\n      .desc {\n      }\n    }\n  }\n"]);return u=function(){return e},e}var p=i.a.div(u()),E=n(83);function v(){var e=Object(r.a)(["\n  /* position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); */\n\n  .header {\n    display: flex;\n\n    .name {\n      font-weight: bolder;\n      margin-right: 10px;\n    }\n\n    *:last-child {\n      margin-left: auto;\n    }\n\n    margin-bottom: 10px;\n  }\n\n  .tree {\n    position: relative;\n    .branches {\n      position: absolute;\n      left: 50%;\n      transform: translate(-50%, 0);\n\n\n      .row {\n        display: flex;\n      }\n    }\n  }\n"]);return v=function(){return e},e}var f=i.a.div(v());function k(){var e=Object(r.a)(["\n  border: 1px solid black;\n  height: 75px;\n  width: 75px;\n\n  position: relative;\n  display: flex;\n  flex-flow: column;\n\n  .level {\n    margin-top: auto;\n    text-align: end;\n    margin-right: 3px;\n  }\n"]);return k=function(){return e},e}var b=i.a.div(k()),h=function(e){var t=e.data,n=e.skill,a=e.onClick;return l.a.createElement(b,{onClick:function(){a(n?n.name:t.name)}},l.a.createElement("div",null,t.name),l.a.createElement("div",{className:"level"},(null===n||void 0===n?void 0:n.level)==t.max?"max":null===n||void 0===n?void 0:n.level))};function g(){var e=Object(r.a)(["\n  height: 75px;\n  width: 76px;\n  position: relative;\n  display: flex;\n\n  .horizontal {\n    margin-top: 50%;\n    height: 50%;\n    width: 100%;\n    border-top: 1px solid black;\n  }\n  .vertical {\n    height: 100%;\n    width: 50%;\n    border-right: 1px solid black;\n  }\n  .h {\n    margin-top: 50%;\n    height: 50%;\n    width: 100%;\n    border-top: 1px solid black;\n    position: absolute;\n  }\n  .v {\n    height: 100%;\n    width: 50%;\n    border-right: 1px solid black;\n    position: absolute;\n  }\n  .left {\n    margin-top: 50%;\n    height: 50%;\n    width: 50%;\n    border-right: 1px solid black;\n    border-top: 1px solid black;\n  }\n\n  .right {\n    margin-top: 50%;\n    margin-left: 50%;\n    height: 50%;\n    width: 50%;\n    border-left: 1px solid black;\n    border-top: 1px solid black;\n  }\n"]);return g=function(){return e},e}var y=i.a.div(g()),w=function(e){var t=e.type;return l.a.createElement(y,null,x(t))},x=function(e){switch(e){case 0:return l.a.createElement("div",{className:""});case 1:return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"horizontal"}));case 2:return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"vertical"}));case 3:return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"h"}),l.a.createElement("div",{className:"v"}));case 4:return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"left"}));case 5:return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"right"}));default:return null}},O=n(42),j=n(20),N=Object(O.b)((function(e){return{points:e.skillTree.points,totalPoints:e.skillTree.totalPoints,skillsState:e.skillTree.skillState}}),(function(e){return{onSelectSkill:function(t){return e(Object(j.b)(t))}}}))((function(e){var t=e.name,n=e.skills,a=e.points,r=e.skillsState,i=e.totalPoints,c=e.onSelectSkill;if(n.length<1)return l.a.createElement("div",null,"Empty!");return l.a.createElement(f,null,l.a.createElement("div",{id:"header",className:"header"},l.a.createElement("div",{className:"name"},t),l.a.createElement("div",{className:"level"},"Lv.",function(){for(var e=0,t=0;t<10;t++)r[n[t].name]&&(e+=r[n[t].name].level);return e}()),l.a.createElement("div",null,"".concat(a,"/").concat(i))),l.a.createElement("div",{className:"tree"},l.a.createElement("div",{id:"body",className:"branches"},l.a.createElement("div",{className:"row"},l.a.createElement(w,{type:0}),l.a.createElement(w,{type:0}),l.a.createElement(h,{data:n[0],skill:r[n[0].name],onClick:c}),l.a.createElement(w,{type:0}),l.a.createElement(w,{type:0})),l.a.createElement("div",{className:"row"},l.a.createElement(w,{type:5}),l.a.createElement(w,{type:1}),l.a.createElement(w,{type:3}),l.a.createElement(w,{type:1}),l.a.createElement(w,{type:4})),l.a.createElement("div",{className:"row"},l.a.createElement(h,{data:n[1],skill:r[n[1].name],onClick:c}),l.a.createElement(w,{type:0}),l.a.createElement(h,{data:n[4],skill:r[n[4].name],onClick:c}),l.a.createElement(w,{type:0}),l.a.createElement(h,{data:n[7],skill:r[n[7].name],onClick:c})),l.a.createElement("div",{className:"row"},l.a.createElement(w,{type:2}),l.a.createElement(w,{type:0}),l.a.createElement(w,{type:2}),l.a.createElement(w,{type:0}),l.a.createElement(w,{type:2})),l.a.createElement("div",{className:"row"},l.a.createElement(h,{data:n[2],skill:r[n[2].name],onClick:c}),l.a.createElement(w,{type:0}),l.a.createElement(h,{data:n[5],skill:r[n[5].name],onClick:c}),l.a.createElement(w,{type:0}),l.a.createElement(h,{data:n[8],skill:r[n[8].name],onClick:c})),l.a.createElement("div",{className:"row"},l.a.createElement(w,{type:2}),l.a.createElement(w,{type:0}),l.a.createElement(w,{type:2}),l.a.createElement(w,{type:0}),l.a.createElement(w,{type:2})),l.a.createElement("div",{className:"row"},l.a.createElement(h,{data:n[3],skill:r[n[3].name],onClick:c}),l.a.createElement(w,{type:0}),l.a.createElement(h,{data:n[6],skill:r[n[6].name],onClick:c}),l.a.createElement(w,{type:0}),l.a.createElement(h,{data:n[9],skill:r[n[9].name],onClick:c})))))})),S=n(86),C=n(88);function T(e,t){return e<=0?0:1==t?1/4*(2*e+Math.pow(-1,e)+3):2==t?1/4*(2*e+Math.pow(-1,e+1)+5):3==t?1/4*(2*e+Math.pow(-1,e)+11):0}var P=Object(O.b)((function(e){return{skillData:e.skillTree.data,points:e.skillTree.points,totalPoints:e.skillTree.totalPoints,selectedSkill:e.skillTree.selectedSkill,skillState:e.skillTree.skillState}}),(function(e){return{onSelectSkill:function(){return e(Object(j.b)(""))},onSkillUpdate:function(t){return e(Object(j.c)(t))}}}))((function(e){var t=e.skillData,n=e.selectedSkill,r=(e.points,e.totalPoints,e.skillState),i=e.onSelectSkill,c=e.onSkillUpdate,o=Object(a.useState)(0),u=Object(d.a)(o,2),v=u[0],f=u[1],k=[].concat(Object(m.a)(t.originality),Object(m.a)(t.power),Object(m.a)(t.solidness),Object(m.a)(t.warm)).find((function(e){return e.name==n})),b=r[n]?r[n]:{name:null===k||void 0===k?void 0:k.name,level:0,points:0};return l.a.createElement(p,null,l.a.createElement(E.TabView,{activeIndex:v,onTabChange:function(e){return f(e.index)}},l.a.createElement(E.TabPanel,{header:"Originality"},l.a.createElement(N,{name:"Originality",skills:t.originality})),l.a.createElement(E.TabPanel,{header:"Warmth"},l.a.createElement(N,{name:"Warmth",skills:t.warm})),l.a.createElement(E.TabPanel,{header:"Solidness"},l.a.createElement(N,{name:"Solidness",skills:t.solidness})),l.a.createElement(E.TabPanel,{header:"Power"},l.a.createElement(N,{name:"Power",skills:t.power}))),l.a.createElement(S.Dialog,{className:"dialog",header:"".concat(n),dismissableMask:!0,closeOnEscape:!0,visible:""!=n,style:{width:"100%",maxWidth:"500px"},footer:k&&""!=n?l.a.createElement("div",null,l.a.createElement(C.Button,{icon:"pi",onClick:function(){if(!(b.level<1)){var e=b.level-1,t=b.points-T(e,k.rank);c(Object(s.a)(Object(s.a)({},b),{},{level:e,points:t}))}}},"- ".concat(T(b.level,k.rank))),l.a.createElement(C.Button,{icon:"pi",onClick:function(){if(b.level!=k.max){var e=b.level+1,t=b.points+T(e,k.rank);c(Object(s.a)(Object(s.a)({},b),{},{level:e,points:t}))}}},"+ ".concat(T(b.level+1,k.rank)))):null,onHide:function(){return i()}},k&&""!=n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("label",null,"Lv.",b.level)),l.a.createElement("div",{className:"info"},k.effects.map((function(e){return l.a.createElement("div",{key:e.info},"".concat(e.info).concat(e.effect[b.level]).concat(e.type))}))),l.a.createElement("div",{className:"desc"},k.effects.filter((function(e){return""!=e.description})).map((function(e){return l.a.createElement("div",{key:e.description},"\u25b6","".concat(e.description))})))):null))})),F=n(91),z=Object(F.a)((function(e){return e.app}),(function(e){return!!e.initialized})),M=n(16),D=Object(O.b)((function(e){return{initialized:z(e)}}),(function(e){return{onInit:function(){return e(Object(M.c)())}}}))((function(e){var t=e.initialized,n=e.onInit;return Object(a.useEffect)((function(){n()}),[]),t?l.a.createElement(o,null,l.a.createElement(P,null)):l.a.createElement("div",null,"Loading...")}))}}]);
//# sourceMappingURL=4.d906247a.chunk.js.map
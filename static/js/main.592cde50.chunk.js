(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{33:function(e,t,n){e.exports={counter:"Counter_counter__2lilZ",counterNumber:"Counter_counterNumber__2x-Za",counterNumberMax:"Counter_counterNumberMax__6hLi4",counterButtons:"Counter_counterButtons__3fhVc"}},39:function(e,t,n){e.exports={SetCounter:"SetCounter_SetCounter__EOAqs",counterValues:"SetCounter_counterValues__3QZxg",counterNumberMax:"SetCounter_counterNumberMax__1Eu3d",setButton:"SetCounter_setButton__3FaYz"}},56:function(e,t,n){},72:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),u=n.n(c),s=(n(72),n(12)),i=n(46),l=n(56),o=n.n(l),b=n(114),j=n(33),x=n.n(j),d=n(2);function m(e){var t=e.counter===e.maxValue?x.a.counterNumberMax:"",n=function(){return e.incCounterHandler()},a=function(){return e.resetCounterHandler()};return Object(d.jsxs)("div",{className:x.a.counter,children:[Object(d.jsx)("div",{className:x.a.counterNumber,children:0===e.maxValue||e.startValue>=e.maxValue?Object(d.jsx)("span",{children:"Set the correct settings and click 'SET'"}):Object(d.jsx)("span",{className:t,children:e.counter})}),Object(d.jsxs)("div",{className:x.a.counterButtons,children:[e.maxValue===e.counter?Object(d.jsx)(b.a,{style:{margin:"3px 3px"},variant:"contained",onClick:n,disabled:!0,children:"increment"}):Object(d.jsx)(b.a,{style:{margin:"3px 3px"},variant:"contained",onClick:n,children:"increment"}),0!==e.maxValue&&e.counter===e.maxValue||e.counter>e.startValue?Object(d.jsx)(b.a,{style:{margin:"3px 3px"},variant:"contained",onClick:a,children:"reset"}):Object(d.jsx)(b.a,{style:{margin:"3px 3px"},variant:"contained",onClick:a,disabled:!0,children:"reset"})]})]})}var O=n(6),f=n(117),p=n(118),g=n(115),h=n(113),v=n(39),S=n.n(v);function y(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(0),i=Object(s.a)(u,2),l=i[0],o=i[1];Object(a.useEffect)((function(){var e=localStorage.getItem("startValueKey_2");if(e){var t=JSON.parse(e);c(t)}}),[]),Object(a.useEffect)((function(){var e=localStorage.getItem("maxValueKey_2");if(e){var t=JSON.parse(e);o(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("startValueKey_2",JSON.stringify(r))}),[r]),Object(a.useEffect)((function(){localStorage.setItem("maxValueKey_2",JSON.stringify(l))}),[l]);var j=function(e){o(Number(e.currentTarget.value))},x=function(e){c(Number(e.currentTarget.value))},m=function(){e.setMaxValue(l),e.setStartValue(r),e.setCounter(r)},O=function(){localStorage.clear(),c(0),o(0),e.setStartValue(0),e.setMaxValue(0)};return Object(d.jsxs)("div",{className:S.a.SetCounter,children:[Object(d.jsxs)("div",{className:S.a.counterValues,children:[Object(d.jsx)("div",{children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)("span",{children:"Max value:"}),l<0?Object(d.jsx)(h.a,{value:l,onChange:j,size:"small",id:"outlined-number",label:"Number",type:"number",error:!0,InputLabelProps:{shrink:!0}}):Object(d.jsx)(h.a,{value:l,onChange:j,size:"small",id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}})]})}),Object(d.jsx)("div",{children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)("span",{children:"Start value:"}),r<0?Object(d.jsx)(h.a,{value:r,onChange:x,size:"small",id:"outlined-number",label:"Number",type:"number",error:!0,InputLabelProps:{shrink:!0}}):Object(d.jsx)(h.a,{value:r,onChange:x,size:"small",id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}})]})})]}),Object(d.jsxs)("div",{className:S.a.setButton,children:[r===e.startValue&&l===e.maxValue||r>=l||r<0||l<=0?Object(d.jsx)(b.a,{style:{margin:"3px 3px"},variant:"contained",onClick:m,disabled:!0,children:"set"}):Object(d.jsx)(b.a,{style:{margin:"3px 3px"},variant:"contained",onClick:m,children:"set"}),0===localStorage.length?Object(d.jsx)(b.a,{style:{margin:"3px 3px"},variant:"contained",disabled:!0,onClick:O,children:"reset set"}):Object(d.jsx)(b.a,{style:{margin:"3px 3px"},variant:"contained",onClick:O,children:"reset set"})]})]})}var C=Object(O.a)(f.a)((function(e){var t=e.theme;return Object(i.a)(Object(i.a)({},t.typography.body2),{},{padding:t.spacing(1),marginTop:t.spacing(10),textAlign:"center",color:t.palette.text.secondary})}));var N=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),u=Object(s.a)(c,2),i=u[0],l=u[1],b=Object(a.useState)(n),j=Object(s.a)(b,2),x=j[0],O=j[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("counterKey");if(e){var t=JSON.parse(e);O(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("counterKey",JSON.stringify(x))}),[x]),Object(a.useEffect)((function(){var e=localStorage.getItem("startValueKey_1");if(e){var t=JSON.parse(e);r(t)}}),[]),Object(a.useEffect)((function(){var e=localStorage.getItem("maxValueKey_1");if(e){var t=JSON.parse(e);l(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("startValueKey_1",JSON.stringify(n))}),[n]),Object(a.useEffect)((function(){localStorage.setItem("maxValueKey_1",JSON.stringify(i))}),[i]),Object(d.jsx)("div",{className:o.a.App,children:Object(d.jsx)(p.a,{fixed:!0,children:Object(d.jsxs)(g.a,{container:!0,spacing:2,children:[Object(d.jsx)(g.a,{item:!0,xs:6,children:Object(d.jsx)(C,{children:Object(d.jsx)(y,{counter:x,setCounter:function(e){return O(e)},startValue:n,maxValue:i,setStartValue:function(e){r(e)},setMaxValue:function(e){l(e)}})})}),Object(d.jsx)(g.a,{item:!0,xs:6,children:Object(d.jsx)(C,{children:Object(d.jsx)(m,{counter:x,incCounterHandler:function(){x<i&&O(x+1)},resetCounterHandler:function(){return O(n)},startValue:n,maxValue:i})})})]})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),c(e),u(e)}))};u.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),V()}},[[79,1,2]]]);
//# sourceMappingURL=main.592cde50.chunk.js.map
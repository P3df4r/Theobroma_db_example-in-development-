this.webpackChunk([2],{1387:function(e,n,t){"use strict";t.r(n),t.d(n,"bufferToString",(function(){return s})),t.d(n,"parseCsvBuffer",(function(){return d})),t.d(n,"parseTsvBuffer",(function(){return N}));var r=t(5),a=t.n(r),u=t(4),i=t(7),c=t(10),o=t(6);function s(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function m(e){return f.apply(this,arguments)}function f(){return f=Object(c.a)(a.a.mark((function e(n){var r,i,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,t.e(37).then(t.t.bind(null,1733,7)).then((function(e){return e.default}));case 3:return i=e.sent,e.abrupt("return",i(Object(u.a)({noheader:!0,output:"csv"},r)).fromString(s(n)));case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function l(e,n,t){var r,a=e.rows[0].cells[n].text||"",u="Text";try{r=Object(o.parseLocString)(a,t)}catch(i){}return r&&r.refName&&"number"===typeof r.start?u="LocString":/^\d+(\.\d+)?$/.test(a)&&(u="Number"),u}function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},t=0,r={isLoaded:!0,rows:e.map((function(e,r){var a=r+(n.hasColumnNameLine?0:1);return e.length>t&&(t=e.length),{id:String(a),cells:e.map((function(e,n){return{columnNumber:n,text:e}}))}}))},a={};if(n.hasColumnNameLine&&void 0!==n.columnNameLineNumber){var u=r.rows.splice(n.columnNameLineNumber-1,1),c=Object(i.a)(u,1),s=c[0];s&&s.cells.forEach((function(e,n){a[n]=e.text||""}))}for(var m=[],f=[],p=function(e){f.push(e);var t=l(r,e,n.isValidRefName);"LocString"===t&&r.rows.forEach((function(t){var r=t.cells[e];r.extendedData=Object(o.parseLocString)(r.text,n.isValidRefName)})),m[e]={name:a[e],dataType:{type:t}}},d=0;d<t;d+=1)p(d);return{rowSet:r,columnDisplayOrder:f,hasColumnNames:!!n.hasColumnNameLine,columns:m,assemblyName:n.selectedAssemblyName}}function d(e){return h.apply(this,arguments)}function h(){return h=Object(c.a)(a.a.mark((function e(n){var t,r,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(n);case 3:return r=e.sent,e.abrupt("return",p(r,t));case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function N(e){return b.apply(this,arguments)}function b(){return b=Object(c.a)(a.a.mark((function e(n){var t,r,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(n,{delimiter:"\t"});case 3:return r=e.sent,e.abrupt("return",p(r,t));case 5:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}}});
//# sourceMappingURL=2.d6f72bf7381751b3c8a4.worker.js.map
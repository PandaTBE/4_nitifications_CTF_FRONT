(this.webpackJsonp4_notifications_front=this.webpackJsonp4_notifications_front||[]).push([[0],{71:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(31),a=n.n(c),o=n(42),s=n(84),r=n(18),p=n.n(r),d=n(32),l=n(33),u=n.n(l),f=n(7),h=function(t){var e=("; "+document.cookie).split("; "+t+"=");if(2===e.length)return e.pop().split(";").shift()},j="STORE_USER_ID",y="SET_SHOW_SPINNER",m="STORE_NOTIFICATIONS",b=function(t,e){switch(e.type){case j:return function(t,e){return h("userId")||(document.cookie="userId=".concat(e.payload)),Object(f.a)(Object(f.a)({},t),{},{userId:e.payload})}(t,e);case y:return function(t,e){return Object(f.a)(Object(f.a)({},t),{},{showSpinner:e.payload})}(t,e);case m:return function(t,e){return Object(f.a)(Object(f.a)({},t),{},{notifications:e.payload})}(t,e);default:return t}},x=function(){var t=Object(d.a)(p.a.mark((function t(e){var n,i,c,a,o,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,i=e.dispatch,c=e.actionType,a=e.showSpinner,o=void 0===a||a,t.prev=1,o&&i({type:y,payload:!0}),t.next=5,u.a.get(n,{withCredentials:!0});case 5:s=t.sent,i({type:c,payload:s.data}),o&&i({type:y,payload:!1}),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(1),o&&i({type:y,payload:!1}),document.cookie="userId=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",i({type:j,payload:""}),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),O=n(4),g=O.a.div.withConfig({displayName:"Appstyles__AppWrapepr",componentId:"sc-sqmmnj-0"})(["position:relative;height:100vh;overflow:hidden;"]),I=O.a.div.withConfig({displayName:"Appstyles__ContentWrapper",componentId:"sc-sqmmnj-1"})(["padding:10px;"]),_=O.a.div.withConfig({displayName:"Appstyles__RefreshText",componentId:"sc-sqmmnj-2"})(["font-size:25px;text-align:center;"]),v=Object(i.createContext)({userId:"",showSpinner:!1,notifications:[]}),S=n(41),N=n(82),T=O.a.div.withConfig({displayName:"SingleNotificationstyles__NotificationsHeader",componentId:"sc-1yg1mts-0"})(["display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid black;padding:10px;"]),w=O.a.div.withConfig({displayName:"SingleNotificationstyles__TextWrapper",componentId:"sc-1yg1mts-1"})(["padding:10px;font-size:16px;"]),C=Object(O.a)(N.a).withConfig({displayName:"SingleNotificationstyles__StyledPaper",componentId:"sc-1yg1mts-2"})(["min-height:150px;margin-top:10px;width:50%;"]),E=n(2),k=function(t){var e=t.date,n=t.text,i=S.DateTime.fromISO(e).toLocal().toFormat("HH:MM:ss");return Object(E.jsxs)(C,{elevation:3,children:[Object(E.jsxs)(T,{children:[Object(E.jsx)("div",{children:"Notification"}),Object(E.jsx)("div",{children:i})]}),Object(E.jsx)(w,{children:n})]})},R=O.a.div.withConfig({displayName:"NotificationsListstyles__ListWrapper",componentId:"sc-15y7ljo-0"})(["display:flex;flex-direction:column;align-items:center;"]),A=function(){var t=Object(i.useContext)(v).state.notifications.map((function(t){return Object(E.jsx)(k,{text:t.text,date:t.date},"".concat(t.date).concat(Math.random()))}));return Object(E.jsx)(R,{children:t})},U=n(85),G=O.a.div.withConfig({displayName:"Spinnerstyles__SpinnerContainer",componentId:"sc-3he3sv-0"})(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.3);"]),W=O.a.div.withConfig({displayName:"Spinnerstyles__SpinnerWrapper",componentId:"sc-3he3sv-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]),F=O.a.div.withConfig({displayName:"Spinnerstyles__LoadingText",componentId:"sc-3he3sv-2"})(["color:#1976d2;margin-bottom:10px;"]),L=function(){return Object(E.jsx)(G,{children:Object(E.jsxs)(W,{children:[Object(E.jsx)(F,{children:"Loading..."}),Object(E.jsx)(U.a,{})]})})},D="http://notifications.mctf-test.serega6531.ru",H={GET_USER_ID:"".concat(D,"/backend/getUserId"),GET_USER_NOTIFICATIONS:"".concat(D,"/backend/getNotifications?userId=")},M=function(t,e){Object(i.useEffect)((function(){if(!e){var n=h("userId");n?t({type:j,payload:n}):x({url:H.GET_USER_ID,dispatch:t,actionType:j})}}),[e])},P=function(){var t=Object(i.useContext)(v),e=Object(i.useReducer)(b,t),n=Object(o.a)(e,2),c=n[0],a=n[1],r=c.userId,p=c.showSpinner,d=c.notifications;return M(a,r),Object(i.useEffect)((function(){r&&x({url:"".concat(H.GET_USER_NOTIFICATIONS).concat(r),dispatch:a,actionType:m})}),[r]),Object(i.useEffect)((function(){var t=setInterval((function(){r&&x({url:"".concat(H.GET_USER_NOTIFICATIONS).concat(r),dispatch:a,actionType:m})}),3e4);return function(){return clearInterval(t)}}),[r]),Object(E.jsx)(v.Provider,{value:{state:c,dispatch:a},children:Object(E.jsxs)(g,{children:[Object(E.jsx)(s.a,{}),p&&Object(E.jsx)(L,{}),Object(E.jsxs)(I,{children:[Object(E.jsx)(_,{children:"Auto-refresh every 30 seconds"}),d.length>0&&Object(E.jsx)(A,{})]})]})})};a.a.render(Object(E.jsx)(P,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.2682769e.chunk.js.map
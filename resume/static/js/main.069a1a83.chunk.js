(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{26:function(e,s,t){},27:function(e,s,t){},31:function(e,s,t){"use strict";t.r(s);var c={};t.r(c),t.d(c,"GetGogglesWebsiteList",(function(){return p})),t.d(c,"NavigateToOutsideLink",(function(){return N})),t.d(c,"NavigateToLink",(function(){return v}));t(0);var n=t(11),i=t.n(n),a=t(16),l=t(3),r=t(13),o=t(9),u=(t(26),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"Test":return e+1;default:return e}}),d="SET_USER_DETAILS_USERCONST",j="GET_USER_DETAILS_USERCONST",b={Firstname:"Paulo",Lastname:"Rodriguez",PersonalEmail:"paurodriguez0220@gmail.com",LinkedInUrl:"https://www.linkedin.com/in/paulo-rodriguez-626337159/",GitHubUrl:"https://github.com/paurodriguez0220/PublicRepo/",GoogleDriveResumeUrl:"https://drive.google.com/uc?export=download&id=1hofHHLccet5hlqLkmOACnHHKprX9fRUU"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case d:case j:default:return e}},h=Object(r.a)({gogglesReducer:u,userReducer:m}),O=(t(27),t(1));var g=function(){return Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:"blue-label",children:"G"}),Object(O.jsx)("span",{className:"red-label",children:"o"}),Object(O.jsx)("span",{className:"yellow-label",children:"g"}),Object(O.jsx)("span",{className:"blue-label",children:"g"}),Object(O.jsx)("span",{className:"green-label",children:"l"}),Object(O.jsx)("span",{className:"red-label",children:"e"}),Object(O.jsx)("span",{className:"yellow-label",children:"s"})]})};var x=Object(o.b)((function(e){return{userDetails:e.userReducer}}))((function(e){return Object(O.jsxs)("div",{className:"goggles-search-bar",children:[Object(O.jsx)("i",{className:"fas fa-search"}),Object(O.jsx)("div",{className:"typewriter",children:Object(O.jsx)("h1",{children:e.userDetails.Firstname+" "+e.userDetails.Lastname})}),Object(O.jsx)("img",{alt:"search",src:"/resume/Google_Microphone_Icon.png"})]})})),p=function(){return 1},N=function(e){var s=window.open(e,"_blank","noopener,noreferrer");s&&(s.opener=null)},v=function(e){Object(l.e)().push(e)};var f=Object(o.b)((function(e){return{userDetails:e.userReducer}}),c)((function(e){return Object(O.jsxs)("div",{className:"websites-list",children:[Object(O.jsxs)("div",{className:"list-tem-container",onClick:function(){e.NavigateToLink("/gogglesresult")},title:"Get to know me",children:[Object(O.jsx)("div",{className:"circle-container",children:Object(O.jsx)("img",{alt:"search",src:"/resume/Google_Icon.svg"})}),"Google"]}),Object(O.jsxs)("div",{className:"list-tem-container",onClick:function(){e.NavigateToOutsideLink(e.userDetails.LinkedInUrl)},title:"View my LinkedIn account",children:[Object(O.jsx)("div",{className:"circle-container linkeIn",children:Object(O.jsx)("i",{className:"fab fa-linkedin",alt:"LinkedIn"})}),"LinkedIn"]}),Object(O.jsxs)("div",{className:"list-tem-container",onClick:function(){e.NavigateToOutsideLink(e.userDetails.GitHubUrl)},title:"Check my public repositories",children:[Object(O.jsx)("div",{className:"circle-container github",children:Object(O.jsx)("i",{className:"fab fa-github",alt:"GitHub"})}),"Github"]}),Object(O.jsxs)("a",{className:"list-tem-container",href:"mailto:"+e.userDetails.PersonalEmail,title:"Send me an email",children:[Object(O.jsx)("div",{className:"circle-container",children:Object(O.jsx)("img",{alt:"search",src:"/resume/Gmail_Icon.svg"})}),"Mail"]}),Object(O.jsxs)("a",{className:"list-tem-container",title:"Download my resume",href:e.userDetails.GoogleDriveResumeUrl,download:!0,children:[Object(O.jsx)("div",{className:"circle-container cloud_download",children:Object(O.jsx)("i",{className:"fas fa-cloud-download-alt",alt:"Resume"})}),"Resume"]})]})}));var w=function(e){return Object(O.jsx)("div",{className:"goggles-search",children:Object(O.jsxs)("div",{className:"goggles-container",children:[Object(O.jsx)(g,{}),Object(O.jsx)(x,{}),Object(O.jsx)(f,{})]})})},_=Object(r.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(O.jsx)(o.a,{store:_,children:Object(O.jsxs)(a.a,{basename:"/resume",children:[Object(O.jsx)(l.a,{path:"/",component:w}),Object(O.jsx)(l.a,{path:"/gogglesresult",component:w})]})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.069a1a83.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t),n(161),n(50),n(160);var a=n(12),i=n.n(a),r=n(51),o=n.n(r),l=n(0),c=n.n(l),s=n(143),d=n(159),m=n(153),p=n(145),u=n(156),h=n(157),g=n(158),f=n(162),b=n(165),y=n.n(b),v=s.a.button.withConfig({displayName:"Button__DefaultButton",componentId:"s08kbq-0"})(["display:inline-block;height:45px;padding:0 22px;color:#2977f5;text-align:center;font-size:1.4rem;font-weight:600;line-height:45px;letter-spacing:0.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:transparent;border:0;outline:0;border-radius:2px;cursor:pointer;box-sizing:border-box;transition-property:color;transition-duration:0.3s;transition-timing-function:ease-in-out;"]),E=Object(s.a)(v).withConfig({displayName:"Button__PrimaryButton",componentId:"s08kbq-1"})(["background-color:#2977f5;box-shadow:0 2px 10px -2px rgba(0,0,0,0.1);color:rgba(255,255,255,0.9);display:block;transform:translateY(0);transition-property:background-color,transform,box-shadow;&:hover{box-shadow:0 4px 12px 2px rgba(0,0,0,0.1);transform:translateY(-1px);}"]),w=function(e){var t=e.primary,n=void 0!==t&&t,a=y()(e,["primary"]),i=n?E:v;return c.a.createElement(i,a)},x=["4.66666666667%","13.3333333333%","22%","30.6666666667%","39.3333333333%","48%","56.6666666667%","65.3333333333%","74%","82.6666666667%","91.3333333333%","100%"],A=["8.66666666667%","17.3333333333%","26%","34.6666666667%","43.3333333333%","52%","60.6666666667%","69.3333333333%","78%","86.6666666667%","95.3333333333%"],C=function(e){var t,n=e.size,a=e.offset,i=e.children,r=e.style,o=x[n-1]||"100%";t=a?A[a-1]||"4%":"100%"===o?0:"4%";var l=s.a.div.withConfig({displayName:"Column",componentId:"sc-1lqrcc7-0"})(["width:100%;float:left;box-sizing:border-box;&:first-child{margin-left:0;}@media (min-width:550px){width:",";marginleft:",";}"],o,t);return c.a.createElement(l,{style:r},i)},k=s.a.div.withConfig({displayName:"Row",componentId:"sc-1d0p8me-0"})(["&:after{content:'';display:table;clear:both;}"]),Q=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={complete:!1,name:"",email:"",completeText:"",completeColor:""},n.request=n.request.bind(o()(o()(n))),n.complete=n.complete.bind(o()(o()(n))),n.renderForm=n.renderForm.bind(o()(o()(n))),n.renderComplete=n.renderComplete.bind(o()(o()(n))),n}i()(t,e);var n=t.prototype;return n.complete=function(e){var t="#dd637e",n="Error Making Request";e&&(t="#42c8c5",n="Awaiting approval..."),this.setState({complete:!0,completeColor:t,completeText:n})},n.request=function(e){var t=this;e.preventDefault();var n=this.state,a=n.email,i=n.name,r=new FormData;r.append("email",a),r.append("name",i),fetch("/invites/add.php",{method:"POST",body:r,mode:"cors"}).then(function(e){200===e.status?t.complete(!0):t.complete(!1)}).catch(function(e){console.log(e)})},n.handleChange=function(e,t){var n={};n[e]=t.target.value,this.setState(n)},n.renderComplete=function(){var e=this.state,t=e.completeColor,n=e.completeText;return c.a.createElement(w,{primary:!0,style:{backgroundColor:t,transform:"none",cursor:"default",boxShadow:"none"}},n)},n.renderForm=function(){var e=this.state,t=e.name,n=e.email;return c.a.createElement("form",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},c.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}},c.a.createElement("input",{onChange:this.handleChange.bind(this,"name"),key:"name",style:{marginRight:20},value:t,type:"text",placeholder:"School"}),c.a.createElement("input",{onChange:this.handleChange.bind(this,"email"),key:"email",type:"text",value:n,placeholder:"Email"})),c.a.createElement(w,{onClick:this.request,style:{display:"inline-block",marginLeft:"auto",marginRight:"auto"},primary:!0},"Request Invite"))},n.render=function(){return this.state.complete?this.renderComplete():this.renderForm()},t}(c.a.Component),B=[{name:"Build",description:c.a.createElement("p",null,"Build is an event that requires creative participants from a team to come together and build a solution to one of two prompts. The event will test the creative skills of participants."),eligibility:"Open"},{name:"SpaceTech",description:c.a.createElement("p",null,"Exun Clan is collaborating with the Delhi Chapter of the prestigious National Space Society (USA) to give students the opportunity to explore the realms of space and it’s concurrence with technology."),eligibility:"Open"},{name:"Sudocrypt",description:c.a.createElement("p",null,"Sudocrypt, Exun Clan's annual online cryptic hunt, will be held over 48 hours from 00:00:00 on 23 October 2018 to 11:59:59 on 24 October 2018."),eligibility:"Open"},{name:"Competitive Programming",description:c.a.createElement("p",null,"Participants will face problems of logic, algorithms and data structures and will be tested on time taken and their solution(s)."),eligibility:"Open"},{name:"Mar-athon",description:c.a.createElement("p",null,"Our tribute to David Morgan-Mar: you will be given unconventional problems where finding the solution won’t be the only challenge."),eligibility:"Open"},{name:"Turing Test",description:c.a.createElement("p",null,"Computational linguists are interested in providing computational models of various kinds of linguistic phenomena, and it is this field that we invite you to explore in Turing Test."),eligibility:"Open"},{name:"Group Discussion",description:c.a.createElement("p",null,"A test of creativity, logical skills and wit; two different statements will be released — one that states something that is blindingly obvious and indisputable, and the other a more subjective topic akin to a motion."),eligibility:"Open"},{name:"Hardware",description:c.a.createElement("p",null,"Power up your cores and overclock that grey matter, because you’re in for some serious hands-on competition. Identify components belonging to a plethora of devices and show off your know-how about hardware."),eligibility:"Open"},{name:"Surprise",description:c.a.createElement("p",null,"Participants will face unconventional challenges linked to the world of technology. Nothing is guaranteed."),eligibility:"Open"},{name:"Sudocrypt Locus",description:c.a.createElement("p",null,"Only for schools from NCR, this will be an onsite treasure hunt. Each school is allowed to send two participants. The format of the event will be announced onsite."),eligibility:"Open"},{name:"Senior Quiz",description:c.a.createElement("p",null,"An enigmatic quiz based on the field of computers, technology, and recent events in the world of IT — a battleground for seasoned professionals to test their wits under extreme pressure."),eligibility:"Open"},{name:"Junior Quiz",description:c.a.createElement("p",null,"An enigmatic quiz based on the field of computers, technology, and recent events in the world of IT — the perfect platform for upcoming quizzers to test their mettle."),eligibility:"Open"},{name:"Crossword",description:c.a.createElement("p",null,"A cryptic crossword based on wit, presence of mind, and an excellent sense of humour. All answers will be related to the fields of computers, technology, and recent events in the field of IT."),eligibility:"Open"},{name:c.a.createElement("span",null,"Domain",c.a.createElement("sup",null,"2"),"+ Gaming"),description:c.a.createElement("p",null,"The prelims will be held online in multiple batches, from October 2-5. A Discord link will be released and the game to be played will be revealed a week before. 30 players will qualify for the onsite round on Exun."),eligibility:"Open"},{name:"Delhi-NCR Jr. Gaming Championship Finals",description:c.a.createElement("p",null,"The finals of the Delhi-NCR Jr. Gaming Championship, of which the qualifiers were held in the 15 schools that registered for it."),eligibility:"Open"},{name:"RoboWars",description:c.a.createElement("p",null,'"War does not decide who is right; only who is left". All robots must be controlled wirelessly or using wires from outside the arena. A maximum of 24 volts DC is allowed for powering the robot. Use of any and all weapons is allowed.'),eligibility:"Open"},{name:"MX+C (Line Follower)",description:c.a.createElement("p",null,"Build a line following robot which is capable of following a black line on a white surface in the least possible time."),eligibility:"Open"},{name:"Surprise Event For Girls",description:c.a.createElement("p",null,"At Exun Clan, we feel that a diverse set of participants is important for the success of our event. With that in mind, Exun 2018 will feature an exciting surprise event for girls in collaboration with the organisation Women Who Code Delhi."),eligibility:"Open"},{name:"Cubing Events",description:c.a.createElement("div",null,c.a.createElement("p",null,"It's always the small pieces that make the big picture. 2 participants per school will compete individually in the following events:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Pyraminx"),c.a.createElement("li",null,"2x2 Cubing"),c.a.createElement("li",null,"3X3 Cubing"))),eligibility:"Open"}],I=n(205),S=n.n(I),z=n(206),O=n.n(z),N=n(207),q=n.n(N),J=n(208),F=n.n(J),P=s.a.div.withConfig({displayName:"pages__Slant",componentId:"sc-361o0d-0"})(["clip-path:polygon(0 0,100% 0,100% 96%,0 100%);"]),R=s.a.img.withConfig({displayName:"pages__Cover",componentId:"sc-361o0d-1"})(["max-height:270px;margin-bottom:1rem;"]),D=s.a.img.withConfig({displayName:"pages__DigitalIndia",componentId:"sc-361o0d-2"})(["display:inline-block;user-select:none;max-height:8rem;vertical-align:middle;margin-bottom:1rem;margin-top:none;opacity:0.85;transition:opacity .3s;&:hover{opacity:1;}@media screen and (max-width:920px){opacity:1;}"]),T=s.a.img.withConfig({displayName:"pages__UniRely",componentId:"sc-361o0d-3"})(["display:inline-block;vertical-align:middle;margin-top:1rem;margin-bottom:1rem;max-height:8.1rem;opacity:0.7;transition:opacity .6s;&:hover{opacity:1;}@media screen and (max-width:920px){opacity:1;}"]),G=s.a.img.withConfig({displayName:"pages__Athena",componentId:"sc-361o0d-4"})(["display:inline-block;vertical-align:middle;margin-top:1rem;margin-bottom:1rem;max-height:8.1rem;opacity:0.7;transition:opacity .6s;&:hover{opacity:1;}@media screen and (max-width:920px){opacity:1;}"]),L=s.a.div.withConfig({displayName:"pages__Sponsor",componentId:"sc-361o0d-5"})(['max-height:"8rem";user-select:"none";opacity:0.9;color:"grey";@media screen and (max-width:920px){width:290px;}']),M=s.a.span.withConfig({displayName:"pages__Box",componentId:"sc-361o0d-6"})(["padding:0.2rem 0.5rem;margin:0 0.2rem;font-size:90%;color:inherit;white-space:nowrap;background:transparent;border:1px solid currentColor;border-radius:4px;"]),W=s.a.div.withConfig({displayName:"pages__EventScroller",componentId:"sc-361o0d-7"})(["display:flex;flex-wrap:wrap;&::-webkit-scrollbar{background:transparent;}"]),V=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:!1},n.toggle=n.toggle.bind(o()(o()(n))),n}i()(t,e);var n=t.prototype;return n.toggle=function(){this.setState(function(e){return{active:!e.active}})},n.render=function(){var e=this.state.active;return c.a.createElement("div",null,c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"}},c.a.createElement("div",null,c.a.createElement("h3",{style:{marginBottom:0}},"Events")),c.a.createElement(w,{onClick:this.toggle,className:"link-styled"},"View ",e?"Less":"All")),c.a.createElement(W,null,B.slice(0,e?B.length:3).map(function(e){return c.a.createElement(f.a,{key:e.name},c.a.createElement("h5",null,e.name),c.a.createElement("div",null,e.description))})))},t}(c.a.Component);t.default=function(){return c.a.createElement(d.a,null,c.a.createElement(P,null,c.a.createElement(u.a,null,c.a.createElement(m.a,null),c.a.createElement(p.a,null,c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement(R,{src:S.a})),c.a.createElement("h1",null,"Exun 2018"),c.a.createElement("h2",null,"Bigger and better than ever before."),c.a.createElement("p",null,"Join us in celebrating the spirit of technology. ",c.a.createElement(M,null,"27-28 October")),c.a.createElement(L,null,"A ",c.a.createElement("a",{rel:"noopener noreferer",target:"_blank",href:"//www.digitizeindia.gov.in"},c.a.createElement(D,{src:q.a}))," supported event powered by ",c.a.createElement("a",{rel:"noopener noreferer",target:"_blank",href:"//unirely.com"},c.a.createElement(T,{src:O.a})),c.a.createElement("br",null),"Co-Sponsored By  ",c.a.createElement("a",{rel:"noopener noreferer",target:"_blank",href:"//google.com"},c.a.createElement(G,{src:F.a}))),c.a.createElement("div",{style:{paddingTop:"4rem"}},c.a.createElement(Q,null)))))),c.a.createElement("main",null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(k,null,c.a.createElement(C,{size:8},c.a.createElement("h3",null,"National for the first time ever."),c.a.createElement("p",null,"Exun has been organizing its flagship event for two decades. With Exun 2018, the event becomes the first national technology symposium for and by the students."))))),c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(V,null)))))}},145:function(e,t,n){"use strict";var a=n(143).a.div.withConfig({displayName:"Container",componentId:"h0ru1t-0"})(["position:relative;width:100%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;@media (min-width:400px){width:90%;padding:0;}@media (min-width:550px){width:80%;}"]);t.a=a},146:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return h});var a=n(0),i=n.n(a),r=n(8),o=n.n(r),l=n(144),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(35);n.d(t,"waitForRouteChange",function(){return s.c});var d=n(146),m=n.n(d);n.d(t,"PageRenderer",function(){return m.a});var p=n(36);n.d(t,"parsePath",function(){return p.a});var u=i.a.createContext({}),h=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t){e.exports="data:image/png;base64,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"},149:function(e,t,n){},151:function(e,t,n){},153:function(e,t,n){"use strict";n(50),n(160);var a=n(12),i=n.n(a),r=n(51),o=n.n(r),l=n(0),c=n.n(l),s=n(147),d=n(143),m=n(145),p=n(155),u=n.n(p),h=[{title:"Register",href:"/reg"},{title:"About",href:"/about"},{title:"Members",href:"/members"},{title:"Alumni",href:"/alumni"},{title:"faculty",href:"/faculty"},{title:"Archive",href:"/archive"},{title:"lnexun",href:"//lnexun.com",external:!0}],g=d.a.div.withConfig({displayName:"Navbar__Wrapper",componentId:"sc-1dt3hzk-0"})(["display:flex;justify-content:space-between;align-items:center;"]),f=d.a.div.withConfig({displayName:"Navbar__Cross",componentId:"sc-1dt3hzk-1"})(["display:none;@media screen and (max-width:920px){display:block;font-size:3rem;line-height:0;margin-top:-10rem;margin-bottom:10rem;}"]),b=d.a.div.withConfig({displayName:"Navbar__Hamburger",componentId:"sc-1dt3hzk-2"})(["display:none;@media screen and (max-width:920px){display:block;flex:1;text-align:right;}"]),y=d.a.div.withConfig({displayName:"Navbar__Nav",componentId:"sc-1dt3hzk-3"})(["flex:1;display:flex;justify-content:flex-end;@media screen and (max-width:920px){display:none;",";}"],function(e){return e.active?"\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background: rgba(255, 255, 255, 0.9);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    ":null}),v=d.a.ul.withConfig({displayName:"Navbar__Links",componentId:"sc-1dt3hzk-4"})(["list-style-type:none;margin:0;cursor:default;text-align:center;"]),E=d.a.li.withConfig({displayName:"Navbar__LinksItem",componentId:"sc-1dt3hzk-5"})(["padding:0;margin:0;display:inline-block;margin-left:18px;font-size:1.35rem;letter-spacing:1px;font-weight:600;text-transform:uppercase;cursor:pointer;&:hover{color:#2977f5;}@media screen and (max-width:920px){display:block;margin-bottom:1em;}"]),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:!1},n.toggle=n.toggle.bind(o()(o()(n))),n}i()(t,e);var n=t.prototype;return n.toggle=function(){this.setState(function(e){return{active:!e.active}})},n.render=function(){var e=this.state.active;return c.a.createElement(m.a,null,c.a.createElement(g,null,c.a.createElement("a",{href:"//exunclan.com",rel:"noopener noreferer"},c.a.createElement("img",{height:"60",src:u.a,alt:""})),c.a.createElement(b,{onClick:this.toggle},"☰"),c.a.createElement(y,{active:e},c.a.createElement(f,{onClick:this.toggle},"✕"),c.a.createElement(v,null,h.map(function(e){return c.a.createElement(E,{key:e.href},e.external?c.a.createElement("a",{href:e.href},e.title):c.a.createElement(s.Link,{to:e.href},e.title))})))))},t}(c.a.Component);t.a=w},154:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),o=n.n(r),l=n(37),c=n(1),s=function(e){var t=e.location,n=c.default.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:n})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,n){e.exports=n.p+"static/logo-68375e30142a8f5faa97f58bbb36842c.png"},156:function(e,t,n){"use strict";var a=n(143).a.div.withConfig({displayName:"Header",componentId:"sc-1rpe4m2-0"})(["padding-top:3rem;padding-bottom:3rem;border-bottom:1px solid #eee;background:rgb(245,248,255);"]);t.a=a},157:function(e,t,n){"use strict";var a=n(143).a.div.withConfig({displayName:"Splash",componentId:"pdkui7-0"})(["display:flex;flex-direction:column;align-items:center;text-align:center;padding-bottom:5rem;padding-top:5rem;"]);t.a=a},158:function(e,t,n){"use strict";var a=n(143).a.div.withConfig({displayName:"Section",componentId:"lan26t-0"})(["padding-top:5rem;padding-bottom:5rem;"]);t.a=a},159:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(8),o=n.n(r),l=n(163),c=n.n(l),s=n(143),d=n(145),m=s.a.div.withConfig({displayName:"Footer__Wrapper",componentId:"sc-1rysfex-0"})(["padding-top:3rem;padding-bottom:3rem;border-top:1px solid #eee;background:rgb(245,248,255);"]),p=function(){return i.a.createElement(m,null,i.a.createElement(d.a,{style:{textAlign:"center"}},i.a.createElement("a",{className:"link-styled",href:"//facebook.com"},"Facebook")," · ",i.a.createElement("a",{className:"link-styled",href:"//lnexun.com"},"ln(exun)")))},u=n(148),h=n.n(u),g=(n(149),n(151),function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(c.a,{title:"Exun Clan",meta:[{name:"description",content:"Exun Clan is the computer club at Delhi Public School, R.K. Puram"}],link:[{rel:"shortcut icon",type:"image/png",href:""+h.a}]}),i.a.createElement("div",null,t),i.a.createElement(p,null))});g.propTypes={children:o.a.func},t.a=g},161:function(e,t,n){var a=n(26).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(16)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},162:function(e,t,n){"use strict";var a=n(143).a.div.withConfig({displayName:"Card",componentId:"iajg4m-0"})(["border:1px solid #dfe1e5;border-radius:10px;flex-basis:31.333333333%;padding:3rem;margin-right:2%;margin-bottom:2%;display:flex;flex-direction:column;&:last-child{margin-right:0;}@media screen and (max-width:900px){flex-basis:100%;margin-right:0;}"]);t.a=a},205:function(e,t,n){e.exports=n.p+"static/cover-cf43834cdac6152045a3aa9c9981f925.svg"},206:function(e,t,n){e.exports=n.p+"static/unirely-4578f58bb26cec47ab8efcddda65d5ce.png"},207:function(e,t,n){e.exports=n.p+"static/digitalindia-595463bac0a86c2199d9fb306e0567d9.png"},208:function(e,t,n){e.exports=n.p+"static/athena-ad90ec10f218b9327ce9a0e4135cd756.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-c97f0cdf5cb434fe4acd.js.map
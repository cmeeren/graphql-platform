(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4M6O":function(e,n,t){"use strict";var i=t("TqRt");n.__esModule=!0,n.insertScript=function(e,n,t){var i=window.document.createElement("script");return i.async=!0,i.src=e,i.id=n,t.appendChild(i),i},n.removeScript=function(e,n){var t=window.document.getElementById(e);t&&n.removeChild(t)},n.debounce=function(e,n,t){var i;return function(){var a=this,o=arguments,r=function(){i=null,t||e.apply(a,o)},c=t&&!i;window.clearTimeout(i),i=setTimeout(r,n),c&&e.apply(a,o)}},n.isReactElement=r,n.shallowComparison=function e(n,t){var i,o=new Set(Object.keys(n).concat(Object.keys(t)));return 0!==(i=[]).concat.apply(i,(0,a.default)(o)).filter((function(i){if("object"==typeof n[i]){if(e(n[i],t[i]))return!0}else if(n[i]!==t[i]&&!r(n[i]))return!0})).length};var a=i(t("RIqP")),o=i(t("q1tI"));function r(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},AIgE:function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),a=t.n(i),o=t("BBkP"),r=t("CMDK"),c=t("/MKj"),l=t("vOnD"),d=t("mcIw"),s=(t("aFQa"),t("fLR6")),p=t("MUpH"),u=t("XHDn");function m(){var e=Object(p.a)(["\n  body {\n    overflow-y: ",";\n\n    @media only screen and (min-width: 600px) {\n      overflow-y: initial;\n    }\n  }\n"]);return m=function(){return e},e}var f=l.c.div.withConfig({displayName:"doc-page-elements__MostProminentSection",componentId:"sc-1y7nogp-0"})([""]),g="\n  max-height: 90vh;\n  display: block;\n  align-self: start;\n  position: sticky;\n  top: 0;\n  overflow-y: auto;\n  z-index: 25;\n\n  "+Object(u.g)("\n    max-height: none;\n    width: 350px;\n  ")+"\n\n  "+Object(u.d)("\n    width: 100%;\n  ")+"\n",h=Object(l.a)(m(),(function(e){return e.disableScrolling?"hidden":"initial"})),x=function(e){var n=e.data,t=Object(c.useDispatch)(),o=Object(i.useCallback)((function(){t(Object(d.b)())}),[]);return Object(i.useEffect)((function(){var e,t=n.tableOfContents.split(/"|\//).filter((function(e){return 0===e.indexOf("#")})).map((function(e){var n=e.substring(1);return{id:"toc-"+n,position:document.getElementById(n).offsetTop-80}})).reverse(),i=function(){for(var n,i=document.body.scrollTop||document.documentElement.scrollTop,a=0;a<t.length;a++)if(i>=t[a].position){n=t[a].id;break}e!==n&&(e&&(document.getElementById(e).parentElement.className=""),(e=n)&&(document.getElementById(e).parentElement.className="active"))};return t.length>0&&document.addEventListener("scroll",i),function(){t.length>0&&document.removeEventListener("scroll",i)}}),[n]),n.tableOfContents.length>0?a.a.createElement(v,null,a.a.createElement(w,null,"In this article"),a.a.createElement(f,null,a.a.createElement(b,{onClick:o,dangerouslySetInnerHTML:{__html:n.tableOfContents.replace(/href=\"(.*?#)(.*?)\"/gi,'id="toc-$2" href="/docs$1$2"')}}))):a.a.createElement(a.a.Fragment,null)},v=l.c.section.withConfig({displayName:"article-sections__Container",componentId:"sc-1xnyxv5-0"})(["margin-bottom:20px;"]),w=l.c.h6.withConfig({displayName:"article-sections__Title",componentId:"sc-1xnyxv5-1"})(["padding:0 25px;font-size:0.833em;@media only screen and (min-width:1320px){padding:0 20px;}"]),b=l.c.div.withConfig({displayName:"article-sections__Content",componentId:"sc-1xnyxv5-2"})(["ul{display:flex;flex-direction:column;margin:0;padding:0 25px 10px;list-style-type:none;li{flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;> p{margin:0;padding:0;}> ul{padding-right:0;}&.active > a,> p.active > a{font-weight:bold;}> a,> p > a{font-size:0.833em;color:#666;:hover{color:#000;}}}@media only screen and (min-width:1320px){padding:0 20px 10px;}}"]),y=t("qGPU"),_=t.n(y),C=function(e){var n=e.showWhenScreenWidthIsSmallerThan,t=e.title,i=e.onClose;return a.a.createElement(E,{showWhenScreenWidthIsSmallerThan:n},a.a.createElement(I,null,t),a.a.createElement(O,{onClick:i}))},E=l.c.header.withConfig({displayName:"doc-page-pane-header__Header",componentId:"sc-9lcvm7-0"})(["display:flex;flex-direction:row;align-items:center;padding-bottom:10px;@media only screen and (min-width:","px){display:none;}"],(function(e){return e.showWhenScreenWidthIsSmallerThan})),I=l.c.h5.withConfig({displayName:"doc-page-pane-header__Title",componentId:"sc-9lcvm7-1"})(["flex:1 1 auto;margin-bottom:0;margin-left:25px;"]),O=Object(l.c)(_.a).withConfig({displayName:"doc-page-pane-header__CloseButton",componentId:"sc-9lcvm7-2"})(["flex:0 0 auto;margin-right:19px;margin-left:20px;width:26px;height:26px;opacity:0.5;cursor:pointer;transition:opacity 0.2s ease-in-out;&:hover{opacity:1;}"]),j=function(e){var n=e.children,t=Object(c.useSelector)((function(e){return e.common.showAside})),o=Object(c.useSelector)((function(e){return e.common.articleViewportHeight})),r=Object(c.useDispatch)(),l=Object(i.useCallback)((function(){r(Object(d.l)())}),[]);return a.a.createElement(N,{calculatedHeight:o,className:t?"show":""},a.a.createElement(h,{disableScrolling:t}),a.a.createElement(C,{title:"About this article",showWhenScreenWidthIsSmallerThan:u.h,onClose:l}),n)},N=l.c.aside.withConfig({displayName:"doc-page-aside__Aside",componentId:"s4ne5m-0"})([""," margin-left:0;transition:transform 250ms;background-color:white;padding:25px 0 0;&.show{transform:none;}",""],g,(function(e){var n=e.calculatedHeight;return Object(u.f)("\n      transform: translateX(100%);\n      height: "+n+";\n      position: fixed;\n      top: 60px;\n      right: 0;\n      "+u.a+"\n    ")})),S=t("LOFe"),k=t("ZGSP"),q=t("DmWS"),D=t.n(q),z=t("+K7j"),P=t.n(z),H=function(e){var n=e.data,t=e.originPath,i=n.site.siteMetadata,o=i.repositoryUrl+"/blob/master/website/src/docs/"+t;return a.a.createElement(M,null,a.a.createElement(T,null,"Help us improving our content"),a.a.createElement(A,null,a.a.createElement(U,null,a.a.createElement(L,{to:o},a.a.createElement(S.a,null,a.a.createElement(D.a,null)),"Edit on GitHub")),a.a.createElement(U,null,a.a.createElement(L,{to:i.tools.slack},a.a.createElement(S.a,null,a.a.createElement(P.a,null)),"Discuss on Slack"))))},M=l.c.section.withConfig({displayName:"doc-page-community__Container",componentId:"sc-1onj5g2-0"})(["margin-bottom:20px;"]),T=l.c.h6.withConfig({displayName:"doc-page-community__Title",componentId:"sc-1onj5g2-1"})(["padding:0 25px;font-size:0.833em;@media only screen and (min-width:1320px){padding:0 20px;}"]),A=l.c.ol.withConfig({displayName:"doc-page-community__CommunityItems",componentId:"sc-1onj5g2-2"})(["display:flex;flex-direction:column;margin:0;padding:0 25px 10px;list-style-type:none;@media only screen and (min-width:1320px){padding:0 20px 10px;}"]),U=l.c.li.withConfig({displayName:"doc-page-community__CommunityItem",componentId:"sc-1onj5g2-3"})(["flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;"]),L=Object(l.c)(k.a).withConfig({displayName:"doc-page-community__CommunityLink",componentId:"sc-1onj5g2-4"})(["font-size:0.833em;color:#666;> ","{margin-right:10px;> svg{fill:#666;}}:hover{color:#000;> "," > svg{fill:#000;}}"],S.a,S.a),V=(t("r5vi"),l.c.div.withConfig({displayName:"doc-page-legacy__Dialog",componentId:"sc-1vucprn-0"})(["display:",";background-color:#ffb806;@media only screen and (min-width:820px){> .gatsby-image-wrapper{border-radius:4px 4px 0 0;}}"],(function(e){return e.show?"initial":"none"})),l.c.div.withConfig({displayName:"doc-page-legacy__Container",componentId:"sc-1vucprn-1"})(["display:flex;flex-direction:row;padding:10px 20px;@media only screen and (min-width:820px){padding:10px 50px;}"]),l.c.div.withConfig({displayName:"doc-page-legacy__Message",componentId:"sc-1vucprn-2"})(["flex:0 1 auto;font-size:0.889em;line-height:1.667em;color:#4f3903;"]),Object(l.c)(k.a).withConfig({displayName:"doc-page-legacy__LegacyDocLink",componentId:"sc-1vucprn-3"})(["text-decoration:underline;color:#4f3903;"]),l.c.button.withConfig({displayName:"doc-page-legacy__CloseButton",componentId:"sc-1vucprn-4"})(["flex:0 0 auto;margin-left:auto;cursor:pointer;> svg{fill:#4f3903;width:24px;height:24px;}"]),t("l5rq")),W=t.n(V),B=t("RkNZ"),R=t.n(B),Q=t("XuCD"),X=t.n(Q),G=function(e){var n,t,o,r,l,s,p=e.data,u=e.selectedPath,m=e.selectedProduct,g=e.selectedVersion,h=Object(c.useSelector)((function(e){return e.common.expandedPaths})),x=Object(c.useSelector)((function(e){return e.common.showTOC})),v=Object(c.useDispatch)(),w=Object(i.useState)(!1),b=w[0],y=w[1],_=null===(n=p.config)||void 0===n||null===(t=n.products)||void 0===t?void 0:t.find((function(e){return(null==e?void 0:e.path)===m})),E=null==_||null===(o=_.versions)||void 0===o?void 0:o.find((function(e){return(null==e?void 0:e.path)===g})),I=Object(i.useCallback)((function(e){e.stopPropagation(),v(Object(d.c)())}),[]),O=Object(i.useCallback)((function(){y(!1)}),[]),j=Object(i.useCallback)((function(){v(Object(d.n)())}),[]),N=Object(i.useCallback)((function(){v(Object(d.c)())}),[]),k=Object(i.useCallback)((function(e,n){e.stopPropagation(),y(!n)}),[]),q=Object(i.useCallback)((function(e,n){e.stopPropagation(),v(Object(d.m)({path:n}))}),[]);Object(i.useEffect)((function(){return window.addEventListener("click",O),function(){window.removeEventListener("click",O)}}),[O]),Object(i.useEffect)((function(){if(null==E?void 0:E.items){var e=g.length>0?g.length+1:0,n=u.indexOf(m)+m.length+1+e,t=u.substring(n).split("/").filter((function(e){return e.length>0}));if(t.length>0)if(E.items.find((function(e){return e.path===t[0]&&e.items}))){var i=u.substring(0,t.length>1?u.lastIndexOf(t[t.length-1])-1:u.length-1);v(Object(d.e)({path:i}))}}}),[_,u,m]);var D=Object(c.useSelector)((function(e){return e.common.articleViewportHeight}));return a.a.createElement(J,{calculatedHeight:D,className:x?"show":""},a.a.createElement(C,{title:"Table of contents",showWhenScreenWidthIsSmallerThan:1111,onClose:j}),a.a.createElement(Z,null,a.a.createElement($,{onClick:function(e){return k(e,b)}},null==_?void 0:_.title,a.a.createElement(S.a,{size:16},a.a.createElement(X.a,null))),a.a.createElement(Y,{open:b,onClick:I},null===(r=p.config)||void 0===r||null===(l=r.products)||void 0===l?void 0:l.map((function(e){return e===_?a.a.createElement(ne,{key:e.path,onClick:O},a.a.createElement(ie,null,e.title),a.a.createElement(ae,null,e.description)):a.a.createElement(te,{key:e.path,to:""===e.versions[0].path?"/docs/"+e.path+"/":"/docs/"+e.path+"/"+e.versions[0].path+"/"},a.a.createElement(ie,null,e.title),a.a.createElement(ae,null,e.description))})))),!b&&_.versions.length>1&&a.a.createElement(oe,null,_.versions.map((function(e,n){return a.a.createElement(ce,{key:e.path+n,className:E.path===e.path?"active":void 0},a.a.createElement(re,{to:""===e.path?"/docs/"+_.path+"/":"/docs/"+_.path+"/"+e.path+"/"},e.title))}))),!b&&(null==E?void 0:E.items)&&a.a.createElement(f,null,function e(n,t){return a.a.createElement(le,null,n.map((function(n){var i=n.path,o=n.title,r=n.items,c=r||"index"!==i?t+"/"+i:t;return a.a.createElement(me,{key:c+(r?"/parent":""),className:r?F(u,c)?"active":"":K(u,c)?"active":"",onClick:N},r?a.a.createElement(pe,{expanded:-1!==h.indexOf(c)},a.a.createElement(de,{onClick:function(e){return q(e,c)}},o,a.a.createElement(S.a,{size:16},a.a.createElement(W.a,{className:"arrow-down"}),a.a.createElement(R.a,{className:"arrow-up"}))),a.a.createElement(se,null,e(r,c))):a.a.createElement(ue,{to:c+"/"},o))})))}(E.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title,items:e.items?null==e?void 0:e.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title}})):void 0}})),"/docs/"+_.path+((null==E||null===(s=E.path)||void 0===s?void 0:s.length)&&E.path.length>0?"/"+E.path:""))))};function F(e,n){var t=n.endsWith("/")?n:n+"/";return e.startsWith(t)}function K(e,n){return n===e.substring(0,e.lastIndexOf("/"))}var J=l.c.nav.withConfig({displayName:"doc-page-navigation__Navigation",componentId:"ssy9ga-0"})([""," padding:25px 0 0;transition:margin-left 250ms;background-color:white;&.show{margin-left:0;}",""],g,(function(e){var n=e.calculatedHeight;return Object(u.g)("\n      margin-left: -105%;\n      height: "+n+";\n      position: fixed;\n      top: 60px;\n      left: 0;\n      "+u.a+"\n    ")})),Z=l.c.div.withConfig({displayName:"doc-page-navigation__ProductSwitcher",componentId:"ssy9ga-1"})(["display:flex;flex-wrap:wrap;align-items:center;@media only screen and (min-width:1070px){position:relative;flex-wrap:initial;overflow-y:initial;}"]),$=l.c.button.withConfig({displayName:"doc-page-navigation__ProductSwitcherButton",componentId:"ssy9ga-2"})(["display:flex;flex:0 0 auto;flex-direction:row;align-items:center;border:1px solid #ccc;border-radius:5px;margin:6px 14px 10px;padding:7px 10px;width:calc(100% - 28px);height:38px;font-size:0.833em;transition:background-color 0.2s ease-in-out;> ","{margin-left:auto;> svg{fill:#666;}}:hover{background-color:#ddd;}@media only screen and (min-width:1070px){margin-bottom:20px;padding:7px 5px;width:calc(100% - 28px);height:initial;}"],S.a),Y=l.c.div.withConfig({displayName:"doc-page-navigation__ProductSwitcherDialog",componentId:"ssy9ga-3"})(["display:",";flex:1 1 100%;flex-direction:column;padding:0 10px;background-color:#fff;@media only screen and (min-width:1070px){top:135px;position:fixed;z-index:10;flex-direction:row;flex-wrap:wrap;margin:0 14px;border-radius:5px;padding:10px;width:700px;height:initial;box-shadow:0 3px 6px 0 rgba(0,0,0,0.25);}"],(function(e){return e.open?"flex":"none"})),ee=Object(l.b)(["flex:0 0 auto;border:1px solid #ccc;border-radius:5px;margin:5px;padding:10px;font-size:0.833em;color:#666;cursor:pointer;@media only screen and (min-width:1070px){flex:0 0 calc(50% - 32px);}"]),ne=l.c.div.withConfig({displayName:"doc-page-navigation__ActiveProduct",componentId:"ssy9ga-4"})(["",";background-color:#ddd;"],ee),te=Object(l.c)(k.a).withConfig({displayName:"doc-page-navigation__ProductLink",componentId:"ssy9ga-5"})(["",";transition:background-color 0.2s ease-in-out;:hover{background-color:#ddd;}"],ee),ie=l.c.h6.withConfig({displayName:"doc-page-navigation__ProductTitle",componentId:"ssy9ga-6"})(["font-size:1em;"]),ae=l.c.p.withConfig({displayName:"doc-page-navigation__ProductDescription",componentId:"ssy9ga-7"})(["margin-bottom:0;"]),oe=l.c.ol.withConfig({displayName:"doc-page-navigation__ProductVersions",componentId:"ssy9ga-8"})(["display:flex;flex-direction:row;margin:0;padding:0 25px 10px;list-style-type:none;@media only screen and (min-width:1070px){padding:0 20px 10px;}"]),re=Object(l.c)(k.a).withConfig({displayName:"doc-page-navigation__ProductVersionLink",componentId:"ssy9ga-9"})(["font-size:0.833em;color:#666;:hover{color:#000;}"]),ce=l.c.li.withConfig({displayName:"doc-page-navigation__ProductVersion",componentId:"ssy9ga-10"})(["flex:0 0 auto;margin:5px 20px 5px 0;padding:0;min-height:20px;line-height:initial;&.active{> ","{font-weight:bold;}}"],re),le=l.c.ol.withConfig({displayName:"doc-page-navigation__NavigationList",componentId:"ssy9ga-11"})(["display:flex;flex-direction:column;margin:0;padding:0 25px 20px;list-style-type:none;@media only screen and (min-width:1070px){display:flex;padding:0 20px 20px;}"]),de=l.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroupToggle",componentId:"ssy9ga-12"})(["display:flex;flex-direction:row;align-items:center;min-height:20px;font-size:0.833em;"]),se=l.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroupContent",componentId:"ssy9ga-13"})(["> ","{padding:5px 10px;}"],le),pe=l.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroup",componentId:"ssy9ga-14"})(["display:flex;flex-direction:column;cursor:pointer;> ","{display:",";}> "," > ","{margin-left:auto;> .arrow-down{display:",";fill:#666;}> .arrow-up{display:",";fill:#666;}}"],se,(function(e){return e.expanded?"initial":"none"}),de,S.a,(function(e){return e.expanded?"none":"initial"}),(function(e){return e.expanded?"initial":"none"})),ue=Object(l.c)(k.a).withConfig({displayName:"doc-page-navigation__NavigationLink",componentId:"ssy9ga-15"})(["font-size:0.833em;color:#666;:hover{color:#000;}"]),me=l.c.li.withConfig({displayName:"doc-page-navigation__NavigationItem",componentId:"ssy9ga-16"})(["flex:0 0 auto;margin:5px 0;padding:0;min-height:20px;line-height:initial;&.active{> ",",> "," > ","{font-weight:bold;}}"],ue,pe,de),fe=t("t+sS"),ge=t.n(fe),he=t("NmUf"),xe=t.n(he),ve=t("C3u5"),we=function(e){var n=e.children,t=Object(i.createRef)(),o=Object(c.useDispatch)();return Object(i.useEffect)((function(){var e=function(){var e,n,i=null!==(e=null===(n=t.current)||void 0===n?void 0:n.offsetHeight)&&void 0!==e?e:0;if(i>0){var a=window.innerHeight>i?i-25:window.innerHeight-85;o(Object(d.i)({articleHeight:a+"px"}))}else o(Object(d.i)({articleHeight:"94vh"}))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}})),a.a.createElement(be,{ref:t},n)},be=l.c.div.withConfig({displayName:"doc-page-article-wrapper__ArticleWrapperElement",componentId:"sc-13mid1d-0"})(["display:grid;",";"," grid-template-rows:1fr;padding:6px;"],u.b,Object(u.f)("\n    grid-template-columns: 1fr;\n  ")),ye=function(e){var n=e.data,t=e.originPath,o=Object(c.useDispatch)(),r=n.file.childMarkdownRemark,l=r.fields,p=r.frontmatter,u=r.html,m=l.slug.substring(1),f="/docs/"+m,g=/^([\w-]*?)\/(v\d+)?/g.exec(m),h=g[1]||"",v=g&&g[2]||"",w=p.title,b=Object(c.useSelector)((function(e){return e.common.yScrollPosition>10})),y=Object(i.useCallback)((function(){o(Object(d.n)())}),[]),_=Object(i.useCallback)((function(){o(Object(d.l)())}),[]);return a.a.createElement(Ee,null,a.a.createElement(G,{data:n,selectedPath:f,selectedProduct:h,selectedVersion:v}),a.a.createElement(we,null,a.a.createElement(Ce,null,a.a.createElement(ve.a,null,!1,a.a.createElement(s.b,null,a.a.createElement(_e,null,a.a.createElement(Oe,{hasScrolled:b}),a.a.createElement(Ie,{hasScrolled:b},a.a.createElement(je,{onClick:y,className:"toc-toggle"},a.a.createElement(ge.a,null)," Table of contents"),a.a.createElement(je,{onClick:_,className:"aside-toggle"},a.a.createElement(xe.a,null)," About this article"))),a.a.createElement(s.c,null,w)),a.a.createElement(s.a,{dangerouslySetInnerHTML:{__html:u}})),!1)),a.a.createElement(j,null,a.a.createElement(H,{data:n,originPath:t}),a.a.createElement(x,{data:n.file.childMarkdownRemark})))},_e=l.c.div.withConfig({displayName:"doc-page__ResponsiveMenuWrapper",componentId:"fuo9s5-0"})(["position:absolute;left:0;right:0;"]),Ce=l.c.div.withConfig({displayName:"doc-page__ArticleContainer",componentId:"fuo9s5-1"})(["padding:20px;grid-row:1;grid-column:3;",";",""],Object(u.f)("\n      grid-column: 1;\n      margin-top: 10px;\n  "),Object(u.e)("\n    width: 100%;\n    padding: 0;\n  ")),Ee=l.c.div.withConfig({displayName:"doc-page__Container",componentId:"fuo9s5-2"})(["display:grid;",";"," "," grid-template-rows:1fr;width:100%;height:100%;overflow:visible;","{grid-row:1;grid-column:2;","}","{grid-row:1;grid-column:1 / 6;"," ","}","{grid-row:1;grid-column:4;","}"],u.b,Object(u.f)("\n    grid-template-columns: 250px 1fr;\n    width: auto;\n  "),Object(u.g)("\n    grid-template-columns: 1fr;\n  "),J,Object(u.f)("\n      grid-column: 1;\n    "),be,Object(u.f)("\n      grid-column: 2 / 5;\n    "),Object(u.g)("\n      grid-column: 1 / 5;\n    "),N,Object(u.e)("\n      grid-column: 1;\n    ")),Ie=l.c.div.withConfig({displayName:"doc-page__ResponsiveMenu",componentId:"fuo9s5-3"})(["position:fixed;transition:all 100ms linear 0s;top:100px;"," box-sizing:border-box;z-index:3;display:flex;flex-direction:row;align-items:center;background:linear-gradient( 180deg,#ffffff 30%,rgba(255,255,255,0.75) 100% );width:800px;margin-left:auto;margin-right:auto;padding:20px;"," "," "," ",""],(function(e){return e.hasScrolled?"top: 60px;":""}),Object(u.e)("\n    left: 0;\n    width: auto;\n    right: 0;\n    margin-left: 0;\n    margin-right: 0;\n    top: 60px;\n  "),Object(u.c)("\n    display: none;\n  "),Object(u.f)("\n    > .toc-toggle {\n      display: none;\n    }\n  "),Object(u.g)("\n    > .toc-toggle {\n      display: initial;\n    }\n  ")),Oe=l.c.div.withConfig({displayName:"doc-page__ResponsiveMenuBackground",componentId:"fuo9s5-4"})(["display:",";position:fixed;height:60px;top:60px;box-sizing:border-box;z-index:2;background:linear-gradient( 180deg,#ffffff 30%,rgba(255,255,255,0.75) 100% );width:800px;margin-left:auto;margin-right:auto;padding:20px;"," ",""],(function(e){return e.hasScrolled?"initial":"none"}),Object(u.e)("\n    left: 0;\n    width: auto;\n    right: 0;\n    margin-left: 0;\n    margin-right: 0;\n  "),Object(u.c)("\n    display: none;\n  ")),je=l.c.button.withConfig({displayName:"doc-page__Button",componentId:"fuo9s5-5"})(["display:flex;flex-direction:row;align-items:center;color:#666;transition:color 0.2s ease-in-out;&.aside-toggle{margin-left:auto;}&:hover{color:#000;> svg{fill:#000;}}> svg{margin-right:5px;width:16px;height:16px;fill:#666;transition:fill 0.2s ease-in-out;}"]);n.default=function(e){var n=e.data,t=e.pageContext;return a.a.createElement(r.a,null,a.a.createElement(o.a,{title:n.file.childMarkdownRemark.frontmatter.title}),a.a.createElement(ye,{data:n,originPath:t.originPath}))}},Bnag:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},C3u5:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var i=t("vOnD"),a=t("q1tI"),o=t.n(a),r=function(e){var n=e.children;return o.a.createElement(c,null,n)},c=i.c.article.withConfig({displayName:"article__ArticleElement",componentId:"z1ywax-0"})(["overflow:hidden;display:flex;flex:1 1 auto;flex-direction:column;margin-bottom:40px;padding-bottom:20px;max-width:800px;@media only screen and (min-width:820px){border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,0.25);}"])},EbDI:function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,n,t){var i=t("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},NmUf:function(e,n,t){var i=t("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"}))}a.defaultProps={viewBox:"0 0 576 512"},e.exports=a,a.default=a},ORnI:function(e,n,t){"use strict";var i=t("TqRt");n.__esModule=!0,n.default=void 0;var a=i(t("VUT9"));n.Disqus=a.default;var o=i(t("qASQ"));n.CommentCount=o.default;var r=i(t("vAJ3"));n.CommentEmbed=r.default;var c=a.default;n.default=c},RIqP:function(e,n,t){var i=t("Ijbi"),a=t("EbDI"),o=t("ZhPi"),r=t("Bnag");e.exports=function(e){return i(e)||a(e)||o(e)||r()}},VUT9:function(e,n,t){"use strict";var i=t("TqRt");n.__esModule=!0,n.default=void 0;var a=i(t("pVnL")),o=i(t("8OQS")),r=i(t("VbXa")),c=i(t("q1tI")),l=i(t("17x9")),d=t("4M6O"),s=function(e){function n(n){var t;return(t=e.call(this,n)||this).shortname="chillicream",t.embedUrl="https://"+t.shortname+".disqus.com/embed.js",t}(0,r.default)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.loadInstance()},t.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},t.componentDidUpdate=function(){this.loadInstance()},t.componentWillUnmount=function(){this.cleanInstance()},t.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},t.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,d.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},t.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},t.cleanInstance=function(){(0,d.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var n=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);n.parentNode.removeChild(n)}},t.render=function(){var e=this.props,n=(e.config,(0,o.default)(e,["config"]));return c.default.createElement("div",(0,a.default)({id:"disqus_thread"},n,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},n}(c.default.Component);n.default=s,s.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},WkPL:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}},XHDn:function(e,n,t){"use strict";t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return a})),t.d(n,"g",(function(){return o})),t.d(n,"h",(function(){return r})),t.d(n,"f",(function(){return l})),t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return u}));function i(e){return"\n    @media only screen and (max-width: 450px) {\n      "+e+"\n    }\n  "}function a(e){return"\n    @media only screen and (max-width: 860px) {\n      "+e+"\n    }\n  "}function o(e){return"\n    @media only screen and (max-width: 1110px) {\n      "+e+"\n    }\n  "}var r=1280,c=r+"px";function l(e){return"\n    @media only screen and (max-width: "+c+") {\n      "+e+"\n    }\n  "}var d=r+1+"px";function s(e){return"\n    @media only screen and (min-width: "+d+") {\n      "+e+"\n    }\n  "}var p="grid-template-columns: 1fr 250px 820px 250px 1fr;",u="box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 6px 0px;"},XuCD:function(e,n,t){var i=t("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},ZhPi:function(e,n,t){var i=t("WkPL");e.exports=function(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}},aFQa:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var i=t("ORnI"),a=t("q1tI"),o=t.n(a),r=t("vOnD"),c=function(e){var n=e.data,t=e.path,i=e.title,a={url:n.site.siteMetadata.siteUrl+t,identifier:t,title:i};return o.a.createElement(l,{config:a})},l=Object(r.c)(i.Disqus).withConfig({displayName:"article-comments__DisqusWrapper",componentId:"sc-1dblelw-0"})(["margin:0 20px 60px;@media only screen and (min-width:820px){margin:0 50px 60px;}"])},fLR6:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return c}));var i=t("vOnD"),a=t("XHDn"),o=i.c.header.withConfig({displayName:"article-elements__ArticleHeader",componentId:"tmhk1n-0"})(["position:relative;"," "," @media only screen and (min-width:820px){> .gatsby-image-wrapper{border-radius:4px 4px 0 0;}}"],Object(a.f)("\n    padding-top: 54px;\n  "),Object(a.e)("\n    padding-top: 20px;\n  ")),r=i.c.h1.withConfig({displayName:"article-elements__ArticleTitle",componentId:"tmhk1n-1"})(["margin:20px 20px 10px;font-size:2em;@media only screen and (min-width:820px){margin:20px 50px 10px;}"]),c=i.c.div.withConfig({displayName:"article-elements__ArticleContent",componentId:"tmhk1n-2"})(['> *{padding-right:20px;padding-left:20px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{padding-right:4px;transform:translateX(0px);}> blockquote{padding:30px 20px;}> table{th:first-child,td:first-child{padding-left:20px;}th:last-child,td:last-child{padding-right:20px;}}> .gatsby-code-button-container{padding:0;}> .gatsby-highlight{padding-right:0;padding-left:0;> pre[class*="language-"]{padding:30px 20px;::before{left:20px;}}}@media only screen and (min-width:820px){> *{padding-right:50px;padding-left:50px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{transform:translateX(30px);}> blockquote{padding:30px 50px;}> table{th:first-child,td:first-child{padding-left:50px;}th:last-child,td:last-child{padding-right:50px;}}> .gatsby-code-button-container{padding:0;}> .gatsby-highlight{> pre[class*="language-"]{padding-right:50px;padding-left:50px;::before{left:50px;}}}}'])},l5rq:function(e,n,t){var i=t("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}))}a.defaultProps={viewBox:"0 0 448 512"},e.exports=a,a.default=a},qASQ:function(e,n,t){"use strict";var i=t("TqRt");n.__esModule=!0,n.default=void 0;var a=i(t("pVnL")),o=i(t("8OQS")),r=i(t("VbXa")),c=i(t("q1tI")),l=i(t("17x9")),d=t("4M6O"),s=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),p=function(e){function n(n){var t;return(t=e.call(this,n)||this).shortname="chillicream",t}(0,r.default)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.loadInstance()},t.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},t.componentDidUpdate=function(){this.loadInstance()},t.componentWillUnmount=function(){this.cleanInstance()},t.loadInstance=function(){window.document.getElementById("dsq-count-scr")?s():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},t.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},t.render=function(){var e=this.props,n=e.config,t=e.placeholder,i=(0,o.default)(e,["config","placeholder"]);return c.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":n.identifier,"data-disqus-url":n.url},i,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),t)},n}(c.default.Component);n.default=p,p.defaultProps={placeholder:"..."},p.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},"t+sS":function(e,n,t){var i=t("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},vAJ3:function(e,n,t){"use strict";var i=t("TqRt");n.__esModule=!0,n.default=void 0;var a=i(t("VbXa")),o=i(t("q1tI")),r=i(t("17x9")),c=function(e){function n(){return e.apply(this,arguments)||this}(0,a.default)(n,e);var t=n.prototype;return t.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},t.render=function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},n}(o.default.Component);n.default=c,c.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},c.propTypes={commentId:r.default.string.isRequired,width:r.default.number,height:r.default.number,showMedia:r.default.bool,showParentComment:r.default.bool}}}]);
//# sourceMappingURL=component---src-templates-doc-page-template-tsx-a4bfeba81720e1952066.js.map
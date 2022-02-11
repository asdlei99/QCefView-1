"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[915],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,h=u["".concat(d,".").concat(p)]||u[p]||c[p]||i;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1950:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Web APIs"},d="Web APIs",m={unversionedId:"reference/WebAPIs",id:"reference/WebAPIs",title:"Web APIs",description:"object window.CefViewClient",source:"@site/docs/reference/WebAPIs.md",sourceDirName:"reference",slug:"/reference/WebAPIs",permalink:"/QCefView/docs/reference/WebAPIs",editUrl:"https://github.com/CefView/QCefViewDoc/tree/master/docs/reference/WebAPIs.md",tags:[],version:"current",frontMatter:{title:"Web APIs"},sidebar:"default",previous:{title:"QCefView",permalink:"/QCefView/docs/reference/QCefView"}},s=[{value:"object <code>window.CefViewClient</code>",id:"object-windowcefviewclient",children:[{value:"Summary",id:"summary",children:[],level:3},{value:"Members",id:"members",children:[{value:'addEventListener<code>(name, listener)</code> <a class="anchor" id="web_apis_addEventListener"></a>',id:"addeventlistenername-listener-",children:[{value:"Parameters",id:"parameters",children:[],level:5}],level:4},{value:'removeEventListener<code>(name, listener)</code> <a class="anchor" id="web_apis_removeEventListener"></a>',id:"removeeventlistenername-listener-",children:[{value:"Parameters",id:"parameters-1",children:[],level:5}],level:4},{value:'invokeMethod<code>(name, ...args)</code> <a class="anchor" id="web_apis_invokeMethod"></a>',id:"invokemethodname-args-",children:[{value:"Parameters",id:"parameters-2",children:[],level:5}],level:4}],level:3}],level:2},{value:"object <code>window</code>",id:"object-window",children:[{value:"Summary",id:"summary-1",children:[],level:3},{value:"Members",id:"members-1",children:[{value:'window.CefViewQuery<code>(query)</code> <a class="anchor" id="web_apis_CefViewQuery"></a>',id:"windowcefviewqueryquery-",children:[{value:"Parameters",id:"parameters-3",children:[],level:5},{value:"Returns",id:"returns",children:[],level:5}],level:4},{value:'window.CefViewQueryCancel<code>(id)</code> <a class="anchor" id="web_apis_CefViewQueryCancel"></a>',id:"windowcefviewquerycancelid-",children:[{value:"Parameters",id:"parameters-4",children:[],level:5}],level:4}],level:3}],level:2}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"web-apis"},"Web APIs"),(0,i.kt)("h2",{id:"object-windowcefviewclient"},"object ",(0,i.kt)("inlineCode",{parentName:"h2"},"window.CefViewClient")),(0,i.kt)("p",null,"QCefView added the Javascript bridge object ",(0,i.kt)("inlineCode",{parentName:"p"},"CefViewClient")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object for all browsers frames, with this bridge object you can perform communication between native and web context at anytime"),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Members"),(0,i.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#web_apis_addEventListener"},(0,i.kt)("inlineCode",{parentName:"a"},"addEventListener")),(0,i.kt)("inlineCode",{parentName:"td"},"(name, listener)")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds a listener for the event with specified name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#web_apis_removeEventListener"},(0,i.kt)("inlineCode",{parentName:"a"},"removeEventListener")),(0,i.kt)("inlineCode",{parentName:"td"},"(name, listener)")),(0,i.kt)("td",{parentName:"tr",align:null},"Removes the listener for the event with specified name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#web_apis_invokeMethod"},(0,i.kt)("inlineCode",{parentName:"a"},"invokeMethod")),(0,i.kt)("inlineCode",{parentName:"td"},"(name, ...args)")),(0,i.kt)("td",{parentName:"tr",align:null},"Invokes a native method with the specified name and arguments")))),(0,i.kt)("h3",{id:"members"},"Members"),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"addeventlistenername-listener-"},(0,i.kt)("a",{parentName:"h4",href:"#web_apis_addEventListener"},(0,i.kt)("inlineCode",{parentName:"a"},"addEventListener")),(0,i.kt)("inlineCode",{parentName:"h4"},"(name, listener)")," ",(0,i.kt)("a",{class:"anchor",id:"web_apis_addEventListener"})),(0,i.kt)("p",null,"Adds a listener for the event with specified name"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," The event name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"listener")," The listener callback function")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"removeeventlistenername-listener-"},(0,i.kt)("a",{parentName:"h4",href:"#web_apis_removeEventListener"},(0,i.kt)("inlineCode",{parentName:"a"},"removeEventListener")),(0,i.kt)("inlineCode",{parentName:"h4"},"(name, listener)")," ",(0,i.kt)("a",{class:"anchor",id:"web_apis_removeEventListener"})),(0,i.kt)("p",null,"Removes the listener for the event with specified name"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," The event name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"listener")," The listener callback function")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"invokemethodname-args-"},(0,i.kt)("a",{parentName:"h4",href:"#web_apis_invokeMethod"},(0,i.kt)("inlineCode",{parentName:"a"},"invokeMethod")),(0,i.kt)("inlineCode",{parentName:"h4"},"(name, ...args)")," ",(0,i.kt)("a",{class:"anchor",id:"web_apis_invokeMethod"})),(0,i.kt)("p",null,"Invokes a native method with the specified name and arguments"),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," The method name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"..args")," The arguments for the method")),(0,i.kt)("h2",{id:"object-window"},"object ",(0,i.kt)("inlineCode",{parentName:"h2"},"window")),(0,i.kt)("p",null,"QCefView added some extra methods to the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object for all browsers frames, with these methods you can perform communication between native and web context"),(0,i.kt)("h3",{id:"summary-1"},"Summary"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Members"),(0,i.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#web_apis_CefViewQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"window.CefViewQuery")),(0,i.kt)("inlineCode",{parentName:"td"},"(query)")),(0,i.kt)("td",{parentName:"tr",align:null},"Sends a cef query request to the native context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#web_apis_CefViewQueryCancel"},(0,i.kt)("inlineCode",{parentName:"a"},"window.CefViewQueryCancel")),(0,i.kt)("inlineCode",{parentName:"td"},"(id)")),(0,i.kt)("td",{parentName:"tr",align:null},"Cancels the query request with the specified id")))),(0,i.kt)("h3",{id:"members-1"},"Members"),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"windowcefviewqueryquery-"},(0,i.kt)("a",{parentName:"h4",href:"#web_apis_CefViewQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"window.CefViewQuery")),(0,i.kt)("inlineCode",{parentName:"h4"},"(query)")," ",(0,i.kt)("a",{class:"anchor",id:"web_apis_CefViewQuery"})),(0,i.kt)("p",null,"Sends a cef query request to the native context"),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," The query object")),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The query id")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"windowcefviewquerycancelid-"},(0,i.kt)("a",{parentName:"h4",href:"#web_apis_CefViewQueryCancel"},(0,i.kt)("inlineCode",{parentName:"a"},"window.CefViewQueryCancel")),(0,i.kt)("inlineCode",{parentName:"h4"},"(id)")," ",(0,i.kt)("a",{class:"anchor",id:"web_apis_CefViewQueryCancel"})),(0,i.kt)("p",null,"Cancels the query request with the specified id"),(0,i.kt)("h5",{id:"parameters-4"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," The query id")))}u.isMDXComponent=!0}}]);
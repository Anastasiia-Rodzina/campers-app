"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{499:function(e,a,c){c.r(a),c.d(a,{default:function(){return ee}});var t=c(433),n=c(413),s=c(861),r=c(439),i=c(757),o=c.n(i),l=c(791),m=c(420),d=c(689),u=c(461),h=c(223),p=function(e){return e.camper.campers},_=function(e){return e.camper.isLoading},g=function(e){return e.camper.error},f=function(e){return e.camper.favorites},x="camperList_camper__qnTRh",v="camperList_camperCard__BwAE3",j="camperList_camperTitle__eVt4o",k="camperList_camperTitleHeartGroup__Dc1Mg",N="camperList_transparentButton__rPHWC",b="camperList_iconDef__pDOca",I="camperList_red__2iZ0U",C="camperList_camperDescription__LMVxi",L="camperList_icon__uPLxU",Z="camperList_iconkitchen__KWSz0",S="camperList_camperFormButton__jWHB9",F="camperList_camperCardRight__ZKR4p",y="camperList_modalFormPrice__STfN0",w="camperList_camperImgBox__4J7me",T="camperList_camperImg__8SW5O",R="camperList_camperButtonWraper__+B7TL",V="camperList_noCampersContainer__89QQy",B="camperList_noCampersImage__XMLls",W="camperList_noCampersText__7VfZt",M=c(184),P=function(e){var a=e.src,c=e.alt;return(0,M.jsx)("div",{className:w,children:(0,M.jsx)("img",{className:T,src:a,alt:c})})},E=c(406);var D=c.p+"static/media/sprite.7014b2d36b8e3d05d2bca7349aa6e52c.svg",H=function(e){var a=e.name,c=e.price,t=e.isFavorite,n=e.onToggleFavorite;return(0,M.jsxs)("div",{className:j,children:[(0,M.jsx)("h2",{className:E.Z.formHeader,children:a}),(0,M.jsxs)("div",{className:k,children:[(0,M.jsxs)("h2",{className:E.Z.formHeader,children:["\u20ac",c.toFixed(2)]}),(0,M.jsx)("button",{className:N,onClick:n,children:(0,M.jsx)("svg",{className:"".concat(b," ").concat(t?I:""),children:(0,M.jsx)("use",{href:"".concat(D,"#heart")})})})]})]})},K=function(e){var a=e.rating,c=e.reviews,t=e.location;return(0,M.jsxs)("div",{className:"".concat(y," ").concat(E.Z.formPrice),children:[(0,M.jsxs)("span",{children:["\u2b50",(0,M.jsxs)("span",{className:E.Z.formRating,children:[a," (",c.length," Reviews)"]})]}),(0,M.jsxs)("div",{className:E.Z.formRatingLoc,children:[(0,M.jsx)("svg",{className:E.Z.icon,children:(0,M.jsx)("use",{href:"".concat(D,"#map_pin")})}),t]})]})},A=function(e){var a=e.details,c=e.adults,t=e.transmission,n=e.engine,s=a.kitchen,r=a.beds,i=a.airConditioner;return(0,M.jsxs)("ul",{className:E.Z.formFeaturesCard,children:[(0,M.jsxs)("li",{className:E.Z.formItem,children:[(0,M.jsx)("svg",{className:L,children:(0,M.jsx)("use",{href:"".concat(D,"#adults")})}),c," adults"]}),(0,M.jsxs)("li",{className:E.Z.formItem,children:[(0,M.jsx)("svg",{className:L,children:(0,M.jsx)("use",{href:"".concat(D,"#automatic")})}),t]}),(0,M.jsxs)("li",{className:E.Z.formItem,children:[(0,M.jsx)("svg",{className:L,children:(0,M.jsx)("use",{href:"".concat(D,"#petrol")})}),n]}),s&&(0,M.jsxs)("li",{className:E.Z.formItem,children:[(0,M.jsx)("svg",{className:Z,children:(0,M.jsx)("use",{href:"".concat(D,"#kitchen")})}),"kitchen"]}),r&&(0,M.jsxs)("li",{className:E.Z.formItem,children:[(0,M.jsx)("svg",{className:L,children:(0,M.jsx)("use",{href:"".concat(D,"#beds")})}),r," beds"]}),i&&(0,M.jsxs)("li",{className:E.Z.formItem,children:[(0,M.jsx)("svg",{className:L,children:(0,M.jsx)("use",{href:"".concat(D,"#ac")})}),"AC"]})]})},Q="button_catalogLoadMoreButton__qziEl",U=function(e){var a=e.onClick,c=e.children;return(0,M.jsx)("button",{className:Q,onClick:a,children:c})},X=function(e){var a=e.onClick;return(0,M.jsx)("div",{className:R,children:(0,M.jsx)("button",{className:"".concat(S," ").concat(E.Z.bookingFormButton),onClick:a,children:"Show more"})})},q=function(e){var a=e.camper,c=e.isFavorite,t=e.onToggleFavorite,n=e.onShowMore,s=a._id,r=a.gallery,i=a.name,o=a.price,l=a.rating,m=a.reviews,d=a.location,u=a.description,h=a.details,p=a.adults,_=a.transmission,g=a.engine;return(0,M.jsxs)("div",{className:v,children:[(0,M.jsx)(P,{src:r[0],alt:i}),(0,M.jsxs)("div",{className:F,children:[(0,M.jsx)(H,{name:i,price:o,isFavorite:c,onToggleFavorite:function(){return t(s)}}),(0,M.jsx)(K,{rating:l,reviews:m,location:d}),(0,M.jsx)("p",{className:C,children:u}),(0,M.jsx)(A,{adults:p,transmission:_,engine:g,details:h}),(0,M.jsx)(X,{onClick:function(){return n(a)}})]})]},s)},G=c(522),O=c.p+"static/media/stop.f2d0e5b7fa901a7b8d26.png",z=function(e){var a=e.campers,c=(0,m.v9)(_),n=(0,m.v9)(g),s=(0,m.v9)(f),r=(0,m.I0)(),i=(0,d.TH)(),o=(0,d.s0)(),u=function(e){r((0,h.mN)(e));var a=new URLSearchParams(i.search),c=s.includes(e)?s.filter((function(a){return a!==e})):[].concat((0,t.Z)(s),[e]);c.length>0?a.set("favorites",c.join(",")):a.delete("favorites"),o({search:a.toString()})},p=function(e){r((0,h.h7)(e))};return(0,l.useEffect)((function(){}),[a,s]),c?(0,M.jsx)(G.Z,{}):n?(0,M.jsxs)("div",{children:["Error: ",n]}):a.length?(0,M.jsx)("div",{className:x,children:a.map((function(e){return(0,M.jsx)(q,{camper:e,isFavorite:s.includes(e._id),onToggleFavorite:u,onShowMore:p},e._id)}))}):(0,M.jsxs)("div",{className:V,children:[(0,M.jsx)("img",{src:O,alt:"No campers",className:B}),(0,M.jsx)("p",{className:W,children:"Campers not found."})]})},Y={catalogSection:"catalog_catalogSection__SMmuh",catalogWrapper:"catalog_catalogWrapper__-uPEj",catalogLocationItem:"catalog_catalogLocationItem__gFeta",catalogInputWrapper:"catalog_catalogInputWrapper__2K-4O",catalogInput:"catalog_catalogInput__7+XRA",catalogInputIcon:"catalog_catalogInputIcon__BzTbK",checkboxInput:"catalog_checkboxInput__eQDhR",checkboxLabel:"catalog_checkboxLabel__9fWAk",catalogSideFilters:"catalog_catalogSideFilters__pQEnp",active:"catalog_active__n1XSu",catalogSideP:"catalog_catalogSideP__wLlsX",catalogInputIconVan:"catalog_catalogInputIconVan__P4DYe",catalogSearchBtn:"catalog_catalogSearchBtn__hEkcD",catalogInputIconSearch:"catalog_catalogInputIconSearch__fRy2i",catalogLeft:"catalog_catalogLeft__YlV+E",catalogRight:"catalog_catalogRight__IGZG5",catalogSideVanWrapper:"catalog_catalogSideVanWrapper__7D9xT",catalogFilterItem:"catalog_catalogFilterItem__hrRI0"},J=function(e){var a=e.type,c=e.id,t=e.name,n=e.value,s=e.checked,r=e.onChange,i=e.label,o=e.icon;return(0,M.jsxs)("div",{className:Y.catalogSideGroup,children:[(0,M.jsx)("input",{type:a,id:c,name:t,value:n,checked:s,onChange:r,className:Y.checkboxInput}),(0,M.jsxs)("label",{htmlFor:c,className:"".concat(Y.checkboxLabel," ").concat(s?Y.active:""),children:[(0,M.jsx)("div",{className:Y.checkboxSquare,children:(0,M.jsx)("svg",{className:"radio"===a?Y.catalogInputIconVan:Y.catalogInputIcon,children:(0,M.jsx)("use",{href:"".concat(D,"#").concat(o)})})}),(0,M.jsx)("p",{className:Y.catalogSideP,children:i})]})]})},$=function(e){var a=e.filters,c=e.handleFilterChange;return(0,M.jsxs)("div",{children:[(0,M.jsx)("p",{className:E.Z.detailsTitle,children:"Vehicle equipment"}),(0,M.jsxs)("div",{className:Y.catalogSideFilters,children:[(0,M.jsx)(J,{type:"checkbox",id:"airConditioner",name:"details",value:"airConditioner",checked:a.details.includes("airConditioner"),onChange:c,label:"AC",icon:"ac"}),(0,M.jsx)(J,{type:"checkbox",id:"automatic",name:"transmission",value:"automatic",checked:a.transmission.includes("automatic"),onChange:c,label:"Automatic",icon:"automatic"}),(0,M.jsx)(J,{type:"checkbox",id:"kitchen",name:"details",value:"kitchen",checked:a.details.includes("kitchen"),onChange:c,label:"Kitchen",icon:"kitchen"}),(0,M.jsx)(J,{type:"checkbox",id:"TV",name:"details",value:"TV",checked:a.details.includes("TV"),onChange:c,label:"TV",icon:"tv"}),(0,M.jsx)(J,{type:"checkbox",id:"shower",name:"details",value:"shower",checked:a.details.includes("shower"),onChange:c,label:"Shower/WC",icon:"shower"})]}),(0,M.jsx)("p",{className:E.Z.detailsTitle,children:"Vehicle type"}),(0,M.jsxs)("div",{className:Y.catalogSideVanWrapper,children:[(0,M.jsx)(J,{type:"radio",id:"panelTruck",name:"form",value:"panelTruck",checked:a.form.includes("panelTruck"),onChange:c,label:"Van",icon:"camper"}),(0,M.jsx)(J,{type:"radio",id:"fullyIntegrated",name:"form",value:"fullyIntegrated",checked:a.form.includes("fullyIntegrated"),onChange:c,label:"Fully Integrated",icon:"van"}),(0,M.jsx)(J,{type:"radio",id:"alcove",name:"form",value:"alcove",checked:a.form.includes("alcove"),onChange:c,label:"Alcove",icon:"van_alcove"})]})]})},ee=function(){var e=(0,m.I0)(),a=(0,m.v9)(p),c=(0,m.v9)(_),i=(0,m.v9)(g),f=(0,m.v9)((function(e){return e.camper.page})),x=(0,d.s0)(),v=(0,l.useState)({location:"",details:[],form:"",transmission:""}),j=(0,r.Z)(v,2),k=j[0],N=j[1],b=(0,l.useState)(k),I=(0,r.Z)(b,2),C=I[0],L=I[1],Z=(0,l.useState)(!0),S=(0,r.Z)(Z,2),F=S[0],y=S[1];(0,l.useEffect)((function(){var a=function(){var a=(0,s.Z)(o().mark((function a(){return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e((0,u.MZ)({page:f,limit:4,filters:C}));case 2:a.sent.payload.length<4&&y(!1);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();a()}),[e,f,4,C]),(0,l.useEffect)((function(){i&&x("/error")}),[i,x]);var w=function(e){var a=e.target,c=a.name,s=a.value,r=a.type,i=a.checked;N((function(e){var a=(0,n.Z)({},e);return"checkbox"===r?"transmission"===c?a.transmission=i?s:"":a.details=i?[].concat((0,t.Z)(e.details),[s]):e.details.filter((function(e){return e!==s})):"radio"===r?a.form=s:a[c]=s,a}))},T=function(){e((0,h.Y8)()),y(!0),L(k),e((0,u.MZ)({page:1,limit:4,filters:k}))},R=function(){var a=(0,s.Z)(o().mark((function a(){return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e((0,h.bh)()),e((0,u.MZ)({page:f+1,limit:4,filters:C}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return c?(0,M.jsx)(G.Z,{}):(0,M.jsx)("div",{className:Y.catalogSection,children:(0,M.jsxs)("div",{className:Y.catalogWrapper,children:[(0,M.jsxs)("section",{className:Y.catalogLeft,children:[(0,M.jsx)("p",{className:Y.catalogLocationItem,children:"Location"}),(0,M.jsxs)("div",{className:Y.catalogInputWrapper,children:[(0,M.jsx)("svg",{className:E.Z.icon,children:(0,M.jsx)("use",{href:"".concat(D,"#map_pin")})}),(0,M.jsx)("input",{className:Y.catalogInput,type:"text",name:"location",placeholder:"Kyiv, Ukraine",value:k.location,onChange:w,onKeyDown:function(e){"Enter"===e.key&&T()}})]}),(0,M.jsx)("p",{className:Y.catalogFilterItem,children:"Filters"}),(0,M.jsx)($,{filters:k,handleFilterChange:w}),(0,M.jsx)("button",{className:"".concat(E.Z.bookingFormButton," ").concat(Y.catalogSearchBtn),onClick:T,children:"Search"})]}),(0,M.jsxs)("section",{className:Y.catalogRight,children:[(0,M.jsx)(z,{campers:a}),(0,M.jsx)("div",{children:F&&(0,M.jsx)(U,{onClick:R,children:"Load More"})})]})]})})}},406:function(e,a){a.Z={formHeader:"common_formHeader__kbLj2",formPrice:"common_formPrice__Wirl6",formRating:"common_formRating__BjKcb",formRatingLoc:"common_formRatingLoc__xQVgN",icon:"common_icon__-H2Ut",tabs:"common_tabs__vOC+6",formFeaturesCard:"common_formFeaturesCard__v7JMa",formItem:"common_formItem__lppvk",detailsTitle:"common_detailsTitle__jKDa7",bookingFormButton:"common_bookingFormButton__XtApx"}}}]);
//# sourceMappingURL=842.c407f2fa.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(61)},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),i=a(63),c=a(65),o=a(64),l=a(4),u=a(5),h=a(7),m=a(6),p=a(8);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter a Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:v()}),r.a.createElement("button",{type:"submit"},"Visit Store \u2192"))}}]),t}(r.a.Component),g=a(11),y=a(28),E=a.n(y),O=a(12),j=a.n(O),w=(a(41),j.a.initializeApp({apiKey:"AIzaSyCEvP6byPqwVvBIw89R3SG1Zv68jHuuSJs",authDomain:"catch-of-the-day-hafeez-syed-7.firebaseapp.com",databaseURL:"https://catch-of-the-day-hafeez-syed-7.firebaseio.com"})),k=E.a.createClass(w.database()),S=function(e){var t=e.tagline;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,t))))},F=a(13),C=function(e){var t=e.orderIds,a=e.renderOrder,n=e.total;return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(F.TransitionGroup,{component:"ul",className:"order"},t.map(a)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,d(n))))};var N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props.fishes[e],n=a.props.order[e],s=t&&"available"===t.status,i={classNames:"order",key:e,timeout:{enter:500,exit:500}};return t&&n?s?r.a.createElement(F.CSSTransition,i,r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(F.TransitionGroup,{component:"span",className:"count"},r.a.createElement(F.CSSTransition,{classNames:"count",key:n,timeout:{enter:500,exit:500}},r.a.createElement("span",null,n))),"lbs ",t.name,d(n*t.price),r.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7")))):r.a.createElement(F.CSSTransition,i,r.a.createElement("li",{key:e},"Sorry ",t?t.name:"fish"," is no longer available")):null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=Object.keys(this.props.order),t=function(e,t,a){return e.reduce(function(e,n){var r=t[n],s=a[n];return r&&"available"===r.status?e+s*r.price:e},0)}(e,this.props.fishes,this.props.order);return r.a.createElement(C,{orderIds:e,renderOrder:this.renderOrder,total:t})}}]),t}(r.a.Component),x=a(15),R=a.n(x),T=a(20),I=a(14),A=(a(56),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{type:"text",name:"name",ref:this.nameRef,placeholder:"Name"}),r.a.createElement("input",{type:"text",name:"price",ref:this.priceRef,placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{type:"text",name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{type:"text",name:"image",ref:this.imageRef,placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),t}(r.a.Component)),D=a(18),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=Object(g.a)({},a.props.fish,Object(D.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateFish(a.props.index,t)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.fishes,a=t.name,n=t.price,s=t.desc,i=t.image,c=t.status;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"price",value:n,onChange:this.handleChange}),r.a.createElement("select",{name:"status",value:c,onChange:this.handleChange},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",value:s,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"image",value:i,onChange:this.handleChange}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),t}(r.a.Component),L=function(e){var t=e.authenticate;return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sing in to manage your store's inventory."),r.a.createElement("button",{className:"github",onClick:function(){return t("Github")}},"Github with Login"),r.a.createElement("button",{className:"twitter",onClick:function(){return t("Twitter")}},"Github with Twitter"),r.a.createElement("button",{className:"facebook",onClick:function(){return t("Facebook")}},"Github with Facebook"))},G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,owner:null},a.authHandler=function(){var e=Object(T.a)(R.a.mark(function e(t){var n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.fetch(a.props.storeId,{context:Object(I.a)(Object(I.a)(a))});case 2:if((n=e.sent).owner){e.next=6;break}return e.next=6,k.post("".concat(a.props.storeId,"/owner"),{data:t.user.uid});case 6:a.setState({uid:t.user.uid,owner:n.owner||t.user.uid});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){var t=new(j.a.auth["".concat(e,"AuthProvider")]);w.auth().signInWithPopup(t).then(a.authHandler)},a.logout=Object(T.a)(R.a.mark(function e(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.auth().signOut();case 2:a.setState({uid:null});case 3:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.auth().onAuthStateChanged(function(t){t&&e.authHandler({user:t})})}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Log Out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry you are not the owner!"),t):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),t,Object.keys(this.props.fishes).map(function(t){return r.a.createElement(P,{key:t,index:t,fishes:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})}),r.a.createElement(A,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes"))):r.a.createElement(L,{authenticate:this.authenticate})}}]),t}(r.a.Component),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).clickHandler=function(){a.props.addToOrder(a.props.index)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.details,t=e.image,a=e.name,n=e.price,s=e.desc,i="available"===e.status;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("h3",{className:"fish-name"},a,r.a.createElement("span",{className:"price"},d(n))),r.a.createElement("p",null,s),r.a.createElement("button",{disabled:!i,onClick:this.clickHandler},i?"Add to Cart":"Sold out!")))}}]),t}(r.a.Component),M={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyones favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(g.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.updateFish=function(e,t){var n=Object(g.a)({},a.state.fishes);n[e]=t,a.setState({fishes:n})},a.deleteFish=function(e){var t=Object(g.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t})},a.loadSampleFishes=function(e){a.setState({fishes:M})},a.addToOrder=function(e){var t=Object(g.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(g.a)({},a.state.order);delete t[e],a.setState({order:t})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=k.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params;localStorage.setItem(e.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){k.removeBinding(this.ref)}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.fishes);return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(S,{tagline:"Fresh seafood market"}),r.a.createElement("ul",{className:"fishes"},t.map(function(t){return r.a.createElement(H,{key:t,index:t,addToOrder:e.addToOrder,details:e.state.fishes[t]})}))),r.a.createElement(N,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(G,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeId:this.props.match.params.storeId}))}}]),t}(r.a.Component),J=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found ???"))},U=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:b}),r.a.createElement(o.a,{path:"/store/:storeId",component:z}),r.a.createElement(o.a,{component:J})))};a(59);Object(s.render)(r.a.createElement(U,null),document.querySelector("#main"))}},[[30,2,1]]]);
//# sourceMappingURL=main.e35f24bd.chunk.js.map
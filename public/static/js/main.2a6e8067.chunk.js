(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a(163)},111:function(e,t,a){},112:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(20),l=a.n(s),o=(a(111),a(18)),c=a(48),i=a(12),u=a(13),m=a(16),d=a(14),h=a(24),p=a(15),g=(a(112),a(19)),f=a.n(g),b=a(30),v=a(21),E=Object(v.a)(),O=a(37),y=a(35),w=a(170),j=a(173),k=a(166),S=a(171),C=a(96),L=a(99),N=a(169),I=a(165),x=a(98),U=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(N.a,Object.assign({},this.props,{show:this.props.show,onHide:this.props.toggleModal}),n.a.createElement(N.a.Header,{closeButton:!0},n.a.createElement(N.a.Title,{id:"example-custom-modal-styling-title"},this.props.title)),n.a.createElement(N.a.Body,null,n.a.createElement(S.a,null,n.a.createElement(S.a.Group,{as:I.a,controlId:"formHorizontalEmail"},n.a.createElement(S.a.Label,{column:!0,sm:3},"Default Language"),n.a.createElement(x.a,{sm:9},n.a.createElement(S.a.Control,{type:"email",placeholder:"Email"}))),n.a.createElement(S.a.Group,{as:I.a,controlId:"formHorizontalPassword"},n.a.createElement(S.a.Label,{column:!0,sm:2},"Password"),n.a.createElement(x.a,{sm:10},n.a.createElement(S.a.Control,{type:"password",placeholder:"Password"}))),n.a.createElement("fieldset",null,n.a.createElement(S.a.Group,{as:I.a},n.a.createElement(S.a.Label,{as:"legend",column:!0,sm:2},"Radios"),n.a.createElement(x.a,{sm:10},n.a.createElement(S.a.Check,{type:"radio",label:"first radio",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),n.a.createElement(S.a.Check,{type:"radio",label:"second radio",name:"formHorizontalRadios",id:"formHorizontalRadios2"}),n.a.createElement(S.a.Check,{type:"radio",label:"third radio",name:"formHorizontalRadios",id:"formHorizontalRadios3"})))),n.a.createElement(S.a.Group,{as:I.a,controlId:"formHorizontalCheck"},n.a.createElement(x.a,{sm:{span:10,offset:2}},n.a.createElement(S.a.Check,{label:"Remember me"}))),n.a.createElement(S.a.Group,{as:I.a},n.a.createElement(x.a,{sm:{span:10,offset:2}},n.a.createElement(L.a,{type:"submit"},"Sign in")))))))}}]),t}(n.a.Component),R=a(7),A=a.n(R);A.a.defaults.baseURL="https://ironnews.herokuapp.com";var D=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).search=function(){var e=Object(b.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A()("/api/search/?q="+t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.handleChange=function(t){var a=t.target;e.setState({searchArticlesValidation:!0}),!1!==a.form.checkValidity()&&a.value||(t.preventDefault(),t.stopPropagation());var r=Object(o.a)({},e.state.searchArticles);r[t.target.name]=t.target.value,e.setState({searchArticles:r})},e.handleFocusOut=function(t){e.setState({searchArticlesValidation:!1})},e.handleSubmit=function(){var t=Object(b.a)(f.a.mark(function t(a,r){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),a.currentTarget.checkValidity()&&E.push("/search/"+e.state.searchArticles.searchWord);case 2:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),e.state={showModal:!1,searchArticles:{searchWord:"",language:"en"},searchArticlesValidation:!1},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t,a=this,r=this.state.searchArticlesValidation;this.props.category&&(e=this.props.category.map(function(e,t){return n.a.createElement(w.a.Item,{as:O.a,key:t,to:"/world-news/"+e},e.charAt(0).toUpperCase()+e.slice(1))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(j.a,{collapseOnSelect:!0,expand:"lg",bg:"light",fixed:"top",variant:"light"},n.a.createElement(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(j.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(k.a,{className:"mr-auto"},n.a.createElement(k.a.Link,{as:O.a,to:"/"},"Home"),this.props.user&&n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{title:"World News",id:"collasible-nav-dropdown"},e))),!this.props.user&&n.a.createElement(k.a,null,n.a.createElement(k.a.Link,{as:O.a,to:"/login"},"Login"),n.a.createElement(k.a.Link,{eventKey:2,as:O.a,to:"/signup"},"SignUp")),this.props.user&&n.a.createElement(k.a,null,n.a.createElement(S.a,{inline:!0,validated:r,onSubmit:function(e){return a.handleSubmit(e,a.search)}},n.a.createElement(C.a,{required:!0,name:"searchWord",minLength:"3",value:this.state.searchArticles.searchWord,onBlur:this.handleFocusOut,onChange:this.handleChange,type:"text",placeholder:"Search",className:"mr-sm-2"}),n.a.createElement(L.a,{disabled:!this.state.searchArticles.searchWord,type:"submit",variant:"outline-primary"},"Search")),n.a.createElement(k.a.Link,{onClick:this.toggleModal},n.a.createElement("i",{className:"fas fa-cogs"})),n.a.createElement(k.a.Link,{onClick:function(){a.props.logoutUser()}},"Logout")))),n.a.createElement(U,Object.assign({onShow:this.state.showModal?void(t={title:"Preferences: "+a.props.user.fullName}):null},t,{dialogClassName:"setting-modal","aria-labelledby":"setting-modal",show:this.state.showModal,toggleModal:this.toggleModal})))}}]),t}(n.a.Component),M=Object(y.e)(D),F=a(167),P=a(174);A.a.interceptors.request.use(function(e){return e.baseURL="https://ironnews.herokuapp.com",e.withCredentials=!0,e},function(e){return Promise.reject(e)});var T=function(e){var t=e.user||null,a=(e.addToReadLater,Object(c.a)(e,["addToReadLater"]).article),r=e.article;if(r.sourceDetail[0])s=r.sourceDetail[0].category;else var s="No Category available";return n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,{},n.a.createElement(P.a.Img,{variant:"top",src:r.urlToImage||"http://placehold.jp/cccccc/ffffff/550x350.png?text=Image%20not%20available&css=%7B%22border-radius%22%3A%2215px%22%7D"}),n.a.createElement(P.a.Body,null,n.a.createElement(P.a.Title,null,r.title),n.a.createElement(P.a.Subtitle,{className:"mb-1 font-italic text-muted"},"By ",r.author||"N/A"," @ ",r.publishedAt),n.a.createElement(P.a.Text,null,r.description||"No description available",n.a.createElement(P.a.Link,{target:"_blank",href:r.url}," [Read more..]"))),t&&n.a.createElement(P.a.Header,{className:"article-action"},n.a.createElement("span",{title:"Read Later",className:"fas fa-glasses",onClick:function(){e.addToReadLater(a)}})),n.a.createElement(P.a.Footer,null,n.a.createElement("small",{className:"font-italic text-muted"},"Source: ",r.source.name||"No source available"," Category: ",s))))},H=a(175),J=a(172);A.a.interceptors.request.use(function(e){return e.baseURL="https://ironnews.herokuapp.com",e.withCredentials=!0,e},function(e){return Promise.reject(e)});var V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).readLaterList=function(){if(a.state.user)return JSON.parse(sessionStorage.getItem("user")).readLater.map(function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(H.a.Item,{as:"div",variant:"dark"}," ",n.a.createElement("i",{className:"far fa-trash-alt",onClick:function(){a.props.removeReadLaterItem(e.url)}})),n.a.createElement(H.a.Item,{variant:"flush",as:"a",action:!0,target:"_blank",href:e.url},e.title))})},a.state={user:null},a.props=e,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({user:JSON.parse(sessionStorage.getItem("user"))})}},{key:"render",value:function(){return n.a.createElement(x.a,{className:"side-bar",xs:6,md:4},n.a.createElement("h1",null,"Dashboard: ",this.props.user.fullName," "),n.a.createElement(J.a,null,n.a.createElement(P.a,null,n.a.createElement(J.a.Toggle,{as:P.a.Header,eventKey:"0"},"+ Read Later (",JSON.parse(sessionStorage.getItem("user")).readLater.length,")"),n.a.createElement(J.a.Collapse,{eventKey:"0"},n.a.createElement(P.a.Body,null,n.a.createElement(H.a,{variant:"flush"},this.readLaterList())))),n.a.createElement(P.a,null,n.a.createElement(J.a.Toggle,{as:P.a.Header,eventKey:"1"},"+ Authors"),n.a.createElement(J.a.Collapse,{eventKey:"1"},n.a.createElement(P.a.Body,null,"Hello! I'm another body")))))}}]),t}(r.Component);A.a.interceptors.request.use(function(e){return e.baseURL="https://ironnews.herokuapp.com",e.withCredentials=!0,e},function(e){return Promise.reject(e)});var G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).addToReadLater=function(){var e=Object(b.a)(f.a.mark(function e(t){var r,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(o.a)({},a.state),n=Object(h.a)(a),A.a.post("/api/add-read-later",{articleDetails:t}).then(function(e){1===(e=e.data).ok&&e.nModified>=1?(window.myMessage("Article added to Read Later!","success"),r.user.readLater.push(t),sessionStorage.setItem("user",JSON.stringify(r.user)),n.setState({user:r.user})):1===e.ok&&0===e.nModified&&window.myMessage("This article is already in your Read Later List!","warning")}).catch(function(e){window.myMessage("Server error , try again later.","error")});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.removeReadLaterItem=function(){var e=Object(b.a)(f.a.mark(function e(t){var r,n,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(o.a)({},a.state),e.prev=1,e.next=4,A.a.get("/api/remove-read-later-item/?url=".concat(t));case 4:n=e.sent,"ok"===(s=n.data).response&&(sessionStorage.setItem("user",JSON.stringify(s.user)),r.user=s.user,a.setState(Object(o.a)({},r))),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),a.contentJSX=function(e){if(null!==e.articles&&e.articles&&null!==e.sources&&e.sources)var t=e.articles.map(function(t,r){var s={sourceDetail:null};s.sourceDetail=e.sources.filter(function(e){return e.id===t.source.id});var l=Object(o.a)({},t,s);return n.a.createElement(T,{key:r,user:e.user,article:l,addToReadLater:a.addToReadLater})});return n.a.createElement(n.a.Fragment,null,!e.user&&n.a.createElement(x.a,{sm:12},n.a.createElement("div",{className:"cards cards-4"},t)),e.user&&n.a.createElement(n.a.Fragment,null,n.a.createElement(V,Object.assign({},e,{removeReadLaterItem:a.removeReadLaterItem})),n.a.createElement(x.a,{className:"articles-container",lg:!0,xs:12,md:8},n.a.createElement("div",{className:"cards"},t))))},a.state={user:JSON.parse(sessionStorage.getItem("user"))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){JSON.parse(sessionStorage.getItem("user"))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(F.a,{fluid:!0},n.a.createElement(I.a,{className:"home-container"},this.contentJSX(this.props))))}}]),t}(r.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(G,Object.assign({},this.props,{user:JSON.parse(sessionStorage.getItem("user"))})))}}]),t}(r.Component);A.a.interceptors.request.use(function(e){return e.baseURL="https://ironnews.herokuapp.com",e.withCredentials=!0,e},function(e){return Promise.reject(e)});var z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={articles:null},a.getArticles=Object(b.a)(f.a.mark(function e(){var t,r,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.props.match.params.cat,e.next=4,A.a.get("/api/world-news/?id=".concat(t));case 4:r=e.sent,n=r.data,a.setState(Object(o.a)({articles:n.articles},JSON.parse(sessionStorage.getItem("config"))||null)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}},e,null,[[0,9]])})),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getArticles()}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.getArticles()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(G,Object.assign({},this.state,this.props,{user:this.props.user})))}}]),t}(r.Component),B=a(47),W=a(95),K=a(97);A.a.defaults.baseURL="https://ironnews.herokuapp.com";var X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password},r=a.props.getUserData();A()("/auth/login",{method:"post",data:t,withCredentials:!0}).then(function(e){r(e.data.data),window.myMessage("Hello "+e.data.data.fullName+"! , you are now logged in! ;)","success")}).then(function(){a.props.history.push("/")}).catch(function(e){window.myMessage(e.response.data.message,"error")})},a.state={username:"",password:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"validateForm",value:function(){return this.state.username.length>0&&this.state.password.length>0}},{key:"render",value:function(){return n.a.createElement(F.a,{className:"signup-container"},n.a.createElement(I.a,null,n.a.createElement(x.a,{md:{span:6,offset:3}},n.a.createElement("div",{className:"Login"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement(W.a,{controlId:"username",bsSize:"large"},n.a.createElement(K.a,null,"Username"),n.a.createElement(C.a,{autoFocus:!0,type:"username",value:this.state.username,onChange:this.handleChange})),n.a.createElement(W.a,{controlId:"password",bsSize:"large"},n.a.createElement(K.a,null,"Password"),n.a.createElement(C.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),n.a.createElement(L.a,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit"},"Login"))))))}}]),t}(n.a.Component),_=a(168);A.a.defaults.baseURL="https://ironnews.herokuapp.com";var $=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e){var t=e.target,r=Object(o.a)({},a.state.data);r[e.target.name]=e.target.value,a.setState({data:r}),"username"===e.target.name&&(e.target.value.length>=4?A()({method:"post",url:"/auth/isUserAvailable",data:{username:e.target.value}}).then(function(e){t.setCustomValidity(""),a.setState({usernameCheck:"Ok!, Username available."})}).catch(function(e,r){a.setState({usernameCheck:"Error, Username already in use."}),t.setCustomValidity("Invalid field.")}):0===e.target.value.length?(a.setState({usernameCheck:null}),t.setCustomValidity("Invalid field.")):e.target.value.length<4&&(a.setState({usernameCheck:"Username too short"}),t.setCustomValidity("Invalid field.")))},a.state={validated:!1,data:{username:"",password:"",fullName:""},usernameCheck:null},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.currentTarget;if(!1===t.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.setState({validated:!0}),!0===t.checkValidity()){var a=this.props.getUserData();A()("/auth/signup",{method:"post",data:this.state.data,withCredentials:!0}).then(function(e){console.log("response",e.data.data),a(e.data.data),window.myMessage(e.data.message,"success")}).then(function(){E.push("/")}).catch(function(e){console.log(e),window.myMessage(e.data.message,"success")})}}},{key:"render",value:function(){var e=this,t=this.state.validated;return n.a.createElement(F.a,{className:"signup-container"},n.a.createElement(I.a,null,n.a.createElement(x.a,{md:{span:6,offset:3}},n.a.createElement(S.a,{noValidate:!0,validated:t,onSubmit:function(t){return e.handleSubmit(t)},id:"SignupForm"},n.a.createElement(S.a.Row,null,n.a.createElement(S.a.Group,{as:x.a,md:"12",controlId:"validationName"},n.a.createElement(S.a.Label,null,"First name"),n.a.createElement(S.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"",name:"fullName",value:this.state.data.fullName,onChange:this.handleChange}),n.a.createElement(S.a.Control.Feedback,{type:"invalid"},"Please enter your Name."),n.a.createElement(S.a.Control.Feedback,null,"ok!")),n.a.createElement(S.a.Group,{as:x.a,md:"12",controlId:"validationCustomUsername"},n.a.createElement(S.a.Label,null,"Username"),n.a.createElement(_.a,null,n.a.createElement(_.a.Prepend,null,n.a.createElement(_.a.Text,{id:"inputGroupPrepend"},"@")),n.a.createElement(S.a.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",name:"username",value:this.state.data.username,required:!0,onChange:this.handleChange}),n.a.createElement(S.a.Control.Feedback,{type:"invalid"},this.state.usernameCheck?this.state.usernameCheck:"Please choose a username."),n.a.createElement(S.a.Control.Feedback,{type:"valid"},"Ok!"))),n.a.createElement(S.a.Group,{as:x.a,md:"12",controlId:"validationPassword"},n.a.createElement(S.a.Label,null,"Password"),n.a.createElement(S.a.Control,{required:!0,type:"password",name:"password",value:this.state.data.password,placeholder:"",defaultValue:"",onChange:this.handleChange}),n.a.createElement(S.a.Control.Feedback,null,"Ok!"))),n.a.createElement(L.a,{type:"submit"},"SignUp")))))}}]),t}(n.a.Component),Q=function(e){return n.a.createElement("div",{className:"loader"},n.a.createElement("div",{className:"loading-spinner"}))};A.a.interceptors.request.use(function(e){return e.baseURL="https://ironnews.herokuapp.com",e.withCredentials=!0,e},function(e){return Promise.reject(e)});var Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={articles:null},a.getArticles=Object(b.a)(f.a.mark(function e(){var t,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A()({url:"/api/search",params:a.props.match.params,method:"GET"});case 3:t=e.sent,r=t.data,a.setState(Object(o.a)({articles:r.articles},JSON.parse(sessionStorage.getItem("config"))||null)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}},e,null,[[0,8]])})),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getArticles()}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.getArticles()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(G,Object.assign({},this.state,this.props,{user:this.props.user})))}}]),t}(r.Component);A.a.interceptors.request.use(function(e){return e.baseURL="https://ironnews.herokuapp.com",e.withCredentials=!0,e},function(e){return Promise.reject(e)});var Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getUserData=function(e){sessionStorage.setItem("user",JSON.stringify(e)),a.setState({user:e})},a.logoutUser=function(){A()({url:"/auth/logout",method:"GET"}).then(function(e){window.myMessage("Logged Out","success")}).then(function(){a.setState({user:null}),sessionStorage.clear(),E.push("/")}).catch(function(e){window.myMessage(e.response.data.message,"error")})},a.updateArticlesState=function(e){a.setState({search:e})},a.state={data:null,category:null,language:null,country:null,user:null,isLoading:!0,search:null},a.getUserData=a.getUserData.bind(Object(h.a)(a)),a.updateArticlesState=a.updateArticlesState.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;A()({url:"/api/landingPage",method:"GET"}).then(function(t){var a=t.data.data.articles,r=t.data,n=(r.data,Object(c.a)(r,["data"]));sessionStorage.setItem("config",JSON.stringify(n));var s="true"===t.headers.session?JSON.parse(sessionStorage.getItem("user")):null;s?e.setState(Object(o.a)({data:a},n,{user:s,isLoading:!1})):e.setState(Object(o.a)({data:a},n,{isLoading:!1}))}).catch(function(e){})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.state.isLoading&&n.a.createElement(Q,null),n.a.createElement(M,Object.assign({logoutUser:this.logoutUser},this.state,{user:this.state.user,updateArticlesState:this.updateArticlesState})),n.a.createElement(y.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(q,Object.assign({},t,{sources:e.state.sources,articles:e.state.data,user:e.state.user}))}}),n.a.createElement(y.a,{exact:!0,path:"/login",render:function(t){return n.a.createElement(X,Object.assign({},t,{getUserData:function(){return e.getUserData}}))}}),n.a.createElement(y.a,{exact:!0,path:"/signup",render:function(t){return n.a.createElement($,Object.assign({},t,{getUserData:function(){return e.getUserData}}))}}),n.a.createElement(y.a,{exact:!0,path:"/world-news/:cat",render:function(t){return n.a.createElement(z,Object.assign({},t,{sources:e.state.sources,user:e.state.user}))}}),n.a.createElement(y.a,{exact:!0,path:"/search/:q",render:function(t){return n.a.createElement(Y,Object.assign({},t,{sources:e.state.sources,user:e.state.user}))}}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(105),te=a.n(ee);a(161),a(162);l.a.render(n.a.createElement(y.b,{history:E},n.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),window.myMessage=function(e,t){var a=t||"warning";"error"===t&&(a="error"),new te.a({type:a,layout:"topRight",theme:"bootstrap-v4",text:e,timeout:"4000",progressBar:!0,closeWith:["click"],killer:!0}).show()}}},[[106,1,2]]]);
//# sourceMappingURL=main.2a6e8067.chunk.js.map
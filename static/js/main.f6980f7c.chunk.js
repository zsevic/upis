(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5347:function(e,t,n){e.exports=n(5526)},5526:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(1),c=n.n(r),l=n(36),o=n.n(l),i=n(14),u=n(76),s=n(26),m=n(9),p=n(127),d=n(128),f=n(120),E=n(5553),h=(n(5368),n(5555)),b=n(5552),g=n(27),v=n(28),y=n(30),O=n(29),j=n(7),w=n(31),k=n(5534),C=n(5535),S=n(5537),x=n(5538),P=n(5539),$=n(5556),I=n(5540),N=n(5541),D=n(5533),F="/",M=n(121),T=n.n(M)()(),q=function(e){localStorage.removeItem("token"),e.resetStore(),T.push("/login")},A=function(){return c.a.createElement(i.ApolloConsumer,null,function(e){return c.a.createElement(D.a,{onClick:function(){return q(e)}},"Sign Out")})},U=n(5536),Q=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(O.a)(t).call(this,e))).toggle=n.toggle.bind(Object(j.a)(n)),n.state={isOpen:!1},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k.a,{color:"light",light:!0,expand:"md"},c.a.createElement(C.a,null,c.a.createElement(U.a,{to:"/"},"upis")),c.a.createElement(S.a,{onClick:this.toggle}),c.a.createElement(x.a,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(P.a,{className:"ml-auto",navbar:!0},c.a.createElement($.a,{nav:!0,inNavbar:!0},c.a.createElement(I.a,{nav:!0,caret:!0}),c.a.createElement(N.a,{right:!0},c.a.createElement(D.a,null,c.a.createElement(U.a,{to:"/"},"Faculties")),this.props.session&&this.props.session.me&&"ADMIN"===this.props.session.me.role&&c.a.createElement(r.Fragment,null,c.a.createElement(D.a,null,c.a.createElement(U.a,{to:"/account"},"Profile")),c.a.createElement(D.a,{divider:!0}),c.a.createElement(D.a,null,c.a.createElement(A,null,"Log Out")))))))))}}]),t}(r.Component),L=n(5544),z=n(5545),B=n(18),J=n(19),G=n.n(J);function H(){var e=Object(B.a)(["\n  {\n    me {\n      id\n      username\n      email\n      role\n      faculty {\n        id\n      }\n    }\n  }\n"]);return H=function(){return e},e}var K=G()(H()),R=function(e){return function(t){return c.a.createElement(i.Query,{query:K},function(n){var a=n.data,r=n.refetch;return c.a.createElement(e,Object.assign({},t,{session:a,refetch:r}))})}},V=n(5542),W=n(5543),X=function(e){var t=e.faculty;return c.a.createElement("div",null,c.a.createElement(V.a,{color:"primary",pill:!0},t.name),c.a.createElement(W.a,{responsive:!0,hover:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Department"),c.a.createElement("th",null,"Total"),c.a.createElement("th",null,"Budget"),c.a.createElement("th",null,"Self-financing"))),c.a.createElement("tbody",null,t.departments.map(function(e,t){return c.a.createElement("tr",{key:e.id},c.a.createElement("th",{scope:"row"},t+1),Object.keys(e).map(function(t){switch(t){case"name":case"total":return c.a.createElement("td",{key:t,className:"department".concat(t[0].toUpperCase()).concat(t.slice(1))},e[t]);case"budget":case"selfFinancing":return c.a.createElement("td",{key:t,className:"department".concat(t[0].toUpperCase()).concat(t.slice(1))},e[t]);default:return""}}))}))))};function Y(){var e=Object(B.a)(["\n  subscription {\n    departmentUpdated {\n      department {\n        id\n        name\n        total\n        budget\n        selfFinancing\n      }\n    }\n  }\n"]);return Y=function(){return e},e}var Z=G()(Y()),_=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).subscribeToMore=function(){n.props.subscribeToMore({document:Z,updateQuery:function(e,t){return t.subscriptionData.data,e}})},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.subscribeToMore()}},{key:"render",value:function(){return this.props.faculties.map(function(e){return c.a.createElement(X,{key:e.id,faculty:e})})}}]),t}(r.Component);function ee(){var e=Object(B.a)(["\n  query {\n    faculties {\n      edges {\n        name\n        departments {\n          id\n          name\n          total\n          budget\n          selfFinancing\n        }\n      }\n    }\n  }\n"]);return ee=function(){return e},e}var te=G()(ee()),ne=R(function(){return c.a.createElement("div",null,c.a.createElement(L.a,null,c.a.createElement(i.Query,{query:te},function(e){var t=e.data,n=e.loading,a=e.subscribeToMore,l=t.faculties;if(n||!l)return c.a.createElement("div",null,c.a.createElement(z.a,{color:"primary"}));var o=l.edges;return c.a.createElement(r.Fragment,null,c.a.createElement(_,{faculties:o,subscribeToMore:a}))})))}),ae=n(32),re=n.n(ae),ce=n(46),le=n(57),oe=n(5557),ie=n(124),ue=function(e){var t=e.error;return c.a.createElement("div",null,c.a.createElement("small",null,t.message))},se=n(5546),me=n(5547),pe=n(5548),de=n(5549),fe=n(5550),Ee=n(5551),he=n(123);function be(){var e=Object(B.a)(["\n  mutation($login: String!, $password: String!) {\n    signIn(login: $login, password: $password) {\n      token\n    }\n  }\n"]);return be=function(){return e},e}var ge=G()(be()),ve={login:"",password:""},ye=function(e){function t(){var e,n;Object(g.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(n=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(c)))).state=Object(a.a)({},ve),n.onChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(le.a)({},a,r))},n.onSubmit=function(e,t){t().then(function(){var e=Object(ce.a)(re.a.mark(function e(t){var r;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,n.setState(Object(a.a)({},ve)),localStorage.setItem("token",r.signIn.token),e.next=5,n.props.refetch();case 5:n.props.history.push(F);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.preventDefault()},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.login,a=t.password,r=a.length<7||!Object(ie.isEmail)(n);return c.a.createElement(i.Mutation,{mutation:ge,variables:{login:n,password:a}},function(t,l){l.data;var o=l.loading,i=l.error;return c.a.createElement(se.a,{onSubmit:function(n){return e.onSubmit(n,t)}},c.a.createElement(me.a,{form:!0},c.a.createElement(pe.a,{md:6,lg:{size:3,offset:2}},c.a.createElement(de.a,null,c.a.createElement(fe.a,{for:"userEmail"},"Email"),c.a.createElement(Ee.a,{name:"login",value:n,onChange:e.onChange,type:"email",id:"userEmail",placeholder:"Email or Username"}))),c.a.createElement(pe.a,{md:6,lg:{size:3,offset:2}},c.a.createElement(fe.a,{for:"userPassword"},"Password"),c.a.createElement(Ee.a,{name:"password",value:a,onChange:e.onChange,type:"password",id:"userPassword",placeholder:"Password"})),c.a.createElement(pe.a,{md:6,lg:{size:3,offset:2}},c.a.createElement("p",{className:"lead"},c.a.createElement(he.a,{disabled:r||o,type:"submit"},"Sign In"))),i&&c.a.createElement(ue,{error:i})))})}}]),t}(r.Component),Oe=Object(oe.a)(function(e){var t=e.history,n=e.refetch;return c.a.createElement("div",null,c.a.createElement(L.a,null,c.a.createElement("h1",{className:"display-3 text-center"},"Login"),c.a.createElement(ye,{history:t,refetch:n})))}),je=n(126),we=n(80);function ke(){var e=Object(B.a)(["\n  mutation($id: ID!, $attribute: String!) {\n    downPlace(id: $id, attribute: $attribute) {\n      id\n      name\n      total\n      budget\n      selfFinancing\n    }\n  }\n"]);return ke=function(){return e},e}function Ce(){var e=Object(B.a)(["\n  mutation($id: ID!, $attribute: String!) {\n    upPlace(id: $id, attribute: $attribute) {\n      id\n      name\n      total\n      budget\n      selfFinancing\n    }\n  }\n"]);return Ce=function(){return e},e}var Se=G()(Ce()),xe=G()(ke()),Pe=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(O.a)(t).call(this,e))).upPlace=function(){var e=Object(ce.a)(re.a.mark(function e(t,r){var c,l,o,i;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:c=e.sent,l=c.data,o=l.upPlace,(i=n.state.departments)[t]=Object(a.a)({},o),n.setState({departments:i});case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n.downPlace=function(){var e=Object(ce.a)(re.a.mark(function e(t,r,c){var l,o,i,u;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((l=n.state.departments)[t][r]<=0)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,c();case 5:o=e.sent,i=o.data,u=i.downPlace,l[t]=Object(a.a)({},u),n.setState({departments:l});case 10:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}(),n.state={departments:Object(je.a)(n.props.faculty.departments)},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(V.a,{color:"primary",pill:!0},this.props.faculty.name),c.a.createElement(W.a,{responsive:!0,hover:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Department"),c.a.createElement("th",null,"Total"),c.a.createElement("th",null,"Budget"),c.a.createElement("th",null,"Self-financing"))),c.a.createElement("tbody",null,this.props.faculty.departments.map(function(t,n){return c.a.createElement("tr",{key:t.id},c.a.createElement("th",{scope:"row"},n+1),Object.keys(t).map(function(a){switch(a){case"name":case"total":return c.a.createElement("td",{key:a,className:"department".concat(a[0].toUpperCase()).concat(a.slice(1))},e.state.departments[n][a]);case"budget":case"selfFinancing":return c.a.createElement("td",{key:a,className:"department".concat(a[0].toUpperCase()).concat(a.slice(1))},e.props.session&&e.props.session.me?c.a.createElement(i.Mutation,{mutation:Se,variables:{id:t.id,attribute:a}},function(t,a){a.data,a.loading,a.error;return c.a.createElement(we.b,{onClick:function(){return e.upPlace(n,t)}})}):"",e.state.departments[n][a],e.props.session&&e.props.session.me?c.a.createElement(i.Mutation,{mutation:xe,variables:{id:t.id,attribute:a}},function(t,r){r.data,r.loading,r.error;return c.a.createElement(we.a,{onClick:function(){return e.downPlace(n,a,t)}})}):"");default:return""}}))}))))}}]),t}(r.Component);function $e(){var e=Object(B.a)(["\n  query($id: ID!) {\n    faculty(id: $id) {\n      name\n      departments {\n        id\n        name\n        total\n        budget\n        selfFinancing\n      }\n    }\n  }\n"]);return $e=function(){return e},e}var Ie=G()($e()),Ne=n(5554),De=function(e){return function(t){return function(n){return c.a.createElement(i.Query,{query:K},function(a){var r=a.data;return a.networkStatus<7?null:e(r)?c.a.createElement(t,n):c.a.createElement(Ne.a,{to:"/login"})})}}}(function(e){return e.me&&"ADMIN"===e.me.role})(function(e){var t=e.session;return c.a.createElement("div",null,c.a.createElement(i.Query,{query:Ie,variables:{id:t.me.faculty.id}},function(e){var n=e.data,a=e.loading,l=n.faculty;return a||!l?c.a.createElement("div",null,c.a.createElement(z.a,{color:"primary"})):c.a.createElement(r.Fragment,null,c.a.createElement(Pe,{key:l.id,session:t,faculty:l}))}))}),Fe=R(function(e){var t=e.session,n=e.refetch;return c.a.createElement(h.a,{history:T},c.a.createElement("div",null,c.a.createElement(Q,{session:t}),c.a.createElement("hr",null),c.a.createElement(b.a,{exact:!0,path:F,component:function(){return c.a.createElement(ne,null)}}),c.a.createElement(b.a,{exact:!0,path:"/login",component:function(){return c.a.createElement(Oe,{refetch:n})}}),c.a.createElement(b.a,{exact:!0,path:"/account",component:function(){return c.a.createElement(De,{session:t})}})))}),Me=new p.a({uri:"http://localhost:8080/graphql"}),Te=new d.a({uri:"ws://localhost:8080/graphql",options:{reconnect:!0}}),qe=Object(m.e)(function(e){var t=e.query,n=Object(s.e)(t),a=n.kind,r=n.operation;return"OperationDefinition"===a&&"subscription"===r},Te,Me),Ae=new m.a(function(e,t){return e.setContext(function(e){var t=e.headers,n=void 0===t?{}:t,r=localStorage.getItem("token");return r&&(n=Object(a.a)({},n,{"x-token":r})),{headers:n}}),t(e)}),Ue=Object(f.a)(function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.forEach(function(e){var t=e.message;e.locations,e.path;console.log("GraphQL error",t),"UNAUTHENTICATED"===t&&q(ze)}),n&&(console.log("Network error",n),401===n.statusCode&&q(ze))}),Qe=m.a.from([Ae,Ue,qe]),Le=new E.a,ze=new u.a({link:Qe,cache:Le});o.a.render(c.a.createElement(i.ApolloProvider,{client:ze},c.a.createElement(Fe,null)),document.getElementById("root"))}},[[5347,1,2]]]);
//# sourceMappingURL=main.f6980f7c.chunk.js.map
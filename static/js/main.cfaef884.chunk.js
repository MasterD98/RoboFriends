(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},426:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),o=n(17),s=n.n(o),a=(n(127),n(50)),i=n(51),h=n(53),l=n(52),b=(n(128),n(1)),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){var t=e.onSearchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"Search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"},children:e.children})},O=(n(130),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Oooops That is not good"}):this.props.children}}]),n}(r.Component)),g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(u,{onSearchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(O,{children:Object(b.jsx)(j,{robots:r})})})]}):Object(b.jsx)("h1",{children:"Loading.."})}}]),n}(c.a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,427)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};n(425);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),p()}},[[426,1,2]]]);
//# sourceMappingURL=main.cfaef884.chunk.js.map
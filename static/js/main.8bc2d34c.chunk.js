(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{4:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(2),r=c.n(s),n=c(13),a=c.n(n),i=c(14),o=c(15),l=c(18),d=c(17),h=(c(4),c(16)),j=c.n(h);var u={usersList:function(){return j.a.get("https://randomuser.me/api/?results=125&nat=AU,BR,CA,CH,DE,DK,ES,FI,FR,GB,IE,NO,NL,NZ,TR,US")}},m=c(0),b=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(i.a)(this,c);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={users:[],search:"",sortDirection:"",col:""},e.searchUpdate=function(t){e.setState({search:t.target.value})},e.createEmployeeTable=function(){return e.searchResults().sort(e.sortEmployeeList).map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("img",{src:e.image,alt:"user"})}),Object(m.jsx)("td",{className:"align-middle",children:e.first}),Object(m.jsx)("td",{className:"align-middle",children:e.last}),Object(m.jsx)("td",{className:"align-middle",children:Object(m.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(m.jsx)("td",{className:"align-middle",children:e.username}),Object(m.jsx)("td",{className:"align-middle",children:e.city}),Object(m.jsx)("td",{className:"align-middle",children:e.state}),Object(m.jsx)("td",{className:"align-middle",children:e.country})]},t)}))},e.employeeSorter=function(t){return e.state.col===t?"category ".concat(e.state.sortDirection):"category"},e.handleSortDirectionChange=function(t){e.state.col===t&&"ascending"===e.state.sortDirection?e.setState({sortDirection:"descending",col:t}):e.setState({sortDirection:"ascending",col:t})},e.sortEmployeeList=function(t,c){return t[e.state.col]<c[e.state.col]?"ascending"===e.state.sortDirection?-1:1:t[e.state.col]>c[e.state.col]?"ascending"===e.state.sortDirection?1:-1:0},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;u.usersList().then((function(t){var c=t.data.results.map((function(e){return{first:e.name.first,last:e.name.last,email:e.email,username:e.login.username,image:e.picture.medium,city:e.location.city,state:e.location.state,country:e.nat}}));e.setState({users:c})})).catch((function(e){return console.log(e)}))}},{key:"searchResults",value:function(){var e=this.state.search.toLowerCase();return this.state.users.filter((function(t){return t.first.toLowerCase().includes(e)||t.last.toLowerCase().includes(e)}))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"input-group justify-content-center w-50 m-auto",children:[Object(m.jsx)("div",{className:"input-group-prepend"}),Object(m.jsx)("input",{onChange:this.searchUpdate,type:"search",className:"form-control form-control-md form-group p-1 m-1",placeholder:"Search","aria-label":"SearchBox"})]}),Object(m.jsx)("div",{className:"table table-border table-hover table-responsive-sm m-auto pt-2 pl-5 pr-5 pb-5",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Img"}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsx)("span",{className:this.employeeSorter("first"),onClick:function(){e.handleSortDirectionChange("first")},children:"First"})}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsx)("span",{className:this.employeeSorter("last"),onClick:function(){return e.handleSortDirectionChange("last")},children:"Last"})}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsx)("span",{className:this.employeeSorter("email"),onClick:function(){return e.handleSortDirectionChange("email")},children:"Email"})}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsx)("span",{className:this.employeeSorter("username"),onClick:function(){return e.handleSortDirectionChange("username")},children:"Username"})}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsx)("span",{className:this.employeeSorter("city"),onClick:function(){return e.handleSortDirectionChange("city")},children:"City"})}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsx)("span",{className:this.employeeSorter("state"),onClick:function(){return e.handleSortDirectionChange("state")},children:"State"})}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsx)("span",{className:this.employeeSorter("country"),onClick:function(){return e.handleSortDirectionChange("country")},children:"Country"})})]})}),Object(m.jsx)("tbody",{children:this.createEmployeeTable()})]})})]})}}]),c}(r.a.Component);var p=function(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("h1",{className:"title mt-5",children:[Object(m.jsx)("i",{class:"fa fa-id-badge","aria-hidden":"true"})," Employee Directory"]}),Object(m.jsx)("p",{className:"font-weight-bold",children:"This directory can be searched or sorted by name, DOB, or email address."})]})};var O=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsx)(b,{})]})};c(42);a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8bc2d34c.chunk.js.map
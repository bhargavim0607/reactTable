(this.webpackJsonpreacttable=this.webpackJsonpreacttable||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),s=n.n(o),c=(n(120),n(121),n(50)),i=n(96),d=n(97),l=n(114),h=n(110),u=n(202),g=n(203),m=n(37),p=n(201),j=n(98),f=n.n(j),y=n(75),b=n(24),k=[{key:"1",name:"Prasanna",age:21,address:"Visakhapatnam",gender:"Female",phone:4328987235},{key:"2",name:"Hari Priya",age:17,address:"London No. 1 Lake Park",gender:"Female",phone:4328983235},{key:"3",name:"Jim Green",age:32,address:"Sidney No. 1 Lake Park",gender:"Male",phone:9728987235},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park",gender:"Female",phone:4323487235},{key:"5",name:"Anuragh",age:6,address:"80 Feet Road",gender:"Male",phone:6328387235},{key:"6",name:"Jyothi",age:16,address:"Akkayyyapalem",gender:"Female",phone:4328987233}],x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchText:"",searchedColumn:""},e.getColumnSearchProps=function(t){return{filterDropdown:function(n){var a=n.setSelectedKeys,r=n.selectedKeys,o=n.confirm,s=n.clearFilters;return Object(b.jsxs)("div",{style:{padding:8},children:[Object(b.jsx)(u.a,{ref:function(t){e.searchInput=t},placeholder:"Search ".concat(t),value:r[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return e.handleSearch(r,o,t)},style:{marginBottom:8,display:"block"}}),Object(b.jsxs)(g.b,{children:[Object(b.jsx)(m.a,{type:"primary",onClick:function(){return e.handleSearch(r,o,t)},icon:Object(b.jsx)(y.a,{}),size:"small",style:{width:90},children:"Search"}),Object(b.jsx)(m.a,{onClick:function(){return e.handleReset(s)},size:"small",style:{width:90},children:"Reset"}),Object(b.jsx)(m.a,{type:"link",size:"small",onClick:function(){o({closeDropdown:!1}),e.setState({searchText:r[0],searchedColumn:t})},children:"Filter"})]})]})},filterIcon:function(e){return Object(b.jsx)(y.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,n){return n[t]?n[t].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(t){t&&setTimeout((function(){return e.searchInput.select()}),100)},render:function(n){return e.state.searchedColumn===t?Object(b.jsx)(f.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[e.state.searchText],autoEscape:!0,textToHighlight:n?n.toString():""}):n}}},e.handleSearch=function(t,n,a){n(),e.setState({searchText:t[0],searchedColumn:a})},e.handleReset=function(t){t(),e.setState({searchText:""})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=[Object(c.a)({title:"Name",dataIndex:"name",key:"name",width:"30%"},this.getColumnSearchProps("name")),Object(c.a)({title:"Age",dataIndex:"age",key:"age",width:"20%"},this.getColumnSearchProps("age")),Object(c.a)({title:"Address",dataIndex:"address",key:"address"},this.getColumnSearchProps("address")),Object(c.a)({title:"Gender",dataIndex:"gender",key:"address"},this.getColumnSearchProps("gender")),Object(c.a)({title:"Phone",dataIndex:"phone",key:"phone"},this.getColumnSearchProps("phone"))];return Object(b.jsx)(p.a,{columns:e,dataSource:k})}}]),n}(r.a.Component);var C=function(){return Object(b.jsx)(x,{})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),O()}},[[197,1,2]]]);
//# sourceMappingURL=main.2484d36e.chunk.js.map
(window["webpackJsonptodo-app-react"]=window["webpackJsonptodo-app-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),l=n.n(o),c=(n(15),n(1)),s=n(4),r=n(5),u=n(8),m=n(6),d=n(9),h=n(7),p=n.n(h),b=(n(16),n(17),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={newItem:"",list:[]},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"addItem",value:function(e){if(""!==e){var t={id:Date.now(),value:e,isDone:!1},n=this.state,a=Object(c.a)(n.list);a.push(t),this.setState({list:a,newItem:""})}}},{key:"deleteItem",value:function(e){var t=this.state.list,n=Object(c.a)(t).filter(function(t){return t.id!==e});this.setState({list:n})}},{key:"toggleItem",value:function(e){var t=this.state.list.map(function(t){return t.id===e?t.isDone=!t.isDone:t});this.setState(t)}},{key:"updateInput",value:function(e){this.setState({newItem:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.list,a=t.newItem;return i.a.createElement("div",null,i.a.createElement("img",{src:p.a,alt:"logo",className:"d-block mx-auto",width:"200",height:"200"}),i.a.createElement("h1",{className:"text-white text-center"},"Simple React Todo app"," ",i.a.createElement("span",{role:"img","aria-label":"wink-smiley"},"\ud83d\ude09")),i.a.createElement("div",{className:"container text-white w-100"},"Add an Item...",i.a.createElement("br",null),i.a.createElement("input",{type:"text",className:"input-text w-100 my-3",placeholder:"Write a Todo",required:!0,value:a,onChange:function(t){return e.updateInput(t.target.value)}}),i.a.createElement("button",{type:"button",className:"btn btn-info btn-block my-3",onClick:function(){return e.addItem(a)},disabled:!a.length},"Add Todo"),i.a.createElement("div",{className:"list my-3"},i.a.createElement("ul",{className:"list-unstyled"},n.map(function(t){return i.a.createElement("li",{key:t.id,className:"my-4 font-weight-bold"},i.a.createElement("input",{type:"checkbox",className:"text-primary mx-1 checkbox",checked:t.isDone,onChange:function(){e.toggleItem(t.id)}}),i.a.createElement("span",{className:t.isDone?"completed":""},t.value),i.a.createElement("button",{type:"button",className:"btn btn-danger float-right",onClick:function(){return e.deleteItem(t.id)}},"Delete"))})))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.5151a39d.chunk.js.map
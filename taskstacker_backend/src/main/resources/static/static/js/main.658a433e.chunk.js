(this.webpackJsonptaskstacker_frontend=this.webpackJsonptaskstacker_frontend||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(0),c=a.n(s),r=a(33),i=a.n(r),o=(a(113),a(13)),l=a(14),d=a(23),u=a(22),j=(a(114),a(106)),p=a(10),b=a(12),h=a(37),m=a.n(h),O=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"TASK_API_URL",get:function(){return"/api"}}]),e}(),k=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"componentDidMount",value:function(){}},{key:"retrieveAllTasks",value:function(){return m.a.get("".concat(O.TASK_API_URL,"/task_actions/find_all_not_complete"))}},{key:"retrieveTask",value:function(e){return m.a.get("".concat(O.TASK_API_URL,"/tasks/")+e)}},{key:"createTask",value:function(e){return console.log("creating task: "+JSON.stringify(e)),m.a.put("".concat(O.TASK_API_URL,"/tasks/").concat(e.taskId),e)}},{key:"updateTask",value:function(e){return console.log("updating task: "+JSON.stringify(e)),m.a.post("".concat(O.TASK_API_URL,"/tasks/"),e)}},{key:"deleteTask",value:function(e){return m.a.delete("".concat(O.TASK_API_URL,"/tasks/").concat(e))}},{key:"completeTask",value:function(e){return m.a.get("".concat(O.TASK_API_URL,"/task_actions/complete_task/").concat(e))}}]),e}()),f=a(210),v=a(107),x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSelect=function(e){console.log(e),n.setState({prio:e}),n.props.onSelectPrio(e)},n.state={prio:0},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(f.a,{id:"dropdown-basic-button",title:"Select Priority",onSelect:this.handleSelect,children:[Object(n.jsx)(v.a.Item,{eventKey:"1",children:"1"}),Object(n.jsx)(v.a.Item,{eventKey:"2",children:"2"}),Object(n.jsx)(v.a.Item,{eventKey:"3",children:"3"}),Object(n.jsx)(v.a.Item,{eventKey:"4",children:"4"}),Object(n.jsx)(v.a.Item,{eventKey:"5",children:"5"}),Object(n.jsx)(v.a.Item,{eventKey:"6",children:"6"}),Object(n.jsx)(v.a.Item,{eventKey:"7",children:"7"}),Object(n.jsx)(v.a.Item,{eventKey:"8",children:"8"}),Object(n.jsx)(v.a.Item,{eventKey:"9",children:"9"}),Object(n.jsx)(v.a.Item,{eventKey:"10",children:"10"})]})}}]),a}(s.Component),I=a(101),D=a.n(I),y=(a(136),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).handleDateSelect=function(e){n.setState({zuluDate:e.toISOString(),startDate:e}),n.props.onSelectDate(e)};var s=new Date;return n.props.zuluDate&&(s=new Date(n.props.zuluDate)),n.state={zuluDate:n.props.zuluDate,startDate:s},n.handleDateSelect=n.handleDateSelect.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.startDate;return this.props.zuluDate&&(e=new Date(this.props.zuluDate)),Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{onChange:this.handleDateSelect,onSelect:this.handleDateSelect,selected:e,showTimeSelect:!0,dateFormat:"MMMM d, yyyy h:mm aa"})})}}]),a}(s.Component)),C=a(18),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleTaskNameChange=function(e){console.log("handleTaskNameChange  onBlur: "+e);var t=n.state.taskName;t=e.target.value,n.setState({taskName:t})},n.handleDurationHoursChange=function(e){var t=n.state.durationHours;t=e.target.value,n.setState({durationHours:t})},n.handlePercentCompleteChange=function(e){var t=n.state.percentComplete;t=e.target.value,n.setState({percentComplete:t})},n.handlePerceivedImportance=function(e){var t=n.state.perceivedImportance;t=parseInt(e),n.setState({perceivedImportance:t})},n.handleBusinessImportance=function(e){var t=n.state.businessImportance;t=parseInt(e),n.setState({businessImportance:t})},n.handleStartDate=function(e){var t=n.state.startDate;t=e.toISOString(),n.setState({startDate:t})},n.handleDueDate=function(e){var t=n.state.dueDate;t=e.toISOString(),n.setState({dueDate:t})},n.state={id:parseInt(n.props.match.params.id),task:{}},n.handleTaskNameChange=n.handleTaskNameChange.bind(Object(b.a)(n)),n.handleDurationHoursChange=n.handleDurationHoursChange.bind(Object(b.a)(n)),n.handlePerceivedImportance=n.handlePerceivedImportance.bind(Object(b.a)(n)),n.handleBusinessImportance=n.handleBusinessImportance.bind(Object(b.a)(n)),n.handleStartDate=n.handleStartDate.bind(Object(b.a)(n)),n.handleDueDate=n.handleDueDate.bind(Object(b.a)(n)),n.validate=n.validate.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(-1!==this.state.id)k.retrieveTask(this.state.id).then((function(t){return e.setState({id:t.data.taskId,taskName:t.data.taskName,durationHours:t.data.durationHours,percentComplete:t.data.percentComplete,startDate:t.data.startDate,dueDate:t.data.dueDate,perceivedImportance:t.data.perceivedImportance,businessImportance:t.data.businessImportance,task:t.data})}));else{var t=(new Date).toISOString();this.setState({startDate:t,dueDate:t})}}},{key:"onSubmit",value:function(e){var t=this,a={taskId:this.state.id,taskName:e.taskName,durationHours:e.durationHours,percentComplete:e.percentComplete,startDate:e.startDate,dueDate:e.dueDate,perceivedImportance:e.perceivedImportance,businessImportance:e.businessImportance};console.log("submitting task to DB values: "+JSON.stringify(e)),console.log("submitting task to DB task: "+JSON.stringify(a)),-1===this.state.id?k.createTask(a).then((function(){return t.props.history.push("/tasks")})):k.updateTask(a).then((function(){return t.props.history.push("/tasks")}))}},{key:"validate",value:function(e){var t={},a=function(e,t,a){return null!==e&&void 0!==e&&(!!Number.isInteger(parseFloat(e))&&!(parseInt(e)<t||parseInt(e)>a))};return e.taskName?!e.durationHours||isNaN(e.durationHours)?t.durationHours="Enter a Number for Duration Hours":a(e.percentComplete,0,100)?a(e.perceivedImportance,0,10)?a(e.businessImportance,0,10)||(t.businessImportance="Enter an Integer between 0 and 10 for Business Importance"):t.perceivedImportance="Enter an Integer between 0 and 10 for Perceived Importance":t.percentComplete="Enter a Number between 0 and 100 for Percent Complete":t.taskName="Enter a Task Name",t}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Task"}),Object(n.jsx)("div",{classname:"container",children:Object(n.jsx)(C.d,{initialValues:{id:this.state.id,taskName:this.state.taskName,durationHours:this.state.durationHours,percentComplete:this.state.percentComplete,startDate:this.state.startDate,dueDate:this.state.dueDate,perceivedImportance:this.state.perceivedImportance,businessImportance:this.state.businessImportance},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0,children:function(t){return Object(n.jsxs)(C.c,{children:[Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"Id"}),Object(n.jsx)(C.b,{className:"form-control",type:"text",name:"id",disabled:!0})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"TaskName"}),Object(n.jsx)(C.b,{className:"form-control",type:"text",name:"taskName",onBlur:e.handleTaskNameChange}),Object(n.jsx)(C.a,{name:"taskName",component:"div",className:"alert alert-warning"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"durationHours"}),Object(n.jsx)(C.b,{className:"form-control",type:"text",name:"durationHours",onBlur:e.handleDurationHoursChange}),Object(n.jsx)(C.a,{name:"durationHours",component:"div",className:"alert alert-warning"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"Percent Complete"}),Object(n.jsx)(C.b,{className:"form-control",type:"text",name:"percentComplete",onBlur:e.handlePercentCompleteChange}),Object(n.jsx)(C.a,{name:"percentComplete",component:"div",className:"alert alert-warning"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"Start Date"}),Object(n.jsx)(y,{zuluDate:e.state.startDate,onSelectDate:e.handleStartDate})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"Due Date"}),Object(n.jsx)(y,{zuluDate:e.state.dueDate,onSelectDate:e.handleDueDate})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"Perceived Importance"}),Object(n.jsxs)("fieldset",{className:"form-inline",children:[Object(n.jsx)(C.b,{className:"form-control",type:"text",name:"perceivedImportance"}),Object(n.jsx)(x,{onSelectPrio:e.handlePerceivedImportance})]}),Object(n.jsx)(C.a,{name:"perceivedImportance",component:"div",className:"alert alert-warning"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"Business Importance"}),Object(n.jsxs)("fieldset",{className:"form-inline",children:[Object(n.jsx)(C.b,{className:"form-control",type:"text",name:"businessImportance"}),Object(n.jsx)(x,{onSelectPrio:e.handleBusinessImportance,style:"display: inline-block"})]}),Object(n.jsx)(C.a,{name:"businessImportance",component:"div",className:"alert alert-warning"})]}),Object(n.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save"})]})}})})]})}}]),a}(s.Component),S=a(44),N=a.n(S),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tasks:[],message:null},n.refreshTasks=n.refreshTasks.bind(Object(b.a)(n)),n.addTaskClicked=n.addTaskClicked.bind(Object(b.a)(n)),n.updateTaskClicked=n.updateTaskClicked.bind(Object(b.a)(n)),n.deleteTaskClicked=n.deleteTaskClicked.bind(Object(b.a)(n)),n.completeTaskClicked=n.completeTaskClicked.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.refreshTasks()}},{key:"refreshTasks",value:function(){var e=this;k.retrieveAllTasks().then((function(t){console.log(t.data);var a=t.data;a.sort(e.compareTasks),e.setState({tasks:a})}))}},{key:"compareTasks",value:function(e,t){var a=function(e,t){var a=e.clone().endOf("week"),n=t.clone().startOf("week"),s=5*n.diff(a,"days")/7,c=a.day()-e.day();0===e.day()&&--c;var r=t.day()-n.day();return 6===t.day()&&--r,c+Math.floor(s)+r},n=8*a(N()(),N()(e.dueDate)),s=8*a(N()(),N()(t.dueDate)),c=100*(1-e.percentComplete/100)*parseFloat(e.durationHours)/n,r=100*(1-t.percentComplete/100)*parseFloat(t.durationHours)/s,i=c+parseFloat(e.perceivedImportance)+parseFloat(e.businessImportance),o=r+parseFloat(t.perceivedImportance)+parseFloat(t.businessImportance);return 100===e.percentComplete&&t.percentComplete<100?1:e.percentComplete<100&&100===t.percentComplete||i>o?-1:i<o?1:0}},{key:"updateTaskClicked",value:function(e){this.props.history.push("/tasks/"+e)}},{key:"deleteTaskClicked",value:function(e){var t=this;k.deleteTask(e).then((function(){t.props.history.push("/tasks"),t.refreshTasks()}))}},{key:"completeTaskClicked",value:function(e){var t=this;k.completeTask(e).then((function(){t.props.history.push("/tasks"),t.refreshTasks()}))}},{key:"addTaskClicked",value:function(){this.props.history.push("/tasks/-1")}},{key:"render",value:function(e){var t=this;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:"All Tasks"}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Task Name"}),Object(n.jsx)("th",{children:"Duration"}),Object(n.jsx)("th",{children:"% Complete"}),Object(n.jsx)("th",{children:"Due Date"}),Object(n.jsx)("th",{children:"Perceived Importance"}),Object(n.jsx)("th",{children:"Business Importance"}),Object(n.jsx)("th",{children:"Update"}),Object(n.jsx)("th",{children:"Complete"}),Object(n.jsx)("th",{children:"Delete"})]})}),Object(n.jsx)("tbody",{children:this.state.tasks.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.taskName}),Object(n.jsxs)("td",{children:[e.durationHours," Hours"]}),Object(n.jsxs)("td",{children:[e.percentComplete,"%"]}),Object(n.jsx)("td",{children:N()(e.dueDate).format("MMM Do YYYY h:mm a")}),Object(n.jsx)("td",{children:e.perceivedImportance}),Object(n.jsx)("td",{children:e.businessImportance}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){return t.updateTaskClicked(e.taskId)},children:"Update"})}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){return t.completeTaskClicked(e.taskId)},children:"Complete"})}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{className:"btn btn-warning",onClick:function(){return t.deleteTaskClicked(e.taskId)},children:"Delete"})})]},e.taskId)}))})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"btn btn-success",onClick:this.addTaskClicked,children:"Add"})})]})}}]),a}(s.Component),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(j.a,{children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"TaskStackerApp"}),Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{path:"/",exact:!0,component:T}),Object(n.jsx)(p.a,{path:"/tasks",exact:!0,component:T}),Object(n.jsx)(p.a,{path:"/tasks/:id",component:g})]})]})})}}]),a}(s.Component),H=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(P,{})})}}]),a}(s.Component),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,211)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),_()}},[[201,1,2]]]);
//# sourceMappingURL=main.658a433e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(8),i=a.n(l),r=(a(15),a(2)),c=a(3),s=a(5),u=a(4),d=a(6),m=a(1),h=a.n(m),v=(a(17),function(){return o.a.createElement("header",{className:"app-header"},o.a.createElement("h1",null,"Rate our food App"))}),w=(a(19),function(e){h()("star");var t={color:"#FFF",outlineColor:e.outlineColor||"#979797"},a={color:e.color||"#FFC80A",outlineColor:e.color||"#FFC80A"},n=e.active?a:t;return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 55.867 55.867",width:e.width,height:e.height},o.a.createElement("path",{d:"M11.287 54.548a.997.997 0 0 1-.985-1.169l3.091-18.018L.302 22.602a1.001 1.001 0 0 1 .555-1.705l18.09-2.629 8.091-16.393a.996.996 0 1 1 1.792 0l8.09 16.393 18.091 2.629a1.002 1.002 0 0 1 .555 1.705L42.475 35.363l3.09 18.017c.064.375-.09.754-.397.978a.993.993 0 0 1-1.054.076l-16.18-8.506-16.182 8.506a1.008 1.008 0 0 1-.465.114zM3.149 22.584l12.016 11.713a1 1 0 0 1 .287.885L12.615 51.72l14.854-7.808a.996.996 0 0 1 .931 0l14.852 7.808-2.836-16.538a1 1 0 0 1 .287-.885l12.016-11.713-16.605-2.413a1 1 0 0 1-.753-.547L27.934 4.578l-7.427 15.047a1 1 0 0 1-.753.547L3.149 22.584z",fill:n.color,stroke:n.outlineColor}))}),f=function(e){for(var t=[],a=1;a<e.max+1;a++){var n={active:!1,id:a};a<=e.rating&&(n.active=!0,n.id=a+1),t.push(n)}return o.a.createElement("div",{className:"ratingStars",onClick:function(e){console.log(e.currentTarget.dataset.id)}},t.map(function(t,a){return o.a.createElement(w,{key:a,"data-id":a,color:e.color,outlineColor:e.outlineColor,active:t.active,width:e.width,height:e.height,fillColor:e.fillColor})}))},b=(a(21),function(e){var t=h()({button:!0,primary:!0,layout:!0});return o.a.createElement("button",{className:t},e.name)}),g=(a(23),function(e){return o.a.createElement("svg",{className:"closeButton",width:e.width,height:e.height,viewBox:"0 0 612.043 612.043"},o.a.createElement("path",{d:"M397.503 306.011L593.08 110.434c25.27-25.269 25.27-66.213 0-91.482-25.269-25.269-66.213-25.269-91.481 0L306.022 214.551 110.445 18.974c-25.269-25.269-66.213-25.269-91.482 0s-25.269 66.213 0 91.482L214.54 306.033 18.963 501.61c-25.269 25.269-25.269 66.213 0 91.481 25.269 25.27 66.213 25.27 91.482 0l195.577-195.576 195.577 195.576c25.269 25.27 66.213 25.27 91.481 0 25.27-25.269 25.27-66.213 0-91.481L397.503 306.011z",fill:"#FFF"}))}),E=(a(25),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onCloseButtonClicked=function(){console.log("closed button clicked")},a.getRating=function(){},a.getStars=function(){console.log("stars collected")},a.state={visible:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=h()({hide:this.state.visible,"modal-container":!0});return o.a.createElement("section",{visible:this.props.visible,className:e},o.a.createElement(g,{onClick:this.onCloseButtonClicked.bind(this),width:"20",height:"20"}),o.a.createElement("header",{className:"header"},o.a.createElement("h2",null,"How did we do?")),o.a.createElement("p",null,"Please let us know how your food delivery was. It will really help us to improve our service!"),o.a.createElement("div",{className:"ratings-container"},o.a.createElement("p",null,"How would you rate your food?"),o.a.createElement("div",{className:"stars"},o.a.createElement(f,{id:"food",width:"19",height:"19",color:"#FFC80A",outlineColor:"#979797",max:5,rating:2})),o.a.createElement("p",null,"How would you rate your delivery driver?"),o.a.createElement("div",{className:"stars"},o.a.createElement(f,{id:"driver",width:"19",height:"19",color:"#FFC80A",outlineColor:"#979797",max:5,rating:4})),o.a.createElement("p",null,"How would you rate your overall experience"),o.a.createElement("div",{className:"stars"},o.a.createElement(f,{id:"experience",width:"19",height:"19",color:"#FFC80A",outlineColor:"#979797",max:5,rating:4}))),o.a.createElement(b,{class:"primary",onClick:this.getStars.bind(this),name:"Submit feedback"}))}}]),t}(n.Component)),p=(a(27),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onClickHandler=function(){a.state.modalVisible;a.setState(function(e){return{modalVisible:!e.modalVisible}})},a.state={modalVisible:!1,rateUsButtonVisible:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){h()({"button-container":!0,primary:!0,hide:this.state.modalVisible});return o.a.createElement("div",{className:"Rating"},o.a.createElement(v,null),o.a.createElement(E,{visible:this.state.modalVisible.toString()}),o.a.createElement("div",{className:"button-container",onClick:this.onClickHandler.bind(this)},o.a.createElement(b,{name:"Please Rate Us"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.37c285d7.chunk.js.map
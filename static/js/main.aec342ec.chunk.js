(this["webpackJsonpbushe-react"]=this["webpackJsonpbushe-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,,function(e,t,a){},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(18),r=a.n(s),i=a(7),l=(a(27),a(4)),o=a(2),u=a(10),j=a(19),b=a(0),m=["component"],p=function(e){var t=e.component,a=Object(j.a)(e,m);return Object(b.jsx)(o.b,{children:function(){return a.isLoggedIn?Object(b.jsx)(t,Object(u.a)({},a)):Object(b.jsx)(o.a,{to:"/"})}})},d=c.a.createContext(),h=a.p+"static/media/logo.693a7463.png";a(37);var O=function(e){var t=e.className;return Object(b.jsx)("img",{className:t,src:h,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u0431\u0443\u0448\u0435"})},_=(a(38),function(e){var t=e.isLoggedIn,a=Object(n.useContext)(d);return Object(b.jsxs)("nav",{className:"nav",children:[t?Object(b.jsx)(i.b,{exact:!0,to:"/data-list",className:"nav__item",activeClassName:"nav__item_active",children:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}):"",t?Object(b.jsx)(i.b,{to:"/statistic",className:"nav__item",activeClassName:"nav__item_active",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}):"",t?Object(b.jsx)(i.b,{to:"/profile",className:"nav__item",activeClassName:"nav__item_active",children:a.email}):""]})});a(39);var g=Object(o.h)((function(e){var t=e.isLoggedIn,a=e.location,c=Object(n.useState)(a.pathname),s=Object(l.a)(c,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){var e=a.pathname;i(e)}),[a]),"/data-list"===r||"/statistic"===r||"/profile"===r?Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)(O,{className:"logo__header"}),Object(b.jsx)(_,{isLoggedIn:t})]}):""}));a(40);var f=function(e){var t=e.type,a=e.className,n=e.onClick,c=e.children;return Object(b.jsx)("button",{type:t,className:a,onClick:n,children:c})};a(41);var x=function(){return Object(b.jsxs)("section",{className:"main",children:[Object(b.jsx)(O,{className:"logo__main"}),Object(b.jsx)("h1",{className:"title title__main text-size__l",children:"\u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),Object(b.jsx)("h2",{className:"subtitle subtitle__main text-size__m",children:"\u0422\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(b.jsx)(i.b,{to:"/login",className:"nav__item",activeClassName:"nav__item_active",children:Object(b.jsx)(f,{className:"button button__main button__main_active text-color__white",children:"\u0412\u0425\u041e\u0414"})})]})};a(15);var v=function(){return Object(b.jsxs)("div",{className:"card card__header",children:[Object(b.jsx)("p",{className:"paragraph",children:"\u2116"}),Object(b.jsx)("p",{className:"paragraph",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(b.jsx)("p",{className:"paragraph",children:"\u0414\u0430\u0442\u0430"}),Object(b.jsx)("p",{className:"paragraph",children:"\u0412\u0440\u0435\u043c\u044f"}),Object(b.jsx)("p",{className:"paragraph",children:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435"}),Object(b.jsx)("p",{className:"paragraph",children:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}),Object(b.jsx)("p",{className:"paragraph",children:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"})]})};function N(){return{convertSeconds:function(e){return new Date(1e3*e).toISOString().substr(11,8)},convertTime:function(e){return new Date(1e3*e).toLocaleTimeString("ru-RU")},convertDate:function(e){return new Date(1e3*e).toLocaleDateString("ru-RU")}}}var S=function(e){var t=e.id,a=e.number,n=e.calltime,c=e.s_in_wait,s=e.s_in_talk,r=e.agent,i=e.onGetPhoneInfo,l=N(),o=l.convertSeconds,u=l.convertDate,j=l.convertTime,m="card ".concat(t%2?"bg-color__grey":""),p=o(c),d=o(s),h=u(n),O=j(n);return Object(b.jsxs)("li",{className:m,children:[Object(b.jsx)("p",{className:"paragraph",children:t}),Object(b.jsx)(f,{type:"button",onClick:function(e){e.preventDefault(),i(a)},className:"button button__word text-color__blue card__number",children:"+".concat(a)}),Object(b.jsx)("p",{className:"paragraph",children:h}),Object(b.jsx)("p",{className:"paragraph",children:O}),Object(b.jsx)("p",{className:"paragraph",children:p}),Object(b.jsx)("p",{className:"paragraph",children:d}),Object(b.jsx)("p",{className:"paragraph",children:r})]})};a(42);var C=function(e){var t=e.count,a=e.onGetMoreDataListClick,n=e.onGetPhoneInfo,c=JSON.parse(localStorage.getItem("dataList"));return Object(b.jsxs)("section",{className:"data",children:[Object(b.jsx)(v,{}),Object(b.jsx)("ul",{className:"data__list",children:c.filter((function(e,a){return a<t})).map((function(e){return Object(b.jsx)(S,{id:c.findIndex((function(t){return t===e}))+1+".",number:e[0],calltime:e[1],s_in_wait:e[2],s_in_talk:e[3],agent:e[4],onGetPhoneInfo:n},c.findIndex((function(t){return t===e})))}))}),c.length>t&&Object(b.jsx)(f,{type:"button",className:"button button__word text-color__blue paragraph text-size__s",onClick:function(e){e.preventDefault(),a()},children:"\u0415\u0449\u0451..."})]})},w=(a(43),function(e){var t=e.title,a=e.buttonTitleSearch,n=e.buttonSearchClassName,c=e.children,s=e.onSubmit;return Object(b.jsxs)("section",{className:"form-search",children:[Object(b.jsx)("h2",{className:"title title__main title__margin_statistic",children:t}),Object(b.jsxs)("form",{className:"form-search__container",method:"POST",onSubmit:s,noValidate:!0,children:[Object(b.jsx)("div",{className:"form-search__input-block",children:c}),Object(b.jsx)("div",{className:"form__button-block",children:Object(b.jsx)(f,{type:"button",className:n,onClick:s,children:a})})]})]})}),y=(a(44),function(e){var t=e.agents,a=e.labelName,n=e.selectName,c=e.value,s=e.onChange;return Object(b.jsxs)("label",{className:"paragraph paragraph__label paragraph__color_grey",children:[a,Object(b.jsxs)("select",{id:n,name:n,className:"select",value:c||"",onChange:s,children:[Object(b.jsx)("option",{value:""}),t.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]})]})});var k=function(e){var t=e.array,a=e.title,n=N().convertSeconds,c=function(){var e=function(e,t){var a=0;return e.forEach((function(e){return a+=e[t]})),a};return{runSum:e,runMaxValue:function(e,t){var a=0;return e.forEach((function(e){return a>e[t]?a:a=e[t]})),a},runMiddleValue:function(t,a){return e(t,a)/t.length}}}(),s=c.runSum,r=c.runMaxValue,i=c.runMiddleValue,l=t.length,o=n(s(t,2)),u=n(r(t,2)),j=n(i(t,2)),m=n(s(t,3)),p=n(r(t,3)),d=n(i(t,3)),h={};t.map((function(e){return e[0]})).map((function(e){return h[e]=1+(h[e]||0)}));var O=Object.keys(h).length;return Object(b.jsxs)("article",{className:"statistic__info",children:[Object(b.jsx)("h2",{className:"title title__main title__margin_statistic",children:a}),Object(b.jsxs)("div",{className:"statistic__common",children:[Object(b.jsx)("p",{className:"paragraph",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u043d\u044f\u0442\u044b\u0445 \u0432\u044b\u0437\u043e\u0432\u043e\u0432:"}),Object(b.jsxs)("p",{className:"paragraph",children:[l," \u0437\u0432\u043e\u043d\u043a\u043e\u0432"]}),Object(b.jsx)("p",{className:"paragraph",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0432\u043e\u043d\u0438\u0432\u0448\u0438\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432:"}),Object(b.jsxs)("p",{className:"paragraph",children:[O," \u043d\u043e\u043c\u0435\u0440\u043e\u0432"]}),Object(b.jsx)("p",{className:"paragraph",children:"\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435:"}),Object(b.jsx)("p",{className:"paragraph",children:o}),Object(b.jsx)("p",{className:"paragraph",children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f:"}),Object(b.jsx)("p",{className:"paragraph",children:u}),Object(b.jsx)("p",{className:"paragraph",children:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f:"}),Object(b.jsx)("p",{className:"paragraph",children:j}),Object(b.jsx)("p",{className:"paragraph",children:"\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u043e\u0432:"}),Object(b.jsx)("p",{className:"paragraph",children:m}),Object(b.jsx)("p",{className:"paragraph",children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u0430:"}),Object(b.jsx)("p",{className:"paragraph",children:p}),Object(b.jsx)("p",{className:"paragraph",children:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u0430:"}),Object(b.jsx)("p",{className:"paragraph",children:d})]})]})};a(45);var I=function(e){var t=e.statisticData,a=e.setStatisticData,c=e.onSearch,s=JSON.parse(localStorage.getItem("dataList")),r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1];Object(n.useEffect)((function(){a(null)}),[]);var j=s.map((function(e){return e[4]})),m=Array.from(new Set(j)),p="button button__main ".concat(o?"button__main_active text-color__white":"button__main_inactive text-color__grey");return Object(b.jsxs)("section",{className:"statistic",children:[Object(b.jsx)(k,{array:s,title:"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),Object(b.jsx)(w,{title:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443",buttonTitleSearch:"\u041f\u043e\u0438\u0441\u043a",buttonSearchClassName:p,onSubmit:function(e){e.preventDefault(),c(o)},children:Object(b.jsx)(y,{agents:m,labelName:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430",value:o,onChange:function(e){u(e.target.value)}})}),null!==t?Object(b.jsx)(k,{array:t,title:"C\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 ".concat(o)}):Object(b.jsx)("div",{className:"statistic__agent",children:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u043f\u043e\u0438\u0441\u043a\u0443..."})]})},L=(a(46),function(e){var t=e.labelName,a=e.inputName,n=e.type,c=e.onChange,s=e.value,r=e.errors,i=e.min,l=e.formDisabled;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{className:"paragraph paragraph__label paragraph__color_grey",children:t}),Object(b.jsx)("input",{type:n,name:a,id:a,className:"input",onChange:c,value:s||"",disabled:l,minLength:i,required:!0}),Object(b.jsx)("p",{className:"input__error",children:r})]})}),E=(a(47),function(e){var t=e.isLoggedIn,a=e.title,n=e.buttonTitleLogin,c=e.buttonTitleEdit,s=e.buttonTitleExit,r=e.buttonLoginClassName,i=e.buttonEditClassName,l=e.buttonExitClassName,o=e.children,u=e.isFormValid,j=e.onSubmit,m=e.onSignOut;return Object(b.jsx)("section",{className:"form",children:Object(b.jsxs)("form",{className:"form__container",method:"POST",onSubmit:j,noValidate:!0,children:[Object(b.jsxs)("div",{className:"form__input-block",children:[Object(b.jsx)("h3",{className:"title title__login text-size__m",children:a}),o]}),Object(b.jsxs)("div",{className:"form__button-block",children:[t?"":Object(b.jsx)(f,{type:"submit",className:r,disabled:!u,children:n}),t&&Object(b.jsx)(f,{type:"submit",className:i,disabled:!u,children:c}),t&&Object(b.jsx)(f,{type:"button",className:l,onClick:m,children:s})]})]})})}),D=a(11),T=/^[^@]+@[^@.]+\.[^@]+$/;function P(){var e=Object(n.useContext)(d),t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)({}),i=Object(l.a)(r,2),o=i[0],j=i[1],b=Object(n.useState)(!1),m=Object(l.a)(b,2),p=m[0],h=m[1],O=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];s(e),j(t),h(a)}),[s,j,h]),_=Object(n.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{email:e.email,password:e.password},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];s(t),j(a),h(n)}),[s,j,h,e]);return{values:c,errors:o,isValid:p,handleChange:function(e){var t=e.target,a=t.name,n=t.value;s(Object(u.a)(Object(u.a)({},c),{},Object(D.a)({},a,n))),j(Object(u.a)(Object(u.a)({},o),{},Object(D.a)({},a,function(e){return"name"===e.name?0===e.value.length?"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f":e.value.length<2?"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u0435\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 2 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":"":"email"===e.name?0===e.value.length?"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 E-mail!":T.test(e.value)?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 E-mail!":"password"===e.name?0===e.value.length?"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!":e.value.length<8?"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!":"":void 0}(t)))),h(t.closest("form").checkValidity())},setValues:s,resetFormCurrentUser:_,resetForm:O}}a(48);var F=function(e){var t=e.isLoggedIn,a=e.onEditProfile,c=e.onSignOut,s=P(),r=s.values,i=s.errors,l=s.isValid,o=s.handleChange,u=s.resetFormCurrentUser;Object(n.useEffect)((function(){u()}),[u]);var j="button button__word ".concat(l?"":"button__word_inactive");return Object(b.jsx)("section",{className:"profile",children:Object(b.jsxs)(E,{isLoggedIn:t,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitleEdit:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",buttonTitleExit:"\u0412\u044b\u0439\u0442\u0438",buttonEditClassName:j,buttonExitClassName:"button button__main button__main_active",onSignOut:function(e){e.preventDefault(),c()},onSubmit:function(e){e.preventDefault(),a(r.email,r.password)},children:[Object(b.jsx)(L,{labelName:"E-mail",type:"email",inputName:"email",inputClassName:"input",errorClassName:"input__error",onChange:o,value:r.email||"",errors:i.email}),Object(b.jsx)(L,{labelName:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",inputName:"password",inputClassName:"input",errorClassName:"input__error",onChange:o,value:r.password||"",min:"8",errors:i.password})]})})};a(49);var V=function(e){var t=e.isLoggedIn,a=e.onSignIn,c=P(),s=c.values,r=c.errors,i=c.isValid,l=c.handleChange,o=c.resetForm;Object(n.useEffect)((function(){o()}),[o]);var u="button button__main ".concat(i?"button__main_active":"button__main_inactive");return Object(b.jsx)("section",{className:"login",children:Object(b.jsxs)(E,{isLoggedIn:t,title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",buttonTitleLogin:"\u0412\u041e\u0419\u0422\u0418",buttonLoginClassName:u,isFormValid:i,onSubmit:function(e){e.preventDefault(),a(s.email,s.password)},children:[Object(b.jsx)(L,{labelName:"E-mail",type:"email",inputName:"email",inputClassName:"input",errorClassName:"input__error",onChange:l,value:s.email||"",errors:r.email}),Object(b.jsx)(L,{labelName:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",inputName:"password",inputClassName:"input",errorClassName:"input__error",onChange:l,value:s.password||"",min:"8",errors:r.password})]})})};a(50);var z=function(){var e=Object(o.g)();return Object(b.jsx)("section",{className:"nopage",children:Object(b.jsxs)("div",{className:"nopage__container",children:[Object(b.jsxs)("div",{className:"nopage__block",children:[Object(b.jsx)("h2",{className:"title title__nopage text-size__xl",children:"4"}),Object(b.jsx)(O,{className:"logo__nopage rotation"}),Object(b.jsx)("h2",{className:"title title__nopage text-size__xl",children:"4"})]}),Object(b.jsx)("p",{className:"paragraph paragraph__nopage text-size__s",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(b.jsx)(f,{type:"button",onClick:function(){e.goBack()},className:"button button__word button__word_border paragraph text-color__blue text-size_s",children:"\u041d\u0430\u0437\u0430\u0434"})]})})};var J=function(e){var t=e.id,a=e.number,n=e.calltime,c=e.s_in_wait,s=e.s_in_talk,r=e.agent,i=N(),l=i.convertSeconds,o=i.convertDate,u=i.convertTime,j="card ".concat(t%2?"bg-color__grey":""),m=l(c),p=l(s),d=o(n),h=u(n);return Object(b.jsxs)("li",{className:j,children:[Object(b.jsx)("p",{className:"paragraph",children:t}),Object(b.jsx)("p",{className:"paragraph",children:"+".concat(a)}),Object(b.jsx)("p",{className:"paragraph",children:d}),Object(b.jsx)("p",{className:"paragraph",children:h}),Object(b.jsx)("p",{className:"paragraph",children:m}),Object(b.jsx)("p",{className:"paragraph",children:p}),Object(b.jsx)("p",{className:"paragraph",children:r})]})},U=(a(51),function(e){var t=e.isOpen,a=e.onClose,n=e.title,c=e.dataFiltered,s="popup ".concat(t?"popup_opened":"popup_closed");return Object(b.jsx)("section",{className:s,onClick:a,children:Object(b.jsxs)("div",{className:"popup__container",onClick:function(e){return e.stopPropagation()},children:[Object(b.jsx)(f,{type:"button",className:"button button__close-popup","aria-label":"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",onClick:a}),Object(b.jsx)("h3",{className:"title title__login text-size__m",children:n}),Object(b.jsx)(v,{}),Object(b.jsx)("ul",{className:"data__list",children:null===c?"":c.map((function(e){return Object(b.jsx)(J,{id:c.findIndex((function(t){return t===e}))+1+".",number:e[0],calltime:e[1],s_in_wait:e[2],s_in_talk:e[3],agent:e[4]},c.findIndex((function(t){return t===e})))}))})]})})}),G=a(21),M=a(22),B=new(function(){function e(t){Object(G.a)(this,e),this.url=t.url}return Object(M.a)(e,[{key:"getList",value:function(){return fetch("https://cors-anywhere.herokuapp.com/"+this.url+5e3,{method:"GET",headers:{"Content-Type":"text/html"}}).then(this._checkPromise)}},{key:"_checkPromise",value:function(e){return e.ok?e.json():Promise.reject("\u0424\u0430\u0439\u043b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d!")}}]),e}())({url:"".concat("http://109.248.175.136:")});a(52);var R=function(){var e=Object(o.g)(),t=Object(n.useState)({email:"",password:""}),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(null),i=Object(l.a)(r,2),u=i[0],j=i[1],m=Object(n.useState)(),h=Object(l.a)(m,2),O=(h[0],h[1]),_=Object(n.useState)(null),f=Object(l.a)(_,2),v=f[0],N=f[1],S=Object(n.useState)(null),w=Object(l.a)(S,2),y=w[0],k=w[1],L=Object(n.useState)(""),E=Object(l.a)(L,2),D=E[0],T=E[1],P=Object(n.useState)({count:20}),J=Object(l.a)(P,2),G=J[0],M=J[1],R=Object(n.useState)(!1),q=Object(l.a)(R,2),A=q[0],$=q[1];function H(e){27===e.keyCode&&W()}function K(){s((function(e,t){return{email:e.email="",password:e.password=""}})),localStorage.removeItem("currentUser"),localStorage.removeItem("dataList"),j((function(e){return!1})),e.push("/")}Object(n.useEffect)((function(){var e=localStorage.getItem("dataList");null===e&&B.getList().then((function(e){localStorage.setItem("dataList",JSON.stringify(e.data)),O(e.data)})).catch((function(e){return console.log(e)})),O(e)}),[]),Object(n.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("currentUser"));if(!e)return K();s((function(t,a){return{email:t.email=e.email,password:t.password=e.password}})),j(!0)}(),!0===u?e.push("/data-list"):e.push("/")}),[u]);var Q=JSON.parse(localStorage.getItem("dataList"));function W(){$(!1),T(""),N(null),window.removeEventListener("keydown",H)}return null===u?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":Object(b.jsxs)(d.Provider,{value:c,children:[u&&Object(b.jsx)(g,{isLoggedIn:u}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/",component:x}),Object(b.jsx)(p,{path:"/data-list",isLoggedIn:u,count:G.count,onGetMoreDataListClick:function(){M((function(e,t){return{count:e.count+30}}))},onGetPhoneInfo:function(e){T("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443: +".concat(e)),N(Q.filter((function(t){return t[0]===e}))),$(!0),window.addEventListener("keydown",H)},component:C}),Object(b.jsx)(p,{path:"/statistic",isLoggedIn:u,statisticData:y,setStatisticData:k,onSearch:function(e){var t=Q.filter((function(t){return String(t[4])===e}));k(t)},component:I}),Object(b.jsx)(p,{path:"/profile",isLoggedIn:u,onEditProfile:function(e,t){s((function(a,n){return{email:a.email=e,password:a.password=t}})),localStorage.setItem("currentUser",JSON.stringify(c))},onSignOut:K,component:F}),Object(b.jsx)(o.b,{path:"/login",children:Object(b.jsx)(V,{isLoggedIn:u,onSignIn:function(t,a){s((function(e,n){return{email:e.email=t,password:e.password=a}})),localStorage.setItem("currentUser",JSON.stringify(c)),j(!0),e.push("/data-list")}})}),Object(b.jsx)(o.b,{path:"*",component:z})]}),Object(b.jsx)(U,{isOpen:A,onClose:W,title:D,dataFiltered:v})]})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(R,{})})}),document.getElementById("root")),q()}],[[53,1,2]]]);
//# sourceMappingURL=main.aec342ec.chunk.js.map
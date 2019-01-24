(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),s=a(1),o=a(2),i=a(4),m=a(3),u=a(5),p=(a(14),a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={skills:".skills",projects:".projects",footer:".footer"},a.onClick=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth"}),a.skillsRef.current.blur(),a.projectsRef.current.blur(),a.contactRef.current.blur()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.skillsRef=c.a.createRef(),this.projectsRef=c.a.createRef(),this.contactRef=c.a.createRef();var e=this.state,t=e.skills,a=e.projects,n=e.footer;return c.a.createElement("header",{className:"navbar"},c.a.createElement("button",{className:"nav-links",onClick:this.onClick.bind(this,t),ref:this.skillsRef},"Skills"),c.a.createElement("button",{className:"nav-links",onClick:this.onClick.bind(this,a),ref:this.projectsRef},"Project"),c.a.createElement("button",{className:"nav-links",onClick:this.onClick.bind(this,n),ref:this.contactRef},"Contact"))}}]),t}(n.Component)),h=(a(18),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"hero"},c.a.createElement("h1",{className:"hero-title"},"//Aristotle Poultney"),c.a.createElement("h5",{className:"hero-subtitle"},"Web Developer//Front-End Engineer"))}}]),t}(n.Component)),d=(a(20),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"skills"},c.a.createElement("h4",{className:"skills-heading"},"Skills"),c.a.createElement("div",{className:"skills-container"},c.a.createElement("div",{className:"list-container"},c.a.createElement("h6",{className:"list-heading"},"Front-End"),c.a.createElement("ul",{className:"skill-list"},c.a.createElement("li",null,"React"),c.a.createElement("li",null,"Redux"),c.a.createElement("li",null,"Javascript"),c.a.createElement("li",null,"HTML"),c.a.createElement("li",null,"CSS"),c.a.createElement("li",null,"Bootstrap"))),c.a.createElement("div",{className:"list-container"},c.a.createElement("h6",{className:"list-heading"},"Back-End"),c.a.createElement("ul",{className:"skill-list"},c.a.createElement("li",null,"Ruby"),c.a.createElement("li",null,"Ruby on Rails"),c.a.createElement("li",null,"SQL"))),c.a.createElement("div",{className:"list-container"},c.a.createElement("h6",{className:"list-heading"},"Other"),c.a.createElement("ul",{className:"skill-list"},c.a.createElement("li",null,"Git/Version Control"),c.a.createElement("li",null,"GitHub/Bitbucket"),c.a.createElement("li",null,"RESTful Conventions")))))}}]),t}(n.Component)),E=(a(22),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"projects"},c.a.createElement("h4",{className:"projects-heading"},"Projects"),c.a.createElement("div",{className:"projects-container"},c.a.createElement("div",{className:"desktop-project-container"},c.a.createElement("a",{href:"https://react-client-panel-9622b.firebaseapp.com/",className:"project-link"},c.a.createElement("div",{className:"project-card project-one-card"},c.a.createElement("p",{className:"project-info"},"React/Redux Client Panel"))),c.a.createElement("h4",{className:"desktop-project-headline"},"Interactive React Client Panel"),c.a.createElement("a",{href:"https://github.com/Aristotle-P/react-client-panel",className:"source"},"Source"),c.a.createElement("p",{className:"desktop-project-info"},"React application with Redux store and Firebase back-end. Styled with Bootstrap")),c.a.createElement("div",{className:"desktop-project-container"},c.a.createElement("a",{href:"https://aristotle-p.github.io/react-contact-manager/#/",className:"project-link"},c.a.createElement("div",{className:"project-card project-two-card"},c.a.createElement("p",{className:"project-info"},"React/Redux Contact Manager"))),c.a.createElement("h4",{className:"desktop-project-headline"},"React Contact Manager"),c.a.createElement("a",{href:"https://github.com/Aristotle-P/react-redux-contact-manager",className:"source"},"Source"),c.a.createElement("p",{className:"desktop-project-info"},"React application with Redux store. Styled with Bootstrap")),c.a.createElement("div",{className:"desktop-project-container"},c.a.createElement("a",{href:"https://aqueous-earth-43524.herokuapp.com/",className:"project-link"},c.a.createElement("div",{className:"project-card project-three-card"},c.a.createElement("p",{className:"project-info"},"Ruby on Rails Micro-Blogging Application"))),c.a.createElement("h4",{className:"desktop-project-headline"},"Ruby on Rails Micro-Blogger"),c.a.createElement("a",{href:"https://github.com/Aristotle-P/Micro-App",className:"source"},"Source"),c.a.createElement("p",{className:"desktop-project-info"},"Ruby on Rails micro-blogging application with PostgreSQL database and mailer through SendGrid"))))}}]),t}(n.Component)),f=(a(24),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("h4",{className:"contact-heading"},"Contact Me"),c.a.createElement("p",{className:"contact-info"},"Phone: 904-994-4454"),c.a.createElement("p",{className:"contact-info"},"Email: aristotlepoultney@gmail.com"),c.a.createElement("div",{className:"desktop-contact-container"},c.a.createElement("h4",{className:"desktop-contact-heading"},"Get in touch today!"),c.a.createElement("a",{href:"mailto:aristotlepoultney@gmail.com",className:"desktop-contact-button"},"SEND EMAIL"),c.a.createElement("p",{className:"desktop-contact-info"},"aristotlepoultney@gmail.com")),c.a.createElement("div",{className:"contact-link-container"},c.a.createElement("a",{href:"https://github.com/Aristotle-P",className:"desktop-contact-links"},c.a.createElement("i",{className:"fab fa-github"}),"GitHub"),c.a.createElement("a",{href:"https://www.linkedin.com/in/aristotle-poultney-195026176/",className:"desktop-contact-links"},c.a.createElement("i",{className:"fab fa-linkedin-in"}),"LinkedIn")))}}]),t}(n.Component)),b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(h,null),c.a.createElement(d,null),c.a.createElement(E,null),c.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.ed0d9944.chunk.js.map
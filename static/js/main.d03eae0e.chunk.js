(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(38)},28:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(19),i=t.n(n),c=(t(28),t(13)),o=t(14);var s=()=>{const[e,a]=Object(r.useState)(!1),t=[{title:"Home",to:"hero"},{title:"About",to:"about"},{title:"Skills",to:"skills"},{title:"Projects",to:"projects"},{title:"Contact",to:"contact"}];return l.a.createElement("nav",{className:"fixed w-full bg-white dark:bg-gray-800 shadow-lg z-50"},l.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l.a.createElement("div",{className:"flex justify-between h-16"},l.a.createElement("div",{className:"flex-shrink-0 flex items-center"},l.a.createElement("h1",{className:"text-xl font-bold text-gray-800 dark:text-white"},"Portfolio")),l.a.createElement("div",{className:"hidden md:flex items-center"},t.map(e=>l.a.createElement(c.Link,{key:e.to,to:e.to,smooth:!0,duration:500,className:"ml-8 cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"},e.title))),l.a.createElement("div",{className:"md:hidden flex items-center"},l.a.createElement("button",{onClick:()=>a(!e),className:"text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"},e?l.a.createElement(o.b,{size:24}):l.a.createElement(o.a,{size:24}))))),e&&l.a.createElement("div",{className:"md:hidden"},l.a.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},t.map(e=>l.a.createElement(c.Link,{key:e.to,to:e.to,smooth:!0,duration:500,className:"block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",onClick:()=>a(!1)},e.title)))))},m=t(40);var d=()=>l.a.createElement("section",{id:"hero",className:"min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"},l.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"},l.a.createElement(m.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8}},l.a.createElement("h1",{className:"text-4xl sm:text-6xl font-bold text-white mb-6"},"Hi, I'm ",l.a.createElement("span",{className:"text-yellow-300"},"ABDUL RAUF")),l.a.createElement("h2",{className:"text-2xl sm:text-3xl text-gray-200 mb-8"},"Full Stack Developer"),l.a.createElement("p",{className:"text-xl text-gray-200 mb-12 max-w-2xl mx-auto"},"I create beautiful and functional web applications with modern technologies"),l.a.createElement(m.a.div,{whileHover:{scale:1.05},whileTap:{scale:.95}},l.a.createElement("a",{href:"#contact",className:"bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-300 transition duration-300"},"Get in Touch")),l.a.createElement(m.a.a,{whileHover:{scale:1.05},href:"https://github.com/MadniRauf",className:"mt-4 bg-gray-800 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-700 transition duration-300",target:"_blank",rel:"noopener noreferrer"},"View GitHub Profile"))));var g=()=>l.a.createElement("section",{id:"about",className:"py-20 bg-white dark:bg-gray-800"},l.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l.a.createElement(m.a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8}},l.a.createElement("h2",{className:"text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"},"About Me"),l.a.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"},l.a.createElement("div",{className:"space-y-8"},l.a.createElement(m.a.div,{initial:{opacity:0},whileInView:{opacity:1},className:"space-y-6"},l.a.createElement("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed"},"\ud83d\udc4b Hi! I'm ",l.a.createElement("strong",{className:"text-blue-600 dark:text-blue-400"},"Abdul Rauf"),", a Full Stack Developer with 3+ years of experience building modern web applications. I specialize in creating efficient, scalable solutions using cutting-edge technologies."),l.a.createElement(m.a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},className:"bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-700"},l.a.createElement("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center"},"Technical Arsenal"),l.a.createElement("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-6"},[{name:"React/Next.js",icon:"\ud83d\udca0",level:"Expert",color:"text-blue-500"},{name:"Node.js",icon:"\ud83d\udfe2",level:"Advanced",color:"text-green-500"},{name:"TypeScript",icon:"\ud83d\udd37",level:"Expert",color:"text-blue-400"},{name:"AWS/Docker",icon:"\u2601\ufe0f",level:"Intermediate",color:"text-orange-500"},{name:"MongoDB",icon:"\ud83c\udf43",level:"Advanced",color:"text-green-400"},{name:"Tailwind",icon:"\ud83c\udfa8",level:"Expert",color:"text-cyan-400"}].map((e,a)=>l.a.createElement(m.a.div,{key:a,whileHover:{y:-5},className:"p-6 rounded-xl bg-gradient-to-br from-white dark:from-gray-700 to-gray-50 dark:to-gray-800 border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300"},l.a.createElement("div",{className:"text-4xl mb-4 ".concat(e.color)},e.icon),l.a.createElement("h4",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-2"},e.name),l.a.createElement("div",{className:"flex items-center space-x-2"},l.a.createElement("div",{className:"h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full"},l.a.createElement("div",{className:"h-full rounded-full ".concat(e.color," bg-opacity-80"),style:{width:"Expert"===e.level?"90%":"Advanced"===e.level?"75%":"60%"}})))))))),l.a.createElement(m.a.div,{initial:{x:-20},whileInView:{x:0},className:"bg-blue-50 dark:bg-blue-900 p-6 rounded-xl"},l.a.createElement("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-4"},"Professional Journey"),l.a.createElement("ul",{className:"space-y-4"},l.a.createElement("li",{className:"flex items-start space-x-3"},l.a.createElement("div",{className:"flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"}),l.a.createElement("div",null,l.a.createElement("h4",{className:"font-medium text-gray-900 dark:text-white"},"Abdul Rauf \xb7 Full Stack Developer"),l.a.createElement("p",{className:"text-gray-600 dark:text-gray-300 mt-1"},"Leading development of enterprise-scale applications, optimizing backend services, and implementing CI/CD pipelines.")))))),l.a.createElement(m.a.div,{initial:{scale:.9,opacity:0},whileInView:{scale:1,opacity:1},className:"relative group"},l.a.createElement("div",{className:"relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"},l.a.createElement("img",{src:"/images/profile.jpg",alt:"Abdul Rauf",className:"w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"})),l.a.createElement("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700"},l.a.createElement("span",{className:"text-gray-900 dark:text-white font-medium"},"Open for Opportunities")))))));var u=()=>{return l.a.createElement("section",{id:"projects",className:"py-20 bg-white dark:bg-gray-800"},l.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l.a.createElement(m.a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8}},l.a.createElement("h2",{className:"text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"},"Featured Projects"),l.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},[{title:"E-Commerce Platform",description:"A full-stack e-commerce platform with React, Node.js, and MongoDB",image:"/images/ecommerce.jpeg",tags:["React","Node.js","MongoDB","Express"],liveLink:"#",githubLink:"https://github.com/MadniRauf"},{title:"Task Management App",description:"A collaborative task management application with real-time updates",image:"/images/task-manager.jpg",tags:["React","Firebase","Material-UI"],liveLink:"#",githubLink:"https://github.com/MadniRauf"},{title:"Weather Dashboard",description:"A weather dashboard with data visualization and forecast predictions",image:"/images/weather-app.jpeg",tags:["React","Chart.js","Weather API"],liveLink:"#",githubLink:"https://github.com/MadniRauf"}].map((e,a)=>l.a.createElement(m.a.div,{key:e.title,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1*a},className:"bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"},l.a.createElement("img",{src:e.image,alt:e.title,className:"w-full h-48 object-cover"}),l.a.createElement("div",{className:"p-6"},l.a.createElement("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2"},e.title),l.a.createElement("p",{className:"text-gray-600 dark:text-gray-300 mb-4"},e.description),l.a.createElement("div",{className:"flex flex-wrap gap-2 mb-4"},e.tags.map(e=>l.a.createElement("span",{key:e,className:"px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"},e))),l.a.createElement("div",{className:"flex space-x-4"},l.a.createElement("a",{href:e.liveLink,className:"text-blue-600 dark:text-blue-400 hover:underline",target:"_blank",rel:"noopener noreferrer"},"Live Demo"),l.a.createElement("a",{href:e.githubLink,className:"text-blue-600 dark:text-blue-400 hover:underline",target:"_blank",rel:"noopener noreferrer"},"GitHub")))))))))};var x=()=>{return l.a.createElement("section",{id:"skills",className:"py-20 bg-gray-50 dark:bg-gray-900"},l.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l.a.createElement(m.a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8}},l.a.createElement("h2",{className:"text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"},"Skills & Expertise"),l.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},[{category:"Frontend",items:["React","JavaScript","HTML5","CSS3","Tailwind CSS"]},{category:"Backend",items:["Node.js","Express","Python","MongoDB","SQL"]},{category:"Tools",items:["Git","VS Code","Docker","Webpack","npm"]},{category:"Soft Skills",items:["Problem Solving","Team Collaboration","Communication","Time Management"]}].map((e,a)=>l.a.createElement(m.a.div,{key:e.category,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1*a},className:"bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"},l.a.createElement("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-4"},e.category),l.a.createElement("ul",{className:"space-y-2"},e.items.map(e=>l.a.createElement("li",{key:e,className:"text-gray-600 dark:text-gray-300 flex items-center"},l.a.createElement("svg",{className:"w-4 h-4 mr-2 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})),e)))))))))},h=t(15);var p=()=>{const[e,a]=Object(r.useState)({name:"",email:"",message:""}),t=e=>{const{name:t,value:r}=e.target;a(e=>Object(h.a)(Object(h.a)({},e),{},{[t]:r}))};return l.a.createElement("section",{id:"contact",className:"py-20 bg-gray-50 dark:bg-gray-900"},l.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l.a.createElement(m.a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8}},l.a.createElement("h2",{className:"text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"},"Get in Touch"),l.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12"},l.a.createElement("div",{className:"space-y-6"},l.a.createElement("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white"},"Contact Information"),l.a.createElement("div",{className:"space-y-4"},l.a.createElement("p",{className:"flex items-center text-gray-600 dark:text-gray-300"},l.a.createElement("svg",{className:"w-6 h-6 mr-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})),"rauftdm92@gmail.com"),l.a.createElement("p",{className:"flex items-center text-gray-600 dark:text-gray-300"},l.a.createElement("svg",{className:"w-6 h-6 mr-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})),"+92 300-3350311"),l.a.createElement("p",{className:"flex items-center text-gray-600 dark:text-gray-300"},l.a.createElement("svg",{className:"w-6 h-6 mr-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})),"Technode Computer, Shah Faisal Street, Tando Adam"),l.a.createElement("p",{className:"flex items-center text-gray-600 dark:text-gray-300"},l.a.createElement("svg",{className:"w-6 h-6 mr-3",fill:"currentColor",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})),l.a.createElement("a",{href:"https://github.com/MadniRauf",className:"hover:text-blue-500",target:"_blank",rel:"noopener noreferrer"},"GitHub Profile")),l.a.createElement("p",{className:"flex items-center text-gray-600 dark:text-gray-300"},l.a.createElement("svg",{className:"w-6 h-6 mr-3",fill:"currentColor",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/abdul-rauf-technode-tdm/",className:"hover:text-blue-500",target:"_blank",rel:"noopener noreferrer"},"LinkedIn Profile")))),l.a.createElement("div",null,l.a.createElement("form",{onSubmit:a=>{a.preventDefault(),console.log("Form submitted:",e)},className:"space-y-6"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"Name"),l.a.createElement("input",{type:"text",id:"name",name:"name",value:e.name,onChange:t,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"Email"),l.a.createElement("input",{type:"email",id:"email",name:"email",value:e.email,onChange:t,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"Message"),l.a.createElement("textarea",{id:"message",name:"message",value:e.message,onChange:t,rows:"4",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",required:!0})),l.a.createElement("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"},"Send Message")))))))};var b=()=>l.a.createElement("footer",{className:"bg-gray-900 text-gray-300"},l.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"},l.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8"},l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold text-white mb-4"},"Abdul Rauf, Technode Computer"),l.a.createElement("p",{className:"mb-4"},"Full Stack Developer building amazing web experiences."),l.a.createElement("div",{className:"flex space-x-4"},l.a.createElement("a",{href:"https://github.com/MadniRauf",className:"hover:text-white transition duration-300"},l.a.createElement("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/abdul-rauf-technode-tdm/",className:"hover:text-white transition duration-300"},l.a.createElement("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}))))),l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold text-white mb-4"},"Quick Links"),l.a.createElement("ul",{className:"space-y-2"},l.a.createElement("li",null,l.a.createElement("a",{href:"#about",className:"hover:text-white transition duration-300"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#projects",className:"hover:text-white transition duration-300"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#skills",className:"hover:text-white transition duration-300"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact",className:"hover:text-white transition duration-300"},"Contact")))),l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold text-white mb-4"},"Contact Info"),l.a.createElement("ul",{className:"space-y-2"},l.a.createElement("li",null,"Email: rauftdm92@gmail.com"),l.a.createElement("li",null,"Phone: +92 300-3350311"),l.a.createElement("li",null,"Location: Technode Computer, Tando Adam")))),l.a.createElement("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center"},l.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," Abdul Rauf, Technode Computer Education, Shah Faisal Street Tando Adam. All rights reserved."))));var y=function(){return l.a.createElement("div",{className:"bg-gray-100 dark:bg-gray-900"},l.a.createElement(s,null),l.a.createElement("main",null,l.a.createElement(d,null),l.a.createElement(g,null),l.a.createElement(x,null),l.a.createElement(u,null),l.a.createElement(p,null)),l.a.createElement(b,null))};i.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)))}},[[20,1,2]]]);
//# sourceMappingURL=main.d03eae0e.chunk.js.map
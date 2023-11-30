(()=>{"use strict";var n={772:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(81),r=t.n(o),i=t(645),d=t.n(i)()(r());d.push([n.id,":root {\n    --main-text-color: #1e293b;\n    --main-bg: #f8fafc;\n    --secondary-bg: #cbd5e1;\n    --button-bg: #e2e8f0;\n    --main-border: #020617;\n    --secondary-border: #64748b;\n    --hover-color: #94a3b8;\n    --button-hover: #f1f5f9;\n    --icon-fill: #0f172a;\n\n    --low-priority-color: #22c55e;\n    --medium-priority-color: #fbbf24 ;\n    --high-priority-color: #dc2626;\n}\n\n*:not(dialog) {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: var(--main-bg);\n    color: var(--main-text-color);\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}   \n\nh1 { \n    padding: 15px;\n    text-align: center;\n}\n\n#container {\n    align-items: center;\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n}\n\ndialog {\n    background-color: var(--secondary-bg);\n    border: 2px solid var(--main-border);\n    border-radius: 3px;\n    width: 80%;\n}\n\ndialog::backdrop {\n    background-color: #020617;\n    opacity: 0.75;\n}\n\n.detail-dialog {\n    text-align: center;\n}\n\n.detail-dialog h2, .detail-dialog p {\n    margin-bottom: 20px;\n}\n\n.detail-dialog .priority-text {\n    font-weight: bold;\n    margin-bottom: 20px;\n    padding: 5px;\n}\n\n\nbutton {\n    background-color:var(--button-bg);\n    border: 1px solid var(--secondary-border);\n    border-radius: 5px;\n    padding: 10px;\n}\n\nbutton:hover {\n    background-color: var(--button-hover);\n    cursor: pointer;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 15px;\n}\n\ninput, textarea {\n    border: 1px solid var(--secondary-border);\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.priority-selector {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n}\n\nlabel[for='low'], label[for='edit-low'] {\n    background-color: var(--low-priority-color);\n    padding: 5px;\n}\nlabel[for='medium'], label[for='edit-medium'] {\n    background-color: var(--medium-priority-color);\n    padding: 5px;\n}\nlabel[for='high'], label[for='edit-high'] {\n    background-color: var(--high-priority-color);\n    padding: 5px;\n}\n\n.error-msg {\n    color: red;\n    display: none;\n}\n\n.error {\n    border: 1px solid red;\n}\n\n\n#content {\n   width: 95%;\n}\n\n.todo-container {\n    background-color: var(--secondary-bg);\n    border: 2px solid var(--main-border);\n}\n\n.todo {\n    align-items: center;\n    background-color: var(--secondary-bg);\n    border: 2px solid var(--secondary-border);\n    display: flex;\n    font-size: 20px;\n    font-weight: bold;\n    justify-content: space-between;\n    margin: 5px;\n    padding: 5px;\n}\n    \n.priority-low {\n    border-left: 5px solid var(--low-priority-color);\n}\n\n.priority-medium {\n    border-left: 5px solid var(--medium-priority-color)\n}\n\n.priority-high {\n    border-left: 5px solid var(--high-priority-color)\n}\n\n.priority-text.priority-low {\n    background-color: var(--low-priority-color);\n}\n\n.priority-text.priority-medium {\n    background-color: var(--medium-priority-color);\n}\n\n.priority-text.priority-high {\n    background-color: var(--high-priority-color);\n}\n\n.todo:hover {\n    background-color: var(--hover-color);\n}\n\n.todo:hover *:not(.title) {\n    cursor: pointer;\n}\n\n.title {\n    width: 50%;\n}\n\n.detail-btn {\n    border: 1px solid var(--main-border);\n    padding: 5px;\n    width: 75px;\n}\n\n.detail-btn:hover {\n    border: 2px solid var(--main-border);\n}\n\n.edit-container {\n    display: flex;\n    gap: 5px;\n}\n\n.edit-icon:hover, .delete-icon:hover {\n    fill: var(--button-hover);\n}\n\n\n.edit-icon, .delete-icon {\n    display: none;\n}\n\n.edit-icon, .delete-icon, .menu-icon, .add-icon {\n    fill: var(--icon-fill);\n    width: 36px;\n}\n\n\n.edit-menu {\n    background-color: var(--main-bg);\n    border: 1px solid var(--main-border);\n    display: none;\n    padding: 5px;\n}\n\n.edit-menu p {\n    margin: 5px;\n}\n\n.edit-menu p:hover {\n    background-color: var(--button-hover);\n}\n\n.menu-active {\n    display: block;\n}\n\n.toolbar {\n    display: flex;\n    justify-content: flex-end;\n    padding: 5px;\n}\n\n.add-icon {\n    fill: var(--icon-fill);\n    opacity: 0.5;\n}\n\n.add-icon:hover {\n    cursor: pointer;\n    opacity: 1;\n}\n\n.checkbox {\n    border: 1px solid var(--main-border);\n    border-radius: 100%;\n    margin: 0 15px;\n    padding: 10px;\n}\n\n.checkbox-checked {\n    background-color: var(--main-border);\n}\n\n.todo-checked {\n    background-color: var(--button-bg);\n}\n\n.todo-checked > .title {\n    text-decoration: line-through;\n}\n\n.todo-checked *:not(:first-child) {\n    opacity: 0.6;\n}\n\n\n\n@media screen and (min-width: 768px) {\n    #content {\n        width: 85%;\n        max-width: 768px;\n    }\n\n    .edit-icon, .delete-icon {\n        display: block;\n    }\n\n    .menu-icon {\n       display: none;\n    }\n\n    dialog {\n        max-width: 70%;\n        width: 400px;\n    }\n}\n\n@media screen and (min-width: 992px) {\n    #content {\n        width: 65%;\n        max-width: 950px;\n    }\n}\n\n@media screen and (min-width: 1200px) {\n    #content {\n        width: 60%;\n    }\n}\n",""]);const a=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},d=[],a=0;a<n.length;a++){var c=n[a],l=o.base?c[0]+o.base:c[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var v=r(m,o);o.byIndex=a,e.splice(a,0,{identifier:u,updater:v,references:1})}d.push(u)}return d}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var d=0;d<i.length;d++){var a=t(i[d]);e[a].references--}for(var c=o(n,r),l=0;l<i.length;l++){var s=t(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=function(){let n=[],e=0;function t(n,t,o){return{id:e++,title:n,desc:t,priority:o}}function o(e){n.push(e),r()}function r(){localStorage.setItem("todoList",JSON.stringify(n))}return{init:function(){localStorage.getItem("todoList")&&"[]"!==localStorage.getItem("todoList")||o(t("Default Todo","This is the default todo.","medium"))},createTodo:t,addTodo:o,updateTodo:function(e,t,o,i){n=n.map((n=>n.id===Number(e)?{...n,title:t,desc:o,priority:i}:n)),r()},deleteTodo:function(e){n=n.filter((n=>n.id!==Number(e))),r()},getTodo:function(e){return n.find((n=>n.id===Number(e)))||null},getTodos:function(){return n=JSON.parse(localStorage.getItem("todoList"))||[],n}}}(),e=document.querySelector(".todo-container"),o=function(){const t=document.querySelector("#new-todo-modal"),o=document.querySelector("#edit-todo-modal");function r(){document.querySelectorAll('input[type="text"], textarea').forEach((function(n){n.value=""})),document.querySelectorAll('input[type="radio"]').forEach((function(n){n.checked=!1}))}function i(n,e){const t=(new DOMParser).parseFromString(n,"image/svg+xml").documentElement;return t.classList.add(e),t}function d(n){const t=document.createElement("div");t.classList.add("todo","priority-"+n.priority),t.setAttribute("data-id",n.id),t.appendChild(function(){const n=document.createElement("div");n.className="checkbox-container";const e=document.createElement("div");return e.className="checkbox",e.addEventListener("click",(function(){this.closest(".todo").classList.toggle("todo-checked"),e.classList.toggle("checkbox-checked")})),n.appendChild(e),n}());const o=document.createElement("div");o.className="title",o.textContent=n.title,t.appendChild(o);const r=document.createElement("div");r.className="detail-btn-container";const d=document.createElement("button");d.className="detail-btn",d.textContent="Detail",d.addEventListener("click",(()=>function(n){const e=document.createElement("dialog");e.className="detail-dialog";const t=document.createElement("h2");t.textContent=n.title,e.appendChild(t);const o=document.createElement("p");o.textContent=n.desc?n.desc:"No description. . .",e.appendChild(o);const r=document.createElement("div");r.textContent=n.priority,r.classList.add("priority-text","priority-"+n.priority),e.appendChild(r);const i=document.createElement("button");i.textContent="Close",e.appendChild(i),document.body.appendChild(e),e.showModal(),i.addEventListener("click",(function(){e.close(),document.body.removeChild(e)}))}(n))),r.appendChild(d),t.appendChild(r);const l=document.createElement("div");l.className="edit-container";const s=i('\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                <title>pencil-outline</title>\n                <path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />\n            </svg>',"edit-icon"),u=i('\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                <title>delete</title>\n                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />\n            </svg>',"delete-icon"),p=i('\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n            <title>dots-vertical</title>\n            <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />\n        </svg>',"menu-icon"),m=function(n){const e=document.createElement("div");e.classList.add("edit-menu");const t=document.createElement("p");t.textContent="Edit",t.className="edit-link";const o=document.createElement("p");return o.textContent="Delete",o.className="delete-link",t.addEventListener("click",(function(){a(n)})),o.addEventListener("click",(function(){c(n)})),e.appendChild(t),e.appendChild(o),e}(n.id);l.appendChild(s),l.appendChild(u),l.appendChild(p),l.appendChild(m),t.appendChild(l),s.addEventListener("click",(function(){a(t.getAttribute("data-id"))})),u.addEventListener("click",(function(){c(t.getAttribute("data-id"))})),p.addEventListener("click",(function(n){n.stopPropagation(),m.classList.toggle("menu-active"),document.body.addEventListener("click",(function(){m.classList.contains("menu-active")&&m.classList.remove("menu-active")}))})),e.appendChild(t)}function a(e){o.showModal();const t=n.getTodo(e),i=(document.querySelector("#edit-todo-form"),document.querySelector("#update-todo-btn")),d=document.querySelector("#edit-title");d.value=t.title;const a=document.querySelector("#edit-description");a.value=t.desc,document.querySelector(`input[name="edit-priority"][value="${t.priority}"]`).checked=!0,i.addEventListener("click",(function t(){const c=document.querySelector('input[name="edit-priority"]:checked');if(c){const s=c.value;n.updateTodo(e,d.value,a.value,s),r(),l(),o.close(),i.removeEventListener("click",t)}}))}function c(e){n.deleteTodo(e),l()}function l(){e.textContent="",n.getTodos().forEach((n=>{d(n)}))}return{createTodoElement:d,displayTodos:l,validateForm:function(){const e=document.querySelector(".new-todo-btn"),o=document.querySelector("#add-todo-btn");document.querySelector("#new-todo-form"),e.addEventListener("click",(function(){t.showModal()})),o.addEventListener("click",(function(e){e.preventDefault();let o=!0,i=document.querySelector("#title"),d=document.querySelector("#description"),a=document.querySelector('input[name="priority"]:checked'),c=document.querySelector(".title-error"),s=document.querySelector(".priority-error");""==i.value?(c.style.display="block",i.classList.add("error"),o=!1):(c.style.display="none",i.classList.remove("error"),i=i.value),a?(s.style.display="none",a=a.value):(s.style.display="block",o=!1),o&&(n.addTodo(n.createTodo(i,d.value,a)),r(),l(),t.close())}))}}}();var r=t(379),i=t.n(r),d=t(795),a=t.n(d),c=t(569),l=t.n(c),s=t(565),u=t.n(s),p=t(216),m=t.n(p),v=t(589),f=t.n(v),h=t(772),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=m(),i()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,n.init(),o.displayTodos(),o.validateForm()})()})();
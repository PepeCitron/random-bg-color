import{r as e,a as t}from"./vendor.de62f314.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,s)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return r(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){s(new Error(`Failed to import: ${e}`)),n(l)},onload(){r(self[t].moduleMap[a]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");function r(e){return Math.floor(Math.random()*e)}function o(){const[t,o]=function(){const[t,o]=e.useState("rgb(255,255,255)"),n=()=>o(`rgb(${r(255)},${r(255)},${r(255)})`);return e.useEffect((()=>{n()}),[]),[t,n]}();return e.createElement("div",{className:"App",style:{background:t},onClick:o},e.createElement("h1",{className:"colorCode",onClick:e=>e.stopPropagation()},((n=(n=t).match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===n.length?"#"+("0"+parseInt(n[1],10).toString(16)).slice(-2)+("0"+parseInt(n[2],10).toString(16)).slice(-2)+("0"+parseInt(n[3],10).toString(16)).slice(-2):"").toUpperCase()));var n}t.render(e.createElement(e.StrictMode,null,e.createElement(o,null)),document.getElementById("root"));
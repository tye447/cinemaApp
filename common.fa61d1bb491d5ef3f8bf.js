(self.webpackChunkionic_cinema_app=self.webpackChunkionic_cinema_app||[]).push([[8592],{6633:(e,t,r)=>{"use strict";r.d(t,{c:()=>o});var i=r(3150),n=r(2954),s=r(7279);const o=(e,t)=>{let r,o;const a=(e,i,n)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(e,i);s&&t(s)?s!==r&&(l(),c(s,n)):l()},c=(e,t)=>{r=e,o||(o=r);const n=r;(0,i.c)(()=>n.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!r)return;const t=r;(0,i.c)(()=>t.classList.remove("ion-activated")),e&&o!==r&&r.click(),r=void 0};return(0,s.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>a(e.currentX,e.currentY,n.a),onMove:e=>a(e.currentX,e.currentY,n.b),onEnd:()=>{l(!0),(0,n.h)(),o=void 0}})}},7330:(e,t,r)=>{"use strict";r.d(t,{a:()=>n,d:()=>s});var i=r(2377);const n=async(e,t,r,n,s)=>{if(e)return e.attachViewToDom(t,r,s,n);if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r;return n&&n.forEach(e=>o.classList.add(e)),s&&Object.assign(o,s),t.appendChild(o),await new Promise(e=>(0,i.c)(o,e)),o},s=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},2954:(e,t,r)=>{"use strict";r.d(t,{a:()=>s,b:()=>o,c:()=>n,d:()=>c,h:()=>a});const i={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:r})},notification(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},n=()=>{i.selection()},s=()=>{i.selectionStart()},o=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=e=>{i.impact(e)}},6575:(e,t,r)=>{"use strict";r.d(t,{s:()=>i});const i=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!o()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),r=document.createElement("div");t.appendChild(r),r.innerHTML=e,c.forEach(e=>{const r=t.querySelectorAll(e);for(let i=r.length-1;i>=0;i--){const e=r[i];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const o=s(e);for(let t=0;t<o.length;t++)n(o[t])}});const i=s(t);for(let e=0;e<i.length;e++)n(i[e]);const a=document.createElement("div");a.appendChild(t);const l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(t){return console.error(t),""}},n=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let r=e.attributes.length-1;r>=0;r--){const t=e.attributes.item(r),i=t.name;if(!a.includes(i.toLowerCase())){e.removeAttribute(i);continue}const n=t.value;null!=n&&n.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}const t=s(e);for(let r=0;r<t.length;r++)n(t[r])},s=e=>null!=e.children?e.children:e.childNodes,o=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},408:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(e,t,r)=>{const i=e*t/r-e+"ms",n=2*Math.PI*t/r;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,t,r)=>{const i=t/r,n=e*i-e+"ms",s=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/r-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/r-e+"ms"}})}}},1269:(e,t,r)=>{"use strict";r.d(t,{c:()=>n,g:()=>s,h:()=>i,o:()=>a});const i=(e,t)=>null!==t.closest(e),n=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,s=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},o=/^[a-z][a-z0-9+\-.]*:/,a=async(e,t,r,i)=>{if(null!=e&&"#"!==e[0]&&!o.test(e)){const n=document.querySelector("ion-router");if(n)return null!=t&&t.preventDefault(),n.push(e,r,i)}return!1}},714:(e,t,r)=>{"use strict";r.d(t,{W:()=>s});var i=r(3506),n=r(639);let s=(()=>{class e{constructor(){}getFilmById(e){return this.film=i.uD.filter(t=>t.id===e)[0],this.film}getAllFilms(){return i.uD}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},37:(e,t,r)=>{"use strict";r.d(t,{l:()=>s});var i=r(3506),n=r(639);let s=(()=>{class e{constructor(){}getAllGroups(){return i.Xx}getGroupById(e){return i.Xx.filter(t=>t.id===e)[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9709:(e,t,r)=>{"use strict";r.d(t,{K:()=>a});var i=r(3506),n=r(639),s=r(1841),o=r(649);let a=(()=>{class e{constructor(e,t){this.httpClient=e,this.router=t}signUp(e,t){this.setUser({name:e,password:t}),this.router.navigateByUrl("tabs/home").then()}setUser(e){window.sessionStorage.setItem("currentUser",JSON.stringify(e))}getUserById(e){return i.rC.filter(t=>t.id===e)[0]}login(e,t){let r=i.rC.filter(t=>t.name===e).filter(e=>e.password===t)[0];r?(this.setUser(r),this.router.navigateByUrl("tabs/home").then()):(alert("Invalid name or password: Please try again!"),window.sessionStorage.clear())}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(s.eN),n.LFG(o.F0))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},3506:(e,t,r)=>{"use strict";r.d(t,{rC:()=>i,uD:()=>n,tb:()=>s,Xx:()=>o});const i=[{id:1,name:"Arthur",age:24,password:"arthur",group:[{gid:401},{gid:402}]},{id:2,name:"David",age:22,password:"david",group:[{gid:402},{gid:403}]},{id:3,name:"Betty",age:18,password:"betty",group:[{gid:401}]},{id:4,name:"admin",age:24,password:"admin",group:[{gid:403}]}],n=[{id:101,title:"Avengers: Endgame",overview:'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios\' grand conclusion to twenty-two films, "Avengers: Endgame."',directors:"Anthony Russo, Joe Russo",producer:"Kevin Feige",img:"https://wallpapercave.com/wp/wp5323626.png"},{id:102,title:"Joker",overview:"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. Arthur Fleck works as a clown and is an aspiring stand-up comic.",directors:"Todd Phillips",producer:"Todd Phillips, Bradley Cooper, Emma Tillinger Koskoff",img:"https://wallpapercave.com/wp/wp4654536.jpg"},{id:103,title:"Frozen II",overview:"Set three years after the events of the first film, the story follows Elsa, Anna, Kristoff, Olaf, and Sven, who embark on a journey beyond their kingdom of Arendelle in order to discover the origin of Elsa's magical powers and save their kingdom after a mysterious voice calls out to Elsa.",directors:"Chris Buck, Jennifer Lee",producer:"Peter Del Vecho",img:"https://wallpapercave.com/wp/wp4869315.jpg"}],s=[{id:201,fid:101,address:"Pathe Bellecour",date:"15/12/2019",time:"17:30"},{id:202,fid:102,address:"UGC Cite Confluence",date:"20/12/2019",time:"15:30"},{id:203,fid:103,address:"Pathe Bellecour",date:"20/12/2019",time:"16:30"},{id:204,fid:101,address:"UGC Cite Part-Dieu",date:"21/12/2019",time:"19:30"},{id:205,fid:103,address:"UGC Cite Part-Dieu",date:"23/12/2019",time:"11:30"}],o=[{id:401,name:"DC Fans",members:[{id:1},{id:3}],events:[{id:501},{id:503}],img:"https://upload.wikimedia.org/wikipedia/commons/1/1c/DC_Comics_logo.png"},{id:402,name:"Marvel Fans",members:[{id:1},{id:2}],events:[{id:502},{id:504},{id:506}],img:"https://cdn.1min30.com/wp-content/uploads/2018/07/marvel-logo-hd.jpg"},{id:403,name:"Disney Films",members:[{id:2},{id:4}],events:[{id:505}],img:"https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2020/04/heros-disney770__w770.jpg"}]}}]);
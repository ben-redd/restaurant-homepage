!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const o=()=>{const t=document.getElementById("content"),e=document.createElement("div");t.appendChild(e);const n=document.createElement("h1");n.textContent="Ben's Tasty Pastries",e.appendChild(n);const o=document.createElement("p");o.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga enim dignissimos at neque, in excepturi impedit similique nemo aliquam voluptate, repellat dolore pariatur.Aliquid, rerum architecto nisi similique aut soluta!Expedita voluptas rem earum voluptatum odio dignissimos exercitationem dolorem soluta dolore recusandae fuga corrupti dolor, illum id quas, tenetur maxime possimus, laborum non ? Dolorem quas natus, impedit similique sed beatae.",e.appendChild(o)};o(),document.addEventListener("click",(function(t){t.target.matches(".navLink")&&(function(){document.getElementById("content").innerHTML="";const t=document.querySelectorAll(".navLink");for(let e=0;e<t.length;e++)t[e].classList.remove("currentTab")}(),t.target.classList.add("currentTab"),t.target.matches("#home")&&o(),t.target.matches("#menu")&&(()=>{const t=document.getElementById("content"),e=document.createElement("div");e.setAttribute("class","menuContainer"),t.appendChild(e);const n=document.createElement("div");n.setAttribute("class","item1"),e.appendChild(n);const o=document.createElement("h2");o.textContent="Cinnamon rolls",n.appendChild(o);const i=document.createElement("img");i.setAttribute("src","https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"),i.setAttribute("alt","A tray of cinnamon rolls"),n.appendChild(i);const a=document.createElement("div");a.setAttribute("class","item2"),e.appendChild(a);const r=document.createElement("h2");r.textContent="Peach, lavender tart",a.appendChild(r);const c=document.createElement("img");c.setAttribute("src","https://images.unsplash.com/photo-1505656031945-da477b4f1b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),c.setAttribute("alt","A peach lavender tart"),a.appendChild(c);const s=document.createElement("div");e.appendChild(s);const d=document.createElement("h2");d.textContent="Croissants",s.appendChild(d);const l=document.createElement("img");l.setAttribute("src","https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),l.setAttribute("alt","A bowl filled with croissants"),s.appendChild(l);const u=document.createElement("div");e.appendChild(u);const m=document.createElement("h2");m.textContent="Honey cake",u.appendChild(m);const p=document.createElement("img");p.setAttribute("src","https://images.unsplash.com/photo-1572897305697-f8adb93dae8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),p.setAttribute("alt","A wire rack with squares of honey cake on it"),u.appendChild(p);const h=document.createElement("div");e.appendChild(h);const f=document.createElement("h2");f.textContent="Almond Scones",h.appendChild(f);const b=document.createElement("img");b.setAttribute("src","https://images.unsplash.com/photo-1557779140-30d5e144e964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),b.setAttribute("alt","A plate of almond scones"),h.appendChild(b);const C=document.createElement("div");e.appendChild(C);const g=document.createElement("h2");g.textContent="Almond cream ring",C.appendChild(g);const E=document.createElement("img");E.setAttribute("src","https://images.unsplash.com/photo-1517401371900-1f56ae9f71e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),E.setAttribute("alt","A baked, cream filled pastry with almond garnish on a wire rack"),C.appendChild(E)})(),t.target.matches("#contact")&&(()=>{const t=document.getElementById("content"),e=document.createElement("h2");e.textContent="Contact us",t.appendChild(e);const n=document.createElement("p");n.textContent="Feel free to contact us at bens_pastries_support@gmail.com or visit us in person at any of our locations.",t.appendChild(n)})())}))}]);
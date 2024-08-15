(()=>{"use strict";var n={12:(n,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.t=void 0,t.o=u,t.i=function(){null===i.u||void 0===i.u||i.u.forEach((n=>{(n.querySelector(".file-tree")?[]:n.querySelectorAll(".protyle-wysiwyg")).forEach((n=>{n.style.removeProperty("--protyle-spacing"),n.dataset.l=void 0}))}))};const e=o(629),i=o(216);function u(){null===i.u||void 0===i.u||i.u.forEach((n=>{let t=n.querySelector(".file-tree")?[]:n.querySelectorAll(".protyle-wysiwyg");setTimeout((()=>{t.forEach((n=>{let t;t=n.style.paddingLeft,t!==n.dataset.l&&(n.style.setProperty("--protyle-spacing",t),n.dataset.l=t)}))}),300)}))}t.t=(0,e.m)(u,200)},787:function(n,t,o){var e=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.followSysAccentColor=void 0,t.v=function(){return e(this,void 0,void 0,(function*(){var n;r.p.h||(a=yield m(),function(){return e(this,void 0,void 0,(function*(){yield(0,i.getFile)("/data/snippets/Asri.config.json").then((n=>n&&200===n.status?n.json():null)).then((n=>{var o,e;n?(t.followSysAccentColor=!!n.followSysAccentColor,l.followSysAccentColor=t.followSysAccentColor,l.chroma=null!==(o=n.chroma)&&void 0!==o?o:"1",l.userCustomColor=null!==(e=n.userCustomColor)&&void 0!==e?e:"#3478f6"):t.followSysAccentColor=l.followSysAccentColor}))}))}().then((()=>{r.p._&&(r.p.k||r.p.M||r.p.S?document.documentElement.style.setProperty("--asri-user-custom-accent",l.userCustomColor):t.followSysAccentColor?document.documentElement.style.removeProperty("--asri-user-custom-accent"):document.documentElement.style.setProperty("--asri-user-custom-accent",l.userCustomColor),document.documentElement.style.setProperty("--asri-c-factor",l.chroma),f="0"===l.chroma,p(l.chroma),b(),!l.followSysAccentColor&&_(l.userCustomColor),h())})),r.p._&&(null===(n=r.P.O)||void 0===n||n.addEventListener("click",h)))}))},t.j=function(){var n;document.documentElement.style.removeProperty("--asri-user-custom-accent"),document.documentElement.style.removeProperty("--asri-sys-accent-grayscale"),document.documentElement.style.removeProperty("--asri-c-factor"),document.documentElement.style.removeProperty("--asri-sys-accent"),document.documentElement.style.removeProperty("--asri-sys-accent-accessible"),document.documentElement.style.removeProperty("--asri-c-0"),document.documentElement.style.removeProperty("--asri-on-primary-reverse"),null===(n=r.P.O)||void 0===n||n.removeEventListener("click",h),document.querySelectorAll(".asri-config").forEach((n=>n.remove()))},t.L=b;const i=o(613),u=o(571),c=o(629),r=o(49),l={followSysAccentColor:!0,chroma:"1",userCustomColor:""};let a,s,d=!1,f=!1;function m(){return e(this,void 0,void 0,(function*(){if(["zh_CN","zh_CHT","en_US"].includes(r.p.lang)){return(yield fetch(`/appearance/themes/Asri/i18n/${r.p.lang}.json`)).json()}return(yield fetch("/appearance/themes/Asri/i18n/en_US.json")).json()}))}function v(){return e(this,void 0,void 0,(function*(){yield(0,i.R)("/data/snippets/Asri.config.json",JSON.stringify(l,void 0,4))}))}function h(){return e(this,void 0,void 0,(function*(){Object.keys(a).length||(a=yield m());const n=a.asriChroma;let o,e,i,u;setTimeout((function(){var d,m;if(document.querySelector(".asri-config"))return;const h=document.querySelector('#commonMenu[data-name="barmode"] .b3-menu__items');if(!h)return;const y=`<button class="b3-menu__separator asri-config"></button>\n<button class="b3-menu__item asri-config" id="pickColor">\n    <svg class="b3-menu__icon"></svg>\n    <label for="asriColorPicker" class="be-menu__label">${a.pickColor}\n    </label>\n    <input id="asriColorPicker" type="color" value="${l.userCustomColor}">\n</button>\n<button class="b3-menu__item asri-config" id="followSysAccent">\n    <svg class="b3-menu__icon"></svg>\n    <label for="" class="be-menu__label">${a.followSysAccent}\n    </label>\n</button>\n<button class="b3-menu__item asri-config" data-type="nobg" id="asriChroma">\n    <svg class="b3-menu__icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">\n        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n            d="m19 11l-8-8l-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0zM5 2l5 5m-8 6h15m5 7a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4c.3 1.6 2 2.4 2 4" />\n    </svg>\n    <div aria-label="${n+(null!==(m=null!==(d=null==i?void 0:i.value)&&void 0!==d?d:l.chroma)&&void 0!==m?m:"1")}" class="b3-tooltips b3-tooltips__n">\n        <input style="box-sizing: border-box" type="range" id="asriChromaSlider" class="b3-slider fn__block" min="0"\n            max="5" step="0.1" value="1">\n    </div>\n</button>`,g=document.createRange().createContextualFragment(y);if(h.appendChild(g),o=document.getElementById("followSysAccent"),e=document.getElementById("pickColor"),i=document.getElementById("asriChromaSlider"),u=e.lastElementChild,!(o&&e&&i&&u))return;o.classList.toggle("b3-menu__item--selected",t.followSysAccentColor),e.classList.toggle("b3-menu__item--selected",!t.followSysAccentColor),i.value=l.chroma||"1",i.parentElement.ariaLabel=n+l.chroma,r.p.k||r.p.M||r.p.S?o.classList.add("fn__none"):o.addEventListener("click",(()=>{t.followSysAccentColor?(t.followSysAccentColor=!1,o.classList.remove("b3-menu__item--selected"),e.classList.add("b3-menu__item--selected"),document.documentElement.style.setProperty("--asri-user-custom-accent",l.userCustomColor||s||"#3478f6"),p(l.chroma),_(l.userCustomColor||s||"#3478f6"),l.followSysAccentColor=!1):(t.followSysAccentColor=!0,o.classList.add("b3-menu__item--selected"),e.classList.remove("b3-menu__item--selected"),document.documentElement.style.removeProperty("--asri-user-custom-accent"),l.followSysAccentColor=!0,b()),v()}));e.addEventListener("click",(()=>{t.followSysAccentColor&&(t.followSysAccentColor=!1,o.classList.remove("b3-menu__item--selected"),e.classList.add("b3-menu__item--selected"),document.documentElement.style.setProperty("--asri-user-custom-accent",l.userCustomColor),p(l.chroma),_(l.userCustomColor),l.userCustomColor=l.userCustomColor,l.followSysAccentColor=!1,v())})),u.addEventListener("input",(()=>{const n=u.value;document.documentElement.style.setProperty("--asri-user-custom-accent",n),_(n)})),u.addEventListener("change",(()=>{o.classList.remove("b3-menu__item--selected"),e.classList.add("b3-menu__item--selected"),_(u.value),l.userCustomColor=u.value,t.followSysAccentColor=!1,l.followSysAccentColor=!1,v()}));const w=(0,c.m)((()=>v()),200);i.addEventListener("input",(function(){let t=this.value;document.documentElement.style.setProperty("--asri-c-factor",t),this.parentElement.ariaLabel=n+t,l.chroma=t,f="0"===t,p(t),w()}))}),0)}))}function b(){if(!(r.p.k||r.p.M||r.p.S)){const n="#"+u.remote.systemPreferences.getAccentColor().slice(0,6),o=(0,c.T)(n);if(!o)return;s!==n&&(document.documentElement.style.setProperty("--asri-sys-accent",n),o.s>.28?document.documentElement.style.setProperty("--asri-sys-accent-accessible",n):document.documentElement.style.removeProperty("--asri-sys-accent-accessible"),d=0===o.s,document.body.classList.add("asri-mode-transition"),setTimeout((()=>{document.body.classList.remove("asri-mode-transition")}),350),s=n),t.followSysAccentColor&&(p(o.s),_(n))}}function p(n){return"0"===String(n)||t.followSysAccentColor&&d||f?(document.documentElement.style.setProperty("--asri-c-0","0"),!0):(document.documentElement.style.removeProperty("--asri-c-0"),!1)}t.followSysAccentColor=!0;const y="light"===r.p.A?.81:.79;function _(n){const t=(0,c.C)(n);t&&(t>y?document.documentElement.style.setProperty("--asri-on-primary-reverse","light"===r.p.A?".4":".3"):document.documentElement.style.removeProperty("--asri-on-primary-reverse"))}},344:(n,t)=>{function o(){document.body.classList.toggle("has-exportimg",!!document.querySelector('[data-key="dialog-exportimage"]'))}Object.defineProperty(t,"__esModule",{value:!0}),t.B=function(n,t){o()},t.N=o},818:function(n,t,o){var e=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.I=function(){return e(this,void 0,void 0,(function*(){const n=u.P.F?u.P.F:yield(0,i.$)("#dockLeft");u.P.D||(yield(0,i.$)(".layout__dockl"));const t=u.P.U;for(let o of[n,t]){let t=(0,c.V)(o===n?"L":"R"),e=(0,c.H)(o===n?"L":"R");t&&e?null==o||o.classList.add("dock-layout-expanded"):null==o||o.classList.remove("dock-layout-expanded")}}))},t.J=function(){return e(this,void 0,void 0,(function*(){var n,t,o;if(u.p.M)return;const e=yield(0,c.K)(),i=!(0,c.V)("B")&&(0,c.H)("B");null===(n=u.P.toolbar)||void 0===n||n.nextElementSibling.classList.toggle("has-dockb",e),null===(t=u.P.toolbar)||void 0===t||t.nextElementSibling.classList.toggle("has-layout-dockb-float",i),null===(o=u.P.W)||void 0===o||o.classList.toggle("has-layout-dockb-float",i)}))},t.Y=function(){var n,t;null===(n=u.P.toolbar)||void 0===n||n.nextElementSibling.classList.remove("has-dockb"),null===(t=u.P.toolbar)||void 0===t||t.nextElementSibling.classList.remove("has-layout-dockb-float")},t.q=function(){var n;null===(n=document.querySelector(".dock-layout-expanded"))||void 0===n||n.classList.remove("dock-layout-expanded")};const i=o(629),u=o(49),c=o(216)},937:function(n,t,o){var e=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.G=void 0,t.X=u,t.Z=function(){document.querySelectorAll(".protyle .protyle-background.without-icon").forEach((n=>{n.classList.remove("without-icon")}))};const i=o(629);function u(){return e(this,void 0,void 0,(function*(){let n=yield(0,i.nn)(".protyle-top>.protyle-background");null==n||n.forEach((n=>{var t;!(null===(t=n.querySelector(".protyle-background__img img"))||void 0===t?void 0:t.classList.contains("fn__none"))&&n.querySelector(".protyle-background__icon.fn__none")?n.classList.add("without-icon"):n.classList.remove("without-icon")}))}))}t.G=(0,i.m)(u)},261:(n,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tn=function(){i.forEach((({en:n,className:t})=>{n&&document.body.classList.add(t)}))},t.un=function(){i.forEach((({className:n})=>{document.body.classList.remove(n)}))};const e=o(49),i=[{en:e.p.cn,className:"body-asri--mac"},{en:e.p.S,className:"body-asri--linux"},{en:e.p.M,className:"body-asri--mobile"},{en:e.p.k,className:"body-asri--browser"},{en:e.p.rn,className:"body-asri--android"},{en:e.p.h,className:"body-asri--iosApp"},{en:e.p.ln,className:"body-asri--readOnly"}]},2:function(n,t,o){var e=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.an=t.sn=t.dn=void 0,t.fn=function(){return e(this,void 0,void 0,(function*(){(0,v.tn)(),(0,h.mn)(),(0,_.vn)(),(0,p.hn)(),(0,s.v)(),r.p.M||(yield(0,l.bn)(),yield(0,y.pn)("initials"),(0,y.yn)()),j(),(0,f.J)(),(0,p._n)(),g.start(document,"mouseup"),w.start(document,"dragend"),x.start(document,"keyup"),M.observe(document.body,c.gn),k.observe(document.body,{childList:!0}),r.P.wn||(yield(0,u.$)(".layout__center")),r.p.M||(S.observe(r.P.wn),O.observe(document.body))}))},t.xn=function(){return e(this,void 0,void 0,(function*(){(0,v.un)(),(0,h.kn)(),(0,_.Mn)(),(0,p.Sn)(),r.p.M||(yield(0,y.On)()),(0,f.q)(),(0,b.Pn)(),(0,m.Z)(),(0,a.i)(),(0,f.Y)(),(0,p.jn)(),g.remove(document,"mouseup"),w.remove(document,"dragend"),x.remove(document,"keyup"),M.disconnect(),k.disconnect((()=>{document.body.classList.remove("has-exportimg")})),document.body.classList.remove("body-asri--fullscreen"),r.p.M||(S.disconnect(),O.disconnect()),(0,s.j)()}))};const i=o(796),u=o(629),c=o(766),r=o(49),l=o(216),a=o(12),s=o(787),d=o(344),f=o(818),m=o(937),v=o(261),h=o(832),b=o(844),p=o(414),y=o(376),_=o(130),g=new i.Ln(P),w=new i.Ln(P),x=new i.Ln(P),k=new c.Rn((0,u.m)(d.B,500)),M=new c.Rn((function(n,t){var o;for(let t of n)t.target.classList.contains("b3-list-item--focus")&&((0,b.Tn)(),(0,m.G)()),t.target===document.body&&((null===(o=t.oldValue)||void 0===o?void 0:o.includes("body--blur"))||t.target.className.includes("body--blur"))&&(0,l.bn)().then((()=>{j(),!r.p.h&&s.followSysAccentColor&&r.p._&&(0,s.L)()}))})),S=new c.An((function(n,o){(0,y.Cn)(0,t.dn,l.Bn).then(y.Nn),(0,a.t)(),(0,p.In)()})),O=new c.An((function(n,o){for(let o of n){t.dn=!0,L();const{inlineSize:n}=o.contentBoxSize[0];if(o.target instanceof HTMLElement){if(!o.target.dataset.zn){o.target.dataset.zn=n+"";continue}const e=n-parseFloat(o.target.dataset.zn);o.target.dataset.zn=n+"",t.an=e}}}));function P(n){j(n)}function j(n){return e(this,void 0,void 0,(function*(){function t(){setTimeout((()=>e(this,void 0,void 0,(function*(){(0,f.I)(),(0,m.G)(),(0,p.In)(),(0,p.hn)(),yield(0,l.bn)(),(0,a.o)(),(0,f.J)(),(0,p._n)(),!r.p.h&&s.followSysAccentColor&&r.p._&&(0,s.L)()}))),0)}n?(n.type.startsWith("mouse")||n.type.startsWith("drag")||n instanceof KeyboardEvent&&("Control"===n.key||"Alt"===n.key||"Shift"===n.key||"Meta"===n.key))&&(t(),setTimeout((()=>{(0,y.Fn)(),(0,y.Cn)(0,!1,l.Bn).then(y.Nn)}),0)):(t(),(0,y.Cn)().then(y.Nn))}))}t.dn=!1,t.an=0;const L=(0,u.m)((()=>{t.dn=!1,(0,y.$n)(),(0,l.Dn)(),l.Bn||(0,y.Fn)(),(0,y.Cn)(t.an,t.dn,l.Bn).then(y.Nn),t.an=0}),200)},832:function(n,t,o){var e=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.mn=function(){return e(this,void 0,void 0,(function*(){if(u||c)for(let n=0;n<document.styleSheets.length;n++){let t=document.styleSheets[n];try{for(let n=0;n<t.cssRules.length;n++){let o=t.cssRules[n];o.selectorText&&o.selectorText.includes("::-webkit-scrollbar")&&(o.style.width||o.style.height||o.style.backgroundColor)&&(r.push({styleSheet:t,En:o.cssText}),t.deleteRule(n),n--)}}catch(n){}}}))},t.kn=function(){return e(this,void 0,void 0,(function*(){if(r)for(let n=0;n<r.length;n++){let t=r[n];t.styleSheet.insertRule(t.En,t.styleSheet.cssRules.length)}}))};const i=o(49),{cn:u,M:c}=i.p,r=[]},844:function(n,t,o){var e=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Tn=void 0,t.Un=r,t.Pn=function(){document.querySelectorAll(".file-tree .has-focus").forEach((n=>n.classList.remove("has-focus")))};const i=o(629),u=o(49),{M:c}=u.p;function r(){return e(this,void 0,void 0,(function*(){if(c)return;u.P.D||(yield(0,i.$)(".layout__dockl"));let n=document.querySelectorAll(".file-tree .b3-list-item--focus");n.length&&(document.querySelectorAll(".file-tree .has-focus").forEach((n=>n.classList.remove("has-focus"))),n.forEach((n=>{n.nextElementSibling&&"UL"===n.nextElementSibling.tagName&&!n.nextElementSibling.classList.contains("fn__none")||n.parentNode instanceof Element&&n.parentNode.classList.add("has-focus")})))}))}t.Tn=(0,i.m)(r)},414:function(n,t,o){var e=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.In=void 0,t.Vn=r,t.hn=function(){const n=(0,i.Hn)()?0:32;document.body.style.setProperty("--status-height",`${n}px`)},t.Sn=function(){document.body.style.removeProperty("--status-height"),setTimeout((()=>{var n,t;null===(n=document.getElementById("status"))||void 0===n||n.style.removeProperty("max-width"),null===(t=document.getElementById("status"))||void 0===t||t.style.removeProperty("transform")}),200)},t._n=function(){var n,t;if(!(0,i.Hn)()){const o=null===(n=u.P.Jn)||void 0===n?void 0:n.querySelectorAll(".layout__center .layout-tab-container"),e=u.P.status;null==o||o.forEach((n=>{let t=n.querySelector(".file-tree");t&&!t.classList.contains("fn__none")&&(0,c.Kn)(n,e)?n.style.paddingBottom="35px":n.style.removeProperty("padding-bottom")}));const i=document.getElementById("searchList"),r=document.getElementById("searchPreview");(i||r)&&((0,c.Kn)(i,e)?i.style.paddingBottom="35px":i.style.removeProperty("padding-bottom"),(0,c.Kn)(r,e)?r.style.paddingBottom="35px":r.style.removeProperty("padding-bottom"));const l=document.getElementById("viewerContainer");l&&((0,c.Kn)(l,e)?l.style.paddingBottom="35px":l.style.removeProperty("padding-bottom")),null===(t=u.P.Jn)||void 0===t||t.querySelectorAll(".card__main").forEach((n=>{n&&((0,c.Kn)(n,e)?n.style.paddingBottom="35px":n.style.removeProperty("padding-bottom"))}))}},t.jn=function(){var n,t;null===(n=u.P.Jn)||void 0===n||n.querySelectorAll(".layout__center .layout-tab-container").forEach((n=>{n.style.removeProperty("padding-bottom")})),null===(t=u.P.Jn)||void 0===t||t.querySelectorAll(".card__main").forEach((n=>{n.style.removeProperty("padding-bottom")}));const o=document.getElementById("searchList"),e=document.getElementById("searchPreview"),i=document.getElementById("viewerContainer");for(const n of[o,e,i])n&&n.style.removeProperty("padding-bottom")};const i=o(216),u=o(49),c=o(629);function r(){return e(this,void 0,void 0,(function*(){var n,t;if(!u.p.M&&!u.p.Wn)if(u.P.status||(yield(0,c.$)("#status")),yield(0,i.K)())null===(n=u.P.status)||void 0===n||n.style.removeProperty("max-width"),null===(t=u.P.status)||void 0===t||t.style.removeProperty("transform");else{function o(n,t){u.P.status.style.transform=`translate(${n}px, ${t}px)`}let e=(u.P.Jn||(yield(0,c.$)("#layouts"))).querySelector(".layout__center");if(e&&u.P.Yn&&!u.P.status.classList.contains(".fn__none")){let r=u.P.Yn.clientWidth,l=e.clientWidth,a=0;u.P.qn||(yield(0,c.$)(".layout__dockb")),a=u.P.qn&&!u.P.qn.classList.contains(".fn__none")&&(0,i.V)("B")?-1*u.P.qn.clientHeight:0,u.P.status.style.maxWidth=l-12+"px";let s=(0,i.Gn)("R"),d=!(0,i.V)("R")&&(0,i.H)("R");s&&d?o(0,a):!s&&d?o(-40,a):s||d?s&&!d&&o(-1*r,a):o(-1*(r+40),a)}}}))}t.In=(0,c.m)(r)},376:function(n,t,o){var e=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.pn=_,t.$n=function(){return e(this,void 0,void 0,(function*(){u.p.cn&&((0,c.isFullScreen)()?(document.body.classList.add("body-asri--fullscreen"),h-=y?0:88,y=!0):(document.body.classList.remove("body-asri--fullscreen"),null==l||l.style.setProperty("width","0px"),h=yield _("initials","L"),null==l||l.style.removeProperty("width"),y=!1))}))},t.Cn=function(){return e(this,arguments,void 0,(function*(n=0,t=!1,o=!1){if(u.p.Wn||u.p.M)return{Qn:!1,Xn:0};let c=u.P.wn||(yield(0,i.$)(".layout__center"));return new Promise((i=>e(this,void 0,void 0,(function*(){var e,r,a,s,d,g;t&&(b+=n),h&&b||(yield _("initials")),f=c.getBoundingClientRect(),v=u.P.Zn.getBoundingClientRect(),m=u.P.nt.getBoundingClientRect();let w=f.left,x=f.right,k=u.P.tt.getBoundingClientRect().left;t||(w>h+8?(null==p||p.style.setProperty("--topbar-left-spacing","0"),u.p.cn&&y||(yield _("initials","L")),null==l||l.classList.remove("asri-expanded")):u.p.cn&&!u.p.k?(p.style.setProperty("--topbar-left-spacing",w-v.right+4+"px"),null==l||l.classList.add("asri-expanded")):(p.style.setProperty("--topbar-left-spacing",w-m.right+4+"px"),null==l||l.classList.add("asri-expanded")),x<b-8&&!o?(p.style.setProperty("--topbar-right-spacing","0"),yield _("initials","R"),null===(e=u.P.U)||void 0===e||e.style.removeProperty("--avoid-topbar"),null===(r=u.P.Yn)||void 0===r||r.style.removeProperty("--avoid-topbar")):u.p.cn||u.p.k?(p.style.setProperty("--topbar-right-spacing",window.innerWidth-x+1+"px"),null===(a=u.P.U)||void 0===a||a.style.setProperty("--avoid-topbar","4px"),null===(s=u.P.Yn)||void 0===s||s.style.setProperty("--avoid-topbar","4px")):(p.style.setProperty("--topbar-right-spacing",k-x+6+"px"),null===(d=u.P.U)||void 0===d||d.style.setProperty("--avoid-topbar","calc(var(--toolbar-height) - 6px)"),null===(g=u.P.Yn)||void 0===g||g.style.setProperty("--avoid-topbar","calc(var(--toolbar-height) - 6px)"))),i({Qn:!0,Xn:x})}))))}))},t.Nn=function(){return e(this,arguments,void 0,(function*({Qn:n,Xn:t}={Qn:!1,Xn:0}){var o,l;n&&(s=null===(o=u.P.toolbar)||void 0===o?void 0:o.getBoundingClientRect(),yield _("rect"),f=null===(l=u.P.wn)||void 0===l?void 0:l.getBoundingClientRect(),r&&(t<b-8?(r.style.setProperty("--container-bg","var(--b3-list-hover)"),r.style.left=t+"px",r.style.right="0",r.style.removeProperty("height"),r.style.removeProperty("top"),r.style.removeProperty("width")):(r.style.setProperty("--container-bg","var(--b3-border-color-trans)"),r.style.left=d.right-10+"px",r.style.width="2px",r.style.height="21px",r.style.top="13.5px")),null===c.u||void 0===c.u||c.u.forEach((n=>e(this,void 0,void 0,(function*(){let t,o=n.querySelector('.fn__flex-column[data-type="wnd"] > .fn__flex:first-child');t=null==o?void 0:o.getBoundingClientRect();let e=t.left<d.left?d.left-t.left-4:0,c=t.right>d.right?t.right-d.right+8:0;(0,i.Kn)(o,u.P.ot)||(0,i.Kn)(o,u.P.toolbar)?(o.style.paddingLeft=e+"px",o.style.paddingRight=c+"px",t.right-c-240<d.left&&t.left<d.left||t.left+e+240>d.right&&t.right>d.right?(o.style.paddingTop="42px",o.style.paddingLeft="0",o.style.paddingRight="0"):o.style.removeProperty("padding-top")):(o.style.removeProperty("padding-left"),o.style.removeProperty("padding-right"),o.style.removeProperty("padding-top"))})))))}))},t.yn=function(){return e(this,void 0,void 0,(function*(){!function(){if(u.p.M)return;r=g("AsriPluginsIconsDivider",void 0,u.P.ot),l=u.p.cn&&!u.p.k?g("AsriTopbarLeftSpacing",void 0,u.P.Zn):g("AsriTopbarLeftSpacing",void 0,u.P.nt),a=u.p.cn||u.p.k?g("AsriTopbarRightSpacing"):g("AsriTopbarRightSpacing",u.P.tt);const n=document.createElementNS("http://www.w3.org/2000/svg","svg");null==a||a.appendChild(n.cloneNode(!0)),null==r||r.appendChild(n.cloneNode(!0)),null==l||l.appendChild(n.cloneNode(!0))}()}))},t.On=function(){return e(this,void 0,void 0,(function*(){var n,t;yield(0,c.bn)(),function(){r&&(r.remove(),r=void 0);l&&(l.remove(),l=void 0);a&&(a.remove(),a=void 0)}(),null===c.u||void 0===c.u||c.u.forEach((n=>{let t=n.firstElementChild;t.style.removeProperty("padding-top"),t.style.removeProperty("padding-left"),t.style.removeProperty("padding-right")})),u.P.wn.dataset.zn=void 0,document.body.dataset.zn=void 0,null===(n=u.P.U)||void 0===n||n.style.removeProperty("--avoid-topbar"),null===(t=u.P.Yn)||void 0===t||t.style.removeProperty("--avoid-topbar")}))},t.Fn=function(){return e(this,void 0,void 0,(function*(){l&&a&&(l.style.setProperty("width","0px"),a.style.setProperty("width","0px"),yield _("initials"),l.style.removeProperty("width"),a.style.removeProperty("width"))}))};const i=o(629),u=o(49),c=o(216);let r,l,a,s,d,f,m,v,h,b,p=u.P.toolbar,y=!1;function _(){return e(this,arguments,void 0,(function*(n="rect",...t){const o=u.P.ot||(yield(0,i.$)("#drag"));return!o||u.p.Wn?-1:new Promise((e=>{"initials"===n?(t.length&&!t.includes("L")||(h=o.getBoundingClientRect().left,e(h)),t.length&&!t.includes("R")||(b=o.getBoundingClientRect().right,e(b))):(d=o.getBoundingClientRect(),e(d))}))}))}function g(n,t=void 0,o=void 0){if(document.getElementById(n))return;if(!u.P.toolbar)return;let e=document.createElement("div");return e.id=n,t?u.P.toolbar.insertBefore(e,t):o?u.P.toolbar.insertBefore(e,o.nextSibling):u.P.toolbar.appendChild(e),e}},130:(n,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.vn=function(){i.p.cn&&(i.p.k||u(16),i.p.Wn&&u(14))},t.Mn=function(){i.p.cn&&(i.p.k||u(8),i.p.Wn&&u(8,13))};const e=o(571),i=o(49);function u(n,t=n){e.remote&&e.remote.getCurrentWindow().setWindowButtonPosition({x:n,y:t})}},613:function(n,t){var o=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getFile=function(n){return o(this,void 0,void 0,(function*(){const t=yield fetch("/api/file/getFile",{method:"POST",headers:{et:"Token ''"},body:JSON.stringify({path:n})});return t.ok?t:null}))},t.R=function(n,t){return o(this,arguments,void 0,(function*(n,t,o=!1,e=Date.now()){let i=new Blob([t]),u=n.split("/").pop(),c=new File([i],u),r=new FormData;r.append("path",n),r.append("file",c),r.append("isDir",String(o)),r.append("modTime",String(e));const l=yield fetch("/api/file/putFile",{body:r,method:"POST",headers:{et:"Token ''"}});return l.ok?yield l.json():null}))}},571:(n,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.remote=void 0;const e=o(49);t.remote=e.p.k||e.p.M?null:o(21)},796:(n,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Ln=void 0;t.Ln=class{constructor(n){this.it=n}start(n,t,o){n.addEventListener(t,this.it,o)}remove(n,t,o){n.removeEventListener(t,this.it,o)}}},629:function(n,t){var o=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};function e(n,t){let o=!1;return n&&t&&(o=n.right>t.left&&n.bottom>t.top&&n.left<t.left+t.width&&n.top<t.top+t.height),o}Object.defineProperty(t,"__esModule",{value:!0}),t.ut=function(n,t){n.includes(t)||n.push(t)},t.m=function(n,t=200){let o=null;return(...e)=>{o&&clearTimeout(o),o=setTimeout((()=>{n(...e),o=null}),t)}},t.T=function(n){if(!n)return;const t=parseInt(n.substring(1,3),16)/255,o=parseInt(n.substring(3,5),16)/255,e=parseInt(n.substring(5,7),16)/255,i=Math.max(t,o,e),u=Math.min(t,o,e),c=(i+u)/2;if(i===u)return{ct:0,s:0,rt:c};let r=0;const l=i-u,a=c>.5?l/(2-i-u):l/(i+u);switch(i){case t:r=(o-e)/l+(o<e?6:0);break;case o:r=(e-t)/l+2;break;case e:r=(t-o)/l+4}return r/=6,{ct:r,s:a,rt:c}},t.C=function(n){if(!n)return;4===(n=n.replace(/^#/,"")).length?n.substring(0,3):8===n.length&&n.substring(0,6);3===n.length&&(n=n.split("").map((function(n){return n+n})).join(""));let t=parseInt(n.slice(0,2),16)/255,o=parseInt(n.slice(2,4),16)/255,e=parseInt(n.slice(4,6),16)/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92;let i=.4124564*t+.3575761*o+.1804375*e,u=.2126729*t+.7151522*o+.072175*e,c=.0193339*t+.119192*o+.9503041*e,r=.8189330101*i+.3618667424*u-.1288597137*c,l=.0329845436*i+.9293118715*u+.0361456387*c,a=.0482003018*i+.2643662691*u+.633851707*c;return r=Math.cbrt(r),l=Math.cbrt(l),a=Math.cbrt(a),.2104542553*r+.793617785*l-.0040720468*a},t.lt=function(){document.body.classList.add("asri-mode-transition"),setTimeout((()=>{document.body.classList.remove("asri-mode-transition")}),350)},t.Kn=function(n,t){if(!n||!t)return!1;let o,i;o=n.getBoundingClientRect(),i=t.getBoundingClientRect();return e(o,i)},t.st=function(n,t){return o(this,void 0,void 0,(function*(){return!(!n||!t)&&new Promise((o=>{let i,u;i=n.getBoundingClientRect(),u=t.getBoundingClientRect();o(e(i,u))}))}))},t.dt=function(n,t){if(!n.length||!t.length)return!1;const o=new Set(n),e=new Set(t);if(o.size!==e.size)return!1;for(const n of o)if(!e.has(n))return!1;return!0},t.$=function(n){return o(this,arguments,void 0,(function*(n,t=document,o=10,e=200){let i=0;for(;i<o;){const o=t.querySelector(n);if(o)return o;yield new Promise((n=>setTimeout(n,e))),i++}}))},t.nn=function(n){return o(this,arguments,void 0,(function*(n,t=document,o=10,e=200){let i=0;for(;i<o;){const o=t.querySelectorAll(n);if(o.length>0)return o;yield new Promise((n=>setTimeout(n,e))),i++}}))}},766:(n,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gn=t.Rn=t.An=void 0;t.An=class{constructor(n){this.it=(t,o)=>n(t,o),this.ft=new ResizeObserver(this.it)}observe(n,t){this.ft.observe(n,t)}disconnect(n){this.ft.disconnect(),n&&n()}unobserve(n){this.ft.unobserve(n)}};t.Rn=class{constructor(n){this.it=(t,o)=>n(t,o),this.vt=new MutationObserver(this.it)}observe(n,t){this.vt.observe(n,t)}disconnect(n){this.vt.disconnect(),n&&n()}},t.gn={attributes:!0,subtree:!0,attributeFilter:["class"],attributeOldValue:!0}},49:(n,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.p=t.P=void 0;const o=navigator.userAgent;let e=null,i=null,u=null,c=null,r=null,l=null,a=null,s=null,d=null,f=null,m=null,v=null,h=null,b=null,p=null,y=null,_=null,g=null;t.P={get Jn(){return null!=e?e:e=document.getElementById("layouts")},get wn(){return null!=i?i:i=document.querySelector(".layout__center")},get toolbar(){return null!=u?u:u=document.getElementById("toolbar")},get F(){return null!=c?c:c=document.getElementById("dockLeft")},get U(){return null!=r?r:r=document.getElementById("dockRight")},get W(){return null!=l?l:l=document.getElementById("dockBottom")},get status(){return null!=a?a:a=document.getElementById("status")},get D(){return null!=s?s:s=document.querySelector(".layout__dockl")},get Yn(){return null!=d?d:d=document.querySelector(".layout__dockr")},get qn(){return null!=f?f:f=document.querySelector(".layout__dockb")},get Zn(){return null!=m?m:m=document.getElementById("barSync")},get nt(){return null!=v?v:v=document.getElementById("barForward")},get ht(){return null!=h?h:h=document.getElementById("toolbarVIP")},get ot(){return null!=b?b:b=document.getElementById("drag")},get bt(){return null!=p?p:p=document.getElementById("barPlugins")},get tt(){return null!=y?y:y=document.getElementById("barSearch")},get O(){return null!=_?_:_=document.getElementById("barMode")},get yt(){return null!=g?g:g=document.getElementById("barMore")}},t.p={cn:navigator.platform.indexOf("Mac")>-1,S:navigator.platform.indexOf("Linux")>-1,rn:/Android/.test(o),M:!!document.getElementById("sidebar"),k:!o.startsWith("SiYuan")||o.indexOf("iPad")>-1||/Android/.test(o)&&!/(?:Mobile)/.test(o),Wn:document.body.classList.contains("body--window"),h:(/iOS/i.test(o)||/iPad/i.test(o))&&/AppleWebKit/i.test(o)&&o.startsWith("SiYuan/"),lang:window.siyuan.config.lang,_:CSS.supports("color","oklch(from red calc(l * 0.5) 0 h)"),ln:window.siyuan.config.readonly,A:window.siyuan.config.appearance.mode>0?"dark":"light"}},216:function(n,t,o){var e=this&&this.__awaiter||function(n,t,o,e){return new(o||(o=Promise))((function(i,u){function c(n){try{l(e.next(n))}catch(n){u(n)}}function r(n){try{l(e.throw(n))}catch(n){u(n)}}function l(n){var t;n.done?i(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(c,r)}l((e=e.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.u=t._t=t.Bn=void 0,t.Dn=r,t.V=function(n){const t="B"===n?c.P.qn:"L"===n?c.P.D:c.P.Yn;return!(!t||t.classList.contains("layout--float"))},t.H=function(n){const t="B"===n?c.P.qn:"L"===n?c.P.D:c.P.Yn;let o;if(!t)return!1;o="B"===n?t.style.height:t.style.width;return!(!o||"0px"===o)},t.Gn=function(n="L"){const t="B"===n?c.P.W:"L"===n?c.P.F:c.P.U;return!(!t||!t.classList.contains("fn__none"))},t.K=function(){return e(this,void 0,void 0,(function*(){return c.P.W||(yield(0,u.$)(".layout__dockb")),!(!c.P.W||c.P.W.classList.contains("fn__none"))}))},t.isFullScreen=function(){return!(!i.remote||!i.remote.getCurrentWindow().isFullScreen())},t.Hn=function(){return!(!c.P.status||!c.P.status.classList.contains("fn__none"))},t.bn=function(){return e(this,void 0,void 0,(function*(){return yield(0,u.nn)('.layout__center [data-type="wnd"]').then((n=>{t.u=n})),t.u}))};const i=o(571),u=o(629),c=o(49);function r(){var n,o;c.P.toolbar&&(t.Bn=(null===(n=c.P.toolbar)||void 0===n?void 0:n.scrollWidth)>c.P.toolbar.clientWidth,(null===(o=c.P.yt)||void 0===o?void 0:o.classList.contains("fn__none"))||(t.Bn=!0))}t.Bn=!1,t._t=(0,u.m)(r),t.u=document.querySelectorAll('.layout__center [data-type="wnd"]')},21:n=>{n.exports=require("@electron/remote")}},t={};function o(e){var i=t[e];if(void 0!==i)return i.exports;var u=t[e]={exports:{}};return n[e].call(u.exports,u,u.exports,o),u.exports}(()=>{const n=o(2),t=o(629);(0,n.fn)(),window.destroyTheme=()=>{(0,t.lt)(),(0,n.xn)()}})()})();
!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a=o("bpxeT"),i=o("l5bVx"),l=o("2TvXO"),c=o("iVM7n");o("i8Q71");var d,u=o("UL92Z"),s=o("faNkY"),f=(u=o("UL92Z"),s=o("faNkY"),c=o("iVM7n"),o("h6c0i")),v={cardList:document.querySelector(".favorites-list")};function p(){return(p=e(a)(e(l).mark((function t(){var r,n,o;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d.page=1,t.prev=1,t.next=4,d.getRecipes();case 4:r=t.sent,console.log(r),n=u.default.load("galleryItem"),o=[],console.log(void 0===n?"undefined":e(i)(n)),n.map((function(e){r.results.map((function(t){e===t._id&&(o.push(t),console.log(t))}))})),v.cardList.innerHTML=(0,s.markupGalleryCard)(o),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}d=window.innerWidth<768?new(0,c.goitGlobalAPI)(6):window.innerWidth>768&&window.innerWidth<1280?new(0,c.goitGlobalAPI)(8):new(0,c.goitGlobalAPI)(9),function(){p.apply(this,arguments)}();var m=document.querySelector(".favorites-list");console.log(m);var y=[];"galleryItem"in window.localStorage&&(y=u.default.load("galleryItem")),window.addEventListener("load",(function(){var e=document.querySelectorAll(".checkbox-favorite"),t=!0,r=!1,n=void 0;try{for(var o,a=y[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value,l=!0,c=!1,d=void 0;try{for(var u,s=e[Symbol.iterator]();!(l=(u=s.next()).done);l=!0){var f=u.value;i===f.dataset.id&&(f.checked=!0)}}catch(e){c=!0,d=e}finally{try{l||null==s.return||s.return()}finally{if(c)throw d}}}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}})),void 0!==m&&m.addEventListener("click",(function(e){var t=y.indexOf("".concat(e.target.dataset.id));if(-1==t&&(t=0),"INPUT"===e.target.nodeName)return console.log(e.target.dataset.id),e.target.checked?y.push("".concat(e.target.dataset.id)):y.splice(y.indexOf("".concat(e.target.dataset.id)),1),u.default.save("galleryItem",y)}));var g=document.querySelector(".modal-order-close"),w=document.querySelector(".modal-order-backdrop"),h=document.querySelector(".header-busket-order"),b=document.querySelector(".modal-order-form"),k=document.querySelector("#input_name"),L=document.querySelector("#input_email"),x=document.querySelector("#input_phone"),S=document.querySelector(".user-message"),q=document.querySelector(".modal-order-loader"),E=document.querySelector(".modal-order-btn");function I(e){w.classList.remove("modal-order-backdrop-active"),g.removeEventListener("click",I),w.removeEventListener("click",N),window.removeEventListener("keydown",O)}function N(e){e.target===w&&I()}function O(e){"Escape"===e.key&&I()}function T(){return(T=e(a)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.createOrder(n);case 3:e.sent,f.Notify.success("We got your opinion!"),w.classList.remove("modal-order-backdrop-active"),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0),f.Notify.failure("Oops, something wrong"),b.reset(),w.classList.remove("modal-order-backdrop-active");case 14:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}h.addEventListener("click",(function(e){w.classList.add("modal-order-backdrop-active"),g.addEventListener("click",I),w.addEventListener("click",N),window.addEventListener("keydown",O)})),b.addEventListener("submit",(function(e){e.preventDefault();var t=new(0,c.goitGlobalAPI),r={name:k.value,phone:x.value,email:L.value,comment:S.value};q.style.display="block",E.classList.add("non-active-btn"),setTimeout((function(){!function(e,t){T.apply(this,arguments)}(t,r),q.style.display="none",E.classList.remove("non-active-btn")}),2e3)}))}();
//# sourceMappingURL=favorites.747b91c6.js.map

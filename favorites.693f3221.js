!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},n.parcelRequired7c6=o);var l=o("bpxeT"),i=o("l5bVx"),a=o("2TvXO"),d=o("iVM7n");o("i8Q71");var u,c=o("UL92Z"),f=(c=o("UL92Z"),o("faNkY")),s=(d=o("iVM7n"),{cardList:document.querySelector(".favorites-list")}),p=(document.querySelector(".gallery-list"),[]);function v(){return(v=e(l)(e(a).mark((function n(){var r,t,o;return e(a).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u.page=1,n.prev=1,n.next=4,u.getRecipes();case 4:r=n.sent,console.log(r),t=c.default.load("galleryItem"),o=[],console.log(void 0===t?"undefined":e(i)(t)),t.map((function(e){r.results.map((function(n){e===n._id&&(o.push(n),console.log(n))}))})),s.cardList.innerHTML=(0,f.markupGalleryCard)(o),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}"galleryItem"in window.localStorage&&(p=c.default.load("galleryItem")),window.addEventListener("load",(function(){var e=document.querySelectorAll(".checkbox-favorite"),n=!0,r=!1,t=void 0;try{for(var o,l=p[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value,a=!0,d=!1,u=void 0;try{for(var c,f=e[Symbol.iterator]();!(a=(c=f.next()).done);a=!0){var s=c.value;i===s.dataset.idName&&(s.checked=!0)}}catch(e){d=!0,u=e}finally{try{a||null==f.return||f.return()}finally{if(d)throw u}}}}catch(e){r=!0,t=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw t}}})),console.log(123),u=window.innerWidth<768?new(0,d.goitGlobalAPI)(6):window.innerWidth>768&&window.innerWidth<1280?new(0,d.goitGlobalAPI)(8):new(0,d.goitGlobalAPI)(9),function(){v.apply(this,arguments)}()}();
//# sourceMappingURL=favorites.693f3221.js.map

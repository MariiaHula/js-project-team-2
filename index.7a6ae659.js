!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var o=a("bpxeT"),i=a("2TvXO"),l=a("iVM7n");a("9Di7p"),a("8S4BJ"),a("i8Q71"),a("UL92Z"),a("kOnCK"),a("98X1s"),a("fzILn"),a("Vzp7G");var c,d=a("faNkY"),u=(l=a("iVM7n"),{cardList:document.querySelector(".favorites-list")}),s=document.querySelector(".gallery-list"),f=[];function p(){return(p=e(o)(e(i).mark((function t(){var n,r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.page=1,e.prev=1,e.next=4,c.getRecipes();case 4:n=e.sent,console.log(n),r=window.localStorage.getItem("galleryItem").split(","),r.map((function(e){return n.results.map((function(t){e===t.id&&(u.cardList.innerHTML=(0,d.markupGalleryCard)(t))}))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}"galleryItem"in window.localStorage&&(f=window.localStorage.getItem("galleryItem").split(",")),window.addEventListener("load",(function(){var e=document.querySelectorAll(".checkbox-favorite");f.map((function(t){var n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var l=o.value;if(t===l.dataset.idName)return l.checked=!0}}catch(e){r=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}}))})),s.addEventListener("click",(function(e){var t=f.indexOf("".concat(e.target.dataset.idName));if(-1==t&&(t=0),"INPUT"===e.target.nodeName)return e.target.checked?f.push("".concat(e.target.dataset.idName)):f.splice(f.indexOf("".concat(e.target.dataset.idName)),1),window.localStorage.setItem("galleryItem",f)})),c=window.innerWidth<768?new(0,l.goitGlobalAPI)(6):window.innerWidth>768&&window.innerWidth<1280?new(0,l.goitGlobalAPI)(8):new(0,l.goitGlobalAPI)(9),function(){p.apply(this,arguments)}(),console.log(1223)}();
//# sourceMappingURL=index.7a6ae659.js.map

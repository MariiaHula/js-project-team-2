var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var l=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,l.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=l);var t=l("da7oM");l("bUb57");var i=l("31u3U"),r=l("34HY9");i=l("31u3U"),r=l("34HY9"),t=l("da7oM");const a={cardList:document.querySelector(".favorites-list")};let d;d=window.innerWidth<768?new(0,t.goitGlobalAPI)(6):window.innerWidth>768&&window.innerWidth<1280?new(0,t.goitGlobalAPI)(8):new(0,t.goitGlobalAPI)(9),async function(){d.page=1;try{const e=await d.getRecipes();console.log(e);const o=i.default.load("galleryItem");let n=[];console.log(typeof o),o.map((o=>{e.results.map((e=>{o===e._id&&(n.push(e),console.log(e))}))})),a.cardList.innerHTML=(0,r.markupGalleryCard)(n)}catch(e){console.log(e)}}();
//# sourceMappingURL=favorites.dedd7ff2.js.map

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("da7oM");o("bUb57");var a=o("31u3U"),i=(n=o("da7oM"),o("34HY9")),l=o("2H64r");o("kV37o"),o("fb9GJ");var c=o("iQIUW");o("aaQnt");const s=document.querySelector(".modal-order-close"),d=document.querySelector(".modal-order-backdrop"),u=document.querySelector(".header-busket-order"),f=document.querySelector(".modal-order-form"),m=document.querySelector("#input_name"),y=document.querySelector("#input_email"),v=document.querySelector("#input_phone"),p=document.querySelector(".user-message"),b=document.querySelector(".modal-order-loader"),g=document.querySelector(".modal-order-btn");function k(e){d.classList.remove("modal-order-backdrop-active"),s.removeEventListener("click",k),d.removeEventListener("click",L),window.removeEventListener("keydown",h)}function L(e){e.target===d&&k()}function h(e){"Escape"===e.key&&k()}u.addEventListener("click",(function(e){d.classList.add("modal-order-backdrop-active"),s.addEventListener("click",k),d.addEventListener("click",L),window.addEventListener("keydown",h)})),f.addEventListener("submit",(function(e){e.preventDefault();const t=new(0,n.goitGlobalAPI),r={name:m.value,phone:v.value,email:y.value,comment:p.value};b.style.display="block",g.classList.add("non-active-btn"),setTimeout((()=>{!async function(e,t){try{await e.createOrder(t);c.Notify.success("We got your opinion!"),d.classList.remove("modal-order-backdrop-active")}catch(e){console.log("Error",e),c.Notify.failure("Oops, something wrong"),f.reset(),d.classList.remove("modal-order-backdrop-active")}}(t,r),b.style.display="none",g.classList.remove("non-active-btn")}),2e3)}));const w=document.querySelector(".favorites-list"),q=document.querySelector(".js-favorites-wrapper"),E=document.querySelector(".js-bloked");let S,T=new(0,n.goitGlobalAPI)(288);!async function(){try{let e=a.default.load("favorites-recipes"),t=null;if(Array.isArray(e)){const r=e.map((e=>T.getRecipesById(e)));t=await Promise.all(r)}else t=[],E.classList.remove("is-hidden");const r=function(e){let t=["All categories"];if(!(Array.isArray(e)&&e.length>0))return"";t=t.concat(e.map((e=>e.category)).filter(((e,t,r)=>r.indexOf(e)===t)));return t.map((e=>`\n        <li>\n        <button class="favorites-btn" type="button" data-category="${e}">${e}</button>\n        </li>`)).join("")}(t);if(q.innerHTML=r,w.innerHTML=(0,i.markupGalleryCard)(t),""===r)return void c.Notify.failure("There is no such recipe in the favorites");E.classList.add("is-hidden"),(0,i.checkFavorites)(".favorites-list");const o=q.children;for(li of o){let e=li.children[0];q.addEventListener("click",(r=>{let o=r.target;if(o===e){if("All categories"!==o.dataset.category){let e=t.filter((e=>e.category===o.dataset.category));w.innerHTML=(0,i.markupGalleryCard)(e)}else w.innerHTML=(0,i.markupGalleryCard)(t);(0,i.checkFavorites)(".favorites-list")}}))}}catch(e){console.log(e)}S=document.querySelector(".favorites-list"),S.addEventListener("click",l.openModalGaleryRecipesPre)}();
//# sourceMappingURL=favorites.60228fe6.js.map

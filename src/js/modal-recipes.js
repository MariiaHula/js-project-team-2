const refs = {
    gallery_btn: document.querySelector(".gallery-btn"),
    recipes_container: document.querySelector(".recipes-modal-container"),
    recipes_wrap: document.querySelector(".modal-recipes-wrap"),
    
}
console.log(refs.recipes_container);

refs.gallery_btn.addEventListener("click", openModalRecipes);

function openModalRecipes(e) {
    refs.recipes_container.classList.add("active");
    refs.recipes_wrap.classList.add("active");

}


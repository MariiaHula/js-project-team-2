const refs = {
    gallery_btn: document.querySelector(".gallery-btn"),
    recipes_container: document.querySelector(".recipes-modal-container"),
    recipes_wrap: document.querySelector(".modal-recipes-wrap"),
    close_btn: document.querySelector(".close-recipes-btn")
    
}

refs.gallery_btn.addEventListener("click", openModalRecipes);

function openModalRecipes(e) {
    refs.recipes_container.classList.add("active");
    refs.recipes_wrap.classList.add("active");

    // Додаємо слухачі для закриття модального вікна
    refs.recipes_container.addEventListener("click", closeModalRecipesOnClick);
    refs.close_btn.addEventListener("click", closeModalRecipes);
    window.addEventListener("keydown", closeModalRecipesOnEsc);

}

function closeModalRecipesOnClick(e) {
    if (e.target === refs.recipes_container) {
        closeModalRecipes(e);
     }
}

function closeModalRecipes(e) {

    console.log("targer", e.target);
    console.log("currentTarget", e.currentTarget);

    refs.recipes_container.classList.remove("active");
    refs.recipes_wrap.classList.remove("active");

    // Видаляємо слухачі
    refs.recipes_container.removeEventListener("click", closeModalRecipes);
    refs.close_btn.removeEventListener("click", closeModalRecipes);
    window.removeEventListener("keydown", closeModalRecipesOnEsc);
    
}

function closeModalRecipesOnEsc(e) {
    if (e.key === "Escape") {
        closeModalRecipes(e);
    }
}
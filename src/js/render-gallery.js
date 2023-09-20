
import iconSvg from '../images/icon.svg';
import localStorage from '../js/localStorage';
export function markupGalleryCard(arr) {

  if (!Array.isArray(arr)) {

    return '';
  }
  const markup = arr.map(cardEl => {
    return `
       <li class="gallery-item" data-category="${cardEl.category}" data-id=" ${cardEl._id}">
          <label class="label" >
           <input type="checkbox" name="favorite" class="checkbox-favorite" >
          <svg class='gallery-icon-checkbox  '>
            <use href="${iconSvg}#icon-heart" class="icon-svg-heart"> </use>
          </svg>
        </label>
          <img
              class="gallery-image"
              style="
                background:
                  linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%),        
                  
                  url(${cardEl.thumb});
                  
                background-position: -36.5px 0px;
                background-size: 129.2% 112.544%;
                background-repeat: no-repeat;
                clip-path: inset(1px 1px 1px 1px);
              "
           />
        <div class="gallery-wrap-descr-reciept-card">
          <h2 class="gallery-card-title">${cardEl.title}</h2>
          <h3 class="gallery-card-subtitle">${cardEl.description}</h3>
          <form class="gallery-form-rating">
           <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </div>
            

            <button type="button" class="gallery-btn" data-id="${cardEl._id}">See recipe</button>
          </form>
        </div>
      </li>
    `

  }).join('');
  
  return markup;

}



function onrecipeCartClick() {
  let recipeArray = [];

  if (!recipeCart.checked) {

//delite
  }
  if (recipeCart.checked) {

    const fevRes = document.querySelector('.gallery-item').getAttribute('data-id');
     
  }
   console.log(33);
}
console.log(1);


setTimeout(() => {
  const recipeCart = document.querySelector('.checkbox-favorite');
  const favoritesList = document.querySelector('.gallery-item');
  recipeCart.addEventListener('click', onrecipeCartClick);

}, 2);






{/* <div class="gallery-card-stars-rating">
  <label class="gallery-average-rating">${cardEl.rating}
    <input type="radio" name="rating" value="5" class="gallery-star-ckeckbox" />
    <span class='galerry-checkbox-icon' ></span>
    <input type="radio" name="rating" value="4" class="gallery-star-ckeckbox" />
    <input type="radio" name="rating" value="3" class="gallery-star-ckeckbox" />
    <input type="radio" name="rating" value="2" class="gallery-star-ckeckbox" />
    <input type="radio" name="rating" value="1" class="gallery-star-ckeckbox" />
  </label>
</div> */}
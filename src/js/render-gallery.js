import iconSvg from '../images/icon.svg';
import localStorage from './localStorage';

export function markupGalleryCard(arr) {
  if (!Array.isArray(arr)) {
    return '';
  }

  const markup = arr.map(cardEl => {

    let ratingStars = '';
    for (let i = 1; i <= 5; i++) {
      // Определяем, является ли текущая звезда активной (покрашенной)


      const isActiveStar = i <= cardEl.rating;
      const starClass = isActiveStar ? 'svg-star-gallery-active' : 'svg-star-gallery-noActive';
      ratingStars += `
    <svg class="${starClass}">
      <use href="${iconSvg}#icon-star"></use>
    </svg>
  `;
    }

    return `
      <li class="gallery-item" data-category="${cardEl.category}" id="${cardEl._id}">
        <label class="label" >
           <input type="checkbox" name="favorite" class="checkbox-favorite" data-id="${cardEl._id}">
          <svg class='gallery-icon-checkbox  '>
            <use href="${iconSvg}#icon-heart" class="icon-svg-heart"> </use>
          </svg>
        </label>
        <img
          class="gallery-image"
          loading="lazy"
          style="
            background:
              linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%),
              url(${cardEl.thumb});
            background-position: -36.5px 0px;
            background-size: 129.2% 112.544%;
            background-repeat: no-repeat;
            clip-path: inset(1px 1px 1px 2px);
          "
        />
        <div class="gallery-wrap-descr-reciept-card">
          <h2 class="gallery-card-title">${cardEl.title}</h2>
          <h3 class="gallery-card-subtitle">${cardEl.description}</h3>
          <form class="gallery-form-rating">
           <label class="gallery-average-rating">${cardEl.rating}</label>
            <div class="rate">
              ${ratingStars}
            </div>
            <button type="button" class="gallery-btn" id="${cardEl._id}">See recipe</button>
          </form>
        </div>
      </li>
    `;

  }).join('');

  return markup;
}


export function checkFavorites(listClass) {
  let localStorageArr = localStorage.load('favorites-recipes');
  const recipesAll = document.querySelector(listClass).children;

  for (let i = 0; i < recipesAll.length; i++) {
    const element = recipesAll[i];
    const heart = element.firstElementChild.firstElementChild;

    if (Array.isArray(localStorageArr)) {

      if (localStorageArr.includes(String(heart.dataset['id']))) {
        heart.checked = true;
      }
    }

    heart.addEventListener('click', event => {
      let localStorageArr = localStorage.load('favorites-recipes');
      if (!Array.isArray(localStorageArr)) {
        localStorageArr = [];
      }
      if (event.target.checked) {
        localStorageArr.push(String(event.target.dataset['id']))
        localStorage.save('favorites-recipes', localStorageArr);
      } else {
        console.log(event.target.dataset['id'])
        localStorage.remove('favorites-recipes', String(event.target.dataset['id']));
      }
    });
  }

}



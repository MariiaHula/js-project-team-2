import iconSvg from '../images/icon.svg';
import localStorage from './localStorage';
export function markupGalleryCard(arr) {

  if (!Array.isArray(arr)) {

    return '';
  }
  const markup = arr.map(cardEl => {


    let ratingStars = '';
    console.log(arr)
    for (let i = 1; i <= 5; i++) {
      ratingStars += `
        <input type="radio" id="star${i}" name="rate" value="${i}" checked />
        <label for="star${i}" title="${i} star">${i} star</label>
      `;
    }

    return `
      <li class="gallery-item" data-category="${cardEl.category}" data-id="${cardEl._id}">
        <label class="label">
          <input type="checkbox" name="favorite" class="checkbox-favorite">
          <svg class='gallery-icon-checkbox'>
            <use href="${iconSvg}#icon-heart" class="icon-svg-heart"></use>
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
           <label class="gallery-average-rating">${cardEl.rating}</label>
            <div class="rate">
              ${ratingStars}
            </div>
            <button type="button" class="gallery-btn" data-id="${cardEl._id}">See recipe</button>
          </form>
        </div>
      </li>
    `;
  }).join('');

  return markup;

}





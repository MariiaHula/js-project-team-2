import { goitGlobalAPI } from './axios_api';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick';

const goItGlobalAPI = new goitGlobalAPI();
const slider = document.querySelector('.js-slider');

goItGlobalAPI
  .getEvents()
  .then(res => {
    console.log(res);
    slider.innerHTML = renderSlider(res);

    $(document).ready(function () {
      $('.js-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        arrows: false,
        variableWidth: false,
      });
    });
  })
  .catch();

function renderSlider(arr) {
  const markup = arr
    .map(el => {
      return `
  <div class="slide-wrapper">
     <div class="slide one"><img src="${el.cook.imgUrl}"  alt="" width=351 height=442/></div>

      <div class="slide two">
         <img src="${el.topic.previewUrl}" alt="" width=351 height=442/>
          <p>${el.topic.name}</p>
          <p>${el.topic.area}</p>
      </div>
     <div class="slide"><img src="${el.topic.imgUrl}" alt="" width=351 height=442/></div>
 </div>`;
    })
    .join('');
  return markup;
}

import { goitGlobalAPI } from './axios_api';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick';

const goItGlobalAPI = new goitGlobalAPI();
const slider = document.querySelector('.js-slider');

goItGlobalAPI
  .getEvents()
  .then(res => {
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
  .catch(err => console.log(err));

function renderSlider(arr) {
  const markup = arr
    .map(el => {
      return `
  <div class="slide-wrapper">
     <div class="slide one"><img src="${el.cook.imgUrl}"  alt="" /></div>

      <div class="slide two">
         <img class="" src="${el.topic.previewUrl}" alt=""/>
          <p class="topic-name">${el.topic.name}</p>
          <p class="topic-area">${el.topic.area}</p>
      </div>
     <div class="slide three"><img clas="" src="${el.topic.imgUrl}" alt=""/></div>
 </div>`;
    })
    .join('');
  return markup;
}

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
     <div class="slide one"><img src="${el.cook.imgUrl}" clip-path: inset(1px 1px 1px 2px); alt="" /></div>

      <div class="slide two">
         <img class="hero-image" src="${el.topic.previewUrl}" alt=""/>
        <svg class='hero-light' xmlns="http://www.w3.org/2000/svg" width="351" height="442" viewBox="0 0 351 442">
  <g  filter="url(#filter0_f_65_649)">
    <ellipse cx="98.334" cy="98.3412" rx="98.334" ry="98.3412" transform="matrix(0.699884 -0.714257 0.716425 0.697664 35 225.471)" fill="#9BB537"/>
  </g>
  <defs>
    <filter id="filter0_f_65_649" x="-86.2136" y="-36.3401" width="520.98" height="520.37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="81" result="effect1_foregroundBlur_65_649"/>
    </filter>
  </defs>
</svg>
          <p class="topic-name">${el.topic.name}</p>
          <p class="topic-area">${el.topic.area}</p>
      </div>
     <div class="slide three"><img clas="" src="${el.topic.imgUrl}" alt=""/></div>
 </div>`;
    })
    .join('');
  return markup;
}

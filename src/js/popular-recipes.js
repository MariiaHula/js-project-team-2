
import { goitGlobalAPI } from "./axios_api"

// function skeletonMarkup() {
//     const markup = `<div class="popular-wrapper-skeleton">
//         <div class="box">

//           <div class="skeleton">
//             <div class="skeleton-left flex1">
//               <div class="square"></div>
//             </div>
//             <div class="skeleton-right flex2">
//               <div class="line h17 w40 m10"></div>
//               <div class="line"></div>
//               <div class="line h8 w50"></div>
//               <div class="line w75"></div>
//             </div>
//           </div>
//         </div>
//                 <div class="box">

//           <div class="skeleton">
//             <div class="skeleton-left flex1">
//               <div class="square"></div>
//             </div>
//             <div class="skeleton-right flex2">
//               <div class="line h17 w40 m10"></div>
//               <div class="line"></div>
//               <div class="line h8 w50"></div>
//               <div class="line w75"></div>
//             </div>
//           </div>
//         </div>             
//       </div>`;
    
//     return markup;   
// }


// function skeletonRender() {

//     let skeleton = ''; 
 
//     if (window.innerWidth > 768) {
            
//         for (i = 0; i < 2; i++) {
                
//                 skeleton += skeletonMarkup();  
//         }
        
//         } else {           
//                 skeleton += skeletonMarkup();     
//     }  
//     return skeleton;
// }

// const skeletonContainer = document.querySelector('.js-popular-big-wrapper');
// skeletonContainer.insertAdjacentHTML('beforeend', skeletonRender());

// const divSkeletonIsHidden = document.querySelectorAll('.popular-wrapper-skeleton');
// console.log(divSkeletonIsHidden);

function markupPopularRecipes(recipesArr) {
    const markup = recipesArr.map(recipe => {
        return `<li class="popular-recipes-item">
        <div class="link popular-recipes-link js-popular" id="${recipe._id}">
            <img class="popular-img-wrapper" src="${recipe.preview}" alt="${recipe.title}" />
            <div class="popular-wrapper-text">
            <h2 class="popular-recipes-head">${recipe.title}</h2>
            <p class="popular-recipes-text">${recipe.description}</p>
            </div>
          </div>
      </li>`
    }).join('');
    
    return markup;
}

const popularListEl = document.querySelector('.js-popular-list');

const popularRecipes = new goitGlobalAPI();

async function addPopularRecipes() {
    try {
        const data = await popularRecipes.getPopularRecipes();

        if (window.innerWidth < 768) {
            
            popularListEl.innerHTML = markupPopularRecipes([data[0], data[1]]); 

            // divSkeletonIsHidden.forEach( el=> {return  el.style.display ='none';})  

        } else {
            popularListEl.innerHTML = markupPopularRecipes(data);

            // divSkeletonIsHidden.forEach( el=> {return  el.style.display ='none';}) 
        }
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}
addPopularRecipes();


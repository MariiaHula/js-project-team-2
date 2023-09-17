const closeIconOrderModal = document.querySelector('.modal-order-close');
// const openOrderBtn = document.querySelector('.js-hero-btn');
const windowOrderModal = document.querySelector('.modal-order-backdrop-active');


closeIconOrderModal.addEventListener('click', closeOrderModal);
// openOrderBtn.addEventListener('click', openOrderModal);

function closeOrderModal(e) {
    windowOrderModal.classList.remove('modal-order-backdrop-active'); 
}

// function openOrderModal(e) {
//     windowOrderModal.classList.add('modal-order-backdrop-active'); 

// }

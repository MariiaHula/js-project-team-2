const closeIconOrderModal = document.querySelector('.modal-order-close');
const openOrderBtn = document.querySelector('.js-hero-btn');
const windowOrderModal = document.querySelector('.modal-order-backdrop');
const openOrderBusket = document.querySelector('.header-busket-order');



openOrderBtn.addEventListener('click', openOrderModal);
openOrderBusket.addEventListener('click', openOrderModal);


function closeOrderModal(e) {
    windowOrderModal.classList.remove('modal-order-backdrop-active'); 

     closeIconOrderModal.removeEventListener("click", closeOrderModal);
    windowOrderModal.removeEventListener("click", closeOrderByBcg);
    window.removeEventListener("keydown", closeOrderByEsc);
}

function openOrderModal(e) {
    windowOrderModal.classList.add('modal-order-backdrop-active'); 

    closeIconOrderModal.addEventListener('click', closeOrderModal);
     windowOrderModal.addEventListener('click', closeOrderByBcg);
    window.addEventListener('keydown', closeOrderByEsc)
}

function closeOrderByBcg(e) {
    if (e.target === windowOrderModal) {
        closeOrderModal(e);
     }
}

function closeOrderByEsc(e) {
     if (e.key === "Escape") {
        closeOrderModal(e);
    }
}
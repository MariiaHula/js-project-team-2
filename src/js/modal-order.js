import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { goitGlobalAPI } from "./axios_api";

const closeIconOrderModal = document.querySelector('.modal-order-close');
const openOrderBtn = document.querySelector('.js-hero-btn');
const windowOrderModal = document.querySelector('.modal-order-backdrop');
const openOrderBusket = document.querySelector('.header-busket-order');
const formOreder = document.querySelector('.modal-order-form');
const orderName = document.querySelector('#input_name');
const formEmail = document.querySelector('#input_email');
const formPhone = document.querySelector('#input_phone');
const formComment = document.querySelector('.user-message');
const orderSpinner = document.querySelector('.modal-order-loader');




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
formOreder.style.display = 'flex';
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



formOreder.addEventListener('submit', sendOrderForm);

function sendOrderForm(e) {
     
    e.preventDefault();
 
        const addOrderApi = new goitGlobalAPI();
        const dataAPI = {
            "name": orderName.value,
  "phone": formPhone.value,
  "email": formEmail.value,
  "comment": formComment.value,
    }

    formOreder.style.display = 'none';
     orderSpinner.style.display = 'block';

     setTimeout(() => {
        addOrderFn(addOrderApi, dataAPI);

        // Після завершення відправки, приховати спіннер
         orderSpinner.style.display = 'none';
         
    }, 2000);
    
    }

    async function addOrderFn(addOrderApi, dataAPI) {
    
            try {
                const data = await addOrderApi.createOrder(dataAPI);
                // console.log("Order", data);
                Notify.success('We got your opinion!');
   windowOrderModal.classList.remove('modal-order-backdrop-active');
        
            }
            catch (err) {
                console.log(`Error`, err);
                Notify.failure('Oops, something wrong');
                formOreder.reset();
                windowOrderModal.classList.remove('modal-order-backdrop-active');
            }
    
        } 
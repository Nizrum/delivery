
const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const cancelButton = document.querySelector('.cancel');

function toggleModal () {
    modal.classList.toggle('is-open');
}

cartButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
cancelButton.addEventListener('click', toggleModal);

new WOW().init();
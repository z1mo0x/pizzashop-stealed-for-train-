const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const buttons = document.querySelectorAll('.card__button');

buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.opacity = 1
        overlay.style.pointerEvents = 'all'
        popup.style.transform = 'translate(-50%, -35%) scale(1)'
    });
});

popup.addEventListener('click', (e) => {
    e.stopPropagation();
});

popupClose.addEventListener('click', (e) => {
    overlay.style.opacity = 0
    popup.style.transform = 'translate(-50%, -35%) scale(0)'
    overlay.style.pointerEvents = 'none'
});

overlay.addEventListener('click', (e) => {
    overlay.style.opacity = 0
    popup.style.transform = 'translate(-50%, -35%) scale(0)'
    overlay.style.pointerEvents = 'none'
});
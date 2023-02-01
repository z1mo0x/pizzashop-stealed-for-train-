const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popupClose = document.querySelectorAll('.popup__close');
const buttons = document.querySelectorAll('.card__button');
const buttonfeedback = document.querySelectorAll('[data-feedback-form="1"]');
const popupFeedback = document.querySelector('.popup-feedback');
const cardImg = document.querySelectorAll('.card__img');
const cards = document.querySelectorAll('.card')
const cardTitle = document.querySelectorAll('.card__title')
const pizzaPopup = document.querySelector('.popup__pizza');
const pizzaButton = document.querySelector('.popup__pizza_button');
const pizzaPopupTitle = document.querySelector('.popup__pizza_title');
const pizzaPopupSubtitle = document.querySelector('.popup__pizza_subtitle');
const pizzaPopupPrice = document.querySelector('.popup__pizza_price');

buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.opacity = 1;
        overlay.style.pointerEvents = 'all';
        popup.style.transform = 'translate(-50%, -35%) scale(1)';
    });
});

popup.addEventListener('click', (e) => {
    e.stopPropagation();
});

popupClose.forEach((element) => {
    element.addEventListener('click', () => {
        overlay.style.opacity = 0
        popup.style.transform = 'translate(-50%, -35%) scale(0)'
        overlay.style.pointerEvents = 'none'
        pizzaPopup.style.transform = 'translate(-50%, -35%) scale(0)'
        popupFeedback.style.transform = 'translate(-50%, -35%) scale(0)'
    });
})

overlay.addEventListener('click', () => {
    overlay.style.opacity = 0
    popup.style.transform = 'translate(-50%, -35%) scale(0)'
    overlay.style.pointerEvents = 'none'
    pizzaPopup.style.transform = 'translate(-50%, -35%) scale(0)'
    popupFeedback.style.transform = 'translate(-50%, -35%) scale(0)'
})


buttonfeedback.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.opacity = 1;
        overlay.style.pointerEvents = 'all';
        popupFeedback.style.transform = 'translate(-50%, -35%) scale(1)';
        popupFeedback.addEventListener('click', (element) => {
            element.stopPropagation();
        })
    });
});


cardImg.forEach((element, index) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.style.opacity = 1;
        overlay.style.pointerEvents = 'all';
        pizzaPopup.style.transform = 'translate(-50%, -35%) scale(1)';
        pizzaPopupSubtitle.textContent = cardTitle[index].textContent
        pizzaPopup.addEventListener('click', (element) => {
            element.stopPropagation();
        })
    })

});

pizzaButton.addEventListener('click', () => {
    pizzaPopup.style.transform = 'translate(-50%, -35%) scale(0)';
    popup.style.transform = 'translate(-50%, -35%) scale(1)';
})
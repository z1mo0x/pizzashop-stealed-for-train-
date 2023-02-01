const anchors = document.querySelectorAll('a[href^="#"]');
const hmtl = document.documentElement;
const body = document.body;


anchors.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        let destination = element.getAttribute('href')
        let top = element.getBoundingClientRect();
        let scrollPosition = top.top + window.scrollY
        let animateDuration = 1500;
        (hmtl, body).animate({

        }, animateDuration)
    })
});

document.addEventListener("DOMContentLoaded", function() {
    function moveSlide() {
        let count = 0;

        return function(){
            count++;
            if (count >= 4) {
                count = 1;
            }
            return count - 1;
        }
    }

    let slide = moveSlide()

    function makeSlideShow() {
        currentSlide = slide();
        const slideView = document.getElementById('selfie')
        slideView.setAttribute('src', `./images/slide${currentSlide}.jpg`)
    }

    slideShow = setInterval(makeSlideShow, 4000);
});

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("nav-container");
    
    if (!navbar) return;

    const scrollTop = window.scrollY;

    if (scrollTop > 75) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    };

});
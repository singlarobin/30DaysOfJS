const images = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide() {
    images.forEach(image => {
        const slideInAt = window.pageYOffset + window.innerHeight - (image.style.height / 2);
        const imageBottom = image.offsetTop + image.height;
        const ishalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.pageYOffset < imageBottom;
        if (ishalfShown && isNotScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));
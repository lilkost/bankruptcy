const createSlider = () => {
    const sliderMain = new Swiper('.slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3.1,
        spaceBetween: 30,

        pagination: {
            el: '.slider-pagination',
        },

        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },
    });
}

export default createSlider;
jQuery(document).ready(($) => {

    'use strict';

    let frontEnd = {

        actions: function() {
            

        },

        sliders: function() {

            var productPageSliderThumbs = new Swiper('.product-slider-thumbs', {
                direction: 'vertical',
                slidesPerView: 4,
            });

            var productPageSlider = new Swiper('.product-slider', {
                thumbs: {
                    swiper: productPageSliderThumbs
                }
            });


            var productListSlider1 = new Swiper('#product-list-slider1', {
                loop: false,
                slidesPerView: 4,

                navigation: {
                    nextEl: '.slider-button-next1',
                    prevEl: '.slider-button-prev1',
                },
            });

            var productListSlider2 = new Swiper('#product-list-slider2', {
                loop: false,
                slidesPerView: 4,

                navigation: {
                    nextEl: '.slider-button-next2',
                    prevEl: '.slider-button-prev2',
                },
            });

        },

        init: function() {
            frontEnd.actions();
            frontEnd.sliders();
        },

    }

    frontEnd.init();

});
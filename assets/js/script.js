jQuery(document).ready(($) => {

    'use strict';

    let frontEnd = {

        actions: function(){
            $('.close-modal').on('click', frontEnd.closeModal);
            $('.show-modal').on('click', frontEnd.showModal);

            $('.catlog-item').on('mouseenter', frontEnd.showBtn);
            $('.catlog-item').on('mouseleave', frontEnd.hideBtn);
        },

        scroll: function(){

            let contentWidth = $('.page-inner').innerHeight(),
                sidebartWidth = 872;

                console.log(contentWidth);
                console.log(sidebartWidth);

            if(contentWidth <= sidebartWidth){
                $('.sidebar').addClass('scroll-sidebar');
                $('.sidebar').scrollbar();

            }    

        },

        sliders: function(){
            var productPageSliderThumbs = new Swiper('.product-slider-thumbs', {
                direction: 'vertical',
                slidesPerView: 4,
            });

            var productPageSlider = new Swiper('.product-slider', {
                thumbs: {
                    swiper: productPageSliderThumbs
                }
            });

            var modalProductSliderThumbs = new Swiper('.modal-product-slider-thumbs', {
                direction: 'vertical',
                slidesPerView: 3,
            });

            var modalProductSlider = new Swiper('.modal-product-slider', {
                thumbs: {
                    swiper: modalProductSliderThumbs
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

            var productGroupSlider1 = new Swiper('#product-group-slider1', {
                loop: false,
                slidesPerView: 3,

                navigation: {
                    nextEl: '.slider-button-next1',
                    prevEl: '.slider-button-prev1',
                },
            });

            var productGroupSlider2 = new Swiper('#product-group-slider2', {
                loop: false,
                slidesPerView: 3,

                navigation: {
                    nextEl: '.slider-button-next2',
                    prevEl: '.slider-button-prev2',
                },
            });

            var productGroupSlider3 = new Swiper('#product-group-slider3', {
                loop: false,
                slidesPerView: 3,

                navigation: {
                    nextEl: '.slider-button-next3',
                    prevEl: '.slider-button-prev3',
                },
            });
        },

        closeModal: function(e){
            let target = e.target.className;

            if(target.includes('close-modal')){
               $('.modal-cover').fadeOut('500'); 
            }
        },

        showModal: function(){
            $('.modal-cover').fadeIn('500').css('display', 'flex');
            return false;
        },

        showBtn: function(){
            let itemID = $(this).attr('id');
            $('#' + itemID + ' .catlog-item__button').addClass('show');
        },

        hideBtn: function(){
            let itemID = $(this).attr('id');
            $('#' + itemID + ' .catlog-item__button').removeClass('show');
        },

        init: function(){
            frontEnd.actions();
            frontEnd.sliders();
            frontEnd.scroll();
        },

    }

    frontEnd.init();

});
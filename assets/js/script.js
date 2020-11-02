jQuery(document).ready(($) => {

    'use strict';

    let frontEnd = {

        actions: function(){
            $('.close-modal').on('click', frontEnd.closeModal);
            $('.show-modal').on('click', frontEnd.showModal);
            $('.catalog-filter-tag_item').on('click', frontEnd.addTag);
            $('.remove-tag').on('click', frontEnd.removeTag);
            $('.catalog-filter-action').on('click', frontEnd.filterToggle);
            $('.catalog-filter-btn-reset').on('click', frontEnd.filterReset);

            $('.catlog-item').on('mouseenter', frontEnd.showBtn);
            $('.catlog-item').on('mouseleave', frontEnd.hideBtn);
        },

        scroll: function(){

            let contentWidth = $('.page-inner').innerHeight(),
                sidebartWidth = 872;

            if(contentWidth <= sidebartWidth){
                $('.sidebar').addClass('scroll-sidebar');
                $('.sidebar').scrollbar();

            }    

        },

        addTag: function(e){
            let target = e.target.className;

            if(target.includes('catalog-filter-tag_item-active')){
                $(this).removeClass('catalog-filter-tag_item-active');
            } else {
                $(this).addClass('catalog-filter-tag_item-active');
            }
            return false;
        },

        removeTag: function(e){
            $(this).parent().removeClass('catalog-filter-tag_item-active');
            return false;
        },

        filterReset: function(e){

            $('.catalog-filter-tag_item').removeClass('catalog-filter-tag_item-active');
            $('.catalog-filter-attribute-checkbox').prop('checked', false);

            return false;
        },

        filterToggle: function(e){
            let action = $(this).attr('action');

            if(action == 'hide'){
                $(this).attr('action', 'show');
                $(this).html('Показать фильтры');
                $('.catalog-filter').slideUp(300);
            } else {
                $(this).attr('action', 'hide');
                $(this).html('Скрыть фильтры');
                $('.catalog-filter').slideDown(300);
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
            $('#' + itemID + ' .catlog-item-image img').addClass('zoom');
        },

        hideBtn: function(){
            let itemID = $(this).attr('id');
            $('#' + itemID + ' .catlog-item__button').removeClass('show');
            $('#' + itemID + ' .catlog-item-image img').removeClass('zoom');
        },

        init: function(){
            frontEnd.actions();
            frontEnd.sliders();
            frontEnd.scroll();
        },

    }

    frontEnd.init();

});
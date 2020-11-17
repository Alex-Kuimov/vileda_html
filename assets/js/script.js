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

            $('.minus').on('click', frontEnd.productCounter);
            $('.plus').on('click', frontEnd.productCounter);

            $('body').on('keyup', '.count', frontEnd.productCounter);

            $('.product-tab-title__item').on('click', frontEnd.tabs);

            $('.catalog-filter-price').on('click', frontEnd.selectShow);
            $('.catalog-filter-price__item').on('click', frontEnd.selectHide);

            $('.checkout-delivery').on('click', frontEnd.delivery);

        },

        scroll: function(){
            let contentWidth = $('.page-inner').innerHeight(),
                sidebartWidth = 902;

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
                $('.catalog-filter').slideUp(500);
            } else {
                $(this).attr('action', 'hide');
                $(this).html('Скрыть фильтры');
                $('.catalog-filter').slideDown(500);
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

        productCounter: function(e){

            let action = $(this).attr('data-action'),
                itemID = $(this).attr('data-id'),
                price = parseFloat($('#price-'+itemID).attr('data-price')),
                min = parseInt($('#count-'+itemID).attr('data-min')),
                count = parseInt($('#count-'+itemID).val()),
                total = parseFloat($('#price-'+itemID).attr('data-price'));

            if(e.type == 'keyup'){
                $(this).val($(this).val().replace(/[^\d/,]/, ''));
            }

            if(e.type == 'click'){
           
                if(action == 'minus'){
                    if(count > min){
                        count = count - 1; 
                    }
                }

                if(action == 'plus'){
                    count = count + 1; 
                    $('#minus-'+itemID).removeClass('disable');
                }
            }    

            if(count >= min){

                $('#minus-'+itemID).removeClass('disable');

                total = price * count;

                total = total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& '); 
                total = total.replace('.00', '');   

                $('#count-'+itemID).val(count);
                $('#price-'+itemID).html(total);

                $('.add-to-cart').removeClass('disable');
            } else {

                $('#minus-'+itemID).addClass('disable');
                $('.add-to-cart').addClass('disable');
                
            } 

            if(count == min){
                $('#minus-'+itemID).addClass('disable');
            }
        },

        closeModal: function(e){
            let target = e.target.className;

            if(target.includes('close-modal')){
               $('.modal-cover').fadeOut('500'); 
            }
        },

        showModal: function(){
            $('.modal-cover').fadeIn('500').css('display', 'flex');


            var modalProductSliderThumbs = new Swiper('.modal-product-slider-thumbs', {
                direction: 'vertical',
                slidesPerView: 3,
            });

            var modalProductSlider = new Swiper('.modal-product-slider', {
                thumbs: {
                    swiper: modalProductSliderThumbs
                }
            });
            
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

        tabs: function(){
            let itemID = $(this).attr('data-id');
            $('.product-tab-title__item').removeClass('active');
            $(this).addClass('active');
            $('.product-tab__item').addClass('display-none');
            $('#'+itemID).removeClass('display-none');
        },

        selectShow: function(){
            let positon = $(this).attr('data-position');

            if(positon == 'hide'){
                $(this).attr('data-position', 'show');
                $('.catalog-filter-price-wrap').slideDown(300);
                $('.catalog-filter-price img').removeClass('rotate');
            } else{
                $(this).attr('data-position', 'hide');
                $('.catalog-filter-price-wrap').slideUp(300);
                $('.catalog-filter-price img').addClass('rotate');
            }
        },

        selectHide: function(){
            $('.catalog-filter-price-wrap').slideUp(300);
            $('.catalog-filter-price img').addClass('rotate');
        },

        delivery: function(){
            let type = $(this).val();

            if(type == 'pickup'){
                $('.checkout-street').css('display', 'none');
                $('.checkout-input-wrap').css('display', 'none');
            } else {
                $('.checkout-street').css('display', 'inline-block');
                $('.checkout-input-wrap').css('display', 'flex');
            } 
        },

        init: function(){
            frontEnd.actions();
            frontEnd.sliders();
            frontEnd.scroll();
        },

    }

    frontEnd.init();

});
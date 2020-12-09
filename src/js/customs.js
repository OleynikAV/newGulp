let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    freeMode: true,
    slidesPerView: 4,
    initialSlide: 0,
    loop:true,
    spaceBetween: 0,
    preloadImages:false,
    lazy: {
        loadOnTransitionStart:false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
$(window).on('resize',function() {
   mySwiper.init();
    mySwiper_reviews.init();
    mySwiper_gift.init();

});

$('#number_phone').mask('+38(000) 00-00-000',{'translation': {0: {pattern: /[0-9]/}}});
$('#number_phone_main').mask('+38(000) 00-00-000',{'translation': {0: {pattern: /[0-9]/}}});

$('.checkbox_size:checkbox').click(function(){
    if ($(this).is(':checked')) {
        $(this).parent().addClass('select_size');
    } else {
        $(this).parent().removeClass('select_size');
    }
});
$('.stepDown').on('click', function (){
    $('.amount').val(parseInt($('.amount').val())-1);
    if ($('.amount').val() < 0){
        $('.amount').val(0)
    }
})
$('.stepUp').on('click', function (){
    $('.amount').val(parseInt($('.amount').val())+1);
    if ($('.amount').val() > 100){
        $('.amount').val(100)
    }
})
let mySwiper_gift = new Swiper('.swiper-container_gift', {
    // Optional parameters
    loop: false,
    freeMode:true,
    slidesPerView: 3,
})
let mySwiper_reviews = new Swiper('.swiper-container-reviews', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    pagination: {
        el: '.swiper-pagination-reviews',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: false,
})

$('.popup_callback_button').on('click', function (){
    $('.popup_callback').hide(500)
})

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

$('.number_phone').mask('+38(000) 00-00-000',{'translation': {0: {pattern: /[0-9]/}}});

$('.checkbox_size:checkbox').click(function(){
    if ($(this).is(':checked')) {
        $(this).parent().addClass('select_size');
    } else {
        $(this).parent().removeClass('select_size');
    }
});
$('.checkbox_size_popup_buy:checkbox').click(function(){
    if ($(this).is(':checked')) {
        $(this).parent().addClass('select_size');
    } else {
        $(this).parent().removeClass('select_size');
    }
});
$('.switch_checkbox:checkbox').click(function(){
    if ($(this).is(':checked')) {
        $('.popup_buy').addClass('popup_buy_checked');
        $('.popup_buy_checkbox_text').css({'color' : '#483F42'});
        $('.callback_header_close').css({'top' : '35px'});
        $('.store_description').show(300);
        $('.callback_header_title,.callback_header_text,#form_callback_foo').css({'display' : 'none'});

    } else {
        $('.popup_buy').removeClass('popup_buy_checked');
        $('.popup_buy_checkbox_text').css({'color' : ''});
        $('.callback_header_close').css({'top' : ''});
        $('.callback_header_title,.callback_header_text,#form_callback_foo,.store_description').css({'display' : ''});
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
    $('.popup_callback_header').hide(500)
    $('.popup_buy').hide(500)

})
$('.callback').on('click', function (){
    $('.popup_callback_header').show(500)
})
$('.amount_button').on('click', function (){
    $('.popup_buy').show(500)
})
$('.callback_header_close').on('click', function (){
    $('.popup_callback_header').hide(500)
    $('.popup_buy').hide(500)

})
$('#form_callback_one').submit(function (event){
    event.preventDefault();
    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function (){

        },
        success: function (result){
            $('form').trigger('reset');
            $('.popup_callback_one').show(500)
            console.log('true push form form_callback_one')
        },
        error: function (result) {
            console.log(this.error())
        }
    })
})
$('#form_callback_two').submit(function (event){
    event.preventDefault();
    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function (){

        },
        success: function (result){
            $('form').trigger('reset');
            $('.popup_callback_two').show(500)
            console.log('true push form form_callback_two')

        },
        error: function (result) {
            console.log(this.error())
        }
    })
})
$('#form_callback_three').submit(function (event){
    event.preventDefault();
    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function (){

        },
        success: function (result){
            $('form').trigger('reset');
            $('.popup_callback_three').show(500)
            setTimeout(()=>
            $('.popup_callback_header,.popup_callback_three').hide(500)
                ,3000);


            console.log('true push form form_callback_three')
        },
        error: function (result) {
            console.log(this.error())
        }
    })
})
$('#form_callback_foo').submit(function (event){
    event.preventDefault();
    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function (){

        },
        success: function (result){
            $('form').trigger('reset');
            $('.popup_callback_foo').show(500)
            setTimeout(()=>
            $('.popup_buy,.popup_callback_foo').hide(500)
                ,3000);


            console.log('true push form form_callback_three')
        },
        error: function (result) {
            console.log(this.error())
        }
    })
})



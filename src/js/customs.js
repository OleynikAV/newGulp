let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    freeMode: true,
    slidesPerView: 4,
    initialSlide: 1,
    loop:true,
    spaceBetween: 0,
    preloadImages:true,
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
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: false,
})
let mySwiper_other_models = new Swiper('.swiper-container-other_models', {
    // Optional parameters
    slidesPerView: 4,
    initialSlide: 0,
    mousewheel: false,
})
$(window).on('resize',function() {
   mySwiper.init();
    mySwiper_reviews.init();
    mySwiper_gift.init();
    mySwiper_other_models.init();

});
$('.number_phone').mask('+38(000)00-000-000',{'translation': {0: {pattern: /[0-9]/}}});
$('.stepDown').on('click', function (){
    $('.amount').val(parseInt($('.amount').val())-1);
    if ($('.amount').val() < 1){
        $('.amount').val(1)
    }
})
$('.stepUp').on('click', function (){
    $('.amount').val(parseInt($('.amount').val())+1);
    if ($('.amount').val() > 100){
        $('.amount').val(100)
    }
})
$('.checkbox_size:checkbox').on('click',function(){
    if ($(this).is(':checked')) {
        $(this).parent().addClass('select_size');
    } else {
        $(this).parent().removeClass('select_size');
    }
});
$('.checkbox_size_popup_buy:checkbox').on('click',function(){
    if ($(this).is(':checked')) {
        $(this).parent().addClass('select_size');
    } else {
        $(this).parent().removeClass('select_size');
    }
});
$('.switch_checkbox:checkbox').on('click',function(){
    if ($(this).prop('checked')) {
        $('.popup_buy').addClass('popup_buy_checked');
        $('.popup_buy_checkbox_text').css({'color' : '#483F42'});
        $('.callback_header_close').css({'top' : '35px'});
        $('.store_description').show(300);
        $('.callback_header_title,.callback_header_text,#form_callback_foo').css({'display' : 'none'});
        console.log($(this).prop('checked'))

    } else if($(this).prop('checked') === false) {
        $('.popup_buy').removeClass('popup_buy_checked');
        $('.popup_buy_checkbox_text').css({'color' : ''});
        $('.callback_header_close').css({'top' : ''});
        $('.callback_header_title,.callback_header_text,#form_callback_foo,.store_description').css({'display' : ''});
    }
});

$('.switch_checkbox:checkbox').on('click',function(){
    if ($(this).prop('checked')) {
        $('.popup_buy_main').addClass('popup_buy_checked');
        $('.popup_buy_checkbox_text_main').css({'color' : '#483F42'});
        $('.callback_header_close').css({'top' : '35px'});
        $('.store_description').show(300);
        $('.callback_header_title,.callback_header_text,#form_callback_five').css({'display' : 'none'});
        console.log($(this).prop('checked'))

    } else if($(this).prop('checked') === false) {
        $('.popup_buy_main').removeClass('popup_buy_checked');
        $('.popup_buy_checkbox_text_main').css({'color' : ''});
        $('.callback_header_close').css({'top' : ''});
        $('.callback_header_title,.callback_header_text,#form_callback_five,.store_description').css({'display' : ''});
    }
});
$('.callback_header_close').on('click', function (){
    $('.popup_callback_header').hide(500)
    $('.popup_buy,.popup_buy_main').hide(500)
    $('.switch_checkbox:checkbox').prop('checked', false)
    $('.popup_buy,.popup_buy_main').removeClass('popup_buy_checked');
    $('.popup_buy_checkbox_text,.popup_buy_checkbox_text').css({'color' : ''});
    $('.callback_header_close').css({'top' : ''});
    $('.callback_header_title,.callback_header_text,#form_callback_foo,#form_callback_five,.store_description').css({'display' : ''});
})

$('.popup_callback_button').on('click', function (){
    $('.popup_callback').hide(500)
    $('.popup_callback_header').hide(500)
    $('.popup_buy').hide(500)

})
$('.callback').on('click', function (){
    $('.popup_callback_header').show(500)
})
$('.amount_button_header').on('click', function (){
    $('.popup_buy').show(500)
})
$('.amount_button_main').on('click', function (){
    $('.popup_buy_main').show(500)
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
$('#form_callback_five').submit(function (event){
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
            $('.popup_callback_five').show(500).css({'top':'-20px'})
            setTimeout(()=>
            $('.popup_buy,.popup_callback_foo').hide(500)
                ,30000000);


            console.log('true push form form_callback_three')
        },
        error: function (result) {
            console.log(this.error())
        }
    })
})



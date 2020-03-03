$(document).ready(function () {
    $('#item').html(function(){
        let itemTotal = $('#showImage > div').length;
        let str= '';
        for (let i=0; itemTotal > i; i++){
            str +=`<div class="item">
            <p class="current">${i + 1}</p>
            <p>&nbsp;/${itemTotal}</p>
        </div>`;
        }
        return str;
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1.65
            }
        }
        ]
    });
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
/*
 Template Name: AppiRays
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */


(function ($) {
    "use strict";

    $(window).on('scroll', function () {
//Header
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("tv-sticky-nav");
        } else {
            $(".navbar-fixed-top").removeClass("tv-sticky-nav");
        }
    });
    $(document).ready(function () {

        $('.nav.navbar-nav a.page-scroll').click(function () {
            $(this).parents('ul.navbar-nav').find('a.page-scroll').removeClass('active');
            $(this).addClass('active');

            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 66
            }, 2000);
        });
        $('.nav.navbar-nav li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
        });
        $(".navbar-nav li a").on("click", function (event) {
            $(".navbar-collapse").removeClass('in');
        });


        //Screenshot carousel
        $('#screenshot-carousel').owlCarousel({
            items: 5,
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            nav: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                767: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 5,
                },
                1199: {
                    items: 5
                }
            }
        });

        //Review carousel
        $('#review-carousel').owlCarousel({
            items: 1,
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            nav: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            dots: false,
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.back-to-top').addClass('active');
            } else {
                $('.back-to-top').removeClass('active');
            }
        });
        $('#back-to-top').click(function () {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });
    });
})(jQuery);
/*==========================End====================================*/



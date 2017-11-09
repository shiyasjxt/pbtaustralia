jQuery(function($){

var RISE = window.RISE || {};

/* ==================================================
   Mobile Navigation
================================================== */


var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

RISE.mobileNav = function(){
    var windowWidth = $(window).width();

    if( windowWidth <= 979 ) {
        if( $('#mobile-nav').length > 0 ) {
            mobileMenuClone.insertAfter('#menu');
            $('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
        }
    } else {
        $('#navigation-mobile').css('display', 'none');
        if ($('#mobile-nav').hasClass('open')) {
            $('#mobile-nav').removeClass('open');
        }
    }
}

RISE.listenerMenu = function(){
    $('#mobile-nav').on('click', function(e){
        $(this).toggleClass('open');

        if ($('#mobile-nav').hasClass('open')) {
            $('#navigation-mobile').slideDown(500, 'easeOutExpo');
        } else {
            $('#navigation-mobile').slideUp(500, 'easeOutExpo');
        }
        e.preventDefault();
    });

    $('#menu-nav-mobile a').on('click', function(){
        $('#mobile-nav').removeClass('open');
        $('#navigation-mobile').slideUp(350, 'easeOutExpo');
    });
}


/* ==================================================
   Slider Options
================================================== */

RISE.slider = function(){
    $("#r_banner-images").cycle({

    });
}


/* ==================================================
   Navigation Fix
================================================== */

//RISE.nav = function(){
//	$('.sticky-nav').waypoint('sticky');
//}

/* ==================================================
   Menu Highlight
================================================== */
/*
RISE.menu = function(){
    if ( "/" == location.pathname || "/responsive-11/" == location.pathname )
    {
        $("#menu a").not( $("#menu a[href^=#]") ).parent("li").find("a").addClass("external");
        $('#menu-nav, #menu-nav-mobile').onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 750,
            scrollOffset: 30,
            scrollThreshold: 0.5,
            easing: 'easeOutExpo',
            filter: ':not(.external)'
        });
    }
    else
    {
        $("#menu a").each(function(){
            if ( 0 == $(this).attr("href").indexOf("#") )
            {
                $(this).attr("href", "/" + $(this).attr("href"));
            }
        });
    }
}

/* ==================================================
   Next Section
================================================== */

/*
RISE.goSection = function(){
    $('#nextsection').on('click', function(){
        $target = $($(this).attr('href')).offset().top-30;

        $('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
        return false;
    });
}

/* ==================================================
   GoUp
================================================== */

/*
RISE.goUp = function(){
    $('#goUp').on('click', function(){
        $target = $($(this).attr('href')).offset().top-30;

        $('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
        return false;
    });
}


/* ==================================================
    Scroll to Top
================================================== */

RISE.scrollToTop = function(){
    var windowWidth = $(window).width(),
        didScroll = false;

    var $arrow = $('#back-to-top');

    $arrow.click(function(e) {
        $('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
        e.preventDefault();
    })

    $(window).scroll(function() {
        didScroll = true;
    });

    setInterval(function() {
        if( didScroll ) {
            didScroll = false;

            if( $(window).scrollTop() > 1000 ) {
                $arrow.css('display', 'block');
            } else {
                $arrow.css('display', 'none');
            }
        }
    }, 250);
}

/* ==================================================
   Thumbs / Social Effects
================================================== */

RISE.utils = function(){

    $('.item-thumbs').bind('touchstart', function(){
        $(".active").removeClass("active");
          $(this).addClass('active');
    });

    $('.image-wrap').bind('touchstart', function(){
        $(".active").removeClass("active");
          $(this).addClass('active');
    });

    $('#social ul li').bind('touchstart', function(){
        $(".active").removeClass("active");
          $(this).addClass('active');
    });

}

/* ==================================================
   Accordion
================================================== */

RISE.accordion = function(){
    var accordion_trigger = $('.accordion-heading.accordionize');

    accordion_trigger.delegate('.accordion-toggle','click', function(event){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
               $(this).addClass('inactive');
        }
        else{
              accordion_trigger.find('.active').addClass('inactive');
              accordion_trigger.find('.active').removeClass('active');
              $(this).removeClass('inactive');
              $(this).addClass('active');
         }
        event.preventDefault();
    });
}

/* ==================================================
   Toggle
================================================== */

RISE.toggle = function(){
    var accordion_trigger_toggle = $('.accordion-heading.togglize');

    accordion_trigger_toggle.delegate('.accordion-toggle','click', function(event){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
               $(this).addClass('inactive');
        }
        else{
              $(this).removeClass('inactive');
              $(this).addClass('active');
         }
        event.preventDefault();
    });
}

/* ==================================================
   Tooltip
================================================== */

RISE.toolTip = function(){
    $('a[data-toggle=tooltip]').tooltip();
}


/* ==================================================
    Init
================================================== */

RISE.slider();

$(document).ready(function(){

    RISE.nav();
    RISE.mobileNav();
    RISE.listenerMenu();
    //RISE.menu();
    //RISE.goSection();
    //RISE.goUp();
    RISE.scrollToTop();
    RISE.utils();
    RISE.accordion();
    RISE.toggle();
    RISE.toolTip();
});

$(window).resize(function(){
    RISE.mobileNav();
});

});

$(document).ready(function() {

    // for sticky navigation

    var waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
          if (direction == "down") {
            $('nav').addClass('sticky');
          } else {
            $('nav').removeClass('sticky');
          }
        },
        offset: 60
      })


    // Scroll on buttons

    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    // Navigation Scroll

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        )   {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                    } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                    };
                });
                }
            }
    });


    // Animation on scroll
    var waypoint1 = new Waypoint({
        element: $('.js--wp-1'),
        handler: function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        },
        offset: '50%'
    })

    var waypoint2 = new Waypoint({
        element: $('.js--wp-2'),
        handler: function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        },
        offset: '50%'
    })

    var waypoint3 = new Waypoint({
        element: $('.js--wp-3'),
        handler: function(direction) {
            $('.js--wp-3').addClass('animated fadeIn');
        },
        offset: '50%'
    })

    var waypoint4 = new Waypoint({
        element: $('.js--wp-4'),
        handler: function(direction) {
            $('.js--wp-4').addClass('animated pulse');
        },
        offset: '50%'
    })


    // Mobile Navigation

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });

});


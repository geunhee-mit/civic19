$(function() {

   for (var i = 0; i < 280; i++) {
      $(".area-in").append('<span class="block"><span class="shape"></span></span>')
   }

   document.addEventListener("mousemove", function(e) {
      for (var l = 0; l < $(".block").length; l++) {
         $(".block:nth-child(" + (l + 1) + ")").each(function() {
            var offset = $(this).offset(),
               center_x = (offset.left) + ($(this).width() / 2),
               center_y = (offset.top) + ($(this).height() / 2),
               mouse_x = e.pageX,
               mouse_y = e.pageY,
               radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
               degree = (radians * (180 / Math.PI) * -1) + 90;
            $(this).css('-moz-transform', 'rotate(' + degree + 'deg)');
            $(this).css('-webkit-transform', 'rotate(' + degree + 'deg)');
            $(this).css('-o-transform', 'rotate(' + degree + 'deg)');
            $(this).css('-ms-transform', 'rotate(' + degree + 'deg)');
            $(this).css('transform', 'rotate(' + degree + 'deg)');
         })
      }
   })
})

/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict



// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })

'use strict';





// Smooth Scrolling

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        // return false;
      }
    }
  });
});





// Error states for form

document.addEventListener("DOMContentLoaded", function() {

    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("This field cannot be left blank");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})

$(document).on("ready", function() {
    $(".hero-text").addClass("bounceInDown");

    $('#nav-burger').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
    //   console.log('burger clicked!');
      $('#main-nav').addClass('open');
    });

    // $('#nav-burger a').on('click', function(e){
    //   $('#main-nav').removeClass('open');
    // });

    $('body').on('click', function(){
    //   console.log('menu closed');
      $('#main-nav').removeClass('open');
    });
})

$(document).on("ready", function() {
    $(".popcorn-illustration").addClass("bounceInDown")
})

// Anmation on scroll

$(document).on("ready", function() {
    $('.animate').viewportChecker({
        classToAdd: 'show', // Class to add to the elements when they are visible,
        offset: 10 // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    });
})



// Contact form submission and re-submission

var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/chris@mentallyfriendly.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        // beforeSend: function() {
        //     $("#contact-form .button").html("popping corn")
        // },
        // success: function(data) {
        //     $("#contact-form .button").html("request sent");
        //     setTimeout(function() {
        //         $contactForm.trigger("reset");
        //         $("#contact-form .button").html("request");
        //     }, 2000);
        //
        // },
        //
        //
        // error: function(err) {
        //     $contactForm.find('.alert--loading').hide();
        //     $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
        // }
    });
});



//  // Pauls mobile menu
//
// $(function() {
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         $("nav").hide()
//     }
//
//     $('#nav-toggle').click(function() {
//             $("nav").fadeToggle()
//         })
//
//
//
//
//     $('a[href*=#]:not([href=#])').click(function() {
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                 }, 700);
//                 return false;
//             }
//         }
//     });
// });

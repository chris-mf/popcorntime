'use strict';

//Checks when the DOM loads and runs a function
document.addEventListener('DOMContentLoaded', function() {

    $('.carousel').slick({
 speed: 300,
 slidesToShow: 1,
 variableWidth: true,
 arrows: false
});

}, false);


// mobile menu

$(function() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("nav").hide()
  }

  $('#nav-toggle').click(function() {
    $("nav").fadeToggle()
  })
//Smooth Srolling


  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});


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

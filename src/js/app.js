'use strict';

//Checks when the DOM loads and runs a function
document.addEventListener('DOMContentLoaded', function() {

    $('.carousel').slick({
        infinite: true,
 slidesToShow: 3,
 slidesToScroll: 3,
 arrows: false,
 autoplay: true,

      });

}, false);

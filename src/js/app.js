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

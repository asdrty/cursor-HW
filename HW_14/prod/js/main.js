'use strict';

console.log('test');

/*window.onload = function () {
    document.body.classList.add('loaded');
  }*/

$(document).ready(function () {
    $('.review-slider').slick();
})

$(window).on('load', function() {
    $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
  });


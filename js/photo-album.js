(function() {
  'use strict';

console.log( $('main') )

$('.photos')
    .find('li')
    .on('click', function zoom() {
      console.log('click');

      $(this).toggleClass('zoomed')
      $('main').toggleClass('zooming')
      $(this).append($ ('nav') );
    });


// I need to have the left button change to
// the picture on the left of current image.
$('.previous')
    .on('click', function moveLeft() {
      // console.log('click');

      $(this).parent().parent().previous('li')
      .toggleClass ('zoomed')
      .append($ ('nav') )

    });


$('.next')
      .on('click', function moveRight() {
      // console.log('click');

      $(this).parent().parent().next('li')
      .toggleClass ('zoomed')
      .append($ ('nav') )

    });




})();

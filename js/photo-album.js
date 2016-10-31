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


// I need to have the buttons change the picture
// towards the left/right of current image.
$('.previous')
    .on('click', function moveLeft(event) {
      event.stopPropagation();

      $(this).parent().parent()
        .removeClass('zoomed')
        .prev('li')
          .addClass('zoomed')
          .append($('nav') )

    });


$('.next')
      .on('click', function moveRight() {
        event.stopPropagation();

      $(this).parent().parent()
      .removeClass('zoomed')
      .next('li')
      .addClass ('zoomed')
      .append($ ('nav') )

    });




})();

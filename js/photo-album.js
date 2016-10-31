(function() {
  'use strict';

console.log( $('main') )

$('.photos')
  .find('li')
    .on('click', function zoom(event) {
      // console.log('click');
      $(this).toggleClass('zoomed')
      $('main').toggleClass('zooming')

    })


})();

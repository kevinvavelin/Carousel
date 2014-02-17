var init = function() {
      var carousel = document.getElementById('carousel'),
          navButtons = document.querySelectorAll('#navigation button'),
          panelCount = carousel.children.length,
          theta = 0,
          
          rotateCarousel = function( angle ) {
            carousel.style.webkitTransform = 'translateZ( -288px ) rotateY(' + theta + 'deg)';
          },
          
          onNavButtonClick = function( event ){
            var increment = parseInt( event.target.getAttribute('data-increment') );
            theta += ( 360 / panelCount ) * increment * -1;
            rotateCarousel();
          };

      for (var i=0; i < 2; i++) 
      {
        navButtons[i].addEventListener( 'click', onNavButtonClick, false);
      }
      
};    
window.addEventListener( 'DOMContentLoaded', init, false);
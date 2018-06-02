// Init Foundation
$(document).foundation();

// Menu
$('.responsive-menu').click(function(){
  $('.menu').slideToggle();
});

// Submenu
$('.menu li a').click(function() {
  $(this).siblings('.submenu').slideToggle();
  if ( $(this).find('i').hasClass('zmdi-plus') ) {
    $(this).find('i').removeClass('zmdi-plus').addClass('zmdi-minus'); 
  } else {
    $(this).find('i').removeClass('zmdi-minus').addClass('zmdi-plus');
  }
});

// on window change - remove style attribute
$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
  if (newSize == "medium") {
    $('.menu, .menu li ul').removeAttr("style");
  }
});
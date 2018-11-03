//Flexslider
$(window).load(function()  {
  $('.flexslider').flexslider({
    animation:'fade',
    controlsContainer:'.flex-container'
  });
});
//End of flexslider

//bxSlider
$(document).ready(function(){
  $('.bxslider').bxSlider({
    speed:1000,
    auto:true,
    minSlides:1,
    maxSlides:4,
    slideWidth:400,
    moveSlides:1,
    shrinkItems:true
  });
});
//End of bxslider



//bxSlider2
$(document).ready(function(){
  $('.bxslider2').bxSlider({
    speed:4000,
    auto:true,
    minSlides:1,
    maxSlides:1,
    moveSlides:1,
    shrinkItems:true,
    pause:8000
  });
});
//End of bxslider2

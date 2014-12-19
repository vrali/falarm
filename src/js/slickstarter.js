
$(document).ready(function(){
	$('.options-carousel').slick({
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  asNavFor: '.option-detailed',
  focusOnSelect : true, 
	});
 $('.option-detailed').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.options-carousel'
 });
});
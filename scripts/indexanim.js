/*Adds n number of dots*/
function add(n){
	var $active_dot = $("<li class='single-dot active-dot'> </li>");
	$(".dots ul").append($active_dot);
	for(var i = 0; i < n-1; i++){
		var $dot = $("<li class='single-dot'> </li>");
		$(".dots ul").append($dot);
	}
}
$(document).ready(function(){
	/*Dot addition n is number of images*/
	var n = $(".slideshow div").length;
	add(n);

	/*Slideshow operator*/
	var firstSlide = $(".slideshow :first-child");
	var lastSlide = $(".slideshow :last-child");

	var firstDot = $(".dots ul :first-child");
	var lastDot = $(".dots ul :last-child");

	$("#right_arrow").click(function(){
		var currentSlide = $(".active");
		var nextSlide = currentSlide.next();
		var currentDot = $(".active-dot");
		var nextDot = currentDot.next();

		if(currentSlide.is(":last-child")){
			//alert("last-child");
			nextSlide = firstSlide;
			nextDot = firstDot;
		}
		currentSlide.removeClass("active");
		currentSlide.css("display", "none");
		nextSlide.fadeIn(600).addClass("active");
		currentDot.removeClass("active-dot");
		nextDot.addClass("active-dot");

	});
	$("#left_arrow").click(function(){
		var currentSlide = $(".active");
		var previousSlide = currentSlide.prev();

		var currentDot = $(".active-dot");
		var previousDot = currentDot.prev();

		if(currentSlide.is(":first-child")){
			previousSlide = lastSlide;
			previousDot = lastDot;
		}

		currentSlide.removeClass("active");
		currentSlide.css("display", "none");
		previousSlide.fadeIn(600).addClass("active");
		currentDot.removeClass("active-dot");
		previousDot.addClass("active-dot");
	});

	var $dot = $(".dots ul").find("li");
	$dot.click(function(){
		var currentSlide = $(".active");
		var nextSlide;
		var currentDot = $(".active-dot");
		$(this).addClass("active-dot");
		$(currentDot).removeClass("active-dot");

		//alert( "Index: " + $(this).index() );

		var index = $(this).index();
		index = index + 1;
		//var index = $dot.index(this);
		currentSlide.removeClass("active");
		currentSlide.css("display", "none");
	  nextSlide = $(".slideshow :nth-child(" + index + ")");
		nextSlide.fadeIn(600).addClass("active");

	});

	var rotated = false;
	var down = false;
	/*Function that shows sub menus*/
	$('.cont-subs').click(function(){
		if(down == false){
			$(this).next('ul').slideDown("fast");
			down = true;
		}
		else{
			$(this).next('ul').slideUp("fast");
			down = false;
		}
			if(rotated == false){
	      $('.sub-arrow').css({ transition: "transform 0.2s", transform:  "rotate(" + -86 + "deg) translate(0px,-3px)"});
				rotated = true;

				setTimeout( function() { $(element).css( { transition: "none" } ) }, 500 );
			}
			else{
				$('.sub-arrow').css({ transition: "transform 0.2s", transform:  "rotate(" + 0 + "deg)"});
				setTimeout( function() { $(element).css( { transition: "none" } ) }, 500 );
				rotated = false;
			}
	});
	var menuDown = false;
	/*Mobile navigation icon animation activation*/
	$("#menuButton").click(function(){
			$(this).toggleClass('is-active');
			if (menuDown == false){
				$('.menu').slideDown("fast");
				menuDown = true;
			}
			else{
				$('.menu').slideUp("fast");
				menuDown = false;
			}
	});
});

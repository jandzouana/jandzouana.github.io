$(document).ready(function(){
	/*Slideshow operator*/
	var firstSlide = $(".slideshow :first-child");
	var lastSlide = $(".slideshow :last-child");
	$("#right_arrow").click(function(){
		var currentSlide = $(".active");
		var nextSlide = currentSlide.next();

		if(currentSlide.is(":last-child")){
			//alert("last-child");
			nextSlide = firstSlide;
		}
		currentSlide.removeClass("active");
		currentSlide.css("display", "none");
		nextSlide.fadeIn(600).addClass("active");
	});
	$("#left_arrow").click(function(){
		var currentSlide = $(".active");
		var previousSlide = currentSlide.prev();

		if(currentSlide.is(":first-child")){
			previousSlide = lastSlide;
		}

		currentSlide.removeClass("active");
		currentSlide.css("display", "none");
		previousSlide.fadeIn(600).addClass("active");
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

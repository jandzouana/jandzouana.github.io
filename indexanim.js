$(document).ready(function(){
	var rotated = false;
	var down = false;
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
				//$('.sub-arrow').css({ transition: "transform 0.2s", transform:  "scaleY(-1)"});

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

			//$('.menu').toggle();
	});

});


//add p to links in menu

$(document).ready(function(){

	$('html, body').animate({scrollTop: 0 });

	$(window).scroll(function(){
		var scrollBody = $(window).scrollTop();
		if(scrollBody > 0) {
			$('.head-menu').addClass('active');
		} else {
			$('.head-menu').removeClass('active');
		}
	});

	$('.faq-it').click(function(){
		$(this).toggleClass('active');
		$(this).find('.faq-cont').slideToggle();
	});

	var windHeight = $(window).height();
	var SlHeight = windHeight - 229;
	if(windHeight > 725) {
		$('.slide-main').height(SlHeight)
	};


	$('.terms_service-lnk a').click(function(){
		$('.terms_service ul').slideToggle();
		$(this).toggleClass('active');
		return false;
	});


	// Menu
	$('.head-menu li a, .slide-pointer').click(function(){
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top - 125
	    }, 1000);
		return false;
	})


});
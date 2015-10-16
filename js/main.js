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
	});


	if($(window).width() < 760) {
		$('.tariff-sr-header').click(function(){
			var tariffIndex = $(this).parent('div').index();
			$('.tariff-sr-box').removeClass('active');
			$(this).parent('div').addClass('active');
			$('.tariff-td-1, .tariff-td-2').hide();
			if(tariffIndex == 0) {
				$('.tariff-td-1').show();
			} else {
				$('.tariff-td-2').show();
			}
		});

		// menu mob
		$('.mob-menu').click(function(){
			$('.head-menu ul').slideToggle();
			$('.mob-menu').toggleClass('active');
			return false;
		});
		$('.head-menu ul li a').click(function(){
			$('.head-menu ul').slideUp();
			$('.mob-menu').removeClass('active');
			console.log('da');
		})
	};




});
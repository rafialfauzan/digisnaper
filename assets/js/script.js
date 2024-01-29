(function($){
	/* Sliders */
	var swiper = new Swiper('.coastal_slider .swiper-container', {
		lazy: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		autoHeight: true,
	});
})(jQuery)
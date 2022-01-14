$('.slider').slick({
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 900,
    arrows: true,
	responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
			}
		}
	],
});

$('iframe').on('click', function() {
    $('.autoplay').slick('slickPause');
});

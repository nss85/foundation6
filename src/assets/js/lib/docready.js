$(document).ready(function(){

	/* Start slick */

	$('.slick').slick({
		arrows: true,
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

		]
	});

	/* End slick */


	/* Start photoswipe photo gallery */
	initPhotoSwipeFromDOM('.my-gallery');
	/* End photoswipe photo gallery */




}); // End document ready
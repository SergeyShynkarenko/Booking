$(function() {
	$('.hamburger').on('click', function() {
		$('.hamburger').toggleClass('is-active');
		$('.menu__list').toggleClass('menu__list--active');
	});
	$('.menu__list').on('click', function() {
		$('.hamburger').removeClass('is-active');
		$('.menu__list').removeClass('menu__list--active');
	});
});


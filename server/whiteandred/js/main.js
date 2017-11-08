$('#toggle').click(function() {
	$('.menu__container').toggleClass('open');
	$('#left').toggleClass('alt-red-txt');
	$('#right').toggleClass('alt-white-txt');
	console.log('click');
});

$('.menu__jumper').on('click', function( e ) {

	e.preventDefault();

    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 600);

    $('.menu__container').toggleClass('open');
	$('#left').toggleClass('alt-red-txt');
	$('#right').toggleClass('alt-white-txt');
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();
	console.log(wScroll);
});
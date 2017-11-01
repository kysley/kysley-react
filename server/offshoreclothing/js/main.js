var tagLines = ["We 'like' like you", "You're our key to success",
"Shirts so comfy you'll freak out a little, but that's okay", "our shirts are softer than hotel pillows and will last longer than your student debt",
"beach, please", "whalecome", "Quality shirts for quality people", "HEEEEEEEEEY! HOOOOOOOOO!", "Is it hot in here? Or is it just you",
"Make a wave", "Your friends will be jealous of your new shirt. Pinky promise.", "Hard times call for great clothes",
"You rock our world"]

var randTag = tagLines[Math.floor(Math.random() * tagLines.length)];
$('.welcome').html(randTag);

disableScroll();
AOS.init({
  offset: 100,
  duration: 300,
  easing: 'ease-in-sine',
  delay: 0,
});

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
};

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
};

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
};

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
};

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
    $('.welcome').html('');
});



$('body').imagesLoaded( function() {
	setTimeout(function() {
		$('.full_height').removeClass('hidden').fadeIn('slow');
		$('.menu').removeClass('hidden');
		$('.welcome_cover').fadeOut("slow");
		enableScroll();
	 }, 900);
})

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: false,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'filler',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

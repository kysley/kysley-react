$(document).ready(function() {
    if (localStorage.getItem('dot') !== null) {
        $('.dot').addClass(localStorage.getItem('dot'));
        $('.clock').addClass(localStorage.getItem('clock'));
    } else {
        localStorage.setItem('dot', 'black');
        localStorage.setItem('clock', 'white');
    };
    $('.dot').on('click', function() {
        if (localStorage.getItem('dot') == 'white') {
            localStorage.setItem('dot','black');
            localStorage.setItem('clock','white');

            $('.dot').removeClass('black');
            $('.dot').addClass('white');

            $('.clock').removeClass('white');
            $('.clock').addClass('black');

            location.reload();
        } else if (localStorage.getItem('dot') == 'black') {
            localStorage.setItem('dot', 'white');
            localStorage.setItem('clock', 'black');

            $('.dot').removeClass('white');
            $('.dot').addClass('black');

            $('.clock').removeClass('black');
            $('.clock').addClass('white');

            location.reload();
        }
    });

    function displayTime() {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        if (hours > 11) {
            hours = hours - 12;
        }
        if (hours === 0) {
            hours = 12;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $('.hours').html(hours);
        $('.minutes').html(minutes);
        $('.seconds').html(seconds);
    }
    displayTime();
    setInterval(displayTime, 1000);
});
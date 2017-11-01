// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         loadWeather(position.coords.latitude + ',' + position.coords.longitude);
//     });
// } else {
//     $('.not-available').show();
//     loadWeather('Toronto', '');
// }
$(document).ready(function() {
    $('#local').addClass('hidden');
    if (localStorage.getItem("temp-type") !== null) {
        $("#" + localStorage.getItem("temp-type")).parent().addClass(
            "current");
    } else {
        $("#c").parent().addClass("current");
        localStorage.setItem("temp-type","c");
    }
    $(".temp-type").on("click", "li", function() {
        $("li.current").removeClass("current");
        $(this).addClass("current");
        localStorage.setItem("temp-type", $(this).children(
            ":first").attr("id"));
    });

    $(".location-field").keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            var location = $(".location-field").val();
            loadWeather(location, '');
            $(".location-field").addClass('lower');
        }
    });
});
var d = new Date();    // defaults to the current time in the current timezone
var time;
if (d.getHours() > 18) {
    time = 'moon-';
} else {
    time = 'sun-';
}
var mm;
var nn;
function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather) {
            var v = weather.country;
            var n = '';
            mm = ' &deg;' + weather.units.temp;
            nn = ' &deg;' + weather.alt.unit;
            // if (v == "United States") {
            //     localStorage.setItem("temp-type")
            // }
            if (localStorage.getItem("temp-type") == "c") {
                // m = '<h3> &deg;' + weather.alt.unit + '</h3>';
                n = '<h2> &deg;' + weather.units.temp + '</h2>';
            } else {
                // m = '<h3> &deg;' + weather.units.temp + '</h3>';
                n = '<h2> &deg;' + weather.alt.unit + '</h2>';
            }
            html = '<h1>' + weather.city + ', ' + weather.region +
                '</h1>';
            html += '<i class="' + time + weather.code +
                '"></i> <h2 data-cel="' + weather.temp +
                '" data-fah="' + weather.alt.temp + '"></h2>' +
                n;
            html += '<h3 class="sec" data-cel="' + weather.temp +
                '" data-fah="' + weather.alt.temp + '"></h3>';
            // var weathercode = "5";// USED FOR TESTING WEATHER CODES
            switch (weather.code) {
                case "0":
                    html +=
                        '<p class="currently">Tornado</p>';
                        // $("")
                    break;
                case "1":
                    html +=
                        '<p class="currently">Tropical Storm</p>';
                    break;
                case "2":
                    html +=
                        '<p class="currently">Hurricane</p>';
                    break;
                case "3":
                    html +=
                        '<p class="currently">Severe Thunderstorms</p>';
                    break;
                case "4":
                    html +=
                        '<p class="currently">Thunderstorms</p>';
                    break;
                case "5":
                    html +=
                        '<p class="currently">A mix of rain and snow</p>';
                    break;
                case "6":
                    html +=
                        '<p class="currently">A mix of rain and sleet</p>';
                    break;
                case "7":
                    html +=
                        '<p class="currently">A mix of snow and sleet</p>';
                    break;
                case "8":
                    html +=
                        '<p class="currently">Freezing drizzle</p>';
                    break;
                case "9":
                    html +=
                        '<p class="currently">Drizzle</p>';
                    break;
                case "10":
                    html +=
                        '<p class="currently">Freezing rain</p>';
                    break;
                case "11":
                case "12":
                    html +=
                        '<p class="currently">Rain showers</p>';
                    break;
                case "13":
                    html +=
                        '<p class="currently">Snow flurries</p>';
                    break;
                case "14":
                    html +=
                        '<p class="currently">Light snow showers</p>';
                    break;
                case "15":
                    html +=
                        '<p class="currently">Blowing snow</p>';
                    break;
                case "16":
                    html +=
                        '<p class="currently">Snow</p>';
                    break;
                case "17":
                    html +=
                        '<p class="currently">Hail</p>';
                    break;
                case "18":
                    html +=
                        '<p class="currently">Sleet</p>';
                    break;
                case "19":
                    html +=
                        '<p class="currently">Dust</p>';
                    break;
                case "20":
                    html +=
                        '<p class="currently">Fog</p>';
                    break;
                case "21":
                    html +=
                        '<p class="currently">Haze</p>';
                    break;
                case "22":
                    html +=
                        '<p class="currently">Smoky</p>';
                    break;
                case "23":
                    html +=
                        '<p class="currently">Blustery</p>';
                    break;
                case "24":
                    html +=
                        '<p class="currently">Windy</p>';
                    break;
                case "25":
                    html +=
                        '<p class="currently">Cold</p>';
                    break;
                case "26":
                    html +=
                        '<p class="currently">Cloudy</p>';
                    break;
                case "27":
                    html +=
                        '<p class="currently">Mostly cloudy</p>';
                    break;
                case "28":
                    html +=
                        '<p class="currently">Mostly cloudy</p>';
                    break;
                case "29":
                    html +=
                        '<p class="currently">Partly cloudy</p>';
                    break;
                case "30":
                    html +=
                        '<p class="currently">Partly cloudy</p>';
                    break;
                case "31":
                    html +=
                        '<p class="currently">Clear skies</p>';
                    break;
                case "32":
                    html +=
                        '<p class="currently">Sunny</p>';
                    break;
                case "33":
                    html +=
                        '<p class="currently">Fair</p>';
                    break;
                case "34":
                    html +=
                        '<p class="currently">Fair</p>';
                    break;
                case "35":
                    html +=
                        '<p class="currently">Mixed rain and hail</p>';
                    break;
                case "36":
                    html +=
                        '<p class="currently">Hot</p>';
                    break;
                case "37":
                    html +=
                        '<p class="currently">Isolated thunderstorms</p>';
                    break;
                case "38":
                case "39":
                    html +=
                        '<p class="currently">Scattered thunderstorms</p>';
                    break;
                case "40":
                    html +=
                        '<p class="currently">Scattered showers</p>';
                    break;
                case "41":
                case "43":
                    html +=
                        '<p class="currently">Heavy snow</p>';
                    break;
                case "42":
                    html +=
                        '<p class="currently">Scattered snow showers</p>';
                    break;
                case "44":
                    html +=
                        '<p class="currently">Partly cloudy</p>';
                    break;
                case "45":
                    html +=
                        '<p class="currently">Thundershowers</p>';
                    break;
                case "46":
                    html +=
                        '<p class="currently">Snow showers</p>';
                    break;
                case "47":
                    html +=
                        '<p class="currently">Isolated thundershowers</p>';
                    break;
                default:
                    html +=
                        '<p class="currently">Weather not available</p>';
            }
            html += '<ul id="forecast" class = "clear">';
            for (var i = 0; i < 5; i++) {
                html += '<li> <span class="date">' + weather.forecast[
                        i].day + '</span> ' +
                    '<p class="hi" data-cel="' + weather.forecast[
                        i].high + '" data-fah="' + weather.forecast[
                        i].alt.high + '">' + weather.forecast[i]
                    .high + '</p>' + ' : ' +
                    '<p class="lo" data-cel="' + weather.forecast[
                        i].low + '" data-fah="' + weather.forecast[
                        i].alt.low + '">' + weather.forecast[i]
                    .low + '</p> <br/>' + '<p>' + '  ' +
                    weather.forecast[i].text + '</p>' + '<br/>' +
                    '</li>'
            }
            html += '</ul>';
            $("#weather").html(html);
            if (localStorage.getItem("temp-type") == "c") {
                $("h2").html(function() {
                    return $(this).data("cel")
                })
                $(".hi").html(function() {
                    return $(this).data("cel")
                })
                $(".lo").html(function() {
                    return $(this).data("cel")
                })
            } else {
                $("h2").html(function() {
                    return $(this).data("fah")
                })
                $(".hi").html(function() {
                    return $(this).data("fah")
                })
                $(".lo").html(function() {
                    return $(this).data("fah")
                })
            }
        },
        error: function(error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
    $('#loader').addClass('fadeOut');
    $('#wrapper').removeClass('hidden');
    $('#local').addClass('visible');
}
$(".temp-type").on("click", "#c", function() {
    $("h2").html(function() {
        $(this).html(mm);
        return $(this).data("cel")
    })
    $(".hi").html(function() {
        return $(this).data("cel")
    })
    $(".lo").html(function() {
        return $(this).data("cel")
    })
});

$(".temp-type").on("click", "#f", function() {
    $("h2").html(function() {
        $(this).html(nn)
        return $(this).data("fah")
    })
    $(".hi").html(function() {
        return $(this).data("fah")
    })
    $(".lo").html(function() {
        return $(this).data("fah")
    })
});

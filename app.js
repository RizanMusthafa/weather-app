$(document).ready(function() {
  var tempObj = $("#avg_temp");
  // var titleObj = $("#weather_title");
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(get_lalo);
  }
});

function get_lalo(pos) {
  var la = pos.coords.latitude;
  var lo = pos.coords.longitude;
  var link = "https://fcc-weather-api.glitch.me/api/current?lat="+la+"&lon="+lo;
  $.get(link, setWeather);  
}

function setWeather(data) {
  $("#wether_image").attr("src", data.weather[0].icon);
  $("#place").html(data.name);
  $("#weather_title").html(data.weather[0].main);
  $("#avg_temp").html(data.main.temp+" &#8451;");
}
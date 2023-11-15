
var target = new Date("1 January 2024 00:00:00").getTime();

var x = setInterval(function() {

  var current = new Date().getTime();

  var t = (target - current);
  
  var countDays = Math.floor(t / (1000 * 60 * 60 * 24));
  var countHours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var countMinutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var countSeconds = Math.floor((t % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = countDays;
  document.getElementById("hours").innerHTML = countHours;
  document.getElementById("minutes").innerHTML = countMinutes;
  document.getElementById("seconds").innerHTML = countSeconds;

  if(t < 0) {
    clearInterval(x);
  }

}, 1000);

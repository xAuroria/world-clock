// Timezone 1
setInterval(function updateTime() {
  document.querySelector("#date-1").innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  document.querySelector("#time-1").innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss ");
  document.querySelector("#time-unit-1").innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("A");

  //Timezone 2
  document.querySelector("#date-2").innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  document.querySelector("#time-2").innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss ");
  document.querySelector("#time-unit-2").innerHTML = moment()
    .tz("Europe/London")
    .format("A");

  //Timezone 3
  document.querySelector("#date-3").innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("MMMM Do YYYY");
  document.querySelector("#time-3").innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss ");
  document.querySelector("#time-unit-3").innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("A");

  //Timezone 4
  document.querySelector("#date-4").innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  document.querySelector("#time-4").innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss ");
  document.querySelector("#time-unit-4").innerHTML = moment()
    .tz("Australia/Sydney")
    .format("A");
}, 1000);
updateTime();

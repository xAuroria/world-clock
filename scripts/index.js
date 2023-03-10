function updateTime() {
  // Timezone 1
  if (document.querySelector("#city-1")) {
    document.querySelector("#date-1").innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    document.querySelector("#time-1").innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss ");
    document.querySelector("#time-unit-1").innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("A");
  }

  //Timezone 2
  if (document.querySelector("#city-2")) {
    document.querySelector("#date-2").innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do YYYY");
    document.querySelector("#time-2").innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss ");
    document.querySelector("#time-unit-2").innerHTML = moment()
      .tz("Europe/London")
      .format("A");
  }

  //Timezone 3
  if (document.querySelector("#city-3")) {
    document.querySelector("#date-3").innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do YYYY");
    document.querySelector("#time-3").innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss ");
    document.querySelector("#time-unit-3").innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("A");
  }

  //Timezone 4
  if (document.querySelector("#city-4")) {
    document.querySelector("#date-4").innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do YYYY");
    document.querySelector("#time-4").innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss ");
    document.querySelector("#time-unit-4").innerHTML = moment()
      .tz("Australia/Sydney")
      .format("A");
  }
}

function updateCity(event) {
  if (event.target.value.length > 0) {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
      cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    document.querySelector(
      "#cities"
    ).innerHTML = `<div class="city" id="city-current">
          <div>
            <h2>${cityName}</h2>
            <div class="date" id="date-current">${cityTime.format(
              "MMMM Do YYYY"
            )}</div>
          </div>
          <div class="time">
            <span id="time-current">${cityTime.format("h:mm:ss ")}</span
            ><span class="time-unit" id="time-unit-current">${cityTime.format(
              "A"
            )}</span>
          </div>
        </div>
        <a href="/" class="back">Back</a>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

document.querySelector("#city-select").addEventListener("change", updateCity);

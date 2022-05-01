function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#searchCity");

  let city = document.querySelector("#city");
  let searchCity = `${newCity.value}`;
  city.innerHTML = searchCity;
  axios.get(`${apiCityUrl}&appid=${apiKey}&units=imperial`);
}

let apiKey = "35fef657ca97af5d0a6b09b7b5078d4d";
let cityCode = "Charlotte";
let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityCode}`;
let apiLLUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=35.2271&lon=-80.8431&limit=1`;

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#tempNumber");
  let description = document.querySelector("#currentCondition");
  let highTemp = document.querySelector("#highTemp");
  let currentHighTemp = Math.round(response.data.main.temp_max);
  let lowTemp = document.querySelector("#lowTemp");
  let currentLowTemp = Math.round(response.data.main.temp_min);
  let humidity = document.querySelector("#humidity");
  let sunUp = document.querySelector("#sunUp");
  let sunDown = document.querySelector("#sunDown");
  temperatureElement.innerHTML = `${temperature}`;
  description.innerHTML = response.data.weather[0].description;
  highTemp.innerHTML = `${currentHighTemp}`;
  lowTemp.innerHTML = `${currentLowTemp}`;
  humidity.innerHTML = response.data.main.humidity;
  sunUp.innerHTML = new Date(
    response.data.sys.sunrise * 1000
  ).toLocaleTimeString();
  sunDown.innerHTML = new Date(
    response.data.sys.sunset * 1000
  ).toLocaleTimeString();
}

axios.get(`${apiCityUrl}&appid=${apiKey}&units=imperial`).then(showTemperature);

// // ****************************************************//

let now = new Date();

let month = now.getMonth();

let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let currentMonth = months[month];
let currentNumber = now.getDate();
let currentYear = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = now.getDay();
let currentDay = days[today];
let currentTime = now.toLocaleTimeString();

let currentDate = document.querySelector("#date");
currentDate.innerHTML = `${currentMonth}/${currentNumber}/${currentYear}`;

let dayTime = document.querySelector("#currentTemp");
dayTime.innerHTML = `${currentDay}, ${currentTime}`;

let form = document.querySelector("#searchEngine");
form.addEventListener("submit", changeCity);

// // ****************************************************************** //

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

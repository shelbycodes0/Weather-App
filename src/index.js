function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#searchCity");

  let city = document.querySelector("#city");
  let searchCity = `${newCity.value}`;
  city.innerHTML = searchCity;
  let apiKey2 = "35fef657ca97af5d0a6b09b7b5078d4d";
  let cityCode2 = "Charlotte";
  let apiCityUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=imperial`;

  axios.get(apiCityUrl2).then(showTemperature);
}

let apiKey = "35fef657ca97af5d0a6b09b7b5078d4d";
let cityCode = "Charlotte";
let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityCode}&appid=${apiKey}&units=imperial`;

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
  let windSpeed = document.querySelector("#windSpeed");
  let mainIcon = document.querySelector("#mainIcon");

  farenheitTemperature = `${temperature}`;

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
  windSpeed.innerHTML = response.data.wind.speed;
  mainIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  getForecast(response.data.coord);
}

function displayForecast(response) {
  console.log(response.data);
  // day 2 conditions ---------------------------------------------------------
  let day2High = document.querySelector("#day2High");
  let day2Low = document.querySelector("#day2Low");
  let day2Humidity = document.querySelector("#day2Humidity");
  let day2WindSpeed = document.querySelector("#day2WindSpeed");
  let sunUp2 = document.querySelector("#sunUp2");
  let sunDown2 = document.querySelector("#sunDown2");
  let day2Condition = document.querySelector("#day2Condition");
  let icon2 = document.querySelector("#icon2");

  day2High.innerHTML = Math.round(response.data.daily[0].temp.max);
  day2Low.innerHTML = Math.round(response.data.daily[0].temp.min);
  day2Humidity.innerHTML = response.data.daily[0].humidity;
  day2WindSpeed.innerHTML = response.data.daily[0].wind_speed;
  sunUp2.innerHTML = new Date(
    response.data.daily[0].sunrise * 1000
  ).toLocaleTimeString();
  sunDown2.innerHTML = new Date(
    response.data.daily[0].sunset * 1000
  ).toLocaleTimeString();
  day2Condition.innerHTML = response.data.daily[0].weather[0].description;
  icon2.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`
  );
  // day 3 conditions ---------------------------------------------------------
  let day3High = document.querySelector("#day3High");
  let day3Low = document.querySelector("#day3Low");
  let day3Humidity = document.querySelector("#day3Humidity");
  let day3WindSpeed = document.querySelector("#day3WindSpeed");
  let sunUp3 = document.querySelector("#sunUp3");
  let sunDown3 = document.querySelector("#sunDown3");
  let day3Condition = document.querySelector("#day3Condition");
  let icon3 = document.querySelector("#icon3");

  day3High.innerHTML = Math.round(response.data.daily[1].temp.max);
  day3Low.innerHTML = Math.round(response.data.daily[1].temp.min);
  day3Humidity.innerHTML = response.data.daily[1].humidity;
  day3WindSpeed.innerHTML = response.data.daily[1].wind_speed;
  sunUp3.innerHTML = new Date(
    response.data.daily[1].sunrise * 1000
  ).toLocaleTimeString();
  sunDown3.innerHTML = new Date(
    response.data.daily[1].sunset * 1000
  ).toLocaleTimeString();
  day3Condition.innerHTML = response.data.daily[1].weather[0].description;
  icon3.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
  );
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiForecastKey = "35fef657ca97af5d0a6b09b7b5078d4d";
  let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiForecastKey}&units=imperial`;
  console.log(apiForecastUrl);
  axios.get(`${apiForecastUrl}`).then(displayForecast);
}

function showHouston(event) {
  city.innerHTML = "Houston";
  event.preventDefault();
  let houstonApi = `https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=35fef657ca97af5d0a6b09b7b5078d4d&units=imperial`;
  axios.get(houstonApi).then(showTemperature);
}

function showPortland(event) {
  city.innerHTML = "Portland";
  event.preventDefault();
  let portlandApi = `https://api.openweathermap.org/data/2.5/weather?q=Portland&appid=35fef657ca97af5d0a6b09b7b5078d4d&units=imperial`;
  axios.get(portlandApi).then(showTemperature);
}

function showCharlotte(event) {
  city.innerHTML = "Charlotte";
  event.preventDefault();
  let charlotteApi = `https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=35fef657ca97af5d0a6b09b7b5078d4d&units=imperial`;
  axios.get(charlotteApi).then(showTemperature);
}

function displayCelsius(event) {
  event.preventDefault();
  let celsiusTemperature = (5 * (farenheitTemperature - 32)) / 9;
  alert(`It is currently ${Math.round(celsiusTemperature)}°C.`);
}

axios.get(`${apiCityUrl}`).then(showTemperature);

// // ****************************************************//

let farenheitTemperature = null;

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

let houston = document.querySelector("#htx");
houston.addEventListener("click", showHouston);

let portland = document.querySelector("#pdx");
portland.addEventListener("click", showPortland);

let goHome = document.querySelector("#clt");
goHome.addEventListener("click", showCharlotte);

let fToC = document.querySelector("#fToC");
fToC.addEventListener("click", displayCelsius);

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

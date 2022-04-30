let apiKey = "35fef657ca97af5d0a6b09b7b5078d4d";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Charlotte,nc,us";

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#tempNumber");
  let description = document.querySelector("#currentCondition");
  temperatureElement.innerHTML = `${temperature}`;
  description.innerHTML = response.data.weather[0].description;
}

axios.get(`${apiUrl}&appid=${apiKey}&units=imperial`).then(showTemperature);

function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#searchCity");

  let city = document.querySelector("#city");
  city.innerHTML = `${newCity.value}`;
}

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

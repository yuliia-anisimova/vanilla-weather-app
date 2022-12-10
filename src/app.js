function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "62b43b991fa7a8556437d03ee15777fa";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

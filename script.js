const apiKey = "9349afc719d59c4413a12ae017c57724";

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name");
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        displayWeather(data);
      } else {
        alert("City not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
function displayWeather(data) {
  const weatherInfoDiv = document.getElementById("weather-info");
  weatherInfoDiv.innerHTML = `
        <div><strong>City:</strong> ${data.name}</div>
        <div><strong>Temperature:</strong> ${data.main.temp} °C</div>
        <div><strong>Weather:</strong> ${data.weather[0].description}</div>
        <div><strong>Humidity:</strong> ${data.main.humidity} %</div>
        <div><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
    `;
}

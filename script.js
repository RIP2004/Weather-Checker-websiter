async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const result = document.getElementById("weatherResult");
  
    if (!city) {
      result.innerHTML = "<p>Please enter a city name.</p>";
      return;
    }
  
    const apiKey = "cbb4966cbcfb4e93be9121749251907"; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
  
      result.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <img src="https:${data.current.condition.icon}" class="weather-icon" alt="Weather icon">
        <p><strong>${data.current.condition.text}</strong></p>
        <p>🌡️ Temp: ${data.current.temp_c}°C</p>
        <p>💧 Humidity: ${data.current.humidity}%</p>
        <p>💨 Wind: ${data.current.wind_kph} km/h</p>
      `;
    } catch (error) {
      result.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  
const weatherBlock = document.querySelector('#weather');
document.addEventListener('DOMContentLoaded', () => {
  loadWeather();
  });
async function loadWeather() {
  const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kharkiv&appid=4b43b4ea85f1453021d7d76371f82a06';
  const response = await fetch(server, {
    method: 'GET',
  });
  const responseResult = await response.json();
  if (!response.ok) {
    weatherBlock.innerHTML = '<p>Failed to load weather data.</p>';
    return;
  } else {getWeather(responseResult);}
}

function getWeather(data) {
  console.log(data);
  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const pressure = Math.round(data.main.pressure);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const template = `<div class="weather__header">
					<div class="weather__main">
						<div class="weather__city">${location}</div>
						<div class="weather__status">${weatherStatus}</div>
					</div>
					<div class="weather__icon">
						<img class="img__weather" src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="${weatherIcon}">
					</div>
				</div>
				<div class="weather__temp">${temp} ℃</div>
        <div class="wrap">
				<div class="weather__feelsLike">Feels like: ${feelsLike} ℃</div>
        <div class="weather__pressure">Pressure: ${pressure} Pa</div>
        </div>`

        weatherBlock.innerHTML = template;
}

document.querySelector('.btn_reload').addEventListener('click', () => {
  loadWeather();
  const now = new Date().toLocaleTimeString();
  document.querySelector('.btn_reload').textContent = `Reload (${now})`;
})

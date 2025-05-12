function WeatherCard({ data }) {
  const { name, main, weather } = data;

  return (
    <div className="weather">
      <div className="weather__header">
        <div className="weather__main">
          <div className="weather__city">{name}</div>
          <div className="weather__status">{weather[0].main}</div>
        </div>
        <div className="weather__icon">
          <img
            className="img__weather"
            src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt={weather[0].icon}
          />
        </div>
      </div>
      <div className="weather__temp">{Math.round(main.temp)} ℃</div>
      <div className="wrap">
        <div className="weather__feelsLike">Feels like: {Math.round(main.feels_like)} ℃</div>
        <div className="weather__pressure">Pressure: {Math.round(main.pressure)} Pa</div>
      </div>
    </div>
  );
}

export default WeatherCard;
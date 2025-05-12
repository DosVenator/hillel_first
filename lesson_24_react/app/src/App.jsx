import { useState } from "react";
import WeatherCard from "./WeatherCard";
import ReloadButton from "./ReloadButton";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [reloadTime, setReloadTime] = useState(null);

  const loadWeather = async () => {
    const server = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kharkiv&appid=4b43b4ea85f1453021d7d76371f82a06";
    try {
      const response = await fetch(server);
      const data = await response.json();
      if (!response.ok) {
        setError("Не вдалось завантажити погоду");
        setWeather(null);
      } else {
        setWeather(data);
        setReloadTime(new Date().toLocaleTimeString());
        setError(null);
      }
    } catch {
      setError("Помилка завантаження");
      setWeather(null);
    }
  };

  return (
    <div className="wrapper wrapper--weather">
      {error && <p>{error}</p>}
      {weather ? <WeatherCard data={weather} /> : <p>Натисніть кнопку завантаження</p>}
      <ReloadButton onClick={loadWeather} time={reloadTime} />
    </div>
  );
}

export default App;
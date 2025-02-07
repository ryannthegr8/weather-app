import { useEffect, useState } from 'react';
import { getWeather } from '../utils/weather';

export default function Home() {
  const [weather, setWeather] = useState(null);

  // Test the getWeather function when the component loads
  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather('London'); // Fetch weather for London
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
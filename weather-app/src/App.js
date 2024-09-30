import logo from "./logo.svg";
import "./App.css";
import ResponsiveLayout from "./components/ResponsiveLayout/ResponsiveLayout";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [weatherType, setWeatherType] = useState("clouds");
  const [weatherData, setWeatherData] = useState("null");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=london&appid=50a26bf34b08fe9f062fffea9dc6054d      `
        );
        const weatherCondition = response.data.weather[0].main.toLowerCase();
        const weatherDetails = {
          tempMax: response.data.main.temp_max,
          tempMin: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          clouds: response.data.clouds.all,
          temperature: response.data.main.temp,
          cityName: response.data.name,
        };
        setWeatherData(weatherDetails);
        setWeatherType(getWeatherType(weatherCondition));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
    getWeatherType(weatherType);
  }, []);

  const getWeatherType = (weatherCondition) => {
    switch (weatherCondition) {
      case "clear":
        return "sunny-bg";
      case "rain":
        return "rainy-bg";
      case "clouds":
        return "cloudy-bg";
      default:
        return "sunny-bg";
    }
  };
  return (
    <div className={`bg-${weatherType}`}>
      <ResponsiveLayout weatherData={weatherData} />
    </div>
  );
}

export default App;

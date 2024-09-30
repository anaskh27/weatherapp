import React from "react";
import InputSearch from "../InputSearch/InputSearch";

const Sidebar = ({ weatherData }) => {
  return (
    <div>
      <InputSearch />
      <div style={{ padding: "40px 8px" }}>
        <p style={{ color: "white", fontSize: "18px" }}>
          THUNDERSTORM WITH LIGHT DRIZZLE
        </p>
        <div className="flex text-white flex-col space-y-2 pt-8 pb-20 gap-5 border-b border-white-500">
          <div className="flex justify-between">
            <span>Temp max</span>
            <div className="flex gap-6">
              <span>
                {weatherData && `${Math.round(weatherData.tempMax - 273.15)}°C`}
              </span>
              <img src="/Vector.png" />
            </div>
          </div>
          <div className="flex justify-between">
            <span>Temp min</span>
            <div className="flex gap-6">
              <span>
                {" "}
                {weatherData && `${Math.round(weatherData.tempMin - 273.15)}°C`}
              </span>
              <img src="/Vector (1).png" />
            </div>
          </div>
          <div className="flex justify-between">
            <span>Humidity</span>
            <div className="flex gap-6">
              <span>{weatherData.humidity}</span>
              <img src="/outline.png" />
            </div>
          </div>{" "}
          <div className="flex justify-between">
            <span>Cloudy</span>
            <div className="flex gap-6">
              <span>{weatherData.clouds}%</span>
              <img src="/outline (1).png" />
            </div>
          </div>{" "}
          <div className="flex justify-between">
            <span>Wind</span>
            <div className="flex gap-6">
              <span>5km/h</span>
              <img src="/outline (2).png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

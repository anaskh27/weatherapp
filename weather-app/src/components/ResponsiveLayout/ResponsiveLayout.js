import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { BsClouds } from "react-icons/bs";

const ResponsiveLayout = ({ weatherData }) => {
  return (
    <div className="container mx-auto p-4 h-screen bg-cover overflow-hidden">
      <div className="bg-cover fixed top-0 left-0 right-0 bottom-0"></div>
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 h-full p-4 rounded bg-transparent flex flex-col justify-end">
            <div className="flex flex-row items-center gap-4">
              <h6 className="text-white font-bold text-6xl">
                {weatherData &&
                  `${Math.round(weatherData.temperature - 273.15)}°C`}
              </h6>
              <div>
                <h6 className="text-white text-3xl">
                  {weatherData && weatherData.cityName}
                </h6>
                <h1 className="text-white">06:09 - Monday, 9 Sep ‘23</h1>
              </div>
              <div>
                <BsClouds className="text-white" size={120} />
              </div>
            </div>
          </div>
          <div
            className="col-span-1 h-full p-4 rounded bg-transparent"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <Sidebar weatherData={weatherData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;

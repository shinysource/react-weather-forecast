import React, { useState } from "react";
import { toast } from "react-toastify";

import { WEATHER_API_URL, WEATHER_API_KEY } from "../../config";
import SearchForm from "../../components/SearchForm";
import CurrentWeather from "../../components/CurrentWeather";
import Forecast from "../../components/Forecast";
import "./main.scss";

const Main: React.FC = (): JSX.Element => {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setForeCast] = useState(null);

  const handleSearchChange = (searchData: ISearchData) => {
    const [lat, lon] = searchData?.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setcurrentWeather({ city: searchData.label, ...weatherResponse });
        setForeCast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => toast("Error happens", { type: "error" }));
  };

  return (
    <div className="container mt-5">
      <SearchForm onSearchChange={handleSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default Main;

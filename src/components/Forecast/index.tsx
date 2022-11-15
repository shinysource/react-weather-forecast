import React from "react";

import "./forecast.scss";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saterday",
];

const Forecast = ({ data }: any) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <div className="accordion mt-4" id="forecast">
        {data.list.splice(0, 5).map((item: any, index: number) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`header-${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panel-${index}`}
                aria-expanded="true"
                aria-controls={`panel-${index}`}
              >
                <div className="dialy-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="days">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {item.main.temp_max}°C | {item.main.temp_min}°C
                  </label>
                </div>
              </button>
            </h2>
            <div
              id={`panel-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`header-${index}`}
            >
              <div className="accordion-body">
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure:</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity:</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind speed:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea Level:</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels Like:</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Max Temperature:</label>
                    <label>{item.main.temp_max}°C</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Min Temperature:</label>
                    <label>{item.main.temp_min}°C</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;

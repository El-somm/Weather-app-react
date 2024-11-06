import React from "react";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  if (!data || !data.list) {
    return <div>No forecast data available.</div>; // Fallback UI
  }

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
  <div className="daily-details-grid">
    {[
      { label: "Pressure", value: `${item.main.pressure} hPa` },
      { label: "Humidity", value: `${item.main.humidity}%` },
      { label: "Clouds", value: `${item.clouds.all}%` },
      { label: "Wind Speed", value: `${item.wind.speed} m/s` },
      { label: "Sea Level", value: `${item.main.sea_level} m` },
      { label: "Feels Like", value: `${Math.round(item.main.feels_like)}°C` },
    ].map((detail, index) => (
      <div key={index} className="daily-details-grid-item">
        <label>{detail.label}: </label>
        <label>{detail.value}</label>
      </div>
    ))}
  </div>
</AccordionItemPanel>


          </AccordionItem>
        ))}
        <AccordionItem />
      </Accordion>
    </>
  );
};

export default Forecast;
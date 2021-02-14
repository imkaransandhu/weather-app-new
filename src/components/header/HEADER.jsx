import React from "react";

export default function HEADER(props) {
  return (
    <section className="header">
      <div className="container">
        <h1 className="city-name">{props.name}</h1>
        <p className="city-weather-type">{props.detail.current.weather[0].main}</p>
        <h2 className="city-temperature">{props.detail.current.temp}° </h2>
        <p>
          {" "}
          <span className="city-low-temp">L:{props.detail.daily[0].temp.min}</span>
          <span className="city-high-temp"> H:{props.detail.daily[0].temp.max}</span>{" "}
        </p>
      </div>
    </section>
  );
}

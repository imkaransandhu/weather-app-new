import React from "react";

export default function TODAYDESCRIPTION(props) {
  return (
    <section className="today-description">
      <div className="container">
        <p>
          Today: {props.detail.current.weather[0].main} currently. 
          The high will be {props.detail.daily[0].temp.max}°. {props.detail.hourly[15].weather[0].main} tonight with a low of {props.detail.hourly[15].temp}°.
        </p>
      </div>
    </section>
  );
}

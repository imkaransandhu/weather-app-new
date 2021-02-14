import React from "react";


function time(givendata) {
  var date = new Date(givendata * 1000);
  var hour = date.getHours();
  var minute = date.getMinutes();

  var finalDate = hour + ":" + minute;
  return finalDate;
}
export default function CURRENTDATA(props) {
  return (
    <section className="current-data">
      <div className="container">


        <div className="row current-row">
          <div className="col-6">
            <p>SUNRISE</p>
            <p className="big-text" >{time(props.detail.current.sunrise)} </p>
          </div>
          <div className="col-6">
            <p>SUNSET</p>
            <p className="big-text" >{time(props.detail.current.sunset)}</p>
          </div>
        </div>

        <div className="row current-row">
        <div className="col-6">
            <p>VISIBILITY</p>
            <p className="big-text" >{props.detail.current.visibility} m</p>
          </div>
          <div className="col-6">
            <p>HUMIDITY</p>
            <p className="big-text" >{props.detail.current.humidity}%</p>
          </div>
        </div>

        <div className="row current-row">
          <div className="col-6">
            <p>WIND</p>
            <p className="big-text" >{props.detail.current.wind_speed} metre/sec</p>
          </div>
          <div className="col-6">
            <p>FEELS LIKE</p>
            <p className="big-text" >{props.detail.current.feels_like}°</p>
          </div>
        </div>

        <div className="row current-row">
          <div className="col-6">
            <p>UV INDEX</p>
            <p  className="big-text" >{props.detail.current.uvi}</p>
          </div>
          <div className="col-6">
            <p>PRESSURE</p>
            <p className="big-text">{props.detail.current.pressure} hPa</p>
          </div>
        </div>


       

      </div>
    </section>
  );
}

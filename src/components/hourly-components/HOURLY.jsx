import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




function time(givendata) {
  var date = new Date(givendata * 1000);
  var hour = date.getHours();
  var minute = date.getMinutes();

  var finalDate = hour + ":" + minute;
  return finalDate;
}

function showImage(givenData) {
  var image = "http://openweathermap.org/img/w/" + givenData + ".png";
  return image;
}

export default function HOURLY(props) {
  return (
    <section className="hourly">
      <div className="container">

          <OwlCarousel items={6}

             >

            {props.detail.hourly.map((hour, index) => {

              return (

                <div key={index} className="col-2">

                  <p className="hourly-text">{time(props.detail.hourly[index].dt)}</p>
                  <img className="hourly-image" src={showImage(props.detail.hourly[index].weather[0].icon)} alt="hourly-icon" />
                  <p className="hourly-text"> {props.detail.hourly[index].temp}°</p>
                </div>

              )

            })}
          </OwlCarousel>

      </div>
    </section>
  );
}

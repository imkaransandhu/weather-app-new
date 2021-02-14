import React from "react";




function changeToDay(givendate) {
  var date = new Date(givendate * 1000);
  date = date.getDay();

  switch (date) {
    case 1:
      date = "Monday";
      break;
    case 2:
      date = "Tuesday";
      break;
    case 3:
      date = "Wednesday";
      break;
    case 4:
      date = "Thursday";
      break;
    case 5:
      date = "Friday";
      break;
    case 6:
      date = "Saturday";
      break;
    case 0:
      date = "Sunday";
      break;
    default:
  }
  return date;
}

function showImage(givenData) {
  var image = "http://openweathermap.org/img/w/" + givenData + ".png";
  return image;
}
export default function DAILY(props) {



  return (
    <section className="daily">
      <div className="container">


      {props.detail.daily.map((day,index) => {
        return (
          <div key={index} className="row">
          <div className="col-3">
            <p> {changeToDay(props.detail.daily[index].dt)} </p>
          </div>
          <div className="col-3">
            <img src={showImage(props.detail.daily[index].weather[0].icon)} alt="daily-icon" />
          </div>
          <div className="col-3">
            <p> {props.detail.daily[index].temp.min} </p>
          </div>
          <div className="col-3">
            <p> {props.detail.daily[index].temp.max} </p>
          </div>
        </div>
        )
      })}


      </div>
    </section>
  );
}

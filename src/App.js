import "./styles.css";
import HEADER from "./components/header/HEADER";
import HOURLY from "./components/hourly-components/HOURLY";
import DAILY from "./components/daily-components/DAILY";
import TODAYDESCRIPTION from "./components/todaydescription/TODAY";
import CURRENTDATA from "./components/currentData/CURRENTDATA";
import React, { useEffect, useLayoutEffect } from "react";
import clear from "./images/clear.jpg";
import cloud from "./images/clouds.jpg";
import thunderstorm from "./images/thunderstorm.jpg";
import drizzle from "./images/drizzle.jpg";
import rain from "./images/rain.jpg";
import snow from "./images/snow.jpg";
import mist from "./images/mist.jpg";
import smoke from "./images/smoke.jpg";
import haze from "./images/haze.jpg";
import dust from "./images/dust.jpg";
import fog from "./images/fog.jpg";
import sand from "./images/sand.jpg";
import ash from "./images/ash.jpg";
// import squall from "./images/squall.jpg";
import tornado from "./images/Tornado.jpg";
import { PassiveListener } from 'react-event-injector';






function App() {
  const [weatherData, setWeatherData] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const [cityGeo, setCityGeo] = React.useState({ lat: "", lon: "" });
  const widthOfDevice = useMediaQuery();

  function useMediaQuery() {
    const [screenSize, setScreenSize] = React.useState([0, 0]);

    useLayoutEffect(() => {
      function updateScreenSize() {
        setScreenSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return screenSize;
  }

  function changeBackground(givendata) {

    const body = document.body;
    body.style.color = "white";
    body.style.backgroundSize = "cover";

    switch (givendata) {
      case "Cloud":
        body.style.backgroundImage = "url(" + cloud + ")";
        break;
      case "Clear":
        body.style.backgroundImage = "url(" + clear + ")";
        break;
      case "Thunderstorm":
        body.style.backgroundImage = "url(" + thunderstorm + ")";
        break;
      case "Drizzle":
        body.style.backgroundImage = "url(" + drizzle + ")";
        break;
      case "Rain":
        body.style.backgroundImage = "url(" + rain + ")";
        break;
      case "Snow":
        body.style.backgroundImage = "url(" + snow + ")";
        break;
      case "Mist":
        body.style.backgroundImage = "url(" + mist + ")";
        break;
      case "Smoke":
        body.style.backgroundImage = "url(" + smoke + ")";
        break;
      case "Haze":
        body.style.backgroundImage = "url(" + haze + ")";
        break;
      case "Dust":
        body.style.backgroundImage = "url(" + dust + ")";
        break;
      case "Fog":
        body.style.backgroundImage = "url(" + fog + ")";
        break;
      case "Sand":
        body.style.backgroundImage = "url(" + sand + ")";
        break;
      case "Ash":
        body.style.backgroundImage = "url(" + ash + ")";
        break;
      case "Squall":
        body.style.backgroundImage = "url(" + clear + ")";
        break;
      case "Tornado":
        body.style.backgroundImage = "url(" + tornado + ")";
        break;
      default:
        body.style.backgroundImage = "url(" + fog + ")";
    }
  }


  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick() {

    setCityName(input);

  }









  useEffect(() => {


    if (cityName === "") {
     
      function getLocation() {

        navigator.geolocation.getCurrentPosition(showPosition);


      }
      window.onload = getLocation();
      function showPosition(position) {
        setCityGeo({ lat: position.coords.latitude, lon: position.coords.longitude });
        console.log("dds");
      }

      async function fetchData() {

        let url;
        console.log(cityName);
        url =
          "https://us1.locationiq.com/v1/reverse.php?lat=" + cityGeo.lat + "&lon=" + cityGeo.lon + "&key=pk.767b1c56367418618db6600036880cfc&format=json";
        let response = await fetch(url);
        let data = await response.json();
        let item = [data];
        setCityName(item[0].address.county);
        setCityGeo({ lat: item[0].lat, lon: item[0].lon });
      }

      fetchData();
    } else {
      async function fetchData() {

        let cityUrl, url;

        console.log(cityName);
        cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=8e1b05f5f1637347ee4f67f18042f8ee";

        let res = await fetch(cityUrl);
        let cityData = await res.json();
        setCityGeo({ lat: cityData.coord.lat, lon: cityData.coord.lon });


        url =
          "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityGeo.lat + "&lon=" + cityGeo.lon + "&appid=8e1b05f5f1637347ee4f67f18042f8ee&units=metric";
        let response = await fetch(url);
        let data = await response.json();
        let item = [data];
        setWeatherData(item);
        console.log(cityUrl);
        item && changeBackground(item[0].current.weather[0].main);
        //changeBackground(item.current.uvi);

      }

      fetchData();
    }



  }, [cityGeo.lat, cityGeo.lon, cityName]);









  return (
    <div>

      {weatherData[0] && <HEADER detail={weatherData[0]} name={cityName} />}
      {weatherData[0] && <HOURLY detail={weatherData[0]} />}
      {weatherData[0] && <DAILY detail={weatherData[0]} />}
      {weatherData[0] && <TODAYDESCRIPTION detail={weatherData[0]} />}
      {weatherData[0] && <CURRENTDATA detail={weatherData[0]} />}




      <div className="container change-city">
        <div className="row">
          <div className="col-6">
            <PassiveListener onChange={handleChange}>
              <input type="text" className="form-control" placeholder="Enter City" />
            </PassiveListener>

          </div>
          <div className="col-4">
            <PassiveListener onClick={handleClick}>
              <button className="btn btn-outline-secondary">Go</button>
            </PassiveListener>

          </div>
        </div>
      </div>





    </div>
  );
}

export default App;

import "./styles.css";
import HEADER from "./components/header/HEADER";
import HOURLY from "./components/hourly-components/HOURLY";
import DAILY from "./components/daily-components/DAILY";
import TODAYDESCRIPTION from "./components/todaydescription/TODAY";
import CURRENTDATA from "./components/currentData/CURRENTDATA";
import React, { useEffect } from "react";



function App() {
  const [weatherData, setWeatherData] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [cityName, setCityName] = React.useState("Auckland");
  const [cityGeo, setCityGeo] = React.useState({ lat: -36.848461, lng: 174.76333 });

  console.log(cityName, cityGeo);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick(event) {
    setCityName(input);
  }

  useEffect(() => {

    async function fetchData() {


      const cityUrl = "https://api.opencagedata.com/geocode/v1/json?q=" + cityName + "&key=da1e71d2826549a8ae982ae3dcb375a2";
      const res = await fetch(cityUrl);
      const cityData = await res.json();
      console.log(cityData);
      setCityGeo({ lat: cityData.results[0].geometry.lat, lng: cityData.results[0].geometry.lng });

      const url =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityGeo.lat + "&lon=" + cityGeo.lng + "&appid=590618c9d39064eb005bc3b95c9ea141&units=metric";
      const response = await fetch(url);
      const data = await response.json();
      const item = [data];
      setWeatherData(item);
    }

    fetchData();

  }, [cityGeo.lat, cityGeo.lng, cityName, input]);




  return (
    <div>

      {weatherData[0] && <HEADER detail={weatherData[0]} name={cityName} />}
      {weatherData[0] && <HOURLY detail={weatherData[0]} />}
      {weatherData[0] && <DAILY detail={weatherData[0]} />}
      {weatherData[0] && <TODAYDESCRIPTION detail={weatherData[0]} />}
      {weatherData[0] && <CURRENTDATA detail={weatherData[0]} />}




        <div className="container m-2 text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" className="form-control" onChange={handleChange} placeholder={input}  />
          </div>
          <div className="col-6">
          <button onClick={useEffect && handleClick} className="btn btn-secondary">Go</button>
          </div>
        </div>
        </div>


      


    </div>
  );
}

export default App;

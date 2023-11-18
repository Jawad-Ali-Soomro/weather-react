import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [cityName, setCityname] = useState("");
  const [info, setInfo] = useState("");

const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  params: {city: cityName},
  headers: {
    'X-RapidAPI-Key': 'eece9701d5msh16333191a55c652p17b5b7jsnb7792f8d8b1c',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

  const getResult = () => {
    axios.request(options).then(res => {
      setInfo(res.data)
    }
    );
  };
  console.log(info);
  return (
    <div className="Home">
      <div className="logo">
        <a href="/">Weather</a>
        <img src="./logo.png" alt="" />
      </div>
      <Toaster />
      <input
        type="text"
        placeholder="Enter City"
        value={cityName}
        onChange={(e) => setCityname(e.target.value)}
      />
      <button
        onClick={function () {
          if (!cityName) {
            toast.error("Please Enter City Name");
          } else {
            getResult();
          }
        }}
      >
        Search
      </button>
      <div className="result">
       {
        <div className="info-sect">
        <h1><label htmlFor="">Temperature : </label>{JSON.stringify(info.temp)}</h1>
        <h1><label htmlFor="">Feels Like :</label>{JSON.stringify(info.feels_like)}</h1>
        <h1><label htmlFor="">Humidity : </label>{JSON.stringify(info.humidity) + '%'}</h1>
        <h1><label htmlFor="">Clouds : </label>{JSON.stringify(info.cloud_pct) + '%'}</h1>
        <h1><label htmlFor="">Wind Speed : </label>{JSON.stringify(info.wind_speed) + 'm/h'}</h1>
        </div>
       }
      </div>
    </div>
  );
}

export default App;

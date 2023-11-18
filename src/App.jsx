import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [cityName, setCityname] = useState("");
  const [info, setInfo] = useState("Sukkur");

  const options = {
    method: "GET",
    url: "https://openweather43.p.rapidapi.com/weather",
    params: {
      q: cityName,
      appid: [
        "da0f9c8d90bde7e619c3ec47766a42f4",
        "da0f9c8d90bde7e619c3ec47766a42f4",
      ],
      units: "metric",
    },
    headers: {
      "X-RapidAPI-Key": "eece9701d5msh16333191a55c652p17b5b7jsnb7792f8d8b1c",
      "X-RapidAPI-Host": "openweather43.p.rapidapi.com",
    },
  };
  const getResult = () => {
    axios.request(options).then((res) => setInfo(res.data));
  };
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
        {info === null ? (
          <div className="info-sect">
            <h1>
              <label htmlFor="">Temperature : </label>
              {JSON.stringify(info.main.temp)}
            </h1>
            <h1>
              <label htmlFor="">Feels Like : </label>
              {JSON.stringify(info.main.feels_like)}
            </h1>
            <h1>
              <label htmlFor="">Maximum Temperature: </label>
              {JSON.stringify(info.main.temp_max)}
            </h1>
            <h1>
              <label htmlFor="">Humidity : </label>
              {JSON.stringify(info.main.humidity) + "%"}
            </h1>
          </div>
        ) : (
          "Getting Data"
        )}
      </div>
    </div>
  );
}

export default App;

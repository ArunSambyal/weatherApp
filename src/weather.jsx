import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import CalnderCom from "./ReactCalander/CalnderCom";

const App = () => {
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  const getweatherDetails = () => {
    const apiUrl =
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cd7d2a106307b86a51b00cd6af9f27ad";

    axios
      .get(apiUrl)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };
  const handleChange = (e) => {
    setInputCity(e.target.value);
  };
  const handleSearch = () => {
    getweatherDetails(inputCity);
  };
  useEffect(() => {
    getweatherDetails("Delhi");
  }, []);
  return (
    <>
      <div className="col-md-12">
        <div className="weatherBg">
          <h1 className="heading">Weather App</h1>
          <div className="d-grid gap-3 col-4 mt-4">
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={inputCity}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultBox">
            <img
              className="weatherIcon"
              src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <h5 className="weatherCity">{data?.name}</h5>
            <h6 className="weatherTem"> {data?.main?.temp}°C</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

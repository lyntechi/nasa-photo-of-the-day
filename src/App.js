import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Apod from "./components/Apod";
import Button from "./components/Button";

function App() {
  const [apod, setApod] = useState([]);
  const [hideApod, setHideApod]=useState(true);

  const buttonChanger = ()=>{
    setHideApod(!hideApod)
  
  }
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=F2C9vXovwBZrguI7dTnEGy4YXpVc1cusi5ulQBht"
      )
      .then((response) => {
        setApod(response.data);
        console.log("successful response from API", response.data);
      })
      .catch((error) => {
        console.log("No response from API, Something went wrong", error);
      });
  }, []);

  return (
    <div className="App" onClick={buttonChanger}>
      
      <Button />
      {hideApod === true ? null : <Apod apod={apod} /> }
      
    </div>
  );
}

export default App;

import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Apod from './components/Apod'

function App() {
  
  const [apod, setApod]=useState([])
  
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=F2C9vXovwBZrguI7dTnEGy4YXpVc1cusi5ulQBht')
    .then((response)=>{
      setApod(response.data)
      console.log('successful response from API', response.data)
    })
    .catch((error)=>{
      console.log('No response from API, Something went wrong', error)
    })
  },[])


  return (
    <div className="App">
      
      <Apod apod={apod} />
    </div>
  );
}

export default App;

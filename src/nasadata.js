import React, { useState, useEffect } from 'react';
import axios from 'axios';


   //call an API and get data like pictures 
    //for each picture we want to create a new component to Display
    //that data
function NasaList(){

        const [apod, setApod]=useState([])

        useEffect(()=>{
            axios.get("https://api.nasa.gov/planetary/apod?api_key=KBjNqD6OBb2fbDQhaa1uxyxcH4au6eedNeme3aj6")
            .then(response => {
                 
                setApod(response.data)
            })
          }, [])

          useEffect(()=> {
              console.log("apod has changed", apod)
          }, [apod])
        
              
            

          
         
    
   
    return <div className=""></div>

}

export default NasaList
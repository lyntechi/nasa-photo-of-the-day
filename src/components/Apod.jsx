import React from 'react'


function Apod(props){
    const{apod}=props;
    
    return <div className="apodContainer">
             
             
             
            
             <img src={apod.hdurl} alt=""/>
             <div className="textSection"><h1>{apod.title}</h1>
             <p>Copyright: {apod.copyright}</p>
             <p>Date: {apod.date}</p>
             <p>{apod.explanation}</p></div>

          </div>
}

export default Apod
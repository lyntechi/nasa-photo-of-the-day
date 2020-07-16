import React from 'react'


function Apod(props){
    const{apod}=props;
    
    return <div className="apodContainer">
             <p></p>
             <p></p>
             <p></p>
             <p></p>
             <img src={apod.hdurl} alt=""/>

          </div>
}

export default Apod
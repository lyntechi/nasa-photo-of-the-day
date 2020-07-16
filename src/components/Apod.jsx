import React from 'react'
import styled from 'styled-components'


function Apod(props){
    const{apod}=props;

    const TextArea = styled.div`
  
   font-size: 1.1rem;
    letter-spacing: 1.5px;
    background: rgb(100,50,120);
    color: whitesmoke;

    
    `
  
    
    
    return < div className="apodContainer">
             
             
             
             
            <img src={apod.hdurl} alt=""/>
            
            <TextArea><h1>{apod.title}</h1>
            <p>Copyright: {apod.copyright}</p>
            <p>Date: {apod.date}</p>
            <p>{apod.explanation}</p></TextArea>

          </div>
}

export default Apod
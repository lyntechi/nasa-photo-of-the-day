import React from "react";
import styled, { keyframes } from "styled-components";

function Apod(props) {
  const { apod } = props;

  const KFrames = keyframes`
  
    80% {
      transform: scale(0.3);
      opacity: 0.5;
    }
    100% {
      transform: scale(1) ;
      opacity: 1;
    }
  `;

  const ContainerStyles = styled.div`
    transform: scale(0);
    animation: ${KFrames} 1s ease-in-out forwards;
    opacity: 0;
    // letter-spacing: 1.5px;
    // line-height: 35px;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    margin: 30px;
    text-align: center;
    
    }

    img {
      opacity: 0.9;
      ${KFrames};
      margin: 20px;
      border-radius: 40px;
      border: solid 2px pink;
       width:600px;
      height: 600px;
    }

    p {
      padding: 0 20px;
      font-size: 1rem;
      
    }
    .text {
    
      background: rgba(257, 100, 106, 0.9);
      border-radius: 40px;
      border: solid 2px pink;
      color: black;
      width: 600px;
       height: 600px;
      margin: 20px;
    }
  `;
  

  return (
    <ContainerStyles>
      <img src={apod.hdurl} alt="" />

      <div className="text">
        {" "}
        <h1>{apod.title}</h1>
        <p>Copyright: {apod.copyright}</p>
        <p>Date: {apod.date}</p>
        <p>{apod.explanation}</p>
      </div>
    </ContainerStyles>
  );
}

export default Apod;

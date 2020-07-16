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
      transform: scale(1) rotate(360deg);
      opacity: 1;
    }
  `;

  const ContainerStyles = styled.div`
    transform: scale(0);
    animation: ${KFrames} 3s ease-in-out forwards;
    opacity: 0;
    font-size: 1.1rem;
    letter-spacing: 1.5px;
    line-height: 35px;
    color: whitesmoke;
    display: flex;
    margin: 60px;
    text-align: center;
    h1 {
      :hover {
        color: black;
        font-weight: bold;
      }
    }

    img {
      ${KFrames};
      margin: 20px;
      border-radius: 40px;
      border: dashed 4px rgb(137, 137, 226);
      width: 50%;
      height: 650px;
    }

    p {
      padding: 0 20px;
      :hover {
        color: black;
        font-weight: bold;
      }
    }
    .text {
      background: rgba(39, 167, 206, 0.4);
      border-radius: 40px;
      border: dashed 4px rgb(137, 137, 226);
      color: whitesmoke;
      width: 50%;
      height: 650px;
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

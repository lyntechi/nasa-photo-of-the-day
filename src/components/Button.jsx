import React from "react";
import styled from "styled-components";

function Button(props) {
  const { apod, setApod, hideApod } = props;


  const Button = styled.button`
    margin: 0;
    padding: 30px;
    width: 700px;
    margin: 30px;
    font-size: 3.2rem;
    max-width: 100%;
    box-sizing: border-box;
    letter-spacing: 4px;
    background: rgba(207, 50, 86, 0.9);
    border-radius: 20px;
    :hover {
      background: rgba(39, 167, 206, 0.4);
      color: white;
    }
  `;


  return (
    
      <Button>
       {hideApod === true ? "Open 🚀👽" :"Close 🚀👽" }
      </Button>
    
  );
}

export default Button;

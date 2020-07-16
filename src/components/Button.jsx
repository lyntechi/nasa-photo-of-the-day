import React from "react";
import styled from "styled-components";

function Button(props) {
  const { apod, setApod } = props;


  const Button = styled.button`
    margin: 0;
    padding: 0;
    width: 380px;
    margin: 30px;
    font-size: 2rem;
    max-width: 100%;
    box-sizing: border-box;
    :hover {
      background: rgba(39, 167, 206, 0.4);
      color: white;
    }
  `;

  return (
    
      <Button>
        Click Here To Read About "Comet NEOWISE"{" "}
      </Button>
    
  );
}

export default Button;

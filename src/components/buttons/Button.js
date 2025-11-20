import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background: ${(props) => (props.$primary ? "#00bbf9ff" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#00bbf9ff")};

  font-size: 1em;
  margin: 1em;
  padding: 1em 1.5em;
  border: 2px solid #00bbf9ff;
  border-radius: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${(props) => (props.$primary ? "white" : "#00bbf9ff")};
    color: ${(props) => (props.$primary ? "#00bbf9ff" : "white")};
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    background: rgb(255, 0, 0);
    color: #666;
    border: 2px solid rgb(255, 0, 0);
    transform: none;
    cursor: not-allowed;
  }
  &:disabled:hover {
    background: rgb(145, 0, 0);
    color: #666;
    border: 2px solid rgb(145, 0, 0)  ;
  }
  &:disabled:active {
    transform: none;
  }
  &:disabled:focus {
    outline: none;
  }
  &:disabled:focus-visible {
    outline: none;
  }
`;

const Button = (props) => {
    return (
        <ButtonContainer $primary onClick={props.onClick}>
          {props.children}
        </ButtonContainer>
    );
}

export default Button;

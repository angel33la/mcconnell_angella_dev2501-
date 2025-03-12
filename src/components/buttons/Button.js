import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

class Button extends React.Component {
render() {
    return (
        <ButtonContainer $primary onClick={this.props.onClick}>
        {this.props.children}
    </ButtonContainer>
    );
    }
}

export default Button;


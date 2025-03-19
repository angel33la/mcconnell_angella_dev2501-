import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #00bbf9ff;
  padding: 2rem;  
  width: 20%;
  min-height: 100px;
  color: #fff;
`;

const LinkContainer = styled.button`
  padding: 40px;
  border: 3px solid #9b5de5ff;
  color: #9b5de5ff;
  background-color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navigation = () => {
        return ( 
        <NavigationContainer> 
            <LinkContainer to = "#"> Newsfeed </LinkContainer> 
            <LinkContainer to = "#"> Messages </LinkContainer> 
            <LinkContainer to = "#"> Watch </LinkContainer> 
        </NavigationContainer>
        );
    }

export default Navigation;
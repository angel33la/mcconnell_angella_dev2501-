import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav `
  display: flex;
  flex-direction: column;
  background-color: #00bbf9ff;
  padding: 5rem;
  color: #fff;
`;

const LinkContainer = styled.button`
  padding: 60px;
  border-bottom: 1px solid #9b5de5ff;
  color: #9b5de5ff;
  background-color: #fff;
  text-decoration: none;
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
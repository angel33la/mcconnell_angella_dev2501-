import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationContainer = styled.nav `
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const LinkContainer = styled(Link)
`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  color: #fff;
  text-decoration: none;
`;

class Navigation extends React.Component {
    render() {
        return ( 
        <NavigationContainer> 
            <LinkContainer to = "#"> Newsfeed </LinkContainer> 
            <LinkContainer to = "#"> Messages </LinkContainer> 
            <LinkContainer to = "#"> Watch </LinkContainer> 
        </NavigationContainer>
        );
    }
}

export default Navigation;
import React from 'react';
import styled from 'styled-components';
//Add Router
import { Link } from "react-router";
import { NavLink } from "react-router";
// components
import { FaVideo, FaEnvelope, FaAddressCard, FaNewspaper } from 'react-icons/fa';


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
            {/* Links to component */}
            <Link to="/Dashboard"><span style={styles.rightIcons}><FaAddressCard/></span>Dashboard</Link>
            <NavLink to="/Newsfeed"><span style={styles.rightIcons}><FaAddressCard/></span>Newsfeed</NavLink>
            <LinkContainer to="/Dashboard"> <span style={styles.rightIcons}><FaAddressCard/></span>Dashboard </LinkContainer>
            <LinkContainer to = "/Newsfeed"> <span style={styles.rightIcons}><FaNewspaper/></span>Newsfeed </LinkContainer> 
            <LinkContainer to = "./src/pages/Messages.js"> <button style={styles.rightIcons}><FaEnvelope/></button>
            Messages </LinkContainer> 
            <LinkContainer to = "./src/pages/Notification.js"> <button style={styles.rightIcons}><FaVideo/></button>Watch </LinkContainer> 
        </NavigationContainer>
        );
    }

export default Navigation;

const styles = {
    rightIcons: {
      marginRight: '10px',
      fontSize: '1.5rem',
      color:'#f15bb5ff',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent',
    }
}
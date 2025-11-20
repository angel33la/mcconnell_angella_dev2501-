import React from 'react';
//import styled from 'styled-components';
//links
// import { Link } from 'react-router';
import { NavLink } from 'react-router';
// components
import { FaVideo, FaEnvelope, FaAddressCard, FaNewspaper } from 'react-icons/fa';

const Navigation = () => {
        return (
          <nav style={styles.navigation}>
            {/* links to components */}
            <NavLink to="/Dashboard" style={styles.navName}>
              <FaAddressCard />
              Dashboard
            </NavLink>
            <NavLink to="/Newsfeed" style={styles.navName}>
              <FaNewspaper />
              Newsfeed
            </NavLink>
            <NavLink to="/Messages" style={styles.navName}>
              <FaEnvelope />
              Messages
            </NavLink>
            <NavLink to="/Notification" style={styles.navName}>
              <FaVideo />
              Watch
            </NavLink>
          </nav>
        );
    }

export default Navigation;

const styles = {
  rightIcons: {
    marginRight: "10px",
    fontSize: "1.5rem",
    color: "#9b5de5ff",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
  },
  navigation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#00bbf9ff",
    padding: "2rem",
    width: "20%",
    minHeight: "100px",
    color: "#fff",
  },
  navName: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    border: "3px solid #9b5de5ff",
    color: " #9b5de5ff",
    backgroundColor: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.5rem",
    // textAlign: "center",
    marginBottom: "1rem",
    borderRadius: "5px",
  },
};
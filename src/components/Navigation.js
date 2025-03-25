import React from 'react';
//import styled from 'styled-components';
//links
import { Link } from 'react-router';
import { NavLink } from 'react-router';
// components
import { FaVideo, FaEnvelope, FaAddressCard, FaNewspaper } from 'react-icons/fa';


const Navigation = () => {
        return (
          <NavLink style={styles.navigation}>
            {/* links to components */}
            <Link to="/Dashboard" style={styles.navName}>
              <span style={styles.rightIcons}>
                <FaAddressCard />
              </span>
              {"Dashboard"}
            </Link>
            <NavLink to="/Newsfeed" style={styles.navName}>
              <span style={styles.rightIcons}>
                <FaNewspaper />
              </span>
              {"Newsfeed"}
            </NavLink>
            <Link to="/Messages" style={styles.navName}>
              <span style={styles.rightIcons}>
                <FaEnvelope />
              </span>
              {"Messages"}
            </Link>
            <Link to="/Notification" style={styles.navName}>
              <span style={styles.rightIcons}>
                <FaVideo />
              </span>
              {"Watch"}
            </Link>
          </NavLink>
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
    padding: "40px",
    border: "3px solid #9b5de5ff",
    color: " #9b5de5ff",
    backgroundColor: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center",
    marginBottom: "1rem",
    borderRadius: "5px",
  },
};
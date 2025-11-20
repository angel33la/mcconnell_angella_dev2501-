import React from 'react';
import { Link } from "react-router";

// images
import ImageUrl from '../images/icons8-female-profile-96.png';
import ImageUrl2 from '../images/favicon1.png';
import MyIcons from './MyIcons';
// components
import { FaSearch, FaBell, FaSlidersH, FaUserCircle } from "react-icons/fa";


const Header = (props) => {
        return (
        <header style={styles.myHeader}>
            <div style={styles.left}>
            <div style={styles.logo}>
                <MyIcons IconImg={ImageUrl2} ImageAlt="Woman Profile" />
            </div>
                <h1>mingoBook</h1>
            </div>
            <div style={styles.searchCont}>
            <span style={styles.inputIcon}>
                <FaSearch />
            </span>
            <input
                type="text"
                placeholder="Search"
                style={styles.inputWithIcon}/>
            </div>
            <div style={styles.right}>
                <Link to="/Notification" style={styles.rightIcons}>
                    <FaBell />
                </Link>
                <Link to="/Settings" style={styles.rightIcons}>
                    <FaSlidersH />
                </Link>
                <Link to="/Profile" style={styles.rightIcons}>
                    <FaUserCircle />
                </Link>
                <MyIcons IconImg={ImageUrl} ImageAlt="Woman Profile" />
                    <h2 style={styles.right}>Suzie Q.</h2>
            </div>
        </header>
        );
    }


export default Header;

const styles = {
    myHeader: {
        // margin: '1%',
            padding: '1%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderBottom: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            color:'#f15bb5ff',
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        // width: '100%',
        // margin: '10px',
    },
    logo: {
        width: '50px',
        height: '60px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    searchCont: {
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row',
        borderRadius:'2px',
        width: '40%'
    },
    rightIcons: {
        marginRight: '10px',
        fontSize: '1.5rem',
        color: '#00bbf9ff',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent',
    },
    inputWithIcon: {
        border: 'none',
        flex: '1',
        padding: '10px',
    },
    inputIcon: {
        padding: '10px',
        background: '#ddd',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.5rem',
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',        
        margin: '10px', 
        color: '#00bbf9ff',         
    }
}


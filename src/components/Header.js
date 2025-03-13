import React from 'react';
// images
import ImageUrl from '../images/favicon1.png';
import MyIcons from './MyIcons';
// components
import { FaSearch, FaEnvelope, FaBell } from 'react-icons/fa';


const Header = (props) => {
        return ( 
        <Header style={styles.HeaderContainer}>
            <div style={styles.left}>
                <div style={styles.logo}></div>
                <h1>mingoBook</h1>
            </div>
            <div style={styles.searchCont}>
                <span style={styles.inputIcon}><FaSearch/></span>
                <input type="text" placeholder="Search" style={styles.inputWithIcon}/></div>
            <div style={styles.right}>
                <button style={styles.rightIcons}><FaEnvelope/></button>
                <button style={styles.rightIcons}><FaBell/></button>
                <MyIcons IconImg={ImageUrl} ImageAlt="Woman Profile"/>
            </div>
            </Header>
        );
    }


export default Header;

const styles = {
    HeaderContainer: {
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
        // margin: '10px',          
    },
}


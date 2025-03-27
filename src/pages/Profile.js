import React from 'react';
import { Link } from 'react-router-dom';
import { FaVideo, FaEnvelope, FaAddressCard, FaNewspaper } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className="profile">
            <h1>Profile</h1>
            <Link to="/Dashboard" style={styles.navName}>
                <span style={styles.rightIcons}>
                    <FaAddressCard />
                </span>
                {"Dashboard"}
            </Link>
            <Link to="/Newsfeed" style={styles.navName}>        
                <span style={styles.rightIcons}>                    
                    <FaNewspaper />
                </span>
                {"Newsfeed"}                
            </Link>                                
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
        </div>
    );
};  

export default Profile;

const styles = {
    navName: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        textDecoration: 'none',
        color: '#333'
    },
    rightIcons: {
        marginRight: '10px'
    }
};
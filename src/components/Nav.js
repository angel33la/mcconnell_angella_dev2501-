import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Nav = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>
                        <FaHome style={styles.navIcon} />
                        Home
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/profile" style={styles.navLink}>
                        <FaUser style={styles.navIcon} />
                        Profile
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/settings" style={styles.navLink}>
                        <FaCog style={styles.navIcon} />
                        Settings
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/logout" style={styles.navLink}>
                        <FaSignOutAlt style={styles.navIcon} />
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;

const styles = {
    nav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '200px'
    },
    navList: {
        listStyle: 'none',
        padding: '0',
        margin: '0'
    },
    navItem: {
        marginBottom: '10px'
    },
    navLink: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#333'
    },
    navIcon: {
        marginRight: '5px'
    }    
}
// };
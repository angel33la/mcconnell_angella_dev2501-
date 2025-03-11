import React from 'react';
import logo from '../images/logo.png';
import avatar from '../images/avatar.png';
import { BiSearchAlt } from "react-icons/bi";
import { BiSolidCog } from "react-icons/bi";
import { BiLogoDigg } from "react-icons/bi";



const Header = props => {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <img src={BiLogoDigg} alt="logo" style={styles.logoImg}/>
                <h1 style={{marginLeft: '10px'}}>{props.pgTitle}</h1>
            </div>
            <form style={styles.searchContainer}>
                <input type="text" placeholder={props.placeholder} style={styles.searchInput}/>
                <BiSearchAlt style={styles.searchIcon}/>
            </form>
            <div style={styles.user}>
                <img src={avatar} alt="avatar" style={styles.avatar}/>
                <span>Angelina Love</span>
                <BiSolidCog style={styles.cog}/>
            </div>
        </header>
    );
}
export default Header;

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        height: '50px'
    },
    logo: {
        display: 'flex',
        alignItems: 'center'
    },
    logoImg: {
        height: '30px',
        width: '30px'
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '5px'
    },
    searchInput: {
        border: 'none',
        outline: 'none',
        padding: '5px'
    },
    searchIcon: {
        color: '#aaa'
    },
    user: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        height: '30px',
        width: '30px',
        borderRadius: '50%'
    },
    cog: {
        color: '#aaa',
        marginLeft: '10px'
    }
}
// };   
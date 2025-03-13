import React from 'react';
import styled from 'styled-components';
// images
import Logo from '../images/favicon1.png';
// components
import { CiSearch, CiSettings } from 'react-icons/ci';
import SearchButton from './SearchButton.js';


const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;



const SearchContainer = styled.div `
    display: flex;
    align-items: center;
    padding: .55rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;


const Header = (props) => {
        return ( 
        <HeaderContainer>
            <img src={Logo} alt="bird" style={styles.Logo} placeholder="flamingo" />
            <h1>mingoBook</h1>
            <SearchContainer>
                <CiSearch size={24} color="#ccc" />
                <SearchButton type="text" placeholder="Search" value={props.CiSearch} />
            </SearchContainer>
            <CiSettings size={24} color="#000" value={props.btnText}/>
                </HeaderContainer>
        );
    }


export default Header;

const styles = {
    myAvatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '20px',
    },
    CiSearch: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '20px',
    },
    CiSettings: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '20px',
    },  
};
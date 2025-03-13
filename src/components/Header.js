import React from 'react';
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
// images
import Logo from '../images/logo.png';
import AvatarSrc from '../images/avatar.png';


const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
`;

 /* const Logo = styled.img `
    font-size: 24px;
    font-weight: bold; 
`; */

const SearchContainer = styled.div `
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;


const Header = (props) => {
        return ( 
        <HeaderContainer>
            {/* <img src={AvatarImg} alt="Logo" /> */}
            {/* <img placeholder="It does not like this image" /> */}

            <SearchContainer>
                <CiSearch size={24} color="#ccc" />
                <SearchInput type="text" placeholder={props.searchPlaceholder} />
            </SearchContainer>
            <Avatar src={props.avatarSrc} />
            <CiSettings size={24} color="#ccc" />
                </HeaderContainer>
        );
    }


export default Header;
import React from 'react';
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";


const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: #00f5d4ff;
`;

const Logo = styled.div `
    font-size: 24px;
    font-weight: bold;
`;

const SearchContainer = styled.div `
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SearchInput = styled.input `
    padding: 10px;
    border: none;
    border-radius: 5px;
`;

const Avatar = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f15bb5ff;
    margin-right: 20px;
`;

class Header extends React.Component {
    render() {
        return ( <HeaderContainer>
            <Logo>{this.props.logo}</Logo>
            <SearchContainer>
                <CiSearch size={24} color="#ccc" />
                <SearchInput type="text" placeholder={this.props.searchPlaceholder} />
            </SearchContainer>
            <Avatar src={this.props.avatarSrc} />
            <CiSettings size={24} color="#ccc" />
                </HeaderContainer>
        );
    }
}

export default Header;
import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdSettings } from 'react-icons/md';

const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
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
    background-color: #ccc;
    margin-right: 20px;
`;

class Header extends React.Component {
    render() {
        return ( <HeaderContainer>
            <Logo>{this.props.logo}</Logo>
            <SearchContainer>
                <AiOutlineSearch size={24} color="#ccc" />
                <SearchInput type="text" placeholder={this.props.searchPlaceholder} />
            </SearchContainer>
            <Avatar src={this.props.avatarSrc} />
            <MdSettings size={24} color="#ccc" />
                </HeaderContainer>
        );
    }
}

export default Header;
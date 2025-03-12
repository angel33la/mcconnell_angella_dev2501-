import React from 'react';
import styled from 'styled-components';

const AdCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #fee440ff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
`;

const Title = styled.h2`
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #f15bb5ff;
`;

const Subtitle = styled.p`
    padding: 10px;
    font-size: 14px;
    color: #9b5de5ff;
`;

class AdCard extends React.Component {
render() {
    return (
        <AdCardContainer>
            <Image src={this.props.image} />
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.subtitle}</Subtitle>
        </AdCardContainer>
    );
    }
}

export default AdCard;
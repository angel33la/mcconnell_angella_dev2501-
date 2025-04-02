import React from 'react';
import styled from 'styled-components';

const AdCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 20px;
    margin: 20px;
    border: 1px solid #fee440ff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
`;

const Title = styled.h2`
    padding: 5px;
    font-size: 2.5rem;
    font-weight: bold;
    color: #f15bb5ff;
`;

const Subtitle = styled.p`
    padding: 5px;
    font-size: 1.5rem;
    color: #9b5de5ff;
`;

const AdCard = (props) => {
    return (
        <AdCardContainer>
            <Image src={props.image} />
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
        </AdCardContainer>
    );
}

export default AdCard;
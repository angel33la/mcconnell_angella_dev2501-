import React from 'react';
import styled from 'styled-components';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';

const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 20px;
`;

const Title = styled.h2`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.p`
  padding: 10px;
  font-size: 14px;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

class PostCard extends React.Component {
  render() {
    return (
      <PostCardContainer>
        <Avatar src={this.props.avatar} />
        <Title>{this.props.title}</Title>
        <Description>{this.props.description}</Description>
        <ButtonContainer>
          <AiOutlineEdit size={24} color="#ccc" onClick={this.props.onEdit} />
          <AiOutlineDelete size={24} color="#ccc" onClick={this.props.onDelete} />
        </ButtonContainer>
      </PostCardContainer>
    );
  }
}

export default PostCard;

import React from 'react';
import styled from 'styled-components';
import Button from '../components/buttons/Button.js';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

// class Form extends React.Component {
// render() {
const Form = (props) => {
    return (
        <FormContainer onSubmit={props.onSubmit}>
            <Input type="text" placeholder="Post Title" value={props.title} />
            <Input type="text" placeholder="Post Description" value={props.description} />
            <Button type="submit">Submit</Button>
        </FormContainer>
    );
}
export default Form;

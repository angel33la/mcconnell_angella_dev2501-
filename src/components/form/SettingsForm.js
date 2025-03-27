import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  padding: 20px;
  height: 100vh;
  width: 99vh;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 1%;
  background-color: whitesmoke;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputRow = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 1%;
  margin: 1%;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled(Button)`
  padding: 10px;
  border-radius: 5px;
  background-color: #00bbf9ff;
  color: #000;
  border: 1px solid #fee440ff;
  cursor: pointer;
`;

const SettingsForm = (props) => {
  return (
    <Container>
      <ProfileHeader>
        <Avatar src={props.avatar} alt="avatar" />
        <h4>{props.username}</h4>
        <StyledButton onClick={props.onClick}>Edit Profile</StyledButton>
      </ProfileHeader>

      <Form onSubmit={props.editMe}>
        <InputRow>
          <Input
            type="text"
            name="fname"
            value={props.fname}
            placeholder="First Name"
            readOnly
          />
          <Input
            type="text"
            name="lname"
            value={props.lname}
            placeholder="Last Name"
            readOnly
          />
        </InputRow>
        <InputRow>
          <Input
            type="text"
            name="street"
            value={props.street}
            placeholder="Street"
            readOnly
          />
          <Input
            type="text"
            name="city"
            value={props.city}
            placeholder="City"
            readOnly
          />
        </InputRow>
        <InputRow>
          <Input
            type="text"
            name="state"
            value={props.state}
            placeholder="State"
            readOnly
          />
          <Input
            type="text"
            name="zip"
            value={props.zip}
            placeholder="Zip"
            readOnly
          />
        </InputRow>
        <InputRow>
          <Input
            type="email"
            name="email"
            value={props.email}
            placeholder="Email"
            readOnly
          />
          <Input
            type="phone"
            name="phone"
            value={props.phone}
            placeholder="Phone"
            readOnly
          />
        </InputRow>
      </Form>
    </Container>
  );
};

export default SettingsForm;

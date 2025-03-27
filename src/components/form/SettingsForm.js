import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import MyIcons from "../MyIcons";
import ImageUrl from "../../images/icons8-female-profile-96.png";





const Container = styled.section`
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
  justify-content: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  padding: 2px;
  height: 400px;
  min-width: 800px;
    border: 1px solid #ccc;
    borderRadius: 5px;
    backgroundColor: whitesmoke;
    color: #333;
    width: 100%;
    fontSize: 1.5rem;
`;



const Form = styled.form`
  display: flex;
  flex-direction: column;
  width:400px;
  padding: 1%;
  background-color: whitesmoke;
  color: #333;
`;

const InputRow = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 1%;
  margin: 1%;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const styles = {
    button: {
        padding: '10px 20px',
        marginTop: '1px',
        borderRadius: '5px',
        backgroundColor: ' #f15bb5ff',
        color: '#000',
        border: 'none',
        cursor: 'pointer',
    },
    img: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        objectFit: "cover",
    },
};

const SettingsForm = (props) => {
  return (
    <Container>
      <MyIcons IconImg={ImageUrl} ImageAlt="Woman Profile" style={styles.img} />

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
        <Button style={styles.button} onClick={props.onClick}>
          Edit Profile
        </Button>
      </Form>
    </Container>
  );
};

export default SettingsForm;


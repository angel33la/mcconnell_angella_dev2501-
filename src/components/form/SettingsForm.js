import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
// import { FaPencilAlt } from "react-icons/fa";

const SettingsForm = (props) => {
    return (
        <section style={styles.container}>
            <div style={styles.ProfileHeader}>
            <img style={styles.avatar} src={props.avatar} alt="avatar" />
            <h4>{props.username}</h4>
            <Button style={styles.button} onClick={props.onClick}>
                Edit Profile
            </Button>
        </div>

        <form style={styles.form} onSubmit={props.editMe}>
        <p style={styles.myInputRow}>
            <Input
                style={styles.myInput}
                type="text"
                name="fname"
                value={props.fname}
                placeholder="First Name"
                readOnly
            />
            <Input
                style={styles.myInput}
                type="text"
                name="lname"
                value={props.lname}
                placeholder="Last Name"
                readOnly
            />
        </p>
        <p style={styles.myInputRow}>
            <Input
                style={styles.myInput}
                type="text"
                name="street"
                value={props.street}
                placeholder="Street"
                readOnly
            />
            <Input
                style={styles.myInput}
                type="text"
                name="city"
                value={props.city}
                placeholder="City"
                readOnly
                    />
            </p>
            <p style={styles.myInputRow}>
            <Input
                style={styles.myInput}
                type="text"
                name="state"
                value={props.state}
                placeholder="State"
                readOnly
            />
            <Input
                style={styles.myInput}
                type="text"
                name="zip"
                value={props.zip}
                placeholder="Zip"
                readOnly
            />
            </p>
            <p style={styles.myInputRow}>
            <Input
                style={styles.myInput}
                type="email"
                name="email"
                value={props.email}
                placeholder="Email"
                readOnly
            />
            <Input
                style={styles.myInput}
                type="phone"
                name="phone"
                value={props.phone}
                placeholder="Phone"
                readOnly
            />
            </p>
        </form>
    </section>
    );
}

export default SettingsForm;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #ccc',
        padding: 20,
        height: '100vh',
        width: '99vh',
    },
    ProfileHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        // Added this to expand the width of the form.
        width: '500px',
        padding: '2%',
        backgroundColor: 'whitesmoke',
        color: '#333',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    myInputRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    myInput: {
        padding: '2%',
        margin: '1%',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#00bbf9ff',
        color: '#000',
        border: '1px solid #fee440ff',
        cursor: 'pointer',
    },
    }
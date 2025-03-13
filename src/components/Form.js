import React from 'react';
import Button from '../components/buttons/Button.js';

const Form = (props) => {
    return (
        <form style={styles.Form} onSubmit={props.addName}>
            <div style={styles.inputContainer}>
                <input style={styles.input} type="text" placeholder="What's is on your mind" name="name" />
                <input style={styles.input} type="text" placeholder="Post" name="email" />
            </div>
            <Button btnText="Submit" />
        </form>
    );
}

export default Form;

const styles = {
    Form: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    }
};
import React from 'react';
import Button from '../components/buttons/Button.js';
import MyIcons from '../components/MyIcons.js';
import IconUrl2 from '../images/icons8-eminem-96.png';

const Form = (props) => {
    return (
        <form style={styles.Form} onSubmit={props.addItem}>
            <MyIcons IconImg={IconUrl2} ImageAlt="Woman Profile"/>
            <div style={styles.inputContainer}>
                <input style={styles.input} onChange={props.getInput} type="text" value={props.image} placeholder="Image URL" name="image" />
                <input style={styles.input} onChange={props.getInput} type="text" value={props.title} placeholder="Title" name="title" />
                <input style={styles.input} onChange={props.getInput} type="text" value={props.description} placeholder="Description" name="description" />
            </div>
            <Button {...props} />
        </form>
    );
}

export default Form;

const styles = {
    Form: {
        display: 'flex',
        flexDirection: 'column,',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'whitesmoke',
        color: '#333',
        border: '1px solid #00f5d4ff',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    input: {
        padding: '2%',
        margin: '1%',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    }
};
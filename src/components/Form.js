import React from 'react';
import Button from '../components/buttons/Button.js';
import MyIcons from '../components/MyIcons.js';
import ImageUrl2 from '../images/icons8-fortune-teller-48.png';

const Form = (props) => {
    return (
        <form style={styles.Form} onSubmit={props.addItem}>
            <MyIcons IconImg={ImageUrl2} ImageAlt="Woman Profile"/>
            <div style={styles.inputContainer}>
                {/* <input style={styles.input} onChange={props.getInput} type="text" value={props.image} placeholder="Image URL" name="image" /> */}
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
        flexDirection: 'column',
        // Added this to expand the width of the form.
        width: '350px',
        padding: '2%',
        backgroundColor: 'whitesmoke',
        color: '#333',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
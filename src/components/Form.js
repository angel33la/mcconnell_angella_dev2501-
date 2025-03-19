import React from 'react';
import Button from '../components/buttons/Button.js';
//import MyIcons from '../components/MyIcons.js';
//import IconUrl2 from '../images/icons8-eminem-96.png';

const Form = props => {
    return (
        <form style={styles.myForm} 
        onSubmit={props.addItem}>
            {/* <MyIcons IconImg={IconUrl2} ImageAlt="Woman Profile"/> */}
            <div style={styles.inputContainer}>
                <input name="image"
                value={props.image} 
                onChange={props.getInput} 
                style={styles.input} 
                placeholder="Image URL"
                type="text" />
                <input name="title"
                value={props.title} 
                onChange={props.getInput} 
                style={styles.input} 
                placeholder="Title"
                type="text" />
                <input name="description"
                value={props.description} 
                onChange={props.getInput} 
                style={styles.input} 
                placeholder="Description"
                type="text" />
            </div>
            <Button {...props}/>
        </form>
    )
};

export default Form;

const styles = {
    myFormForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        padding: '2%',
        backgroundColor: 'whitesmoke',
        color: '#00bbf9ff',
        /* justifyContent: 'space-between',
        border: '2px solid #00f5d4ff', */
        borderRadius: '5px',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, 0.1)',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
       // width: '100%',
        justifyContent: 'space-around', 
        //marginBottom: '20px',
    },
    input: {
        padding: '2%',
        margin: '1%',
        //marginRight: '10px',
        //border: '1px solid #ccc',
        //borderRadius: '5px',
    }
};
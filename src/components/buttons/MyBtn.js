import React from 'react';

const MyBtn = (props) => {
    return (
        <button style={styles.button} >
                {props.btnText}
            </button>
    );
}   
export default MyBtn;

const styles = {
    button: {
        backgroundColor: '#00f5d4',
        color: 'white',
        padding: '1%',
        margin: '1%',
        border: 'none',
        borderRadius: '10%',
        fontSize: '16px',
        cursor: 'pointer'
}
}
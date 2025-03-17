import React from 'react';

const Button = props => {
    return (
        <button type="submit" style={styles.Button}>
            {props.btnText}
        </button>
    );
}
export default Button;

const styles = {
      Button: {
        backgroundColor: '#00bbf9ff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    }
};
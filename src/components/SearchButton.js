import React from 'react';

const SearchButton = props => {
    return (
        <button type="submit" style={styles.searchButton}>
            {props.btnText}
        </button>
    );
}
export default SearchButton;

const styles = {
    searchButton: {
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
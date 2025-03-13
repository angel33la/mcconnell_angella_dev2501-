import React from 'react';

const MyIcons = (props) => {
    return (
        <div>
            <img src={props.IconImg} alt={props.IconImg} style={styles.myIcons}/>
        </div>
    );
}   
export default MyIcons;

const styles = {
    myIcons: {
        height: '50px',
        cursor: 'pointer',
        borderRadius: '50%',
    }
}
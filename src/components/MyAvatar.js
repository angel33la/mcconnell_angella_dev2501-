import React from "react";

const MyAvatar = (props) => {
    return (
        <img src={props.avatarSrc} alt="Avatar" style={styles.myAvatar}/>
    );
}
export default MyAvatar;

const styles = {
    myAvatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover'
    }
}
import React from 'react';
// images
import image from '../images/icons8-fortune-teller-48.png';
// components
import Button from '../components/buttons/Button.js';



const PostCard = (props) =>{
    return (
      <article style={styles.myArticle}>
        <img src={image} alt="Woman Profile"/>
        <h1>My Post</h1>
        <p>Having a wonderful day! Discovering React is a game-changer.</p>
        <div style={styles.buttons}>
          <Button btnText="Edit"/>
          <Button btnText="Delete"/>
        </div>
      </article>
    );
  }

export default PostCard;

const styles = {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
        padding: '40px',
        width: '600px',
        border: '2px solid #00f5d4ff',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2%',
        marginTop: '20px',
    },
    button: {
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#00bbf9ff',
        color: '#000',
        border: '1px solid #fee440ff',
        cursor: 'pointer',
    },
    h2: {
        color: '#f15bb5ff',
    },
    p: {
        color: '#9b5de5ff',
    }
};


import React from 'react';
// images
import Picture from '../images/pixeltrue-jogging-1.svg';


const PostCard = (props) =>{
    return (
      <article style={styles.myArticle}>
        <img src={Picture} alt="Dog Playing"/>
        <h2>Dogs Are Awesome</h2>
        <p>Dogs are the best!</p>
        <div style={styles.buttons}>
          <span type="submit" style={styles.button}>Like</span>
          <span type="submit" style={styles.button}>Comment</span>
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
        padding: '20px',
        border: '2px solid #9b5de5ff',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    button: {
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#00bbf9ff',
        color: 'white',
        border: '1px solid #fee440ff',
        cursor: 'pointer',
    }
};


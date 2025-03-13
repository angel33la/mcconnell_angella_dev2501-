import React from 'react';
// images
import Picture from '../images/pixeltrue-yoga.svg';


const PostCard = (props) =>{
    return (
      <article style={styles.myArticle}>
        <img src={Picture} alt="Dog Playing" style={styles.myImage}/>
        <h2 style={styles.h2}>Cats Are Awesome</h2>
        <p style={styles.p}>Cats are the best! I love them!</p>
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
        border: '2px solid #00f5d4ff',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '350px'
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
        color: '#000',
        border: '1px solid #fee440ff',
        cursor: 'pointer',
    },
    h2: {
        color: '#f15bb5ff',
    },
    p: {
        color: '#9b5de5ff',
    },
    myImage: {
      width: '150px',
    }
};


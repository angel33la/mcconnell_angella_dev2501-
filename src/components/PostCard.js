import React from 'react';
// images
import image from '../images/icons8-fortune-teller-48.png';
// components
import Button from '../components/buttons/Button.js';



const PostCard = props =>{
    return (
      <article style={styles.myArticle}>
        <img src={image} alt={"fortune teller"}/>
        <h2>'Title'</h2>
        <p>'Description'</p>
        <div style={styles.buttons}>
          <Button btnText="Edit"/> 
          <Button btnText="Delete" onClick={props.deleteItem}/>
        </div>
      </article>
    );
  }

export default PostCard;

const styles = {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        //flexWrap:'flex-wrap',
        alignItems: 'center',
        //justifyContent: 'center',
        width: '50%',
        minHeight: '200px',
        backgroundColor: 'whitesmoke',
        padding: '20px',
        margin: 'auto',
        border: '2px solid #00f5d4ff',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
    },
  
    
    h2: {
        color: '#f15bb5ff',
    },
    p: {
        color: '#9b5de5ff',
    },
    btnText: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'black',
    }
};


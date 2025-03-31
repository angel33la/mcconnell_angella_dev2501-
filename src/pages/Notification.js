//Parent/Smart Hooks Component: Notification.js
import React from 'react';

function Notification() {
    return (
      <section style={styles.container}>
        <div className="wrapper" style={styles.wrapper}>
          {/* <img src={props.val.image} style={{
                width: props.val.imageSize,
                height: props.val.imageSize
        }} alt={props.val.imageAlt}/> */}
          <h1 className="notification" style={styles.notification}>
            Notifications
          </h1>

          <div className="wrapper" style={styles.wrapper}>
            <img
              src="../components/images/icons8-eminem-96.png"
              alt="Notification Icon"
            />
            <h2 style={styles.notification}>You have 5 new messages</h2>
            <p style={styles.notification}>Click here to view them</p>
            <button style={styles.notification}>View Messages</button>
          </div>
        </div>
      </section>
    );
}

export default Notification;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        minWidth: '750px',
        paddingLeft: '2%'
    },
    wrapper: {
        /* display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', */
        marginInline: 'auto',
        border: '2px solid rgb(255, 2, 2)',
        width: '550px',
        height: '100%',
    },
    notification: {
        fontSize: 'clamp(3rem, 5vw + .5rem, 3rem)',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
        width: 'auto',
    },
}
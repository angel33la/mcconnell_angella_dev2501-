import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';
//import { FaVideo, FaEnvelope, FaAddressCard, FaNewspaper } from 'react-icons/fa';

const styles = {
    container: {
        width: '90%',
        maxWidth: '25em',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        fontFamily: 'Poppins, sans-serif',
    },
    card: {
        width: '100%',
        padding: '4em 0',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        borderRadius: '0.5em',
    },
    cardHeader2: {
        marginTop: '1.8em',
        fontWeight: '600',
        color: '#000341',
    },
    cardHeader3: {
        fontSize: '1em',
        letterSpacing: '0.02em',
        marginTop: '0.5em',
        fontWeight: '300',
        color: '#90919e',
    },
    cardHeader4: {
        fontSize: '1em',
        letterSpacing: '0.02em',
        marginTop: '0.5em',
        fontWeight: '300',
        color: '#90919e',
    },
    cardIcon: {
        color: 'var(--theme-color)',
        marginRight: '0.3em',
    },
    cardButton: {
        fontSize: '1.2em',
        width: '90%',
        margin: '2em auto 0 auto',
        padding: '1.1em 0',
        borderRadius: '0.3em',
        border: 'none',
        outline: 'none',
        fontWeight: '600',
        color: '#000341',
        cursor: 'pointer',
    },
    imgContainer: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '0 auto 20px auto',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    details: {
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        marginTop: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: 'var(--theme-color, #00f5d4ff)',
        color: '#fee440ff',
        cursor: 'pointer',
    },
    toggleButton: {
        marginTop: '10px',
        backgroundColor: 'whitesmoke',
        color: '#333',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
    },
    navName: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        textDecoration: 'none',
        color: '#333',
    },
    rightIcons: {
        marginRight: '10px',
    },
};

const Profile = () => {
const [user, setUser] = useState({
    avatar: "",
    first_name: "",
    last_name: "",
    employment: { title: "" },
    address: { city: "" },
    email: "",
    dob: "",
    gender: "",
});

const [showMoreInfo, setShowMoreInfo] = useState(false);

useEffect(() => {
    getUser();
}, []);

const getUser = () => {
    const url = "https://random-data-api.com/api/v2/users?response_type=json";

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
        setUser(data);
        changeThemeColor();
    });
};

const changeThemeColor = () => {
    const randomColor =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    document.documentElement.style.setProperty("--theme-color", randomColor);
};

const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
};

return (
    <div style={styles.container}>
        <div style={styles.card}>
        <div style={styles.imgContainer}>
            <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            style={styles.img}
        />
        </div>
        <div style={styles.details}>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <h3>{user.employment.title}</h3>
            <p>
                <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone_number}
          </p>
          <h4>Location: {user.address.city}</h4>
          {showMoreInfo && (
            <div>
              <p>
                <strong>Date of Birth:</strong> {user.date_of_birth}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
            </div>
          )}
          <button style={styles.toggleButton} onClick={toggleMoreInfo}>
            {showMoreInfo ? "Show Less Info" : "Show More Info"}
          </button>
        </div>
      </div>
      <button style={styles.button} onClick={getUser}>
        Get Random User
      </button>
    </div>
  );
};

export default Profile;
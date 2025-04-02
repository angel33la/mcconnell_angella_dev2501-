import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';
//import { FaVideo, FaEnvelope, FaAddressCard, FaNewspaper } from 'react-icons/fa';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // width: "90%",
    },
    card: {
        width: "100%",
        padding: "4em 0",
        backgroundColor: "#fee440ff",
        // textAlign: "center",
        borderRadius: "0.5em",
    },
    cardHeader2: {
        marginTop: "1.8em",
        fontWeight: "600",
        color: "#000341",
    },
    cardHeader3: {
        fontSize: "1em",
        letterSpacing: "0.02em",
        marginTop: "0.5em",
        fontWeight: "300",
        color: "#90919e",
    },
    cardHeader4: {
        fontSize: "1em",
        letterSpacing: "0.02em",
        marginTop: "0.5em",
        fontWeight: "300",
        color: "#90919e",
    },
    cardIcon: {
        color: "var(--theme-color)",
        marginRight: "0.3em",
    },
    cardButton: {
        fontSize: "1.2em",
        width: "90%",
        margin: "2em auto 0 auto",
        padding: "1.1em 0",
        borderRadius: "0.3em",
        border: "none",
        outline: "none",
        fontWeight: "600",
        color: "#000341",
        cursor: "pointer",
    },
    imgContainer: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        overflow: "hidden",
        margin: "0 auto 20px auto",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    details: {
        textAlign: "center",
    },
    button: {
        padding: "10px 20px",
        marginTop: "10px",
        border: "1px solid #f15bb5ff",
        borderRadius: "5px",
        backgroundColor: "var(--theme-color, #00f5d4ff)",
        color: "#ffffff",
        cursor: "pointer",
    },
    toggleButton: {
        marginTop: "10px",
        fontSize: "1rem",
        backgroundColor: "whitesmoke",
        color: "#000",
        border: "1px solid #f15bb5ff",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
    },
    navName: {
        display: "flex",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ccc",
        textDecoration: "none",
        color: "#333",
    },
    rightIcons: {
        marginRight: "10px",
    },
};

function Profile(){
    // State to hold user data
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
    // State to control the visibility of additional user info
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const getUser = () => {
        const url = "https://random-data-api.com/api/v2/users?response_type=json";
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
            setUser(data);
            changeThemeColor();
        });
    };
    // Fetch a random user when the component mounts
    useEffect(() => {
        getUser();
    });

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
            <button style={styles.button} onClick={getUser}>
                Get Random User
            </button>
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
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone_number}</p>
                    <h4>Location: {user.address.city}</h4>
                    {showMoreInfo && (
                        <div>
                            <p>
                                Date of Birth: {user.date_of_birth}
                            </p>
                            <p>
                                Gender: {user.gender}
                            </p>
                        </div>
                    )}
                    <button style={styles.toggleButton} onClick={toggleMoreInfo}>
                        {showMoreInfo ? "Show Less Info" : "Show More Info"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
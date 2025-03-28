import React, { useState, useEffect } from "react";
import SettingsForm from "../components/form/SettingsForm.js";

const lightTheme = {
    backgroundColor: "whitesmoke",
    color: "#000",
};

const darkTheme = {
    backgroundColor: "#000",
    color: "whitesmoke",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    height: "100vh",
    width: "100%",
    fontSize: "1.5rem",
  },
  button: {
    padding: "10px 20px",
    marginTop: "1px",
    border: "1px solid #9b5de5ff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

function Settings() {
const [theme, setTheme] = useState("light");

useEffect(() => {
    console.log(`Theme changed to: ${theme}`);
});

const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};

const currentTheme = theme === "light" ? lightTheme : darkTheme;

    return (
      <section style={{ ...styles.container, ...currentTheme }}>
        <div>
          <h1>Current Theme Background: {theme}</h1>
          <button
            style={{
              ...styles.button,
              backgroundColor: theme === "Light" ? "#000" : "whitesmoke",
              color: theme === "Light" ? "whitesmoke" : "#000",
            }}
            onClick={toggleTheme}
          >
            Toggle Theme Background
          </button>
          {/* Render the SettingsForm component */}
          <SettingsForm />
        </div>
      </section>
    );
}

export default Settings;

//Parent/Smart Hooks Component: Settings.js
import React, { useState, useEffect } from "react";
//import { ToggleButton } from "react-aria-components";
import SettingsForm from "../components/form/SettingsForm.js";
//import "@react-aria/example-theme";

const styles = {
    ToggleButton: {
  color: 'var(--text-color)',
  background: 'var(--button-background)',
  border: '1px solid var(--border-color)',
  forcedColorAdjust: 'none',
  borderRadius: '4px',
  appearance: 'none',
  verticalAlign: 'middle',
  fontSize: '1rem',
  textAlign: 'center',
  margin: '0',
  outline: 'non',
    padding: '6px 10px',
    cursor: 'pointer',
  },

// Nested styles are not valid in JavaScript objects. Move these styles to a CSS/SCSS file or use a library like styled-components.


  container: {
    padding: "20px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    color:
      "#333",
    fontSize: "1.5rem",
  },
    };

function Settings() {
  // Step 2: Use useState to manage a theme state
  const [theme, setTheme] = useState("light");

  // Step 3: Use useEffect to log theme changes
  useEffect(() => {
    console.log(`Theme changed to: ${theme}`);
  }, [theme]); // Dependency array ensures this runs only when `theme` changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <section style={styles.container}>
      <div>
        <h1>Settings</h1>
        {/* Render the SettingsForm component */}
        <SettingsForm />
      </div>
      <p>Current Theme: {theme}</p>
     <button onClick={toggleTheme}>Toggle Theme</button>
    </section>
  );
}

export default Settings;

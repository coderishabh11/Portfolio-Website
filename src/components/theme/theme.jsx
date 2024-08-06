import React from "react";

import { sun_light, moon_dark } from "../../assets"; // Import assets for theme icons

import './theme.css'; // Import CSS for styling

// ToggleTheme component allows the user to switch between light and dark themes
const ToggleTheme = ({ theme, setTheme }) => {

    // Function to toggle between light and dark themes
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light'); // Switch theme based on current state
        console.log('clicked'); // Log for debugging
    }

    return (
        <div className="theme-container">
            <img 
                onClick={() => { toggle_mode() }} // Toggle theme on click
                src={theme === 'light' ? moon_dark : sun_light} // Choose icon based on current theme
                title='Theme' 
                alt="Dark Theme" 
                className="toggle-icon" 
            />
        </div>
    )
}

export default ToggleTheme;

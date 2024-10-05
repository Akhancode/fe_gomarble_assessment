import React, { useState } from "react";

function ThemeSwitcher() {
    // State to track the selected theme
    const [theme, setTheme] = useState("light");

    // Handler for changing theme
    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    return (
        <div className={`app-container ${theme}`}>
            <h1>Choose Theme</h1>

            {/* Radio buttons for selecting themes */}
            <label>
                <input
                    type="radio"
                    value="light"
                    checked={theme === "light"}
                    onChange={handleThemeChange}
                />
                Light
            </label>

            <label>
                <input
                    type="radio"
                    value="dark"
                    checked={theme === "dark"}
                    onChange={handleThemeChange}
                />
                Dark
            </label>

            {/* Apply styles dynamically based on selected theme */}
            <div className="content">
                <p>This is the {theme} mode!</p>
            </div>

            {/* Add some basic styles */}
            <style>{`
        .app-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .light {
          background-color: white;
          color: black;
        }
        .dark {
          background-color: #333;
          color: white;
        }
        .content {
          padding: 20px;
          border: 1px solid;
          margin-top: 10px;
          border-radius: 5px;
        }
      `}</style>
        </div>
    );
}

export default ThemeSwitcher;

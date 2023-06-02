import React, { useState, useEffect } from 'react';
import './style.css';

function ChangeTheme() {
    const [theme, setTheme] = useState('light');

    const changeMe = () => {
        if (theme === 'light') {
        setTheme('dark');
        } else {
        setTheme('light');
         }
};

useEffect(() => {
    document.body.className = theme;
    }, [theme]);

    return (
        <div className="{`App ${theme}`} usual">
        <button onClick={changeMe}>Change me</button>
        </div>
    );
}
export default ChangeTheme;
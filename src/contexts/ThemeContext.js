import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({
        isDark: true,
        dark: 'blue-grey darken-4',
        light: 'light-blue'
    });

    const changeTheme = () => {
        setTheme({
            ...theme,
            isDark: !theme.isDark
        })
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
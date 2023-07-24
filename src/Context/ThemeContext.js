"use client"

const { useState, createContext } = require("react")

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("light");
    const toggle = () => {
        setMode((prev) => prev == "dark" ? "light" : "dark")           
    }

    return (
        <ThemeContext.Provider value={{toggle, mode}}>
            <div className={mode == "dark" ? "bg-slate-800 text-white" : "bg-white text-slate-900"}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
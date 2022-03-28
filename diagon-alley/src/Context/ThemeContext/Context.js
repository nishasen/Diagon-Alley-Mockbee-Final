import { createContext, useContext, useReducer } from "react";
import { Reducer } from './Reducer';

const defaultTheme = {
    theme: "gryffindor"
};

const ThemeContext = createContext(defaultTheme);
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, {theme: localStorage.getItem("theme") || "gryffindor"});
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    );
}

export { useTheme, ThemeProvider };
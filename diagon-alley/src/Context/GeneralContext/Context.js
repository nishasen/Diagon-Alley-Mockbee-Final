import { createContext, useContext, useReducer } from "react";
import { Reducer } from './Reducer';

const GeneralContext = createContext({})
const useGeneral = () => useContext(GeneralContext);
const GeneralProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, {
        showDropdown: false,
        showSideNav: false
    })
    return (
        <GeneralContext.Provider value={{state, dispatch}}>
            {children}
        </GeneralContext.Provider>
    );
}

export { useGeneral, GeneralProvider };
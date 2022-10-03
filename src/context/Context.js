import { createContext, useContext } from "react";

const AppContext = createContext();

const Context = ({children}) => {
    return (
        <>
            <AppContext.Provider value='hello'>
                {children}
            </AppContext.Provider>
        </>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export default Context;
export {useGlobalContext};
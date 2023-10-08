import {createContext, useContext} from "react";

const FrameworkContext = createContext({prefix: ''})

export const FrameWorkProvider = ({prefix, children}: any) => {

    return (
        <FrameworkContext.Provider value={{prefix}}>
            {children}
        </FrameworkContext.Provider>
    )
}

export const useFrameworkContext = () => {
    return useContext(FrameworkContext);
}
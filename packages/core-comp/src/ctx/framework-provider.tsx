import {createContext, useContext} from "react";

const IdContext = createContext({pMsg: ''})

export const FrameWorkProvider = ({pMsg, children}: any) => {

    return (
        <IdContext.Provider value={{pMsg}}>
            {children}
        </IdContext.Provider>
    )
}

export const useIdContext = () => {
    return useContext(IdContext);
}
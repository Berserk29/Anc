import { createContext, useState } from "react";

export const NumContext = createContext(null)

export const NumContextProvider = ({children}) => {
    const [numIndex, setNumIndex] = useState(1)

    const value = {
        numIndex,
        setNumIndex
    };

    return (
        <NumContext.Provider value={value}>
            {children}
        </NumContext.Provider>
    )
}

export default NumContext
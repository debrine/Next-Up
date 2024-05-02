import { createContext, useState } from "react";

export const TurnContext = createContext()

const TurnContextProvider = (props) => {
    const [currentTurn, setCurrentTurn] = useState(0)
    return (
        <TurnContext.Provider value={{currentTurn, setCurrentTurn}}>
            {props.children}
        </TurnContext.Provider>
    )
}
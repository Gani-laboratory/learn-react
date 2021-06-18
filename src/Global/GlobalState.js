import React, {useReducer, createContext} from "react"
import Reducer from "./Reducer"

const initialState = {
    dark: false,
    name: "shinigami"
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = (props) => {
    const [GlobalState, setGlobalState] = useReducer(Reducer, initialState)
    return (
        <GlobalContext.Provider value={[GlobalState, setGlobalState]}
>
    {props.children}
</GlobalContext.Provider>    )
}



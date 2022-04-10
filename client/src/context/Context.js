import { createContext, useReducer } from "react";
import Reducer from "./Reducer";


const INITIAL_STATE = {
    user: null, // Initially there will be no user
    isFetching: false,
    error: false,
    // dispatch: function(){}
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
};
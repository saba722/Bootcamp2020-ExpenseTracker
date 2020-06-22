import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Creating Initial State
const initialState = {
    transactions: []
}

// Creating Clobal Context
export const GlobalContext = createContext(initialState);

// Crating a Provider for Global context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}
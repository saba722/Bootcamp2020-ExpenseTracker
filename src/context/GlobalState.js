import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Creating Initial State
const initialState = {
    transactions: [
        {id: 1, description: 'Project 1 Income', transactionAmount: 10000},
        {id: 2, description: 'Project 2 Income', transactionAmount: 20000},
        {id: 3, description: 'Project 1 Salary', transactionAmount: -5000},
        {id: 4, description: 'Project 2 Salary', transactionAmount: -10000}
    ]
}

// Creating Clobal Context
export const GlobalContext = createContext(initialState);

// Crating a Provider for Global context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}
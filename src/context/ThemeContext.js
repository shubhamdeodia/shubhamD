import React, { createContext, useReducer } from 'react'

const initialState = {
    isDarkMode: false
}

const themeReducer = (state, action) => {
    switch (action.type) {
    case 'TOGGLE_THEME':
        return { isDarkMode: !state.isDarkMode }

    default:
        throw new Error('Theme Reducer should not have reach here')
    }
}

const ThemeStateContext = createContext()
const ThemeDispatchContext = createContext()

function ThemeContextProvider (props) {
    const [themeState, dispatch] = useReducer(themeReducer, initialState)
    return (
        <ThemeStateContext.Provider value={themeState}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {props.children}
            </ThemeDispatchContext.Provider>
        </ThemeStateContext.Provider>
    )
}

export { ThemeContextProvider, ThemeStateContext, ThemeDispatchContext }


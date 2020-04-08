import React, { useContext } from 'react'

import Resume from './components/Resume'

import { CssBaseline } from '@material-ui/core'

import { ThemeStateContext } from './context/ThemeContext'
import { paletteLight } from './theme/palette'
import { paletteDark } from './theme/paletteDark'
import { typography } from './theme/typography'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

function App () {
    const themeState = useContext(ThemeStateContext)

    const muiTheme = createMuiTheme({
        palette: themeState.isDarkMode ? paletteDark : paletteLight,
        typography
    })
    return (

        <MuiThemeProvider theme={muiTheme}>
            <div className='App'>
                <CssBaseline />
                <Resume />
            </div>
        </MuiThemeProvider>

    )
}

export default App

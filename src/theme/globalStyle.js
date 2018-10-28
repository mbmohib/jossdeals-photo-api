import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import BaseStyle from './baseStyle';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import materialTheme from './materialTheme';


const GlobalStyle = (props) => {
    return (
        <MuiThemeProvider theme={materialTheme}>
            <ThemeProvider theme={theme}>
                <div>
                    <CssBaseline />
                    <BaseStyle />
                    {props.children}
                </div>
            </ThemeProvider>
        </MuiThemeProvider>
    )
}

export default GlobalStyle

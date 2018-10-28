import React, { Component } from 'react';
import GlobalStyle from './theme/globalStyle';

class App extends Component {
    render() {
        return (
            <GlobalStyle>
                <p>Hello From Home!</p>
            </GlobalStyle>
        )
    }
}

export default App;

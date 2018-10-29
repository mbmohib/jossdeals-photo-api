import React, { Component } from 'react';
import GlobalStyle from './theme/globalStyle';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
    render() {
        return (
            <GlobalStyle>
                <Header />
                <Content />
            </GlobalStyle>
        )
    }
}

export default App;

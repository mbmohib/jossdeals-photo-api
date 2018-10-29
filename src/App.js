import React, { Component } from 'react'
import GlobalStyle from './theme/globalStyle'
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
    state = {
        sidebarOpen: true,
        mobileSidebarOpen: false,
    }

    handleClick = () => {
        this.setState(prevState => ({ sidebarOpen: !prevState.sidebarOpen }))
    }

    handleMobileMenuClick = () => {
        this.setState(prevState => ({
            mobileSidebarOpen: !prevState.mobileSidebarOpen
        }))
    }

    render() {
        return (
            <GlobalStyle>
                <Header
                    handleClick={this.handleClick}
                    handleMobileMenuClick={this.handleMobileMenuClick}
                />
                <Content
                    sidebarOpen={this.state.sidebarOpen}
                    mobileSidebarOpen={this.state.mobileSidebarOpen}
                    handleMobileMenuClick={this.handleMobileMenuClick}
                />
            </GlobalStyle>
        )
    }
}

export default App

import React, { Component } from 'react'
import GlobalStyle from './theme/globalStyle'
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
    state = {
        sidebarOpen: true,
        mobileSidebarOpen: false,
        searchValue: ''
    }

    handleClick = () => {
        this.setState(prevState => ({ sidebarOpen: !prevState.sidebarOpen }))
    }

    handleMobileMenuClick = () => {
        this.setState(prevState => ({
            mobileSidebarOpen: !prevState.mobileSidebarOpen
        }))
    }

    handleChange = (e) => {
        const value = e.target.value;

        this.setState(() => ({ searchValue: value }))
    }

    render() {
        return (
            <GlobalStyle>
                <Header
                    handleClick={this.handleClick}
                    handleMobileMenuClick={this.handleMobileMenuClick}
                    handleChange={this.handleChange}
                />
                <Content
                    sidebarOpen={this.state.sidebarOpen}
                    mobileSidebarOpen={this.state.mobileSidebarOpen}
                    handleMobileMenuClick={this.handleMobileMenuClick}
                    searchValue={this.state.searchValue}
                />
            </GlobalStyle>
        )
    }
}

export default App

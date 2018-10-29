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
    /**
     * Handle Sidebar Hide/Show for devices larger than 640px
     *  
     * @memberof App
     */
    handleClick = () => {
        this.setState(prevState => ({ sidebarOpen: !prevState.sidebarOpen }))
    }

    /**
     * Handle Sidebar Hide/Show for devices smaller than 640px
     *  
     * @memberof App
     */
    handleMobileMenuClick = () => {
        this.setState(prevState => ({
            mobileSidebarOpen: !prevState.mobileSidebarOpen
        }))
    }

    /**
     * Recived search input value &
     * store in the state
     * 
     * @memberof App
     */
    handleChange = (searchValue) => {
        const value = searchValue;

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

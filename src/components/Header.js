import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import Search from './Search';
import Hidden from '@material-ui/core/Hidden';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background: ${props => props.theme.secondaryColor};
    position: relative;
`

const StyledIconButton = withStyles({
    root: {
        position: 'absolute',
        left: '20px'
    }
})(IconButton)

const Header = props => (
    <HeaderWrapper>

        <Hidden xsDown>
            <StyledIconButton
                color="primary"
                aria-label="Menu Button"
                onClick={props.handleClick}
            >
                <MenuIcon />
            </StyledIconButton>
        </Hidden>

        <Hidden smUp>
            <StyledIconButton
                color="primary"
                aria-label="Mobile Menu Button"
                onClick={props.handleMobileMenuClick}
            >
                <MenuIcon />
            </StyledIconButton>
        </Hidden>
        <Search />
    </HeaderWrapper>
)

export default Header

import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import Search from './Search';
import Hidden from '@material-ui/core/Hidden';
import media from '../theme/mediaQuery';


const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background: ${props => props.theme.secondaryColor};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
`

const StyledIconButton = styled(IconButton)`
    position: absolute !important;
    left: 5px !important;

    ${media.tablet`
        left: 20px !important;
    `}
`;

const Header = props => (
    <HeaderWrapper>

        {/* Hamburger Menu for devices larger than 600px */}
        <Hidden xsDown>
            <StyledIconButton
                color="primary"
                aria-label="Menu Button"
                onClick={props.handleClick}
            >
                <MenuIcon />
            </StyledIconButton>
        </Hidden>

        {/* Hamburger Menu for devices smaller than 600px */}
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

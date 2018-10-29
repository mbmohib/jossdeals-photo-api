import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import Search from './Search';


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

const Header = () => (
    <HeaderWrapper>
        <StyledIconButton
            color="primary"
            aria-label="Menu"
        >
            <MenuIcon />
        </StyledIconButton>
        <Search />
    </HeaderWrapper>
)

export default Header

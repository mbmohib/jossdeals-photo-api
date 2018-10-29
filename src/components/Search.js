import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import media from '../theme/mediaQuery';

const SearchWrapper = styled.div`
    width: 70%;
    position: relative;
    margin-left: 30px;

    ${media.tablet`
        width: 60%;
        margin-left: 0;
    `}

    ${media.laptop`
        width: 50%;
    `}

    ${media.desktop`
    `}
`;

const SearchInput = styled.input`
    background: ${props => props.theme.primaryColor};
    border-radius: 5px;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 8px 10px;
    display: block;
    transition: all 0.3s ease-in;

    &:focus {
        outline: none;
        background: #fff;
    }
`;

const StyledIconButton = withStyles({
    root: {
        position: 'absolute',
        right: '-5px',
        top: '-8px'
    }
})(IconButton)


const Search = props => (
    <SearchWrapper>
        <SearchInput type="text" onChange={props.handleChange}/>

        <StyledIconButton
            aria-label="Menu"
        >
            <SearchIcon />
        </StyledIconButton>

    </SearchWrapper>
)

export default Search;
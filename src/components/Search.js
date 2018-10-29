import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const SearchWrapper = styled.div`
    width: 50%;
    position: relative;
`;

const SearchInput = styled.input`
    background: ${props => props.theme.primaryColor};
    border-radius: 5px;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 8px 10px;
    display: block;
    min-width: 0;
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


const Search = () => (
    <SearchWrapper>
        <SearchInput type="text"/>

        <StyledIconButton
            aria-label="Menu"
        >
            <SearchIcon />
        </StyledIconButton>

    </SearchWrapper>
)

export default Search;
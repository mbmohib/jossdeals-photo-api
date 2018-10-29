import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import Title from './styled/Title'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import { withStyles } from '@material-ui/core/styles';

const SidebarWrapper = styled.div`
    width: 100%;
    background-color: ${props => props.theme.primaryColor};
    height: 100%;
    padding: 20px 40px 20px 20px;
`

const CategoryItem = withStyles({
    root: {
        padding: '5px 0',
        textTransform: 'capitalize' 
    }
})(ListItem);

const Sidebar = props => (
    <SidebarWrapper>
        <Title>Categories</Title>

        <List>
            { props.categories.map( (category, index) => (
                <CategoryItem key={index}>
                    <ListItemText primary={category} />
                </CategoryItem>
            ) ) }
        </List>
    </SidebarWrapper>
)

export default Sidebar

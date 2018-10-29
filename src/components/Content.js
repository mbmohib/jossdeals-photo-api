import React from 'react'
import PhotoList from './PhotoList'
import Sidebar from './Sidebar'
import Hidden from '@material-ui/core/Hidden'
import Slide from '@material-ui/core/Slide'
import styled from 'styled-components';

// Categories Item Array
const categories = ['food', 'cloths', 'bags', 'shirt'];

const Wrapper = styled.div`
    display: flex;
`;

const SidebarWrapper = styled.div`
    min-height: calc(100vh - 60px);
`;

const Content = props => (
    <Wrapper>
        <Hidden xsDown>
            <Slide
                direction="right"
                in={props.sidebarOpen}
                mountOnEnter
                unmountOnExit
            >
                <SidebarWrapper>
                    <Sidebar categories={categories} />
                </SidebarWrapper>
            </Slide>
        </Hidden>

        <PhotoList />

    </Wrapper>
)

export default Content

import React from 'react'
import PhotoList from './PhotoList'
import Sidebar from './Sidebar'
import Hidden from '@material-ui/core/Hidden'
import Slide from '@material-ui/core/Slide'
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';

// Categories Item Array
const categories = ['food', 'cloths', 'bags', 'shirt'];

const Wrapper = styled.div`
    display: flex;
    margin-top: 60px;
`;

const SidebarWrapper = styled.div`
    min-height: calc(100vh - 60px);
`;

const Content = props => (
    <Wrapper>

        {/* 
            For Mobile Side Menu
            * Parmanently Hidden on devices larger than 600px
            * how/Hide by clicking on hambarger menu on devices smaller than 600px
        */}
        <Drawer
            open={props.mobileSidebarOpen}
            onClose={props.handleMobileMenuClick}
        >
            <Sidebar categories={categories} />
        </Drawer>

        {/* 
            #Sidebar Desktop
            * Parmanently Hidden on devices smaller than 600px
            * Show/Hide by clicking on hambarger menu on devices larger than 600px
        */}

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

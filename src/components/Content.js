import React from 'react'
import Grid from '@material-ui/core/Grid'
import PhotoList from './PhotoList'
import Sidebar from './Sidebar'
import Hidden from '@material-ui/core/Hidden'
import Slide from '@material-ui/core/Slide'
import Drawer from '@material-ui/core/Drawer'

// Categories Item Array
const categories = ['food', 'cloths', 'bags', 'shirt']

const Content = props => (
    <React.Fragment>
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

        <Grid container justify="center" direction="row">
            {/* 
                Sidebar
                * Parmanently Hidden on devices smaller than 600px
                * Show/Hide by clicking on hambarger menu on devices larger than 600px
            */}
            <Hidden xsDown>
                <Grid item sm={3} md={2} xl={1}>
                    <Slide
                        direction="right"
                        in={props.sidebarOpen}
                        mountOnEnter
                        unmountOnExit
                    >
                            <Sidebar categories={categories} />
                    </Slide>
                </Grid>
            </Hidden>

            <Grid item xs={12} sm={9} md={10} xl={11}>
                <PhotoList />
            </Grid>
        </Grid>
    </React.Fragment>
)

export default Content

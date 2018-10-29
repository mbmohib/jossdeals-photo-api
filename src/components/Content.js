import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhotoList from './PhotoList';
import Sidebar from './Sidebar';
import Hidden from '@material-ui/core/Hidden';

// Categories Item Array
const categories = ['food', 'cloths', 'bags', 'shirt' ];


const Content = () => (
    <Grid container>
        <Hidden xsDown>
            <Grid item sm={3} md={2} xl={1}>
                <Sidebar categories={categories}/>
            </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} md={10} xl={11}>
            <PhotoList />
        </Grid>
    </Grid>
)

export default Content;
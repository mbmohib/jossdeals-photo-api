import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhotoList from './PhotoList';
import Sidebar from './Sidebar';


const Content = () => (
    <Grid container>
        <Grid item md={2}>
            <Sidebar />
        </Grid>
        <Grid item md={10}>
            <PhotoList />
        </Grid>
    </Grid>
)

export default Content;
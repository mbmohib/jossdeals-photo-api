import React from 'react';
import fetchData from '../api/fetchData';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Photo from './Photo';

const PhotolistWrapper = styled.div`
    background: ${props => props.theme.primaryColor};
    margin: 20px;
    margin-bottom: 0;
    padding: 10px;
`;

class PhotoList extends React.Component {

    componentDidMount() {
        // this.getData();
    }

    getData() {
        const data = fetchData('https://jsonplaceholder.typicode.com/photos');
    }

    render() {
        return (
            <PhotolistWrapper>
                <Grid container spacing={16}>
                    <Grid item sm ={6} md={4} xl={3}>
                        <Photo />
                    </Grid>
                    <Grid item sm ={6} md={4} xl={3}>
                        <Photo />
                    </Grid>
                    <Grid item sm ={6} md={4} xl={3}>
                        <Photo />
                    </Grid>
                    <Grid item sm ={6} md={4} xl={3}>
                        <Photo />
                    </Grid>
                </Grid>
            </PhotolistWrapper>
        )
    }
}

export default PhotoList;
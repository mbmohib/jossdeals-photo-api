import React from 'react';
import fetchData from '../api/fetchData';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Photo from './Photo';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

const PhotolistWrapper = styled.div`
    background: ${props => props.theme.primaryColor};
    margin: 20px;
    margin-bottom: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

class PhotoList extends React.Component {

    state = {
        photos: undefined,
        searchedPhotos: undefined
    }

    componentDidMount() {
        this.getData();
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.searchValue !== this.props.searchValue) {
            this.searchPhotos()
        }
    }

    async getData() {
        const data = await fetchData('https://jsonplaceholder.typicode.com/photos');
        const photos = data.data.slice(0, 100);

        this.setState(() => {
            return {
                photos 
            }
        }, () => {
            this.searchPhotos()
        });
    }

    searchPhotos() {
        const regex = new RegExp(this.props.searchValue, 'gi');
        const searchedPhotos = this.state.photos.filter( photo => {
            return photo.title.match(regex);
        })

        this.setState(() => ({ searchedPhotos }));
    }

    render() {
        return (
            <PhotolistWrapper>
                <Fade
                    in={!this.state.searchedPhotos}
                    unmountOnExit
                >
                    <CircularProgress color="secondary" size={80} thickness={1}/>
                </Fade>
                
                {
                    this.state.searchedPhotos && 
                    <Grid container spacing={16}>

                        {
                            this.state.searchedPhotos.map( photo => (
                                <Grid key={photo.id} item sm ={6} md={4} xl={2}>
                                    <Photo photo={photo}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                }
            </PhotolistWrapper>
        )
    }
}

export default PhotoList;
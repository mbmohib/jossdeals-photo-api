import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import fetchData from '../api/fetchData';
import Photo from './Photo';
import Title from './styled/Title';

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

const Message = withStyles({
    root : {
        padding: '30px',
        color: '#721c24',
        backgroundColor: '#f8d7da'
    }
})(Paper)

class PhotoList extends React.Component {

    state = {
        photos: undefined,
        searchedPhotos: undefined,
        error: false
    }

    componentDidMount() {
        this.getData();
    }
    
    componentDidUpdate(prevProps) {
        // Run searchPhoto function only when search value changed
        if (prevProps.searchValue !== this.props.searchValue) {
            this.searchPhotos()
        }
    }

    async getData() {
        const data = await fetchData('https://jsonplaceholder.typicode.com/photos');
        
        try {
            // Only store first 100 photos
            const photos = data.data.slice(0, 100);
    
            this.setState(() => {
                return {
                    photos 
                }
            }, () => {
                // Run searchPhoto function after recieved data (setState Completed)
                this.searchPhotos()
            });
        } catch(error) {
            this.setState(() => ({ error : true }))
        }
    }

    /**
     *  Match photos from search input value &
     *  store in another state property
     * @memberof PhotoList
     */
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
                {/* Show Error message for api request error */}
                {
                    this.state.error && 
                    <Message elevation={2}>
                        <Title>
                            Something went wrong! Please reload the page.
                        </Title>
                    </Message>
                }

                {/* Show Loading state while data on the way */}
                <Fade
                    in={!this.state.searchedPhotos && !this.state.error}
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
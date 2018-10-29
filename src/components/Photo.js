import React from 'react'
import styled from 'styled-components'
import Title from './styled/Title'
import placeholderImage from '../images/placeholder.png'

const PhotoWrapper = styled.div`
    position: relative;
`

const PhotoImage = styled.img`
    border-radius: 10px;
`

const PhotoTitle = styled(Title)`
    width: 96%;
    position: absolute;
    bottom: 11px;
    padding: 5px;
    margin-left: 2%;
    border-radius: 5px;
    background-color: rgba(186, 204, 154, 0.7);
`

class Photo extends React.Component {
    state = {
        imageLoaded: false
    }

    handleImageLoad = () => this.setState(() => ({ imageLoaded: true }))

    render() {
        return (
            <PhotoWrapper>
                {/* Show Placeholder image while image loading */}
                {!this.state.imageLoaded && (
                    <PhotoImage
                        src={placeholderImage}
                        alt={this.props.photo.title}
                    />
                )}
                <PhotoImage
                    src={this.props.photo.url}
                    alt={this.props.photo.title}
                    style={!this.state.imageLoaded ? { visibility: 'hidden' } : {}}
                    onLoad={this.handleImageLoad}
                />
                <PhotoTitle center size="small">
                    {this.props.photo.title}
                </PhotoTitle>
            </PhotoWrapper>
        )
    }
}

export default Photo

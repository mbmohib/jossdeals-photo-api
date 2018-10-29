import React from 'react';
import styled from 'styled-components';
import Title from './styled/Title';

const PhotoWrapper = styled.div`
    position: relative;
`;

const PhotoImage = styled.img`
    border-radius: 10px;
`;

const PhotoTitle = styled(Title)`
    width: 96%;
    position: absolute;
    bottom: 11px;
    padding: 5px;
    margin-left: 2%;
    border-radius: 5px;
    background-color: rgba(186, 204, 154, 0.7);
`;

const Photo = props => (
    <PhotoWrapper>
        <PhotoImage src={props.photo.url} alt={props.photo.title}/>
        <PhotoTitle center size="small">{props.photo.title}</PhotoTitle>
    </PhotoWrapper>
)

export default Photo;

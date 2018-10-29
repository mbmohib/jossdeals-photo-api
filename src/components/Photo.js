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
    background-color: #bacc9a;
`;

const Photo = props => (
    <PhotoWrapper>
        <PhotoImage src="https://via.placeholder.com/460/24f355" alt=""/>
        <PhotoTitle center size="small">accusamus beatae ad facilis cum similique qui sunt</PhotoTitle>
    </PhotoWrapper>
)

export default Photo;

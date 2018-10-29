import React from 'react';
import styled from 'styled-components';
import Title from './styled/Title';

const MessageWrapper = styled.div`
    padding: 30px;
    background-color: ${props => props.error ? '#f8d7da' : '#fff3cd'};
    color: ${props => props.error ? '#721c24' : '#856404'};
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

const Message = props => (
    <MessageWrapper error={props.error} elevation={2}>
        <Title>{props.text}</Title>
    </MessageWrapper>
)

export default Message;
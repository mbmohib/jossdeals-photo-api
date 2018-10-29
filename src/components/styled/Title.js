import styled from 'styled-components'
import media from '../../theme/mediaQuery';

const Title = styled.h1`
    font-family: ${props => props.theme.titleFont};
    font-size: ${props =>
        props.size === 'large'
            ? '2.5rem'
            : props.size === 'medium'
                ? '1.8rem'
                : props.size === 'small'
                    ? '0.9rem'
                    : '1.1rem'};
    font-weight: ${props => props.theme.lightWeight};
    text-align: ${props => (props.center ? 'center' : 'left')};
    text-transform: ${props => (props.uppercase ? 'uppercase' : 'capitalize')};
    line-height: 1.2;
    word-spacing: 3px;
    letter-spacing: 2px;

    ${media.tablet`
        font-size: ${props =>
        props.size === 'large'
            ? '3rem'
            : props.size === 'medium'
                ? '2rem'
                : props.size === 'small'
                    ? '1rem'
                    : '1.2rem'};
    `}

    ${media.laptop`
        font-size: ${props =>
            props.size === 'large'
                ? '4rem'
                : props.size === 'medium'
                    ? '3rem'
                    : props.size === 'small'
                        ? '1.2rem'
                        : '1.5rem'};
    `}

    ${media.desktop`
    `}
`

export default Title

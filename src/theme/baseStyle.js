import { createGlobalStyle } from 'styled-components'

const BaseStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto');

    body {
        font-family: ${props => props.theme.normalFont};
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    figure {
        margin: 0;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    ul {
        margin: 0;
        padding: 0;
        
        li {
            list-style: none;
        }
    }

    a {
        text-decoration: none;

        :focus {
            text-decoration: none;
        }
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        main {
            flex-grow: 1;
        }

    }
`;

export default BaseStyle;
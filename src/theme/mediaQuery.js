import { css }from 'styled-components'

const sizes = {
    mobile: '360',
    tablet: '600',
    laptop: '960',
    desktop: '1280',
    largeDesktop: '1920'
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `
    return accumulator
}, {})

export default media;
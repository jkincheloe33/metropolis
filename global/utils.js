import { css } from 'styled-components'

export const sizes = {
  down: {
    lg: 959,
    md: 767,
    sm: 666,
    xl: 1023,
    xs: 479,
    xxl: 1439,
    xxs: 375,
    xxxl: 1949,
  },
  up: {
    lg: 960,
    md: 768,
    sm: 667,
    xl: 1024,
    xs: 480,
    xxl: 1440,
    xxs: 376,
    xxxl: 1950,
  },
}

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units
// prettier-ignore
export const media = {
    down: Object.keys(sizes.down).reduce((accumulator, label) => {
      const emSize = sizes.down[label] / 16;
      accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
          ${css(...args)}
        }
      `;
      return accumulator;
    }, {}),
    up: Object.keys(sizes.up).reduce((accumulator, label) => {
      const emSize = sizes.up[label] / 16;
      accumulator[label] = (...args) => css`
        @media (min-width: ${emSize}em) {
          ${css(...args)}
        }
      `;
      return accumulator;
    }, {})
  };

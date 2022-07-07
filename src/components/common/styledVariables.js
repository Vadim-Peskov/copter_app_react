import { createGlobalStyle } from 'styled-components';

const variables = {

  /* variables */

  clr_accent: '#ed783a',
  clr_accent_hover: '#e66621',
  clr_second: '#1a1916',
  clr_additional: '#acaeb2',
  clr_shadow: 'rgba(209, 216, 221, 0.4)',

  /* media queries */

  media_mobile: '(max-width: 766px)',
  media_tablet: '(min-width: 767px)',
  media_desctop: '(min-width: 1000px)',


  /* animations */

  animation_rotate: `
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
}

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  ::selection {
    background: rgba(122, 122, 122, 0.3);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, Open-Sans, Arial, Sans-Serif;
    color: ${variables.clr_second};
  }
`;

export {variables as c}
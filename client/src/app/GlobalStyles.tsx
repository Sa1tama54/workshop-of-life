import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.eot');
    src: url('/fonts/Montserrat-Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Montserrat-Bold.woff') format('woff'),
      url('/fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-SemiBold.eot');
    src: url('/fonts/Montserrat-SemiBold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Montserrat-SemiBold.woff') format('woff'),
      url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Medium.eot');
    src: url('/fonts/Montserrat-Medium.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Montserrat-Medium.woff') format('woff'),
      url('/fonts/Montserrat-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.eot');
    src: url('/fonts/Montserrat-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Montserrat-Regular.woff') format('woff'),
      url('/fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Montserrat', sans-serif;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

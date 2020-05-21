import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'styled-modern-normalize';

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  canvas{
    display: block;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }
 
`;

export default GlobalStyle;

import styled, {createGlobalStyle, GlobalStyleComponent} from "styled-components"
import BGI from './img/bcg.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGI});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    color: wheat;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
  .menu {
    display: flex;
    flex-direction: column;
  }
`;

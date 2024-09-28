// /mnt/data/GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    height: 100%;  /* 화면 높이를 100%로 설정 */
    overflow-x: hidden;  /* 가로 스크롤 방지 */
  }

  #root {
    height: 100%;  /* React의 루트 요소도 100%로 설정 */
  }
`;

export default GlobalStyle;

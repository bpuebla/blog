/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap');

  * {
    font-family: 'EB Garamond', serif !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 24px;
    line-height: 1.6;
    margin: 0 !important;
    padding: 0 !important;
    color: #ffffed;
    background-color: #382222;
    overflow-x: hidden;
    width: 100% !important;
    height: 100% !important;
  }

  #__next {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    min-height: 100vh !important;
  }
`;
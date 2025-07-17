/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const footerStyle = css`
  background-color: #402f25;
  padding: 0.5em 0;
  margin: 0;
  display: flex;
  justify-content: center;
  color: #fff;

  p {
    margin: 0 1em;
  }
`

const Footer = () => (
  <footer css={footerStyle}>
    <p>&copy; 2025 bpuebla. all rights reserved.</p>
  </footer>
)

export default Footer
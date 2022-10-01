/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const footerWrapper = css`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
`

export default function Footer() {
  return (
    <footer css={footerWrapper}>
      <div>Copyright © jeongdain 2022</div>
    </footer>
  );
}
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Image from "next/image"
import { useRouter } from "next/router";
import icon_back_black from "../../public/images/icon-back-black.png"

const headerWrapper = css`
  width: 360px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 150px;

  h1 {
    font-size: 16px;
    color: #000;
  }
`;

const iconBack = css`
  cursor: pointer;
`

export default function Header() {
  const router = useRouter();

  const handleRouteBack = () => {
    if (router.pathname !== "/") {
      router.back()
    }
  }

  return (
    <header css={headerWrapper}>
      <Image
        src={icon_back_black}
        css={iconBack}
        layout="fixed"
        alt="icon_back"
        onClick={handleRouteBack}
      />

      {router.pathname === "/" &&
        <h1>기초 설문</h1>
      }
    </header>
  );
}
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import icon_back_grey from "../../public/images/icon-back-grey.png";
import icon_next_icon from "../../public/images/icon-next-icon.png";
import { theme } from "../../styles/theme";

const surveyCompleteTextWrapper = css`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 15vh;
  font-size: ${theme.fontSize.medium}px;
  color: ${theme.colors.black};

  span {
    font-weight: bold;
  }
`

const movePageBtnWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .back-btn {
    color: ${theme.colors.darkGray};
  }
  .next-btn {
    color: ${theme.colors.Gray};
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background-color: Transparent;
    cursor: pointer;

    :hover {
      color: ${theme.colors.main};
    }
  }

  span {
    font-size: ${theme.fontSize.medium}px;
    font-weight: bold;
  }
`;

export default function SurveyComplete() {
  return (
    <section>

      <div css={surveyCompleteTextWrapper}>
        <p>
          <span>
            건강관리
          </span>
          <br />
          평가설문이 끝났습니다.
        </p>
      </div>

      <div css={movePageBtnWrapper}>
        <button className="back-btn">
          <Image src={icon_back_grey} alt="icon_back" />
          <span>이전</span>
        </button>
        <button className="next-btn">
          <span>다음</span>
          <Image src={icon_next_icon} alt="icon_next" />
        </button>
      </div>

    </section>
  );
}

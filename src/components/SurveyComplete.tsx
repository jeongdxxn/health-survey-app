/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import icon_back_grey from "../../public/images/icon-back-grey.png";
import icon_next_icon from "../../public/images/icon-next-icon.png";
import { theme } from "../../styles/theme";

interface SurveyCompleteProps {
  title?: string;
}

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

export default function SurveyComplete({ title }: SurveyCompleteProps) {
  return (
    <section>
      <div css={surveyCompleteTextWrapper}>
        <p>
          <span>{title}</span>
          <br />
          평가설문이 끝났습니다.
        </p>
      </div>
    </section>
  );
}

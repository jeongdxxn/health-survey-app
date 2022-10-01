/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import icon_back_grey from "../../public/images/icon-back-grey.png";
import icon_next_icon from "../../public/images/icon-next-icon.png";

const surveyTitle = css`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`

const surveyContentWrapper = css`
  margin: 80px 0;

  .current-num {
    font-size: 20px;
    font-weight: bold;
    color: #ffd300;
  }
  .total-num {
    font-size: 14px;
    color: #ccc;
  }

  .survey-content {
    font-size: 16px;
    color: #444;
  }

  .survey-answers {
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      display: flex;
      align-items: center;
      height: 42px;
      padding: 0 20px;
      margin: 5px 0;
      color: #444444;
      background-color: #f7f7f7;
      border-radius: 22px;
      cursor: pointer;

      :checked {
        background-color: #ffd300;
      }
    }
  }
`;

const movePageBtnWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .back-btn {
    color: #444;
  }
  .next-btn {
    color: #ccc;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background-color: Transparent;
    cursor: pointer;

    :hover {
      color: #ffd300;
      filter: #ffd300;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const iconBack = css`
  cursor: pointer;
`;

export default function SurveyForm() {
  return (
    <section>
      <h2 css={surveyTitle}>건강 관리</h2>

      <div css={surveyContentWrapper}>
        <div>
          <span className="current-num">1</span>
          <span className="total-num">/2</span>
        </div>

        <div className="survey-content">
          <p>
            앞으로 1개월 이내에 담배를 끊을 계획이 있거나 현재 금연 중입니까?
          </p>
        </div>

        <div className="survey-answers">
          <ul>
            <li>현재로서는 전혀 금연 생각 없음</li>
            <li>6개월 이내에 금연 예정</li>
            <li>6개월 이내는 아니지만, 언젠가 금연</li>
            <li>1개월 안에 금연할 계획</li>
            <li>현재 금연 중</li>
          </ul>
        </div>
      </div>

      <div css={movePageBtnWrapper}>
        <button className="back-btn">
          <Image src={icon_back_grey} css={iconBack} alt="icon_back" />
          <span>이전</span>
        </button>
        <button className="next-btn">
          <span>다음</span>
          <Image src={icon_next_icon} css={iconBack} alt="icon_back" />
        </button>
      </div>
    </section>
  );
}

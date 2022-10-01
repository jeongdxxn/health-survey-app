/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import image_survey from "../../public/images/image-survey.png";

const contentDescription = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  padding-right: 60px;

  h2 {
    font-size: 20px;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #444;
  }
`
const imageSurveyWrapper = css`
  display: flex;
  justify-content: flex-end;
`

const surveyCountWrapper = css`
  text-align: center;
  font-weight: bold;

  span {
    color: #ffd300;
  }
`;

const startButton = css`
  width: 100%;
  height: 50px;
  font-weight: bold;
  font-size: 14px;
  color: #000;
  background-color: #ffd300;
  border: none;
  border-radius: 23px;
  cursor: pointer;
`;

export default function SurveyMain() {
  return (
    <section>

      <div css={contentDescription}>
        <h2>나쁜 생활습관을 바로 잡으면 건강이 개선됩니다.</h2>
        <p>
          설문을 통해 나의 건강 상태를 확인하고, 개선할 습관이 무엇인지
          알아보아요!
          <br />
          결과에 따라 나만의 관리 목표를 설정하면 헬스매니저가 $이름$님께 맞는
          건강관리 서비스를 제공합니다.
        </p>
      </div>
      
      <div css={imageSurveyWrapper}>
        <Image src={image_survey} alt="image_survey" />
      </div>
      
      <div css={surveyCountWrapper}>
        <p>
          설문은 총 <span>63문항</span> 입니다.
        </p>
      </div>
      
      <button css={startButton}>설문 시작</button>

    </section>
  );
}
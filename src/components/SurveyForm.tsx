/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { theme } from "../../styles/theme";
import icon_back_grey from "../../public/images/icon-back-grey.png";
import icon_next_icon from "../../public/images/icon-next-icon.png";
import surveys from "../assets/surveys.json";
import questions from "../assets/questions.json";
import answers from "../assets/answers.json";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  userSurveyAnswersData,
  AnswersDataTypes,
} from "../recoil/atoms/answer";
import SurveyComplete from "./SurveyComplete";
import { totalmem } from "os";

interface SurveyFormProps {
  queryId?: string | string[]
}

const proceedContainer = css`
  background-color: ${theme.colors.lightGray};
  width: 100%;
  height: 3px;
  display: flex;
  align-items: center;
  border-radius: 3px;
`;

const processBar = (processCount: number) => css`
  background-color: ${theme.colors.main};
  height: 100%;
  width: ${processCount}%;
  transition: width 0.5s;
  border-radius: 3px;
`;

const dot = css`
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${theme.colors.main};
`;


const surveyTitle = css`
  font-size: ${theme.fontSize.large}px;
  font-weight: bold;
  color: ${theme.colors.black};
`;

const surveyContentWrapper = css`
  margin: 80px 0;

  .current-num {
    font-size: ${theme.fontSize.large}px;
    font-weight: bold;
    color: ${theme.colors.main};
  }
  .total-num {
    font-size: ${theme.fontSize.small}px;
    color: ${theme.colors.Gray};
  }

  .survey-content {
    font-size: ${theme.fontSize.medium}px;
    color: ${theme.colors.darkGray};
  }

  .survey-answers {
    ul {
      list-style: none;
      padding: 0;
    }
  }
`;

const movePageBtnWrapper = (answersList?: {}) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .back-btn {
    color: ${theme.colors.darkGray};
  }
  .next-btn {
    color: ${answersList ? theme.colors.main : theme.colors.Gray};
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

const surveyAnswer = (answerChecked: boolean) => css`
  display: flex;
  align-items: center;
  height: 42px;
  padding: 0 20px;
  margin: 5px 0;
  color: ${theme.colors.darkGray};
  border-radius: 22px;
  cursor: pointer;
  background-color: ${answerChecked ? theme.colors.main : theme.colors.lightGray};
`;

export default function SurveyForm({ queryId }: SurveyFormProps) {
  const router = useRouter();

  const surveyAnswersData = useRecoilValue<AnswersDataTypes[]>(userSurveyAnswersData);
  const setSurveyAnswersData = useSetRecoilState<AnswersDataTypes[]>(userSurveyAnswersData);
  const [id, setId] = useState<number>(Number(queryId));
  const [title, setTitle] = useState<string>(surveys.surveys[id].title);
  const [answersList, setAnswersList] = useState<AnswersDataTypes>({
    id: 0,
    survey: "",
    title: "",
    userAnswer: "",
  });
  const [questionNum, setQuestionNum] = useState<number>(0);
  const [surveyComplete, setSurveyComplete] = useState<boolean>(false);

  const handleClickSaveAnswerValue = (id?: string | string[]) => {
    if (answersList.userAnswer !== "" && id) {
      if (questionNum < surveys.surveys[Number(id)].questions.length - 1) {
        setQuestionNum(questionNum + 1);
      } else if (surveyComplete) {
        setSurveyComplete(false);
        setId(Number(id) + 1);
        setQuestionNum(0);
      } else {
        setSurveyComplete(true);
      }
      const idx = surveyAnswersData.findIndex(
        (el) => el.title === answersList.title
      );
      if (idx < 0) {
        setSurveyAnswersData([...surveyAnswersData, answersList]);
      }
    }
  };

  const handleClickAnswerValue = (answerNum : number) => {
    setAnswersList({
      id: id,
      survey: title,
      title: questions.questions[0].title,
      userAnswer: answers.answers[answerNum],
    });
  };
  
  useEffect(() => {
    setTitle(surveys.surveys[id].title);
  }, [id]);

  return (
    <section>
      {!surveyComplete ? (
        <>
          <div css={proceedContainer}>
            <div css={processBar((questionNum / 2) * 100)}></div>
            <div css={dot}></div>
          </div>

          <h2 css={surveyTitle}>{title}</h2>

          <div css={surveyContentWrapper}>
            <div>
              <span className="current-num">{questionNum + 1}</span>
              <span className="total-num">
                /{surveys.surveys[id].questions.length}
              </span>
            </div>

            <div className="survey-content">
              <p>{questions.questions[questionNum].title}</p>
            </div>

            <div className="survey-answers">
              <ul>
                {questions.questions[questionNum].answers.map((answer) => (
                  <li
                    key={answer}
                    css={surveyAnswer(
                      answers.answers[answer] === answersList.userAnswer
                    )}
                    onClick={() => handleClickAnswerValue(answer)}
                  >
                    {answers.answers[answer]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <SurveyComplete title={title} />
      )}

      <div css={movePageBtnWrapper(answersList)}>
        <button className="back-btn" onClick={() => router.back()}>
          <Image src={icon_back_grey} alt="icon_back" />
          <span>이전</span>
        </button>
        <button
          className="next-btn"
          onClick={() => handleClickSaveAnswerValue(queryId)}
        >
          <span>다음</span>
          <Image src={icon_next_icon} alt="icon_next" />
        </button>
      </div>
    </section>
  );
}

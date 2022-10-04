import { atom } from "recoil"

export interface AnswersDataTypes {
  id: number;
  survey: string;
  title: string;
  userAnswer: string;
}

export const userSurveyAnswersData = atom<AnswersDataTypes[]>({
  key: "userSurveyAnswersData",
  default: [],
});
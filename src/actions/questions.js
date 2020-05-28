import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export function saveAnswer (answer, authedUser, qid) {
  return {
    type: SAVE_ANSWER,
    answer,
    authedUser,
    qid
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function handleAnswerQuestion (answer, qid) {
  console.log(answer, qid);
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => dispatch(saveAnswer(answer, authedUser, qid)))
      .then(() => dispatch(hideLoading()))
  }
}

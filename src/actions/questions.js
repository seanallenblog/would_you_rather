import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';

export function saveAnswer (answer, authedUser, qid) {
  return {
    type: SAVE_ANSWER,
    answer,
    authedUser,
    qid
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function saveUserAnswer (answer, authedUser, qid) {
  return {
    type: SAVE_USER_ANSWER,
    answer,
    authedUser,
    qid
  }
}

export function saveUserQuestion (authedUser, qid) {
  return {
    type: SAVE_USER_QUESTION,
    authedUser,
    qid
  }
}

export function handleSaveQuestion (optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    })
      .then((question) => dispatch(addQuestion(question)))
      .then((resp) => dispatch(saveUserQuestion(author, resp.question.id)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function handleAnswerQuestion (answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => dispatch(saveAnswer(answer, authedUser, qid)))
      .then(() => dispatch(saveUserAnswer(answer, authedUser, qid)))
      .then(() => dispatch(hideLoading()))
  }
}

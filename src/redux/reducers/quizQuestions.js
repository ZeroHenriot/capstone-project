import { GET_QUIZ_QUESTIONS } from '../action'

const initialState = {
  content: [],
}

const quizQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZ_QUESTIONS:
      return { ...state, content: action.payload }
    default:
      return state
  }
}

export default quizQuestionsReducer

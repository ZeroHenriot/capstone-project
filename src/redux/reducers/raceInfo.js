import { GET_RACE_INFO } from '../action'

const initialState = {
  content: [],
}

const raceInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RACE_INFO:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default raceInfoReducer

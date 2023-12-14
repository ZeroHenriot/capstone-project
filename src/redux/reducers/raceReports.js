import { GET_RACE_REPORT, POST_RACE_REPORT, PUT_RACE_REPORT } from '../action'

const initialState = {
  content: [],
}

const raceReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RACE_REPORT:
      return {
        ...state,
        content: action.payload,
      }
    case POST_RACE_REPORT:
      return {
        ...state,
        content: [...state.content, action.payload],
      }
    case PUT_RACE_REPORT:
      return {
        ...state,
        content: state.content.map((race) =>
          race.id === action.payload.id ? action.payload : race
        ),
      }
    default:
      return state
  }
}

export default raceReportReducer

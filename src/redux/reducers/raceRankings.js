import { GET_RACE_RANKINGS } from '../action'

const initialState = {
  content: [],
}

const raceRankingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RACE_RANKINGS:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default raceRankingsReducer

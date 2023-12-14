import { GET_LEADERBOARD, SET_LEADERBOARD } from '../action'

const initialState = {
  content: [],
}

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEADERBOARD:
      return {
        ...state,
        content: action.payload,
      }
    case SET_LEADERBOARD:
      return {
        ...state,
        content: [...state.content, action.payload],
      }
    default:
      return state
  }
}

export default leaderboardReducer

import { GET_TEAMS_STANDING } from '../action'

const initialState = {
  content: [],
}

const teamsStandingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS_STANDING:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default teamsStandingReducer

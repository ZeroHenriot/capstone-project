import { GET_TEAM_INFO } from '../action'

const initialState = {
  content: [],
}

const teamInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM_INFO:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default teamInfoReducer

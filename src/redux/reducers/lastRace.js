import { GET_LAST_RACE } from '../action'

const initialState = {
  content: [],
}

const lastRaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAST_RACE:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default lastRaceReducer

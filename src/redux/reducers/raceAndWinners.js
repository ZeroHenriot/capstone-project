import { GET_RACES_WINNERS_INFO } from '../action'

const initialState = {
  content: [],
}

const raceAndWinnersInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RACES_WINNERS_INFO:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default raceAndWinnersInfoReducer

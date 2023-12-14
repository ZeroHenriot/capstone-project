import { GET_DRIVERS } from '../action'

const initialState = {
  content: [],
}

const driversReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default driversReducer

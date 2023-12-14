import { GET_USERS } from '../action'

const initialState = {
  content: [],
}

const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        content: action.payload,
      }

    default:
      return state
  }
}

export default getUsersReducer

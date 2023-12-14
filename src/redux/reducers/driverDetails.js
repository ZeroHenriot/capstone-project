import { GET_DRIVER_DETAILS } from '../action'

const initialState = {
  content: [],
}

const driverDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVER_DETAILS:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default driverDetailsReducer

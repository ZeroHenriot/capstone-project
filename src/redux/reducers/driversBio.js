import { GET_DRIVERS_BIO, POST_DRIVER_BIO, PUT_DRIVER_BIO } from '../action'

const initialState = {
  content: [],
}

const driversBioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS_BIO:
      return {
        ...state,
        content: action.payload,
      }
    case POST_DRIVER_BIO:
      return {
        ...state,
        content: [...state.content, action.payload],
      }
    case PUT_DRIVER_BIO:
      return {
        ...state,
        content: state.content.map((driver) =>
          driver.id === action.payload.id ? action.payload : driver
        ),
      }
    default:
      return state
  }
}

export default driversBioReducer

import { GET_DRIVER_DETAILS_FOR_MOBILE } from '../action'

const initialState = {
  content: [],
}

const driverDetailsForMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVER_DETAILS_FOR_MOBILE:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default driverDetailsForMobileReducer

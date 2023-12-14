import { GET_2023_RACES } from '../action'

const initialState = {
  content: [],
}

const Races2023Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_2023_RACES:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default Races2023Reducer

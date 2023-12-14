import { GET_TEAM_RANKING_FOR_MOBILE } from '../action'

const initialState = {
  content: [],
}

const teamRankingForMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM_RANKING_FOR_MOBILE:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default teamRankingForMobileReducer

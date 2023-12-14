import { combineReducers, configureStore } from '@reduxjs/toolkit'
import driversReducer from '../reducers/drivers'
import teamsStandingReducer from '../reducers/teamsStanding'
import driverDetailsReducer from '../reducers/driverDetails'
import Races2023Reducer from '../reducers/2023Races'
import raceRankingsReducer from '../reducers/raceRankings'
import raceInfoReducer from '../reducers/raceInfo'
import driverDetailsForMobileReducer from '../reducers/driverDetailsForMobile'
import raceAndWinnersInfoReducer from '../reducers/raceAndWinners'
import teamInfoReducer from '../reducers/teamInfo'
import teamRankingForMobileReducer from '../reducers/teamRankingForMobile'
import lastRaceReducer from '../reducers/lastRace'
import driversBioReducer from '../reducers/driversBio'
import raceReportReducer from '../reducers/raceReports'
import userReducer from '../reducers/users'
import getUsersReducer from '../reducers/getUsers'
import authReducer from '../reducers/login'
import quizQuestionsReducer from '../reducers/quizQuestions'
import leaderboardReducer from '../reducers/leaderboard'

const bigReducer = combineReducers({
  raceAndWinnersInfos: raceAndWinnersInfoReducer,
  drivers: driversReducer,
  teamsStanding: teamsStandingReducer,
  driverDetails: driverDetailsReducer,
  driverDetailsForMobile: driverDetailsForMobileReducer,
  races2023: Races2023Reducer,
  raceRankings: raceRankingsReducer,
  raceInfo: raceInfoReducer,
  teamInfo: teamInfoReducer,
  teamRankingForMobile: teamRankingForMobileReducer,
  lastRace: lastRaceReducer,
  driversBio: driversBioReducer,
  raceReport: raceReportReducer,
  user: userReducer,
  getUsers: getUsersReducer,
  auth: authReducer,
  quizQuestions: quizQuestionsReducer,
  leaderboard: leaderboardReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store

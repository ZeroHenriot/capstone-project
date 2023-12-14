import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavBar from './components/Navbar/MyNavBar'
import Home from './components/HomePage/Home'
import Teams from './components/Teams/Teams'
import Drivers from './components/Drivers/Drivers'
import DriverDetails from './components/Drivers/DriverDetails'
import ScheduledRaces from './components/Races/Schedule'
import RaceResult from './components/Races/RaceResult'
import RaceDetail from './components/Races/RaceDetails/RaceDetail'
import TeamDetail from './components/Teams/TeamDetail'
import MyFooter from './components/Footer/MyFooter'
import LoginPage from './components/Login/LoginPage'
import RegiserPage from './components/Register/RegisterPage'
import Quiz from './components/Quiz/Quiz'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loginUser } from './redux/action'
import Leaderboard from './components/Leaderboard/Leaderboard'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('user')

    if (userFromLocalStorage) {
      const userLogged = JSON.parse(userFromLocalStorage)

      dispatch(loginUser(userLogged))
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column vh-100">
          <header>
            <MyNavBar />
          </header>
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/team/:idTeam" element={<TeamDetail />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/driver/:name" element={<DriverDetails />} />
              <Route path="/schedule" element={<ScheduledRaces />} />
              <Route path="/schedule/race/:idRace" element={<RaceDetail />} />
              <Route path="/raceresult/:idRace" element={<RaceResult />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegiserPage />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </main>
          <footer>
            <MyFooter />
          </footer>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

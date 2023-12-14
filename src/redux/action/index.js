export const GET_RACES_WINNERS_INFO = 'GET_RACES_WINNERS_INFO'
export const GET_DRIVERS = 'GET_DRIVERS'
export const GET_TEAMS_STANDING = 'GET_TEAMS_STANDING'
export const GET_DRIVER_DETAILS = 'GET_DRIVER_DETAILS'
export const GET_2023_RACES = 'GET_2023_RACES'
export const GET_RACE_RANKINGS = 'GET_RACE_RANKINGS'
export const GET_RACE_INFO = 'GET_RACE_INFO'
export const GET_DRIVER_DETAILS_FOR_MOBILE = 'GET_DRIVER_DETAILS_FOR_MOBILE'
export const GET_TEAM_INFO = 'GET_TEAM_INFO'
export const GET_TEAM_RANKING_FOR_MOBILE = 'GET_TEAM_RANKING_FOR_MOBILE'
export const GET_LAST_RACE = 'GET_LAST_RACE'
export const GET_DRIVERS_BIO = 'GET_DRIVERS_BIO'
export const POST_DRIVER_BIO = 'POST_DRIVER_BIO'
export const PUT_DRIVER_BIO = 'PUT_DRIVER_BIO'
export const GET_RACE_REPORT = 'GET_RACE_REPORT'
export const POST_RACE_REPORT = 'POST_RACE_REPORT'
export const PUT_RACE_REPORT = 'PUT_RACE_REPORT'
export const REGISTER_USER = 'REGISTER_USER'
export const GET_USERS = 'GET_USERS'
export const GET_QUIZ_QUESTIONS = 'GET_QUIZ_QUESTIONS'
export const GET_LEADERBOARD = 'GET_LEADERBOARD'
export const SET_LEADERBOARD = 'SET_LEADERBOARD'

// TEAMS

//GET TEAMS STANDING

export const getTeamsStanding = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/rankings/teams?season=2023`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_TEAMS_STANDING,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

export const getTeamRankingForMobile = (id) => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/rankings/teams?season=2023&team=${id}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_TEAM_RANKING_FOR_MOBILE,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

export const getRacesAndWinnersInfos = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/races?&type=race&season=2023`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
            'x-rapidapi-key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_RACES_WINNERS_INFO,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

export const getLastRace = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/races?competition=23&type=race&season=2023&last=1`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_LAST_RACE,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

//GET DRIVERS STANDING

export const getDrivers = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2023`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_DRIVERS,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

// GET DRIVER DETAILS

export const getDriverDetails = (driverName) => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/drivers?name=${driverName}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_DRIVER_DETAILS,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

export const getDriverRankingForMobile = (id) => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2023&driver=${id}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_DRIVER_DETAILS_FOR_MOBILE,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

// GET 2023 RACE

export const get2023Races = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/races?type=race&season=2023`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_2023_RACES,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

// GET RACE RANKINGS

export const getRaceRankigs = (raceId) => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/rankings/races?race=${raceId}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_RACE_RANKINGS,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

// GET RACE INFO FOR RACE DETAIL

export const getRaceInfo = (raceId) => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/races?id=${raceId}&type=race&season=2023`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_RACE_INFO,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

export const getTeamInfo = (idTeam) => {
  return async (dispacth) => {
    try {
      const res = await fetch(
        `https://api-formula-1.p.rapidapi.com/teams?id=${idTeam}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_TEAM_INFO,
          payload: data.response,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

// DRIVERS BIO FROM MY DB

export const getDriversBio = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(`http://localhost:3000/drivers-bio`, {
        method: 'GET',
      })
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_DRIVERS_BIO,
          payload: data,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

export const postDriverBio = (driverBio) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3000/drivers-bio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(driverBio),
      })

      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: POST_DRIVER_BIO,
          payload: data,
        })
      } else {
        throw new Error("Errore durante l'invio della biografia del pilota")
      }
    } catch (error) {
      console.error('Errore:', error)
    }
  }
}

export const putDriverBio = (driverBio, id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/drivers-bio/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(driverBio),
      })

      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: PUT_DRIVER_BIO,
          payload: data,
        })
      } else {
        throw new Error("Errore durante l'invio della biografia del pilota")
      }
    } catch (error) {
      console.error('Errore:', error)
    }
  }
}

export const deleteDriverBio = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/drivers-bio/${id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        dispatch(getDriversBio())
      } else {
        throw new Error(
          'Errore durante la cancellazione della biografia del pilota'
        )
      }
    } catch (error) {
      console.error('Errore:', error)
    }
  }
}

// RACE REPORT FROM MY DB

export const getRaceReport = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(`http://localhost:3000/race-report`, {
        method: 'GET',
      })
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_RACE_REPORT,
          payload: data,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

export const postRaceReport = (raceReport) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3000/race-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(raceReport),
      })

      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: POST_RACE_REPORT,
          payload: data,
        })
      } else {
        throw new Error("Errore durante l'invio del report della gara")
      }
    } catch (error) {
      console.error('Errore:', error)
    }
  }
}

export const putRaceReport = (raceReport, id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/race-report/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(raceReport),
      })

      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: PUT_RACE_REPORT,
          payload: data,
        })
      } else {
        throw new Error("Errore durante l'invio del report della gara")
      }
    } catch (error) {
      console.error('Errore:', error)
    }
  }
}

export const deleteRaceReport = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/race-report/${id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        dispatch(getRaceReport())
      } else {
        throw new Error('Errore durante la cancellazione del report della gara')
      }
    } catch (error) {
      console.error('Errore:', error)
    }
  }
}

// USERS REGISTRATION

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: REGISTER_USER,
          payload: data,
        })
      } else {
        throw new Error("Errore durante la registrazione dell'user")
      }
    } catch (error) {
      console.error('Errore:', error)
    }
  }
}

export const getUsers = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(`http://localhost:3000/user`, {
        method: 'GET',
      })
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_USERS,
          payload: data,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

export const loginUser = (userData) => ({
  type: 'LOGIN_USER',
  payload: userData,
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
})

// QUIZ

export const getQuizQuestions = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(`http://localhost:3000/quiz`, {
        method: 'GET',
      })
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_QUIZ_QUESTIONS,
          payload: data,
        })
      } else {
        throw new Error('errore nel recupero delle domande')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

// LEADERBOARD

export const getLeaderboard = () => {
  return async (dispacth) => {
    try {
      const res = await fetch(`http://localhost:3000/leaderboard`, {
        method: 'GET',
      })
      if (res.ok) {
        const data = await res.json()
        dispacth({
          type: GET_LEADERBOARD,
          payload: data,
        })
      } else {
        throw new Error('Erroere nel recupero della leaderboard')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const setLeaderboard = (leaderboard) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/leaderboard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leaderboard),
      })

      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: SET_LEADERBOARD,
          payload: data,
        })
      } else {
        throw new Error("Errore durante la registrazione dell'user")
      }
    } catch (error) {
      console.error('Errore:', error)
    }
  }
}

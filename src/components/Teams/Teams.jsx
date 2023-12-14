import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTeamsStanding } from '../../redux/action'
import { Link } from 'react-router-dom'

const Teams = () => {
  const teamsId = [1, 2, 3, 5, 7, 12, 13, 14, 17, 18]
  const [teams, setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  console.log(teams)
  const dispatch = useDispatch()

  const teamsStanding = useSelector((state) => state.teamsStanding.content)
  console.log('standing', teamsStanding)

  useEffect(() => {
    const getTeams = () => {
      if (teamsStanding.length > 0) {
        const promises = teamsId.map((teamId) => getTeamDetails(teamId))

        Promise.all(promises)
          .then((results) => {
            // Ordino le squadre in base all'ordine di teamsStanding
            const sortedTeams = results.sort((a, b) => {
              const indexA = teamsStanding.findIndex(
                (team) => team.team.id === a.response[0].id
              )
              const indexB = teamsStanding.findIndex(
                (team) => team.team.id === b.response[0].id
              )
              return indexA - indexB
            })

            // Associo i dati di teamStanding alle squadre ordinate
            const teamsWithStanding = sortedTeams.map((team) => {
              const teamStandingData = teamsStanding.find(
                (standing) => standing.team.id === team.response[0].id
              )
              return {
                ...team,
                teamStanding: teamStandingData,
              }
            })

            setTimeout(() => {
              setTeams(teamsWithStanding)
              setIsLoading(false) // Imposta lo stato su "false" dopo 0.5 secondi
            }, 500)
          })
          .catch((err) => {
            console.log('Errore durante la richiesta di dettagli del team', err)
          })
      }
    }

    getTeams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamsStanding])

  useEffect(() => {
    dispatch(getTeamsStanding())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTeamDetails = (teamId) => {
    return fetch(`https://api-formula-1.p.rapidapi.com/teams?id=${teamId}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
        'x-rapidapi-key': '19e1c620e1msh2f676739c440279p1ea716jsn44564f12a17e',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Errore nella richiesta')
        }
      })
      .catch((err) => {
        console.log(`Errore per team ${teamId}`, err)
      })
  }

  return (
    <>
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : (
        teams.length > 0 && (
          <Container>
            <Row className="teams mt-5">
              <Col>
                <p className="fontBold display-4 text-black">F1 Teams 2023</p>
              </Col>
            </Row>
            <Row className="justify-content-evenly">
              {teams.map((team, index) => (
                <Col
                  key={index}
                  xs={11}
                  xl={6}
                  className={`team-card p-3 mb-4 mt-2 ${
                    team.response[0].name.toLowerCase().includes('red')
                      ? 'teamAndDrivers-card-redbull'
                      : team.response[0].name.toLowerCase().includes('merc')
                      ? 'teamAndDrivers-card-mercedes'
                      : team.response[0].name.toLowerCase().includes('wil')
                      ? 'teamAndDrivers-card-williams'
                      : team.response[0].name.toLowerCase().includes('fer')
                      ? 'teamAndDrivers-card-ferrari'
                      : team.response[0].name.toLowerCase().includes('alfa')
                      ? 'teamAndDrivers-card-alfa'
                      : team.response[0].name.toLowerCase().includes('alpha')
                      ? 'teamAndDrivers-card-alpha'
                      : team.response[0].name.toLowerCase().includes('aston')
                      ? 'teamAndDrivers-card-aston'
                      : team.response[0].name.toLowerCase().includes('mcl')
                      ? 'teamAndDrivers-card-mcl'
                      : team.response[0].name.toLowerCase().includes('alp')
                      ? 'teamAndDrivers-card-alpine'
                      : team.response[0].name.toLowerCase().includes('haas')
                      ? 'teamAndDrivers-card-haas'
                      : ''
                  }`}
                >
                  <Link
                    to={`/team/${team.response[0].id}`}
                    className="nav-link"
                  >
                    <Row className="border-bottom align-items-center w-100 m-0">
                      <Col className="display-6 fontBold py-3">
                        {team.teamStanding.position}
                      </Col>
                      <Col className="fs-5 fw-bold py-3 ">
                        <div
                          className="d-flex flex-column align-items-end fontWide"
                          style={{ fontSize: '14px' }}
                        >
                          {team.teamStanding.points > 0
                            ? team.teamStanding.points
                            : '0'}

                          <span>PTS</span>
                        </div>
                      </Col>
                    </Row>
                    <Row className="border-top border-bottom align-items-center w-100 m-0">
                      <Col className="fs-5 fontBold py-3 text-nowrap text-truncate">
                        {team.response[0].name}
                      </Col>
                      <Col xs={3} className="text-end d-none d-sm-block">
                        <img
                          src={team.response[0].logo}
                          alt="team logo"
                          style={{ width: '100px' }}
                        />
                      </Col>
                    </Row>
                    <Row className="border-bottom align-items-center w-100 m-0">
                      <Col className="fs-5 fontBold py-3 ">
                        {team.response[0].base}
                      </Col>
                    </Row>
                    <Row className="py-3 justify-content-around w-100 m-0">
                      <Col xs={5} className="chassis">
                        Chassis: {team.response[0].chassis}
                      </Col>
                      <Col xs={5} className="engine">
                        Engine: {team.response[0].engine}
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        style={{
                          backgroundImage: `url(${'../public/img/assests/plus-x1.avif'})`,
                        }}
                        className="mx-2 rounded"
                      >
                        <img
                          src={
                            team.response[0].name.toLowerCase().includes('red')
                              ? '../public/img/cars/teamcar-redbull.avif'
                              : team.response[0].name
                                  .toLowerCase()
                                  .includes('mercedes')
                              ? 'public/img/cars/teamcar-mercedes.avif'
                              : team.response[0].name
                                  .toLowerCase()
                                  .includes('mclaren')
                              ? 'public/img/cars/teamcar-mclaren.avif'
                              : team.response[0].name
                                  .toLowerCase()
                                  .includes('ferrari')
                              ? 'public/img/cars/ferrari.avif'
                              : team.response[0].name
                                  .toLowerCase()
                                  .includes('alpha')
                              ? 'public/img/cars/alphatauri.avif'
                              : team.response[0].name
                                  .toLowerCase()
                                  .includes('williams')
                              ? 'public/img/cars/williams.avif'
                              : team.response[0].name
                                  .toLowerCase()
                                  .includes('alpine')
                              ? 'public/img/cars/alpine.avif'
                              : team.response[0].name
                                  .toLowerCase()
                                  .includes('haas')
                              ? 'public/img/cars/teamcar-haas.avif'
                              : team.response[0].name
                                  .toLowerCase()
                                  .includes('aston')
                              ? 'public/img/cars/teamcar-astonmartin.avif'
                              : team.response[0].name
                                  .toLowerCase()
                                  .includes('alfa')
                              ? 'public/img/cars/alfa-romeo-racing.avif'
                              : ''
                          }
                          alt={`${team.response[0].name} team car`}
                          className="w-100"
                        />
                      </Col>
                    </Row>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        )
      )}
    </>
  )
}

export default Teams

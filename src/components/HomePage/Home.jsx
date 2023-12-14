import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  getDrivers,
  getLastRace,
  getRaceRankigs,
  getTeamsStanding,
} from '../../redux/action'
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const lastRace = useSelector((state) => state.lastRace.content[0])
  const lastRaceRanking = useSelector((state) => state.raceRankings.content)
  const drivers = useSelector((state) => state.drivers.content)
  const teams = useSelector((state) => state.teamsStanding.content)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getLastRace())
        await dispatch(getDrivers())
        await dispatch(getTeamsStanding())
        setIsLoading(false)
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (lastRace) {
      dispatch(getRaceRankigs(lastRace.id))
    }
  }, [lastRace])
  return (
    <>
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <Container>
          <Row className="justify-content-center justify-content-md-end mt-5">
            <p className="fs-2 text-primary">Last Race</p>
            <p className="m-0 fs-2">{lastRace.competition.name}</p>
            <Col xs={11} md={8} lg={6} xl={7}>
              {lastRaceRanking
                .filter((position, index) => index < 5)
                .map((position) => (
                  <Row
                    key={position.id}
                    className="justify-content-between my-3 border-top border-bottom fs-4 py-1"
                  >
                    <Col xs={1}>{position.position}</Col>
                    <Col>
                      <p className="m-0 text-nowrap">
                        <span className="d-none d-sm-inline">
                          {position.driver.name.split(' ')[0]}
                        </span>{' '}
                        <strong>
                          {position.driver.name
                            .split(' ')
                            .slice(1)
                            .join(' ')
                            .toUpperCase()}
                        </strong>
                      </p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <span
                        className="rounded-pill py-1 d-flex align-items-center justify-content-center"
                        style={{
                          fontSize: '13px',
                          width: '95px',
                          background: '#ededed',
                        }}
                      >
                        {position.time}
                      </span>
                    </Col>
                  </Row>
                ))}
            </Col>
          </Row>
          <Link
            to={`/raceresult/${lastRace.id}`}
            className="nav-link mb-5 mt-2 text-black-50"
          >
            View Results
          </Link>
          <Row className="justify-content-center justify-content-md-end mt-5">
            <p className="fs-2 text-primary">Drivers Standing</p>
            <Col xs={11} md={8} lg={6} xl={7}>
              {drivers
                .filter((driver, index) => index < 5)
                .map((driver) => (
                  <Row
                    key={driver.id}
                    className="justify-content-between my-3 border-top border-bottom fs-4 py-1"
                  >
                    <Col xs={1}>{driver.position}</Col>
                    <Col>
                      <p className="m-0 text-nowrap">
                        <span className="d-none d-sm-inline">
                          {driver.driver.name.split(' ')[0]}
                        </span>{' '}
                        <strong>
                          {driver.driver.name
                            .split(' ')
                            .slice(1)
                            .join(' ')
                            .toUpperCase()}
                        </strong>
                      </p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <div
                        className="d-flex flex-column align-items-end fontWide"
                        style={{ fontSize: '14px' }}
                      >
                        {driver.points}

                        <span>PTS</span>
                      </div>
                    </Col>
                  </Row>
                ))}
            </Col>
          </Row>
          <Link to={`/drivers`} className="nav-link mb-5 mt-2 text-black-50">
            View Full Drivers Standing
          </Link>
          <Row className="justify-content-center justify-content-md-end mt-5">
            <p className="fs-2 text-primary">Teams Standing</p>
            <Col xs={11} md={8} lg={6} xl={7}>
              {teams
                .filter((team, index) => index < 5)
                .map((team) => (
                  <Row
                    key={team.id}
                    className="justify-content-between my-3 border-top border-bottom fs-4 py-1"
                  >
                    <Col xs={1}>{team.position}</Col>
                    <Col>
                      <p className="m-0">
                        <span>{team.team.name}</span>
                      </p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <div
                        className="d-flex flex-column align-items-end fontWide"
                        style={{ fontSize: '14px' }}
                      >
                        {team.points}

                        <span>PTS</span>
                      </div>
                    </Col>
                  </Row>
                ))}
            </Col>
          </Row>
          <Link to={`/teams`} className="nav-link mb-5 mt-2 text-black-50">
            View Full Teams Standing
          </Link>
        </Container>
      )}
    </>
  )
}
export default Home

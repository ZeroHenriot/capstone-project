import { format, subDays } from 'date-fns'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getRaceInfo, getRaceRankigs } from '../../redux/action'

const RaceResult = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)

  const raceRankings = useSelector((state) => state.raceRankings.content)
  const race = useSelector((state) => state.raceInfo.content)

  useEffect(() => {
    setTimeout(() => {
      dispatch(getRaceRankigs(params.idRace))
      dispatch(getRaceInfo(params.idRace))
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : race && race.length > 0 ? (
        <Container className="raceResults mt-5 px-4 py-2">
          <Row>
            <Col>
              <>
                <h2>{race[0].competition.name}</h2>
                <div className="mb-5" style={{ fontSize: '14px' }}>
                  <span>
                    {format(subDays(new Date(race[0].date), 2), 'dd')}
                    &nbsp;-&nbsp;
                    {format(new Date(race[0].date), 'dd MMMM yyyy')}
                  </span>

                  <span className="text-black-50 ms-3">
                    {race[0].circuit.name}, {race[0].competition.location.city}
                  </span>
                </div>
              </>
            </Col>
          </Row>
          <Row className="mb-3 fontBold">
            <Col xs={1} className="d-none d-lg-inline">
              POS
            </Col>
            <Col>DRIVER</Col>
            <Col xs={1} className="d-none d-xl-inline">
              NO
            </Col>
            <Col className="d-none d-lg-inline">TEAM</Col>
            <Col className="text-end text-lg-start">TIME/RETIRED</Col>
            <Col xs={1} className="d-none d-xl-inline">
              LAPS
            </Col>
          </Row>
          <Row className="vh-100">
            <Col className="flex flex-column justify-content-between">
              {raceRankings.map((driver, index) => (
                <Row key={driver.driver.id} className="mb-3">
                  <Col xs={1} className="d-none d-lg-inline">
                    {index + 1}
                  </Col>
                  <Col className="d-flex justify-content-between text-nowrap">
                    {driver.driver.name}
                  </Col>
                  <Col xs={1} className="d-none d-xl-inline">
                    {driver.driver.number}
                  </Col>
                  <Col className="d-none d-lg-inline">{driver.team.name}</Col>
                  <Col className="text-end text-lg-start">{driver.time}</Col>
                  <Col xs={1} className="d-none d-xl-inline">
                    {driver.laps}
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
          <Row clas>
            <Link
              to={`/schedule/race/${race[0].id}`}
              className="nav-link bg-primary mt-5 py-2 px-3 rounded raceResultButton"
              style={{ width: 'fit-content' }}
            >
              Read the race report
            </Link>
          </Row>
        </Container>
      ) : null}
    </>
  )
}

export default RaceResult

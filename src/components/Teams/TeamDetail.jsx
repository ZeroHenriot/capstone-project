import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamInfo } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import FirstDriver from './TeamDrivers/FirstDriver'
import SecondDriver from './TeamDrivers/SecondDriver'
import TeamDetailsForMobile from '../Mobile/Team/TeamDetailForMobile'

const TeamDetail = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()
  console.log(params.idTeam)
  const team = useSelector((state) => state.teamInfo.content[0])
  useEffect(() => {
    dispatch(getTeamInfo(params.idTeam))
    setTimeout(() => {
      dispatch(getTeamInfo(params.idTeam))
      setIsLoading(false)
    }, 500)
  }, [])
  console.log(team)
  return (
    <>
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : team ? (
        <Container>
          <Row className="d-none d-md-flex mt-5">
            <Col xs={11} lg={6} className="fs-5 teamsInfo">
              <Row>
                <Col className="d-flex">
                  <img src={team.logo} alt="" style={{ width: '180px' }} />
                </Col>
              </Row>
              <Row>
                <Col className="fontBold">Full Team Name</Col>
                <Col>{team.name}</Col>
              </Row>
              <Row>
                <Col className="fontBold">Base</Col>
                <Col>{team.base}</Col>
              </Row>
              <Row>
                <Col className="fontBold">Team Chief</Col>
                <Col>{team.director}</Col>
              </Row>
              <Row>
                <Col className="fontBold">Technical Chief</Col>
                <Col>{team.technical_manager}</Col>
              </Row>
              <Row>
                <Col className="fontBold">Chassis</Col>
                <Col>{team.chassis}</Col>
              </Row>
              <Row>
                <Col className="fontBold">Power Unit</Col>
                <Col>{team.engine}</Col>
              </Row>
              <Row>
                <Col className="fontBold">First Team Entry</Col>
                <Col>{team.first_team_entry}</Col>
              </Row>
              <Row>
                <Col className="fontBold">World Championships</Col>
                <Col>{team.world_championships}</Col>
              </Row>
              <Row>
                <Col className="fontBold">Highest Race Finish</Col>
                <Col>
                  {team.highest_race_finish.position} (x
                  {team.highest_race_finish.number})
                </Col>
              </Row>
              <Row>
                <Col className="fontBold">Pole Positions</Col>
                <Col>{team.pole_positions}</Col>
              </Row>
              <Row>
                <Col className="fontBold">Fastest Laps</Col>
                <Col>{team.fastest_laps}</Col>
              </Row>
            </Col>
            <Col
              xs={11}
              lg={6}
              className="d-flex flex-column justify-content-between"
            >
              <Row>
                <FirstDriver team={team} />
                <SecondDriver team={team} />
              </Row>
              <Row>
                <Col className="d-flex justify-content-center align-items-center position-relative teamDetailCar">
                  <div
                    className={`${
                      team.name.toLowerCase().includes('red')
                        ? 'redbull'
                        : team.name.toLowerCase().includes('mercedes')
                        ? 'mercedes'
                        : team.name.toLowerCase().includes('mclaren')
                        ? 'mclaren'
                        : team.name.toLowerCase().includes('ferrari')
                        ? 'ferrari'
                        : team.name.toLowerCase().includes('alpha')
                        ? 'alphatauri'
                        : team.name.toLowerCase().includes('williams')
                        ? 'williams'
                        : team.name.toLowerCase().includes('alpine')
                        ? 'alpine'
                        : team.name.toLowerCase().includes('haas')
                        ? 'haas'
                        : team.name.toLowerCase().includes('aston')
                        ? 'astonmartin'
                        : team.name.toLowerCase().includes('alfa')
                        ? 'alfaromeo'
                        : ''
                    }`}
                    style={{
                      width: '300px',
                      height: '50px',
                      position: 'absolute',
                      left: '0',
                      top: '38%',
                    }}
                  ></div>
                  <img
                    src={
                      team.name.toLowerCase().includes('red')
                        ? '../public/img/cars/teamcar-redbull.avif'
                        : team.name.toLowerCase().includes('mercedes')
                        ? '../public/img/cars/teamcar-mercedes.avif'
                        : team.name.toLowerCase().includes('mclaren')
                        ? '../public/img/cars/teamcar-mclaren.avif'
                        : team.name.toLowerCase().includes('ferrari')
                        ? '../public/img/cars/ferrari.avif'
                        : team.name.toLowerCase().includes('alpha')
                        ? '../public/img/cars/alphatauri.avif'
                        : team.name.toLowerCase().includes('williams')
                        ? '../public/img/cars/williams.avif'
                        : team.name.toLowerCase().includes('alpine')
                        ? '../public/img/cars/alpine.avif'
                        : team.name.toLowerCase().includes('haas')
                        ? '../public/img/cars/teamcar-haas.avif'
                        : team.name.toLowerCase().includes('aston')
                        ? '../public/img/cars/teamcar-astonmartin.avif'
                        : team.name.toLowerCase().includes('alfa')
                        ? '../public/img/cars/alfa-romeo-racing.avif'
                        : ''
                    }
                    alt={`${team.name} team car`}
                    className="d-none d-md-inline z-3"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <TeamDetailsForMobile team={team} />
          </Row>
        </Container>
      ) : (
        ''
      )}
    </>
  )
}

export default TeamDetail

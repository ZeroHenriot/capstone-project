import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTeamRankingForMobile } from '../../../redux/action'
import { Col, Row } from 'react-bootstrap'

import FirstDriver from '../../Teams/TeamDrivers/FirstDriver'
import SecondDriver from '../../Teams/TeamDrivers/SecondDriver'

const TeamDetailsForMobile = ({ team }) => {
  const teamRanking = useSelector(
    (state) => state.teamRankingForMobile.content[0]
  )
  console.log('dododoodod', teamRanking)
  console.log('abbab', team)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTeamRankingForMobile(team.id))
    // dispatch(getDriverDetails(name))
  }, [])

  return (
    <Col xs={11} className="d-md-none">
      {' '}
      {team && teamRanking ? (
        <>
          <Row className="mt-5">
            <Col
              className={`position-relative ${
                team.name.toLowerCase().includes('red')
                  ? 'mobileDetailsColTopRedBull'
                  : team.name.toLowerCase().includes('merc')
                  ? 'mobileDetailsColTopMercedes'
                  : team.name.toLowerCase().includes('wil')
                  ? 'mobileDetailsColTopWilliams'
                  : team.name.toLowerCase().includes('fer')
                  ? 'mobileDetailsColTopFerrari'
                  : team.name.toLowerCase().includes('alfa')
                  ? 'mobileDetailsColTopAlfaRomeo'
                  : team.name.toLowerCase().includes('alpha')
                  ? 'mobileDetailsColTopAlphaTauri'
                  : team.name.toLowerCase().includes('aston')
                  ? 'mobileDetailsColTopAstonMartin'
                  : team.name.toLowerCase().includes('mcl')
                  ? 'mobileDetailsColTopMclaren'
                  : team.name.toLowerCase().includes('alp')
                  ? 'mobileDetailsColTopAlpine'
                  : team.name.toLowerCase().includes('haas')
                  ? 'mobileDetailsColTopHass'
                  : ''
              }`}
            >
              <span className="championShipMobile pe-1">
                Championship Standing
              </span>
              <div className="d-flex justify-content-between align-items-end mt-3">
                <span className="fontBold display-1">
                  {teamRanking.position}
                </span>
                <div className="d-flex align-items-center">
                  <span className="fs-4"> {teamRanking.points}</span>
                  <span
                    className="bg-black text-white fontBold px-2 rounded ms-1"
                    style={{ width: 'fit-content' }}
                  >
                    PTS
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4 ">
            <Col className="d-flex flex-column mt-4 mobileDetailsCol">
              <span className="text-black-50">Highest Finish</span>
              <span className="display-5 fontBold text-black">
                {team.highest_race_finish.position}
                {''}x {team.highest_race_finish.number}
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex flex-column mobileDetailsCol">
              <span className="text-black-50">Pole Positions</span>
              <span className="display-5 fontBold text-black">
                {team.pole_positions}
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex flex-column mobileDetailsCol">
              <span className="text-black-50">Fastest Laps</span>
              <span className="display-5 fontBold text-black">
                {team.fastest_laps}
              </span>
            </Col>
          </Row>
          <Row className="mt-5">
            <p className="p-0">Team</p>
            <Col xs={6} className={`p-0`}>
              {<FirstDriver team={team} />}
            </Col>
            <Col xs={6} className={`p-0 `}>
              {<SecondDriver team={team} />}
            </Col>
          </Row>
          <Row className="mt-5">
            <p>Constructor's Championships</p>
            <span className="display-1 fontBold">
              {team.world_championships}
            </span>
          </Row>
          <Row className="mt-5">
            <Col
              className={`p-3 ${
                team.name.toLowerCase().includes('red')
                  ? 'mobileDetailsColTopRedBull'
                  : team.name.toLowerCase().includes('merc')
                  ? 'mobileDetailsColTopMercedes'
                  : team.name.toLowerCase().includes('wil')
                  ? 'mobileDetailsColTopWilliams'
                  : team.name.toLowerCase().includes('fer')
                  ? 'mobileDetailsColTopFerrari'
                  : team.name.toLowerCase().includes('alfa')
                  ? 'mobileDetailsColTopAlfaRomeo'
                  : team.name.toLowerCase().includes('alpha')
                  ? 'mobileDetailsColTopAlphaTauri'
                  : team.name.toLowerCase().includes('aston')
                  ? 'mobileDetailsColTopAstonMartin'
                  : team.name.toLowerCase().includes('mcl')
                  ? 'mobileDetailsColTopMclaren'
                  : team.name.toLowerCase().includes('alp')
                  ? 'mobileDetailsColTopAlpine'
                  : team.name.toLowerCase().includes('haas')
                  ? 'mobileDetailsColTopHass'
                  : ''
              }`}
            ></Col>
          </Row>
          <Row>
            <Col className="d-flex py-2 flex-column mt-4 mobileDetailsCol">
              <span className="text-black-50">Base</span>
              <span className="display-6 fontBold text-black d-flex align-items-center justify-content-between">
                {team.base}
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex py-2 flex-column mobileDetailsCol">
              <span className="text-black-50">Team Chief</span>
              <span className="display-6 fontBold text-black">
                {team.director}
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex py-2 flex-column mobileDetailsCol">
              <span className="text-black-50">Technical Chief</span>
              <span className="display-6 fontBold text-black">
                {team.technical_manager}
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex py-2 flex-column mobileDetailsCol">
              <span className="text-black-50">Chassis</span>
              <span className="display-6 fontBold text-black">
                {team.chassis}
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex py-2 flex-column mobileDetailsCol">
              <span className="text-black-50">Power Unit</span>
              <span className="display-6 fontBold text-black">
                {team.engine}
              </span>
            </Col>
          </Row>
        </>
      ) : (
        ''
      )}
    </Col>
  )
}

export default TeamDetailsForMobile

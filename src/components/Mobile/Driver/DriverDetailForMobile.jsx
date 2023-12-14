import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getDriverDetails,
  getDriverRankingForMobile,
} from '../../../redux/action'
import { Col, Row } from 'react-bootstrap'
import { CaretRight } from 'react-bootstrap-icons'

const DriverDetailsForMobile = ({ driverId, name }) => {
  const driverRanking = useSelector(
    (state) => state.driverDetailsForMobile.content
  )
  const driver = useSelector((state) => state.driverDetails.content)
  console.log('dododoodod', driverRanking)
  console.log('abbab', driver)

  const dispatch = useDispatch()

  // console.log(driversBio)

  useEffect(() => {
    dispatch(getDriverRankingForMobile(driverId))
    dispatch(getDriverDetails(name))
  }, [])

  return (
    <Col xs={11} className="d-md-none">
      {' '}
      {driver.length > 0 && driverRanking.length > 0 && (
        <>
          <Row>
            <Col
              className={`position-relative ${
                driverRanking[0].team.name.toLowerCase().includes('red')
                  ? 'mobileDetailsColTopRedBull'
                  : driverRanking[0].team.name.toLowerCase().includes('merc')
                  ? 'mobileDetailsColTopMercedes'
                  : driverRanking[0].team.name.toLowerCase().includes('wil')
                  ? 'mobileDetailsColTopWilliams'
                  : driverRanking[0].team.name.toLowerCase().includes('fer')
                  ? 'mobileDetailsColTopFerrari'
                  : driverRanking[0].team.name.toLowerCase().includes('alfa')
                  ? 'mobileDetailsColTopAlfaRomeo'
                  : driverRanking[0].team.name.toLowerCase().includes('alpha')
                  ? 'mobileDetailsColTopAlphaTauri'
                  : driverRanking[0].team.name.toLowerCase().includes('aston')
                  ? 'mobileDetailsColTopAstonMartin'
                  : driverRanking[0].team.name.toLowerCase().includes('mcl')
                  ? 'mobileDetailsColTopMclaren'
                  : driverRanking[0].team.name.toLowerCase().includes('alp')
                  ? 'mobileDetailsColTopAlpine'
                  : driverRanking[0].team.name.toLowerCase().includes('haas')
                  ? 'mobileDetailsColTopHass'
                  : ''
              }`}
            >
              <span className="championShipMobile pe-1">
                Championship Standing
              </span>
              <div className="d-flex justify-content-between align-items-end mt-3">
                <span className="fontBold display-1">
                  {driverRanking[0].position}
                </span>
                <div className="d-flex align-items-center">
                  <span className="fs-4"> {driverRanking[0].points}</span>
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
              <span className="text-black-50">Podiums</span>
              <span className="display-5 fontBold text-black">
                {driver[0].podiums}
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex flex-column mobileDetailsCol">
              <span className="text-black-50">GPs Entered</span>
              <span className="display-5 fontBold text-black">
                {driver[0].grands_prix_entered}
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex flex-column mobileDetailsCol">
              <span className="text-black-50">Career Points</span>
              <span className="display-5 fontBold text-black">
                {driver[0].career_points}
              </span>
            </Col>
          </Row>
          <Row className="mt-5">
            <p className="p-0">TEAM</p>
            <Col
              className={`py-5 ${
                driverRanking[0].team.name.toLowerCase().includes('red')
                  ? 'mobileDetailsColTopRedBull'
                  : driverRanking[0].team.name.toLowerCase().includes('merc')
                  ? 'mobileDetailsColTopMercedes'
                  : driverRanking[0].team.name.toLowerCase().includes('wil')
                  ? 'mobileDetailsColTopWilliams'
                  : driverRanking[0].team.name.toLowerCase().includes('fer')
                  ? 'mobileDetailsColTopFerrari'
                  : driverRanking[0].team.name.toLowerCase().includes('alfa')
                  ? 'mobileDetailsColTopAlfaRomeo'
                  : driverRanking[0].team.name.toLowerCase().includes('alpha')
                  ? 'mobileDetailsColTopAlphaTauri'
                  : driverRanking[0].team.name.toLowerCase().includes('aston')
                  ? 'mobileDetailsColTopAstonMartin'
                  : driverRanking[0].team.name.toLowerCase().includes('mcl')
                  ? 'mobileDetailsColTopMclaren'
                  : driverRanking[0].team.name.toLowerCase().includes('alp')
                  ? 'mobileDetailsColTopAlpine'
                  : driverRanking[0].team.name.toLowerCase().includes('haas')
                  ? 'mobileDetailsColTopHass'
                  : ''
              }`}
              style={{
                backgroundImage: `url(${'../public/img/assests/plus-x1.avif'})`,
              }}
            >
              <img
                src={
                  driverRanking[0].team.name.toLowerCase().includes('red')
                    ? '../public/img/cars/teamcar-redbull.avif'
                    : driverRanking[0].team.name
                        .toLowerCase()
                        .includes('mercedes')
                    ? '../public/img/cars/teamcar-mercedes.avif'
                    : driverRanking[0].team.name
                        .toLowerCase()
                        .includes('mclaren')
                    ? '../public/img/cars/teamcar-mclaren.avif'
                    : driverRanking[0].team.name
                        .toLowerCase()
                        .includes('ferrari')
                    ? '../public/img/cars/ferrari.avif'
                    : driverRanking[0].team.name.toLowerCase().includes('alpha')
                    ? '../public/img/cars/alphatauri.avif'
                    : driverRanking[0].team.name
                        .toLowerCase()
                        .includes('williams')
                    ? '../public/img/cars/williams.avif'
                    : driverRanking[0].team.name
                        .toLowerCase()
                        .includes('alpine')
                    ? '../public/img/cars/alpine.avif'
                    : driverRanking[0].team.name.toLowerCase().includes('haas')
                    ? '../public/img/cars/teamcar-haas.avif'
                    : driverRanking[0].team.name.toLowerCase().includes('aston')
                    ? '../public/img/cars/teamcar-astonmartin.avif'
                    : driverRanking[0].team.name.toLowerCase().includes('alfa')
                    ? '../public/img/cars/alfa-romeo-racing.avif'
                    : ''
                }
                alt={`${driverRanking[0].team.name} team car`}
                className="w-100"
              />
            </Col>
            <Link
              to={`/team/${driverRanking[0].team.id}`}
              className="d-flex align-items-center justify-content-center nav-link fontBold mt-2"
            >
              {driverRanking[0].team.name} <CaretRight className="ms-1" />
            </Link>
          </Row>
          <Row className="mt-5">
            <p>World Championships</p>
            <span className="display-1 fontBold">
              {driver[0].world_championships}
            </span>
          </Row>
          <Row className="mt-5">
            <Col
              className={`p-3 ${
                driverRanking[0].team.name.toLowerCase().includes('red')
                  ? 'mobileDetailsColTopRedBull'
                  : driverRanking[0].team.name.toLowerCase().includes('merc')
                  ? 'mobileDetailsColTopMercedes'
                  : driverRanking[0].team.name.toLowerCase().includes('wil')
                  ? 'mobileDetailsColTopWilliams'
                  : driverRanking[0].team.name.toLowerCase().includes('fer')
                  ? 'mobileDetailsColTopFerrari'
                  : driverRanking[0].team.name.toLowerCase().includes('alfa')
                  ? 'mobileDetailsColTopAlfaRomeo'
                  : driverRanking[0].team.name.toLowerCase().includes('alpha')
                  ? 'mobileDetailsColTopAlphaTauri'
                  : driverRanking[0].team.name.toLowerCase().includes('aston')
                  ? 'mobileDetailsColTopAstonMartin'
                  : driverRanking[0].team.name.toLowerCase().includes('mcl')
                  ? 'mobileDetailsColTopMclaren'
                  : driverRanking[0].team.name.toLowerCase().includes('alp')
                  ? 'mobileDetailsColTopAlpine'
                  : driverRanking[0].team.name.toLowerCase().includes('haas')
                  ? 'mobileDetailsColTopHass'
                  : ''
              }`}
            ></Col>
          </Row>
          <Row>
            <Col className="d-flex py-2 flex-column mt-4 mobileDetailsCol">
              <span className="text-black-50">Country</span>
              <span className="display-6 fontBold text-black d-flex align-items-center justify-content-between">
                {driver[0].country.code}{' '}
                <img
                  src={`https://flagsapi.com/${driver[0].country.code}/flat/64.png`}
                  style={{ width: '50px' }}
                ></img>
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex py-2 flex-column mobileDetailsCol">
              <span className="text-black-50">Place of birth</span>
              <span className="display-6 fontBold text-black">
                {driver[0].birthplace}
              </span>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="d-flex py-2 flex-column mobileDetailsCol">
              <span className="text-black-50">Date of birth</span>
              <span className="display-6 fontBold text-black">
                {driver[0].birthdate}
              </span>
            </Col>
          </Row>
        </>
      )}
    </Col>
  )
}

export default DriverDetailsForMobile

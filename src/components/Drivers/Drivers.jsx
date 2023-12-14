import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getDrivers } from '../../redux/action'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Drivers = () => {
  const drivers = useSelector((state) => state.drivers.content)
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(getDrivers()), setIsLoading(false)
    }, 500)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <Container>
          <Row className="drivers mt-5">
            <Col>
              <p className="fontBold display-4 text-black">F1 Drivers 2023</p>
            </Col>
          </Row>
          <Row className="justify-content-start">
            {drivers.map((driver, index) => (
              <Col
                key={index}
                xs={11}
                xl={index < 3 ? 4 : 3}
                className={`driver-card p-3 mb-4 mt-2 ${
                  driver.team.name.toLowerCase().includes('red')
                    ? 'teamAndDrivers-card-redbull'
                    : driver.team.name.toLowerCase().includes('merc')
                    ? 'teamAndDrivers-card-mercedes'
                    : driver.team.name.toLowerCase().includes('wil')
                    ? 'teamAndDrivers-card-williams'
                    : driver.team.name.toLowerCase().includes('fer')
                    ? 'teamAndDrivers-card-ferrari'
                    : driver.team.name.toLowerCase().includes('alfa')
                    ? 'teamAndDrivers-card-alfa'
                    : driver.team.name.toLowerCase().includes('alpha')
                    ? 'teamAndDrivers-card-alpha'
                    : driver.team.name.toLowerCase().includes('aston')
                    ? 'teamAndDrivers-card-aston'
                    : driver.team.name.toLowerCase().includes('mcl')
                    ? 'teamAndDrivers-card-mcl'
                    : driver.team.name.toLowerCase().includes('alp')
                    ? 'teamAndDrivers-card-alpine'
                    : driver.team.name.toLowerCase().includes('haas')
                    ? 'teamAndDrivers-card-haas'
                    : ''
                }`}
              >
                <Link to={`/driver/${driver.driver.name}`} className="nav-link">
                  <Row className="border-bottom align-items-center w-100 m-0">
                    <Col className="display-6 fontBold py-3">
                      {driver.position}
                    </Col>
                    <Col className="fs-5 fw-bold py-3 ">
                      <div
                        className="d-flex flex-column align-items-end fontWide"
                        style={{ fontSize: '14px' }}
                      >
                        {driver.points > 0 ? driver.points : '0'}

                        <span>PTS</span>
                      </div>
                    </Col>
                  </Row>

                  <Row className="border-top border-bottom align-items-center w-100 m-0">
                    <Col className="fs-5 fw-bold py-3 text-nowrap text-truncate d-flex">
                      <div
                        className={`me-2 ${
                          driver.team.name.toLowerCase().includes('red')
                            ? 'redbull'
                            : driver.team.name.toLowerCase().includes('merc')
                            ? 'mercedes'
                            : driver.team.name.toLowerCase().includes('wil')
                            ? 'williams'
                            : driver.team.name.toLowerCase().includes('fer')
                            ? 'ferrari'
                            : driver.team.name.toLowerCase().includes('alfa')
                            ? 'alfaromeo'
                            : driver.team.name.toLowerCase().includes('alpha')
                            ? 'alphatauri'
                            : driver.team.name.toLowerCase().includes('aston')
                            ? 'astonmartin'
                            : driver.team.name.toLowerCase().includes('mcl')
                            ? 'mclaren'
                            : driver.team.name.toLowerCase().includes('alp')
                            ? 'alpine'
                            : driver.team.name.toLowerCase().includes('haas')
                            ? 'haas'
                            : 'bg-black'
                        }`}
                        style={{ width: '8px' }}
                      >
                        &nbsp;
                      </div>
                      {driver.driver.name}
                    </Col>
                  </Row>

                  <Row className="py-3 justify-content-around w-100 m-0 ">
                    <Row>
                      <Col
                        className="text-black-50"
                        style={{ fontSize: '14px' }}
                      >
                        {driver.team.name}
                      </Col>
                    </Row>
                    <Col className="d-flex align-items-end justify-content-start">
                      <span
                        className={`display-5 fontBold ${
                          driver.team.name.toLowerCase().includes('red')
                            ? 'redbullDriverNumber'
                            : driver.team.name.toLowerCase().includes('merc')
                            ? 'mercedesDriverNumber'
                            : driver.team.name.toLowerCase().includes('wil')
                            ? 'williamsDriverNumber'
                            : driver.team.name.toLowerCase().includes('fer')
                            ? 'ferrariDriverNumber'
                            : driver.team.name.toLowerCase().includes('alfa')
                            ? 'alfaromeoDriverNumber'
                            : driver.team.name.toLowerCase().includes('alpha')
                            ? 'alphatauriDriverNumber'
                            : driver.team.name.toLowerCase().includes('aston')
                            ? 'astonmartinDriverNumber'
                            : driver.team.name.toLowerCase().includes('mcl')
                            ? 'mclarenDriverNumber'
                            : driver.team.name.toLowerCase().includes('alp')
                            ? 'alpineDriverNumber'
                            : driver.team.name.toLowerCase().includes('haas')
                            ? 'haasDriverNumber'
                            : 'bg-black'
                        }`}
                      >
                        {driver.driver.name.toLowerCase().includes('lawson')
                          ? '40'
                          : driver.driver.number}
                      </span>
                      <img
                        src={driver.driver.image}
                        alt="driver logo"
                        style={{ width: '200px' }}
                      />
                    </Col>
                  </Row>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  )
}

export default Drivers

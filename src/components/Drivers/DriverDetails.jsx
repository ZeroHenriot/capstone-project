import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getDriverDetails,
  getDriversBio,
  postDriverBio,
  putDriverBio,
} from '../../redux/action'
import { Col, Container, Row } from 'react-bootstrap'
import DriverDetailsForMobile from '../Mobile/Driver/DriverDetailForMobile'
import { Pencil, Plus } from 'react-bootstrap-icons'
import BiographyModal from './BiographyModal'

const DriverDetails = () => {
  const driver = useSelector((state) => state.driverDetails.content)
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const driversBio = useSelector((state) => state.driversBio.content)
  const [modalShow, setModalShow] = useState(false)
  const [matchingDriver, setMatchingDriver] = useState(null)
  const auth = useSelector((state) => state.auth)
  console.log(auth)
  console.log(driversBio)

  useEffect(() => {
    setTimeout(() => {
      dispatch(getDriverDetails(params.name)), setIsLoading(false)
      dispatch(getDriversBio())
    }, 500)
  }, [])
  useEffect(() => {
    // Trovo il driver corrispondente quando driversBio cambia
    const foundDriver = driversBio.find(
      (bio) => bio.name.toLowerCase() === driver[0]?.name.toLowerCase()
    )
    setMatchingDriver(foundDriver)
  }, [driversBio, driver])

  return (
    <>
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : params.name.toLowerCase() === driver[0]?.name.toLowerCase() ? (
        <Container>
          <Row className=" justify-content-center mt-5">
            <Col xs={11} lg={6} className="overflow-hidden">
              <img
                className="w-100 rounded"
                src={
                  driver[0].name.toLowerCase().includes('verstappen')
                    ? '../../public/img/drivers/verstappen/verstappen.avif'
                    : driver[0].name.toLowerCase().includes('perez')
                    ? '../../public/img/drivers/perez/perez.avif'
                    : driver[0].name.toLowerCase().includes('hamilton')
                    ? '../../public/img/drivers/hamilton/hamilton.avif'
                    : driver[0].name.toLowerCase().includes('russell')
                    ? '../../public/img/drivers/russell/russell.avif'
                    : driver[0].name.toLowerCase().includes('norris')
                    ? '../../public/img/drivers/norris/norris.avif'
                    : driver[0].name.toLowerCase().includes('piastri')
                    ? '../../public/img/drivers/piastri/piastri.avif'
                    : driver[0].name.toLowerCase().includes('zhou')
                    ? '../../public/img/drivers/zhou/zhou.avif'
                    : driver[0].name.toLowerCase().includes('bottas')
                    ? '../../public/img/drivers/bottas/bottas.avif'
                    : driver[0].name.toLowerCase().includes('alonso')
                    ? '../../public/img/drivers/alonso/alonso.avif'
                    : driver[0].name.toLowerCase().includes('stroll')
                    ? '../../public/img/drivers/stroll/stroll.avif'
                    : driver[0].name.toLowerCase().includes('ocon')
                    ? '../../public/img/drivers/ocon/ocon.avif'
                    : driver[0].name.toLowerCase().includes('gasly')
                    ? '../../public/img/drivers/gasly/gasly.avif'
                    : driver[0].name.toLowerCase().includes('ricciardo')
                    ? '../../public/img/drivers/ricciardo/ricciardo.avif'
                    : driver[0].name.toLowerCase().includes('tsunoda')
                    ? '../../public/img/drivers/tsunoda/tsunoda.avif'
                    : driver[0].name.toLowerCase().includes('albon')
                    ? '../../public/img/drivers/albon/albon.avif'
                    : driver[0].name.toLowerCase().includes('sargeant')
                    ? '../../public/img/drivers/sargeant/sargeant.avif'
                    : driver[0].name.toLowerCase().includes('hulkenberg')
                    ? '../../public/img/drivers/hulkenberg/hulkenberg.avif'
                    : driver[0].name.toLowerCase().includes('magnussen')
                    ? '../../public/img/drivers/magnussen/magnussen.avif'
                    : driver[0].name.toLowerCase().includes('leclerc')
                    ? '../../public/img/drivers/leclerc/leclerc.avif'
                    : driver[0].name.toLowerCase().includes('sainz')
                    ? '../../public/img/drivers/sainz/sainz.avif'
                    : '../../public/img/drivers/noDriver/noDriverPhoto.jpg'
                }
                alt={driver[0].name}
              />
              <Row className="display-5 p-4 ps-0">
                <span className="d-flex align-items-center text-black-50 d-none d-md-inline">
                  {driver[0].number}
                  <img
                    className="ms-2"
                    src={`https://flagsapi.com/${driver[0].country.code}/flat/64.png`}
                  ></img>
                </span>
                <span className="fontBold text-black">{driver[0].name}</span>
              </Row>
            </Col>
            <Col xs={11} lg={6} className="driversInfo d-none d-md-block">
              <Row className="d-none d-xl-block">
                <img
                  style={{ width: '190px' }}
                  src={
                    driver[0].name.toLowerCase().includes('verstappen')
                      ? '../../public/img/drivers/verstappen/verstappen helmet.avif'
                      : driver[0].name.toLowerCase().includes('perez')
                      ? '../../public/img/drivers/perez/perez helmet.avif'
                      : driver[0].name.toLowerCase().includes('hamilton')
                      ? '../../public/img/drivers/hamilton/hamilton helmet.avif'
                      : driver[0].name.toLowerCase().includes('russell')
                      ? '../../public/img/drivers/russell/russell helmet.avif'
                      : driver[0].name.toLowerCase().includes('norris')
                      ? '../../public/img/drivers/norris/norris helmet.avif'
                      : driver[0].name.toLowerCase().includes('piastri')
                      ? '../../public/img/drivers/piastri/piastri helmet.avif'
                      : driver[0].name.toLowerCase().includes('zhou')
                      ? '../../public/img/drivers/zhou/zhou helmet.avif'
                      : driver[0].name.toLowerCase().includes('bottas')
                      ? '../../public/img/drivers/bottas/bottas helmet.avif'
                      : driver[0].name.toLowerCase().includes('stroll')
                      ? '../../public/img/drivers/stroll/stroll helmet.avif'
                      : driver[0].name.toLowerCase().includes('ocon')
                      ? '../../public/img/drivers/ocon/ocon helmet.avif'
                      : driver[0].name.toLowerCase().includes('gasly')
                      ? '../../public/img/drivers/gasly/gasly helmet.avif'
                      : driver[0].name.toLowerCase().includes('ricciardo')
                      ? '../../public/img/drivers/ricciardo/ricciardo helmet.avif'
                      : driver[0].name.toLowerCase().includes('tsunoda')
                      ? '../../public/img/drivers/tsunoda/tsunoda helmet.avif'
                      : driver[0].name.toLowerCase().includes('albon')
                      ? '../../public/img/drivers/albon/albon helmet.avif'
                      : driver[0].name.toLowerCase().includes('sargeant')
                      ? '../../public/img/drivers/sargeant/sargeant helmet.avif'
                      : driver[0].name.toLowerCase().includes('hulkenberg')
                      ? '../../public/img/drivers/hulkenberg/hulkenberg helmet.avif'
                      : driver[0].name.toLowerCase().includes('magnussen')
                      ? '../../public/img/drivers/magnussen/magnussen helmet.avif'
                      : driver[0].name.toLowerCase().includes('leclerc')
                      ? '../../public/img/drivers/leclerc/leclerc helmet.avif'
                      : driver[0].name.toLowerCase().includes('sainz')
                      ? '../../public/img/drivers/sainz/sainz helmet.avif'
                      : '../../public/img/drivers/noDriver/noHelmet.png'
                  }
                  alt={driver[0].name}
                />
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">Team</Col>
                  <Col className="fs-5">{driver[0].teams[0].team.name}</Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">Country</Col>
                  <Col className="fs-5">{driver[0].country.name}</Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">Podiums</Col>
                  <Col className="fs-5">{driver[0].podiums}</Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">Points</Col>
                  <Col className="fs-5">{driver[0].career_points}</Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">Grands Prix entered</Col>
                  <Col className="fs-5">{driver[0].grands_prix_entered}</Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">World Championships</Col>
                  <Col className="fs-5">{driver[0].world_championships}</Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">Highest race finish</Col>
                  <Col className="fs-5">
                    {driver[0].highest_race_finish.position} (x
                    {driver[0].highest_race_finish.number})
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">Highest grid position</Col>
                  <Col className="fs-5">{driver[0].highest_grid_position}</Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">Date of birth</Col>
                  <Col className="fs-5">{driver[0].birthdate}</Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <Col className="fontBold fs-5">Place of birth</Col>
                  <Col className="fs-5">{driver[0].birthplace}</Col>
                </div>
              </Row>
            </Col>
            <DriverDetailsForMobile
              driverId={driver[0].id}
              name={driver[0].name}
            />
          </Row>
          <Row className="border-top pt-3 mt-3 justify-content-center justify-content-md-start">
            <span className="fs-2 mb-4">Biography</span>

            <Col xs={11} md={12} className="biography p-2">
              {(() => {
                const matchingDriver = driversBio.find(
                  (bio) =>
                    bio.name.toLowerCase() === driver[0].name.toLowerCase()
                )

                if (matchingDriver) {
                  return (
                    <>
                      {matchingDriver.biography
                        .split('. ')
                        .map((paragraph, paragraphIndex) => (
                          <p
                            key={`${matchingDriver.name}-${paragraphIndex}`}
                            className="paragraph"
                          >
                            {paragraph}.
                          </p>
                        ))}
                      <div>
                        <Pencil
                          style={{ fontSize: '24px', cursor: 'pointer' }}
                          onClick={() => setModalShow(true)}
                          className={`${
                            auth.role === 'Admin' ? 'd-inline' : 'd-none'
                          }`}
                        />
                      </div>
                    </>
                  )
                } else {
                  return (
                    <div
                      className={`${
                        auth.role === 'Admin' ? 'd-inline' : 'd-none'
                      }`}
                    >
                      Add a biography
                      <Plus
                        style={{ fontSize: '40px', cursor: 'pointer' }}
                        onClick={() => setModalShow(true)}
                      />
                    </div>
                  )
                }
              })()}
            </Col>
          </Row>
        </Container>
      ) : null}

      <BiographyModal
        onHide={() => setModalShow(false)}
        show={modalShow}
        driver={params.name}
        existingBiography={matchingDriver ? matchingDriver.biography : ''}
        driverBiographyId={matchingDriver ? matchingDriver.id : ''}
        onSubmit={(bio) => {
          if (matchingDriver) {
            // Se matchingDriver è definito, chiama putDriverBio per l'aggiornamento
            dispatch(putDriverBio(bio, matchingDriver.id))
          } else {
            // Altrimenti, chiama postDriverBio per l'aggiunta
            dispatch(postDriverBio(bio))
          }
        }}
      />
    </>
  )
}

export default DriverDetails

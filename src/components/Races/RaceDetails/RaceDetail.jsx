/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  get2023Races,
  getRaceInfo,
  getRaceRankigs,
  getRaceReport,
} from '../../../redux/action'
import { Col, Container, Row } from 'react-bootstrap'

import PassedRace from './PassedRace'
import FutureRace from './FutureRace'
import { Pencil, Plus } from 'react-bootstrap-icons'
import RaceRportModal from './RaceReportModal'

const RaceDetail = () => {
  const raceRankings = useSelector((state) => state.raceRankings.content)
  const raceInfo = useSelector((state) => state.raceInfo.content[0])
  const [isLoading, setIsLoading] = useState(true)
  const [modalShow, setModalShow] = useState(false)
  const [selectedReportId, setSelectedReportId] = useState(null)
  const auth = useSelector((state) => state.auth)

  const raceReports = useSelector((state) => state.raceReport.content)

  const params = useParams()
  const dispatch = useDispatch()
  const races2023 = useSelector((state) => state.races2023.content)
  useEffect(() => {
    // Reimposta lo stato di isLoading a true ogni volta che il parametro idRace cambia
    setIsLoading(true)

    // Aggiorna i dati della gara e delle classifiche
    dispatch(getRaceRankigs(params.idRace))
    dispatch(getRaceInfo(params.idRace))
    dispatch(get2023Races())
    dispatch(getRaceReport())

    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    // Pulisco il timeout quando il componente si smonta o quando il parametro idRace cambia nuovamente
    return () => clearTimeout(timeoutId)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.idRace])

  let currentRace
  let passedRace
  let futureRace
  const currentRaceIndex = races2023.findIndex(
    (race) => race.id === parseInt(params.idRace)
  )

  if (currentRaceIndex !== -1) {
    currentRace = races2023[currentRaceIndex]
    passedRace = races2023[currentRaceIndex - 1]
    futureRace = races2023[currentRaceIndex + 1]
  }

  return (
    <>
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Row
            style={{ overflow: 'hidden' }}
            className="align-content-center headerRace position-relative w-100 m-0"
          >
            <p className="fontBold display-3 text-white raceName d-flex flex-column align-items-center">
              <span>{raceInfo?.competition.name}</span>
              <span className="fs-3">
                {' '}
                {/* {format(subDays(new Date(raceInfo.date), 2), 'dd')}
            &nbsp;-&nbsp;
            {format(new Date(raceInfo.date), 'dd MMM')} */}
              </span>
            </p>
            <img
              src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677249991/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Las%20Vegas.jpg.transform/9col/image.jpg"
              alt=""
              className="p-0"
            />
          </Row>
          <Container>
            <Row className="justify-content-center justify-content-md-start">
              <Col xs={11} sm={12}>
                <Row className="raceResult mt-5 py-3">
                  <span className="raceReview">RACE REVIEW</span>
                  <Col lg={6}>
                    {raceRankings
                      .filter((race, index) => index < 3)
                      .map((ranking) => (
                        <p
                          key={ranking.id}
                          className="bg-white p-2 d-flex justify-content-between mb-1 rounded"
                        >
                          <span>
                            {ranking.driver.name.split(' ')[0]}{' '}
                            <strong>
                              {ranking.driver.name
                                .split(' ')
                                .slice(1)
                                .join(' ')
                                .toUpperCase()}
                            </strong>
                          </span>{' '}
                          <span
                            className="rounded-pill py-1 d-flex align-items-center justify-content-center"
                            style={{
                              fontSize: '13px',
                              width: '95px',
                              background: '#ededed',
                            }}
                          >
                            {ranking.time}
                          </span>
                        </p>
                      ))}
                    <Link
                      to={`/raceresult/${params.idRace}`}
                      className="nav-link bg-primary my-3 py-2 px-3 rounded raceResultButton"
                      style={{ width: 'fit-content' }}
                    >
                      Race Results
                    </Link>
                  </Col>
                  <Col lg={6}>
                    <Row className="justify-content-evenly">
                      <PassedRace passedRace={passedRace} />
                      <FutureRace futureRace={futureRace} />
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Row className="justify-content-center justify-content-md-start">
                <Row>
                  <span className="fs-1">Race report </span>
                </Row>
                <Col xs={11} md={12} className="raceReportSection p-2">
                  {raceReports.map((report, index) => (
                    <Fragment key={index}>
                      {report.race.toLowerCase() ===
                      raceInfo?.competition.name.toLowerCase() ? (
                        <div>
                          {report.report
                            .split('. ')
                            .map((paragraph, paragraphIndex) => (
                              <p
                                key={`${index}-${paragraphIndex}`}
                                className="paragraph"
                              >
                                {paragraph}.
                              </p>
                            ))}
                          <Pencil
                            style={{ fontSize: '24px', cursor: 'pointer' }}
                            onClick={() => setModalShow(true)}
                            className={`${
                              auth.role === 'Admin' ? 'd-inline' : 'd-none'
                            }`}
                          />
                        </div>
                      ) : (
                        ''
                      )}
                    </Fragment>
                  ))}
                  {!raceReports.some(
                    (report) =>
                      report.race.toLowerCase() ===
                      raceInfo?.competition.name.toLowerCase()
                  ) && (
                    <>
                      Add a report for this race{' '}
                      <Plus
                        style={{ fontSize: '40px', cursor: 'pointer' }}
                        onClick={() => setModalShow(true)}
                        className={`${
                          auth.role === 'Admin' ? 'd-inline' : 'd-none'
                        }`}
                      />
                    </>
                  )}
                </Col>
              </Row>
            </Row>
          </Container>
          <RaceRportModal
            onHide={() => setModalShow(false)}
            show={modalShow}
            race={params.idRace}
            raceReports={raceReports}
          />
        </>
      )}
    </>
  )
}

export default RaceDetail

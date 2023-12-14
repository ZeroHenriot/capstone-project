import { format, subDays } from 'date-fns'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FutureRace = ({ futureRace }) => {
  return (
    <>
      <Col
        xs={11}
        sm={5}
        className="py-2 scheduleCard position-relative d-flex flex-column justify-content-between"
      >
        {futureRace ? (
          <Link className="nav-link" to={`/schedule/race/${futureRace.id}`}>
            <Row className=" fontWide border-bottom pb-2 mx-2 justify-content-between">
              <span className="p-0" style={{ width: 'fit-content' }}>
                {`${format(
                  subDays(new Date(futureRace.date), 2),
                  'dd'
                )} - ${format(new Date(futureRace.date), 'dd')}`}
              </span>
              <div
                className="d-flex align-items-center justify-content-between p-0"
                style={{ width: 'fit-content' }}
              >
                <span
                  className="bg-black text-white rounded px-2"
                  style={{ width: 'fit-content' }}
                >{`${format(new Date(futureRace.date), 'MMM')}`}</span>
              </div>
            </Row>
            <Row className="border-bottom pb-2 mx-2">
              <span className="fontBold p-0">
                {futureRace.competition.location.country}
              </span>
              <span className="p-0 d-none d-xl-inline">
                {futureRace.competition.name}
              </span>
            </Row>
            <Row
              className=" pb-2 mx-2"
              style={{
                backgroundImage: `url(${'../../public/img/assests/plus-x1.avif'})`,
              }}
            >
              <img
                src={futureRace.circuit.image}
                alt=""
                style={{ maxHeight: '210px' }}
              />
            </Row>
          </Link>
        ) : (
          <Link
            className="nav-link h-100 justify-content-center align-items-center"
            to={`/schedule/`}
          >
            <div className="h-100 d-flex justify-content-center align-items-center fs-5">
              This was the last race
            </div>
          </Link>
        )}
      </Col>
    </>
  )
}

export default FutureRace

import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { get2023Races } from '../../redux/action'
import { format, subDays } from 'date-fns'
import { Link } from 'react-router-dom'

const ScheduledRaces = () => {
  const races = useSelector((state) => state.races2023.content)
  const [isLoading, setIsLoading] = useState(true)
  console.log(races)
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(get2023Races()), setIsLoading(false)
    }, 500)
  }, [])
  return (
    <>
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <Container className="mt-5">
          <Row className="justify-content-center justify-content-sm-start">
            {races.map((race, index) => (
              <Col
                xs={11}
                sm={6}
                lg={3}
                className="scheduleCard my-3 py-2 position-relative d-flex flex-column justify-content-between"
                key={race.id}
              >
                <Link className="nav-link" to={`race/${race.id}`}>
                  <span className=" position-absolute round px-2">
                    round {index + 1}
                  </span>
                  <Row className="flex-column fontWide border-bottom pb-2 mx-2">
                    <span className="p-0">
                      {`${format(
                        subDays(new Date(race.date), 2),
                        'dd'
                      )} - ${format(new Date(race.date), 'dd')}`}
                    </span>
                    <div className="d-flex align-items-center justify-content-between p-0">
                      <span
                        className="bg-black text-white rounded px-2"
                        style={{ width: 'fit-content' }}
                      >{`${format(new Date(race.date), 'MMM')}`}</span>
                      <span className="fontBold d-flex align-items-center">
                        {race.status.toLowerCase() === 'completed' ? (
                          <img
                            src="public/img/assests/flag-asset.avif"
                            className="w-100 ms-2"
                            style={{ height: '24px' }}
                            alt=""
                          />
                        ) : (
                          race.status
                        )}
                      </span>
                    </div>
                  </Row>
                  <Row className="border-bottom pb-2 mx-2">
                    <span className="fontBold p-0">
                      {race.competition.location.country}
                    </span>
                    <span className="p-0 d-lg-none d-xl-inline">
                      {race.competition.name}
                    </span>
                  </Row>
                  <Row
                    className=" pb-2 mx-2"
                    style={{
                      backgroundImage: `url(${'../public/img/assests/plus-x1.avif'})`,
                    }}
                  >
                    <img
                      src={race.circuit.image}
                      alt=""
                      style={{ maxHeight: '210px' }}
                    />
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

export default ScheduledRaces

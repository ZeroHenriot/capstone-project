import { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteRaceReport,
  getRaceInfo,
  postRaceReport,
  putRaceReport,
} from '../../../redux/action'

const RaceRportModal = ({ onHide, show, race, raceReports }) => {
  const dispatch = useDispatch()
  const raceInfo = useSelector((state) => state.raceInfo.content[0])

  useEffect(() => {
    dispatch(getRaceInfo(race))
  }, [race])

  // filtro i report delle gare per ottenere il report della gara specifica

  const filteredRaceReports = raceReports.filter(
    (report) =>
      report.race.toLowerCase() === raceInfo.competition.name.toLowerCase()
  )

  const [newRaceReport, setNewRaceReport] = useState({
    race: raceInfo.competition.name,
    report: filteredRaceReports[0]?.report,
  })

  // funzione per il cambiamento dei dati

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewRaceReport((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  console.log('aaaaaaasdas', filteredRaceReports)

  return (
    <Modal size={'lg'} show={show} onHide={onHide}>
      <Modal.Header closeButton onClick={() => onHide()}>
        <Modal.Title id="contained-modal-title-center">
          Add a Report
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="p-3">
          <Form>
            <Form.Group className="my-3" controlId="formGroupEmail">
              <Form.Label>Race name</Form.Label>
              <Form.Control
                type="text"
                name="race"
                size="sm"
                defaultValue={raceInfo.competition.name}
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Report</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                name="report"
                defaultValue={
                  filteredRaceReports.length > 0
                    ? filteredRaceReports[0].report
                    : ''
                }
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => (
            dispatch(putRaceReport(newRaceReport, filteredRaceReports[0].id)),
            onHide()
          )}
          className={`rounded-pill ${
            filteredRaceReports[0]?.report ? 'd-inlline' : 'd-none'
          }`}
        >
          Save
        </Button>
        <Button
          onClick={() => {
            if (filteredRaceReports.length > 0) {
              dispatch(deleteRaceReport(filteredRaceReports[0].id))
            }
            onHide()
          }}
          className={`rounded-pill ${
            filteredRaceReports[0]?.report ? 'd-inlline' : 'd-none'
          }`}
        >
          Delete
        </Button>
        <Button
          onClick={() => (dispatch(postRaceReport(newRaceReport)), onHide())}
          className={`rounded-pill ${
            !filteredRaceReports[0]?.report ? 'd-inlline' : 'd-none'
          }`}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RaceRportModal

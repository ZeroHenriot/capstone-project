import { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteDriverBio } from '../../redux/action'

const BiographyModal = ({
  onHide,
  show,
  driver,
  existingBiography,
  onSubmit,
  driverBiographyId,
}) => {
  const dispatch = useDispatch()

  const [newDriverBio, setNewDriverBio] = useState({
    name: driver,
    biography: existingBiography,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewDriverBio((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  console.log('id pilota', driverBiographyId)

  const handleAddBiography = async () => {
    try {
      onSubmit(newDriverBio)
      onHide()
    } catch (error) {
      console.error("Errore durante l'operazione sulla biografia:", error)
    }
  }

  useEffect(() => {
    // Aggiorna la biografia nel caso in cui cambi nella prop
    setNewDriverBio((prevData) => ({
      ...prevData,
      biography: existingBiography || '',
    }))
  }, [existingBiography])

  return (
    <Modal size={'lg'} show={show} onHide={onHide}>
      <Modal.Header closeButton onClick={() => onHide()}>
        <Modal.Title id="contained-modal-title-center">
          Add a Biography
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="p-3">
          <Form>
            <Form.Group className="my-3" controlId="formGroupEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                size="sm"
                defaultValue={driver}
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Biography</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="biography"
                defaultValue={newDriverBio.biography}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="rounded-pill px-4"
          onClick={() => {
            handleAddBiography(), onHide()
          }}
        >
          {existingBiography === '' ? 'Add' : 'Save'}
        </Button>
        <Button
          className={`rounded-pill ${
            existingBiography === '' ? 'd-none' : 'd-block'
          } px-4`}
          onClick={() => {
            dispatch(deleteDriverBio(driverBiographyId)), onHide()
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BiographyModal

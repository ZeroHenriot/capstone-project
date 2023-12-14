import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/action'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const [showFeedback, setShowFeedback] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  })

  // funzione per la registrazione utente

  const handleRegistration = async (e) => {
    e.preventDefault()

    try {
      await dispatch(
        registerUser({
          ...formData,
          role: 'User',
        })
      )
      setShowFeedback(true)
      setFormData({ email: '', username: '', password: '' })
    } catch (error) {
      console.error('Errore durante la registrazione:', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <Container className="d-flex flex-column h-100 justify-content-center">
      <Row className="justify-content-center">
        <Col xs={11} md={6}>
          <Form onSubmit={handleRegistration}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
      {showFeedback && (
        <Row className="justify-content-center mt-3">
          <Col xs={11} md={6}>
            <Alert role="alert" variant="success" aria-live="assertive">
              Registration successful! You can now login.{' '}
              <Link to="/login">Click here</Link>
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default RegisterPage

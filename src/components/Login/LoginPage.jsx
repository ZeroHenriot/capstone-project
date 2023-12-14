import { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Alert,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getUsers, loginUser } from '../../redux/action'
import { Eye } from 'react-bootstrap-icons'

const LoginPage = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.getUsers.content)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const handleLogin = (event) => {
    event.preventDefault()

    // Trovo l'utente corrispondente alle credenziali inserite

    const user = users.find(
      (user) => user.username === username && user.password === password
    )

    // SE l'utente è stato trovato, viene effettuato il login altrimenti ottengo il messaggio 'invalid credentials'

    if (user) {
      const userLogged = { ...user }
      dispatch(loginUser(userLogged))
      localStorage.setItem('user', JSON.stringify(userLogged))
      console.log('Login successful!')
      navigate('/')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <Container className="d-flex flex-column h-100 justify-content-center">
      <Row className="justify-content-center">
        <Col xs={11} md={6}>
          {error && <Alert variant="danger">{error}</Alert>}{' '}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputGroup.Text>
                  <Eye
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                  />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
            <p className="d-flex align-items-center mt-3">
              Don't have an account yet?{' '}
              <Link
                to="/register"
                className="nav-link bg-primary rounded ms-2 py-2 px-1 text-white"
                style={{ width: 'fit-content' }}
              >
                Register here
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage

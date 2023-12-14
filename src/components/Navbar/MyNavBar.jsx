import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { List, Person } from 'react-bootstrap-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/f1_logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/action'
import { useState } from 'react'
import NavbarMobile from '../Mobile/Navbar/NavbarMobile'

const MyNavBar = () => {
  const location = useLocation()
  const auth = useSelector((state) => state.auth)
  const [showMenu, setShowMenu] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    // Esegui il logout
    dispatch(logoutUser())

    // Rimuovi l'utente dal localStorage
    localStorage.removeItem('user')
  }

  const handleClick = () => {
    {
      showMenu === false ? setShowMenu(true) : setShowMenu(false)
    }
  }
  return (
    <>
      <Navbar expand="lg pt-4 bg-primary">
        <Container className="pb-3">
          <List
            className="d-lg-none"
            style={{ width: '24px', height: '100%', cursor: 'pointer' }}
            color="white"
            onClick={handleClick}
          ></List>
          <Link to="/">
            <img src={logo} style={{ width: '90px' }}></img>
          </Link>

          <div className="d-flex align-items-center">
            <Nav className="me-auto d-none d-lg-flex">
              <Link
                to="/"
                className={`nav-link me-3 navbarLink ${
                  location.pathname === '/'
                    ? 'active text-white linkBorder'
                    : 'text-black'
                }`}
              >
                Home
              </Link>
              <Link
                to="/schedule"
                className={`nav-link me-3 navbarLink ${
                  location.pathname.includes('/schedule')
                    ? 'active text-white linkBorder'
                    : 'text-black'
                }`}
              >
                Schedule
              </Link>
              <Link
                to="/drivers"
                className={`nav-link me-3 navbarLink ${
                  location.pathname.includes('/driver')
                    ? 'active text-white linkBorder'
                    : 'text-black'
                }`}
              >
                Drivers
              </Link>
              <Link
                to="/teams"
                className={`nav-link me-3 navbarLink ${
                  location.pathname.includes('/team')
                    ? 'active text-white linkBorder'
                    : 'text-black'
                }`}
              >
                Teams
              </Link>
              <Link
                to="/quiz"
                className={`nav-link me-3 navbarLink ${
                  location.pathname.includes('/quiz')
                    ? 'active text-white linkBorder'
                    : 'text-black'
                } ${auth.isAuthenticated === true ? 'd-inline' : 'd-none'}`}
              >
                Quiz
              </Link>
            </Nav>

            <Link
              to="/login"
              className={`nav-link navbarLink ${
                location.pathname.includes('/login') ||
                location.pathname.includes('/register')
                  ? 'active text-white'
                  : 'text-black'
              } ${auth.isAuthenticated === true ? 'd-none' : 'd-inline'}`}
            >
              <Person
                className={`ms-5 ${
                  auth.isAuthenticated === true ? 'd-none' : 'd-inline'
                }`}
                style={{ width: '20px', height: '20px' }}
              />
            </Link>
            <Dropdown
              align="end"
              className={`${
                auth.isAuthenticated === true ? 'd-inline' : 'd-none'
              } ${
                location.pathname.includes('/login') ||
                location.pathname.includes('/register')
                  ? 'active text-white'
                  : 'text-black'
              }`}
            >
              <Dropdown.Toggle className="p-0" id="dropdown-basic">
                {auth.isAuthenticated ? auth.username : ''}
              </Dropdown.Toggle>

              <Dropdown.Menu className="mt-2">
                <Dropdown.Item onClick={() => (handleLogout(), navigate('/'))}>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
      <NavbarMobile show={showMenu} />
    </>
  )
}

export default MyNavBar

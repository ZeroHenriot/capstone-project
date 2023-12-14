import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavbarMobile = ({ show }) => {
  const auth = useSelector((state) => state.auth)
  return (
    <>
      <Navbar
        expand={`lg pt-4 bg-primary d-lg-none ${
          show === true ? 'd-flex' : 'd-none'
        } navbar-mobile`}
      >
        <Container className="pb-3">
          <div className="d-flex align-items-center w-100">
            <Nav className="me-auto flex-sm-row justify-content-between w-100">
              <Link
                to="/"
                className={`nav-link me-3 px-1 navbarLink ${
                  location.pathname === '/'
                    ? 'active text-white linkBorder'
                    : 'text-black'
                }`}
              >
                Home
              </Link>
              <Link
                to="/schedule"
                className={`nav-link me-3 px-1 navbarLink ${
                  location.pathname.includes('/schedule')
                    ? 'active text-white linkBorder'
                    : 'text-black'
                }`}
              >
                Schedule
              </Link>
              <Link
                to="/drivers"
                className={`nav-link me-3 px-1 navbarLink ${
                  location.pathname.includes('/driver')
                    ? 'active text-white linkBorder'
                    : 'text-black'
                }`}
              >
                Drivers
              </Link>
              <Link
                to="/teams"
                className={`nav-link me-3 px-1 navbarLink ${
                  location.pathname.includes('/team')
                    ? 'active text-white linkBorder'
                    : 'text-black'
                }`}
              >
                Teams
              </Link>
              <Link
                to="/quiz"
                className={`nav-link me-3 px-1 navbarLink ${
                  location.pathname.includes('/quiz')
                    ? 'active text-white linkBorder'
                    : 'text-black'
                } ${auth.isAuthenticated === true ? 'd-inline' : 'd-none'}`}
              >
                Quiz
              </Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
export default NavbarMobile

import { Container } from 'react-bootstrap'
import { Discord, Github, Instagram, Linkedin } from 'react-bootstrap-icons'

const MyFooter = () => {
  return (
    <div className="bg-dark">
      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 text-white">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 ">
              {new Date().getFullYear()} Capstone Project by Catalin Darii
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                href="https://www.instagram.com/catalin_darii/"
                target="_blank"
                rel="noreferrer noopener"
                title="Instagram"
              >
                <Instagram size={24} />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://github.com/ZeroHenriot"
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub"
              >
                <Github size={24} />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://www.linkedin.com/in/catalin-darii-frontend/"
                target="_blank"
                rel="noreferrer noopener"
                title="Instagram"
              >
                <Linkedin size={24} />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://discord.com/channels/409742361443434496"
                target="_blank"
                rel="noreferrer noopener"
                title="Instagram"
              >
                <Discord size={24} />
              </a>
            </li>
          </ul>
        </footer>
      </Container>
    </div>
  )
}

export default MyFooter

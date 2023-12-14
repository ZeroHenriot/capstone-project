import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SecondDriver = ({ team }) => {
  return (
    <>
      <Col
        md={6}
        className="d-flex flex-column justify-content-between p-0 border-end border-start SecondDriver"
      >
        <Link
          to={`/driver/${
            team.name.toLowerCase().includes('red')
              ? 'Sergio Perez'
              : team.name.toLowerCase().includes('mercedes')
              ? 'George Russell'
              : team.name.toLowerCase().includes('mclaren')
              ? 'Oscar Piastri'
              : team.name.toLowerCase().includes('ferrari')
              ? 'Carlos Sainz Jr'
              : team.name.toLowerCase().includes('alpha')
              ? 'Daniel Ricciardo'
              : team.name.toLowerCase().includes('williams')
              ? 'Logan Sargeant'
              : team.name.toLowerCase().includes('alpine')
              ? 'Pierre Gasly'
              : team.name.toLowerCase().includes('haas')
              ? 'Nico Hulkenberg'
              : team.name.toLowerCase().includes('aston')
              ? 'Lance Stroll'
              : team.name.toLowerCase().includes('alfa')
              ? 'Zhou Guanyu'
              : ''
          }`}
          className="nav-link"
        >
          <img
            src={
              team.name.toLowerCase().includes('red')
                ? '../public/img/drivers/perez/perez.avif'
                : team.name.toLowerCase().includes('mercedes')
                ? '../public/img/drivers/russell/russell.avif'
                : team.name.toLowerCase().includes('mclaren')
                ? '../public/img/drivers/piastri/piastri.avif'
                : team.name.toLowerCase().includes('ferrari')
                ? '../public/img/drivers/sainz/sainz.avif'
                : team.name.toLowerCase().includes('alpha')
                ? '../public/img/drivers/ricciardo/ricciardo.avif'
                : team.name.toLowerCase().includes('williams')
                ? '../public/img/drivers/sargeant/sargeant.avif'
                : team.name.toLowerCase().includes('alpine')
                ? '../public/img/drivers/gasly/gasly.avif'
                : team.name.toLowerCase().includes('haas')
                ? '../public/img/drivers/hulkenberg/hulkenberg.avif'
                : team.name.toLowerCase().includes('aston')
                ? '../public/img/drivers/stroll/stroll.avif'
                : team.name.toLowerCase().includes('alfa')
                ? '../public/img/drivers/zhou/zhou.avif'
                : ''
            }
            alt=""
            className="w-100 SecondDriverImage"
          />
          <div className=" d-flex flex-column justify-content-around p-3">
            <p className="fs-1 fontBold">
              {team.name.toLowerCase().includes('red')
                ? '11'
                : team.name.toLowerCase().includes('mercedes')
                ? '63'
                : team.name.toLowerCase().includes('mclaren')
                ? '81'
                : team.name.toLowerCase().includes('ferrari')
                ? '55'
                : team.name.toLowerCase().includes('alpha')
                ? '3'
                : team.name.toLowerCase().includes('williams')
                ? '2'
                : team.name.toLowerCase().includes('alpine')
                ? '10'
                : team.name.toLowerCase().includes('haas')
                ? '27'
                : team.name.toLowerCase().includes('aston')
                ? '18'
                : team.name.toLowerCase().includes('alfa')
                ? '24'
                : ''}
            </p>
            <div>
              <p className="fs-5 mb-1">
                {team.name.toLowerCase().includes('red')
                  ? 'Sergio Perez'
                  : team.name.toLowerCase().includes('mercedes')
                  ? 'George Russell'
                  : team.name.toLowerCase().includes('mclaren')
                  ? 'Oscar Piastri'
                  : team.name.toLowerCase().includes('ferrari')
                  ? 'Carlos Sainz'
                  : team.name.toLowerCase().includes('alpha')
                  ? 'Daniel Ricciardo'
                  : team.name.toLowerCase().includes('williams')
                  ? 'Logan Sargeant'
                  : team.name.toLowerCase().includes('alpine')
                  ? 'Pierre Gasly'
                  : team.name.toLowerCase().includes('haas')
                  ? 'Nico Hulkenberg'
                  : team.name.toLowerCase().includes('aston')
                  ? 'Lance Stroll'
                  : team.name.toLowerCase().includes('alfa')
                  ? 'Zhou Guanyu'
                  : ''}
              </p>
              <p style={{ fontSize: '14px' }}>{team.name}</p>
            </div>
          </div>
        </Link>
      </Col>
    </>
  )
}
export default SecondDriver

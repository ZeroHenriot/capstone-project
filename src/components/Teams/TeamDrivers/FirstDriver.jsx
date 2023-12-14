import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FirstDriver = ({ team }) => {
  return (
    <>
      <Col
        md={6}
        className="d-flex flex-column justify-content-between p-0 border-end border-start FirstDriver"
      >
        <Link
          to={`/driver/${
            team.name.toLowerCase().includes('red')
              ? 'Max Verstappen'
              : team.name.toLowerCase().includes('mercedes')
              ? 'Lewis Hamilton'
              : team.name.toLowerCase().includes('mclaren')
              ? 'Lando Norris'
              : team.name.toLowerCase().includes('ferrari')
              ? 'Charles Leclerc'
              : team.name.toLowerCase().includes('alpha')
              ? 'Yuki Tsunoda'
              : team.name.toLowerCase().includes('williams')
              ? 'Alexander Albon'
              : team.name.toLowerCase().includes('alpine')
              ? 'Esteban Ocon'
              : team.name.toLowerCase().includes('haas')
              ? 'Kevin Magnussen'
              : team.name.toLowerCase().includes('aston')
              ? 'Fernando Alonso'
              : team.name.toLowerCase().includes('alfa')
              ? 'Valtteri Bottas'
              : ''
          }`}
          className="nav-link"
        >
          <img
            src={
              team.name.toLowerCase().includes('red')
                ? '../public/img/drivers/verstappen/verstappen.avif'
                : team.name.toLowerCase().includes('mercedes')
                ? '../public/img/drivers/hamilton/hamilton.avif'
                : team.name.toLowerCase().includes('mclaren')
                ? '../public/img/drivers/norris/norris.avif'
                : team.name.toLowerCase().includes('ferrari')
                ? '../public/img/drivers/leclerc/leclerc.avif'
                : team.name.toLowerCase().includes('alpha')
                ? '../public/img/drivers/tsunoda/tsunoda.avif'
                : team.name.toLowerCase().includes('williams')
                ? '../public/img/drivers/albon/albon.avif'
                : team.name.toLowerCase().includes('alpine')
                ? '../public/img/drivers/ocon/ocon.avif'
                : team.name.toLowerCase().includes('haas')
                ? '../public/img/drivers/magnussen/magnussen.avif'
                : team.name.toLowerCase().includes('aston')
                ? '../public/img/drivers/alonso/alonso.avif'
                : team.name.toLowerCase().includes('alfa')
                ? '../public/img/drivers/bottas/bottas.avif'
                : ''
            }
            alt=""
            className="w-100 FirstDriverImage"
          />
          <div className=" d-flex flex-column justify-content-around p-3">
            <p className="fs-1 fontBold">
              {team.name.toLowerCase().includes('red')
                ? '1'
                : team.name.toLowerCase().includes('mercedes')
                ? '44'
                : team.name.toLowerCase().includes('mclaren')
                ? '4'
                : team.name.toLowerCase().includes('ferrari')
                ? '16'
                : team.name.toLowerCase().includes('alpha')
                ? '22'
                : team.name.toLowerCase().includes('williams')
                ? '23'
                : team.name.toLowerCase().includes('alpine')
                ? '31'
                : team.name.toLowerCase().includes('haas')
                ? '20'
                : team.name.toLowerCase().includes('aston')
                ? '14'
                : team.name.toLowerCase().includes('alfa')
                ? '77'
                : ''}
            </p>
            <div>
              <p className="fs-5 mb-1">
                {team.name.toLowerCase().includes('red')
                  ? 'Max Verstappen'
                  : team.name.toLowerCase().includes('mercedes')
                  ? 'Lewis Hamilton'
                  : team.name.toLowerCase().includes('mclaren')
                  ? 'Lando Norris'
                  : team.name.toLowerCase().includes('ferrari')
                  ? 'Charles Leclerc'
                  : team.name.toLowerCase().includes('alpha')
                  ? 'Yuki Tsunoda'
                  : team.name.toLowerCase().includes('williams')
                  ? 'Alexander Albon'
                  : team.name.toLowerCase().includes('alpine')
                  ? 'Esteban Ocon'
                  : team.name.toLowerCase().includes('haas')
                  ? 'Kevin Magnussen'
                  : team.name.toLowerCase().includes('aston')
                  ? 'Fernando Alonso'
                  : team.name.toLowerCase().includes('alfa')
                  ? 'Valtteri Bottas'
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
export default FirstDriver

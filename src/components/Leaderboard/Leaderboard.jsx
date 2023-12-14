import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeaderboard } from '../../redux/action'
import { Col, Container, Row } from 'react-bootstrap'
import { SlashSquareFill } from 'react-bootstrap-icons'

const Leaderboard = () => {
  const leaderboard = useSelector((state) => state.leaderboard.content)
  const currentUser = useSelector((state) => state.auth.username)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    dispatch(getLeaderboard())
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  // Ottengo gli utenti in base all'ordine decrescente dei punteggi

  const sortedLeaderboard = [...leaderboard].sort((a, b) => b.points - a.points)

  const maxScores = {}

  // Filtro i punteggi per ottenere il massimo punteggio di cisacun utente

  const uniqueLeaderboard = sortedLeaderboard.filter((player) => {
    if (!maxScores[player.user] || maxScores[player.user] < player.points) {
      maxScores[player.user] = player.points
      return true
    }
    return false
  })
  return (
    <Container className="h-100">
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <Row className="h-100 p-3 justify-content-center">
          <Col sx={11} md={9} className="p-3 leaderboard">
            <p className="display-5 fontBold text-black">LEADERBOARD</p>
            {uniqueLeaderboard.map((player, index) => (
              <>
                {player.role !== 'Admin' ? (
                  <Row key={index} className="fs-4">
                    <Col
                      xs={2}
                      sm={1}
                      className="d-flex align-items-center justify-content-between"
                    >
                      {index}
                      {index === 1 ? (
                        <SlashSquareFill
                          className="d-none d-lg-inline"
                          style={{ minWidth: '24px' }}
                          color="gold"
                        />
                      ) : index === 2 ? (
                        <SlashSquareFill
                          className="d-none d-lg-inline"
                          style={{ minWidth: '24px' }}
                          color="silver"
                        />
                      ) : index === 3 ? (
                        <SlashSquareFill
                          className="d-none d-lg-inline"
                          style={{ minWidth: '24px' }}
                          color="darkgoldenrod"
                        />
                      ) : (
                        ''
                      )}
                    </Col>{' '}
                    <Col
                      className={`text-truncate ${
                        player.user === currentUser
                          ? 'fontBold text-primary'
                          : ''
                      }`}
                    >
                      {player.user === currentUser ? 'You' : player.user}
                    </Col>{' '}
                    <Col className="text-end text-sm-start">
                      {player.points}
                    </Col>
                  </Row>
                ) : (
                  ''
                )}
              </>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  )
}
export default Leaderboard

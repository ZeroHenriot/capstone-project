import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, setLeaderboard } from '../../redux/action'

const ResultModal = ({ show, onHide, score, totalQuestions, userAnswers }) => {
  const user = useSelector((state) => state.auth)
  const [leaderboardData, setLeaderboardData] = useState({
    user: user.username,
    points: score,
    role: user.role,
  })
  console.log('modal user', user)
  console.log('modal show', show)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
    setLeaderboardData({
      ...leaderboardData,
      user: user.username,
      points: score,
      role: user.role,
    })
    dispatch(setLeaderboard(leaderboardData))
  }, [score, user])

  return (
    <Modal size={'lg'} show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Quiz result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You answered correctly to {score} out of {totalQuestions} questions.
        </p>
        <p>Answer details:</p>
        <ul>
          {userAnswers.map((answer, index) => (
            <li key={index}>
              Question {answer.questionIndex + 1}:{' '}
              {answer.isCorrect ? 'Correct' : 'Wrong'}
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  )
}

export default ResultModal

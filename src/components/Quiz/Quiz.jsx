import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuizQuestions } from '../../redux/action'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ResultModal from './ResultModal'
import { Link, useNavigate } from 'react-router-dom'

const Quiz = () => {
  const dispatch = useDispatch()
  const quizQuestions = useSelector((state) => state.quizQuestions.content)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [modalShow, setModalShow] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [startQuiz, setStartQuiz] = useState(false)
  const auth = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      dispatch(getQuizQuestions())
      setIsLoading(false)
    }, 500)
  }, [])

  // shuffle domande

  const shuffledQuestions = [...quizQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 20)

  // sistema di selezione domande e assegnazione punti in caso di domande corrette

  const handleAnswerClick = (selectedOption, correctAnswer) => {
    const isCorrect = selectedOption === correctAnswer
    setUserAnswers([
      ...userAnswers,
      { questionIndex: currentQuestionIndex, isCorrect },
    ])
    if (isCorrect) {
      setScore(score + 1)
    }
    goToNextQuestion()
  }

  // sistema di passaggio alla domanda successiva

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handleCloseResultModal = () => {
    setModalShow(false)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setStartQuiz(false)
    setScore(0)
    navigate('/leaderboard')
  }

  // console.log('modalShow:', modalShow)

  return (
    <>
      {isLoading ? (
        <div className="vh-100 d-flex display-1 justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
          <div className={`${startQuiz ? 'd-none' : 'd-block'} fs-2`}>
            Are you ready to start the quiz?{' '}
            <Button onClick={() => setStartQuiz(true)}>Start</Button>
            <p className="d-flex mt-3">
              See the{' '}
              <span className="ms-2 text-primary">
                <Link to="/leaderboard" className="nav-link">
                  leaderboard
                </Link>
              </span>
            </p>
          </div>
          <Row
            className={`justify-content-center ${
              startQuiz ? 'd-flex' : 'd-none'
            }`}
          >
            <Col xs={11} md={12}>
              {currentQuestionIndex < shuffledQuestions.length ? (
                <div>
                  <p className="fs-2">
                    {shuffledQuestions[currentQuestionIndex].question}{' '}
                    <span>
                      {currentQuestionIndex + 1}/{shuffledQuestions.length}
                    </span>
                  </p>
                  <Row className="justify-content-between">
                    {shuffledQuestions[currentQuestionIndex].options.map(
                      (option, optionIndex) => (
                        <Col key={optionIndex} xs={12} md={6} className="mb-3">
                          <div
                            className="quizAnswer fs-3 rounded px-2 px-1 text-black"
                            onClick={() =>
                              handleAnswerClick(
                                option,
                                shuffledQuestions[currentQuestionIndex]
                                  .correctAnswer
                              )
                            }
                            style={{
                              cursor: 'pointer',
                            }}
                          >
                            {option}
                          </div>
                        </Col>
                      )
                    )}
                    <p
                      className={`${
                        auth.role === 'Admin' ? 'd-inline' : 'd-none'
                      }`}
                    >
                      {shuffledQuestions[currentQuestionIndex].correctAnswer}
                    </p>
                  </Row>
                </div>
              ) : (
                <>
                  <ResultModal
                    show={
                      currentQuestionIndex === shuffledQuestions.length &&
                      currentQuestionIndex !== 0
                    }
                    onHide={handleCloseResultModal}
                    score={score}
                    totalQuestions={shuffledQuestions.length}
                    userAnswers={userAnswers}
                  />
                </>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default Quiz

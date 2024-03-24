import {useState} from 'react'
import questions from './constants'

const Quiz = () => {
 const [currentQuestion, setCurrentQuestion] = useState(0)
 const [score, setScore] = useState(0)
 const [showResult, setShowResult] = useState(false)

 const handleAnswerButtonClick = (answer) => {
    if(answer === questions[currentQuestion].answer) {
        setScore(score + 1)
    }
    if(currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1)
    } else {
        setShowResult(true)
    }
 }
 const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
 }
  return (
    <div className='text-center'>
    <h2 className='text-3xl font-bold text-purple-500 mt-5 py-2'>Quiz App</h2>
      {showResult ? <>
        <h2 className='text-green-800'>Your score is {score} out of {questions.length}</h2>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'  onClick={() => handleRestartQuiz()}>Restart Quiz</button>
      </>: <>
        <p className='text-2xl font-sans font-bold text-green-500'>
          {questions[currentQuestion].question}
        </p>
            {questions[currentQuestion].options.map((option, index) => (
                <button key={index} className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3' onClick={() => handleAnswerButtonClick(option)}>{option}</button>
            ))} 
      </>}
    </div>
  )
}

export default Quiz

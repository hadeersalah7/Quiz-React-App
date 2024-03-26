import { useState } from 'react'
import QUESTIONS from "../questions"
import quizCompleted from "../assets/quiz-complete.png"
import QuizTimer from './QuizTimer'
export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([])
    const activeQuestionIndex = userAnswer.length
    
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length
    const handleAddAnswer = (selectedAnswer) => {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer]
        })
    }
    if (quizIsCompleted) {
        return <div id='summary'>
            <img src={quizCompleted} alt='Trophy Image'/>
            <h2>Quiz Completed! ^^</h2>
        </div>
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(() => Math.random() - 0.5)
    return (
        <div id='quiz'>
            <div id='question'>
                <QuizTimer onTimeout={() => handleAddAnswer(null)} timer={10000}/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer) =>
                        <li key={answer} className='answer'>
                            <button onClick={() => handleAddAnswer(answer)}>{answer}</button>
                        </li>)}
                </ul>
            </div>
        </div>

    )
}
